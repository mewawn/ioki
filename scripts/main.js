define(
    'ioki',
    [
        'backbone',
        'scripts/views/excercise-view',
        'scripts/views/available-words-view',
        'scripts/views/match-descriptions-to-images-view',
        'scripts/views/available-photos-view',
        'scripts/views/utils',
        'scripts/collections/main-collection',
        'scripts/collections/second-collection',
    ],
    function (
        Backbone,
        ExcerciseView,
        AvailableWordsView,
        MatchDescriptionsToImagesView,
        AvailablePhotosView,
        UtilsView,
        MainCollection,
        SecondCollection
    ) {
        "use strict";
        var mainCollection = new MainCollection(),
            secondCollection = new SecondCollection(),
            utilsView = new UtilsView({
                el: '#ioki'
            }),
            excerciseView = new ExcerciseView({
                el: '#ioki',
                collection: mainCollection,
                utilsView: utilsView
            }),
            availableWordsView = new AvailableWordsView({
                el: '#ioki',
                collection: mainCollection
            }),
            matchDescriptionsToImagesView = new MatchDescriptionsToImagesView({
                el: '#ioki2',
                collection: secondCollection,
                utilsView: utilsView
            }),
            availablePhotosView = new AvailablePhotosView({
                el: '#ioki2',
                collection: secondCollection
            });
        excerciseView.render();
    }
);
