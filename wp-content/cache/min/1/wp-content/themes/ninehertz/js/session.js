! function(e) {
    e.session = {
        _id: null,
        _cookieCache: void 0,
        _init: function() {
            window.name || (window.name = Math.random()), this._id = window.name, this._initCache();
            var e = new RegExp(this._generatePrefix() + "=([^;]+);").exec(document.cookie);
            if (e && document.location.protocol !== e[1]) {
                this._clearSession();
                for (var t in this._cookieCache) try {
                    window.sessionStorage.setItem(t, this._cookieCache[t])
                } catch (i) {}
            }
            document.cookie = this._generatePrefix() + "=" + document.location.protocol + ";path=/;expires=" + new Date((new Date).getTime() + 12e4).toUTCString()
        },
        _generatePrefix: function() {
            return "__session:" + this._id + ":"
        },
        _initCache: function() {
            var e = document.cookie.split(";");
            this._cookieCache = {};
            for (var t in e) {
                var i = e[t].split("=");
                new RegExp(this._generatePrefix() + ".+").test(i[0]) && i[1] && (this._cookieCache[i[0].split(":", 3)[2]] = i[1])
            }
        },
        _setFallback: function(e, t, i) {
            var o = this._generatePrefix() + e + "=" + t + "; path=/";
            return i && (o += "; expires=" + new Date(Date.now() + 12e4).toUTCString()), document.cookie = o, this._cookieCache[e] = t, this
        },
        _getFallback: function(e) {
            return this._cookieCache || this._initCache(), this._cookieCache[e]
        },
        _clearFallback: function() {
            for (var e in this._cookieCache) document.cookie = this._generatePrefix() + e + "=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
            this._cookieCache = {}
        },
        _deleteFallback: function(e) {
            document.cookie = this._generatePrefix() + e + "=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;", delete this._cookieCache[e]
        },
        get: function(e) {
            return window.sessionStorage.getItem(e) || this._getFallback(e)
        },
        set: function(e, t, i) {
            try {
                window.sessionStorage.setItem(e, t)
            } catch (o) {}
            return this._setFallback(e, t, i || !1), this
        },
        "delete": function(e) {
            return this.remove(e)
        },
        remove: function(e) {
            try {
                window.sessionStorage.removeItem(e)
            } catch (t) {}
            return this._deleteFallback(e), this
        },
        _clearSession: function() {
            try {
                window.sessionStorage.clear()
            } catch (e) {
                for (var t in window.sessionStorage) window.sessionStorage.removeItem(t)
            }
        },
        clear: function() {
            return this._clearSession(), this._clearFallback(), this
        }
    }, e.session._init()
}(jQuery);
jQuery(document).ready(function($) {
    var initreferrer = document.referrer;
    console.log(document.referrer);
    if (initreferrer.indexOf('theninehertz') == -1) {
        var landingurl = window.location.href;
        $.session.set('landingpage', landingurl)
    }
    if (initreferrer.indexOf('theninehertz') > -1) {
        $.session.set('goal_submission', initreferrer);
        var goal_submission = $.session.get('goal_submission')
    } else {
        $.session.set('ref', initreferrer);
        var urlHost = $.session.get('ref')
    }
    if (typeof($.session.get('ref')) != "undefined") {
        var urlHost = $.session.get('ref')
    } else {
        var urlHost = ''
    }
    if (typeof($.session.get('landingpage')) != "undefined") {
        var landfromhost = $.session.get('landingpage')
    } else {
        var landfromhost = ''
    }
    jQuery('#req_reffers_fm').val(urlHost);
    jQuery('#req_reffers_destination').val(landfromhost);
    jQuery('#req_reffers_destination1').val(landfromhost);
    jQuery('#req_reffers_destination2').val(landfromhost);
    jQuery('#reffer_goal_submission').val(goal_submission);
    jQuery('#reffer_goal_submission1').val(goal_submission);
    jQuery('#reffer_goal_submission2').val(goal_submission);
    jQuery('#req_reffers_fm1').val(urlHost);
    jQuery('#req_reffers_fm2').val(urlHost);
    jQuery('#req_reffers_fm3').val(urlHost)
})