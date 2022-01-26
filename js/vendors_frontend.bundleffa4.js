/*! For license information please see vendors~frontend.bundle.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [3],
    [function (t, e, r) {
        "use strict";

        function n(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function i(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
        }
        r.d(e, "b", (function () {
            return qn
        })), r.d(e, "a", (function () {
            return qn
        }));
        var o, s, a, u, c, l, h, p, f, d, g, m, v, b, y, w, _, x, E, T, A, D, q, k, L, S, C, N, O = {
                autoSleep: 120,
                force3D: "auto",
                nullTargetWarn: 1,
                units: {
                    lineHeight: ""
                }
            },
            R = {
                duration: .5,
                overwrite: !1,
                delay: 0
            },
            P = 1e8,
            B = 2 * Math.PI,
            M = B / 4,
            F = 0,
            U = Math.sqrt,
            I = Math.cos,
            j = Math.sin,
            V = function (t) {
                return "string" == typeof t
            },
            H = function (t) {
                return "function" == typeof t
            },
            z = function (t) {
                return "number" == typeof t
            },
            G = function (t) {
                return void 0 === t
            },
            Y = function (t) {
                return "object" == typeof t
            },
            X = function (t) {
                return !1 !== t
            },
            W = function () {
                return "undefined" != typeof window
            },
            J = function (t) {
                return H(t) || V(t)
            },
            K = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
            $ = Array.isArray,
            Z = /(?:-?\.?\d|\.)+/gi,
            Q = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
            tt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
            et = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
            rt = /[+-]=-?[.\d]+/,
            nt = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
            it = /[\d.+\-=]+(?:e[-+]\d*)*/i,
            ot = {},
            st = {},
            at = function (t) {
                return (st = Ot(t, ot)) && dr
            },
            ut = function (t, e) {
                return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
            },
            ct = function (t, e) {
                return !e && console.warn(t)
            },
            lt = function (t, e) {
                return t && (ot[t] = e) && st && (st[t] = e) || ot
            },
            ht = function () {
                return 0
            },
            pt = {},
            ft = [],
            dt = {},
            gt = {},
            mt = {},
            vt = 30,
            bt = [],
            yt = "",
            wt = function (t) {
                var e, r, n = t[0];
                if (Y(n) || H(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
                    for (r = bt.length; r-- && !bt[r].targetTest(n););
                    e = bt[r]
                }
                for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Ue(t[r], e))) || t.splice(r, 1);
                return t
            },
            _t = function (t) {
                return t._gsap || wt(oe(t))[0]._gsap
            },
            xt = function (t, e, r) {
                return (r = t[e]) && H(r) ? t[e]() : G(r) && t.getAttribute && t.getAttribute(e) || r
            },
            Et = function (t, e) {
                return (t = t.split(",")).forEach(e) || t
            },
            Tt = function (t) {
                return Math.round(1e5 * t) / 1e5 || 0
            },
            At = function (t, e) {
                for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r;);
                return n < r
            },
            Dt = function (t, e, r) {
                var n, i = z(t[1]),
                    o = (i ? 2 : 1) + (e < 2 ? 0 : 1),
                    s = t[o];
                if (i && (s.duration = t[1]), s.parent = r, e) {
                    for (n = s; r && !("immediateRender" in n);) n = r.vars.defaults || {}, r = X(r.vars.inherit) && r.parent;
                    s.immediateRender = X(n.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = t[o - 1]
                }
                return s
            },
            qt = function () {
                var t, e, r = ft.length,
                    n = ft.slice(0);
                for (dt = {}, ft.length = 0, t = 0; t < r; t++)(e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
            },
            kt = function (t, e, r, n) {
                ft.length && qt(), t.render(e, r, n), ft.length && qt()
            },
            Lt = function (t) {
                var e = parseFloat(t);
                return (e || 0 === e) && (t + "").match(nt).length < 2 ? e : V(t) ? t.trim() : t
            },
            St = function (t) {
                return t
            },
            Ct = function (t, e) {
                for (var r in e) r in t || (t[r] = e[r]);
                return t
            },
            Nt = function (t, e) {
                for (var r in e) r in t || "duration" === r || "ease" === r || (t[r] = e[r])
            },
            Ot = function (t, e) {
                for (var r in e) t[r] = e[r];
                return t
            },
            Rt = function t(e, r) {
                for (var n in r) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = Y(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
                return e
            },
            Pt = function (t, e) {
                var r, n = {};
                for (r in t) r in e || (n[r] = t[r]);
                return n
            },
            Bt = function (t) {
                var e = t.parent || s,
                    r = t.keyframes ? Nt : Ct;
                if (X(t.inherit))
                    for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
                return t
            },
            Mt = function (t, e, r, n) {
                void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
                var i = e._prev,
                    o = e._next;
                i ? i._next = o : t[r] === e && (t[r] = o), o ? o._prev = i : t[n] === e && (t[n] = i), e._next = e._prev = e.parent = null
            },
            Ft = function (t, e) {
                t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
            },
            Ut = function (t, e) {
                if (t && (!e || e._end > t._dur || e._start < 0))
                    for (var r = t; r;) r._dirty = 1, r = r.parent;
                return t
            },
            It = function (t) {
                for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                return t
            },
            jt = function (t) {
                return t._repeat ? Vt(t._tTime, t = t.duration() + t._rDelay) * t : 0
            },
            Vt = function (t, e) {
                var r = Math.floor(t /= e);
                return t && r === t ? r - 1 : r
            },
            Ht = function (t, e) {
                return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
            },
            zt = function (t) {
                return t._end = Tt(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0))
            },
            Gt = function (t, e) {
                var r = t._dp;
                return r && r.smoothChildTiming && t._ts && (t._start = Tt(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), zt(t), r._dirty || Ut(r, t)), t
            },
            Yt = function (t, e) {
                var r;
                if ((e._time || e._initted && !e._dur) && (r = Ht(t.rawTime(), e), (!e._dur || ee(0, e.totalDuration(), r) - e._tTime > 1e-8) && e.render(r, !0)), Ut(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                    if (t._dur < t.duration())
                        for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
                    t._zTime = -1e-8
                }
            },
            Xt = function (t, e, r, n) {
                return e.parent && Ft(e), e._start = Tt(r + e._delay), e._end = Tt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
                    function (t, e, r, n, i) {
                        void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
                        var o, s = t[n];
                        if (i)
                            for (o = e[i]; s && s[i] > o;) s = s._prev;
                        s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = s, e.parent = e._dp = t
                    }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, n || Yt(t, e), t
            },
            Wt = function (t, e) {
                return (ot.ScrollTrigger || ut("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t)
            },
            Jt = function (t, e, r, n) {
                return Ye(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && h !== De.frame ? (ft.push(t), t._lazy = [e, n], 1) : void 0 : 1
            },
            Kt = function (t, e, r, n) {
                var i = t._repeat,
                    o = Tt(e) || 0,
                    s = t._tTime / t._tDur;
                return s && !n && (t._time *= o / t._dur), t._dur = o, t._tDur = i ? i < 0 ? 1e10 : Tt(o * (i + 1) + t._rDelay * i) : o, s && !n ? Gt(t, t._tTime = t._tDur * s) : t.parent && zt(t), r || Ut(t.parent, t), t
            },
            $t = function (t) {
                return t instanceof je ? Ut(t) : Kt(t, t._dur)
            },
            Zt = {
                _start: 0,
                endTime: ht
            },
            Qt = function t(e, r) {
                var n, i, o = e.labels,
                    s = e._recent || Zt,
                    a = e.duration() >= P ? s.endTime(!1) : e._dur;
                return V(r) && (isNaN(r) || r in o) ? "<" === (n = r.charAt(0)) || ">" === n ? ("<" === n ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) : (n = r.indexOf("=")) < 0 ? (r in o || (o[r] = a), o[r]) : (i = +(r.charAt(n - 1) + r.substr(n + 1)), n > 1 ? t(e, r.substr(0, n - 1)) + i : a + i) : null == r ? a : +r
            },
            te = function (t, e) {
                return t || 0 === t ? e(t) : e
            },
            ee = function (t, e, r) {
                return r < t ? t : r > e ? e : r
            },
            re = function (t) {
                if ("string" != typeof t) return "";
                var e = it.exec(t);
                return e ? t.substr(e.index + e[0].length) : ""
            },
            ne = [].slice,
            ie = function (t, e) {
                return t && Y(t) && "length" in t && (!e && !t.length || t.length - 1 in t && Y(t[0])) && !t.nodeType && t !== a
            },
            oe = function (t, e) {
                return !V(t) || e || !u && qe() ? $(t) ? function (t, e, r) {
                    return void 0 === r && (r = []), t.forEach((function (t) {
                        var n;
                        return V(t) && !e || ie(t, 1) ? (n = r).push.apply(n, oe(t)) : r.push(t)
                    })) || r
                }(t, e) : ie(t) ? ne.call(t, 0) : t ? [t] : [] : ne.call(c.querySelectorAll(t), 0)
            },
            se = function (t) {
                return t.sort((function () {
                    return .5 - Math.random()
                }))
            },
            ae = function (t) {
                if (H(t)) return t;
                var e = Y(t) ? t : {
                        each: t
                    },
                    r = Re(e.ease),
                    n = e.from || 0,
                    i = parseFloat(e.base) || 0,
                    o = {},
                    s = n > 0 && n < 1,
                    a = isNaN(n) || s,
                    u = e.axis,
                    c = n,
                    l = n;
                return V(n) ? c = l = {
                        center: .5,
                        edges: .5,
                        end: 1
                    } [n] || 0 : !s && a && (c = n[0], l = n[1]),
                    function (t, s, h) {
                        var p, f, d, g, m, v, b, y, w, _ = (h || e).length,
                            x = o[_];
                        if (!x) {
                            if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, P])[1])) {
                                for (b = -P; b < (b = h[w++].getBoundingClientRect().left) && w < _;);
                                w--
                            }
                            for (x = o[_] = [], p = a ? Math.min(w, _) * c - .5 : n % w, f = a ? _ * l / w - .5 : n / w | 0, b = 0, y = P, v = 0; v < _; v++) d = v % w - p, g = f - (v / w | 0), x[v] = m = u ? Math.abs("y" === u ? g : d) : U(d * d + g * g), m > b && (b = m), m < y && (y = m);
                            "random" === n && se(x), x.max = b - y, x.min = y, x.v = _ = (parseFloat(e.amount) || parseFloat(e.each) * (w > _ ? _ - 1 : u ? "y" === u ? _ / w : w : Math.max(w, _ / w)) || 0) * ("edges" === n ? -1 : 1), x.b = _ < 0 ? i - _ : i, x.u = re(e.amount || e.each) || 0, r = r && _ < 0 ? Ne(r) : r
                        }
                        return _ = (x[t] - x.min) / x.max || 0, Tt(x.b + (r ? r(_) : _) * x.v) + x.u
                    }
            },
            ue = function (t) {
                var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
                return function (r) {
                    var n = Math.round(parseFloat(r) / t) * t * e;
                    return (n - n % 1) / e + (z(r) ? 0 : re(r))
                }
            },
            ce = function (t, e) {
                var r, n, i = $(t);
                return !i && Y(t) && (r = i = t.radius || P, t.values ? (t = oe(t.values), (n = !z(t[0])) && (r *= r)) : t = ue(t.increment)), te(e, i ? H(t) ? function (e) {
                    return n = t(e), Math.abs(n - e) <= r ? n : e
                } : function (e) {
                    for (var i, o, s = parseFloat(n ? e.x : e), a = parseFloat(n ? e.y : 0), u = P, c = 0, l = t.length; l--;)(i = n ? (i = t[l].x - s) * i + (o = t[l].y - a) * o : Math.abs(t[l] - s)) < u && (u = i, c = l);
                    return c = !r || u <= r ? t[c] : e, n || c === e || z(e) ? c : c + re(e)
                } : ue(t))
            },
            le = function (t, e, r, n) {
                return te($(t) ? !e : !0 === r ? !!(r = 0) : !n, (function () {
                    return $(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * n) / n
                }))
            },
            he = function (t, e, r) {
                return te(r, (function (r) {
                    return t[~~e(r)]
                }))
            },
            pe = function (t) {
                for (var e, r, n, i, o = 0, s = ""; ~(e = t.indexOf("random(", o));) n = t.indexOf(")", e), i = "[" === t.charAt(e + 7), r = t.substr(e + 7, n - e - 7).match(i ? nt : Z), s += t.substr(o, e - o) + le(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5), o = n + 1;
                return s + t.substr(o, t.length - o)
            },
            fe = function (t, e, r, n, i) {
                var o = e - t,
                    s = n - r;
                return te(i, (function (e) {
                    return r + ((e - t) / o * s || 0)
                }))
            },
            de = function (t, e, r) {
                var n, i, o, s = t.labels,
                    a = P;
                for (n in s)(i = s[n] - e) < 0 == !!r && i && a > (i = Math.abs(i)) && (o = n, a = i);
                return o
            },
            ge = function (t, e, r) {
                var n, i, o = t.vars,
                    s = o[e];
                if (s) return n = o[e + "Params"], i = o.callbackScope || t, r && ft.length && qt(), n ? s.apply(i, n) : s.call(i)
            },
            me = function (t) {
                return Ft(t), t.progress() < 1 && ge(t, "onInterrupt"), t
            },
            ve = function (t) {
                var e = (t = !t.name && t.default || t).name,
                    r = H(t),
                    n = e && !r && t.init ? function () {
                        this._props = []
                    } : t,
                    i = {
                        init: ht,
                        render: or,
                        add: ze,
                        kill: ar,
                        modifier: sr,
                        rawVars: 0
                    },
                    o = {
                        targetTest: 0,
                        get: 0,
                        getSetter: er,
                        aliases: {},
                        register: 0
                    };
                if (qe(), t !== n) {
                    if (gt[e]) return;
                    Ct(n, Ct(Pt(t, i), o)), Ot(n.prototype, Ot(i, Pt(t, o))), gt[n.prop = e] = n, t.targetTest && (bt.push(n), pt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                }
                lt(e, n), t.register && t.register(dr, n, lr)
            },
            be = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            },
            ye = function (t, e, r) {
                return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) + .5 | 0
            },
            we = function (t, e, r) {
                var n, i, o, s, a, u, c, l, h, p, f = t ? z(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : be.black;
                if (!f) {
                    if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), be[t]) f = be[t];
                    else if ("#" === t.charAt(0)) {
                        if (t.length < 6 && (n = t.charAt(1), i = t.charAt(2), o = t.charAt(3), t = "#" + n + n + i + i + o + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(f = parseInt(t.substr(1, 6), 16)) >> 16, f >> 8 & 255, 255 & f, parseInt(t.substr(7), 16) / 255];
                        f = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t]
                    } else if ("hsl" === t.substr(0, 3))
                        if (f = p = t.match(Z), e) {
                            if (~t.indexOf("=")) return f = t.match(Q), r && f.length < 4 && (f[3] = 1), f
                        } else s = +f[0] % 360 / 360, a = +f[1] / 100, n = 2 * (u = +f[2] / 100) - (i = u <= .5 ? u * (a + 1) : u + a - u * a), f.length > 3 && (f[3] *= 1), f[0] = ye(s + 1 / 3, n, i), f[1] = ye(s, n, i), f[2] = ye(s - 1 / 3, n, i);
                    else f = t.match(Z) || be.transparent;
                    f = f.map(Number)
                }
                return e && !p && (n = f[0] / 255, i = f[1] / 255, o = f[2] / 255, u = ((c = Math.max(n, i, o)) + (l = Math.min(n, i, o))) / 2, c === l ? s = a = 0 : (h = c - l, a = u > .5 ? h / (2 - c - l) : h / (c + l), s = c === n ? (i - o) / h + (i < o ? 6 : 0) : c === i ? (o - n) / h + 2 : (n - i) / h + 4, s *= 60), f[0] = ~~(s + .5), f[1] = ~~(100 * a + .5), f[2] = ~~(100 * u + .5)), r && f.length < 4 && (f[3] = 1), f
            },
            _e = function (t) {
                var e = [],
                    r = [],
                    n = -1;
                return t.split(Ee).forEach((function (t) {
                    var i = t.match(tt) || [];
                    e.push.apply(e, i), r.push(n += i.length + 1)
                })), e.c = r, e
            },
            xe = function (t, e, r) {
                var n, i, o, s, a = "",
                    u = (t + a).match(Ee),
                    c = e ? "hsla(" : "rgba(",
                    l = 0;
                if (!u) return t;
                if (u = u.map((function (t) {
                        return (t = we(t, e, 1)) && c + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                    })), r && (o = _e(t), (n = r.c).join(a) !== o.c.join(a)))
                    for (s = (i = t.replace(Ee, "1").split(tt)).length - 1; l < s; l++) a += i[l] + (~n.indexOf(l) ? u.shift() || c + "0,0,0,0)" : (o.length ? o : u.length ? u : r).shift());
                if (!i)
                    for (s = (i = t.split(Ee)).length - 1; l < s; l++) a += i[l] + u[l];
                return a + i[s]
            },
            Ee = function () {
                var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
                for (t in be) e += "|" + t + "\\b";
                return new RegExp(e + ")", "gi")
            }(),
            Te = /hsl[a]?\(/,
            Ae = function (t) {
                var e, r = t.join(" ");
                if (Ee.lastIndex = 0, Ee.test(r)) return e = Te.test(r), t[1] = xe(t[1], e), t[0] = xe(t[0], e, _e(t[1])), !0
            },
            De = (w = Date.now, _ = 500, x = 33, E = w(), T = E, D = A = 1e3 / 240, k = function t(e) {
                var r, n, i, o, s = w() - T,
                    a = !0 === e;
                if (s > _ && (E += s - x), ((r = (i = (T += s) - E) - D) > 0 || a) && (o = ++v.frame, b = i - 1e3 * v.time, v.time = i /= 1e3, D += r + (r >= A ? 4 : A - r), n = 1), a || (d = g(t)), n)
                    for (y = 0; y < q.length; y++) q[y](i, b, o, e)
            }, v = {
                time: 0,
                frame: 0,
                tick: function () {
                    k(!0)
                },
                deltaRatio: function (t) {
                    return b / (1e3 / (t || 60))
                },
                wake: function () {
                    l && (!u && W() && (a = u = window, c = a.document || {}, ot.gsap = dr, (a.gsapVersions || (a.gsapVersions = [])).push(dr.version), at(st || a.GreenSockGlobals || !a.gsap && a || {}), m = a.requestAnimationFrame), d && v.sleep(), g = m || function (t) {
                        return setTimeout(t, D - 1e3 * v.time + 1 | 0)
                    }, f = 1, k(2))
                },
                sleep: function () {
                    (m ? a.cancelAnimationFrame : clearTimeout)(d), f = 0, g = ht
                },
                lagSmoothing: function (t, e) {
                    _ = t || 1 / 1e-8, x = Math.min(e, _, 0)
                },
                fps: function (t) {
                    A = 1e3 / (t || 240), D = 1e3 * v.time + A
                },
                add: function (t) {
                    q.indexOf(t) < 0 && q.push(t), qe()
                },
                remove: function (t) {
                    var e;
                    ~(e = q.indexOf(t)) && q.splice(e, 1) && y >= e && y--
                },
                _listeners: q = []
            }),
            qe = function () {
                return !f && De.wake()
            },
            ke = {},
            Le = /^[\d.\-M][\d.\-,\s]/,
            Se = /["']/g,
            Ce = function (t) {
                for (var e, r, n, i = {}, o = t.substr(1, t.length - 3).split(":"), s = o[0], a = 1, u = o.length; a < u; a++) r = o[a], e = a !== u - 1 ? r.lastIndexOf(",") : r.length, n = r.substr(0, e), i[s] = isNaN(n) ? n.replace(Se, "").trim() : +n, s = r.substr(e + 1).trim();
                return i
            },
            Ne = function (t) {
                return function (e) {
                    return 1 - t(1 - e)
                }
            },
            Oe = function t(e, r) {
                for (var n, i = e._first; i;) i instanceof je ? t(i, r) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === r || (i.timeline ? t(i.timeline, r) : (n = i._ease, i._ease = i._yEase, i._yEase = n, i._yoyo = r)), i = i._next
            },
            Re = function (t, e) {
                return t && (H(t) ? t : ke[t] || function (t) {
                    var e, r, n, i, o = (t + "").split("("),
                        s = ke[o[0]];
                    return s && o.length > 1 && s.config ? s.config.apply(null, ~t.indexOf("{") ? [Ce(o[1])] : (e = t, r = e.indexOf("(") + 1, n = e.indexOf(")"), i = e.indexOf("(", r), e.substring(r, ~i && i < n ? e.indexOf(")", n + 1) : n)).split(",").map(Lt)) : ke._CE && Le.test(t) ? ke._CE("", t) : s
                }(t)) || e
            },
            Pe = function (t, e, r, n) {
                void 0 === r && (r = function (t) {
                    return 1 - e(1 - t)
                }), void 0 === n && (n = function (t) {
                    return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
                });
                var i, o = {
                    easeIn: e,
                    easeOut: r,
                    easeInOut: n
                };
                return Et(t, (function (t) {
                    for (var e in ke[t] = ot[t] = o, ke[i = t.toLowerCase()] = r, o) ke[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = ke[t + "." + e] = o[e]
                })), o
            },
            Be = function (t) {
                return function (e) {
                    return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
                }
            },
            Me = function t(e, r, n) {
                var i = r >= 1 ? r : 1,
                    o = (n || (e ? .3 : .45)) / (r < 1 ? r : 1),
                    s = o / B * (Math.asin(1 / i) || 0),
                    a = function (t) {
                        return 1 === t ? 1 : i * Math.pow(2, -10 * t) * j((t - s) * o) + 1
                    },
                    u = "out" === e ? a : "in" === e ? function (t) {
                        return 1 - a(1 - t)
                    } : Be(a);
                return o = B / o, u.config = function (r, n) {
                    return t(e, r, n)
                }, u
            },
            Fe = function t(e, r) {
                void 0 === r && (r = 1.70158);
                var n = function (t) {
                        return t ? --t * t * ((r + 1) * t + r) + 1 : 0
                    },
                    i = "out" === e ? n : "in" === e ? function (t) {
                        return 1 - n(1 - t)
                    } : Be(n);
                return i.config = function (r) {
                    return t(e, r)
                }, i
            };
        Et("Linear,Quad,Cubic,Quart,Quint,Strong", (function (t, e) {
            var r = e < 5 ? e + 1 : e;
            Pe(t + ",Power" + (r - 1), e ? function (t) {
                return Math.pow(t, r)
            } : function (t) {
                return t
            }, (function (t) {
                return 1 - Math.pow(1 - t, r)
            }), (function (t) {
                return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
            }))
        })), ke.Linear.easeNone = ke.none = ke.Linear.easeIn, Pe("Elastic", Me("in"), Me("out"), Me()), L = 7.5625, C = 1 / (S = 2.75), Pe("Bounce", (function (t) {
            return 1 - N(1 - t)
        }), N = function (t) {
            return t < C ? L * t * t : t < .7272727272727273 ? L * Math.pow(t - 1.5 / S, 2) + .75 : t < .9090909090909092 ? L * (t -= 2.25 / S) * t + .9375 : L * Math.pow(t - 2.625 / S, 2) + .984375
        }), Pe("Expo", (function (t) {
            return t ? Math.pow(2, 10 * (t - 1)) : 0
        })), Pe("Circ", (function (t) {
            return -(U(1 - t * t) - 1)
        })), Pe("Sine", (function (t) {
            return 1 === t ? 1 : 1 - I(t * M)
        })), Pe("Back", Fe("in"), Fe("out"), Fe()), ke.SteppedEase = ke.steps = ot.SteppedEase = {
            config: function (t, e) {
                void 0 === t && (t = 1);
                var r = 1 / t,
                    n = t + (e ? 0 : 1),
                    i = e ? 1 : 0;
                return function (t) {
                    return ((n * ee(0, 1 - 1e-8, t) | 0) + i) * r
                }
            }
        }, R.ease = ke["quad.out"], Et("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function (t) {
            return yt += t + "," + t + "Params,"
        }));
        var Ue = function (t, e) {
                this.id = F++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : xt, this.set = e ? e.getSetter : er
            },
            Ie = function () {
                function t(t, e) {
                    var r = t.parent || s;
                    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Kt(this, +t.duration, 1, 1), this.data = t.data, f || De.wake(), r && Xt(r, this, e || 0 === e ? e : r._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0)
                }
                var e = t.prototype;
                return e.delay = function (t) {
                    return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
                }, e.duration = function (t) {
                    return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
                }, e.totalDuration = function (t) {
                    return arguments.length ? (this._dirty = 0, Kt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
                }, e.totalTime = function (t, e) {
                    if (qe(), !arguments.length) return this._tTime;
                    var r = this._dp;
                    if (r && r.smoothChildTiming && this._ts) {
                        for (Gt(this, t), !r._dp || r.parent || Yt(r, this); r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                        !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Xt(this._dp, this, this._start - this._delay)
                    }
                    return (this._tTime !== t || !this._dur && !e || this._initted && 1e-8 === Math.abs(this._zTime) || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), kt(this, t, e)), this
                }, e.time = function (t, e) {
                    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + jt(this)) % this._dur || (t ? this._dur : 0), e) : this._time
                }, e.totalProgress = function (t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
                }, e.progress = function (t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + jt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
                }, e.iteration = function (t, e) {
                    var r = this.duration() + this._rDelay;
                    return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Vt(this._tTime, r) + 1 : 1
                }, e.timeScale = function (t) {
                    if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                    if (this._rts === t) return this;
                    var e = this.parent && this._ts ? Ht(this.parent._time, this) : this._tTime;
                    return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, It(this.totalTime(ee(-this._delay, this._tDur, e), !0))
                }, e.paused = function (t) {
                    return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (qe(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= 1e-8) && 1e-8 !== Math.abs(this._zTime)))), this) : this._ps
                }, e.startTime = function (t) {
                    if (arguments.length) {
                        this._start = t;
                        var e = this.parent || this._dp;
                        return e && (e._sort || !this.parent) && Xt(e, this, t - this._delay), this
                    }
                    return this._start
                }, e.endTime = function (t) {
                    return this._start + (X(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
                }, e.rawTime = function (t) {
                    var e = this.parent || this._dp;
                    return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ht(e.rawTime(t), this) : this._tTime : this._tTime
                }, e.globalTime = function (t) {
                    for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
                    return r
                }, e.repeat = function (t) {
                    return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, $t(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
                }, e.repeatDelay = function (t) {
                    return arguments.length ? (this._rDelay = t, $t(this)) : this._rDelay
                }, e.yoyo = function (t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, e.seek = function (t, e) {
                    return this.totalTime(Qt(this, t), X(e))
                }, e.restart = function (t, e) {
                    return this.play().totalTime(t ? -this._delay : 0, X(e))
                }, e.play = function (t, e) {
                    return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                }, e.reverse = function (t, e) {
                    return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                }, e.pause = function (t, e) {
                    return null != t && this.seek(t, e), this.paused(!0)
                }, e.resume = function () {
                    return this.paused(!1)
                }, e.reversed = function (t) {
                    return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
                }, e.invalidate = function () {
                    return this._initted = this._act = 0, this._zTime = -1e-8, this
                }, e.isActive = function () {
                    var t, e = this.parent || this._dp,
                        r = this._start;
                    return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - 1e-8))
                }, e.eventCallback = function (t, e, r) {
                    var n = this.vars;
                    return arguments.length > 1 ? (e ? (n[t] = e, r && (n[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t]
                }, e.then = function (t) {
                    var e = this;
                    return new Promise((function (r) {
                        var n = H(t) ? t : St,
                            i = function () {
                                var t = e.then;
                                e.then = null, H(n) && (n = n(e)) && (n.then || n === e) && (e.then = t), r(n), e.then = t
                            };
                        e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? i() : e._prom = i
                    }))
                }, e.kill = function () {
                    me(this)
                }, t
            }();
        Ct(Ie.prototype, {
            _time: 0,
            _start: 0,
            _end: 0,
            _tTime: 0,
            _tDur: 0,
            _dirty: 0,
            _repeat: 0,
            _yoyo: !1,
            parent: null,
            _initted: !1,
            _rDelay: 0,
            _ts: 1,
            _dp: 0,
            ratio: 0,
            _zTime: -1e-8,
            _prom: 0,
            _ps: !1,
            _rts: 1
        });
        var je = function (t) {
            function e(e, r) {
                var i;
                return void 0 === e && (e = {}), (i = t.call(this, e, r) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = X(e.sortChildren), i.parent && Yt(i.parent, n(i)), e.scrollTrigger && Wt(n(i), e.scrollTrigger), i
            }
            i(e, t);
            var r = e.prototype;
            return r.to = function (t, e, r) {
                return new Ke(t, Dt(arguments, 0, this), Qt(this, z(e) ? arguments[3] : r)), this
            }, r.from = function (t, e, r) {
                return new Ke(t, Dt(arguments, 1, this), Qt(this, z(e) ? arguments[3] : r)), this
            }, r.fromTo = function (t, e, r, n) {
                return new Ke(t, Dt(arguments, 2, this), Qt(this, z(e) ? arguments[4] : n)), this
            }, r.set = function (t, e, r) {
                return e.duration = 0, e.parent = this, Bt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Ke(t, e, Qt(this, r), 1), this
            }, r.call = function (t, e, r) {
                return Xt(this, Ke.delayedCall(0, t, e), Qt(this, r))
            }, r.staggerTo = function (t, e, r, n, i, o, s) {
                return r.duration = e, r.stagger = r.stagger || n, r.onComplete = o, r.onCompleteParams = s, r.parent = this, new Ke(t, r, Qt(this, i)), this
            }, r.staggerFrom = function (t, e, r, n, i, o, s) {
                return r.runBackwards = 1, Bt(r).immediateRender = X(r.immediateRender), this.staggerTo(t, e, r, n, i, o, s)
            }, r.staggerFromTo = function (t, e, r, n, i, o, s, a) {
                return n.startAt = r, Bt(n).immediateRender = X(n.immediateRender), this.staggerTo(t, e, n, i, o, s, a)
            }, r.render = function (t, e, r) {
                var n, i, o, a, u, c, l, h, p, f, d, g, m = this._time,
                    v = this._dirty ? this.totalDuration() : this._tDur,
                    b = this._dur,
                    y = this !== s && t > v - 1e-8 && t >= 0 ? v : t < 1e-8 ? 0 : t,
                    w = this._zTime < 0 != t < 0 && (this._initted || !b);
                if (y !== this._tTime || r || w) {
                    if (m !== this._time && b && (y += this._time - m, t += this._time - m), n = y, p = this._start, c = !(h = this._ts), w && (b || (m = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                        if (d = this._yoyo, u = b + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * u + t, e, r);
                        if (n = Tt(y % u), y === v ? (a = this._repeat, n = b) : ((a = ~~(y / u)) && a === y / u && (n = b, a--), n > b && (n = b)), f = Vt(this._tTime, u), !m && this._tTime && f !== a && (f = a), d && 1 & a && (n = b - n, g = 1), a !== f && !this._lock) {
                            var _ = d && 1 & f,
                                x = _ === (d && 1 & a);
                            if (a < f && (_ = !_), m = _ ? 0 : b, this._lock = 1, this.render(m || (g ? 0 : Tt(a * u)), e, !b)._lock = 0, !e && this.parent && ge(this, "onRepeat"), this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1), m !== this._time || c !== !this._ts) return this;
                            if (b = this._dur, v = this._tDur, x && (this._lock = 2, m = _ ? b : -1e-4, this.render(m, !0), this.vars.repeatRefresh && !g && this.invalidate()), this._lock = 0, !this._ts && !c) return this;
                            Oe(this, g)
                        }
                    }
                    if (this._hasPause && !this._forcing && this._lock < 2 && (l = function (t, e, r) {
                            var n;
                            if (r > e)
                                for (n = t._first; n && n._start <= r;) {
                                    if (!n._dur && "isPause" === n.data && n._start > e) return n;
                                    n = n._next
                                } else
                                    for (n = t._last; n && n._start >= r;) {
                                        if (!n._dur && "isPause" === n.data && n._start < e) return n;
                                        n = n._prev
                                    }
                        }(this, Tt(m), Tt(n))) && (y -= n - (n = l._start)), this._tTime = y, this._time = n, this._act = !h, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, m = 0), !m && (n || !b && t >= 0) && !e && ge(this, "onStart"), n >= m && t >= 0)
                        for (i = this._first; i;) {
                            if (o = i._next, (i._act || n >= i._start) && i._ts && l !== i) {
                                if (i.parent !== this) return this.render(t, e, r);
                                if (i.render(i._ts > 0 ? (n - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts, e, r), n !== this._time || !this._ts && !c) {
                                    l = 0, o && (y += this._zTime = -1e-8);
                                    break
                                }
                            }
                            i = o
                        } else {
                            i = this._last;
                            for (var E = t < 0 ? t : n; i;) {
                                if (o = i._prev, (i._act || E <= i._end) && i._ts && l !== i) {
                                    if (i.parent !== this) return this.render(t, e, r);
                                    if (i.render(i._ts > 0 ? (E - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (E - i._start) * i._ts, e, r), n !== this._time || !this._ts && !c) {
                                        l = 0, o && (y += this._zTime = E ? -1e-8 : 1e-8);
                                        break
                                    }
                                }
                                i = o
                            }
                        }
                    if (l && !e && (this.pause(), l.render(n >= m ? 0 : -1e-8)._zTime = n >= m ? 1 : -1, this._ts)) return this._start = p, zt(this), this.render(t, e, r);
                    this._onUpdate && !e && ge(this, "onUpdate", !0), (y === v && v >= this.totalDuration() || !y && m) && (p !== this._start && Math.abs(h) === Math.abs(this._ts) || this._lock || ((t || !b) && (y === v && this._ts > 0 || !y && this._ts < 0) && Ft(this, 1), e || t < 0 && !m || !y && !m || (ge(this, y === v ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < v && this.timeScale() > 0) && this._prom())))
                }
                return this
            }, r.add = function (t, e) {
                var r = this;
                if (z(e) || (e = Qt(this, e)), !(t instanceof Ie)) {
                    if ($(t)) return t.forEach((function (t) {
                        return r.add(t, e)
                    })), this;
                    if (V(t)) return this.addLabel(t, e);
                    if (!H(t)) return this;
                    t = Ke.delayedCall(0, t)
                }
                return this !== t ? Xt(this, t, e) : this
            }, r.getChildren = function (t, e, r, n) {
                void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === n && (n = -P);
                for (var i = [], o = this._first; o;) o._start >= n && (o instanceof Ke ? e && i.push(o) : (r && i.push(o), t && i.push.apply(i, o.getChildren(!0, e, r)))), o = o._next;
                return i
            }, r.getById = function (t) {
                for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                    if (e[r].vars.id === t) return e[r]
            }, r.remove = function (t) {
                return V(t) ? this.removeLabel(t) : H(t) ? this.killTweensOf(t) : (Mt(this, t), t === this._recent && (this._recent = this._last), Ut(this))
            }, r.totalTime = function (e, r) {
                return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Tt(De.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, r), this._forcing = 0, this) : this._tTime
            }, r.addLabel = function (t, e) {
                return this.labels[t] = Qt(this, e), this
            }, r.removeLabel = function (t) {
                return delete this.labels[t], this
            }, r.addPause = function (t, e, r) {
                var n = Ke.delayedCall(0, e || ht, r);
                return n.data = "isPause", this._hasPause = 1, Xt(this, n, Qt(this, t))
            }, r.removePause = function (t) {
                var e = this._first;
                for (t = Qt(this, t); e;) e._start === t && "isPause" === e.data && Ft(e), e = e._next
            }, r.killTweensOf = function (t, e, r) {
                for (var n = this.getTweensOf(t, r), i = n.length; i--;) Ve !== n[i] && n[i].kill(t, e);
                return this
            }, r.getTweensOf = function (t, e) {
                for (var r, n = [], i = oe(t), o = this._first, s = z(e); o;) o instanceof Ke ? At(o._targets, i) && (s ? (!Ve || o._initted && o._ts) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && n.push(o) : (r = o.getTweensOf(i, e)).length && n.push.apply(n, r), o = o._next;
                return n
            }, r.tweenTo = function (t, e) {
                e = e || {};
                var r = this,
                    n = Qt(r, t),
                    i = e,
                    o = i.startAt,
                    s = i.onStart,
                    a = i.onStartParams,
                    u = i.immediateRender,
                    c = Ke.to(r, Ct({
                        ease: "none",
                        lazy: !1,
                        immediateRender: !1,
                        time: n,
                        overwrite: "auto",
                        duration: e.duration || Math.abs((n - (o && "time" in o ? o.time : r._time)) / r.timeScale()) || 1e-8,
                        onStart: function () {
                            r.pause();
                            var t = e.duration || Math.abs((n - r._time) / r.timeScale());
                            c._dur !== t && Kt(c, t, 0, 1).render(c._time, !0, !0), s && s.apply(c, a || [])
                        }
                    }, e));
                return u ? c.render(0) : c
            }, r.tweenFromTo = function (t, e, r) {
                return this.tweenTo(e, Ct({
                    startAt: {
                        time: Qt(this, t)
                    }
                }, r))
            }, r.recent = function () {
                return this._recent
            }, r.nextLabel = function (t) {
                return void 0 === t && (t = this._time), de(this, Qt(this, t))
            }, r.previousLabel = function (t) {
                return void 0 === t && (t = this._time), de(this, Qt(this, t), 1)
            }, r.currentLabel = function (t) {
                return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8)
            }, r.shiftChildren = function (t, e, r) {
                void 0 === r && (r = 0);
                for (var n, i = this._first, o = this.labels; i;) i._start >= r && (i._start += t, i._end += t), i = i._next;
                if (e)
                    for (n in o) o[n] >= r && (o[n] += t);
                return Ut(this)
            }, r.invalidate = function () {
                var e = this._first;
                for (this._lock = 0; e;) e.invalidate(), e = e._next;
                return t.prototype.invalidate.call(this)
            }, r.clear = function (t) {
                void 0 === t && (t = !0);
                for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
                return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Ut(this)
            }, r.totalDuration = function (t) {
                var e, r, n, i = 0,
                    o = this,
                    a = o._last,
                    u = P;
                if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
                if (o._dirty) {
                    for (n = o.parent; a;) e = a._prev, a._dirty && a.totalDuration(), (r = a._start) > u && o._sort && a._ts && !o._lock ? (o._lock = 1, Xt(o, a, r - a._delay, 1)._lock = 0) : u = r, r < 0 && a._ts && (i -= r, (!n && !o._dp || n && n.smoothChildTiming) && (o._start += r / o._ts, o._time -= r, o._tTime -= r), o.shiftChildren(-r, !1, -1 / 0), u = 0), a._end > i && a._ts && (i = a._end), a = e;
                    Kt(o, o === s && o._time > i ? o._time : i, 1, 1), o._dirty = 0
                }
                return o._tDur
            }, e.updateRoot = function (t) {
                if (s._ts && (kt(s, Ht(t, s)), h = De.frame), De.frame >= vt) {
                    vt += O.autoSleep || 120;
                    var e = s._first;
                    if ((!e || !e._ts) && O.autoSleep && De._listeners.length < 2) {
                        for (; e && !e._ts;) e = e._next;
                        e || De.sleep()
                    }
                }
            }, e
        }(Ie);
        Ct(je.prototype, {
            _lock: 0,
            _hasPause: 0,
            _forcing: 0
        });
        var Ve, He = function (t, e, r, n, i, o, s) {
                var a, u, c, l, h, p, f, d, g = new lr(this._pt, t, e, 0, 1, ir, null, i),
                    m = 0,
                    v = 0;
                for (g.b = r, g.e = n, r += "", (f = ~(n += "").indexOf("random(")) && (n = pe(n)), o && (o(d = [r, n], t, e), r = d[0], n = d[1]), u = r.match(et) || []; a = et.exec(n);) l = a[0], h = n.substring(m, a.index), c ? c = (c + 1) % 5 : "rgba(" === h.substr(-5) && (c = 1), l !== u[v++] && (p = parseFloat(u[v - 1]) || 0, g._pt = {
                    _next: g._pt,
                    p: h || 1 === v ? h : ",",
                    s: p,
                    c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - p,
                    m: c && c < 4 ? Math.round : 0
                }, m = et.lastIndex);
                return g.c = m < n.length ? n.substring(m, n.length) : "", g.fp = s, (rt.test(n) || f) && (g.e = 0), this._pt = g, g
            },
            ze = function (t, e, r, n, i, o, s, a, u) {
                H(n) && (n = n(i || 0, t, o));
                var c, l = t[e],
                    h = "get" !== r ? r : H(l) ? u ? t[e.indexOf("set") || !H(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : l,
                    p = H(l) ? u ? Qe : Ze : $e;
                if (V(n) && (~n.indexOf("random(") && (n = pe(n)), "=" === n.charAt(1) && (n = parseFloat(h) + parseFloat(n.substr(2)) * ("-" === n.charAt(0) ? -1 : 1) + (re(h) || 0))), h !== n) return isNaN(h * n) ? (!l && !(e in t) && ut(e, n), He.call(this, t, e, h, n, p, a || O.stringFilter, u)) : (c = new lr(this._pt, t, e, +h || 0, n - (h || 0), "boolean" == typeof l ? nr : rr, 0, p), u && (c.fp = u), s && c.modifier(s, this, t), this._pt = c)
            },
            Ge = function (t, e, r, n, i, o) {
                var s, a, u, c;
                if (gt[t] && !1 !== (s = new gt[t]).init(i, s.rawVars ? e[t] : function (t, e, r, n, i) {
                        if (H(t) && (t = Xe(t, i, e, r, n)), !Y(t) || t.style && t.nodeType || $(t) || K(t)) return V(t) ? Xe(t, i, e, r, n) : t;
                        var o, s = {};
                        for (o in t) s[o] = Xe(t[o], i, e, r, n);
                        return s
                    }(e[t], n, i, o, r), r, n, o) && (r._pt = a = new lr(r._pt, i, t, 0, 1, s.render, s, 0, s.priority), r !== p))
                    for (u = r._ptLookup[r._targets.indexOf(i)], c = s._props.length; c--;) u[s._props[c]] = a;
                return s
            },
            Ye = function t(e, r) {
                var n, i, a, u, c, l, h, p, f, d, g, m, v, b = e.vars,
                    y = b.ease,
                    w = b.startAt,
                    _ = b.immediateRender,
                    x = b.lazy,
                    E = b.onUpdate,
                    T = b.onUpdateParams,
                    A = b.callbackScope,
                    D = b.runBackwards,
                    q = b.yoyoEase,
                    k = b.keyframes,
                    L = b.autoRevert,
                    S = e._dur,
                    C = e._startAt,
                    N = e._targets,
                    O = e.parent,
                    P = O && "nested" === O.data ? O.parent._targets : N,
                    B = "auto" === e._overwrite && !o,
                    M = e.timeline;
                if (M && (!k || !y) && (y = "none"), e._ease = Re(y, R.ease), e._yEase = q ? Ne(Re(!0 === q ? y : q, R.ease)) : 0, q && e._yoyo && !e._repeat && (q = e._yEase, e._yEase = e._ease, e._ease = q), !M) {
                    if (m = (p = N[0] ? _t(N[0]).harness : 0) && b[p.prop], n = Pt(b, pt), C && C.render(-1, !0).kill(), w) {
                        if (Ft(e._startAt = Ke.set(N, Ct({
                                data: "isStart",
                                overwrite: !1,
                                parent: O,
                                immediateRender: !0,
                                lazy: X(x),
                                startAt: null,
                                delay: 0,
                                onUpdate: E,
                                onUpdateParams: T,
                                callbackScope: A,
                                stagger: 0
                            }, w))), _)
                            if (r > 0) L || (e._startAt = 0);
                            else if (S && !(r < 0 && C)) return void(r && (e._zTime = r))
                    } else if (D && S)
                        if (C) !L && (e._startAt = 0);
                        else if (r && (_ = !1), a = Ct({
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: _ && X(x),
                            immediateRender: _,
                            stagger: 0,
                            parent: O
                        }, n), m && (a[p.prop] = m), Ft(e._startAt = Ke.set(N, a)), _) {
                        if (!r) return
                    } else t(e._startAt, 1e-8);
                    for (e._pt = 0, x = S && X(x) || x && !S, i = 0; i < N.length; i++) {
                        if (h = (c = N[i])._gsap || wt(N)[i]._gsap, e._ptLookup[i] = d = {}, dt[h.id] && ft.length && qt(), g = P === N ? i : P.indexOf(c), p && !1 !== (f = new p).init(c, m || n, e, g, P) && (e._pt = u = new lr(e._pt, c, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach((function (t) {
                                d[t] = u
                            })), f.priority && (l = 1)), !p || m)
                            for (a in n) gt[a] && (f = Ge(a, n, e, g, c, P)) ? f.priority && (l = 1) : d[a] = u = ze.call(e, c, a, "get", n[a], g, P, 0, b.stringFilter);
                        e._op && e._op[i] && e.kill(c, e._op[i]), B && e._pt && (Ve = e, s.killTweensOf(c, d, e.globalTime(0)), v = !e.parent, Ve = 0), e._pt && x && (dt[h.id] = 1)
                    }
                    l && cr(e), e._onInit && e._onInit(e)
                }
                e._from = !M && !!b.runBackwards, e._onUpdate = E, e._initted = (!e._op || e._pt) && !v
            },
            Xe = function (t, e, r, n, i) {
                return H(t) ? t.call(e, r, n, i) : V(t) && ~t.indexOf("random(") ? pe(t) : t
            },
            We = yt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
            Je = (We + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
            Ke = function (t) {
                function e(e, r, i, a) {
                    var u;
                    "number" == typeof r && (i.duration = r, r = i, i = null);
                    var c, l, h, p, f, d, g, m, v = (u = t.call(this, a ? r : Bt(r), i) || this).vars,
                        b = v.duration,
                        y = v.delay,
                        w = v.immediateRender,
                        _ = v.stagger,
                        x = v.overwrite,
                        E = v.keyframes,
                        T = v.defaults,
                        A = v.scrollTrigger,
                        D = v.yoyoEase,
                        q = u.parent,
                        k = ($(e) || K(e) ? z(e[0]) : "length" in r) ? [e] : oe(e);
                    if (u._targets = k.length ? wt(k) : ct("GSAP target " + e + " not found. https://greensock.com", !O.nullTargetWarn) || [], u._ptLookup = [], u._overwrite = x, E || _ || J(b) || J(y)) {
                        if (r = u.vars, (c = u.timeline = new je({
                                data: "nested",
                                defaults: T || {}
                            })).kill(), c.parent = c._dp = n(u), c._start = 0, E) Ct(c.vars.defaults, {
                            ease: "none"
                        }), E.forEach((function (t) {
                            return c.to(k, t, ">")
                        }));
                        else {
                            if (p = k.length, g = _ ? ae(_) : ht, Y(_))
                                for (f in _) ~We.indexOf(f) && (m || (m = {}), m[f] = _[f]);
                            for (l = 0; l < p; l++) {
                                for (f in h = {}, r) Je.indexOf(f) < 0 && (h[f] = r[f]);
                                h.stagger = 0, D && (h.yoyoEase = D), m && Ot(h, m), d = k[l], h.duration = +Xe(b, n(u), l, d, k), h.delay = (+Xe(y, n(u), l, d, k) || 0) - u._delay, !_ && 1 === p && h.delay && (u._delay = y = h.delay, u._start += y, h.delay = 0), c.to(d, h, g(l, d, k))
                            }
                            c.duration() ? b = y = 0 : u.timeline = 0
                        }
                        b || u.duration(b = c.duration())
                    } else u.timeline = 0;
                    return !0 !== x || o || (Ve = n(u), s.killTweensOf(k), Ve = 0), q && Yt(q, n(u)), (w || !b && !E && u._start === Tt(q._time) && X(w) && function t(e) {
                        return !e || e._ts && t(e.parent)
                    }(n(u)) && "nested" !== q.data) && (u._tTime = -1e-8, u.render(Math.max(0, -y))), A && Wt(n(u), A), u
                }
                i(e, t);
                var r = e.prototype;
                return r.render = function (t, e, r) {
                    var n, i, o, s, a, u, c, l, h, p = this._time,
                        f = this._tDur,
                        d = this._dur,
                        g = t > f - 1e-8 && t >= 0 ? f : t < 1e-8 ? 0 : t;
                    if (d) {
                        if (g !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                            if (n = g, l = this.timeline, this._repeat) {
                                if (s = d + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * s + t, e, r);
                                if (n = Tt(g % s), g === f ? (o = this._repeat, n = d) : ((o = ~~(g / s)) && o === g / s && (n = d, o--), n > d && (n = d)), (u = this._yoyo && 1 & o) && (h = this._yEase, n = d - n), a = Vt(this._tTime, s), n === p && !r && this._initted) return this;
                                o !== a && (l && this._yEase && Oe(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(Tt(s * o), !0).invalidate()._lock = 0))
                            }
                            if (!this._initted) {
                                if (Jt(this, t < 0 ? t : n, r, e)) return this._tTime = 0, this;
                                if (d !== this._dur) return this.render(t, e, r)
                            }
                            for (this._tTime = g, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = c = (h || this._ease)(n / d), this._from && (this.ratio = c = 1 - c), n && !p && !e && ge(this, "onStart"), i = this._pt; i;) i.r(c, i.d), i = i._next;
                            l && l.render(t < 0 ? t : !n && u ? -1e-8 : l._dur * c, e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), ge(this, "onUpdate")), this._repeat && o !== a && this.vars.onRepeat && !e && this.parent && ge(this, "onRepeat"), g !== this._tDur && g || this._tTime !== g || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !d) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && Ft(this, 1), e || t < 0 && !p || !g && !p || (ge(this, g === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < f && this.timeScale() > 0) && this._prom()))
                        }
                    } else ! function (t, e, r, n) {
                        var i, o, s, a = t.ratio,
                            u = e < 0 || !e && (!t._start && function t(e) {
                                var r = e.parent;
                                return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
                            }(t) || (t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data) ? 0 : 1,
                            c = t._rDelay,
                            l = 0;
                        if (c && t._repeat && (l = ee(0, t._tDur, e), o = Vt(l, c), s = Vt(t._tTime, c), t._yoyo && 1 & o && (u = 1 - u), o !== s && (a = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== a || n || 1e-8 === t._zTime || !e && t._zTime) {
                            if (!t._initted && Jt(t, e, n, r)) return;
                            for (s = t._zTime, t._zTime = e || (r ? 1e-8 : 0), r || (r = e && !s), t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, r || ge(t, "onStart"), i = t._pt; i;) i.r(u, i.d), i = i._next;
                            t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !r && ge(t, "onUpdate"), l && t._repeat && !r && t.parent && ge(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && Ft(t, 1), r || (ge(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                        } else t._zTime || (t._zTime = e)
                    }(this, t, e, r);
                    return this
                }, r.targets = function () {
                    return this._targets
                }, r.invalidate = function () {
                    return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
                }, r.kill = function (t, e) {
                    if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? me(this) : this;
                    if (this.timeline) {
                        var r = this.timeline.totalDuration();
                        return this.timeline.killTweensOf(t, e, Ve && !0 !== Ve.vars.overwrite)._first || me(this), this.parent && r !== this.timeline.totalDuration() && Kt(this, this._dur * this.timeline._tDur / r, 0, 1), this
                    }
                    var n, i, o, s, a, u, c, l = this._targets,
                        h = t ? oe(t) : l,
                        p = this._ptLookup,
                        f = this._pt;
                    if ((!e || "all" === e) && function (t, e) {
                            for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r];);
                            return r < 0
                        }(l, h)) return "all" === e && (this._pt = 0), me(this);
                    for (n = this._op = this._op || [], "all" !== e && (V(e) && (a = {}, Et(e, (function (t) {
                            return a[t] = 1
                        })), e = a), e = function (t, e) {
                            var r, n, i, o, s = t[0] ? _t(t[0]).harness : 0,
                                a = s && s.aliases;
                            if (!a) return e;
                            for (n in r = Ot({}, e), a)
                                if (n in r)
                                    for (i = (o = a[n].split(",")).length; i--;) r[o[i]] = r[n];
                            return r
                        }(l, e)), c = l.length; c--;)
                        if (~h.indexOf(l[c]))
                            for (a in i = p[c], "all" === e ? (n[c] = e, s = i, o = {}) : (o = n[c] = n[c] || {}, s = e), s)(u = i && i[a]) && ("kill" in u.d && !0 !== u.d.kill(a) || Mt(this, u, "_pt"), delete i[a]), "all" !== o && (o[a] = 1);
                    return this._initted && !this._pt && f && me(this), this
                }, e.to = function (t, r) {
                    return new e(t, r, arguments[2])
                }, e.from = function (t, r) {
                    return new e(t, Dt(arguments, 1))
                }, e.delayedCall = function (t, r, n, i) {
                    return new e(r, 0, {
                        immediateRender: !1,
                        lazy: !1,
                        overwrite: !1,
                        delay: t,
                        onComplete: r,
                        onReverseComplete: r,
                        onCompleteParams: n,
                        onReverseCompleteParams: n,
                        callbackScope: i
                    })
                }, e.fromTo = function (t, r, n) {
                    return new e(t, Dt(arguments, 2))
                }, e.set = function (t, r) {
                    return r.duration = 0, r.repeatDelay || (r.repeat = 0), new e(t, r)
                }, e.killTweensOf = function (t, e, r) {
                    return s.killTweensOf(t, e, r)
                }, e
            }(Ie);
        Ct(Ke.prototype, {
            _targets: [],
            _lazy: 0,
            _startAt: 0,
            _op: 0,
            _onInit: 0
        }), Et("staggerTo,staggerFrom,staggerFromTo", (function (t) {
            Ke[t] = function () {
                var e = new je,
                    r = ne.call(arguments, 0);
                return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
            }
        }));
        var $e = function (t, e, r) {
                return t[e] = r
            },
            Ze = function (t, e, r) {
                return t[e](r)
            },
            Qe = function (t, e, r, n) {
                return t[e](n.fp, r)
            },
            tr = function (t, e, r) {
                return t.setAttribute(e, r)
            },
            er = function (t, e) {
                return H(t[e]) ? Ze : G(t[e]) && t.setAttribute ? tr : $e
            },
            rr = function (t, e) {
                return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
            },
            nr = function (t, e) {
                return e.set(e.t, e.p, !!(e.s + e.c * t), e)
            },
            ir = function (t, e) {
                var r = e._pt,
                    n = "";
                if (!t && e.b) n = e.b;
                else if (1 === t && e.e) n = e.e;
                else {
                    for (; r;) n = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + n, r = r._next;
                    n += e.c
                }
                e.set(e.t, e.p, n, e)
            },
            or = function (t, e) {
                for (var r = e._pt; r;) r.r(t, r.d), r = r._next
            },
            sr = function (t, e, r, n) {
                for (var i, o = this._pt; o;) i = o._next, o.p === n && o.modifier(t, e, r), o = i
            },
            ar = function (t) {
                for (var e, r, n = this._pt; n;) r = n._next, n.p === t && !n.op || n.op === t ? Mt(this, n, "_pt") : n.dep || (e = 1), n = r;
                return !e
            },
            ur = function (t, e, r, n) {
                n.mSet(t, e, n.m.call(n.tween, r, n.mt), n)
            },
            cr = function (t) {
                for (var e, r, n, i, o = t._pt; o;) {
                    for (e = o._next, r = n; r && r.pr > o.pr;) r = r._next;
                    (o._prev = r ? r._prev : i) ? o._prev._next = o: n = o, (o._next = r) ? r._prev = o : i = o, o = e
                }
                t._pt = n
            },
            lr = function () {
                function t(t, e, r, n, i, o, s, a, u) {
                    this.t = e, this.s = n, this.c = i, this.p = r, this.r = o || rr, this.d = s || this, this.set = a || $e, this.pr = u || 0, this._next = t, t && (t._prev = this)
                }
                return t.prototype.modifier = function (t, e, r) {
                    this.mSet = this.mSet || this.set, this.set = ur, this.m = t, this.mt = r, this.tween = e
                }, t
            }();
        Et(yt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function (t) {
            return pt[t] = 1
        })), ot.TweenMax = ot.TweenLite = Ke, ot.TimelineLite = ot.TimelineMax = je, s = new je({
            sortChildren: !1,
            defaults: R,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0
        }), O.stringFilter = Ae;
        var hr = {
            registerPlugin: function () {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                e.forEach((function (t) {
                    return ve(t)
                }))
            },
            timeline: function (t) {
                return new je(t)
            },
            getTweensOf: function (t, e) {
                return s.getTweensOf(t, e)
            },
            getProperty: function (t, e, r, n) {
                V(t) && (t = oe(t)[0]);
                var i = _t(t || {}).get,
                    o = r ? St : Lt;
                return "native" === r && (r = ""), t ? e ? o((gt[e] && gt[e].get || i)(t, e, r, n)) : function (e, r, n) {
                    return o((gt[e] && gt[e].get || i)(t, e, r, n))
                } : t
            },
            quickSetter: function (t, e, r) {
                if ((t = oe(t)).length > 1) {
                    var n = t.map((function (t) {
                            return dr.quickSetter(t, e, r)
                        })),
                        i = n.length;
                    return function (t) {
                        for (var e = i; e--;) n[e](t)
                    }
                }
                t = t[0] || {};
                var o = gt[e],
                    s = _t(t),
                    a = s.harness && (s.harness.aliases || {})[e] || e,
                    u = o ? function (e) {
                        var n = new o;
                        p._pt = 0, n.init(t, r ? e + r : e, p, 0, [t]), n.render(1, n), p._pt && or(1, p)
                    } : s.set(t, a);
                return o ? u : function (e) {
                    return u(t, a, r ? e + r : e, s, 1)
                }
            },
            isTweening: function (t) {
                return s.getTweensOf(t, !0).length > 0
            },
            defaults: function (t) {
                return t && t.ease && (t.ease = Re(t.ease, R.ease)), Rt(R, t || {})
            },
            config: function (t) {
                return Rt(O, t || {})
            },
            registerEffect: function (t) {
                var e = t.name,
                    r = t.effect,
                    n = t.plugins,
                    i = t.defaults,
                    o = t.extendTimeline;
                (n || "").split(",").forEach((function (t) {
                    return t && !gt[t] && !ot[t] && ct(e + " effect requires " + t + " plugin.")
                })), mt[e] = function (t, e, n) {
                    return r(oe(t), Ct(e || {}, i), n)
                }, o && (je.prototype[e] = function (t, r, n) {
                    return this.add(mt[e](t, Y(r) ? r : (n = r) && {}, this), n)
                })
            },
            registerEase: function (t, e) {
                ke[t] = Re(e)
            },
            parseEase: function (t, e) {
                return arguments.length ? Re(t, e) : ke
            },
            getById: function (t) {
                return s.getById(t)
            },
            exportRoot: function (t, e) {
                void 0 === t && (t = {});
                var r, n, i = new je(t);
                for (i.smoothChildTiming = X(t.smoothChildTiming), s.remove(i), i._dp = 0, i._time = i._tTime = s._time, r = s._first; r;) n = r._next, !e && !r._dur && r instanceof Ke && r.vars.onComplete === r._targets[0] || Xt(i, r, r._start - r._delay), r = n;
                return Xt(s, i, 0), i
            },
            utils: {
                wrap: function t(e, r, n) {
                    var i = r - e;
                    return $(e) ? he(e, t(0, e.length), r) : te(n, (function (t) {
                        return (i + (t - e) % i) % i + e
                    }))
                },
                wrapYoyo: function t(e, r, n) {
                    var i = r - e,
                        o = 2 * i;
                    return $(e) ? he(e, t(0, e.length - 1), r) : te(n, (function (t) {
                        return e + ((t = (o + (t - e) % o) % o || 0) > i ? o - t : t)
                    }))
                },
                distribute: ae,
                random: le,
                snap: ce,
                normalize: function (t, e, r) {
                    return fe(t, e, 0, 1, r)
                },
                getUnit: re,
                clamp: function (t, e, r) {
                    return te(r, (function (r) {
                        return ee(t, e, r)
                    }))
                },
                splitColor: we,
                toArray: oe,
                mapRange: fe,
                pipe: function () {
                    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    return function (t) {
                        return e.reduce((function (t, e) {
                            return e(t)
                        }), t)
                    }
                },
                unitize: function (t, e) {
                    return function (r) {
                        return t(parseFloat(r)) + (e || re(r))
                    }
                },
                interpolate: function t(e, r, n, i) {
                    var o = isNaN(e + r) ? 0 : function (t) {
                        return (1 - t) * e + t * r
                    };
                    if (!o) {
                        var s, a, u, c, l, h = V(e),
                            p = {};
                        if (!0 === n && (i = 1) && (n = null), h) e = {
                            p: e
                        }, r = {
                            p: r
                        };
                        else if ($(e) && !$(r)) {
                            for (u = [], c = e.length, l = c - 2, a = 1; a < c; a++) u.push(t(e[a - 1], e[a]));
                            c--, o = function (t) {
                                t *= c;
                                var e = Math.min(l, ~~t);
                                return u[e](t - e)
                            }, n = r
                        } else i || (e = Ot($(e) ? [] : {}, e));
                        if (!u) {
                            for (s in r) ze.call(p, e, s, "get", r[s]);
                            o = function (t) {
                                return or(t, p) || (h ? e.p : e)
                            }
                        }
                    }
                    return te(n, o)
                },
                shuffle: se
            },
            install: at,
            effects: mt,
            ticker: De,
            updateRoot: je.updateRoot,
            plugins: gt,
            globalTimeline: s,
            core: {
                PropTween: lr,
                globals: lt,
                Tween: Ke,
                Timeline: je,
                Animation: Ie,
                getCache: _t,
                _removeLinkedListItem: Mt,
                suppressOverwrites: function (t) {
                    return o = t
                }
            }
        };
        Et("to,from,fromTo,delayedCall,set,killTweensOf", (function (t) {
            return hr[t] = Ke[t]
        })), De.add(je.updateRoot), p = hr.to({}, {
            duration: 0
        });
        var pr = function (t, e) {
                for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
                return r
            },
            fr = function (t, e) {
                return {
                    name: t,
                    rawVars: 1,
                    init: function (t, r, n) {
                        n._onInit = function (t) {
                            var n, i;
                            if (V(r) && (n = {}, Et(r, (function (t) {
                                    return n[t] = 1
                                })), r = n), e) {
                                for (i in n = {}, r) n[i] = e(r[i]);
                                r = n
                            }! function (t, e) {
                                var r, n, i, o = t._targets;
                                for (r in e)
                                    for (n = o.length; n--;)(i = t._ptLookup[n][r]) && (i = i.d) && (i._pt && (i = pr(i, r)), i && i.modifier && i.modifier(e[r], t, o[n], r))
                            }(t, r)
                        }
                    }
                }
            },
            dr = hr.registerPlugin({
                name: "attr",
                init: function (t, e, r, n, i) {
                    var o, s;
                    for (o in e)(s = this.add(t, "setAttribute", (t.getAttribute(o) || 0) + "", e[o], n, i, 0, 0, o)) && (s.op = o), this._props.push(o)
                }
            }, {
                name: "endArray",
                init: function (t, e) {
                    for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r])
                }
            }, fr("roundProps", ue), fr("modifiers"), fr("snap", ce)) || hr;
        Ke.version = je.version = dr.version = "3.6.0", l = 1, W() && qe(), ke.Power0, ke.Power1, ke.Power2, ke.Power3, ke.Power4, ke.Linear, ke.Quad, ke.Cubic, ke.Quart, ke.Quint, ke.Strong, ke.Elastic, ke.Back, ke.SteppedEase, ke.Bounce, ke.Sine, ke.Expo, ke.Circ;
        var gr, mr, vr, br, yr, wr, _r, xr, Er = {},
            Tr = 180 / Math.PI,
            Ar = Math.PI / 180,
            Dr = Math.atan2,
            qr = /([A-Z])/g,
            kr = /(?:left|right|width|margin|padding|x)/i,
            Lr = /[\s,\(]\S/,
            Sr = {
                autoAlpha: "opacity,visibility",
                scale: "scaleX,scaleY",
                alpha: "opacity"
            },
            Cr = function (t, e) {
                return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
            },
            Nr = function (t, e) {
                return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
            },
            Or = function (t, e) {
                return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
            },
            Rr = function (t, e) {
                var r = e.s + e.c * t;
                e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
            },
            Pr = function (t, e) {
                return e.set(e.t, e.p, t ? e.e : e.b, e)
            },
            Br = function (t, e) {
                return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
            },
            Mr = function (t, e, r) {
                return t.style[e] = r
            },
            Fr = function (t, e, r) {
                return t.style.setProperty(e, r)
            },
            Ur = function (t, e, r) {
                return t._gsap[e] = r
            },
            Ir = function (t, e, r) {
                return t._gsap.scaleX = t._gsap.scaleY = r
            },
            jr = function (t, e, r, n, i) {
                var o = t._gsap;
                o.scaleX = o.scaleY = r, o.renderTransform(i, o)
            },
            Vr = function (t, e, r, n, i) {
                var o = t._gsap;
                o[e] = r, o.renderTransform(i, o)
            },
            Hr = "transform",
            zr = Hr + "Origin",
            Gr = function (t, e) {
                var r = mr.createElementNS ? mr.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : mr.createElement(t);
                return r.style ? r : mr.createElement(t)
            },
            Yr = function t(e, r, n) {
                var i = getComputedStyle(e);
                return i[r] || i.getPropertyValue(r.replace(qr, "-$1").toLowerCase()) || i.getPropertyValue(r) || !n && t(e, Wr(r) || r, 1) || ""
            },
            Xr = "O,Moz,ms,Ms,Webkit".split(","),
            Wr = function (t, e, r) {
                var n = (e || yr).style,
                    i = 5;
                if (t in n && !r) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(Xr[i] + t in n););
                return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? Xr[i] : "") + t
            },
            Jr = function () {
                "undefined" != typeof window && window.document && (gr = window, mr = gr.document, vr = mr.documentElement, yr = Gr("div") || {
                    style: {}
                }, wr = Gr("div"), Hr = Wr(Hr), zr = Hr + "Origin", yr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", xr = !!Wr("perspective"), br = 1)
            },
            Kr = function t(e) {
                var r, n = Gr("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                    i = this.parentNode,
                    o = this.nextSibling,
                    s = this.style.cssText;
                if (vr.appendChild(n), n.appendChild(this), this.style.display = "block", e) try {
                    r = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
                } catch (t) {} else this._gsapBBox && (r = this._gsapBBox());
                return i && (o ? i.insertBefore(this, o) : i.appendChild(this)), vr.removeChild(n), this.style.cssText = s, r
            },
            $r = function (t, e) {
                for (var r = e.length; r--;)
                    if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
            },
            Zr = function (t) {
                var e;
                try {
                    e = t.getBBox()
                } catch (r) {
                    e = Kr.call(t, !0)
                }
                return e && (e.width || e.height) || t.getBBox === Kr || (e = Kr.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                    x: +$r(t, ["x", "cx", "x1"]) || 0,
                    y: +$r(t, ["y", "cy", "y1"]) || 0,
                    width: 0,
                    height: 0
                }
            },
            Qr = function (t) {
                return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Zr(t))
            },
            tn = function (t, e) {
                if (e) {
                    var r = t.style;
                    e in Er && e !== zr && (e = Hr), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(qr, "-$1").toLowerCase())) : r.removeAttribute(e)
                }
            },
            en = function (t, e, r, n, i, o) {
                var s = new lr(t._pt, e, r, 0, 1, o ? Br : Pr);
                return t._pt = s, s.b = n, s.e = i, t._props.push(r), s
            },
            rn = {
                deg: 1,
                rad: 1,
                turn: 1
            },
            nn = function t(e, r, n, i) {
                var o, s, a, u, c = parseFloat(n) || 0,
                    l = (n + "").trim().substr((c + "").length) || "px",
                    h = yr.style,
                    p = kr.test(r),
                    f = "svg" === e.tagName.toLowerCase(),
                    d = (f ? "client" : "offset") + (p ? "Width" : "Height"),
                    g = "px" === i,
                    m = "%" === i;
                return i === l || !c || rn[i] || rn[l] ? c : ("px" !== l && !g && (c = t(e, r, n, "px")), u = e.getCTM && Qr(e), !m && "%" !== l || !Er[r] && !~r.indexOf("adius") ? (h[p ? "width" : "height"] = 100 + (g ? l : i), s = ~r.indexOf("adius") || "em" === i && e.appendChild && !f ? e : e.parentNode, u && (s = (e.ownerSVGElement || {}).parentNode), s && s !== mr && s.appendChild || (s = mr.body), (a = s._gsap) && m && a.width && p && a.time === De.time ? Tt(c / a.width * 100) : ((m || "%" === l) && (h.position = Yr(e, "position")), s === e && (h.position = "static"), s.appendChild(yr), o = yr[d], s.removeChild(yr), h.position = "absolute", p && m && ((a = _t(s)).time = De.time, a.width = s[d]), Tt(g ? o * c / 100 : o && c ? 100 / o * c : 0))) : (o = u ? e.getBBox()[p ? "width" : "height"] : e[d], Tt(m ? c / o * 100 : c / 100 * o)))
            },
            on = function (t, e, r, n) {
                var i;
                return br || Jr(), e in Sr && "transform" !== e && ~(e = Sr[e]).indexOf(",") && (e = e.split(",")[0]), Er[e] && "transform" !== e ? (i = mn(t, n), i = "transformOrigin" !== e ? i[e] : vn(Yr(t, zr)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || n || ~(i + "").indexOf("calc(")) && (i = cn[e] && cn[e](t, e, r) || Yr(t, e) || xt(t, e) || ("opacity" === e ? 1 : 0)), r && !~(i + "").trim().indexOf(" ") ? nn(t, e, i, r) + r : i
            },
            sn = function (t, e, r, n) {
                if (!r || "none" === r) {
                    var i = Wr(e, t, 1),
                        o = i && Yr(t, i, 1);
                    o && o !== r ? (e = i, r = o) : "borderColor" === e && (r = Yr(t, "borderTopColor"))
                }
                var s, a, u, c, l, h, p, f, d, g, m, v, b = new lr(this._pt, t.style, e, 0, 1, ir),
                    y = 0,
                    w = 0;
                if (b.b = r, b.e = n, r += "", "auto" == (n += "") && (t.style[e] = n, n = Yr(t, e) || n, t.style[e] = r), Ae(s = [r, n]), n = s[1], u = (r = s[0]).match(tt) || [], (n.match(tt) || []).length) {
                    for (; a = tt.exec(n);) p = a[0], d = n.substring(y, a.index), l ? l = (l + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (l = 1), p !== (h = u[w++] || "") && (c = parseFloat(h) || 0, m = h.substr((c + "").length), (v = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) && (p = p.substr(2)), f = parseFloat(p), g = p.substr((f + "").length), y = tt.lastIndex - g.length, g || (g = g || O.units[e] || m, y === n.length && (n += g, b.e += g)), m !== g && (c = nn(t, e, h, g) || 0), b._pt = {
                        _next: b._pt,
                        p: d || 1 === w ? d : ",",
                        s: c,
                        c: v ? v * f : f - c,
                        m: l && l < 4 || "zIndex" === e ? Math.round : 0
                    });
                    b.c = y < n.length ? n.substring(y, n.length) : ""
                } else b.r = "display" === e && "none" === n ? Br : Pr;
                return rt.test(n) && (b.e = 0), this._pt = b, b
            },
            an = {
                top: "0%",
                bottom: "100%",
                left: "0%",
                right: "100%",
                center: "50%"
            },
            un = function (t, e) {
                if (e.tween && e.tween._time === e.tween._dur) {
                    var r, n, i, o = e.t,
                        s = o.style,
                        a = e.u,
                        u = o._gsap;
                    if ("all" === a || !0 === a) s.cssText = "", n = 1;
                    else
                        for (i = (a = a.split(",")).length; --i > -1;) r = a[i], Er[r] && (n = 1, r = "transformOrigin" === r ? zr : Hr), tn(o, r);
                    n && (tn(o, Hr), u && (u.svg && o.removeAttribute("transform"), mn(o, 1), u.uncache = 1))
                }
            },
            cn = {
                clearProps: function (t, e, r, n, i) {
                    if ("isFromStart" !== i.data) {
                        var o = t._pt = new lr(t._pt, e, r, 0, 0, un);
                        return o.u = n, o.pr = -10, o.tween = i, t._props.push(r), 1
                    }
                }
            },
            ln = [1, 0, 0, 1, 0, 0],
            hn = {},
            pn = function (t) {
                return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
            },
            fn = function (t) {
                var e = Yr(t, Hr);
                return pn(e) ? ln : e.substr(7).match(Q).map(Tt)
            },
            dn = function (t, e) {
                var r, n, i, o, s = t._gsap || _t(t),
                    a = t.style,
                    u = fn(t);
                return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? ln : u : (u !== ln || t.offsetParent || t === vr || s.svg || (i = a.display, a.display = "block", (r = t.parentNode) && t.offsetParent || (o = 1, n = t.nextSibling, vr.appendChild(t)), u = fn(t), i ? a.display = i : tn(t, "display"), o && (n ? r.insertBefore(t, n) : r ? r.appendChild(t) : vr.removeChild(t))), e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
            },
            gn = function (t, e, r, n, i, o) {
                var s, a, u, c = t._gsap,
                    l = i || dn(t, !0),
                    h = c.xOrigin || 0,
                    p = c.yOrigin || 0,
                    f = c.xOffset || 0,
                    d = c.yOffset || 0,
                    g = l[0],
                    m = l[1],
                    v = l[2],
                    b = l[3],
                    y = l[4],
                    w = l[5],
                    _ = e.split(" "),
                    x = parseFloat(_[0]) || 0,
                    E = parseFloat(_[1]) || 0;
                r ? l !== ln && (a = g * b - m * v) && (u = x * (-m / a) + E * (g / a) - (g * w - m * y) / a, x = x * (b / a) + E * (-v / a) + (v * w - b * y) / a, E = u) : (x = (s = Zr(t)).x + (~_[0].indexOf("%") ? x / 100 * s.width : x), E = s.y + (~(_[1] || _[0]).indexOf("%") ? E / 100 * s.height : E)), n || !1 !== n && c.smooth ? (y = x - h, w = E - p, c.xOffset = f + (y * g + w * v) - y, c.yOffset = d + (y * m + w * b) - w) : c.xOffset = c.yOffset = 0, c.xOrigin = x, c.yOrigin = E, c.smooth = !!n, c.origin = e, c.originIsAbsolute = !!r, t.style[zr] = "0px 0px", o && (en(o, c, "xOrigin", h, x), en(o, c, "yOrigin", p, E), en(o, c, "xOffset", f, c.xOffset), en(o, c, "yOffset", d, c.yOffset)), t.setAttribute("data-svg-origin", x + " " + E)
            },
            mn = function (t, e) {
                var r = t._gsap || new Ue(t);
                if ("x" in r && !e && !r.uncache) return r;
                var n, i, o, s, a, u, c, l, h, p, f, d, g, m, v, b, y, w, _, x, E, T, A, D, q, k, L, S, C, N, R, P, B = t.style,
                    M = r.scaleX < 0,
                    F = Yr(t, zr) || "0";
                return n = i = o = u = c = l = h = p = f = 0, s = a = 1, r.svg = !(!t.getCTM || !Qr(t)), m = dn(t, r.svg), r.svg && (D = !r.uncache && t.getAttribute("data-svg-origin"), gn(t, D || F, !!D || r.originIsAbsolute, !1 !== r.smooth, m)), d = r.xOrigin || 0, g = r.yOrigin || 0, m !== ln && (w = m[0], _ = m[1], x = m[2], E = m[3], n = T = m[4], i = A = m[5], 6 === m.length ? (s = Math.sqrt(w * w + _ * _), a = Math.sqrt(E * E + x * x), u = w || _ ? Dr(_, w) * Tr : 0, (h = x || E ? Dr(x, E) * Tr + u : 0) && (a *= Math.cos(h * Ar)), r.svg && (n -= d - (d * w + g * x), i -= g - (d * _ + g * E))) : (P = m[6], N = m[7], L = m[8], S = m[9], C = m[10], R = m[11], n = m[12], i = m[13], o = m[14], c = (v = Dr(P, C)) * Tr, v && (D = T * (b = Math.cos(-v)) + L * (y = Math.sin(-v)), q = A * b + S * y, k = P * b + C * y, L = T * -y + L * b, S = A * -y + S * b, C = P * -y + C * b, R = N * -y + R * b, T = D, A = q, P = k), l = (v = Dr(-x, C)) * Tr, v && (b = Math.cos(-v), R = E * (y = Math.sin(-v)) + R * b, w = D = w * b - L * y, _ = q = _ * b - S * y, x = k = x * b - C * y), u = (v = Dr(_, w)) * Tr, v && (D = w * (b = Math.cos(v)) + _ * (y = Math.sin(v)), q = T * b + A * y, _ = _ * b - w * y, A = A * b - T * y, w = D, T = q), c && Math.abs(c) + Math.abs(u) > 359.9 && (c = u = 0, l = 180 - l), s = Tt(Math.sqrt(w * w + _ * _ + x * x)), a = Tt(Math.sqrt(A * A + P * P)), v = Dr(T, A), h = Math.abs(v) > 2e-4 ? v * Tr : 0, f = R ? 1 / (R < 0 ? -R : R) : 0), r.svg && (D = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !pn(Yr(t, Hr)), D && t.setAttribute("transform", D))), Math.abs(h) > 90 && Math.abs(h) < 270 && (M ? (s *= -1, h += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (a *= -1, h += h <= 0 ? 180 : -180)), r.x = n - ((r.xPercent = n && (r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = i - ((r.yPercent = i && (r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = o + "px", r.scaleX = Tt(s), r.scaleY = Tt(a), r.rotation = Tt(u) + "deg", r.rotationX = Tt(c) + "deg", r.rotationY = Tt(l) + "deg", r.skewX = h + "deg", r.skewY = p + "deg", r.transformPerspective = f + "px", (r.zOrigin = parseFloat(F.split(" ")[2]) || 0) && (B[zr] = vn(F)), r.xOffset = r.yOffset = 0, r.force3D = O.force3D, r.renderTransform = r.svg ? _n : xr ? wn : yn, r.uncache = 0, r
            },
            vn = function (t) {
                return (t = t.split(" "))[0] + " " + t[1]
            },
            bn = function (t, e, r) {
                var n = re(e);
                return Tt(parseFloat(e) + parseFloat(nn(t, "x", r + "px", n))) + n
            },
            yn = function (t, e) {
                e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, wn(t, e)
            },
            wn = function (t, e) {
                var r = e || this,
                    n = r.xPercent,
                    i = r.yPercent,
                    o = r.x,
                    s = r.y,
                    a = r.z,
                    u = r.rotation,
                    c = r.rotationY,
                    l = r.rotationX,
                    h = r.skewX,
                    p = r.skewY,
                    f = r.scaleX,
                    d = r.scaleY,
                    g = r.transformPerspective,
                    m = r.force3D,
                    v = r.target,
                    b = r.zOrigin,
                    y = "",
                    w = "auto" === m && t && 1 !== t || !0 === m;
                if (b && ("0deg" !== l || "0deg" !== c)) {
                    var _, x = parseFloat(c) * Ar,
                        E = Math.sin(x),
                        T = Math.cos(x);
                    x = parseFloat(l) * Ar, _ = Math.cos(x), o = bn(v, o, E * _ * -b), s = bn(v, s, -Math.sin(x) * -b), a = bn(v, a, T * _ * -b + b)
                }
                "0px" !== g && (y += "perspective(" + g + ") "), (n || i) && (y += "translate(" + n + "%, " + i + "%) "), (w || "0px" !== o || "0px" !== s || "0px" !== a) && (y += "0px" !== a || w ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + ") "), "0deg" !== u && (y += "rotate(" + u + ") "), "0deg" !== c && (y += "rotateY(" + c + ") "), "0deg" !== l && (y += "rotateX(" + l + ") "), "0deg" === h && "0deg" === p || (y += "skew(" + h + ", " + p + ") "), 1 === f && 1 === d || (y += "scale(" + f + ", " + d + ") "), v.style[Hr] = y || "translate(0, 0)"
            },
            _n = function (t, e) {
                var r, n, i, o, s, a = e || this,
                    u = a.xPercent,
                    c = a.yPercent,
                    l = a.x,
                    h = a.y,
                    p = a.rotation,
                    f = a.skewX,
                    d = a.skewY,
                    g = a.scaleX,
                    m = a.scaleY,
                    v = a.target,
                    b = a.xOrigin,
                    y = a.yOrigin,
                    w = a.xOffset,
                    _ = a.yOffset,
                    x = a.forceCSS,
                    E = parseFloat(l),
                    T = parseFloat(h);
                p = parseFloat(p), f = parseFloat(f), (d = parseFloat(d)) && (f += d = parseFloat(d), p += d), p || f ? (p *= Ar, f *= Ar, r = Math.cos(p) * g, n = Math.sin(p) * g, i = Math.sin(p - f) * -m, o = Math.cos(p - f) * m, f && (d *= Ar, s = Math.tan(f - d), i *= s = Math.sqrt(1 + s * s), o *= s, d && (s = Math.tan(d), r *= s = Math.sqrt(1 + s * s), n *= s)), r = Tt(r), n = Tt(n), i = Tt(i), o = Tt(o)) : (r = g, o = m, n = i = 0), (E && !~(l + "").indexOf("px") || T && !~(h + "").indexOf("px")) && (E = nn(v, "x", l, "px"), T = nn(v, "y", h, "px")), (b || y || w || _) && (E = Tt(E + b - (b * r + y * i) + w), T = Tt(T + y - (b * n + y * o) + _)), (u || c) && (s = v.getBBox(), E = Tt(E + u / 100 * s.width), T = Tt(T + c / 100 * s.height)), s = "matrix(" + r + "," + n + "," + i + "," + o + "," + E + "," + T + ")", v.setAttribute("transform", s), x && (v.style[Hr] = s)
            },
            xn = function (t, e, r, n, i, o) {
                var s, a, u = V(i),
                    c = parseFloat(i) * (u && ~i.indexOf("rad") ? Tr : 1),
                    l = o ? c * o : c - n,
                    h = n + l + "deg";
                return u && ("short" === (s = i.split("_")[1]) && (l %= 360) != l % 180 && (l += l < 0 ? 360 : -360), "cw" === s && l < 0 ? l = (l + 36e9) % 360 - 360 * ~~(l / 360) : "ccw" === s && l > 0 && (l = (l - 36e9) % 360 - 360 * ~~(l / 360))), t._pt = a = new lr(t._pt, e, r, n, l, Nr), a.e = h, a.u = "deg", t._props.push(r), a
            },
            En = function (t, e, r) {
                var n, i, o, s, a, u, c, l = wr.style,
                    h = r._gsap;
                for (i in l.cssText = getComputedStyle(r).cssText + ";position:absolute;display:block;", l[Hr] = e, mr.body.appendChild(wr), n = mn(wr, 1), Er)(o = h[i]) !== (s = n[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (a = re(o) !== (c = re(s)) ? nn(r, i, o, c) : parseFloat(o), u = parseFloat(s), t._pt = new lr(t._pt, h, i, a, u - a, Cr), t._pt.u = c || 0, t._props.push(i));
                mr.body.removeChild(wr)
            };
        Et("padding,margin,Width,Radius", (function (t, e) {
            var r = "Top",
                n = "Right",
                i = "Bottom",
                o = "Left",
                s = (e < 3 ? [r, n, i, o] : [r + o, r + n, i + n, i + o]).map((function (r) {
                    return e < 2 ? t + r : "border" + r + t
                }));
            cn[e > 1 ? "border" + t : t] = function (t, e, r, n, i) {
                var o, a;
                if (arguments.length < 4) return o = s.map((function (e) {
                    return on(t, e, r)
                })), 5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a;
                o = (n + "").split(" "), a = {}, s.forEach((function (t, e) {
                    return a[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
                })), t.init(e, a, i)
            }
        }));
        var Tn, An, Dn = {
            name: "css",
            register: Jr,
            targetTest: function (t) {
                return t.style && t.nodeType
            },
            init: function (t, e, r, n, i) {
                var o, s, a, u, c, l, h, p, f, d, g, m, v, b, y, w, _, x, E, T = this._props,
                    A = t.style,
                    D = r.vars.startAt;
                for (h in br || Jr(), e)
                    if ("autoRound" !== h && (s = e[h], !gt[h] || !Ge(h, e, r, n, t, i)))
                        if (c = typeof s, l = cn[h], "function" === c && (c = typeof (s = s.call(r, n, t, i))), "string" === c && ~s.indexOf("random(") && (s = pe(s)), l) l(this, t, h, s, r) && (y = 1);
                        else if ("--" === h.substr(0, 2)) o = (getComputedStyle(t).getPropertyValue(h) + "").trim(), s += "", p = re(o), (f = re(s)) ? p !== f && (o = nn(t, h, o, f) + f) : p && (s += p), this.add(A, "setProperty", o, s, n, i, 0, 0, h);
                else if ("undefined" !== c) {
                    if (D && h in D ? (o = "function" == typeof D[h] ? D[h].call(r, n, t, i) : D[h], h in O.units && !re(o) && (o += O.units[h]), "=" === (o + "").charAt(1) && (o = on(t, h))) : o = on(t, h), u = parseFloat(o), (d = "string" === c && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), a = parseFloat(s), h in Sr && ("autoAlpha" === h && (1 === u && "hidden" === on(t, "visibility") && a && (u = 0), en(this, A, "visibility", u ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== h && "transform" !== h && ~(h = Sr[h]).indexOf(",") && (h = h.split(",")[0])), g = h in Er)
                        if (m || ((v = t._gsap).renderTransform && !e.parseTransform || mn(t, e.parseTransform), b = !1 !== e.smoothOrigin && v.smooth, (m = this._pt = new lr(this._pt, A, Hr, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === h) this._pt = new lr(this._pt, v, "scaleY", v.scaleY, d ? d * a : a - v.scaleY), T.push("scaleY", h), h += "X";
                        else {
                            if ("transformOrigin" === h) {
                                _ = void 0, x = void 0, E = void 0, x = (_ = (w = s).split(" "))[0], E = _[1] || "50%", "top" !== x && "bottom" !== x && "left" !== E && "right" !== E || (w = x, x = E, E = w), _[0] = an[x] || x, _[1] = an[E] || E, s = _.join(" "), v.svg ? gn(t, s, 0, b, 0, this) : ((f = parseFloat(s.split(" ")[2]) || 0) !== v.zOrigin && en(this, v, "zOrigin", v.zOrigin, f), en(this, A, h, vn(o), vn(s)));
                                continue
                            }
                            if ("svgOrigin" === h) {
                                gn(t, s, 1, b, 0, this);
                                continue
                            }
                            if (h in hn) {
                                xn(this, v, h, u, s, d);
                                continue
                            }
                            if ("smoothOrigin" === h) {
                                en(this, v, "smooth", v.smooth, s);
                                continue
                            }
                            if ("force3D" === h) {
                                v[h] = s;
                                continue
                            }
                            if ("transform" === h) {
                                En(this, s, t);
                                continue
                            }
                        }
                    else h in A || (h = Wr(h) || h);
                    if (g || (a || 0 === a) && (u || 0 === u) && !Lr.test(s) && h in A) a || (a = 0), (p = (o + "").substr((u + "").length)) !== (f = re(s) || (h in O.units ? O.units[h] : p)) && (u = nn(t, h, o, f)), this._pt = new lr(this._pt, g ? v : A, h, u, d ? d * a : a - u, g || "px" !== f && "zIndex" !== h || !1 === e.autoRound ? Cr : Rr), this._pt.u = f || 0, p !== f && (this._pt.b = o, this._pt.r = Or);
                    else if (h in A) sn.call(this, t, h, o, s);
                    else {
                        if (!(h in t)) {
                            ut(h, s);
                            continue
                        }
                        this.add(t, h, t[h], s, n, i)
                    }
                    T.push(h)
                }
                y && cr(this)
            },
            get: on,
            aliases: Sr,
            getSetter: function (t, e, r) {
                var n = Sr[e];
                return n && n.indexOf(",") < 0 && (e = n), e in Er && e !== zr && (t._gsap.x || on(t, "x")) ? r && _r === r ? "scale" === e ? Ir : Ur : (_r = r || {}) && ("scale" === e ? jr : Vr) : t.style && !G(t.style[e]) ? Mr : ~e.indexOf("-") ? Fr : er(t, e)
            },
            core: {
                _removeProperty: tn,
                _getMatrix: dn
            }
        };
        dr.utils.checkPrefix = Wr, An = Et("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (Tn = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function (t) {
            Er[t] = 1
        })), Et(Tn, (function (t) {
            O.units[t] = "deg", hn[t] = 1
        })), Sr[An[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Tn, Et("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function (t) {
            var e = t.split(":");
            Sr[e[1]] = An[e[0]]
        })), Et("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function (t) {
            O.units[t] = "px"
        })), dr.registerPlugin(Dn);
        var qn = dr.registerPlugin(Dn) || dr;
        qn.core.Tween
    }, function (t, e) {
        t.exports = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }, t.exports.default = t.exports, t.exports.__esModule = !0
    }, function (t, e) {
        function r(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }
        t.exports = function (t, e, n) {
            return e && r(t.prototype, e), n && r(t, n), t
        }, t.exports.default = t.exports, t.exports.__esModule = !0
    }, function (t, e) {
        t.exports = function (t, e, r) {
            return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r, t
        }, t.exports.default = t.exports, t.exports.__esModule = !0
    }, function (t, e, r) {
        t.exports = r(122)
    }, function (t, e, r) {
        "use strict";
        var n = r(17),
            i = r(98),
            o = Object.prototype.toString;

        function s(t) {
            return "[object Array]" === o.call(t)
        }

        function a(t) {
            return null !== t && "object" == typeof t
        }

        function u(t) {
            return "[object Function]" === o.call(t)
        }

        function c(t, e) {
            if (null != t)
                if ("object" != typeof t && (t = [t]), s(t))
                    for (var r = 0, n = t.length; r < n; r++) e.call(null, t[r], r, t);
                else
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.call(null, t[i], i, t)
        }
        t.exports = {
            isArray: s,
            isArrayBuffer: function (t) {
                return "[object ArrayBuffer]" === o.call(t)
            },
            isBuffer: i,
            isFormData: function (t) {
                return "undefined" != typeof FormData && t instanceof FormData
            },
            isArrayBufferView: function (t) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
            },
            isString: function (t) {
                return "string" == typeof t
            },
            isNumber: function (t) {
                return "number" == typeof t
            },
            isObject: a,
            isUndefined: function (t) {
                return void 0 === t
            },
            isDate: function (t) {
                return "[object Date]" === o.call(t)
            },
            isFile: function (t) {
                return "[object File]" === o.call(t)
            },
            isBlob: function (t) {
                return "[object Blob]" === o.call(t)
            },
            isFunction: u,
            isStream: function (t) {
                return a(t) && u(t.pipe)
            },
            isURLSearchParams: function (t) {
                return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
            },
            isStandardBrowserEnv: function () {
                return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
            },
            forEach: c,
            merge: function t() {
                var e = {};

                function r(r, n) {
                    "object" == typeof e[n] && "object" == typeof r ? e[n] = t(e[n], r) : e[n] = r
                }
                for (var n = 0, i = arguments.length; n < i; n++) c(arguments[n], r);
                return e
            },
            extend: function (t, e, r) {
                return c(e, (function (e, i) {
                    t[i] = r && "function" == typeof e ? n(e, r) : e
                })), t
            },
            trim: function (t) {
                return t.replace(/^\s*/, "").replace(/\s*$/, "")
            }
        }
    }, function (t, e) {
        function r(t, e, r, n, i, o, s) {
            try {
                var a = t[o](s),
                    u = a.value
            } catch (t) {
                return void r(t)
            }
            a.done ? e(u) : Promise.resolve(u).then(n, i)
        }
        t.exports = function (t) {
            return function () {
                var e = this,
                    n = arguments;
                return new Promise((function (i, o) {
                    var s = t.apply(e, n);

                    function a(t) {
                        r(s, i, o, a, u, "next", t)
                    }

                    function u(t) {
                        r(s, i, o, a, u, "throw", t)
                    }
                    a(void 0)
                }))
            }
        }, t.exports.default = t.exports, t.exports.__esModule = !0
    }, function (t, e, r) {
        t.exports = r(97)
    }, function (t, e, r) {
        t.exports = function () {
            "use strict";
            var t = document,
                e = t.createTextNode.bind(t);

            function r(t, e, r) {
                t.style.setProperty(e, r)
            }

            function n(t, e) {
                return t.appendChild(e)
            }

            function i(e, r, i, o) {
                var s = t.createElement("span");
                return r && (s.className = r), i && (!o && s.setAttribute("data-" + r, i), s.textContent = i), e && n(e, s) || s
            }

            function o(t, e) {
                return t.getAttribute("data-" + e)
            }

            function s(e, r) {
                return e && 0 != e.length ? e.nodeName ? [e] : [].slice.call(e[0].nodeName ? e : (r || t).querySelectorAll(e)) : []
            }

            function a(t) {
                for (var e = []; t--;) e[t] = [];
                return e
            }

            function u(t, e) {
                t && t.some(e)
            }

            function c(t) {
                return function (e) {
                    return t[e]
                }
            }
            var l = {};

            function h(t, e, r, n) {
                return {
                    by: t,
                    depends: e,
                    key: r,
                    split: n
                }
            }

            function p(t) {
                l[t.by] = t
            }

            function f(t, r, o, a, c) {
                t.normalize();
                var l = [],
                    h = document.createDocumentFragment();
                a && l.push(t.previousSibling);
                var p = [];
                return s(t.childNodes).some((function (t) {
                    if (!t.tagName || t.hasChildNodes()) {
                        if (t.childNodes && t.childNodes.length) return p.push(t), void l.push.apply(l, f(t, r, o, a, c));
                        var n = t.wholeText || "",
                            s = n.trim();
                        s.length && (" " === n[0] && p.push(e(" ")), u(s.split(o), (function (t, e) {
                            e && c && p.push(i(h, "whitespace", " ", c));
                            var n = i(h, r, t);
                            l.push(n), p.push(n)
                        })), " " === n[n.length - 1] && p.push(e(" ")))
                    } else p.push(t)
                })), u(p, (function (t) {
                    n(h, t)
                })), t.innerHTML = "", n(t, h), l
            }
            var d = h("words", 0, "word", (function (t) {
                    return f(t, "word", /\s+/, 0, 1)
                })),
                g = h("chars", ["words"], "char", (function (t, e, r) {
                    var n = [];
                    return u(r.words, (function (t, r) {
                        n.push.apply(n, f(t, "char", "", e.whitespace && r))
                    })), n
                }));

            function m(t) {
                var e = (t = t || {}).key;
                return s(t.target || "[data-splitting]").map((function (n) {
                    var i = n["🍌"];
                    if (!t.force && i) return i;
                    i = n["🍌"] = {
                        el: n
                    };
                    var s = function (t) {
                            return function t(e, r, n) {
                                var i = n.indexOf(e);
                                if (-1 == i) n.unshift(e), u(l[e].depends, (function (r) {
                                    t(r, e, n)
                                }));
                                else {
                                    var o = n.indexOf(r);
                                    n.splice(i, 1), n.splice(o, 0, e)
                                }
                                return n
                            }(t, 0, []).map(c(l))
                        }(t.by || o(n, "splitting") || "chars"),
                        a = function (t, e) {
                            for (var r in e) t[r] = e[r];
                            return t
                        }({}, t);
                    return u(s, (function (t) {
                        if (t.split) {
                            var o = t.by,
                                s = (e ? "-" + e : "") + t.key,
                                c = t.split(n, a, i);
                            s && function (t, e, n) {
                                var i = "--" + e,
                                    o = i + "-index";
                                u(n, (function (t, e) {
                                    Array.isArray(t) ? u(t, (function (t) {
                                        r(t, o, e)
                                    })) : r(t, o, e)
                                })), r(t, i + "-total", n.length)
                            }(n, s, c), i[o] = c, n.classList.add(o)
                        }
                    })), n.classList.add("splitting"), i
                }))
            }

            function v(t, e, r) {
                var n = s(e.matching || t.children, t),
                    i = {};
                return u(n, (function (t) {
                    var e = Math.round(t[r]);
                    (i[e] || (i[e] = [])).push(t)
                })), Object.keys(i).map(Number).sort(b).map(c(i))
            }

            function b(t, e) {
                return t - e
            }
            m.html = function (t) {
                var e = (t = t || {}).target = i();
                return e.innerHTML = t.content, m(t), e.outerHTML
            }, m.add = p;
            var y = h("lines", ["words"], "line", (function (t, e, r) {
                    return v(t, {
                        matching: r.words
                    }, "offsetTop")
                })),
                w = h("items", 0, "item", (function (t, e) {
                    return s(e.matching || t.children, t)
                })),
                _ = h("rows", 0, "row", (function (t, e) {
                    return v(t, e, "offsetTop")
                })),
                x = h("cols", 0, "col", (function (t, e) {
                    return v(t, e, "offsetLeft")
                })),
                E = h("grid", ["rows", "cols"]),
                T = h("layout", 0, 0, (function (t, e) {
                    var a = e.rows = +(e.rows || o(t, "rows") || 1),
                        u = e.columns = +(e.columns || o(t, "columns") || 1);
                    if (e.image = e.image || o(t, "image") || t.currentSrc || t.src, e.image) {
                        var c = s("img", t)[0];
                        e.image = c && (c.currentSrc || c.src)
                    }
                    e.image && r(t, "background-image", "url(" + e.image + ")");
                    for (var l = a * u, h = [], p = i(0, "cell-grid"); l--;) {
                        var f = i(p, "cell");
                        i(f, "cell-inner"), h.push(f)
                    }
                    return n(t, p), h
                })),
                A = h("cellRows", ["layout"], "row", (function (t, e, r) {
                    var n = e.rows,
                        i = a(n);
                    return u(r.layout, (function (t, e, r) {
                        i[Math.floor(e / (r.length / n))].push(t)
                    })), i
                })),
                D = h("cellColumns", ["layout"], "col", (function (t, e, r) {
                    var n = e.columns,
                        i = a(n);
                    return u(r.layout, (function (t, e) {
                        i[e % n].push(t)
                    })), i
                })),
                q = h("cells", ["cellRows", "cellColumns"], "cell", (function (t, e, r) {
                    return r.layout
                }));
            return p(d), p(g), p(y), p(w), p(_), p(x), p(E), p(T), p(A), p(D), p(q), m
        }()
    }, function (t, e, r) {
        var n, i;
        ! function (o, s) {
            "use strict";
            n = [r(121)], void 0 === (i = function (t) {
                return function (t, e) {
                    var r = t.jQuery,
                        n = t.console;

                    function i(t, e) {
                        for (var r in e) t[r] = e[r];
                        return t
                    }
                    var o = Array.prototype.slice;

                    function s(t, e, a) {
                        if (!(this instanceof s)) return new s(t, e, a);
                        var u, c = t;
                        "string" == typeof t && (c = document.querySelectorAll(t)), c ? (this.elements = (u = c, Array.isArray(u) ? u : "object" == typeof u && "number" == typeof u.length ? o.call(u) : [u]), this.options = i({}, this.options), "function" == typeof e ? a = e : i(this.options, e), a && this.on("always", a), this.getImages(), r && (this.jqDeferred = new r.Deferred), setTimeout(this.check.bind(this))) : n.error("Bad element for imagesLoaded " + (c || t))
                    }
                    s.prototype = Object.create(e.prototype), s.prototype.options = {}, s.prototype.getImages = function () {
                        this.images = [], this.elements.forEach(this.addElementImages, this)
                    }, s.prototype.addElementImages = function (t) {
                        "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
                        var e = t.nodeType;
                        if (e && a[e]) {
                            for (var r = t.querySelectorAll("img"), n = 0; n < r.length; n++) {
                                var i = r[n];
                                this.addImage(i)
                            }
                            if ("string" == typeof this.options.background) {
                                var o = t.querySelectorAll(this.options.background);
                                for (n = 0; n < o.length; n++) {
                                    var s = o[n];
                                    this.addElementBackgroundImages(s)
                                }
                            }
                        }
                    };
                    var a = {
                        1: !0,
                        9: !0,
                        11: !0
                    };

                    function u(t) {
                        this.img = t
                    }

                    function c(t, e) {
                        this.url = t, this.element = e, this.img = new Image
                    }
                    return s.prototype.addElementBackgroundImages = function (t) {
                        var e = getComputedStyle(t);
                        if (e)
                            for (var r = /url\((['"])?(.*?)\1\)/gi, n = r.exec(e.backgroundImage); null !== n;) {
                                var i = n && n[2];
                                i && this.addBackground(i, t), n = r.exec(e.backgroundImage)
                            }
                    }, s.prototype.addImage = function (t) {
                        var e = new u(t);
                        this.images.push(e)
                    }, s.prototype.addBackground = function (t, e) {
                        var r = new c(t, e);
                        this.images.push(r)
                    }, s.prototype.check = function () {
                        var t = this;

                        function e(e, r, n) {
                            setTimeout((function () {
                                t.progress(e, r, n)
                            }))
                        }
                        this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach((function (t) {
                            t.once("progress", e), t.check()
                        })) : this.complete()
                    }, s.prototype.progress = function (t, e, r) {
                        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && n && n.log("progress: " + r, t, e)
                    }, s.prototype.complete = function () {
                        var t = this.hasAnyBroken ? "fail" : "done";
                        if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                            var e = this.hasAnyBroken ? "reject" : "resolve";
                            this.jqDeferred[e](this)
                        }
                    }, u.prototype = Object.create(e.prototype), u.prototype.check = function () {
                        this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
                    }, u.prototype.getIsImageComplete = function () {
                        return this.img.complete && this.img.naturalWidth
                    }, u.prototype.confirm = function (t, e) {
                        this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
                    }, u.prototype.handleEvent = function (t) {
                        var e = "on" + t.type;
                        this[e] && this[e](t)
                    }, u.prototype.onload = function () {
                        this.confirm(!0, "onload"), this.unbindEvents()
                    }, u.prototype.onerror = function () {
                        this.confirm(!1, "onerror"), this.unbindEvents()
                    }, u.prototype.unbindEvents = function () {
                        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                    }, c.prototype = Object.create(u.prototype), c.prototype.check = function () {
                        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
                    }, c.prototype.unbindEvents = function () {
                        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                    }, c.prototype.confirm = function (t, e) {
                        this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
                    }, s.makeJQueryPlugin = function (e) {
                        (e = e || t.jQuery) && ((r = e).fn.imagesLoaded = function (t, e) {
                            return new s(this, t, e).jqDeferred.promise(r(this))
                        })
                    }, s.makeJQueryPlugin(), s
                }(o, t)
            }.apply(e, n)) || (t.exports = i)
        }("undefined" != typeof window ? window : this)
    }, function (t, e, r) {
        (function (t, n) {
            var i;
            ! function (o) {
                var s = (t && t.exports, "object" == typeof n && n);
                s.global !== s && s.window;
                var a = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                    u = /[\x01-\x7F]/g,
                    c = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
                    l = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g,
                    h = {
                        "­": "shy",
                        "‌": "zwnj",
                        "‍": "zwj",
                        "‎": "lrm",
                        "⁣": "ic",
                        "⁢": "it",
                        "⁡": "af",
                        "‏": "rlm",
                        "​": "ZeroWidthSpace",
                        "⁠": "NoBreak",
                        "̑": "DownBreve",
                        "⃛": "tdot",
                        "⃜": "DotDot",
                        "\t": "Tab",
                        "\n": "NewLine",
                        " ": "puncsp",
                        " ": "MediumSpace",
                        " ": "thinsp",
                        " ": "hairsp",
                        " ": "emsp13",
                        " ": "ensp",
                        " ": "emsp14",
                        " ": "emsp",
                        " ": "numsp",
                        " ": "nbsp",
                        "  ": "ThickSpace",
                        "‾": "oline",
                        _: "lowbar",
                        "‐": "dash",
                        "–": "ndash",
                        "—": "mdash",
                        "―": "horbar",
                        ",": "comma",
                        ";": "semi",
                        "⁏": "bsemi",
                        ":": "colon",
                        "⩴": "Colone",
                        "!": "excl",
                        "¡": "iexcl",
                        "?": "quest",
                        "¿": "iquest",
                        ".": "period",
                        "‥": "nldr",
                        "…": "mldr",
                        "·": "middot",
                        "'": "apos",
                        "‘": "lsquo",
                        "’": "rsquo",
                        "‚": "sbquo",
                        "‹": "lsaquo",
                        "›": "rsaquo",
                        '"': "quot",
                        "“": "ldquo",
                        "”": "rdquo",
                        "„": "bdquo",
                        "«": "laquo",
                        "»": "raquo",
                        "(": "lpar",
                        ")": "rpar",
                        "[": "lsqb",
                        "]": "rsqb",
                        "{": "lcub",
                        "}": "rcub",
                        "⌈": "lceil",
                        "⌉": "rceil",
                        "⌊": "lfloor",
                        "⌋": "rfloor",
                        "⦅": "lopar",
                        "⦆": "ropar",
                        "⦋": "lbrke",
                        "⦌": "rbrke",
                        "⦍": "lbrkslu",
                        "⦎": "rbrksld",
                        "⦏": "lbrksld",
                        "⦐": "rbrkslu",
                        "⦑": "langd",
                        "⦒": "rangd",
                        "⦓": "lparlt",
                        "⦔": "rpargt",
                        "⦕": "gtlPar",
                        "⦖": "ltrPar",
                        "⟦": "lobrk",
                        "⟧": "robrk",
                        "⟨": "lang",
                        "⟩": "rang",
                        "⟪": "Lang",
                        "⟫": "Rang",
                        "⟬": "loang",
                        "⟭": "roang",
                        "❲": "lbbrk",
                        "❳": "rbbrk",
                        "‖": "Vert",
                        "§": "sect",
                        "¶": "para",
                        "@": "commat",
                        "*": "ast",
                        "/": "sol",
                        undefined: null,
                        "&": "amp",
                        "#": "num",
                        "%": "percnt",
                        "‰": "permil",
                        "‱": "pertenk",
                        "†": "dagger",
                        "‡": "Dagger",
                        "•": "bull",
                        "⁃": "hybull",
                        "′": "prime",
                        "″": "Prime",
                        "‴": "tprime",
                        "⁗": "qprime",
                        "‵": "bprime",
                        "⁁": "caret",
                        "`": "grave",
                        "´": "acute",
                        "˜": "tilde",
                        "^": "Hat",
                        "¯": "macr",
                        "˘": "breve",
                        "˙": "dot",
                        "¨": "die",
                        "˚": "ring",
                        "˝": "dblac",
                        "¸": "cedil",
                        "˛": "ogon",
                        "ˆ": "circ",
                        "ˇ": "caron",
                        "°": "deg",
                        "©": "copy",
                        "®": "reg",
                        "℗": "copysr",
                        "℘": "wp",
                        "℞": "rx",
                        "℧": "mho",
                        "℩": "iiota",
                        "←": "larr",
                        "↚": "nlarr",
                        "→": "rarr",
                        "↛": "nrarr",
                        "↑": "uarr",
                        "↓": "darr",
                        "↔": "harr",
                        "↮": "nharr",
                        "↕": "varr",
                        "↖": "nwarr",
                        "↗": "nearr",
                        "↘": "searr",
                        "↙": "swarr",
                        "↝": "rarrw",
                        "↝̸": "nrarrw",
                        "↞": "Larr",
                        "↟": "Uarr",
                        "↠": "Rarr",
                        "↡": "Darr",
                        "↢": "larrtl",
                        "↣": "rarrtl",
                        "↤": "mapstoleft",
                        "↥": "mapstoup",
                        "↦": "map",
                        "↧": "mapstodown",
                        "↩": "larrhk",
                        "↪": "rarrhk",
                        "↫": "larrlp",
                        "↬": "rarrlp",
                        "↭": "harrw",
                        "↰": "lsh",
                        "↱": "rsh",
                        "↲": "ldsh",
                        "↳": "rdsh",
                        "↵": "crarr",
                        "↶": "cularr",
                        "↷": "curarr",
                        "↺": "olarr",
                        "↻": "orarr",
                        "↼": "lharu",
                        "↽": "lhard",
                        "↾": "uharr",
                        "↿": "uharl",
                        "⇀": "rharu",
                        "⇁": "rhard",
                        "⇂": "dharr",
                        "⇃": "dharl",
                        "⇄": "rlarr",
                        "⇅": "udarr",
                        "⇆": "lrarr",
                        "⇇": "llarr",
                        "⇈": "uuarr",
                        "⇉": "rrarr",
                        "⇊": "ddarr",
                        "⇋": "lrhar",
                        "⇌": "rlhar",
                        "⇐": "lArr",
                        "⇍": "nlArr",
                        "⇑": "uArr",
                        "⇒": "rArr",
                        "⇏": "nrArr",
                        "⇓": "dArr",
                        "⇔": "iff",
                        "⇎": "nhArr",
                        "⇕": "vArr",
                        "⇖": "nwArr",
                        "⇗": "neArr",
                        "⇘": "seArr",
                        "⇙": "swArr",
                        "⇚": "lAarr",
                        "⇛": "rAarr",
                        "⇝": "zigrarr",
                        "⇤": "larrb",
                        "⇥": "rarrb",
                        "⇵": "duarr",
                        "⇽": "loarr",
                        "⇾": "roarr",
                        "⇿": "hoarr",
                        "∀": "forall",
                        "∁": "comp",
                        "∂": "part",
                        "∂̸": "npart",
                        "∃": "exist",
                        "∄": "nexist",
                        "∅": "empty",
                        "∇": "Del",
                        "∈": "in",
                        "∉": "notin",
                        "∋": "ni",
                        "∌": "notni",
                        "϶": "bepsi",
                        "∏": "prod",
                        "∐": "coprod",
                        "∑": "sum",
                        "+": "plus",
                        "±": "pm",
                        "÷": "div",
                        "×": "times",
                        "<": "lt",
                        "≮": "nlt",
                        "<⃒": "nvlt",
                        "=": "equals",
                        "≠": "ne",
                        "=⃥": "bne",
                        "⩵": "Equal",
                        ">": "gt",
                        "≯": "ngt",
                        ">⃒": "nvgt",
                        "¬": "not",
                        "|": "vert",
                        "¦": "brvbar",
                        "−": "minus",
                        "∓": "mp",
                        "∔": "plusdo",
                        "⁄": "frasl",
                        "∖": "setmn",
                        "∗": "lowast",
                        "∘": "compfn",
                        "√": "Sqrt",
                        "∝": "prop",
                        "∞": "infin",
                        "∟": "angrt",
                        "∠": "ang",
                        "∠⃒": "nang",
                        "∡": "angmsd",
                        "∢": "angsph",
                        "∣": "mid",
                        "∤": "nmid",
                        "∥": "par",
                        "∦": "npar",
                        "∧": "and",
                        "∨": "or",
                        "∩": "cap",
                        "∩︀": "caps",
                        "∪": "cup",
                        "∪︀": "cups",
                        "∫": "int",
                        "∬": "Int",
                        "∭": "tint",
                        "⨌": "qint",
                        "∮": "oint",
                        "∯": "Conint",
                        "∰": "Cconint",
                        "∱": "cwint",
                        "∲": "cwconint",
                        "∳": "awconint",
                        "∴": "there4",
                        "∵": "becaus",
                        "∶": "ratio",
                        "∷": "Colon",
                        "∸": "minusd",
                        "∺": "mDDot",
                        "∻": "homtht",
                        "∼": "sim",
                        "≁": "nsim",
                        "∼⃒": "nvsim",
                        "∽": "bsim",
                        "∽̱": "race",
                        "∾": "ac",
                        "∾̳": "acE",
                        "∿": "acd",
                        "≀": "wr",
                        "≂": "esim",
                        "≂̸": "nesim",
                        "≃": "sime",
                        "≄": "nsime",
                        "≅": "cong",
                        "≇": "ncong",
                        "≆": "simne",
                        "≈": "ap",
                        "≉": "nap",
                        "≊": "ape",
                        "≋": "apid",
                        "≋̸": "napid",
                        "≌": "bcong",
                        "≍": "CupCap",
                        "≭": "NotCupCap",
                        "≍⃒": "nvap",
                        "≎": "bump",
                        "≎̸": "nbump",
                        "≏": "bumpe",
                        "≏̸": "nbumpe",
                        "≐": "doteq",
                        "≐̸": "nedot",
                        "≑": "eDot",
                        "≒": "efDot",
                        "≓": "erDot",
                        "≔": "colone",
                        "≕": "ecolon",
                        "≖": "ecir",
                        "≗": "cire",
                        "≙": "wedgeq",
                        "≚": "veeeq",
                        "≜": "trie",
                        "≟": "equest",
                        "≡": "equiv",
                        "≢": "nequiv",
                        "≡⃥": "bnequiv",
                        "≤": "le",
                        "≰": "nle",
                        "≤⃒": "nvle",
                        "≥": "ge",
                        "≱": "nge",
                        "≥⃒": "nvge",
                        "≦": "lE",
                        "≦̸": "nlE",
                        "≧": "gE",
                        "≧̸": "ngE",
                        "≨︀": "lvnE",
                        "≨": "lnE",
                        "≩": "gnE",
                        "≩︀": "gvnE",
                        "≪": "ll",
                        "≪̸": "nLtv",
                        "≪⃒": "nLt",
                        "≫": "gg",
                        "≫̸": "nGtv",
                        "≫⃒": "nGt",
                        "≬": "twixt",
                        "≲": "lsim",
                        "≴": "nlsim",
                        "≳": "gsim",
                        "≵": "ngsim",
                        "≶": "lg",
                        "≸": "ntlg",
                        "≷": "gl",
                        "≹": "ntgl",
                        "≺": "pr",
                        "⊀": "npr",
                        "≻": "sc",
                        "⊁": "nsc",
                        "≼": "prcue",
                        "⋠": "nprcue",
                        "≽": "sccue",
                        "⋡": "nsccue",
                        "≾": "prsim",
                        "≿": "scsim",
                        "≿̸": "NotSucceedsTilde",
                        "⊂": "sub",
                        "⊄": "nsub",
                        "⊂⃒": "vnsub",
                        "⊃": "sup",
                        "⊅": "nsup",
                        "⊃⃒": "vnsup",
                        "⊆": "sube",
                        "⊈": "nsube",
                        "⊇": "supe",
                        "⊉": "nsupe",
                        "⊊︀": "vsubne",
                        "⊊": "subne",
                        "⊋︀": "vsupne",
                        "⊋": "supne",
                        "⊍": "cupdot",
                        "⊎": "uplus",
                        "⊏": "sqsub",
                        "⊏̸": "NotSquareSubset",
                        "⊐": "sqsup",
                        "⊐̸": "NotSquareSuperset",
                        "⊑": "sqsube",
                        "⋢": "nsqsube",
                        "⊒": "sqsupe",
                        "⋣": "nsqsupe",
                        "⊓": "sqcap",
                        "⊓︀": "sqcaps",
                        "⊔": "sqcup",
                        "⊔︀": "sqcups",
                        "⊕": "oplus",
                        "⊖": "ominus",
                        "⊗": "otimes",
                        "⊘": "osol",
                        "⊙": "odot",
                        "⊚": "ocir",
                        "⊛": "oast",
                        "⊝": "odash",
                        "⊞": "plusb",
                        "⊟": "minusb",
                        "⊠": "timesb",
                        "⊡": "sdotb",
                        "⊢": "vdash",
                        "⊬": "nvdash",
                        "⊣": "dashv",
                        "⊤": "top",
                        "⊥": "bot",
                        "⊧": "models",
                        "⊨": "vDash",
                        "⊭": "nvDash",
                        "⊩": "Vdash",
                        "⊮": "nVdash",
                        "⊪": "Vvdash",
                        "⊫": "VDash",
                        "⊯": "nVDash",
                        "⊰": "prurel",
                        "⊲": "vltri",
                        "⋪": "nltri",
                        "⊳": "vrtri",
                        "⋫": "nrtri",
                        "⊴": "ltrie",
                        "⋬": "nltrie",
                        "⊴⃒": "nvltrie",
                        "⊵": "rtrie",
                        "⋭": "nrtrie",
                        "⊵⃒": "nvrtrie",
                        "⊶": "origof",
                        "⊷": "imof",
                        "⊸": "mumap",
                        "⊹": "hercon",
                        "⊺": "intcal",
                        "⊻": "veebar",
                        "⊽": "barvee",
                        "⊾": "angrtvb",
                        "⊿": "lrtri",
                        "⋀": "Wedge",
                        "⋁": "Vee",
                        "⋂": "xcap",
                        "⋃": "xcup",
                        "⋄": "diam",
                        "⋅": "sdot",
                        "⋆": "Star",
                        "⋇": "divonx",
                        "⋈": "bowtie",
                        "⋉": "ltimes",
                        "⋊": "rtimes",
                        "⋋": "lthree",
                        "⋌": "rthree",
                        "⋍": "bsime",
                        "⋎": "cuvee",
                        "⋏": "cuwed",
                        "⋐": "Sub",
                        "⋑": "Sup",
                        "⋒": "Cap",
                        "⋓": "Cup",
                        "⋔": "fork",
                        "⋕": "epar",
                        "⋖": "ltdot",
                        "⋗": "gtdot",
                        "⋘": "Ll",
                        "⋘̸": "nLl",
                        "⋙": "Gg",
                        "⋙̸": "nGg",
                        "⋚︀": "lesg",
                        "⋚": "leg",
                        "⋛": "gel",
                        "⋛︀": "gesl",
                        "⋞": "cuepr",
                        "⋟": "cuesc",
                        "⋦": "lnsim",
                        "⋧": "gnsim",
                        "⋨": "prnsim",
                        "⋩": "scnsim",
                        "⋮": "vellip",
                        "⋯": "ctdot",
                        "⋰": "utdot",
                        "⋱": "dtdot",
                        "⋲": "disin",
                        "⋳": "isinsv",
                        "⋴": "isins",
                        "⋵": "isindot",
                        "⋵̸": "notindot",
                        "⋶": "notinvc",
                        "⋷": "notinvb",
                        "⋹": "isinE",
                        "⋹̸": "notinE",
                        "⋺": "nisd",
                        "⋻": "xnis",
                        "⋼": "nis",
                        "⋽": "notnivc",
                        "⋾": "notnivb",
                        "⌅": "barwed",
                        "⌆": "Barwed",
                        "⌌": "drcrop",
                        "⌍": "dlcrop",
                        "⌎": "urcrop",
                        "⌏": "ulcrop",
                        "⌐": "bnot",
                        "⌒": "profline",
                        "⌓": "profsurf",
                        "⌕": "telrec",
                        "⌖": "target",
                        "⌜": "ulcorn",
                        "⌝": "urcorn",
                        "⌞": "dlcorn",
                        "⌟": "drcorn",
                        "⌢": "frown",
                        "⌣": "smile",
                        "⌭": "cylcty",
                        "⌮": "profalar",
                        "⌶": "topbot",
                        "⌽": "ovbar",
                        "⌿": "solbar",
                        "⍼": "angzarr",
                        "⎰": "lmoust",
                        "⎱": "rmoust",
                        "⎴": "tbrk",
                        "⎵": "bbrk",
                        "⎶": "bbrktbrk",
                        "⏜": "OverParenthesis",
                        "⏝": "UnderParenthesis",
                        "⏞": "OverBrace",
                        "⏟": "UnderBrace",
                        "⏢": "trpezium",
                        "⏧": "elinters",
                        "␣": "blank",
                        "─": "boxh",
                        "│": "boxv",
                        "┌": "boxdr",
                        "┐": "boxdl",
                        "└": "boxur",
                        "┘": "boxul",
                        "├": "boxvr",
                        "┤": "boxvl",
                        "┬": "boxhd",
                        "┴": "boxhu",
                        "┼": "boxvh",
                        "═": "boxH",
                        "║": "boxV",
                        "╒": "boxdR",
                        "╓": "boxDr",
                        "╔": "boxDR",
                        "╕": "boxdL",
                        "╖": "boxDl",
                        "╗": "boxDL",
                        "╘": "boxuR",
                        "╙": "boxUr",
                        "╚": "boxUR",
                        "╛": "boxuL",
                        "╜": "boxUl",
                        "╝": "boxUL",
                        "╞": "boxvR",
                        "╟": "boxVr",
                        "╠": "boxVR",
                        "╡": "boxvL",
                        "╢": "boxVl",
                        "╣": "boxVL",
                        "╤": "boxHd",
                        "╥": "boxhD",
                        "╦": "boxHD",
                        "╧": "boxHu",
                        "╨": "boxhU",
                        "╩": "boxHU",
                        "╪": "boxvH",
                        "╫": "boxVh",
                        "╬": "boxVH",
                        "▀": "uhblk",
                        "▄": "lhblk",
                        "█": "block",
                        "░": "blk14",
                        "▒": "blk12",
                        "▓": "blk34",
                        "□": "squ",
                        "▪": "squf",
                        "▫": "EmptyVerySmallSquare",
                        "▭": "rect",
                        "▮": "marker",
                        "▱": "fltns",
                        "△": "xutri",
                        "▴": "utrif",
                        "▵": "utri",
                        "▸": "rtrif",
                        "▹": "rtri",
                        "▽": "xdtri",
                        "▾": "dtrif",
                        "▿": "dtri",
                        "◂": "ltrif",
                        "◃": "ltri",
                        "◊": "loz",
                        "○": "cir",
                        "◬": "tridot",
                        "◯": "xcirc",
                        "◸": "ultri",
                        "◹": "urtri",
                        "◺": "lltri",
                        "◻": "EmptySmallSquare",
                        "◼": "FilledSmallSquare",
                        "★": "starf",
                        "☆": "star",
                        "☎": "phone",
                        "♀": "female",
                        "♂": "male",
                        "♠": "spades",
                        "♣": "clubs",
                        "♥": "hearts",
                        "♦": "diams",
                        "♪": "sung",
                        "✓": "check",
                        "✗": "cross",
                        "✠": "malt",
                        "✶": "sext",
                        "❘": "VerticalSeparator",
                        "⟈": "bsolhsub",
                        "⟉": "suphsol",
                        "⟵": "xlarr",
                        "⟶": "xrarr",
                        "⟷": "xharr",
                        "⟸": "xlArr",
                        "⟹": "xrArr",
                        "⟺": "xhArr",
                        "⟼": "xmap",
                        "⟿": "dzigrarr",
                        "⤂": "nvlArr",
                        "⤃": "nvrArr",
                        "⤄": "nvHarr",
                        "⤅": "Map",
                        "⤌": "lbarr",
                        "⤍": "rbarr",
                        "⤎": "lBarr",
                        "⤏": "rBarr",
                        "⤐": "RBarr",
                        "⤑": "DDotrahd",
                        "⤒": "UpArrowBar",
                        "⤓": "DownArrowBar",
                        "⤖": "Rarrtl",
                        "⤙": "latail",
                        "⤚": "ratail",
                        "⤛": "lAtail",
                        "⤜": "rAtail",
                        "⤝": "larrfs",
                        "⤞": "rarrfs",
                        "⤟": "larrbfs",
                        "⤠": "rarrbfs",
                        "⤣": "nwarhk",
                        "⤤": "nearhk",
                        "⤥": "searhk",
                        "⤦": "swarhk",
                        "⤧": "nwnear",
                        "⤨": "toea",
                        "⤩": "tosa",
                        "⤪": "swnwar",
                        "⤳": "rarrc",
                        "⤳̸": "nrarrc",
                        "⤵": "cudarrr",
                        "⤶": "ldca",
                        "⤷": "rdca",
                        "⤸": "cudarrl",
                        "⤹": "larrpl",
                        "⤼": "curarrm",
                        "⤽": "cularrp",
                        "⥅": "rarrpl",
                        "⥈": "harrcir",
                        "⥉": "Uarrocir",
                        "⥊": "lurdshar",
                        "⥋": "ldrushar",
                        "⥎": "LeftRightVector",
                        "⥏": "RightUpDownVector",
                        "⥐": "DownLeftRightVector",
                        "⥑": "LeftUpDownVector",
                        "⥒": "LeftVectorBar",
                        "⥓": "RightVectorBar",
                        "⥔": "RightUpVectorBar",
                        "⥕": "RightDownVectorBar",
                        "⥖": "DownLeftVectorBar",
                        "⥗": "DownRightVectorBar",
                        "⥘": "LeftUpVectorBar",
                        "⥙": "LeftDownVectorBar",
                        "⥚": "LeftTeeVector",
                        "⥛": "RightTeeVector",
                        "⥜": "RightUpTeeVector",
                        "⥝": "RightDownTeeVector",
                        "⥞": "DownLeftTeeVector",
                        "⥟": "DownRightTeeVector",
                        "⥠": "LeftUpTeeVector",
                        "⥡": "LeftDownTeeVector",
                        "⥢": "lHar",
                        "⥣": "uHar",
                        "⥤": "rHar",
                        "⥥": "dHar",
                        "⥦": "luruhar",
                        "⥧": "ldrdhar",
                        "⥨": "ruluhar",
                        "⥩": "rdldhar",
                        "⥪": "lharul",
                        "⥫": "llhard",
                        "⥬": "rharul",
                        "⥭": "lrhard",
                        "⥮": "udhar",
                        "⥯": "duhar",
                        "⥰": "RoundImplies",
                        "⥱": "erarr",
                        "⥲": "simrarr",
                        "⥳": "larrsim",
                        "⥴": "rarrsim",
                        "⥵": "rarrap",
                        "⥶": "ltlarr",
                        "⥸": "gtrarr",
                        "⥹": "subrarr",
                        "⥻": "suplarr",
                        "⥼": "lfisht",
                        "⥽": "rfisht",
                        "⥾": "ufisht",
                        "⥿": "dfisht",
                        "⦚": "vzigzag",
                        "⦜": "vangrt",
                        "⦝": "angrtvbd",
                        "⦤": "ange",
                        "⦥": "range",
                        "⦦": "dwangle",
                        "⦧": "uwangle",
                        "⦨": "angmsdaa",
                        "⦩": "angmsdab",
                        "⦪": "angmsdac",
                        "⦫": "angmsdad",
                        "⦬": "angmsdae",
                        "⦭": "angmsdaf",
                        "⦮": "angmsdag",
                        "⦯": "angmsdah",
                        "⦰": "bemptyv",
                        "⦱": "demptyv",
                        "⦲": "cemptyv",
                        "⦳": "raemptyv",
                        "⦴": "laemptyv",
                        "⦵": "ohbar",
                        "⦶": "omid",
                        "⦷": "opar",
                        "⦹": "operp",
                        "⦻": "olcross",
                        "⦼": "odsold",
                        "⦾": "olcir",
                        "⦿": "ofcir",
                        "⧀": "olt",
                        "⧁": "ogt",
                        "⧂": "cirscir",
                        "⧃": "cirE",
                        "⧄": "solb",
                        "⧅": "bsolb",
                        "⧉": "boxbox",
                        "⧍": "trisb",
                        "⧎": "rtriltri",
                        "⧏": "LeftTriangleBar",
                        "⧏̸": "NotLeftTriangleBar",
                        "⧐": "RightTriangleBar",
                        "⧐̸": "NotRightTriangleBar",
                        "⧜": "iinfin",
                        "⧝": "infintie",
                        "⧞": "nvinfin",
                        "⧣": "eparsl",
                        "⧤": "smeparsl",
                        "⧥": "eqvparsl",
                        "⧫": "lozf",
                        "⧴": "RuleDelayed",
                        "⧶": "dsol",
                        "⨀": "xodot",
                        "⨁": "xoplus",
                        "⨂": "xotime",
                        "⨄": "xuplus",
                        "⨆": "xsqcup",
                        "⨍": "fpartint",
                        "⨐": "cirfnint",
                        "⨑": "awint",
                        "⨒": "rppolint",
                        "⨓": "scpolint",
                        "⨔": "npolint",
                        "⨕": "pointint",
                        "⨖": "quatint",
                        "⨗": "intlarhk",
                        "⨢": "pluscir",
                        "⨣": "plusacir",
                        "⨤": "simplus",
                        "⨥": "plusdu",
                        "⨦": "plussim",
                        "⨧": "plustwo",
                        "⨩": "mcomma",
                        "⨪": "minusdu",
                        "⨭": "loplus",
                        "⨮": "roplus",
                        "⨯": "Cross",
                        "⨰": "timesd",
                        "⨱": "timesbar",
                        "⨳": "smashp",
                        "⨴": "lotimes",
                        "⨵": "rotimes",
                        "⨶": "otimesas",
                        "⨷": "Otimes",
                        "⨸": "odiv",
                        "⨹": "triplus",
                        "⨺": "triminus",
                        "⨻": "tritime",
                        "⨼": "iprod",
                        "⨿": "amalg",
                        "⩀": "capdot",
                        "⩂": "ncup",
                        "⩃": "ncap",
                        "⩄": "capand",
                        "⩅": "cupor",
                        "⩆": "cupcap",
                        "⩇": "capcup",
                        "⩈": "cupbrcap",
                        "⩉": "capbrcup",
                        "⩊": "cupcup",
                        "⩋": "capcap",
                        "⩌": "ccups",
                        "⩍": "ccaps",
                        "⩐": "ccupssm",
                        "⩓": "And",
                        "⩔": "Or",
                        "⩕": "andand",
                        "⩖": "oror",
                        "⩗": "orslope",
                        "⩘": "andslope",
                        "⩚": "andv",
                        "⩛": "orv",
                        "⩜": "andd",
                        "⩝": "ord",
                        "⩟": "wedbar",
                        "⩦": "sdote",
                        "⩪": "simdot",
                        "⩭": "congdot",
                        "⩭̸": "ncongdot",
                        "⩮": "easter",
                        "⩯": "apacir",
                        "⩰": "apE",
                        "⩰̸": "napE",
                        "⩱": "eplus",
                        "⩲": "pluse",
                        "⩳": "Esim",
                        "⩷": "eDDot",
                        "⩸": "equivDD",
                        "⩹": "ltcir",
                        "⩺": "gtcir",
                        "⩻": "ltquest",
                        "⩼": "gtquest",
                        "⩽": "les",
                        "⩽̸": "nles",
                        "⩾": "ges",
                        "⩾̸": "nges",
                        "⩿": "lesdot",
                        "⪀": "gesdot",
                        "⪁": "lesdoto",
                        "⪂": "gesdoto",
                        "⪃": "lesdotor",
                        "⪄": "gesdotol",
                        "⪅": "lap",
                        "⪆": "gap",
                        "⪇": "lne",
                        "⪈": "gne",
                        "⪉": "lnap",
                        "⪊": "gnap",
                        "⪋": "lEg",
                        "⪌": "gEl",
                        "⪍": "lsime",
                        "⪎": "gsime",
                        "⪏": "lsimg",
                        "⪐": "gsiml",
                        "⪑": "lgE",
                        "⪒": "glE",
                        "⪓": "lesges",
                        "⪔": "gesles",
                        "⪕": "els",
                        "⪖": "egs",
                        "⪗": "elsdot",
                        "⪘": "egsdot",
                        "⪙": "el",
                        "⪚": "eg",
                        "⪝": "siml",
                        "⪞": "simg",
                        "⪟": "simlE",
                        "⪠": "simgE",
                        "⪡": "LessLess",
                        "⪡̸": "NotNestedLessLess",
                        "⪢": "GreaterGreater",
                        "⪢̸": "NotNestedGreaterGreater",
                        "⪤": "glj",
                        "⪥": "gla",
                        "⪦": "ltcc",
                        "⪧": "gtcc",
                        "⪨": "lescc",
                        "⪩": "gescc",
                        "⪪": "smt",
                        "⪫": "lat",
                        "⪬": "smte",
                        "⪬︀": "smtes",
                        "⪭": "late",
                        "⪭︀": "lates",
                        "⪮": "bumpE",
                        "⪯": "pre",
                        "⪯̸": "npre",
                        "⪰": "sce",
                        "⪰̸": "nsce",
                        "⪳": "prE",
                        "⪴": "scE",
                        "⪵": "prnE",
                        "⪶": "scnE",
                        "⪷": "prap",
                        "⪸": "scap",
                        "⪹": "prnap",
                        "⪺": "scnap",
                        "⪻": "Pr",
                        "⪼": "Sc",
                        "⪽": "subdot",
                        "⪾": "supdot",
                        "⪿": "subplus",
                        "⫀": "supplus",
                        "⫁": "submult",
                        "⫂": "supmult",
                        "⫃": "subedot",
                        "⫄": "supedot",
                        "⫅": "subE",
                        "⫅̸": "nsubE",
                        "⫆": "supE",
                        "⫆̸": "nsupE",
                        "⫇": "subsim",
                        "⫈": "supsim",
                        "⫋︀": "vsubnE",
                        "⫋": "subnE",
                        "⫌︀": "vsupnE",
                        "⫌": "supnE",
                        "⫏": "csub",
                        "⫐": "csup",
                        "⫑": "csube",
                        "⫒": "csupe",
                        "⫓": "subsup",
                        "⫔": "supsub",
                        "⫕": "subsub",
                        "⫖": "supsup",
                        "⫗": "suphsub",
                        "⫘": "supdsub",
                        "⫙": "forkv",
                        "⫚": "topfork",
                        "⫛": "mlcp",
                        "⫤": "Dashv",
                        "⫦": "Vdashl",
                        "⫧": "Barv",
                        "⫨": "vBar",
                        "⫩": "vBarv",
                        "⫫": "Vbar",
                        "⫬": "Not",
                        "⫭": "bNot",
                        "⫮": "rnmid",
                        "⫯": "cirmid",
                        "⫰": "midcir",
                        "⫱": "topcir",
                        "⫲": "nhpar",
                        "⫳": "parsim",
                        "⫽": "parsl",
                        "⫽⃥": "nparsl",
                        "♭": "flat",
                        "♮": "natur",
                        "♯": "sharp",
                        "¤": "curren",
                        "¢": "cent",
                        $: "dollar",
                        "£": "pound",
                        "¥": "yen",
                        "€": "euro",
                        "¹": "sup1",
                        "½": "half",
                        "⅓": "frac13",
                        "¼": "frac14",
                        "⅕": "frac15",
                        "⅙": "frac16",
                        "⅛": "frac18",
                        "²": "sup2",
                        "⅔": "frac23",
                        "⅖": "frac25",
                        "³": "sup3",
                        "¾": "frac34",
                        "⅗": "frac35",
                        "⅜": "frac38",
                        "⅘": "frac45",
                        "⅚": "frac56",
                        "⅝": "frac58",
                        "⅞": "frac78",
                        "𝒶": "ascr",
                        "𝕒": "aopf",
                        "𝔞": "afr",
                        "𝔸": "Aopf",
                        "𝔄": "Afr",
                        "𝒜": "Ascr",
                        "ª": "ordf",
                        "á": "aacute",
                        "Á": "Aacute",
                        "à": "agrave",
                        "À": "Agrave",
                        "ă": "abreve",
                        "Ă": "Abreve",
                        "â": "acirc",
                        "Â": "Acirc",
                        "å": "aring",
                        "Å": "angst",
                        "ä": "auml",
                        "Ä": "Auml",
                        "ã": "atilde",
                        "Ã": "Atilde",
                        "ą": "aogon",
                        "Ą": "Aogon",
                        "ā": "amacr",
                        "Ā": "Amacr",
                        "æ": "aelig",
                        "Æ": "AElig",
                        "𝒷": "bscr",
                        "𝕓": "bopf",
                        "𝔟": "bfr",
                        "𝔹": "Bopf",
                        "ℬ": "Bscr",
                        "𝔅": "Bfr",
                        "𝔠": "cfr",
                        "𝒸": "cscr",
                        "𝕔": "copf",
                        "ℭ": "Cfr",
                        "𝒞": "Cscr",
                        "ℂ": "Copf",
                        "ć": "cacute",
                        "Ć": "Cacute",
                        "ĉ": "ccirc",
                        "Ĉ": "Ccirc",
                        "č": "ccaron",
                        "Č": "Ccaron",
                        "ċ": "cdot",
                        "Ċ": "Cdot",
                        "ç": "ccedil",
                        "Ç": "Ccedil",
                        "℅": "incare",
                        "𝔡": "dfr",
                        "ⅆ": "dd",
                        "𝕕": "dopf",
                        "𝒹": "dscr",
                        "𝒟": "Dscr",
                        "𝔇": "Dfr",
                        "ⅅ": "DD",
                        "𝔻": "Dopf",
                        "ď": "dcaron",
                        "Ď": "Dcaron",
                        "đ": "dstrok",
                        "Đ": "Dstrok",
                        "ð": "eth",
                        "Ð": "ETH",
                        "ⅇ": "ee",
                        "ℯ": "escr",
                        "𝔢": "efr",
                        "𝕖": "eopf",
                        "ℰ": "Escr",
                        "𝔈": "Efr",
                        "𝔼": "Eopf",
                        "é": "eacute",
                        "É": "Eacute",
                        "è": "egrave",
                        "È": "Egrave",
                        "ê": "ecirc",
                        "Ê": "Ecirc",
                        "ě": "ecaron",
                        "Ě": "Ecaron",
                        "ë": "euml",
                        "Ë": "Euml",
                        "ė": "edot",
                        "Ė": "Edot",
                        "ę": "eogon",
                        "Ę": "Eogon",
                        "ē": "emacr",
                        "Ē": "Emacr",
                        "𝔣": "ffr",
                        "𝕗": "fopf",
                        "𝒻": "fscr",
                        "𝔉": "Ffr",
                        "𝔽": "Fopf",
                        "ℱ": "Fscr",
                        "ﬀ": "fflig",
                        "ﬃ": "ffilig",
                        "ﬄ": "ffllig",
                        "ﬁ": "filig",
                        fj: "fjlig",
                        "ﬂ": "fllig",
                        "ƒ": "fnof",
                        "ℊ": "gscr",
                        "𝕘": "gopf",
                        "𝔤": "gfr",
                        "𝒢": "Gscr",
                        "𝔾": "Gopf",
                        "𝔊": "Gfr",
                        "ǵ": "gacute",
                        "ğ": "gbreve",
                        "Ğ": "Gbreve",
                        "ĝ": "gcirc",
                        "Ĝ": "Gcirc",
                        "ġ": "gdot",
                        "Ġ": "Gdot",
                        "Ģ": "Gcedil",
                        "𝔥": "hfr",
                        "ℎ": "planckh",
                        "𝒽": "hscr",
                        "𝕙": "hopf",
                        "ℋ": "Hscr",
                        "ℌ": "Hfr",
                        "ℍ": "Hopf",
                        "ĥ": "hcirc",
                        "Ĥ": "Hcirc",
                        "ℏ": "hbar",
                        "ħ": "hstrok",
                        "Ħ": "Hstrok",
                        "𝕚": "iopf",
                        "𝔦": "ifr",
                        "𝒾": "iscr",
                        "ⅈ": "ii",
                        "𝕀": "Iopf",
                        "ℐ": "Iscr",
                        "ℑ": "Im",
                        "í": "iacute",
                        "Í": "Iacute",
                        "ì": "igrave",
                        "Ì": "Igrave",
                        "î": "icirc",
                        "Î": "Icirc",
                        "ï": "iuml",
                        "Ï": "Iuml",
                        "ĩ": "itilde",
                        "Ĩ": "Itilde",
                        "İ": "Idot",
                        "į": "iogon",
                        "Į": "Iogon",
                        "ī": "imacr",
                        "Ī": "Imacr",
                        "ĳ": "ijlig",
                        "Ĳ": "IJlig",
                        "ı": "imath",
                        "𝒿": "jscr",
                        "𝕛": "jopf",
                        "𝔧": "jfr",
                        "𝒥": "Jscr",
                        "𝔍": "Jfr",
                        "𝕁": "Jopf",
                        "ĵ": "jcirc",
                        "Ĵ": "Jcirc",
                        "ȷ": "jmath",
                        "𝕜": "kopf",
                        "𝓀": "kscr",
                        "𝔨": "kfr",
                        "𝒦": "Kscr",
                        "𝕂": "Kopf",
                        "𝔎": "Kfr",
                        "ķ": "kcedil",
                        "Ķ": "Kcedil",
                        "𝔩": "lfr",
                        "𝓁": "lscr",
                        "ℓ": "ell",
                        "𝕝": "lopf",
                        "ℒ": "Lscr",
                        "𝔏": "Lfr",
                        "𝕃": "Lopf",
                        "ĺ": "lacute",
                        "Ĺ": "Lacute",
                        "ľ": "lcaron",
                        "Ľ": "Lcaron",
                        "ļ": "lcedil",
                        "Ļ": "Lcedil",
                        "ł": "lstrok",
                        "Ł": "Lstrok",
                        "ŀ": "lmidot",
                        "Ŀ": "Lmidot",
                        "𝔪": "mfr",
                        "𝕞": "mopf",
                        "𝓂": "mscr",
                        "𝔐": "Mfr",
                        "𝕄": "Mopf",
                        "ℳ": "Mscr",
                        "𝔫": "nfr",
                        "𝕟": "nopf",
                        "𝓃": "nscr",
                        "ℕ": "Nopf",
                        "𝒩": "Nscr",
                        "𝔑": "Nfr",
                        "ń": "nacute",
                        "Ń": "Nacute",
                        "ň": "ncaron",
                        "Ň": "Ncaron",
                        "ñ": "ntilde",
                        "Ñ": "Ntilde",
                        "ņ": "ncedil",
                        "Ņ": "Ncedil",
                        "№": "numero",
                        "ŋ": "eng",
                        "Ŋ": "ENG",
                        "𝕠": "oopf",
                        "𝔬": "ofr",
                        "ℴ": "oscr",
                        "𝒪": "Oscr",
                        "𝔒": "Ofr",
                        "𝕆": "Oopf",
                        "º": "ordm",
                        "ó": "oacute",
                        "Ó": "Oacute",
                        "ò": "ograve",
                        "Ò": "Ograve",
                        "ô": "ocirc",
                        "Ô": "Ocirc",
                        "ö": "ouml",
                        "Ö": "Ouml",
                        "ő": "odblac",
                        "Ő": "Odblac",
                        "õ": "otilde",
                        "Õ": "Otilde",
                        "ø": "oslash",
                        "Ø": "Oslash",
                        "ō": "omacr",
                        "Ō": "Omacr",
                        "œ": "oelig",
                        "Œ": "OElig",
                        "𝔭": "pfr",
                        "𝓅": "pscr",
                        "𝕡": "popf",
                        "ℙ": "Popf",
                        "𝔓": "Pfr",
                        "𝒫": "Pscr",
                        "𝕢": "qopf",
                        "𝔮": "qfr",
                        "𝓆": "qscr",
                        "𝒬": "Qscr",
                        "𝔔": "Qfr",
                        "ℚ": "Qopf",
                        "ĸ": "kgreen",
                        "𝔯": "rfr",
                        "𝕣": "ropf",
                        "𝓇": "rscr",
                        "ℛ": "Rscr",
                        "ℜ": "Re",
                        "ℝ": "Ropf",
                        "ŕ": "racute",
                        "Ŕ": "Racute",
                        "ř": "rcaron",
                        "Ř": "Rcaron",
                        "ŗ": "rcedil",
                        "Ŗ": "Rcedil",
                        "𝕤": "sopf",
                        "𝓈": "sscr",
                        "𝔰": "sfr",
                        "𝕊": "Sopf",
                        "𝔖": "Sfr",
                        "𝒮": "Sscr",
                        "Ⓢ": "oS",
                        "ś": "sacute",
                        "Ś": "Sacute",
                        "ŝ": "scirc",
                        "Ŝ": "Scirc",
                        "š": "scaron",
                        "Š": "Scaron",
                        "ş": "scedil",
                        "Ş": "Scedil",
                        "ß": "szlig",
                        "𝔱": "tfr",
                        "𝓉": "tscr",
                        "𝕥": "topf",
                        "𝒯": "Tscr",
                        "𝔗": "Tfr",
                        "𝕋": "Topf",
                        "ť": "tcaron",
                        "Ť": "Tcaron",
                        "ţ": "tcedil",
                        "Ţ": "Tcedil",
                        "™": "trade",
                        "ŧ": "tstrok",
                        "Ŧ": "Tstrok",
                        "𝓊": "uscr",
                        "𝕦": "uopf",
                        "𝔲": "ufr",
                        "𝕌": "Uopf",
                        "𝔘": "Ufr",
                        "𝒰": "Uscr",
                        "ú": "uacute",
                        "Ú": "Uacute",
                        "ù": "ugrave",
                        "Ù": "Ugrave",
                        "ŭ": "ubreve",
                        "Ŭ": "Ubreve",
                        "û": "ucirc",
                        "Û": "Ucirc",
                        "ů": "uring",
                        "Ů": "Uring",
                        "ü": "uuml",
                        "Ü": "Uuml",
                        "ű": "udblac",
                        "Ű": "Udblac",
                        "ũ": "utilde",
                        "Ũ": "Utilde",
                        "ų": "uogon",
                        "Ų": "Uogon",
                        "ū": "umacr",
                        "Ū": "Umacr",
                        "𝔳": "vfr",
                        "𝕧": "vopf",
                        "𝓋": "vscr",
                        "𝔙": "Vfr",
                        "𝕍": "Vopf",
                        "𝒱": "Vscr",
                        "𝕨": "wopf",
                        "𝓌": "wscr",
                        "𝔴": "wfr",
                        "𝒲": "Wscr",
                        "𝕎": "Wopf",
                        "𝔚": "Wfr",
                        "ŵ": "wcirc",
                        "Ŵ": "Wcirc",
                        "𝔵": "xfr",
                        "𝓍": "xscr",
                        "𝕩": "xopf",
                        "𝕏": "Xopf",
                        "𝔛": "Xfr",
                        "𝒳": "Xscr",
                        "𝔶": "yfr",
                        "𝓎": "yscr",
                        "𝕪": "yopf",
                        "𝒴": "Yscr",
                        "𝔜": "Yfr",
                        "𝕐": "Yopf",
                        "ý": "yacute",
                        "Ý": "Yacute",
                        "ŷ": "ycirc",
                        "Ŷ": "Ycirc",
                        "ÿ": "yuml",
                        "Ÿ": "Yuml",
                        "𝓏": "zscr",
                        "𝔷": "zfr",
                        "𝕫": "zopf",
                        "ℨ": "Zfr",
                        "ℤ": "Zopf",
                        "𝒵": "Zscr",
                        "ź": "zacute",
                        "Ź": "Zacute",
                        "ž": "zcaron",
                        "Ž": "Zcaron",
                        "ż": "zdot",
                        "Ż": "Zdot",
                        "Ƶ": "imped",
                        "þ": "thorn",
                        "Þ": "THORN",
                        "ŉ": "napos",
                        "α": "alpha",
                        "Α": "Alpha",
                        "β": "beta",
                        "Β": "Beta",
                        "γ": "gamma",
                        "Γ": "Gamma",
                        "δ": "delta",
                        "Δ": "Delta",
                        "ε": "epsi",
                        "ϵ": "epsiv",
                        "Ε": "Epsilon",
                        "ϝ": "gammad",
                        "Ϝ": "Gammad",
                        "ζ": "zeta",
                        "Ζ": "Zeta",
                        "η": "eta",
                        "Η": "Eta",
                        "θ": "theta",
                        "ϑ": "thetav",
                        "Θ": "Theta",
                        "ι": "iota",
                        "Ι": "Iota",
                        "κ": "kappa",
                        "ϰ": "kappav",
                        "Κ": "Kappa",
                        "λ": "lambda",
                        "Λ": "Lambda",
                        "μ": "mu",
                        "µ": "micro",
                        "Μ": "Mu",
                        "ν": "nu",
                        "Ν": "Nu",
                        "ξ": "xi",
                        "Ξ": "Xi",
                        "ο": "omicron",
                        "Ο": "Omicron",
                        "π": "pi",
                        "ϖ": "piv",
                        "Π": "Pi",
                        "ρ": "rho",
                        "ϱ": "rhov",
                        "Ρ": "Rho",
                        "σ": "sigma",
                        "Σ": "Sigma",
                        "ς": "sigmaf",
                        "τ": "tau",
                        "Τ": "Tau",
                        "υ": "upsi",
                        "Υ": "Upsilon",
                        "ϒ": "Upsi",
                        "φ": "phi",
                        "ϕ": "phiv",
                        "Φ": "Phi",
                        "χ": "chi",
                        "Χ": "Chi",
                        "ψ": "psi",
                        "Ψ": "Psi",
                        "ω": "omega",
                        "Ω": "ohm",
                        "а": "acy",
                        "А": "Acy",
                        "б": "bcy",
                        "Б": "Bcy",
                        "в": "vcy",
                        "В": "Vcy",
                        "г": "gcy",
                        "Г": "Gcy",
                        "ѓ": "gjcy",
                        "Ѓ": "GJcy",
                        "д": "dcy",
                        "Д": "Dcy",
                        "ђ": "djcy",
                        "Ђ": "DJcy",
                        "е": "iecy",
                        "Е": "IEcy",
                        "ё": "iocy",
                        "Ё": "IOcy",
                        "є": "jukcy",
                        "Є": "Jukcy",
                        "ж": "zhcy",
                        "Ж": "ZHcy",
                        "з": "zcy",
                        "З": "Zcy",
                        "ѕ": "dscy",
                        "Ѕ": "DScy",
                        "и": "icy",
                        "И": "Icy",
                        "і": "iukcy",
                        "І": "Iukcy",
                        "ї": "yicy",
                        "Ї": "YIcy",
                        "й": "jcy",
                        "Й": "Jcy",
                        "ј": "jsercy",
                        "Ј": "Jsercy",
                        "к": "kcy",
                        "К": "Kcy",
                        "ќ": "kjcy",
                        "Ќ": "KJcy",
                        "л": "lcy",
                        "Л": "Lcy",
                        "љ": "ljcy",
                        "Љ": "LJcy",
                        "м": "mcy",
                        "М": "Mcy",
                        "н": "ncy",
                        "Н": "Ncy",
                        "њ": "njcy",
                        "Њ": "NJcy",
                        "о": "ocy",
                        "О": "Ocy",
                        "п": "pcy",
                        "П": "Pcy",
                        "р": "rcy",
                        "Р": "Rcy",
                        "с": "scy",
                        "С": "Scy",
                        "т": "tcy",
                        "Т": "Tcy",
                        "ћ": "tshcy",
                        "Ћ": "TSHcy",
                        "у": "ucy",
                        "У": "Ucy",
                        "ў": "ubrcy",
                        "Ў": "Ubrcy",
                        "ф": "fcy",
                        "Ф": "Fcy",
                        "х": "khcy",
                        "Х": "KHcy",
                        "ц": "tscy",
                        "Ц": "TScy",
                        "ч": "chcy",
                        "Ч": "CHcy",
                        "џ": "dzcy",
                        "Џ": "DZcy",
                        "ш": "shcy",
                        "Ш": "SHcy",
                        "щ": "shchcy",
                        "Щ": "SHCHcy",
                        "ъ": "hardcy",
                        "Ъ": "HARDcy",
                        "ы": "ycy",
                        "Ы": "Ycy",
                        "ь": "softcy",
                        "Ь": "SOFTcy",
                        "э": "ecy",
                        "Э": "Ecy",
                        "ю": "yucy",
                        "Ю": "YUcy",
                        "я": "yacy",
                        "Я": "YAcy",
                        "ℵ": "aleph",
                        "ℶ": "beth",
                        "ℷ": "gimel",
                        "ℸ": "daleth"
                    },
                    p = /["&'<>`]/g,
                    f = {
                        '"': "&quot;",
                        "&": "&amp;",
                        "'": "&#x27;",
                        "<": "&lt;",
                        ">": "&gt;",
                        "`": "&#x60;"
                    },
                    d = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/,
                    g = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
                    m = /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g,
                    v = {
                        aacute: "á",
                        Aacute: "Á",
                        abreve: "ă",
                        Abreve: "Ă",
                        ac: "∾",
                        acd: "∿",
                        acE: "∾̳",
                        acirc: "â",
                        Acirc: "Â",
                        acute: "´",
                        acy: "а",
                        Acy: "А",
                        aelig: "æ",
                        AElig: "Æ",
                        af: "⁡",
                        afr: "𝔞",
                        Afr: "𝔄",
                        agrave: "à",
                        Agrave: "À",
                        alefsym: "ℵ",
                        aleph: "ℵ",
                        alpha: "α",
                        Alpha: "Α",
                        amacr: "ā",
                        Amacr: "Ā",
                        amalg: "⨿",
                        amp: "&",
                        AMP: "&",
                        and: "∧",
                        And: "⩓",
                        andand: "⩕",
                        andd: "⩜",
                        andslope: "⩘",
                        andv: "⩚",
                        ang: "∠",
                        ange: "⦤",
                        angle: "∠",
                        angmsd: "∡",
                        angmsdaa: "⦨",
                        angmsdab: "⦩",
                        angmsdac: "⦪",
                        angmsdad: "⦫",
                        angmsdae: "⦬",
                        angmsdaf: "⦭",
                        angmsdag: "⦮",
                        angmsdah: "⦯",
                        angrt: "∟",
                        angrtvb: "⊾",
                        angrtvbd: "⦝",
                        angsph: "∢",
                        angst: "Å",
                        angzarr: "⍼",
                        aogon: "ą",
                        Aogon: "Ą",
                        aopf: "𝕒",
                        Aopf: "𝔸",
                        ap: "≈",
                        apacir: "⩯",
                        ape: "≊",
                        apE: "⩰",
                        apid: "≋",
                        apos: "'",
                        ApplyFunction: "⁡",
                        approx: "≈",
                        approxeq: "≊",
                        aring: "å",
                        Aring: "Å",
                        ascr: "𝒶",
                        Ascr: "𝒜",
                        Assign: "≔",
                        ast: "*",
                        asymp: "≈",
                        asympeq: "≍",
                        atilde: "ã",
                        Atilde: "Ã",
                        auml: "ä",
                        Auml: "Ä",
                        awconint: "∳",
                        awint: "⨑",
                        backcong: "≌",
                        backepsilon: "϶",
                        backprime: "‵",
                        backsim: "∽",
                        backsimeq: "⋍",
                        Backslash: "∖",
                        Barv: "⫧",
                        barvee: "⊽",
                        barwed: "⌅",
                        Barwed: "⌆",
                        barwedge: "⌅",
                        bbrk: "⎵",
                        bbrktbrk: "⎶",
                        bcong: "≌",
                        bcy: "б",
                        Bcy: "Б",
                        bdquo: "„",
                        becaus: "∵",
                        because: "∵",
                        Because: "∵",
                        bemptyv: "⦰",
                        bepsi: "϶",
                        bernou: "ℬ",
                        Bernoullis: "ℬ",
                        beta: "β",
                        Beta: "Β",
                        beth: "ℶ",
                        between: "≬",
                        bfr: "𝔟",
                        Bfr: "𝔅",
                        bigcap: "⋂",
                        bigcirc: "◯",
                        bigcup: "⋃",
                        bigodot: "⨀",
                        bigoplus: "⨁",
                        bigotimes: "⨂",
                        bigsqcup: "⨆",
                        bigstar: "★",
                        bigtriangledown: "▽",
                        bigtriangleup: "△",
                        biguplus: "⨄",
                        bigvee: "⋁",
                        bigwedge: "⋀",
                        bkarow: "⤍",
                        blacklozenge: "⧫",
                        blacksquare: "▪",
                        blacktriangle: "▴",
                        blacktriangledown: "▾",
                        blacktriangleleft: "◂",
                        blacktriangleright: "▸",
                        blank: "␣",
                        blk12: "▒",
                        blk14: "░",
                        blk34: "▓",
                        block: "█",
                        bne: "=⃥",
                        bnequiv: "≡⃥",
                        bnot: "⌐",
                        bNot: "⫭",
                        bopf: "𝕓",
                        Bopf: "𝔹",
                        bot: "⊥",
                        bottom: "⊥",
                        bowtie: "⋈",
                        boxbox: "⧉",
                        boxdl: "┐",
                        boxdL: "╕",
                        boxDl: "╖",
                        boxDL: "╗",
                        boxdr: "┌",
                        boxdR: "╒",
                        boxDr: "╓",
                        boxDR: "╔",
                        boxh: "─",
                        boxH: "═",
                        boxhd: "┬",
                        boxhD: "╥",
                        boxHd: "╤",
                        boxHD: "╦",
                        boxhu: "┴",
                        boxhU: "╨",
                        boxHu: "╧",
                        boxHU: "╩",
                        boxminus: "⊟",
                        boxplus: "⊞",
                        boxtimes: "⊠",
                        boxul: "┘",
                        boxuL: "╛",
                        boxUl: "╜",
                        boxUL: "╝",
                        boxur: "└",
                        boxuR: "╘",
                        boxUr: "╙",
                        boxUR: "╚",
                        boxv: "│",
                        boxV: "║",
                        boxvh: "┼",
                        boxvH: "╪",
                        boxVh: "╫",
                        boxVH: "╬",
                        boxvl: "┤",
                        boxvL: "╡",
                        boxVl: "╢",
                        boxVL: "╣",
                        boxvr: "├",
                        boxvR: "╞",
                        boxVr: "╟",
                        boxVR: "╠",
                        bprime: "‵",
                        breve: "˘",
                        Breve: "˘",
                        brvbar: "¦",
                        bscr: "𝒷",
                        Bscr: "ℬ",
                        bsemi: "⁏",
                        bsim: "∽",
                        bsime: "⋍",
                        bsol: "\\",
                        bsolb: "⧅",
                        bsolhsub: "⟈",
                        bull: "•",
                        bullet: "•",
                        bump: "≎",
                        bumpe: "≏",
                        bumpE: "⪮",
                        bumpeq: "≏",
                        Bumpeq: "≎",
                        cacute: "ć",
                        Cacute: "Ć",
                        cap: "∩",
                        Cap: "⋒",
                        capand: "⩄",
                        capbrcup: "⩉",
                        capcap: "⩋",
                        capcup: "⩇",
                        capdot: "⩀",
                        CapitalDifferentialD: "ⅅ",
                        caps: "∩︀",
                        caret: "⁁",
                        caron: "ˇ",
                        Cayleys: "ℭ",
                        ccaps: "⩍",
                        ccaron: "č",
                        Ccaron: "Č",
                        ccedil: "ç",
                        Ccedil: "Ç",
                        ccirc: "ĉ",
                        Ccirc: "Ĉ",
                        Cconint: "∰",
                        ccups: "⩌",
                        ccupssm: "⩐",
                        cdot: "ċ",
                        Cdot: "Ċ",
                        cedil: "¸",
                        Cedilla: "¸",
                        cemptyv: "⦲",
                        cent: "¢",
                        centerdot: "·",
                        CenterDot: "·",
                        cfr: "𝔠",
                        Cfr: "ℭ",
                        chcy: "ч",
                        CHcy: "Ч",
                        check: "✓",
                        checkmark: "✓",
                        chi: "χ",
                        Chi: "Χ",
                        cir: "○",
                        circ: "ˆ",
                        circeq: "≗",
                        circlearrowleft: "↺",
                        circlearrowright: "↻",
                        circledast: "⊛",
                        circledcirc: "⊚",
                        circleddash: "⊝",
                        CircleDot: "⊙",
                        circledR: "®",
                        circledS: "Ⓢ",
                        CircleMinus: "⊖",
                        CirclePlus: "⊕",
                        CircleTimes: "⊗",
                        cire: "≗",
                        cirE: "⧃",
                        cirfnint: "⨐",
                        cirmid: "⫯",
                        cirscir: "⧂",
                        ClockwiseContourIntegral: "∲",
                        CloseCurlyDoubleQuote: "”",
                        CloseCurlyQuote: "’",
                        clubs: "♣",
                        clubsuit: "♣",
                        colon: ":",
                        Colon: "∷",
                        colone: "≔",
                        Colone: "⩴",
                        coloneq: "≔",
                        comma: ",",
                        commat: "@",
                        comp: "∁",
                        compfn: "∘",
                        complement: "∁",
                        complexes: "ℂ",
                        cong: "≅",
                        congdot: "⩭",
                        Congruent: "≡",
                        conint: "∮",
                        Conint: "∯",
                        ContourIntegral: "∮",
                        copf: "𝕔",
                        Copf: "ℂ",
                        coprod: "∐",
                        Coproduct: "∐",
                        copy: "©",
                        COPY: "©",
                        copysr: "℗",
                        CounterClockwiseContourIntegral: "∳",
                        crarr: "↵",
                        cross: "✗",
                        Cross: "⨯",
                        cscr: "𝒸",
                        Cscr: "𝒞",
                        csub: "⫏",
                        csube: "⫑",
                        csup: "⫐",
                        csupe: "⫒",
                        ctdot: "⋯",
                        cudarrl: "⤸",
                        cudarrr: "⤵",
                        cuepr: "⋞",
                        cuesc: "⋟",
                        cularr: "↶",
                        cularrp: "⤽",
                        cup: "∪",
                        Cup: "⋓",
                        cupbrcap: "⩈",
                        cupcap: "⩆",
                        CupCap: "≍",
                        cupcup: "⩊",
                        cupdot: "⊍",
                        cupor: "⩅",
                        cups: "∪︀",
                        curarr: "↷",
                        curarrm: "⤼",
                        curlyeqprec: "⋞",
                        curlyeqsucc: "⋟",
                        curlyvee: "⋎",
                        curlywedge: "⋏",
                        curren: "¤",
                        curvearrowleft: "↶",
                        curvearrowright: "↷",
                        cuvee: "⋎",
                        cuwed: "⋏",
                        cwconint: "∲",
                        cwint: "∱",
                        cylcty: "⌭",
                        dagger: "†",
                        Dagger: "‡",
                        daleth: "ℸ",
                        darr: "↓",
                        dArr: "⇓",
                        Darr: "↡",
                        dash: "‐",
                        dashv: "⊣",
                        Dashv: "⫤",
                        dbkarow: "⤏",
                        dblac: "˝",
                        dcaron: "ď",
                        Dcaron: "Ď",
                        dcy: "д",
                        Dcy: "Д",
                        dd: "ⅆ",
                        DD: "ⅅ",
                        ddagger: "‡",
                        ddarr: "⇊",
                        DDotrahd: "⤑",
                        ddotseq: "⩷",
                        deg: "°",
                        Del: "∇",
                        delta: "δ",
                        Delta: "Δ",
                        demptyv: "⦱",
                        dfisht: "⥿",
                        dfr: "𝔡",
                        Dfr: "𝔇",
                        dHar: "⥥",
                        dharl: "⇃",
                        dharr: "⇂",
                        DiacriticalAcute: "´",
                        DiacriticalDot: "˙",
                        DiacriticalDoubleAcute: "˝",
                        DiacriticalGrave: "`",
                        DiacriticalTilde: "˜",
                        diam: "⋄",
                        diamond: "⋄",
                        Diamond: "⋄",
                        diamondsuit: "♦",
                        diams: "♦",
                        die: "¨",
                        DifferentialD: "ⅆ",
                        digamma: "ϝ",
                        disin: "⋲",
                        div: "÷",
                        divide: "÷",
                        divideontimes: "⋇",
                        divonx: "⋇",
                        djcy: "ђ",
                        DJcy: "Ђ",
                        dlcorn: "⌞",
                        dlcrop: "⌍",
                        dollar: "$",
                        dopf: "𝕕",
                        Dopf: "𝔻",
                        dot: "˙",
                        Dot: "¨",
                        DotDot: "⃜",
                        doteq: "≐",
                        doteqdot: "≑",
                        DotEqual: "≐",
                        dotminus: "∸",
                        dotplus: "∔",
                        dotsquare: "⊡",
                        doublebarwedge: "⌆",
                        DoubleContourIntegral: "∯",
                        DoubleDot: "¨",
                        DoubleDownArrow: "⇓",
                        DoubleLeftArrow: "⇐",
                        DoubleLeftRightArrow: "⇔",
                        DoubleLeftTee: "⫤",
                        DoubleLongLeftArrow: "⟸",
                        DoubleLongLeftRightArrow: "⟺",
                        DoubleLongRightArrow: "⟹",
                        DoubleRightArrow: "⇒",
                        DoubleRightTee: "⊨",
                        DoubleUpArrow: "⇑",
                        DoubleUpDownArrow: "⇕",
                        DoubleVerticalBar: "∥",
                        downarrow: "↓",
                        Downarrow: "⇓",
                        DownArrow: "↓",
                        DownArrowBar: "⤓",
                        DownArrowUpArrow: "⇵",
                        DownBreve: "̑",
                        downdownarrows: "⇊",
                        downharpoonleft: "⇃",
                        downharpoonright: "⇂",
                        DownLeftRightVector: "⥐",
                        DownLeftTeeVector: "⥞",
                        DownLeftVector: "↽",
                        DownLeftVectorBar: "⥖",
                        DownRightTeeVector: "⥟",
                        DownRightVector: "⇁",
                        DownRightVectorBar: "⥗",
                        DownTee: "⊤",
                        DownTeeArrow: "↧",
                        drbkarow: "⤐",
                        drcorn: "⌟",
                        drcrop: "⌌",
                        dscr: "𝒹",
                        Dscr: "𝒟",
                        dscy: "ѕ",
                        DScy: "Ѕ",
                        dsol: "⧶",
                        dstrok: "đ",
                        Dstrok: "Đ",
                        dtdot: "⋱",
                        dtri: "▿",
                        dtrif: "▾",
                        duarr: "⇵",
                        duhar: "⥯",
                        dwangle: "⦦",
                        dzcy: "џ",
                        DZcy: "Џ",
                        dzigrarr: "⟿",
                        eacute: "é",
                        Eacute: "É",
                        easter: "⩮",
                        ecaron: "ě",
                        Ecaron: "Ě",
                        ecir: "≖",
                        ecirc: "ê",
                        Ecirc: "Ê",
                        ecolon: "≕",
                        ecy: "э",
                        Ecy: "Э",
                        eDDot: "⩷",
                        edot: "ė",
                        eDot: "≑",
                        Edot: "Ė",
                        ee: "ⅇ",
                        efDot: "≒",
                        efr: "𝔢",
                        Efr: "𝔈",
                        eg: "⪚",
                        egrave: "è",
                        Egrave: "È",
                        egs: "⪖",
                        egsdot: "⪘",
                        el: "⪙",
                        Element: "∈",
                        elinters: "⏧",
                        ell: "ℓ",
                        els: "⪕",
                        elsdot: "⪗",
                        emacr: "ē",
                        Emacr: "Ē",
                        empty: "∅",
                        emptyset: "∅",
                        EmptySmallSquare: "◻",
                        emptyv: "∅",
                        EmptyVerySmallSquare: "▫",
                        emsp: " ",
                        emsp13: " ",
                        emsp14: " ",
                        eng: "ŋ",
                        ENG: "Ŋ",
                        ensp: " ",
                        eogon: "ę",
                        Eogon: "Ę",
                        eopf: "𝕖",
                        Eopf: "𝔼",
                        epar: "⋕",
                        eparsl: "⧣",
                        eplus: "⩱",
                        epsi: "ε",
                        epsilon: "ε",
                        Epsilon: "Ε",
                        epsiv: "ϵ",
                        eqcirc: "≖",
                        eqcolon: "≕",
                        eqsim: "≂",
                        eqslantgtr: "⪖",
                        eqslantless: "⪕",
                        Equal: "⩵",
                        equals: "=",
                        EqualTilde: "≂",
                        equest: "≟",
                        Equilibrium: "⇌",
                        equiv: "≡",
                        equivDD: "⩸",
                        eqvparsl: "⧥",
                        erarr: "⥱",
                        erDot: "≓",
                        escr: "ℯ",
                        Escr: "ℰ",
                        esdot: "≐",
                        esim: "≂",
                        Esim: "⩳",
                        eta: "η",
                        Eta: "Η",
                        eth: "ð",
                        ETH: "Ð",
                        euml: "ë",
                        Euml: "Ë",
                        euro: "€",
                        excl: "!",
                        exist: "∃",
                        Exists: "∃",
                        expectation: "ℰ",
                        exponentiale: "ⅇ",
                        ExponentialE: "ⅇ",
                        fallingdotseq: "≒",
                        fcy: "ф",
                        Fcy: "Ф",
                        female: "♀",
                        ffilig: "ﬃ",
                        fflig: "ﬀ",
                        ffllig: "ﬄ",
                        ffr: "𝔣",
                        Ffr: "𝔉",
                        filig: "ﬁ",
                        FilledSmallSquare: "◼",
                        FilledVerySmallSquare: "▪",
                        fjlig: "fj",
                        flat: "♭",
                        fllig: "ﬂ",
                        fltns: "▱",
                        fnof: "ƒ",
                        fopf: "𝕗",
                        Fopf: "𝔽",
                        forall: "∀",
                        ForAll: "∀",
                        fork: "⋔",
                        forkv: "⫙",
                        Fouriertrf: "ℱ",
                        fpartint: "⨍",
                        frac12: "½",
                        frac13: "⅓",
                        frac14: "¼",
                        frac15: "⅕",
                        frac16: "⅙",
                        frac18: "⅛",
                        frac23: "⅔",
                        frac25: "⅖",
                        frac34: "¾",
                        frac35: "⅗",
                        frac38: "⅜",
                        frac45: "⅘",
                        frac56: "⅚",
                        frac58: "⅝",
                        frac78: "⅞",
                        frasl: "⁄",
                        frown: "⌢",
                        fscr: "𝒻",
                        Fscr: "ℱ",
                        gacute: "ǵ",
                        gamma: "γ",
                        Gamma: "Γ",
                        gammad: "ϝ",
                        Gammad: "Ϝ",
                        gap: "⪆",
                        gbreve: "ğ",
                        Gbreve: "Ğ",
                        Gcedil: "Ģ",
                        gcirc: "ĝ",
                        Gcirc: "Ĝ",
                        gcy: "г",
                        Gcy: "Г",
                        gdot: "ġ",
                        Gdot: "Ġ",
                        ge: "≥",
                        gE: "≧",
                        gel: "⋛",
                        gEl: "⪌",
                        geq: "≥",
                        geqq: "≧",
                        geqslant: "⩾",
                        ges: "⩾",
                        gescc: "⪩",
                        gesdot: "⪀",
                        gesdoto: "⪂",
                        gesdotol: "⪄",
                        gesl: "⋛︀",
                        gesles: "⪔",
                        gfr: "𝔤",
                        Gfr: "𝔊",
                        gg: "≫",
                        Gg: "⋙",
                        ggg: "⋙",
                        gimel: "ℷ",
                        gjcy: "ѓ",
                        GJcy: "Ѓ",
                        gl: "≷",
                        gla: "⪥",
                        glE: "⪒",
                        glj: "⪤",
                        gnap: "⪊",
                        gnapprox: "⪊",
                        gne: "⪈",
                        gnE: "≩",
                        gneq: "⪈",
                        gneqq: "≩",
                        gnsim: "⋧",
                        gopf: "𝕘",
                        Gopf: "𝔾",
                        grave: "`",
                        GreaterEqual: "≥",
                        GreaterEqualLess: "⋛",
                        GreaterFullEqual: "≧",
                        GreaterGreater: "⪢",
                        GreaterLess: "≷",
                        GreaterSlantEqual: "⩾",
                        GreaterTilde: "≳",
                        gscr: "ℊ",
                        Gscr: "𝒢",
                        gsim: "≳",
                        gsime: "⪎",
                        gsiml: "⪐",
                        gt: ">",
                        Gt: "≫",
                        GT: ">",
                        gtcc: "⪧",
                        gtcir: "⩺",
                        gtdot: "⋗",
                        gtlPar: "⦕",
                        gtquest: "⩼",
                        gtrapprox: "⪆",
                        gtrarr: "⥸",
                        gtrdot: "⋗",
                        gtreqless: "⋛",
                        gtreqqless: "⪌",
                        gtrless: "≷",
                        gtrsim: "≳",
                        gvertneqq: "≩︀",
                        gvnE: "≩︀",
                        Hacek: "ˇ",
                        hairsp: " ",
                        half: "½",
                        hamilt: "ℋ",
                        hardcy: "ъ",
                        HARDcy: "Ъ",
                        harr: "↔",
                        hArr: "⇔",
                        harrcir: "⥈",
                        harrw: "↭",
                        Hat: "^",
                        hbar: "ℏ",
                        hcirc: "ĥ",
                        Hcirc: "Ĥ",
                        hearts: "♥",
                        heartsuit: "♥",
                        hellip: "…",
                        hercon: "⊹",
                        hfr: "𝔥",
                        Hfr: "ℌ",
                        HilbertSpace: "ℋ",
                        hksearow: "⤥",
                        hkswarow: "⤦",
                        hoarr: "⇿",
                        homtht: "∻",
                        hookleftarrow: "↩",
                        hookrightarrow: "↪",
                        hopf: "𝕙",
                        Hopf: "ℍ",
                        horbar: "―",
                        HorizontalLine: "─",
                        hscr: "𝒽",
                        Hscr: "ℋ",
                        hslash: "ℏ",
                        hstrok: "ħ",
                        Hstrok: "Ħ",
                        HumpDownHump: "≎",
                        HumpEqual: "≏",
                        hybull: "⁃",
                        hyphen: "‐",
                        iacute: "í",
                        Iacute: "Í",
                        ic: "⁣",
                        icirc: "î",
                        Icirc: "Î",
                        icy: "и",
                        Icy: "И",
                        Idot: "İ",
                        iecy: "е",
                        IEcy: "Е",
                        iexcl: "¡",
                        iff: "⇔",
                        ifr: "𝔦",
                        Ifr: "ℑ",
                        igrave: "ì",
                        Igrave: "Ì",
                        ii: "ⅈ",
                        iiiint: "⨌",
                        iiint: "∭",
                        iinfin: "⧜",
                        iiota: "℩",
                        ijlig: "ĳ",
                        IJlig: "Ĳ",
                        Im: "ℑ",
                        imacr: "ī",
                        Imacr: "Ī",
                        image: "ℑ",
                        ImaginaryI: "ⅈ",
                        imagline: "ℐ",
                        imagpart: "ℑ",
                        imath: "ı",
                        imof: "⊷",
                        imped: "Ƶ",
                        Implies: "⇒",
                        in: "∈",
                        incare: "℅",
                        infin: "∞",
                        infintie: "⧝",
                        inodot: "ı",
                        int: "∫",
                        Int: "∬",
                        intcal: "⊺",
                        integers: "ℤ",
                        Integral: "∫",
                        intercal: "⊺",
                        Intersection: "⋂",
                        intlarhk: "⨗",
                        intprod: "⨼",
                        InvisibleComma: "⁣",
                        InvisibleTimes: "⁢",
                        iocy: "ё",
                        IOcy: "Ё",
                        iogon: "į",
                        Iogon: "Į",
                        iopf: "𝕚",
                        Iopf: "𝕀",
                        iota: "ι",
                        Iota: "Ι",
                        iprod: "⨼",
                        iquest: "¿",
                        iscr: "𝒾",
                        Iscr: "ℐ",
                        isin: "∈",
                        isindot: "⋵",
                        isinE: "⋹",
                        isins: "⋴",
                        isinsv: "⋳",
                        isinv: "∈",
                        it: "⁢",
                        itilde: "ĩ",
                        Itilde: "Ĩ",
                        iukcy: "і",
                        Iukcy: "І",
                        iuml: "ï",
                        Iuml: "Ï",
                        jcirc: "ĵ",
                        Jcirc: "Ĵ",
                        jcy: "й",
                        Jcy: "Й",
                        jfr: "𝔧",
                        Jfr: "𝔍",
                        jmath: "ȷ",
                        jopf: "𝕛",
                        Jopf: "𝕁",
                        jscr: "𝒿",
                        Jscr: "𝒥",
                        jsercy: "ј",
                        Jsercy: "Ј",
                        jukcy: "є",
                        Jukcy: "Є",
                        kappa: "κ",
                        Kappa: "Κ",
                        kappav: "ϰ",
                        kcedil: "ķ",
                        Kcedil: "Ķ",
                        kcy: "к",
                        Kcy: "К",
                        kfr: "𝔨",
                        Kfr: "𝔎",
                        kgreen: "ĸ",
                        khcy: "х",
                        KHcy: "Х",
                        kjcy: "ќ",
                        KJcy: "Ќ",
                        kopf: "𝕜",
                        Kopf: "𝕂",
                        kscr: "𝓀",
                        Kscr: "𝒦",
                        lAarr: "⇚",
                        lacute: "ĺ",
                        Lacute: "Ĺ",
                        laemptyv: "⦴",
                        lagran: "ℒ",
                        lambda: "λ",
                        Lambda: "Λ",
                        lang: "⟨",
                        Lang: "⟪",
                        langd: "⦑",
                        langle: "⟨",
                        lap: "⪅",
                        Laplacetrf: "ℒ",
                        laquo: "«",
                        larr: "←",
                        lArr: "⇐",
                        Larr: "↞",
                        larrb: "⇤",
                        larrbfs: "⤟",
                        larrfs: "⤝",
                        larrhk: "↩",
                        larrlp: "↫",
                        larrpl: "⤹",
                        larrsim: "⥳",
                        larrtl: "↢",
                        lat: "⪫",
                        latail: "⤙",
                        lAtail: "⤛",
                        late: "⪭",
                        lates: "⪭︀",
                        lbarr: "⤌",
                        lBarr: "⤎",
                        lbbrk: "❲",
                        lbrace: "{",
                        lbrack: "[",
                        lbrke: "⦋",
                        lbrksld: "⦏",
                        lbrkslu: "⦍",
                        lcaron: "ľ",
                        Lcaron: "Ľ",
                        lcedil: "ļ",
                        Lcedil: "Ļ",
                        lceil: "⌈",
                        lcub: "{",
                        lcy: "л",
                        Lcy: "Л",
                        ldca: "⤶",
                        ldquo: "“",
                        ldquor: "„",
                        ldrdhar: "⥧",
                        ldrushar: "⥋",
                        ldsh: "↲",
                        le: "≤",
                        lE: "≦",
                        LeftAngleBracket: "⟨",
                        leftarrow: "←",
                        Leftarrow: "⇐",
                        LeftArrow: "←",
                        LeftArrowBar: "⇤",
                        LeftArrowRightArrow: "⇆",
                        leftarrowtail: "↢",
                        LeftCeiling: "⌈",
                        LeftDoubleBracket: "⟦",
                        LeftDownTeeVector: "⥡",
                        LeftDownVector: "⇃",
                        LeftDownVectorBar: "⥙",
                        LeftFloor: "⌊",
                        leftharpoondown: "↽",
                        leftharpoonup: "↼",
                        leftleftarrows: "⇇",
                        leftrightarrow: "↔",
                        Leftrightarrow: "⇔",
                        LeftRightArrow: "↔",
                        leftrightarrows: "⇆",
                        leftrightharpoons: "⇋",
                        leftrightsquigarrow: "↭",
                        LeftRightVector: "⥎",
                        LeftTee: "⊣",
                        LeftTeeArrow: "↤",
                        LeftTeeVector: "⥚",
                        leftthreetimes: "⋋",
                        LeftTriangle: "⊲",
                        LeftTriangleBar: "⧏",
                        LeftTriangleEqual: "⊴",
                        LeftUpDownVector: "⥑",
                        LeftUpTeeVector: "⥠",
                        LeftUpVector: "↿",
                        LeftUpVectorBar: "⥘",
                        LeftVector: "↼",
                        LeftVectorBar: "⥒",
                        leg: "⋚",
                        lEg: "⪋",
                        leq: "≤",
                        leqq: "≦",
                        leqslant: "⩽",
                        les: "⩽",
                        lescc: "⪨",
                        lesdot: "⩿",
                        lesdoto: "⪁",
                        lesdotor: "⪃",
                        lesg: "⋚︀",
                        lesges: "⪓",
                        lessapprox: "⪅",
                        lessdot: "⋖",
                        lesseqgtr: "⋚",
                        lesseqqgtr: "⪋",
                        LessEqualGreater: "⋚",
                        LessFullEqual: "≦",
                        LessGreater: "≶",
                        lessgtr: "≶",
                        LessLess: "⪡",
                        lesssim: "≲",
                        LessSlantEqual: "⩽",
                        LessTilde: "≲",
                        lfisht: "⥼",
                        lfloor: "⌊",
                        lfr: "𝔩",
                        Lfr: "𝔏",
                        lg: "≶",
                        lgE: "⪑",
                        lHar: "⥢",
                        lhard: "↽",
                        lharu: "↼",
                        lharul: "⥪",
                        lhblk: "▄",
                        ljcy: "љ",
                        LJcy: "Љ",
                        ll: "≪",
                        Ll: "⋘",
                        llarr: "⇇",
                        llcorner: "⌞",
                        Lleftarrow: "⇚",
                        llhard: "⥫",
                        lltri: "◺",
                        lmidot: "ŀ",
                        Lmidot: "Ŀ",
                        lmoust: "⎰",
                        lmoustache: "⎰",
                        lnap: "⪉",
                        lnapprox: "⪉",
                        lne: "⪇",
                        lnE: "≨",
                        lneq: "⪇",
                        lneqq: "≨",
                        lnsim: "⋦",
                        loang: "⟬",
                        loarr: "⇽",
                        lobrk: "⟦",
                        longleftarrow: "⟵",
                        Longleftarrow: "⟸",
                        LongLeftArrow: "⟵",
                        longleftrightarrow: "⟷",
                        Longleftrightarrow: "⟺",
                        LongLeftRightArrow: "⟷",
                        longmapsto: "⟼",
                        longrightarrow: "⟶",
                        Longrightarrow: "⟹",
                        LongRightArrow: "⟶",
                        looparrowleft: "↫",
                        looparrowright: "↬",
                        lopar: "⦅",
                        lopf: "𝕝",
                        Lopf: "𝕃",
                        loplus: "⨭",
                        lotimes: "⨴",
                        lowast: "∗",
                        lowbar: "_",
                        LowerLeftArrow: "↙",
                        LowerRightArrow: "↘",
                        loz: "◊",
                        lozenge: "◊",
                        lozf: "⧫",
                        lpar: "(",
                        lparlt: "⦓",
                        lrarr: "⇆",
                        lrcorner: "⌟",
                        lrhar: "⇋",
                        lrhard: "⥭",
                        lrm: "‎",
                        lrtri: "⊿",
                        lsaquo: "‹",
                        lscr: "𝓁",
                        Lscr: "ℒ",
                        lsh: "↰",
                        Lsh: "↰",
                        lsim: "≲",
                        lsime: "⪍",
                        lsimg: "⪏",
                        lsqb: "[",
                        lsquo: "‘",
                        lsquor: "‚",
                        lstrok: "ł",
                        Lstrok: "Ł",
                        lt: "<",
                        Lt: "≪",
                        LT: "<",
                        ltcc: "⪦",
                        ltcir: "⩹",
                        ltdot: "⋖",
                        lthree: "⋋",
                        ltimes: "⋉",
                        ltlarr: "⥶",
                        ltquest: "⩻",
                        ltri: "◃",
                        ltrie: "⊴",
                        ltrif: "◂",
                        ltrPar: "⦖",
                        lurdshar: "⥊",
                        luruhar: "⥦",
                        lvertneqq: "≨︀",
                        lvnE: "≨︀",
                        macr: "¯",
                        male: "♂",
                        malt: "✠",
                        maltese: "✠",
                        map: "↦",
                        Map: "⤅",
                        mapsto: "↦",
                        mapstodown: "↧",
                        mapstoleft: "↤",
                        mapstoup: "↥",
                        marker: "▮",
                        mcomma: "⨩",
                        mcy: "м",
                        Mcy: "М",
                        mdash: "—",
                        mDDot: "∺",
                        measuredangle: "∡",
                        MediumSpace: " ",
                        Mellintrf: "ℳ",
                        mfr: "𝔪",
                        Mfr: "𝔐",
                        mho: "℧",
                        micro: "µ",
                        mid: "∣",
                        midast: "*",
                        midcir: "⫰",
                        middot: "·",
                        minus: "−",
                        minusb: "⊟",
                        minusd: "∸",
                        minusdu: "⨪",
                        MinusPlus: "∓",
                        mlcp: "⫛",
                        mldr: "…",
                        mnplus: "∓",
                        models: "⊧",
                        mopf: "𝕞",
                        Mopf: "𝕄",
                        mp: "∓",
                        mscr: "𝓂",
                        Mscr: "ℳ",
                        mstpos: "∾",
                        mu: "μ",
                        Mu: "Μ",
                        multimap: "⊸",
                        mumap: "⊸",
                        nabla: "∇",
                        nacute: "ń",
                        Nacute: "Ń",
                        nang: "∠⃒",
                        nap: "≉",
                        napE: "⩰̸",
                        napid: "≋̸",
                        napos: "ŉ",
                        napprox: "≉",
                        natur: "♮",
                        natural: "♮",
                        naturals: "ℕ",
                        nbsp: " ",
                        nbump: "≎̸",
                        nbumpe: "≏̸",
                        ncap: "⩃",
                        ncaron: "ň",
                        Ncaron: "Ň",
                        ncedil: "ņ",
                        Ncedil: "Ņ",
                        ncong: "≇",
                        ncongdot: "⩭̸",
                        ncup: "⩂",
                        ncy: "н",
                        Ncy: "Н",
                        ndash: "–",
                        ne: "≠",
                        nearhk: "⤤",
                        nearr: "↗",
                        neArr: "⇗",
                        nearrow: "↗",
                        nedot: "≐̸",
                        NegativeMediumSpace: "​",
                        NegativeThickSpace: "​",
                        NegativeThinSpace: "​",
                        NegativeVeryThinSpace: "​",
                        nequiv: "≢",
                        nesear: "⤨",
                        nesim: "≂̸",
                        NestedGreaterGreater: "≫",
                        NestedLessLess: "≪",
                        NewLine: "\n",
                        nexist: "∄",
                        nexists: "∄",
                        nfr: "𝔫",
                        Nfr: "𝔑",
                        nge: "≱",
                        ngE: "≧̸",
                        ngeq: "≱",
                        ngeqq: "≧̸",
                        ngeqslant: "⩾̸",
                        nges: "⩾̸",
                        nGg: "⋙̸",
                        ngsim: "≵",
                        ngt: "≯",
                        nGt: "≫⃒",
                        ngtr: "≯",
                        nGtv: "≫̸",
                        nharr: "↮",
                        nhArr: "⇎",
                        nhpar: "⫲",
                        ni: "∋",
                        nis: "⋼",
                        nisd: "⋺",
                        niv: "∋",
                        njcy: "њ",
                        NJcy: "Њ",
                        nlarr: "↚",
                        nlArr: "⇍",
                        nldr: "‥",
                        nle: "≰",
                        nlE: "≦̸",
                        nleftarrow: "↚",
                        nLeftarrow: "⇍",
                        nleftrightarrow: "↮",
                        nLeftrightarrow: "⇎",
                        nleq: "≰",
                        nleqq: "≦̸",
                        nleqslant: "⩽̸",
                        nles: "⩽̸",
                        nless: "≮",
                        nLl: "⋘̸",
                        nlsim: "≴",
                        nlt: "≮",
                        nLt: "≪⃒",
                        nltri: "⋪",
                        nltrie: "⋬",
                        nLtv: "≪̸",
                        nmid: "∤",
                        NoBreak: "⁠",
                        NonBreakingSpace: " ",
                        nopf: "𝕟",
                        Nopf: "ℕ",
                        not: "¬",
                        Not: "⫬",
                        NotCongruent: "≢",
                        NotCupCap: "≭",
                        NotDoubleVerticalBar: "∦",
                        NotElement: "∉",
                        NotEqual: "≠",
                        NotEqualTilde: "≂̸",
                        NotExists: "∄",
                        NotGreater: "≯",
                        NotGreaterEqual: "≱",
                        NotGreaterFullEqual: "≧̸",
                        NotGreaterGreater: "≫̸",
                        NotGreaterLess: "≹",
                        NotGreaterSlantEqual: "⩾̸",
                        NotGreaterTilde: "≵",
                        NotHumpDownHump: "≎̸",
                        NotHumpEqual: "≏̸",
                        notin: "∉",
                        notindot: "⋵̸",
                        notinE: "⋹̸",
                        notinva: "∉",
                        notinvb: "⋷",
                        notinvc: "⋶",
                        NotLeftTriangle: "⋪",
                        NotLeftTriangleBar: "⧏̸",
                        NotLeftTriangleEqual: "⋬",
                        NotLess: "≮",
                        NotLessEqual: "≰",
                        NotLessGreater: "≸",
                        NotLessLess: "≪̸",
                        NotLessSlantEqual: "⩽̸",
                        NotLessTilde: "≴",
                        NotNestedGreaterGreater: "⪢̸",
                        NotNestedLessLess: "⪡̸",
                        notni: "∌",
                        notniva: "∌",
                        notnivb: "⋾",
                        notnivc: "⋽",
                        NotPrecedes: "⊀",
                        NotPrecedesEqual: "⪯̸",
                        NotPrecedesSlantEqual: "⋠",
                        NotReverseElement: "∌",
                        NotRightTriangle: "⋫",
                        NotRightTriangleBar: "⧐̸",
                        NotRightTriangleEqual: "⋭",
                        NotSquareSubset: "⊏̸",
                        NotSquareSubsetEqual: "⋢",
                        NotSquareSuperset: "⊐̸",
                        NotSquareSupersetEqual: "⋣",
                        NotSubset: "⊂⃒",
                        NotSubsetEqual: "⊈",
                        NotSucceeds: "⊁",
                        NotSucceedsEqual: "⪰̸",
                        NotSucceedsSlantEqual: "⋡",
                        NotSucceedsTilde: "≿̸",
                        NotSuperset: "⊃⃒",
                        NotSupersetEqual: "⊉",
                        NotTilde: "≁",
                        NotTildeEqual: "≄",
                        NotTildeFullEqual: "≇",
                        NotTildeTilde: "≉",
                        NotVerticalBar: "∤",
                        npar: "∦",
                        nparallel: "∦",
                        nparsl: "⫽⃥",
                        npart: "∂̸",
                        npolint: "⨔",
                        npr: "⊀",
                        nprcue: "⋠",
                        npre: "⪯̸",
                        nprec: "⊀",
                        npreceq: "⪯̸",
                        nrarr: "↛",
                        nrArr: "⇏",
                        nrarrc: "⤳̸",
                        nrarrw: "↝̸",
                        nrightarrow: "↛",
                        nRightarrow: "⇏",
                        nrtri: "⋫",
                        nrtrie: "⋭",
                        nsc: "⊁",
                        nsccue: "⋡",
                        nsce: "⪰̸",
                        nscr: "𝓃",
                        Nscr: "𝒩",
                        nshortmid: "∤",
                        nshortparallel: "∦",
                        nsim: "≁",
                        nsime: "≄",
                        nsimeq: "≄",
                        nsmid: "∤",
                        nspar: "∦",
                        nsqsube: "⋢",
                        nsqsupe: "⋣",
                        nsub: "⊄",
                        nsube: "⊈",
                        nsubE: "⫅̸",
                        nsubset: "⊂⃒",
                        nsubseteq: "⊈",
                        nsubseteqq: "⫅̸",
                        nsucc: "⊁",
                        nsucceq: "⪰̸",
                        nsup: "⊅",
                        nsupe: "⊉",
                        nsupE: "⫆̸",
                        nsupset: "⊃⃒",
                        nsupseteq: "⊉",
                        nsupseteqq: "⫆̸",
                        ntgl: "≹",
                        ntilde: "ñ",
                        Ntilde: "Ñ",
                        ntlg: "≸",
                        ntriangleleft: "⋪",
                        ntrianglelefteq: "⋬",
                        ntriangleright: "⋫",
                        ntrianglerighteq: "⋭",
                        nu: "ν",
                        Nu: "Ν",
                        num: "#",
                        numero: "№",
                        numsp: " ",
                        nvap: "≍⃒",
                        nvdash: "⊬",
                        nvDash: "⊭",
                        nVdash: "⊮",
                        nVDash: "⊯",
                        nvge: "≥⃒",
                        nvgt: ">⃒",
                        nvHarr: "⤄",
                        nvinfin: "⧞",
                        nvlArr: "⤂",
                        nvle: "≤⃒",
                        nvlt: "<⃒",
                        nvltrie: "⊴⃒",
                        nvrArr: "⤃",
                        nvrtrie: "⊵⃒",
                        nvsim: "∼⃒",
                        nwarhk: "⤣",
                        nwarr: "↖",
                        nwArr: "⇖",
                        nwarrow: "↖",
                        nwnear: "⤧",
                        oacute: "ó",
                        Oacute: "Ó",
                        oast: "⊛",
                        ocir: "⊚",
                        ocirc: "ô",
                        Ocirc: "Ô",
                        ocy: "о",
                        Ocy: "О",
                        odash: "⊝",
                        odblac: "ő",
                        Odblac: "Ő",
                        odiv: "⨸",
                        odot: "⊙",
                        odsold: "⦼",
                        oelig: "œ",
                        OElig: "Œ",
                        ofcir: "⦿",
                        ofr: "𝔬",
                        Ofr: "𝔒",
                        ogon: "˛",
                        ograve: "ò",
                        Ograve: "Ò",
                        ogt: "⧁",
                        ohbar: "⦵",
                        ohm: "Ω",
                        oint: "∮",
                        olarr: "↺",
                        olcir: "⦾",
                        olcross: "⦻",
                        oline: "‾",
                        olt: "⧀",
                        omacr: "ō",
                        Omacr: "Ō",
                        omega: "ω",
                        Omega: "Ω",
                        omicron: "ο",
                        Omicron: "Ο",
                        omid: "⦶",
                        ominus: "⊖",
                        oopf: "𝕠",
                        Oopf: "𝕆",
                        opar: "⦷",
                        OpenCurlyDoubleQuote: "“",
                        OpenCurlyQuote: "‘",
                        operp: "⦹",
                        oplus: "⊕",
                        or: "∨",
                        Or: "⩔",
                        orarr: "↻",
                        ord: "⩝",
                        order: "ℴ",
                        orderof: "ℴ",
                        ordf: "ª",
                        ordm: "º",
                        origof: "⊶",
                        oror: "⩖",
                        orslope: "⩗",
                        orv: "⩛",
                        oS: "Ⓢ",
                        oscr: "ℴ",
                        Oscr: "𝒪",
                        oslash: "ø",
                        Oslash: "Ø",
                        osol: "⊘",
                        otilde: "õ",
                        Otilde: "Õ",
                        otimes: "⊗",
                        Otimes: "⨷",
                        otimesas: "⨶",
                        ouml: "ö",
                        Ouml: "Ö",
                        ovbar: "⌽",
                        OverBar: "‾",
                        OverBrace: "⏞",
                        OverBracket: "⎴",
                        OverParenthesis: "⏜",
                        par: "∥",
                        para: "¶",
                        parallel: "∥",
                        parsim: "⫳",
                        parsl: "⫽",
                        part: "∂",
                        PartialD: "∂",
                        pcy: "п",
                        Pcy: "П",
                        percnt: "%",
                        period: ".",
                        permil: "‰",
                        perp: "⊥",
                        pertenk: "‱",
                        pfr: "𝔭",
                        Pfr: "𝔓",
                        phi: "φ",
                        Phi: "Φ",
                        phiv: "ϕ",
                        phmmat: "ℳ",
                        phone: "☎",
                        pi: "π",
                        Pi: "Π",
                        pitchfork: "⋔",
                        piv: "ϖ",
                        planck: "ℏ",
                        planckh: "ℎ",
                        plankv: "ℏ",
                        plus: "+",
                        plusacir: "⨣",
                        plusb: "⊞",
                        pluscir: "⨢",
                        plusdo: "∔",
                        plusdu: "⨥",
                        pluse: "⩲",
                        PlusMinus: "±",
                        plusmn: "±",
                        plussim: "⨦",
                        plustwo: "⨧",
                        pm: "±",
                        Poincareplane: "ℌ",
                        pointint: "⨕",
                        popf: "𝕡",
                        Popf: "ℙ",
                        pound: "£",
                        pr: "≺",
                        Pr: "⪻",
                        prap: "⪷",
                        prcue: "≼",
                        pre: "⪯",
                        prE: "⪳",
                        prec: "≺",
                        precapprox: "⪷",
                        preccurlyeq: "≼",
                        Precedes: "≺",
                        PrecedesEqual: "⪯",
                        PrecedesSlantEqual: "≼",
                        PrecedesTilde: "≾",
                        preceq: "⪯",
                        precnapprox: "⪹",
                        precneqq: "⪵",
                        precnsim: "⋨",
                        precsim: "≾",
                        prime: "′",
                        Prime: "″",
                        primes: "ℙ",
                        prnap: "⪹",
                        prnE: "⪵",
                        prnsim: "⋨",
                        prod: "∏",
                        Product: "∏",
                        profalar: "⌮",
                        profline: "⌒",
                        profsurf: "⌓",
                        prop: "∝",
                        Proportion: "∷",
                        Proportional: "∝",
                        propto: "∝",
                        prsim: "≾",
                        prurel: "⊰",
                        pscr: "𝓅",
                        Pscr: "𝒫",
                        psi: "ψ",
                        Psi: "Ψ",
                        puncsp: " ",
                        qfr: "𝔮",
                        Qfr: "𝔔",
                        qint: "⨌",
                        qopf: "𝕢",
                        Qopf: "ℚ",
                        qprime: "⁗",
                        qscr: "𝓆",
                        Qscr: "𝒬",
                        quaternions: "ℍ",
                        quatint: "⨖",
                        quest: "?",
                        questeq: "≟",
                        quot: '"',
                        QUOT: '"',
                        rAarr: "⇛",
                        race: "∽̱",
                        racute: "ŕ",
                        Racute: "Ŕ",
                        radic: "√",
                        raemptyv: "⦳",
                        rang: "⟩",
                        Rang: "⟫",
                        rangd: "⦒",
                        range: "⦥",
                        rangle: "⟩",
                        raquo: "»",
                        rarr: "→",
                        rArr: "⇒",
                        Rarr: "↠",
                        rarrap: "⥵",
                        rarrb: "⇥",
                        rarrbfs: "⤠",
                        rarrc: "⤳",
                        rarrfs: "⤞",
                        rarrhk: "↪",
                        rarrlp: "↬",
                        rarrpl: "⥅",
                        rarrsim: "⥴",
                        rarrtl: "↣",
                        Rarrtl: "⤖",
                        rarrw: "↝",
                        ratail: "⤚",
                        rAtail: "⤜",
                        ratio: "∶",
                        rationals: "ℚ",
                        rbarr: "⤍",
                        rBarr: "⤏",
                        RBarr: "⤐",
                        rbbrk: "❳",
                        rbrace: "}",
                        rbrack: "]",
                        rbrke: "⦌",
                        rbrksld: "⦎",
                        rbrkslu: "⦐",
                        rcaron: "ř",
                        Rcaron: "Ř",
                        rcedil: "ŗ",
                        Rcedil: "Ŗ",
                        rceil: "⌉",
                        rcub: "}",
                        rcy: "р",
                        Rcy: "Р",
                        rdca: "⤷",
                        rdldhar: "⥩",
                        rdquo: "”",
                        rdquor: "”",
                        rdsh: "↳",
                        Re: "ℜ",
                        real: "ℜ",
                        realine: "ℛ",
                        realpart: "ℜ",
                        reals: "ℝ",
                        rect: "▭",
                        reg: "®",
                        REG: "®",
                        ReverseElement: "∋",
                        ReverseEquilibrium: "⇋",
                        ReverseUpEquilibrium: "⥯",
                        rfisht: "⥽",
                        rfloor: "⌋",
                        rfr: "𝔯",
                        Rfr: "ℜ",
                        rHar: "⥤",
                        rhard: "⇁",
                        rharu: "⇀",
                        rharul: "⥬",
                        rho: "ρ",
                        Rho: "Ρ",
                        rhov: "ϱ",
                        RightAngleBracket: "⟩",
                        rightarrow: "→",
                        Rightarrow: "⇒",
                        RightArrow: "→",
                        RightArrowBar: "⇥",
                        RightArrowLeftArrow: "⇄",
                        rightarrowtail: "↣",
                        RightCeiling: "⌉",
                        RightDoubleBracket: "⟧",
                        RightDownTeeVector: "⥝",
                        RightDownVector: "⇂",
                        RightDownVectorBar: "⥕",
                        RightFloor: "⌋",
                        rightharpoondown: "⇁",
                        rightharpoonup: "⇀",
                        rightleftarrows: "⇄",
                        rightleftharpoons: "⇌",
                        rightrightarrows: "⇉",
                        rightsquigarrow: "↝",
                        RightTee: "⊢",
                        RightTeeArrow: "↦",
                        RightTeeVector: "⥛",
                        rightthreetimes: "⋌",
                        RightTriangle: "⊳",
                        RightTriangleBar: "⧐",
                        RightTriangleEqual: "⊵",
                        RightUpDownVector: "⥏",
                        RightUpTeeVector: "⥜",
                        RightUpVector: "↾",
                        RightUpVectorBar: "⥔",
                        RightVector: "⇀",
                        RightVectorBar: "⥓",
                        ring: "˚",
                        risingdotseq: "≓",
                        rlarr: "⇄",
                        rlhar: "⇌",
                        rlm: "‏",
                        rmoust: "⎱",
                        rmoustache: "⎱",
                        rnmid: "⫮",
                        roang: "⟭",
                        roarr: "⇾",
                        robrk: "⟧",
                        ropar: "⦆",
                        ropf: "𝕣",
                        Ropf: "ℝ",
                        roplus: "⨮",
                        rotimes: "⨵",
                        RoundImplies: "⥰",
                        rpar: ")",
                        rpargt: "⦔",
                        rppolint: "⨒",
                        rrarr: "⇉",
                        Rrightarrow: "⇛",
                        rsaquo: "›",
                        rscr: "𝓇",
                        Rscr: "ℛ",
                        rsh: "↱",
                        Rsh: "↱",
                        rsqb: "]",
                        rsquo: "’",
                        rsquor: "’",
                        rthree: "⋌",
                        rtimes: "⋊",
                        rtri: "▹",
                        rtrie: "⊵",
                        rtrif: "▸",
                        rtriltri: "⧎",
                        RuleDelayed: "⧴",
                        ruluhar: "⥨",
                        rx: "℞",
                        sacute: "ś",
                        Sacute: "Ś",
                        sbquo: "‚",
                        sc: "≻",
                        Sc: "⪼",
                        scap: "⪸",
                        scaron: "š",
                        Scaron: "Š",
                        sccue: "≽",
                        sce: "⪰",
                        scE: "⪴",
                        scedil: "ş",
                        Scedil: "Ş",
                        scirc: "ŝ",
                        Scirc: "Ŝ",
                        scnap: "⪺",
                        scnE: "⪶",
                        scnsim: "⋩",
                        scpolint: "⨓",
                        scsim: "≿",
                        scy: "с",
                        Scy: "С",
                        sdot: "⋅",
                        sdotb: "⊡",
                        sdote: "⩦",
                        searhk: "⤥",
                        searr: "↘",
                        seArr: "⇘",
                        searrow: "↘",
                        sect: "§",
                        semi: ";",
                        seswar: "⤩",
                        setminus: "∖",
                        setmn: "∖",
                        sext: "✶",
                        sfr: "𝔰",
                        Sfr: "𝔖",
                        sfrown: "⌢",
                        sharp: "♯",
                        shchcy: "щ",
                        SHCHcy: "Щ",
                        shcy: "ш",
                        SHcy: "Ш",
                        ShortDownArrow: "↓",
                        ShortLeftArrow: "←",
                        shortmid: "∣",
                        shortparallel: "∥",
                        ShortRightArrow: "→",
                        ShortUpArrow: "↑",
                        shy: "­",
                        sigma: "σ",
                        Sigma: "Σ",
                        sigmaf: "ς",
                        sigmav: "ς",
                        sim: "∼",
                        simdot: "⩪",
                        sime: "≃",
                        simeq: "≃",
                        simg: "⪞",
                        simgE: "⪠",
                        siml: "⪝",
                        simlE: "⪟",
                        simne: "≆",
                        simplus: "⨤",
                        simrarr: "⥲",
                        slarr: "←",
                        SmallCircle: "∘",
                        smallsetminus: "∖",
                        smashp: "⨳",
                        smeparsl: "⧤",
                        smid: "∣",
                        smile: "⌣",
                        smt: "⪪",
                        smte: "⪬",
                        smtes: "⪬︀",
                        softcy: "ь",
                        SOFTcy: "Ь",
                        sol: "/",
                        solb: "⧄",
                        solbar: "⌿",
                        sopf: "𝕤",
                        Sopf: "𝕊",
                        spades: "♠",
                        spadesuit: "♠",
                        spar: "∥",
                        sqcap: "⊓",
                        sqcaps: "⊓︀",
                        sqcup: "⊔",
                        sqcups: "⊔︀",
                        Sqrt: "√",
                        sqsub: "⊏",
                        sqsube: "⊑",
                        sqsubset: "⊏",
                        sqsubseteq: "⊑",
                        sqsup: "⊐",
                        sqsupe: "⊒",
                        sqsupset: "⊐",
                        sqsupseteq: "⊒",
                        squ: "□",
                        square: "□",
                        Square: "□",
                        SquareIntersection: "⊓",
                        SquareSubset: "⊏",
                        SquareSubsetEqual: "⊑",
                        SquareSuperset: "⊐",
                        SquareSupersetEqual: "⊒",
                        SquareUnion: "⊔",
                        squarf: "▪",
                        squf: "▪",
                        srarr: "→",
                        sscr: "𝓈",
                        Sscr: "𝒮",
                        ssetmn: "∖",
                        ssmile: "⌣",
                        sstarf: "⋆",
                        star: "☆",
                        Star: "⋆",
                        starf: "★",
                        straightepsilon: "ϵ",
                        straightphi: "ϕ",
                        strns: "¯",
                        sub: "⊂",
                        Sub: "⋐",
                        subdot: "⪽",
                        sube: "⊆",
                        subE: "⫅",
                        subedot: "⫃",
                        submult: "⫁",
                        subne: "⊊",
                        subnE: "⫋",
                        subplus: "⪿",
                        subrarr: "⥹",
                        subset: "⊂",
                        Subset: "⋐",
                        subseteq: "⊆",
                        subseteqq: "⫅",
                        SubsetEqual: "⊆",
                        subsetneq: "⊊",
                        subsetneqq: "⫋",
                        subsim: "⫇",
                        subsub: "⫕",
                        subsup: "⫓",
                        succ: "≻",
                        succapprox: "⪸",
                        succcurlyeq: "≽",
                        Succeeds: "≻",
                        SucceedsEqual: "⪰",
                        SucceedsSlantEqual: "≽",
                        SucceedsTilde: "≿",
                        succeq: "⪰",
                        succnapprox: "⪺",
                        succneqq: "⪶",
                        succnsim: "⋩",
                        succsim: "≿",
                        SuchThat: "∋",
                        sum: "∑",
                        Sum: "∑",
                        sung: "♪",
                        sup: "⊃",
                        Sup: "⋑",
                        sup1: "¹",
                        sup2: "²",
                        sup3: "³",
                        supdot: "⪾",
                        supdsub: "⫘",
                        supe: "⊇",
                        supE: "⫆",
                        supedot: "⫄",
                        Superset: "⊃",
                        SupersetEqual: "⊇",
                        suphsol: "⟉",
                        suphsub: "⫗",
                        suplarr: "⥻",
                        supmult: "⫂",
                        supne: "⊋",
                        supnE: "⫌",
                        supplus: "⫀",
                        supset: "⊃",
                        Supset: "⋑",
                        supseteq: "⊇",
                        supseteqq: "⫆",
                        supsetneq: "⊋",
                        supsetneqq: "⫌",
                        supsim: "⫈",
                        supsub: "⫔",
                        supsup: "⫖",
                        swarhk: "⤦",
                        swarr: "↙",
                        swArr: "⇙",
                        swarrow: "↙",
                        swnwar: "⤪",
                        szlig: "ß",
                        Tab: "\t",
                        target: "⌖",
                        tau: "τ",
                        Tau: "Τ",
                        tbrk: "⎴",
                        tcaron: "ť",
                        Tcaron: "Ť",
                        tcedil: "ţ",
                        Tcedil: "Ţ",
                        tcy: "т",
                        Tcy: "Т",
                        tdot: "⃛",
                        telrec: "⌕",
                        tfr: "𝔱",
                        Tfr: "𝔗",
                        there4: "∴",
                        therefore: "∴",
                        Therefore: "∴",
                        theta: "θ",
                        Theta: "Θ",
                        thetasym: "ϑ",
                        thetav: "ϑ",
                        thickapprox: "≈",
                        thicksim: "∼",
                        ThickSpace: "  ",
                        thinsp: " ",
                        ThinSpace: " ",
                        thkap: "≈",
                        thksim: "∼",
                        thorn: "þ",
                        THORN: "Þ",
                        tilde: "˜",
                        Tilde: "∼",
                        TildeEqual: "≃",
                        TildeFullEqual: "≅",
                        TildeTilde: "≈",
                        times: "×",
                        timesb: "⊠",
                        timesbar: "⨱",
                        timesd: "⨰",
                        tint: "∭",
                        toea: "⤨",
                        top: "⊤",
                        topbot: "⌶",
                        topcir: "⫱",
                        topf: "𝕥",
                        Topf: "𝕋",
                        topfork: "⫚",
                        tosa: "⤩",
                        tprime: "‴",
                        trade: "™",
                        TRADE: "™",
                        triangle: "▵",
                        triangledown: "▿",
                        triangleleft: "◃",
                        trianglelefteq: "⊴",
                        triangleq: "≜",
                        triangleright: "▹",
                        trianglerighteq: "⊵",
                        tridot: "◬",
                        trie: "≜",
                        triminus: "⨺",
                        TripleDot: "⃛",
                        triplus: "⨹",
                        trisb: "⧍",
                        tritime: "⨻",
                        trpezium: "⏢",
                        tscr: "𝓉",
                        Tscr: "𝒯",
                        tscy: "ц",
                        TScy: "Ц",
                        tshcy: "ћ",
                        TSHcy: "Ћ",
                        tstrok: "ŧ",
                        Tstrok: "Ŧ",
                        twixt: "≬",
                        twoheadleftarrow: "↞",
                        twoheadrightarrow: "↠",
                        uacute: "ú",
                        Uacute: "Ú",
                        uarr: "↑",
                        uArr: "⇑",
                        Uarr: "↟",
                        Uarrocir: "⥉",
                        ubrcy: "ў",
                        Ubrcy: "Ў",
                        ubreve: "ŭ",
                        Ubreve: "Ŭ",
                        ucirc: "û",
                        Ucirc: "Û",
                        ucy: "у",
                        Ucy: "У",
                        udarr: "⇅",
                        udblac: "ű",
                        Udblac: "Ű",
                        udhar: "⥮",
                        ufisht: "⥾",
                        ufr: "𝔲",
                        Ufr: "𝔘",
                        ugrave: "ù",
                        Ugrave: "Ù",
                        uHar: "⥣",
                        uharl: "↿",
                        uharr: "↾",
                        uhblk: "▀",
                        ulcorn: "⌜",
                        ulcorner: "⌜",
                        ulcrop: "⌏",
                        ultri: "◸",
                        umacr: "ū",
                        Umacr: "Ū",
                        uml: "¨",
                        UnderBar: "_",
                        UnderBrace: "⏟",
                        UnderBracket: "⎵",
                        UnderParenthesis: "⏝",
                        Union: "⋃",
                        UnionPlus: "⊎",
                        uogon: "ų",
                        Uogon: "Ų",
                        uopf: "𝕦",
                        Uopf: "𝕌",
                        uparrow: "↑",
                        Uparrow: "⇑",
                        UpArrow: "↑",
                        UpArrowBar: "⤒",
                        UpArrowDownArrow: "⇅",
                        updownarrow: "↕",
                        Updownarrow: "⇕",
                        UpDownArrow: "↕",
                        UpEquilibrium: "⥮",
                        upharpoonleft: "↿",
                        upharpoonright: "↾",
                        uplus: "⊎",
                        UpperLeftArrow: "↖",
                        UpperRightArrow: "↗",
                        upsi: "υ",
                        Upsi: "ϒ",
                        upsih: "ϒ",
                        upsilon: "υ",
                        Upsilon: "Υ",
                        UpTee: "⊥",
                        UpTeeArrow: "↥",
                        upuparrows: "⇈",
                        urcorn: "⌝",
                        urcorner: "⌝",
                        urcrop: "⌎",
                        uring: "ů",
                        Uring: "Ů",
                        urtri: "◹",
                        uscr: "𝓊",
                        Uscr: "𝒰",
                        utdot: "⋰",
                        utilde: "ũ",
                        Utilde: "Ũ",
                        utri: "▵",
                        utrif: "▴",
                        uuarr: "⇈",
                        uuml: "ü",
                        Uuml: "Ü",
                        uwangle: "⦧",
                        vangrt: "⦜",
                        varepsilon: "ϵ",
                        varkappa: "ϰ",
                        varnothing: "∅",
                        varphi: "ϕ",
                        varpi: "ϖ",
                        varpropto: "∝",
                        varr: "↕",
                        vArr: "⇕",
                        varrho: "ϱ",
                        varsigma: "ς",
                        varsubsetneq: "⊊︀",
                        varsubsetneqq: "⫋︀",
                        varsupsetneq: "⊋︀",
                        varsupsetneqq: "⫌︀",
                        vartheta: "ϑ",
                        vartriangleleft: "⊲",
                        vartriangleright: "⊳",
                        vBar: "⫨",
                        Vbar: "⫫",
                        vBarv: "⫩",
                        vcy: "в",
                        Vcy: "В",
                        vdash: "⊢",
                        vDash: "⊨",
                        Vdash: "⊩",
                        VDash: "⊫",
                        Vdashl: "⫦",
                        vee: "∨",
                        Vee: "⋁",
                        veebar: "⊻",
                        veeeq: "≚",
                        vellip: "⋮",
                        verbar: "|",
                        Verbar: "‖",
                        vert: "|",
                        Vert: "‖",
                        VerticalBar: "∣",
                        VerticalLine: "|",
                        VerticalSeparator: "❘",
                        VerticalTilde: "≀",
                        VeryThinSpace: " ",
                        vfr: "𝔳",
                        Vfr: "𝔙",
                        vltri: "⊲",
                        vnsub: "⊂⃒",
                        vnsup: "⊃⃒",
                        vopf: "𝕧",
                        Vopf: "𝕍",
                        vprop: "∝",
                        vrtri: "⊳",
                        vscr: "𝓋",
                        Vscr: "𝒱",
                        vsubne: "⊊︀",
                        vsubnE: "⫋︀",
                        vsupne: "⊋︀",
                        vsupnE: "⫌︀",
                        Vvdash: "⊪",
                        vzigzag: "⦚",
                        wcirc: "ŵ",
                        Wcirc: "Ŵ",
                        wedbar: "⩟",
                        wedge: "∧",
                        Wedge: "⋀",
                        wedgeq: "≙",
                        weierp: "℘",
                        wfr: "𝔴",
                        Wfr: "𝔚",
                        wopf: "𝕨",
                        Wopf: "𝕎",
                        wp: "℘",
                        wr: "≀",
                        wreath: "≀",
                        wscr: "𝓌",
                        Wscr: "𝒲",
                        xcap: "⋂",
                        xcirc: "◯",
                        xcup: "⋃",
                        xdtri: "▽",
                        xfr: "𝔵",
                        Xfr: "𝔛",
                        xharr: "⟷",
                        xhArr: "⟺",
                        xi: "ξ",
                        Xi: "Ξ",
                        xlarr: "⟵",
                        xlArr: "⟸",
                        xmap: "⟼",
                        xnis: "⋻",
                        xodot: "⨀",
                        xopf: "𝕩",
                        Xopf: "𝕏",
                        xoplus: "⨁",
                        xotime: "⨂",
                        xrarr: "⟶",
                        xrArr: "⟹",
                        xscr: "𝓍",
                        Xscr: "𝒳",
                        xsqcup: "⨆",
                        xuplus: "⨄",
                        xutri: "△",
                        xvee: "⋁",
                        xwedge: "⋀",
                        yacute: "ý",
                        Yacute: "Ý",
                        yacy: "я",
                        YAcy: "Я",
                        ycirc: "ŷ",
                        Ycirc: "Ŷ",
                        ycy: "ы",
                        Ycy: "Ы",
                        yen: "¥",
                        yfr: "𝔶",
                        Yfr: "𝔜",
                        yicy: "ї",
                        YIcy: "Ї",
                        yopf: "𝕪",
                        Yopf: "𝕐",
                        yscr: "𝓎",
                        Yscr: "𝒴",
                        yucy: "ю",
                        YUcy: "Ю",
                        yuml: "ÿ",
                        Yuml: "Ÿ",
                        zacute: "ź",
                        Zacute: "Ź",
                        zcaron: "ž",
                        Zcaron: "Ž",
                        zcy: "з",
                        Zcy: "З",
                        zdot: "ż",
                        Zdot: "Ż",
                        zeetrf: "ℨ",
                        ZeroWidthSpace: "​",
                        zeta: "ζ",
                        Zeta: "Ζ",
                        zfr: "𝔷",
                        Zfr: "ℨ",
                        zhcy: "ж",
                        ZHcy: "Ж",
                        zigrarr: "⇝",
                        zopf: "𝕫",
                        Zopf: "ℤ",
                        zscr: "𝓏",
                        Zscr: "𝒵",
                        zwj: "‍",
                        zwnj: "‌"
                    },
                    b = {
                        aacute: "á",
                        Aacute: "Á",
                        acirc: "â",
                        Acirc: "Â",
                        acute: "´",
                        aelig: "æ",
                        AElig: "Æ",
                        agrave: "à",
                        Agrave: "À",
                        amp: "&",
                        AMP: "&",
                        aring: "å",
                        Aring: "Å",
                        atilde: "ã",
                        Atilde: "Ã",
                        auml: "ä",
                        Auml: "Ä",
                        brvbar: "¦",
                        ccedil: "ç",
                        Ccedil: "Ç",
                        cedil: "¸",
                        cent: "¢",
                        copy: "©",
                        COPY: "©",
                        curren: "¤",
                        deg: "°",
                        divide: "÷",
                        eacute: "é",
                        Eacute: "É",
                        ecirc: "ê",
                        Ecirc: "Ê",
                        egrave: "è",
                        Egrave: "È",
                        eth: "ð",
                        ETH: "Ð",
                        euml: "ë",
                        Euml: "Ë",
                        frac12: "½",
                        frac14: "¼",
                        frac34: "¾",
                        gt: ">",
                        GT: ">",
                        iacute: "í",
                        Iacute: "Í",
                        icirc: "î",
                        Icirc: "Î",
                        iexcl: "¡",
                        igrave: "ì",
                        Igrave: "Ì",
                        iquest: "¿",
                        iuml: "ï",
                        Iuml: "Ï",
                        laquo: "«",
                        lt: "<",
                        LT: "<",
                        macr: "¯",
                        micro: "µ",
                        middot: "·",
                        nbsp: " ",
                        not: "¬",
                        ntilde: "ñ",
                        Ntilde: "Ñ",
                        oacute: "ó",
                        Oacute: "Ó",
                        ocirc: "ô",
                        Ocirc: "Ô",
                        ograve: "ò",
                        Ograve: "Ò",
                        ordf: "ª",
                        ordm: "º",
                        oslash: "ø",
                        Oslash: "Ø",
                        otilde: "õ",
                        Otilde: "Õ",
                        ouml: "ö",
                        Ouml: "Ö",
                        para: "¶",
                        plusmn: "±",
                        pound: "£",
                        quot: '"',
                        QUOT: '"',
                        raquo: "»",
                        reg: "®",
                        REG: "®",
                        sect: "§",
                        shy: "­",
                        sup1: "¹",
                        sup2: "²",
                        sup3: "³",
                        szlig: "ß",
                        thorn: "þ",
                        THORN: "Þ",
                        times: "×",
                        uacute: "ú",
                        Uacute: "Ú",
                        ucirc: "û",
                        Ucirc: "Û",
                        ugrave: "ù",
                        Ugrave: "Ù",
                        uml: "¨",
                        uuml: "ü",
                        Uuml: "Ü",
                        yacute: "ý",
                        Yacute: "Ý",
                        yen: "¥",
                        yuml: "ÿ"
                    },
                    y = {
                        0: "�",
                        128: "€",
                        130: "‚",
                        131: "ƒ",
                        132: "„",
                        133: "…",
                        134: "†",
                        135: "‡",
                        136: "ˆ",
                        137: "‰",
                        138: "Š",
                        139: "‹",
                        140: "Œ",
                        142: "Ž",
                        145: "‘",
                        146: "’",
                        147: "“",
                        148: "”",
                        149: "•",
                        150: "–",
                        151: "—",
                        152: "˜",
                        153: "™",
                        154: "š",
                        155: "›",
                        156: "œ",
                        158: "ž",
                        159: "Ÿ"
                    },
                    w = [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976, 64977, 64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987, 64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996, 64997, 64998, 64999, 65e3, 65001, 65002, 65003, 65004, 65005, 65006, 65007, 65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111],
                    _ = String.fromCharCode,
                    x = {}.hasOwnProperty,
                    E = function (t, e) {
                        return x.call(t, e)
                    },
                    T = function (t, e) {
                        if (!t) return e;
                        var r, n = {};
                        for (r in e) n[r] = E(t, r) ? t[r] : e[r];
                        return n
                    },
                    A = function (t, e) {
                        var r = "";
                        return t >= 55296 && t <= 57343 || t > 1114111 ? (e && k("character reference outside the permissible Unicode range"), "�") : E(y, t) ? (e && k("disallowed character reference"), y[t]) : (e && function (t, e) {
                            for (var r = -1, n = t.length; ++r < n;)
                                if (t[r] == e) return !0;
                            return !1
                        }(w, t) && k("disallowed character reference"), t > 65535 && (r += _((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), r += _(t))
                    },
                    D = function (t) {
                        return "&#x" + t.toString(16).toUpperCase() + ";"
                    },
                    q = function (t) {
                        return "&#" + t + ";"
                    },
                    k = function (t) {
                        throw Error("Parse error: " + t)
                    },
                    L = function (t, e) {
                        (e = T(e, L.options)).strict && g.test(t) && k("forbidden code point");
                        var r = e.encodeEverything,
                            n = e.useNamedReferences,
                            i = e.allowUnsafeSymbols,
                            o = e.decimal ? q : D,
                            s = function (t) {
                                return o(t.charCodeAt(0))
                            };
                        return r ? (t = t.replace(u, (function (t) {
                            return n && E(h, t) ? "&" + h[t] + ";" : s(t)
                        })), n && (t = t.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;").replace(/&#x66;&#x6A;/g, "&fjlig;")), n && (t = t.replace(l, (function (t) {
                            return "&" + h[t] + ";"
                        })))) : n ? (i || (t = t.replace(p, (function (t) {
                            return "&" + h[t] + ";"
                        }))), t = (t = t.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;")).replace(l, (function (t) {
                            return "&" + h[t] + ";"
                        }))) : i || (t = t.replace(p, s)), t.replace(a, (function (t) {
                            var e = t.charCodeAt(0),
                                r = t.charCodeAt(1);
                            return o(1024 * (e - 55296) + r - 56320 + 65536)
                        })).replace(c, s)
                    };
                L.options = {
                    allowUnsafeSymbols: !1,
                    encodeEverything: !1,
                    strict: !1,
                    useNamedReferences: !1,
                    decimal: !1
                };
                var S = function (t, e) {
                    var r = (e = T(e, S.options)).strict;
                    return r && d.test(t) && k("malformed character reference"), t.replace(m, (function (t, n, i, o, s, a, u, c, l) {
                        var h, p, f, d, g, m;
                        return n ? v[g = n] : i ? (g = i, (m = o) && e.isAttributeValue ? (r && "=" == m && k("`&` did not start a character reference"), t) : (r && k("named character reference was not terminated by a semicolon"), b[g] + (m || ""))) : s ? (f = s, p = a, r && !p && k("character reference was not terminated by a semicolon"), h = parseInt(f, 10), A(h, r)) : u ? (d = u, p = c, r && !p && k("character reference was not terminated by a semicolon"), h = parseInt(d, 16), A(h, r)) : (r && k("named character reference was not terminated by a semicolon"), t)
                    }))
                };
                S.options = {
                    isAttributeValue: !1,
                    strict: !1
                };
                var C = {
                    version: "1.2.0",
                    encode: L,
                    decode: S,
                    escape: function (t) {
                        return t.replace(p, (function (t) {
                            return f[t]
                        }))
                    },
                    unescape: S
                };
                void 0 === (i = function () {
                    return C
                }.call(e, r, e, t)) || (t.exports = i)
            }()
        }).call(this, r(115)(t), r(116))
    }, function (t, e, r) {
        "use strict";
        (function (e) {
            var n = r(5),
                i = r(101),
                o = {
                    "Content-Type": "application/x-www-form-urlencoded"
                };

            function s(t, e) {
                !n.isUndefined(t) && n.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
            }
            var a, u = {
                adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== e) && (a = r(18)), a),
                transformRequest: [function (t, e) {
                    return i(e, "Content-Type"), n.isFormData(t) || n.isArrayBuffer(t) || n.isBuffer(t) || n.isStream(t) || n.isFile(t) || n.isBlob(t) ? t : n.isArrayBufferView(t) ? t.buffer : n.isURLSearchParams(t) ? (s(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : n.isObject(t) ? (s(e, "application/json;charset=utf-8"), JSON.stringify(t)) : t
                }],
                transformResponse: [function (t) {
                    if ("string" == typeof t) try {
                        t = JSON.parse(t)
                    } catch (t) {}
                    return t
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                validateStatus: function (t) {
                    return t >= 200 && t < 300
                },
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    }
                }
            };
            n.forEach(["delete", "get", "head"], (function (t) {
                u.headers[t] = {}
            })), n.forEach(["post", "put", "patch"], (function (t) {
                u.headers[t] = n.merge(o)
            })), t.exports = u
        }).call(this, r(100))
    }, function (t, e) {
        t.exports = function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }, t.exports.default = t.exports, t.exports.__esModule = !0
    }, function (t, e, r) {
        var n = r(96).default,
            i = r(12);
        t.exports = function (t, e) {
            return !e || "object" !== n(e) && "function" != typeof e ? i(t) : e
        }, t.exports.default = t.exports, t.exports.__esModule = !0
    }, function (t, e) {
        function r(e) {
            return t.exports = r = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }, t.exports.default = t.exports, t.exports.__esModule = !0, r(e)
        }
        t.exports = r, t.exports.default = t.exports, t.exports.__esModule = !0
    }, function (t, e, r) {
        var n = r(117),
            i = r(118),
            o = r(119),
            s = r(120);
        t.exports = function (t) {
            return n(t) || i(t) || o(t) || s()
        }, t.exports.default = t.exports, t.exports.__esModule = !0
    }, , function (t, e, r) {
        "use strict";
        t.exports = function (t, e) {
            return function () {
                for (var r = new Array(arguments.length), n = 0; n < r.length; n++) r[n] = arguments[n];
                return t.apply(e, r)
            }
        }
    }, function (t, e, r) {
        "use strict";
        var n = r(5),
            i = r(102),
            o = r(104),
            s = r(105),
            a = r(106),
            u = r(19);
        t.exports = function (t) {
            return new Promise((function (e, c) {
                var l = t.data,
                    h = t.headers;
                n.isFormData(l) && delete h["Content-Type"];
                var p = new XMLHttpRequest;
                if (t.auth) {
                    var f = t.auth.username || "",
                        d = t.auth.password || "";
                    h.Authorization = "Basic " + btoa(f + ":" + d)
                }
                if (p.open(t.method.toUpperCase(), o(t.url, t.params, t.paramsSerializer), !0), p.timeout = t.timeout, p.onreadystatechange = function () {
                        if (p && 4 === p.readyState && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                            var r = "getAllResponseHeaders" in p ? s(p.getAllResponseHeaders()) : null,
                                n = {
                                    data: t.responseType && "text" !== t.responseType ? p.response : p.responseText,
                                    status: p.status,
                                    statusText: p.statusText,
                                    headers: r,
                                    config: t,
                                    request: p
                                };
                            i(e, c, n), p = null
                        }
                    }, p.onerror = function () {
                        c(u("Network Error", t, null, p)), p = null
                    }, p.ontimeout = function () {
                        c(u("timeout of " + t.timeout + "ms exceeded", t, "ECONNABORTED", p)), p = null
                    }, n.isStandardBrowserEnv()) {
                    var g = r(107),
                        m = (t.withCredentials || a(t.url)) && t.xsrfCookieName ? g.read(t.xsrfCookieName) : void 0;
                    m && (h[t.xsrfHeaderName] = m)
                }
                if ("setRequestHeader" in p && n.forEach(h, (function (t, e) {
                        void 0 === l && "content-type" === e.toLowerCase() ? delete h[e] : p.setRequestHeader(e, t)
                    })), t.withCredentials && (p.withCredentials = !0), t.responseType) try {
                    p.responseType = t.responseType
                } catch (e) {
                    if ("json" !== t.responseType) throw e
                }
                "function" == typeof t.onDownloadProgress && p.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && p.upload && p.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then((function (t) {
                    p && (p.abort(), c(t), p = null)
                })), void 0 === l && (l = null), p.send(l)
            }))
        }
    }, function (t, e, r) {
        "use strict";
        var n = r(103);
        t.exports = function (t, e, r, i, o) {
            var s = new Error(t);
            return n(s, e, r, i, o)
        }
    }, function (t, e, r) {
        "use strict";
        t.exports = function (t) {
            return !(!t || !t.__CANCEL__)
        }
    }, function (t, e, r) {
        "use strict";

        function n(t) {
            this.message = t
        }
        n.prototype.toString = function () {
            return "Cancel" + (this.message ? ": " + this.message : "")
        }, n.prototype.__CANCEL__ = !0, t.exports = n
    }, function (t, e) {
        t.exports = function (t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
            return n
        }, t.exports.default = t.exports, t.exports.__esModule = !0
    }, , function (t, e, r) {
        var n = r(95);
        t.exports = function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && n(t, e)
        }, t.exports.default = t.exports, t.exports.__esModule = !0
    }, function (t, e) {
        t.exports = function (t) {
            var e = {},
                r = [];
            (t = t || this).on = function (r, n, i) {
                return (e[r] = e[r] || []).push([n, i]), t
            }, t.off = function (n, i) {
                n || (e = {});
                for (var o = e[n] || r, s = o.length = i ? o.length : 0; s--;) i == o[s][0] && o.splice(s, 1);
                return t
            }, t.emit = function (n) {
                for (var i, o = e[n] || r, s = o.length > 0 ? o.slice(0, o.length) : o, a = 0; i = s[a++];) i[0].apply(i[1], r.slice.call(arguments, 1));
                return t
            }
        }
    }, function (t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function () {
            return !("undefined" == typeof window || !("ontouchstart" in window || window.DocumentTouch && "undefined" != typeof document && document instanceof window.DocumentTouch)) || !("undefined" == typeof navigator || !navigator.maxTouchPoints && !navigator.msMaxTouchPoints)
        }, t.exports = e.default
    }, function (t, e, r) {
        t.exports = function () {
            var t = 0;

            function e(e) {
                return "__private_" + t++ + "_" + e
            }

            function r(t, e) {
                if (!Object.prototype.hasOwnProperty.call(t, e)) throw new TypeError("attempted to use private field on non-instance");
                return t
            }

            function n() {}
            n.prototype = {
                on: function (t, e, r) {
                    var n = this.e || (this.e = {});
                    return (n[t] || (n[t] = [])).push({
                        fn: e,
                        ctx: r
                    }), this
                },
                once: function (t, e, r) {
                    var n = this;

                    function i() {
                        n.off(t, i), e.apply(r, arguments)
                    }
                    return i._ = e, this.on(t, i, r)
                },
                emit: function (t) {
                    for (var e = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, i = r.length; n < i; n++) r[n].fn.apply(r[n].ctx, e);
                    return this
                },
                off: function (t, e) {
                    var r = this.e || (this.e = {}),
                        n = r[t],
                        i = [];
                    if (n && e)
                        for (var o = 0, s = n.length; o < s; o++) n[o].fn !== e && n[o].fn._ !== e && i.push(n[o]);
                    return i.length ? r[t] = i : delete r[t], this
                }
            };
            var i = n;
            i.TinyEmitter = n;
            var o = "onwheel" in document,
                s = "onmousewheel" in document,
                a = "ontouchstart" in document,
                u = navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
                c = !!window.navigator.msPointerEnabled,
                l = "onkeydown" in document,
                h = navigator.userAgent.indexOf("Firefox") > -1,
                p = "virtualscroll",
                f = e("options"),
                d = e("el"),
                g = e("emitter"),
                m = e("event"),
                v = e("touchStart"),
                b = e("bodyTouchAction");
            return function () {
                function t(t) {
                    var e;
                    Object.defineProperty(this, f, {
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, d, {
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, g, {
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, m, {
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, v, {
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, b, {
                        writable: !0,
                        value: void 0
                    }), e = this, ["_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"].forEach((function (t) {
                        e[t] = e[t].bind(e)
                    })), r(this, d)[d] = window, t && t.el && (r(this, d)[d] = t.el, delete t.el), r(this, f)[f] = Object.assign({
                        mouseMultiplier: 1,
                        touchMultiplier: 2,
                        firefoxMultiplier: 15,
                        keyStep: 120,
                        preventTouch: !1,
                        unpreventTouchClass: "vs-touchmove-allowed",
                        useKeyboard: !0,
                        useTouch: !0
                    }, t), r(this, g)[g] = new i, r(this, m)[m] = {
                        y: 0,
                        x: 0,
                        deltaX: 0,
                        deltaY: 0
                    }, r(this, v)[v] = {
                        x: null,
                        y: null
                    }, r(this, b)[b] = null, void 0 !== r(this, f)[f].passive && (this.listenerOptions = {
                        passive: r(this, f)[f].passive
                    })
                }
                var e = t.prototype;
                return e._notify = function (t) {
                    var e = r(this, m)[m];
                    e.x += e.deltaX, e.y += e.deltaY, r(this, g)[g].emit(p, {
                        x: e.x,
                        y: e.y,
                        deltaX: e.deltaX,
                        deltaY: e.deltaY,
                        originalEvent: t
                    })
                }, e._onWheel = function (t) {
                    var e = r(this, f)[f],
                        n = r(this, m)[m];
                    n.deltaX = t.wheelDeltaX || -1 * t.deltaX, n.deltaY = t.wheelDeltaY || -1 * t.deltaY, h && 1 === t.deltaMode && (n.deltaX *= e.firefoxMultiplier, n.deltaY *= e.firefoxMultiplier), n.deltaX *= e.mouseMultiplier, n.deltaY *= e.mouseMultiplier, this._notify(t)
                }, e._onMouseWheel = function (t) {
                    var e = r(this, m)[m];
                    e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0, e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta, this._notify(t)
                }, e._onTouchStart = function (t) {
                    var e = t.targetTouches ? t.targetTouches[0] : t;
                    r(this, v)[v].x = e.pageX, r(this, v)[v].y = e.pageY
                }, e._onTouchMove = function (t) {
                    var e = r(this, f)[f];
                    e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
                    var n = r(this, m)[m],
                        i = t.targetTouches ? t.targetTouches[0] : t;
                    n.deltaX = (i.pageX - r(this, v)[v].x) * e.touchMultiplier, n.deltaY = (i.pageY - r(this, v)[v].y) * e.touchMultiplier, r(this, v)[v].x = i.pageX, r(this, v)[v].y = i.pageY, this._notify(t)
                }, e._onKeyDown = function (t) {
                    var e = r(this, m)[m];
                    e.deltaX = e.deltaY = 0;
                    var n = window.innerHeight - 40;
                    switch (t.keyCode) {
                        case 37:
                        case 38:
                            e.deltaY = r(this, f)[f].keyStep;
                            break;
                        case 39:
                        case 40:
                            e.deltaY = -r(this, f)[f].keyStep;
                            break;
                        case t.shiftKey:
                            e.deltaY = n;
                            break;
                        case 32:
                            e.deltaY = -n;
                            break;
                        default:
                            return
                    }
                    this._notify(t)
                }, e._bind = function () {
                    o && r(this, d)[d].addEventListener("wheel", this._onWheel, this.listenerOptions), s && r(this, d)[d].addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), a && r(this, f)[f].useTouch && (r(this, d)[d].addEventListener("touchstart", this._onTouchStart, this.listenerOptions), r(this, d)[d].addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), c && u && (r(this, b)[b] = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", r(this, d)[d].addEventListener("MSPointerDown", this._onTouchStart, !0), r(this, d)[d].addEventListener("MSPointerMove", this._onTouchMove, !0)), l && r(this, f)[f].useKeyboard && document.addEventListener("keydown", this._onKeyDown)
                }, e._unbind = function () {
                    o && r(this, d)[d].removeEventListener("wheel", this._onWheel), s && r(this, d)[d].removeEventListener("mousewheel", this._onMouseWheel), a && (r(this, d)[d].removeEventListener("touchstart", this._onTouchStart), r(this, d)[d].removeEventListener("touchmove", this._onTouchMove)), c && u && (document.body.style.msTouchAction = r(this, b)[b], r(this, d)[d].removeEventListener("MSPointerDown", this._onTouchStart, !0), r(this, d)[d].removeEventListener("MSPointerMove", this._onTouchMove, !0)), l && r(this, f)[f].useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
                }, e.on = function (t, e) {
                    r(this, g)[g].on(p, t, e);
                    var n = r(this, g)[g].e;
                    n && n[p] && 1 === n[p].length && this._bind()
                }, e.off = function (t, e) {
                    r(this, g)[g].off(p, t, e);
                    var n = r(this, g)[g].e;
                    (!n[p] || n[p].length <= 0) && this._unbind()
                }, e.destroy = function () {
                    r(this, g)[g].off(), this._unbind()
                }, t
            }()
        }()
    }, function (t, e, r) {
        t.exports = function () {
            function t(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function e(e, r, n) {
                return r && t(e.prototype, r), n && t(e, n), e
            }

            function r() {
                return (r = Object.assign || function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function n(t, e) {
                t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
            }

            function i(t) {
                return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function o(t, e) {
                return (o = Object.setPrototypeOf || function (t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function s(t, e, r) {
                return (s = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                    } catch (t) {
                        return !1
                    }
                }() ? Reflect.construct : function (t, e, r) {
                    var n = [null];
                    n.push.apply(n, e);
                    var i = new(Function.bind.apply(t, n));
                    return r && o(i, r.prototype), i
                }).apply(null, arguments)
            }

            function a(t) {
                var e = "function" == typeof Map ? new Map : void 0;
                return (a = function (t) {
                    if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
                    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== e) {
                        if (e.has(t)) return e.get(t);
                        e.set(t, r)
                    }

                    function r() {
                        return s(t, arguments, i(this).constructor)
                    }
                    return r.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: r,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), o(r, t)
                })(t)
            }

            function u(t, e) {
                try {
                    var r = t()
                } catch (t) {
                    return e(t)
                }
                return r && r.then ? r.then(void 0, e) : r
            }
            var c;
            "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))),
                function (t) {
                    t[t.off = 0] = "off", t[t.error = 1] = "error", t[t.warning = 2] = "warning", t[t.info = 3] = "info", t[t.debug = 4] = "debug"
                }(c || (c = {}));
            var l = c.off,
                h = function () {
                    function t(t) {
                        this.t = t
                    }
                    t.getLevel = function () {
                        return l
                    }, t.setLevel = function (t) {
                        return l = c[t]
                    };
                    var e = t.prototype;
                    return e.error = function () {
                        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                        this.i(console.error, c.error, e)
                    }, e.warn = function () {
                        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                        this.i(console.warn, c.warning, e)
                    }, e.info = function () {
                        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                        this.i(console.info, c.info, e)
                    }, e.debug = function () {
                        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                        this.i(console.log, c.debug, e)
                    }, e.i = function (e, r, n) {
                        r <= t.getLevel() && e.apply(console, ["[" + this.t + "] "].concat(n))
                    }, t
                }(),
                p = A,
                f = y,
                d = b,
                g = w,
                m = T,
                v = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g");

            function b(t, e) {
                for (var r, n = [], i = 0, o = 0, s = "", a = e && e.delimiter || "/", u = e && e.whitelist || void 0, c = !1; null !== (r = v.exec(t));) {
                    var l = r[0],
                        h = r[1],
                        p = r.index;
                    if (s += t.slice(o, p), o = p + l.length, h) s += h[1], c = !0;
                    else {
                        var f = "",
                            d = r[2],
                            g = r[3],
                            m = r[4],
                            b = r[5];
                        if (!c && s.length) {
                            var y = s.length - 1,
                                w = s[y];
                            (!u || u.indexOf(w) > -1) && (f = w, s = s.slice(0, y))
                        }
                        s && (n.push(s), s = "", c = !1);
                        var E = g || m,
                            T = f || a;
                        n.push({
                            name: d || i++,
                            prefix: f,
                            delimiter: T,
                            optional: "?" === b || "*" === b,
                            repeat: "+" === b || "*" === b,
                            pattern: E ? x(E) : "[^" + _(T === a ? T : T + a) + "]+?"
                        })
                    }
                }
                return (s || o < t.length) && n.push(s + t.substr(o)), n
            }

            function y(t, e) {
                return function (r, n) {
                    var i = t.exec(r);
                    if (!i) return !1;
                    for (var o = i[0], s = i.index, a = {}, u = n && n.decode || decodeURIComponent, c = 1; c < i.length; c++)
                        if (void 0 !== i[c]) {
                            var l = e[c - 1];
                            a[l.name] = l.repeat ? i[c].split(l.delimiter).map((function (t) {
                                return u(t, l)
                            })) : u(i[c], l)
                        } return {
                        path: o,
                        index: s,
                        params: a
                    }
                }
            }

            function w(t, e) {
                for (var r = new Array(t.length), n = 0; n < t.length; n++) "object" == typeof t[n] && (r[n] = new RegExp("^(?:" + t[n].pattern + ")$", E(e)));
                return function (e, n) {
                    for (var i = "", o = n && n.encode || encodeURIComponent, s = !n || !1 !== n.validate, a = 0; a < t.length; a++) {
                        var u = t[a];
                        if ("string" != typeof u) {
                            var c, l = e ? e[u.name] : void 0;
                            if (Array.isArray(l)) {
                                if (!u.repeat) throw new TypeError('Expected "' + u.name + '" to not repeat, but got array');
                                if (0 === l.length) {
                                    if (u.optional) continue;
                                    throw new TypeError('Expected "' + u.name + '" to not be empty')
                                }
                                for (var h = 0; h < l.length; h++) {
                                    if (c = o(l[h], u), s && !r[a].test(c)) throw new TypeError('Expected all "' + u.name + '" to match "' + u.pattern + '"');
                                    i += (0 === h ? u.prefix : u.delimiter) + c
                                }
                            } else if ("string" != typeof l && "number" != typeof l && "boolean" != typeof l) {
                                if (!u.optional) throw new TypeError('Expected "' + u.name + '" to be ' + (u.repeat ? "an array" : "a string"))
                            } else {
                                if (c = o(String(l), u), s && !r[a].test(c)) throw new TypeError('Expected "' + u.name + '" to match "' + u.pattern + '", but got "' + c + '"');
                                i += u.prefix + c
                            }
                        } else i += u
                    }
                    return i
                }
            }

            function _(t) {
                return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
            }

            function x(t) {
                return t.replace(/([=!:$/()])/g, "\\$1")
            }

            function E(t) {
                return t && t.sensitive ? "" : "i"
            }

            function T(t, e, r) {
                for (var n = (r = r || {}).strict, i = !1 !== r.start, o = !1 !== r.end, s = r.delimiter || "/", a = [].concat(r.endsWith || []).map(_).concat("$").join("|"), u = i ? "^" : "", c = 0; c < t.length; c++) {
                    var l = t[c];
                    if ("string" == typeof l) u += _(l);
                    else {
                        var h = l.repeat ? "(?:" + l.pattern + ")(?:" + _(l.delimiter) + "(?:" + l.pattern + "))*" : l.pattern;
                        e && e.push(l), u += l.optional ? l.prefix ? "(?:" + _(l.prefix) + "(" + h + "))?" : "(" + h + ")?" : _(l.prefix) + "(" + h + ")"
                    }
                }
                if (o) n || (u += "(?:" + _(s) + ")?"), u += "$" === a ? "$" : "(?=" + a + ")";
                else {
                    var p = t[t.length - 1],
                        f = "string" == typeof p ? p[p.length - 1] === s : void 0 === p;
                    n || (u += "(?:" + _(s) + "(?=" + a + "))?"), f || (u += "(?=" + _(s) + "|" + a + ")")
                }
                return new RegExp(u, E(r))
            }

            function A(t, e, r) {
                return t instanceof RegExp ? function (t, e) {
                    if (!e) return t;
                    var r = t.source.match(/\((?!\?)/g);
                    if (r)
                        for (var n = 0; n < r.length; n++) e.push({
                            name: n,
                            prefix: null,
                            delimiter: null,
                            optional: !1,
                            repeat: !1,
                            pattern: null
                        });
                    return t
                }(t, e) : Array.isArray(t) ? function (t, e, r) {
                    for (var n = [], i = 0; i < t.length; i++) n.push(A(t[i], e, r).source);
                    return new RegExp("(?:" + n.join("|") + ")", E(r))
                }(t, e, r) : function (t, e, r) {
                    return T(b(t, r), e, r)
                }(t, e, r)
            }
            p.match = function (t, e) {
                var r = [];
                return y(A(t, r, e), r)
            }, p.regexpToFunction = f, p.parse = d, p.compile = function (t, e) {
                return w(b(t, e), e)
            }, p.tokensToFunction = g, p.tokensToRegExp = m;
            var D = {
                    container: "container",
                    history: "history",
                    namespace: "namespace",
                    prefix: "data-barba",
                    prevent: "prevent",
                    wrapper: "wrapper"
                },
                q = new(function () {
                    function t() {
                        this.o = D, this.u = new DOMParser
                    }
                    var e = t.prototype;
                    return e.toString = function (t) {
                        return t.outerHTML
                    }, e.toDocument = function (t) {
                        return this.u.parseFromString(t, "text/html")
                    }, e.toElement = function (t) {
                        var e = document.createElement("div");
                        return e.innerHTML = t, e
                    }, e.getHtml = function (t) {
                        return void 0 === t && (t = document), this.toString(t.documentElement)
                    }, e.getWrapper = function (t) {
                        return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
                    }, e.getContainer = function (t) {
                        return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]')
                    }, e.removeContainer = function (t) {
                        document.body.contains(t) && t.parentNode.removeChild(t)
                    }, e.addContainer = function (t, e) {
                        var r = this.getContainer();
                        r ? this.s(t, r) : e.appendChild(t)
                    }, e.getNamespace = function (t) {
                        void 0 === t && (t = document);
                        var e = t.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
                        return e ? e.getAttribute(this.o.prefix + "-" + this.o.namespace) : null
                    }, e.getHref = function (t) {
                        if (t.tagName && "a" === t.tagName.toLowerCase()) {
                            if ("string" == typeof t.href) return t.href;
                            var e = t.getAttribute("href") || t.getAttribute("xlink:href");
                            if (e) return this.resolveUrl(e.baseVal || e)
                        }
                        return null
                    }, e.resolveUrl = function () {
                        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                        var n = e.length;
                        if (0 === n) throw new Error("resolveUrl requires at least one argument; got none.");
                        var i = document.createElement("base");
                        if (i.href = arguments[0], 1 === n) return i.href;
                        var o = document.getElementsByTagName("head")[0];
                        o.insertBefore(i, o.firstChild);
                        for (var s, a = document.createElement("a"), u = 1; u < n; u++) a.href = arguments[u], i.href = s = a.href;
                        return o.removeChild(i), s
                    }, e.s = function (t, e) {
                        e.parentNode.insertBefore(t, e.nextSibling)
                    }, t
                }()),
                k = new(function () {
                    function t() {
                        this.h = [], this.v = -1
                    }
                    var n = t.prototype;
                    return n.init = function (t, e) {
                        this.l = "barba";
                        var r = {
                            ns: e,
                            scroll: {
                                x: window.scrollX,
                                y: window.scrollY
                            },
                            url: t
                        };
                        this.h.push(r), this.v = 0;
                        var n = {
                            from: this.l,
                            index: 0,
                            states: [].concat(this.h)
                        };
                        window.history && window.history.replaceState(n, "", t)
                    }, n.change = function (t, e, r) {
                        if (r && r.state) {
                            var n = r.state,
                                i = n.index;
                            e = this.m(this.v - i), this.replace(n.states), this.v = i
                        } else this.add(t, e);
                        return e
                    }, n.add = function (t, e) {
                        var r = this.size,
                            n = this.p(e),
                            i = {
                                ns: "tmp",
                                scroll: {
                                    x: window.scrollX,
                                    y: window.scrollY
                                },
                                url: t
                            };
                        this.h.push(i), this.v = r;
                        var o = {
                            from: this.l,
                            index: r,
                            states: [].concat(this.h)
                        };
                        switch (n) {
                            case "push":
                                window.history && window.history.pushState(o, "", t);
                                break;
                            case "replace":
                                window.history && window.history.replaceState(o, "", t)
                        }
                    }, n.update = function (t, e) {
                        var n = e || this.v,
                            i = r({}, this.get(n), {}, t);
                        this.set(n, i)
                    }, n.remove = function (t) {
                        t ? this.h.splice(t, 1) : this.h.pop(), this.v--
                    }, n.clear = function () {
                        this.h = [], this.v = -1
                    }, n.replace = function (t) {
                        this.h = t
                    }, n.get = function (t) {
                        return this.h[t]
                    }, n.set = function (t, e) {
                        return this.h[t] = e
                    }, n.p = function (t) {
                        var e = "push",
                            r = t,
                            n = D.prefix + "-" + D.history;
                        return r.hasAttribute && r.hasAttribute(n) && (e = r.getAttribute(n)), e
                    }, n.m = function (t) {
                        return Math.abs(t) > 1 ? t > 0 ? "forward" : "back" : 0 === t ? "popstate" : t > 0 ? "back" : "forward"
                    }, e(t, [{
                        key: "current",
                        get: function () {
                            return this.h[this.v]
                        }
                    }, {
                        key: "state",
                        get: function () {
                            return this.h[this.h.length - 1]
                        }
                    }, {
                        key: "previous",
                        get: function () {
                            return this.v < 1 ? null : this.h[this.v - 1]
                        }
                    }, {
                        key: "size",
                        get: function () {
                            return this.h.length
                        }
                    }]), t
                }()),
                L = function (t, e) {
                    try {
                        var r = function () {
                            if (!e.next.html) return Promise.resolve(t).then((function (t) {
                                var r = e.next;
                                if (t) {
                                    var n = q.toElement(t);
                                    r.namespace = q.getNamespace(n), r.container = q.getContainer(n), r.html = t, k.update({
                                        ns: r.namespace
                                    });
                                    var i = q.toDocument(t);
                                    document.title = i.title
                                }
                            }))
                        }();
                        return Promise.resolve(r && r.then ? r.then((function () {})) : void 0)
                    } catch (t) {
                        return Promise.reject(t)
                    }
                },
                S = p,
                C = {
                    __proto__: null,
                    update: L,
                    nextTick: function () {
                        return new Promise((function (t) {
                            window.requestAnimationFrame(t)
                        }))
                    },
                    pathToRegexp: S
                },
                N = function () {
                    return window.location.origin
                },
                O = function (t) {
                    return void 0 === t && (t = window.location.href), R(t).port
                },
                R = function (t) {
                    var e, r = t.match(/:\d+/);
                    if (null === r) /^http/.test(t) && (e = 80), /^https/.test(t) && (e = 443);
                    else {
                        var n = r[0].substring(1);
                        e = parseInt(n, 10)
                    }
                    var i, o = t.replace(N(), ""),
                        s = {},
                        a = o.indexOf("#");
                    a >= 0 && (i = o.slice(a + 1), o = o.slice(0, a));
                    var u = o.indexOf("?");
                    return u >= 0 && (s = P(o.slice(u + 1)), o = o.slice(0, u)), {
                        hash: i,
                        path: o,
                        port: e,
                        query: s
                    }
                },
                P = function (t) {
                    return t.split("&").reduce((function (t, e) {
                        var r = e.split("=");
                        return t[r[0]] = r[1], t
                    }), {})
                },
                B = function (t) {
                    return void 0 === t && (t = window.location.href), t.replace(/(\/#.*|\/|#.*)$/, "")
                },
                M = {
                    __proto__: null,
                    getHref: function () {
                        return window.location.href
                    },
                    getOrigin: N,
                    getPort: O,
                    getPath: function (t) {
                        return void 0 === t && (t = window.location.href), R(t).path
                    },
                    parse: R,
                    parseQuery: P,
                    clean: B
                };

            function F(t, e, r) {
                return void 0 === e && (e = 2e3), new Promise((function (n, i) {
                    var o = new XMLHttpRequest;
                    o.onreadystatechange = function () {
                        if (o.readyState === XMLHttpRequest.DONE)
                            if (200 === o.status) n(o.responseText);
                            else if (o.status) {
                            var e = {
                                status: o.status,
                                statusText: o.statusText
                            };
                            r(t, e), i(e)
                        }
                    }, o.ontimeout = function () {
                        var n = new Error("Timeout error [" + e + "]");
                        r(t, n), i(n)
                    }, o.onerror = function () {
                        var e = new Error("Fetch error");
                        r(t, e), i(e)
                    }, o.open("GET", t), o.timeout = e, o.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), o.setRequestHeader("x-barba", "yes"), o.send()
                }))
            }
            var U = function (t) {
                return !!t && ("object" == typeof t || "function" == typeof t) && "function" == typeof t.then
            };

            function I(t, e) {
                return void 0 === e && (e = {}),
                    function () {
                        for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                        var o = !1,
                            s = new Promise((function (r, i) {
                                e.async = function () {
                                    return o = !0,
                                        function (t, e) {
                                            t ? i(t) : r(e)
                                        }
                                };
                                var s = t.apply(e, n);
                                o || (U(s) ? s.then(r, i) : r(s))
                            }));
                        return s
                    }
            }
            var j = new(function (t) {
                    function e() {
                        var e;
                        return (e = t.call(this) || this).logger = new h("@barba/core"), e.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"], e.registered = new Map, e.init(), e
                    }
                    n(e, t);
                    var r = e.prototype;
                    return r.init = function () {
                        var t = this;
                        this.registered.clear(), this.all.forEach((function (e) {
                            t[e] || (t[e] = function (r, n) {
                                t.registered.has(e) || t.registered.set(e, new Set), t.registered.get(e).add({
                                    ctx: n || {},
                                    fn: r
                                })
                            })
                        }))
                    }, r.do = function (t) {
                        for (var e = this, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                        if (this.registered.has(t)) {
                            var o = Promise.resolve();
                            return this.registered.get(t).forEach((function (t) {
                                o = o.then((function () {
                                    return I(t.fn, t.ctx).apply(void 0, n)
                                }))
                            })), o.catch((function (r) {
                                e.logger.debug("Hook error [" + t + "]"), e.logger.error(r)
                            }))
                        }
                        return Promise.resolve()
                    }, r.clear = function () {
                        var t = this;
                        this.all.forEach((function (e) {
                            delete t[e]
                        })), this.init()
                    }, r.help = function () {
                        this.logger.info("Available hooks: " + this.all.join(","));
                        var t = [];
                        this.registered.forEach((function (e, r) {
                            return t.push(r)
                        })), this.logger.info("Registered hooks: " + t.join(","))
                    }, e
                }((function () {}))),
                V = function () {
                    function t(t) {
                        if (this.P = [], "boolean" == typeof t) this.g = t;
                        else {
                            var e = Array.isArray(t) ? t : [t];
                            this.P = e.map((function (t) {
                                return S(t)
                            }))
                        }
                    }
                    return t.prototype.checkHref = function (t) {
                        if ("boolean" == typeof this.g) return this.g;
                        var e = R(t).path;
                        return this.P.some((function (t) {
                            return null !== t.exec(e)
                        }))
                    }, t
                }(),
                H = function (t) {
                    function e(e) {
                        var r;
                        return (r = t.call(this, e) || this).k = new Map, r
                    }
                    n(e, t);
                    var i = e.prototype;
                    return i.set = function (t, e, r) {
                        return this.k.set(t, {
                            action: r,
                            request: e
                        }), {
                            action: r,
                            request: e
                        }
                    }, i.get = function (t) {
                        return this.k.get(t)
                    }, i.getRequest = function (t) {
                        return this.k.get(t).request
                    }, i.getAction = function (t) {
                        return this.k.get(t).action
                    }, i.has = function (t) {
                        return !this.checkHref(t) && this.k.has(t)
                    }, i.delete = function (t) {
                        return this.k.delete(t)
                    }, i.update = function (t, e) {
                        var n = r({}, this.k.get(t), {}, e);
                        return this.k.set(t, n), n
                    }, e
                }(V),
                z = function () {
                    return !window.history.pushState
                },
                G = function (t) {
                    return !t.el || !t.href
                },
                Y = function (t) {
                    var e = t.event;
                    return e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
                },
                X = function (t) {
                    var e = t.el;
                    return e.hasAttribute("target") && "_blank" === e.target
                },
                W = function (t) {
                    var e = t.el;
                    return void 0 !== e.protocol && window.location.protocol !== e.protocol || void 0 !== e.hostname && window.location.hostname !== e.hostname
                },
                J = function (t) {
                    var e = t.el;
                    return void 0 !== e.port && O() !== O(e.href)
                },
                K = function (t) {
                    var e = t.el;
                    return e.getAttribute && "string" == typeof e.getAttribute("download")
                },
                $ = function (t) {
                    return t.el.hasAttribute(D.prefix + "-" + D.prevent)
                },
                Z = function (t) {
                    return Boolean(t.el.closest("[" + D.prefix + "-" + D.prevent + '="all"]'))
                },
                Q = function (t) {
                    var e = t.href;
                    return B(e) === B() && O(e) === O()
                },
                tt = function (t) {
                    function e(e) {
                        var r;
                        return (r = t.call(this, e) || this).suite = [], r.tests = new Map, r.init(), r
                    }
                    n(e, t);
                    var r = e.prototype;
                    return r.init = function () {
                        this.add("pushState", z), this.add("exists", G), this.add("newTab", Y), this.add("blank", X), this.add("corsDomain", W), this.add("corsPort", J), this.add("download", K), this.add("preventSelf", $), this.add("preventAll", Z), this.add("sameUrl", Q, !1)
                    }, r.add = function (t, e, r) {
                        void 0 === r && (r = !0), this.tests.set(t, e), r && this.suite.push(t)
                    }, r.run = function (t, e, r, n) {
                        return this.tests.get(t)({
                            el: e,
                            event: r,
                            href: n
                        })
                    }, r.checkLink = function (t, e, r) {
                        var n = this;
                        return this.suite.some((function (i) {
                            return n.run(i, t, e, r)
                        }))
                    }, e
                }(V),
                et = function (t) {
                    function e(r, n) {
                        var i;
                        void 0 === n && (n = "Barba error");
                        for (var o = arguments.length, s = new Array(o > 2 ? o - 2 : 0), a = 2; a < o; a++) s[a - 2] = arguments[a];
                        return (i = t.call.apply(t, [this].concat(s)) || this).error = r, i.label = n, Error.captureStackTrace && Error.captureStackTrace(function (t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(i), e), i.name = "BarbaError", i
                    }
                    return n(e, t), e
                }(a(Error)),
                rt = function () {
                    function t(t) {
                        void 0 === t && (t = []), this.logger = new h("@barba/core"), this.all = [], this.page = [], this.once = [], this.A = [{
                            name: "namespace",
                            type: "strings"
                        }, {
                            name: "custom",
                            type: "function"
                        }], t && (this.all = this.all.concat(t)), this.update()
                    }
                    var e = t.prototype;
                    return e.add = function (t, e) {
                        switch (t) {
                            case "rule":
                                this.A.splice(e.position || 0, 0, e.value);
                                break;
                            case "transition":
                            default:
                                this.all.push(e)
                        }
                        this.update()
                    }, e.resolve = function (t, e) {
                        var r = this;
                        void 0 === e && (e = {});
                        var n = e.once ? this.once : this.page;
                        n = n.filter(e.self ? function (t) {
                            return t.name && "self" === t.name
                        } : function (t) {
                            return !t.name || "self" !== t.name
                        });
                        var i = new Map,
                            o = n.find((function (n) {
                                var o = !0,
                                    s = {};
                                return !(!e.self || "self" !== n.name) || (r.A.reverse().forEach((function (e) {
                                    o && (o = r.R(n, e, t, s), n.from && n.to && (o = r.R(n, e, t, s, "from") && r.R(n, e, t, s, "to")), n.from && !n.to && (o = r.R(n, e, t, s, "from")), !n.from && n.to && (o = r.R(n, e, t, s, "to")))
                                })), i.set(n, s), o)
                            })),
                            s = i.get(o),
                            a = [];
                        if (a.push(e.once ? "once" : "page"), e.self && a.push("self"), s) {
                            var u, c = [o];
                            Object.keys(s).length > 0 && c.push(s), (u = this.logger).info.apply(u, ["Transition found [" + a.join(",") + "]"].concat(c))
                        } else this.logger.info("No transition found [" + a.join(",") + "]");
                        return o
                    }, e.update = function () {
                        var t = this;
                        this.all = this.all.map((function (e) {
                            return t.T(e)
                        })).sort((function (t, e) {
                            return t.priority - e.priority
                        })).reverse().map((function (t) {
                            return delete t.priority, t
                        })), this.page = this.all.filter((function (t) {
                            return void 0 !== t.leave || void 0 !== t.enter
                        })), this.once = this.all.filter((function (t) {
                            return void 0 !== t.once
                        }))
                    }, e.R = function (t, e, r, n, i) {
                        var o = !0,
                            s = !1,
                            a = t,
                            u = e.name,
                            c = u,
                            l = u,
                            h = u,
                            p = i ? a[i] : a,
                            f = "to" === i ? r.next : r.current;
                        if (i ? p && p[u] : p[u]) {
                            switch (e.type) {
                                case "strings":
                                default:
                                    var d = Array.isArray(p[c]) ? p[c] : [p[c]];
                                    f[c] && -1 !== d.indexOf(f[c]) && (s = !0), -1 === d.indexOf(f[c]) && (o = !1);
                                    break;
                                case "object":
                                    var g = Array.isArray(p[l]) ? p[l] : [p[l]];
                                    f[l] ? (f[l].name && -1 !== g.indexOf(f[l].name) && (s = !0), -1 === g.indexOf(f[l].name) && (o = !1)) : o = !1;
                                    break;
                                case "function":
                                    p[h](r) ? s = !0 : o = !1
                            }
                            s && (i ? (n[i] = n[i] || {}, n[i][u] = a[i][u]) : n[u] = a[u])
                        }
                        return o
                    }, e.O = function (t, e, r) {
                        var n = 0;
                        return (t[e] || t.from && t.from[e] || t.to && t.to[e]) && (n += Math.pow(10, r), t.from && t.from[e] && (n += 1), t.to && t.to[e] && (n += 2)), n
                    }, e.T = function (t) {
                        var e = this;
                        t.priority = 0;
                        var r = 0;
                        return this.A.forEach((function (n, i) {
                            r += e.O(t, n.name, i + 1)
                        })), t.priority = r, t
                    }, t
                }(),
                nt = function () {
                    function t(t) {
                        void 0 === t && (t = []), this.logger = new h("@barba/core"), this.S = !1, this.store = new rt(t)
                    }
                    var r = t.prototype;
                    return r.get = function (t, e) {
                        return this.store.resolve(t, e)
                    }, r.doOnce = function (t) {
                        var e = t.data,
                            r = t.transition;
                        try {
                            var n = function () {
                                    i.S = !1
                                },
                                i = this,
                                o = r || {};
                            i.S = !0;
                            var s = u((function () {
                                return Promise.resolve(i.j("beforeOnce", e, o)).then((function () {
                                    return Promise.resolve(i.once(e, o)).then((function () {
                                        return Promise.resolve(i.j("afterOnce", e, o)).then((function () {}))
                                    }))
                                }))
                            }), (function (t) {
                                i.S = !1, i.logger.debug("Transition error [before/after/once]"), i.logger.error(t)
                            }));
                            return Promise.resolve(s && s.then ? s.then(n) : n())
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, r.doPage = function (t) {
                        var e = t.data,
                            r = t.transition,
                            n = t.page,
                            i = t.wrapper;
                        try {
                            var o = function (t) {
                                    if (s) return t;
                                    a.S = !1
                                },
                                s = !1,
                                a = this,
                                c = r || {},
                                l = !0 === c.sync || !1;
                            a.S = !0;
                            var h = u((function () {
                                function t() {
                                    return Promise.resolve(a.j("before", e, c)).then((function () {
                                        function t(t) {
                                            return Promise.resolve(a.remove(e)).then((function () {
                                                return Promise.resolve(a.j("after", e, c)).then((function () {}))
                                            }))
                                        }
                                        var r = function () {
                                            if (l) return u((function () {
                                                return Promise.resolve(a.add(e, i)).then((function () {
                                                    return Promise.resolve(a.j("beforeLeave", e, c)).then((function () {
                                                        return Promise.resolve(a.j("beforeEnter", e, c)).then((function () {
                                                            return Promise.resolve(Promise.all([a.leave(e, c), a.enter(e, c)])).then((function () {
                                                                return Promise.resolve(a.j("afterLeave", e, c)).then((function () {
                                                                    return Promise.resolve(a.j("afterEnter", e, c)).then((function () {}))
                                                                }))
                                                            }))
                                                        }))
                                                    }))
                                                }))
                                            }), (function (t) {
                                                if (a.M(t)) throw new et(t, "Transition error [sync]")
                                            }));
                                            var t = function (t) {
                                                    return u((function () {
                                                        var t = function () {
                                                            if (!1 !== r) return Promise.resolve(a.add(e, i)).then((function () {
                                                                return Promise.resolve(a.j("beforeEnter", e, c)).then((function () {
                                                                    return Promise.resolve(a.enter(e, c, r)).then((function () {
                                                                        return Promise.resolve(a.j("afterEnter", e, c)).then((function () {}))
                                                                    }))
                                                                }))
                                                            }))
                                                        }();
                                                        if (t && t.then) return t.then((function () {}))
                                                    }), (function (t) {
                                                        if (a.M(t)) throw new et(t, "Transition error [before/after/enter]")
                                                    }))
                                                },
                                                r = !1,
                                                o = u((function () {
                                                    return Promise.resolve(a.j("beforeLeave", e, c)).then((function () {
                                                        return Promise.resolve(Promise.all([a.leave(e, c), L(n, e)]).then((function (t) {
                                                            return t[0]
                                                        }))).then((function (t) {
                                                            return r = t, Promise.resolve(a.j("afterLeave", e, c)).then((function () {}))
                                                        }))
                                                    }))
                                                }), (function (t) {
                                                    if (a.M(t)) throw new et(t, "Transition error [before/after/leave]")
                                                }));
                                            return o && o.then ? o.then(t) : t()
                                        }();
                                        return r && r.then ? r.then(t) : t()
                                    }))
                                }
                                var r = function () {
                                    if (l) return Promise.resolve(L(n, e)).then((function () {}))
                                }();
                                return r && r.then ? r.then(t) : t()
                            }), (function (t) {
                                if (a.S = !1, t.name && "BarbaError" === t.name) throw a.logger.debug(t.label), a.logger.error(t.error), t;
                                throw a.logger.debug("Transition error [page]"), a.logger.error(t), t
                            }));
                            return Promise.resolve(h && h.then ? h.then(o) : o(h))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, r.once = function (t, e) {
                        try {
                            return Promise.resolve(j.do("once", t, e)).then((function () {
                                return e.once ? I(e.once, e)(t) : Promise.resolve()
                            }))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, r.leave = function (t, e) {
                        try {
                            return Promise.resolve(j.do("leave", t, e)).then((function () {
                                return e.leave ? I(e.leave, e)(t) : Promise.resolve()
                            }))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, r.enter = function (t, e, r) {
                        try {
                            return Promise.resolve(j.do("enter", t, e)).then((function () {
                                return e.enter ? I(e.enter, e)(t, r) : Promise.resolve()
                            }))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, r.add = function (t, e) {
                        try {
                            return q.addContainer(t.next.container, e), j.do("nextAdded", t), Promise.resolve()
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, r.remove = function (t) {
                        try {
                            return q.removeContainer(t.current.container), j.do("currentRemoved", t), Promise.resolve()
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, r.M = function (t) {
                        return t.message ? !/Timeout error|Fetch error/.test(t.message) : !t.status
                    }, r.j = function (t, e, r) {
                        try {
                            return Promise.resolve(j.do(t, e, r)).then((function () {
                                return r[t] ? I(r[t], r)(e) : Promise.resolve()
                            }))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, e(t, [{
                        key: "isRunning",
                        get: function () {
                            return this.S
                        },
                        set: function (t) {
                            this.S = t
                        }
                    }, {
                        key: "hasOnce",
                        get: function () {
                            return this.store.once.length > 0
                        }
                    }, {
                        key: "hasSelf",
                        get: function () {
                            return this.store.all.some((function (t) {
                                return "self" === t.name
                            }))
                        }
                    }, {
                        key: "shouldWait",
                        get: function () {
                            return this.store.all.some((function (t) {
                                return t.to && !t.to.route || t.sync
                            }))
                        }
                    }]), t
                }(),
                it = function () {
                    function t(t) {
                        var e = this;
                        this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = new Map, 0 !== t.length && (t.forEach((function (t) {
                            e.byNamespace.set(t.namespace, t)
                        })), this.names.forEach((function (t) {
                            j[t](e.L(t))
                        })))
                    }
                    return t.prototype.L = function (t) {
                        var e = this;
                        return function (r) {
                            var n = t.match(/enter/i) ? r.next : r.current,
                                i = e.byNamespace.get(n.namespace);
                            return i && i[t] ? I(i[t], i)(r) : Promise.resolve()
                        }
                    }, t
                }();
            Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function (t) {
                var e = this;
                do {
                    if (e.matches(t)) return e;
                    e = e.parentElement || e.parentNode
                } while (null !== e && 1 === e.nodeType);
                return null
            });
            var ot = {
                container: null,
                html: "",
                namespace: "",
                url: {
                    hash: "",
                    href: "",
                    path: "",
                    port: null,
                    query: {}
                }
            };
            return new(function () {
                function t() {
                    this.version = "2.9.7", this.schemaPage = ot, this.Logger = h, this.logger = new h("@barba/core"), this.plugins = [], this.hooks = j, this.dom = q, this.helpers = C, this.history = k, this.request = F, this.url = M
                }
                var n = t.prototype;
                return n.use = function (t, e) {
                    var r = this.plugins;
                    r.indexOf(t) > -1 ? this.logger.warn("Plugin [" + t.name + "] already installed.") : "function" == typeof t.install ? (t.install(this, e), r.push(t)) : this.logger.warn("Plugin [" + t.name + '] has no "install" method.')
                }, n.init = function (t) {
                    var e = void 0 === t ? {} : t,
                        n = e.transitions,
                        i = void 0 === n ? [] : n,
                        o = e.views,
                        s = void 0 === o ? [] : o,
                        a = e.schema,
                        u = void 0 === a ? D : a,
                        c = e.requestError,
                        l = e.timeout,
                        p = void 0 === l ? 2e3 : l,
                        f = e.cacheIgnore,
                        d = void 0 !== f && f,
                        g = e.prefetchIgnore,
                        m = void 0 !== g && g,
                        v = e.preventRunning,
                        b = void 0 !== v && v,
                        y = e.prevent,
                        w = void 0 === y ? null : y,
                        _ = e.debug,
                        x = e.logLevel;
                    if (h.setLevel(!0 === (void 0 !== _ && _) ? "debug" : void 0 === x ? "off" : x), this.logger.info(this.version), Object.keys(u).forEach((function (t) {
                            D[t] && (D[t] = u[t])
                        })), this.$ = c, this.timeout = p, this.cacheIgnore = d, this.prefetchIgnore = m, this.preventRunning = b, this._ = this.dom.getWrapper(), !this._) throw new Error("[@barba/core] No Barba wrapper found");
                    this._.setAttribute("aria-live", "polite"), this.q();
                    var E = this.data.current;
                    if (!E.container) throw new Error("[@barba/core] No Barba container found");
                    if (this.cache = new H(d), this.prevent = new tt(m), this.transitions = new nt(i), this.views = new it(s), null !== w) {
                        if ("function" != typeof w) throw new Error("[@barba/core] Prevent should be a function");
                        this.prevent.add("preventCustom", w)
                    }
                    this.history.init(E.url.href, E.namespace), this.B = this.B.bind(this), this.U = this.U.bind(this), this.D = this.D.bind(this), this.F(), this.plugins.forEach((function (t) {
                        return t.init()
                    }));
                    var T = this.data;
                    T.trigger = "barba", T.next = T.current, T.current = r({}, this.schemaPage), this.hooks.do("ready", T), this.once(T), this.q()
                }, n.destroy = function () {
                    this.q(), this.H(), this.history.clear(), this.hooks.clear(), this.plugins = []
                }, n.force = function (t) {
                    window.location.assign(t)
                }, n.go = function (t, e, r) {
                    var n;
                    if (void 0 === e && (e = "barba"), this.transitions.isRunning) this.force(t);
                    else if (!(n = "popstate" === e ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t) : this.prevent.run("sameUrl", null, null, t)) || this.transitions.hasSelf) return e = this.history.change(t, e, r), r && (r.stopPropagation(), r.preventDefault()), this.page(t, e, n)
                }, n.once = function (t) {
                    try {
                        var e = this;
                        return Promise.resolve(e.hooks.do("beforeEnter", t)).then((function () {
                            function r() {
                                return Promise.resolve(e.hooks.do("afterEnter", t)).then((function () {}))
                            }
                            var n = function () {
                                if (e.transitions.hasOnce) {
                                    var r = e.transitions.get(t, {
                                        once: !0
                                    });
                                    return Promise.resolve(e.transitions.doOnce({
                                        transition: r,
                                        data: t
                                    })).then((function () {}))
                                }
                            }();
                            return n && n.then ? n.then(r) : r()
                        }))
                    } catch (t) {
                        return Promise.reject(t)
                    }
                }, n.page = function (t, e, n) {
                    try {
                        var i = function () {
                                var t = o.data;
                                return Promise.resolve(o.hooks.do("page", t)).then((function () {
                                    var e = u((function () {
                                        var e = o.transitions.get(t, {
                                            once: !1,
                                            self: n
                                        });
                                        return Promise.resolve(o.transitions.doPage({
                                            data: t,
                                            page: s,
                                            transition: e,
                                            wrapper: o._
                                        })).then((function () {
                                            o.q()
                                        }))
                                    }), (function () {
                                        0 === h.getLevel() && o.force(t.current.url.href)
                                    }));
                                    if (e && e.then) return e.then((function () {}))
                                }))
                            },
                            o = this;
                        o.data.next.url = r({
                            href: t
                        }, o.url.parse(t)), o.data.trigger = e;
                        var s = o.cache.has(t) ? o.cache.update(t, {
                                action: "click"
                            }).request : o.cache.set(t, o.request(t, o.timeout, o.onRequestError.bind(o, e)), "click").request,
                            a = function () {
                                if (o.transitions.shouldWait) return Promise.resolve(L(s, o.data)).then((function () {}))
                            }();
                        return Promise.resolve(a && a.then ? a.then(i) : i())
                    } catch (t) {
                        return Promise.reject(t)
                    }
                }, n.onRequestError = function (t) {
                    this.transitions.isRunning = !1;
                    for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                    var i = r[0],
                        o = r[1],
                        s = this.cache.getAction(i);
                    return this.cache.delete(i), !(this.$ && !1 === this.$(t, s, i, o) || ("click" === s && this.force(i), 1))
                }, n.prefetch = function (t) {
                    var e = this;
                    this.cache.has(t) || this.cache.set(t, this.request(t, this.timeout, this.onRequestError.bind(this, "barba")).catch((function (t) {
                        e.logger.error(t)
                    })), "prefetch")
                }, n.F = function () {
                    !0 !== this.prefetchIgnore && (document.addEventListener("mouseover", this.B), document.addEventListener("touchstart", this.B)), document.addEventListener("click", this.U), window.addEventListener("popstate", this.D)
                }, n.H = function () {
                    !0 !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.B), document.removeEventListener("touchstart", this.B)), document.removeEventListener("click", this.U), window.removeEventListener("popstate", this.D)
                }, n.B = function (t) {
                    var e = this,
                        r = this.I(t);
                    if (r) {
                        var n = this.dom.getHref(r);
                        this.prevent.checkHref(n) || this.cache.has(n) || this.cache.set(n, this.request(n, this.timeout, this.onRequestError.bind(this, r)).catch((function (t) {
                            e.logger.error(t)
                        })), "enter")
                    }
                }, n.U = function (t) {
                    var e = this.I(t);
                    if (e) return this.transitions.isRunning && this.preventRunning ? (t.preventDefault(), void t.stopPropagation()) : void this.go(this.dom.getHref(e), e, t)
                }, n.D = function (t) {
                    this.go(this.url.getHref(), "popstate", t)
                }, n.I = function (t) {
                    for (var e = t.target; e && !this.dom.getHref(e);) e = e.parentNode;
                    if (e && !this.prevent.checkLink(e, t, this.dom.getHref(e))) return e
                }, n.q = function () {
                    var t = this.url.getHref(),
                        e = {
                            container: this.dom.getContainer(),
                            html: this.dom.getHtml(),
                            namespace: this.dom.getNamespace(),
                            url: r({
                                href: t
                            }, this.url.parse(t))
                        };
                    this.C = {
                        current: e,
                        next: r({}, this.schemaPage),
                        trigger: void 0
                    }, this.hooks.do("reset", this.data)
                }, e(t, [{
                    key: "data",
                    get: function () {
                        return this.C
                    }
                }, {
                    key: "wrapper",
                    get: function () {
                        return this._
                    }
                }]), t
            }())
        }()
    }, function (t, e, r) {
        "use strict";
        r.d(e, "a", (function () {
            return y
        }));
        var n, i, o, s, a, u, c, l = function () {
                return "undefined" != typeof window
            },
            h = function () {
                return n || l() && (n = window.gsap) && n.registerPlugin && n
            },
            p = function (t) {
                return "string" == typeof t
            },
            f = function (t) {
                return "function" == typeof t
            },
            d = function (t, e) {
                var r = "x" === e ? "Width" : "Height",
                    n = "scroll" + r,
                    i = "client" + r;
                return t === o || t === s || t === a ? Math.max(s[n], a[n]) - (o["inner" + r] || s[i] || a[i]) : t[n] - t["offset" + r]
            },
            g = function (t, e) {
                var r = "scroll" + ("x" === e ? "Left" : "Top");
                return t === o && (null != t.pageXOffset ? r = "page" + e.toUpperCase() + "Offset" : t = null != s[r] ? s : a),
                    function () {
                        return t[r]
                    }
            },
            m = function (t, e) {
                if (!(t = u(t)[0]) || !t.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
                    x: 0,
                    y: 0
                };
                var r = t.getBoundingClientRect(),
                    n = !e || e === o || e === a,
                    i = n ? {
                        top: s.clientTop - (o.pageYOffset || s.scrollTop || a.scrollTop || 0),
                        left: s.clientLeft - (o.pageXOffset || s.scrollLeft || a.scrollLeft || 0)
                    } : e.getBoundingClientRect(),
                    c = {
                        x: r.left - i.left,
                        y: r.top - i.top
                    };
                return !n && e && (c.x += g(e, "x")(), c.y += g(e, "y")()), c
            },
            v = function (t, e, r, n, i) {
                return isNaN(t) || "object" == typeof t ? p(t) && "=" === t.charAt(1) ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + n - i : "max" === t ? d(e, r) - i : Math.min(d(e, r), m(t, e)[r] - i) : parseFloat(t) - i
            },
            b = function () {
                n = h(), l() && n && document.body && (o = window, a = document.body, s = document.documentElement, u = n.utils.toArray, n.config({
                    autoKillThreshold: 7
                }), c = n.config(), i = 1)
            },
            y = {
                version: "3.6.0",
                name: "scrollTo",
                rawVars: 1,
                register: function (t) {
                    n = t, b()
                },
                init: function (t, e, r, n, s) {
                    i || b(), this.isWin = t === o, this.target = t, this.tween = r, e = function (t, e, r, n) {
                        if (f(t) && (t = t(e, r, n)), "object" != typeof t) return p(t) && "max" !== t && "=" !== t.charAt(1) ? {
                            x: t,
                            y: t
                        } : {
                            y: t
                        };
                        if (t.nodeType) return {
                            y: t,
                            x: t
                        };
                        var i, o = {};
                        for (i in t) "onAutoKill" !== i && (o[i] = f(t[i]) ? t[i](e, r, n) : t[i]);
                        return o
                    }(e, n, t, s), this.vars = e, this.autoKill = !!e.autoKill, this.getX = g(t, "x"), this.getY = g(t, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != e.x ? (this.add(this, "x", this.x, v(e.x, t, "x", this.x, e.offsetX || 0), n, s, Math.round), this._props.push("scrollTo_x")) : this.skipX = 1, null != e.y ? (this.add(this, "y", this.y, v(e.y, t, "y", this.y, e.offsetY || 0), n, s, Math.round), this._props.push("scrollTo_y")) : this.skipY = 1
                },
                render: function (t, e) {
                    for (var r, n, i, s, a, u = e._pt, l = e.target, h = e.tween, p = e.autoKill, f = e.xPrev, g = e.yPrev, m = e.isWin; u;) u.r(t, u.d), u = u._next;
                    r = m || !e.skipX ? e.getX() : f, i = (n = m || !e.skipY ? e.getY() : g) - g, s = r - f, a = c.autoKillThreshold, e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), p && (!e.skipX && (s > a || s < -a) && r < d(l, "x") && (e.skipX = 1), !e.skipY && (i > a || i < -a) && n < d(l, "y") && (e.skipY = 1), e.skipX && e.skipY && (h.kill(), e.vars.onAutoKill && e.vars.onAutoKill.apply(h, e.vars.onAutoKillParams || []))), m ? o.scrollTo(e.skipX ? r : e.x, e.skipY ? n : e.y) : (e.skipY || (l.scrollTop = e.y), e.skipX || (l.scrollLeft = e.x)), e.xPrev = e.x, e.yPrev = e.y
                },
                kill: function (t) {
                    var e = "scrollTo" === t;
                    (e || "scrollTo_x" === t) && (this.skipX = 1), (e || "scrollTo_y" === t) && (this.skipY = 1)
                }
            };
        y.max = d, y.getOffset = m, y.buildGetter = g, h() && n.registerPlugin(y)
    }, function (t, e, r) {
        "use strict";
        r.d(e, "a", (function () {
            return x
        }));
        class n {
            constructor() {
                this.childNodes = []
            }
            get innerText() {
                return this.rawText
            }
        }
        var i;
        ! function (t) {
            t[t.ELEMENT_NODE = 1] = "ELEMENT_NODE", t[t.TEXT_NODE = 3] = "TEXT_NODE", t[t.COMMENT_NODE = 8] = "COMMENT_NODE"
        }(i || (i = {}));
        var o = i;
        class s extends n {
            constructor(t) {
                super(), this.rawText = t, this.nodeType = o.COMMENT_NODE
            }
            get text() {
                return this.rawText
            }
            toString() {
                return `\x3c!--${this.rawText}--\x3e`
            }
        }
        var a = r(10);
        class u extends n {
            constructor(t) {
                super(), this.rawText = t, this.nodeType = o.TEXT_NODE
            }
            get text() {
                return this.rawText
            }
            get isWhitespace() {
                return /^(\s|&nbsp;)*$/.test(this.rawText)
            }
            toString() {
                return this.text
            }
        }
        let c = {};

        function l(t, e) {
            return t ? e ? t.toLowerCase() === e.toLowerCase() : !t : !e
        }
        const h = {
            f145(t, e, r) {
                if (e = e || "", r = r || [], t.id !== e.substr(1)) return !1;
                for (let e = r, n = 0; n < e.length; n++)
                    if (-1 === t.classNames.indexOf(e[n])) return !1;
                return !0
            },
            f45(t, e, r) {
                e = e || "";
                for (let e = r = r || [], n = 0; n < e.length; n++)
                    if (-1 === t.classNames.indexOf(e[n])) return !1;
                return !0
            },
            f15: (t, e) => (e = e || "", t.id === e.substr(1)),
            f1(t, e) {
                if (e = e || "", t.id !== e.substr(1)) return !1
            },
            f5: () => !0,
            f55: (t, e, r, n) => (e = e || "", r = r || [], n = n || "", t.attributes.hasOwnProperty(n)),
            f245(t, e, r, n, i) {
                e = e || "", r = r || [], n = (n || "").toLowerCase(), i = i || "";
                const o = t.attributes;
                return Object.keys(o).some(t => {
                    const e = o[t];
                    return t.toLowerCase() === n && e === i
                })
            },
            f25(t, e, r, n, i) {
                e = e || "", r = r || [], n = (n || "").toLowerCase(), i = i || "";
                const o = t.attributes;
                return Object.keys(o).some(t => {
                    const e = o[t];
                    return t.toLowerCase() === n && e === i
                })
            },
            f2(t, e, r, n, i) {
                e = e || "", r = r || [], n = (n || "").toLowerCase(), i = i || "";
                const o = t.attributes;
                return Object.keys(o).some(t => {
                    const e = o[t];
                    return t.toLowerCase() === n && e === i
                })
            },
            f345(t, e, r) {
                if (e = e || "", r = r || [], !l(t.tagName, e)) return !1;
                for (let e = r, n = 0; n < e.length; n++)
                    if (-1 === t.classNames.indexOf(e[n])) return !1;
                return !0
            },
            f35: (t, e) => (e = e || "", l(t.tagName, e)),
            f3: (t, e) => (e = e || "", l(t.tagName, e))
        };
        class p {
            constructor(t) {
                this.nextMatch = 0, this.matchers = t.split(" ").map(t => {
                    if (c[t]) return c[t];
                    const e = t.split("."),
                        r = e[0],
                        n = e.slice(1).sort();
                    let i = "f",
                        o = "",
                        s = "";
                    if (r && "*" !== r)
                        if (r.startsWith("#")) i += "1";
                        else {
                            const t = /\[\s*([\w-]+)(\s*=\s*(('\s*(.*)'|"\s*(.*)")|(\S*)))?\s*\]/.exec(r);
                            t ? (o = t[1], s = t[5] || t[6] || t[7], i += "2") : i += "3"
                        } n.length > 0 && (i += "4"), i += "5";
                    const a = {
                        func: h[i],
                        tagName: r || "",
                        classes: n || "",
                        attr_key: o || "",
                        value: s || ""
                    };
                    return c[t] = a
                })
            }
            advance(t) {
                return !!(this.nextMatch < this.matchers.length && this.matchers[this.nextMatch].func(t, this.matchers[this.nextMatch].tagName, this.matchers[this.nextMatch].classes, this.matchers[this.nextMatch].attr_key, this.matchers[this.nextMatch].value)) && (this.nextMatch++, !0)
            }
            rewind() {
                this.nextMatch--
            }
            get matched() {
                return this.nextMatch === this.matchers.length
            }
            reset() {
                this.nextMatch = 0
            }
            flushCache() {
                c = {}
            }
        }

        function f(t) {
            return t[t.length - 1]
        }
        const d = new Map;
        d.set("DIV", !0), d.set("div", !0), d.set("P", !0), d.set("p", !0), d.set("LI", !0), d.set("li", !0), d.set("TD", !0), d.set("td", !0), d.set("SECTION", !0), d.set("section", !0), d.set("BR", !0), d.set("br", !0);
        class g extends n {
            constructor(t, e, r = "", n = null) {
                if (super(), this.rawAttrs = r, this.parentNode = n, this.classNames = [], this.nodeType = o.ELEMENT_NODE, this.rawTagName = t, this.rawAttrs = r || "", this.parentNode = n || null, this.childNodes = [], e.id && (this.id = e.id, r || (this.rawAttrs = `id="${e.id}"`)), e.class && (this.classNames = e.class.split(/\s+/), !r)) {
                    const t = `class="${this.classNames.join(" ")}"`;
                    this.rawAttrs ? this.rawAttrs += " " + t : this.rawAttrs = t
                }
            }
            remove() {
                if (this.parentNode) {
                    const t = this.parentNode.childNodes;
                    this.parentNode.childNodes = t.filter(t => this !== t)
                }
            }
            removeChild(t) {
                this.childNodes = this.childNodes.filter(e => e !== t)
            }
            exchangeChild(t, e) {
                const r = this.childNodes;
                this.childNodes = r.map(r => r === t ? e : r)
            }
            get tagName() {
                return this.rawTagName ? this.rawTagName.toUpperCase() : this.rawTagName
            }
            get rawText() {
                return this.childNodes.reduce((t, e) => t + e.rawText, "")
            }
            get text() {
                return Object(a.decode)(this.rawText)
            }
            get structuredText() {
                let t = [];
                const e = [t];
                return function r(n) {
                    if (n.nodeType === o.ELEMENT_NODE) d.get(n.rawTagName) ? (t.length > 0 && e.push(t = []), n.childNodes.forEach(r), t.length > 0 && e.push(t = [])) : n.childNodes.forEach(r);
                    else if (n.nodeType === o.TEXT_NODE)
                        if (n.isWhitespace) t.prependWhitespace = !0;
                        else {
                            let e = n.text;
                            t.prependWhitespace && (e = " " + e, t.prependWhitespace = !1), t.push(e)
                        }
                }(this), e.map(t => t.join("").trim().replace(/\s{2,}/g, " ")).join("\n").replace(/\s+$/, "")
            }
            toString() {
                const t = this.rawTagName;
                if (t) {
                    const e = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/i.test(t),
                        r = this.rawAttrs ? " " + this.rawAttrs : "";
                    return e ? `<${t}${r}>` : `<${t}${r}>${this.innerHTML}</${t}>`
                }
                return this.innerHTML
            }
            get innerHTML() {
                return this.childNodes.map(t => t.toString()).join("")
            }
            set_content(t, e = {}) {
                if (t instanceof n) t = [t];
                else if ("string" == typeof t) {
                    const r = x(t, e);
                    t = r.childNodes.length ? r.childNodes : [new u(t)]
                }
                this.childNodes = t
            }
            get outerHTML() {
                return this.toString()
            }
            trimRight(t) {
                for (let e = 0; e < this.childNodes.length; e++) {
                    const r = this.childNodes[e];
                    if (r.nodeType === o.ELEMENT_NODE) r.trimRight(t);
                    else {
                        const n = r.rawText.search(t);
                        n > -1 && (r.rawText = r.rawText.substr(0, n), this.childNodes.length = e + 1)
                    }
                }
                return this
            }
            get structure() {
                const t = [];
                let e = 0;

                function r(r) {
                    t.push("  ".repeat(e) + r)
                }
                return function t(n) {
                    const i = n.id ? "#" + n.id : "",
                        s = n.classNames.length ? "." + n.classNames.join(".") : "";
                    r(n.rawTagName + i + s), e++, n.childNodes.forEach(e => {
                        e.nodeType === o.ELEMENT_NODE ? t(e) : e.nodeType === o.TEXT_NODE && (e.isWhitespace || r("#text"))
                    }), e--
                }(this), t.join("\n")
            }
            removeWhitespace() {
                let t = 0;
                return this.childNodes.forEach(e => {
                    if (e.nodeType === o.TEXT_NODE) {
                        if (e.isWhitespace) return;
                        e.rawText = e.rawText.trim()
                    } else e.nodeType === o.ELEMENT_NODE && e.removeWhitespace();
                    this.childNodes[t++] = e
                }), this.childNodes.length = t, this
            }
            querySelectorAll(t) {
                let e;
                if (t instanceof p) e = t, e.reset();
                else {
                    if (t.includes(",")) {
                        const e = t.split(",");
                        return Array.from(e.reduce((t, e) => this.querySelectorAll(e.trim()).reduce((t, e) => t.add(e), t), new Set))
                    }
                    e = new p(t)
                }
                const r = [];
                return this.childNodes.reduce((n, i) => {
                    for (r.push([i, 0, !1]); r.length;) {
                        const i = f(r),
                            s = i[0];
                        if (0 === i[1]) {
                            if (s.nodeType !== o.ELEMENT_NODE) {
                                r.pop();
                                continue
                            }
                            const a = s;
                            if (i[2] = e.advance(a), i[2] && e.matched) {
                                n.push(a), n.push(...a.querySelectorAll(t)), e.rewind(), r.pop();
                                continue
                            }
                        }
                        i[1] < s.childNodes.length ? r.push([s.childNodes[i[1]++], 0, !1]) : (i[2] && e.rewind(), r.pop())
                    }
                    return n
                }, [])
            }
            querySelector(t) {
                let e;
                t instanceof p ? (e = t, e.reset()) : e = new p(t);
                const r = [];
                for (const t of this.childNodes)
                    for (r.push([t, 0, !1]); r.length;) {
                        const t = f(r),
                            n = t[0];
                        if (0 === t[1]) {
                            if (n.nodeType !== o.ELEMENT_NODE) {
                                r.pop();
                                continue
                            }
                            if (t[2] = e.advance(n), t[2] && e.matched) return n
                        }
                        t[1] < n.childNodes.length ? r.push([n.childNodes[t[1]++], 0, !1]) : (t[2] && e.rewind(), r.pop())
                    }
                return null
            }
            appendChild(t) {
                return this.childNodes.push(t), t instanceof g && (t.parentNode = this), t
            }
            get firstChild() {
                return this.childNodes[0]
            }
            get lastChild() {
                return f(this.childNodes)
            }
            get attributes() {
                if (this._attrs) return this._attrs;
                this._attrs = {};
                const t = this.rawAttributes;
                for (const e in t) {
                    const r = t[e] || "";
                    this._attrs[e] = Object(a.decode)(r)
                }
                return this._attrs
            }
            get rawAttributes() {
                if (this._rawAttrs) return this._rawAttrs;
                const t = {};
                if (this.rawAttrs) {
                    const e = /\b([a-z][a-z0-9-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|(\S+)))?/gi;
                    let r;
                    for (; r = e.exec(this.rawAttrs);) t[r[1]] = r[2] || r[3] || r[4] || null
                }
                return this._rawAttrs = t, t
            }
            removeAttribute(t) {
                const e = this.rawAttributes;
                delete e[t], this._attrs && delete this._attrs[t], this.rawAttrs = Object.keys(e).map(t => {
                    const r = JSON.stringify(e[t]);
                    return void 0 === r || "null" === r ? t : `${t}=${r}`
                }).join(" ")
            }
            hasAttribute(t) {
                return t in this.attributes
            }
            getAttribute(t) {
                return this.attributes[t]
            }
            setAttribute(t, e) {
                if (arguments.length < 2) throw new Error("Failed to execute 'setAttribute' on 'Element'");
                const r = this.rawAttributes;
                r[t] = String(e), this._attrs && (this._attrs[t] = Object(a.decode)(r[t])), this.rawAttrs = Object.keys(r).map(t => {
                    const e = JSON.stringify(r[t]);
                    return "null" === e || '""' === e ? t : `${t}=${e}`
                }).join(" ")
            }
            setAttributes(t) {
                this._attrs && delete this._attrs, this._rawAttrs && delete this._rawAttrs, this.rawAttrs = Object.keys(t).map(e => {
                    const r = t[e];
                    return "null" === r || '""' === r ? e : `${e}=${JSON.stringify(String(r))}`
                }).join(" ")
            }
            insertAdjacentHTML(t, e) {
                if (arguments.length < 2) throw new Error("2 arguments required");
                const r = x(e);
                if ("afterend" === t) {
                    const t = this.parentNode.childNodes.findIndex(t => t === this);
                    this.parentNode.childNodes.splice(t + 1, 0, ...r.childNodes), r.childNodes.forEach(t => {
                        t instanceof g && (t.parentNode = this.parentNode)
                    })
                } else if ("afterbegin" === t) this.childNodes.unshift(...r.childNodes);
                else if ("beforeend" === t) r.childNodes.forEach(t => {
                    this.appendChild(t)
                });
                else {
                    if ("beforebegin" !== t) throw new Error(`The value provided ('${t}') is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'`); {
                        const t = this.parentNode.childNodes.findIndex(t => t === this);
                        this.parentNode.childNodes.splice(t, 0, ...r.childNodes), r.childNodes.forEach(t => {
                            t instanceof g && (t.parentNode = this.parentNode)
                        })
                    }
                }
            }
            get nextSibling() {
                if (this.parentNode) {
                    const t = this.parentNode.childNodes;
                    let e = 0;
                    for (; e < t.length;)
                        if (this === t[e++]) return t[e] || null;
                    return null
                }
            }
            get nextElementSibling() {
                if (this.parentNode) {
                    const t = this.parentNode.childNodes;
                    let e = 0,
                        r = !1;
                    for (; e < t.length;) {
                        const n = t[e++];
                        if (r) {
                            if (n instanceof g) return n || null
                        } else this === n && (r = !0)
                    }
                    return null
                }
            }
        }
        const m = /<!--[^]*?(?=-->)-->|<(\/?)([a-z][-.:0-9_a-z]*)\s*([^>]*?)(\/?)>/gi,
            v = /(^|\s)(id|class)\s*=\s*("([^"]+)"|'([^']+)'|(\S+))/gi,
            b = {
                area: !0,
                AREA: !0,
                base: !0,
                BASE: !0,
                br: !0,
                BR: !0,
                col: !0,
                COL: !0,
                hr: !0,
                HR: !0,
                img: !0,
                IMG: !0,
                input: !0,
                INPUT: !0,
                link: !0,
                LINK: !0,
                meta: !0,
                META: !0,
                source: !0,
                SOURCE: !0,
                embed: !0,
                EMBED: !0,
                param: !0,
                PARAM: !0,
                track: !0,
                TRACK: !0,
                wbr: !0,
                WBR: !0
            },
            y = {
                li: {
                    li: !0,
                    LI: !0
                },
                LI: {
                    li: !0,
                    LI: !0
                },
                p: {
                    p: !0,
                    div: !0,
                    P: !0,
                    DIV: !0
                },
                P: {
                    p: !0,
                    div: !0,
                    P: !0,
                    DIV: !0
                },
                b: {
                    div: !0,
                    DIV: !0
                },
                B: {
                    div: !0,
                    DIV: !0
                },
                td: {
                    td: !0,
                    th: !0,
                    TD: !0,
                    TH: !0
                },
                TD: {
                    td: !0,
                    th: !0,
                    TD: !0,
                    TH: !0
                },
                th: {
                    td: !0,
                    th: !0,
                    TD: !0,
                    TH: !0
                },
                TH: {
                    td: !0,
                    th: !0,
                    TD: !0,
                    TH: !0
                },
                h1: {
                    h1: !0,
                    H1: !0
                },
                H1: {
                    h1: !0,
                    H1: !0
                },
                h2: {
                    h2: !0,
                    H2: !0
                },
                H2: {
                    h2: !0,
                    H2: !0
                },
                h3: {
                    h3: !0,
                    H3: !0
                },
                H3: {
                    h3: !0,
                    H3: !0
                },
                h4: {
                    h4: !0,
                    H4: !0
                },
                H4: {
                    h4: !0,
                    H4: !0
                },
                h5: {
                    h5: !0,
                    H5: !0
                },
                H5: {
                    h5: !0,
                    H5: !0
                },
                h6: {
                    h6: !0,
                    H6: !0
                },
                H6: {
                    h6: !0,
                    H6: !0
                }
            },
            w = {
                li: {
                    ul: !0,
                    ol: !0,
                    UL: !0,
                    OL: !0
                },
                LI: {
                    ul: !0,
                    ol: !0,
                    UL: !0,
                    OL: !0
                },
                a: {
                    div: !0,
                    DIV: !0
                },
                A: {
                    div: !0,
                    DIV: !0
                },
                b: {
                    div: !0,
                    DIV: !0
                },
                B: {
                    div: !0,
                    DIV: !0
                },
                i: {
                    div: !0,
                    DIV: !0
                },
                I: {
                    div: !0,
                    DIV: !0
                },
                p: {
                    div: !0,
                    DIV: !0
                },
                P: {
                    div: !0,
                    DIV: !0
                },
                td: {
                    tr: !0,
                    table: !0,
                    TR: !0,
                    TABLE: !0
                },
                TD: {
                    tr: !0,
                    table: !0,
                    TR: !0,
                    TABLE: !0
                },
                th: {
                    tr: !0,
                    table: !0,
                    TR: !0,
                    TABLE: !0
                },
                TH: {
                    tr: !0,
                    table: !0,
                    TR: !0,
                    TABLE: !0
                }
            },
            _ = "documentfragmentcontainer";

        function x(t, e = {
            lowerCaseTagName: !1,
            comment: !1
        }) {
            const r = e.blockTextElements || {
                    script: !0,
                    noscript: !0,
                    style: !0,
                    pre: !0
                },
                n = Object.keys(r),
                i = n.map(t => new RegExp(t, "i")),
                o = n.filter(t => r[t]).map(t => new RegExp(t, "i"));

            function a(t) {
                return o.some(e => e.test(t))
            }

            function c(t) {
                return i.some(e => e.test(t))
            }
            const l = new g(null, {});
            let h = l;
            const p = [l];
            let d, x = -1;
            for (t = `<${_}>${t}</${_}>`; d = m.exec(t);) {
                if (x > -1 && x + d[0].length < m.lastIndex) {
                    const e = t.substring(x, m.lastIndex - d[0].length);
                    h.appendChild(new u(e))
                }
                if (x = m.lastIndex, d[2] !== _)
                    if ("!" !== d[0][1]) {
                        if (e.lowerCaseTagName && (d[2] = d[2].toLowerCase()), !d[1]) {
                            const r = {};
                            for (let t; t = v.exec(d[3]);) r[t[2].toLowerCase()] = t[4] || t[5] || t[6];
                            const n = h.rawTagName;
                            if (!d[4] && y[n] && y[n][d[2]] && (p.pop(), h = f(p)), h = h.appendChild(new g(d[2], r, d[3])), p.push(h), c(d[2])) {
                                const r = `</${d[2]}>`,
                                    n = e.lowerCaseTagName ? t.toLocaleLowerCase().indexOf(r, m.lastIndex) : t.indexOf(r, m.lastIndex);
                                if (a(d[2])) {
                                    let e;
                                    e = -1 === n ? t.substr(m.lastIndex) : t.substring(m.lastIndex, n), e.length > 0 && h.appendChild(new u(e))
                                } - 1 === n ? x = m.lastIndex = t.length + 1 : (x = m.lastIndex = n + r.length, d[1] = "true")
                            }
                        }
                        if (d[1] || d[4] || b[d[2]])
                            for (;;) {
                                if (h.rawTagName === d[2]) {
                                    p.pop(), h = f(p);
                                    break
                                } {
                                    const t = h.tagName;
                                    if (w[t] && w[t][d[2]]) {
                                        p.pop(), h = f(p);
                                        continue
                                    }
                                    break
                                }
                            }
                    } else if (e.comment) {
                    const e = t.substring(x - 3, x - d[0].length + 4);
                    h.appendChild(new s(e))
                }
            }
            const E = Boolean(1 === p.length);
            if (!e.noFix) {
                const t = l;
                for (t.valid = E; p.length > 1;) {
                    const t = p.pop(),
                        e = f(p);
                    t.parentNode && t.parentNode.parentNode && (t.parentNode === e && t.tagName === e.tagName ? (e.removeChild(t), t.childNodes.forEach(t => {
                        e.parentNode.appendChild(t)
                    }), p.pop()) : (e.removeChild(t), t.childNodes.forEach(t => {
                        e.appendChild(t)
                    })))
                }
                return t.childNodes.forEach(t => {
                    t instanceof g && (t.parentNode = null)
                }), t
            }
            const T = new u(t);
            return T.valid = E, T
        }
    }, function (t, e, r) {
        "use strict";
        r.d(e, "a", (function () {
            return y
        }));
        var n = /iPhone/i,
            i = /iPod/i,
            o = /iPad/i,
            s = /\biOS-universal(?:.+)Mac\b/i,
            a = /\bAndroid(?:.+)Mobile\b/i,
            u = /Android/i,
            c = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
            l = /Silk/i,
            h = /Windows Phone/i,
            p = /\bWindows(?:.+)ARM\b/i,
            f = /BlackBerry/i,
            d = /BB10/i,
            g = /Opera Mini/i,
            m = /\b(CriOS|Chrome)(?:.+)Mobile/i,
            v = /Mobile(?:.+)Firefox\b/i,
            b = function (t) {
                return void 0 !== t && "MacIntel" === t.platform && "number" == typeof t.maxTouchPoints && t.maxTouchPoints > 1 && "undefined" == typeof MSStream
            };

        function y(t) {
            var e = {
                userAgent: "",
                platform: "",
                maxTouchPoints: 0
            };
            t || "undefined" == typeof navigator ? "string" == typeof t ? e.userAgent = t : t && t.userAgent && (e = {
                userAgent: t.userAgent,
                platform: t.platform,
                maxTouchPoints: t.maxTouchPoints || 0
            }) : e = {
                userAgent: navigator.userAgent,
                platform: navigator.platform,
                maxTouchPoints: navigator.maxTouchPoints || 0
            };
            var r = e.userAgent,
                y = r.split("[FBAN");
            void 0 !== y[1] && (r = y[0]), void 0 !== (y = r.split("Twitter"))[1] && (r = y[0]);
            var w = function (t) {
                    return function (e) {
                        return e.test(t)
                    }
                }(r),
                _ = {
                    apple: {
                        phone: w(n) && !w(h),
                        ipod: w(i),
                        tablet: !w(n) && (w(o) || b(e)) && !w(h),
                        universal: w(s),
                        device: (w(n) || w(i) || w(o) || w(s) || b(e)) && !w(h)
                    },
                    amazon: {
                        phone: w(c),
                        tablet: !w(c) && w(l),
                        device: w(c) || w(l)
                    },
                    android: {
                        phone: !w(h) && w(c) || !w(h) && w(a),
                        tablet: !w(h) && !w(c) && !w(a) && (w(l) || w(u)),
                        device: !w(h) && (w(c) || w(l) || w(a) || w(u)) || w(/\bokhttp\b/i)
                    },
                    windows: {
                        phone: w(h),
                        tablet: w(p),
                        device: w(h) || w(p)
                    },
                    other: {
                        blackberry: w(f),
                        blackberry10: w(d),
                        opera: w(g),
                        firefox: w(v),
                        chrome: w(m),
                        device: w(f) || w(d) || w(g) || w(v) || w(m)
                    },
                    any: !1,
                    phone: !1,
                    tablet: !1
                };
            return _.any = _.apple.device || _.android.device || _.windows.device || _.other.device, _.phone = _.apple.phone || _.android.phone || _.windows.phone, _.tablet = _.apple.tablet || _.android.tablet || _.windows.tablet, _
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e) {
        function r(e, n) {
            return t.exports = r = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            }, t.exports.default = t.exports, t.exports.__esModule = !0, r(e, n)
        }
        t.exports = r, t.exports.default = t.exports, t.exports.__esModule = !0
    }, function (t, e) {
        function r(e) {
            return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? (t.exports = r = function (t) {
                return typeof t
            }, t.exports.default = t.exports, t.exports.__esModule = !0) : (t.exports = r = function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, t.exports.default = t.exports, t.exports.__esModule = !0), r(e)
        }
        t.exports = r, t.exports.default = t.exports, t.exports.__esModule = !0
    }, function (t, e, r) {
        "use strict";
        var n = r(5),
            i = r(17),
            o = r(99),
            s = r(11);

        function a(t) {
            var e = new o(t),
                r = i(o.prototype.request, e);
            return n.extend(r, o.prototype, e), n.extend(r, e), r
        }
        var u = a(s);
        u.Axios = o, u.create = function (t) {
            return a(n.merge(s, t))
        }, u.Cancel = r(21), u.CancelToken = r(113), u.isCancel = r(20), u.all = function (t) {
            return Promise.all(t)
        }, u.spread = r(114), t.exports = u, t.exports.default = u
    }, function (t, e) {
        t.exports = function (t) {
            return null != t && null != t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
        }
    }, function (t, e, r) {
        "use strict";
        var n = r(11),
            i = r(5),
            o = r(108),
            s = r(109);

        function a(t) {
            this.defaults = t, this.interceptors = {
                request: new o,
                response: new o
            }
        }
        a.prototype.request = function (t) {
            "string" == typeof t && (t = i.merge({
                url: arguments[0]
            }, arguments[1])), (t = i.merge(n, {
                method: "get"
            }, this.defaults, t)).method = t.method.toLowerCase();
            var e = [s, void 0],
                r = Promise.resolve(t);
            for (this.interceptors.request.forEach((function (t) {
                    e.unshift(t.fulfilled, t.rejected)
                })), this.interceptors.response.forEach((function (t) {
                    e.push(t.fulfilled, t.rejected)
                })); e.length;) r = r.then(e.shift(), e.shift());
            return r
        }, i.forEach(["delete", "get", "head", "options"], (function (t) {
            a.prototype[t] = function (e, r) {
                return this.request(i.merge(r || {}, {
                    method: t,
                    url: e
                }))
            }
        })), i.forEach(["post", "put", "patch"], (function (t) {
            a.prototype[t] = function (e, r, n) {
                return this.request(i.merge(n || {}, {
                    method: t,
                    url: e,
                    data: r
                }))
            }
        })), t.exports = a
    }, function (t, e) {
        var r, n, i = t.exports = {};

        function o() {
            throw new Error("setTimeout has not been defined")
        }

        function s() {
            throw new Error("clearTimeout has not been defined")
        }

        function a(t) {
            if (r === setTimeout) return setTimeout(t, 0);
            if ((r === o || !r) && setTimeout) return r = setTimeout, setTimeout(t, 0);
            try {
                return r(t, 0)
            } catch (e) {
                try {
                    return r.call(null, t, 0)
                } catch (e) {
                    return r.call(this, t, 0)
                }
            }
        }! function () {
            try {
                r = "function" == typeof setTimeout ? setTimeout : o
            } catch (t) {
                r = o
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (t) {
                n = s
            }
        }();
        var u, c = [],
            l = !1,
            h = -1;

        function p() {
            l && u && (l = !1, u.length ? c = u.concat(c) : h = -1, c.length && f())
        }

        function f() {
            if (!l) {
                var t = a(p);
                l = !0;
                for (var e = c.length; e;) {
                    for (u = c, c = []; ++h < e;) u && u[h].run();
                    h = -1, e = c.length
                }
                u = null, l = !1,
                    function (t) {
                        if (n === clearTimeout) return clearTimeout(t);
                        if ((n === s || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
                        try {
                            n(t)
                        } catch (e) {
                            try {
                                return n.call(null, t)
                            } catch (e) {
                                return n.call(this, t)
                            }
                        }
                    }(t)
            }
        }

        function d(t, e) {
            this.fun = t, this.array = e
        }

        function g() {}
        i.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
            c.push(new d(t, e)), 1 !== c.length || l || a(f)
        }, d.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = g, i.addListener = g, i.once = g, i.off = g, i.removeListener = g, i.removeAllListeners = g, i.emit = g, i.prependListener = g, i.prependOnceListener = g, i.listeners = function (t) {
            return []
        }, i.binding = function (t) {
            throw new Error("process.binding is not supported")
        }, i.cwd = function () {
            return "/"
        }, i.chdir = function (t) {
            throw new Error("process.chdir is not supported")
        }, i.umask = function () {
            return 0
        }
    }, function (t, e, r) {
        "use strict";
        var n = r(5);
        t.exports = function (t, e) {
            n.forEach(t, (function (r, n) {
                n !== e && n.toUpperCase() === e.toUpperCase() && (t[e] = r, delete t[n])
            }))
        }
    }, function (t, e, r) {
        "use strict";
        var n = r(19);
        t.exports = function (t, e, r) {
            var i = r.config.validateStatus;
            r.status && i && !i(r.status) ? e(n("Request failed with status code " + r.status, r.config, null, r.request, r)) : t(r)
        }
    }, function (t, e, r) {
        "use strict";
        t.exports = function (t, e, r, n, i) {
            return t.config = e, r && (t.code = r), t.request = n, t.response = i, t
        }
    }, function (t, e, r) {
        "use strict";
        var n = r(5);

        function i(t) {
            return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        t.exports = function (t, e, r) {
            if (!e) return t;
            var o;
            if (r) o = r(e);
            else if (n.isURLSearchParams(e)) o = e.toString();
            else {
                var s = [];
                n.forEach(e, (function (t, e) {
                    null != t && (n.isArray(t) ? e += "[]" : t = [t], n.forEach(t, (function (t) {
                        n.isDate(t) ? t = t.toISOString() : n.isObject(t) && (t = JSON.stringify(t)), s.push(i(e) + "=" + i(t))
                    })))
                })), o = s.join("&")
            }
            return o && (t += (-1 === t.indexOf("?") ? "?" : "&") + o), t
        }
    }, function (t, e, r) {
        "use strict";
        var n = r(5),
            i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        t.exports = function (t) {
            var e, r, o, s = {};
            return t ? (n.forEach(t.split("\n"), (function (t) {
                if (o = t.indexOf(":"), e = n.trim(t.substr(0, o)).toLowerCase(), r = n.trim(t.substr(o + 1)), e) {
                    if (s[e] && i.indexOf(e) >= 0) return;
                    s[e] = "set-cookie" === e ? (s[e] ? s[e] : []).concat([r]) : s[e] ? s[e] + ", " + r : r
                }
            })), s) : s
        }
    }, function (t, e, r) {
        "use strict";
        var n = r(5);
        t.exports = n.isStandardBrowserEnv() ? function () {
            var t, e = /(msie|trident)/i.test(navigator.userAgent),
                r = document.createElement("a");

            function i(t) {
                var n = t;
                return e && (r.setAttribute("href", n), n = r.href), r.setAttribute("href", n), {
                    href: r.href,
                    protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                    host: r.host,
                    search: r.search ? r.search.replace(/^\?/, "") : "",
                    hash: r.hash ? r.hash.replace(/^#/, "") : "",
                    hostname: r.hostname,
                    port: r.port,
                    pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
                }
            }
            return t = i(window.location.href),
                function (e) {
                    var r = n.isString(e) ? i(e) : e;
                    return r.protocol === t.protocol && r.host === t.host
                }
        }() : function () {
            return !0
        }
    }, function (t, e, r) {
        "use strict";
        var n = r(5);
        t.exports = n.isStandardBrowserEnv() ? {
            write: function (t, e, r, i, o, s) {
                var a = [];
                a.push(t + "=" + encodeURIComponent(e)), n.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()), n.isString(i) && a.push("path=" + i), n.isString(o) && a.push("domain=" + o), !0 === s && a.push("secure"), document.cookie = a.join("; ")
            },
            read: function (t) {
                var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                return e ? decodeURIComponent(e[3]) : null
            },
            remove: function (t) {
                this.write(t, "", Date.now() - 864e5)
            }
        } : {
            write: function () {},
            read: function () {
                return null
            },
            remove: function () {}
        }
    }, function (t, e, r) {
        "use strict";
        var n = r(5);

        function i() {
            this.handlers = []
        }
        i.prototype.use = function (t, e) {
            return this.handlers.push({
                fulfilled: t,
                rejected: e
            }), this.handlers.length - 1
        }, i.prototype.eject = function (t) {
            this.handlers[t] && (this.handlers[t] = null)
        }, i.prototype.forEach = function (t) {
            n.forEach(this.handlers, (function (e) {
                null !== e && t(e)
            }))
        }, t.exports = i
    }, function (t, e, r) {
        "use strict";
        var n = r(5),
            i = r(110),
            o = r(20),
            s = r(11),
            a = r(111),
            u = r(112);

        function c(t) {
            t.cancelToken && t.cancelToken.throwIfRequested()
        }
        t.exports = function (t) {
            return c(t), t.baseURL && !a(t.url) && (t.url = u(t.baseURL, t.url)), t.headers = t.headers || {}, t.data = i(t.data, t.headers, t.transformRequest), t.headers = n.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {}), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function (e) {
                delete t.headers[e]
            })), (t.adapter || s.adapter)(t).then((function (e) {
                return c(t), e.data = i(e.data, e.headers, t.transformResponse), e
            }), (function (e) {
                return o(e) || (c(t), e && e.response && (e.response.data = i(e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e)
            }))
        }
    }, function (t, e, r) {
        "use strict";
        var n = r(5);
        t.exports = function (t, e, r) {
            return n.forEach(r, (function (r) {
                t = r(t, e)
            })), t
        }
    }, function (t, e, r) {
        "use strict";
        t.exports = function (t) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
        }
    }, function (t, e, r) {
        "use strict";
        t.exports = function (t, e) {
            return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
        }
    }, function (t, e, r) {
        "use strict";
        var n = r(21);

        function i(t) {
            if ("function" != typeof t) throw new TypeError("executor must be a function.");
            var e;
            this.promise = new Promise((function (t) {
                e = t
            }));
            var r = this;
            t((function (t) {
                r.reason || (r.reason = new n(t), e(r.reason))
            }))
        }
        i.prototype.throwIfRequested = function () {
            if (this.reason) throw this.reason
        }, i.source = function () {
            var t;
            return {
                token: new i((function (e) {
                    t = e
                })),
                cancel: t
            }
        }, t.exports = i
    }, function (t, e, r) {
        "use strict";
        t.exports = function (t) {
            return function (e) {
                return t.apply(null, e)
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function () {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function () {
                    return t.i
                }
            }), t.webpackPolyfill = 1), t
        }
    }, function (t, e) {
        var r;
        r = function () {
            return this
        }();
        try {
            r = r || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (r = window)
        }
        t.exports = r
    }, function (t, e, r) {
        var n = r(22);
        t.exports = function (t) {
            if (Array.isArray(t)) return n(t)
        }, t.exports.default = t.exports, t.exports.__esModule = !0
    }, function (t, e) {
        t.exports = function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }, t.exports.default = t.exports, t.exports.__esModule = !0
    }, function (t, e, r) {
        var n = r(22);
        t.exports = function (t, e) {
            if (t) {
                if ("string" == typeof t) return n(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(t, e) : void 0
            }
        }, t.exports.default = t.exports, t.exports.__esModule = !0
    }, function (t, e) {
        t.exports = function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }, t.exports.default = t.exports, t.exports.__esModule = !0
    }, function (t, e, r) {
        var n, i;
        "undefined" != typeof window && window, void 0 === (i = "function" == typeof (n = function () {
            "use strict";

            function t() {}
            var e = t.prototype;
            return e.on = function (t, e) {
                if (t && e) {
                    var r = this._events = this._events || {},
                        n = r[t] = r[t] || [];
                    return -1 == n.indexOf(e) && n.push(e), this
                }
            }, e.once = function (t, e) {
                if (t && e) {
                    this.on(t, e);
                    var r = this._onceEvents = this._onceEvents || {};
                    return (r[t] = r[t] || {})[e] = !0, this
                }
            }, e.off = function (t, e) {
                var r = this._events && this._events[t];
                if (r && r.length) {
                    var n = r.indexOf(e);
                    return -1 != n && r.splice(n, 1), this
                }
            }, e.emitEvent = function (t, e) {
                var r = this._events && this._events[t];
                if (r && r.length) {
                    r = r.slice(0), e = e || [];
                    for (var n = this._onceEvents && this._onceEvents[t], i = 0; i < r.length; i++) {
                        var o = r[i];
                        n && n[o] && (this.off(t, o), delete n[o]), o.apply(this, e)
                    }
                    return this
                }
            }, e.allOff = function () {
                delete this._events, delete this._onceEvents
            }, t
        }) ? n.call(e, r, e, t) : n) || (t.exports = i)
    }, function (t, e, r) {
        var n = function (t) {
            "use strict";
            var e = Object.prototype,
                r = e.hasOwnProperty,
                n = "function" == typeof Symbol ? Symbol : {},
                i = n.iterator || "@@iterator",
                o = n.asyncIterator || "@@asyncIterator",
                s = n.toStringTag || "@@toStringTag";

            function a(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[e]
            }
            try {
                a({}, "")
            } catch (t) {
                a = function (t, e, r) {
                    return t[e] = r
                }
            }

            function u(t, e, r, n) {
                var i = e && e.prototype instanceof h ? e : h,
                    o = Object.create(i.prototype),
                    s = new E(n || []);
                return o._invoke = function (t, e, r) {
                    var n = "suspendedStart";
                    return function (i, o) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === i) throw o;
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                        for (r.method = i, r.arg = o;;) {
                            var s = r.delegate;
                            if (s) {
                                var a = w(s, r);
                                if (a) {
                                    if (a === l) continue;
                                    return a
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === n) throw n = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = "executing";
                            var u = c(t, e, r);
                            if ("normal" === u.type) {
                                if (n = r.done ? "completed" : "suspendedYield", u.arg === l) continue;
                                return {
                                    value: u.arg,
                                    done: r.done
                                }
                            }
                            "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                        }
                    }
                }(t, r, s), o
            }

            function c(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = u;
            var l = {};

            function h() {}

            function p() {}

            function f() {}
            var d = {};
            d[i] = function () {
                return this
            };
            var g = Object.getPrototypeOf,
                m = g && g(g(T([])));
            m && m !== e && r.call(m, i) && (d = m);
            var v = f.prototype = h.prototype = Object.create(d);

            function b(t) {
                ["next", "throw", "return"].forEach((function (e) {
                    a(t, e, (function (t) {
                        return this._invoke(e, t)
                    }))
                }))
            }

            function y(t, e) {
                var n;
                this._invoke = function (i, o) {
                    function s() {
                        return new e((function (n, s) {
                            ! function n(i, o, s, a) {
                                var u = c(t[i], t, o);
                                if ("throw" !== u.type) {
                                    var l = u.arg,
                                        h = l.value;
                                    return h && "object" == typeof h && r.call(h, "__await") ? e.resolve(h.__await).then((function (t) {
                                        n("next", t, s, a)
                                    }), (function (t) {
                                        n("throw", t, s, a)
                                    })) : e.resolve(h).then((function (t) {
                                        l.value = t, s(l)
                                    }), (function (t) {
                                        return n("throw", t, s, a)
                                    }))
                                }
                                a(u.arg)
                            }(i, o, n, s)
                        }))
                    }
                    return n = n ? n.then(s, s) : s()
                }
            }

            function w(t, e) {
                var r = t.iterator[e.method];
                if (void 0 === r) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return l;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return l
                }
                var n = c(r, t.iterator, e.arg);
                if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, l;
                var i = n.arg;
                return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
            }

            function _(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function x(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function E(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(_, this), this.reset(!0)
            }

            function T(t) {
                if (t) {
                    var e = t[i];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var n = -1,
                            o = function e() {
                                for (; ++n < t.length;)
                                    if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                return e.value = void 0, e.done = !0, e
                            };
                        return o.next = o
                    }
                }
                return {
                    next: A
                }
            }

            function A() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return p.prototype = v.constructor = f, f.constructor = p, p.displayName = a(f, s, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
            }, t.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, a(t, s, "GeneratorFunction")), t.prototype = Object.create(v), t
            }, t.awrap = function (t) {
                return {
                    __await: t
                }
            }, b(y.prototype), y.prototype[o] = function () {
                return this
            }, t.AsyncIterator = y, t.async = function (e, r, n, i, o) {
                void 0 === o && (o = Promise);
                var s = new y(u(e, r, n, i), o);
                return t.isGeneratorFunction(r) ? s : s.next().then((function (t) {
                    return t.done ? t.value : s.next()
                }))
            }, b(v), a(v, s, "Generator"), v[i] = function () {
                return this
            }, v.toString = function () {
                return "[object Generator]"
            }, t.keys = function (t) {
                var e = [];
                for (var r in t) e.push(r);
                return e.reverse(),
                    function r() {
                        for (; e.length;) {
                            var n = e.pop();
                            if (n in t) return r.value = n, r.done = !1, r
                        }
                        return r.done = !0, r
                    }
            }, t.values = T, E.prototype = {
                constructor: E,
                reset: function (t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
                        for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function (t) {
                    if (this.done) throw t;
                    var e = this;

                    function n(r, n) {
                        return s.type = "throw", s.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var o = this.tryEntries[i],
                            s = o.completion;
                        if ("root" === o.tryLoc) return n("end");
                        if (o.tryLoc <= this.prev) {
                            var a = r.call(o, "catchLoc"),
                                u = r.call(o, "finallyLoc");
                            if (a && u) {
                                if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                            } else if (a) {
                                if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                            } else {
                                if (!u) throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function (t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var i = this.tryEntries[n];
                        if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var o = i;
                            break
                        }
                    }
                    o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                    var s = o ? o.completion : {};
                    return s.type = t, s.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, l) : this.complete(s)
                },
                complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                },
                finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), l
                    }
                },
                catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.tryLoc === t) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var i = n.arg;
                                x(r)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function (t, e, r) {
                    return this.delegate = {
                        iterator: T(t),
                        resultName: e,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = void 0), l
                }
            }, t
        }(t.exports);
        try {
            regeneratorRuntime = n
        } catch (t) {
            Function("r", "regeneratorRuntime = r")(n)
        }
    }]
]);