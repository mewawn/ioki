define(
    [
        'jquery',
        'backbone',
        'underscore',
        'tpl!scripts/templates/available-photos'
    ],
    function (
        $,
        Backbone,
        _,
        tpl
    ) {
        'use strict';

        var AvailablePhotosView = Backbone.View.extend({

            initialize: function (options) {
                var that = this;
                this.photosSection  = this.$('#available-photos');

                this.collection.fetch({
                    success: function(collection) {
                        _.each(collection.models, function (item) {
                            that.showItems(item.get('title'), item.get('image'));
                        });
                    }
                });
            },

            showItems: function (title, image) {
                var photos = tpl({'title': title, 'image': image});
                this.photosSection.append(photos);
            }
        });

        return AvailablePhotosView;
    }
);
