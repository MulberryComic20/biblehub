/*
 * JS for startScreen generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '4b464740-e86b-4924-8e09-04c561d6fb19';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "Screen1",
    "location": "Screen1.html"
}, {
    "name": "BibleMovie",
    "location": "BibleMovie.html"
}];

function startScreen_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_5': 'startScreen_mobilebutton_5',
        'mobilebutton_6': 'startScreen_mobilebutton_6',
        'mobileimage_3': 'startScreen_mobileimage_3',
        'mobileaudio_2': 'startScreen_mobileaudio_2',
        'mobilelabel_7': 'startScreen_mobilelabel_7',
        'mobilelabel_17': 'startScreen_mobilelabel_17',
        'mobilebutton_10': 'startScreen_mobilebutton_10',
        'mobilebutton_16': 'startScreen_mobilebutton_16'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.datasources = Apperyio.datasources || {};

    Apperyio.CurrentScreen = 'startScreen';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var startScreen_onLoad = function() {
            startScreen_elementsExtraJS();

            startScreen_deviceEvents();
            startScreen_windowEvents();
            startScreen_elementsEvents();
        };

    // screen window events


    function startScreen_windowEvents() {

        $('#startScreen').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function startScreen_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function startScreen_elementsExtraJS() {
        // screen (startScreen) extra code

        if (Apperyio.getTargetPlatform() == "A") {
            Apperyio.__registerComponent('mobileaudio_2_android', new Apperyio.ApperyMobileAudioComponent("startScreen_mobileaudio_2"));
        }

    };

    // screen elements handler


    function startScreen_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#startScreen_mobileheader [name="mobilebutton_5"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    $('[id="startScreen_panel_9"]').panel("open");

                }
            },
        }, '#startScreen_mobileheader [name="mobilebutton_5"]');
        $(document).off("click", '#startScreen_mobileheader [name="mobilebutton_6"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    window.top.location = 'https://mulberrycomic20.github.io/MulberryIncWeb/';

                }
            },
        }, '#startScreen_mobileheader [name="mobilebutton_6"]');

        $(document).off("click", '#startScreen_panel_9 [name="mobilebutton_10"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Screen1', {
                        reverse: false
                    });

                }
            },
        }, '#startScreen_panel_9 [name="mobilebutton_10"]');
        $(document).off("click", '#startScreen_panel_9 [name="mobilebutton_16"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('BibleMovie', {
                        reverse: false
                    });

                }
            },
        }, '#startScreen_panel_9 [name="mobilebutton_16"]');

    };

    $(document).off("pagebeforeshow", "#startScreen").on("pagebeforeshow", "#startScreen", function(event, ui) {
        Apperyio.CurrentScreen = "startScreen";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    startScreen_onLoad();
};

$(document).off("pagecreate", "#startScreen").on("pagecreate", "#startScreen", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    startScreen_js();
});