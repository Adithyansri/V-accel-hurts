(function() {
    var guid = 0;
    var exitModalObj = function(element, options) {
        this.guid = guid++;
        this.settings = $.extend({}, exitModalInterface.defaults, options);
        this.$element = $(element);
        this.showCounter = 0;
        this.eventPrefix = '.exitModal' + this.guid;
        this.modalShowEvent = 'show.bs.modal' + this.eventPrefix;
        this.modalShownEvent = 'shown.bs.modal' + this.eventPrefix;
        this.modalHideEvent = 'hide.bs.modal' + this.eventPrefix;
        this.modalHiddenEvent = 'hidden.bs.modal' + this.eventPrefix
    }
    exitModalObj.prototype = {
        init: function() {
            var plugin = this;
            plugin.$element.modal({
                backdrop: plugin.settings.modalBackdrop,
                keyboard: plugin.settings.modalKeyboard,
                show: !1
            });
            plugin.$element.on(plugin.modalShowEvent, function(e) {
                plugin.showCounter++;
                plugin.mouseOutEventUnbind();
                plugin.settings.callbackOnModalShow.call(plugin)
            });
            plugin.$element.on(plugin.modalShownEvent, function(e) {
                plugin.settings.callbackOnModalShown.call(plugin)
            });
            plugin.$element.on(plugin.modalHideEvent, function(e) {
                plugin.settings.callbackOnModalHide.call(plugin)
            });
            plugin.$element.on(plugin.modalHiddenEvent, function(e) {
                if (plugin.settings.numberToShown) {
                    if (plugin.showCounter < plugin.settings.numberToShown) {
                        plugin.mouseOutEventBind()
                    }
                } else {
                    plugin.mouseOutEventBind()
                }
                plugin.settings.callbackOnModalHidden.call(plugin)
            });
            plugin.mouseOutEventBind()
        },
        mouseOutEventBind: function() {
            var plugin = this;
            var oldY = 0;
            $(plugin.settings.viewportSelector).on("mousemove" + plugin.eventPrefix, function(e) {
                if ((e.clientY <= plugin.settings.pageYValueForEventFired) && (e.pageY < oldY)) {
                    plugin.showModal()
                }
                oldY = e.pageY
            })
        },
        mouseOutEventUnbind: function() {
            var plugin = this;
            $(plugin.settings.viewportSelector).off("mousemove" + plugin.eventPrefix)
        },
        allEventsUnbind: function() {
            var plugin = this;
            $(plugin.settings.viewportSelector).off(plugin.eventPrefix);
            plugin.$element.off(plugin.eventPrefix)
        },
        showModal: function() {
            var plugin = this;
            plugin.$element.modal('show')
        },
        hideModal: function() {
            var plugin = this;
            plugin.$element.modal('hide')
        },
        destroy: function() {
            var plugin = this;
            plugin.allEventsUnbind();
            plugin.$element.data('exitModal', null)
        }
    };

    function exitModalInterface(methodOrOptions) {
        var methodsParameters = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            if (!$(this).data('exitModal')) {
                var plugin = new exitModalObj(this, methodOrOptions);
                $(this).data('exitModal', plugin);
                plugin.init()
            } else if (typeof methodOrOptions === 'object') {
                $.error('jQuery.exitModal already initialized')
            } else {
                var plugin = $(this).data('exitModal');
                if (plugin[methodOrOptions]) {
                    plugin[methodOrOptions].apply(plugin, methodsParameters)
                } else {
                    $.error('Method ' + methodOrOptions + ' does not exist on jQuery.exitModal')
                }
            }
        })
    }
    exitModalInterface.defaults = {
        viewportSelector: document,
        showButtonClose: !0,
        showButtonCloseOnlyForMobile: !0,
        pageYValueForEventFired: 10,
        numberToShown: !1,
        modalBackdrop: !0,
        modalKeyboard: !0,
        modalShowEvent: 'show.bs.modal',
        modalShownEvent: 'shown.bs.modal',
        modalHideEvent: 'hide.bs.modal',
        modalHiddenEvent: 'hidden.bs.modal',
        callbackOnModalShow: function() {},
        callbackOnModalShown: function() {},
        callbackOnModalHide: function() {},
        callbackOnModalHidden: function() {}
    };
    $.fn.exitModal = exitModalInterface
})();
$(document).ready(function() {
    var timer;
    var exitModalParams = {
        numberToShown: 1,
        callbackOnModalShow: function() {
            var counter = $('.exit-modal').data('exitModal').showCounter
        },
    }
    $('.destroy-exit-modal').on("click", function(e) {
        e.preventDefault();
        if ($('.exit-modal').data('exit-modal')) {
            $(".initialized-state").hide();
            $(".destroyed-state").show()
        }
        $('.exit-modal').exitModal('hideModal');
        $('.exit-modal').exitModal('destroy');
        $(".initialized").hide()
    });
    $('.exit-modal').exitModal(exitModalParams);
    if ($('.exit-modal').data('exit-modal')) {
        $(".destroyed-state").hide();
        $(".initialized-state").show()
    }
    $('.close-exit-modal').on('click', function(e) {
        e.preventDefault();
        $('.exit-modal').exitModal('hideModal')
    })
})