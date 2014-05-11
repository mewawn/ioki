requirejs.config({
    'paths': {
        'jquery':       'libs/jquery',
        'underscore':   'libs/underscore',
        'backbone':     'libs/backbone',
        'tpl':          'libs/tpl',
        'text':         'libs/text',
        'ioki':         'scripts/main'
    },
    "shim":{
        "jquery":{
            "exports":"jQuery",
            "init":function () {
                this.jQuery = this.window.jQuery.noConflict();
                return this.jQuery;
            }
        },
        "underscore":{
            "exports":"_"
        },
        "backbone":{
            "deps":["jquery","underscore"],
            "exports":"Backbone"
        },
        "tpl":{
            "exports":"tpl"
        },
        "text":{
            "exports":"text"
        }
    }
});

require(['jquery'], function(jQuery) {});
require(['underscore'], function(_) {});
require(['backbone'], function(Backbone) {});
require(['tpl'], function(Backbone) {});
require(['text'], function(Backbone) {});
require(['ioki'], function(ioki) {});