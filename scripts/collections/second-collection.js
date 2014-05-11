define(
    [
        'backbone'
    ],
    function (
        Backbone
    ) {
        var SecondCollection = Backbone.Collection.extend({

            url: 'scripts/data2.json'

        });

        return SecondCollection;
    }
);
