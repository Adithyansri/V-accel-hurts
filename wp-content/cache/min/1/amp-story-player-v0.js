! function() {
    function t(t, i, n) {
        return i in t ? Object.defineProperty(t, i, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[i] = n, t
    }
    var i = Array.isArray;

    function n(t, i) {
        for (var n = [], r = 0, s = 0; s < t.length; s++) {
            var e = t[s];
            i(e, s, t) ? n.push(e) : (r < s && (t[r] = e), r++)
        }
        return r < t.length && (t.length = r), n
    }

    function r(t, i) {
        for (var n = 0; n < t.length; n++)
            if (i(t[n], n, t)) return n;
        return -1
    }

    function s(t) {
        return "string" == typeof t
    }

    function e(t, i) {
        (null == i || i > t.length) && (i = t.length);
        for (var n = 0, r = new Array(i); n < i; n++) r[n] = t[n];
        return r
    }

    function o(t, i) {
        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (n) return (n = n.call(t)).next.bind(n);
        if (Array.isArray(t) || (n = function(t, i) {
                if (t) {
                    if ("string" == typeof t) return e(t, i);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? e(t, i) : void 0
                }
            }(t)) || i && t && "number" == typeof t.length) {
            n && (t = n);
            var r = 0;
            return function() {
                return r >= t.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: t[r++]
                }
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var h = Object.prototype;

    function u(t) {
        var i = Object.create(null);
        return t && Object.assign(i, t), i
    }

    function f(t) {
        return 1 == (null == t ? void 0 : t.nodeType)
    }
    h.hasOwnProperty, h.toString;
    var l = "​​​";

    function c(t) {
        return f(t) ? t.tagName.toLowerCase() + (t.id ? "#".concat(t.id) : "") : t
    }

    function p(t, i) {
        var r, s, e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Assertion failed";
        if (i) return i;
        t && -1 == e.indexOf(t) && (e += t);
        for (var o = 3, a = e.split("%s"), h = a.shift(), u = [h]; a.length;) {
            var f = arguments[o++],
                l = a.shift();
            h += c(f) + l, u.push(f, l.trim())
        }
        var p = new Error(h);
        throw p.messageArray = n(u, (function(t) {
            return "" !== t
        })), null === (r = (s = self).__AMP_REPORT_ERROR) || void 0 === r || r.call(s, p), p
    }

    function m(t, n, r, s, e) {
        return i(e) ? t(r, e.concat([n])) : t(r, "".concat(e || s, ": %s"), n), n
    }

    function v(t) {
        var i = Object.getOwnPropertyDescriptor(t, "message");
        if (null != i && i.writable) return t;
        var n = t.message,
            r = t.stack,
            s = new Error(n);
        for (var e in t) s[e] = t[e];
        return s.stack = r, s
    }

    function d(t) {
        for (var i, n = null, r = "", s = o(arguments, !0); !(i = s()).done;) {
            var e = i.value;
            e instanceof Error && !n ? n = v(e) : (r && (r += " "), r += e)
        }
        return n ? r && (n.message = r + ": " + n.message) : n = new Error(r), n
    }

    function y(t) {
        var i = d.apply(null, arguments);
        return i.expected = !0, i
    }

    function g(t) {
        var i = !1,
            n = null,
            r = t;
        return function() {
            if (!i) {
                for (var t = arguments.length, s = new Array(t), e = 0; e < t; e++) s[e] = arguments[e];
                n = r.apply(self, s), i = !0, r = null
            }
            return n
        }
    }

    function b(t, i, n) {
        var r = 0,
            s = null;

        function e(e) {
            s = null, r = t.setTimeout(o, n), i.apply(null, e)
        }

        function o() {
            r = 0, s && e(s)
        }
        return function() {
            for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
            r ? s = i : e(i)
        }
    }
    var w = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;

    function x(t) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        try {
            return decodeURIComponent(t)
        } catch (t) {
            return i
        }
    }

    function k(t) {
        var i, n = u();
        if (!t) return n;
        for (; i = w.exec(t);) {
            var r = x(i[1], i[1]),
                s = i[2] ? x(i[2].replace(/\+/g, " "), i[2]) : "";
            n[r] = s
        }
        return n
    }

    function S(t) {
        var i = (t || self).location;
        return k(i.originalHash || i.hash)
    }
    var A = function(t) {
            return self.AMP_CONFIG ? self.AMP_CONFIG[t] : null
        },
        j = ("string" == typeof A("cdnProxyRegex") ? new RegExp(A("cdnProxyRegex")) : A("cdnProxyRegex")) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;

    function I(t) {
        if (!self.document || !self.document.head) return null;
        if (self.location && j.test(self.location.origin)) return null;
        var i = self.document.head.querySelector('meta[name="'.concat(t, '"]'));
        return i && i.getAttribute("content") || null
    }
    var R = A("cdnUrl") || I("runtime-host") || "https://cdn.ampproject.org",
        E = "";

    function C(t) {
        var i = t || self;
        return i.__AMP_MODE ? i.__AMP_MODE : i.__AMP_MODE = function(t) {
            return {
                localDev: !1,
                development: M(t, S(t)),
                esm: !1,
                test: !1,
                rtvVersion: O(t),
                ssrReady: !1
            }
        }(i)
    }

    function O(t) {
        var i;
        return E || (E = (null === (i = t.AMP_CONFIG) || void 0 === i ? void 0 : i.v) || "01".concat("2502032353000")), E
    }

    function M(t, i) {
        var n = i || S(t);
        return ["1", "actions", "amp", "amp4ads", "amp4email"].includes(n.development) || !!t.AMP_DEV_MODE
    }
    var P = function() {},
        T = function() {
            return "01".concat("2502032353000")
        },
        U = function(t, i) {
            return i.reduce((function(t, i) {
                return "".concat(t, "&s[]=").concat(q(i))
            }), "https://log.amp.dev/?v=".concat(T(), "&id=").concat(encodeURIComponent(t)))
        },
        z = function() {
            return "".concat(R, "/rtv/").concat(T(), "/log-messages.simple.json")
        },
        q = function(t) {
            return encodeURIComponent(String(c(t)))
        },
        _ = function(t) {
            return parseInt(S(t).log, 10)
        },
        F = function() {
            function n(t, i) {
                var n = this,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                this.win = t, this.wt = i, this.yt = this.jt(), this.Ot = r, this.xt = null, this.At = g((function() {
                    t.fetch(z()).then((function(t) {
                        return t.json()
                    }), P).then((function(t) {
                        t && (n.xt = t)
                    }))
                })), this.Et = this.assert.bind(this)
            }
            var r = n.prototype;
            return r.jt = function() {
                var t, i = this.win;
                return null !== (t = i.console) && void 0 !== t && t.log && 0 != _(i) ? this.Pt() : 0
            }, r.Pt = function(t) {
                return this.wt(_(t), C().development)
            }, r.St = function(i, n, r) {
                var e, o;
                if (n > this.yt) return !1;
                var a = this.win.console,
                    h = null !== (e = (o = {}, t(o, 1, a.error), t(o, 3, a.info), t(o, 2, a.warn), o)[n]) && void 0 !== e ? e : a.log,
                    u = this.Mt(r),
                    f = "[".concat(i, "]");
                return s(u[0]) ? u[0] = f + " " + u[0] : u.unshift(f), h.apply(a, u), !0
            }, r.fine = function(t) {
                for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
                this.St(t, 4, n)
            }, r.info = function(t) {
                for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
                this.St(t, 3, n)
            }, r.warn = function(t) {
                for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
                this.St(t, 2, n)
            }, r.error = function(t) {
                for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
                if (!this.St(t, 1, n)) {
                    var s, e, o = this.createError.apply(this, n);
                    o.name = t || o.name, null === (s = (e = self).__AMP_REPORT_ERROR) || void 0 === s || s.call(e, o)
                }
            }, r.expectedError = function(t) {
                for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
                var s, e;
                this.St(t, 1, n) || null === (s = (e = self).__AMP_REPORT_ERROR) || void 0 === s || s.call(e, this.createExpectedError.apply(this, n))
            }, r.createError = function(t) {
                return this.It(d.apply(null, arguments))
            }, r.createExpectedError = function(t) {
                return this.It(y.apply(null, arguments))
            }, r.It = function(t) {
                return t = v(t), this.Ot ? t.message ? -1 == t.message.indexOf(this.Ot) && (t.message += this.Ot) : t.message = this.Ot : t.message.indexOf(l) >= 0 && (t.message = t.message.replace(l, "")), t
            }, r.Mt = function(t) {
                return i(t[0]) ? this.kt(t[0]) : t
            }, r.kt = function(t) {
                var i, n = t.shift();
                return C(this.win).development && this.At(), null !== (i = this.xt) && void 0 !== i && i[n] ? [this.xt[n]].concat(t) : ["More info at ".concat(U(n, t))]
            }, r.assert = function(t, n, r) {
                return i(n) ? this.assert.apply(this, [t].concat(this.kt(n))) : p.apply(null, [this.Ot].concat(Array.prototype.slice.call(arguments)))
            }, r.assertElement = function(t, i) {
                return function(t, i, n) {
                    return m(t, i, f(i), "Element expected", n)
                }(this.Et, t, i)
            }, r.assertString = function(t, i) {
                return function(t, i, n) {
                    return m(t, i, s(i), "String expected", n)
                }(this.Et, t, i)
            }, r.assertNumber = function(t, i) {
                return function(t, i, n) {
                    return m(t, i, "number" == typeof i, "Number expected", n)
                }(this.Et, t, i)
            }, r.assertArray = function(t, n) {
                return function(t, n, r) {
                    return m(t, n, i(n), "Array expected", r)
                }(this.Et, t, n)
            }, r.assertBoolean = function(t, i) {
                return function(t, i, n) {
                    return m(t, i, !!i === i, "Boolean expected", n)
                }(this.Et, t, i)
            }, n
        }();
    self.__AMP_LOG = self.__AMP_LOG || {
        user: null,
        dev: null,
        userForEmbed: null
    };
    var D = self.__AMP_LOG,
        N = null;

    function Y() {
        N = F, $(),
            function(t) {
                if (D.user || (D.user = Z(l)), void D.user.win) return D.userForEmbed || (D.userForEmbed = Z("​​​​"));
                D.user
            }()
    }

    function L(t, i) {
        if (!N) throw new Error("failed to call initLogConstructor");
        return new N(self, t, i)
    }

    function Z(t) {
        return L((function(t, i) {
            return i || t >= 1 ? 4 : 2
        }), t)
    }

    function $() {
        return D.dev || (D.dev = L((function(t) {
            return t >= 3 ? 4 : t >= 2 ? 3 : 0
        })))
    }
    var H, X = function() {
        function t(t, i) {
            this.t = t, this.ql = i, this.Yl = this.t.document, this.Zl = !1, this.$l = !1, this.Xl = null
        }
        var i = t.prototype;
        return i.buildCallback = function() {
            this.Zl || (this.Gl(), this.Zl = !0)
        }, i.layoutCallback = function() {
            this.$l || (this.$l = !0)
        }, i.Gl = function() {
            this.Xl = this.Yl.createElement("main");
            var t = this.ql.attachShadow({
                    mode: "open"
                }),
                i = this.Yl.createElement("style");
            i.textContent = "amp-story-entry-point{position:relative;display:block}\n/*# sourceURL=/css/amp-story-entry-point.css*/", t.appendChild(i), t.appendChild(this.Xl)
        }, i.getElement = function() {
            return this.ql
        }, t
    }();

    function G() {
        return H || (H = Promise.resolve(void 0))
    }
    var J = function() {
        var t = this;
        this.promise = new Promise((function(i, n) {
            t.resolve = i, t.reject = n
        }))
    };

    function V(t, i) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            i && (r = r.filter((function(i) {
                return Object.getOwnPropertyDescriptor(t, i).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function B(i) {
        for (var n = 1; n < arguments.length; n++) {
            var r = null != arguments[n] ? arguments[n] : {};
            n % 2 ? V(Object(r), !0).forEach((function(n) {
                t(i, n, r[n])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r)) : V(Object(r)).forEach((function(t) {
                Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return i
    }
    var K = "ase art bmp blp cd5 cit cpt cr2 cut dds dib djvu egt exif gif gpl grf icns ico iff jng jpeg jpg jfif jp2 jps lbm max miff mng msp nitf ota pbm pc1 pc2 pc3 pcf pcx pdn pgm PI1 PI2 PI3 pict pct pnm pns ppm psb psd pdd psp px pxm pxr qfx raw rle sct sgi rgb int bw tga tiff tif vtf xbm xcf xpm 3dv amf ai awg cgm cdr cmx dxf e2d egt eps fs gbr odg svg stl vrml x3d sxd v2d vnd wmf emf art xar png webp jxr hdp wdp cur ecw iff lbm liff nrrd pam pcx pgf sgi rgb rgba bw int inta sid ras sun tga".split(" "),
        W = function(t) {
            return K.some((function(i) {
                return !!t.endsWith(".".concat(i))
            }))
        },
        Q = "### #gf $on $tf 0b 8m 8u 12u 15u 64c 075 75 085 85 91 091 096 96 abf acfm acs afm afn afs all amfm apf asf aspf atm auf b30 bco bdf bepf bez bfn bmap bmf bx bzr cbtf cct cef cff cfn cga ch4 cha chm chr chx claf collection compositefont dfont dus dzk eft eot etx euf f00 f06 f08 f09 f3f f10 f11 f12 f13 f16 fd fdb ff ffil flf fli fn3 fnb fnn fnt fnta fo1 fo2 fog fon font fonts fot frf frs ftm fxr fyi gdr gf gft glf glif glyphs gsf gxf hbf ice intellifont lepf lft lwfn mcf mcf mfd mfm mft mgf mmm mrf mtf mvec nlq ntf odttf ofm okf otf pcf pcf pfa pfb pfm pft phf pk pkt prs pss qbf qfn r8? scr sfd sff sfi sfl sfn sfo sfp sfs sif snf spd spritefont sui suit svg sxs t1c t2 tb1 tb2 tdf tfm tmf tpf ttc tte ttf type ufm ufo usl usp us? vf vf1 vf3 vfb vfm vfont vlw vmf vnf w30 wfn wnf woff woff2 xfc xfn xfr xft zfi zsu _v".split(" "),
        tt = function(t) {
            return Q.some((function(i) {
                return !!t.endsWith(".".concat(i))
            }))
        },
        it = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function nt(t, i) {
        if (i = i.split(":")[0], !(t = +t)) return !1;
        switch (i) {
            case "http":
            case "ws":
                return 80 !== t;
            case "https":
            case "wss":
                return 443 !== t;
            case "ftp":
                return 21 !== t;
            case "gopher":
                return 70 !== t;
            case "file":
                return !1
        }
        return 0 !== t
    }
    var rt = Object.prototype.hasOwnProperty;

    function st(t) {
        try {
            return decodeURIComponent(t.replace(/\+/g, " "))
        } catch (t) {
            return null
        }
    }
    var et = {
            stringify: function(t, i) {
                i = i || "";
                var n, r = [];
                for (s in "string" != typeof i && (i = "?"), t)
                    if (rt.call(t, s)) {
                        (n = t[s]) || null != n && !isNaN(n) || (n = "");
                        var s = encodeURIComponent(s);
                        n = encodeURIComponent(n), null !== s && null !== n && r.push(s + "=" + n)
                    }
                return r.length ? i + r.join("&") : ""
            },
            parse: function(t) {
                for (var i, n = /([^=?&]+)=?([^&]*)/g, r = {}; i = n.exec(t);) {
                    var s = st(i[1]);
                    i = st(i[2]), null === s || null === i || s in r || (r[s] = i)
                }
                return r
            }
        },
        ot = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
        at = /[\n\r\t]/g,
        ht = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
        ut = /:\d+$/,
        ft = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
        lt = /^[a-zA-Z]:/;

    function ct(t) {
        return (t || "").toString().replace(ot, "")
    }
    var pt = [
            ["#", "hash"],
            ["?", "query"],
            function(t, i) {
                return dt(i.protocol) ? t.replace(/\\/g, "/") : t
            },
            ["/", "pathname"],
            ["@", "auth", 1],
            [NaN, "host", void 0, 1, 1],
            [/:(\d*)$/, "port", void 0, 1],
            [NaN, "hostname", void 0, 1, 1]
        ],
        mt = {
            hash: 1,
            query: 1
        };

    function vt(t) {
        var i = ("undefined" != typeof window ? window : void 0 !== it ? it : "undefined" != typeof self ? self : {}).location || {};
        t = t || i, i = {};
        var n, r = a(t);
        if ("blob:" === t.protocol) i = new gt(unescape(t.pathname), {});
        else if ("string" === r)
            for (n in i = new gt(t, {}), mt) delete i[n];
        else if ("object" === r) {
            for (n in t) n in mt || (i[n] = t[n]);
            void 0 === i.slashes && (i.slashes = ht.test(t.href))
        }
        return i
    }

    function dt(t) {
        return "file:" === t || "ftp:" === t || "http:" === t || "https:" === t || "ws:" === t || "wss:" === t
    }

    function yt(t, i) {
        t = (t = ct(t)).replace(at, ""), i = i || {};
        var n = (t = ft.exec(t))[1] ? t[1].toLowerCase() : "",
            r = !!t[2],
            s = !!t[3],
            e = 0;
        return r ? s ? (s = t[2] + t[3] + t[4], e = t[2].length + t[3].length) : (s = t[2] + t[4], e = t[2].length) : s ? (s = t[3] + t[4], e = t[3].length) : s = t[4], "file:" === n ? 2 <= e && (s = s.slice(2)) : dt(n) ? s = t[4] : n ? r && (s = s.slice(2)) : 2 <= e && dt(i.protocol) && (s = t[4]), {
            protocol: n,
            slashes: r || dt(n),
            slashesCount: e,
            rest: s
        }
    }

    function gt(t, i, n) {
        if (t = (t = ct(t)).replace(at, ""), !(this instanceof gt)) return new gt(t, i, n);
        var r = pt.slice(),
            s = a(i),
            e = 0;
        "object" !== s && "string" !== s && (n = i, i = null), n && "function" != typeof n && (n = et.parse);
        var o = yt(t || "", i = vt(i));
        for (s = !o.protocol && !o.slashes, this.slashes = o.slashes || s && i.slashes, this.protocol = o.protocol || i.protocol || "", t = o.rest, ("file:" === o.protocol && (2 !== o.slashesCount || lt.test(t)) || !o.slashes && (o.protocol || 2 > o.slashesCount || !dt(this.protocol))) && (r[3] = [/(.*)/, "pathname"]); e < r.length; e++)
            if ("function" == typeof(o = r[e])) t = o(t, this);
            else {
                var h = o[0],
                    u = o[1];
                h != h ? this[u] = t : "string" == typeof h ? ~(h = "@" === h ? t.lastIndexOf(h) : t.indexOf(h)) && ("number" == typeof o[2] ? (this[u] = t.slice(0, h), t = t.slice(h + o[2])) : (this[u] = t.slice(h), t = t.slice(0, h))) : (h = h.exec(t)) && (this[u] = h[1], t = t.slice(0, h.index)), this[u] = this[u] || s && o[3] && i[u] || "", o[4] && (this[u] = this[u].toLowerCase())
            }
        if (n && (this.query = n(this.query)), s && i.slashes && "/" !== this.pathname.charAt(0) && ("" !== this.pathname || "" !== i.pathname)) {
            if (t = this.pathname, i = i.pathname, "" !== t) {
                for (n = (i = (i || "/").split("/").slice(0, -1).concat(t.split("/")))[(t = i.length) - 1], r = !1, e = 0; t--;) "." === i[t] ? i.splice(t, 1) : ".." === i[t] ? (i.splice(t, 1), e++) : e && (0 === t && (r = !0), i.splice(t, 1), e--);
                r && i.unshift(""), "." !== n && ".." !== n || i.push(""), i = i.join("/")
            }
            this.pathname = i
        }
        "/" !== this.pathname.charAt(0) && dt(this.protocol) && (this.pathname = "/" + this.pathname), nt(this.port, this.protocol) || (this.host = this.hostname, this.port = ""), this.username = this.password = "", this.auth && (~(h = this.auth.indexOf(":")) ? (this.username = this.auth.slice(0, h), this.username = encodeURIComponent(decodeURIComponent(this.username)), this.password = this.auth.slice(h + 1), this.password = encodeURIComponent(decodeURIComponent(this.password))) : this.username = encodeURIComponent(decodeURIComponent(this.auth)), this.auth = this.password ? this.username + ":" + this.password : this.username), this.origin = "file:" !== this.protocol && dt(this.protocol) && this.host ? this.protocol + "//" + this.host : "null", this.href = this.toString()
    }
    gt.prototype = {
        set: function(t, i, n) {
            switch (t) {
                case "query":
                    "string" == typeof i && i.length && (i = (n || et.parse)(i)), this[t] = i;
                    break;
                case "port":
                    this[t] = i, nt(i, this.protocol) ? i && (this.host = this.hostname + ":" + i) : (this.host = this.hostname, this[t] = "");
                    break;
                case "hostname":
                    this[t] = i, this.port && (i += ":" + this.port), this.host = i;
                    break;
                case "host":
                    this[t] = i, ut.test(i) ? (i = i.split(":"), this.port = i.pop(), this.hostname = i.join(":")) : (this.hostname = i, this.port = "");
                    break;
                case "protocol":
                    this.protocol = i.toLowerCase(), this.slashes = !n;
                    break;
                case "pathname":
                case "hash":
                    i ? (n = "pathname" === t ? "/" : "#", this[t] = i.charAt(0) !== n ? n + i : i) : this[t] = i;
                    break;
                case "username":
                case "password":
                    this[t] = encodeURIComponent(i);
                    break;
                case "auth":
                    ~(t = i.indexOf(":")) ? (this.username = i.slice(0, t), this.username = encodeURIComponent(decodeURIComponent(this.username)), this.password = i.slice(t + 1), this.password = encodeURIComponent(decodeURIComponent(this.password))) : this.username = encodeURIComponent(decodeURIComponent(i))
            }
            for (i = 0; i < pt.length; i++)(t = pt[i])[4] && (this[t[1]] = this[t[1]].toLowerCase());
            return this.auth = this.password ? this.username + ":" + this.password : this.username, this.origin = "file:" !== this.protocol && dt(this.protocol) && this.host ? this.protocol + "//" + this.host : "null", this.href = this.toString(), this
        },
        toString: function(t) {
            t && "function" == typeof t || (t = et.stringify);
            var i = this.host,
                n = this.protocol;
            return n && ":" !== n.charAt(n.length - 1) && (n += ":"), n += this.protocol && this.slashes || dt(this.protocol) ? "//" : "", this.username ? (n += this.username, this.password && (n += ":" + this.password), n += "@") : this.password ? (n += ":" + this.password, n += "@") : "file:" !== this.protocol && dt(this.protocol) && !i && "/" !== this.pathname && (n += "@"), (":" === i[i.length - 1] || ut.test(this.hostname) && !this.port) && (i += ":"), n += i + this.pathname, (t = "object" === a(this.query) ? t(this.query) : this.query) && (n += "?" !== t.charAt(0) ? "?" + t : t), this.hash && (n += this.hash), n
        }
    }, gt.extractProtocol = yt, gt.location = vt, gt.trimLeft = ct, gt.qs = et;
    var bt = gt,
        wt = /^xn--/,
        xt = /[^\0-\x7E]/,
        kt = /[\x2E\u3002\uFF0E\uFF61]/g,
        St = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input"
        },
        At = Math.floor,
        jt = String.fromCharCode;

    function It(t) {
        throw new RangeError(St[t])
    }

    function Rt(t, i) {
        var n = t.split("@"),
            r = "";
        1 < n.length && (r = n[0] + "@", t = n[1]), n = [];
        for (var s = (t = (t = t.replace(kt, ".")).split(".")).length; s--;) n[s] = i(t[s]);
        return r + n.join(".")
    }

    function Et(t, i, n) {
        var r = 0;
        for (t = n ? At(t / 700) : t >> 1, t += At(t / i); 455 < t; r += 36) t = At(t / 35);
        return At(r + 36 * t / (t + 38))
    }
    var Ct = function(t) {
            return Rt(t, (function(t) {
                return wt.test(t) ? function(t) {
                    var i = [],
                        n = t.length,
                        r = 0,
                        s = 128,
                        e = 72,
                        o = t.lastIndexOf("-");
                    0 > o && (o = 0);
                    for (var a = 0; a < o; ++a) 128 <= t.charCodeAt(a) && It("not-basic"), i.push(t.charCodeAt(a));
                    for (o = 0 < o ? o + 1 : 0; o < n;) {
                        a = r;
                        for (var h = 1, u = 36;; u += 36) {
                            o >= n && It("invalid-input");
                            var f = t.charCodeAt(o++);
                            (36 <= (f = 10 > f - 48 ? f - 22 : 26 > f - 65 ? f - 65 : 26 > f - 97 ? f - 97 : 36) || f > At((2147483647 - r) / h)) && It("overflow"), r += f * h;
                            var l = u <= e ? 1 : u >= e + 26 ? 26 : u - e;
                            if (f < l) break;
                            h > At(2147483647 / (f = 36 - l)) && It("overflow"), h *= f
                        }
                        e = Et(r - a, f = i.length + 1, 0 == a), At(r / f) > 2147483647 - s && It("overflow"), s += At(r / f), r %= f, i.splice(r++, 0, s)
                    }
                    return String.fromCodePoint.apply(String, i)
                }(t.slice(4).toLowerCase()) : t
            }))
        },
        Ot = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,
        Mt = /[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]/;

    function Pt(t) {
        if (Ut(t = new bt(t).hostname)) var i = !1;
        else i = Ct(t), i = 63 >= t.length && !(Ot.test(i) && Mt.test(i)) && -1 != t.indexOf(".");
        return i ? 63 < (i = function(t) {
            return Rt(t, (function(t) {
                return xt.test(t) ? "xn--" + function(t) {
                    for (var i, n = [], r = (t = function(t) {
                            for (var i = [], n = 0, r = t.length; n < r;) {
                                var s = t.charCodeAt(n++);
                                if (55296 <= s && 56319 >= s && n < r) {
                                    var e = t.charCodeAt(n++);
                                    56320 == (64512 & e) ? i.push(((1023 & s) << 10) + (1023 & e) + 65536) : (i.push(s), n--)
                                } else i.push(s)
                            }
                            return i
                        }(t)).length, s = 128, e = 0, a = 72, h = o(t, !0); !(i = h()).done;) {
                        var u = i.value;
                        128 > u && n.push(jt(u))
                    }
                    var f = u = n.length;
                    for (u && n.push("-"); f < r;) {
                        for (var l, c = 2147483647, p = o(t, !0); !(l = p()).done;) {
                            var m = l.value;
                            m >= s && m < c && (c = m)
                        }
                        var v = f + 1;
                        c - s > At((2147483647 - e) / v) && It("overflow"), e += (c - s) * v, s = c;
                        for (var d, y = o(t, !0); !(d = y()).done;) {
                            var g = d.value;
                            if (g < s && 2147483647 < ++e && It("overflow"), g == s) {
                                var b = e;
                                for (c = 36;; c += 36) {
                                    var w = c <= a ? 1 : c >= a + 26 ? 26 : c - a;
                                    if (b < w) break;
                                    var x = b - w,
                                        k = 36 - w;
                                    w += x % k, (b = n).push.call(b, jt(w + 22 + 75 * (26 > w) - 0)), b = At(x / k)
                                }
                                n.push(jt(b + 22 + 75 * (26 > b) - 0)), a = Et(e, v, f == u), e = 0, ++f
                            }
                        }++e, ++s
                    }
                    return n.join("")
                }(t) : t
            }))
        }(i = (i = (i = Ct(t)).split("-").join("--")).split(".").join("-")).toLowerCase()).length ? Tt(t) : (Ut(i) && (i = "0-".concat(i, "-0")), Promise.resolve(i)) : Tt(t)
    }

    function Tt(t) {
        return (t = "undefined" != typeof window ? function(t) {
            return t = new TextEncoder("utf-8").encode(t), window.crypto.subtle.digest("SHA-256", t).then((function(t) {
                var i = [];
                t = new DataView(t);
                for (var n = 0; n < t.byteLength; n += 4) {
                    var r = ("00000000" + t.getUint32(n).toString(16)).slice(-8);
                    i.push(r)
                }
                return i.join("")
            }))
        }(t) : void 0).then((function(t) {
            return function(t) {
                var i = [];
                t.match(/.{1,2}/g).forEach((function(t, n) {
                    i[n] = parseInt(t, 16)
                }));
                var n = i.length % 5,
                    r = Math.floor(i.length / 5);
                if (t = [], 0 != n) {
                    for (var s = 0; s < 5 - n; s++) i += "\0";
                    r += 1
                }
                for (s = 0; s < r; s++) t.push("abcdefghijklmnopqrstuvwxyz234567".charAt(i[5 * s] >> 3)), t.push("abcdefghijklmnopqrstuvwxyz234567".charAt((7 & i[5 * s]) << 2 | i[5 * s + 1] >> 6)), t.push("abcdefghijklmnopqrstuvwxyz234567".charAt((63 & i[5 * s + 1]) >> 1)), t.push("abcdefghijklmnopqrstuvwxyz234567".charAt((1 & i[5 * s + 1]) << 4 | i[5 * s + 2] >> 4)), t.push("abcdefghijklmnopqrstuvwxyz234567".charAt((15 & i[5 * s + 2]) << 1 | i[5 * s + 3] >> 7)), t.push("abcdefghijklmnopqrstuvwxyz234567".charAt((127 & i[5 * s + 3]) >> 2)), t.push("abcdefghijklmnopqrstuvwxyz234567".charAt((3 & i[5 * s + 3]) << 3 | i[5 * s + 4] >> 5)), t.push("abcdefghijklmnopqrstuvwxyz234567".charAt(31 & i[5 * s + 4]));
                for (r = 0, 1 == n ? r = 6 : 2 == n ? r = 4 : 3 == n ? r = 3 : 4 == n && (r = 1), n = 0; n < r; n++) t.pop();
                for (n = 0; n < r; n++) t.push("=");
                return t.join("")
            }("ffffffffff" + t + "000000").substr(8, Math.ceil(4 * t.length / 5))
        }))
    }

    function Ut(t) {
        return "--" == t.slice(2, 4) && "xn" != t.slice(0, 2)
    }
    var zt = "viewer";

    function qt(t) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return W(t) ? "/i" : tt(t) ? "/r" : i === zt ? "/v" : "/c"
    }
    var _t = "amp-viewer-messaging",
        Ft = "channelOpen",
        Dt = "__AMPHTML__";

    function Nt(t) {
        if ("string" != typeof t) return t;
        if ("{" != t.charAt(0)) return null;
        try {
            return JSON.parse(t)
        } catch (t) {
            return null
        }
    }
    var Yt = function() {
            function t(t, i, n) {
                this.win_ = t, this.origin_ = i, this.target_ = n
            }
            var i = t.prototype;
            return i.addEventListener = function(t, i) {
                var n = this;
                this.win_.addEventListener("message", (function(t) {
                    t.origin == n.origin_ && t.source == n.target_ && i(t)
                }))
            }, i.postMessage = function(t) {
                var i = "null" === this.origin_ ? "*" : this.origin_;
                this.target_.postMessage(t, i)
            }, i.start = function() {}, t
        }(),
        Lt = function() {
            function t(t, i, n, r, s) {
                this.win_ = t, this.port_ = i, this.isWebview_ = !!n, this.token_ = r || null, this.verifyToken_ = !!s, this.requestIdCounter_ = 0, this.waitingForResponse_ = {}, this.messageHandlers_ = {}, this.defaultHandler_ = null, this.port_.addEventListener("message", this.handleMessage_.bind(this)), this.port_.start()
            }
            t.initiateHandshakeWithDocument = function(i, n) {
                return new Promise((function(r) {
                    var s = setInterval((function() {
                        var e = new MessageChannel,
                            o = {
                                app: Dt,
                                name: "handshake-poll"
                            };
                        i.postMessage(o, "*", [e.port2]);
                        var a = e.port1;
                        a.addEventListener("message", (function i(e) {
                            var o = Nt(e.data);
                            if (o && o.app === Dt && o.name === Ft) {
                                clearInterval(s), a.removeEventListener("message", i);
                                var h = new t(null, a, !1, n, !0);
                                h.sendResponse_(o.requestid, Ft, null), r(h)
                            }
                        })), a.start()
                    }), 1e3)
                }))
            }, t.waitForHandshakeFromDocument = function(i, n, r, s, e) {
                return new Promise((function(o) {
                    i.addEventListener("message", (function a(h) {
                        var u = Nt(h.data);
                        if (u && (h.origin == r || e && e.test(h.origin)) && (!h.source || h.source == n) && u.app === Dt && u.name === Ft) {
                            i.removeEventListener("message", a);
                            var f = new t(null, new Yt(i, h.origin, n), !1, s, !0);
                            f.sendResponse_(u.requestid, Ft, null), o(f)
                        }
                    }))
                }))
            };
            var i = t.prototype;
            return i.registerHandler = function(t, i) {
                this.messageHandlers_[t] = i
            }, i.unregisterHandler = function(t) {
                delete this.messageHandlers_[t]
            }, i.setDefaultHandler = function(t) {
                this.defaultHandler_ = t
            }, i.handleMessage_ = function(t) {
                var i = Nt(t.data);
                i && i.app === Dt && (this.token_ && this.verifyToken_ && i.messagingToken !== this.token_ ? this.logError_(_t + ": handleMessage_ error: ", "invalid token") : "q" === i.type ? this.handleRequest_(i) : "s" === i.type && this.handleResponse_(i))
            }, i.sendRequest = function(t, i, n) {
                var r = this,
                    s = ++this.requestIdCounter_,
                    e = void 0;
                return n && (e = new Promise((function(t, i) {
                    r.waitingForResponse_[s] = {
                        resolve: t,
                        reject: i
                    }
                }))), this.sendMessage_({
                    app: Dt,
                    requestid: s,
                    type: "q",
                    name: t,
                    data: i,
                    rsvp: n
                }), e
            }, i.sendResponse_ = function(t, i, n) {
                this.sendMessage_({
                    app: Dt,
                    requestid: t,
                    type: "s",
                    name: i,
                    data: n
                })
            }, i.sendResponseError_ = function(t, i, n) {
                var r = this.errorToString_(n);
                this.logError_(_t + ": sendResponseError_, message name: " + i, r), this.sendMessage_({
                    app: Dt,
                    requestid: t,
                    type: "s",
                    name: i,
                    data: null,
                    error: r
                })
            }, i.sendMessage_ = function(t) {
                var i = Object.assign(t, {});
                this.token_ && !this.verifyToken_ && (i.messagingToken = this.token_), this.port_.postMessage(this.isWebview_ ? JSON.stringify(i) : i)
            }, i.handleRequest_ = function(t) {
                var i = this,
                    n = this.messageHandlers_[t.name];
                if (n || (n = this.defaultHandler_), !n) {
                    var r = new Error("Cannot handle request because no default handler is set!");
                    throw r.args = t.name, r
                }
                var s = n(t.name, t.data, !!t.rsvp);
                if (t.rsvp) {
                    var e = t.requestid;
                    if (!s) throw this.sendResponseError_(e, t.name, new Error("no response")), new Error("expected response but none given: " + t.name);
                    s.then((function(n) {
                        i.sendResponse_(e, t.name, n)
                    }), (function(n) {
                        i.sendResponseError_(e, t.name, n)
                    }))
                }
            }, i.handleResponse_ = function(t) {
                var i = t.requestid,
                    n = this.waitingForResponse_[i];
                n && (delete this.waitingForResponse_[i], t.error ? (this.logError_(_t + ": handleResponse_ error: ", t.error), n.reject(new Error("Request ".concat(t.name, " failed: ").concat(t.error)))) : n.resolve(t.data))
            }, i.logError_ = function(t, i) {
                if (this.win_) {
                    var n = "amp-messaging-error-logger: " + t;
                    n += " data: " + this.errorToString_(i), this.win_.viewerState = n
                }
            }, i.errorToString_ = function(t) {
                return t ? t.message ? t.message : String(t) : "unknown error"
            }, t
        }();

    function Zt(t, i) {
        return t
    }
    var $t, Ht = "visible",
        Xt = "inactive";

    function Gt(t) {
        try {
            t.focus()
        } catch (t) {}
    }

    function Jt(t, i, n) {
        var r = t.hasAttribute(i),
            s = void 0 !== n ? n : !r;
        return s !== r && (s ? t.setAttribute(i, "") : t.removeAttribute(i)), s
    }
    var Vt, Bt = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"];

    function Kt(t, i, n, r, s) {
        var e = function(t, i, n) {
            if (i.startsWith("--")) return i;
            $t || ($t = u());
            var r = $t[i];
            if (!r || n) {
                if (r = i, void 0 === t[i]) {
                    var s = function(t) {
                            return t.charAt(0).toUpperCase() + t.slice(1)
                        }(i),
                        e = function(t, i) {
                            for (var n = 0; n < Bt.length; n++) {
                                var r = Bt[n] + i;
                                if (void 0 !== t[r]) return r
                            }
                            return ""
                        }(t, s);
                    void 0 !== t[e] && (r = e)
                }
                n || ($t[i] = r)
            }
            return r
        }(t.style, i, s);
        if (e) {
            var o, a = r ? n + r : n;
            t.style.setProperty((o = e.replace(/[A-Z]/g, (function(t) {
                return "-" + t.toLowerCase()
            })), Bt.some((function(t) {
                return o.startsWith(t + "-")
            })) ? "-".concat(o) : o), a)
        }
    }

    function Wt(t, i) {
        for (var n in i) Kt(t, n, i[n])
    }

    function Qt(t, i) {
        for (var n = 0; n < i.length; n++) Kt(t, i[n], null)
    }

    function ti(t, i, n, r) {
        var s = {
            detail: n
        };
        if (Object.assign(s, r), "function" == typeof t.CustomEvent) return new t.CustomEvent(i, s);
        var e = t.document.createEvent("CustomEvent");
        return e.initCustomEvent(i, !!s.bubbles, !!s.cancelable, n), e
    }

    function ii(t, i, n, r) {
        var s = n,
            e = function(t, i, n, r) {
                var s = t,
                    e = n,
                    o = function(t) {
                        try {
                            return e(t)
                        } catch (t) {
                            var i, n;
                            throw null === (i = (n = self).__AMP_REPORT_ERROR) || void 0 === i || i.call(n, t), t
                        }
                    },
                    a = function() {
                        if (void 0 !== Vt) return Vt;
                        Vt = !1;
                        try {
                            var t = {
                                get capture() {
                                    return Vt = !0, !1
                                }
                            };
                            self.addEventListener("test-options", null, t), self.removeEventListener("test-options", null, t)
                        } catch (t) {}
                        return Vt
                    }(),
                    h = !(null == r || !r.capture);
                return s.addEventListener(i, o, a ? r : h),
                    function() {
                        null == s || s.removeEventListener(i, o, a ? r : h), e = null, s = null, o = null
                    }
            }(t, i, (function(t) {
                try {
                    s(t)
                } finally {
                    s = null, e()
                }
            }), r);
        return e
    }
    var ni, ri, si = function() {
            function t(t, i, n) {
                this.t = t, this.ql = i, this.Jl = n, this.Vl = null, this.Kl()
            }
            var i = t.prototype;
            return i.Kl = function() {
                this.t.IntersectionObserver && this.t === this.t.parent ? this.Wl() : this.Ql()
            }, i.Wl = function() {
                var t = this,
                    i = new this.t.IntersectionObserver((function(n) {
                        n.forEach((function(n) {
                            n.isIntersecting && (t.Jl(), i.unobserve(t.ql))
                        }))
                    }));
                i.observe(this.ql)
            }, i.Ql = function() {
                this.Vl = b(this.t, this.tp.bind(this), 500), this.t.addEventListener("scroll", this.Vl), this.tp(this.ql)
            }, i.tp = function() {
                var t = this.ql.getBoundingClientRect().top;
                this.t.innerHeight > t && (this.Jl(), this.t.removeEventListener("scroll", this.Vl))
            }, t
        }(),
        ei = function() {
            function t(t) {
                this.t = t, this.ip = {
                    startY: 0,
                    lastDelta: 0,
                    touchStartTimeMs: null,
                    touchEndTimeMs: null,
                    touchMoveTimeMs: null
                }, this.np = {
                    startY: 0,
                    isRunning: !1,
                    acceleration: 1,
                    speedLimit: .3,
                    startTimeMs: null,
                    maxTimeBetweenSwipesMs: 250,
                    moveTimeThresholdMs: 100,
                    durationMs: null,
                    meetsDeltaYThreshold: !1,
                    deltaYThresholdPx: 5,
                    deltaY: null,
                    offsetThresholdPx: 30,
                    offsetPx: null,
                    multiplier: 1
                }
            }
            var i = t.prototype;
            return i.onTouchStart = function(t, i) {
                this.ip.startY = i, this.ip.touchStartTimeMs = t, this.np.startY = this.t.scrollY, this.np.isRunning && this.ip.touchEndTimeMs - this.ip.touchStartTimeMs < this.np.maxTimeBetweenSwipesMs ? this.np.multiplier += this.np.acceleration : this.np.multiplier = 1, this.np.isRunning = !1
            }, i.onTouchMove = function(t, i) {
                this.np.acceleration = Math.abs(this.np.deltaY / (t - this.ip.touchMoveTimeMs)), this.ip.touchMoveTimeMs = t, b(this.t, this.rp.bind(this, i), 50)()
            }, i.rp = function(t) {
                this.np.deltaY = t - this.ip.startY, this.np.meetsDeltaYThreshold = Math.abs(this.np.deltaY) > this.np.deltaYThresholdPx, this.np.meetsDeltaYThreshold && this.t.scrollBy(0, -this.np.deltaY)
            }, i.onTouchEnd = function(t) {
                var i = this;
                if (this.ip.touchEndTimeMs = t, this.np.meetsDeltaYThreshold) {
                    var n = this.ip.touchEndTimeMs - this.ip.touchMoveTimeMs;
                    this.np.offsetPx = this.sp(), n < this.np.moveTimeThresholdMs && Math.abs(this.np.offsetPx) > this.np.offsetThresholdPx && (this.np.durationMs = 1.2 * this.t.innerHeight, this.np.isRunning = !0, requestAnimationFrame((function(t) {
                        i.np.startTimeMs = t, i.np.startY = i.t.scrollY, i.ep(t)
                    }))), this.np.multiplier = 1, this.ip.startY = 0, this.np.deltaY = 0
                }
            }, i.sp = function() {
                var t = this.t.innerHeight * this.np.speedLimit,
                    i = Math.pow(this.np.acceleration, 2) * this.t.innerHeight;
                return (i = Math.min(t, i)) * (this.np.deltaY > 0 ? -this.np.multiplier : this.np.multiplier)
            }, i.ep = function(t) {
                var i = t - this.np.startTimeMs;
                if (!(i > this.np.durationMs)) {
                    var n = this.op(i / this.np.durationMs) * this.np.offsetPx,
                        r = this.np.startY + n;
                    this.np.isRunning ? (this.t.scroll(0, r), requestAnimationFrame(this.ep.bind(this))) : cancelAnimationFrame(requestAnimationFrame(this.ep.bind(this)))
                }
            }, i.op = function(t) {
                return 1 - --t * t * t * t
            }, t
        }(),
        oi = function() {
            function t(t) {
                this.Lt = t, this.Ht = 0, this.Ft = 0, this.Gt = u()
            }
            var i = t.prototype;
            return i.has = function(t) {
                return !!this.Gt[t]
            }, i.get = function(t) {
                var i = this.Gt[t];
                if (i) return i.access = ++this.Ft, i.payload
            }, i.put = function(t, i) {
                this.has(t) || this.Ht++, this.Gt[t] = {
                    payload: i,
                    access: this.Ft
                }, this.zt()
            }, i.zt = function() {
                if (!(this.Ht <= this.Lt)) {
                    var t, i = this.Gt,
                        n = this.Ft + 1;
                    for (var r in i) {
                        var s = i[r].access;
                        s < n && (n = s, t = r)
                    }
                    void 0 !== t && (delete i[t], this.Ht--)
                }
            }, t
        }();

    function ai(t, i) {
        return ni || (ni = self.document.createElement("a"), ri = self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new oi(100))), hi(ni, t, i ? null : ri)
    }

    function hi(t, i, n) {
        if (n && n.has(i)) return n.get(i);
        t.href = i, t.protocol || (t.href = t.href);
        var r, s = {
            href: t.href,
            protocol: t.protocol,
            host: t.host,
            hostname: t.hostname,
            port: "0" == t.port ? "" : t.port,
            pathname: t.pathname,
            search: t.search,
            hash: t.hash,
            origin: null
        };
        "/" !== s.pathname[0] && (s.pathname = "/" + s.pathname), ("http:" == s.protocol && 80 == s.port || "https:" == s.protocol && 443 == s.port) && (s.port = "", s.host = s.hostname), r = t.origin && "null" != t.origin ? t.origin : "data:" != s.protocol && s.host ? s.protocol + "//" + s.host : s.href, s.origin = r;
        var e = s;
        return n && n.put(i, e), e
    }

    function ui(t, i) {
        return function(t, i, n) {
            if (!i) return t;
            var r = t.split("#", 2),
                s = r[0].split("?", 2);
            return s[0] + (s[1] ? "?".concat(s[1], "&").concat(i) : "?".concat(i)) + (r[1] ? "#".concat(r[1]) : "")
        }(t, fi(i))
    }

    function fi(t) {
        var n, r, s, e = [];
        for (var o in t) {
            var a = t[o];
            if (null != a) {
                a = i(s = a) ? s : [s];
                for (var h = 0; h < a.length; h++) e.push((n = o, r = a[h], "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(r))))
            }
        }
        return e.join("&")
    }

    function li(t) {
        var i = t.indexOf("#");
        return -1 == i ? t : t.substring(0, i)
    }

    function ci(t) {
        var i = t.indexOf("#");
        return -1 == i ? "" : t.substring(i)
    }

    function pi(t) {
        return j.test(function(t) {
            return "string" == typeof t ? ai(t) : t
        }(t).origin)
    }

    function mi(t) {
        var i = t.indexOf("?");
        if (-1 == i) return t;
        var n = ci(t);
        return t.substring(0, i) + n
    }
    var vi, di, yi, gi, bi = "i-amphtml-story-player-loading",
        wi = "i-amphtml-story-player-loaded",
        xi = "i-amphtml-story-player-error",
        ki = ["cdn.ampproject.org", "www.bing-amp.com"],
        Si = ["allow-top-navigation"],
        Ai = "amp-story-player-hide-button",
        ji = "PAGE_ATTACHMENT_STATE",
        Ii = "UI_STATE",
        Ri = "MUTED_STATE",
        Ei = "CURRENT_PAGE_ID",
        Ci = "i-amphtml-story-player-no-navigation-transition",
        Oi = "amp-story-player",
        Mi = "amp-story-player-dev",
        Pi = function() {
            function t(t, i) {
                return this.t = t, this.ql = i, this.Yl = t.document, this.ap = this.Yl.createElement("a"), this.hp = [], this.Xl = null, this.up = 0, this.fp = 0, this.lp = null, this.cp = null, this.pp = null, this.ip = {
                    startX: 0,
                    startY: 0,
                    lastX: 0,
                    isSwipeX: null
                }, this.mp = null, this.vp = new J, this.dp(), this.yp = new ei(t), this.gp = !0, this.bp = null, this.wp = null, this.xp = null, this.kp = !1, this.ql
            }
            var i = t.prototype;
            return i.dp = function() {
                this.ql.buildPlayer = this.buildPlayer.bind(this), this.ql.layoutPlayer = this.layoutPlayer.bind(this), this.ql.getElement = this.getElement.bind(this), this.ql.getStories = this.getStories.bind(this), this.ql.load = this.load.bind(this), this.ql.show = this.show.bind(this), this.ql.add = this.add.bind(this), this.ql.play = this.play.bind(this), this.ql.pause = this.pause.bind(this), this.ql.go = this.go.bind(this), this.ql.mute = this.mute.bind(this), this.ql.unmute = this.unmute.bind(this), this.ql.getStoryState = this.getStoryState.bind(this), this.ql.rewind = this.rewind.bind(this)
            }, i.load = function() {
                if (!this.ql.isConnected) throw new Error("[".concat(Oi, "] element must be connected to the DOM before calling load()."));
                if (this.ql.Zl) throw new Error("[".concat(Oi, "] calling load() on an already loaded element."));
                this.buildPlayer(), this.layoutPlayer()
            }, i.Sp = function(t) {
                t.idx = this.hp.length, t.distance = t.idx - this.up, t.connectedDeferred = new J, this.hp.push(t)
            }, i.add = function(t) {
                if (!(t.length <= 0)) {
                    if (!Array.isArray(t) || !t.every((function(t) {
                            return t && t.href
                        }))) throw new Error('"stories" parameter has the wrong structure');
                    for (var i = this.hp.length, n = 0; n < t.length; n++) {
                        var r = t[n];
                        this.Sp(r), this.Ap(r)
                    }
                    this.ph(i)
                }
            }, i.play = function() {
                this.ql.$l || this.layoutPlayer(), this.jp(!1)
            }, i.pause = function() {
                this.jp(!0)
            }, i.jp = function(t) {
                this.gp = !t;
                var i = this.hp[this.up];
                this.ni(i, t ? "paused" : Ht)
            }, i.getElement = function() {
                return this.ql
            }, i.getStories = function() {
                return this.hp
            }, i.buildPlayer = function() {
                this.ql.Zl || (this.Ip(), this.Gl(), this.Rp(), this.Ep(), this.Cp(), this.Op(this.hp.length - this.up - 1), this.Mp(), this.Pp(), this.Tp(), this.Up(), this.zp(), this.qp(), this.ql.Zl = !0)
            }, i.Ip = function() {
                var t, i = this;
                ((t = this.ql.querySelectorAll("a")) ? Array.prototype.slice.call(t) : []).forEach((function(t) {
                    var n = t.querySelector("img[data-amp-story-player-poster-img]"),
                        r = n && n.getAttribute("src"),
                        s = {
                            href: t.href,
                            title: t.textContent && t.textContent.trim() || null,
                            posterImage: t.getAttribute("data-poster-portrait-src") || r
                        };
                    i.Sp(s)
                }))
            }, i.qp = function() {
                this.ql.dispatchEvent(ti(this.t, "ready", {})), this.ql.isReady = !0
            }, i.Rp = function() {
                var t = this;
                this.hp.forEach((function(i) {
                    t.Ap(i)
                }))
            }, i.Gl = function() {
                this.Xl = this.Yl.createElement("div"), this.Xl.classList.add("i-amphtml-story-player-main-container");
                var t = this.Yl.createElement("div");
                t.classList.add("i-amphtml-fill-content", "i-amphtml-story-player-shadow-root-intermediary"), this.ql.appendChild(t);
                var i = this.ql.attachShadow ? t.attachShadow({
                        mode: "open"
                    }) : t,
                    n = this.Yl.createElement("style");
                n.textContent = ':host{all:initial;color:initial}.story-player-iframe{height:100%;width:100%;-ms-flex:0 0 100%;flex:0 0 100%;border:0;opacity:0;transition:opacity 500ms ease;position:absolute}.i-amphtml-story-player-main-container{height:100%;position:relative;overflow:hidden;transform-style:preserve-3d}.i-amphtml-story-player-loaded .story-player-iframe{opacity:1;transition:transform 200ms cubic-bezier(0.4,0,0.2,1)}.i-amphtml-story-player-no-navigation-transition .story-player-iframe{transition-duration:0.01s}.i-amphtml-story-player-main-container .story-player-iframe[i-amphtml-iframe-position="0"],.i-amphtml-story-player-main-container iframe:first-of-type{transform:translateZ(1px)}.i-amphtml-story-player-main-container .story-player-iframe[i-amphtml-iframe-position="1"],.i-amphtml-story-player-main-container iframe:nth-of-type(2),.i-amphtml-story-player-main-container iframe:nth-of-type(3){transform:translate3d(100%,0,0)}.i-amphtml-story-player-main-container .story-player-iframe[i-amphtml-iframe-position="-1"]{transform:translate3d(-100%,0,0)}.amp-story-player-exit-control-button{position:absolute;height:48px;width:48px;background-repeat:no-repeat;background-position:50%;margin-top:7px;background-size:28px;border:0px;background-color:transparent;outline:transparent;cursor:pointer;z-index:1}.amp-story-player-close-button{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%23FFF"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>\')}.amp-story-player-back-button{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%23FFF"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"/></svg>\')}.amp-story-player-hide-button{display:none}.i-amphtml-story-player-panel{--i-amphtml-story-player-panel-ratio:69/116;--i-amphtml-story-player-panel-responsive-margin:max(74px,calc(var(--i-amphtml-story-player-height)*0.0825));--i-amphtml-story-player-panel-height:calc(var(--i-amphtml-story-player-height) - var(--i-amphtml-story-player-panel-responsive-margin)*2);--i-amphtml-story-player-panel-width:calc(var(--i-amphtml-story-player-panel-height)*var(--i-amphtml-story-player-panel-ratio));--i-amphtml-story-player-panel-button-margin:max(10px,calc(50vw - 145px - var(--i-amphtml-story-player-panel-width)/2))}.i-amphtml-story-player-panel.i-amphtml-story-player-panel-medium{--i-amphtml-story-player-panel-responsive-margin:0px;--i-amphtml-story-player-panel-width:calc(var(--i-amphtml-story-player-height)*var(--i-amphtml-story-player-panel-ratio))}.i-amphtml-story-player-panel.i-amphtml-story-player-panel-small{--i-amphtml-story-player-panel-ratio:36/53}.i-amphtml-story-player-panel-next,.i-amphtml-story-player-panel-prev{position:absolute;top:50%;transform:translateY(-50%);width:48px;height:48px;z-index:1;background-color:transparent;border:none;background-position:50%;background-repeat:no-repeat;cursor:pointer;transition:opacity 150ms}.i-amphtml-story-player-panel-next[disabled],.i-amphtml-story-player-panel-prev[disabled]{opacity:.1;cursor:initial}.i-amphtml-story-player-full-bleed-story .i-amphtml-story-player-panel-next,.i-amphtml-story-player-full-bleed-story .i-amphtml-story-player-panel-prev,:not(.i-amphtml-story-player-panel)>.i-amphtml-story-player-panel-next,:not(.i-amphtml-story-player-panel)>.i-amphtml-story-player-panel-prev{opacity:0;pointer-events:none}.i-amphtml-story-player-panel-next,.i-amphtml-story-player-panel-prev{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"><path stroke="%23fff" stroke-linecap="round" stroke-width="1.9" d="M17 29.2V18.8c0-1.2 1.4-2 2.5-1.3l7.5 5.2c1 .6 1 2 0 2.6l-7.5 5.2c-1 .7-2.5 0-2.5-1.3Z"/><rect width="1.8" height="15.6" x="30.2" y="16.2" fill="%23fff" rx=".9"/></svg>\')!important}.i-amphtml-story-player-panel-prev{margin-inline-start:calc(var(--i-amphtml-story-player-panel-button-margin));transform:translateY(-50%) rotate(180deg)}.i-amphtml-story-player-panel-next{margin-inline-end:var(--i-amphtml-story-player-panel-button-margin);right:0}[dir=rtl].i-amphtml-story-player-panel-prev{right:0}[dir=rtl].i-amphtml-story-player-panel-next{left:0;transform:translateY(-50%) rotate(180deg)}\n/*# sourceURL=/css/amp-story-player-shadow.css*/', i.appendChild(n), i.insertBefore(this.Xl, i.firstElementChild)
            }, i.Ep = function() {
                var t = this,
                    i = this.ql.getAttribute("exit-control");
                if ("back-button" === (n = i) || "close-button" === n) {
                    var n, r = this.Yl.createElement("button");
                    this.Xl.appendChild(r);
                    var s = "back-button" === i;
                    r.classList.add(s ? "amp-story-player-back-button" : "amp-story-player-close-button"), r.classList.add("amp-story-player-exit-control-button"), r.addEventListener("click", (function() {
                        t.ql.dispatchEvent(ti(t.t, s ? "amp-story-player-back" : "amp-story-player-close", {}))
                    }))
                }
            }, i.Cp = function() {
                if (this.lp) return this.lp;
                var t = this.ql.getAttribute("amp-cache");
                t && !ki.includes(t) && console.error("[".concat(Oi, "]"), "Unsupported cache specified, use one of following: ".concat(ki));
                var i, n, r, s = this.ql.querySelector("script");
                if (!s) return null;
                if ("SCRIPT" != (i = s).tagName || "APPLICATION/JSON" != (null === (n = i.getAttribute("type")) || void 0 === n ? void 0 : n.toUpperCase())) throw new Error('<script> child must have type="application/json"');
                try {
                    this.lp = (r = s.textContent, JSON.parse(r))
                } catch (t) {
                    console.error("[".concat(Oi, "] "), t)
                }
                return this.lp
            }, i.Ap = function(t) {
                var i = this.Yl.createElement("iframe");
                t.posterImage && Kt(i, "backgroundImage", t.posterImage), i.classList.add("story-player-iframe"), i.setAttribute("allow", "autoplay; web-share"),
                    function(t) {
                        if (t.sandbox && t.sandbox.supports) {
                            for (var i = ["allow-top-navigation-by-user-activation", "allow-popups-to-escape-sandbox"], n = 0; n < i.length; n++) {
                                var r = i[n];
                                if (!t.sandbox.supports(r)) return void $().info("3p-frame", "Iframe doesn't support %s", r)
                            }
                            t.sandbox = i.join(" ") + " " + ["allow-forms", "allow-modals", "allow-pointer-lock", "allow-popups", "allow-same-origin", "allow-scripts"].join(" ")
                        }
                    }(i), this._p(i), this.Fp(i), t.iframe = i
            }, i._p = function(t) {
                if (t.sandbox && t.sandbox.supports && !(t.sandbox.length <= 0))
                    for (var i = 0; i < Si.length; i++) {
                        var n = Si[i];
                        if (!t.sandbox.supports(n)) throw new Error("Iframe doesn't support: ".concat(n));
                        t.sandbox.add(n)
                    }
            }, i.Dp = function(t) {
                var i = this,
                    n = t.iframe;
                t.messagingPromise = new Promise((function(r) {
                    i.Np(t, n).then((function(n) {
                        n.setDefaultHandler((function() {
                            return G()
                        })), n.registerHandler("touchstart", (function(t, n) {
                            i.Yp(n)
                        })), n.registerHandler("touchmove", (function(t, n) {
                            i.Lp(n)
                        })), n.registerHandler("touchend", (function(t, n) {
                            i.Zp(n)
                        })), n.registerHandler("selectDocument", (function(t, n) {
                            i.$p(n)
                        })), n.registerHandler("storyContentLoaded", (function() {
                            t.storyContentLoaded = !0, i.Hp(t)
                        })), n.sendRequest("onDocumentState", {
                            "state": ji
                        }, !1), n.sendRequest("onDocumentState", {
                            "state": Ei
                        }, !1), n.sendRequest("onDocumentState", {
                            "state": Ri
                        }), n.sendRequest("onDocumentState", {
                            "state": Ii
                        }), n.registerHandler("documentStateUpdate", (function(t, r) {
                            i.Xp(r, n)
                        })), i.lp && i.lp.controls && (i.Gp(t.idx), n.sendRequest("customDocumentUI", {
                            "controls": i.lp.controls
                        }, !1)), r(n)
                    }), (function(t) {
                        console.error("[".concat(Oi, "]"), t)
                    }))
                }))
            }, i.Gp = function(t) {
                if (t === this.hp.length - 1) {
                    var i = r(this.lp.controls, (function(t) {
                        return "skip-next" === t.name || "skip-to-next" === t.name
                    }));
                    i >= 0 && (this.lp.controls[i].state = "disabled")
                }
            }, i.Np = function(t, i) {
                var n = this;
                return this.Jp(t.href).then((function(t) {
                    return Lt.waitForHandshakeFromDocument(n.t, i.contentWindow, n.Vp(t).origin, null, j)
                }))
            }, i.Fp = function(t) {
                var i = this;
                this.Xl.classList.add(bi), t.onload = function() {
                    i.Xl.classList.remove(bi), i.Xl.classList.add(wi), i.ql.classList.add(wi)
                }, t.onerror = function() {
                    i.Xl.classList.remove(bi), i.Xl.classList.add(xi), i.ql.classList.add(xi)
                }
            }, i.layoutPlayer = function() {
                var t = this;
                if (!this.ql.$l) {
                    if (new si(this.t, this.ql, (function() {
                            return t.vp.resolve()
                        })), this.t.ResizeObserver) new this.t.ResizeObserver((function(i) {
                        var n = i[0].contentRect,
                            r = n.height,
                            s = n.width;
                        t.Bp(r, s)
                    })).observe(this.ql);
                    else {
                        var i = this.ql.getBoundingClientRect(),
                            n = i.height,
                            r = i.width;
                        this.Bp(n, r)
                    }
                    this.ph(), this.ql.$l = !0
                }
            }, i.zp = function() {
                var t = this;
                this.wp = this.Yl.createElement("button"), this.wp.classList.add("i-amphtml-story-player-panel-prev"), this.wp.addEventListener("click", (function() {
                    return t.Kp()
                })), this.wp.setAttribute("aria-label", "previous story"), this.Xl.appendChild(this.wp), this.xp = this.Yl.createElement("button"), this.xp.classList.add("i-amphtml-story-player-panel-next"), this.xp.addEventListener("click", (function() {
                    return t.me()
                })), this.xp.setAttribute("aria-label", "next story"), this.Xl.appendChild(this.xp), this.Wp()
            }, i.Wp = function() {
                Jt(this.wp, "disabled", this.Qp(this.up - 1) && !this.pp), Jt(this.xp, "disabled", this.Qp(this.up + 1) && !this.pp)
            }, i.Bp = function(t, i) {
                var n = i / t > .775;
                this.Xl.classList.toggle("i-amphtml-story-player-panel", n), n && (Wt(this.Xl, {
                    "--i-amphtml-story-player-height": "".concat(t, "px")
                }), this.Xl.classList.toggle("i-amphtml-story-player-panel-medium", t < 756), this.Xl.classList.toggle("i-amphtml-story-player-panel-small", t < 538))
            }, i.tm = function() {
                var t = this.lp.behavior.endpoint;
                return t ? (t = t.replace(/\${offset}/, this.hp.length.toString()), fetch(t, {
                    method: "GET",
                    headers: {
                        Accept: "application/json"
                    }
                }).then((function(t) {
                    return t.json()
                })).catch((function(t) {
                    console.error("[".concat(Oi, "]"), t)
                }))) : (this.cp = !1, G())
            }, i.show = function(t) {
                var i = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    s = this.im(t),
                    e = G();
                return s.idx !== this.up && (this.up = s.idx, e = this.ph(), !1 === r.animate && (this.Xl.classList.toggle(Ci, !0), ii(s.iframe, "transitionend", (function() {
                    i.Xl.classList.remove(Ci)
                }))), this.nm()), null != n ? e.then((function() {
                    return i.rm(n)
                })) : e
            }, i.mute = function() {
                var t = this.hp[this.up];
                this.sm(t, !0)
            }, i.unmute = function() {
                var t = this.hp[this.up];
                this.sm(t, !1)
            }, i.getStoryState = function(t) {
                "page-attachment" === t && this.om()
            }, i.am = function(t) {
                var i = ti(this.t, "navigation", t);
                this.ql.dispatchEvent(i)
            }, i.nm = function() {
                var t = this,
                    i = this.up,
                    n = this.hp.length - this.up - 1,
                    r = {
                        "index": i,
                        "remaining": n
                    };
                this.Wp(), this.hm().then((function(i) {
                    return t.um(i)
                })), this.am(r), this.Op(n)
            }, i.hm = function() {
                var t = this.hp[this.up];
                return new Promise((function(i) {
                    t.messagingPromise.then((function(t) {
                        t.sendRequest("getDocumentState", {
                            state: Ii
                        }, !0).then((function(t) {
                            return i(t.value)
                        }))
                    }))
                }))
            }, i.um = function(t) {
                var i = 2 === t || 0 === t;
                this.Xl.classList.toggle("i-amphtml-story-player-full-bleed-story", i)
            }, i.Op = function(t) {
                var i = this;
                this.lp && this.lp.behavior && this.fm() && t <= 2 && this.tm().then((function(t) {
                    t && i.add(t)
                })).catch((function(t) {
                    console.error("[".concat(Oi, "]"), t)
                }))
            }, i.lm = function(t) {
                return t && t.on && t.action
            }, i.fm = function() {
                if (null !== this.cp) return this.cp;
                var t, i = this.lp.behavior;
                return this.cp = this.lm(i) && "end" === (t = i).on && "fetch" === t.action && t.endpoint, this.cp
            }, i.me = function() {
                !this.pp && this.Qp(this.up + 1) || (this.pp && this.Qp(this.up + 1) ? this.go(1) : (this.up++, this.ph(), this.nm()))
            }, i.Kp = function() {
                !this.pp && this.Qp(this.up - 1) || (this.pp && this.Qp(this.up - 1) ? this.go(-1) : (this.up--, this.ph(), this.nm()))
            }, i.go = function(t) {
                var i = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (0 !== t || 0 !== n) {
                    if (!this.pp && this.Qp(this.up + t)) throw new Error("Out of Story range.");
                    var s = this.up + t,
                        e = t > 0 ? this.hp[s % this.hp.length] : this.hp[(s % this.hp.length + this.hp.length) % this.hp.length],
                        o = G();
                    this.up !== e.idx && (o = this.show(e.href, null, r)), o.then((function() {
                        i.pm(n)
                    }))
                }
            }, i.vm = function(t) {
                var i = 0 === t.distance ? 0 : t.idx > this.up ? 1 : -1;
                requestAnimationFrame((function() {
                    var n = t.iframe;
                    Qt(n, ["transform", "transition"]), n.setAttribute("i-amphtml-iframe-position", i)
                }))
            }, i.Hp = function(t) {
                var i = this;
                t.messagingPromise.then((function(n) {
                    n.sendRequest("getDocumentState", {
                        state: "DESKTOP_ASPECT_RATIO"
                    }, !0).then((function(n) {
                        t.desktopAspectRatio = n.value, i.dm()
                    }))
                }))
            }, i.dm = function() {
                this.hp[this.up].desktopAspectRatio && Wt(this.Xl, {
                    "--i-amphtml-story-player-panel-ratio": this.hp[this.up].desktopAspectRatio
                })
            }, i.ym = function(t) {
                var i, n = this;
                return this.hp[this.up].storyContentLoaded ? (this.dm(), G()) : 0 !== t.distance ? this.mp.promise : (null === (i = this.mp) || void 0 === i || i.reject("[".concat(Mi, "] Cancelling previous story load promise.")), this.mp = new J, t.messagingPromise.then((function(i) {
                    return i.registerHandler("storyContentLoaded", (function() {
                        t.storyContentLoaded = !0, n.mp.resolve(), n.Hp(t)
                    }))
                })), G())
            }, i.ph = function() {
                for (var t = this, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.up, n = [], r = function(r) {
                        var s = t.hp[(r + i) % t.hp.length],
                            e = s.distance;
                        if (s.distance = Math.abs(t.up - s.idx), e <= 1 && s.distance > 1 && t.gm(s), s.distance <= 1 && !s.iframe.isConnected && t.bm(s), s.distance > 1) return "continue";
                        n.push(t.ym(s).then((function() {
                            return t.Jp(s.href)
                        })).then((function(i) {
                            t.wm(i, s.iframe.src) || t.xm(s, i)
                        })).then((function() {
                            return t.vp.promise
                        })).then((function() {
                            0 === s.distance && t.gp && t.ni(s, Ht), 0 === e && 1 === s.distance && t.ni(s, Xt)
                        })).then((function() {
                            t.vm(s), 0 === s.distance && s.iframe.addEventListener("animationend", (function() {
                                Gt(s.iframe)
                            }))
                        })).catch((function(t) {
                            t.includes(Mi) || console.error("[".concat(Oi, "]"), t)
                        })))
                    }, s = 0; s < this.hp.length; s++) r(s);
                return Promise.all(n)
            }, i.bm = function(t) {
                this.Xl.appendChild(t.iframe), this.Dp(t), t.connectedDeferred.resolve()
            }, i.gm = function(t) {
                t.storyContentLoaded = !1, t.connectedDeferred = new J, t.iframe.setAttribute("src", ""), t.iframe.remove()
            }, i.xm = function(t, i) {
                var n = t.iframe,
                    r = this.Vp(i, "prerender").href;
                n.setAttribute("src", r), t.title && n.setAttribute("title", t.title)
            }, i.wm = function(t, i) {
                return !(i.length <= 0) && li(mi(i)) === li(mi(t))
            }, i.Jp = function(t) {
                var i = this.ql.getAttribute("amp-cache");
                if (!i || !ki.includes(i)) return Promise.resolve(t);
                if (pi(t)) {
                    var n = ai(t);
                    return n.pathname.startsWith("/c/") && (n.pathname = "/v/" + n.pathname.substr(3)), Promise.resolve(n.toString())
                }
                return function(t, i) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        r = new bt(i),
                        s = qt(r.pathname, n);
                    return s += "https:" === r.protocol ? "/s/" : "/", i.endsWith("/") || (r.pathname = r.pathname.replace(/\/$/, "")), Pt(r.toString()).then((function(n) {
                        var e = new bt(i);
                        return e.protocol = "https", n = n + "." + t, e.host = n, e.hostname = n, e.pathname = s + r.hostname + r.pathname, e.toString()
                    }))
                }(i, t, "viewer").then((function(t) {
                    return t
                }))
            }, i.Vp = function(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xt,
                    n = {
                        "visibilityState": i,
                        "origin": this.t.origin,
                        "showStoryUrlInfo": "0",
                        "storyPlayer": "v0",
                        "cap": "swipe"
                    };
                "auto" === this.bp && (n.attribution = "auto");
                var r = ci(t),
                    s = k(r),
                    e = B(B({}, s), n),
                    o = li(t);
                if (pi(t)) {
                    var a = {
                        "amp_js_v": "0.1"
                    };
                    o = ui(o, a)
                }
                var h = o + "#" + fi(e);
                return hi(this.ap, h)
            }, i.ni = function(t, i) {
                t.messagingPromise.then((function(t) {
                    return t.sendRequest("visibilitychange", {
                        state: i
                    }, !0)
                }))
            }, i.km = function(t, i, n) {
                t.messagingPromise.then((function(t) {
                    t.sendRequest("setDocumentState", {
                        state: i,
                        value: n
                    })
                }))
            }, i.sm = function(t, i) {
                this.km(t, Ri, i)
            }, i.om = function() {
                var t = this;
                this.hp[this.up].messagingPromise.then((function(i) {
                    i.sendRequest("getDocumentState", {
                        state: ji
                    }, !0).then((function(i) {
                        return t.Sm(i.value)
                    }))
                }))
            }, i.rm = function(t) {
                this.hp[this.up].messagingPromise.then((function(i) {
                    return i.sendRequest("selectPage", {
                        "id": t
                    })
                }))
            }, i.im = function(t) {
                var i = t ? r(this.hp, (function(i) {
                    return i.href === t
                })) : this.up;
                if (!this.hp[i]) throw new Error("Story URL not found in the player: ".concat(t));
                return this.hp[i]
            }, i.rewind = function(t) {
                var i = this.im(t);
                this.Am(i).then((function() {
                    return i.messagingPromise
                })).then((function(t) {
                    return t.sendRequest("rewind", {})
                }))
            }, i.Am = function(t) {
                return t.iframe.isConnected ? G() : t.connectedDeferred.promise
            }, i.pm = function(t) {
                0 !== t && this.jm(t)
            }, i.jm = function(t) {
                this.hp[this.up].messagingPromise.then((function(i) {
                    return i.sendRequest("selectPage", {
                        delta: t
                    })
                }))
            }, i.Xp = function(t, i) {
                switch (t.state) {
                    case ji:
                        this.Im(t.value);
                        break;
                    case Ei:
                        this.Rm(t.value, i);
                        break;
                    case Ri:
                        this.Em(t.value);
                        break;
                    case Ii:
                        this.um(t.value);
                        break;
                    case "AMP_STORY_PLAYER_EVENT":
                        this.Cm(t.value);
                        break;
                    case "AMP_STORY_COPY_URL":
                        this.Om(t.value, i)
                }
            }, i.Cm = function(t) {
                switch (t) {
                    case "amp-story-player-skip-next":
                    case "amp-story-player-skip-to-next":
                        this.me();
                        break;
                    default:
                        this.ql.dispatchEvent(ti(this.t, t, {}))
                }
            }, i.Om = function(t, i) {
                var n, r, s, e, o;
                n = this.t, r = t, s = function() {
                    i.sendRequest("copyComplete", {
                        "success": !0,
                        "url": t
                    }, !1)
                }, e = function() {
                    i.sendRequest("copyComplete", {
                        "success": !1
                    }, !1)
                }, null !== (o = n.navigator) && void 0 !== o && o.clipboard ? n.navigator.clipboard.writeText(r).then(s, e) : n.document.queryCommandSupported("copy") && function(t, i) {
                    var n, r, s, e = !1,
                        o = t.document,
                        a = o.createElement("textarea");
                    Wt(a, {
                        "position": "fixed",
                        "top": 0,
                        "left": 0,
                        "width": "50px",
                        "height": "50px",
                        "padding": 0,
                        "border": "none",
                        "outline": "none",
                        "background": "transparent"
                    }), a.value = i, a.readOnly = !0, a.contentEditable = "true", o.body.appendChild(a), null === (n = t.getSelection()) || void 0 === n || n.removeAllRanges(), a.focus(), a.setSelectionRange(0, i.length);
                    try {
                        e = o.execCommand("copy")
                    } catch (t) {}
                    return null === (s = (r = a).parentElement) || void 0 === s || s.removeChild(r), e
                }(n, r) ? s() : e()
            }, i.Em = function(t) {
                this.ql.dispatchEvent(ti(this.t, "amp-story-muted-state", {
                    muted: t
                }))
            }, i.Rm = function(t, i) {
                var n = this;
                i.sendRequest("getDocumentState", {
                    "state": "STORY_PROGRESS"
                }, !0).then((function(i) {
                    n.ql.dispatchEvent(ti(n.t, "storyNavigation", {
                        "pageId": t,
                        "progress": i.value
                    }))
                }))
            }, i.Im = function(t) {
                this.Mm(!t), this.kp = t, this.Sm(t)
            }, i.Mm = function(t) {
                var i = this.Xl.querySelector("button.amp-story-player-exit-control-button");
                i && (t ? i.classList.remove(Ai) : i.classList.add(Ai))
            }, i.Sm = function(t) {
                this.ql.dispatchEvent(ti(this.t, t ? "page-attachment-open" : "page-attachment-close", {}))
            }, i.$p = function(t) {
                this.Pm(t), t.next ? this.me() : t.previous && this.Kp()
            }, i.Pm = function(t) {
                var i, n;
                this.pp || !t.next && !t.previous || (t.next ? (i = this.up + 1 === this.hp.length, n = "noNextStory") : (i = 0 === this.up, n = "noPreviousStory"), i && this.ql.dispatchEvent(ti(this.t, n, {})))
            }, i.Yp = function(t) {
                var i = this.Tm(t);
                i && (this.ip.startX = i.screenX, this.ip.startY = i.screenY, this.yp && this.yp.onTouchStart(t.timeStamp, i.clientY), this.ql.dispatchEvent(ti(this.t, "amp-story-player-touchstart", {
                    "touches": t.touches
                })))
            }, i.Lp = function(t) {
                var i = this.Tm(t);
                if (i)
                    if (this.ql.dispatchEvent(ti(this.t, "amp-story-player-touchmove", {
                            "touches": t.touches,
                            "isNavigationalSwipe": this.ip.isSwipeX
                        })), !1 !== this.ip.isSwipeX) {
                        var n = i.screenX,
                            r = i.screenY;
                        this.ip.lastX = n, (null !== this.ip.isSwipeX || (this.ip.isSwipeX = Math.abs(this.ip.startX - n) > Math.abs(this.ip.startY - r), this.ip.isSwipeX)) && this.Um({
                            deltaX: n - this.ip.startX,
                            last: !1
                        })
                    } else this.yp && this.yp.onTouchMove(t.timeStamp, i.clientY)
            }, i.Zp = function(t) {
                this.ql.dispatchEvent(ti(this.t, "amp-story-player-touchend", {
                    "touches": t.touches,
                    "isNavigationalSwipe": this.ip.isSwipeX
                })), !0 === this.ip.isSwipeX ? this.Um({
                    deltaX: this.ip.lastX - this.ip.startX,
                    last: !0
                }) : this.yp && this.yp.onTouchEnd(t.timeStamp), this.ip.startX = 0, this.ip.startY = 0, this.ip.lastX = 0, this.ip.isSwipeX = null, this.fp = 0
            }, i.Um = function(t) {
                if (!(this.hp.length <= 1 || this.kp)) {
                    var i = t.deltaX;
                    if (!0 === t.last) {
                        var n = Math.abs(i);
                        return 1 === this.fp && (n > 50 && (this.zm() || this.pp) ? this.me() : this.qm()), void(2 === this.fp && (n > 50 && (this.zm() || this.pp) ? this.Kp() : this.qm()))
                    }
                    this._m(i)
                }
            }, i.qm = function() {
                var t = this.hp[this.up].iframe;
                requestAnimationFrame((function() {
                    Qt(Zt(t), ["transform", "transition"])
                }));
                var i = this.zm();
                i && requestAnimationFrame((function() {
                    Qt(Zt(i.iframe), ["transform", "transition"])
                }))
            }, i.zm = function() {
                var t = 1 === this.fp ? this.up + 1 : this.up - 1;
                return this.Qp(t) ? null : this.hp[t]
            }, i.Qp = function(t) {
                return t >= this.hp.length || t < 0
            }, i.Mp = function() {
                if (this.lp) {
                    var t = this.lp.behavior;
                    t && "boolean" == typeof t.autoplay && (this.gp = t.autoplay)
                }
            }, i.Pp = function() {
                if (this.lp) {
                    var t = this.lp.display;
                    t && "auto" === t.attribution && (this.bp = "auto")
                }
            }, i.Tp = function() {
                if (this.lp) {
                    var t = this.lp.behavior;
                    t && !1 === t.pageScroll && (this.yp = null)
                }
            }, i.Up = function() {
                if (null !== this.pp) return this.pp;
                if (!this.lp) return this.pp = !1, !1;
                var t, i = this.lp.behavior;
                return this.pp = this.lm(i) && "end" === (t = i).on && "circular-wrapping" === t.action, this.pp
            }, i._m = function(t) {
                var i;
                t < 0 ? (this.fp = 1, i = "translate3d(calc(100% + ".concat(t, "px), 0, 0)")) : (this.fp = 2, i = "translate3d(calc(".concat(t, "px - 100%), 0, 0)"));
                var n = this.hp[this.up].iframe,
                    r = "translate3d(".concat(t, "px, 0, 0)");
                requestAnimationFrame((function() {
                    Wt(Zt(n), {
                        transform: r,
                        transition: "none"
                    })
                }));
                var s = this.zm();
                s && requestAnimationFrame((function() {
                    Wt(Zt(s.iframe), {
                        transform: i,
                        transition: "none"
                    })
                }))
            }, i.Tm = function(t) {
                var i = t.touches;
                if (!i || i.length < 1) return null;
                var n = i[0],
                    r = n.clientX,
                    s = n.clientY;
                return {
                    screenX: n.screenX,
                    screenY: n.screenY,
                    clientX: r,
                    clientY: s
                }
            }, t
        }(),
        Ti = function() {
            function t(t) {
                this.t = t
            }
            var i = t.prototype;
            return i.Fm = function(t) {
                var i = this;
                new si(this.t, t, (function() {
                    return t.layoutPlayer()
                })), this.t.addEventListener("scroll", (function n() {
                    t.layoutPlayer(), i.t.removeEventListener("scroll", n)
                }))
            }, i.loadPlayers = function() {
                var t = this.t.document.getElementsByTagName("amp-story-player");
                Y();
                for (var i = 0; i < t.length; i++) {
                    var n = t[i],
                        r = new Pi(this.t, n);
                    r.buildPlayer(), this.Fm(r)
                }
            }, i.loadEntryPoints = function() {
                var t = this.t.document.getElementsByTagName("amp-story-entry-point");
                Y();
                for (var i = 0; i < t.length; i++) {
                    var n = t[i],
                        r = new X(this.t, n);
                    r.buildCallback(), this.Fm(r)
                }
            }, t
        }();
    vi = self.document, di = function(t) {
        return "loading" != t.readyState && "uninitialized" != t.readyState
    }, yi = function() {
        new Ti(self).loadPlayers()
    }, (gi = di(vi)) ? yi() : vi.addEventListener("readystatechange", (function t() {
        di(vi) && (gi || (gi = !0, yi()), vi.removeEventListener("readystatechange", t))
    })), globalThis.AmpStoryPlayer = Pi
}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */