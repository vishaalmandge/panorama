$(document).ready(function () {
    "use strict";
    $("#equirectangular").ipanorama({
        theme: "ipnrm-theme-modern",
        autoLoad: !0,
        popoverHideTrigger: "manual",
        popoverShowClass: "fx-rotateIn",
        popoverHideClass: "fx-bounceOut",
        pitchLimits: !1,
        sceneBackgroundLoad: !0,
        sceneId: "main",
        scenes: {
            main: {
                type: "sphere",
                title: "Main Scene",
                image: "assets/images/equirectangular.jpg",
                hotSpots: [{
                    yaw: 0,
                    pitch: 0,
                    sceneId: "second",
                    popoverShow: !0,
                    popoverPlacement: "top",
                    popoverContent: "Hello Everyone .)"
                }, {
                    yaw: 0,
                    pitch: 25,
                    popoverShow: !0,
                    popoverPlacement: "top",
                    popoverContent: "Top"
                }, {
                    yaw: 0,
                    pitch: -15,
                    popoverShow: !0,
                    popoverPlacement: "bottom",
                    popoverContent: "Bottom"
                }, {
                    yaw: -45,
                    pitch: 15,
                    popoverShow: !0,
                    popoverPlacement: "top-right",
                    popoverContent: "Top right"
                }, {
                    yaw: -45,
                    pitch: 0,
                    popoverShow: !0,
                    popoverPlacement: "right",
                    popoverContent: "Right"
                }, {
                    yaw: -45,
                    pitch: -15,
                    popoverShow: !0,
                    popoverPlacement: "bottom-right",
                    popoverContent: "Bottom right"
                }, {
                    yaw: 45,
                    pitch: 15,
                    popoverShow: !0,
                    popoverPlacement: "top-left",
                    popoverContent: "Top left"
                }, {
                    yaw: 45,
                    pitch: 0,
                    popoverShow: !0,
                    popoverPlacement: "left",
                    popoverContent: "Left"
                }, {
                    yaw: 45,
                    pitch: -15,
                    popoverShow: !0,
                    popoverPlacement: "bottom-left",
                    popoverContent: "Bottom left"
                }]
            }
        }
    }), $("#cubemap").ipanorama({
        theme: "ipnrm-theme-dark",
        autoLoad: !0,
        pitchLimits: !1,
        sceneBackgroundLoad: !0,
        sceneId: "main",
        scenes: {
            main: {
                type: "cube",
                title: "Main Scene",
                image: "assets/images/cubemap.jpg",
                hotSpots: [{
                    yaw: 41.590353256274646,
                    pitch: 18.38729875143003,
                    imageUrl: "assets/images/sun.gif",
                    imageWidth: 128,
                    imageHeight: 128,
                    popoverContent: "Funny sun",
                    popoverLazyload: !0
                }, {
                    yaw: 6.366686335176668,
                    pitch: 9.99214550362607,
                    imageUrl: "assets/images/ufo.gif",
                    imageWidth: 64,
                    imageHeight: 64,
                    popoverContent: "An unidentified flying object or UFO",
                    popoverLazyload: !0
                }, {
                    yaw: 43.40935847687931,
                    pitch: -16.216038412176065,
                    imageUrl: "assets/images/flower.gif",
                    imageWidth: 64,
                    imageHeight: 64,
                    popoverContent: "Funny flower",
                    popoverLazyload: !0
                }]
            }
        }
    }), $("#cylindrical").ipanorama({
        theme: "ipnrm-theme-modern",
        autoLoad: !0,
        autoRotate: !0,
        autoRotateSpeed: .001,
        autoRotateInactivityDelay: 3e3,
        mouseWheelPreventDefault: !0,
        mouseWheelRotate: !0,
        mouseWheelRotateCoef: .2,
        mouseWheelZoom: !1,
        pitchLimits: !0,
        pitchLimitsTop: 0,
        pitchLimitsBottom: 0,
        popoverShowTrigger: "click",
        popoverHideTrigger: "manual",
        sceneId: "main",
        scenes: {
            main: {
                type: "cylinder",
                title: "Main Scene",
                image: "assets/images/cylindrical.jpg",
                zoom: 66.35478,
                pitchLimits: !0,
                pitchLimitUp: 0,
                pitchLimitDown: 0,
                hotSpots: [{
                    yaw: 20,
                    pitch: 0,
                    popoverHtml: !0,
                    popoverContent: '<iframe width="100%" height="150" src="https://www.youtube.com/embed/lWA2pjMjpBs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
                    popoverWidth: 300
                }, {
                    yaw: 300,
                    pitch: 0,
                    popoverHtml: !0,
                    popoverContent: '<img width="100%" src="assets/images/alice.jpg">',
                    popoverWidth: 200
                }]
            }
        }
    }), $("#virtualtour").ipanorama({
        theme: "ipnrm-theme-modern",
        imagePreview: "assets/images/preview.png",
        autoLoad: !1,
        title: !0,
        sceneId: "scene1",
        scenes: {
            scene1: {
                type: "sphere",
                image: "assets/images/entrance.jpg",
                yaw: 182.72779,
                pitch: 5.34169,
                title: "House",
                hotSpots: [{
                    yaw: 190.25710949091695,
                    pitch: 3.9420948470147907,
                    sceneId: "scene2",
                    popoverContent: "Go to the house",
                    className: "myhotspot",
                    content: '<i class="fa fa-building"></i>'
                }]
            },
            scene2: {
                type: "sphere",
                image: "assets/images/livingroom.jpg",
                yaw: 79.43032,
                pitch: .27308,
                title: "Livingroom",
                hotSpots: [{
                    yaw: 121.31154843674508,
                    pitch: 1.0646917593699434,
                    sceneId: "scene1",
                    popoverContent: "Exit",
                    className: "myhotspot",
                    content: '<i class="fa fa-sign-out"></i>'
                }, {
                    yaw: 14.878456491276559,
                    pitch: -.09477191880701132,
                    sceneId: "scene3",
                    popoverContent: "Go to the bedroom",
                    className: "myhotspot",
                    content: '<i class="fa fa-bed"></i>'
                }]
            },
            scene3: {
                type: "sphere",
                image: "assets/images/bedroom.jpg",
                yaw: -161.98556,
                pitch: -8.2986,
                title: "Bedroom",
                hotSpots: [{
                    yaw: 174.28024020268987,
                    pitch: -3.3702128484494525,
                    sceneId: "scene2",
                    popoverContent: "Go to the living room",
                    className: "myhotspot",
                    content: '<i class="fa fa-coffee"></i>'
                }]
            }
        }
    })
});
