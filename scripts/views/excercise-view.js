define(
    [
        'jquery',
        'backbone',
        'underscore',
        'tpl!scripts/templates/excercise-weather'
    ],
    function (
        $,
        Backbone,
        _,
        tpl
    ) {
        'use strict';

        var ExcerciseView = Backbone.View.extend({

            initialize: function (options) {
                var that = this;
                this.utilsView = options.utilsView;
                this.symbolsSection = this.$('#weather-symbols');
                this.checkExercise1 = this.$('#check-exercise-1');
                this.$el.on('focusin', '.word', function () {
                    that.utilsView.triggerExcerciseStatus(that.checkExercise1, false);
                });

            },

            events: {
                "click #check-exercise-1": "validate",
                "focusout .word": "saveChanges"
            },

            showItems: function (item) {
                var item = tpl({
                    'name': item.get('name'),
                    'image': item.get('image'),
                    'value': item.get('value'),
                    'attribute': item.get('attribute')
                });
                this.symbolsSection.append(item);
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
                this.utilsView.triggerExcerciseStatus(this.checkExercise1, true);
                _.each(this.collection.models, function (item) {
                    if (item.get('name').toLowerCase() === item.get('value').toLowerCase()) {
                        this.$('input[name="' + item.get('name') + '"]')
                            .next()
                            .removeClass()
                            .addClass('ok');
                    } else {
                        this.$('input[name="' + item.get('name') + '"]')
                            .next()
                            .removeClass()
                            .addClass('err');
                    }
                }, this);
            },

            render: function () {
                var that = this;
                this.collection.fetch({
                    success: function(collection) {
                        _.each(collection.models, function (item) {
                            that.showItems(item);
                        });
                    }
                });
            }

        });

        return ExcerciseView;
    }
);
