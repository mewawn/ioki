define(
    [
        'jquery',
        'backbone'
    ],
    function (
        $,
        Backbone
    ) {
        'use strict';

        var UtilsView = Backbone.View.extend({

            triggerExcerciseStatus: function (btn, status) {
                if (status) {
                    btn.addClass('reload');
                } else {
                    btn.removeClass('reload');
                }
            },

            trimSpaces: function (val) {
                return val.split(" ").join("");
            }

        });

        return UtilsView;
    }
);

