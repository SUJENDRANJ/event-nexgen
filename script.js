(self.webpackChunk = self.webpackChunk || []).push([
  ["960"],
  {
    5487: function () {
      "use strict";
      window.tram = (function (e) {
        function t(e, t) {
          return new U.Bare().init(e, t);
        }
        function n(e) {
          var t = parseInt(e.slice(1), 16);
          return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
        }
        function a(e, t, n) {
          return (
            "#" + (0x1000000 | (e << 16) | (t << 8) | n).toString(16).slice(1)
          );
        }
        function i() {}
        function o(e, t, n) {
          if ((void 0 !== t && (n = t), void 0 === e)) return n;
          var a = n;
          return (
            $.test(e) || !q.test(e)
              ? (a = parseInt(e, 10))
              : q.test(e) && (a = 1e3 * parseFloat(e)),
            0 > a && (a = 0),
            a == a ? a : n
          );
        }
        function r(e) {
          B.debug && window && window.console.warn(e);
        }
        var c,
          d,
          l,
          s = (function (e, t, n) {
            function a(e) {
              return "object" == typeof e;
            }
            function i(e) {
              return "function" == typeof e;
            }
            function o() {}
            return function r(c, d) {
              function l() {
                var e = new s();
                return i(e.init) && e.init.apply(e, arguments), e;
              }
              function s() {}
              d === n && ((d = c), (c = Object)), (l.Bare = s);
              var u,
                f = (o[e] = c[e]),
                p = (s[e] = l[e] = new o());
              return (
                (p.constructor = l),
                (l.mixin = function (t) {
                  return (s[e] = l[e] = r(l, t)[e]), l;
                }),
                (l.open = function (e) {
                  if (
                    ((u = {}),
                    i(e) ? (u = e.call(l, p, f, l, c)) : a(e) && (u = e),
                    a(u))
                  )
                    for (var n in u) t.call(u, n) && (p[n] = u[n]);
                  return i(p.init) || (p.init = c), l;
                }),
                l.open(d)
              );
            };
          })("prototype", {}.hasOwnProperty),
          u = {
            ease: [
              "ease",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return (
                  t +
                  n *
                    (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + 0.25 * e)
                );
              },
            ],
            "ease-in": [
              "ease-in",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return t + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i);
              },
            ],
            "ease-out": [
              "ease-out",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return (
                  t +
                  n *
                    (0.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * e)
                );
              },
            ],
            "ease-in-out": [
              "ease-in-out",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return t + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i);
              },
            ],
            linear: [
              "linear",
              function (e, t, n, a) {
                return (n * e) / a + t;
              },
            ],
            "ease-in-quad": [
              "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
              function (e, t, n, a) {
                return n * (e /= a) * e + t;
              },
            ],
            "ease-out-quad": [
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
              function (e, t, n, a) {
                return -n * (e /= a) * (e - 2) + t;
              },
            ],
            "ease-in-out-quad": [
              "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e + t
                  : (-n / 2) * (--e * (e - 2) - 1) + t;
              },
            ],
            "ease-in-cubic": [
              "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e + t;
              },
            ],
            "ease-out-cubic": [
              "cubic-bezier(0.215, 0.610, 0.355, 1)",
              function (e, t, n, a) {
                return n * ((e = e / a - 1) * e * e + 1) + t;
              },
            ],
            "ease-in-out-cubic": [
              "cubic-bezier(0.645, 0.045, 0.355, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e + 2) + t;
              },
            ],
            "ease-in-quart": [
              "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e * e + t;
              },
            ],
            "ease-out-quart": [
              "cubic-bezier(0.165, 0.840, 0.440, 1)",
              function (e, t, n, a) {
                return -n * ((e = e / a - 1) * e * e * e - 1) + t;
              },
            ],
            "ease-in-out-quart": [
              "cubic-bezier(0.770, 0, 0.175, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e * e + t
                  : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
              },
            ],
            "ease-in-quint": [
              "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e * e * e + t;
              },
            ],
            "ease-out-quint": [
              "cubic-bezier(0.230, 1, 0.320, 1)",
              function (e, t, n, a) {
                return n * ((e = e / a - 1) * e * e * e * e + 1) + t;
              },
            ],
            "ease-in-out-quint": [
              "cubic-bezier(0.860, 0, 0.070, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
              },
            ],
            "ease-in-sine": [
              "cubic-bezier(0.470, 0, 0.745, 0.715)",
              function (e, t, n, a) {
                return -n * Math.cos((e / a) * (Math.PI / 2)) + n + t;
              },
            ],
            "ease-out-sine": [
              "cubic-bezier(0.390, 0.575, 0.565, 1)",
              function (e, t, n, a) {
                return n * Math.sin((e / a) * (Math.PI / 2)) + t;
              },
            ],
            "ease-in-out-sine": [
              "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
              function (e, t, n, a) {
                return (-n / 2) * (Math.cos((Math.PI * e) / a) - 1) + t;
              },
            ],
            "ease-in-expo": [
              "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
              function (e, t, n, a) {
                return 0 === e ? t : n * Math.pow(2, 10 * (e / a - 1)) + t;
              },
            ],
            "ease-out-expo": [
              "cubic-bezier(0.190, 1, 0.220, 1)",
              function (e, t, n, a) {
                return e === a
                  ? t + n
                  : n * (-Math.pow(2, (-10 * e) / a) + 1) + t;
              },
            ],
            "ease-in-out-expo": [
              "cubic-bezier(1, 0, 0, 1)",
              function (e, t, n, a) {
                return 0 === e
                  ? t
                  : e === a
                  ? t + n
                  : (e /= a / 2) < 1
                  ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
                  : (n / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
              },
            ],
            "ease-in-circ": [
              "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
              function (e, t, n, a) {
                return -n * (Math.sqrt(1 - (e /= a) * e) - 1) + t;
              },
            ],
            "ease-out-circ": [
              "cubic-bezier(0.075, 0.820, 0.165, 1)",
              function (e, t, n, a) {
                return n * Math.sqrt(1 - (e = e / a - 1) * e) + t;
              },
            ],
            "ease-in-out-circ": [
              "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t
                  : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
              },
            ],
            "ease-in-back": [
              "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  n * (e /= a) * e * ((i + 1) * e - i) + t
                );
              },
            ],
            "ease-out-back": [
              "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  n * ((e = e / a - 1) * e * ((i + 1) * e + i) + 1) + t
                );
              },
            ],
            "ease-in-out-back": [
              "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  (e /= a / 2) < 1
                    ? (n / 2) * e * e * (((i *= 1.525) + 1) * e - i) + t
                    : (n / 2) *
                        ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) +
                      t
                );
              },
            ],
          },
          f = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
          },
          p = window,
          g = "bkwld-tram",
          E = /[\-\.0-9]/g,
          y = /[A-Z]/,
          T = "number",
          I = /^(rgb|#)/,
          b = /(em|cm|mm|in|pt|pc|px)$/,
          m = /(em|cm|mm|in|pt|pc|px|%)$/,
          O = /(deg|rad|turn)$/,
          v = "unitless",
          _ = /(all|none) 0s ease 0s/,
          R = /^(width|height)$/,
          h = document.createElement("a"),
          N = ["Webkit", "Moz", "O", "ms"],
          A = ["-webkit-", "-moz-", "-o-", "-ms-"],
          L = function (e) {
            if (e in h.style) return { dom: e, css: e };
            var t,
              n,
              a = "",
              i = e.split("-");
            for (t = 0; t < i.length; t++)
              a += i[t].charAt(0).toUpperCase() + i[t].slice(1);
            for (t = 0; t < N.length; t++)
              if ((n = N[t] + a) in h.style) return { dom: n, css: A[t] + e };
          },
          S = (t.support = {
            bind: Function.prototype.bind,
            transform: L("transform"),
            transition: L("transition"),
            backface: L("backface-visibility"),
            timing: L("transition-timing-function"),
          });
        if (S.transition) {
          var C = S.timing.dom;
          if (((h.style[C] = u["ease-in-back"][0]), !h.style[C]))
            for (var w in f) u[w][0] = f[w];
        }
        var M = (t.frame =
            (c =
              p.requestAnimationFrame ||
              p.webkitRequestAnimationFrame ||
              p.mozRequestAnimationFrame ||
              p.oRequestAnimationFrame ||
              p.msRequestAnimationFrame) && S.bind
              ? c.bind(p)
              : function (e) {
                  p.setTimeout(e, 16);
                }),
          x = (t.now =
            (l =
              (d = p.performance) &&
              (d.now || d.webkitNow || d.msNow || d.mozNow)) && S.bind
              ? l.bind(d)
              : Date.now ||
                function () {
                  return +new Date();
                }),
          P = s(function (t) {
            function n(e, t) {
              var n = (function (e) {
                  for (var t = -1, n = e ? e.length : 0, a = []; ++t < n; ) {
                    var i = e[t];
                    i && a.push(i);
                  }
                  return a;
                })(("" + e).split(" ")),
                a = n[0];
              t = t || {};
              var i = W[a];
              if (!i) return r("Unsupported property: " + a);
              if (!t.weak || !this.props[a]) {
                var o = i[0],
                  c = this.props[a];
                return (
                  c || (c = this.props[a] = new o.Bare()),
                  c.init(this.$el, n, i, t),
                  c
                );
              }
            }
            function a(e, t, a) {
              if (e) {
                var r = typeof e;
                if (
                  (t ||
                    (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  "number" == r && t)
                )
                  return (
                    (this.timer = new X({
                      duration: e,
                      context: this,
                      complete: i,
                    })),
                    void (this.active = !0)
                  );
                if ("string" == r && t) {
                  switch (e) {
                    case "hide":
                      d.call(this);
                      break;
                    case "stop":
                      c.call(this);
                      break;
                    case "redraw":
                      l.call(this);
                      break;
                    default:
                      n.call(this, e, a && a[1]);
                  }
                  return i.call(this);
                }
                if ("function" == r) return void e.call(this, this);
                if ("object" == r) {
                  var f = 0;
                  u.call(
                    this,
                    e,
                    function (e, t) {
                      e.span > f && (f = e.span), e.stop(), e.animate(t);
                    },
                    function (e) {
                      "wait" in e && (f = o(e.wait, 0));
                    }
                  ),
                    s.call(this),
                    f > 0 &&
                      ((this.timer = new X({ duration: f, context: this })),
                      (this.active = !0),
                      t && (this.timer.complete = i));
                  var p = this,
                    g = !1,
                    E = {};
                  M(function () {
                    u.call(p, e, function (e) {
                      e.active && ((g = !0), (E[e.name] = e.nextStyle));
                    }),
                      g && p.$el.css(E);
                  });
                }
              }
            }
            function i() {
              if (
                (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
              ) {
                var e = this.queue.shift();
                a.call(this, e.options, !0, e.args);
              }
            }
            function c(e) {
              var t;
              this.timer && this.timer.destroy(),
                (this.queue = []),
                (this.active = !1),
                "string" == typeof e
                  ? ((t = {})[e] = 1)
                  : (t = "object" == typeof e && null != e ? e : this.props),
                u.call(this, t, f),
                s.call(this);
            }
            function d() {
              c.call(this), (this.el.style.display = "none");
            }
            function l() {
              this.el.offsetHeight;
            }
            function s() {
              var e,
                t,
                n = [];
              for (e in (this.upstream && n.push(this.upstream), this.props))
                (t = this.props[e]).active && n.push(t.string);
              (n = n.join(",")),
                this.style !== n &&
                  ((this.style = n), (this.el.style[S.transition.dom] = n));
            }
            function u(e, t, a) {
              var i,
                o,
                r,
                c,
                d = t !== f,
                l = {};
              for (i in e)
                (r = e[i]),
                  i in Q
                    ? (l.transform || (l.transform = {}), (l.transform[i] = r))
                    : (y.test(i) &&
                        (i = i.replace(/[A-Z]/g, function (e) {
                          return "-" + e.toLowerCase();
                        })),
                      i in W ? (l[i] = r) : (c || (c = {}), (c[i] = r)));
              for (i in l) {
                if (((r = l[i]), !(o = this.props[i]))) {
                  if (!d) continue;
                  o = n.call(this, i);
                }
                t.call(this, o, r);
              }
              a && c && a.call(this, c);
            }
            function f(e) {
              e.stop();
            }
            function p(e, t) {
              e.set(t);
            }
            function E(e) {
              this.$el.css(e);
            }
            function T(e, n) {
              t[e] = function () {
                return this.children
                  ? I.call(this, n, arguments)
                  : (this.el && n.apply(this, arguments), this);
              };
            }
            function I(e, t) {
              var n,
                a = this.children.length;
              for (n = 0; a > n; n++) e.apply(this.children[n], t);
              return this;
            }
            (t.init = function (t) {
              if (
                ((this.$el = e(t)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                B.keepInherited && !B.fallback)
              ) {
                var n = Y(this.el, "transition");
                n && !_.test(n) && (this.upstream = n);
              }
              S.backface &&
                B.hideBackface &&
                z(this.el, S.backface.css, "hidden");
            }),
              T("add", n),
              T("start", a),
              T("wait", function (e) {
                (e = o(e, 0)),
                  this.active
                    ? this.queue.push({ options: e })
                    : ((this.timer = new X({
                        duration: e,
                        context: this,
                        complete: i,
                      })),
                      (this.active = !0));
              }),
              T("then", function (e) {
                return this.active
                  ? (this.queue.push({ options: e, args: arguments }),
                    void (this.timer.complete = i))
                  : r(
                      "No active transition timer. Use start() or wait() before then()."
                    );
              }),
              T("next", i),
              T("stop", c),
              T("set", function (e) {
                c.call(this, e), u.call(this, e, p, E);
              }),
              T("show", function (e) {
                "string" != typeof e && (e = "block"),
                  (this.el.style.display = e);
              }),
              T("hide", d),
              T("redraw", l),
              T("destroy", function () {
                c.call(this),
                  e.removeData(this.el, g),
                  (this.$el = this.el = null);
              });
          }),
          U = s(P, function (t) {
            function n(t, n) {
              var a = e.data(t, g) || e.data(t, g, new P.Bare());
              return a.el || a.init(t), n ? a.start(n) : a;
            }
            t.init = function (t, a) {
              var i = e(t);
              if (!i.length) return this;
              if (1 === i.length) return n(i[0], a);
              var o = [];
              return (
                i.each(function (e, t) {
                  o.push(n(t, a));
                }),
                (this.children = o),
                this
              );
            };
          }),
          F = s(function (e) {
            function t() {
              var e = this.get();
              this.update("auto");
              var t = this.get();
              return this.update(e), t;
            }
            (e.init = function (e, t, n, a) {
              (this.$el = e), (this.el = e[0]);
              var i,
                r,
                c,
                d = t[0];
              n[2] && (d = n[2]),
                j[d] && (d = j[d]),
                (this.name = d),
                (this.type = n[1]),
                (this.duration = o(t[1], this.duration, 500)),
                (this.ease =
                  ((i = t[2]),
                  (r = this.ease),
                  (c = "ease"),
                  void 0 !== r && (c = r),
                  i in u ? i : c)),
                (this.delay = o(t[3], this.delay, 0)),
                (this.span = this.duration + this.delay),
                (this.active = !1),
                (this.nextStyle = null),
                (this.auto = R.test(this.name)),
                (this.unit = a.unit || this.unit || B.defaultUnit),
                (this.angle = a.angle || this.angle || B.defaultAngle),
                B.fallback || a.fallback
                  ? (this.animate = this.fallback)
                  : ((this.animate = this.transition),
                    (this.string =
                      this.name +
                      " " +
                      this.duration +
                      "ms" +
                      ("ease" != this.ease ? " " + u[this.ease][0] : "") +
                      (this.delay ? " " + this.delay + "ms" : "")));
            }),
              (e.set = function (e) {
                (e = this.convert(e, this.type)), this.update(e), this.redraw();
              }),
              (e.transition = function (e) {
                (this.active = !0),
                  (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == this.el.style[this.name] &&
                      (this.update(this.get()), this.redraw()),
                    "auto" == e && (e = t.call(this))),
                  (this.nextStyle = e);
              }),
              (e.fallback = function (e) {
                var n =
                  this.el.style[this.name] ||
                  this.convert(this.get(), this.type);
                (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == n && (n = this.convert(this.get(), this.type)),
                    "auto" == e && (e = t.call(this))),
                  (this.tween = new k({
                    from: n,
                    to: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  }));
              }),
              (e.get = function () {
                return Y(this.el, this.name);
              }),
              (e.update = function (e) {
                z(this.el, this.name, e);
              }),
              (e.stop = function () {
                (this.active || this.nextStyle) &&
                  ((this.active = !1),
                  (this.nextStyle = null),
                  z(this.el, this.name, this.get()));
                var e = this.tween;
                e && e.context && e.destroy();
              }),
              (e.convert = function (e, t) {
                if ("auto" == e && this.auto) return e;
                var n,
                  i,
                  o = "number" == typeof e,
                  c = "string" == typeof e;
                switch (t) {
                  case T:
                    if (o) return e;
                    if (c && "" === e.replace(E, "")) return +e;
                    i = "number(unitless)";
                    break;
                  case I:
                    if (c) {
                      if ("" === e && this.original) return this.original;
                      if (t.test(e))
                        return "#" == e.charAt(0) && 7 == e.length
                          ? e
                          : ((n = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e))
                              ? a(n[1], n[2], n[3])
                              : e
                            ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                    }
                    i = "hex or rgb string";
                    break;
                  case b:
                    if (o) return e + this.unit;
                    if (c && t.test(e)) return e;
                    i = "number(px) or string(unit)";
                    break;
                  case m:
                    if (o) return e + this.unit;
                    if (c && t.test(e)) return e;
                    i = "number(px) or string(unit or %)";
                    break;
                  case O:
                    if (o) return e + this.angle;
                    if (c && t.test(e)) return e;
                    i = "number(deg) or string(angle)";
                    break;
                  case v:
                    if (o || (c && m.test(e))) return e;
                    i = "number(unitless) or string(unit or %)";
                }
                return (
                  r(
                    "Type warning: Expected: [" +
                      i +
                      "] Got: [" +
                      typeof e +
                      "] " +
                      e
                  ),
                  e
                );
              }),
              (e.redraw = function () {
                this.el.offsetHeight;
              });
          }),
          V = s(F, function (e, t) {
            e.init = function () {
              t.init.apply(this, arguments),
                this.original || (this.original = this.convert(this.get(), I));
            };
          }),
          G = s(F, function (e, t) {
            (e.init = function () {
              t.init.apply(this, arguments), (this.animate = this.fallback);
            }),
              (e.get = function () {
                return this.$el[this.name]();
              }),
              (e.update = function (e) {
                this.$el[this.name](e);
              });
          }),
          D = s(F, function (e, t) {
            function n(e, t) {
              var n, a, i, o, r;
              for (n in e)
                (i = (o = Q[n])[0]),
                  (a = o[1] || n),
                  (r = this.convert(e[n], i)),
                  t.call(this, a, r, i);
            }
            (e.init = function () {
              t.init.apply(this, arguments),
                this.current ||
                  ((this.current = {}),
                  Q.perspective &&
                    B.perspective &&
                    ((this.current.perspective = B.perspective),
                    z(this.el, this.name, this.style(this.current)),
                    this.redraw()));
            }),
              (e.set = function (e) {
                n.call(this, e, function (e, t) {
                  this.current[e] = t;
                }),
                  z(this.el, this.name, this.style(this.current)),
                  this.redraw();
              }),
              (e.transition = function (e) {
                var t = this.values(e);
                this.tween = new H({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                });
                var n,
                  a = {};
                for (n in this.current) a[n] = n in t ? t[n] : this.current[n];
                (this.active = !0), (this.nextStyle = this.style(a));
              }),
              (e.fallback = function (e) {
                var t = this.values(e);
                this.tween = new H({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                });
              }),
              (e.update = function () {
                z(this.el, this.name, this.style(this.current));
              }),
              (e.style = function (e) {
                var t,
                  n = "";
                for (t in e) n += t + "(" + e[t] + ") ";
                return n;
              }),
              (e.values = function (e) {
                var t,
                  a = {};
                return (
                  n.call(this, e, function (e, n, i) {
                    (a[e] = n),
                      void 0 === this.current[e] &&
                        ((t = 0),
                        ~e.indexOf("scale") && (t = 1),
                        (this.current[e] = this.convert(t, i)));
                  }),
                  a
                );
              });
          }),
          k = s(function (t) {
            function o() {
              var e,
                t,
                n,
                a = d.length;
              if (a)
                for (M(o), t = x(), e = a; e--; ) (n = d[e]) && n.render(t);
            }
            var c = { ease: u.ease[1], from: 0, to: 1 };
            (t.init = function (e) {
              (this.duration = e.duration || 0), (this.delay = e.delay || 0);
              var t = e.ease || c.ease;
              u[t] && (t = u[t][1]),
                "function" != typeof t && (t = c.ease),
                (this.ease = t),
                (this.update = e.update || i),
                (this.complete = e.complete || i),
                (this.context = e.context || this),
                (this.name = e.name);
              var n = e.from,
                a = e.to;
              void 0 === n && (n = c.from),
                void 0 === a && (a = c.to),
                (this.unit = e.unit || ""),
                "number" == typeof n && "number" == typeof a
                  ? ((this.begin = n), (this.change = a - n))
                  : this.format(a, n),
                (this.value = this.begin + this.unit),
                (this.start = x()),
                !1 !== e.autoplay && this.play();
            }),
              (t.play = function () {
                this.active ||
                  (this.start || (this.start = x()),
                  (this.active = !0),
                  1 === d.push(this) && M(o));
              }),
              (t.stop = function () {
                var t, n;
                this.active &&
                  ((this.active = !1),
                  (n = e.inArray(this, d)) >= 0 &&
                    ((t = d.slice(n + 1)),
                    (d.length = n),
                    t.length && (d = d.concat(t))));
              }),
              (t.render = function (e) {
                var t,
                  n = e - this.start;
                if (this.delay) {
                  if (n <= this.delay) return;
                  n -= this.delay;
                }
                if (n < this.duration) {
                  var i,
                    o,
                    r = this.ease(n, 0, 1, this.duration);
                  return (
                    (t = this.startRGB
                      ? ((i = this.startRGB),
                        (o = this.endRGB),
                        a(
                          i[0] + r * (o[0] - i[0]),
                          i[1] + r * (o[1] - i[1]),
                          i[2] + r * (o[2] - i[2])
                        ))
                      : Math.round((this.begin + r * this.change) * l) / l),
                    (this.value = t + this.unit),
                    void this.update.call(this.context, this.value)
                  );
                }
                (t = this.endHex || this.begin + this.change),
                  (this.value = t + this.unit),
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy();
              }),
              (t.format = function (e, t) {
                if (((t += ""), "#" == (e += "").charAt(0)))
                  return (
                    (this.startRGB = n(t)),
                    (this.endRGB = n(e)),
                    (this.endHex = e),
                    (this.begin = 0),
                    void (this.change = 1)
                  );
                if (!this.unit) {
                  var a = t.replace(E, "");
                  a !== e.replace(E, "") &&
                    r("Units do not match [tween]: " + t + ", " + e),
                    (this.unit = a);
                }
                (t = parseFloat(t)),
                  (e = parseFloat(e)),
                  (this.begin = this.value = t),
                  (this.change = e - t);
              }),
              (t.destroy = function () {
                this.stop(),
                  (this.context = null),
                  (this.ease = this.update = this.complete = i);
              });
            var d = [],
              l = 1e3;
          }),
          X = s(k, function (e) {
            (e.init = function (e) {
              (this.duration = e.duration || 0),
                (this.complete = e.complete || i),
                (this.context = e.context),
                this.play();
            }),
              (e.render = function (e) {
                e - this.start < this.duration ||
                  (this.complete.call(this.context), this.destroy());
              });
          }),
          H = s(k, function (e, t) {
            (e.init = function (e) {
              var t, n;
              for (t in ((this.context = e.context),
              (this.update = e.update),
              (this.tweens = []),
              (this.current = e.current),
              e.values))
                (n = e.values[t]),
                  this.current[t] !== n &&
                    this.tweens.push(
                      new k({
                        name: t,
                        from: this.current[t],
                        to: n,
                        duration: e.duration,
                        delay: e.delay,
                        ease: e.ease,
                        autoplay: !1,
                      })
                    );
              this.play();
            }),
              (e.render = function (e) {
                var t,
                  n,
                  a = this.tweens.length,
                  i = !1;
                for (t = a; t--; )
                  (n = this.tweens[t]).context &&
                    (n.render(e), (this.current[n.name] = n.value), (i = !0));
                return i
                  ? void (this.update && this.update.call(this.context))
                  : this.destroy();
              }),
              (e.destroy = function () {
                if ((t.destroy.call(this), this.tweens)) {
                  var e;
                  for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                  (this.tweens = null), (this.current = null);
                }
              });
          }),
          B = (t.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !S.transition,
            agentTests: [],
          });
        (t.fallback = function (e) {
          if (!S.transition) return (B.fallback = !0);
          B.agentTests.push("(" + e + ")");
          var t = RegExp(B.agentTests.join("|"), "i");
          B.fallback = t.test(navigator.userAgent);
        }),
          t.fallback("6.0.[2-5] Safari"),
          (t.tween = function (e) {
            return new k(e);
          }),
          (t.delay = function (e, t, n) {
            return new X({ complete: t, duration: e, context: n });
          }),
          (e.fn.tram = function (e) {
            return t.call(null, this, e);
          });
        var z = e.style,
          Y = e.css,
          j = { transform: S.transform && S.transform.css },
          W = {
            color: [V, I],
            background: [V, I, "background-color"],
            "outline-color": [V, I],
            "border-color": [V, I],
            "border-top-color": [V, I],
            "border-right-color": [V, I],
            "border-bottom-color": [V, I],
            "border-left-color": [V, I],
            "border-width": [F, b],
            "border-top-width": [F, b],
            "border-right-width": [F, b],
            "border-bottom-width": [F, b],
            "border-left-width": [F, b],
            "border-spacing": [F, b],
            "letter-spacing": [F, b],
            margin: [F, b],
            "margin-top": [F, b],
            "margin-right": [F, b],
            "margin-bottom": [F, b],
            "margin-left": [F, b],
            padding: [F, b],
            "padding-top": [F, b],
            "padding-right": [F, b],
            "padding-bottom": [F, b],
            "padding-left": [F, b],
            "outline-width": [F, b],
            opacity: [F, T],
            top: [F, m],
            right: [F, m],
            bottom: [F, m],
            left: [F, m],
            "font-size": [F, m],
            "text-indent": [F, m],
            "word-spacing": [F, m],
            width: [F, m],
            "min-width": [F, m],
            "max-width": [F, m],
            height: [F, m],
            "min-height": [F, m],
            "max-height": [F, m],
            "line-height": [F, v],
            "scroll-top": [G, T, "scrollTop"],
            "scroll-left": [G, T, "scrollLeft"],
          },
          Q = {};
        S.transform &&
          ((W.transform = [D]),
          (Q = {
            x: [m, "translateX"],
            y: [m, "translateY"],
            rotate: [O],
            rotateX: [O],
            rotateY: [O],
            scale: [T],
            scaleX: [T],
            scaleY: [T],
            skew: [O],
            skewX: [O],
            skewY: [O],
          })),
          S.transform &&
            S.backface &&
            ((Q.z = [m, "translateZ"]),
            (Q.rotateZ = [O]),
            (Q.scaleZ = [T]),
            (Q.perspective = [b]));
        var $ = /ms/,
          q = /s|\./;
        return (e.tram = t);
      })(window.jQuery);
    },
    5756: function (e, t, n) {
      "use strict";
      var a,
        i,
        o,
        r,
        c,
        d,
        l,
        s,
        u,
        f,
        p,
        g,
        E,
        y,
        T,
        I,
        b,
        m,
        O,
        v,
        _ = window.$,
        R = n(5487) && _.tram;
      ((a = {}).VERSION = "1.6.0-Webflow"),
        (i = {}),
        (o = Array.prototype),
        (r = Object.prototype),
        (c = Function.prototype),
        o.push,
        (d = o.slice),
        o.concat,
        r.toString,
        (l = r.hasOwnProperty),
        (s = o.forEach),
        (u = o.map),
        o.reduce,
        o.reduceRight,
        (f = o.filter),
        o.every,
        (p = o.some),
        (g = o.indexOf),
        o.lastIndexOf,
        (E = Object.keys),
        c.bind,
        (y =
          a.each =
          a.forEach =
            function (e, t, n) {
              if (null == e) return e;
              if (s && e.forEach === s) e.forEach(t, n);
              else if (e.length === +e.length) {
                for (var o = 0, r = e.length; o < r; o++)
                  if (t.call(n, e[o], o, e) === i) return;
              } else
                for (var c = a.keys(e), o = 0, r = c.length; o < r; o++)
                  if (t.call(n, e[c[o]], c[o], e) === i) return;
              return e;
            }),
        (a.map = a.collect =
          function (e, t, n) {
            var a = [];
            return null == e
              ? a
              : u && e.map === u
              ? e.map(t, n)
              : (y(e, function (e, i, o) {
                  a.push(t.call(n, e, i, o));
                }),
                a);
          }),
        (a.find = a.detect =
          function (e, t, n) {
            var a;
            return (
              T(e, function (e, i, o) {
                if (t.call(n, e, i, o)) return (a = e), !0;
              }),
              a
            );
          }),
        (a.filter = a.select =
          function (e, t, n) {
            var a = [];
            return null == e
              ? a
              : f && e.filter === f
              ? e.filter(t, n)
              : (y(e, function (e, i, o) {
                  t.call(n, e, i, o) && a.push(e);
                }),
                a);
          }),
        (T =
          a.some =
          a.any =
            function (e, t, n) {
              t || (t = a.identity);
              var o = !1;
              return null == e
                ? o
                : p && e.some === p
                ? e.some(t, n)
                : (y(e, function (e, a, r) {
                    if (o || (o = t.call(n, e, a, r))) return i;
                  }),
                  !!o);
            }),
        (a.contains = a.include =
          function (e, t) {
            return (
              null != e &&
              (g && e.indexOf === g
                ? -1 != e.indexOf(t)
                : T(e, function (e) {
                    return e === t;
                  }))
            );
          }),
        (a.delay = function (e, t) {
          var n = d.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, n);
          }, t);
        }),
        (a.defer = function (e) {
          return a.delay.apply(a, [e, 1].concat(d.call(arguments, 1)));
        }),
        (a.throttle = function (e) {
          var t, n, a;
          return function () {
            t ||
              ((t = !0),
              (n = arguments),
              (a = this),
              R.frame(function () {
                (t = !1), e.apply(a, n);
              }));
          };
        }),
        (a.debounce = function (e, t, n) {
          var i,
            o,
            r,
            c,
            d,
            l = function () {
              var s = a.now() - c;
              s < t
                ? (i = setTimeout(l, t - s))
                : ((i = null), n || ((d = e.apply(r, o)), (r = o = null)));
            };
          return function () {
            (r = this), (o = arguments), (c = a.now());
            var s = n && !i;
            return (
              i || (i = setTimeout(l, t)),
              s && ((d = e.apply(r, o)), (r = o = null)),
              d
            );
          };
        }),
        (a.defaults = function (e) {
          if (!a.isObject(e)) return e;
          for (var t = 1, n = arguments.length; t < n; t++) {
            var i = arguments[t];
            for (var o in i) void 0 === e[o] && (e[o] = i[o]);
          }
          return e;
        }),
        (a.keys = function (e) {
          if (!a.isObject(e)) return [];
          if (E) return E(e);
          var t = [];
          for (var n in e) a.has(e, n) && t.push(n);
          return t;
        }),
        (a.has = function (e, t) {
          return l.call(e, t);
        }),
        (a.isObject = function (e) {
          return e === Object(e);
        }),
        (a.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (a.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        }),
        (I = /(.)^/),
        (b = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        }),
        (m = /\\|'|\r|\n|\u2028|\u2029/g),
        (O = function (e) {
          return "\\" + b[e];
        }),
        (v = /^\s*(\w|\$)+\s*$/),
        (a.template = function (e, t, n) {
          !t && n && (t = n);
          var i,
            o = RegExp(
              [
                ((t = a.defaults({}, t, a.templateSettings)).escape || I)
                  .source,
                (t.interpolate || I).source,
                (t.evaluate || I).source,
              ].join("|") + "|$",
              "g"
            ),
            r = 0,
            c = "__p+='";
          e.replace(o, function (t, n, a, i, o) {
            return (
              (c += e.slice(r, o).replace(m, O)),
              (r = o + t.length),
              n
                ? (c += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : a
                ? (c += "'+\n((__t=(" + a + "))==null?'':__t)+\n'")
                : i && (c += "';\n" + i + "\n__p+='"),
              t
            );
          }),
            (c += "';\n");
          var d = t.variable;
          if (d) {
            if (!v.test(d))
              throw Error("variable is not a bare identifier: " + d);
          } else (c = "with(obj||{}){\n" + c + "}\n"), (d = "obj");
          c =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            c +
            "return __p;\n";
          try {
            i = Function(t.variable || "obj", "_", c);
          } catch (e) {
            throw ((e.source = c), e);
          }
          var l = function (e) {
            return i.call(this, e, a);
          };
          return (l.source = "function(" + d + "){\n" + c + "}"), l;
        }),
        (e.exports = a);
    },
    9461: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "brand",
        (e.exports = function (e) {
          var t,
            n = {},
            i = document,
            o = e("html"),
            r = e("body"),
            c = window.location,
            d = /PhantomJS/i.test(navigator.userAgent),
            l =
              "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
          function s() {
            var n =
              i.fullScreen ||
              i.mozFullScreen ||
              i.webkitIsFullScreen ||
              i.msFullscreenElement ||
              !!i.webkitFullscreenElement;
            e(t).attr("style", n ? "display: none !important;" : "");
          }
          function u() {
            var e = r.children(".w-webflow-badge"),
              n = e.length && e.get(0) === t,
              i = a.env("editor");
            if (n) {
              i && e.remove();
              return;
            }
            e.length && e.remove(), i || r.append(t);
          }
          return;
        })
      );
    },
    322: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "edit",
        (e.exports = function (e, t, n) {
          if (
            ((n = n || {}),
            (a.env("test") || a.env("frame")) &&
              !n.fixture &&
              !(function () {
                try {
                  return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                } catch (e) {
                  return !1;
                }
              })())
          )
            return { exit: 1 };
          var i,
            o = e(window),
            r = e(document.documentElement),
            c = document.location,
            d = "hashchange",
            l =
              n.load ||
              function () {
                var t, n, a;
                (i = !0),
                  (window.WebflowEditor = !0),
                  o.off(d, u),
                  (t = function (t) {
                    var n;
                    e.ajax({
                      url: p("https://editor-api.webflow.com/api/editor/view"),
                      data: { siteId: r.attr("data-wf-site") },
                      xhrFields: { withCredentials: !0 },
                      dataType: "json",
                      crossDomain: !0,
                      success:
                        ((n = t),
                        function (t) {
                          var a, i, o;
                          if (!t)
                            return void console.error(
                              "Could not load editor data"
                            );
                          (t.thirdPartyCookiesSupported = n),
                            (i =
                              (a = t.scriptPath).indexOf("//") >= 0
                                ? a
                                : p("https://editor-api.webflow.com" + a)),
                            (o = function () {
                              window.WebflowEditor(t);
                            }),
                            e
                              .ajax({
                                type: "GET",
                                url: i,
                                dataType: "script",
                                cache: !0,
                              })
                              .then(o, f);
                        }),
                    });
                  }),
                  ((n = window.document.createElement("iframe")).src =
                    "https://webflow.com/site/third-party-cookie-check.html"),
                  (n.style.display = "none"),
                  (n.sandbox = "allow-scripts allow-same-origin"),
                  (a = function (e) {
                    "WF_third_party_cookies_unsupported" === e.data
                      ? (g(n, a), t(!1))
                      : "WF_third_party_cookies_supported" === e.data &&
                        (g(n, a), t(!0));
                  }),
                  (n.onerror = function () {
                    g(n, a), t(!1);
                  }),
                  window.addEventListener("message", a, !1),
                  window.document.body.appendChild(n);
              },
            s = !1;
          try {
            s =
              localStorage &&
              localStorage.getItem &&
              localStorage.getItem("WebflowEditor");
          } catch (e) {}
          function u() {
            !i && /\?edit/.test(c.hash) && l();
          }
          function f(e, t, n) {
            throw (console.error("Could not load editor script: " + t), n);
          }
          function p(e) {
            return e.replace(/([^:])\/\//g, "$1/");
          }
          function g(e, t) {
            window.removeEventListener("message", t, !1), e.remove();
          }
          return (
            s
              ? l()
              : c.search
              ? (/[?&](edit)(?:[=&?]|$)/.test(c.search) ||
                  /\?edit$/.test(c.href)) &&
                l()
              : o.on(d, u).triggerHandler(d),
            {}
          );
        })
      );
    },
    2338: function (e, t, n) {
      "use strict";
      n(3949).define(
        "focus-visible",
        (e.exports = function () {
          return {
            ready: function () {
              if ("undefined" != typeof document)
                try {
                  document.querySelector(":focus-visible");
                } catch (e) {
                  !(function (e) {
                    var t = !0,
                      n = !1,
                      a = null,
                      i = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0,
                      };
                    function o(e) {
                      return (
                        !!e &&
                        e !== document &&
                        "HTML" !== e.nodeName &&
                        "BODY" !== e.nodeName &&
                        "classList" in e &&
                        "contains" in e.classList
                      );
                    }
                    function r(e) {
                      e.getAttribute("data-wf-focus-visible") ||
                        e.setAttribute("data-wf-focus-visible", "true");
                    }
                    function c() {
                      t = !1;
                    }
                    function d() {
                      document.addEventListener("mousemove", l),
                        document.addEventListener("mousedown", l),
                        document.addEventListener("mouseup", l),
                        document.addEventListener("pointermove", l),
                        document.addEventListener("pointerdown", l),
                        document.addEventListener("pointerup", l),
                        document.addEventListener("touchmove", l),
                        document.addEventListener("touchstart", l),
                        document.addEventListener("touchend", l);
                    }
                    function l(e) {
                      (e.target.nodeName &&
                        "html" === e.target.nodeName.toLowerCase()) ||
                        ((t = !1),
                        document.removeEventListener("mousemove", l),
                        document.removeEventListener("mousedown", l),
                        document.removeEventListener("mouseup", l),
                        document.removeEventListener("pointermove", l),
                        document.removeEventListener("pointerdown", l),
                        document.removeEventListener("pointerup", l),
                        document.removeEventListener("touchmove", l),
                        document.removeEventListener("touchstart", l),
                        document.removeEventListener("touchend", l));
                    }
                    document.addEventListener(
                      "keydown",
                      function (n) {
                        n.metaKey ||
                          n.altKey ||
                          n.ctrlKey ||
                          (o(e.activeElement) && r(e.activeElement), (t = !0));
                      },
                      !0
                    ),
                      document.addEventListener("mousedown", c, !0),
                      document.addEventListener("pointerdown", c, !0),
                      document.addEventListener("touchstart", c, !0),
                      document.addEventListener(
                        "visibilitychange",
                        function () {
                          "hidden" === document.visibilityState &&
                            (n && (t = !0), d());
                        },
                        !0
                      ),
                      d(),
                      e.addEventListener(
                        "focus",
                        function (e) {
                          if (o(e.target)) {
                            var n, a, c;
                            (t ||
                              ((a = (n = e.target).type),
                              ("INPUT" === (c = n.tagName) &&
                                i[a] &&
                                !n.readOnly) ||
                                ("TEXTAREA" === c && !n.readOnly) ||
                                n.isContentEditable ||
                                0)) &&
                              r(e.target);
                          }
                        },
                        !0
                      ),
                      e.addEventListener(
                        "blur",
                        function (e) {
                          if (
                            o(e.target) &&
                            e.target.hasAttribute("data-wf-focus-visible")
                          ) {
                            var t;
                            (n = !0),
                              window.clearTimeout(a),
                              (a = window.setTimeout(function () {
                                n = !1;
                              }, 100)),
                              (t = e.target).getAttribute(
                                "data-wf-focus-visible"
                              ) && t.removeAttribute("data-wf-focus-visible");
                          }
                        },
                        !0
                      );
                  })(document);
                }
            },
          };
        })
      );
    },
    8334: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "focus",
        (e.exports = function () {
          var e = [],
            t = !1;
          function n(n) {
            t &&
              (n.preventDefault(),
              n.stopPropagation(),
              n.stopImmediatePropagation(),
              e.unshift(n));
          }
          function i(n) {
            var a, i;
            (i = (a = n.target).tagName),
              ((/^a$/i.test(i) && null != a.href) ||
                (/^(button|textarea)$/i.test(i) && !0 !== a.disabled) ||
                (/^input$/i.test(i) &&
                  /^(button|reset|submit|radio|checkbox)$/i.test(a.type) &&
                  !a.disabled) ||
                (!/^(button|input|textarea|select|a)$/i.test(i) &&
                  !Number.isNaN(Number.parseFloat(a.tabIndex))) ||
                /^audio$/i.test(i) ||
                (/^video$/i.test(i) && !0 === a.controls)) &&
                ((t = !0),
                setTimeout(() => {
                  for (t = !1, n.target.focus(); e.length > 0; ) {
                    var a = e.pop();
                    a.target.dispatchEvent(new MouseEvent(a.type, a));
                  }
                }, 0));
          }
          return {
            ready: function () {
              "undefined" != typeof document &&
                document.body.hasAttribute("data-wf-focus-within") &&
                a.env.safari &&
                (document.addEventListener("mousedown", i, !0),
                document.addEventListener("mouseup", n, !0),
                document.addEventListener("click", n, !0));
            },
          };
        })
      );
    },
    7199: function (e) {
      "use strict";
      var t = window.jQuery,
        n = {},
        a = [],
        i = ".w-ix",
        o = {
          reset: function (e, t) {
            t.__wf_intro = null;
          },
          intro: function (e, a) {
            a.__wf_intro ||
              ((a.__wf_intro = !0), t(a).triggerHandler(n.types.INTRO));
          },
          outro: function (e, a) {
            a.__wf_intro &&
              ((a.__wf_intro = null), t(a).triggerHandler(n.types.OUTRO));
          },
        };
      (n.triggers = {}),
        (n.types = { INTRO: "w-ix-intro" + i, OUTRO: "w-ix-outro" + i }),
        (n.init = function () {
          for (var e = a.length, i = 0; i < e; i++) {
            var r = a[i];
            r[0](0, r[1]);
          }
          (a = []), t.extend(n.triggers, o);
        }),
        (n.async = function () {
          for (var e in o) {
            var t = o[e];
            o.hasOwnProperty(e) &&
              (n.triggers[e] = function (e, n) {
                a.push([t, n]);
              });
          }
        }),
        n.async(),
        (e.exports = n);
    },
    5134: function (e, t, n) {
      "use strict";
      var a = n(7199);
      function i(e, t) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
      }
      var o = window.jQuery,
        r = {},
        c = ".w-ix";
      (r.triggers = {}),
        (r.types = { INTRO: "w-ix-intro" + c, OUTRO: "w-ix-outro" + c }),
        o.extend(r.triggers, {
          reset: function (e, t) {
            a.triggers.reset(e, t);
          },
          intro: function (e, t) {
            a.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE");
          },
          outro: function (e, t) {
            a.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE");
          },
        }),
        (e.exports = r);
    },
    941: function (e, t, n) {
      "use strict";
      var a = n(3949),
        i = n(6011);
      i.setEnv(a.env),
        a.define(
          "ix2",
          (e.exports = function () {
            return i;
          })
        );
    },
    3949: function (e, t, n) {
      "use strict";
      var a,
        i,
        o = {},
        r = {},
        c = [],
        d = window.Webflow || [],
        l = window.jQuery,
        s = l(window),
        u = l(document),
        f = l.isFunction,
        p = (o._ = n(5756)),
        g = (o.tram = n(5487) && l.tram),
        E = !1,
        y = !1;
      function T(e) {
        o.env() &&
          (f(e.design) && s.on("__wf_design", e.design),
          f(e.preview) && s.on("__wf_preview", e.preview)),
          f(e.destroy) && s.on("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            (function (e) {
              if (E) return e.ready();
              p.contains(c, e.ready) || c.push(e.ready);
            })(e);
      }
      function I(e) {
        var t;
        f(e.design) && s.off("__wf_design", e.design),
          f(e.preview) && s.off("__wf_preview", e.preview),
          f(e.destroy) && s.off("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            ((t = e),
            (c = p.filter(c, function (e) {
              return e !== t.ready;
            })));
      }
      (g.config.hideBackface = !1),
        (g.config.keepInherited = !0),
        (o.define = function (e, t, n) {
          r[e] && I(r[e]);
          var a = (r[e] = t(l, p, n) || {});
          return T(a), a;
        }),
        (o.require = function (e) {
          return r[e];
        }),
        (o.push = function (e) {
          if (E) {
            f(e) && e();
            return;
          }
          d.push(e);
        }),
        (o.env = function (e) {
          var t = window.__wf_design,
            n = void 0 !== t;
          return e
            ? "design" === e
              ? n && t
              : "preview" === e
              ? n && !t
              : "slug" === e
              ? n && window.__wf_slug
              : "editor" === e
              ? window.WebflowEditor
              : "test" === e
              ? window.__wf_test
              : "frame" === e
              ? window !== window.top
              : void 0
            : n;
        });
      var b = navigator.userAgent.toLowerCase(),
        m = (o.env.touch =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
        O = (o.env.chrome =
          /chrome/.test(b) &&
          /Google/.test(navigator.vendor) &&
          parseInt(b.match(/chrome\/(\d+)\./)[1], 10)),
        v = (o.env.ios = /(ipod|iphone|ipad)/.test(b));
      (o.env.safari = /safari/.test(b) && !O && !v),
        m &&
          u.on("touchstart mousedown", function (e) {
            a = e.target;
          }),
        (o.validClick = m
          ? function (e) {
              return e === a || l.contains(e, a);
            }
          : function () {
              return !0;
            });
      var _ = "resize.webflow orientationchange.webflow load.webflow",
        R = "scroll.webflow " + _;
      function h(e, t) {
        var n = [],
          a = {};
        return (
          (a.up = p.throttle(function (e) {
            p.each(n, function (t) {
              t(e);
            });
          })),
          e && t && e.on(t, a.up),
          (a.on = function (e) {
            "function" == typeof e && (p.contains(n, e) || n.push(e));
          }),
          (a.off = function (e) {
            if (!arguments.length) {
              n = [];
              return;
            }
            n = p.filter(n, function (t) {
              return t !== e;
            });
          }),
          a
        );
      }
      function N(e) {
        f(e) && e();
      }
      function A() {
        i && (i.reject(), s.off("load", i.resolve)),
          (i = new l.Deferred()),
          s.on("load", i.resolve);
      }
      (o.resize = h(s, _)),
        (o.scroll = h(s, R)),
        (o.redraw = h()),
        (o.location = function (e) {
          window.location = e;
        }),
        o.env() && (o.location = function () {}),
        (o.ready = function () {
          (E = !0),
            y ? ((y = !1), p.each(r, T)) : p.each(c, N),
            p.each(d, N),
            o.resize.up();
        }),
        (o.load = function (e) {
          i.then(e);
        }),
        (o.destroy = function (e) {
          (e = e || {}),
            (y = !0),
            s.triggerHandler("__wf_destroy"),
            null != e.domready && (E = e.domready),
            p.each(r, I),
            o.resize.off(),
            o.scroll.off(),
            o.redraw.off(),
            (c = []),
            (d = []),
            "pending" === i.state() && A();
        }),
        l(o.ready),
        A(),
        (e.exports = window.Webflow = o);
    },
    7624: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "links",
        (e.exports = function (e, t) {
          var n,
            i,
            o,
            r = {},
            c = e(window),
            d = a.env(),
            l = window.location,
            s = document.createElement("a"),
            u = "w--current",
            f = /index\.(html|php)$/,
            p = /\/$/;
          function g() {
            var e = c.scrollTop(),
              n = c.height();
            t.each(i, function (t) {
              if (!t.link.attr("hreflang")) {
                var a = t.link,
                  i = t.sec,
                  o = i.offset().top,
                  r = i.outerHeight(),
                  c = 0.5 * n,
                  d = i.is(":visible") && o + r - c >= e && o + c <= e + n;
                t.active !== d && ((t.active = d), E(a, u, d));
              }
            });
          }
          function E(e, t, n) {
            var a = e.hasClass(t);
            (!n || !a) && (n || a) && (n ? e.addClass(t) : e.removeClass(t));
          }
          return (
            (r.ready =
              r.design =
              r.preview =
                function () {
                  (n = d && a.env("design")),
                    (o = a.env("slug") || l.pathname || ""),
                    a.scroll.off(g),
                    (i = []);
                  for (var t = document.links, r = 0; r < t.length; ++r)
                    !(function (t) {
                      if (!t.getAttribute("hreflang")) {
                        var a =
                          (n && t.getAttribute("href-disabled")) ||
                          t.getAttribute("href");
                        if (((s.href = a), !(a.indexOf(":") >= 0))) {
                          var r = e(t);
                          if (
                            s.hash.length > 1 &&
                            s.host + s.pathname === l.host + l.pathname
                          ) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                            var c = e(s.hash);
                            c.length && i.push({ link: r, sec: c, active: !1 });
                            return;
                          }
                          "#" !== a &&
                            "" !== a &&
                            E(
                              r,
                              u,
                              s.href === l.href ||
                                a === o ||
                                (f.test(a) && p.test(o))
                            );
                        }
                      }
                    })(t[r]);
                  i.length && (a.scroll.on(g), g());
                }),
            r
          );
        })
      );
    },
    286: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "scroll",
        (e.exports = function (e) {
          var t = {
              WF_CLICK_EMPTY: "click.wf-empty-link",
              WF_CLICK_SCROLL: "click.wf-scroll",
            },
            n = window.location,
            i = !(function () {
              try {
                return !!window.frameElement;
              } catch (e) {
                return !0;
              }
            })()
              ? window.history
              : null,
            o = e(window),
            r = e(document),
            c = e(document.body),
            d =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (e) {
                window.setTimeout(e, 15);
              },
            l = a.env("editor") ? ".w-editor-body" : "body",
            s =
              "header, " +
              l +
              " > .header, " +
              l +
              " > .w-nav:not([data-no-scroll])",
            u = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
            p = document.createElement("style");
          p.appendChild(
            document.createTextNode(
              '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
            )
          );
          var g = /^#[a-zA-Z0-9][\w:.-]*$/;
          let E =
            "function" == typeof window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)");
          function y(e, t) {
            var n;
            switch (t) {
              case "add":
                (n = e.attr("tabindex"))
                  ? e.attr("data-wf-tabindex-swap", n)
                  : e.attr("tabindex", "-1");
                break;
              case "remove":
                (n = e.attr("data-wf-tabindex-swap"))
                  ? (e.attr("tabindex", n),
                    e.removeAttr("data-wf-tabindex-swap"))
                  : e.removeAttr("tabindex");
            }
            e.toggleClass("wf-force-outline-none", "add" === t);
          }
          function T(t) {
            var r = t.currentTarget;
            if (
              !(
                a.env("design") ||
                (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(r.className))
              )
            ) {
              var l =
                g.test(r.hash) && r.host + r.pathname === n.host + n.pathname
                  ? r.hash
                  : "";
              if ("" !== l) {
                var u,
                  f = e(l);
                f.length &&
                  (t && (t.preventDefault(), t.stopPropagation()),
                  (u = l),
                  n.hash !== u &&
                    i &&
                    i.pushState &&
                    !(a.env.chrome && "file:" === n.protocol) &&
                    (i.state && i.state.hash) !== u &&
                    i.pushState({ hash: u }, "", u),
                  window.setTimeout(function () {
                    !(function (t, n) {
                      var a = o.scrollTop(),
                        i = (function (t) {
                          var n = e(s),
                            a =
                              "fixed" === n.css("position")
                                ? n.outerHeight()
                                : 0,
                            i = t.offset().top - a;
                          if ("mid" === t.data("scroll")) {
                            var r = o.height() - a,
                              c = t.outerHeight();
                            c < r && (i -= Math.round((r - c) / 2));
                          }
                          return i;
                        })(t);
                      if (a !== i) {
                        var r = (function (e, t, n) {
                            if (
                              "none" ===
                                document.body.getAttribute(
                                  "data-wf-scroll-motion"
                                ) ||
                              E.matches
                            )
                              return 0;
                            var a = 1;
                            return (
                              c.add(e).each(function (e, t) {
                                var n = parseFloat(
                                  t.getAttribute("data-scroll-time")
                                );
                                !isNaN(n) && n >= 0 && (a = n);
                              }),
                              (472.143 * Math.log(Math.abs(t - n) + 125) -
                                2e3) *
                                a
                            );
                          })(t, a, i),
                          l = Date.now(),
                          u = function () {
                            var e,
                              t,
                              o,
                              c,
                              s,
                              f = Date.now() - l;
                            window.scroll(
                              0,
                              ((e = a),
                              (t = i),
                              (o = f) > (c = r)
                                ? t
                                : e +
                                  (t - e) *
                                    ((s = o / c) < 0.5
                                      ? 4 * s * s * s
                                      : (s - 1) * (2 * s - 2) * (2 * s - 2) +
                                        1))
                            ),
                              f <= r ? d(u) : "function" == typeof n && n();
                          };
                        d(u);
                      }
                    })(f, function () {
                      y(f, "add"),
                        f.get(0).focus({ preventScroll: !0 }),
                        y(f, "remove");
                    });
                  }, 300 * !t));
              }
            }
          }
          return {
            ready: function () {
              var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: n } = t;
              r.on(n, f, T),
                r.on(e, u, function (e) {
                  e.preventDefault();
                }),
                document.head.insertBefore(p, document.head.firstChild);
            },
          };
        })
      );
    },
    3695: function (e, t, n) {
      "use strict";
      n(3949).define(
        "touch",
        (e.exports = function (e) {
          var t = {},
            n = window.getSelection;
          function a(t) {
            var a,
              i,
              o = !1,
              r = !1,
              c = Math.min(Math.round(0.04 * window.innerWidth), 40);
            function d(e) {
              var t = e.touches;
              (t && t.length > 1) ||
                ((o = !0),
                t ? ((r = !0), (a = t[0].clientX)) : (a = e.clientX),
                (i = a));
            }
            function l(t) {
              if (o) {
                if (r && "mousemove" === t.type) {
                  t.preventDefault(), t.stopPropagation();
                  return;
                }
                var a,
                  d,
                  l,
                  s,
                  f = t.touches,
                  p = f ? f[0].clientX : t.clientX,
                  g = p - i;
                (i = p),
                  Math.abs(g) > c &&
                    n &&
                    "" === String(n()) &&
                    ((a = "swipe"),
                    (d = t),
                    (l = { direction: g > 0 ? "right" : "left" }),
                    (s = e.Event(a, { originalEvent: d })),
                    e(d.target).trigger(s, l),
                    u());
              }
            }
            function s(e) {
              if (o && ((o = !1), r && "mouseup" === e.type)) {
                e.preventDefault(), e.stopPropagation(), (r = !1);
                return;
              }
            }
            function u() {
              o = !1;
            }
            t.addEventListener("touchstart", d, !1),
              t.addEventListener("touchmove", l, !1),
              t.addEventListener("touchend", s, !1),
              t.addEventListener("touchcancel", u, !1),
              t.addEventListener("mousedown", d, !1),
              t.addEventListener("mousemove", l, !1),
              t.addEventListener("mouseup", s, !1),
              t.addEventListener("mouseout", u, !1),
              (this.destroy = function () {
                t.removeEventListener("touchstart", d, !1),
                  t.removeEventListener("touchmove", l, !1),
                  t.removeEventListener("touchend", s, !1),
                  t.removeEventListener("touchcancel", u, !1),
                  t.removeEventListener("mousedown", d, !1),
                  t.removeEventListener("mousemove", l, !1),
                  t.removeEventListener("mouseup", s, !1),
                  t.removeEventListener("mouseout", u, !1),
                  (t = null);
              });
          }
          return (
            (e.event.special.tap = {
              bindType: "click",
              delegateType: "click",
            }),
            (t.init = function (t) {
              return (t = "string" == typeof t ? e(t).get(0) : t)
                ? new a(t)
                : null;
            }),
            (t.instance = t.init(document)),
            t
          );
        })
      );
    },
    6524: function (e, t) {
      "use strict";
      function n(e, t, n, a, i, o, r, c, d, l, s, u, f) {
        return function (p) {
          e(p);
          var g = p.form,
            E = {
              name: g.attr("data-name") || g.attr("name") || "Untitled Form",
              pageId: g.attr("data-wf-page-id") || "",
              elementId: g.attr("data-wf-element-id") || "",
              domain: u("html").attr("data-wf-domain") || null,
              source: t.href,
              test: n.env(),
              fields: {},
              fileUploads: {},
              dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
                g.html()
              ),
              trackingCookies: a(),
            };
          let y = g.attr("data-wf-flow");
          y && (E.wfFlow = y);
          let T = g.attr("data-wf-locale-id");
          T && (E.localeId = T), i(p);
          var I = o(g, E.fields);
          return I
            ? r(I)
            : ((E.fileUploads = c(g)), d(p), l)
            ? void u
                .ajax({
                  url: f,
                  type: "POST",
                  data: E,
                  dataType: "json",
                  crossDomain: !0,
                })
                .done(function (e) {
                  e && 200 === e.code && (p.success = !0), s(p);
                })
                .fail(function () {
                  s(p);
                })
            : void s(p);
        };
      }
      Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    },
    7527: function (e, t, n) {
      "use strict";
      var a = n(3949);
      let i = (e, t, n, a) => {
        let i = document.createElement("div");
        t.appendChild(i),
          turnstile.render(i, {
            sitekey: e,
            callback: function (e) {
              n(e);
            },
            "error-callback": function () {
              a();
            },
          });
      };
      a.define(
        "forms",
        (e.exports = function (e, t) {
          let o,
            r = "TURNSTILE_LOADED";
          var c,
            d,
            l,
            s,
            u,
            f = {},
            p = e(document),
            g = window.location,
            E = window.XDomainRequest && !window.atob,
            y = ".w-form",
            T = /e(-)?mail/i,
            I = /^\S+@\S+$/,
            b = window.alert,
            m = a.env();
          let O = p.find("[data-turnstile-sitekey]").data("turnstile-sitekey");
          var v = /list-manage[1-9]?.com/i,
            _ = t.debounce(function () {
              console.warn(
                "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
              );
            }, 100);
          function R(t, o) {
            var c = e(o),
              l = e.data(o, y);
            l || (l = e.data(o, y, { form: c })), h(l);
            var f = c.closest("div.w-form");
            (l.done = f.find("> .w-form-done")),
              (l.fail = f.find("> .w-form-fail")),
              (l.fileUploads = f.find(".w-file-upload")),
              l.fileUploads.each(function (t) {
                !(function (t, n) {
                  if (n.fileUploads && n.fileUploads[t]) {
                    var a,
                      i = e(n.fileUploads[t]),
                      o = i.find("> .w-file-upload-default"),
                      r = i.find("> .w-file-upload-uploading"),
                      c = i.find("> .w-file-upload-success"),
                      d = i.find("> .w-file-upload-error"),
                      l = o.find(".w-file-upload-input"),
                      s = o.find(".w-file-upload-label"),
                      f = s.children(),
                      p = d.find(".w-file-upload-error-msg"),
                      g = c.find(".w-file-upload-file"),
                      E = c.find(".w-file-remove-link"),
                      y = g.find(".w-file-upload-file-name"),
                      T = p.attr("data-w-size-error"),
                      I = p.attr("data-w-type-error"),
                      b = p.attr("data-w-generic-error");
                    if (
                      (m ||
                        s.on("click keydown", function (e) {
                          ("keydown" !== e.type ||
                            13 === e.which ||
                            32 === e.which) &&
                            (e.preventDefault(), l.click());
                        }),
                      s
                        .find(".w-icon-file-upload-icon")
                        .attr("aria-hidden", "true"),
                      E.find(".w-icon-file-upload-remove").attr(
                        "aria-hidden",
                        "true"
                      ),
                      m)
                    )
                      l.on("click", function (e) {
                        e.preventDefault();
                      }),
                        s.on("click", function (e) {
                          e.preventDefault();
                        }),
                        f.on("click", function (e) {
                          e.preventDefault();
                        });
                    else {
                      E.on("click keydown", function (e) {
                        if ("keydown" === e.type) {
                          if (13 !== e.which && 32 !== e.which) return;
                          e.preventDefault();
                        }
                        l.removeAttr("data-value"),
                          l.val(""),
                          y.html(""),
                          o.toggle(!0),
                          c.toggle(!1),
                          s.focus();
                      }),
                        l.on("change", function (i) {
                          var c, l, s;
                          (a =
                            i.target && i.target.files && i.target.files[0]) &&
                            (o.toggle(!1),
                            d.toggle(!1),
                            r.toggle(!0),
                            r.focus(),
                            y.text(a.name),
                            A() || N(n),
                            (n.fileUploads[t].uploading = !0),
                            (c = a),
                            (l = _),
                            (s = new URLSearchParams({
                              name: c.name,
                              size: c.size,
                            })),
                            e
                              .ajax({
                                type: "GET",
                                url: `${u}?${s}`,
                                crossDomain: !0,
                              })
                              .done(function (e) {
                                l(null, e);
                              })
                              .fail(function (e) {
                                l(e);
                              }));
                        });
                      var O = s.outerHeight();
                      l.height(O), l.width(1);
                    }
                  }
                  function v(e) {
                    var a = e.responseJSON && e.responseJSON.msg,
                      i = b;
                    "string" == typeof a &&
                    0 === a.indexOf("InvalidFileTypeError")
                      ? (i = I)
                      : "string" == typeof a &&
                        0 === a.indexOf("MaxFileSizeError") &&
                        (i = T),
                      p.text(i),
                      l.removeAttr("data-value"),
                      l.val(""),
                      r.toggle(!1),
                      o.toggle(!0),
                      d.toggle(!0),
                      d.focus(),
                      (n.fileUploads[t].uploading = !1),
                      A() || h(n);
                  }
                  function _(t, n) {
                    if (t) return v(t);
                    var i = n.fileName,
                      o = n.postData,
                      r = n.fileId,
                      c = n.s3Url;
                    l.attr("data-value", r),
                      (function (t, n, a, i, o) {
                        var r = new FormData();
                        for (var c in n) r.append(c, n[c]);
                        r.append("file", a, i),
                          e
                            .ajax({
                              type: "POST",
                              url: t,
                              data: r,
                              processData: !1,
                              contentType: !1,
                            })
                            .done(function () {
                              o(null);
                            })
                            .fail(function (e) {
                              o(e);
                            });
                      })(c, o, a, i, R);
                  }
                  function R(e) {
                    if (e) return v(e);
                    r.toggle(!1),
                      c.css("display", "inline-block"),
                      c.focus(),
                      (n.fileUploads[t].uploading = !1),
                      A() || h(n);
                  }
                  function A() {
                    return (
                      (n.fileUploads && n.fileUploads.toArray()) ||
                      []
                    ).some(function (e) {
                      return e.uploading;
                    });
                  }
                })(t, l);
              }),
              O &&
                ((function (e) {
                  let t = e.btn || e.form.find(':input[type="submit"]');
                  e.btn || (e.btn = t),
                    t.prop("disabled", !0),
                    t.addClass("w-form-loading");
                })(l),
                A(c, !0),
                p.on(
                  "undefined" != typeof turnstile ? "ready" : r,
                  function () {
                    i(
                      O,
                      o,
                      (e) => {
                        (l.turnstileToken = e), h(l), A(c, !1);
                      },
                      () => {
                        h(l), l.btn && l.btn.prop("disabled", !0), A(c, !1);
                      }
                    );
                  }
                ));
            var E =
              l.form.attr("aria-label") || l.form.attr("data-name") || "Form";
            l.done.attr("aria-label") || l.form.attr("aria-label", E),
              l.done.attr("tabindex", "-1"),
              l.done.attr("role", "region"),
              l.done.attr("aria-label") ||
                l.done.attr("aria-label", E + " success"),
              l.fail.attr("tabindex", "-1"),
              l.fail.attr("role", "region"),
              l.fail.attr("aria-label") ||
                l.fail.attr("aria-label", E + " failure");
            var T = (l.action = c.attr("action"));
            if (
              ((l.handler = null),
              (l.redirect = c.attr("data-redirect")),
              v.test(T))
            ) {
              l.handler = M;
              return;
            }
            if (!T) {
              if (d) {
                l.handler = (0, n(6524).default)(
                  h,
                  g,
                  a,
                  w,
                  P,
                  L,
                  b,
                  S,
                  N,
                  d,
                  x,
                  e,
                  s
                );
                return;
              }
              _();
            }
          }
          function h(e) {
            var t = (e.btn = e.form.find(':input[type="submit"]'));
            (e.wait = e.btn.attr("data-wait") || null), (e.success = !1);
            let n = !!(O && !e.turnstileToken);
            t.prop("disabled", n),
              t.removeClass("w-form-loading"),
              e.label && t.val(e.label);
          }
          function N(e) {
            var t = e.btn,
              n = e.wait;
            t.prop("disabled", !0), n && ((e.label = t.val()), t.val(n));
          }
          function A(e, t) {
            let n = e.closest(".w-form");
            t ? n.addClass("w-form-loading") : n.removeClass("w-form-loading");
          }
          function L(t, n) {
            var a = null;
            return (
              (n = n || {}),
              t
                .find(
                  ':input:not([type="submit"]):not([type="file"]):not([type="button"])'
                )
                .each(function (i, o) {
                  var r,
                    c,
                    d,
                    l,
                    s,
                    u = e(o),
                    f = u.attr("type"),
                    p =
                      u.attr("data-name") ||
                      u.attr("name") ||
                      "Field " + (i + 1);
                  p = encodeURIComponent(p);
                  var g = u.val();
                  if ("checkbox" === f) g = u.is(":checked");
                  else if ("radio" === f) {
                    if (null === n[p] || "string" == typeof n[p]) return;
                    g =
                      t
                        .find('input[name="' + u.attr("name") + '"]:checked')
                        .val() || null;
                  }
                  "string" == typeof g && (g = e.trim(g)),
                    (n[p] = g),
                    (a =
                      a ||
                      ((r = u),
                      (c = f),
                      (d = p),
                      (l = g),
                      (s = null),
                      "password" === c
                        ? (s = "Passwords cannot be submitted.")
                        : r.attr("required")
                        ? l
                          ? T.test(r.attr("type")) &&
                            !I.test(l) &&
                            (s = "Please enter a valid email address for: " + d)
                          : (s = "Please fill out the required field: " + d)
                        : "g-recaptcha-response" !== d ||
                          l ||
                          (s = "Please confirm you're not a robot."),
                      s));
                }),
              a
            );
          }
          function S(t) {
            var n = {};
            return (
              t.find(':input[type="file"]').each(function (t, a) {
                var i = e(a),
                  o =
                    i.attr("data-name") || i.attr("name") || "File " + (t + 1),
                  r = i.attr("data-value");
                "string" == typeof r && (r = e.trim(r)), (n[o] = r);
              }),
              n
            );
          }
          f.ready =
            f.design =
            f.preview =
              function () {
                O &&
                  (((o = document.createElement("script")).src =
                    "https://challenges.cloudflare.com/turnstile/v0/api.js"),
                  document.head.appendChild(o),
                  (o.onload = () => {
                    p.trigger(r);
                  })),
                  (s =
                    "https://webflow.com/api/v1/form/" +
                    (d = e("html").attr("data-wf-site"))),
                  E &&
                    s.indexOf("https://webflow.com") >= 0 &&
                    (s = s.replace(
                      "https://webflow.com",
                      "https://formdata.webflow.com"
                    )),
                  (u = `${s}/signFile`),
                  (c = e(y + " form")).length && c.each(R),
                  (!m || a.env("preview")) &&
                    !l &&
                    (function () {
                      (l = !0),
                        p.on("submit", y + " form", function (t) {
                          var n = e.data(this, y);
                          n.handler && ((n.evt = t), n.handler(n));
                        });
                      let t = ".w-checkbox-input",
                        n = ".w-radio-input",
                        a = "w--redirected-checked",
                        i = "w--redirected-focus",
                        o = "w--redirected-focus-visible",
                        r = [
                          ["checkbox", t],
                          ["radio", n],
                        ];
                      p.on(
                        "change",
                        y + ' form input[type="checkbox"]:not(' + t + ")",
                        (n) => {
                          e(n.target).siblings(t).toggleClass(a);
                        }
                      ),
                        p.on("change", y + ' form input[type="radio"]', (i) => {
                          e(`input[name="${i.target.name}"]:not(${t})`).map(
                            (t, i) => e(i).siblings(n).removeClass(a)
                          );
                          let o = e(i.target);
                          o.hasClass("w-radio-input") ||
                            o.siblings(n).addClass(a);
                        }),
                        r.forEach(([t, n]) => {
                          p.on(
                            "focus",
                            y + ` form input[type="${t}"]:not(` + n + ")",
                            (t) => {
                              e(t.target).siblings(n).addClass(i),
                                e(t.target)
                                  .filter(
                                    ":focus-visible, [data-wf-focus-visible]"
                                  )
                                  .siblings(n)
                                  .addClass(o);
                            }
                          ),
                            p.on(
                              "blur",
                              y + ` form input[type="${t}"]:not(` + n + ")",
                              (t) => {
                                e(t.target)
                                  .siblings(n)
                                  .removeClass(`${i} ${o}`);
                              }
                            );
                        });
                    })();
              };
          let C = { _mkto_trk: "marketo" };
          function w() {
            return document.cookie.split("; ").reduce(function (e, t) {
              let n = t.split("="),
                a = n[0];
              if (a in C) {
                let t = C[a],
                  i = n.slice(1).join("=");
                e[t] = i;
              }
              return e;
            }, {});
          }
          function M(n) {
            h(n);
            var a,
              i = n.form,
              o = {};
            if (/^https/.test(g.href) && !/^https/.test(n.action))
              return void i.attr("method", "post");
            P(n);
            var r = L(i, o);
            if (r) return b(r);
            N(n),
              t.each(o, function (e, t) {
                T.test(t) && (o.EMAIL = e),
                  /^((full[ _-]?)?name)$/i.test(t) && (a = e),
                  /^(first[ _-]?name)$/i.test(t) && (o.FNAME = e),
                  /^(last[ _-]?name)$/i.test(t) && (o.LNAME = e);
              }),
              a &&
                !o.FNAME &&
                ((o.FNAME = (a = a.split(" "))[0]),
                (o.LNAME = o.LNAME || a[1]));
            var c = n.action.replace("/post?", "/post-json?") + "&c=?",
              d = c.indexOf("u=") + 2;
            d = c.substring(d, c.indexOf("&", d));
            var l = c.indexOf("id=") + 3;
            (o["b_" + d + "_" + (l = c.substring(l, c.indexOf("&", l)))] = ""),
              e
                .ajax({ url: c, data: o, dataType: "jsonp" })
                .done(function (e) {
                  (n.success = "success" === e.result || /already/.test(e.msg)),
                    n.success || console.info("MailChimp error: " + e.msg),
                    x(n);
                })
                .fail(function () {
                  x(n);
                });
          }
          function x(e) {
            var t = e.form,
              n = e.redirect,
              i = e.success;
            if (i && n) return void a.location(n);
            e.done.toggle(i),
              e.fail.toggle(!i),
              i ? e.done.focus() : e.fail.focus(),
              t.toggle(!i),
              h(e);
          }
          function P(e) {
            e.evt && e.evt.preventDefault(), (e.evt = null);
          }
          return f;
        })
      );
    },
    1655: function (e, t, n) {
      "use strict";
      var a = n(3949),
        i = n(5134);
      let o = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
      a.define(
        "navbar",
        (e.exports = function (e, t) {
          var n,
            r,
            c,
            d,
            l = {},
            s = e.tram,
            u = e(window),
            f = e(document),
            p = t.debounce,
            g = a.env(),
            E = ".w-nav",
            y = "w--open",
            T = "w--nav-dropdown-open",
            I = "w--nav-dropdown-toggle-open",
            b = "w--nav-dropdown-list-open",
            m = "w--nav-link-open",
            O = i.triggers,
            v = e();
          function _() {
            a.resize.off(R);
          }
          function R() {
            r.each(P);
          }
          function h(n, a) {
            var i,
              r,
              l,
              s,
              p,
              g = e(a),
              y = e.data(a, E);
            y ||
              (y = e.data(a, E, {
                open: !1,
                el: g,
                config: {},
                selectedIdx: -1,
              })),
              (y.menu = g.find(".w-nav-menu")),
              (y.links = y.menu.find(".w-nav-link")),
              (y.dropdowns = y.menu.find(".w-dropdown")),
              (y.dropdownToggle = y.menu.find(".w-dropdown-toggle")),
              (y.dropdownList = y.menu.find(".w-dropdown-list")),
              (y.button = g.find(".w-nav-button")),
              (y.container = g.find(".w-container")),
              (y.overlayContainerId = "w-nav-overlay-" + n),
              (y.outside =
                ((i = y).outside && f.off("click" + E, i.outside),
                function (t) {
                  var n = e(t.target);
                  (d && n.closest(".w-editor-bem-EditorOverlay").length) ||
                    x(i, n);
                }));
            var T = g.find(".w-nav-brand");
            T &&
              "/" === T.attr("href") &&
              null == T.attr("aria-label") &&
              T.attr("aria-label", "home"),
              y.button.attr("style", "-webkit-user-select: text;"),
              null == y.button.attr("aria-label") &&
                y.button.attr("aria-label", "menu"),
              y.button.attr("role", "button"),
              y.button.attr("tabindex", "0"),
              y.button.attr("aria-controls", y.overlayContainerId),
              y.button.attr("aria-haspopup", "menu"),
              y.button.attr("aria-expanded", "false"),
              y.el.off(E),
              y.button.off(E),
              y.menu.off(E),
              L(y),
              c
                ? (A(y),
                  y.el.on(
                    "setting" + E,
                    ((r = y),
                    function (e, n) {
                      n = n || {};
                      var a = u.width();
                      L(r),
                        !0 === n.open && G(r, !0),
                        !1 === n.open && k(r, !0),
                        r.open &&
                          t.defer(function () {
                            a !== u.width() && C(r);
                          });
                    })
                  ))
                : ((l = y).overlay ||
                    ((l.overlay = e(
                      '<div class="w-nav-overlay" data-wf-ignore />'
                    ).appendTo(l.el)),
                    l.overlay.attr("id", l.overlayContainerId),
                    (l.parent = l.menu.parent()),
                    k(l, !0)),
                  y.button.on("click" + E, w(y)),
                  y.menu.on("click" + E, "a", M(y)),
                  y.button.on(
                    "keydown" + E,
                    ((s = y),
                    function (e) {
                      switch (e.keyCode) {
                        case o.SPACE:
                        case o.ENTER:
                          return (
                            w(s)(), e.preventDefault(), e.stopPropagation()
                          );
                        case o.ESCAPE:
                          return k(s), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                        case o.HOME:
                        case o.END:
                          if (!s.open)
                            return e.preventDefault(), e.stopPropagation();
                          return (
                            e.keyCode === o.END
                              ? (s.selectedIdx = s.links.length - 1)
                              : (s.selectedIdx = 0),
                            S(s),
                            e.preventDefault(),
                            e.stopPropagation()
                          );
                      }
                    })
                  ),
                  y.el.on(
                    "keydown" + E,
                    ((p = y),
                    function (e) {
                      if (p.open)
                        switch (
                          ((p.selectedIdx = p.links.index(
                            document.activeElement
                          )),
                          e.keyCode)
                        ) {
                          case o.HOME:
                          case o.END:
                            return (
                              e.keyCode === o.END
                                ? (p.selectedIdx = p.links.length - 1)
                                : (p.selectedIdx = 0),
                              S(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ESCAPE:
                            return (
                              k(p),
                              p.button.focus(),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ARROW_LEFT:
                          case o.ARROW_UP:
                            return (
                              (p.selectedIdx = Math.max(-1, p.selectedIdx - 1)),
                              S(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ARROW_RIGHT:
                          case o.ARROW_DOWN:
                            return (
                              (p.selectedIdx = Math.min(
                                p.links.length - 1,
                                p.selectedIdx + 1
                              )),
                              S(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                        }
                    })
                  )),
              P(n, a);
          }
          function N(t, n) {
            var a = e.data(n, E);
            a && (A(a), e.removeData(n, E));
          }
          function A(e) {
            e.overlay && (k(e, !0), e.overlay.remove(), (e.overlay = null));
          }
          function L(e) {
            var n = {},
              a = e.config || {},
              i = (n.animation = e.el.attr("data-animation") || "default");
            (n.animOver = /^over/.test(i)),
              (n.animDirect = /left$/.test(i) ? -1 : 1),
              a.animation !== i && e.open && t.defer(C, e),
              (n.easing = e.el.attr("data-easing") || "ease"),
              (n.easing2 = e.el.attr("data-easing2") || "ease");
            var o = e.el.attr("data-duration");
            (n.duration = null != o ? Number(o) : 400),
              (n.docHeight = e.el.attr("data-doc-height")),
              (e.config = n);
          }
          function S(e) {
            if (e.links[e.selectedIdx]) {
              var t = e.links[e.selectedIdx];
              t.focus(), M(t);
            }
          }
          function C(e) {
            e.open && (k(e, !0), G(e, !0));
          }
          function w(e) {
            return p(function () {
              e.open ? k(e) : G(e);
            });
          }
          function M(t) {
            return function (n) {
              var i = e(this).attr("href");
              if (!a.validClick(n.currentTarget))
                return void n.preventDefault();
              i && 0 === i.indexOf("#") && t.open && k(t);
            };
          }
          (l.ready =
            l.design =
            l.preview =
              function () {
                (c = g && a.env("design")),
                  (d = a.env("editor")),
                  (n = e(document.body)),
                  (r = f.find(E)).length && (r.each(h), _(), a.resize.on(R));
              }),
            (l.destroy = function () {
              (v = e()), _(), r && r.length && r.each(N);
            });
          var x = p(function (e, t) {
            if (e.open) {
              var n = t.closest(".w-nav-menu");
              e.menu.is(n) || k(e);
            }
          });
          function P(t, n) {
            var a = e.data(n, E),
              i = (a.collapsed = "none" !== a.button.css("display"));
            if ((!a.open || i || c || k(a, !0), a.container.length)) {
              var o,
                r =
                  ("none" === (o = a.container.css(U)) && (o = ""),
                  function (t, n) {
                    (n = e(n)).css(U, ""), "none" === n.css(U) && n.css(U, o);
                  });
              a.links.each(r), a.dropdowns.each(r);
            }
            a.open && D(a);
          }
          var U = "max-width";
          function F(e, t) {
            t.setAttribute("data-nav-menu-open", "");
          }
          function V(e, t) {
            t.removeAttribute("data-nav-menu-open");
          }
          function G(e, t) {
            if (!e.open) {
              (e.open = !0),
                e.menu.each(F),
                e.links.addClass(m),
                e.dropdowns.addClass(T),
                e.dropdownToggle.addClass(I),
                e.dropdownList.addClass(b),
                e.button.addClass(y);
              var n = e.config;
              ("none" === n.animation ||
                !s.support.transform ||
                n.duration <= 0) &&
                (t = !0);
              var i = D(e),
                o = e.menu.outerHeight(!0),
                r = e.menu.outerWidth(!0),
                d = e.el.height(),
                l = e.el[0];
              if (
                (P(0, l),
                O.intro(0, l),
                a.redraw.up(),
                c || f.on("click" + E, e.outside),
                t)
              )
                return void p();
              var u = "transform " + n.duration + "ms " + n.easing;
              if (
                (e.overlay &&
                  ((v = e.menu.prev()), e.overlay.show().append(e.menu)),
                n.animOver)
              ) {
                s(e.menu)
                  .add(u)
                  .set({ x: n.animDirect * r, height: i })
                  .start({ x: 0 })
                  .then(p),
                  e.overlay && e.overlay.width(r);
                return;
              }
              s(e.menu)
                .add(u)
                .set({ y: -(d + o) })
                .start({ y: 0 })
                .then(p);
            }
            function p() {
              e.button.attr("aria-expanded", "true");
            }
          }
          function D(e) {
            var t = e.config,
              a = t.docHeight ? f.height() : n.height();
            return (
              t.animOver
                ? e.menu.height(a)
                : "fixed" !== e.el.css("position") &&
                  (a -= e.el.outerHeight(!0)),
              e.overlay && e.overlay.height(a),
              a
            );
          }
          function k(e, t) {
            if (e.open) {
              (e.open = !1), e.button.removeClass(y);
              var n = e.config;
              if (
                (("none" === n.animation ||
                  !s.support.transform ||
                  n.duration <= 0) &&
                  (t = !0),
                O.outro(0, e.el[0]),
                f.off("click" + E, e.outside),
                t)
              ) {
                s(e.menu).stop(), c();
                return;
              }
              var a = "transform " + n.duration + "ms " + n.easing2,
                i = e.menu.outerHeight(!0),
                o = e.menu.outerWidth(!0),
                r = e.el.height();
              if (n.animOver)
                return void s(e.menu)
                  .add(a)
                  .start({ x: o * n.animDirect })
                  .then(c);
              s(e.menu)
                .add(a)
                .start({ y: -(r + i) })
                .then(c);
            }
            function c() {
              e.menu.height(""),
                s(e.menu).set({ x: 0, y: 0 }),
                e.menu.each(V),
                e.links.removeClass(m),
                e.dropdowns.removeClass(T),
                e.dropdownToggle.removeClass(I),
                e.dropdownList.removeClass(b),
                e.overlay &&
                  e.overlay.children().length &&
                  (v.length
                    ? e.menu.insertAfter(v)
                    : e.menu.prependTo(e.parent),
                  e.overlay.attr("style", "").hide()),
                e.el.triggerHandler("w-close"),
                e.button.attr("aria-expanded", "false");
            }
          }
          return l;
        })
      );
    },
    3946: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        actionListPlaybackChanged: function () {
          return Y;
        },
        animationFrameChanged: function () {
          return D;
        },
        clearRequested: function () {
          return U;
        },
        elementStateChanged: function () {
          return z;
        },
        eventListenerAdded: function () {
          return F;
        },
        eventStateChanged: function () {
          return G;
        },
        instanceAdded: function () {
          return X;
        },
        instanceRemoved: function () {
          return B;
        },
        instanceStarted: function () {
          return H;
        },
        mediaQueriesDefined: function () {
          return W;
        },
        parameterChanged: function () {
          return k;
        },
        playbackRequested: function () {
          return x;
        },
        previewRequested: function () {
          return M;
        },
        rawDataImported: function () {
          return L;
        },
        sessionInitialized: function () {
          return S;
        },
        sessionStarted: function () {
          return C;
        },
        sessionStopped: function () {
          return w;
        },
        stopRequested: function () {
          return P;
        },
        testFrameRendered: function () {
          return V;
        },
        viewportWidthChanged: function () {
          return j;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(7087),
        r = n(9468),
        {
          IX2_RAW_DATA_IMPORTED: c,
          IX2_SESSION_INITIALIZED: d,
          IX2_SESSION_STARTED: l,
          IX2_SESSION_STOPPED: s,
          IX2_PREVIEW_REQUESTED: u,
          IX2_PLAYBACK_REQUESTED: f,
          IX2_STOP_REQUESTED: p,
          IX2_CLEAR_REQUESTED: g,
          IX2_EVENT_LISTENER_ADDED: E,
          IX2_TEST_FRAME_RENDERED: y,
          IX2_EVENT_STATE_CHANGED: T,
          IX2_ANIMATION_FRAME_CHANGED: I,
          IX2_PARAMETER_CHANGED: b,
          IX2_INSTANCE_ADDED: m,
          IX2_INSTANCE_STARTED: O,
          IX2_INSTANCE_REMOVED: v,
          IX2_ELEMENT_STATE_CHANGED: _,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: R,
          IX2_VIEWPORT_WIDTH_CHANGED: h,
          IX2_MEDIA_QUERIES_DEFINED: N,
        } = o.IX2EngineActionTypes,
        { reifyState: A } = r.IX2VanillaUtils,
        L = (e) => ({ type: c, payload: { ...A(e) } }),
        S = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: d,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        }),
        C = () => ({ type: l }),
        w = () => ({ type: s }),
        M = ({ rawData: e, defer: t }) => ({
          type: u,
          payload: { defer: t, rawData: e },
        }),
        x = ({
          actionTypeId: e = o.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: a,
          allowEvents: i,
          immediate: r,
          testManual: c,
          verbose: d,
          rawData: l,
        }) => ({
          type: f,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: c,
            eventId: a,
            allowEvents: i,
            immediate: r,
            verbose: d,
            rawData: l,
          },
        }),
        P = (e) => ({ type: p, payload: { actionListId: e } }),
        U = () => ({ type: g }),
        F = (e, t) => ({ type: E, payload: { target: e, listenerParams: t } }),
        V = (e = 1) => ({ type: y, payload: { step: e } }),
        G = (e, t) => ({ type: T, payload: { stateKey: e, newState: t } }),
        D = (e, t) => ({ type: I, payload: { now: e, parameters: t } }),
        k = (e, t) => ({ type: b, payload: { key: e, value: t } }),
        X = (e) => ({ type: m, payload: { ...e } }),
        H = (e, t) => ({ type: O, payload: { instanceId: e, time: t } }),
        B = (e) => ({ type: v, payload: { instanceId: e } }),
        z = (e, t, n, a) => ({
          type: _,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: a },
        }),
        Y = ({ actionListId: e, isPlaying: t }) => ({
          type: R,
          payload: { actionListId: e, isPlaying: t },
        }),
        j = ({ width: e, mediaQueries: t }) => ({
          type: h,
          payload: { width: e, mediaQueries: t },
        }),
        W = () => ({ type: N });
    },
    6011: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          actions: function () {
            return l;
          },
          destroy: function () {
            return g;
          },
          init: function () {
            return p;
          },
          setEnv: function () {
            return f;
          },
          store: function () {
            return u;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = n(9516),
        c = (a = n(7243)) && a.__esModule ? a : { default: a },
        d = n(1970),
        l = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = s(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, o, r)
                : (a[o] = e[o]);
            }
          return (a.default = e), n && n.set(e, a), a;
        })(n(3946));
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (s = function (e) {
          return e ? n : t;
        })(e);
      }
      let u = (0, r.createStore)(c.default);
      function f(e) {
        e() && (0, d.observeRequests)(u);
      }
      function p(e) {
        g(), (0, d.startEngine)({ store: u, rawData: e, allowEvents: !0 });
      }
      function g() {
        (0, d.stopEngine)(u);
      }
    },
    5012: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        elementContains: function () {
          return b;
        },
        getChildElements: function () {
          return O;
        },
        getClosestElement: function () {
          return _;
        },
        getProperty: function () {
          return g;
        },
        getQuerySelector: function () {
          return y;
        },
        getRefType: function () {
          return R;
        },
        getSiblingElements: function () {
          return v;
        },
        getStyle: function () {
          return p;
        },
        getValidDocument: function () {
          return T;
        },
        isSiblingNode: function () {
          return m;
        },
        matchSelector: function () {
          return E;
        },
        queryDocument: function () {
          return I;
        },
        setStyle: function () {
          return f;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(9468),
        r = n(7087),
        { ELEMENT_MATCHES: c } = o.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: d,
          HTML_ELEMENT: l,
          PLAIN_OBJECT: s,
          WF_PAGE: u,
        } = r.IX2EngineConstants;
      function f(e, t, n) {
        e.style[t] = n;
      }
      function p(e, t) {
        return t.startsWith("--")
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
          ? e.style[t]
          : void 0;
      }
      function g(e, t) {
        return e[t];
      }
      function E(e) {
        return (t) => t[c](e);
      }
      function y({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(d)) {
            let n = e.split(d),
              a = n[0];
            if (((t = n[1]), a !== document.documentElement.getAttribute(u)))
              return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }
      function T(e) {
        return null == e || e === document.documentElement.getAttribute(u)
          ? document
          : null;
      }
      function I(e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e)
        );
      }
      function b(e, t) {
        return e.contains(t);
      }
      function m(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }
      function O(e) {
        let t = [];
        for (let n = 0, { length: a } = e || []; n < a; n++) {
          let { children: a } = e[n],
            { length: i } = a;
          if (i) for (let e = 0; e < i; e++) t.push(a[e]);
        }
        return t;
      }
      function v(e = []) {
        let t = [],
          n = [];
        for (let a = 0, { length: i } = e; a < i; a++) {
          let { parentNode: i } = e[a];
          if (!i || !i.children || !i.children.length || -1 !== n.indexOf(i))
            continue;
          n.push(i);
          let o = i.firstElementChild;
          for (; null != o; )
            -1 === e.indexOf(o) && t.push(o), (o = o.nextElementSibling);
        }
        return t;
      }
      let _ = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
              if (n[c] && n[c](t)) return n;
              n = n.parentNode;
            } while (null != n);
            return null;
          };
      function R(e) {
        return null != e && "object" == typeof e
          ? e instanceof Element
            ? l
            : s
          : null;
      }
    },
    1970: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        observeRequests: function () {
          return K;
        },
        startActionGroup: function () {
          return eg;
        },
        startEngine: function () {
          return ea;
        },
        stopActionGroup: function () {
          return ep;
        },
        stopAllActionGroups: function () {
          return ef;
        },
        stopEngine: function () {
          return ei;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = I(n(9777)),
        r = I(n(4738)),
        c = I(n(4659)),
        d = I(n(3452)),
        l = I(n(6633)),
        s = I(n(3729)),
        u = I(n(2397)),
        f = I(n(5082)),
        p = n(7087),
        g = n(9468),
        E = n(3946),
        y = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = b(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, o, r)
                : (a[o] = e[o]);
            }
          return (a.default = e), n && n.set(e, a), a;
        })(n(5012)),
        T = I(n(8955));
      function I(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function b(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (b = function (e) {
          return e ? n : t;
        })(e);
      }
      let m = Object.keys(p.QuickEffectIds),
        O = (e) => m.includes(e),
        {
          COLON_DELIMITER: v,
          BOUNDARY_SELECTOR: _,
          HTML_ELEMENT: R,
          RENDER_GENERAL: h,
          W_MOD_IX: N,
        } = p.IX2EngineConstants,
        {
          getAffectedElements: A,
          getElementId: L,
          getDestinationValues: S,
          observeStore: C,
          getInstanceId: w,
          renderHTMLElement: M,
          clearAllStyles: x,
          getMaxDurationItemIndex: P,
          getComputedStyle: U,
          getInstanceOrigin: F,
          reduceListToGroup: V,
          shouldNamespaceEventParameter: G,
          getNamespacedParameterId: D,
          shouldAllowMediaQuery: k,
          cleanupHTMLElement: X,
          clearObjectCache: H,
          stringifyTarget: B,
          mediaQueriesEqual: z,
          shallowEqual: Y,
        } = g.IX2VanillaUtils,
        {
          isPluginType: j,
          createPluginInstance: W,
          getPluginDuration: Q,
        } = g.IX2VanillaPlugins,
        $ = navigator.userAgent,
        q = $.match(/iPad/i) || $.match(/iPhone/);
      function K(e) {
        C({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: Z }),
          C({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: ee,
          }),
          C({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: et }),
          C({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: en });
      }
      function Z({ rawData: e, defer: t }, n) {
        let a = () => {
          ea({ store: n, rawData: e, allowEvents: !0 }), J();
        };
        t ? setTimeout(a, 0) : a();
      }
      function J() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function ee(e, t) {
        let {
            actionTypeId: n,
            actionListId: a,
            actionItemId: i,
            eventId: o,
            allowEvents: r,
            immediate: c,
            testManual: d,
            verbose: l = !0,
          } = e,
          { rawData: s } = e;
        if (a && i && s && c) {
          let e = s.actionLists[a];
          e && (s = V({ actionList: e, actionItemId: i, rawData: s }));
        }
        if (
          (ea({ store: t, rawData: s, allowEvents: r, testManual: d }),
          (a && n === p.ActionTypeConsts.GENERAL_START_ACTION) || O(n))
        ) {
          ep({ store: t, actionListId: a }),
            eu({ store: t, actionListId: a, eventId: o });
          let e = eg({
            store: t,
            eventId: o,
            actionListId: a,
            immediate: c,
            verbose: l,
          });
          l &&
            e &&
            t.dispatch(
              (0, E.actionListPlaybackChanged)({
                actionListId: a,
                isPlaying: !c,
              })
            );
        }
      }
      function et({ actionListId: e }, t) {
        e ? ep({ store: t, actionListId: e }) : ef({ store: t }), ei(t);
      }
      function en(e, t) {
        ei(t), x({ store: t, elementApi: y });
      }
      function ea({ store: e, rawData: t, allowEvents: n, testManual: a }) {
        let { ixSession: i } = e.getState();
        if ((t && e.dispatch((0, E.rawDataImported)(t)), !i.active)) {
          (e.dispatch(
            (0, E.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(_),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          n) &&
            ((function (e) {
              let { ixData: t } = e.getState(),
                { eventTypeMap: n } = t;
              ec(e),
                (0, u.default)(n, (t, n) => {
                  let a = T.default[n];
                  if (!a)
                    return void console.warn(
                      `IX2 event type not configured: ${n}`
                    );
                  !(function ({ logic: e, store: t, events: n }) {
                    !(function (e) {
                      if (!q) return;
                      let t = {},
                        n = "";
                      for (let a in e) {
                        let { eventTypeId: i, target: o } = e[a],
                          r = y.getQuerySelector(o);
                        t[r] ||
                          ((i === p.EventTypeConsts.MOUSE_CLICK ||
                            i === p.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                            ((t[r] = !0),
                            (n +=
                              r +
                              "{cursor: pointer;touch-action: manipulation;}")));
                      }
                      if (n) {
                        let e = document.createElement("style");
                        (e.textContent = n), document.body.appendChild(e);
                      }
                    })(n);
                    let { types: a, handler: i } = e,
                      { ixData: d } = t.getState(),
                      { actionLists: l } = d,
                      s = ed(n, es);
                    if (!(0, c.default)(s)) return;
                    (0, u.default)(s, (e, a) => {
                      let i = n[a],
                        {
                          action: c,
                          id: s,
                          mediaQueries: u = d.mediaQueryKeys,
                        } = i,
                        { actionListId: f } = c.config;
                      z(u, d.mediaQueryKeys) ||
                        t.dispatch((0, E.mediaQueriesDefined)()),
                        c.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                          (Array.isArray(i.config)
                            ? i.config
                            : [i.config]
                          ).forEach((n) => {
                            let { continuousParameterGroupId: a } = n,
                              i = (0, r.default)(
                                l,
                                `${f}.continuousParameterGroups`,
                                []
                              ),
                              c = (0, o.default)(i, ({ id: e }) => e === a),
                              d = (n.smoothing || 0) / 100,
                              u = (n.restingState || 0) / 100;
                            c &&
                              e.forEach((e, a) => {
                                !(function ({
                                  store: e,
                                  eventStateKey: t,
                                  eventTarget: n,
                                  eventId: a,
                                  eventConfig: i,
                                  actionListId: o,
                                  parameterGroup: c,
                                  smoothing: d,
                                  restingValue: l,
                                }) {
                                  let { ixData: s, ixSession: u } =
                                      e.getState(),
                                    { events: f } = s,
                                    g = f[a],
                                    { eventTypeId: E } = g,
                                    T = {},
                                    I = {},
                                    b = [],
                                    { continuousActionGroups: m } = c,
                                    { id: O } = c;
                                  G(E, i) && (O = D(t, O));
                                  let R =
                                    u.hasBoundaryNodes && n
                                      ? y.getClosestElement(n, _)
                                      : null;
                                  m.forEach((e) => {
                                    let { keyframe: t, actionItems: a } = e;
                                    a.forEach((e) => {
                                      let { actionTypeId: a } = e,
                                        { target: i } = e.config;
                                      if (!i) return;
                                      let o = i.boundaryMode ? R : null,
                                        r = B(i) + v + a;
                                      if (
                                        ((I[r] = (function (e = [], t, n) {
                                          let a,
                                            i = [...e];
                                          return (
                                            i.some(
                                              (e, n) =>
                                                e.keyframe === t &&
                                                ((a = n), !0)
                                            ),
                                            null == a &&
                                              ((a = i.length),
                                              i.push({
                                                keyframe: t,
                                                actionItems: [],
                                              })),
                                            i[a].actionItems.push(n),
                                            i
                                          );
                                        })(I[r], t, e)),
                                        !T[r])
                                      ) {
                                        T[r] = !0;
                                        let { config: t } = e;
                                        A({
                                          config: t,
                                          event: g,
                                          eventTarget: n,
                                          elementRoot: o,
                                          elementApi: y,
                                        }).forEach((e) => {
                                          b.push({ element: e, key: r });
                                        });
                                      }
                                    });
                                  }),
                                    b.forEach(({ element: t, key: n }) => {
                                      let i = I[n],
                                        c = (0, r.default)(
                                          i,
                                          "[0].actionItems[0]",
                                          {}
                                        ),
                                        { actionTypeId: s } = c,
                                        u = (
                                          s === p.ActionTypeConsts.PLUGIN_RIVE
                                            ? 0 ===
                                              (
                                                c.config?.target
                                                  ?.selectorGuids || []
                                              ).length
                                            : j(s)
                                        )
                                          ? W(s)?.(t, c)
                                          : null,
                                        f = S(
                                          {
                                            element: t,
                                            actionItem: c,
                                            elementApi: y,
                                          },
                                          u
                                        );
                                      eE({
                                        store: e,
                                        element: t,
                                        eventId: a,
                                        actionListId: o,
                                        actionItem: c,
                                        destination: f,
                                        continuous: !0,
                                        parameterId: O,
                                        actionGroups: i,
                                        smoothing: d,
                                        restingValue: l,
                                        pluginInstance: u,
                                      });
                                    });
                                })({
                                  store: t,
                                  eventStateKey: s + v + a,
                                  eventTarget: e,
                                  eventId: s,
                                  eventConfig: n,
                                  actionListId: f,
                                  parameterGroup: c,
                                  smoothing: d,
                                  restingValue: u,
                                });
                              });
                          }),
                        (c.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_START_ACTION ||
                          O(c.actionTypeId)) &&
                          eu({ store: t, actionListId: f, eventId: s });
                    });
                    let g = (e) => {
                        let { ixSession: a } = t.getState();
                        el(s, (o, r, c) => {
                          let l = n[r],
                            s = a.eventState[c],
                            { action: u, mediaQueries: f = d.mediaQueryKeys } =
                              l;
                          if (!k(f, a.mediaQueryKey)) return;
                          let g = (n = {}) => {
                            let a = i(
                              {
                                store: t,
                                element: o,
                                event: l,
                                eventConfig: n,
                                nativeEvent: e,
                                eventStateKey: c,
                              },
                              s
                            );
                            Y(a, s) ||
                              t.dispatch((0, E.eventStateChanged)(c, a));
                          };
                          u.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                            ? (Array.isArray(l.config)
                                ? l.config
                                : [l.config]
                              ).forEach(g)
                            : g();
                        });
                      },
                      T = (0, f.default)(g, 12),
                      I = ({ target: e = document, types: n, throttle: a }) => {
                        n.split(" ")
                          .filter(Boolean)
                          .forEach((n) => {
                            let i = a ? T : g;
                            e.addEventListener(n, i),
                              t.dispatch((0, E.eventListenerAdded)(e, [n, i]));
                          });
                      };
                    Array.isArray(a)
                      ? a.forEach(I)
                      : "string" == typeof a && I(e);
                  })({ logic: a, store: e, events: t });
                });
              let { ixSession: a } = e.getState();
              a.eventListeners.length &&
                (function (e) {
                  let t = () => {
                    ec(e);
                  };
                  er.forEach((n) => {
                    window.addEventListener(n, t),
                      e.dispatch((0, E.eventListenerAdded)(window, [n, t]));
                  }),
                    t();
                })(e);
            })(e),
            (function () {
              let { documentElement: e } = document;
              -1 === e.className.indexOf(N) && (e.className += ` ${N}`);
            })(),
            e.getState().ixSession.hasDefinedMediaQueries &&
              C({
                store: e,
                select: ({ ixSession: e }) => e.mediaQueryKey,
                onChange: () => {
                  ei(e),
                    x({ store: e, elementApi: y }),
                    ea({ store: e, allowEvents: !0 }),
                    J();
                },
              }));
          e.dispatch((0, E.sessionStarted)()),
            (function (e, t) {
              let n = (a) => {
                let { ixSession: i, ixParameters: o } = e.getState();
                if (i.active)
                  if ((e.dispatch((0, E.animationFrameChanged)(a, o)), t)) {
                    let t = C({
                      store: e,
                      select: ({ ixSession: e }) => e.tick,
                      onChange: (e) => {
                        n(e), t();
                      },
                    });
                  } else requestAnimationFrame(n);
              };
              n(window.performance.now());
            })(e, a);
        }
      }
      function ei(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: n } = t;
          n.forEach(eo), H(), e.dispatch((0, E.sessionStopped)());
        }
      }
      function eo({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let er = ["resize", "orientationchange"];
      function ec(e) {
        let { ixSession: t, ixData: n } = e.getState(),
          a = window.innerWidth;
        if (a !== t.viewportWidth) {
          let { mediaQueries: t } = n;
          e.dispatch(
            (0, E.viewportWidthChanged)({ width: a, mediaQueries: t })
          );
        }
      }
      let ed = (e, t) => (0, d.default)((0, s.default)(e, t), l.default),
        el = (e, t) => {
          (0, u.default)(e, (e, n) => {
            e.forEach((e, a) => {
              t(e, n, n + v + a);
            });
          });
        },
        es = (e) =>
          A({
            config: { target: e.target, targets: e.targets },
            elementApi: y,
          });
      function eu({ store: e, actionListId: t, eventId: n }) {
        let { ixData: a, ixSession: i } = e.getState(),
          { actionLists: o, events: c } = a,
          d = c[n],
          l = o[t];
        if (l && l.useFirstGroupAsInitialState) {
          let o = (0, r.default)(l, "actionItemGroups[0].actionItems", []);
          if (
            !k(
              (0, r.default)(d, "mediaQueries", a.mediaQueryKeys),
              i.mediaQueryKey
            )
          )
            return;
          o.forEach((a) => {
            let { config: i, actionTypeId: o } = a,
              r = A({
                config:
                  i?.target?.useEventTarget === !0 &&
                  i?.target?.objectId == null
                    ? { target: d.target, targets: d.targets }
                    : i,
                event: d,
                elementApi: y,
              }),
              c = j(o);
            r.forEach((i) => {
              let r = c ? W(o)?.(i, a) : null;
              eE({
                destination: S({ element: i, actionItem: a, elementApi: y }, r),
                immediate: !0,
                store: e,
                element: i,
                eventId: n,
                actionItem: a,
                actionListId: t,
                pluginInstance: r,
              });
            });
          });
        }
      }
      function ef({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, u.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: n, verbose: a } = t;
            ey(t, e),
              a &&
                e.dispatch(
                  (0, E.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function ep({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: a,
        actionListId: i,
      }) {
        let { ixInstances: o, ixSession: c } = e.getState(),
          d = c.hasBoundaryNodes && n ? y.getClosestElement(n, _) : null;
        (0, u.default)(o, (n) => {
          let o = (0, r.default)(n, "actionItem.config.target.boundaryMode"),
            c = !a || n.eventStateKey === a;
          if (n.actionListId === i && n.eventId === t && c) {
            if (d && o && !y.elementContains(d, n.element)) return;
            ey(n, e),
              n.verbose &&
                e.dispatch(
                  (0, E.actionListPlaybackChanged)({
                    actionListId: i,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function eg({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: a,
        actionListId: i,
        groupIndex: o = 0,
        immediate: c,
        verbose: d,
      }) {
        let { ixData: l, ixSession: s } = e.getState(),
          { events: u } = l,
          f = u[t] || {},
          { mediaQueries: p = l.mediaQueryKeys } = f,
          { actionItemGroups: g, useFirstGroupAsInitialState: E } = (0,
          r.default)(l, `actionLists.${i}`, {});
        if (!g || !g.length) return !1;
        o >= g.length && (0, r.default)(f, "config.loop") && (o = 0),
          0 === o && E && o++;
        let T =
            (0 === o || (1 === o && E)) && O(f.action?.actionTypeId)
              ? f.config.delay
              : void 0,
          I = (0, r.default)(g, [o, "actionItems"], []);
        if (!I.length || !k(p, s.mediaQueryKey)) return !1;
        let b = s.hasBoundaryNodes && n ? y.getClosestElement(n, _) : null,
          m = P(I),
          v = !1;
        return (
          I.forEach((r, l) => {
            let { config: s, actionTypeId: u } = r,
              p = j(u),
              { target: g } = s;
            g &&
              A({
                config: s,
                event: f,
                eventTarget: n,
                elementRoot: g.boundaryMode ? b : null,
                elementApi: y,
              }).forEach((s, f) => {
                let g = p ? W(u)?.(s, r) : null,
                  E = p ? Q(u)(s, r) : null;
                v = !0;
                let I = U({ element: s, actionItem: r }),
                  b = S({ element: s, actionItem: r, elementApi: y }, g);
                eE({
                  store: e,
                  element: s,
                  actionItem: r,
                  eventId: t,
                  eventTarget: n,
                  eventStateKey: a,
                  actionListId: i,
                  groupIndex: o,
                  isCarrier: m === l && 0 === f,
                  computedStyle: I,
                  destination: b,
                  immediate: c,
                  verbose: d,
                  pluginInstance: g,
                  pluginDuration: E,
                  instanceDelay: T,
                });
              });
          }),
          v
        );
      }
      function eE(e) {
        let t,
          { store: n, computedStyle: a, ...i } = e,
          {
            element: o,
            actionItem: r,
            immediate: c,
            pluginInstance: d,
            continuous: l,
            restingValue: s,
            eventId: u,
          } = i,
          f = w(),
          { ixElements: g, ixSession: T, ixData: I } = n.getState(),
          b = L(g, o),
          { refState: m } = g[b] || {},
          O = y.getRefType(o),
          v = T.reducedMotion && p.ReducedMotionTypes[r.actionTypeId];
        if (v && l)
          switch (I.events[u]?.eventTypeId) {
            case p.EventTypeConsts.MOUSE_MOVE:
            case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = s;
              break;
            default:
              t = 0.5;
          }
        let _ = F(o, m, a, r, y, d);
        if (
          (n.dispatch(
            (0, E.instanceAdded)({
              instanceId: f,
              elementId: b,
              origin: _,
              refType: O,
              skipMotion: v,
              skipToValue: t,
              ...i,
            })
          ),
          eT(document.body, "ix2-animation-started", f),
          c)
        )
          return void (function (e, t) {
            let { ixParameters: n } = e.getState();
            e.dispatch((0, E.instanceStarted)(t, 0)),
              e.dispatch((0, E.animationFrameChanged)(performance.now(), n));
            let { ixInstances: a } = e.getState();
            eI(a[t], e);
          })(n, f);
        C({ store: n, select: ({ ixInstances: e }) => e[f], onChange: eI }),
          l || n.dispatch((0, E.instanceStarted)(f, T.tick));
      }
      function ey(e, t) {
        eT(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState(),
        });
        let { elementId: n, actionItem: a } = e,
          { ixElements: i } = t.getState(),
          { ref: o, refType: r } = i[n] || {};
        r === R && X(o, a, y), t.dispatch((0, E.instanceRemoved)(e.id));
      }
      function eT(e, t, n) {
        let a = document.createEvent("CustomEvent");
        a.initCustomEvent(t, !0, !0, n), e.dispatchEvent(a);
      }
      function eI(e, t) {
        let {
            active: n,
            continuous: a,
            complete: i,
            elementId: o,
            actionItem: r,
            actionTypeId: c,
            renderType: d,
            current: l,
            groupIndex: s,
            eventId: u,
            eventTarget: f,
            eventStateKey: p,
            actionListId: g,
            isCarrier: T,
            styleProp: I,
            verbose: b,
            pluginInstance: m,
          } = e,
          { ixData: O, ixSession: v } = t.getState(),
          { events: _ } = O,
          { mediaQueries: N = O.mediaQueryKeys } = _ && _[u] ? _[u] : {};
        if (k(N, v.mediaQueryKey) && (a || n || i)) {
          if (l || (d === h && i)) {
            t.dispatch((0, E.elementStateChanged)(o, c, l, r));
            let { ixElements: e } = t.getState(),
              { ref: n, refType: a, refState: i } = e[o] || {},
              s = i && i[c];
            (a === R || j(c)) && M(n, i, s, u, r, I, y, d, m);
          }
          if (i) {
            if (T) {
              let e = eg({
                store: t,
                eventId: u,
                eventTarget: f,
                eventStateKey: p,
                actionListId: g,
                groupIndex: s + 1,
                verbose: b,
              });
              b &&
                !e &&
                t.dispatch(
                  (0, E.actionListPlaybackChanged)({
                    actionListId: g,
                    isPlaying: !1,
                  })
                );
            }
            ey(e, t);
          }
        }
      }
    },
    8955: function (e, t, n) {
      "use strict";
      let a;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return ep;
          },
        });
      let i = u(n(5801)),
        o = u(n(4738)),
        r = u(n(3789)),
        c = n(7087),
        d = n(1970),
        l = n(3946),
        s = n(9468);
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          MOUSE_CLICK: f,
          MOUSE_SECOND_CLICK: p,
          MOUSE_DOWN: g,
          MOUSE_UP: E,
          MOUSE_OVER: y,
          MOUSE_OUT: T,
          DROPDOWN_CLOSE: I,
          DROPDOWN_OPEN: b,
          SLIDER_ACTIVE: m,
          SLIDER_INACTIVE: O,
          TAB_ACTIVE: v,
          TAB_INACTIVE: _,
          NAVBAR_CLOSE: R,
          NAVBAR_OPEN: h,
          MOUSE_MOVE: N,
          PAGE_SCROLL_DOWN: A,
          SCROLL_INTO_VIEW: L,
          SCROLL_OUT_OF_VIEW: S,
          PAGE_SCROLL_UP: C,
          SCROLLING_IN_VIEW: w,
          PAGE_FINISH: M,
          ECOMMERCE_CART_CLOSE: x,
          ECOMMERCE_CART_OPEN: P,
          PAGE_START: U,
          PAGE_SCROLL: F,
        } = c.EventTypeConsts,
        V = "COMPONENT_ACTIVE",
        G = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: D } = c.IX2EngineConstants,
        { getNamespacedParameterId: k } = s.IX2VanillaUtils,
        X = (e) => (t) => !!("object" == typeof t && e(t)) || t,
        H = X(({ element: e, nativeEvent: t }) => e === t.target),
        B = X(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        z = (0, i.default)([H, B]),
        Y = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(),
              { events: a } = n,
              i = a[t];
            if (i && !ee[i.eventTypeId]) return i;
          }
          return null;
        },
        j = ({ store: e, event: t }) => {
          let { action: n } = t,
            { autoStopEventId: a } = n.config;
          return !!Y(e, a);
        },
        W = ({ store: e, event: t, element: n, eventStateKey: a }, i) => {
          let { action: r, id: c } = t,
            { actionListId: l, autoStopEventId: s } = r.config,
            u = Y(e, s);
          return (
            u &&
              (0, d.stopActionGroup)({
                store: e,
                eventId: s,
                eventTarget: n,
                eventStateKey: s + D + a.split(D)[1],
                actionListId: (0, o.default)(u, "action.config.actionListId"),
              }),
            (0, d.stopActionGroup)({
              store: e,
              eventId: c,
              eventTarget: n,
              eventStateKey: a,
              actionListId: l,
            }),
            (0, d.startActionGroup)({
              store: e,
              eventId: c,
              eventTarget: n,
              eventStateKey: a,
              actionListId: l,
            }),
            i
          );
        },
        Q = (e, t) => (n, a) => !0 === e(n, a) ? t(n, a) : a,
        $ = { handler: Q(z, W) },
        q = { ...$, types: [V, G].join(" ") },
        K = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ],
        Z = "mouseover mouseout",
        J = { types: K },
        ee = { PAGE_START: U, PAGE_FINISH: M },
        et = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              "CSS1Compat" === document.compatMode
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, r.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        en = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        ea = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: a, relatedTarget: i } = t,
            o = e.contains(a);
          if ("mouseover" === n && o) return !0;
          let r = e.contains(i);
          return "mouseout" === n && !!o && !!r;
        },
        ei = (e) => {
          let {
              element: t,
              event: { config: n },
            } = e,
            { clientWidth: a, clientHeight: i } = et(),
            o = n.scrollOffsetValue,
            r = "PX" === n.scrollOffsetUnit ? o : (i * (o || 0)) / 100;
          return en(t.getBoundingClientRect(), {
            left: 0,
            top: r,
            right: a,
            bottom: i - r,
          });
        },
        eo = (e) => (t, n) => {
          let { type: a } = t.nativeEvent,
            i = -1 !== [V, G].indexOf(a) ? a === V : n.isActive,
            o = { ...n, isActive: i };
          return ((!n || o.isActive !== n.isActive) && e(t, o)) || o;
        },
        er = (e) => (t, n) => {
          let a = { elementHovered: ea(t) };
          return (
            ((n ? a.elementHovered !== n.elementHovered : a.elementHovered) &&
              e(t, a)) ||
            a
          );
        },
        ec =
          (e) =>
          (t, n = {}) => {
            let a,
              i,
              { stiffScrollTop: o, scrollHeight: r, innerHeight: c } = et(),
              {
                event: { config: d, eventTypeId: l },
              } = t,
              { scrollOffsetValue: s, scrollOffsetUnit: u } = d,
              f = r - c,
              p = Number((o / f).toFixed(2));
            if (n && n.percentTop === p) return n;
            let g = ("PX" === u ? s : (c * (s || 0)) / 100) / f,
              E = 0;
            n &&
              ((a = p > n.percentTop),
              (E = (i = n.scrollingDown !== a) ? p : n.anchorTop));
            let y = l === A ? p >= E + g : p <= E - g,
              T = {
                ...n,
                percentTop: p,
                inBounds: y,
                anchorTop: E,
                scrollingDown: a,
              };
            return (n && y && (i || T.inBounds !== n.inBounds) && e(t, T)) || T;
          },
        ed = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        el =
          (e) =>
          (t, n = { clickCount: 0 }) => {
            let a = { clickCount: (n.clickCount % 2) + 1 };
            return (a.clickCount !== n.clickCount && e(t, a)) || a;
          },
        es = (e = !0) => ({
          ...q,
          handler: Q(
            e ? z : H,
            eo((e, t) => (t.isActive ? $.handler(e, t) : t))
          ),
        }),
        eu = (e = !0) => ({
          ...q,
          handler: Q(
            e ? z : H,
            eo((e, t) => (t.isActive ? t : $.handler(e, t)))
          ),
        }),
        ef = {
          ...J,
          handler:
            ((a = (e, t) => {
              let { elementVisible: n } = t,
                { event: a, store: i } = e,
                { ixData: o } = i.getState(),
                { events: r } = o;
              return !r[a.action.config.autoStopEventId] && t.triggered
                ? t
                : (a.eventTypeId === L) === n
                ? (W(e), { ...t, triggered: !0 })
                : t;
            }),
            (e, t) => {
              let n = { ...t, elementVisible: ei(e) };
              return (
                ((t
                  ? n.elementVisible !== t.elementVisible
                  : n.elementVisible) &&
                  a(e, n)) ||
                n
              );
            }),
        },
        ep = {
          [m]: es(),
          [O]: eu(),
          [b]: es(),
          [I]: eu(),
          [h]: es(!1),
          [R]: eu(!1),
          [v]: es(),
          [_]: eu(),
          [P]: { types: "ecommerce-cart-open", handler: Q(z, W) },
          [x]: { types: "ecommerce-cart-close", handler: Q(z, W) },
          [f]: {
            types: "click",
            handler: Q(
              z,
              el((e, { clickCount: t }) => {
                j(e) ? 1 === t && W(e) : W(e);
              })
            ),
          },
          [p]: {
            types: "click",
            handler: Q(
              z,
              el((e, { clickCount: t }) => {
                2 === t && W(e);
              })
            ),
          },
          [g]: { ...$, types: "mousedown" },
          [E]: { ...$, types: "mouseup" },
          [y]: {
            types: Z,
            handler: Q(
              z,
              er((e, t) => {
                t.elementHovered && W(e);
              })
            ),
          },
          [T]: {
            types: Z,
            handler: Q(
              z,
              er((e, t) => {
                t.elementHovered || W(e);
              })
            ),
          },
          [N]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: n,
                nativeEvent: a,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: r,
                  selectedAxis: d,
                  continuousParameterGroupId: s,
                  reverse: u,
                  restingState: f = 0,
                } = n,
                {
                  clientX: p = o.clientX,
                  clientY: g = o.clientY,
                  pageX: E = o.pageX,
                  pageY: y = o.pageY,
                } = a,
                T = "X_AXIS" === d,
                I = "mouseout" === a.type,
                b = f / 100,
                m = s,
                O = !1;
              switch (r) {
                case c.EventBasedOn.VIEWPORT:
                  b = T
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(g, window.innerHeight) / window.innerHeight;
                  break;
                case c.EventBasedOn.PAGE: {
                  let {
                    scrollLeft: e,
                    scrollTop: t,
                    scrollWidth: n,
                    scrollHeight: a,
                  } = et();
                  b = T ? Math.min(e + E, n) / n : Math.min(t + y, a) / a;
                  break;
                }
                case c.EventBasedOn.ELEMENT:
                default: {
                  m = k(i, s);
                  let e = 0 === a.type.indexOf("mouse");
                  if (e && !0 !== z({ element: t, nativeEvent: a })) break;
                  let n = t.getBoundingClientRect(),
                    { left: o, top: r, width: c, height: d } = n;
                  if (!e && !ed({ left: p, top: g }, n)) break;
                  (O = !0), (b = T ? (p - o) / c : (g - r) / d);
                }
              }
              return (
                I && (b > 0.95 || b < 0.05) && (b = Math.round(b)),
                (r !== c.EventBasedOn.ELEMENT || O || O !== o.elementHovered) &&
                  ((b = u ? 1 - b : b),
                  e.dispatch((0, l.parameterChanged)(m, b))),
                {
                  elementHovered: O,
                  clientX: p,
                  clientY: g,
                  pageX: E,
                  pageY: y,
                }
              );
            },
          },
          [F]: {
            types: K,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: a } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: r } = et(),
                c = i / (o - r);
              (c = a ? 1 - c : c), e.dispatch((0, l.parameterChanged)(n, c));
            },
          },
          [w]: {
            types: K,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: a },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: r,
                  scrollWidth: d,
                  scrollHeight: s,
                  clientHeight: u,
                } = et(),
                {
                  basedOn: f,
                  selectedAxis: p,
                  continuousParameterGroupId: g,
                  startsEntering: E,
                  startsExiting: y,
                  addEndOffset: T,
                  addStartOffset: I,
                  addOffsetValue: b = 0,
                  endOffsetValue: m = 0,
                } = n;
              if (f === c.EventBasedOn.VIEWPORT) {
                let e = "X_AXIS" === p ? o / d : r / s;
                return (
                  e !== i.scrollPercent &&
                    t.dispatch((0, l.parameterChanged)(g, e)),
                  { scrollPercent: e }
                );
              }
              {
                let n = k(a, g),
                  o = e.getBoundingClientRect(),
                  r = (I ? b : 0) / 100,
                  c = (T ? m : 0) / 100;
                (r = E ? r : 1 - r), (c = y ? c : 1 - c);
                let d = o.top + Math.min(o.height * r, u),
                  f = Math.min(u + (o.top + o.height * c - d), s),
                  p = Math.min(Math.max(0, u - d), f) / f;
                return (
                  p !== i.scrollPercent &&
                    t.dispatch((0, l.parameterChanged)(n, p)),
                  { scrollPercent: p }
                );
              }
            },
          },
          [L]: ef,
          [S]: ef,
          [A]: {
            ...J,
            handler: ec((e, t) => {
              t.scrollingDown && W(e);
            }),
          },
          [C]: {
            ...J,
            handler: ec((e, t) => {
              t.scrollingDown || W(e);
            }),
          },
          [M]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Q(H, (e, t) => {
              let n = { finished: "complete" === document.readyState };
              return n.finished && !(t && t.finshed) && W(e), n;
            }),
          },
          [U]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Q(H, (e, t) => (t || W(e), { started: !0 })),
          },
        };
    },
    4609: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixData", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let { IX2_RAW_DATA_IMPORTED: a } = n(7087).IX2EngineActionTypes,
        i = (e = Object.freeze({}), t) =>
          t.type === a ? t.payload.ixData || Object.freeze({}) : e;
    },
    7718: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixInstances", {
          enumerable: !0,
          get: function () {
            return O;
          },
        });
      let a = n(7087),
        i = n(9468),
        o = n(1185),
        {
          IX2_RAW_DATA_IMPORTED: r,
          IX2_SESSION_STOPPED: c,
          IX2_INSTANCE_ADDED: d,
          IX2_INSTANCE_STARTED: l,
          IX2_INSTANCE_REMOVED: s,
          IX2_ANIMATION_FRAME_CHANGED: u,
        } = a.IX2EngineActionTypes,
        {
          optimizeFloat: f,
          applyEasing: p,
          createBezierEasing: g,
        } = i.IX2EasingUtils,
        { RENDER_GENERAL: E } = a.IX2EngineConstants,
        {
          getItemConfigByKey: y,
          getRenderType: T,
          getStyleProp: I,
        } = i.IX2VanillaUtils,
        b = (e, t) => {
          let n,
            a,
            i,
            r,
            {
              position: c,
              parameterId: d,
              actionGroups: l,
              destinationKeys: s,
              smoothing: u,
              restingValue: g,
              actionTypeId: E,
              customEasingFn: T,
              skipMotion: I,
              skipToValue: b,
            } = e,
            { parameters: m } = t.payload,
            O = Math.max(1 - u, 0.01),
            v = m[d];
          null == v && ((O = 1), (v = g));
          let _ = f((Math.max(v, 0) || 0) - c),
            R = I ? b : f(c + _ * O),
            h = 100 * R;
          if (R === c && e.current) return e;
          for (let e = 0, { length: t } = l; e < t; e++) {
            let { keyframe: t, actionItems: o } = l[e];
            if ((0 === e && (n = o[0]), h >= t)) {
              n = o[0];
              let c = l[e + 1],
                d = c && h !== t;
              (a = d ? c.actionItems[0] : null),
                d && ((i = t / 100), (r = (c.keyframe - t) / 100));
            }
          }
          let N = {};
          if (n && !a)
            for (let e = 0, { length: t } = s; e < t; e++) {
              let t = s[e];
              N[t] = y(E, t, n.config);
            }
          else if (n && a && void 0 !== i && void 0 !== r) {
            let e = (R - i) / r,
              t = p(n.config.easing, e, T);
            for (let e = 0, { length: i } = s; e < i; e++) {
              let i = s[e],
                o = y(E, i, n.config),
                r = (y(E, i, a.config) - o) * t + o;
              N[i] = r;
            }
          }
          return (0, o.merge)(e, { position: R, current: N });
        },
        m = (e, t) => {
          let {
              active: n,
              origin: a,
              start: i,
              immediate: r,
              renderType: c,
              verbose: d,
              actionItem: l,
              destination: s,
              destinationKeys: u,
              pluginDuration: g,
              instanceDelay: y,
              customEasingFn: T,
              skipMotion: I,
            } = e,
            b = l.config.easing,
            { duration: m, delay: O } = l.config;
          null != g && (m = g),
            (O = null != y ? y : O),
            c === E ? (m = 0) : (r || I) && (m = O = 0);
          let { now: v } = t.payload;
          if (n && a) {
            let t = v - (i + O);
            if (d) {
              let t = m + O,
                n = f(Math.min(Math.max(0, (v - i) / t), 1));
              e = (0, o.set)(e, "verboseTimeElapsed", t * n);
            }
            if (t < 0) return e;
            let n = f(Math.min(Math.max(0, t / m), 1)),
              r = p(b, n, T),
              c = {},
              l = null;
            return (
              u.length &&
                (l = u.reduce((e, t) => {
                  let n = s[t],
                    i = parseFloat(a[t]) || 0,
                    o = parseFloat(n) - i;
                  return (e[t] = o * r + i), e;
                }, {})),
              (c.current = l),
              (c.position = n),
              1 === n && ((c.active = !1), (c.complete = !0)),
              (0, o.merge)(e, c)
            );
          }
          return e;
        },
        O = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case r:
              return t.payload.ixInstances || Object.freeze({});
            case c:
              return Object.freeze({});
            case d: {
              let {
                  instanceId: n,
                  elementId: a,
                  actionItem: i,
                  eventId: r,
                  eventTarget: c,
                  eventStateKey: d,
                  actionListId: l,
                  groupIndex: s,
                  isCarrier: u,
                  origin: f,
                  destination: p,
                  immediate: E,
                  verbose: y,
                  continuous: b,
                  parameterId: m,
                  actionGroups: O,
                  smoothing: v,
                  restingValue: _,
                  pluginInstance: R,
                  pluginDuration: h,
                  instanceDelay: N,
                  skipMotion: A,
                  skipToValue: L,
                } = t.payload,
                { actionTypeId: S } = i,
                C = T(S),
                w = I(C, S),
                M = Object.keys(p).filter(
                  (e) => null != p[e] && "string" != typeof p[e]
                ),
                { easing: x } = i.config;
              return (0, o.set)(e, n, {
                id: n,
                elementId: a,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: p,
                destinationKeys: M,
                immediate: E,
                verbose: y,
                current: null,
                actionItem: i,
                actionTypeId: S,
                eventId: r,
                eventTarget: c,
                eventStateKey: d,
                actionListId: l,
                groupIndex: s,
                renderType: C,
                isCarrier: u,
                styleProp: w,
                continuous: b,
                parameterId: m,
                actionGroups: O,
                smoothing: v,
                restingValue: _,
                pluginInstance: R,
                pluginDuration: h,
                instanceDelay: N,
                skipMotion: A,
                skipToValue: L,
                customEasingFn:
                  Array.isArray(x) && 4 === x.length ? g(x) : void 0,
              });
            }
            case l: {
              let { instanceId: n, time: a } = t.payload;
              return (0, o.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: a,
              });
            }
            case s: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let a = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let t = 0; t < o; t++) {
                let o = i[t];
                o !== n && (a[o] = e[o]);
              }
              return a;
            }
            case u: {
              let n = e,
                a = Object.keys(e),
                { length: i } = a;
              for (let r = 0; r < i; r++) {
                let i = a[r],
                  c = e[i],
                  d = c.continuous ? b : m;
                n = (0, o.set)(n, i, d(c, t));
              }
              return n;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixParameters", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let {
          IX2_RAW_DATA_IMPORTED: a,
          IX2_SESSION_STOPPED: i,
          IX2_PARAMETER_CHANGED: o,
        } = n(7087).IX2EngineActionTypes,
        r = (e = {}, t) => {
          switch (t.type) {
            case a:
              return t.payload.ixParameters || {};
            case i:
              return {};
            case o: {
              let { key: n, value: a } = t.payload;
              return (e[n] = a), e;
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let a = n(9516),
        i = n(4609),
        o = n(628),
        r = n(5862),
        c = n(9468),
        d = n(7718),
        l = n(1540),
        { ixElements: s } = c.IX2ElementsReducer,
        u = (0, a.combineReducers)({
          ixData: i.ixData,
          ixRequest: o.ixRequest,
          ixSession: r.ixSession,
          ixElements: s,
          ixInstances: d.ixInstances,
          ixParameters: l.ixParameters,
        });
    },
    628: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixRequest", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let a = n(7087),
        i = n(1185),
        {
          IX2_PREVIEW_REQUESTED: o,
          IX2_PLAYBACK_REQUESTED: r,
          IX2_STOP_REQUESTED: c,
          IX2_CLEAR_REQUESTED: d,
        } = a.IX2EngineActionTypes,
        l = { preview: {}, playback: {}, stop: {}, clear: {} },
        s = Object.create(null, {
          [o]: { value: "preview" },
          [r]: { value: "playback" },
          [c]: { value: "stop" },
          [d]: { value: "clear" },
        }),
        u = (e = l, t) => {
          if (t.type in s) {
            let n = [s[t.type]];
            return (0, i.setIn)(e, [n], { ...t.payload });
          }
          return e;
        };
    },
    5862: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixSession", {
          enumerable: !0,
          get: function () {
            return y;
          },
        });
      let a = n(7087),
        i = n(1185),
        {
          IX2_SESSION_INITIALIZED: o,
          IX2_SESSION_STARTED: r,
          IX2_TEST_FRAME_RENDERED: c,
          IX2_SESSION_STOPPED: d,
          IX2_EVENT_LISTENER_ADDED: l,
          IX2_EVENT_STATE_CHANGED: s,
          IX2_ANIMATION_FRAME_CHANGED: u,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
          IX2_VIEWPORT_WIDTH_CHANGED: p,
          IX2_MEDIA_QUERIES_DEFINED: g,
        } = a.IX2EngineActionTypes,
        E = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        y = (e = E, t) => {
          switch (t.type) {
            case o: {
              let { hasBoundaryNodes: n, reducedMotion: a } = t.payload;
              return (0, i.merge)(e, { hasBoundaryNodes: n, reducedMotion: a });
            }
            case r:
              return (0, i.set)(e, "active", !0);
            case c: {
              let {
                payload: { step: n = 20 },
              } = t;
              return (0, i.set)(e, "tick", e.tick + n);
            }
            case d:
              return E;
            case u: {
              let {
                payload: { now: n },
              } = t;
              return (0, i.set)(e, "tick", n);
            }
            case l: {
              let n = (0, i.addLast)(e.eventListeners, t.payload);
              return (0, i.set)(e, "eventListeners", n);
            }
            case s: {
              let { stateKey: n, newState: a } = t.payload;
              return (0, i.setIn)(e, ["eventState", n], a);
            }
            case f: {
              let { actionListId: n, isPlaying: a } = t.payload;
              return (0, i.setIn)(e, ["playbackState", n], a);
            }
            case p: {
              let { width: n, mediaQueries: a } = t.payload,
                o = a.length,
                r = null;
              for (let e = 0; e < o; e++) {
                let { key: t, min: i, max: o } = a[e];
                if (n >= i && n <= o) {
                  r = t;
                  break;
                }
              }
              return (0, i.merge)(e, { viewportWidth: n, mediaQueryKey: r });
            }
            case g:
              return (0, i.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return s;
        },
        createPluginInstance: function () {
          return d;
        },
        getPluginConfig: function () {
          return i;
        },
        getPluginDestination: function () {
          return c;
        },
        getPluginDuration: function () {
          return o;
        },
        getPluginOrigin: function () {
          return r;
        },
        renderPlugin: function () {
          return l;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = (e) => e.value,
        o = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let n = parseFloat(e.getAttribute("data-duration"));
          return n > 0
            ? 1e3 * n
            : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
        },
        r = (e) => e || { value: 0 },
        c = (e) => ({ value: e.value }),
        d = (e) => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let n = t.createInstance(e);
          return n.stop(), n.setSubframe(!0), n;
        },
        l = (e, t, n) => {
          if (!e) return;
          let a = t[n.actionTypeId].value / 100;
          e.goToFrame(e.frames * a);
        },
        s = (e) => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return g;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return d;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return l;
        },
        getPluginOrigin: function () {
          return s;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "--wf-rive-fit",
        o = "--wf-rive-alignment",
        r = (e) => document.querySelector(`[data-w-id="${e}"]`),
        c = () => window.Webflow.require("rive"),
        d = (e, t) => e.value.inputs[t],
        l = () => null,
        s = (e, t) => {
          if (e) return e;
          let n = {},
            { inputs: a = {} } = t.config.value;
          for (let e in a) null == a[e] && (n[e] = 0);
          return n;
        },
        u = (e) => e.value.inputs ?? {},
        f = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let n = t?.config?.target?.pluginElement;
          return n ? r(n) : null;
        },
        p = (e, { PLUGIN_RIVE: t }, n) => {
          let a = c();
          if (!a) return;
          let r = a.getInstance(e),
            d = a.rive.StateMachineInputType,
            { name: l, inputs: s = {} } = n.config.value || {};
          function u(e) {
            if (e.loaded) n();
            else {
              let t = () => {
                n(), e?.off("load", t);
              };
              e?.on("load", t);
            }
            function n() {
              let n = e.stateMachineInputs(l);
              if (null != n) {
                if ((e.isPlaying || e.play(l, !1), i in s || o in s)) {
                  let t = e.layout,
                    n = s[i] ?? t.fit,
                    a = s[o] ?? t.alignment;
                  (n !== t.fit || a !== t.alignment) &&
                    (e.layout = t.copyWith({ fit: n, alignment: a }));
                }
                for (let e in s) {
                  if (e === i || e === o) continue;
                  let a = n.find((t) => t.name === e);
                  if (null != a)
                    switch (a.type) {
                      case d.Boolean:
                        null != s[e] && (a.value = !!s[e]);
                        break;
                      case d.Number: {
                        let n = t[e];
                        null != n && (a.value = n);
                        break;
                      }
                      case d.Trigger:
                        s[e] && a.fire();
                    }
                }
              }
            }
          }
          r?.rive ? u(r.rive) : a.setLoadHandler(e, u);
        },
        g = (e, t) => null;
    },
    2866: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return g;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return c;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return d;
        },
        getPluginOrigin: function () {
          return s;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = (e) => document.querySelector(`[data-w-id="${e}"]`),
        o = () => window.Webflow.require("spline"),
        r = (e, t) => e.filter((e) => !t.includes(e)),
        c = (e, t) => e.value[t],
        d = () => null,
        l = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        s = (e, t) => {
          let n = Object.keys(t.config.value);
          if (e) {
            let t = r(n, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = l[t]), e), e) : e;
          }
          return n.reduce((e, t) => ((e[t] = l[t]), e), {});
        },
        u = (e) => e.value,
        f = (e, t) => {
          let n = t?.config?.target?.pluginElement;
          return n ? i(n) : null;
        },
        p = (e, t, n) => {
          let a = o();
          if (!a) return;
          let i = a.getInstance(e),
            r = n.config.target.objectId,
            c = (e) => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let n = r && e.findObjectById(r);
              if (!n) return;
              let { PLUGIN_SPLINE: a } = t;
              null != a.positionX && (n.position.x = a.positionX),
                null != a.positionY && (n.position.y = a.positionY),
                null != a.positionZ && (n.position.z = a.positionZ),
                null != a.rotationX && (n.rotation.x = a.rotationX),
                null != a.rotationY && (n.rotation.y = a.rotationY),
                null != a.rotationZ && (n.rotation.z = a.rotationZ),
                null != a.scaleX && (n.scale.x = a.scaleX),
                null != a.scaleY && (n.scale.y = a.scaleY),
                null != a.scaleZ && (n.scale.z = a.scaleZ);
            };
          i ? c(i.spline) : a.setLoadHandler(e, c);
        },
        g = () => null;
    },
    1407: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return s;
        },
        getPluginConfig: function () {
          return r;
        },
        getPluginDestination: function () {
          return l;
        },
        getPluginDuration: function () {
          return c;
        },
        getPluginOrigin: function () {
          return d;
        },
        renderPlugin: function () {
          return f;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(380),
        r = (e, t) => e.value[t],
        c = () => null,
        d = (e, t) => {
          if (e) return e;
          let n = t.config.value,
            a = t.config.target.objectId,
            i = getComputedStyle(document.documentElement).getPropertyValue(a);
          return null != n.size
            ? { size: parseInt(i, 10) }
            : "%" === n.unit || "-" === n.unit
            ? { size: parseFloat(i) }
            : null != n.red && null != n.green && null != n.blue
            ? (0, o.normalizeColor)(i)
            : void 0;
        },
        l = (e) => e.value,
        s = () => null,
        u = {
          color: {
            match: ({ red: e, green: t, blue: n, alpha: a }) =>
              [e, t, n, a].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: n, alpha: a }) =>
              `rgba(${e}, ${t}, ${n}, ${a})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => ("-" === t ? e : `${e}${t}`),
          },
        },
        f = (e, t, n) => {
          let {
              target: { objectId: a },
              value: { unit: i },
            } = n.config,
            o = t.PLUGIN_VARIABLE,
            r = Object.values(u).find((e) => e.match(o, i));
          r && document.documentElement.style.setProperty(a, r.getValue(o, i));
        },
        p = (e, t) => {
          let n = t.config.target.objectId;
          document.documentElement.style.removeProperty(n);
        };
    },
    3690: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pluginMethodMap", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let a = n(7087),
        i = l(n(7377)),
        o = l(n(2866)),
        r = l(n(2570)),
        c = l(n(1407));
      function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (d = function (e) {
          return e ? n : t;
        })(e);
      }
      function l(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = d(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            r && (r.get || r.set)
              ? Object.defineProperty(a, o, r)
              : (a[o] = e[o]);
          }
        return (a.default = e), n && n.set(e, a), a;
      }
      let s = new Map([
        [a.ActionTypeConsts.PLUGIN_LOTTIE, { ...i }],
        [a.ActionTypeConsts.PLUGIN_SPLINE, { ...o }],
        [a.ActionTypeConsts.PLUGIN_RIVE, { ...r }],
        [a.ActionTypeConsts.PLUGIN_VARIABLE, { ...c }],
      ]);
    },
    8023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return m;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return g;
        },
        IX2_CLEAR_REQUESTED: function () {
          return u;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return b;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return f;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return p;
        },
        IX2_INSTANCE_ADDED: function () {
          return y;
        },
        IX2_INSTANCE_REMOVED: function () {
          return I;
        },
        IX2_INSTANCE_STARTED: function () {
          return T;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return v;
        },
        IX2_PARAMETER_CHANGED: function () {
          return E;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return l;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return d;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return i;
        },
        IX2_SESSION_INITIALIZED: function () {
          return o;
        },
        IX2_SESSION_STARTED: function () {
          return r;
        },
        IX2_SESSION_STOPPED: function () {
          return c;
        },
        IX2_STOP_REQUESTED: function () {
          return s;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return _;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return O;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "IX2_RAW_DATA_IMPORTED",
        o = "IX2_SESSION_INITIALIZED",
        r = "IX2_SESSION_STARTED",
        c = "IX2_SESSION_STOPPED",
        d = "IX2_PREVIEW_REQUESTED",
        l = "IX2_PLAYBACK_REQUESTED",
        s = "IX2_STOP_REQUESTED",
        u = "IX2_CLEAR_REQUESTED",
        f = "IX2_EVENT_LISTENER_ADDED",
        p = "IX2_EVENT_STATE_CHANGED",
        g = "IX2_ANIMATION_FRAME_CHANGED",
        E = "IX2_PARAMETER_CHANGED",
        y = "IX2_INSTANCE_ADDED",
        T = "IX2_INSTANCE_STARTED",
        I = "IX2_INSTANCE_REMOVED",
        b = "IX2_ELEMENT_STATE_CHANGED",
        m = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        O = "IX2_VIEWPORT_WIDTH_CHANGED",
        v = "IX2_MEDIA_QUERIES_DEFINED",
        _ = "IX2_TEST_FRAME_RENDERED";
    },
    2686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ABSTRACT_NODE: function () {
          return et;
        },
        AUTO: function () {
          return z;
        },
        BACKGROUND: function () {
          return G;
        },
        BACKGROUND_COLOR: function () {
          return V;
        },
        BAR_DELIMITER: function () {
          return W;
        },
        BORDER_COLOR: function () {
          return D;
        },
        BOUNDARY_SELECTOR: function () {
          return d;
        },
        CHILDREN: function () {
          return Q;
        },
        COLON_DELIMITER: function () {
          return j;
        },
        COLOR: function () {
          return k;
        },
        COMMA_DELIMITER: function () {
          return Y;
        },
        CONFIG_UNIT: function () {
          return y;
        },
        CONFIG_VALUE: function () {
          return f;
        },
        CONFIG_X_UNIT: function () {
          return p;
        },
        CONFIG_X_VALUE: function () {
          return l;
        },
        CONFIG_Y_UNIT: function () {
          return g;
        },
        CONFIG_Y_VALUE: function () {
          return s;
        },
        CONFIG_Z_UNIT: function () {
          return E;
        },
        CONFIG_Z_VALUE: function () {
          return u;
        },
        DISPLAY: function () {
          return X;
        },
        FILTER: function () {
          return x;
        },
        FLEX: function () {
          return H;
        },
        FONT_VARIATION_SETTINGS: function () {
          return P;
        },
        HEIGHT: function () {
          return F;
        },
        HTML_ELEMENT: function () {
          return J;
        },
        IMMEDIATE_CHILDREN: function () {
          return $;
        },
        IX2_ID_DELIMITER: function () {
          return i;
        },
        OPACITY: function () {
          return M;
        },
        PARENT: function () {
          return K;
        },
        PLAIN_OBJECT: function () {
          return ee;
        },
        PRESERVE_3D: function () {
          return Z;
        },
        RENDER_GENERAL: function () {
          return ea;
        },
        RENDER_PLUGIN: function () {
          return eo;
        },
        RENDER_STYLE: function () {
          return ei;
        },
        RENDER_TRANSFORM: function () {
          return en;
        },
        ROTATE_X: function () {
          return N;
        },
        ROTATE_Y: function () {
          return A;
        },
        ROTATE_Z: function () {
          return L;
        },
        SCALE_3D: function () {
          return h;
        },
        SCALE_X: function () {
          return v;
        },
        SCALE_Y: function () {
          return _;
        },
        SCALE_Z: function () {
          return R;
        },
        SIBLINGS: function () {
          return q;
        },
        SKEW: function () {
          return S;
        },
        SKEW_X: function () {
          return C;
        },
        SKEW_Y: function () {
          return w;
        },
        TRANSFORM: function () {
          return T;
        },
        TRANSLATE_3D: function () {
          return O;
        },
        TRANSLATE_X: function () {
          return I;
        },
        TRANSLATE_Y: function () {
          return b;
        },
        TRANSLATE_Z: function () {
          return m;
        },
        WF_PAGE: function () {
          return o;
        },
        WIDTH: function () {
          return U;
        },
        WILL_CHANGE: function () {
          return B;
        },
        W_MOD_IX: function () {
          return c;
        },
        W_MOD_JS: function () {
          return r;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "|",
        o = "data-wf-page",
        r = "w-mod-js",
        c = "w-mod-ix",
        d = ".w-dyn-item",
        l = "xValue",
        s = "yValue",
        u = "zValue",
        f = "value",
        p = "xUnit",
        g = "yUnit",
        E = "zUnit",
        y = "unit",
        T = "transform",
        I = "translateX",
        b = "translateY",
        m = "translateZ",
        O = "translate3d",
        v = "scaleX",
        _ = "scaleY",
        R = "scaleZ",
        h = "scale3d",
        N = "rotateX",
        A = "rotateY",
        L = "rotateZ",
        S = "skew",
        C = "skewX",
        w = "skewY",
        M = "opacity",
        x = "filter",
        P = "font-variation-settings",
        U = "width",
        F = "height",
        V = "backgroundColor",
        G = "background",
        D = "borderColor",
        k = "color",
        X = "display",
        H = "flex",
        B = "willChange",
        z = "AUTO",
        Y = ",",
        j = ":",
        W = "|",
        Q = "CHILDREN",
        $ = "IMMEDIATE_CHILDREN",
        q = "SIBLINGS",
        K = "PARENT",
        Z = "preserve-3d",
        J = "HTML_ELEMENT",
        ee = "PLAIN_OBJECT",
        et = "ABSTRACT_NODE",
        en = "RENDER_TRANSFORM",
        ea = "RENDER_GENERAL",
        ei = "RENDER_STYLE",
        eo = "RENDER_PLUGIN";
    },
    262: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ActionAppliesTo: function () {
          return o;
        },
        ActionTypeConsts: function () {
          return i;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        },
        o = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    7087: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        ActionTypeConsts: function () {
          return r.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return c;
        },
        IX2EngineConstants: function () {
          return d;
        },
        QuickEffectIds: function () {
          return o.QuickEffectIds;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = l(n(1833), t),
        r = l(n(262), t);
      l(n(8704), t), l(n(3213), t);
      let c = u(n(8023)),
        d = u(n(2686));
      function l(e, t) {
        return (
          Object.keys(e).forEach(function (n) {
            "default" === n ||
              Object.prototype.hasOwnProperty.call(t, n) ||
              Object.defineProperty(t, n, {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              });
          }),
          e
        );
      }
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (s = function (e) {
          return e ? n : t;
        })(e);
      }
      function u(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = s(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            r && (r.get || r.set)
              ? Object.defineProperty(a, o, r)
              : (a[o] = e[o]);
          }
        return (a.default = e), n && n.set(e, a), a;
      }
    },
    3213: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ReducedMotionTypes", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let {
          TRANSFORM_MOVE: a,
          TRANSFORM_SCALE: i,
          TRANSFORM_ROTATE: o,
          TRANSFORM_SKEW: r,
          STYLE_SIZE: c,
          STYLE_FILTER: d,
          STYLE_FONT_VARIATION: l,
        } = n(262).ActionTypeConsts,
        s = { [a]: !0, [i]: !0, [o]: !0, [r]: !0, [c]: !0, [d]: !0, [l]: !0 };
    },
    1833: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        EventAppliesTo: function () {
          return o;
        },
        EventBasedOn: function () {
          return r;
        },
        EventContinuousMouseAxes: function () {
          return c;
        },
        EventLimitAffectedElements: function () {
          return d;
        },
        EventTypeConsts: function () {
          return i;
        },
        QuickEffectDirectionConsts: function () {
          return s;
        },
        QuickEffectIds: function () {
          return l;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL",
        },
        o = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
        r = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
        c = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
        d = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        l = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        s = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    8704: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "InteractionTypeConsts", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    },
    380: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeColor", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32",
      };
      function a(e) {
        let t,
          a,
          i,
          o = 1,
          r = e.replace(/\s/g, "").toLowerCase(),
          c = ("string" == typeof n[r] ? n[r].toLowerCase() : null) || r;
        if (c.startsWith("#")) {
          let e = c.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (a = parseInt(e[1] + e[1], 16)),
              (i = parseInt(e[2] + e[2], 16)),
              4 === e.length && (o = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (a = parseInt(e.substring(2, 4), 16)),
              (i = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (o = parseInt(e.substring(6, 8), 16) / 255));
        } else if (c.startsWith("rgba")) {
          let e = c.match(/rgba\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (a = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10)),
            (o = parseFloat(e[3]));
        } else if (c.startsWith("rgb")) {
          let e = c.match(/rgb\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (a = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10));
        } else if (c.startsWith("hsla")) {
          let e,
            n,
            r,
            d = c.match(/hsla\(([^)]+)\)/)[1].split(","),
            l = parseFloat(d[0]),
            s = parseFloat(d[1].replace("%", "")) / 100,
            u = parseFloat(d[2].replace("%", "")) / 100;
          o = parseFloat(d[3]);
          let f = (1 - Math.abs(2 * u - 1)) * s,
            p = f * (1 - Math.abs(((l / 60) % 2) - 1)),
            g = u - f / 2;
          l >= 0 && l < 60
            ? ((e = f), (n = p), (r = 0))
            : l >= 60 && l < 120
            ? ((e = p), (n = f), (r = 0))
            : l >= 120 && l < 180
            ? ((e = 0), (n = f), (r = p))
            : l >= 180 && l < 240
            ? ((e = 0), (n = p), (r = f))
            : l >= 240 && l < 300
            ? ((e = p), (n = 0), (r = f))
            : ((e = f), (n = 0), (r = p)),
            (t = Math.round((e + g) * 255)),
            (a = Math.round((n + g) * 255)),
            (i = Math.round((r + g) * 255));
        } else if (c.startsWith("hsl")) {
          let e,
            n,
            o,
            r = c.match(/hsl\(([^)]+)\)/)[1].split(","),
            d = parseFloat(r[0]),
            l = parseFloat(r[1].replace("%", "")) / 100,
            s = parseFloat(r[2].replace("%", "")) / 100,
            u = (1 - Math.abs(2 * s - 1)) * l,
            f = u * (1 - Math.abs(((d / 60) % 2) - 1)),
            p = s - u / 2;
          d >= 0 && d < 60
            ? ((e = u), (n = f), (o = 0))
            : d >= 60 && d < 120
            ? ((e = f), (n = u), (o = 0))
            : d >= 120 && d < 180
            ? ((e = 0), (n = u), (o = f))
            : d >= 180 && d < 240
            ? ((e = 0), (n = f), (o = u))
            : d >= 240 && d < 300
            ? ((e = f), (n = 0), (o = u))
            : ((e = u), (n = 0), (o = f)),
            (t = Math.round((e + p) * 255)),
            (a = Math.round((n + p) * 255)),
            (i = Math.round((o + p) * 255));
        }
        if (Number.isNaN(t) || Number.isNaN(a) || Number.isNaN(i))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
          );
        return { red: t, green: a, blue: i, alpha: o };
      }
    },
    9468: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        IX2BrowserSupport: function () {
          return o;
        },
        IX2EasingUtils: function () {
          return c;
        },
        IX2Easings: function () {
          return r;
        },
        IX2ElementsReducer: function () {
          return d;
        },
        IX2VanillaPlugins: function () {
          return l;
        },
        IX2VanillaUtils: function () {
          return s;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = f(n(2662)),
        r = f(n(8686)),
        c = f(n(3767)),
        d = f(n(5861)),
        l = f(n(1799)),
        s = f(n(4124));
      function u(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (u = function (e) {
          return e ? n : t;
        })(e);
      }
      function f(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = u(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            r && (r.get || r.set)
              ? Object.defineProperty(a, o, r)
              : (a[o] = e[o]);
          }
        return (a.default = e), n && n.set(e, a), a;
      }
    },
    2662: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          ELEMENT_MATCHES: function () {
            return l;
          },
          FLEX_PREFIXED: function () {
            return s;
          },
          IS_BROWSER_ENV: function () {
            return c;
          },
          TRANSFORM_PREFIXED: function () {
            return u;
          },
          TRANSFORM_STYLE_PREFIXED: function () {
            return p;
          },
          withBrowser: function () {
            return d;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = (a = n(9777)) && a.__esModule ? a : { default: a },
        c = "undefined" != typeof window,
        d = (e, t) => (c ? e() : t),
        l = d(() =>
          (0, r.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        ),
        s = d(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ];
          try {
            let { length: n } = t;
            for (let a = 0; a < n; a++) {
              let n = t[a];
              if (((e.style.display = n), e.style.display === n)) return n;
            }
            return "";
          } catch (e) {
            return "";
          }
        }, "flex"),
        u = d(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              { length: n } = t;
            for (let a = 0; a < n; a++) {
              let n = t[a] + "Transform";
              if (void 0 !== e.style[n]) return n;
            }
          }
          return "transform";
        }, "transform"),
        f = u.split("transform")[0],
        p = f ? f + "TransformStyle" : "transformStyle";
    },
    3767: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          applyEasing: function () {
            return u;
          },
          createBezierEasing: function () {
            return s;
          },
          optimizeFloat: function () {
            return l;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = d(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, o, r)
                : (a[o] = e[o]);
            }
          return (a.default = e), n && n.set(e, a), a;
        })(n(8686)),
        c = (a = n(1361)) && a.__esModule ? a : { default: a };
      function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (d = function (e) {
          return e ? n : t;
        })(e);
      }
      function l(e, t = 5, n = 10) {
        let a = Math.pow(n, t),
          i = Number(Math.round(e * a) / a);
        return Math.abs(i) > 1e-4 ? i : 0;
      }
      function s(e) {
        return (0, c.default)(...e);
      }
      function u(e, t, n) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : n
          ? l(t > 0 ? n(t) : t)
          : l(t > 0 && e && r[e] ? r[e](t) : t);
      }
    },
    8686: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          bounce: function () {
            return H;
          },
          bouncePast: function () {
            return B;
          },
          ease: function () {
            return c;
          },
          easeIn: function () {
            return d;
          },
          easeInOut: function () {
            return s;
          },
          easeOut: function () {
            return l;
          },
          inBack: function () {
            return x;
          },
          inCirc: function () {
            return S;
          },
          inCubic: function () {
            return g;
          },
          inElastic: function () {
            return F;
          },
          inExpo: function () {
            return N;
          },
          inOutBack: function () {
            return U;
          },
          inOutCirc: function () {
            return w;
          },
          inOutCubic: function () {
            return y;
          },
          inOutElastic: function () {
            return G;
          },
          inOutExpo: function () {
            return L;
          },
          inOutQuad: function () {
            return p;
          },
          inOutQuart: function () {
            return b;
          },
          inOutQuint: function () {
            return v;
          },
          inOutSine: function () {
            return h;
          },
          inQuad: function () {
            return u;
          },
          inQuart: function () {
            return T;
          },
          inQuint: function () {
            return m;
          },
          inSine: function () {
            return _;
          },
          outBack: function () {
            return P;
          },
          outBounce: function () {
            return M;
          },
          outCirc: function () {
            return C;
          },
          outCubic: function () {
            return E;
          },
          outElastic: function () {
            return V;
          },
          outExpo: function () {
            return A;
          },
          outQuad: function () {
            return f;
          },
          outQuart: function () {
            return I;
          },
          outQuint: function () {
            return O;
          },
          outSine: function () {
            return R;
          },
          swingFrom: function () {
            return k;
          },
          swingFromTo: function () {
            return D;
          },
          swingTo: function () {
            return X;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = (a = n(1361)) && a.__esModule ? a : { default: a },
        c = (0, r.default)(0.25, 0.1, 0.25, 1),
        d = (0, r.default)(0.42, 0, 1, 1),
        l = (0, r.default)(0, 0, 0.58, 1),
        s = (0, r.default)(0.42, 0, 0.58, 1);
      function u(e) {
        return Math.pow(e, 2);
      }
      function f(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }
      function p(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }
      function g(e) {
        return Math.pow(e, 3);
      }
      function E(e) {
        return Math.pow(e - 1, 3) + 1;
      }
      function y(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function T(e) {
        return Math.pow(e, 4);
      }
      function I(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }
      function b(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function m(e) {
        return Math.pow(e, 5);
      }
      function O(e) {
        return Math.pow(e - 1, 5) + 1;
      }
      function v(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function _(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }
      function R(e) {
        return Math.sin((Math.PI / 2) * e);
      }
      function h(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function N(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function A(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function L(e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function S(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }
      function C(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function w(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function M(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function x(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function P(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function U(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function F(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            a < 1
              ? ((a = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
            -(
              a *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n)
            ));
      }
      function V(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            a < 1
              ? ((a = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
            a * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) +
              1);
      }
      function G(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
          ? 1
          : (n || (n = 0.3 * 1.5),
            a < 1
              ? ((a = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
            e < 1)
          ? -0.5 *
            (a *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n))
          : a *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n) *
              0.5 +
            1;
      }
      function D(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function k(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function X(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function H(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function B(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
          : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return p;
        },
        getPluginConfig: function () {
          return l;
        },
        getPluginDestination: function () {
          return f;
        },
        getPluginDuration: function () {
          return u;
        },
        getPluginOrigin: function () {
          return s;
        },
        isPluginType: function () {
          return c;
        },
        renderPlugin: function () {
          return g;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(2662),
        r = n(3690);
      function c(e) {
        return r.pluginMethodMap.has(e);
      }
      let d = (e) => (t) => {
          if (!o.IS_BROWSER_ENV) return () => null;
          let n = r.pluginMethodMap.get(t);
          if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
          let a = n[e];
          if (!a) throw Error(`IX2 invalid plugin method: ${e}`);
          return a;
        },
        l = d("getPluginConfig"),
        s = d("getPluginOrigin"),
        u = d("getPluginDuration"),
        f = d("getPluginDestination"),
        p = d("createPluginInstance"),
        g = d("renderPlugin"),
        E = d("clearPlugin");
    },
    4124: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        cleanupHTMLElement: function () {
          return eY;
        },
        clearAllStyles: function () {
          return eH;
        },
        clearObjectCache: function () {
          return eu;
        },
        getActionListProgress: function () {
          return e$;
        },
        getAffectedElements: function () {
          return em;
        },
        getComputedStyle: function () {
          return eO;
        },
        getDestinationValues: function () {
          return eS;
        },
        getElementId: function () {
          return eE;
        },
        getInstanceId: function () {
          return ep;
        },
        getInstanceOrigin: function () {
          return eh;
        },
        getItemConfigByKey: function () {
          return eL;
        },
        getMaxDurationItemIndex: function () {
          return eQ;
        },
        getNamespacedParameterId: function () {
          return eZ;
        },
        getRenderType: function () {
          return eC;
        },
        getStyleProp: function () {
          return ew;
        },
        mediaQueriesEqual: function () {
          return e0;
        },
        observeStore: function () {
          return eI;
        },
        reduceListToGroup: function () {
          return eq;
        },
        reifyState: function () {
          return ey;
        },
        renderHTMLElement: function () {
          return eM;
        },
        shallowEqual: function () {
          return s.default;
        },
        shouldAllowMediaQuery: function () {
          return eJ;
        },
        shouldNamespaceEventParameter: function () {
          return eK;
        },
        stringifyTarget: function () {
          return e1;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = E(n(4075)),
        r = E(n(1455)),
        c = E(n(5720)),
        d = n(1185),
        l = n(7087),
        s = E(n(7164)),
        u = n(3767),
        f = n(380),
        p = n(1799),
        g = n(2662);
      function E(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          BACKGROUND: y,
          TRANSFORM: T,
          TRANSLATE_3D: I,
          SCALE_3D: b,
          ROTATE_X: m,
          ROTATE_Y: O,
          ROTATE_Z: v,
          SKEW: _,
          PRESERVE_3D: R,
          FLEX: h,
          OPACITY: N,
          FILTER: A,
          FONT_VARIATION_SETTINGS: L,
          WIDTH: S,
          HEIGHT: C,
          BACKGROUND_COLOR: w,
          BORDER_COLOR: M,
          COLOR: x,
          CHILDREN: P,
          IMMEDIATE_CHILDREN: U,
          SIBLINGS: F,
          PARENT: V,
          DISPLAY: G,
          WILL_CHANGE: D,
          AUTO: k,
          COMMA_DELIMITER: X,
          COLON_DELIMITER: H,
          BAR_DELIMITER: B,
          RENDER_TRANSFORM: z,
          RENDER_GENERAL: Y,
          RENDER_STYLE: j,
          RENDER_PLUGIN: W,
        } = l.IX2EngineConstants,
        {
          TRANSFORM_MOVE: Q,
          TRANSFORM_SCALE: $,
          TRANSFORM_ROTATE: q,
          TRANSFORM_SKEW: K,
          STYLE_OPACITY: Z,
          STYLE_FILTER: J,
          STYLE_FONT_VARIATION: ee,
          STYLE_SIZE: et,
          STYLE_BACKGROUND_COLOR: en,
          STYLE_BORDER: ea,
          STYLE_TEXT_COLOR: ei,
          GENERAL_DISPLAY: eo,
          OBJECT_VALUE: er,
        } = l.ActionTypeConsts,
        ec = (e) => e.trim(),
        ed = Object.freeze({ [en]: w, [ea]: M, [ei]: x }),
        el = Object.freeze({
          [g.TRANSFORM_PREFIXED]: T,
          [w]: y,
          [N]: N,
          [A]: A,
          [S]: S,
          [C]: C,
          [L]: L,
        }),
        es = new Map();
      function eu() {
        es.clear();
      }
      let ef = 1;
      function ep() {
        return "i" + ef++;
      }
      let eg = 1;
      function eE(e, t) {
        for (let n in e) {
          let a = e[n];
          if (a && a.ref === t) return a.id;
        }
        return "e" + eg++;
      }
      function ey({ events: e, actionLists: t, site: n } = {}) {
        let a = (0, r.default)(
            e,
            (e, t) => {
              let { eventTypeId: n } = t;
              return e[n] || (e[n] = {}), (e[n][t.id] = t), e;
            },
            {}
          ),
          i = n && n.mediaQueries,
          o = [];
        return (
          i
            ? (o = i.map((e) => e.key))
            : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: a,
              mediaQueries: i,
              mediaQueryKeys: o,
            },
          }
        );
      }
      let eT = (e, t) => e === t;
      function eI({ store: e, select: t, onChange: n, comparator: a = eT }) {
        let { getState: i, subscribe: o } = e,
          r = o(function () {
            let o = t(i());
            if (null == o) return void r();
            a(o, c) || n((c = o), e);
          }),
          c = t(i());
        return r;
      }
      function eb(e) {
        let t = typeof e;
        if ("string" === t) return { id: e };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: n,
            selector: a,
            selectorGuids: i,
            appliesTo: o,
            useEventTarget: r,
          } = e;
          return {
            id: t,
            objectId: n,
            selector: a,
            selectorGuids: i,
            appliesTo: o,
            useEventTarget: r,
          };
        }
        return {};
      }
      function em({
        config: e,
        event: t,
        eventTarget: n,
        elementRoot: a,
        elementApi: i,
      }) {
        let o, r, c;
        if (!i) throw Error("IX2 missing elementApi");
        let { targets: d } = e;
        if (Array.isArray(d) && d.length > 0)
          return d.reduce(
            (e, o) =>
              e.concat(
                em({
                  config: { target: o },
                  event: t,
                  eventTarget: n,
                  elementRoot: a,
                  elementApi: i,
                })
              ),
            []
          );
        let {
            getValidDocument: s,
            getQuerySelector: u,
            queryDocument: f,
            getChildElements: p,
            getSiblingElements: E,
            matchSelector: y,
            elementContains: T,
            isSiblingNode: I,
          } = i,
          { target: b } = e;
        if (!b) return [];
        let {
          id: m,
          objectId: O,
          selector: v,
          selectorGuids: _,
          appliesTo: R,
          useEventTarget: h,
        } = eb(b);
        if (O) return [es.has(O) ? es.get(O) : es.set(O, {}).get(O)];
        if (R === l.EventAppliesTo.PAGE) {
          let e = s(m);
          return e ? [e] : [];
        }
        let N = (t?.action?.config?.affectedElements ?? {})[m || v] || {},
          A = !!(N.id || N.selector),
          L = t && u(eb(t.target));
        if (
          (A
            ? ((o = N.limitAffectedElements), (r = L), (c = u(N)))
            : (r = c = u({ id: m, selector: v, selectorGuids: _ })),
          t && h)
        ) {
          let e = n && (c || !0 === h) ? [n] : f(L);
          if (c) {
            if (h === V) return f(c).filter((t) => e.some((e) => T(t, e)));
            if (h === P) return f(c).filter((t) => e.some((e) => T(e, t)));
            if (h === F) return f(c).filter((t) => e.some((e) => I(e, t)));
          }
          return e;
        }
        return null == r || null == c
          ? []
          : g.IS_BROWSER_ENV && a
          ? f(c).filter((e) => a.contains(e))
          : o === P
          ? f(r, c)
          : o === U
          ? p(f(r)).filter(y(c))
          : o === F
          ? E(f(r)).filter(y(c))
          : f(c);
      }
      function eO({ element: e, actionItem: t }) {
        if (!g.IS_BROWSER_ENV) return {};
        let { actionTypeId: n } = t;
        switch (n) {
          case et:
          case en:
          case ea:
          case ei:
          case eo:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let ev = /px/,
        e_ = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = eP[t.type]), e),
            e || {}
          ),
        eR = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = eU[t.type] || t.defaultValue || 0),
              e
            ),
            e || {}
          );
      function eh(e, t = {}, n = {}, a, i) {
        let { getStyle: r } = i,
          { actionTypeId: c } = a;
        if ((0, p.isPluginType)(c)) return (0, p.getPluginOrigin)(c)(t[c], a);
        switch (a.actionTypeId) {
          case Q:
          case $:
          case q:
          case K:
            return t[a.actionTypeId] || ex[a.actionTypeId];
          case J:
            return e_(t[a.actionTypeId], a.config.filters);
          case ee:
            return eR(t[a.actionTypeId], a.config.fontVariations);
          case Z:
            return { value: (0, o.default)(parseFloat(r(e, N)), 1) };
          case et: {
            let t,
              i = r(e, S),
              c = r(e, C);
            return {
              widthValue:
                a.config.widthUnit === k
                  ? ev.test(i)
                    ? parseFloat(i)
                    : parseFloat(n.width)
                  : (0, o.default)(parseFloat(i), parseFloat(n.width)),
              heightValue:
                a.config.heightUnit === k
                  ? ev.test(c)
                    ? parseFloat(c)
                    : parseFloat(n.height)
                  : (0, o.default)(parseFloat(c), parseFloat(n.height)),
            };
          }
          case en:
          case ea:
          case ei:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: n,
              getStyle: a,
            }) {
              let i = ed[t],
                r = a(e, i),
                c = (function (e, t) {
                  let n = e.exec(t);
                  return n ? n[1] : "";
                })(eD, eG.test(r) ? r : n[i]).split(X);
              return {
                rValue: (0, o.default)(parseInt(c[0], 10), 255),
                gValue: (0, o.default)(parseInt(c[1], 10), 255),
                bValue: (0, o.default)(parseInt(c[2], 10), 255),
                aValue: (0, o.default)(parseFloat(c[3]), 1),
              };
            })({
              element: e,
              actionTypeId: a.actionTypeId,
              computedStyle: n,
              getStyle: r,
            });
          case eo:
            return { value: (0, o.default)(r(e, G), n.display) };
          case er:
            return t[a.actionTypeId] || { value: 0 };
          default:
            return;
        }
      }
      let eN = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eA = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eL = (e, t, n) => {
          if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(n, t);
          switch (e) {
            case J: {
              let e = (0, c.default)(n.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case ee: {
              let e = (0, c.default)(
                n.fontVariations,
                ({ type: e }) => e === t
              );
              return e ? e.value : 0;
            }
            default:
              return n[t];
          }
        };
      function eS({ element: e, actionItem: t, elementApi: n }) {
        if ((0, p.isPluginType)(t.actionTypeId))
          return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case Q:
          case $:
          case q:
          case K: {
            let { xValue: e, yValue: n, zValue: a } = t.config;
            return { xValue: e, yValue: n, zValue: a };
          }
          case et: {
            let { getStyle: a, setStyle: i, getProperty: o } = n,
              { widthUnit: r, heightUnit: c } = t.config,
              { widthValue: d, heightValue: l } = t.config;
            if (!g.IS_BROWSER_ENV) return { widthValue: d, heightValue: l };
            if (r === k) {
              let t = a(e, S);
              i(e, S, ""), (d = o(e, "offsetWidth")), i(e, S, t);
            }
            if (c === k) {
              let t = a(e, C);
              i(e, C, ""), (l = o(e, "offsetHeight")), i(e, C, t);
            }
            return { widthValue: d, heightValue: l };
          }
          case en:
          case ea:
          case ei: {
            let {
              rValue: a,
              gValue: i,
              bValue: o,
              aValue: r,
              globalSwatchId: c,
            } = t.config;
            if (c && c.startsWith("--")) {
              let { getStyle: t } = n,
                a = t(e, c),
                i = (0, f.normalizeColor)(a);
              return {
                rValue: i.red,
                gValue: i.green,
                bValue: i.blue,
                aValue: i.alpha,
              };
            }
            return { rValue: a, gValue: i, bValue: o, aValue: r };
          }
          case J:
            return t.config.filters.reduce(eN, {});
          case ee:
            return t.config.fontVariations.reduce(eA, {});
          default: {
            let { value: e } = t.config;
            return { value: e };
          }
        }
      }
      function eC(e) {
        return /^TRANSFORM_/.test(e)
          ? z
          : /^STYLE_/.test(e)
          ? j
          : /^GENERAL_/.test(e)
          ? Y
          : /^PLUGIN_/.test(e)
          ? W
          : void 0;
      }
      function ew(e, t) {
        return e === j ? t.replace("STYLE_", "").toLowerCase() : null;
      }
      function eM(e, t, n, a, i, o, c, d, l) {
        switch (d) {
          case z:
            var s = e,
              u = t,
              f = n,
              E = i,
              y = c;
            let T = eV
                .map((e) => {
                  let t = ex[e],
                    {
                      xValue: n = t.xValue,
                      yValue: a = t.yValue,
                      zValue: i = t.zValue,
                      xUnit: o = "",
                      yUnit: r = "",
                      zUnit: c = "",
                    } = u[e] || {};
                  switch (e) {
                    case Q:
                      return `${I}(${n}${o}, ${a}${r}, ${i}${c})`;
                    case $:
                      return `${b}(${n}${o}, ${a}${r}, ${i}${c})`;
                    case q:
                      return `${m}(${n}${o}) ${O}(${a}${r}) ${v}(${i}${c})`;
                    case K:
                      return `${_}(${n}${o}, ${a}${r})`;
                    default:
                      return "";
                  }
                })
                .join(" "),
              { setStyle: N } = y;
            ek(s, g.TRANSFORM_PREFIXED, y),
              N(s, g.TRANSFORM_PREFIXED, T),
              (function (
                { actionTypeId: e },
                { xValue: t, yValue: n, zValue: a }
              ) {
                return (
                  (e === Q && void 0 !== a) ||
                  (e === $ && void 0 !== a) ||
                  (e === q && (void 0 !== t || void 0 !== n))
                );
              })(E, f) && N(s, g.TRANSFORM_STYLE_PREFIXED, R);
            return;
          case j:
            return (function (e, t, n, a, i, o) {
              let { setStyle: c } = o;
              switch (a.actionTypeId) {
                case et: {
                  let { widthUnit: t = "", heightUnit: i = "" } = a.config,
                    { widthValue: r, heightValue: d } = n;
                  void 0 !== r &&
                    (t === k && (t = "px"), ek(e, S, o), c(e, S, r + t)),
                    void 0 !== d &&
                      (i === k && (i = "px"), ek(e, C, o), c(e, C, d + i));
                  break;
                }
                case J:
                  var d = a.config;
                  let l = (0, r.default)(
                      n,
                      (e, t, n) => `${e} ${n}(${t}${eF(n, d)})`,
                      ""
                    ),
                    { setStyle: s } = o;
                  ek(e, A, o), s(e, A, l);
                  break;
                case ee:
                  a.config;
                  let u = (0, r.default)(
                      n,
                      (e, t, n) => (e.push(`"${n}" ${t}`), e),
                      []
                    ).join(", "),
                    { setStyle: f } = o;
                  ek(e, L, o), f(e, L, u);
                  break;
                case en:
                case ea:
                case ei: {
                  let t = ed[a.actionTypeId],
                    i = Math.round(n.rValue),
                    r = Math.round(n.gValue),
                    d = Math.round(n.bValue),
                    l = n.aValue;
                  ek(e, t, o),
                    c(
                      e,
                      t,
                      l >= 1
                        ? `rgb(${i},${r},${d})`
                        : `rgba(${i},${r},${d},${l})`
                    );
                  break;
                }
                default: {
                  let { unit: t = "" } = a.config;
                  ek(e, i, o), c(e, i, n.value + t);
                }
              }
            })(e, 0, n, i, o, c);
          case Y:
            var w = e,
              M = i,
              x = c;
            let { setStyle: P } = x;
            if (M.actionTypeId === eo) {
              let { value: e } = M.config;
              P(w, G, e === h && g.IS_BROWSER_ENV ? g.FLEX_PREFIXED : e);
            }
            return;
          case W: {
            let { actionTypeId: e } = i;
            if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(l, t, i);
          }
        }
      }
      let ex = {
          [Q]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [$]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
          [q]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [K]: Object.freeze({ xValue: 0, yValue: 0 }),
        },
        eP = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        eU = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        eF = (e, t) => {
          let n = (0, c.default)(t.filters, ({ type: t }) => t === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        eV = Object.keys(ex),
        eG = /^rgb/,
        eD = RegExp("rgba?\\(([^)]+)\\)");
      function ek(e, t, n) {
        if (!g.IS_BROWSER_ENV) return;
        let a = el[t];
        if (!a) return;
        let { getStyle: i, setStyle: o } = n,
          r = i(e, D);
        if (!r) return void o(e, D, a);
        let c = r.split(X).map(ec);
        -1 === c.indexOf(a) && o(e, D, c.concat(a).join(X));
      }
      function eX(e, t, n) {
        if (!g.IS_BROWSER_ENV) return;
        let a = el[t];
        if (!a) return;
        let { getStyle: i, setStyle: o } = n,
          r = i(e, D);
        r &&
          -1 !== r.indexOf(a) &&
          o(
            e,
            D,
            r
              .split(X)
              .map(ec)
              .filter((e) => e !== a)
              .join(X)
          );
      }
      function eH({ store: e, elementApi: t }) {
        let { ixData: n } = e.getState(),
          { events: a = {}, actionLists: i = {} } = n;
        Object.keys(a).forEach((e) => {
          let n = a[e],
            { config: o } = n.action,
            { actionListId: r } = o,
            c = i[r];
          c && eB({ actionList: c, event: n, elementApi: t });
        }),
          Object.keys(i).forEach((e) => {
            eB({ actionList: i[e], elementApi: t });
          });
      }
      function eB({ actionList: e = {}, event: t, elementApi: n }) {
        let { actionItemGroups: a, continuousParameterGroups: i } = e;
        a &&
          a.forEach((e) => {
            ez({ actionGroup: e, event: t, elementApi: n });
          }),
          i &&
            i.forEach((e) => {
              let { continuousActionGroups: a } = e;
              a.forEach((e) => {
                ez({ actionGroup: e, event: t, elementApi: n });
              });
            });
      }
      function ez({ actionGroup: e, event: t, elementApi: n }) {
        let { actionItems: a } = e;
        a.forEach((e) => {
          let a,
            { actionTypeId: i, config: o } = e;
          (a = (0, p.isPluginType)(i)
            ? (t) => (0, p.clearPlugin)(i)(t, e)
            : ej({ effect: eW, actionTypeId: i, elementApi: n })),
            em({ config: o, event: t, elementApi: n }).forEach(a);
        });
      }
      function eY(e, t, n) {
        let { setStyle: a, getStyle: i } = n,
          { actionTypeId: o } = t;
        if (o === et) {
          let { config: n } = t;
          n.widthUnit === k && a(e, S, ""), n.heightUnit === k && a(e, C, "");
        }
        i(e, D) && ej({ effect: eX, actionTypeId: o, elementApi: n })(e);
      }
      let ej =
        ({ effect: e, actionTypeId: t, elementApi: n }) =>
        (a) => {
          switch (t) {
            case Q:
            case $:
            case q:
            case K:
              e(a, g.TRANSFORM_PREFIXED, n);
              break;
            case J:
              e(a, A, n);
              break;
            case ee:
              e(a, L, n);
              break;
            case Z:
              e(a, N, n);
              break;
            case et:
              e(a, S, n), e(a, C, n);
              break;
            case en:
            case ea:
            case ei:
              e(a, ed[t], n);
              break;
            case eo:
              e(a, G, n);
          }
        };
      function eW(e, t, n) {
        let { setStyle: a } = n;
        eX(e, t, n),
          a(e, t, ""),
          t === g.TRANSFORM_PREFIXED && a(e, g.TRANSFORM_STYLE_PREFIXED, "");
      }
      function eQ(e) {
        let t = 0,
          n = 0;
        return (
          e.forEach((e, a) => {
            let { config: i } = e,
              o = i.delay + i.duration;
            o >= t && ((t = o), (n = a));
          }),
          n
        );
      }
      function e$(e, t) {
        let { actionItemGroups: n, useFirstGroupAsInitialState: a } = e,
          { actionItem: i, verboseTimeElapsed: o = 0 } = t,
          r = 0,
          c = 0;
        return (
          n.forEach((e, t) => {
            if (a && 0 === t) return;
            let { actionItems: n } = e,
              d = n[eQ(n)],
              { config: l, actionTypeId: s } = d;
            i.id === d.id && (c = r + o);
            let u = eC(s) === Y ? 0 : l.duration;
            r += l.delay + u;
          }),
          r > 0 ? (0, u.optimizeFloat)(c / r) : 0
        );
      }
      function eq({ actionList: e, actionItemId: t, rawData: n }) {
        let { actionItemGroups: a, continuousParameterGroups: i } = e,
          o = [],
          r = (e) => (
            o.push((0, d.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
            e.id === t
          );
        return (
          a && a.some(({ actionItems: e }) => e.some(r)),
          i &&
            i.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(r));
            }),
          (0, d.setIn)(n, ["actionLists"], {
            [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
          })
        );
      }
      function eK(e, { basedOn: t }) {
        return (
          (e === l.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === l.EventBasedOn.ELEMENT || null == t)) ||
          (e === l.EventTypeConsts.MOUSE_MOVE && t === l.EventBasedOn.ELEMENT)
        );
      }
      function eZ(e, t) {
        return e + H + t;
      }
      function eJ(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }
      function e0(e, t) {
        return (0, s.default)(e && e.sort(), t && t.sort());
      }
      function e1(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId)
          return e.pluginElement + B + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: n = "", useEventTarget: a = "" } = e;
        return t + B + n + B + a;
      }
    },
    7164: function (e, t) {
      "use strict";
      function n(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let a = function (e, t) {
        if (n(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let a = Object.keys(e),
          i = Object.keys(t);
        if (a.length !== i.length) return !1;
        for (let i = 0; i < a.length; i++)
          if (!Object.hasOwn(t, a[i]) || !n(e[a[i]], t[a[i]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        createElementState: function () {
          return _;
        },
        ixElements: function () {
          return v;
        },
        mergeActionState: function () {
          return R;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(1185),
        r = n(7087),
        {
          HTML_ELEMENT: c,
          PLAIN_OBJECT: d,
          ABSTRACT_NODE: l,
          CONFIG_X_VALUE: s,
          CONFIG_Y_VALUE: u,
          CONFIG_Z_VALUE: f,
          CONFIG_VALUE: p,
          CONFIG_X_UNIT: g,
          CONFIG_Y_UNIT: E,
          CONFIG_Z_UNIT: y,
          CONFIG_UNIT: T,
        } = r.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: I,
          IX2_INSTANCE_ADDED: b,
          IX2_ELEMENT_STATE_CHANGED: m,
        } = r.IX2EngineActionTypes,
        O = {},
        v = (e = O, t = {}) => {
          switch (t.type) {
            case I:
              return O;
            case b: {
              let {
                  elementId: n,
                  element: a,
                  origin: i,
                  actionItem: r,
                  refType: c,
                } = t.payload,
                { actionTypeId: d } = r,
                l = e;
              return (
                (0, o.getIn)(l, [n, a]) !== a && (l = _(l, a, c, n, r)),
                R(l, n, d, i, r)
              );
            }
            case m: {
              let {
                elementId: n,
                actionTypeId: a,
                current: i,
                actionItem: o,
              } = t.payload;
              return R(e, n, a, i, o);
            }
            default:
              return e;
          }
        };
      function _(e, t, n, a, i) {
        let r =
          n === d ? (0, o.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, o.mergeIn)(e, [a], { id: a, ref: t, refId: r, refType: n });
      }
      function R(e, t, n, a, i) {
        let r = (function (e) {
          let { config: t } = e;
          return h.reduce((e, n) => {
            let a = n[0],
              i = n[1],
              o = t[a],
              r = t[i];
            return null != o && null != r && (e[i] = r), e;
          }, {});
        })(i);
        return (0, o.mergeIn)(e, [t, "refState", n], a, r);
      }
      let h = [
        [s, g],
        [u, E],
        [f, y],
        [p, T],
      ];
    },
    2310: function () {
      Webflow.require("ix2").init({
        events: {
          e: {
            id: "e",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: { actionListId: "a", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
              id: "68c961e9aa6b67c0ce35f279|cf27677c-e3d0-62bd-4d63-f46756324b46",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f279|cf27677c-e3d0-62bd-4d63-f46756324b46",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-p",
                smoothing: 50,
                startsEntering: !1,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19272f3c94b,
          },
          "e-3": {
            id: "e-3",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f279",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f279",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927307e6e5,
          },
          "e-5": {
            id: "e-5",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-17",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-6",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f279|0b3b7d24-f975-d9ef-d93e-6f41868a416a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f279|0b3b7d24-f975-d9ef-d93e-6f41868a416a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19273972a55,
          },
          "e-9": {
            id: "e-9",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-10",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f279|b2d90520-e10a-4f72-0cf3-af4a01a8b8ba",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f279|b2d90520-e10a-4f72-0cf3-af4a01a8b8ba",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19273ab9e63,
          },
          "e-11": {
            id: "e-11",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-12",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".locations_item",
              originalId: "855e7db5-8687-facb-58bc-c9c9e1e84ed6",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".locations_item",
                originalId: "855e7db5-8687-facb-58bc-c9c9e1e84ed6",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19273aeea31,
          },
          "e-13": {
            id: "e-13",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-14",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faqs_item",
              originalId: "ab1a3d19-977b-898b-3bc1-40074489c468",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faqs_item",
                originalId: "ab1a3d19-977b-898b-3bc1-40074489c468",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19273b2d7cb,
          },
          "e-14": {
            id: "e-14",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-9",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-13",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faqs_item",
              originalId: "ab1a3d19-977b-898b-3bc1-40074489c468",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faqs_item",
                originalId: "ab1a3d19-977b-898b-3bc1-40074489c468",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19273b2d7cc,
          },
          "e-15": {
            id: "e-15",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-10",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f279|4654afeb-bf30-8433-b76d-671c51894643",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f279|4654afeb-bf30-8433-b76d-671c51894643",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-10-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19273b6631e,
          },
          "e-16": {
            id: "e-16",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-17",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "4500f34f-ad71-c737-340f-a39b6520a857",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "4500f34f-ad71-c737-340f-a39b6520a857",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19273b89ca6,
          },
          "e-18": {
            id: "e-18",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-11",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "4500f34f-ad71-c737-340f-a39b6520a855",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "4500f34f-ad71-c737-340f-a39b6520a855",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-11-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19273b8cd91,
          },
          "e-19": {
            id: "e-19",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-12",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f279|cf27677c-e3d0-62bd-4d63-f46756324b46",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f279|cf27677c-e3d0-62bd-4d63-f46756324b46",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-12-p",
                smoothing: 50,
                startsEntering: !1,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19273dcc57f,
          },
          "e-20": {
            id: "e-20",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".player_item",
              originalId: "20bd0fcf-0ffa-fb32-1801-11b2da2948a3",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".player_item",
                originalId: "20bd0fcf-0ffa-fb32-1801-11b2da2948a3",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !0,
                addOffsetValue: 15,
                startsExiting: !0,
                addEndOffset: !1,
                endOffsetValue: 20,
              },
            ],
            createdOn: 0x19278306f4b,
          },
          "e-21": {
            id: "e-21",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-14",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27c|ecf134b5-aa9e-9740-f390-8f3f07464eb0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27c|ecf134b5-aa9e-9740-f390-8f3f07464eb0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-14-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x192783fff21,
          },
          "e-22": {
            id: "e-22",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-15",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27c|03ed8e6b-3b81-745a-78d6-9b0187a7ce30",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27c|03ed8e6b-3b81-745a-78d6-9b0187a7ce30",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-15-p",
                smoothing: 80,
                startsEntering: !1,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x192784863b5,
          },
          "e-23": {
            id: "e-23",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-24",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27c|f0443543-7ba6-cbc7-74ed-da3d58ab7911",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27c|f0443543-7ba6-cbc7-74ed-da3d58ab7911",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192784ad660,
          },
          "e-25": {
            id: "e-25",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-16",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27c|c4c61132-10a5-f5b8-f9a0-5ff4e441da56",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27c|c4c61132-10a5-f5b8-f9a0-5ff4e441da56",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-16-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x192784c2e47,
          },
          "e-26": {
            id: "e-26",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-27",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27c|7df0f447-f4c0-5e53-7f1e-55491f278c40",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27c|7df0f447-f4c0-5e53-7f1e-55491f278c40",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192784de346,
          },
          "e-28": {
            id: "e-28",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-29",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27c|2ad11c2f-e27d-3c08-ad75-c1f693737f7a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27c|2ad11c2f-e27d-3c08-ad75-c1f693737f7a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192785143dc,
          },
          "e-30": {
            id: "e-30",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-31",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27b|77dfe5a9-bc5b-9fc5-7a87-e2dc3413984c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27b|77dfe5a9-bc5b-9fc5-7a87-e2dc3413984c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927852378e,
          },
          "e-32": {
            id: "e-32",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-10",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27d|dac3a0ad-1bc4-f50d-4480-37c180ea2f7d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27d|dac3a0ad-1bc4-f50d-4480-37c180ea2f7d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-10-p",
                smoothing: 50,
                startsEntering: !1,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19278611c72,
          },
          "e-34": {
            id: "e-34",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-113",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27d|dac3a0ad-1bc4-f50d-4480-37c180ea2f7d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27d|dac3a0ad-1bc4-f50d-4480-37c180ea2f7d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192786bb5be,
          },
          "e-36": {
            id: "e-36",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-37",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27d|a41fac32-d451-d387-ddeb-f99c2df28067",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27d|a41fac32-d451-d387-ddeb-f99c2df28067",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192786d09b4,
          },
          "e-38": {
            id: "e-38",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-39",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27d|2868c035-7512-59ff-d96d-180201f9bdc9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27d|2868c035-7512-59ff-d96d-180201f9bdc9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927871b3dc,
          },
          "e-40": {
            id: "e-40",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-10",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27d|edacf3db-d746-a07d-9d0a-ba32c805a8af",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27d|edacf3db-d746-a07d-9d0a-ba32c805a8af",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-10-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19278742f37,
          },
          "e-41": {
            id: "e-41",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-17",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-42",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav_link",
              originalId: "5edb4eb9-d636-2d84-0fda-7fc3e9497815",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav_link",
                originalId: "5edb4eb9-d636-2d84-0fda-7fc3e9497815",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19278785d14,
          },
          "e-42": {
            id: "e-42",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-41",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav_link",
              originalId: "5edb4eb9-d636-2d84-0fda-7fc3e9497815",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav_link",
                originalId: "5edb4eb9-d636-2d84-0fda-7fc3e9497815",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19278785d14,
          },
          "e-43": {
            id: "e-43",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-17",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-44",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "17a6340c-761b-7fc0-e914-c76287f98ca8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "17a6340c-761b-7fc0-e914-c76287f98ca8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192787ea217,
          },
          "e-44": {
            id: "e-44",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-43",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "17a6340c-761b-7fc0-e914-c76287f98ca8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "17a6340c-761b-7fc0-e914-c76287f98ca8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192787ea217,
          },
          "e-45": {
            id: "e-45",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-17",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-46",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".button.is-link",
              originalId: "6c8afb6f-bcf6-b9d9-52c0-fda26c3ed4dc",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button.is-link",
                originalId: "6c8afb6f-bcf6-b9d9-52c0-fda26c3ed4dc",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192788dbeb3,
          },
          "e-46": {
            id: "e-46",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-45",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".button.is-link",
              originalId: "6c8afb6f-bcf6-b9d9-52c0-fda26c3ed4dc",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button.is-link",
                originalId: "6c8afb6f-bcf6-b9d9-52c0-fda26c3ed4dc",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x192788dbeb4,
          },
          "e-47": {
            id: "e-47",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-17",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-48",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".footer_link",
              originalId: "6c8afb6f-bcf6-b9d9-52c0-fda26c3ed4dc",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".footer_link",
                originalId: "6c8afb6f-bcf6-b9d9-52c0-fda26c3ed4dc",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192788fe139,
          },
          "e-48": {
            id: "e-48",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-47",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".footer_link",
              originalId: "6c8afb6f-bcf6-b9d9-52c0-fda26c3ed4dc",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".footer_link",
                originalId: "6c8afb6f-bcf6-b9d9-52c0-fda26c3ed4dc",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192788fe151,
          },
          "e-49": {
            id: "e-49",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-50",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".social-link",
              originalId: "d0e80abc-0b67-11d7-2a38-8a77c9d01ecf",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".social-link",
                originalId: "d0e80abc-0b67-11d7-2a38-8a77c9d01ecf",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b216cb3,
          },
          "e-50": {
            id: "e-50",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-20",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-49",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".social-link",
              originalId: "d0e80abc-0b67-11d7-2a38-8a77c9d01ecf",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".social-link",
                originalId: "d0e80abc-0b67-11d7-2a38-8a77c9d01ecf",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b216cb3,
          },
          "e-53": {
            id: "e-53",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-23",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68c961e9aa6b67c0ce35f279|805de4e7-667f-95f8-2868-3a3b4fbdd529",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f279|805de4e7-667f-95f8-2868-3a3b4fbdd529",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-23-p",
                selectedAxis: "X_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 90,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-23-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 90,
                restingState: 50,
              },
            ],
            createdOn: 0x1927b29f4c7,
          },
          "e-54": {
            id: "e-54",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-21",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-55",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f279|805de4e7-667f-95f8-2868-3a3b4fbdd529",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f279|805de4e7-667f-95f8-2868-3a3b4fbdd529",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b2ae17d,
          },
          "e-55": {
            id: "e-55",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-22",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-54",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f279|805de4e7-667f-95f8-2868-3a3b4fbdd529",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f279|805de4e7-667f-95f8-2868-3a3b4fbdd529",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b2ae17d,
          },
          "e-56": {
            id: "e-56",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-57",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27c|cd271bba-260c-d0ac-a377-96bcddb9d88f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27c|cd271bba-260c-d0ac-a377-96bcddb9d88f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b2c5d91,
          },
          "e-58": {
            id: "e-58",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-59",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27c|0020ec38-bce4-0963-4a28-4bb0331c2c9c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27c|0020ec38-bce4-0963-4a28-4bb0331c2c9c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b3a41a8,
          },
          "e-60": {
            id: "e-60",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-61",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27c|ec3f27ba-38d3-5e7c-803d-89b817e226e9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27c|ec3f27ba-38d3-5e7c-803d-89b817e226e9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b3abc05,
          },
          "e-62": {
            id: "e-62",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-24",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-63",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27c|3d8a5086-b811-6497-ff27-f5612d0369ec",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27c|3d8a5086-b811-6497-ff27-f5612d0369ec",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b3bbfbd,
          },
          "e-64": {
            id: "e-64",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-65",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27c|00e4789c-f5b4-f8f6-d739-25a9b69e21df",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27c|00e4789c-f5b4-f8f6-d739-25a9b69e21df",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b3cb5b3,
          },
          "e-66": {
            id: "e-66",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-25",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-67",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27c|9df46b77-dac5-2d62-d982-31df081bda45",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27c|9df46b77-dac5-2d62-d982-31df081bda45",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b3d2116,
          },
          "e-68": {
            id: "e-68",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-69",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".exp-slider_arrow",
              originalId:
                "68c961e9aa6b67c0ce35f27c|06c99d02-5b1b-ab82-23bb-aa92962fad52",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".exp-slider_arrow",
                originalId:
                  "68c961e9aa6b67c0ce35f27c|06c99d02-5b1b-ab82-23bb-aa92962fad52",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b7717ae,
          },
          "e-69": {
            id: "e-69",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-68",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".exp-slider_arrow",
              originalId:
                "68c961e9aa6b67c0ce35f27c|06c99d02-5b1b-ab82-23bb-aa92962fad52",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".exp-slider_arrow",
                originalId:
                  "68c961e9aa6b67c0ce35f27c|06c99d02-5b1b-ab82-23bb-aa92962fad52",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b7717af,
          },
          "e-70": {
            id: "e-70",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-71",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27e|ab7d90b9-0e1e-c69a-4acb-4f38bdc8b700",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27e|ab7d90b9-0e1e-c69a-4acb-4f38bdc8b700",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b8b0c9c,
          },
          "e-73": {
            id: "e-73",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-72",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27e",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b8d41e5,
          },
          "e-74": {
            id: "e-74",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-75",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f279|b2d90520-e10a-4f72-0cf3-af4a01a8b8ba",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f279|b2d90520-e10a-4f72-0cf3-af4a01a8b8ba",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b9afb80,
          },
          "e-76": {
            id: "e-76",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-77",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f279|f34fdec2-7330-0cd6-5ea1-badf54d8c9e2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f279|f34fdec2-7330-0cd6-5ea1-badf54d8c9e2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1927ba0748b,
          },
          "e-78": {
            id: "e-78",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-79",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f279|f34fdec2-7330-0cd6-5ea1-badf54d8c9e2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f279|f34fdec2-7330-0cd6-5ea1-badf54d8c9e2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927ba0a731,
          },
          "e-80": {
            id: "e-80",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-81",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f279|0e2ba735-0b1e-eb7d-5169-048742268950",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f279|0e2ba735-0b1e-eb7d-5169-048742268950",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927ba1d31c,
          },
          "e-82": {
            id: "e-82",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-83",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f279|0e2ba735-0b1e-eb7d-5169-048742268950",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f279|0e2ba735-0b1e-eb7d-5169-048742268950",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927ba1eca4,
          },
          "e-84": {
            id: "e-84",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-85",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f279|39c41625-96bb-d3d0-8826-2fcb008cc178",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f279|39c41625-96bb-d3d0-8826-2fcb008cc178",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927ba291d3,
          },
          "e-86": {
            id: "e-86",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-87",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f279|39c41625-96bb-d3d0-8826-2fcb008cc178",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f279|39c41625-96bb-d3d0-8826-2fcb008cc178",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927ba359d3,
          },
          "e-88": {
            id: "e-88",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-89",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27c|cd271bba-260c-d0ac-a377-96bcddb9d88f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27c|cd271bba-260c-d0ac-a377-96bcddb9d88f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927ba4569a,
          },
          "e-90": {
            id: "e-90",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-91",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27c|f0443543-7ba6-cbc7-74ed-da3d58ab7911",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27c|f0443543-7ba6-cbc7-74ed-da3d58ab7911",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927ba64dc4,
          },
          "e-92": {
            id: "e-92",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-93",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27c|7df0f447-f4c0-5e53-7f1e-55491f278c40",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27c|7df0f447-f4c0-5e53-7f1e-55491f278c40",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927ba6a13c,
          },
          "e-94": {
            id: "e-94",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-95",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27b|77dfe5a9-bc5b-9fc5-7a87-e2dc3413984c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27b|77dfe5a9-bc5b-9fc5-7a87-e2dc3413984c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927ba6d964,
          },
          "e-96": {
            id: "e-96",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-97",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27d|dac3a0ad-1bc4-f50d-4480-37c180ea2f7d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27d|dac3a0ad-1bc4-f50d-4480-37c180ea2f7d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927ba792dc,
          },
          "e-98": {
            id: "e-98",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-99",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27d|a41fac32-d451-d387-ddeb-f99c2df28067",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27d|a41fac32-d451-d387-ddeb-f99c2df28067",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927ba7ca65,
          },
          "e-100": {
            id: "e-100",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-101",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27d|2868c035-7512-59ff-d96d-180201f9bdc9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27d|2868c035-7512-59ff-d96d-180201f9bdc9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927ba7ed23,
          },
          "e-102": {
            id: "e-102",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-103",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68c961e9aa6b67c0ce35f27e|ab7d90b9-0e1e-c69a-4acb-4f38bdc8b700",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68c961e9aa6b67c0ce35f27e|ab7d90b9-0e1e-c69a-4acb-4f38bdc8b700",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927ba84352,
          },
          "e-112": {
            id: "e-112",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-38",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-113",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".footer_social-link",
              originalId:
                "68c961e9aa6b67c0ce35f282|a24b44d3-91b8-6a6c-aaf2-27ae9adc25c4",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".footer_social-link",
                originalId:
                  "68c961e9aa6b67c0ce35f282|a24b44d3-91b8-6a6c-aaf2-27ae9adc25c4",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19272574313,
          },
          "e-113": {
            id: "e-113",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-39",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-112",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".footer_social-link",
              originalId:
                "68c961e9aa6b67c0ce35f282|a24b44d3-91b8-6a6c-aaf2-27ae9adc25c4",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".footer_social-link",
                originalId:
                  "68c961e9aa6b67c0ce35f282|a24b44d3-91b8-6a6c-aaf2-27ae9adc25c4",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19272574313,
          },
          "e-114": {
            id: "e-114",
            name: "",
            animationType: "custom",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-40",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-115",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              appliesTo: "ELEMENT",
              styleBlockIds: [],
              id: "17a6340c-761b-7fc0-e914-c76287f98ca6",
            },
            targets: [],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1928996ef7e,
          },
          "e-115": {
            id: "e-115",
            name: "",
            animationType: "custom",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-41",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-114",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              appliesTo: "ELEMENT",
              styleBlockIds: [],
              id: "17a6340c-761b-7fc0-e914-c76287f98ca6",
            },
            targets: [],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1928996ef7f,
          },
        },
        actionLists: {
          a: {
            id: "a",
            title: "hero-video â€“> scrolls in",
            continuousParameterGroups: [
              {
                id: "a-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-n",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_wrap",
                            selectorGuids: [
                              "c7878a48-9b25-1085-cc5f-a0d9fe85121a",
                            ],
                          },
                          xValue: 0.6,
                          yValue: 0.6,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-n-3",
                        actionTypeId: "PLUGIN_VARIABLE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          value: { size: 3.125, unit: "rem" },
                          target: {
                            objectId: "--hero-video-radius",
                            useEventTarget: "CHILDREN",
                            selector: ".video_wrap",
                            selectorGuids: [
                              "c7878a48-9b25-1085-cc5f-a0d9fe85121a",
                            ],
                          },
                        },
                      },
                      {
                        id: "a-n-5",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_btn",
                            selectorGuids: [
                              "48b5f15e-f360-0f00-57eb-ace111f7e884",
                            ],
                          },
                          xValue: 1.5,
                          yValue: 1.5,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-n-7",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_title",
                            selectorGuids: [
                              "69b99529-818a-58a6-ff57-383ad53add5a",
                            ],
                          },
                          xValue: 1.5,
                          yValue: 1.5,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-n-9",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_title",
                            selectorGuids: [
                              "69b99529-818a-58a6-ff57-383ad53add5a",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 16,
                    actionItems: [
                      {
                        id: "a-n-10",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_title",
                            selectorGuids: [
                              "69b99529-818a-58a6-ff57-383ad53add5a",
                            ],
                          },
                          yValue: 400,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 33.33,
                    actionItems: [
                      {
                        id: "a-n-2",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_wrap",
                            selectorGuids: [
                              "c7878a48-9b25-1085-cc5f-a0d9fe85121a",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-n-4",
                        actionTypeId: "PLUGIN_VARIABLE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          value: { size: 0, unit: "rem" },
                          target: {
                            objectId: "--hero-video-radius",
                            useEventTarget: "CHILDREN",
                            selector: ".video_wrap",
                            selectorGuids: [
                              "c7878a48-9b25-1085-cc5f-a0d9fe85121a",
                            ],
                          },
                        },
                      },
                      {
                        id: "a-n-6",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_btn",
                            selectorGuids: [
                              "48b5f15e-f360-0f00-57eb-ace111f7e884",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-n-8",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_title",
                            selectorGuids: [
                              "69b99529-818a-58a6-ff57-383ad53add5a",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x19272f3d471,
          },
          "a-2": {
            id: "a-2",
            title: "homepage -> loads",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-2-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|7392a2d2-e2cf-5cad-069a-b7a3d9846baa",
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-19",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|805de4e7-667f-95f8-2868-3a3b4fbdd528",
                      },
                      xValue: 3,
                      yValue: 3,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-2-n-17",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|805de4e7-667f-95f8-2868-3a3b4fbdd528",
                      },
                      yValue: 15,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|805de4e7-667f-95f8-2868-3a3b4fbdd528",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-21",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|256a64f6-f429-7765-d6fb-826f628ae915",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-22",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|256a64f6-f429-7765-d6fb-826f628ae915",
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-23",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|9d3ddad4-712e-c16c-7560-87756315819c",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-24",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|9d3ddad4-712e-c16c-7560-87756315819c",
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-25",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|af0f8885-ee6b-84ff-4a36-f2fd2ec4124f",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-26",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|af0f8885-ee6b-84ff-4a36-f2fd2ec4124f",
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-33",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|499d3b83-ae7b-a8b5-0eaf-abde592d3be3",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-34",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|499d3b83-ae7b-a8b5-0eaf-abde592d3be3",
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-35",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|7d330f68-f229-ae7c-c9da-be61c38d44a3",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-36",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|7d330f68-f229-ae7c-c9da-be61c38d44a3",
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-37",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|49273ef5-6d27-c105-5fc8-92c5b230491d",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-38",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|49273ef5-6d27-c105-5fc8-92c5b230491d",
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-2-n-20",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 400,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|805de4e7-667f-95f8-2868-3a3b4fbdd528",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-2-n-18",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 400,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|805de4e7-667f-95f8-2868-3a3b4fbdd528",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-16",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 400,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|805de4e7-667f-95f8-2868-3a3b4fbdd528",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-27",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 600,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|256a64f6-f429-7765-d6fb-826f628ae915",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-28",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 600,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|256a64f6-f429-7765-d6fb-826f628ae915",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-29",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 700,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|9d3ddad4-712e-c16c-7560-87756315819c",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-30",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 700,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|9d3ddad4-712e-c16c-7560-87756315819c",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-32",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 800,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|af0f8885-ee6b-84ff-4a36-f2fd2ec4124f",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-31",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 800,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|af0f8885-ee6b-84ff-4a36-f2fd2ec4124f",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-10",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 1e3,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|7392a2d2-e2cf-5cad-069a-b7a3d9846baa",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-40",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 1e3,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|499d3b83-ae7b-a8b5-0eaf-abde592d3be3",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-39",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1e3,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|499d3b83-ae7b-a8b5-0eaf-abde592d3be3",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-42",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 1100,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|7d330f68-f229-ae7c-c9da-be61c38d44a3",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-41",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1100,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|7d330f68-f229-ae7c-c9da-be61c38d44a3",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-43",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1200,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|49273ef5-6d27-c105-5fc8-92c5b230491d",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-44",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 1200,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "68c961e9aa6b67c0ce35f279|49273ef5-6d27-c105-5fc8-92c5b230491d",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1927307f2d5,
          },
          "a-17": {
            id: "a-17",
            title: "hover-line -> hover in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-17-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link_line",
                        selectorGuids: ["9cf9eaf6-20c8-12d4-b89c-f09b8d97a9db"],
                      },
                      xValue: 0,
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-17-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "swingTo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link_line",
                        selectorGuids: ["9cf9eaf6-20c8-12d4-b89c-f09b8d97a9db"],
                      },
                      xValue: 1,
                      yValue: null,
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19278786762,
          },
          "a-6": {
            id: "a-6",
            title: "headline -> scrolls in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-6-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-1",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "49c75286-500c-32b1-dd65-fd7943cdd2cf",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-1",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "49c75286-500c-32b1-dd65-fd7943cdd2cf",
                        ],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-2",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "e85835c6-584e-056c-31b8-2f99e8d689c0",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-2",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "e85835c6-584e-056c-31b8-2f99e8d689c0",
                        ],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-45",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-3",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "62b0e67e-5461-b1fb-25a2-60c1294f5399",
                        ],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-37",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-3",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "62b0e67e-5461-b1fb-25a2-60c1294f5399",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-50",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-4",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "d6ef9d9b-7b8b-0654-5624-5101625fba8c",
                        ],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-51",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-4",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "d6ef9d9b-7b8b-0654-5624-5101625fba8c",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-52",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-5",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "e449fd35-9e5f-eefb-6b51-baf2db877263",
                        ],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-53",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-5",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "e449fd35-9e5f-eefb-6b51-baf2db877263",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-54",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-6",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "52a8482f-030e-4e3b-cac4-1c4711750e0d",
                        ],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-55",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-6",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "52a8482f-030e-4e3b-cac4-1c4711750e0d",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-56",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-7",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "716b3604-0b7a-ef53-80df-85bbbdb4d28c",
                        ],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-57",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-7",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "716b3604-0b7a-ef53-80df-85bbbdb4d28c",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-58",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-9",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "cc4f24dd-070e-a75b-873f-aa94b2de8ed7",
                        ],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-59",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-9",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "cc4f24dd-070e-a75b-873f-aa94b2de8ed7",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-60",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-10",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "ad725f09-1016-7b2a-427a-b0b7ac63c649",
                        ],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-61",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-10",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "ad725f09-1016-7b2a-427a-b0b7ac63c649",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-62",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-11",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "b5bdae95-4906-aa85-9551-53e2e870816e",
                        ],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-63",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-11",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "b5bdae95-4906-aa85-9551-53e2e870816e",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-64",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-12",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "7eee6a62-fd71-7f7d-3e51-c7547211218b",
                        ],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-65",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-12",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "7eee6a62-fd71-7f7d-3e51-c7547211218b",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-6-n-13",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-1",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "49c75286-500c-32b1-dd65-fd7943cdd2cf",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-9",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-1",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "49c75286-500c-32b1-dd65-fd7943cdd2cf",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-10",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 100,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-2",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "e85835c6-584e-056c-31b8-2f99e8d689c0",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-14",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-2",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "e85835c6-584e-056c-31b8-2f99e8d689c0",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-39",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 200,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-3",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "62b0e67e-5461-b1fb-25a2-60c1294f5399",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-40",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-3",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "62b0e67e-5461-b1fb-25a2-60c1294f5399",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-66",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 300,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-4",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "d6ef9d9b-7b8b-0654-5624-5101625fba8c",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-67",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-4",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "d6ef9d9b-7b8b-0654-5624-5101625fba8c",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-68",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 400,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-5",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "e449fd35-9e5f-eefb-6b51-baf2db877263",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-69",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 400,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-5",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "e449fd35-9e5f-eefb-6b51-baf2db877263",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-70",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-6",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "52a8482f-030e-4e3b-cac4-1c4711750e0d",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-71",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-6",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "52a8482f-030e-4e3b-cac4-1c4711750e0d",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-72",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 600,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-7",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "716b3604-0b7a-ef53-80df-85bbbdb4d28c",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-73",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 600,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-7",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "716b3604-0b7a-ef53-80df-85bbbdb4d28c",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-74",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 700,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-8",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "d1dafe24-8d6d-818d-7546-7f077edf4880",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-75",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 700,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-8",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "d1dafe24-8d6d-818d-7546-7f077edf4880",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-76",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 800,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-9",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "cc4f24dd-070e-a75b-873f-aa94b2de8ed7",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-77",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 800,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-9",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "cc4f24dd-070e-a75b-873f-aa94b2de8ed7",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-78",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 900,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-10",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "ad725f09-1016-7b2a-427a-b0b7ac63c649",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-79",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 900,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-10",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "ad725f09-1016-7b2a-427a-b0b7ac63c649",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-80",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 1e3,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-10",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "ad725f09-1016-7b2a-427a-b0b7ac63c649",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-81",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1e3,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-10",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "ad725f09-1016-7b2a-427a-b0b7ac63c649",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-82",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 1100,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-11",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "b5bdae95-4906-aa85-9551-53e2e870816e",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-83",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1100,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-11",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "b5bdae95-4906-aa85-9551-53e2e870816e",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-84",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 1200,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-12",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "7eee6a62-fd71-7f7d-3e51-c7547211218b",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-85",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1200,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-12",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "7eee6a62-fd71-7f7d-3e51-c7547211218b",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19273abab01,
          },
          "a-7": {
            id: "a-7",
            title: "location-card -> scrolls in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-7-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "20bd0fcf-0ffa-fb32-1801-11b2da2948a3",
                      },
                      yValue: 2,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-7-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".locations_visual",
                        selectorGuids: ["f6533226-b8fd-feff-3eaf-36d019eb890e"],
                      },
                      xValue: 0.9,
                      yValue: 0.9,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-7-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: !0,
                        id: "20bd0fcf-0ffa-fb32-1801-11b2da2948a3",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-7-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".locations_visual",
                        selectorGuids: ["f6533226-b8fd-feff-3eaf-36d019eb890e"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x192739f3b5a,
          },
          "a-8": {
            id: "a-8",
            title: "accordion ->\xa0open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-8-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faqs_body",
                        selectorGuids: ["4c898ee7-0c25-2f3d-7256-6b31cfb2708d"],
                      },
                      widthValue: 100,
                      heightValue: 0,
                      widthUnit: "%",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-8-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faqs_body",
                        selectorGuids: ["4c898ee7-0c25-2f3d-7256-6b31cfb2708d"],
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-8-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon-24",
                        selectorGuids: ["3e1240f1-6b72-d2d8-cbb3-3f0a0a43ecd1"],
                      },
                      zValue: 180,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-8-n-4",
                    actionTypeId: "STYLE_BORDER",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "ab1a3d19-977b-898b-3bc1-40074489c468",
                      },
                      globalSwatchId: "--green",
                      rValue: 206,
                      bValue: 101,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-8-n-3",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faqs_head",
                        selectorGuids: ["79c5458c-1afe-cb19-4d69-c0c12c553457"],
                      },
                      globalSwatchId: "--green",
                      rValue: 206,
                      bValue: 101,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19273b023b5,
          },
          "a-9": {
            id: "a-9",
            title: "accordion ->\xa0close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-9-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faqs_body",
                        selectorGuids: ["4c898ee7-0c25-2f3d-7256-6b31cfb2708d"],
                      },
                      widthValue: 100,
                      heightValue: 0,
                      widthUnit: "%",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-9-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon-24",
                        selectorGuids: ["3e1240f1-6b72-d2d8-cbb3-3f0a0a43ecd1"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-9-n-4",
                    actionTypeId: "STYLE_BORDER",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "ab1a3d19-977b-898b-3bc1-40074489c468",
                      },
                      globalSwatchId: "",
                      rValue: 206,
                      bValue: 101,
                      gValue: 255,
                      aValue: 0.2,
                    },
                  },
                  {
                    id: "a-9-n-5",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faqs_head",
                        selectorGuids: ["79c5458c-1afe-cb19-4d69-c0c12c553457"],
                      },
                      globalSwatchId: "--white",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19273b023b5,
          },
          "a-10": {
            id: "a-10",
            title: "img ->\xa0parallax",
            continuousParameterGroups: [
              {
                id: "a-10-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-10-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".parallax-img",
                            selectorGuids: [
                              "d15d6864-842a-b05f-d9f5-7cc06f7d443b",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-10-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".parallax-img",
                            selectorGuids: [
                              "d15d6864-842a-b05f-d9f5-7cc06f7d443b",
                            ],
                          },
                          yValue: 20,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x19273b66cad,
          },
          "a-11": {
            id: "a-11",
            title: "bottom-cta -> scroll",
            continuousParameterGroups: [
              {
                id: "a-11-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-11-n",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".bottom-cta_box",
                            selectorGuids: [
                              "d4790e7b-d1b7-7854-e50a-5d88e7eaec39",
                            ],
                          },
                          xValue: 2.5,
                          yValue: 2.5,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-11-n-5",
                        actionTypeId: "PLUGIN_VARIABLE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          value: { size: 0, unit: "rem" },
                          target: {
                            objectId: "--bottom-cta-radius",
                            useEventTarget: !0,
                            id: "4500f34f-ad71-c737-340f-a39b6520a855",
                          },
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-11-n-2",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".bottom-cta_box",
                            selectorGuids: [
                              "d4790e7b-d1b7-7854-e50a-5d88e7eaec39",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-11-n-6",
                        actionTypeId: "PLUGIN_VARIABLE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          value: { size: 3.125, unit: "rem" },
                          target: {
                            objectId: "--bottom-cta-radius",
                            useEventTarget: !0,
                            id: "4500f34f-ad71-c737-340f-a39b6520a855",
                          },
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x19273b8d69e,
          },
          "a-12": {
            id: "a-12",
            title: "hero-video_re â€“> scrolls in",
            continuousParameterGroups: [
              {
                id: "a-12-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-12-n",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_wrap",
                            selectorGuids: [
                              "c7878a48-9b25-1085-cc5f-a0d9fe85121a",
                            ],
                          },
                          xValue: 0.9,
                          yValue: 0.9,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-12-n-2",
                        actionTypeId: "PLUGIN_VARIABLE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          value: { size: 1.5, unit: "rem" },
                          target: {
                            objectId: "--hero-video-radius",
                            useEventTarget: "CHILDREN",
                            selector: ".video_wrap",
                            selectorGuids: [
                              "c7878a48-9b25-1085-cc5f-a0d9fe85121a",
                            ],
                          },
                        },
                      },
                      {
                        id: "a-12-n-3",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_btn",
                            selectorGuids: [
                              "48b5f15e-f360-0f00-57eb-ace111f7e884",
                            ],
                          },
                          xValue: 1.2,
                          yValue: 1.2,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-12-n-4",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_title",
                            selectorGuids: [
                              "69b99529-818a-58a6-ff57-383ad53add5a",
                            ],
                          },
                          xValue: 1.2,
                          yValue: 1.2,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-12-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_title",
                            selectorGuids: [
                              "69b99529-818a-58a6-ff57-383ad53add5a",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 16,
                    actionItems: [
                      {
                        id: "a-12-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_title",
                            selectorGuids: [
                              "69b99529-818a-58a6-ff57-383ad53add5a",
                            ],
                          },
                          yValue: 200,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 33.33,
                    actionItems: [
                      {
                        id: "a-12-n-7",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_wrap",
                            selectorGuids: [
                              "c7878a48-9b25-1085-cc5f-a0d9fe85121a",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-12-n-8",
                        actionTypeId: "PLUGIN_VARIABLE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          value: { size: 0, unit: "rem" },
                          target: {
                            objectId: "--hero-video-radius",
                            useEventTarget: "CHILDREN",
                            selector: ".video_wrap",
                            selectorGuids: [
                              "c7878a48-9b25-1085-cc5f-a0d9fe85121a",
                            ],
                          },
                        },
                      },
                      {
                        id: "a-12-n-9",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_btn",
                            selectorGuids: [
                              "48b5f15e-f360-0f00-57eb-ace111f7e884",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-12-n-10",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_title",
                            selectorGuids: [
                              "69b99529-818a-58a6-ff57-383ad53add5a",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x19272f3d471,
          },
          "a-13": {
            id: "a-13",
            title: "player-card -> scrolls in",
            continuousParameterGroups: [
              {
                id: "a-13-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-13-n",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".player_visual.shadow-card",
                            selectorGuids: [
                              "3a803c13-2474-0783-ab89-0536f44e8d5a",
                              "d302a14c-c67d-193b-56d6-1fa3b69c41e0",
                            ],
                          },
                          xValue: 0.7,
                          yValue: 0.7,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-13-n-2",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".player_visual.shadow-card",
                            selectorGuids: [
                              "3a803c13-2474-0783-ab89-0536f44e8d5a",
                              "d302a14c-c67d-193b-56d6-1fa3b69c41e0",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x192783079f5,
          },
          "a-14": {
            id: "a-14",
            title: "gallery -> parallax",
            continuousParameterGroups: [
              {
                id: "a-14-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-14-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".gallery_img._1",
                            selectorGuids: [
                              "eb70c2a8-3bcd-dded-675b-cf9805985161",
                              "80c8c62a-60e0-7ba3-d041-13625a5d51b3",
                            ],
                          },
                          yValue: 5,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-14-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".gallery_img._2",
                            selectorGuids: [
                              "eb70c2a8-3bcd-dded-675b-cf9805985161",
                              "ce1c6c2c-2ef1-a485-02a8-a32b10364e7c",
                            ],
                          },
                          yValue: 7,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-14-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".gallery_img._3",
                            selectorGuids: [
                              "eb70c2a8-3bcd-dded-675b-cf9805985161",
                              "557edea9-8d53-fb47-483c-cfdeced4177d",
                            ],
                          },
                          yValue: 12,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-14-n-7",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".gallery_img._4",
                            selectorGuids: [
                              "eb70c2a8-3bcd-dded-675b-cf9805985161",
                              "b4de19f3-f263-7496-d564-44abd2f8f3d1",
                            ],
                          },
                          yValue: 12,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-14-n-9",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".gallery_img._5",
                            selectorGuids: [
                              "eb70c2a8-3bcd-dded-675b-cf9805985161",
                              "b677b4d2-4c0c-54b8-131b-8b89ab717d99",
                            ],
                          },
                          yValue: 10,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-14-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".gallery_img._1",
                            selectorGuids: [
                              "eb70c2a8-3bcd-dded-675b-cf9805985161",
                              "80c8c62a-60e0-7ba3-d041-13625a5d51b3",
                            ],
                          },
                          yValue: -5,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-14-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".gallery_img._2",
                            selectorGuids: [
                              "eb70c2a8-3bcd-dded-675b-cf9805985161",
                              "ce1c6c2c-2ef1-a485-02a8-a32b10364e7c",
                            ],
                          },
                          yValue: -7,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-14-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".gallery_img._3",
                            selectorGuids: [
                              "eb70c2a8-3bcd-dded-675b-cf9805985161",
                              "557edea9-8d53-fb47-483c-cfdeced4177d",
                            ],
                          },
                          yValue: -6,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-14-n-8",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".gallery_img._4",
                            selectorGuids: [
                              "eb70c2a8-3bcd-dded-675b-cf9805985161",
                              "b4de19f3-f263-7496-d564-44abd2f8f3d1",
                            ],
                          },
                          yValue: -4,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-14-n-10",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".gallery_img._5",
                            selectorGuids: [
                              "eb70c2a8-3bcd-dded-675b-cf9805985161",
                              "b677b4d2-4c0c-54b8-131b-8b89ab717d99",
                            ],
                          },
                          yValue: -10,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1927840095f,
          },
          "a-15": {
            id: "a-15",
            title: "fitness -> intro-line",
            continuousParameterGroups: [
              {
                id: "a-15-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-15-n",
                        actionTypeId: "PLUGIN_VARIABLE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          value: { size: 0, unit: "em" },
                          target: {
                            objectId: "--fitness-intro-shadow-y",
                            useEventTarget: !0,
                            id: "68c961e9aa6b67c0ce35f27c|6a3ecc14-ec69-9bbd-db05-9782133e248d",
                          },
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-15-n-2",
                        actionTypeId: "PLUGIN_VARIABLE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          value: { size: -0.6, unit: "em" },
                          target: {
                            objectId: "--fitness-intro-shadow-y",
                            useEventTarget: !0,
                            id: "68c961e9aa6b67c0ce35f27c|6a3ecc14-ec69-9bbd-db05-9782133e248d",
                          },
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x19278460dff,
          },
          "a-16": {
            id: "a-16",
            title: "feature-visual -> scrolls in",
            continuousParameterGroups: [
              {
                id: "a-16-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-16-n",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "68c961e9aa6b67c0ce35f27c|c4c61132-10a5-f5b8-f9a0-5ff4e441da56",
                          },
                          xValue: 0.7,
                          yValue: 0.7,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-16-n-2",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "68c961e9aa6b67c0ce35f27c|c4c61132-10a5-f5b8-f9a0-5ff4e441da56",
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x192783079f5,
          },
          "a-18": {
            id: "a-18",
            title: "hover-line -> hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-18-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "swingFrom",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link_line",
                        selectorGuids: ["9cf9eaf6-20c8-12d4-b89c-f09b8d97a9db"],
                      },
                      xValue: 0,
                      yValue: null,
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19278786762,
          },
          "a-19": {
            id: "a-19",
            title: "hover-box -> hover in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-19-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link-box",
                        selectorGuids: ["7bc8cf0d-181f-72ae-b9f8-7197dc1c2e37"],
                      },
                      xValue: 0.5,
                      yValue: 0.5,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-19-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link-box",
                        selectorGuids: ["7bc8cf0d-181f-72ae-b9f8-7197dc1c2e37"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-19-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "swingTo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link-box",
                        selectorGuids: ["7bc8cf0d-181f-72ae-b9f8-7197dc1c2e37"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-19-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "swingTo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link-box",
                        selectorGuids: ["7bc8cf0d-181f-72ae-b9f8-7197dc1c2e37"],
                      },
                      value: 0.7,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1927b2177ba,
          },
          "a-20": {
            id: "a-20",
            title: "hover-box -> hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-20-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "swingFrom",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link-box",
                        selectorGuids: ["7bc8cf0d-181f-72ae-b9f8-7197dc1c2e37"],
                      },
                      xValue: 0.5,
                      yValue: 0.5,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-20-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "swingFrom",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link-box",
                        selectorGuids: ["7bc8cf0d-181f-72ae-b9f8-7197dc1c2e37"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1927b2177ba,
          },
          "a-23": {
            id: "a-23",
            title: "learn-more -> mouse move",
            continuousParameterGroups: [
              {
                id: "a-23-p",
                type: "MOUSE_X",
                parameterLabel: "Mouse X",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-23-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_play",
                            selectorGuids: [
                              "3f81e598-cd52-c8c6-f044-98729414ef51",
                            ],
                          },
                          xValue: -2,
                          xUnit: "rem",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-23-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_play",
                            selectorGuids: [
                              "3f81e598-cd52-c8c6-f044-98729414ef51",
                            ],
                          },
                          xValue: 2,
                          xUnit: "rem",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: "a-23-p-2",
                type: "MOUSE_Y",
                parameterLabel: "Mouse Y",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-23-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_play",
                            selectorGuids: [
                              "3f81e598-cd52-c8c6-f044-98729414ef51",
                            ],
                          },
                          xValue: null,
                          yValue: -1,
                          xUnit: "rem",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-23-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_play",
                            selectorGuids: [
                              "3f81e598-cd52-c8c6-f044-98729414ef51",
                            ],
                          },
                          yValue: 1,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1927b2a04de,
          },
          "a-21": {
            id: "a-21",
            title: "learn-more -> hover in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-21-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".video_play",
                        selectorGuids: ["3f81e598-cd52-c8c6-f044-98729414ef51"],
                      },
                      xValue: 1.2,
                      yValue: 1.2,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-21-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon-16",
                        selectorGuids: ["a5a0defd-f324-bd27-81c2-3ca4ba015545"],
                      },
                      xValue: 0.8,
                      yValue: 0.8,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1927b274687,
          },
          "a-22": {
            id: "a-22",
            title: "learn-more -> hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-22-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".video_play",
                        selectorGuids: ["3f81e598-cd52-c8c6-f044-98729414ef51"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-22-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon-16",
                        selectorGuids: ["a5a0defd-f324-bd27-81c2-3ca4ba015545"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1927b274687,
          },
          "a-26": {
            id: "a-26",
            title: "rotate-image_3",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-26-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 16e3,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: 180,
                      zValue: null,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-26-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 16e3,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: null,
                      zValue: 12,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-26-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: 360,
                      zValue: 0,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-26-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 1500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-26-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      yValue: 0,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-26-n-6",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 16e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-26-n-7",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 16e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      yValue: 0,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1927b31ab88,
          },
          "a-28": {
            id: "a-28",
            title: "rotate-image_5",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-28-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 32e3,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: 180,
                      zValue: null,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-28-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 32e3,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: null,
                      zValue: 12,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-28-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: 360,
                      zValue: 0,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-28-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 1500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-28-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      yValue: 0,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1927b31ab88,
          },
          "a-24": {
            id: "a-24",
            title: "rotate-image_1",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-24-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: 180,
                      zValue: null,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-24-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: null,
                      zValue: 12,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-24-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: 360,
                      zValue: 0,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-24-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 1500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-24-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      yValue: 0,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-24-n-6",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 32e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-24-n-7",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 32e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      yValue: 0,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1927b31ab88,
          },
          "a-27": {
            id: "a-27",
            title: "rotate-image_4",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-27-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 24e3,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: 180,
                      zValue: null,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-27-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 24e3,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: null,
                      zValue: 12,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-27-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: 360,
                      zValue: 0,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-27-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 1500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-27-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      yValue: 0,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-27-n-6",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 8e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-27-n-7",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 8e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      yValue: 0,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1927b31ab88,
          },
          "a-25": {
            id: "a-25",
            title: "rotate-image_2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-25-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 8e3,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: 180,
                      zValue: null,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-25-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 8e3,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: null,
                      zValue: 12,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-25-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: 360,
                      zValue: 0,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-25-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 1500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-25-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      yValue: 0,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-25-n-6",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 24e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-25-n-7",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 24e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      yValue: 0,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1927b31ab88,
          },
          "a-29": {
            id: "a-29",
            title: "arrow-dot -> hover-in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-29-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "swingFrom",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow_dot",
                        selectorGuids: ["b7c0798c-83d6-a982-8035-9c825a65e32f"],
                      },
                      xValue: 0.5,
                      yValue: 0.5,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-29-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow_dot",
                        selectorGuids: ["b7c0798c-83d6-a982-8035-9c825a65e32f"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-29-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow_dot",
                        selectorGuids: ["b7c0798c-83d6-a982-8035-9c825a65e32f"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-29-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow_dot",
                        selectorGuids: ["b7c0798c-83d6-a982-8035-9c825a65e32f"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1927b77261f,
          },
          "a-30": {
            id: "a-30",
            title: "arrow-dot -> hover-out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-30-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow_dot",
                        selectorGuids: ["b7c0798c-83d6-a982-8035-9c825a65e32f"],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-30-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow_dot",
                        selectorGuids: ["b7c0798c-83d6-a982-8035-9c825a65e32f"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1927b77261f,
          },
          "a-31": {
            id: "a-31",
            title: "contact-us -> reveal",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-31-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "68c961e9aa6b67c0ce35f27e|d5f6a4b2-9414-5c9e-4db8-6d4a9b945aee",
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-31-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "68c961e9aa6b67c0ce35f27e|d38a1bab-da7c-5502-1032-859abe3a6aa1",
                      },
                      xValue: 1.2,
                      yValue: 1.2,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-31-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "68c961e9aa6b67c0ce35f27e|d5f6a4b2-9414-5c9e-4db8-6d4a9b945aee",
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-31-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        id: "68c961e9aa6b67c0ce35f27e|d38a1bab-da7c-5502-1032-859abe3a6aa1",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1927b8d4c3b,
          },
          "a-32": {
            id: "a-32",
            title: "content -> scrolls in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-32-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-size-medium",
                        selectorGuids: ["bb0086f1-7d86-7383-094f-dae4e0e5c93b"],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-size-medium",
                        selectorGuids: ["bb0086f1-7d86-7383-094f-dae4e0e5c93b"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e5195153-8ecd-ca48-1499-6df4e8b316e4"],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e5195153-8ecd-ca48-1499-6df4e8b316e4"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-size-eyebrow",
                        selectorGuids: ["cc41b641-e58b-e5dc-41b1-6af0378874a0"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-size-eyebrow",
                        selectorGuids: ["cc41b641-e58b-e5dc-41b1-6af0378874a0"],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".staff_list",
                        selectorGuids: ["484e9a30-5c3f-51e9-d732-5225de224bdc"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-8",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".staff_list",
                        selectorGuids: ["484e9a30-5c3f-51e9-d732-5225de224bdc"],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-9",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".history_list",
                        selectorGuids: ["3d58ef48-d7bf-a157-a46a-0a0230028eb5"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-10",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".history_list",
                        selectorGuids: ["3d58ef48-d7bf-a157-a46a-0a0230028eb5"],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-11",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".locations_grid",
                        selectorGuids: ["7024e355-2af1-c79f-03a7-f1a37083951b"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-12",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".locations_grid",
                        selectorGuids: ["7024e355-2af1-c79f-03a7-f1a37083951b"],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-13",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".stats_list",
                        selectorGuids: ["3ecdc732-91d5-84d9-fb13-bb959b77b91e"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-14",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".stats_list",
                        selectorGuids: ["3ecdc732-91d5-84d9-fb13-bb959b77b91e"],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-15",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".list_wrap",
                        selectorGuids: ["ae6fffdd-9b43-0d81-0e4f-dd34a7eaabb0"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-16",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".list_wrap",
                        selectorGuids: ["ae6fffdd-9b43-0d81-0e4f-dd34a7eaabb0"],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-17",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".contact_form-block",
                        selectorGuids: ["c04ace79-72ea-6e51-26ad-97e856419d0e"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-18",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".contact_form-block",
                        selectorGuids: ["c04ace79-72ea-6e51-26ad-97e856419d0e"],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-86",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".form-input.is-green",
                        selectorGuids: [
                          "91772283-4ead-0021-4f37-755517caa597",
                          "bdae9cda-2f2b-170e-6d17-38a135c23c26",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-85",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".form-input.is-green",
                        selectorGuids: [
                          "91772283-4ead-0021-4f37-755517caa597",
                          "bdae9cda-2f2b-170e-6d17-38a135c23c26",
                        ],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-89",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faqs_list",
                        selectorGuids: ["ed9c93f3-129e-3ffa-fbb9-0c4f553721ae"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-90",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faqs_list",
                        selectorGuids: ["ed9c93f3-129e-3ffa-fbb9-0c4f553721ae"],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-32-n-68",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 300,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-size-medium",
                        selectorGuids: ["bb0086f1-7d86-7383-094f-dae4e0e5c93b"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-67",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-size-medium",
                        selectorGuids: ["bb0086f1-7d86-7383-094f-dae4e0e5c93b"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-69",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 400,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e5195153-8ecd-ca48-1499-6df4e8b316e4"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-70",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 400,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e5195153-8ecd-ca48-1499-6df4e8b316e4"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-71",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 400,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-size-eyebrow",
                        selectorGuids: ["cc41b641-e58b-e5dc-41b1-6af0378874a0"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-72",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 400,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-size-eyebrow",
                        selectorGuids: ["cc41b641-e58b-e5dc-41b1-6af0378874a0"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-87",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 400,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".form-input.is-green",
                        selectorGuids: [
                          "91772283-4ead-0021-4f37-755517caa597",
                          "bdae9cda-2f2b-170e-6d17-38a135c23c26",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-88",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 400,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".form-input.is-green",
                        selectorGuids: [
                          "91772283-4ead-0021-4f37-755517caa597",
                          "bdae9cda-2f2b-170e-6d17-38a135c23c26",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-73",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".list_wrap",
                        selectorGuids: ["ae6fffdd-9b43-0d81-0e4f-dd34a7eaabb0"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-74",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".list_wrap",
                        selectorGuids: ["ae6fffdd-9b43-0d81-0e4f-dd34a7eaabb0"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-75",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".stats_list",
                        selectorGuids: ["3ecdc732-91d5-84d9-fb13-bb959b77b91e"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-76",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".stats_list",
                        selectorGuids: ["3ecdc732-91d5-84d9-fb13-bb959b77b91e"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-77",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".locations_grid",
                        selectorGuids: ["7024e355-2af1-c79f-03a7-f1a37083951b"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-78",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".locations_grid",
                        selectorGuids: ["7024e355-2af1-c79f-03a7-f1a37083951b"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-79",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".history_list",
                        selectorGuids: ["3d58ef48-d7bf-a157-a46a-0a0230028eb5"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-80",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".history_list",
                        selectorGuids: ["3d58ef48-d7bf-a157-a46a-0a0230028eb5"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-81",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".staff_list",
                        selectorGuids: ["484e9a30-5c3f-51e9-d732-5225de224bdc"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-82",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".staff_list",
                        selectorGuids: ["484e9a30-5c3f-51e9-d732-5225de224bdc"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-83",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".contact_form-block",
                        selectorGuids: ["c04ace79-72ea-6e51-26ad-97e856419d0e"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-84",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".contact_form-block",
                        selectorGuids: ["c04ace79-72ea-6e51-26ad-97e856419d0e"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-91",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faqs_list",
                        selectorGuids: ["ed9c93f3-129e-3ffa-fbb9-0c4f553721ae"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-92",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faqs_list",
                        selectorGuids: ["ed9c93f3-129e-3ffa-fbb9-0c4f553721ae"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19273abab01,
          },
          "a-38": {
            id: "a-38",
            title: "link-box -> hover in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-38-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-38-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {},
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19272591974,
          },
          "a-39": {
            id: "a-39",
            title: "link-box -> hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-39-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {},
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19272591974,
          },
          "a-40": {
            id: "a-40",
            title: "nav -> opens",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-40-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav_button-line.is-top",
                        selectorGuids: [
                          "011acbae-1098-1982-3684-b5f8e5bf3bc6",
                          "e49c9707-83d6-f07b-5915-354f36640bfe",
                        ],
                      },
                      yValue: 7,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-40-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav_button-line.is-bottom",
                        selectorGuids: [
                          "011acbae-1098-1982-3684-b5f8e5bf3bc6",
                          "14d5974f-54ac-e12a-4410-9140ae491336",
                        ],
                      },
                      yValue: -7,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-40-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav_button-line.is-middle",
                        selectorGuids: [
                          "011acbae-1098-1982-3684-b5f8e5bf3bc6",
                          "f70b7933-aff6-d0c5-f34b-446c9eeda13e",
                        ],
                      },
                      zValue: 90,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-40-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav_button-inner",
                        selectorGuids: ["0c9c9542-2999-3584-1285-d4e26d2db556"],
                      },
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            createdOn: 0x192899779c0,
            useFirstGroupAsInitialState: !1,
          },
          "a-41": {
            id: "a-41",
            title: "nav -> close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-41-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav_button-line.is-middle",
                        selectorGuids: [
                          "011acbae-1098-1982-3684-b5f8e5bf3bc6",
                          "f70b7933-aff6-d0c5-f34b-446c9eeda13e",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-41-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav_button-inner",
                        selectorGuids: ["0c9c9542-2999-3584-1285-d4e26d2db556"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-41-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav_button-line.is-top",
                        selectorGuids: [
                          "011acbae-1098-1982-3684-b5f8e5bf3bc6",
                          "e49c9707-83d6-f07b-5915-354f36640bfe",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-41-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav_button-line.is-bottom",
                        selectorGuids: [
                          "011acbae-1098-1982-3684-b5f8e5bf3bc6",
                          "14d5974f-54ac-e12a-4410-9140ae491336",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            createdOn: 0x192899779c0,
            useFirstGroupAsInitialState: !1,
          },
        },
        site: {
          mediaQueries: [
            { key: "main", min: 992, max: 1e4 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
          ],
        },
      });
    },
  },
]);
