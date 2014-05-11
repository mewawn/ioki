define(
    [
        'jquery',
        'backbone',
        'underscore',
        'tpl!scripts/templates/available-words'
    ],
    function (
        $,
        Backbone,
        _,
        tpl
    ) {
        'use strict';

        var AvailableWordsView = Backbone.View.extend({

            initialize: function (options) {
                var that = this;
                this.wordsSection  = this.$('#available-words');

                this.collection.fetch({
                    success: function(collection) {
                        collection = _.shuffle(collection.models);
                        _.each(collection, function (item) {
                            that.showShuffleWords(item.get('name'));
                        });
                    }
                });
            },

            showShuffleWords: function (name) {
                var words = tpl({'name': name });
                this.wordsSection.append(words);
            }
        });

        return AvailableWordsView;
    }
);
