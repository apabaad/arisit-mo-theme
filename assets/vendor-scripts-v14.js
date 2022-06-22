/*
@license
Motion by Archetype Themes (https://archetypethemes.co)
*/

!(function (t, e) {
  var i = function () {
    e(t.lazySizes), t.removeEventListener('lazyunveilread', i, !0);
  };
  (e = e.bind(null, t, t.document)),
    'object' == typeof module && module.exports
      ? e(require('lazysizes'), require('../fix-ios-sizes/fix-ios-sizes'))
      : t.lazySizes
      ? i()
      : t.addEventListener('lazyunveilread', i, !0);
})(window, function (t, e, i) {
  'use strict';
  var n,
    o = (i && i.cfg) || t.lazySizesConfig,
    r = e.createElement('img'),
    s = 'sizes' in r && 'srcset' in r,
    a = /\s+\d+h/g,
    l = (function () {
      var t = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,
        i = Array.prototype.forEach;
      return function (n) {
        var o = e.createElement('img'),
          r = function (e) {
            var i,
              n = e.getAttribute(lazySizesConfig.srcsetAttr);
            n &&
              (n.match(t) &&
                (i =
                  'w' == RegExp.$2
                    ? RegExp.$1 / RegExp.$3
                    : RegExp.$3 / RegExp.$1) &&
                e.setAttribute('data-aspectratio', i),
              e.setAttribute(lazySizesConfig.srcsetAttr, n.replace(a, '')));
          },
          s = function (t) {
            var e = t.target.parentNode;
            e &&
              'PICTURE' == e.nodeName &&
              i.call(e.getElementsByTagName('source'), r),
              r(t.target);
          },
          l = function () {
            o.currentSrc && e.removeEventListener('lazybeforeunveil', s);
          };
        n[1] &&
          (e.addEventListener('lazybeforeunveil', s),
          (o.onload = l),
          (o.onerror = l),
          (o.srcset = 'data:,a 1w 1h'),
          o.complete && l());
      };
    })();
  if (
    (o || ((o = {}), (t.lazySizesConfig = o)),
    o.supportsType ||
      (o.supportsType = function (t) {
        return !t;
      }),
    !t.picturefill && !o.pf)
  ) {
    if (t.HTMLPictureElement && s)
      return (
        e.msElementsFromPoint && l(navigator.userAgent.match(/Edge\/(\d+)/)),
        void (o.pf = function () {})
      );
    (o.pf = function (e) {
      var i, o;
      if (!t.picturefill)
        for (i = 0, o = e.elements.length; o > i; i++) n(e.elements[i]);
    }),
      (n = (function () {
        var r = function (t, e) {
            return t.w - e.w;
          },
          l = /^\s*\d+\.*\d*px\s*$/,
          c = (function () {
            var t,
              e = /(([^,\s].[^\s]+)\s+(\d+)w)/g,
              i = /\s/,
              n = function (e, i, n, o) {
                t.push({ c: i, u: n, w: 1 * o });
              };
            return function (o) {
              return (
                (t = []),
                (o = o.trim()).replace(a, '').replace(e, n),
                t.length || !o || i.test(o) || t.push({ c: o, u: o, w: 99 }),
                t
              );
            };
          })(),
          u = function () {
            u.init ||
              ((u.init = !0),
              addEventListener(
                'resize',
                (function () {
                  var t,
                    i = e.getElementsByClassName('lazymatchmedia'),
                    o = function () {
                      var t, e;
                      for (t = 0, e = i.length; e > t; t++) n(i[t]);
                    };
                  return function () {
                    clearTimeout(t), (t = setTimeout(o, 66));
                  };
                })()
              ));
          },
          d = function (e, n) {
            var r,
              s = e.getAttribute('srcset') || e.getAttribute(o.srcsetAttr);
            !s &&
              n &&
              (s = e._lazypolyfill
                ? e._lazypolyfill._set
                : e.getAttribute(o.srcAttr) || e.getAttribute('src')),
              (e._lazypolyfill && e._lazypolyfill._set == s) ||
                ((r = c(s || '')),
                n &&
                  e.parentNode &&
                  ((r.isPicture =
                    'PICTURE' == e.parentNode.nodeName.toUpperCase()),
                  r.isPicture &&
                    t.matchMedia &&
                    (i.aC(e, 'lazymatchmedia'), u())),
                (r._set = s),
                Object.defineProperty(e, '_lazypolyfill', {
                  value: r,
                  writable: !0,
                }));
          },
          f = function (e) {
            var n = t.devicePixelRatio || 1,
              o = i.getX && i.getX(e);
            return Math.min(o || n, 2.5, n);
          },
          h = function (e) {
            return t.matchMedia
              ? (h = function (t) {
                  return !t || (matchMedia(t) || {}).matches;
                })(e)
              : !e;
          },
          p = function (t) {
            var e, n, s, a, c, u, p;
            if ((d((a = t), !0), (c = a._lazypolyfill).isPicture))
              for (
                n = 0,
                  s = (e = t.parentNode.getElementsByTagName('source')).length;
                s > n;
                n++
              )
                if (
                  o.supportsType(e[n].getAttribute('type'), t) &&
                  h(e[n].getAttribute('media'))
                ) {
                  (a = e[n]), d(a), (c = a._lazypolyfill);
                  break;
                }
            return (
              c.length > 1
                ? ((p = a.getAttribute('sizes') || ''),
                  (p = (l.test(p) && parseInt(p, 10)) || i.gW(t, t.parentNode)),
                  (c.d = f(t)),
                  !c.src || !c.w || c.w < p
                    ? ((c.w = p),
                      (u = (function (t) {
                        for (
                          var e, i, n = t.length, o = t[n - 1], r = 0;
                          n > r;
                          r++
                        )
                          if ((((o = t[r]).d = o.w / t.w), o.d >= t.d)) {
                            !o.cached &&
                              (e = t[r - 1]) &&
                              e.d > t.d - 0.13 * Math.pow(t.d, 2.2) &&
                              ((i = Math.pow(e.d - 0.6, 1.6)),
                              e.cached && (e.d += 0.15 * i),
                              e.d + (o.d - t.d) * i > t.d && (o = e));
                            break;
                          }
                        return o;
                      })(c.sort(r))),
                      (c.src = u))
                    : (u = c.src))
                : (u = c[0]),
              u
            );
          },
          m = function (t) {
            if (
              !s ||
              !t.parentNode ||
              'PICTURE' == t.parentNode.nodeName.toUpperCase()
            ) {
              var e = p(t);
              e &&
                e.u &&
                t._lazypolyfill.cur != e.u &&
                ((t._lazypolyfill.cur = e.u),
                (e.cached = !0),
                t.setAttribute(o.srcAttr, e.u),
                t.setAttribute('src', e.u));
            }
          };
        return (m.parse = c), m;
      })()),
      o.loadedClass &&
        o.loadingClass &&
        (function () {
          var t = [];
          ['img[sizes$="px"][srcset].', 'picture > img:not([srcset]).'].forEach(
            function (e) {
              t.push(e + o.loadedClass), t.push(e + o.loadingClass);
            }
          ),
            o.pf({ elements: e.querySelectorAll(t.join(', ')) });
        })();
  }
}),
  (function (t, e) {
    var i = function () {
      e(t.lazySizes), t.removeEventListener('lazyunveilread', i, !0);
    };
    (e = e.bind(null, t, t.document)),
      'object' == typeof module && module.exports
        ? e(require('lazysizes'))
        : t.lazySizes
        ? i()
        : t.addEventListener('lazyunveilread', i, !0);
  })(window, function (t, e, i) {
    'use strict';
    function n(e, i) {
      var n,
        o,
        r,
        s,
        a = t.getComputedStyle(e);
      for (n in ((o = e.parentNode),
      (s = { isPicture: !(!o || !d.test(o.nodeName || '')) }),
      (r = function (t, i) {
        var n = e.getAttribute('data-' + t);
        if (!n) {
          var o = a.getPropertyValue('--ls-' + t);
          o && (n = o.trim());
        }
        if (n) {
          if ('true' == n) n = !0;
          else if ('false' == n) n = !1;
          else if (u.test(n)) n = parseFloat(n);
          else if ('function' == typeof l[t]) n = l[t](e, n);
          else if (m.test(n))
            try {
              n = JSON.parse(n);
            } catch (t) {}
          s[t] = n;
        } else
          t in l && 'function' != typeof l[t]
            ? (s[t] = l[t])
            : i && 'function' == typeof l[t] && (s[t] = l[t](e, n));
      }),
      l))
        r(n);
      return (
        i.replace(p, function (t, e) {
          e in s || r(e, !0);
        }),
        s
      );
    }
    function o(t, i, n) {
      var o = 0,
        r = 0,
        s = n;
      if (t) {
        if ('container' === i.ratio) {
          for (o = s.scrollWidth, r = s.scrollHeight; !((o && r) || s === e); )
            (o = (s = s.parentNode).scrollWidth), (r = s.scrollHeight);
          o && r && (i.ratio = r / o);
        }
        ((t = (function (t, e) {
          var i = [];
          return (
            (i.srcset = []),
            e.absUrl && (v.setAttribute('href', t), (t = v.href)),
            (t = ((e.prefix || '') + t + (e.postfix || '')).replace(
              p,
              function (t, i) {
                return c[typeof e[i]] ? e[i] : t;
              }
            )),
            e.widths.forEach(function (n) {
              var o = e.widthmap[n] || n,
                r = {
                  u: t
                    .replace(f, o)
                    .replace(h, e.ratio ? Math.round(n * e.ratio) : ''),
                  w: n,
                };
              i.push(r), i.srcset.push((r.c = r.u + ' ' + n + 'w'));
            }),
            i
          );
        })(t, i)).isPicture = i.isPicture),
          b && 'IMG' == n.nodeName.toUpperCase()
            ? n.removeAttribute(a.srcsetAttr)
            : n.setAttribute(a.srcsetAttr, t.srcset.join(', ')),
          Object.defineProperty(n, '_lazyrias', { value: t, writable: !0 });
      }
    }
    function r(t, e) {
      var o = n(t, e);
      return (
        l.modifyOptions.call(t, { target: t, details: o, detail: o }),
        i.fire(t, 'lazyriasmodifyoptions', o),
        o
      );
    }
    function s(t) {
      return (
        t.getAttribute(t.getAttribute('data-srcattr') || l.srcAttr) ||
        t.getAttribute(a.srcsetAttr) ||
        t.getAttribute(a.srcAttr) ||
        t.getAttribute('data-pfsrcset') ||
        ''
      );
    }
    var a,
      l,
      c = { string: 1, number: 1 },
      u = /^\-*\+*\d+\.*\d*$/,
      d = /^picture$/i,
      f = /\s*\{\s*width\s*\}\s*/i,
      h = /\s*\{\s*height\s*\}\s*/i,
      p = /\s*\{\s*([a-z0-9]+)\s*\}\s*/gi,
      m = /^\[.*\]|\{.*\}$/,
      g = /^(?:auto|\d+(px)?)$/,
      v = e.createElement('a'),
      y = e.createElement('img'),
      b = 'srcset' in y && !('sizes' in y),
      x = !!t.HTMLPictureElement && !b;
    !(function () {
      var e,
        n = {
          prefix: '',
          postfix: '',
          srcAttr: 'data-src',
          absUrl: !1,
          modifyOptions: function () {},
          widthmap: {},
          ratio: !1,
        };
      for (e in ((a = (i && i.cfg) || t.lazySizesConfig) ||
        ((a = {}), (t.lazySizesConfig = a)),
      a.supportsType ||
        (a.supportsType = function (t) {
          return !t;
        }),
      a.rias || (a.rias = {}),
      'widths' in (l = a.rias) ||
        ((l.widths = []),
        (function (t) {
          for (var e, i = 0; !e || 3e3 > e; )
            (i += 5) > 30 && (i += 1), (e = 36 * i), t.push(e);
        })(l.widths)),
      n))
        e in l || (l[e] = n[e]);
    })(),
      addEventListener(
        'lazybeforesizes',
        function (t) {
          var e, n, c, u, d, h, p, m, v, y, b, S, C;
          if (
            t.detail.instance == i &&
            ((e = t.target),
            t.detail.dataAttr &&
              !t.defaultPrevented &&
              !l.disabled &&
              (v = e.getAttribute(a.sizesAttr) || e.getAttribute('sizes')) &&
              g.test(v))
          ) {
            if (
              ((c = r(e, (n = s(e)))),
              (b = f.test(c.prefix) || f.test(c.postfix)),
              c.isPicture && (u = e.parentNode))
            )
              for (
                h = 0, p = (d = u.getElementsByTagName('source')).length;
                p > h;
                h++
              )
                (b || f.test((m = s(d[h])))) && (o(m, c, d[h]), (S = !0));
            b || f.test(n)
              ? (o(n, c, e), (S = !0))
              : S &&
                (((C = []).srcset = []),
                (C.isPicture = !0),
                Object.defineProperty(e, '_lazyrias', {
                  value: C,
                  writable: !0,
                })),
              S &&
                (x
                  ? e.removeAttribute(a.srcAttr)
                  : 'auto' != v &&
                    ((y = { width: parseInt(v, 10) }),
                    w({ target: e, detail: y })));
          }
        },
        !0
      );
    var w = (function () {
      var n = function (t, e) {
          return t.w - e.w;
        },
        o = function (t, e) {
          var n;
          return (
            !t._lazyrias &&
              i.pWS &&
              (n = i.pWS(t.getAttribute(a.srcsetAttr || ''))).length &&
              (Object.defineProperty(t, '_lazyrias', {
                value: n,
                writable: !0,
              }),
              e &&
                t.parentNode &&
                (n.isPicture =
                  'PICTURE' == t.parentNode.nodeName.toUpperCase())),
            t._lazyrias
          );
        },
        r = function (e) {
          var n = t.devicePixelRatio || 1,
            o = i.getX && i.getX(e);
          return Math.min(o || n, 2.4, n);
        },
        s = function (e, i) {
          var s, a, l, c, u, d;
          if ((u = e._lazyrias).isPicture && t.matchMedia)
            for (
              a = 0,
                l = (s = e.parentNode.getElementsByTagName('source')).length;
              l > a;
              a++
            )
              if (
                o(s[a]) &&
                !s[a].getAttribute('type') &&
                (!(c = s[a].getAttribute('media')) ||
                  (matchMedia(c) || {}).matches)
              ) {
                u = s[a]._lazyrias;
                break;
              }
          return (
            (!u.w || u.w < i) &&
              ((u.w = i),
              (u.d = r(e)),
              (d = (function (t) {
                for (var e, i, n = t.length, o = t[n - 1], r = 0; n > r; r++)
                  if ((((o = t[r]).d = o.w / t.w), o.d >= t.d)) {
                    !o.cached &&
                      (e = t[r - 1]) &&
                      e.d > t.d - 0.13 * Math.pow(t.d, 2.2) &&
                      ((i = Math.pow(e.d - 0.6, 1.6)),
                      e.cached && (e.d += 0.15 * i),
                      e.d + (o.d - t.d) * i > t.d && (o = e));
                    break;
                  }
                return o;
              })(u.sort(n)))),
            d
          );
        },
        l = function (n) {
          if (n.detail.instance == i) {
            var r,
              c = n.target;
            return !b && (t.respimage || t.picturefill || lazySizesConfig.pf)
              ? void e.removeEventListener('lazybeforesizes', l)
              : void (
                  ('_lazyrias' in c || (n.detail.dataAttr && o(c, !0))) &&
                  ((r = s(c, n.detail.width)),
                  r &&
                    r.u &&
                    c._lazyrias.cur != r.u &&
                    ((c._lazyrias.cur = r.u),
                    (r.cached = !0),
                    i.rAF(function () {
                      c.setAttribute(a.srcAttr, r.u),
                        c.setAttribute('src', r.u);
                    })))
                );
          }
        };
      return (
        x ? (l = function () {}) : addEventListener('lazybeforesizes', l), l
      );
    })();
  }),
  (function (t, e) {
    var i = (function (t, e) {
      'use strict';
      if (e.getElementsByClassName) {
        var i,
          n,
          o = e.documentElement,
          r = t.Date,
          s = t.HTMLPictureElement,
          a = 'addEventListener',
          l = 'getAttribute',
          c = t[a],
          u = t.setTimeout,
          d = t.requestAnimationFrame || u,
          f = t.requestIdleCallback,
          h = /^picture$/i,
          p = ['load', 'error', 'lazyincluded', '_lazyloaded'],
          m = {},
          g = Array.prototype.forEach,
          v = function (t, e) {
            return (
              m[e] || (m[e] = new RegExp('(\\s|^)' + e + '(\\s|$)')),
              m[e].test(t[l]('class') || '') && m[e]
            );
          },
          y = function (t, e) {
            v(t, e) ||
              t.setAttribute('class', (t[l]('class') || '').trim() + ' ' + e);
          },
          b = function (t, e) {
            var i;
            (i = v(t, e)) &&
              t.setAttribute('class', (t[l]('class') || '').replace(i, ' '));
          },
          x = function (t, e, i) {
            var n = i ? a : 'removeEventListener';
            i && x(t, e),
              p.forEach(function (i) {
                t[n](i, e);
              });
          },
          w = function (t, n, o, r, s) {
            var a = e.createEvent('CustomEvent');
            return (
              o || (o = {}),
              (o.instance = i),
              a.initCustomEvent(n, !r, !s, o),
              t.dispatchEvent(a),
              a
            );
          },
          S = function (e, i) {
            var o;
            !s && (o = t.picturefill || n.pf)
              ? o({ reevaluate: !0, elements: [e] })
              : i && i.src && (e.src = i.src);
          },
          C = function (t, e) {
            return (getComputedStyle(t, null) || {})[e];
          },
          E = function (t, e, i) {
            for (
              i = i || t.offsetWidth;
              i < n.minSize && e && !t._lazysizesWidth;

            )
              (i = e.offsetWidth), (e = e.parentNode);
            return i;
          },
          z = (function () {
            var t,
              i,
              n = [],
              o = [],
              r = n,
              s = function () {
                var e = r;
                for (r = n.length ? o : n, t = !0, i = !1; e.length; )
                  e.shift()();
                t = !1;
              },
              a = function (n, o) {
                t && !o
                  ? n.apply(this, arguments)
                  : (r.push(n), i || ((i = !0), (e.hidden ? u : d)(s)));
              };
            return (a._lsFlush = s), a;
          })(),
          D = function (t, e) {
            return e
              ? function () {
                  z(t);
                }
              : function () {
                  var e = this,
                    i = arguments;
                  z(function () {
                    t.apply(e, i);
                  });
                };
          },
          k = function (t) {
            var e,
              i = 0,
              o = n.throttleDelay,
              s = n.ricTimeout,
              a = function () {
                (e = !1), (i = r.now()), t();
              },
              l =
                f && s > 49
                  ? function () {
                      f(a, { timeout: s }),
                        s !== n.ricTimeout && (s = n.ricTimeout);
                    }
                  : D(function () {
                      u(a);
                    }, !0);
            return function (t) {
              var n;
              (t = !0 === t) && (s = 33),
                e ||
                  ((e = !0),
                  (n = o - (r.now() - i)) < 0 && (n = 0),
                  t || n < 9 ? l() : u(l, n));
            };
          },
          P = function (t) {
            var e,
              i,
              n = function () {
                (e = null), t();
              },
              o = function () {
                var t = r.now() - i;
                t < 99 ? u(o, 99 - t) : (f || n)(n);
              };
            return function () {
              (i = r.now()), e || (e = u(o, 99));
            };
          };
        !(function () {
          var e,
            i = {
              lazyClass: 'lazyload',
              loadedClass: 'lazyloaded',
              loadingClass: 'lazyloading',
              preloadClass: 'lazypreload',
              errorClass: 'lazyerror',
              autosizesClass: 'lazyautosizes',
              srcAttr: 'data-src',
              srcsetAttr: 'data-srcset',
              sizesAttr: 'data-sizes',
              minSize: 40,
              customMedia: {},
              init: !0,
              expFactor: 1.5,
              hFac: 0.8,
              loadMode: 2,
              loadHidden: !0,
              ricTimeout: 0,
              throttleDelay: 125,
            };
          for (e in ((n = t.lazySizesConfig || t.lazysizesConfig || {}), i))
            e in n || (n[e] = i[e]);
          (t.lazySizesConfig = n),
            u(function () {
              n.init && T();
            });
        })();
        var A = (function () {
            var s,
              d,
              f,
              p,
              m,
              E,
              A,
              T,
              M,
              I,
              L,
              N,
              O,
              F,
              U = /^img$/i,
              R = /^iframe$/i,
              j = 'onscroll' in t && !/glebot/.test(navigator.userAgent),
              W = 0,
              H = 0,
              V = -1,
              q = function (t) {
                H--,
                  t && t.target && x(t.target, q),
                  (!t || H < 0 || !t.target) && (H = 0);
              },
              B = function (t, i) {
                var n,
                  r = t,
                  s =
                    'hidden' == C(e.body, 'visibility') ||
                    'hidden' != C(t, 'visibility');
                for (
                  T -= i, L += i, M -= i, I += i;
                  s && (r = r.offsetParent) && r != e.body && r != o;

                )
                  (s = (C(r, 'opacity') || 1) > 0) &&
                    'visible' != C(r, 'overflow') &&
                    ((n = r.getBoundingClientRect()),
                    (s =
                      I > n.left &&
                      M < n.right &&
                      L > n.top - 1 &&
                      T < n.bottom + 1));
                return s;
              },
              Z = function () {
                var t,
                  r,
                  a,
                  c,
                  u,
                  f,
                  h,
                  m,
                  g,
                  v = i.elements;
                if ((p = n.loadMode) && H < 8 && (t = v.length)) {
                  (r = 0),
                    V++,
                    null == O &&
                      ('expand' in n ||
                        (n.expand =
                          o.clientHeight > 500 && o.clientWidth > 500
                            ? 500
                            : 370),
                      (N = n.expand),
                      (O = N * n.expFactor)),
                    W < O && H < 1 && V > 2 && p > 2 && !e.hidden
                      ? ((W = O), (V = 0))
                      : (W = p > 1 && V > 1 && H < 6 ? N : 0);
                  for (; r < t; r++)
                    if (v[r] && !v[r]._lazyRace)
                      if (j)
                        if (
                          (((m = v[r][l]('data-expand')) && (f = 1 * m)) ||
                            (f = W),
                          g !== f &&
                            ((E = innerWidth + f * F),
                            (A = innerHeight + f),
                            (h = -1 * f),
                            (g = f)),
                          (a = v[r].getBoundingClientRect()),
                          (L = a.bottom) >= h &&
                            (T = a.top) <= A &&
                            (I = a.right) >= h * F &&
                            (M = a.left) <= E &&
                            (L || I || M || T) &&
                            (n.loadHidden ||
                              'hidden' != C(v[r], 'visibility')) &&
                            ((d && H < 3 && !m && (p < 3 || V < 4)) ||
                              B(v[r], f)))
                        ) {
                          if ((Q(v[r]), (u = !0), H > 9)) break;
                        } else
                          !u &&
                            d &&
                            !c &&
                            H < 4 &&
                            V < 4 &&
                            p > 2 &&
                            (s[0] || n.preloadAfterLoad) &&
                            (s[0] ||
                              (!m &&
                                (L ||
                                  I ||
                                  M ||
                                  T ||
                                  'auto' != v[r][l](n.sizesAttr)))) &&
                            (c = s[0] || v[r]);
                      else Q(v[r]);
                  c && !u && Q(c);
                }
              },
              X = k(Z),
              G = function (t) {
                y(t.target, n.loadedClass),
                  b(t.target, n.loadingClass),
                  x(t.target, K),
                  w(t.target, 'lazyloaded');
              },
              Y = D(G),
              K = function (t) {
                Y({ target: t.target });
              },
              $ = function (t) {
                var e,
                  i = t[l](n.srcsetAttr);
                (e = n.customMedia[t[l]('data-media') || t[l]('media')]) &&
                  t.setAttribute('media', e),
                  i && t.setAttribute('srcset', i);
              },
              J = D(function (t, e, i, o, r) {
                var s, a, c, d, p, m;
                (p = w(t, 'lazybeforeunveil', e)).defaultPrevented ||
                  (o &&
                    (i ? y(t, n.autosizesClass) : t.setAttribute('sizes', o)),
                  (a = t[l](n.srcsetAttr)),
                  (s = t[l](n.srcAttr)),
                  r && (d = (c = t.parentNode) && h.test(c.nodeName || '')),
                  (m = e.firesLoad || ('src' in t && (a || s || d))),
                  (p = { target: t }),
                  m &&
                    (x(t, q, !0),
                    clearTimeout(f),
                    (f = u(q, 2500)),
                    y(t, n.loadingClass),
                    x(t, K, !0)),
                  d && g.call(c.getElementsByTagName('source'), $),
                  a
                    ? t.setAttribute('srcset', a)
                    : s &&
                      !d &&
                      (R.test(t.nodeName)
                        ? (function (t, e) {
                            try {
                              t.contentWindow.location.replace(e);
                            } catch (i) {
                              t.src = e;
                            }
                          })(t, s)
                        : (t.src = s)),
                  r && (a || d) && S(t, { src: s })),
                  t._lazyRace && delete t._lazyRace,
                  b(t, n.lazyClass),
                  z(function () {
                    (!m || (t.complete && t.naturalWidth > 1)) &&
                      (m ? q(p) : H--, G(p));
                  }, !0);
              }),
              Q = function (t) {
                var e,
                  i = U.test(t.nodeName),
                  o = i && (t[l](n.sizesAttr) || t[l]('sizes')),
                  r = 'auto' == o;
                ((!r && d) ||
                  !i ||
                  (!t[l]('src') && !t.srcset) ||
                  t.complete ||
                  v(t, n.errorClass) ||
                  !v(t, n.lazyClass)) &&
                  ((e = w(t, 'lazyunveilread').detail),
                  r && _.updateElem(t, !0, t.offsetWidth),
                  (t._lazyRace = !0),
                  H++,
                  J(t, e, r, o, i));
              },
              tt = function () {
                if (!d) {
                  if (r.now() - m < 999) return void u(tt, 999);
                  var t = P(function () {
                    (n.loadMode = 3), X();
                  });
                  (d = !0),
                    (n.loadMode = 3),
                    X(),
                    c(
                      'scroll',
                      function () {
                        3 == n.loadMode && (n.loadMode = 2), t();
                      },
                      !0
                    );
                }
              };
            return {
              _: function () {
                (m = r.now()),
                  (i.elements = e.getElementsByClassName(n.lazyClass)),
                  (s = e.getElementsByClassName(
                    n.lazyClass + ' ' + n.preloadClass
                  )),
                  (F = n.hFac),
                  c('scroll', X, !0),
                  c('resize', X, !0),
                  t.MutationObserver
                    ? new MutationObserver(X).observe(o, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0,
                      })
                    : (o[a]('DOMNodeInserted', X, !0),
                      o[a]('DOMAttrModified', X, !0),
                      setInterval(X, 999)),
                  c('hashchange', X, !0),
                  [
                    'focus',
                    'mouseover',
                    'click',
                    'load',
                    'transitionend',
                    'animationend',
                    'webkitAnimationEnd',
                  ].forEach(function (t) {
                    e[a](t, X, !0);
                  }),
                  /d$|^c/.test(e.readyState)
                    ? tt()
                    : (c('load', tt), e[a]('DOMContentLoaded', X), u(tt, 2e4)),
                  i.elements.length ? (Z(), z._lsFlush()) : X();
              },
              checkElems: X,
              unveil: Q,
            };
          })(),
          _ = (function () {
            var t,
              i = D(function (t, e, i, n) {
                var o, r, s;
                if (
                  ((t._lazysizesWidth = n),
                  (n += 'px'),
                  t.setAttribute('sizes', n),
                  h.test(e.nodeName || ''))
                )
                  for (
                    r = 0, s = (o = e.getElementsByTagName('source')).length;
                    r < s;
                    r++
                  )
                    o[r].setAttribute('sizes', n);
                i.detail.dataAttr || S(t, i.detail);
              }),
              o = function (t, e, n) {
                var o,
                  r = t.parentNode;
                r &&
                  ((n = E(t, r, n)),
                  (o = w(t, 'lazybeforesizes', { width: n, dataAttr: !!e }))
                    .defaultPrevented ||
                    ((n = o.detail.width) &&
                      n !== t._lazysizesWidth &&
                      i(t, r, o, n)));
              },
              r = P(function () {
                var e,
                  i = t.length;
                if (i) for (e = 0; e < i; e++) o(t[e]);
              });
            return {
              _: function () {
                (t = e.getElementsByClassName(n.autosizesClass)),
                  c('resize', r);
              },
              checkElems: r,
              updateElem: o,
            };
          })(),
          T = function () {
            T.i || ((T.i = !0), _._(), A._());
          };
        return (i = {
          cfg: n,
          autoSizer: _,
          loader: A,
          init: T,
          uP: S,
          aC: y,
          rC: b,
          hC: v,
          fire: w,
          gW: E,
          rAF: z,
        });
      }
    })(t, t.document);
    (t.lazySizes = i),
      'object' == typeof module && module.exports && (module.exports = i);
  })(window),
  (function (t, e) {
    'object' == typeof exports && 'object' == typeof module
      ? (module.exports = e())
      : 'function' == typeof define && define.amd
      ? define([], e)
      : 'object' == typeof exports
      ? (exports.AOS = e())
      : (t.AOS = e());
  })(this, function () {
    return (function (t) {
      function e(n) {
        if (i[n]) return i[n].exports;
        var o = (i[n] = { exports: {}, id: n, loaded: !1 });
        return (
          t[n].call(o.exports, o, o.exports, e), (o.loaded = !0), o.exports
        );
      }
      var i = {};
      return (e.m = t), (e.c = i), (e.p = 'dist/'), e(0);
    })([
      function (t, e, i) {
        'use strict';
        function n(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var o =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                  Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
              }
              return t;
            },
          r = (n(i(1)), i(6)),
          s = n(r),
          a = n(i(7)),
          l = n(i(8)),
          c = n(i(9)),
          u = n(i(10)),
          d = n(i(11)),
          f = n(i(14)),
          h = [],
          p = !1,
          m = document.all && !window.atob,
          g = {
            offset: 120,
            delay: 0,
            easing: 'ease',
            duration: 400,
            disable: !1,
            once: !1,
            startEvent: 'DOMContentLoaded',
            disableMutationObserver: !1,
          },
          v = function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if ((t && (p = !0), p))
              return (h = (0, d.default)(h, g)), (0, u.default)(h, g.once), h;
          },
          y = function () {
            (h = (0, f.default)()), v();
          };
        t.exports = {
          init: function (t) {
            return (
              (g = o(g, t)),
              (h = (0, f.default)()),
              (function (t) {
                return (
                  !0 === t ||
                  ('mobile' === t && c.default.mobile()) ||
                  ('phone' === t && c.default.phone()) ||
                  ('tablet' === t && c.default.tablet()) ||
                  ('function' == typeof t && !0 === t())
                );
              })(g.disable) || m
                ? void h.forEach(function (t, e) {
                    t.node.removeAttribute('data-aos'),
                      t.node.removeAttribute('data-aos-easing'),
                      t.node.removeAttribute('data-aos-duration'),
                      t.node.removeAttribute('data-aos-delay');
                  })
                : (document
                    .querySelector('body')
                    .setAttribute('data-aos-easing', g.easing),
                  document
                    .querySelector('body')
                    .setAttribute('data-aos-duration', g.duration),
                  document
                    .querySelector('body')
                    .setAttribute('data-aos-delay', g.delay),
                  'DOMContentLoaded' === g.startEvent &&
                  ['complete', 'interactive'].indexOf(document.readyState) > -1
                    ? v(!0)
                    : 'load' === g.startEvent
                    ? window.addEventListener(g.startEvent, function () {
                        v(!0);
                      })
                    : document.addEventListener(g.startEvent, function () {
                        v(!0);
                      }),
                  window.addEventListener('resize', (0, a.default)(v, 50, !0)),
                  window.addEventListener(
                    'orientationchange',
                    (0, a.default)(v, 50, !0)
                  ),
                  window.addEventListener(
                    'scroll',
                    (0, s.default)(function () {
                      (0, u.default)(h, g.once);
                    }, 99)
                  ),
                  g.disableMutationObserver || (0, l.default)('[data-aos]', y),
                  h)
            );
          },
          refresh: v,
          refreshHard: y,
        };
      },
      function (t, e) {},
      ,
      ,
      ,
      ,
      function (t, e) {
        (function (e) {
          'use strict';
          function i(t, e, i) {
            function o(e) {
              var i = f,
                n = h;
              return (f = h = void 0), (y = e), (m = t.apply(n, i));
            }
            function s(t) {
              return (y = t), (g = setTimeout(c, e)), S ? o(t) : m;
            }
            function l(t) {
              var i = t - v;
              return void 0 === v || i >= e || i < 0 || (C && t - y >= p);
            }
            function c() {
              var t = w();
              return l(t)
                ? u(t)
                : void (g = setTimeout(
                    c,
                    (function (t) {
                      var i = e - (t - v);
                      return C ? x(i, p - (t - y)) : i;
                    })(t)
                  ));
            }
            function u(t) {
              return (g = void 0), E && f ? o(t) : ((f = h = void 0), m);
            }
            function d() {
              var t = w(),
                i = l(t);
              if (((f = arguments), (h = this), (v = t), i)) {
                if (void 0 === g) return s(v);
                if (C) return (g = setTimeout(c, e)), o(v);
              }
              return void 0 === g && (g = setTimeout(c, e)), m;
            }
            var f,
              h,
              p,
              m,
              g,
              v,
              y = 0,
              S = !1,
              C = !1,
              E = !0;
            if ('function' != typeof t) throw new TypeError(a);
            return (
              (e = r(e) || 0),
              n(i) &&
                ((S = !!i.leading),
                (p = (C = 'maxWait' in i) ? b(r(i.maxWait) || 0, e) : p),
                (E = 'trailing' in i ? !!i.trailing : E)),
              (d.cancel = function () {
                void 0 !== g && clearTimeout(g),
                  (y = 0),
                  (f = v = h = g = void 0);
              }),
              (d.flush = function () {
                return void 0 === g ? m : u(w());
              }),
              d
            );
          }
          function n(t) {
            var e = void 0 === t ? 'undefined' : s(t);
            return !!t && ('object' == e || 'function' == e);
          }
          function o(t) {
            return (
              'symbol' == (void 0 === t ? 'undefined' : s(t)) ||
              ((function (t) {
                return !!t && 'object' == (void 0 === t ? 'undefined' : s(t));
              })(t) &&
                y.call(t) == c)
            );
          }
          function r(t) {
            if ('number' == typeof t) return t;
            if (o(t)) return l;
            if (n(t)) {
              var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
              t = n(e) ? e + '' : e;
            }
            if ('string' != typeof t) return 0 === t ? t : +t;
            t = t.replace(u, '');
            var i = f.test(t);
            return i || h.test(t)
              ? p(t.slice(2), i ? 2 : 8)
              : d.test(t)
              ? l
              : +t;
          }
          var s =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  },
            a = 'Expected a function',
            l = NaN,
            c = '[object Symbol]',
            u = /^\s+|\s+$/g,
            d = /^[-+]0x[0-9a-f]+$/i,
            f = /^0b[01]+$/i,
            h = /^0o[0-7]+$/i,
            p = parseInt,
            m =
              'object' == (void 0 === e ? 'undefined' : s(e)) &&
              e &&
              e.Object === Object &&
              e,
            g =
              'object' ==
                ('undefined' == typeof self ? 'undefined' : s(self)) &&
              self &&
              self.Object === Object &&
              self,
            v = m || g || Function('return this')(),
            y = Object.prototype.toString,
            b = Math.max,
            x = Math.min,
            w = function () {
              return v.Date.now();
            };
          t.exports = function (t, e, o) {
            var r = !0,
              s = !0;
            if ('function' != typeof t) throw new TypeError(a);
            return (
              n(o) &&
                ((r = 'leading' in o ? !!o.leading : r),
                (s = 'trailing' in o ? !!o.trailing : s)),
              i(t, e, { leading: r, maxWait: e, trailing: s })
            );
          };
        }.call(
          e,
          (function () {
            return this;
          })()
        ));
      },
      function (t, e) {
        (function (e) {
          'use strict';
          function i(t) {
            var e = void 0 === t ? 'undefined' : r(t);
            return !!t && ('object' == e || 'function' == e);
          }
          function n(t) {
            return (
              'symbol' == (void 0 === t ? 'undefined' : r(t)) ||
              ((function (t) {
                return !!t && 'object' == (void 0 === t ? 'undefined' : r(t));
              })(t) &&
                v.call(t) == l)
            );
          }
          function o(t) {
            if ('number' == typeof t) return t;
            if (n(t)) return a;
            if (i(t)) {
              var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
              t = i(e) ? e + '' : e;
            }
            if ('string' != typeof t) return 0 === t ? t : +t;
            t = t.replace(c, '');
            var o = d.test(t);
            return o || f.test(t)
              ? h(t.slice(2), o ? 2 : 8)
              : u.test(t)
              ? a
              : +t;
          }
          var r =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  },
            s = 'Expected a function',
            a = NaN,
            l = '[object Symbol]',
            c = /^\s+|\s+$/g,
            u = /^[-+]0x[0-9a-f]+$/i,
            d = /^0b[01]+$/i,
            f = /^0o[0-7]+$/i,
            h = parseInt,
            p =
              'object' == (void 0 === e ? 'undefined' : r(e)) &&
              e &&
              e.Object === Object &&
              e,
            m =
              'object' ==
                ('undefined' == typeof self ? 'undefined' : r(self)) &&
              self &&
              self.Object === Object &&
              self,
            g = p || m || Function('return this')(),
            v = Object.prototype.toString,
            y = Math.max,
            b = Math.min,
            x = function () {
              return g.Date.now();
            };
          t.exports = function (t, e, n) {
            function r(e) {
              var i = f,
                n = h;
              return (f = h = void 0), (w = e), (m = t.apply(n, i));
            }
            function a(t) {
              return (w = t), (g = setTimeout(c, e)), S ? r(t) : m;
            }
            function l(t) {
              var i = t - v;
              return void 0 === v || i >= e || i < 0 || (C && t - w >= p);
            }
            function c() {
              var t = x();
              return l(t)
                ? u(t)
                : void (g = setTimeout(
                    c,
                    (function (t) {
                      var i = e - (t - v);
                      return C ? b(i, p - (t - w)) : i;
                    })(t)
                  ));
            }
            function u(t) {
              return (g = void 0), E && f ? r(t) : ((f = h = void 0), m);
            }
            function d() {
              var t = x(),
                i = l(t);
              if (((f = arguments), (h = this), (v = t), i)) {
                if (void 0 === g) return a(v);
                if (C) return (g = setTimeout(c, e)), r(v);
              }
              return void 0 === g && (g = setTimeout(c, e)), m;
            }
            var f,
              h,
              p,
              m,
              g,
              v,
              w = 0,
              S = !1,
              C = !1,
              E = !0;
            if ('function' != typeof t) throw new TypeError(s);
            return (
              (e = o(e) || 0),
              i(n) &&
                ((S = !!n.leading),
                (p = (C = 'maxWait' in n) ? y(o(n.maxWait) || 0, e) : p),
                (E = 'trailing' in n ? !!n.trailing : E)),
              (d.cancel = function () {
                void 0 !== g && clearTimeout(g),
                  (w = 0),
                  (f = v = h = g = void 0);
              }),
              (d.flush = function () {
                return void 0 === g ? m : u(x());
              }),
              d
            );
          };
        }.call(
          e,
          (function () {
            return this;
          })()
        ));
      },
      function (t, e) {
        'use strict';
        function i(t) {
          t &&
            t.forEach(function (t) {
              var e = Array.prototype.slice.call(t.addedNodes),
                i = Array.prototype.slice.call(t.removedNodes);
              e.concat(i).filter(function (t) {
                return t.hasAttribute && t.hasAttribute('data-aos');
              }).length && r();
            });
        }
        Object.defineProperty(e, '__esModule', { value: !0 });
        var n = window.document,
          o = window.MutationObserver || window.WebKitMutationObserver,
          r = function () {};
        e.default = function (t, e) {
          var s = new o(i);
          (r = e),
            s.observe(n.documentElement, {
              childList: !0,
              subtree: !0,
              removedNodes: !0,
            });
        };
      },
      function (t, e) {
        'use strict';
        function i() {
          return navigator.userAgent || navigator.vendor || window.opera || '';
        }
        Object.defineProperty(e, '__esModule', { value: !0 });
        var n = (function () {
            function t(t, e) {
              for (var i = 0; i < e.length; i++) {
                var n = e[i];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  'value' in n && (n.writable = !0),
                  Object.defineProperty(t, n.key, n);
              }
            }
            return function (e, i, n) {
              return i && t(e.prototype, i), n && t(e, n), e;
            };
          })(),
          o =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          r =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          s =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
          a =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          l = (function () {
            function t() {
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, t);
            }
            return (
              n(t, [
                {
                  key: 'phone',
                  value: function () {
                    var t = i();
                    return !(!o.test(t) && !r.test(t.substr(0, 4)));
                  },
                },
                {
                  key: 'mobile',
                  value: function () {
                    var t = i();
                    return !(!s.test(t) && !a.test(t.substr(0, 4)));
                  },
                },
                {
                  key: 'tablet',
                  value: function () {
                    return this.mobile() && !this.phone();
                  },
                },
              ]),
              t
            );
          })();
        e.default = new l();
      },
      function (t, e) {
        'use strict';
        Object.defineProperty(e, '__esModule', { value: !0 });
        e.default = function (t, e) {
          var i = window.pageYOffset,
            n = window.innerHeight;
          t.forEach(function (t, o) {
            !(function (t, e, i) {
              var n = t.node.getAttribute('data-aos-once');
              e > t.position
                ? t.node.classList.add('aos-animate')
                : void 0 !== n &&
                  ('false' === n || (!i && 'true' !== n)) &&
                  t.node.classList.remove('aos-animate');
            })(t, n + i, e);
          });
        };
      },
      function (t, e, i) {
        'use strict';
        Object.defineProperty(e, '__esModule', { value: !0 });
        var n = (function (t) {
          return t && t.__esModule ? t : { default: t };
        })(i(12));
        e.default = function (t, e) {
          return (
            t.forEach(function (t, i) {
              t.node.classList.add('aos-init'),
                (t.position = (0, n.default)(t.node, e.offset));
            }),
            t
          );
        };
      },
      function (t, e, i) {
        'use strict';
        Object.defineProperty(e, '__esModule', { value: !0 });
        var n = (function (t) {
          return t && t.__esModule ? t : { default: t };
        })(i(13));
        e.default = function (t, e) {
          var i = 0,
            o = 0,
            r = window.innerHeight,
            s = {
              offset: t.getAttribute('data-aos-offset'),
              anchor: t.getAttribute('data-aos-anchor'),
              anchorPlacement: t.getAttribute('data-aos-anchor-placement'),
            };
          switch (
            (s.offset && !isNaN(s.offset) && (o = parseInt(s.offset)),
            s.anchor &&
              document.querySelectorAll(s.anchor) &&
              (t = document.querySelectorAll(s.anchor)[0]),
            (i = (0, n.default)(t).top),
            s.anchorPlacement)
          ) {
            case 'top-bottom':
              break;
            case 'center-bottom':
              i += t.offsetHeight / 2;
              break;
            case 'bottom-bottom':
              i += t.offsetHeight;
              break;
            case 'top-center':
              i += r / 2;
              break;
            case 'bottom-center':
              i += r / 2 + t.offsetHeight;
              break;
            case 'center-center':
              i += r / 2 + t.offsetHeight / 2;
              break;
            case 'top-top':
              i += r;
              break;
            case 'bottom-top':
              i += t.offsetHeight + r;
              break;
            case 'center-top':
              i += t.offsetHeight / 2 + r;
          }
          return s.anchorPlacement || s.offset || isNaN(e) || (o = e), i + o;
        };
      },
      function (t, e) {
        'use strict';
        Object.defineProperty(e, '__esModule', { value: !0 });
        e.default = function (t) {
          for (
            var e = 0, i = 0;
            t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);

          )
            (e += t.offsetLeft - ('BODY' != t.tagName ? t.scrollLeft : 0)),
              (i += t.offsetTop - ('BODY' != t.tagName ? t.scrollTop : 0)),
              (t = t.offsetParent);
          return { top: i, left: e };
        };
      },
      function (t, e) {
        'use strict';
        Object.defineProperty(e, '__esModule', { value: !0 });
        e.default = function (t) {
          t = t || document.querySelectorAll('[data-aos]');
          var e = [];
          return (
            [].forEach.call(t, function (t, i) {
              e.push({ node: t });
            }),
            e
          );
        };
      },
    ]);
  }),
  (function (t) {
    var e = !1;
    if (
      ('function' == typeof define && define.amd && (define(t), (e = !0)),
      'object' == typeof exports && ((module.exports = t()), (e = !0)),
      !e)
    ) {
      var i = window.Cookies,
        n = (window.Cookies = t());
      n.noConflict = function () {
        return (window.Cookies = i), n;
      };
    }
  })(function () {
    function t() {
      for (var t = 0, e = {}; t < arguments.length; t++) {
        var i = arguments[t];
        for (var n in i) e[n] = i[n];
      }
      return e;
    }
    return (function e(i) {
      function n(e, o, r) {
        var s;
        if ('undefined' != typeof document) {
          if (arguments.length > 1) {
            if (
              'number' == typeof (r = t({ path: '/' }, n.defaults, r)).expires
            ) {
              var a = new Date();
              a.setMilliseconds(a.getMilliseconds() + 864e5 * r.expires),
                (r.expires = a);
            }
            r.expires = r.expires ? r.expires.toUTCString() : '';
            try {
              (s = JSON.stringify(o)), /^[\{\[]/.test(s) && (o = s);
            } catch (t) {}
            (o = i.write
              ? i.write(o, e)
              : encodeURIComponent(String(o)).replace(
                  /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                  decodeURIComponent
                )),
              (e = (e = (e = encodeURIComponent(String(e))).replace(
                /%(23|24|26|2B|5E|60|7C)/g,
                decodeURIComponent
              )).replace(/[\(\)]/g, escape));
            var l = '';
            for (var c in r)
              r[c] && ((l += '; ' + c), !0 !== r[c] && (l += '=' + r[c]));
            return (document.cookie = e + '=' + o + l);
          }
          e || (s = {});
          for (
            var u = document.cookie ? document.cookie.split('; ') : [],
              d = /(%[0-9A-Z]{2})+/g,
              f = 0;
            f < u.length;
            f++
          ) {
            var h = u[f].split('='),
              p = h.slice(1).join('=');
            this.json || '"' !== p.charAt(0) || (p = p.slice(1, -1));
            try {
              var m = h[0].replace(d, decodeURIComponent);
              if (
                ((p = i.read
                  ? i.read(p, m)
                  : i(p, m) || p.replace(d, decodeURIComponent)),
                this.json)
              )
                try {
                  p = JSON.parse(p);
                } catch (t) {}
              if (e === m) {
                s = p;
                break;
              }
              e || (s[m] = p);
            } catch (t) {}
          }
          return s;
        }
      }
      return (
        (n.set = n),
        (n.get = function (t) {
          return n.call(n, t);
        }),
        (n.getJSON = function () {
          return n.apply({ json: !0 }, [].slice.call(arguments));
        }),
        (n.defaults = {}),
        (n.remove = function (e, i) {
          n(e, '', t(i, { expires: -1 }));
        }),
        (n.withConverter = e),
        n
      );
    })(function () {});
  }),
  /*!
   * Flickity PACKAGED v2.3.0
   * Touch, responsive, flickable carousels
   *
   * Licensed GPLv3 for open source use
   * or Flickity Commercial License for commercial use
   *
   * https://flickity.metafizzy.co
   * Copyright 2015-2021 Metafizzy
   */
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define('ev-emitter/ev-emitter', e)
      : 'object' == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })('undefined' != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            n = (i[t] = i[t] || []);
          return -1 == n.indexOf(e) && n.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {});
          return ((i[t] = i[t] || {})[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = i.indexOf(e);
          return -1 != n && i.splice(n, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var n = this._onceEvents && this._onceEvents[t], o = 0;
            o < i.length;
            o++
          ) {
            var r = i[o];
            n && n[r] && (this.off(t, r), delete n[r]), r.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  /*!
   * getSize v2.0.3
   * measure size of elements
   * MIT license
   */
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define('get-size/get-size', e)
      : 'object' == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    'use strict';
    function t(t) {
      var e = parseFloat(t);
      return -1 == t.indexOf('%') && !isNaN(e) && e;
    }
    var e = [
        'paddingLeft',
        'paddingRight',
        'paddingTop',
        'paddingBottom',
        'marginLeft',
        'marginRight',
        'marginTop',
        'marginBottom',
        'borderLeftWidth',
        'borderRightWidth',
        'borderTopWidth',
        'borderBottomWidth',
      ],
      i = e.length;
    function n(t) {
      return getComputedStyle(t);
    }
    var o,
      r = !1;
    function s(a) {
      if (
        ((function () {
          if (!r) {
            r = !0;
            var e = document.createElement('div');
            (e.style.width = '200px'),
              (e.style.padding = '1px 2px 3px 4px'),
              (e.style.borderStyle = 'solid'),
              (e.style.borderWidth = '1px 2px 3px 4px'),
              (e.style.boxSizing = 'border-box');
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var a = n(e);
            (o = 200 == Math.round(t(a.width))),
              (s.isBoxSizeOuter = o),
              i.removeChild(e);
          }
        })(),
        'string' == typeof a && (a = document.querySelector(a)),
        a && 'object' == typeof a && a.nodeType)
      ) {
        var l = n(a);
        if ('none' == l.display)
          return (function () {
            for (
              var t = {
                  width: 0,
                  height: 0,
                  innerWidth: 0,
                  innerHeight: 0,
                  outerWidth: 0,
                  outerHeight: 0,
                },
                n = 0;
              n < i;
              n++
            ) {
              t[e[n]] = 0;
            }
            return t;
          })();
        var c = {};
        (c.width = a.offsetWidth), (c.height = a.offsetHeight);
        for (
          var u = (c.isBorderBox = 'border-box' == l.boxSizing), d = 0;
          d < i;
          d++
        ) {
          var f = e[d],
            h = l[f],
            p = parseFloat(h);
          c[f] = isNaN(p) ? 0 : p;
        }
        var m = c.paddingLeft + c.paddingRight,
          g = c.paddingTop + c.paddingBottom,
          v = c.marginLeft + c.marginRight,
          y = c.marginTop + c.marginBottom,
          b = c.borderLeftWidth + c.borderRightWidth,
          x = c.borderTopWidth + c.borderBottomWidth,
          w = u && o,
          S = t(l.width);
        !1 !== S && (c.width = S + (w ? 0 : m + b));
        var C = t(l.height);
        return (
          !1 !== C && (c.height = C + (w ? 0 : g + x)),
          (c.innerWidth = c.width - (m + b)),
          (c.innerHeight = c.height - (g + x)),
          (c.outerWidth = c.width + v),
          (c.outerHeight = c.height + y),
          c
        );
      }
    }
    return s;
  }),
  (function (t, e) {
    'use strict';
    'function' == typeof define && define.amd
      ? define('desandro-matches-selector/matches-selector', e)
      : 'object' == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    'use strict';
    var t = (function () {
      var t = window.Element.prototype;
      if (t.matches) return 'matches';
      if (t.matchesSelector) return 'matchesSelector';
      for (var e = ['webkit', 'moz', 'ms', 'o'], i = 0; i < e.length; i++) {
        var n = e[i] + 'MatchesSelector';
        if (t[n]) return n;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(
          'fizzy-ui-utils/utils',
          ['desandro-matches-selector/matches-selector'],
          function (i) {
            return e(t, i);
          }
        )
      : 'object' == typeof module && module.exports
      ? (module.exports = e(t, require('desandro-matches-selector')))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {
        extend: function (t, e) {
          for (var i in e) t[i] = e[i];
          return t;
        },
        modulo: function (t, e) {
          return ((t % e) + e) % e;
        },
      },
      n = Array.prototype.slice;
    return (
      (i.makeArray = function (t) {
        return Array.isArray(t)
          ? t
          : null == t
          ? []
          : 'object' == typeof t && 'number' == typeof t.length
          ? n.call(t)
          : [t];
      }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1);
      }),
      (i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function (t) {
        return 'string' == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function (t) {
        var e = 'on' + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function (t, n) {
        t = i.makeArray(t);
        var o = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement)
              if (n) {
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++)
                  o.push(i[r]);
              } else o.push(t);
          }),
          o
        );
      }),
      (i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var n = t.prototype[e],
          o = e + 'Timeout';
        t.prototype[e] = function () {
          var t = this[o];
          clearTimeout(t);
          var e = arguments,
            r = this;
          this[o] = setTimeout(function () {
            n.apply(r, e), delete r[o];
          }, i);
        };
      }),
      (i.docReady = function (t) {
        var e = document.readyState;
        'complete' == e || 'interactive' == e
          ? setTimeout(t)
          : document.addEventListener('DOMContentLoaded', t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + '-' + i;
          })
          .toLowerCase();
      }),
      (i.htmlInit = function (t, e) {
        i.docReady(function () {
          var n = i.toDashed(e),
            o = 'data-' + n,
            r = document.querySelectorAll('[' + o + ']'),
            s = document.querySelectorAll('.js-' + n),
            a = i.makeArray(r).concat(i.makeArray(s)),
            l = o + '-options';
          a.forEach(function (e) {
            var i,
              n = e.getAttribute(o) || e.getAttribute(l);
            try {
              i = n && JSON.parse(n);
            } catch (t) {
              return;
            }
            new t(e, i);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define('flickity/js/cell', ['get-size/get-size'], function (i) {
          return e(t, i);
        })
      : 'object' == typeof module && module.exports
      ? (module.exports = e(t, require('get-size')))
      : ((t.Flickity = t.Flickity || {}), (t.Flickity.Cell = e(t, t.getSize)));
  })(window, function (t, e) {
    function i(t, e) {
      (this.element = t), (this.parent = e), this.create();
    }
    var n = i.prototype;
    return (
      (n.create = function () {
        (this.element.style.position = 'absolute'),
          this.element.setAttribute('aria-hidden', 'true'),
          (this.x = 0),
          (this.shift = 0),
          (this.element.style[this.parent.originSide] = 0);
      }),
      (n.destroy = function () {
        this.unselect(), (this.element.style.position = '');
        var t = this.parent.originSide;
        (this.element.style[t] = ''),
          (this.element.style.transform = ''),
          this.element.removeAttribute('aria-hidden');
      }),
      (n.getSize = function () {
        this.size = e(this.element);
      }),
      (n.setPosition = function (t) {
        (this.x = t), this.updateTarget(), this.renderPosition(t);
      }),
      (n.updateTarget = n.setDefaultTarget =
        function () {
          var t =
            'left' == this.parent.originSide ? 'marginLeft' : 'marginRight';
          this.target =
            this.x + this.size[t] + this.size.width * this.parent.cellAlign;
        }),
      (n.renderPosition = function (t) {
        var e = 'left' === this.parent.originSide ? 1 : -1,
          i = this.parent.options.percentPosition
            ? t * e * (this.parent.size.innerWidth / this.size.width)
            : t * e;
        this.element.style.transform =
          'translateX(' + this.parent.getPositionValue(i) + ')';
      }),
      (n.select = function () {
        this.element.classList.add('is-selected'),
          this.element.removeAttribute('aria-hidden');
      }),
      (n.unselect = function () {
        this.element.classList.remove('is-selected'),
          this.element.setAttribute('aria-hidden', 'true');
      }),
      (n.wrapShift = function (t) {
        (this.shift = t),
          this.renderPosition(this.x + this.parent.slideableWidth * t);
      }),
      (n.remove = function () {
        this.element.parentNode.removeChild(this.element);
      }),
      i
    );
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define('flickity/js/slide', e)
      : 'object' == typeof module && module.exports
      ? (module.exports = e())
      : ((t.Flickity = t.Flickity || {}), (t.Flickity.Slide = e()));
  })(window, function () {
    'use strict';
    function t(t) {
      (this.parent = t),
        (this.isOriginLeft = 'left' == t.originSide),
        (this.cells = []),
        (this.outerWidth = 0),
        (this.height = 0);
    }
    var e = t.prototype;
    return (
      (e.addCell = function (t) {
        if (
          (this.cells.push(t),
          (this.outerWidth += t.size.outerWidth),
          (this.height = Math.max(t.size.outerHeight, this.height)),
          1 == this.cells.length)
        ) {
          this.x = t.x;
          var e = this.isOriginLeft ? 'marginLeft' : 'marginRight';
          this.firstMargin = t.size[e];
        }
      }),
      (e.updateTarget = function () {
        var t = this.isOriginLeft ? 'marginRight' : 'marginLeft',
          e = this.getLastCell(),
          i = e ? e.size[t] : 0,
          n = this.outerWidth - (this.firstMargin + i);
        this.target = this.x + this.firstMargin + n * this.parent.cellAlign;
      }),
      (e.getLastCell = function () {
        return this.cells[this.cells.length - 1];
      }),
      (e.select = function () {
        this.cells.forEach(function (t) {
          t.select();
        });
      }),
      (e.unselect = function () {
        this.cells.forEach(function (t) {
          t.unselect();
        });
      }),
      (e.getCellElements = function () {
        return this.cells.map(function (t) {
          return t.element;
        });
      }),
      t
    );
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define('flickity/js/animate', ['fizzy-ui-utils/utils'], function (i) {
          return e(t, i);
        })
      : 'object' == typeof module && module.exports
      ? (module.exports = e(t, require('fizzy-ui-utils')))
      : ((t.Flickity = t.Flickity || {}),
        (t.Flickity.animatePrototype = e(t, t.fizzyUIUtils)));
  })(window, function (t, e) {
    var i = {
      startAnimation: function () {
        this.isAnimating ||
          ((this.isAnimating = !0), (this.restingFrames = 0), this.animate());
      },
      animate: function () {
        this.applyDragForce(), this.applySelectedAttraction();
        var t = this.x;
        if (
          (this.integratePhysics(),
          this.positionSlider(),
          this.settle(t),
          this.isAnimating)
        ) {
          var e = this;
          requestAnimationFrame(function () {
            e.animate();
          });
        }
      },
      positionSlider: function () {
        var t = this.x;
        this.options.wrapAround &&
          this.cells.length > 1 &&
          ((t = e.modulo(t, this.slideableWidth)),
          (t -= this.slideableWidth),
          this.shiftWrapCells(t)),
          this.setTranslateX(t, this.isAnimating),
          this.dispatchScrollEvent();
      },
      setTranslateX: function (t, e) {
        (t += this.cursorPosition), (t = this.options.rightToLeft ? -t : t);
        var i = this.getPositionValue(t);
        this.slider.style.transform = e
          ? 'translate3d(' + i + ',0,0)'
          : 'translateX(' + i + ')';
      },
      dispatchScrollEvent: function () {
        var t = this.slides[0];
        if (t) {
          var e = -this.x - t.target,
            i = e / this.slidesWidth;
          this.dispatchEvent('scroll', null, [i, e]);
        }
      },
      positionSliderAtSelected: function () {
        this.cells.length &&
          ((this.x = -this.selectedSlide.target),
          (this.velocity = 0),
          this.positionSlider());
      },
      getPositionValue: function (t) {
        return this.options.percentPosition
          ? 0.01 * Math.round((t / this.size.innerWidth) * 1e4) + '%'
          : Math.round(t) + 'px';
      },
      settle: function (t) {
        !this.isPointerDown &&
          Math.round(100 * this.x) == Math.round(100 * t) &&
          this.restingFrames++,
          this.restingFrames > 2 &&
            ((this.isAnimating = !1),
            delete this.isFreeScrolling,
            this.positionSlider(),
            this.dispatchEvent('settle', null, [this.selectedIndex]));
      },
      shiftWrapCells: function (t) {
        var e = this.cursorPosition + t;
        this._shiftCells(this.beforeShiftCells, e, -1);
        var i =
          this.size.innerWidth -
          (t + this.slideableWidth + this.cursorPosition);
        this._shiftCells(this.afterShiftCells, i, 1);
      },
      _shiftCells: function (t, e, i) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n],
            r = e > 0 ? i : 0;
          o.wrapShift(r), (e -= o.size.outerWidth);
        }
      },
      _unshiftCells: function (t) {
        if (t && t.length) for (var e = 0; e < t.length; e++) t[e].wrapShift(0);
      },
      integratePhysics: function () {
        (this.x += this.velocity), (this.velocity *= this.getFrictionFactor());
      },
      applyForce: function (t) {
        this.velocity += t;
      },
      getFrictionFactor: function () {
        return (
          1 -
          this.options[this.isFreeScrolling ? 'freeScrollFriction' : 'friction']
        );
      },
      getRestingPosition: function () {
        return this.x + this.velocity / (1 - this.getFrictionFactor());
      },
      applyDragForce: function () {
        if (this.isDraggable && this.isPointerDown) {
          var t = this.dragX - this.x - this.velocity;
          this.applyForce(t);
        }
      },
      applySelectedAttraction: function () {
        if (
          !(this.isDraggable && this.isPointerDown) &&
          !this.isFreeScrolling &&
          this.slides.length
        ) {
          var t =
            (-1 * this.selectedSlide.target - this.x) *
            this.options.selectedAttraction;
          this.applyForce(t);
        }
      },
    };
    return i;
  }),
  (function (t, e) {
    if ('function' == typeof define && define.amd)
      define('flickity/js/flickity', [
        'ev-emitter/ev-emitter',
        'get-size/get-size',
        'fizzy-ui-utils/utils',
        './cell',
        './slide',
        './animate',
      ], function (i, n, o, r, s, a) {
        return e(t, i, n, o, r, s, a);
      });
    else if ('object' == typeof module && module.exports)
      module.exports = e(
        t,
        require('ev-emitter'),
        require('get-size'),
        require('fizzy-ui-utils'),
        require('./cell'),
        require('./slide'),
        require('./animate')
      );
    else {
      var i = t.Flickity;
      t.Flickity = e(
        t,
        t.EvEmitter,
        t.getSize,
        t.fizzyUIUtils,
        i.Cell,
        i.Slide,
        i.animatePrototype
      );
    }
  })(window, function (t, e, i, n, o, r, s) {
    t.getComputedStyle;
    function a(t, e) {
      for (t = n.makeArray(t); t.length; ) e.appendChild(t.shift());
    }
    var l = 0,
      c = {};
    function u(t, e) {
      var i = n.getQueryElement(t);
      if (i) {
        if (((this.element = i), this.element.flickityGUID)) {
          var o = c[this.element.flickityGUID];
          return o && o.option(e), o;
        }
        (this.options = n.extend({}, this.constructor.defaults)),
          this.option(e),
          this._create();
      }
    }
    (u.defaults = {
      accessibility: !0,
      adaptiveHeight: !1,
      cellAlign: 'center',
      freeScrollFriction: 0.075,
      friction: 0.28,
      initialIndex: 0,
      percentPosition: !0,
      resize: !0,
      selectedAttraction: 0.025,
      setGallerySize: !0,
      wrapAround: !1,
    }),
      (u.createMethods = []);
    var d = u.prototype;
    n.extend(d, e.prototype),
      (d._create = function () {
        var t = (this.guid = ++l);
        for (var e in ((this.element.flickityGUID = t),
        (c[t] = this),
        (this.selectedIndex = 0),
        (this.restingFrames = 0),
        (this.x = 0),
        (this.velocity = 0),
        (this.originSide = this.options.rightToLeft ? 'right' : 'left'),
        (this.viewport = document.createElement('div')),
        (this.viewport.className = 'flickity-viewport'),
        this._createSlider(),
        this.options.on)) {
          var i = this.options.on[e];
          this.on(e, i);
        }
        u.createMethods.forEach(function (t) {
          this[t]();
        }, this),
          this.activate();
      }),
      (d.option = function (t) {
        n.extend(this.options, t);
      }),
      (d.activate = function () {
        this.isActive ||
          ((this.isActive = !0),
          this.element.classList.add('flickity-enabled'),
          this.options.rightToLeft &&
            this.element.classList.add('flickity-rtl'),
          this.getSize(),
          a(this._filterFindCellElements(this.element.children), this.slider),
          this.viewport.appendChild(this.slider),
          this.element.appendChild(this.viewport),
          this.reloadCells(),
          this.options.accessibility &&
            ((this.element.tabIndex = 0),
            this.element.addEventListener('keydown', this)),
          this.emitEvent('activate'),
          this.selectInitialIndex(),
          (this.isInitActivated = !0),
          this.dispatchEvent('ready', null, [this.element]));
      }),
      (d._createSlider = function () {
        var t = document.createElement('div');
        (t.className = 'flickity-slider'),
          (t.style[this.originSide] = 0),
          (this.slider = t);
      }),
      (d._filterFindCellElements = function (t) {
        return n.filterFindElements(t, this.options.cellSelector);
      }),
      (d.reloadCells = function () {
        (this.cells = this._makeCells(this.slider.children)),
          this.positionCells(),
          this._getWrapShiftCells(),
          this.setGallerySize();
      }),
      (d._makeCells = function (t) {
        return this._filterFindCellElements(t).map(function (t) {
          return new o(t, this);
        }, this);
      }),
      (d.getLastCell = function () {
        return this.cells[this.cells.length - 1];
      }),
      (d.getLastSlide = function () {
        return this.slides[this.slides.length - 1];
      }),
      (d.positionCells = function () {
        this._sizeCells(this.cells), this._positionCells(0);
      }),
      (d._positionCells = function (t) {
        (t = t || 0), (this.maxCellHeight = (t && this.maxCellHeight) || 0);
        var e = 0;
        if (t > 0) {
          var i = this.cells[t - 1];
          e = i.x + i.size.outerWidth;
        }
        for (var n = this.cells.length, o = t; o < n; o++) {
          var r = this.cells[o];
          r.setPosition(e),
            (e += r.size.outerWidth),
            (this.maxCellHeight = Math.max(
              r.size.outerHeight,
              this.maxCellHeight
            ));
        }
        (this.slideableWidth = e),
          this.updateSlides(),
          this._containSlides(),
          (this.slidesWidth = n
            ? this.getLastSlide().target - this.slides[0].target
            : 0);
      }),
      (d._sizeCells = function (t) {
        t.forEach(function (t) {
          t.getSize();
        });
      }),
      (d.updateSlides = function () {
        if (((this.slides = []), this.cells.length)) {
          var t = new r(this);
          this.slides.push(t);
          var e = 'left' == this.originSide ? 'marginRight' : 'marginLeft',
            i = this._getCanCellFit();
          this.cells.forEach(function (n, o) {
            if (t.cells.length) {
              var s =
                t.outerWidth - t.firstMargin + (n.size.outerWidth - n.size[e]);
              i.call(this, o, s) ||
                (t.updateTarget(), (t = new r(this)), this.slides.push(t)),
                t.addCell(n);
            } else t.addCell(n);
          }, this),
            t.updateTarget(),
            this.updateSelectedSlide();
        }
      }),
      (d._getCanCellFit = function () {
        var t = this.options.groupCells;
        if (!t)
          return function () {
            return !1;
          };
        if ('number' == typeof t) {
          var e = parseInt(t, 10);
          return function (t) {
            return t % e != 0;
          };
        }
        var i = 'string' == typeof t && t.match(/^(\d+)%$/),
          n = i ? parseInt(i[1], 10) / 100 : 1;
        return function (t, e) {
          return e <= (this.size.innerWidth + 1) * n;
        };
      }),
      (d.reposition = function () {
        this.positionCells(), this.positionSliderAtSelected();
      }),
      (d.getSize = function () {
        (this.size = i(this.element)),
          this.setCellAlign(),
          (this.cursorPosition = this.size.innerWidth * this.cellAlign);
      });
    var f = {
      center: { left: 0.5, right: 0.5 },
      left: { left: 0, right: 1 },
      right: { right: 0, left: 1 },
    };
    return (
      (d.setCellAlign = function () {
        var t = f[this.options.cellAlign];
        this.cellAlign = t ? t[this.originSide] : this.options.cellAlign;
      }),
      (d.setGallerySize = function () {
        if (this.options.setGallerySize) {
          var t =
            this.options.adaptiveHeight && this.selectedSlide
              ? this.selectedSlide.height
              : this.maxCellHeight;
          this.viewport.style.height = t + 'px';
        }
      }),
      (d._getWrapShiftCells = function () {
        if (this.options.wrapAround) {
          this._unshiftCells(this.beforeShiftCells),
            this._unshiftCells(this.afterShiftCells);
          var t = this.cursorPosition,
            e = this.cells.length - 1;
          (this.beforeShiftCells = this._getGapCells(t, e, -1)),
            (t = this.size.innerWidth - this.cursorPosition),
            (this.afterShiftCells = this._getGapCells(t, 0, 1));
        }
      }),
      (d._getGapCells = function (t, e, i) {
        for (var n = []; t > 0; ) {
          var o = this.cells[e];
          if (!o) break;
          n.push(o), (e += i), (t -= o.size.outerWidth);
        }
        return n;
      }),
      (d._containSlides = function () {
        if (
          this.options.contain &&
          !this.options.wrapAround &&
          this.cells.length
        ) {
          var t = this.options.rightToLeft,
            e = t ? 'marginRight' : 'marginLeft',
            i = t ? 'marginLeft' : 'marginRight',
            n = this.slideableWidth - this.getLastCell().size[i],
            o = n < this.size.innerWidth,
            r = this.cursorPosition + this.cells[0].size[e],
            s = n - this.size.innerWidth * (1 - this.cellAlign);
          this.slides.forEach(function (t) {
            o
              ? (t.target = n * this.cellAlign)
              : ((t.target = Math.max(t.target, r)),
                (t.target = Math.min(t.target, s)));
          }, this);
        }
      }),
      (d.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        this.emitEvent(t, n);
      }),
      (d.select = function (t, e, i) {
        if (
          this.isActive &&
          ((t = parseInt(t, 10)),
          this._wrapSelect(t),
          (this.options.wrapAround || e) &&
            (t = n.modulo(t, this.slides.length)),
          this.slides[t])
        ) {
          var o = this.selectedIndex;
          (this.selectedIndex = t),
            this.updateSelectedSlide(),
            i ? this.positionSliderAtSelected() : this.startAnimation(),
            this.options.adaptiveHeight && this.setGallerySize(),
            this.dispatchEvent('select', null, [t]),
            t != o && this.dispatchEvent('change', null, [t]),
            this.dispatchEvent('cellSelect');
        }
      }),
      (d._wrapSelect = function (t) {
        var e = this.slides.length;
        if (!(this.options.wrapAround && e > 1)) return t;
        var i = n.modulo(t, e),
          o = Math.abs(i - this.selectedIndex),
          r = Math.abs(i + e - this.selectedIndex),
          s = Math.abs(i - e - this.selectedIndex);
        !this.isDragSelect && r < o
          ? (t += e)
          : !this.isDragSelect && s < o && (t -= e),
          t < 0
            ? (this.x -= this.slideableWidth)
            : t >= e && (this.x += this.slideableWidth);
      }),
      (d.previous = function (t, e) {
        this.select(this.selectedIndex - 1, t, e);
      }),
      (d.next = function (t, e) {
        this.select(this.selectedIndex + 1, t, e);
      }),
      (d.updateSelectedSlide = function () {
        var t = this.slides[this.selectedIndex];
        t &&
          (this.unselectSelectedSlide(),
          (this.selectedSlide = t),
          t.select(),
          (this.selectedCells = t.cells),
          (this.selectedElements = t.getCellElements()),
          (this.selectedCell = t.cells[0]),
          (this.selectedElement = this.selectedElements[0]));
      }),
      (d.unselectSelectedSlide = function () {
        this.selectedSlide && this.selectedSlide.unselect();
      }),
      (d.selectInitialIndex = function () {
        var t = this.options.initialIndex;
        if (this.isInitActivated) this.select(this.selectedIndex, !1, !0);
        else {
          if (t && 'string' == typeof t)
            if (this.queryCell(t)) return void this.selectCell(t, !1, !0);
          var e = 0;
          t && this.slides[t] && (e = t), this.select(e, !1, !0);
        }
      }),
      (d.selectCell = function (t, e, i) {
        var n = this.queryCell(t);
        if (n) {
          var o = this.getCellSlideIndex(n);
          this.select(o, e, i);
        }
      }),
      (d.getCellSlideIndex = function (t) {
        for (var e = 0; e < this.slides.length; e++) {
          if (-1 != this.slides[e].cells.indexOf(t)) return e;
        }
      }),
      (d.getCell = function (t) {
        for (var e = 0; e < this.cells.length; e++) {
          var i = this.cells[e];
          if (i.element == t) return i;
        }
      }),
      (d.getCells = function (t) {
        t = n.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getCell(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (d.getCellElements = function () {
        return this.cells.map(function (t) {
          return t.element;
        });
      }),
      (d.getParentCell = function (t) {
        var e = this.getCell(t);
        return (
          e || ((t = n.getParent(t, '.flickity-slider > *')), this.getCell(t))
        );
      }),
      (d.getAdjacentCellElements = function (t, e) {
        if (!t) return this.selectedSlide.getCellElements();
        e = void 0 === e ? this.selectedIndex : e;
        var i = this.slides.length;
        if (1 + 2 * t >= i) return this.getCellElements();
        for (var o = [], r = e - t; r <= e + t; r++) {
          var s = this.options.wrapAround ? n.modulo(r, i) : r,
            a = this.slides[s];
          a && (o = o.concat(a.getCellElements()));
        }
        return o;
      }),
      (d.queryCell = function (t) {
        if ('number' == typeof t) return this.cells[t];
        if ('string' == typeof t) {
          if (t.match(/^[#.]?[\d/]/)) return;
          t = this.element.querySelector(t);
        }
        return this.getCell(t);
      }),
      (d.uiChange = function () {
        this.emitEvent('uiChange');
      }),
      (d.childUIPointerDown = function (t) {
        'touchstart' != t.type && t.preventDefault(), this.focus();
      }),
      (d.onresize = function () {
        this.resize();
      }),
      n.debounceMethod(u, 'onresize', 150),
      (d.resize = function () {
        if (this.isActive && !this.isAnimating && !this.isDragging) {
          this.getSize(),
            this.options.wrapAround &&
              (this.x = n.modulo(this.x, this.slideableWidth)),
            this.positionCells(),
            this._getWrapShiftCells(),
            this.setGallerySize(),
            this.emitEvent('resize');
          var t = this.selectedElements && this.selectedElements[0];
          this.selectCell(t, !1, !0);
        }
      }),
      (d.onkeydown = function (t) {
        var e =
          document.activeElement && document.activeElement != this.element;
        if (this.options.accessibility && !e) {
          var i = u.keyboardHandlers[t.keyCode];
          i && i.call(this);
        }
      }),
      (u.keyboardHandlers = {
        37: function () {
          var t = this.options.rightToLeft ? 'next' : 'previous';
          this.uiChange(), this[t]();
        },
        39: function () {
          var t = this.options.rightToLeft ? 'previous' : 'next';
          this.uiChange(), this[t]();
        },
      }),
      (d.focus = function () {
        var e = t.pageYOffset;
        this.element.focus({ preventScroll: !0 }),
          t.pageYOffset != e && t.scrollTo(t.pageXOffset, e);
      }),
      (d.deactivate = function () {
        this.isActive &&
          (this.element.classList.remove('flickity-enabled'),
          this.element.classList.remove('flickity-rtl'),
          this.unselectSelectedSlide(),
          this.cells.forEach(function (t) {
            t.destroy();
          }),
          this.element.removeChild(this.viewport),
          a(this.slider.children, this.element),
          this.options.accessibility &&
            (this.element.removeAttribute('tabIndex'),
            this.element.removeEventListener('keydown', this)),
          (this.isActive = !1),
          this.emitEvent('deactivate'));
      }),
      (d.destroy = function () {
        this.deactivate(),
          t.removeEventListener('resize', this),
          this.allOff(),
          this.emitEvent('destroy'),
          delete this.element.flickityGUID,
          delete c[this.guid];
      }),
      n.extend(d, s),
      (u.data = function (t) {
        var e = (t = n.getQueryElement(t)) && t.flickityGUID;
        return e && c[e];
      }),
      n.htmlInit(u, 'flickity'),
      (u.Cell = o),
      (u.Slide = r),
      u
    );
  }),
  /*!
   * Unipointer v2.4.0
   * base class for doing one thing with pointer event
   * MIT license
   */
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(
          'unipointer/unipointer',
          ['ev-emitter/ev-emitter'],
          function (i) {
            return e(t, i);
          }
        )
      : 'object' == typeof module && module.exports
      ? (module.exports = e(t, require('ev-emitter')))
      : (t.Unipointer = e(t, t.EvEmitter));
  })(window, function (t, e) {
    function i() {}
    var n = (i.prototype = Object.create(e.prototype));
    (n.bindStartEvent = function (t) {
      this._bindStartEvent(t, !0);
    }),
      (n.unbindStartEvent = function (t) {
        this._bindStartEvent(t, !1);
      }),
      (n._bindStartEvent = function (e, i) {
        var n = (i = void 0 === i || i)
            ? 'addEventListener'
            : 'removeEventListener',
          o = 'mousedown';
        'ontouchstart' in t
          ? (o = 'touchstart')
          : t.PointerEvent && (o = 'pointerdown'),
          e[n](o, this);
      }),
      (n.handleEvent = function (t) {
        var e = 'on' + t.type;
        this[e] && this[e](t);
      }),
      (n.getTouch = function (t) {
        for (var e = 0; e < t.length; e++) {
          var i = t[e];
          if (i.identifier == this.pointerIdentifier) return i;
        }
      }),
      (n.onmousedown = function (t) {
        var e = t.button;
        (e && 0 !== e && 1 !== e) || this._pointerDown(t, t);
      }),
      (n.ontouchstart = function (t) {
        this._pointerDown(t, t.changedTouches[0]);
      }),
      (n.onpointerdown = function (t) {
        this._pointerDown(t, t);
      }),
      (n._pointerDown = function (t, e) {
        t.button ||
          this.isPointerDown ||
          ((this.isPointerDown = !0),
          (this.pointerIdentifier =
            void 0 !== e.pointerId ? e.pointerId : e.identifier),
          this.pointerDown(t, e));
      }),
      (n.pointerDown = function (t, e) {
        this._bindPostStartEvents(t), this.emitEvent('pointerDown', [t, e]);
      });
    var o = {
      mousedown: ['mousemove', 'mouseup'],
      touchstart: ['touchmove', 'touchend', 'touchcancel'],
      pointerdown: ['pointermove', 'pointerup', 'pointercancel'],
    };
    return (
      (n._bindPostStartEvents = function (e) {
        if (e) {
          var i = o[e.type];
          i.forEach(function (e) {
            t.addEventListener(e, this);
          }, this),
            (this._boundPointerEvents = i);
        }
      }),
      (n._unbindPostStartEvents = function () {
        this._boundPointerEvents &&
          (this._boundPointerEvents.forEach(function (e) {
            t.removeEventListener(e, this);
          }, this),
          delete this._boundPointerEvents);
      }),
      (n.onmousemove = function (t) {
        this._pointerMove(t, t);
      }),
      (n.onpointermove = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t);
      }),
      (n.ontouchmove = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e);
      }),
      (n._pointerMove = function (t, e) {
        this.pointerMove(t, e);
      }),
      (n.pointerMove = function (t, e) {
        this.emitEvent('pointerMove', [t, e]);
      }),
      (n.onmouseup = function (t) {
        this._pointerUp(t, t);
      }),
      (n.onpointerup = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t);
      }),
      (n.ontouchend = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e);
      }),
      (n._pointerUp = function (t, e) {
        this._pointerDone(), this.pointerUp(t, e);
      }),
      (n.pointerUp = function (t, e) {
        this.emitEvent('pointerUp', [t, e]);
      }),
      (n._pointerDone = function () {
        this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone();
      }),
      (n._pointerReset = function () {
        (this.isPointerDown = !1), delete this.pointerIdentifier;
      }),
      (n.pointerDone = function () {}),
      (n.onpointercancel = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t);
      }),
      (n.ontouchcancel = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e);
      }),
      (n._pointerCancel = function (t, e) {
        this._pointerDone(), this.pointerCancel(t, e);
      }),
      (n.pointerCancel = function (t, e) {
        this.emitEvent('pointerCancel', [t, e]);
      }),
      (i.getPointerPoint = function (t) {
        return { x: t.pageX, y: t.pageY };
      }),
      i
    );
  }),
  /*!
   * Unidragger v2.4.0
   * Draggable base class
   * MIT license
   */
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(
          'unidragger/unidragger',
          ['unipointer/unipointer'],
          function (i) {
            return e(t, i);
          }
        )
      : 'object' == typeof module && module.exports
      ? (module.exports = e(t, require('unipointer')))
      : (t.Unidragger = e(t, t.Unipointer));
  })(window, function (t, e) {
    function i() {}
    var n = (i.prototype = Object.create(e.prototype));
    (n.bindHandles = function () {
      this._bindHandles(!0);
    }),
      (n.unbindHandles = function () {
        this._bindHandles(!1);
      }),
      (n._bindHandles = function (e) {
        for (
          var i = (e = void 0 === e || e)
              ? 'addEventListener'
              : 'removeEventListener',
            n = e ? this._touchActionValue : '',
            o = 0;
          o < this.handles.length;
          o++
        ) {
          var r = this.handles[o];
          this._bindStartEvent(r, e),
            r[i]('click', this),
            t.PointerEvent && (r.style.touchAction = n);
        }
      }),
      (n._touchActionValue = 'none'),
      (n.pointerDown = function (t, e) {
        this.okayPointerDown(t) &&
          ((this.pointerDownPointer = { pageX: e.pageX, pageY: e.pageY }),
          t.preventDefault(),
          this.pointerDownBlur(),
          this._bindPostStartEvents(t),
          this.emitEvent('pointerDown', [t, e]));
      });
    var o = { TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0 },
      r = {
        radio: !0,
        checkbox: !0,
        button: !0,
        submit: !0,
        image: !0,
        file: !0,
      };
    return (
      (n.okayPointerDown = function (t) {
        var e = o[t.target.nodeName],
          i = r[t.target.type],
          n = !e || i;
        return n || this._pointerReset(), n;
      }),
      (n.pointerDownBlur = function () {
        var t = document.activeElement;
        t && t.blur && t != document.body && t.blur();
      }),
      (n.pointerMove = function (t, e) {
        var i = this._dragPointerMove(t, e);
        this.emitEvent('pointerMove', [t, e, i]), this._dragMove(t, e, i);
      }),
      (n._dragPointerMove = function (t, e) {
        var i = {
          x: e.pageX - this.pointerDownPointer.pageX,
          y: e.pageY - this.pointerDownPointer.pageY,
        };
        return (
          !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i
        );
      }),
      (n.hasDragStarted = function (t) {
        return Math.abs(t.x) > 3 || Math.abs(t.y) > 3;
      }),
      (n.pointerUp = function (t, e) {
        this.emitEvent('pointerUp', [t, e]), this._dragPointerUp(t, e);
      }),
      (n._dragPointerUp = function (t, e) {
        this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e);
      }),
      (n._dragStart = function (t, e) {
        (this.isDragging = !0),
          (this.isPreventingClicks = !0),
          this.dragStart(t, e);
      }),
      (n.dragStart = function (t, e) {
        this.emitEvent('dragStart', [t, e]);
      }),
      (n._dragMove = function (t, e, i) {
        this.isDragging && this.dragMove(t, e, i);
      }),
      (n.dragMove = function (t, e, i) {
        t.preventDefault(), this.emitEvent('dragMove', [t, e, i]);
      }),
      (n._dragEnd = function (t, e) {
        (this.isDragging = !1),
          setTimeout(
            function () {
              delete this.isPreventingClicks;
            }.bind(this)
          ),
          this.dragEnd(t, e);
      }),
      (n.dragEnd = function (t, e) {
        this.emitEvent('dragEnd', [t, e]);
      }),
      (n.onclick = function (t) {
        this.isPreventingClicks && t.preventDefault();
      }),
      (n._staticClick = function (t, e) {
        (this.isIgnoringMouseUp && 'mouseup' == t.type) ||
          (this.staticClick(t, e),
          'mouseup' != t.type &&
            ((this.isIgnoringMouseUp = !0),
            setTimeout(
              function () {
                delete this.isIgnoringMouseUp;
              }.bind(this),
              400
            )));
      }),
      (n.staticClick = function (t, e) {
        this.emitEvent('staticClick', [t, e]);
      }),
      (i.getPointerPoint = e.getPointerPoint),
      i
    );
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(
          'flickity/js/drag',
          ['./flickity', 'unidragger/unidragger', 'fizzy-ui-utils/utils'],
          function (i, n, o) {
            return e(t, i, n, o);
          }
        )
      : 'object' == typeof module && module.exports
      ? (module.exports = e(
          t,
          require('./flickity'),
          require('unidragger'),
          require('fizzy-ui-utils')
        ))
      : (t.Flickity = e(t, t.Flickity, t.Unidragger, t.fizzyUIUtils));
  })(window, function (t, e, i, n) {
    n.extend(e.defaults, { draggable: '>1', dragThreshold: 3 }),
      e.createMethods.push('_createDrag');
    var o = e.prototype;
    n.extend(o, i.prototype),
      (o._touchActionValue = 'pan-y'),
      (o._createDrag = function () {
        this.on('activate', this.onActivateDrag),
          this.on('uiChange', this._uiChangeDrag),
          this.on('deactivate', this.onDeactivateDrag),
          this.on('cellChange', this.updateDraggable);
      }),
      (o.onActivateDrag = function () {
        (this.handles = [this.viewport]),
          this.bindHandles(),
          this.updateDraggable();
      }),
      (o.onDeactivateDrag = function () {
        this.unbindHandles(), this.element.classList.remove('is-draggable');
      }),
      (o.updateDraggable = function () {
        '>1' == this.options.draggable
          ? (this.isDraggable = this.slides.length > 1)
          : (this.isDraggable = this.options.draggable),
          this.isDraggable
            ? this.element.classList.add('is-draggable')
            : this.element.classList.remove('is-draggable');
      }),
      (o.bindDrag = function () {
        (this.options.draggable = !0), this.updateDraggable();
      }),
      (o.unbindDrag = function () {
        (this.options.draggable = !1), this.updateDraggable();
      }),
      (o._uiChangeDrag = function () {
        delete this.isFreeScrolling;
      }),
      (o.pointerDown = function (e, i) {
        this.isDraggable
          ? this.okayPointerDown(e) &&
            (this._pointerDownPreventDefault(e),
            this.pointerDownFocus(e),
            document.activeElement != this.element && this.pointerDownBlur(),
            (this.dragX = this.x),
            this.viewport.classList.add('is-pointer-down'),
            (this.pointerDownScroll = s()),
            t.addEventListener('scroll', this),
            this._pointerDownDefault(e, i))
          : this._pointerDownDefault(e, i);
      }),
      (o._pointerDownDefault = function (t, e) {
        (this.pointerDownPointer = { pageX: e.pageX, pageY: e.pageY }),
          this._bindPostStartEvents(t),
          this.dispatchEvent('pointerDown', t, [e]);
      });
    var r = { INPUT: !0, TEXTAREA: !0, SELECT: !0 };
    function s() {
      return { x: t.pageXOffset, y: t.pageYOffset };
    }
    return (
      (o.pointerDownFocus = function (t) {
        r[t.target.nodeName] || this.focus();
      }),
      (o._pointerDownPreventDefault = function (t) {
        var e = 'touchstart' == t.type,
          i = 'touch' == t.pointerType,
          n = r[t.target.nodeName];
        e || i || n || t.preventDefault();
      }),
      (o.hasDragStarted = function (t) {
        return Math.abs(t.x) > this.options.dragThreshold;
      }),
      (o.pointerUp = function (t, e) {
        delete this.isTouchScrolling,
          this.viewport.classList.remove('is-pointer-down'),
          this.dispatchEvent('pointerUp', t, [e]),
          this._dragPointerUp(t, e);
      }),
      (o.pointerDone = function () {
        t.removeEventListener('scroll', this), delete this.pointerDownScroll;
      }),
      (o.dragStart = function (e, i) {
        this.isDraggable &&
          ((this.dragStartPosition = this.x),
          this.startAnimation(),
          t.removeEventListener('scroll', this),
          this.dispatchEvent('dragStart', e, [i]));
      }),
      (o.pointerMove = function (t, e) {
        var i = this._dragPointerMove(t, e);
        this.dispatchEvent('pointerMove', t, [e, i]), this._dragMove(t, e, i);
      }),
      (o.dragMove = function (t, e, i) {
        if (this.isDraggable) {
          t.preventDefault(), (this.previousDragX = this.dragX);
          var n = this.options.rightToLeft ? -1 : 1;
          this.options.wrapAround && (i.x %= this.slideableWidth);
          var o = this.dragStartPosition + i.x * n;
          if (!this.options.wrapAround && this.slides.length) {
            var r = Math.max(-this.slides[0].target, this.dragStartPosition);
            o = o > r ? 0.5 * (o + r) : o;
            var s = Math.min(
              -this.getLastSlide().target,
              this.dragStartPosition
            );
            o = o < s ? 0.5 * (o + s) : o;
          }
          (this.dragX = o),
            (this.dragMoveTime = new Date()),
            this.dispatchEvent('dragMove', t, [e, i]);
        }
      }),
      (o.dragEnd = function (t, e) {
        if (this.isDraggable) {
          this.options.freeScroll && (this.isFreeScrolling = !0);
          var i = this.dragEndRestingSelect();
          if (this.options.freeScroll && !this.options.wrapAround) {
            var n = this.getRestingPosition();
            this.isFreeScrolling =
              -n > this.slides[0].target && -n < this.getLastSlide().target;
          } else
            this.options.freeScroll ||
              i != this.selectedIndex ||
              (i += this.dragEndBoostSelect());
          delete this.previousDragX,
            (this.isDragSelect = this.options.wrapAround),
            this.select(i),
            delete this.isDragSelect,
            this.dispatchEvent('dragEnd', t, [e]);
        }
      }),
      (o.dragEndRestingSelect = function () {
        var t = this.getRestingPosition(),
          e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
          i = this._getClosestResting(t, e, 1),
          n = this._getClosestResting(t, e, -1);
        return i.distance < n.distance ? i.index : n.index;
      }),
      (o._getClosestResting = function (t, e, i) {
        for (
          var n = this.selectedIndex,
            o = 1 / 0,
            r =
              this.options.contain && !this.options.wrapAround
                ? function (t, e) {
                    return t <= e;
                  }
                : function (t, e) {
                    return t < e;
                  };
          r(e, o) &&
          ((n += i), (o = e), null !== (e = this.getSlideDistance(-t, n)));

        )
          e = Math.abs(e);
        return { distance: o, index: n - i };
      }),
      (o.getSlideDistance = function (t, e) {
        var i = this.slides.length,
          o = this.options.wrapAround && i > 1,
          r = o ? n.modulo(e, i) : e,
          s = this.slides[r];
        if (!s) return null;
        var a = o ? this.slideableWidth * Math.floor(e / i) : 0;
        return t - (s.target + a);
      }),
      (o.dragEndBoostSelect = function () {
        if (
          void 0 === this.previousDragX ||
          !this.dragMoveTime ||
          new Date() - this.dragMoveTime > 100
        )
          return 0;
        var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
          e = this.previousDragX - this.dragX;
        return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0;
      }),
      (o.staticClick = function (t, e) {
        var i = this.getParentCell(t.target),
          n = i && i.element,
          o = i && this.cells.indexOf(i);
        this.dispatchEvent('staticClick', t, [e, n, o]);
      }),
      (o.onscroll = function () {
        var t = s(),
          e = this.pointerDownScroll.x - t.x,
          i = this.pointerDownScroll.y - t.y;
        (Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone();
      }),
      e
    );
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(
          'flickity/js/prev-next-button',
          ['./flickity', 'unipointer/unipointer', 'fizzy-ui-utils/utils'],
          function (i, n, o) {
            return e(t, i, n, o);
          }
        )
      : 'object' == typeof module && module.exports
      ? (module.exports = e(
          t,
          require('./flickity'),
          require('unipointer'),
          require('fizzy-ui-utils')
        ))
      : e(t, t.Flickity, t.Unipointer, t.fizzyUIUtils);
  })(window, function (t, e, i, n) {
    'use strict';
    var o = 'http://www.w3.org/2000/svg';
    function r(t, e) {
      (this.direction = t), (this.parent = e), this._create();
    }
    (r.prototype = Object.create(i.prototype)),
      (r.prototype._create = function () {
        (this.isEnabled = !0), (this.isPrevious = -1 == this.direction);
        var t = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == t;
        var e = (this.element = document.createElement('button'));
        (e.className = 'flickity-button flickity-prev-next-button'),
          (e.className += this.isPrevious
            ? ' flickity-previous'
            : ' flickity-next'),
          e.setAttribute('type', 'button'),
          this.disable(),
          e.setAttribute('aria-label', this.isPrevious ? 'Previous' : 'Next');
        var i = this.createSVG();
        e.appendChild(i),
          this.parent.on('select', this.update.bind(this)),
          this.on(
            'pointerDown',
            this.parent.childUIPointerDown.bind(this.parent)
          );
      }),
      (r.prototype.activate = function () {
        this.bindStartEvent(this.element),
          this.element.addEventListener('click', this),
          this.parent.element.appendChild(this.element);
      }),
      (r.prototype.deactivate = function () {
        this.parent.element.removeChild(this.element),
          this.unbindStartEvent(this.element),
          this.element.removeEventListener('click', this);
      }),
      (r.prototype.createSVG = function () {
        var t = document.createElementNS(o, 'svg');
        t.setAttribute('class', 'flickity-button-icon'),
          t.setAttribute('viewBox', '0 0 100 100');
        var e = document.createElementNS(o, 'path'),
          i = (function (t) {
            if ('string' == typeof t) return t;
            return (
              'M ' +
              t.x0 +
              ',50 L ' +
              t.x1 +
              ',' +
              (t.y1 + 50) +
              ' L ' +
              t.x2 +
              ',' +
              (t.y2 + 50) +
              ' L ' +
              t.x3 +
              ',50  L ' +
              t.x2 +
              ',' +
              (50 - t.y2) +
              ' L ' +
              t.x1 +
              ',' +
              (50 - t.y1) +
              ' Z'
            );
          })(this.parent.options.arrowShape);
        return (
          e.setAttribute('d', i),
          e.setAttribute('class', 'arrow'),
          this.isLeft ||
            e.setAttribute('transform', 'translate(100, 100) rotate(180) '),
          t.appendChild(e),
          t
        );
      }),
      (r.prototype.handleEvent = n.handleEvent),
      (r.prototype.onclick = function () {
        if (this.isEnabled) {
          this.parent.uiChange();
          var t = this.isPrevious ? 'previous' : 'next';
          this.parent[t]();
        }
      }),
      (r.prototype.enable = function () {
        this.isEnabled || ((this.element.disabled = !1), (this.isEnabled = !0));
      }),
      (r.prototype.disable = function () {
        this.isEnabled && ((this.element.disabled = !0), (this.isEnabled = !1));
      }),
      (r.prototype.update = function () {
        var t = this.parent.slides;
        if (this.parent.options.wrapAround && t.length > 1) this.enable();
        else {
          var e = t.length ? t.length - 1 : 0,
            i = this.isPrevious ? 0 : e;
          this[this.parent.selectedIndex == i ? 'disable' : 'enable']();
        }
      }),
      (r.prototype.destroy = function () {
        this.deactivate(), this.allOff();
      }),
      n.extend(e.defaults, {
        prevNextButtons: !0,
        arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 },
      }),
      e.createMethods.push('_createPrevNextButtons');
    var s = e.prototype;
    return (
      (s._createPrevNextButtons = function () {
        this.options.prevNextButtons &&
          ((this.prevButton = new r(-1, this)),
          (this.nextButton = new r(1, this)),
          this.on('activate', this.activatePrevNextButtons));
      }),
      (s.activatePrevNextButtons = function () {
        this.prevButton.activate(),
          this.nextButton.activate(),
          this.on('deactivate', this.deactivatePrevNextButtons);
      }),
      (s.deactivatePrevNextButtons = function () {
        this.prevButton.deactivate(),
          this.nextButton.deactivate(),
          this.off('deactivate', this.deactivatePrevNextButtons);
      }),
      (e.PrevNextButton = r),
      e
    );
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(
          'flickity/js/page-dots',
          ['./flickity', 'unipointer/unipointer', 'fizzy-ui-utils/utils'],
          function (i, n, o) {
            return e(t, i, n, o);
          }
        )
      : 'object' == typeof module && module.exports
      ? (module.exports = e(
          t,
          require('./flickity'),
          require('unipointer'),
          require('fizzy-ui-utils')
        ))
      : e(t, t.Flickity, t.Unipointer, t.fizzyUIUtils);
  })(window, function (t, e, i, n) {
    function o(t) {
      (this.parent = t), this._create();
    }
    (o.prototype = Object.create(i.prototype)),
      (o.prototype._create = function () {
        (this.holder = document.createElement('ol')),
          (this.holder.className = 'flickity-page-dots'),
          (this.dots = []),
          (this.handleClick = this.onClick.bind(this)),
          this.on(
            'pointerDown',
            this.parent.childUIPointerDown.bind(this.parent)
          );
      }),
      (o.prototype.activate = function () {
        this.setDots(),
          this.holder.addEventListener('click', this.handleClick),
          this.bindStartEvent(this.holder),
          this.parent.element.appendChild(this.holder);
      }),
      (o.prototype.deactivate = function () {
        this.holder.removeEventListener('click', this.handleClick),
          this.unbindStartEvent(this.holder),
          this.parent.element.removeChild(this.holder);
      }),
      (o.prototype.setDots = function () {
        var t = this.parent.slides.length - this.dots.length;
        t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t);
      }),
      (o.prototype.addDots = function (t) {
        for (
          var e = document.createDocumentFragment(),
            i = [],
            n = this.dots.length,
            o = n + t,
            r = n;
          r < o;
          r++
        ) {
          var s = document.createElement('li');
          (s.className = 'dot'),
            s.setAttribute('aria-label', 'Page dot ' + (r + 1)),
            e.appendChild(s),
            i.push(s);
        }
        this.holder.appendChild(e), (this.dots = this.dots.concat(i));
      }),
      (o.prototype.removeDots = function (t) {
        this.dots.splice(this.dots.length - t, t).forEach(function (t) {
          this.holder.removeChild(t);
        }, this);
      }),
      (o.prototype.updateSelected = function () {
        this.selectedDot &&
          ((this.selectedDot.className = 'dot'),
          this.selectedDot.removeAttribute('aria-current')),
          this.dots.length &&
            ((this.selectedDot = this.dots[this.parent.selectedIndex]),
            (this.selectedDot.className = 'dot is-selected'),
            this.selectedDot.setAttribute('aria-current', 'step'));
      }),
      (o.prototype.onTap = o.prototype.onClick =
        function (t) {
          var e = t.target;
          if ('LI' == e.nodeName) {
            this.parent.uiChange();
            var i = this.dots.indexOf(e);
            this.parent.select(i);
          }
        }),
      (o.prototype.destroy = function () {
        this.deactivate(), this.allOff();
      }),
      (e.PageDots = o),
      n.extend(e.defaults, { pageDots: !0 }),
      e.createMethods.push('_createPageDots');
    var r = e.prototype;
    return (
      (r._createPageDots = function () {
        this.options.pageDots &&
          ((this.pageDots = new o(this)),
          this.on('activate', this.activatePageDots),
          this.on('select', this.updateSelectedPageDots),
          this.on('cellChange', this.updatePageDots),
          this.on('resize', this.updatePageDots),
          this.on('deactivate', this.deactivatePageDots));
      }),
      (r.activatePageDots = function () {
        this.pageDots.activate();
      }),
      (r.updateSelectedPageDots = function () {
        this.pageDots.updateSelected();
      }),
      (r.updatePageDots = function () {
        this.pageDots.setDots();
      }),
      (r.deactivatePageDots = function () {
        this.pageDots.deactivate();
      }),
      (e.PageDots = o),
      e
    );
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(
          'flickity/js/player',
          ['ev-emitter/ev-emitter', 'fizzy-ui-utils/utils', './flickity'],
          function (t, i, n) {
            return e(t, i, n);
          }
        )
      : 'object' == typeof module && module.exports
      ? (module.exports = e(
          require('ev-emitter'),
          require('fizzy-ui-utils'),
          require('./flickity')
        ))
      : e(t.EvEmitter, t.fizzyUIUtils, t.Flickity);
  })(window, function (t, e, i) {
    function n(t) {
      (this.parent = t),
        (this.state = 'stopped'),
        (this.onVisibilityChange = this.visibilityChange.bind(this)),
        (this.onVisibilityPlay = this.visibilityPlay.bind(this));
    }
    (n.prototype = Object.create(t.prototype)),
      (n.prototype.play = function () {
        'playing' != this.state &&
          (document.hidden
            ? document.addEventListener(
                'visibilitychange',
                this.onVisibilityPlay
              )
            : ((this.state = 'playing'),
              document.addEventListener(
                'visibilitychange',
                this.onVisibilityChange
              ),
              this.tick()));
      }),
      (n.prototype.tick = function () {
        if ('playing' == this.state) {
          var t = this.parent.options.autoPlay;
          t = 'number' == typeof t ? t : 3e3;
          var e = this;
          this.clear(),
            (this.timeout = setTimeout(function () {
              e.parent.next(!0), e.tick();
            }, t));
        }
      }),
      (n.prototype.stop = function () {
        (this.state = 'stopped'),
          this.clear(),
          document.removeEventListener(
            'visibilitychange',
            this.onVisibilityChange
          );
      }),
      (n.prototype.clear = function () {
        clearTimeout(this.timeout);
      }),
      (n.prototype.pause = function () {
        'playing' == this.state && ((this.state = 'paused'), this.clear());
      }),
      (n.prototype.unpause = function () {
        'paused' == this.state && this.play();
      }),
      (n.prototype.visibilityChange = function () {
        this[document.hidden ? 'pause' : 'unpause']();
      }),
      (n.prototype.visibilityPlay = function () {
        this.play(),
          document.removeEventListener(
            'visibilitychange',
            this.onVisibilityPlay
          );
      }),
      e.extend(i.defaults, { pauseAutoPlayOnHover: !0 }),
      i.createMethods.push('_createPlayer');
    var o = i.prototype;
    return (
      (o._createPlayer = function () {
        (this.player = new n(this)),
          this.on('activate', this.activatePlayer),
          this.on('uiChange', this.stopPlayer),
          this.on('pointerDown', this.stopPlayer),
          this.on('deactivate', this.deactivatePlayer);
      }),
      (o.activatePlayer = function () {
        this.options.autoPlay &&
          (this.player.play(),
          this.element.addEventListener('mouseenter', this));
      }),
      (o.playPlayer = function () {
        this.player.play();
      }),
      (o.stopPlayer = function () {
        this.player.stop();
      }),
      (o.pausePlayer = function () {
        this.player.pause();
      }),
      (o.unpausePlayer = function () {
        this.player.unpause();
      }),
      (o.deactivatePlayer = function () {
        this.player.stop(),
          this.element.removeEventListener('mouseenter', this);
      }),
      (o.onmouseenter = function () {
        this.options.pauseAutoPlayOnHover &&
          (this.player.pause(),
          this.element.addEventListener('mouseleave', this));
      }),
      (o.onmouseleave = function () {
        this.player.unpause(),
          this.element.removeEventListener('mouseleave', this);
      }),
      (i.Player = n),
      i
    );
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(
          'flickity/js/add-remove-cell',
          ['./flickity', 'fizzy-ui-utils/utils'],
          function (i, n) {
            return e(t, i, n);
          }
        )
      : 'object' == typeof module && module.exports
      ? (module.exports = e(
          t,
          require('./flickity'),
          require('fizzy-ui-utils')
        ))
      : e(t, t.Flickity, t.fizzyUIUtils);
  })(window, function (t, e, i) {
    var n = e.prototype;
    return (
      (n.insert = function (t, e) {
        var i = this._makeCells(t);
        if (i && i.length) {
          var n = this.cells.length;
          e = void 0 === e ? n : e;
          var o = (function (t) {
              var e = document.createDocumentFragment();
              return (
                t.forEach(function (t) {
                  e.appendChild(t.element);
                }),
                e
              );
            })(i),
            r = e == n;
          if (r) this.slider.appendChild(o);
          else {
            var s = this.cells[e].element;
            this.slider.insertBefore(o, s);
          }
          if (0 === e) this.cells = i.concat(this.cells);
          else if (r) this.cells = this.cells.concat(i);
          else {
            var a = this.cells.splice(e, n - e);
            this.cells = this.cells.concat(i).concat(a);
          }
          this._sizeCells(i), this.cellChange(e, !0);
        }
      }),
      (n.append = function (t) {
        this.insert(t, this.cells.length);
      }),
      (n.prepend = function (t) {
        this.insert(t, 0);
      }),
      (n.remove = function (t) {
        var e = this.getCells(t);
        if (e && e.length) {
          var n = this.cells.length - 1;
          e.forEach(function (t) {
            t.remove();
            var e = this.cells.indexOf(t);
            (n = Math.min(e, n)), i.removeFrom(this.cells, t);
          }, this),
            this.cellChange(n, !0);
        }
      }),
      (n.cellSizeChange = function (t) {
        var e = this.getCell(t);
        if (e) {
          e.getSize();
          var i = this.cells.indexOf(e);
          this.cellChange(i);
        }
      }),
      (n.cellChange = function (t, e) {
        var i = this.selectedElement;
        this._positionCells(t),
          this._getWrapShiftCells(),
          this.setGallerySize();
        var n = this.getCell(i);
        n && (this.selectedIndex = this.getCellSlideIndex(n)),
          (this.selectedIndex = Math.min(
            this.slides.length - 1,
            this.selectedIndex
          )),
          this.emitEvent('cellChange', [t]),
          this.select(this.selectedIndex),
          e && this.positionSliderAtSelected();
      }),
      e
    );
  }),
  /*!
   * Flickity v2.3.0
   * Touch, responsive, flickable carousels
   *
   * Licensed GPLv3 for open source use
   * or Flickity Commercial License for commercial use
   *
   * https://flickity.metafizzy.co
   * Copyright 2015-2021 Metafizzy
   */
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(
          'flickity/js/index',
          [
            './flickity',
            './drag',
            './prev-next-button',
            './page-dots',
            './player',
            './add-remove-cell',
          ],
          e
        )
      : 'object' == typeof module &&
        module.exports &&
        (module.exports = e(
          require('./flickity'),
          require('./drag'),
          require('./prev-next-button'),
          require('./page-dots'),
          require('./player'),
          require('./add-remove-cell')
        ));
  })(window, function (t) {
    return t;
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(['flickity/js/index', 'fizzy-ui-utils/utils'], e)
      : 'object' == typeof module && module.exports
      ? (module.exports = e(require('flickity'), require('fizzy-ui-utils')))
      : e(t.Flickity, t.fizzyUIUtils);
  })(this, function (t, e) {
    var i = t.Slide,
      n = i.prototype.updateTarget;
    i.prototype.updateTarget = function () {
      if ((n.apply(this, arguments), this.parent.options.fade)) {
        var t = this.target - this.x,
          e = this.cells[0].x;
        this.cells.forEach(function (i) {
          var n = i.x - e - t;
          i.renderPosition(n);
        });
      }
    };
    var o = t.prototype;
    t.createMethods.push('_createFade'),
      (o._createFade = function () {
        (this.fadeIndex = this.selectedIndex),
          (this.prevSelectedIndex = this.selectedIndex),
          this.on('select', this.onSelectFade),
          this.on('dragEnd', this.onDragEndFade),
          this.on('settle', this.onSettleFade),
          this.on('activate', this.onActivateFade),
          this.on('deactivate', this.onDeactivateFade);
      });
    var r = o.updateSlides;
    (o.updateSlides = function () {
      r.apply(this, arguments), this.options.fade;
    }),
      (o.onSelectFade = function () {
        (this.fadeIndex = Math.min(
          this.prevSelectedIndex,
          this.slides.length - 1
        )),
          (this.prevSelectedIndex = this.selectedIndex);
      }),
      (o.onSettleFade = function () {
        if ((delete this.didDragEnd, this.options.fade))
          this.slides[this.fadeIndex];
      }),
      (o.onDragEndFade = function () {
        this.didDragEnd = !0;
      }),
      (o.onActivateFade = function () {
        this.options.fade && this.element.classList.add('is-fade');
      }),
      (o.onDeactivateFade = function () {
        this.options.fade && this.element.classList.remove('is-fade');
      });
    var s = o.positionSlider;
    o.positionSlider = function () {
      this.options.fade
        ? (this.fadeSlides(), this.dispatchScrollEvent())
        : s.apply(this, arguments);
    };
    var a = o.positionSliderAtSelected;
    (o.positionSliderAtSelected = function () {
      this.options.fade && this.setTranslateX(0), a.apply(this, arguments);
    }),
      (o.fadeSlides = function () {
        if (!(this.slides.length < 2)) {
          var t = this.getFadeIndexes(),
            e = this.slides[t.a],
            i = this.slides[t.b],
            n = this.wrapDifference(e.target, i.target),
            o = this.wrapDifference(e.target, -this.x);
          o /= n;
          var r = t.a;
          this.isDragging && (r = o > 0.5 ? t.a : t.b);
          null != this.fadeHideIndex &&
            this.fadeHideIndex != r &&
            this.fadeHideIndex != t.a &&
            (this.fadeHideIndex, t.b);
          this.fadeHideIndex = r;
        }
      }),
      (o.getFadeIndexes = function () {
        return this.isDragging || this.didDragEnd
          ? this.options.wrapAround
            ? this.getFadeDragWrapIndexes()
            : this.getFadeDragLimitIndexes()
          : { a: this.fadeIndex, b: this.selectedIndex };
      }),
      (o.getFadeDragWrapIndexes = function () {
        var t = this.slides.map(function (t, e) {
            return this.getSlideDistance(-this.x, e);
          }, this),
          i = t.map(function (t) {
            return Math.abs(t);
          }),
          n = Math.min.apply(Math, i),
          o = i.indexOf(n),
          r = t[o],
          s = this.slides.length,
          a = r >= 0 ? 1 : -1;
        return { a: o, b: e.modulo(o + a, s) };
      }),
      (o.getFadeDragLimitIndexes = function () {
        for (var t = 0, e = 0; e < this.slides.length - 1; e++) {
          var i = this.slides[e];
          if (-this.x < i.target) break;
          t = e;
        }
        return { a: t, b: t + 1 };
      }),
      (o.wrapDifference = function (t, e) {
        var i = e - t;
        if (!this.options.wrapAround) return i;
        var n = i + this.slideableWidth,
          o = i - this.slideableWidth;
        return (
          Math.abs(n) < Math.abs(i) && (i = n),
          Math.abs(o) < Math.abs(i) && (i = o),
          i
        );
      });
    var l = o._getWrapShiftCells;
    o._getWrapShiftCells = function () {
      this.options.fade || l.apply(this, arguments);
    };
    var c = o.shiftWrapCells;
    return (
      (o.shiftWrapCells = function () {
        this.options.fade || c.apply(this, arguments);
      }),
      t
    );
  }),
  /*! PhotoSwipe - v4.1.3 - 2019-01-08
   * http://photoswipe.com
   * Copyright (c) 2019 Dmitry Semenov; */
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(e)
      : 'object' == typeof exports
      ? (module.exports = e())
      : (t.PhotoSwipe = e());
  })(this, function () {
    'use strict';
    return function (t, e, i, n) {
      var o = {
        features: null,
        bind: function (t, e, i, n) {
          var o = (n ? 'remove' : 'add') + 'EventListener';
          e = e.split(' ');
          for (var r = 0; r < e.length; r++) e[r] && t[o](e[r], i, !1);
        },
        isArray: function (t) {
          return t instanceof Array;
        },
        createEl: function (t, e) {
          var i = document.createElement(e || 'div');
          return t && (i.className = t), i;
        },
        getScrollY: function () {
          var t = window.pageYOffset;
          return void 0 !== t ? t : document.documentElement.scrollTop;
        },
        unbind: function (t, e, i) {
          o.bind(t, e, i, !0);
        },
        removeClass: function (t, e) {
          var i = new RegExp('(\\s|^)' + e + '(\\s|$)');
          t.className = t.className
            .replace(i, ' ')
            .replace(/^\s\s*/, '')
            .replace(/\s\s*$/, '');
        },
        addClass: function (t, e) {
          o.hasClass(t, e) || (t.className += (t.className ? ' ' : '') + e);
        },
        hasClass: function (t, e) {
          return (
            t.className &&
            new RegExp('(^|\\s)' + e + '(\\s|$)').test(t.className)
          );
        },
        getChildByClass: function (t, e) {
          for (var i = t.firstChild; i; ) {
            if (o.hasClass(i, e)) return i;
            i = i.nextSibling;
          }
        },
        arraySearch: function (t, e, i) {
          for (var n = t.length; n--; ) if (t[n][i] === e) return n;
          return -1;
        },
        extend: function (t, e, i) {
          for (var n in e)
            if (e.hasOwnProperty(n)) {
              if (i && t.hasOwnProperty(n)) continue;
              t[n] = e[n];
            }
        },
        easing: {
          sine: {
            out: function (t) {
              return Math.sin(t * (Math.PI / 2));
            },
            inOut: function (t) {
              return -(Math.cos(Math.PI * t) - 1) / 2;
            },
          },
          cubic: {
            out: function (t) {
              return --t * t * t + 1;
            },
          },
        },
        detectFeatures: function () {
          if (o.features) return o.features;
          var t = o.createEl().style,
            e = '',
            i = {};
          if (
            ((i.touch = 'ontouchstart' in window),
            window.requestAnimationFrame &&
              ((i.raf = window.requestAnimationFrame),
              (i.caf = window.cancelAnimationFrame)),
            (i.pointerEvent =
              !!window.PointerEvent || navigator.msPointerEnabled),
            !i.pointerEvent)
          ) {
            var n = navigator.userAgent;
            if (/iP(hone|od)/.test(navigator.platform)) {
              var r = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
              r &&
                r.length > 0 &&
                (r = parseInt(r[1], 10)) >= 1 &&
                r < 8 &&
                (i.isOldIOSPhone = !0);
            }
            var s = n.match(/Android\s([0-9\.]*)/),
              a = s ? s[1] : 0;
            (a = parseFloat(a)) >= 1 &&
              (a < 4.4 && (i.isOldAndroid = !0), (i.androidVersion = a)),
              (i.isMobileOpera = /opera mini|opera mobi/i.test(n));
          }
          for (
            var l,
              c,
              u = ['transform', 'perspective', 'animationName'],
              d = ['', 'webkit', 'Moz', 'ms', 'O'],
              f = 0;
            f < 4;
            f++
          ) {
            e = d[f];
            for (var h = 0; h < 3; h++)
              (l = u[h]),
                (c = e + (e ? l.charAt(0).toUpperCase() + l.slice(1) : l)),
                !i[l] && c in t && (i[l] = c);
            e &&
              !i.raf &&
              ((e = e.toLowerCase()),
              (i.raf = window[e + 'RequestAnimationFrame']),
              i.raf &&
                (i.caf =
                  window[e + 'CancelAnimationFrame'] ||
                  window[e + 'CancelRequestAnimationFrame']));
          }
          if (!i.raf) {
            var p = 0;
            (i.raf = function (t) {
              var e = new Date().getTime(),
                i = Math.max(0, 16 - (e - p)),
                n = window.setTimeout(function () {
                  t(e + i);
                }, i);
              return (p = e + i), n;
            }),
              (i.caf = function (t) {
                clearTimeout(t);
              });
          }
          return (
            (i.svg =
              !!document.createElementNS &&
              !!document.createElementNS('http://www.w3.org/2000/svg', 'svg')
                .createSVGRect),
            (o.features = i),
            i
          );
        },
      };
      o.detectFeatures();
      var r = this,
        s = {
          allowPanToNext: !0,
          spacing: 0.12,
          bgOpacity: 1,
          mouseUsed: !1,
          loop: !0,
          pinchToClose: !0,
          closeOnScroll: !0,
          closeOnVerticalDrag: !0,
          verticalDragRange: 0.75,
          hideAnimationDuration: 333,
          showAnimationDuration: 333,
          showHideOpacity: !1,
          focus: !0,
          escKey: !0,
          arrowKeys: !0,
          mainScrollEndFriction: 0.35,
          panEndFriction: 0.35,
          isClickableElement: function (t) {
            return 'A' === t.tagName;
          },
          getDoubleTapZoom: function (t, e) {
            return t || e.initialZoomLevel < 0.7 ? 1 : 1.33;
          },
          maxSpreadZoom: 1.33,
          modal: !0,
          scaleMode: 'fit',
        };
      o.extend(s, n);
      var a,
        l,
        c,
        u,
        d,
        f,
        h,
        p,
        m,
        g,
        v,
        y,
        b,
        x,
        w,
        S,
        C,
        E,
        z,
        D,
        k,
        P,
        A,
        _,
        T,
        M,
        I,
        L,
        N,
        O,
        F,
        U,
        R,
        j,
        W,
        H,
        V,
        q,
        B,
        Z,
        X,
        G,
        Y,
        K,
        $,
        J,
        Q,
        tt,
        et,
        it,
        nt,
        ot,
        rt,
        st,
        at,
        lt = { x: 0, y: 0 },
        ct = { x: 0, y: 0 },
        ut = { x: 0, y: 0 },
        dt = {},
        ft = 0,
        ht = {},
        pt = { x: 0, y: 0 },
        mt = 0,
        gt = !0,
        vt = [],
        yt = {},
        bt = !1,
        xt = function (t, e) {
          o.extend(r, e.publicMethods), vt.push(t);
        },
        wt = function (t) {
          var e = je();
          return t > e - 1 ? t - e : t < 0 ? e + t : t;
        },
        St = {},
        Ct = function (t, e) {
          return St[t] || (St[t] = []), St[t].push(e);
        },
        Et = function (t) {
          var e = St[t];
          if (e) {
            var i = Array.prototype.slice.call(arguments);
            i.shift();
            for (var n = 0; n < e.length; n++) e[n].apply(r, i);
          }
        },
        zt = function () {
          return new Date().getTime();
        },
        Dt = function (t) {
          (rt = t), (r.bg.style.opacity = t * s.bgOpacity);
        },
        kt = function (t, e, i, n, o) {
          (!bt || (o && o !== r.currItem)) &&
            (n /= o ? o.fitRatio : r.currItem.fitRatio),
            (t[P] = y + e + 'px, ' + i + 'px' + b + ' scale(' + n + ')');
        },
        Pt = function (t) {
          tt &&
            (t &&
              (g > r.currItem.fitRatio
                ? bt || (Ye(r.currItem, !1, !0), (bt = !0))
                : bt && (Ye(r.currItem), (bt = !1))),
            kt(tt, ut.x, ut.y, g));
        },
        At = function (t) {
          t.container &&
            kt(
              t.container.style,
              t.initialPosition.x,
              t.initialPosition.y,
              t.initialZoomLevel,
              t
            );
        },
        _t = function (t, e) {
          e[P] = y + t + 'px, 0px' + b;
        },
        Tt = function (t, e) {
          if (!s.loop && e) {
            var i = u + (pt.x * ft - t) / pt.x,
              n = Math.round(t - ce.x);
            ((i < 0 && n > 0) || (i >= je() - 1 && n < 0)) &&
              (t = ce.x + n * s.mainScrollEndFriction);
          }
          (ce.x = t), _t(t, d);
        },
        Mt = function (t, e) {
          var i = ue[t] - ht[t];
          return ct[t] + lt[t] + i - i * (e / v);
        },
        It = function (t, e) {
          (t.x = e.x), (t.y = e.y), e.id && (t.id = e.id);
        },
        Lt = function (t) {
          (t.x = Math.round(t.x)), (t.y = Math.round(t.y));
        },
        Nt = null,
        Ot = function () {
          Nt &&
            (o.unbind(document, 'mousemove', Ot),
            o.addClass(t, 'pswp--has_mouse'),
            (s.mouseUsed = !0),
            Et('mouseUsed')),
            (Nt = setTimeout(function () {
              Nt = null;
            }, 100));
        },
        Ft = function (t, e) {
          var i = Be(r.currItem, dt, t);
          return e && (Q = i), i;
        },
        Ut = function (t) {
          return t || (t = r.currItem), t.initialZoomLevel;
        },
        Rt = function (t) {
          return t || (t = r.currItem), t.w > 0 ? s.maxSpreadZoom : 1;
        },
        jt = function (t, e, i, n) {
          return n === r.currItem.initialZoomLevel
            ? ((i[t] = r.currItem.initialPosition[t]), !0)
            : ((i[t] = Mt(t, n)),
              i[t] > e.min[t]
                ? ((i[t] = e.min[t]), !0)
                : i[t] < e.max[t] && ((i[t] = e.max[t]), !0));
        },
        Wt = function (t) {
          var e = '';
          s.escKey && 27 === t.keyCode
            ? (e = 'close')
            : s.arrowKeys &&
              (37 === t.keyCode
                ? (e = 'prev')
                : 39 === t.keyCode && (e = 'next')),
            e &&
              (t.ctrlKey ||
                t.altKey ||
                t.shiftKey ||
                t.metaKey ||
                (t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
                r[e]()));
        },
        Ht = function (t) {
          t && (X || Z || et || H) && (t.preventDefault(), t.stopPropagation());
        },
        Vt = function () {
          r.setScrollOffset(0, o.getScrollY());
        },
        qt = {},
        Bt = 0,
        Zt = function (t) {
          qt[t] && (qt[t].raf && M(qt[t].raf), Bt--, delete qt[t]);
        },
        Xt = function (t) {
          qt[t] && Zt(t), qt[t] || (Bt++, (qt[t] = {}));
        },
        Gt = function () {
          for (var t in qt) qt.hasOwnProperty(t) && Zt(t);
        },
        Yt = function (t, e, i, n, o, r, s) {
          var a,
            l = zt();
          Xt(t);
          var c = function () {
            if (qt[t]) {
              if ((a = zt() - l) >= n) return Zt(t), r(i), void (s && s());
              r((i - e) * o(a / n) + e), (qt[t].raf = T(c));
            }
          };
          c();
        },
        Kt = {
          shout: Et,
          listen: Ct,
          viewportSize: dt,
          options: s,
          isMainScrollAnimating: function () {
            return et;
          },
          getZoomLevel: function () {
            return g;
          },
          getCurrentIndex: function () {
            return u;
          },
          isDragging: function () {
            return q;
          },
          isZooming: function () {
            return $;
          },
          setScrollOffset: function (t, e) {
            (ht.x = t), (N = ht.y = e), Et('updateScrollOffset', ht);
          },
          applyZoomPan: function (t, e, i, n) {
            (ut.x = e), (ut.y = i), (g = t), Pt(n);
          },
          init: function () {
            if (!a && !l) {
              var i;
              (r.framework = o),
                (r.template = t),
                (r.bg = o.getChildByClass(t, 'pswp__bg')),
                (I = t.className),
                (a = !0),
                (O = o.detectFeatures()),
                (T = O.raf),
                (M = O.caf),
                (P = O.transform),
                (r.scrollWrap = o.getChildByClass(t, 'pswp__scroll-wrap')),
                (r.container = o.getChildByClass(
                  r.scrollWrap,
                  'pswp__container'
                )),
                (d = r.container.style),
                (r.itemHolders = S =
                  [
                    { el: r.container.children[0], wrap: 0, index: -1 },
                    { el: r.container.children[1], wrap: 0, index: -1 },
                    { el: r.container.children[2], wrap: 0, index: -1 },
                  ]),
                (S[0].el.style.display = S[2].el.style.display = 'none'),
                (function () {
                  if (P) {
                    var e = O.perspective && !_;
                    return (
                      (y = 'translate' + (e ? '3d(' : '(')),
                      void (b = O.perspective ? ', 0px)' : ')')
                    );
                  }
                  (P = 'left'),
                    o.addClass(t, 'pswp--ie'),
                    (_t = function (t, e) {
                      e.left = t + 'px';
                    }),
                    (At = function (t) {
                      var e = t.fitRatio > 1 ? 1 : t.fitRatio,
                        i = t.container.style,
                        n = e * t.w,
                        o = e * t.h;
                      (i.width = n + 'px'),
                        (i.height = o + 'px'),
                        (i.left = t.initialPosition.x + 'px'),
                        (i.top = t.initialPosition.y + 'px');
                    }),
                    (Pt = function () {
                      if (tt) {
                        var t = tt,
                          e = r.currItem,
                          i = e.fitRatio > 1 ? 1 : e.fitRatio,
                          n = i * e.w,
                          o = i * e.h;
                        (t.width = n + 'px'),
                          (t.height = o + 'px'),
                          (t.left = ut.x + 'px'),
                          (t.top = ut.y + 'px');
                      }
                    });
                })(),
                (m = {
                  resize: r.updateSize,
                  orientationchange: function () {
                    clearTimeout(F),
                      (F = setTimeout(function () {
                        dt.x !== r.scrollWrap.clientWidth && r.updateSize();
                      }, 500));
                  },
                  scroll: Vt,
                  keydown: Wt,
                  click: Ht,
                });
              var n = O.isOldIOSPhone || O.isOldAndroid || O.isMobileOpera;
              for (
                (O.animationName && O.transform && !n) ||
                  (s.showAnimationDuration = s.hideAnimationDuration = 0),
                  i = 0;
                i < vt.length;
                i++
              )
                r['init' + vt[i]]();
              if (e) (r.ui = new e(r, o)).init();
              Et('firstUpdate'),
                (u = u || s.index || 0),
                (isNaN(u) || u < 0 || u >= je()) && (u = 0),
                (r.currItem = Re(u)),
                (O.isOldIOSPhone || O.isOldAndroid) && (gt = !1),
                t.setAttribute('aria-hidden', 'false'),
                s.modal &&
                  (gt
                    ? (t.style.position = 'fixed')
                    : ((t.style.position = 'absolute'),
                      (t.style.top = o.getScrollY() + 'px'))),
                void 0 === N && (Et('initialLayout'), (N = L = o.getScrollY()));
              var c = 'pswp--open ';
              for (
                s.mainClass && (c += s.mainClass + ' '),
                  s.showHideOpacity && (c += 'pswp--animate_opacity '),
                  c += _ ? 'pswp--touch' : 'pswp--notouch',
                  c += O.animationName ? ' pswp--css_animation' : '',
                  c += O.svg ? ' pswp--svg' : '',
                  o.addClass(t, c),
                  r.updateSize(),
                  f = -1,
                  mt = null,
                  i = 0;
                i < 3;
                i++
              )
                _t((i + f) * pt.x, S[i].el.style);
              o.bind(r.scrollWrap, p, r),
                Ct('initialZoomInEnd', function () {
                  r.setContent(S[0], u - 1),
                    r.setContent(S[2], u + 1),
                    (S[0].el.style.display = S[2].el.style.display = 'block'),
                    s.focus && t.focus(),
                    o.bind(document, 'keydown', r),
                    O.transform && o.bind(r.scrollWrap, 'click', r),
                    s.mouseUsed || o.bind(document, 'mousemove', Ot),
                    o.bind(window, 'resize scroll orientationchange', r),
                    Et('bindEvents');
                }),
                r.setContent(S[1], u),
                r.updateCurrItem(),
                Et('afterInit'),
                gt ||
                  (x = setInterval(function () {
                    Bt ||
                      q ||
                      $ ||
                      g !== r.currItem.initialZoomLevel ||
                      r.updateSize();
                  }, 1e3)),
                o.addClass(t, 'pswp--visible');
            }
          },
          close: function () {
            a &&
              ((a = !1),
              (l = !0),
              Et('close'),
              o.unbind(window, 'resize scroll orientationchange', r),
              o.unbind(window, 'scroll', m.scroll),
              o.unbind(document, 'keydown', r),
              o.unbind(document, 'mousemove', Ot),
              O.transform && o.unbind(r.scrollWrap, 'click', r),
              q && o.unbind(window, h, r),
              clearTimeout(F),
              Et('unbindEvents'),
              We(r.currItem, null, !0, r.destroy));
          },
          destroy: function () {
            Et('destroy'),
              Ne && clearTimeout(Ne),
              t.setAttribute('aria-hidden', 'true'),
              (t.className = I),
              x && clearInterval(x),
              o.unbind(r.scrollWrap, p, r),
              o.unbind(window, 'scroll', r),
              he(),
              Gt(),
              (St = null);
          },
          panTo: function (t, e, i) {
            i ||
              (t > Q.min.x ? (t = Q.min.x) : t < Q.max.x && (t = Q.max.x),
              e > Q.min.y ? (e = Q.min.y) : e < Q.max.y && (e = Q.max.y)),
              (ut.x = t),
              (ut.y = e),
              Pt();
          },
          handleEvent: function (t) {
            (t = t || window.event), m[t.type] && m[t.type](t);
          },
          goTo: function (t) {
            var e = (t = wt(t)) - u;
            (mt = e),
              (u = t),
              (r.currItem = Re(u)),
              (ft -= e),
              Tt(pt.x * ft),
              Gt(),
              (et = !1),
              r.updateCurrItem();
          },
          next: function () {
            r.goTo(u + 1);
          },
          prev: function () {
            r.goTo(u - 1);
          },
          updateCurrZoomItem: function (t) {
            if ((t && Et('beforeChange', 0), S[1].el.children.length)) {
              var e = S[1].el.children[0];
              tt = o.hasClass(e, 'pswp__zoom-wrap') ? e.style : null;
            } else tt = null;
            (Q = r.currItem.bounds),
              (v = g = r.currItem.initialZoomLevel),
              (ut.x = Q.center.x),
              (ut.y = Q.center.y),
              t && Et('afterChange');
          },
          invalidateCurrItems: function () {
            w = !0;
            for (var t = 0; t < 3; t++)
              S[t].item && (S[t].item.needsUpdate = !0);
          },
          updateCurrItem: function (t) {
            if (0 !== mt) {
              var e,
                i = Math.abs(mt);
              if (!(t && i < 2)) {
                (r.currItem = Re(u)),
                  (bt = !1),
                  Et('beforeChange', mt),
                  i >= 3 && ((f += mt + (mt > 0 ? -3 : 3)), (i = 3));
                for (var n = 0; n < i; n++)
                  mt > 0
                    ? ((e = S.shift()),
                      (S[2] = e),
                      f++,
                      _t((f + 2) * pt.x, e.el.style),
                      r.setContent(e, u - i + n + 1 + 1))
                    : ((e = S.pop()),
                      S.unshift(e),
                      f--,
                      _t(f * pt.x, e.el.style),
                      r.setContent(e, u + i - n - 1 - 1));
                if (tt && 1 === Math.abs(mt)) {
                  var o = Re(C);
                  o.initialZoomLevel !== g && (Be(o, dt), Ye(o), At(o));
                }
                (mt = 0), r.updateCurrZoomItem(), (C = u), Et('afterChange');
              }
            }
          },
          updateSize: function (e) {
            if (!gt && s.modal) {
              var i = o.getScrollY();
              if (
                (N !== i && ((t.style.top = i + 'px'), (N = i)),
                !e && yt.x === window.innerWidth && yt.y === window.innerHeight)
              )
                return;
              (yt.x = window.innerWidth),
                (yt.y = window.innerHeight),
                (t.style.height = yt.y + 'px');
            }
            if (
              ((dt.x = r.scrollWrap.clientWidth),
              (dt.y = r.scrollWrap.clientHeight),
              Vt(),
              (pt.x = dt.x + Math.round(dt.x * s.spacing)),
              (pt.y = dt.y),
              Tt(pt.x * ft),
              Et('beforeResize'),
              void 0 !== f)
            ) {
              for (var n, a, l, c = 0; c < 3; c++)
                (n = S[c]),
                  _t((c + f) * pt.x, n.el.style),
                  (l = u + c - 1),
                  s.loop && je() > 2 && (l = wt(l)),
                  (a = Re(l)) && (w || a.needsUpdate || !a.bounds)
                    ? (r.cleanSlide(a),
                      r.setContent(n, l),
                      1 === c && ((r.currItem = a), r.updateCurrZoomItem(!0)),
                      (a.needsUpdate = !1))
                    : -1 === n.index && l >= 0 && r.setContent(n, l),
                  a && a.container && (Be(a, dt), Ye(a), At(a));
              w = !1;
            }
            (v = g = r.currItem.initialZoomLevel),
              (Q = r.currItem.bounds) &&
                ((ut.x = Q.center.x), (ut.y = Q.center.y), Pt(!0)),
              Et('resize');
          },
          zoomTo: function (t, e, i, n, r) {
            e &&
              ((v = g),
              (ue.x = Math.abs(e.x) - ut.x),
              (ue.y = Math.abs(e.y) - ut.y),
              It(ct, ut));
            var s = Ft(t, !1),
              a = {};
            jt('x', s, a, t), jt('y', s, a, t);
            var l = g,
              c = ut.x,
              u = ut.y;
            Lt(a);
            var d = function (e) {
              1 === e
                ? ((g = t), (ut.x = a.x), (ut.y = a.y))
                : ((g = (t - l) * e + l),
                  (ut.x = (a.x - c) * e + c),
                  (ut.y = (a.y - u) * e + u)),
                r && r(e),
                Pt(1 === e);
            };
            i ? Yt('customZoomTo', 0, 1, i, n || o.easing.sine.inOut, d) : d(1);
          },
        },
        $t = {},
        Jt = {},
        Qt = {},
        te = {},
        ee = {},
        ie = [],
        ne = {},
        oe = [],
        re = {},
        se = 0,
        ae = { x: 0, y: 0 },
        le = 0,
        ce = { x: 0, y: 0 },
        ue = { x: 0, y: 0 },
        de = { x: 0, y: 0 },
        fe = function (t, e) {
          return (
            (re.x = Math.abs(t.x - e.x)),
            (re.y = Math.abs(t.y - e.y)),
            Math.sqrt(re.x * re.x + re.y * re.y)
          );
        },
        he = function () {
          G && (M(G), (G = null));
        },
        pe = function () {
          q && ((G = T(pe)), Pe());
        },
        me = function (t, e) {
          return (
            !(!t || t === document) &&
            !(
              t.getAttribute('class') &&
              t.getAttribute('class').indexOf('pswp__scroll-wrap') > -1
            ) &&
            (e(t) ? t : me(t.parentNode, e))
          );
        },
        ge = {},
        ve = function (t, e) {
          return (
            (ge.prevent = !me(t.target, s.isClickableElement)),
            Et('preventDragEvent', t, e, ge),
            ge.prevent
          );
        },
        ye = function (t, e) {
          return (e.x = t.pageX), (e.y = t.pageY), (e.id = t.identifier), e;
        },
        be = function (t, e, i) {
          (i.x = 0.5 * (t.x + e.x)), (i.y = 0.5 * (t.y + e.y));
        },
        xe = function () {
          var t = ut.y - r.currItem.initialPosition.y;
          return 1 - Math.abs(t / (dt.y / 2));
        },
        we = {},
        Se = {},
        Ce = [],
        Ee = function (t) {
          for (; Ce.length > 0; ) Ce.pop();
          return (
            A
              ? ((at = 0),
                ie.forEach(function (t) {
                  0 === at ? (Ce[0] = t) : 1 === at && (Ce[1] = t), at++;
                }))
              : t.type.indexOf('touch') > -1
              ? t.touches &&
                t.touches.length > 0 &&
                ((Ce[0] = ye(t.touches[0], we)),
                t.touches.length > 1 && (Ce[1] = ye(t.touches[1], Se)))
              : ((we.x = t.pageX),
                (we.y = t.pageY),
                (we.id = ''),
                (Ce[0] = we)),
            Ce
          );
        },
        ze = function (t, e) {
          var i,
            n,
            o,
            a,
            l = ut[t] + e[t],
            c = e[t] > 0,
            u = ce.x + e.x,
            d = ce.x - ne.x;
          if (
            ((i = l > Q.min[t] || l < Q.max[t] ? s.panEndFriction : 1),
            (l = ut[t] + e[t] * i),
            (s.allowPanToNext || g === r.currItem.initialZoomLevel) &&
              (tt
                ? 'h' !== it ||
                  'x' !== t ||
                  Z ||
                  (c
                    ? (l > Q.min[t] &&
                        ((i = s.panEndFriction),
                        Q.min[t] - l,
                        (n = Q.min[t] - ct[t])),
                      (n <= 0 || d < 0) && je() > 1
                        ? ((a = u), d < 0 && u > ne.x && (a = ne.x))
                        : Q.min.x !== Q.max.x && (o = l))
                    : (l < Q.max[t] &&
                        ((i = s.panEndFriction),
                        l - Q.max[t],
                        (n = ct[t] - Q.max[t])),
                      (n <= 0 || d > 0) && je() > 1
                        ? ((a = u), d > 0 && u < ne.x && (a = ne.x))
                        : Q.min.x !== Q.max.x && (o = l)))
                : (a = u),
              'x' === t))
          )
            return (
              void 0 !== a && (Tt(a, !0), (Y = a !== ne.x)),
              Q.min.x !== Q.max.x &&
                (void 0 !== o ? (ut.x = o) : Y || (ut.x += e.x * i)),
              void 0 !== a
            );
          et || Y || (g > r.currItem.fitRatio && (ut[t] += e[t] * i));
        },
        De = function (t) {
          if (!('mousedown' === t.type && t.button > 0))
            if (Ue) t.preventDefault();
            else if (!V || 'mousedown' !== t.type) {
              if ((ve(t, !0) && t.preventDefault(), Et('pointerDown'), A)) {
                var e = o.arraySearch(ie, t.pointerId, 'id');
                e < 0 && (e = ie.length),
                  (ie[e] = { x: t.pageX, y: t.pageY, id: t.pointerId });
              }
              var i = Ee(t),
                n = i.length;
              (K = null),
                Gt(),
                (q && 1 !== n) ||
                  ((q = nt = !0),
                  o.bind(window, h, r),
                  (W = st = ot = H = Y = X = B = Z = !1),
                  (it = null),
                  Et('firstTouchStart', i),
                  It(ct, ut),
                  (lt.x = lt.y = 0),
                  It(te, i[0]),
                  It(ee, te),
                  (ne.x = pt.x * ft),
                  (oe = [{ x: te.x, y: te.y }]),
                  (R = U = zt()),
                  Ft(g, !0),
                  he(),
                  pe()),
                !$ &&
                  n > 1 &&
                  !et &&
                  !Y &&
                  ((v = g),
                  (Z = !1),
                  ($ = B = !0),
                  (lt.y = lt.x = 0),
                  It(ct, ut),
                  It($t, i[0]),
                  It(Jt, i[1]),
                  be($t, Jt, de),
                  (ue.x = Math.abs(de.x) - ut.x),
                  (ue.y = Math.abs(de.y) - ut.y),
                  (J = fe($t, Jt)));
            }
        },
        ke = function (t) {
          if ((t.preventDefault(), A)) {
            var e = o.arraySearch(ie, t.pointerId, 'id');
            if (e > -1) {
              var i = ie[e];
              (i.x = t.pageX), (i.y = t.pageY);
            }
          }
          if (q) {
            var n = Ee(t);
            if (it || X || $) K = n;
            else if (ce.x !== pt.x * ft) it = 'h';
            else {
              var r = Math.abs(n[0].x - te.x) - Math.abs(n[0].y - te.y);
              Math.abs(r) >= 10 && ((it = r > 0 ? 'h' : 'v'), (K = n));
            }
          }
        },
        Pe = function () {
          if (K) {
            var t = K.length;
            if (0 !== t)
              if (
                (It($t, K[0]),
                (Qt.x = $t.x - te.x),
                (Qt.y = $t.y - te.y),
                $ && t > 1)
              ) {
                if (
                  ((te.x = $t.x),
                  (te.y = $t.y),
                  !Qt.x &&
                    !Qt.y &&
                    (function (t, e) {
                      return t.x === e.x && t.y === e.y;
                    })(K[1], Jt))
                )
                  return;
                It(Jt, K[1]), Z || ((Z = !0), Et('zoomGestureStarted'));
                var e = fe($t, Jt),
                  i = Ie(e);
                i >
                  r.currItem.initialZoomLevel +
                    r.currItem.initialZoomLevel / 15 && (st = !0);
                var n = 1,
                  o = Ut(),
                  a = Rt();
                if (i < o)
                  if (
                    s.pinchToClose &&
                    !st &&
                    v <= r.currItem.initialZoomLevel
                  ) {
                    var l = 1 - (o - i) / (o / 1.2);
                    Dt(l), Et('onPinchClose', l), (ot = !0);
                  } else
                    (n = (o - i) / o) > 1 && (n = 1), (i = o - n * (o / 3));
                else
                  i > a &&
                    ((n = (i - a) / (6 * o)) > 1 && (n = 1), (i = a + n * o));
                n < 0 && (n = 0),
                  e,
                  be($t, Jt, ae),
                  (lt.x += ae.x - de.x),
                  (lt.y += ae.y - de.y),
                  It(de, ae),
                  (ut.x = Mt('x', i)),
                  (ut.y = Mt('y', i)),
                  (W = i > g),
                  (g = i),
                  Pt();
              } else {
                if (!it) return;
                if (
                  (nt &&
                    ((nt = !1),
                    Math.abs(Qt.x) >= 10 && (Qt.x -= K[0].x - ee.x),
                    Math.abs(Qt.y) >= 10 && (Qt.y -= K[0].y - ee.y)),
                  (te.x = $t.x),
                  (te.y = $t.y),
                  0 === Qt.x && 0 === Qt.y)
                )
                  return;
                if (
                  'v' === it &&
                  s.closeOnVerticalDrag &&
                  'fit' === s.scaleMode &&
                  g === r.currItem.initialZoomLevel
                ) {
                  (lt.y += Qt.y), (ut.y += Qt.y);
                  var c = xe();
                  return (H = !0), Et('onVerticalDrag', c), Dt(c), void Pt();
                }
                !(function (t, e, i) {
                  if (t - R > 50) {
                    var n = oe.length > 2 ? oe.shift() : {};
                    (n.x = e), (n.y = i), oe.push(n), (R = t);
                  }
                })(zt(), $t.x, $t.y),
                  (X = !0),
                  (Q = r.currItem.bounds),
                  ze('x', Qt) || (ze('y', Qt), Lt(ut), Pt());
              }
          }
        },
        Ae = function (t) {
          if (O.isOldAndroid) {
            if (V && 'mouseup' === t.type) return;
            t.type.indexOf('touch') > -1 &&
              (clearTimeout(V),
              (V = setTimeout(function () {
                V = 0;
              }, 600)));
          }
          var e;
          if ((Et('pointerUp'), ve(t, !1) && t.preventDefault(), A)) {
            var i = o.arraySearch(ie, t.pointerId, 'id');
            if (i > -1)
              if (((e = ie.splice(i, 1)[0]), navigator.msPointerEnabled)) {
                (e.type = { 4: 'mouse', 2: 'touch', 3: 'pen' }[t.pointerType]),
                  e.type || (e.type = t.pointerType || 'mouse');
              } else e.type = t.pointerType || 'mouse';
          }
          var n,
            a = Ee(t),
            l = a.length;
          if (('mouseup' === t.type && (l = 0), 2 === l)) return (K = null), !0;
          1 === l && It(ee, a[0]),
            0 !== l ||
              it ||
              et ||
              (e ||
                ('mouseup' === t.type
                  ? (e = { x: t.pageX, y: t.pageY, type: 'mouse' })
                  : t.changedTouches &&
                    t.changedTouches[0] &&
                    (e = {
                      x: t.changedTouches[0].pageX,
                      y: t.changedTouches[0].pageY,
                      type: 'touch',
                    })),
              Et('touchRelease', t, e));
          var c = -1;
          if (
            (0 === l &&
              ((q = !1),
              o.unbind(window, h, r),
              he(),
              $ ? (c = 0) : -1 !== le && (c = zt() - le)),
            (le = 1 === l ? zt() : -1),
            (n = -1 !== c && c < 150 ? 'zoom' : 'swipe'),
            $ &&
              l < 2 &&
              (($ = !1),
              1 === l && (n = 'zoomPointerUp'),
              Et('zoomGestureEnded')),
            (K = null),
            X || Z || et || H)
          )
            if ((Gt(), j || (j = _e()), j.calculateSwipeSpeed('x'), H)) {
              if (xe() < s.verticalDragRange) r.close();
              else {
                var u = ut.y,
                  d = rt;
                Yt('verticalDrag', 0, 1, 300, o.easing.cubic.out, function (t) {
                  (ut.y = (r.currItem.initialPosition.y - u) * t + u),
                    Dt((1 - d) * t + d),
                    Pt();
                }),
                  Et('onVerticalDrag', 1);
              }
            } else {
              if ((Y || et) && 0 === l) {
                if (Me(n, j)) return;
                n = 'zoomPointerUp';
              }
              et ||
                ('swipe' === n ? !Y && g > r.currItem.fitRatio && Te(j) : Le());
            }
        },
        _e = function () {
          var t,
            e,
            i = {
              lastFlickOffset: {},
              lastFlickDist: {},
              lastFlickSpeed: {},
              slowDownRatio: {},
              slowDownRatioReverse: {},
              speedDecelerationRatio: {},
              speedDecelerationRatioAbs: {},
              distanceOffset: {},
              backAnimDestination: {},
              backAnimStarted: {},
              calculateSwipeSpeed: function (n) {
                oe.length > 1
                  ? ((t = zt() - R + 50), (e = oe[oe.length - 2][n]))
                  : ((t = zt() - U), (e = ee[n])),
                  (i.lastFlickOffset[n] = te[n] - e),
                  (i.lastFlickDist[n] = Math.abs(i.lastFlickOffset[n])),
                  i.lastFlickDist[n] > 20
                    ? (i.lastFlickSpeed[n] = i.lastFlickOffset[n] / t)
                    : (i.lastFlickSpeed[n] = 0),
                  Math.abs(i.lastFlickSpeed[n]) < 0.1 &&
                    (i.lastFlickSpeed[n] = 0),
                  (i.slowDownRatio[n] = 0.95),
                  (i.slowDownRatioReverse[n] = 1 - i.slowDownRatio[n]),
                  (i.speedDecelerationRatio[n] = 1);
              },
              calculateOverBoundsAnimOffset: function (t, e) {
                i.backAnimStarted[t] ||
                  (ut[t] > Q.min[t]
                    ? (i.backAnimDestination[t] = Q.min[t])
                    : ut[t] < Q.max[t] && (i.backAnimDestination[t] = Q.max[t]),
                  void 0 !== i.backAnimDestination[t] &&
                    ((i.slowDownRatio[t] = 0.7),
                    (i.slowDownRatioReverse[t] = 1 - i.slowDownRatio[t]),
                    i.speedDecelerationRatioAbs[t] < 0.05 &&
                      ((i.lastFlickSpeed[t] = 0),
                      (i.backAnimStarted[t] = !0),
                      Yt(
                        'bounceZoomPan' + t,
                        ut[t],
                        i.backAnimDestination[t],
                        e || 300,
                        o.easing.sine.out,
                        function (e) {
                          (ut[t] = e), Pt();
                        }
                      ))));
              },
              calculateAnimOffset: function (t) {
                i.backAnimStarted[t] ||
                  ((i.speedDecelerationRatio[t] =
                    i.speedDecelerationRatio[t] *
                    (i.slowDownRatio[t] +
                      i.slowDownRatioReverse[t] -
                      (i.slowDownRatioReverse[t] * i.timeDiff) / 10)),
                  (i.speedDecelerationRatioAbs[t] = Math.abs(
                    i.lastFlickSpeed[t] * i.speedDecelerationRatio[t]
                  )),
                  (i.distanceOffset[t] =
                    i.lastFlickSpeed[t] *
                    i.speedDecelerationRatio[t] *
                    i.timeDiff),
                  (ut[t] += i.distanceOffset[t]));
              },
              panAnimLoop: function () {
                if (
                  qt.zoomPan &&
                  ((qt.zoomPan.raf = T(i.panAnimLoop)),
                  (i.now = zt()),
                  (i.timeDiff = i.now - i.lastNow),
                  (i.lastNow = i.now),
                  i.calculateAnimOffset('x'),
                  i.calculateAnimOffset('y'),
                  Pt(),
                  i.calculateOverBoundsAnimOffset('x'),
                  i.calculateOverBoundsAnimOffset('y'),
                  i.speedDecelerationRatioAbs.x < 0.05 &&
                    i.speedDecelerationRatioAbs.y < 0.05)
                )
                  return (
                    (ut.x = Math.round(ut.x)),
                    (ut.y = Math.round(ut.y)),
                    Pt(),
                    void Zt('zoomPan')
                  );
              },
            };
          return i;
        },
        Te = function (t) {
          if (
            (t.calculateSwipeSpeed('y'),
            (Q = r.currItem.bounds),
            (t.backAnimDestination = {}),
            (t.backAnimStarted = {}),
            Math.abs(t.lastFlickSpeed.x) <= 0.05 &&
              Math.abs(t.lastFlickSpeed.y) <= 0.05)
          )
            return (
              (t.speedDecelerationRatioAbs.x = t.speedDecelerationRatioAbs.y =
                0),
              t.calculateOverBoundsAnimOffset('x'),
              t.calculateOverBoundsAnimOffset('y'),
              !0
            );
          Xt('zoomPan'), (t.lastNow = zt()), t.panAnimLoop();
        },
        Me = function (t, e) {
          var i, n, a;
          if ((et || (se = u), 'swipe' === t)) {
            var l = te.x - ee.x,
              c = e.lastFlickDist.x < 10;
            l > 30 && (c || e.lastFlickOffset.x > 20)
              ? (n = -1)
              : l < -30 && (c || e.lastFlickOffset.x < -20) && (n = 1);
          }
          n &&
            ((u += n) < 0
              ? ((u = s.loop ? je() - 1 : 0), (a = !0))
              : u >= je() && ((u = s.loop ? 0 : je() - 1), (a = !0)),
            (a && !s.loop) || ((mt += n), (ft -= n), (i = !0)));
          var d,
            f = pt.x * ft,
            h = Math.abs(f - ce.x);
          return (
            i || f > ce.x == e.lastFlickSpeed.x > 0
              ? ((d =
                  Math.abs(e.lastFlickSpeed.x) > 0
                    ? h / Math.abs(e.lastFlickSpeed.x)
                    : 333),
                (d = Math.min(d, 400)),
                (d = Math.max(d, 250)))
              : (d = 333),
            se === u && (i = !1),
            (et = !0),
            Et('mainScrollAnimStart'),
            Yt('mainScroll', ce.x, f, d, o.easing.cubic.out, Tt, function () {
              Gt(),
                (et = !1),
                (se = -1),
                (i || se !== u) && r.updateCurrItem(),
                Et('mainScrollAnimComplete');
            }),
            i && r.updateCurrItem(!0),
            i
          );
        },
        Ie = function (t) {
          return (1 / J) * t * v;
        },
        Le = function () {
          var t = g,
            e = Ut(),
            i = Rt();
          g < e ? (t = e) : g > i && (t = i);
          var n,
            s = rt;
          return ot && !W && !st && g < e
            ? (r.close(), !0)
            : (ot &&
                (n = function (t) {
                  Dt((1 - s) * t + s);
                }),
              r.zoomTo(t, 0, 200, o.easing.cubic.out, n),
              !0);
        };
      xt('Gestures', {
        publicMethods: {
          initGestures: function () {
            var t = function (t, e, i, n, o) {
              (E = t + e), (z = t + i), (D = t + n), (k = o ? t + o : '');
            };
            (A = O.pointerEvent) && O.touch && (O.touch = !1),
              A
                ? navigator.msPointerEnabled
                  ? t('MSPointer', 'Down', 'Move', 'Up', 'Cancel')
                  : t('pointer', 'down', 'move', 'up', 'cancel')
                : O.touch
                ? (t('touch', 'start', 'move', 'end', 'cancel'), (_ = !0))
                : t('mouse', 'down', 'move', 'up'),
              (h = z + ' ' + D + ' ' + k),
              (p = E),
              A &&
                !_ &&
                (_ =
                  navigator.maxTouchPoints > 1 ||
                  navigator.msMaxTouchPoints > 1),
              (r.likelyTouchDevice = _),
              (m[E] = De),
              (m[z] = ke),
              (m[D] = Ae),
              k && (m[k] = m[D]),
              O.touch &&
                ((p += ' mousedown'),
                (h += ' mousemove mouseup'),
                (m.mousedown = m[E]),
                (m.mousemove = m[z]),
                (m.mouseup = m[D])),
              _ || (s.allowPanToNext = !1);
          },
        },
      });
      var Ne,
        Oe,
        Fe,
        Ue,
        Re,
        je,
        We = function (e, i, n, a) {
          var l;
          Ne && clearTimeout(Ne),
            (Ue = !0),
            (Fe = !0),
            e.initialLayout
              ? ((l = e.initialLayout), (e.initialLayout = null))
              : (l = s.getThumbBoundsFn && s.getThumbBoundsFn(u));
          var d = n ? s.hideAnimationDuration : s.showAnimationDuration,
            f = function () {
              Zt('initialZoom'),
                n
                  ? (r.template.removeAttribute('style'),
                    r.bg.removeAttribute('style'))
                  : (Dt(1),
                    i && (i.style.display = 'block'),
                    o.addClass(t, 'pswp--animated-in'),
                    Et('initialZoom' + (n ? 'OutEnd' : 'InEnd'))),
                a && a(),
                (Ue = !1);
            };
          if (!d || !l || void 0 === l.x)
            return (
              Et('initialZoom' + (n ? 'Out' : 'In')),
              (g = e.initialZoomLevel),
              It(ut, e.initialPosition),
              Pt(),
              (t.style.opacity = n ? 0 : 1),
              Dt(1),
              void (d
                ? setTimeout(function () {
                    f();
                  }, d)
                : f())
            );
          var h, p;
          (h = c),
            (p = !r.currItem.src || r.currItem.loadError || s.showHideOpacity),
            e.miniImg && (e.miniImg.style.webkitBackfaceVisibility = 'hidden'),
            n ||
              ((g = l.w / e.w),
              (ut.x = l.x),
              (ut.y = l.y - L),
              (r[p ? 'template' : 'bg'].style.opacity = 0.001),
              Pt()),
            Xt('initialZoom'),
            n && !h && o.removeClass(t, 'pswp--animated-in'),
            p &&
              (n
                ? o[(h ? 'remove' : 'add') + 'Class'](
                    t,
                    'pswp--animate_opacity'
                  )
                : setTimeout(function () {
                    o.addClass(t, 'pswp--animate_opacity');
                  }, 30)),
            (Ne = setTimeout(
              function () {
                if ((Et('initialZoom' + (n ? 'Out' : 'In')), n)) {
                  var i = l.w / e.w,
                    r = { x: ut.x, y: ut.y },
                    s = g,
                    a = rt,
                    c = function (e) {
                      1 === e
                        ? ((g = i), (ut.x = l.x), (ut.y = l.y - N))
                        : ((g = (i - s) * e + s),
                          (ut.x = (l.x - r.x) * e + r.x),
                          (ut.y = (l.y - N - r.y) * e + r.y)),
                        Pt(),
                        p ? (t.style.opacity = 1 - e) : Dt(a - e * a);
                    };
                  h
                    ? Yt('initialZoom', 0, 1, d, o.easing.cubic.out, c, f)
                    : (c(1), (Ne = setTimeout(f, d + 20)));
                } else
                  (g = e.initialZoomLevel),
                    It(ut, e.initialPosition),
                    Pt(),
                    Dt(1),
                    p ? (t.style.opacity = 1) : Dt(1),
                    (Ne = setTimeout(f, d + 20));
              },
              n ? 25 : 90
            ));
        },
        He = {},
        Ve = [],
        qe = {
          index: 0,
          errorMsg:
            '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
          forceProgressiveLoading: !1,
          preload: [1, 1],
          getNumItemsFn: function () {
            return Oe.length;
          },
        },
        Be = function (t, e, i) {
          if (t.src && !t.loadError) {
            var n = !i;
            if (
              (n &&
                (t.vGap || (t.vGap = { top: 0, bottom: 0 }),
                Et('parseVerticalMargin', t)),
              (He.x = e.x),
              (He.y = e.y - t.vGap.top - t.vGap.bottom),
              n)
            ) {
              var o = He.x / t.w,
                r = He.y / t.h;
              t.fitRatio = o < r ? o : r;
              var a = s.scaleMode;
              'orig' === a
                ? (i = 1)
                : 'fit' === a
                ? (i = t.fitRatio)
                : 'zoom' === a &&
                  (i = Math.max(t.initialZoomLevel || 1, t.fitRatio)),
                i > 1 && (i = 1),
                (t.initialZoomLevel = i),
                t.bounds ||
                  (t.bounds = {
                    center: { x: 0, y: 0 },
                    max: { x: 0, y: 0 },
                    min: { x: 0, y: 0 },
                  });
            }
            if (!i) return;
            return (
              (function (t, e, i) {
                var n = t.bounds;
                (n.center.x = Math.round((He.x - e) / 2)),
                  (n.center.y = Math.round((He.y - i) / 2) + t.vGap.top),
                  (n.max.x = e > He.x ? Math.round(He.x - e) : n.center.x),
                  (n.max.y =
                    i > He.y ? Math.round(He.y - i) + t.vGap.top : n.center.y),
                  (n.min.x = e > He.x ? 0 : n.center.x),
                  (n.min.y = i > He.y ? t.vGap.top : n.center.y);
              })(t, t.w * i, t.h * i),
              n &&
                i === t.initialZoomLevel &&
                (t.initialPosition = t.bounds.center),
              t.bounds
            );
          }
          return (
            (t.w = t.h = 0),
            (t.initialZoomLevel = t.fitRatio = 1),
            (t.bounds = {
              center: { x: 0, y: 0 },
              max: { x: 0, y: 0 },
              min: { x: 0, y: 0 },
            }),
            (t.initialPosition = t.bounds.center),
            t.bounds
          );
        },
        Ze = function (t, e, i, n, o, s) {
          e.loadError ||
            (n &&
              ((e.imageAppended = !0),
              Ye(e, n, e === r.currItem && bt),
              i.appendChild(n),
              s &&
                setTimeout(function () {
                  e &&
                    e.loaded &&
                    e.placeholder &&
                    ((e.placeholder.style.display = 'none'),
                    (e.placeholder = null));
                }, 500)));
        },
        Xe = function (t) {
          (t.loading = !0), (t.loaded = !1);
          var e = (t.img = o.createEl('pswp__img', 'img')),
            i = function () {
              (t.loading = !1),
                (t.loaded = !0),
                t.loadComplete ? t.loadComplete(t) : (t.img = null),
                (e.onload = e.onerror = null),
                (e = null);
            };
          return (
            (e.onload = i),
            (e.onerror = function () {
              (t.loadError = !0), i();
            }),
            (e.src = t.src),
            e
          );
        },
        Ge = function (t, e) {
          if (t.src && t.loadError && t.container)
            return (
              e && (t.container.innerHTML = ''),
              (t.container.innerHTML = s.errorMsg.replace('%url%', t.src)),
              !0
            );
        },
        Ye = function (t, e, i) {
          if (t.src) {
            e || (e = t.container.lastChild);
            var n = i ? t.w : Math.round(t.w * t.fitRatio),
              o = i ? t.h : Math.round(t.h * t.fitRatio);
            t.placeholder &&
              !t.loaded &&
              ((t.placeholder.style.width = n + 'px'),
              (t.placeholder.style.height = o + 'px')),
              (e.style.width = n + 'px'),
              (e.style.height = o + 'px');
          }
        },
        Ke = function () {
          if (Ve.length) {
            for (var t, e = 0; e < Ve.length; e++)
              (t = Ve[e]).holder.index === t.index &&
                Ze(t.index, t.item, t.baseDiv, t.img, 0, t.clearPlaceholder);
            Ve = [];
          }
        };
      xt('Controller', {
        publicMethods: {
          lazyLoadItem: function (t) {
            t = wt(t);
            var e = Re(t);
            e &&
              ((!e.loaded && !e.loading) || w) &&
              (Et('gettingData', t, e), e.src && Xe(e));
          },
          initController: function () {
            o.extend(s, qe, !0),
              (r.items = Oe = i),
              (Re = r.getItemAt),
              (je = s.getNumItemsFn),
              s.loop,
              je() < 3 && (s.loop = !1),
              Ct('beforeChange', function (t) {
                var e,
                  i = s.preload,
                  n = null === t || t >= 0,
                  o = Math.min(i[0], je()),
                  a = Math.min(i[1], je());
                for (e = 1; e <= (n ? a : o); e++) r.lazyLoadItem(u + e);
                for (e = 1; e <= (n ? o : a); e++) r.lazyLoadItem(u - e);
              }),
              Ct('initialLayout', function () {
                r.currItem.initialLayout =
                  s.getThumbBoundsFn && s.getThumbBoundsFn(u);
              }),
              Ct('mainScrollAnimComplete', Ke),
              Ct('initialZoomInEnd', Ke),
              Ct('destroy', function () {
                for (var t, e = 0; e < Oe.length; e++)
                  (t = Oe[e]).container && (t.container = null),
                    t.placeholder && (t.placeholder = null),
                    t.img && (t.img = null),
                    t.preloader && (t.preloader = null),
                    t.loadError && (t.loaded = t.loadError = !1);
                Ve = null;
              });
          },
          getItemAt: function (t) {
            return t >= 0 && void 0 !== Oe[t] && Oe[t];
          },
          allowProgressiveImg: function () {
            return (
              s.forceProgressiveLoading ||
              !_ ||
              s.mouseUsed ||
              screen.width > 1200
            );
          },
          setContent: function (t, e) {
            s.loop && (e = wt(e));
            var i = r.getItemAt(t.index);
            i && (i.container = null);
            var n,
              l = r.getItemAt(e);
            if (l) {
              Et('gettingData', e, l), (t.index = e), (t.item = l);
              var c = (l.container = o.createEl('pswp__zoom-wrap'));
              if (
                (!l.src &&
                  l.html &&
                  (l.html.tagName
                    ? c.appendChild(l.html)
                    : (c.innerHTML = l.html)),
                Ge(l),
                Be(l, dt),
                !l.src || l.loadError || l.loaded)
              )
                l.src &&
                  !l.loadError &&
                  (((n = o.createEl('pswp__img', 'img')).style.opacity = 1),
                  (n.src = l.src),
                  Ye(l, n),
                  Ze(0, l, c, n));
              else {
                if (
                  ((l.loadComplete = function (i) {
                    if (a) {
                      if (t && t.index === e) {
                        if (Ge(i, !0))
                          return (
                            (i.loadComplete = i.img = null),
                            Be(i, dt),
                            At(i),
                            void (t.index === u && r.updateCurrZoomItem())
                          );
                        i.imageAppended
                          ? !Ue &&
                            i.placeholder &&
                            ((i.placeholder.style.display = 'none'),
                            (i.placeholder = null))
                          : O.transform && (et || Ue)
                          ? Ve.push({
                              item: i,
                              baseDiv: c,
                              img: i.img,
                              index: e,
                              holder: t,
                              clearPlaceholder: !0,
                            })
                          : Ze(0, i, c, i.img, 0, !0);
                      }
                      (i.loadComplete = null),
                        (i.img = null),
                        Et('imageLoadComplete', e, i);
                    }
                  }),
                  o.features.transform)
                ) {
                  var d = 'pswp__img pswp__img--placeholder';
                  d += l.msrc ? '' : ' pswp__img--placeholder--blank';
                  var f = o.createEl(d, l.msrc ? 'img' : '');
                  l.msrc && (f.src = l.msrc),
                    Ye(l, f),
                    c.appendChild(f),
                    (l.placeholder = f);
                }
                l.loading || Xe(l),
                  r.allowProgressiveImg() &&
                    (!Fe && O.transform
                      ? Ve.push({
                          item: l,
                          baseDiv: c,
                          img: l.img,
                          index: e,
                          holder: t,
                        })
                      : Ze(0, l, c, l.img, 0, !0));
              }
              Fe || e !== u ? At(l) : ((tt = c.style), We(l, n || l.img)),
                (t.el.innerHTML = ''),
                t.el.appendChild(c);
            } else t.el.innerHTML = '';
          },
          cleanSlide: function (t) {
            t.img && (t.img.onload = t.img.onerror = null),
              (t.loaded = t.loading = t.img = t.imageAppended = !1);
          },
        },
      });
      var $e,
        Je,
        Qe = {},
        ti = function (t, e, i) {
          var n = document.createEvent('CustomEvent'),
            o = {
              origEvent: t,
              target: t.target,
              releasePoint: e,
              pointerType: i || 'touch',
            };
          n.initCustomEvent('pswpTap', !0, !0, o), t.target.dispatchEvent(n);
        };
      xt('Tap', {
        publicMethods: {
          initTap: function () {
            Ct('firstTouchStart', r.onTapStart),
              Ct('touchRelease', r.onTapRelease),
              Ct('destroy', function () {
                (Qe = {}), ($e = null);
              });
          },
          onTapStart: function (t) {
            t.length > 1 && (clearTimeout($e), ($e = null));
          },
          onTapRelease: function (t, e) {
            var i, n;
            if (e && !X && !B && !Bt) {
              var r = e;
              if (
                $e &&
                (clearTimeout($e),
                ($e = null),
                (i = r),
                (n = Qe),
                Math.abs(i.x - n.x) < 25 && Math.abs(i.y - n.y) < 25)
              )
                return void Et('doubleTap', r);
              if ('mouse' === e.type) return void ti(t, e, 'mouse');
              if (
                'BUTTON' === t.target.tagName.toUpperCase() ||
                o.hasClass(t.target, 'pswp__single-tap')
              )
                return void ti(t, e);
              It(Qe, r),
                ($e = setTimeout(function () {
                  ti(t, e), ($e = null);
                }, 300));
            }
          },
        },
      }),
        xt('DesktopZoom', {
          publicMethods: {
            initDesktopZoom: function () {
              _
                ? Ct('mouseUsed', function () {
                    r.setupDesktopZoom();
                  })
                : r.setupDesktopZoom(!0);
            },
            setupDesktopZoom: function (e) {
              Je = {};
              var i = 'wheel mousewheel DOMMouseScroll';
              Ct('bindEvents', function () {
                o.bind(t, i, r.handleMouseWheel);
              }),
                Ct('unbindEvents', function () {
                  Je && o.unbind(t, i, r.handleMouseWheel);
                }),
                (r.mouseZoomedIn = !1);
              var n,
                s = function () {
                  r.mouseZoomedIn &&
                    (o.removeClass(t, 'pswp--zoomed-in'),
                    (r.mouseZoomedIn = !1)),
                    g < 1
                      ? o.addClass(t, 'pswp--zoom-allowed')
                      : o.removeClass(t, 'pswp--zoom-allowed'),
                    a();
                },
                a = function () {
                  n && (o.removeClass(t, 'pswp--dragging'), (n = !1));
                };
              Ct('resize', s),
                Ct('afterChange', s),
                Ct('pointerDown', function () {
                  r.mouseZoomedIn &&
                    ((n = !0), o.addClass(t, 'pswp--dragging'));
                }),
                Ct('pointerUp', a),
                e || s();
            },
            handleMouseWheel: function (t) {
              if (g <= r.currItem.fitRatio)
                return (
                  s.modal &&
                    (!s.closeOnScroll || Bt || q
                      ? t.preventDefault()
                      : P && Math.abs(t.deltaY) > 2 && ((c = !0), r.close())),
                  !0
                );
              if ((t.stopPropagation(), (Je.x = 0), 'deltaX' in t))
                1 === t.deltaMode
                  ? ((Je.x = 18 * t.deltaX), (Je.y = 18 * t.deltaY))
                  : ((Je.x = t.deltaX), (Je.y = t.deltaY));
              else if ('wheelDelta' in t)
                t.wheelDeltaX && (Je.x = -0.16 * t.wheelDeltaX),
                  t.wheelDeltaY
                    ? (Je.y = -0.16 * t.wheelDeltaY)
                    : (Je.y = -0.16 * t.wheelDelta);
              else {
                if (!('detail' in t)) return;
                Je.y = t.detail;
              }
              Ft(g, !0);
              var e = ut.x - Je.x,
                i = ut.y - Je.y;
              (s.modal ||
                (e <= Q.min.x &&
                  e >= Q.max.x &&
                  i <= Q.min.y &&
                  i >= Q.max.y)) &&
                t.preventDefault(),
                r.panTo(e, i);
            },
            toggleDesktopZoom: function (e) {
              e = e || { x: dt.x / 2 + ht.x, y: dt.y / 2 + ht.y };
              var i = s.getDoubleTapZoom(!0, r.currItem),
                n = g === i;
              (r.mouseZoomedIn = !n),
                r.zoomTo(n ? r.currItem.initialZoomLevel : i, e, 333),
                o[(n ? 'remove' : 'add') + 'Class'](t, 'pswp--zoomed-in');
            },
          },
        }),
        o.extend(r, Kt);
    };
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(e)
      : 'object' == typeof exports
      ? (module.exports = e())
      : (t.PhotoSwipeUI_Default = e());
  })(this, function () {
    'use strict';
    return function (t, e) {
      var i,
        n,
        o,
        r,
        s,
        a,
        l,
        c,
        u,
        d,
        f,
        h,
        p,
        m,
        g,
        v,
        y,
        b,
        x = this,
        w = !1,
        S = !0,
        C = !0,
        E = {
          barsSize: { top: 44, bottom: 'auto' },
          closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'],
          timeToIdle: 4e3,
          timeToIdleOutside: 1e3,
          loadingIndicatorDelay: 1e3,
          addCaptionHTMLFn: function (t, e) {
            return t.title
              ? ((e.children[0].innerHTML = t.title), !0)
              : ((e.children[0].innerHTML = ''), !1);
          },
          closeEl: !0,
          captionEl: !0,
          fullscreenEl: !0,
          zoomEl: !0,
          shareEl: !0,
          counterEl: !0,
          arrowEl: !0,
          preloaderEl: !0,
          tapToClose: !1,
          tapToToggleControls: !0,
          clickToCloseNonZoomable: !0,
          shareButtons: [
            {
              id: 'facebook',
              label: 'Share on Facebook',
              url: 'https://www.facebook.com/sharer/sharer.php?u={{url}}',
            },
            {
              id: 'twitter',
              label: 'Tweet',
              url: 'https://twitter.com/intent/tweet?text={{text}}&url={{url}}',
            },
            {
              id: 'pinterest',
              label: 'Pin it',
              url: 'http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}',
            },
            {
              id: 'download',
              label: 'Download image',
              url: '{{raw_image_url}}',
              download: !0,
            },
          ],
          getImageURLForShare: function () {
            return t.currItem.src || '';
          },
          getPageURLForShare: function () {
            return window.location.href;
          },
          getTextForShare: function () {
            return t.currItem.title || '';
          },
          indexIndicatorSep: ' / ',
          fitControlsWidth: 1200,
        },
        z = function (t) {
          if (v) return !0;
          (t = t || window.event), g.timeToIdle && g.mouseUsed && !u && N();
          for (
            var i,
              n,
              o = (t.target || t.srcElement).getAttribute('class') || '',
              r = 0;
            r < R.length;
            r++
          )
            (i = R[r]).onTap &&
              o.indexOf('pswp__' + i.name) > -1 &&
              (i.onTap(), (n = !0));
          if (n) {
            t.stopPropagation && t.stopPropagation(), (v = !0);
            var s = e.features.isOldAndroid ? 600 : 30;
            setTimeout(function () {
              v = !1;
            }, s);
          }
        },
        D = function () {
          return (
            !t.likelyTouchDevice ||
            g.mouseUsed ||
            screen.width > g.fitControlsWidth
          );
        },
        k = function (t, i, n) {
          e[(n ? 'add' : 'remove') + 'Class'](t, 'pswp__' + i);
        },
        P = function () {
          var t = 1 === g.getNumItemsFn();
          t !== m && (k(n, 'ui--one-slide', t), (m = t));
        },
        A = function () {
          k(l, 'share-modal--hidden', C);
        },
        _ = function () {
          return (
            (C = !C)
              ? (e.removeClass(l, 'pswp__share-modal--fade-in'),
                setTimeout(function () {
                  C && A();
                }, 300))
              : (A(),
                setTimeout(function () {
                  C || e.addClass(l, 'pswp__share-modal--fade-in');
                }, 30)),
            C || M(),
            !1
          );
        },
        T = function (e) {
          var i = (e = e || window.event).target || e.srcElement;
          return (
            t.shout('shareLinkClick', e, i),
            !(
              !i.href ||
              (!i.hasAttribute('download') &&
                (window.open(
                  i.href,
                  'pswp_share',
                  'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=' +
                    (window.screen ? Math.round(screen.width / 2 - 275) : 100)
                ),
                C || _(),
                1))
            )
          );
        },
        M = function () {
          for (var t, e, i, n, o = '', r = 0; r < g.shareButtons.length; r++)
            (t = g.shareButtons[r]),
              (e = g.getImageURLForShare(t)),
              (i = g.getPageURLForShare(t)),
              (n = g.getTextForShare(t)),
              (o +=
                '<a href="' +
                t.url
                  .replace('{{url}}', encodeURIComponent(i))
                  .replace('{{image_url}}', encodeURIComponent(e))
                  .replace('{{raw_image_url}}', e)
                  .replace('{{text}}', encodeURIComponent(n)) +
                '" target="_blank" class="pswp__share--' +
                t.id +
                '"' +
                (t.download ? 'download' : '') +
                '>' +
                t.label +
                '</a>'),
              g.parseShareButtonOut && (o = g.parseShareButtonOut(t, o));
          (l.children[0].innerHTML = o), (l.children[0].onclick = T);
        },
        I = function (t) {
          for (var i = 0; i < g.closeElClasses.length; i++)
            if (e.hasClass(t, 'pswp__' + g.closeElClasses[i])) return !0;
        },
        L = 0,
        N = function () {
          clearTimeout(b), (L = 0), u && x.setIdle(!1);
        },
        O = function (t) {
          var e = (t = t || window.event).relatedTarget || t.toElement;
          (e && 'HTML' !== e.nodeName) ||
            (clearTimeout(b),
            (b = setTimeout(function () {
              x.setIdle(!0);
            }, g.timeToIdleOutside)));
        },
        F = function (t) {
          h !== t && (k(f, 'preloader--active', !t), (h = t));
        },
        U = function (t) {
          var i = t.vGap;
          if (D()) {
            var s = g.barsSize;
            if (g.captionEl && 'auto' === s.bottom)
              if (
                (r ||
                  ((r = e.createEl(
                    'pswp__caption pswp__caption--fake'
                  )).appendChild(e.createEl('pswp__caption__center')),
                  n.insertBefore(r, o),
                  e.addClass(n, 'pswp__ui--fit')),
                g.addCaptionHTMLFn(t, r, !0))
              ) {
                var a = r.clientHeight;
                i.bottom = parseInt(a, 10) || 44;
              } else i.bottom = s.top;
            else i.bottom = 'auto' === s.bottom ? 0 : s.bottom;
            i.top = s.top;
          } else i.top = i.bottom = 0;
        },
        R = [
          {
            name: 'caption',
            option: 'captionEl',
            onInit: function (t) {
              o = t;
            },
          },
          {
            name: 'share-modal',
            option: 'shareEl',
            onInit: function (t) {
              l = t;
            },
            onTap: function () {
              _();
            },
          },
          {
            name: 'button--share',
            option: 'shareEl',
            onInit: function (t) {
              a = t;
            },
            onTap: function () {
              _();
            },
          },
          {
            name: 'button--zoom',
            option: 'zoomEl',
            onTap: t.toggleDesktopZoom,
          },
          {
            name: 'counter',
            option: 'counterEl',
            onInit: function (t) {
              s = t;
            },
          },
          { name: 'button--close', option: 'closeEl', onTap: t.close },
          { name: 'button--arrow--left', option: 'arrowEl', onTap: t.prev },
          { name: 'button--arrow--right', option: 'arrowEl', onTap: t.next },
          {
            name: 'button--fs',
            option: 'fullscreenEl',
            onTap: function () {
              i.isFullscreen() ? i.exit() : i.enter();
            },
          },
          {
            name: 'preloader',
            option: 'preloaderEl',
            onInit: function (t) {
              f = t;
            },
          },
        ];
      (x.init = function () {
        e.extend(t.options, E, !0),
          (g = t.options),
          (n = e.getChildByClass(t.scrollWrap, 'pswp__ui')),
          (d = t.listen),
          (function () {
            var t;
            d('onVerticalDrag', function (t) {
              S && t < 0.95
                ? x.hideControls()
                : !S && t >= 0.95 && x.showControls();
            }),
              d('onPinchClose', function (e) {
                S && e < 0.9
                  ? (x.hideControls(), (t = !0))
                  : t && !S && e > 0.9 && x.showControls();
              }),
              d('zoomGestureEnded', function () {
                (t = !1) && !S && x.showControls();
              });
          })(),
          d('beforeChange', x.update),
          d('doubleTap', function (e) {
            var i = t.currItem.initialZoomLevel;
            t.getZoomLevel() !== i
              ? t.zoomTo(i, e, 333)
              : t.zoomTo(g.getDoubleTapZoom(!1, t.currItem), e, 333);
          }),
          d('preventDragEvent', function (t, e, i) {
            var n = t.target || t.srcElement;
            n &&
              n.getAttribute('class') &&
              t.type.indexOf('mouse') > -1 &&
              (n.getAttribute('class').indexOf('__caption') > 0 ||
                /(SMALL|STRONG|EM)/i.test(n.tagName)) &&
              (i.prevent = !1);
          }),
          d('bindEvents', function () {
            e.bind(n, 'pswpTap click', z),
              e.bind(t.scrollWrap, 'pswpTap', x.onGlobalTap),
              t.likelyTouchDevice ||
                e.bind(t.scrollWrap, 'mouseover', x.onMouseOver);
          }),
          d('unbindEvents', function () {
            C || _(),
              y && clearInterval(y),
              e.unbind(document, 'mouseout', O),
              e.unbind(document, 'mousemove', N),
              e.unbind(n, 'pswpTap click', z),
              e.unbind(t.scrollWrap, 'pswpTap', x.onGlobalTap),
              e.unbind(t.scrollWrap, 'mouseover', x.onMouseOver),
              i &&
                (e.unbind(document, i.eventK, x.updateFullscreen),
                i.isFullscreen() && ((g.hideAnimationDuration = 0), i.exit()),
                (i = null));
          }),
          d('destroy', function () {
            g.captionEl &&
              (r && n.removeChild(r), e.removeClass(o, 'pswp__caption--empty')),
              l && (l.children[0].onclick = null),
              e.removeClass(n, 'pswp__ui--over-close'),
              e.addClass(n, 'pswp__ui--hidden'),
              x.setIdle(!1);
          }),
          g.showAnimationDuration || e.removeClass(n, 'pswp__ui--hidden'),
          d('initialZoomIn', function () {
            g.showAnimationDuration && e.removeClass(n, 'pswp__ui--hidden');
          }),
          d('initialZoomOut', function () {
            e.addClass(n, 'pswp__ui--hidden');
          }),
          d('parseVerticalMargin', U),
          (function () {
            var t,
              i,
              o,
              r = function (n) {
                if (n)
                  for (var r = n.length, s = 0; s < r; s++) {
                    (t = n[s]), (i = t.className);
                    for (var a = 0; a < R.length; a++)
                      (o = R[a]),
                        i.indexOf('pswp__' + o.name) > -1 &&
                          (g[o.option]
                            ? (e.removeClass(t, 'pswp__element--disabled'),
                              o.onInit && o.onInit(t))
                            : e.addClass(t, 'pswp__element--disabled'));
                  }
              };
            r(n.children);
            var s = e.getChildByClass(n, 'pswp__top-bar');
            s && r(s.children);
          })(),
          g.shareEl && a && l && (C = !0),
          P(),
          g.timeToIdle &&
            d('mouseUsed', function () {
              e.bind(document, 'mousemove', N),
                e.bind(document, 'mouseout', O),
                (y = setInterval(function () {
                  2 == ++L && x.setIdle(!0);
                }, g.timeToIdle / 2));
            }),
          g.fullscreenEl &&
            !e.features.isOldAndroid &&
            (i || (i = x.getFullscreenAPI()),
            i
              ? (e.bind(document, i.eventK, x.updateFullscreen),
                x.updateFullscreen(),
                e.addClass(t.template, 'pswp--supports-fs'))
              : e.removeClass(t.template, 'pswp--supports-fs')),
          g.preloaderEl &&
            (F(!0),
            d('beforeChange', function () {
              clearTimeout(p),
                (p = setTimeout(function () {
                  t.currItem && t.currItem.loading
                    ? (!t.allowProgressiveImg() ||
                        (t.currItem.img && !t.currItem.img.naturalWidth)) &&
                      F(!1)
                    : F(!0);
                }, g.loadingIndicatorDelay));
            }),
            d('imageLoadComplete', function (e, i) {
              t.currItem === i && F(!0);
            }));
      }),
        (x.setIdle = function (t) {
          (u = t), k(n, 'ui--idle', t);
        }),
        (x.update = function () {
          S && t.currItem
            ? (x.updateIndexIndicator(),
              g.captionEl &&
                (g.addCaptionHTMLFn(t.currItem, o),
                k(o, 'caption--empty', !t.currItem.title)),
              (w = !0))
            : (w = !1),
            C || _(),
            P();
        }),
        (x.updateFullscreen = function (n) {
          n &&
            setTimeout(function () {
              t.setScrollOffset(0, e.getScrollY());
            }, 50),
            e[(i.isFullscreen() ? 'add' : 'remove') + 'Class'](
              t.template,
              'pswp--fs'
            );
        }),
        (x.updateIndexIndicator = function () {
          g.counterEl &&
            (s.innerHTML =
              t.getCurrentIndex() +
              1 +
              g.indexIndicatorSep +
              g.getNumItemsFn());
        }),
        (x.onGlobalTap = function (i) {
          var n = (i = i || window.event).target || i.srcElement;
          if (!v)
            if (i.detail && 'mouse' === i.detail.pointerType) {
              if (I(n)) return void t.close();
              e.hasClass(n, 'pswp__img') &&
                (1 === t.getZoomLevel() &&
                t.getZoomLevel() <= t.currItem.fitRatio
                  ? g.clickToCloseNonZoomable && t.close()
                  : t.toggleDesktopZoom(i.detail.releasePoint));
            } else if (
              (g.tapToToggleControls &&
                (S ? x.hideControls() : x.showControls()),
              g.tapToClose && (e.hasClass(n, 'pswp__img') || I(n)))
            )
              return void t.close();
        }),
        (x.onMouseOver = function (t) {
          var e = (t = t || window.event).target || t.srcElement;
          k(n, 'ui--over-close', I(e));
        }),
        (x.hideControls = function () {
          e.addClass(n, 'pswp__ui--hidden'), (S = !1);
        }),
        (x.showControls = function () {
          (S = !0), w || x.update(), e.removeClass(n, 'pswp__ui--hidden');
        }),
        (x.supportsFullscreen = function () {
          var t = document;
          return !!(
            t.exitFullscreen ||
            t.mozCancelFullScreen ||
            t.webkitExitFullscreen ||
            t.msExitFullscreen
          );
        }),
        (x.getFullscreenAPI = function () {
          var e,
            i = document.documentElement,
            n = 'fullscreenchange';
          return (
            i.requestFullscreen
              ? (e = {
                  enterK: 'requestFullscreen',
                  exitK: 'exitFullscreen',
                  elementK: 'fullscreenElement',
                  eventK: n,
                })
              : i.mozRequestFullScreen
              ? (e = {
                  enterK: 'mozRequestFullScreen',
                  exitK: 'mozCancelFullScreen',
                  elementK: 'mozFullScreenElement',
                  eventK: 'moz' + n,
                })
              : i.webkitRequestFullscreen
              ? (e = {
                  enterK: 'webkitRequestFullscreen',
                  exitK: 'webkitExitFullscreen',
                  elementK: 'webkitFullscreenElement',
                  eventK: 'webkit' + n,
                })
              : i.msRequestFullscreen &&
                (e = {
                  enterK: 'msRequestFullscreen',
                  exitK: 'msExitFullscreen',
                  elementK: 'msFullscreenElement',
                  eventK: 'MSFullscreenChange',
                }),
            e &&
              ((e.enter = function () {
                return (
                  (c = g.closeOnScroll),
                  (g.closeOnScroll = !1),
                  'webkitRequestFullscreen' !== this.enterK
                    ? t.template[this.enterK]()
                    : void t.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
                );
              }),
              (e.exit = function () {
                return (g.closeOnScroll = c), document[this.exitK]();
              }),
              (e.isFullscreen = function () {
                return document[this.elementK];
              })),
            e
          );
        });
    };
  }),
  /*!
   * noUiSlider v15.2.0
   * Lightweight JavaScript range slider library with full multi-touch support.
   * MIT license
   */
  (function (t, e) {
    'object' == typeof exports && 'undefined' != typeof module
      ? e(exports)
      : 'function' == typeof define && define.amd
      ? define(['exports'], e)
      : e(
          ((t =
            'undefined' != typeof globalThis
              ? globalThis
              : t || self).noUiSlider = {})
        );
  })(this, function (t) {
    'use strict';
    var e, i;
    function n(t) {
      return 'object' == typeof t && 'function' == typeof t.to;
    }
    function o(t) {
      t.parentElement.removeChild(t);
    }
    function r(t) {
      return null != t;
    }
    function s(t) {
      t.preventDefault();
    }
    function a(t) {
      return 'number' == typeof t && !isNaN(t) && isFinite(t);
    }
    function l(t, e, i) {
      i > 0 &&
        (f(t, e),
        setTimeout(function () {
          h(t, e);
        }, i));
    }
    function c(t) {
      return Math.max(Math.min(t, 100), 0);
    }
    function u(t) {
      return Array.isArray(t) ? t : [t];
    }
    function d(t) {
      var e = (t = String(t)).split('.');
      return e.length > 1 ? e[1].length : 0;
    }
    function f(t, e) {
      t.classList && !/\s/.test(e)
        ? t.classList.add(e)
        : (t.className += ' ' + e);
    }
    function h(t, e) {
      t.classList && !/\s/.test(e)
        ? t.classList.remove(e)
        : (t.className = t.className.replace(
            new RegExp('(^|\\b)' + e.split(' ').join('|') + '(\\b|$)', 'gi'),
            ' '
          ));
    }
    function p(t) {
      var e = void 0 !== window.pageXOffset,
        i = 'CSS1Compat' === (t.compatMode || '');
      return {
        x: e
          ? window.pageXOffset
          : i
          ? t.documentElement.scrollLeft
          : t.body.scrollLeft,
        y: e
          ? window.pageYOffset
          : i
          ? t.documentElement.scrollTop
          : t.body.scrollTop,
      };
    }
    function m(t, e) {
      return 100 / (e - t);
    }
    function g(t, e, i) {
      return (100 * e) / (t[i + 1] - t[i]);
    }
    function v(t, e) {
      for (var i = 1; t >= e[i]; ) i += 1;
      return i;
    }
    function y(t, e, i) {
      if (i >= t.slice(-1)[0]) return 100;
      var n = v(i, t),
        o = t[n - 1],
        r = t[n],
        s = e[n - 1],
        a = e[n];
      return (
        s +
        (function (t, e) {
          return g(t, t[0] < 0 ? e + Math.abs(t[0]) : e - t[0], 0);
        })([o, r], i) /
          m(s, a)
      );
    }
    function b(t, e, i, n) {
      if (100 === n) return n;
      var o = v(n, t),
        r = t[o - 1],
        s = t[o];
      return i
        ? n - r > (s - r) / 2
          ? s
          : r
        : e[o - 1]
        ? t[o - 1] +
          (function (t, e) {
            return Math.round(t / e) * e;
          })(n - t[o - 1], e[o - 1])
        : n;
    }
    (t.PipsMode = void 0),
      ((e = t.PipsMode || (t.PipsMode = {})).Range = 'range'),
      (e.Steps = 'steps'),
      (e.Positions = 'positions'),
      (e.Count = 'count'),
      (e.Values = 'values'),
      (t.PipsType = void 0),
      ((i = t.PipsType || (t.PipsType = {}))[(i.None = -1)] = 'None'),
      (i[(i.NoValue = 0)] = 'NoValue'),
      (i[(i.LargeValue = 1)] = 'LargeValue'),
      (i[(i.SmallValue = 2)] = 'SmallValue');
    var x = (function () {
        function t(t, e, i) {
          var n;
          (this.xPct = []),
            (this.xVal = []),
            (this.xSteps = []),
            (this.xNumSteps = []),
            (this.xHighestCompleteStep = []),
            (this.xSteps = [i || !1]),
            (this.xNumSteps = [!1]),
            (this.snap = e);
          var o = [];
          for (
            Object.keys(t).forEach(function (e) {
              o.push([u(t[e]), e]);
            }),
              o.sort(function (t, e) {
                return t[0][0] - e[0][0];
              }),
              n = 0;
            n < o.length;
            n++
          )
            this.handleEntryPoint(o[n][1], o[n][0]);
          for (
            this.xNumSteps = this.xSteps.slice(0), n = 0;
            n < this.xNumSteps.length;
            n++
          )
            this.handleStepPoint(n, this.xNumSteps[n]);
        }
        return (
          (t.prototype.getDistance = function (t) {
            var e,
              i = [];
            for (e = 0; e < this.xNumSteps.length - 1; e++) {
              var n = this.xNumSteps[e];
              if (n && (t / n) % 1 != 0)
                throw new Error(
                  "noUiSlider: 'limit', 'margin' and 'padding' of " +
                    this.xPct[e] +
                    '% range must be divisible by step.'
                );
              i[e] = g(this.xVal, t, e);
            }
            return i;
          }),
          (t.prototype.getAbsoluteDistance = function (t, e, i) {
            var n,
              o = 0;
            if (t < this.xPct[this.xPct.length - 1])
              for (; t > this.xPct[o + 1]; ) o++;
            else
              t === this.xPct[this.xPct.length - 1] &&
                (o = this.xPct.length - 2);
            i || t !== this.xPct[o + 1] || o++, null === e && (e = []);
            var r = 1,
              s = e[o],
              a = 0,
              l = 0,
              c = 0,
              u = 0;
            for (
              n = i
                ? (t - this.xPct[o]) / (this.xPct[o + 1] - this.xPct[o])
                : (this.xPct[o + 1] - t) / (this.xPct[o + 1] - this.xPct[o]);
              s > 0;

            )
              (a = this.xPct[o + 1 + u] - this.xPct[o + u]),
                e[o + u] * r + 100 - 100 * n > 100
                  ? ((l = a * n), (r = (s - 100 * n) / e[o + u]), (n = 1))
                  : ((l = ((e[o + u] * a) / 100) * r), (r = 0)),
                i
                  ? ((c -= l), this.xPct.length + u >= 1 && u--)
                  : ((c += l), this.xPct.length - u >= 1 && u++),
                (s = e[o + u] * r);
            return t + c;
          }),
          (t.prototype.toStepping = function (t) {
            return (t = y(this.xVal, this.xPct, t));
          }),
          (t.prototype.fromStepping = function (t) {
            return (function (t, e, i) {
              if (i >= 100) return t.slice(-1)[0];
              var n = v(i, e),
                o = t[n - 1],
                r = t[n],
                s = e[n - 1];
              return (function (t, e) {
                return (e * (t[1] - t[0])) / 100 + t[0];
              })([o, r], (i - s) * m(s, e[n]));
            })(this.xVal, this.xPct, t);
          }),
          (t.prototype.getStep = function (t) {
            return (t = b(this.xPct, this.xSteps, this.snap, t));
          }),
          (t.prototype.getDefaultStep = function (t, e, i) {
            var n = v(t, this.xPct);
            return (
              (100 === t || (e && t === this.xPct[n - 1])) &&
                (n = Math.max(n - 1, 1)),
              (this.xVal[n] - this.xVal[n - 1]) / i
            );
          }),
          (t.prototype.getNearbySteps = function (t) {
            var e = v(t, this.xPct);
            return {
              stepBefore: {
                startValue: this.xVal[e - 2],
                step: this.xNumSteps[e - 2],
                highestStep: this.xHighestCompleteStep[e - 2],
              },
              thisStep: {
                startValue: this.xVal[e - 1],
                step: this.xNumSteps[e - 1],
                highestStep: this.xHighestCompleteStep[e - 1],
              },
              stepAfter: {
                startValue: this.xVal[e],
                step: this.xNumSteps[e],
                highestStep: this.xHighestCompleteStep[e],
              },
            };
          }),
          (t.prototype.countStepDecimals = function () {
            var t = this.xNumSteps.map(d);
            return Math.max.apply(null, t);
          }),
          (t.prototype.convert = function (t) {
            return this.getStep(this.toStepping(t));
          }),
          (t.prototype.handleEntryPoint = function (t, e) {
            var i;
            if (
              !a((i = 'min' === t ? 0 : 'max' === t ? 100 : parseFloat(t))) ||
              !a(e[0])
            )
              throw new Error("noUiSlider: 'range' value isn't numeric.");
            this.xPct.push(i), this.xVal.push(e[0]);
            var n = Number(e[1]);
            i
              ? this.xSteps.push(!isNaN(n) && n)
              : isNaN(n) || (this.xSteps[0] = n),
              this.xHighestCompleteStep.push(0);
          }),
          (t.prototype.handleStepPoint = function (t, e) {
            if (e)
              if (this.xVal[t] !== this.xVal[t + 1]) {
                this.xSteps[t] =
                  g([this.xVal[t], this.xVal[t + 1]], e, 0) /
                  m(this.xPct[t], this.xPct[t + 1]);
                var i = (this.xVal[t + 1] - this.xVal[t]) / this.xNumSteps[t],
                  n = Math.ceil(Number(i.toFixed(3)) - 1),
                  o = this.xVal[t] + this.xNumSteps[t] * n;
                this.xHighestCompleteStep[t] = o;
              } else
                this.xSteps[t] = this.xHighestCompleteStep[t] = this.xVal[t];
          }),
          t
        );
      })(),
      w = {
        to: function (t) {
          return void 0 === t ? '' : t.toFixed(2);
        },
        from: Number,
      },
      S = {
        target: 'target',
        base: 'base',
        origin: 'origin',
        handle: 'handle',
        handleLower: 'handle-lower',
        handleUpper: 'handle-upper',
        touchArea: 'touch-area',
        horizontal: 'horizontal',
        vertical: 'vertical',
        background: 'background',
        connect: 'connect',
        connects: 'connects',
        ltr: 'ltr',
        rtl: 'rtl',
        textDirectionLtr: 'txt-dir-ltr',
        textDirectionRtl: 'txt-dir-rtl',
        draggable: 'draggable',
        drag: 'state-drag',
        tap: 'state-tap',
        active: 'active',
        tooltip: 'tooltip',
        pips: 'pips',
        pipsHorizontal: 'pips-horizontal',
        pipsVertical: 'pips-vertical',
        marker: 'marker',
        markerHorizontal: 'marker-horizontal',
        markerVertical: 'marker-vertical',
        markerNormal: 'marker-normal',
        markerLarge: 'marker-large',
        markerSub: 'marker-sub',
        value: 'value',
        valueHorizontal: 'value-horizontal',
        valueVertical: 'value-vertical',
        valueNormal: 'value-normal',
        valueLarge: 'value-large',
        valueSub: 'value-sub',
      },
      C = '.__tooltips',
      E = '.__aria';
    function z(t, e) {
      if (!a(e)) throw new Error("noUiSlider: 'step' is not numeric.");
      t.singleStep = e;
    }
    function D(t, e) {
      if (!a(e))
        throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
      t.keyboardPageMultiplier = e;
    }
    function k(t, e) {
      if (!a(e))
        throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
      t.keyboardDefaultStep = e;
    }
    function P(t, e) {
      if ('object' != typeof e || Array.isArray(e))
        throw new Error("noUiSlider: 'range' is not an object.");
      if (void 0 === e.min || void 0 === e.max)
        throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
      if (e.min === e.max)
        throw new Error("noUiSlider: 'range' 'min' and 'max' cannot be equal.");
      t.spectrum = new x(e, t.snap || !1, t.singleStep);
    }
    function A(t, e) {
      if (((e = u(e)), !Array.isArray(e) || !e.length))
        throw new Error("noUiSlider: 'start' option is incorrect.");
      (t.handles = e.length), (t.start = e);
    }
    function _(t, e) {
      if ('boolean' != typeof e)
        throw new Error("noUiSlider: 'snap' option must be a boolean.");
      t.snap = e;
    }
    function T(t, e) {
      if ('boolean' != typeof e)
        throw new Error("noUiSlider: 'animate' option must be a boolean.");
      t.animate = e;
    }
    function M(t, e) {
      if ('number' != typeof e)
        throw new Error(
          "noUiSlider: 'animationDuration' option must be a number."
        );
      t.animationDuration = e;
    }
    function I(t, e) {
      var i,
        n = [!1];
      if (
        ('lower' === e ? (e = [!0, !1]) : 'upper' === e && (e = [!1, !0]),
        !0 === e || !1 === e)
      ) {
        for (i = 1; i < t.handles; i++) n.push(e);
        n.push(!1);
      } else {
        if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1)
          throw new Error(
            "noUiSlider: 'connect' option doesn't match handle count."
          );
        n = e;
      }
      t.connect = n;
    }
    function L(t, e) {
      switch (e) {
        case 'horizontal':
          t.ort = 0;
          break;
        case 'vertical':
          t.ort = 1;
          break;
        default:
          throw new Error("noUiSlider: 'orientation' option is invalid.");
      }
    }
    function N(t, e) {
      if (!a(e))
        throw new Error("noUiSlider: 'margin' option must be numeric.");
      0 !== e && (t.margin = t.spectrum.getDistance(e));
    }
    function O(t, e) {
      if (!a(e)) throw new Error("noUiSlider: 'limit' option must be numeric.");
      if (((t.limit = t.spectrum.getDistance(e)), !t.limit || t.handles < 2))
        throw new Error(
          "noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles."
        );
    }
    function F(t, e) {
      var i;
      if (!a(e) && !Array.isArray(e))
        throw new Error(
          "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
        );
      if (Array.isArray(e) && 2 !== e.length && !a(e[0]) && !a(e[1]))
        throw new Error(
          "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
        );
      if (0 !== e) {
        for (
          Array.isArray(e) || (e = [e, e]),
            t.padding = [
              t.spectrum.getDistance(e[0]),
              t.spectrum.getDistance(e[1]),
            ],
            i = 0;
          i < t.spectrum.xNumSteps.length - 1;
          i++
        )
          if (t.padding[0][i] < 0 || t.padding[1][i] < 0)
            throw new Error(
              "noUiSlider: 'padding' option must be a positive number(s)."
            );
        var n = e[0] + e[1],
          o = t.spectrum.xVal[0];
        if (n / (t.spectrum.xVal[t.spectrum.xVal.length - 1] - o) > 1)
          throw new Error(
            "noUiSlider: 'padding' option must not exceed 100% of the range."
          );
      }
    }
    function U(t, e) {
      switch (e) {
        case 'ltr':
          t.dir = 0;
          break;
        case 'rtl':
          t.dir = 1;
          break;
        default:
          throw new Error("noUiSlider: 'direction' option was not recognized.");
      }
    }
    function R(t, e) {
      if ('string' != typeof e)
        throw new Error(
          "noUiSlider: 'behaviour' must be a string containing options."
        );
      var i = e.indexOf('tap') >= 0,
        n = e.indexOf('drag') >= 0,
        o = e.indexOf('fixed') >= 0,
        r = e.indexOf('snap') >= 0,
        s = e.indexOf('hover') >= 0,
        a = e.indexOf('unconstrained') >= 0;
      if (o) {
        if (2 !== t.handles)
          throw new Error(
            "noUiSlider: 'fixed' behaviour must be used with 2 handles"
          );
        N(t, t.start[1] - t.start[0]);
      }
      if (a && (t.margin || t.limit))
        throw new Error(
          "noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit"
        );
      t.events = {
        tap: i || r,
        drag: n,
        fixed: o,
        snap: r,
        hover: s,
        unconstrained: a,
      };
    }
    function j(t, e) {
      if (!1 !== e)
        if (!0 === e || n(e)) {
          t.tooltips = [];
          for (var i = 0; i < t.handles; i++) t.tooltips.push(e);
        } else {
          if ((e = u(e)).length !== t.handles)
            throw new Error(
              'noUiSlider: must pass a formatter for all handles.'
            );
          e.forEach(function (t) {
            if ('boolean' != typeof t && !n(t))
              throw new Error(
                "noUiSlider: 'tooltips' must be passed a formatter or 'false'."
              );
          }),
            (t.tooltips = e);
        }
    }
    function W(t, e) {
      if (!n(e))
        throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
      t.ariaFormat = e;
    }
    function H(t, e) {
      if (
        !(function (t) {
          return n(t) && 'function' == typeof t.from;
        })(e)
      )
        throw new Error(
          "noUiSlider: 'format' requires 'to' and 'from' methods."
        );
      t.format = e;
    }
    function V(t, e) {
      if ('boolean' != typeof e)
        throw new Error(
          "noUiSlider: 'keyboardSupport' option must be a boolean."
        );
      t.keyboardSupport = e;
    }
    function q(t, e) {
      t.documentElement = e;
    }
    function B(t, e) {
      if ('string' != typeof e && !1 !== e)
        throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
      t.cssPrefix = e;
    }
    function Z(t, e) {
      if ('object' != typeof e)
        throw new Error("noUiSlider: 'cssClasses' must be an object.");
      'string' == typeof t.cssPrefix
        ? ((t.cssClasses = {}),
          Object.keys(e).forEach(function (i) {
            t.cssClasses[i] = t.cssPrefix + e[i];
          }))
        : (t.cssClasses = e);
    }
    function X(t) {
      var e = {
          margin: null,
          limit: null,
          padding: null,
          animate: !0,
          animationDuration: 300,
          ariaFormat: w,
          format: w,
        },
        i = {
          step: { r: !1, t: z },
          keyboardPageMultiplier: { r: !1, t: D },
          keyboardDefaultStep: { r: !1, t: k },
          start: { r: !0, t: A },
          connect: { r: !0, t: I },
          direction: { r: !0, t: U },
          snap: { r: !1, t: _ },
          animate: { r: !1, t: T },
          animationDuration: { r: !1, t: M },
          range: { r: !0, t: P },
          orientation: { r: !1, t: L },
          margin: { r: !1, t: N },
          limit: { r: !1, t: O },
          padding: { r: !1, t: F },
          behaviour: { r: !0, t: R },
          ariaFormat: { r: !1, t: W },
          format: { r: !1, t: H },
          tooltips: { r: !1, t: j },
          keyboardSupport: { r: !0, t: V },
          documentElement: { r: !1, t: q },
          cssPrefix: { r: !0, t: B },
          cssClasses: { r: !0, t: Z },
        },
        n = {
          connect: !1,
          direction: 'ltr',
          behaviour: 'tap',
          orientation: 'horizontal',
          keyboardSupport: !0,
          cssPrefix: 'noUi-',
          cssClasses: S,
          keyboardPageMultiplier: 5,
          keyboardDefaultStep: 10,
        };
      t.format && !t.ariaFormat && (t.ariaFormat = t.format),
        Object.keys(i).forEach(function (o) {
          if (r(t[o]) || void 0 !== n[o]) i[o].t(e, r(t[o]) ? t[o] : n[o]);
          else if (i[o].r)
            throw new Error("noUiSlider: '" + o + "' is required.");
        }),
        (e.pips = t.pips);
      var o = document.createElement('div'),
        s = void 0 !== o.style.msTransform,
        a = void 0 !== o.style.transform;
      e.transformRule = a ? 'transform' : s ? 'msTransform' : 'webkitTransform';
      return (
        (e.style = [
          ['left', 'top'],
          ['right', 'bottom'],
        ][e.dir][e.ort]),
        e
      );
    }
    function G(e, i, n) {
      var a,
        d,
        m,
        g,
        v,
        y,
        b,
        x = window.navigator.pointerEnabled
          ? { start: 'pointerdown', move: 'pointermove', end: 'pointerup' }
          : window.navigator.msPointerEnabled
          ? {
              start: 'MSPointerDown',
              move: 'MSPointerMove',
              end: 'MSPointerUp',
            }
          : {
              start: 'mousedown touchstart',
              move: 'mousemove touchmove',
              end: 'mouseup touchend',
            },
        w =
          window.CSS &&
          CSS.supports &&
          CSS.supports('touch-action', 'none') &&
          (function () {
            var t = !1;
            try {
              var e = Object.defineProperty({}, 'passive', {
                get: function () {
                  t = !0;
                },
              });
              window.addEventListener('test', null, e);
            } catch (t) {}
            return t;
          })(),
        S = e,
        z = i.spectrum,
        D = [],
        k = [],
        P = [],
        A = 0,
        _ = {},
        T = e.ownerDocument,
        M = i.documentElement || T.documentElement,
        I = T.body,
        L = 'rtl' === T.dir || 1 === i.ort ? 0 : 100;
      function N(t, e) {
        var i = T.createElement('div');
        return e && f(i, e), t.appendChild(i), i;
      }
      function O(t, e) {
        var n = N(t, i.cssClasses.origin),
          o = N(n, i.cssClasses.handle);
        return (
          N(o, i.cssClasses.touchArea),
          o.setAttribute('data-handle', String(e)),
          i.keyboardSupport &&
            (o.setAttribute('tabindex', '0'),
            o.addEventListener('keydown', function (t) {
              return (function (t, e) {
                if (R() || j(e)) return !1;
                var n = ['Left', 'Right'],
                  o = ['Down', 'Up'],
                  r = ['PageDown', 'PageUp'],
                  s = ['Home', 'End'];
                i.dir && !i.ort
                  ? n.reverse()
                  : i.ort && !i.dir && (o.reverse(), r.reverse());
                var a,
                  l = t.key.replace('Arrow', ''),
                  c = l === r[0],
                  u = l === r[1],
                  d = l === o[0] || l === n[0] || c,
                  f = l === o[1] || l === n[1] || u,
                  h = l === s[0],
                  p = l === s[1];
                if (!(d || f || h || p)) return !0;
                if ((t.preventDefault(), f || d)) {
                  var m = i.keyboardPageMultiplier,
                    g = d ? 0 : 1,
                    v = vt(e)[g];
                  if (null === v) return !1;
                  !1 === v &&
                    (v = z.getDefaultStep(k[e], d, i.keyboardDefaultStep)),
                    (u || c) && (v *= m),
                    (v = Math.max(v, 1e-7)),
                    (v *= d ? -1 : 1),
                    (a = D[e] + v);
                } else a = p ? i.spectrum.xVal[i.spectrum.xVal.length - 1] : i.spectrum.xVal[0];
                return (
                  ft(e, z.toStepping(a), !0, !0),
                  st('slide', e),
                  st('update', e),
                  st('change', e),
                  st('set', e),
                  !1
                );
              })(t, e);
            })),
          o.setAttribute('role', 'slider'),
          o.setAttribute('aria-orientation', i.ort ? 'vertical' : 'horizontal'),
          0 === e
            ? f(o, i.cssClasses.handleLower)
            : e === i.handles - 1 && f(o, i.cssClasses.handleUpper),
          n
        );
      }
      function F(t, e) {
        return !!e && N(t, i.cssClasses.connect);
      }
      function U(t, e) {
        return (
          !(!i.tooltips || !i.tooltips[e]) &&
          N(t.firstChild, i.cssClasses.tooltip)
        );
      }
      function R() {
        return S.hasAttribute('disabled');
      }
      function j(t) {
        return d[t].hasAttribute('disabled');
      }
      function W() {
        v &&
          (rt('update' + C),
          v.forEach(function (t) {
            t && o(t);
          }),
          (v = null));
      }
      function H() {
        W(),
          (v = d.map(U)),
          ot('update' + C, function (t, e, n) {
            if (v && i.tooltips && !1 !== v[e]) {
              var o = t[e];
              !0 !== i.tooltips[e] && (o = i.tooltips[e].to(n[e])),
                (v[e].innerHTML = o);
            }
          });
      }
      function V(t, e) {
        return t.map(function (t) {
          return z.fromStepping(e ? z.getStep(t) : t);
        });
      }
      function q(e) {
        var i,
          n = (function (e) {
            if (e.mode === t.PipsMode.Range || e.mode === t.PipsMode.Steps)
              return z.xVal;
            if (e.mode === t.PipsMode.Count) {
              if (e.values < 2)
                throw new Error(
                  "noUiSlider: 'values' (>= 2) required for mode 'count'."
                );
              for (var i = e.values - 1, n = 100 / i, o = []; i--; )
                o[i] = i * n;
              return o.push(100), V(o, e.stepped);
            }
            return e.mode === t.PipsMode.Positions
              ? V(e.values, e.stepped)
              : e.mode === t.PipsMode.Values
              ? e.stepped
                ? e.values.map(function (t) {
                    return z.fromStepping(z.getStep(z.toStepping(t)));
                  })
                : e.values
              : [];
          })(e),
          o = {},
          r = z.xVal[0],
          s = z.xVal[z.xVal.length - 1],
          a = !1,
          l = !1,
          c = 0;
        return (
          (i = n.slice().sort(function (t, e) {
            return t - e;
          })),
          (n = i.filter(function (t) {
            return !this[t] && (this[t] = !0);
          }, {}))[0] !== r && (n.unshift(r), (a = !0)),
          n[n.length - 1] !== s && (n.push(s), (l = !0)),
          n.forEach(function (i, r) {
            var s,
              u,
              d,
              f,
              h,
              p,
              m,
              g,
              v,
              y,
              b = i,
              x = n[r + 1],
              w = e.mode === t.PipsMode.Steps;
            for (
              w && (s = z.xNumSteps[r]),
                s || (s = x - b),
                void 0 === x && (x = b),
                s = Math.max(s, 1e-7),
                u = b;
              u <= x;
              u = Number((u + s).toFixed(7))
            ) {
              for (
                g = (h = (f = z.toStepping(u)) - c) / (e.density || 1),
                  y = h / (v = Math.round(g)),
                  d = 1;
                d <= v;
                d += 1
              )
                o[(p = c + d * y).toFixed(5)] = [z.fromStepping(p), 0];
              (m =
                n.indexOf(u) > -1
                  ? t.PipsType.LargeValue
                  : w
                  ? t.PipsType.SmallValue
                  : t.PipsType.NoValue),
                !r && a && u !== x && (m = 0),
                (u === x && l) || (o[f.toFixed(5)] = [u, m]),
                (c = f);
            }
          }),
          o
        );
      }
      function B(e, n, o) {
        var r,
          s,
          a = T.createElement('div'),
          l =
            (((r = {})[t.PipsType.None] = ''),
            (r[t.PipsType.NoValue] = i.cssClasses.valueNormal),
            (r[t.PipsType.LargeValue] = i.cssClasses.valueLarge),
            (r[t.PipsType.SmallValue] = i.cssClasses.valueSub),
            r),
          c =
            (((s = {})[t.PipsType.None] = ''),
            (s[t.PipsType.NoValue] = i.cssClasses.markerNormal),
            (s[t.PipsType.LargeValue] = i.cssClasses.markerLarge),
            (s[t.PipsType.SmallValue] = i.cssClasses.markerSub),
            s),
          u = [i.cssClasses.valueHorizontal, i.cssClasses.valueVertical],
          d = [i.cssClasses.markerHorizontal, i.cssClasses.markerVertical];
        function h(t, e) {
          var n = e === i.cssClasses.value,
            o = n ? l : c;
          return e + ' ' + (n ? u : d)[i.ort] + ' ' + o[t];
        }
        return (
          f(a, i.cssClasses.pips),
          f(
            a,
            0 === i.ort
              ? i.cssClasses.pipsHorizontal
              : i.cssClasses.pipsVertical
          ),
          Object.keys(e).forEach(function (r) {
            !(function (e, r, s) {
              if ((s = n ? n(r, s) : s) !== t.PipsType.None) {
                var l = N(a, !1);
                (l.className = h(s, i.cssClasses.marker)),
                  (l.style[i.style] = e + '%'),
                  s > t.PipsType.NoValue &&
                    (((l = N(a, !1)).className = h(s, i.cssClasses.value)),
                    l.setAttribute('data-value', String(r)),
                    (l.style[i.style] = e + '%'),
                    (l.innerHTML = String(o.to(r))));
              }
            })(r, e[r][0], e[r][1]);
          }),
          a
        );
      }
      function Z() {
        g && (o(g), (g = null));
      }
      function G(t) {
        Z();
        var e = q(t),
          i = t.filter,
          n = t.format || {
            to: function (t) {
              return String(Math.round(t));
            },
          };
        return (g = S.appendChild(B(e, i, n)));
      }
      function Y() {
        var t = a.getBoundingClientRect(),
          e = 'offset' + ['Width', 'Height'][i.ort];
        return 0 === i.ort ? t.width || a[e] : t.height || a[e];
      }
      function K(t, e, n, o) {
        var r = function (r) {
            var s,
              a,
              l = (function (t, e, i) {
                var n = 0 === t.type.indexOf('touch'),
                  o = 0 === t.type.indexOf('mouse'),
                  r = 0 === t.type.indexOf('pointer'),
                  s = 0,
                  a = 0;
                0 === t.type.indexOf('MSPointer') && (r = !0);
                if ('mousedown' === t.type && !t.buttons && !t.touches)
                  return !1;
                if (n) {
                  var l = function (e) {
                    var n = e.target;
                    return (
                      n === i ||
                      i.contains(n) ||
                      (t.composed && t.composedPath().shift() === i)
                    );
                  };
                  if ('touchstart' === t.type) {
                    var c = Array.prototype.filter.call(t.touches, l);
                    if (c.length > 1) return !1;
                    (s = c[0].pageX), (a = c[0].pageY);
                  } else {
                    var u = Array.prototype.find.call(t.changedTouches, l);
                    if (!u) return !1;
                    (s = u.pageX), (a = u.pageY);
                  }
                }
                (e = e || p(T)),
                  (o || r) && ((s = t.clientX + e.x), (a = t.clientY + e.y));
                return (
                  (t.pageOffset = e),
                  (t.points = [s, a]),
                  (t.cursor = o || r),
                  t
                );
              })(r, o.pageOffset, o.target || e);
            return (
              !!l &&
              !(R() && !o.doNotReject) &&
              ((s = S),
              (a = i.cssClasses.tap),
              !(
                (s.classList
                  ? s.classList.contains(a)
                  : new RegExp('\\b' + a + '\\b').test(s.className)) &&
                !o.doNotReject
              ) &&
                !(t === x.start && void 0 !== l.buttons && l.buttons > 1) &&
                (!o.hover || !l.buttons) &&
                (w || l.preventDefault(),
                (l.calcPoint = l.points[i.ort]),
                void n(l, o)))
            );
          },
          s = [];
        return (
          t.split(' ').forEach(function (t) {
            e.addEventListener(t, r, !!w && { passive: !0 }), s.push([t, r]);
          }),
          s
        );
      }
      function $(t) {
        var e,
          n,
          o,
          r,
          s,
          l,
          u =
            (100 *
              (t -
                ((e = a),
                (n = i.ort),
                (o = e.getBoundingClientRect()),
                (r = e.ownerDocument),
                (s = r.documentElement),
                (l = p(r)),
                /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) &&
                  (l.x = 0),
                n ? o.top + l.y - s.clientTop : o.left + l.x - s.clientLeft))) /
            Y();
        return (u = c(u)), i.dir ? 100 - u : u;
      }
      function J(t, e) {
        'mouseout' === t.type &&
          'HTML' === t.target.nodeName &&
          null === t.relatedTarget &&
          tt(t, e);
      }
      function Q(t, e) {
        if (
          -1 === navigator.appVersion.indexOf('MSIE 9') &&
          0 === t.buttons &&
          0 !== e.buttonsProperty
        )
          return tt(t, e);
        var n = (i.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
        ct(
          n > 0,
          (100 * n) / e.baseSize,
          e.locations,
          e.handleNumbers,
          e.connect
        );
      }
      function tt(t, e) {
        e.handle && (h(e.handle, i.cssClasses.active), (A -= 1)),
          e.listeners.forEach(function (t) {
            M.removeEventListener(t[0], t[1]);
          }),
          0 === A &&
            (h(S, i.cssClasses.drag),
            dt(),
            t.cursor &&
              ((I.style.cursor = ''), I.removeEventListener('selectstart', s))),
          e.handleNumbers.forEach(function (t) {
            st('change', t), st('set', t), st('end', t);
          });
      }
      function et(t, e) {
        if (!e.handleNumbers.some(j)) {
          var n;
          if (1 === e.handleNumbers.length)
            (n = d[e.handleNumbers[0]].children[0]),
              (A += 1),
              f(n, i.cssClasses.active);
          t.stopPropagation();
          var o = [],
            r = K(x.move, M, Q, {
              target: t.target,
              handle: n,
              connect: e.connect,
              listeners: o,
              startCalcPoint: t.calcPoint,
              baseSize: Y(),
              pageOffset: t.pageOffset,
              handleNumbers: e.handleNumbers,
              buttonsProperty: t.buttons,
              locations: k.slice(),
            }),
            a = K(x.end, M, tt, {
              target: t.target,
              handle: n,
              listeners: o,
              doNotReject: !0,
              handleNumbers: e.handleNumbers,
            }),
            l = K('mouseout', M, J, {
              target: t.target,
              handle: n,
              listeners: o,
              doNotReject: !0,
              handleNumbers: e.handleNumbers,
            });
          o.push.apply(o, r.concat(a, l)),
            t.cursor &&
              ((I.style.cursor = getComputedStyle(t.target).cursor),
              d.length > 1 && f(S, i.cssClasses.drag),
              I.addEventListener('selectstart', s, !1)),
            e.handleNumbers.forEach(function (t) {
              st('start', t);
            });
        }
      }
      function it(t) {
        t.stopPropagation();
        var e = $(t.calcPoint),
          n = (function (t) {
            var e = 100,
              i = !1;
            return (
              d.forEach(function (n, o) {
                if (!j(o)) {
                  var r = k[o],
                    s = Math.abs(r - t);
                  (s < e || (s <= e && t > r) || (100 === s && 100 === e)) &&
                    ((i = o), (e = s));
                }
              }),
              i
            );
          })(e);
        !1 !== n &&
          (i.events.snap || l(S, i.cssClasses.tap, i.animationDuration),
          ft(n, e, !0, !0),
          dt(),
          st('slide', n, !0),
          st('update', n, !0),
          st('change', n, !0),
          st('set', n, !0),
          i.events.snap && et(t, { handleNumbers: [n] }));
      }
      function nt(t) {
        var e = $(t.calcPoint),
          i = z.getStep(e),
          n = z.fromStepping(i);
        Object.keys(_).forEach(function (t) {
          'hover' === t.split('.')[0] &&
            _[t].forEach(function (t) {
              t.call(yt, n);
            });
        });
      }
      function ot(t, e) {
        (_[t] = _[t] || []),
          _[t].push(e),
          'update' === t.split('.')[0] &&
            d.forEach(function (t, e) {
              st('update', e);
            });
      }
      function rt(t) {
        var e = t && t.split('.')[0],
          i = e ? t.substring(e.length) : t;
        Object.keys(_).forEach(function (t) {
          var n = t.split('.')[0],
            o = t.substring(n.length);
          (e && e !== n) ||
            (i && i !== o) ||
            ((function (t) {
              return t === E || t === C;
            })(o) &&
              i !== o) ||
            delete _[t];
        });
      }
      function st(t, e, n) {
        Object.keys(_).forEach(function (o) {
          var r = o.split('.')[0];
          t === r &&
            _[o].forEach(function (t) {
              t.call(
                yt,
                D.map(i.format.to),
                e,
                D.slice(),
                n || !1,
                k.slice(),
                yt
              );
            });
        });
      }
      function at(t, e, n, o, r, s) {
        var a;
        return (
          d.length > 1 &&
            !i.events.unconstrained &&
            (o &&
              e > 0 &&
              ((a = z.getAbsoluteDistance(t[e - 1], i.margin, !1)),
              (n = Math.max(n, a))),
            r &&
              e < d.length - 1 &&
              ((a = z.getAbsoluteDistance(t[e + 1], i.margin, !0)),
              (n = Math.min(n, a)))),
          d.length > 1 &&
            i.limit &&
            (o &&
              e > 0 &&
              ((a = z.getAbsoluteDistance(t[e - 1], i.limit, !1)),
              (n = Math.min(n, a))),
            r &&
              e < d.length - 1 &&
              ((a = z.getAbsoluteDistance(t[e + 1], i.limit, !0)),
              (n = Math.max(n, a)))),
          i.padding &&
            (0 === e &&
              ((a = z.getAbsoluteDistance(0, i.padding[0], !1)),
              (n = Math.max(n, a))),
            e === d.length - 1 &&
              ((a = z.getAbsoluteDistance(100, i.padding[1], !0)),
              (n = Math.min(n, a)))),
          !((n = c((n = z.getStep(n)))) === t[e] && !s) && n
        );
      }
      function lt(t, e) {
        var n = i.ort;
        return (n ? e : t) + ', ' + (n ? t : e);
      }
      function ct(t, e, i, n, o) {
        var r = i.slice(),
          s = n[0],
          a = [!t, t],
          l = [t, !t];
        (n = n.slice()),
          t && n.reverse(),
          n.length > 1
            ? n.forEach(function (t, i) {
                var n = at(r, t, r[t] + e, a[i], l[i], !1);
                !1 === n ? (e = 0) : ((e = n - r[t]), (r[t] = n));
              })
            : (a = l = [!0]);
        var c = !1;
        n.forEach(function (t, n) {
          c = ft(t, i[t] + e, a[n], l[n]) || c;
        }),
          c &&
            (n.forEach(function (t) {
              st('update', t), st('slide', t);
            }),
            null != o && st('drag', s));
      }
      function ut(t, e) {
        return i.dir ? 100 - t - e : t;
      }
      function dt() {
        P.forEach(function (t) {
          var e = k[t] > 50 ? -1 : 1,
            i = 3 + (d.length + e * t);
          d[t].style.zIndex = String(i);
        });
      }
      function ft(t, e, n, o, r) {
        return (
          r || (e = at(k, t, e, n, o, !1)),
          !1 !== e &&
            ((function (t, e) {
              (k[t] = e), (D[t] = z.fromStepping(e));
              var n = 'translate(' + lt(10 * (ut(e, 0) - L) + '%', '0') + ')';
              (d[t].style[i.transformRule] = n), ht(t), ht(t + 1);
            })(t, e),
            !0)
        );
      }
      function ht(t) {
        if (m[t]) {
          var e = 0,
            n = 100;
          0 !== t && (e = k[t - 1]), t !== m.length - 1 && (n = k[t]);
          var o = n - e,
            r = 'translate(' + lt(ut(e, o) + '%', '0') + ')',
            s = 'scale(' + lt(o / 100, '1') + ')';
          m[t].style[i.transformRule] = r + ' ' + s;
        }
      }
      function pt(t, e) {
        return null === t || !1 === t || void 0 === t
          ? k[e]
          : ('number' == typeof t && (t = String(t)),
            !1 !== (t = i.format.from(t)) && (t = z.toStepping(t)),
            !1 === t || isNaN(t) ? k[e] : t);
      }
      function mt(t, e, n) {
        var o = u(t),
          r = void 0 === k[0];
        (e = void 0 === e || e),
          i.animate && !r && l(S, i.cssClasses.tap, i.animationDuration),
          P.forEach(function (t) {
            ft(t, pt(o[t], t), !0, !1, n);
          });
        for (var s = 1 === P.length ? 0 : 1; s < P.length; ++s)
          P.forEach(function (t) {
            ft(t, k[t], !0, !0, n);
          });
        dt(),
          P.forEach(function (t) {
            st('update', t), null !== o[t] && e && st('set', t);
          });
      }
      function gt(t) {
        if ((void 0 === t && (t = !1), t))
          return 1 === D.length ? D[0] : D.slice(0);
        var e = D.map(i.format.to);
        return 1 === e.length ? e[0] : e;
      }
      function vt(t) {
        var e = k[t],
          n = z.getNearbySteps(e),
          o = D[t],
          r = n.thisStep.step,
          s = null;
        if (i.snap)
          return [
            o - n.stepBefore.startValue || null,
            n.stepAfter.startValue - o || null,
          ];
        !1 !== r &&
          o + r > n.stepAfter.startValue &&
          (r = n.stepAfter.startValue - o),
          (s =
            o > n.thisStep.startValue
              ? n.thisStep.step
              : !1 !== n.stepBefore.step && o - n.stepBefore.highestStep),
          100 === e ? (r = null) : 0 === e && (s = null);
        var a = z.countStepDecimals();
        return (
          null !== r && !1 !== r && (r = Number(r.toFixed(a))),
          null !== s && !1 !== s && (s = Number(s.toFixed(a))),
          [s, r]
        );
      }
      f((y = S), i.cssClasses.target),
        0 === i.dir ? f(y, i.cssClasses.ltr) : f(y, i.cssClasses.rtl),
        0 === i.ort
          ? f(y, i.cssClasses.horizontal)
          : f(y, i.cssClasses.vertical),
        f(
          y,
          'rtl' === getComputedStyle(y).direction
            ? i.cssClasses.textDirectionRtl
            : i.cssClasses.textDirectionLtr
        ),
        (a = N(y, i.cssClasses.base)),
        (function (t, e) {
          var n = N(e, i.cssClasses.connects);
          (d = []), (m = []).push(F(n, t[0]));
          for (var o = 0; o < i.handles; o++)
            d.push(O(e, o)), (P[o] = o), m.push(F(n, t[o + 1]));
        })(i.connect, a),
        (b = i.events).fixed ||
          d.forEach(function (t, e) {
            K(x.start, t.children[0], et, { handleNumbers: [e] });
          }),
        b.tap && K(x.start, a, it, {}),
        b.hover && K(x.move, a, nt, { hover: !0 }),
        b.drag &&
          m.forEach(function (t, e) {
            if (!1 !== t && 0 !== e && e !== m.length - 1) {
              var n = d[e - 1],
                o = d[e],
                r = [t];
              f(t, i.cssClasses.draggable),
                b.fixed && (r.push(n.children[0]), r.push(o.children[0])),
                r.forEach(function (i) {
                  K(x.start, i, et, {
                    handles: [n, o],
                    handleNumbers: [e - 1, e],
                    connect: t,
                  });
                });
            }
          }),
        mt(i.start),
        i.pips && G(i.pips),
        i.tooltips && H(),
        rt('update' + E),
        ot('update' + E, function (t, e, n, o, r) {
          P.forEach(function (t) {
            var e = d[t],
              o = at(k, t, 0, !0, !0, !0),
              s = at(k, t, 100, !0, !0, !0),
              a = r[t],
              l = String(i.ariaFormat.to(n[t]));
            (o = z.fromStepping(o).toFixed(1)),
              (s = z.fromStepping(s).toFixed(1)),
              (a = z.fromStepping(a).toFixed(1)),
              e.children[0].setAttribute('aria-valuemin', o),
              e.children[0].setAttribute('aria-valuemax', s),
              e.children[0].setAttribute('aria-valuenow', a),
              e.children[0].setAttribute('aria-valuetext', l);
          });
        });
      var yt = {
        destroy: function () {
          for (
            rt(E),
              rt(C),
              Object.keys(i.cssClasses).forEach(function (t) {
                h(S, i.cssClasses[t]);
              });
            S.firstChild;

          )
            S.removeChild(S.firstChild);
          delete S.noUiSlider;
        },
        steps: function () {
          return P.map(vt);
        },
        on: ot,
        off: rt,
        get: gt,
        set: mt,
        setHandle: function (t, e, i, n) {
          if (!((t = Number(t)) >= 0 && t < P.length))
            throw new Error('noUiSlider: invalid handle number, got: ' + t);
          ft(t, pt(e, t), !0, !0, n), st('update', t), i && st('set', t);
        },
        reset: function (t) {
          mt(i.start, t);
        },
        __moveHandles: function (t, e, i) {
          ct(t, e, k, i);
        },
        options: n,
        updateOptions: function (t, e) {
          var o = gt(),
            s = [
              'margin',
              'limit',
              'padding',
              'range',
              'animate',
              'snap',
              'step',
              'format',
              'pips',
              'tooltips',
            ];
          s.forEach(function (e) {
            void 0 !== t[e] && (n[e] = t[e]);
          });
          var a = X(n);
          s.forEach(function (e) {
            void 0 !== t[e] && (i[e] = a[e]);
          }),
            (z = a.spectrum),
            (i.margin = a.margin),
            (i.limit = a.limit),
            (i.padding = a.padding),
            i.pips ? G(i.pips) : Z(),
            i.tooltips ? H() : W(),
            (k = []),
            mt(r(t.start) ? t.start : o, e);
        },
        target: S,
        removePips: Z,
        removeTooltips: W,
        getTooltips: function () {
          return v;
        },
        getOrigins: function () {
          return d;
        },
        pips: G,
      };
      return yt;
    }
    function Y(t, e) {
      if (!t || !t.nodeName)
        throw new Error(
          'noUiSlider: create requires a single element, got: ' + t
        );
      if (t.noUiSlider)
        throw new Error('noUiSlider: Slider was already initialized.');
      var i = G(t, X(e), e);
      return (t.noUiSlider = i), i;
    }
    var K = { __spectrum: x, cssClasses: S, create: Y };
    (t.create = Y),
      (t.cssClasses = S),
      (t.default = K),
      Object.defineProperty(t, '__esModule', { value: !0 });
  });
