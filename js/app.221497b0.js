(function(t) {
    function e(e) {
        for (var r, o, l = e[0], s = e[1], u = e[2], f = 0, p = []; f < l.length; f++)
            o = l[f], Object.prototype.hasOwnProperty.call(a, o) && a[o] && p.push(a[o][0]), a[o] = 0;
        for (r in s)
            Object.prototype.hasOwnProperty.call(s, r) && (t[r] = s[r]);
        c && c(e);
        while (p.length)
            p.shift()();
        return i.push.apply(i, u || []), n()
    }

    function n() {
        for (var t, e = 0; e < i.length; e++) {
            for (var n = i[e], r = !0, l = 1; l < n.length; l++) {
                var s = n[l];
                0 !== a[s] && (r = !1)
            }
            r && (i.splice(e--, 1), t = o(o.s = n[0]))
        }
        return t
    }
    var r = {},
        a = {
            app: 0
        },
        i = [];

    function o(e) {
        if (r[e]) return r[e].exports;
        var n = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, o), n.l = !0, n.exports
    }
    o.m = t, o.c = r, o.d = function(t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) o.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "/";
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
        s = l.push.bind(l);
    l.push = e, l = l.slice();
    for (var u = 0; u < l.length; u++) e(l[u]);
    var c = s;
    i.push([0, "chunk-vendors"]), n()
})({
    0: function(t, e, n) {
        t.exports = n("56d7")
    },
    "034f": function(t, e, n) {
        "use strict";
        n("85ec")
    },
    "2a59": function(t, e, n) {},
    "3db4": function(t, e, n) {},
    "56d7": function(t, e, n) {
        "use strict";
        n.r(e);
        n("e260"), n("e6cf"), n("cca6"), n("a79d");
        var r = n("2b0e"),
            a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [n("Main")], 1)
            },
            i = [],
            o = (n("3db4"), n("f95d"), function() {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            }),
            l = [function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "hero"
                }, [n("div"), n("div", {
                    staticClass: "hero__container"
                }, [n("div", {
                    staticClass: "hero__main"
                }, [n("h5", {
                    staticClass: "hero__title"
                }, [t._v("Yanis OKA")]), n("h3", {
                    staticClass: "hero__sub-title"
                }, [t._v("Commercial")]), n("a", {
                    staticClass: "hero__btn",
                    attrs: {
                        href: "mailto:yanisoka109@pgmail.com",
                        subject: "subject text",
                        target: "__blank",
                        title: "Yanis OKA e-mail"
                    }
                }, [t._v("Message Me")])]), n("div", {
                    staticClass: "hero__footer"
                }, [n("li", {
                    staticClass: "hero__links"
                }, [n("ul", [n("a", {
                    staticClass: "hero__link",
                    attrs: {
                        href: "https://rxresu.me/yanis.ext/agent-commercial",
                        target: "__blank",
                        title: "Yanis OKA Resume"
                    }
                }, [t._v("Resume")])]), n("ul", [n("a", {
                    staticClass: "hero__link",
                    attrs: {
                        href: "https://www.linkedin.com/in/yanis-oka-672472284/",
                        target: "__blank",
                        title: "Yanis OKA LinkedIn"
                    }
                }, [t._v("LinkedIn")])])]), n("div", {
                    staticClass: "hero__copyright"
                }, [t._v("© 2024 Yuva MEHDI")])])])])
            }],
            s = {
                name: "Main",
                components: {}
            },
            u = s,
            c = (n("b4b8"), n("2877")),
            f = Object(c["a"])(u, o, l, !1, null, "1638705a", null),
            p = f.exports,
            _ = {
                name: "App",
                components: {
                    Main: p
                }
            },
            h = _,
            v = (n("034f"), Object(c["a"])(h, a, i, !1, null, null, null)),
            d = v.exports;
        r["a"].config.productionTip = !1, new r["a"]({
            render: function(t) {
                return t(d)
            }
        }).$mount("#app")
    },
    "85ec": function(t, e, n) {},
    b4b8: function(t, e, n) {
        "use strict";
        n("2a59")
    },
    f95d: function(t, e, n) {}
});
