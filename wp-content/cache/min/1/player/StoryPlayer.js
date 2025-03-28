! function(n) {
    var e = {};

    function t(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return n[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    t.m = n, t.c = e, t.d = function(n, e, r) {
        t.o(n, e) || Object.defineProperty(n, e, {
            enumerable: !0,
            get: r
        })
    }, t.r = function(n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(n, "__esModule", {
            value: !0
        })
    }, t.t = function(n, e) {
        if (1 & e && (n = t(n)), 8 & e) return n;
        if (4 & e && "object" == typeof n && n && n.__esModule) return n;
        var r = Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: n
            }), 2 & e && "string" != typeof n)
            for (var o in n) t.d(r, o, function(e) {
                return n[e]
            }.bind(null, o));
        return r
    }, t.n = function(n) {
        var e = n && n.__esModule ? function() {
            return n.default
        } : function() {
            return n
        };
        return t.d(e, "a", e), e
    }, t.o = function(n, e) {
        return Object.prototype.hasOwnProperty.call(n, e)
    }, t.p = "/", t(t.s = 0)
}([function(n, e, t) {
    n.exports = t(1)
}, function(n, e, t) {
    "use strict";

    function r(n) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
            return typeof n
        } : function(n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        })(n)
    }

    function o(n, e) {
        var t = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(n);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), t.push.apply(t, r)
        }
        return t
    }

    function i(n) {
        for (var e = 1; e < arguments.length; e++) {
            var t = null != arguments[e] ? arguments[e] : {};
            e % 2 ? o(Object(t), !0).forEach((function(e) {
                s(n, e, t[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach((function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
            }))
        }
        return n
    }

    function s(n, e, t) {
        return (e = function(n) {
            var e = function(n, e) {
                if ("object" != r(n) || !n) return n;
                var t = n[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var o = t.call(n, e || "default");
                    if ("object" != r(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(n)
            }(n, "string");
            return "symbol" == r(e) ? e : e + ""
        }(e)) in n ? Object.defineProperty(n, e, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : n[e] = t, n
    }
    t.r(e);
    var a = "https://js.makestories.io/web-stories-logo-small.png";
    window.fallbackImage = "https://js.makestories.io/web-stories-logo-grey.png", window.fallbackLogo = a;
    var l = {
        d1: {
            build: function(n) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return "<div class='mainDiv' id='".concat(n.id, "'>\n                         <img alt=\"").concat(n.name, '" loading="lazy" onerror="if (this.src != fallbackImage) this.src = fallbackImage;"  class="logo ').concat(e ? "viewed" : "", "\" src='").concat(n.posterSquare, "' />\n                    </div>")
            },
            style: function(n) {
                var e = i({
                    border: "#ddd",
                    color: "#ddd",
                    "border-radius": "15px 0 0 15px",
                    "box-shadow": "0 0 15px rgba(0,0,0,0.1)"
                }, n.style || {});
                return "\n.storyViewer.d1 .story_nav{ display: none; }\n#story1 .ms-player-scrollable-area {\n    overflow-x: hidden;\n    overflow-y: auto;\n    padding: 20px;\n    max-height: 60vh;\n}\n#story1.add-padding {\n    padding: 60px 0;\n}\n#story1  .show-more-cta-makestory{\n    display:none;\n}\n#story1 {\n    position: fixed;\n    width: 95px;\n    box-sizing: border-box;\n    top: 50vh;\n    right: 0;\n    transform: translateY(-50%);\n    border-radius: ".concat(e["border-radius"], ";\n    box-shadow: ").concat(e["box-shadow"], ";\n    z-index: 9999;\n    overflow: hidden;\n    background: #fff;\n}\n.ms-player-scrollable-area::-webkit-scrollbar { width: 0; }            \n#story1 .logo{\n    height: 100%;\n    width: 100%;\n    border: 2px dashed ").concat(e.border, ";\n    border-radius: 100px;\n    display: flex;\n    align-items: center;\n    z-index: 999;\n    box-sizing: border-box;\n    padding: 5px;\n}\n#story1 .logo.viewed {\n    border: 2px solid #1657cd;\n}\n#story1 .mainDiv {\n    display: flex;\n    height: 55px;\n    width: 55px;\n    min-height: 55px;\n    min-width: 55px;\n    margin: 0 0 30px;\n    align-items: center;\n    box-sizing: border-box;\n}\n#story1 .mainDiv:last-child {\n    margin-bottom: 0;\n}\n@media (max-width: 990px) {\n    #story1 {\n        display: flex;\n        bottom: 0;\n        width: 100vw;\n        overflow-x: auto;\n        z-index: 1000; \n        transform: none;\n        height: auto;\n        top: unset;\n        overflow-y: hidden;\n        flex-wrap: nowrap;\n        border-radius: 15px 15px 0 0;\n        justify-content: center;\n        box-shadow: 0px 4px 14px #00000014;\n    }\n    #story1 .ms-player-scrollable-area{\n        display: flex;\n        overflow-y: hidden;\n        overflow-x: auto;\n    }\n    #story1 .mainDiv {\n        margin: 0 15px 0 0;\n    }\n    #story1 .mainDiv:last-child {\n        margin-right: 0;\n    }\n    .ms-player-scrollable-area::-webkit-scrollbar{\n        height: 0;\n    }\n    #story1.add-padding{\n        padding: 0 60px;\n    }\n    #story1 .mainDiv{\n        cursor: pointer;\n    }\n    .ms-scroll-left-btn{left: 15px}\n    .ms-scroll-right-btn{right: 15px}\n}           \n            ")
            }
        },
        d2: {
            build: function(n) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return "<div class='mainDiv' id='".concat(n.id, "'>\n                         <img  alt=\"").concat(n.name, '" loading="lazy" onerror="if (this.src != fallbackImage) this.src = fallbackImage;" class="poster ').concat(e ? "viewed" : "", "\" src='").concat(n.posterPortrait, "' />\n                    </div>")
            },
            style: function(n) {
                var e = i({
                    color: "#000",
                    border: "",
                    "box-shadow": "0 0 4px 0 #ddd"
                }, n.style || {});
                return "#story2 {\n                        display: flex;\n                        position: fixed;\n                        bottom: 0px;\n                        left: 50%;\n                        z-index: 1000;\n                        box-shadow: 0px 4px 14px #00000014;\n                        transform: translateX(-50%);\n                        background: #fff;\n                        border-radius: 15px 15px 0 0;\n                        overflow: hidden;\n                } \n                #story2  .show-more-cta-makestory{\n                    display:none;\n                }\n                #story2  .ms-player-scrollable-area {\n                    display: flex;\n                    max-width: 70vw;\n                    overflow-x: auto;\n                    padding: 20px;\n                    background: inherit;\n                    \n                } \n                #story2.add-padding{\n                    padding: 0 60px;\n                }\n                #story2 .mainDiv{\n                    position: relative;\n                    margin-right:20px;\n                }\n                #story2 .mainDiv:last-child{\n                 margin-right:0;\n                }\n                #story2 .poster\n                {\n                    height:100px;\n                    width:100px;\n                    border: 2px dashed ".concat(e.border, ";\n                    overflow: hidden;\n                    border-radius: 50%;\n                    object-fit: cover;\n                    max-height: 7vh;\n                    max-width: 7vh;\n                    padding:5px;\n                    display: block;\n                } \n                #story2 .StoryName \n                {\n                    position: absolute;\n                    z-index: 1;\n                    top:100px;\n                    left:10px; \n                    color :").concat(e.color, ";\n                    font-family: sans-serif;\n                } \n                #story2 .poster.viewed\n                {\n                    border-color: #1657CD;\n                    border-style:solid;\n                }\n                #story2 .mainDiv{\n                    cursor: pointer;\n                }\n                @media (max-width: 768px){\n                   #story2{\n                        padding: 15px;\n                    } \n                 }\n\n                ")
            }
        },
        d3: {
            build: function(n) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = "";
                return t += "<div class='mainDiv ".concat(e ? "viewed" : "", "' id='").concat(n.id, "'>\n                                             <img alt=\"").concat(n.name, '" width="173" height="230" loading="lazy" onerror="if (this.src != fallbackImage) this.src = fallbackImage;" class="poster" src=').concat(n.posterPortrait, '>\n                                             <img alt="story icon" loading="lazy" onerror="if (this.src != fallbackLogo) this.src = fallbackLogo" class="logo" src=\'').concat(n.logo || a, "'>\n                                            ").concat(n.name ? '<p class="StoryName">' + n.name + "</p>" : "", "\n                                       </div>")
            },
            style: function(n) {
                return '\n                #story3 \n                {\n                    position: relative;\n                } \n                #story3 .show-more-banner.ms-player-scrollable-area{\n                  flex-wrap: wrap;\n                  justify-content: center;\n                }\n                #story3  .ms-player-scrollable-area \n                {\n                    display: flex;\n                    flex-wrap: nowrap;\n                    max-width: 100%;\n                    overflow-x: auto;\n                    overflow-y: hidden;\n                    padding: 0;\n                    height: auto;\n                } \n                #story3 .hidden-cta{\n                  display:none;\n              }\n              #story3 .show-more-cta-makestory{\n                color: #000;\n                border:unset;\n                cursor:pointer;\n                display:block;\n                border-radius: 5px;\n                font-family: sans-serif;\n                font-size: 15px;\n                line-height: 20px;\n                margin: auto;\n                padding: 6px 10px;\n                background-color: #f1f1f1;\n              }\n              #story3 .mainDiv .logo{ \n                border: 2px dashed #0043ff;\n                padding: 2px;\n              }\n              #story3 .mainDiv.viewed .logo{ \n                border:unset;\n              }\n              #story3 .show-more-banner .mainDiv:first-child{\n                margin-left: unset;\n              }\n              #story3 .show-more-banner .mainDiv:last-child{\n                margin-right: unset;\n              }\n              #story3 .show-more-banner .mainDiv {\n                  margin: 0px 13px 13px 0px;\n              }\n                #story3::after{\n                    min-width: 10px;\n                    height: 10px;\n                    content: "";\n                }\n                #story3::-webkit-scrollbar { width: 0; height: 0 }\n                #story3 .poster\n                {\n                    height:230px;\n                    width:173px;\n                    object-fit: cover;\n                    border-radius:15px;\n                    border:1px solid #e5e5e5;\n                } \n                #story3 .StoryName {\n                    position: absolute;\n                    bottom: 0px;\n                    top: unset;\n                    left: 0;\n                    width: 100%;\n                    background: linear-gradient(transparent, rgb(0 0 0 / 0.85));\n                    padding: 17px;\n                    margin: 0;\n                    font-family: sans-serif;\n                    font-size: 15px;\n                    line-height: 20px;\n                    padding-top: 30px;\n                    z-index: 1;\n                    color: #fff;\n                    border-radius:0 0 15px 15px;\n                    \n                }\n                 #story3 .logo\n                 {\n                    position: absolute;\n                    z-index: 1;\n                    height: 43px;\n                    width: 43px;\n                    top:15px;\n                    left:15px;\n                    /*border: 2px solid '.concat(n.style.border, ";*/\n                    /*background: #fff;*/\n                    border-radius: 100px;\n                    /* padding:5px; */\n                 } \n                 /*\n                 #story3 .mainDiv.viewed\n                 {\n                    border: 2px solid #d0c8c8;\n                 } \n                 */\n                 #story3 .mainDiv\n                 {\n                    position: relative;\n                    display:flex;\n                    height:auto;\n                    margin: 0 13px 0 0;\n                    /*border: 2px solid #e9ecef;\n                    border-radius: 5px;*/\n                    overflow: hidden;\n                    min-width: 173px;\n                 } \n                 #story3  .mainDiv:first-child\n                 {margin-left: auto}\n                 #story3 .mainDiv:last-child\n                 {margin-right: auto}\n                 \n                 #story3 .mainDiv{\n                    cursor: pointer;\n                 }                 \n                ")
            }
        },
        d4: {
            build: function(n) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = "<div class='mainDiv' id='".concat(n.id, "'>\n                                         <img alt=\"").concat(n.name, '" loading="lazy" onerror="if (this.src != fallbackImage) this.src = fallbackImage;" class="poster ').concat(e ? "viewed" : "", "\" src='").concat(n.posterPortrait, "'>\n                                         <p>").concat(n.name, "</p>\n                                    </div>\n                             ");
                return t
            },
            style: function(n) {
                return "\n                #story4{ position: relative;margin: 0 auto;max-width: 1140px; }\n                #story4 .show-more-banner.ms-player-scrollable-area{\n                    flex-wrap: wrap;\n                    justify-content: center;\n                  }\n                #story4 .ms-player-scrollable-area \n                {\n                    display: flex;\n                    flex-wrap: nowrap;\n                    max-width: 100%;\n                    overflow-x: auto;\n                    overflow-y: hidden;\n                    padding: 0 10px;\n                    position: relative;\n                    z-index: 0;\n                    height: auto;                    \n                } \n                #story4 .hidden-cta{\n                    display:none;\n                }\n                #story4 .show-more-cta-makestory{\n                  color: #000;\n                  border:unset;\n                  cursor:pointer;\n                  display:block;\n                  border-radius: 5px;\n                  font-family: sans-serif;\n                  font-size: 15px;\n                  line-height: 20px;\n                  margin: auto;\n                  padding: 6px 10px;\n                  background-color: #f1f1f1;\n                }\n                #story4 .mainDiv .logo{ \n                  border: 2px dashed #0043ff;\n                  padding: 2px;\n                }\n                #story4 .mainDiv.viewed .logo{ \n                  border:unset;\n                }\n                #story4 .show-more-banner .mainDiv:first-child{\n                  margin-left: unset;\n                }\n                #story4 .show-more-banner .mainDiv:last-child{\n                  margin-right: unset;\n                }\n                #story4 .show-more-banner .mainDiv {\n                    margin: 0px 13px 13px 0px;\n                }\n                .ms-player-scrollable-area::-webkit-scrollbar{\n                    height: 0;\n                    width: 0;\n                }\n                #story4 .poster{\n                    height:93px;\n                    min-height:93px;\n                    width:93px;\n                    min-width:93px;\n                    border: 2px solid  ".concat(n.style.border, ';\n                    border-radius: 100px;\n                    object-fit: cover;\n                    padding:8px;\n                }  \n                #story4 .poster.viewed{\n                    border-color:#1657CD;\n                }  \n                #story4 .mainDiv{\n                    margin: 0 15px;\n                }  \n                #story4 p{ display: none;font-size: 12px;text-align: center;}  \n                #story4::after{\n                    min-width: 10px;\n                    height: 10px;\n                    content: "";\n                }\n                \n                 #story4 .mainDiv:first-child\n                 {margin-left: auto}\n                 #story4 .mainDiv:last-child\n                 {margin-right: auto}\n                 \n                 #story4 .mainDiv{\n                    cursor: pointer;\n                 }\n                  @media (max-width: 676px){\n                   #story4 .poster{\n                     height:14vw;\n                     width:14vw;\n                   }\n                   \n                   #story4 .mainDiv{\n                    margin:0 10px;\n                   }\n                   \n                 }\n                ')
            }
        },
        d5: {
            build: function(n) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = "<div class='mainDiv' id='".concat(n.id, '\'>\n                                <span class="left-section">\n                                     <img alt="').concat(n.name, '" loading="lazy" onerror="if (this.src != fallbackImage) this.src = fallbackImage;" class="poster ').concat(e ? "viewed" : "", "\" src='").concat(n.posterPortrait, '\'>\n                                    <p class="StoryName">').concat(n.name || "", '</p>\n                                </span>\n                                <p class="open">').concat(t.openButtonText || "Open", "</p>\n                            </div>");
                return r
            },
            style: function(n) {
                return "\n                #story5{\n                    max-width:650px;\n                    margin: 0 auto;\n                    width: 100%;\n                } \n                #story5 .poster{\n                    height:55px;\n                    width:55px;\n                    min-height:55px;\n                    min-width:55px;\n                    border: 2px dashed ".concat(n.style.border, ";\n                    border-radius: 180px;\n                    object-fit: cover;\n                    margin-right: 20px;\n                    padding:5px;\n                } \n                #story5 .poster.viewed{\n                  border-style:solid;\n                }\n                #story5 .StoryName {\n                    display: flex;\n                    font-family: sans-serif;\n                    align-items: center;\n                    margin: 0;\n                    font-size:15px;\n                    line-height:20px;\n                    color:#202124;\n                    padding-right: 15px;\n                } \n                #story5 .open{\n                    color: #1657CD;\n                    padding: 10px 25px;\n                    cursor: pointer;\n                    display: flex;\n                    align-items: center;\n                    font-family: sans-serif;\n                    margin: 0;\n                    border: 2px solid #1657CD;\n                    border-radius: 3px;\n                    font-size:14px;\n                    line-height:12px;\n                   transition:all 0.2s linear; \n                   box-shadow: 0px 4px 16px #00000014;\n                } \n                #story5 .open:hover{\n                    background:#1657CD;\n                    border: 2px solid #1657CD;\n                    color:#fff;\n                }\n                #story5 .mainDiv{\n                    align-items: center;\n                    width: 100%;\n                    display: flex;\n                    justify-content: space-between;\n                    margin-bottom:25px;\n                    padding: 0 20px;\n                }\n                \n                 #story5 .mainDiv{\n                    cursor: pointer;\n                 }\n                #story5 .left-section{\n                    align-items: center;\n                    display: flex;\n                }\n                #story5 .ms-pgntn{padding-bottom: 15px;}")
            }
        },
        d6: {
            build: function(n) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = '<div class="mainDiv" id="'.concat(n.id, '">\n                            <span class="left-section">\n                                 <img alt="').concat(n.name, '" loading="lazy" class="poster ').concat(e ? "viewed" : "", '" src="').concat(n.posterPortrait, '" onerror="if (this.src != fallbackImage) this.src = fallbackImage;" /> \n                            </span>\n                            <span class="right-section">\n                                ').concat(n.pages ? '<p class="msp-pages">'.concat(n.pages, " Slides</p>") : "", '\n                                <p class="storyname">').concat(n.name || "", "</p>\n                                ").concat(n.category ? '<p class="msp-category">'.concat(n.category, "</p>") : "", "\n                                ").concat(n.description ? '<p class="msp-descr">'.concat(n.description, "</p>") : "", '\n                                \n                                <p class="open">').concat(t.openButtonText || "Open", "</p>\n                            </span>\n                        </div>");
                return r
            },
            style: function(n) {
                i({
                    border: "#1657CD"
                }, n.style || {});
                return "#story6 {\n    max-width: 650px;\n    margin: 0 auto;\n    width: 100%;\n}\n#story6 .poster {\n    min-height: 120px;\n    width: 100px;\n    min-width: 100px;\n    height: 100%;\n    border-radius: 4px;\n    object-fit: cover;\n    margin-right: 15px;\n}\n#story6 .ms-pgntn{\n    display:none;\n}\n#story6 .poster.viewed {\n    opacity: 0.7;\n}\n#story6 .storyname {\n    font-family: sans-serif;\n    margin: 0;\n    font-size: 15px;\n    line-height: 20px;\n    color: #202124;\n    font-weight: bold;\n}\n#story6 .msp-pages {\n    font-family: sans-serif;\n    margin: 0;\n    font-size: 11px;\n    line-height: 20px;\n    color: rgba(0,0,0,0.55);\n    font-weight: bold;\n}\n#story6 .open {\n    color: #1657cd;\n    padding: 10px 25px;\n    cursor: pointer;\n    text-align: center;\n    font-family: sans-serif;\n    margin: 0;\n    display: inline-block;\n    border: 2px solid #1657cd;\n    border-radius: 3px;\n    font-size: 14px;\n    line-height: 12px;\n    transition: all 0.2s linear;\n    box-shadow: 0px 4px 16px #00000014;\n    margin-top: 10px;\n}\n#story6 .open:hover {\n    background: #1657cd;\n    border: 2px solid #1657cd;\n    color: #fff;\n}\n#story6 .mainDiv {\n    width: 100%;\n    display: flex;\n    margin: 0 auto 20px;\n    padding: 15px;\n    border: 1px solid #e5e5e5;\n    border-radius: 5px;\n    max-width: 700px;\n    background: ".concat(n.style.background || "#fff", ";\n}\n#story6 .msp-descr {\n    color: rgba(0,0,0,0.55);\n    margin: 10px 0;\n    font-size: 13px;\n    font-family: sans-serif;\n}\n#story6 .left-section {\n    align-items: center;\n    display: flex;\n}\n#story6 .right-section {\n    flex: 1;\n    text-align: left;\n}\n#story6 .ms-pgntn{padding-bottom: 15px;} \n#story6 .mainDiv{\n    cursor: pointer;\n }\n.msp-category {\n    font-family: sans-serif;\n    font-size: 12px;\n    margin: 10px 0 0;\n    text-transform: uppercase;\n    color: rgba(0,0,0,0.55);\n}\n")
            }
        }
    };

    function d(n) {
        return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
            return typeof n
        } : function(n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        })(n)
    }

    function c(n, e) {
        var t = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(n);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), t.push.apply(t, r)
        }
        return t
    }

    function p(n) {
        for (var e = 1; e < arguments.length; e++) {
            var t = null != arguments[e] ? arguments[e] : {};
            e % 2 ? c(Object(t), !0).forEach((function(e) {
                u(n, e, t[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach((function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
            }))
        }
        return n
    }

    function u(n, e, t) {
        return (e = h(e)) in n ? Object.defineProperty(n, e, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : n[e] = t, n
    }

    function m(n, e) {
        for (var t = 0; t < e.length; t++) {
            var r = e[t];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, h(r.key), r)
        }
    }

    function h(n) {
        var e = function(n, e) {
            if ("object" != d(n) || !n) return n;
            var t = n[Symbol.toPrimitive];
            if (void 0 !== t) {
                var r = t.call(n, e || "default");
                if ("object" != d(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === e ? String : Number)(n)
        }(n, "string");
        return "symbol" == d(e) ? e : e + ""
    }

    function f(n) {
        return function(n) {
            if (Array.isArray(n)) return g(n)
        }(n) || function(n) {
            if ("undefined" != typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"]) return Array.from(n)
        }(n) || function(n, e) {
            if (n) {
                if ("string" == typeof n) return g(n, e);
                var t = {}.toString.call(n).slice(8, -1);
                return "Object" === t && n.constructor && (t = n.constructor.name), "Map" === t || "Set" === t ? Array.from(n) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? g(n, e) : void 0
            }
        }(n) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function g(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = Array(e); t < e; t++) r[t] = n[t];
        return r
    }
    var y = function(n) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                t = arguments.length > 2 ? arguments[2] : void 0;
            return t + "/widget/" + n + "/stories?page=" + e
        },
        b = {
            storyClass: "mssp-" + parseInt(100 * Math.random() % 10),
            stories: !1,
            widgetId: !1,
            style: {
                border: "#1657CD",
                background: "#fff"
            },
            storiesToShow: 10,
            showMore: !1,
            showLogo: !1,
            loop: !0,
            openButtonText: "Open",
            showMoreButtonText: "Show More"
        },
        v = window.innerWidth / 5,
        x = function(n, e) {
            var t = n.map((function(n) {
                    return n.id || !1
                })),
                r = [];
            return e && Array.isArray(e) && (r = e.filter((function(n) {
                return !t.includes(n.id)
            }))), [].concat(f(n), f(r))
        },
        w = [],
        k = ["d5", "d6"],
        S = function(n) {
            return window.innerWidth > 990 ? ["d1"].concat(w).includes(n) : w.includes(n)
        },
        P = function() {
            return function(n, e, t) {
                return e && m(n.prototype, e), t && m(n, t), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n
            }((function n(e) {
                var t = this;
                if (function(n, e) {
                        if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n), this.setupOptions(e), "complete" === document.readyState) this.initializeWidget();
                else var r = setInterval((function() {
                    "complete" === document.readyState && (t.initializeWidget(), clearInterval(r))
                }), 250);
                this.viewStory = [], this.viewArray = [], this.storyViewing = !1, this.playerOpen = !1, this.pageNumber = 1, this.pagesLoaded = 0, this.hasMoreStories = !0, this.loadingStories = !1, this.navigationSetupDone = !1, this.playerInitialized = !1, this.isPaginated = !1, this.checkScrollPosition = this.checkScrollPosition.bind(this)
            }), [{
                key: "setupOptions",
                value: function(n) {
                    this.options = p(p(p({}, b), this.options || {}), n)
                }
            }, {
                key: "buildWidget",
                value: function() {
                    var n = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = this.options,
                        r = document.querySelector("".concat(t.root));
                    if (this.playerInitialized || (r.innerHTML = "", this.playerInitialized = !0), k.includes(t.design)) {
                        this.isPaginated = !0;
                        var o = r.querySelector(".ms-player-scrollable-area");
                        o && (o.innerHTML = "")
                    }
                    if (this.isPaginated) {
                        var i = r.querySelector(".ms-pgno");
                        i && (i.innerHTML = this.pageNumber - 1)
                    }
                    this.buildStoryWidget(t.stories, r);
                    var s = r.querySelector(".".concat(t.storyClass, " .ms-player-scrollable-area"));
                    s && s.childNodes.forEach((function(e) {
                        e.addEventListener("click", (function(r) {
                            var o = t.stories.findIndex((function(n) {
                                    return n.id === e.id
                                })),
                                i = t.stories[o].url;
                            n.openStory(i)
                        }))
                    })), e && this.isPaginated && window.scrollTo({
                        top: r.scrollTop,
                        behavior: "smooth"
                    })
                }
            }, {
                key: "initializeWidget",
                value: function() {
                    var n = this;
                    this.options.stories ? this.buildWidget() : setTimeout((function() {
                        return n.loadStoriesFromAPI()
                    }), 5), "function" != typeof AmpStoryPlayer && this.addAmpPlayer()
                }
            }, {
                key: "getDesignLoader",
                value: function(n) {
                    return ""
                }
            }, {
                key: "addStoriesToPlayer",
                value: function(n) {
                    var e = {
                        stories: x(n || [], this.options.stories)
                    };
                    this.setupOptions(e)
                }
            }, {
                key: "loadStoriesFromAPI",
                value: function() {
                    var n = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (this.loadingStories) return !1;
                    if (this.pageNumber + 1 <= this.pagesLoaded) return this.pageNumber++, this.buildWidget(e), !1;
                    var t = this.options && this.options.widgetId || !1;
                    if (!t) {
                        if (!this.options.stories) throw new Error("Provide a list of stories or a widget ID to continue.");
                        return !1
                    }
                    if (this.loadingStories = !0, !this.isPaginated && this.pageNumber >= 10) return console.log("Cannot load more than 10 pages!"), document.querySelector(".show-more-cta-makestory").remove(), !1;
                    var r = this.options;
                    fetch(y(t, this.pageNumber, this.options.baseApiURL || "https://apis.v2.makestories.io"), {
                        method: "GET"
                    }).then((function(n) {
                        return n.json()
                    })).then((function(t) {
                        t ? (n.pageNumber++, n.pagesLoaded = Math.max(n.pageNumber, n.pagesLoaded), r.stories = x(r.stories || [], t.stories), r.design = t.design, r.style = p(p({}, b.style), t.style || {}), n.setupOptions(r), Array.isArray(t.stories) && t.stories.length ? n.buildWidget(e) : n.hasMoreStories = !1) : n.hasMoreStories = !1, n.loadingStories = !1
                    })).catch((function(e) {
                        n.loadingStories = !1, console.error("Error:", e)
                    }))
                }
            }, {
                key: "buildStoryWidget",
                value: function(n, e) {
                    var t = this,
                        r = localStorage.getItem("viewStoryArray");
                    r && (this.viewStory = JSON.parse(r));
                    var o = this.options,
                        i = o.storiesToShow,
                        s = void 0 === i ? 10 : i;
                    if (!o.design || !l.hasOwnProperty(o.design)) throw new Error("Design does not exist");
                    var a = document.head || document.getElementsByTagName("head")[0],
                        d = o.storyClass,
                        c = "\n            .".concat(d, ' *{ box-sizing: border-box; }\n            .mssploader{\n                    display: flex;\n                    top: 0;\n                    left: 0;\n                    position: fixed;\n                    width: 100%;\n                    height: 100%;\n                    z-index: 9999;\n                    align-items: center;\n                    justify-content: center;\n                    background: rgba(0,0,0,0.7);\n                    backdrop-filter: blur(3px);\n                }  \n                .mssploader.to-hide{\n                    transition: 0.25s;\n                    backdrop-filter: blur(0);\n                    opacity: 0.1;\n                }\n                .mssploader:after {\n                    content: " ";\n                    display: block;\n                    width: 46px;\n                    height: 46px;\n                    border-radius: 50%;\n                    border: 5px solid black;\n                    border-color: #fff transparent;\n                    animation: mssploader 1.2s infinite;\n                }  \n                @keyframes mssploader { \n                    0% {transform: rotate(0deg);} \n                    100% {transform: rotate(360deg);} \n                }\n                .story_nav{\n                    position: absolute;\n                    z-index: -1;\n                    width: 500px;\n                    justify-content: space-between;\n                    display: flex;\n                    align-items: center;\n                    line-height: 1em;\n                    color: #fff;\n                }\n                .story_nav svg{\n                    width: 30px;\n                    fill: #fff;\n                    cursor: pointer;\n                }\n                .story_nav svg.right{\n                    transform: rotate(180deg)\n                }\n                .ms-story-player{\n                    background: #fff;\n                }\n                '),
                        p = ".ms-player-scrollable-area {\n    scroll-behavior: smooth;\n    width: 100%;\n    height: 100%;\n    padding: 15px 0;\n}\n.mssp-pwd-d2{\n    position: absolute;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%) translateY(-100%);\n    background: inherit;\n    padding: 5px 15px;\n    border-radius: 5px 5px 0 0;\n    box-shadow: 0px 4px 14px #00000014;\n    z-index: -1;\n}\n.mssp-pwd-d3,.mssp-pwd-d4{\n    display: block;\n    text-align: center;\n    padding: 5px;\n}\n.mssp-pwd-d5{\n    text-align: left;\n}\n.mssp-5 .ms-player-scrollable-area,.mssp-6 .ms-player-scrollable-area{ height: auto;}\n.ms-scroll-down-btn,\n.ms-scroll-up-btn,\n.ms-scroll-left-btn,\n.ms-scroll-right-btn {\n    position: absolute;\n    width: 40px;\n    height: 40px;\n    border: none;\n    z-index: 9999;\n    cursor: pointer;\n    outline: none;\n    border-radius: 50%;\n    background: #fff;\n    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.ms-scroll-down-btn,\n.ms-scroll-up-btn {\n    left: 50%;\n    transform: translateX(-50%);\n}\n.ms-scroll-left-btn,\n.ms-scroll-right-btn {\n    top: 50%;\n    transform: translateY(-50%);\n}\n.ms-scroll-down-btn:focus,\n.ms-scroll-up-btn:focus {\n    outline: none;\n    border: none;\n}\n.ms-scroll-up-btn svg,\n.ms-scroll-down-btn svg,\n.ms-scroll-left-btn svg,\n.ms-scroll-right-btn svg {\n    width: 30px;\n    height: 30px;\n}\n.ms-scroll-up-btn svg {\n    transform: rotate(270deg);\n}\n.ms-scroll-down-btn svg {\n    transform: rotate(90deg);\n}\n.ms-scroll-up-btn {\n    top: 10px;\n}\n.ms-scroll-down-btn {\n    bottom: 10px;\n}\n.ms-scroll-left-btn {\n    left: 10px;\n}\n.ms-scroll-left-btn svg {\n    transform: rotate(180deg);\n}\n.ms-scroll-right-btn {\n    right: 10px;\n}\n.ms-pgntn .ms-scroll-left-btn,.ms-pgntn .ms-scroll-right-btn{ position: static; transform: none }\n.ms-pgntn{ display: flex; align-items: center;justify-content: center; }\n.ms-pgno{ margin: 0 20px; }\n.ms-pgntn .ms-scroll-left-btn[disabled]{ opacity: 0.5; cursor: not-allowed }\n\n";
                    "d1" === o.design ? p += ".amp-story-player{width: 100%; height:100%} " : p += ".amp-story-player{width: 100vw;height: 100vh; max-width: 100%; max-height: 100%;}";
                    var u = c + p + ".storyViewer.d1{\n                    width: 360px;\n                    height: 600px;\n                    position: fixed;\n                    right: 0;\n                    top: 50vh;\n                    transform: translateY(-50%) translateX(100%);\n                    transition: transform 0.5s, right 0.5s; \n                }\n                .storyViewer.d1.open{\n                    right: 98px;\n                    transform: translateY(-50%);\n                }\n                .msp-close-btn{ \n                    display: ".concat(o.showLogo ? "block" : "none !important", ";\n                    position: absolute;\n                    top: 10px;\n                    left: 10px;\n                    width: 35px;\n                    height: 35px;\n                    background: none;\n                    border: none;\n                    padding: 0;\n                    background: none;\n                    fill: #fff;\n                    z-index: 9999;\n                    cursor: pointer;\n                    transform: none;\n                    border-radius: 0;\n                }\n                .storyViewer.d1 .msp-close-btn{\n                    transform: translateX(-100%);\n                    border-radius: 4px 0 0 4px;\n                    background: rgba(0,0,0,0.3);\n                    left: 0;\n                    top: 0;\n                }\n                .storyViewer.d1 .msp-close-btn,.storyViewer.d2 .msp-close-btn{display: block}\n                @media screen and (max-width: 990px){\n                    .storyViewer.d1{\n                        width: 100vw;\n                        height: 100vh;\n                        display: flex;\n                        top: 0;\n                        left: 0;\n                        align-items: center;\n                        justify-content: center;\n                        backdrop-filter: blur(10px);\n                        background: rgba(0,0,0,0.5);\n                    }\n                    .storyViewer.d1.open{\n                        right: unset;\n                        transform: none;\n                        left: 0;\n                        z-index: 9999;\n                    }\n                    .msp-close-btn, .storyViewer.d1 .msp-close-btn{\n                        display: none;\n                        transform: none;\n                        border-radius: 0;\n                        top: 13px;\n                        width: 27px;\n                        height: 27px;\n                        left: 5px;\n                    }\n                    .amp-story-player.d1{\n                        width: 360px;\n                        height: 600px;\n                        max-width: 100vw;\n                        max-height: 100vh;\n                    }\n                }\n                .storyViewer{\n                    width: 100vw;\n                    height: 100vh;\n                    position: fixed;\n                    left:0;\n                    top:0;\n                    z-index:9999;\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    backdrop-filter: blur(5px);\n                    background: rgba(0,0,0,0.5);\n                    max-height:100%;\n                }\n                .storyViewer.d1{\n                    left: unset;\n                }\n                "),
                        m = l[o.design].style(o),
                        h = "ms-pl-style-" + o.design,
                        f = document.createElement("style");
                    f.id = h;
                    var g = document.querySelector("#" + h);
                    g ? f = g : a.appendChild(f), m = u + m, m += "\n            .logo.viewed{ opacity: 0.5; }\n            ", f.innerText = m;
                    var y = document.createElement("div");
                    "d1" === o.design ? y.id = "story1" : "d2" === o.design ? y.id = "story2" : "d3" === o.design ? y.id = "story3" : "d4" === o.design ? y.id = "story4" : "d5" === o.design ? y.id = "story5" : "d6" === o.design && (y.id = "story6"), y.className = d, ["d6"].includes(o.design) || (y.style.backgroundColor = o.style.background), ["d6", "d1", "d2"].includes(o.design) || (y.style.padding = "15px");
                    var b = "",
                        v = [],
                        x = [],
                        w = 0,
                        k = (this.pageNumber - 1) * s,
                        P = (this.pageNumber - 2) * s;
                    n.length && n.forEach((function(n, e) {
                        if (t.isPaginated && (++w > k || w <= P)) return "";
                        var r = -1,
                            i = t.viewStory;
                        i && Array.isArray(i) && i.length && (r = i.findIndex((function(e) {
                            return e === n.url
                        }))), -1 === r ? b += l[o.design].build(n, !1, t.options) : (v.push(n), x.push(e))
                    })), this.viewArray = x, v.length && v.forEach((function(n, e) {
                        b += l[o.design].build(n, !0, t.options)
                    }));
                    var L = e.querySelector(".ms-player-scrollable-area");
                    L ? L.innerHTML = b : (y.innerHTML = '<div class="ms-player-scrollable-area">' + b + "</div>", e.append(y)), this.setupNavigation(d, S(o.design), o.design, o.showMore)
                }
            }, {
                key: "setupNavigation",
                value: function(n) {
                    var e = this,
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        o = arguments.length > 3 ? arguments[3] : void 0;
                    if (n) {
                        var i = document.querySelector("." + n + " .ms-player-scrollable-area");
                        if (i) {
                            if (o) {
                                var s = i.parentElement.querySelector(".show-more-cta-makestory");
                                s && s.remove();
                                var a = document.createElement("button");
                                a.classList.add("show-more-cta-makestory"), a.innerHTML = this.options.showMoreButtonText + " ", i.parentElement.append(a), i.classList.add("show-more-banner"), a.addEventListener("click", (function() {
                                    return e.showMoreCta()
                                }))
                            }
                            this.addPrevNextButtonsIfNeeded(i, t, r), window.addEventListener("resize", (function() {
                                return e.addPrevNextButtonsIfNeeded(i, t, r)
                            }))
                        }
                    }
                }
            }, {
                key: "checkScrollPosition",
                value: function(n) {
                    var e = this.options.storyClass,
                        t = document.querySelector("." + e + " .ms-player-scrollable-area"),
                        r = parseInt(window.innerWidth / 3);
                    this.addPrevNextButtonsIfNeeded(t, S(this.options.design), this.options.design), this.checkIfUserIsNearTheEndOfScroll(t, r, S(this.options.design))
                }
            }, {
                key: "showMoreCta",
                value: function() {
                    this.loadNextPage()
                }
            }, {
                key: "addPrevNextButtonsIfNeeded",
                value: function(n, e, t) {
                    var r = this;
                    this.clearNavigationButtons(n), n.removeEventListener("scroll", this.checkScrollPosition), n.addEventListener("scroll", this.checkScrollPosition);
                    var o = '<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/></svg>',
                        i = this.options.storiesToShow,
                        s = void 0 === i ? 10 : i;
                    if (this.isPaginated) {
                        if (this.options.stories && this.options.stories.length < s && 2 === this.pageNumber) return "";
                        var a = document.createElement("div");
                        a.className = "ms-pgntn";
                        var l = document.createElement("button");
                        l.innerHTML = o, l.className = "ms-scroll-left-btn", this.pageNumber <= 2 && (l.disabled = !0), l.addEventListener("click", (function(n) {
                            n.preventDefault(), r.loadPrevPage(), a.innerHTML = "<span class='ms-ld'>Loading...</span>"
                        })), a.append(l);
                        var d = document.createElement("span");
                        d.innerHTML = this.pageNumber - 1, d.className = "ms-pgno", a.append(d);
                        var c = document.createElement("button");
                        c.innerHTML = o, c.className = "ms-scroll-right-btn", c.addEventListener("click", (function(n) {
                            n.preventDefault(), r.loadNextPage(), a.innerHTML = "<span class='ms-ld'>Loading...</span>"
                        })), a.append(c), n.parentElement.append(a)
                    } else if (n.scrollWidth > n.clientWidth) {
                        var p = parseInt(33 * window.innerWidth / 100),
                            u = document.createElement("button");
                        u.innerHTML = o, u.className = "ms-scroll-left-btn", u.addEventListener("click", (function(e) {
                            e.preventDefault(), n.scrollLeft -= p
                        })), n.parentElement.append(u);
                        var m = document.createElement("button");
                        m.innerHTML = o, m.className = "ms-scroll-right-btn", m.addEventListener("click", (function(e) {
                            e.preventDefault(), n.scrollLeft += p
                        })), n.parentElement.append(m), n.parentElement.classList.add("add-padding")
                    } else if (e && n.scrollHeight > n.clientHeight) {
                        var h = document.createElement("button");
                        h.innerHTML = o, h.className = "ms-scroll-down-btn", h.addEventListener("click", (function(e) {
                            e.preventDefault(), n.scrollTop += 100
                        })), n.parentElement.append(h);
                        var f = document.createElement("button");
                        f.innerHTML = o, f.className = "ms-scroll-up-btn", f.addEventListener("click", (function(e) {
                            e.preventDefault(), n.scrollTop -= 100
                        })), n.parentElement.append(f), n.parentElement.classList.add("add-padding")
                    } else ["d5"].includes(t) || this.options.showMore || setTimeout((function() {
                        return r.loadNextPage()
                    }), 1e3)
                }
            }, {
                key: "checkIfUserIsNearTheEndOfScroll",
                value: function(n, e) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    t ? n.scrollTop + n.clientHeight + e > n.scrollHeight - v && this.loadNextPage() : n.scrollLeft + n.clientWidth + e > n.scrollWidth - v && this.loadNextPage()
                }
            }, {
                key: "clearNavigationButtons",
                value: function(n) {
                    n.parentElement.classList.remove("add-padding");
                    var e = n.parentElement.querySelector(".ms-scroll-up-btn");
                    e && e.remove();
                    var t = n.parentElement.querySelector(".ms-scroll-down-btn");
                    t && t.remove();
                    var r = n.parentElement.querySelector(".ms-scroll-left-btn");
                    r && r.remove();
                    var o = n.parentElement.querySelector(".ms-scroll-right-btn");
                    o && o.remove();
                    var i = n.parentElement.querySelector(".ms-pgntn");
                    return i && i.remove(), !0
                }
            }, {
                key: "loadNextPage",
                value: function() {
                    this.loadStoriesFromAPI(!0)
                }
            }, {
                key: "loadPrevPage",
                value: function() {
                    this.pageNumber = this.pageNumber - 1, this.buildWidget(!0)
                }
            }, {
                key: "addAmpPlayer",
                value: function() {
                    var n = document.querySelector("head");
                    if (n) {
                        var e = document.createElement("script");
                        e.type = "text/javascript", e.src = "https://cdn.ampproject.org/amp-story-player-v0.js", n.appendChild(e);
                        var t = document.createElement("link");
                        t.rel = "stylesheet", t.href = "https://cdn.ampproject.org/amp-story-player-v0.css", n.appendChild(t)
                    }
                }
            }, {
                key: "openStory",
                value: function(n) {
                    var e = this;
                    if (this.playerOpen && "function" == typeof this.playerOpen.show) this.playerOpen.show(n);
                    else {
                        if ("function" != typeof AmpStoryPlayer) return this.markStoryViewing(n), window.open(n), void console.error("There was a problem loading the story in the player! Please ensure that the AMP Story Player script is inserted correctly");
                        var t = this.options,
                            r = t.stories,
                            o = r.findIndex((function(e) {
                                return e.url === n
                            })),
                            i = document.createElement("div");
                        i.className = "mssploader";
                        var s = document.createElement("div");
                        s.className = "storyViewer " + t.design, document.body.appendChild(s), s.appendChild(i);
                        var a = function() {
                            s.classList.remove("open"), e.playerOpen = !1, setTimeout((function() {
                                return s.remove()
                            }), 100)
                        };
                        s.addEventListener("click", (function(n) {
                            n.target === s && a()
                        }));
                        var l = document.createElement("button");
                        l.className = "msp-close-btn", l.innerHTML = '<svg viewBox="0 0 32 32"><path d="M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z"/></svg>', s.appendChild(l), l.addEventListener("click", a), setTimeout((function() {
                            return s.classList.add("open")
                        }));
                        var d = document.createElement("div");
                        d.innerHTML = '<svg  class="left" viewBox="0 0 444.531 444.531">\n    <path d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835\n        l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425\n        c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564\n        s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978\n        L213.13,222.409z"/>\n</svg>\n<svg  class="right" viewBox="0 0 444.531 444.531">\n    <path d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835\n        l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425\n        c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564\n        s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978\n        L213.13,222.409z"/>\n</svg>\n', d.classList.add("story_nav"), s.appendChild(d);
                        var c = document.createElement("amp-story-player");
                        c.classList.add("amp-story-player");
                        for (var p = [], u = [], m = [], h = '<script type="application/json">\n   {\n   "controls": [\n       {\n         "name": "close",\n         "position": "'.concat(t.showLogo ? "end" : "start", '"\n       },\n       {\n         "name":"skip-to-next",\n         "position":"end"\n       }\n     ],\n     ').concat(t.loop ? '"behavior": {\n       "on": "end",\n       "action": "circular-wrapping"\n     },' : "", '\n     "display": {\n      "attribution": ').concat(!!t.showLogo && '"auto"', "\n    }\n   }\n <\/script>"), g = this.viewArray, y = [n], b = 0; b < r.length; b++)
                            if (g.includes(b)) {
                                var v = r[b].url;
                                y.includes(v) || (m.push(v), y.push(v))
                            } else if (b < o) {
                            var x = r[b].url;
                            y.includes(x) || (p.push(x), y.push(x))
                        } else if (b > o) {
                            var w = r[b].url;
                            y.includes(w) || (u.push(w), y.push(w))
                        }
                        var k = f(new Set([n].concat(u, p, m)));
                        h += k.map((function(n) {
                            return '<a href="'.concat(n, '"></a>')
                        })).join(""), c.innerHTML = h, s.append(c);
                        var S = new AmpStoryPlayer(window, c);
                        this.playerOpen = S, c.addEventListener("ready", (function() {
                            return setTimeout(P, 3e3)
                        })), c.addEventListener("navigation", (function(n) {
                            var t = n.detail.index,
                                r = void 0 === t ? 0 : t;
                            e.markStoryViewing(k[r])
                        })), S.load(), d.querySelector(".left").addEventListener("click", (function() {
                            S.go(-1)
                        })), d.querySelector(".right").addEventListener("click", (function() {
                            S.go(1)
                        })), c.addEventListener("amp-story-player-close", a), this.markStoryViewing(n)
                    }

                    function P() {
                        i.classList.add("to-hide"), setTimeout((function() {
                            return s.removeChild(i)
                        }), 500)
                    }
                }
            }, {
                key: "markStoryViewing",
                value: function(n) {
                    this.storyViewing && this.markStoryCompleted(this.storyViewing), this.storyViewing = n
                }
            }, {
                key: "markStoryCompleted",
                value: function(n) {
                    var e = this.viewStory;
                    e && Array.isArray(e) && (-1 === e.findIndex((function(e) {
                        return e === n
                    })) && e.push(n), localStorage.setItem("viewStoryArray", ""), localStorage.setItem("viewStoryArray", JSON.stringify(e)), this.buildWidget())
                }
            }])
        }();
    window.msPlayer = function(n) {
        return new P(n)
    }
}])