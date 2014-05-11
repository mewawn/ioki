define(
    [
        'backbone'
    ],
    function (
        Backbone
    ) {
        var MainCollection = Backbone.Collection.extend({

            url: 'scripts/data.json'

        });

        return MainCollection;
    }
);
