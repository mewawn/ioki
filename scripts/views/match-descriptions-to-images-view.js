define(
    [
        'jquery',
        'backbone',
        'underscore',
        'tpl!scripts/templates/match-descriptions-to-images'
    ],
    function (
        $,
        Backbone,
        _,
        tpl
    ) {
        'use strict';

        var matchDescriptionsToImagesView = Backbone.View.extend({

            initialize: function (options) {
                var that = this;
                this.utilsView = options.utilsView;
                this.descriptionsSection = this.$('#match-descriptions-to-images');
                this.checkExercise2 = this.$('#check-exercise-2');
                this.collection.fetch({
                    success: function(collection) {
                        _.each(collection.models, function (item) {
                            that.showItems(item.get('name'), item.get('value'), item.get('attribute'));
                        });
                    }
                });
                this.$el.on('focusin', '.number', function () {
                    that.utilsView.triggerExcerciseStatus(that.checkExercise2, false);
                });
            },

            events: {
                "click #check-exercise-2": "validate",
                "focusout .number": "saveChanges"
            },

            showItems: function (name, value, attribute) {
                var item = tpl({'name': name, 'value': value, 'attribute': attribute });
                this.descriptionsSection.append(item);
            },

            saveChanges: function (event) {
                var currentTargetName = event.currentTarget.name,
                    currentTargetValue = this.utilsView.trimSpaces(event.currentTarget.value);
                _.find(this.collection.models, function(item){
                    if (item.get('name') === currentTargetName) {
                        item.set('value', currentTargetValue);
                    }
                });
            },

            validate: function () {
                this.utilsView.triggerExcerciseStatus(this.checkExercise2, true);
                _.each(this.collection.models, function (item) {
                    if (item.get('answer') === item.get('value')) {
                        this.$('input[name="' + item.get('name') + '"]')
                            .prev()
                            .removeClass()
                            .addClass('ok');
                    } else {
                        this.$('input[name="' + item.get('name') + '"]')
                            .prev()
                            .removeClass()
                            .addClass('err');
                    }
                }, this);
            }

        });

        return matchDescriptionsToImagesView;
    }
);
