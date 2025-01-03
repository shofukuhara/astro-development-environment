// class fadeEffect {
//   constructor() {
//     this.logo = document.querySelector('[data-logo]');
//   }
//   init() {
//     window.addEventListener('DOMContentLoaded', () => {
//       this._fade();
//     });
//   }
//   _fade() {
//     this.logo.setAttribute('data-logo', 'active');
//   }
// }

// const fade = new fadeEffect();
// fade.init();

/**
 * Swiper 8.1.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: April 24, 2022
 */

!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
      ? define(t)
      : ((e =
          'undefined' != typeof globalThis ? globalThis : e || self).Swiper =
          t());
})(this, function () {
  'use strict';
  function e(e) {
    return (
      null !== e &&
      'object' == typeof e &&
      'constructor' in e &&
      e.constructor === Object
    );
  }
  function t(s, a) {
    void 0 === s && (s = {}),
      void 0 === a && (a = {}),
      Object.keys(a).forEach((i) => {
        void 0 === s[i]
          ? (s[i] = a[i])
          : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]);
      });
  }
  const s = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: '' },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: '',
    },
  };
  function a() {
    const e = 'undefined' != typeof document ? document : {};
    return t(e, s), e;
  }
  const i = {
    document: s,
    navigator: { userAgent: '' },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: '',
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => '' }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      'undefined' == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      'undefined' != typeof setTimeout && clearTimeout(e);
    },
  };
  function r() {
    const e = 'undefined' != typeof window ? window : {};
    return t(e, i), e;
  }
  class n extends Array {
    constructor(e) {
      'number' == typeof e
        ? super(e)
        : (super(...(e || [])),
          (function (e) {
            const t = e.__proto__;
            Object.defineProperty(e, '__proto__', {
              get: () => t,
              set(e) {
                t.__proto__ = e;
              },
            });
          })(this));
    }
  }
  function l(e) {
    void 0 === e && (e = []);
    const t = [];
    return (
      e.forEach((e) => {
        Array.isArray(e) ? t.push(...l(e)) : t.push(e);
      }),
      t
    );
  }
  function o(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function d(e, t) {
    const s = r(),
      i = a();
    let l = [];
    if (!t && e instanceof n) return e;
    if (!e) return new n(l);
    if ('string' == typeof e) {
      const s = e.trim();
      if (s.indexOf('<') >= 0 && s.indexOf('>') >= 0) {
        let e = 'div';
        0 === s.indexOf('<li') && (e = 'ul'),
          0 === s.indexOf('<tr') && (e = 'tbody'),
          (0 !== s.indexOf('<td') && 0 !== s.indexOf('<th')) || (e = 'tr'),
          0 === s.indexOf('<tbody') && (e = 'table'),
          0 === s.indexOf('<option') && (e = 'select');
        const t = i.createElement(e);
        t.innerHTML = s;
        for (let e = 0; e < t.childNodes.length; e += 1)
          l.push(t.childNodes[e]);
      } else
        l = (function (e, t) {
          if ('string' != typeof e) return [e];
          const s = [],
            a = t.querySelectorAll(e);
          for (let e = 0; e < a.length; e += 1) s.push(a[e]);
          return s;
        })(e.trim(), t || i);
    } else if (e.nodeType || e === s || e === i) l.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof n) return e;
      l = e;
    }
    return new n(
      (function (e) {
        const t = [];
        for (let s = 0; s < e.length; s += 1)
          -1 === t.indexOf(e[s]) && t.push(e[s]);
        return t;
      })(l)
    );
  }
  d.fn = n.prototype;
  const c = {
    addClass: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
        t[s] = arguments[s];
      const a = l(t.map((e) => e.split(' ')));
      return (
        this.forEach((e) => {
          e.classList.add(...a);
        }),
        this
      );
    },
    removeClass: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
        t[s] = arguments[s];
      const a = l(t.map((e) => e.split(' ')));
      return (
        this.forEach((e) => {
          e.classList.remove(...a);
        }),
        this
      );
    },
    hasClass: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
        t[s] = arguments[s];
      const a = l(t.map((e) => e.split(' ')));
      return (
        o(this, (e) => a.filter((t) => e.classList.contains(t)).length > 0)
          .length > 0
      );
    },
    toggleClass: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
        t[s] = arguments[s];
      const a = l(t.map((e) => e.split(' ')));
      this.forEach((e) => {
        a.forEach((t) => {
          e.classList.toggle(t);
        });
      });
    },
    attr: function (e, t) {
      if (1 === arguments.length && 'string' == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0;
      for (let s = 0; s < this.length; s += 1)
        if (2 === arguments.length) this[s].setAttribute(e, t);
        else
          for (const t in e) (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
      return this;
    },
    removeAttr: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    transform: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
      return this;
    },
    transition: function (e) {
      for (let t = 0; t < this.length; t += 1)
        this[t].style.transitionDuration = 'string' != typeof e ? `${e}ms` : e;
      return this;
    },
    on: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
        t[s] = arguments[s];
      let [a, i, r, n] = t;
      function l(e) {
        const t = e.target;
        if (!t) return;
        const s = e.target.dom7EventData || [];
        if ((s.indexOf(e) < 0 && s.unshift(e), d(t).is(i))) r.apply(t, s);
        else {
          const e = d(t).parents();
          for (let t = 0; t < e.length; t += 1)
            d(e[t]).is(i) && r.apply(e[t], s);
        }
      }
      function o(e) {
        const t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
      }
      'function' == typeof t[1] && (([a, r, n] = t), (i = void 0)),
        n || (n = !1);
      const c = a.split(' ');
      let p;
      for (let e = 0; e < this.length; e += 1) {
        const t = this[e];
        if (i)
          for (p = 0; p < c.length; p += 1) {
            const e = c[p];
            t.dom7LiveListeners || (t.dom7LiveListeners = {}),
              t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
              t.dom7LiveListeners[e].push({ listener: r, proxyListener: l }),
              t.addEventListener(e, l, n);
          }
        else
          for (p = 0; p < c.length; p += 1) {
            const e = c[p];
            t.dom7Listeners || (t.dom7Listeners = {}),
              t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
              t.dom7Listeners[e].push({ listener: r, proxyListener: o }),
              t.addEventListener(e, o, n);
          }
      }
      return this;
    },
    off: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
        t[s] = arguments[s];
      let [a, i, r, n] = t;
      'function' == typeof t[1] && (([a, r, n] = t), (i = void 0)),
        n || (n = !1);
      const l = a.split(' ');
      for (let e = 0; e < l.length; e += 1) {
        const t = l[e];
        for (let e = 0; e < this.length; e += 1) {
          const s = this[e];
          let a;
          if (
            (!i && s.dom7Listeners
              ? (a = s.dom7Listeners[t])
              : i && s.dom7LiveListeners && (a = s.dom7LiveListeners[t]),
            a && a.length)
          )
            for (let e = a.length - 1; e >= 0; e -= 1) {
              const i = a[e];
              (r && i.listener === r) ||
              (r &&
                i.listener &&
                i.listener.dom7proxy &&
                i.listener.dom7proxy === r)
                ? (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1))
                : r ||
                  (s.removeEventListener(t, i.proxyListener, n),
                  a.splice(e, 1));
            }
        }
      }
      return this;
    },
    trigger: function () {
      const e = r();
      for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++)
        s[a] = arguments[a];
      const i = s[0].split(' '),
        n = s[1];
      for (let t = 0; t < i.length; t += 1) {
        const a = i[t];
        for (let t = 0; t < this.length; t += 1) {
          const i = this[t];
          if (e.CustomEvent) {
            const t = new e.CustomEvent(a, {
              detail: n,
              bubbles: !0,
              cancelable: !0,
            });
            (i.dom7EventData = s.filter((e, t) => t > 0)),
              i.dispatchEvent(t),
              (i.dom7EventData = []),
              delete i.dom7EventData;
          }
        }
      }
      return this;
    },
    transitionEnd: function (e) {
      const t = this;
      return (
        e &&
          t.on('transitionend', function s(a) {
            a.target === this && (e.call(this, a), t.off('transitionend', s));
          }),
        this
      );
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(e.getPropertyValue('margin-right')) +
            parseFloat(e.getPropertyValue('margin-left'))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(e.getPropertyValue('margin-top')) +
            parseFloat(e.getPropertyValue('margin-bottom'))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    styles: function () {
      const e = r();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function () {
      if (this.length > 0) {
        const e = r(),
          t = a(),
          s = this[0],
          i = s.getBoundingClientRect(),
          n = t.body,
          l = s.clientTop || n.clientTop || 0,
          o = s.clientLeft || n.clientLeft || 0,
          d = s === e ? e.scrollY : s.scrollTop,
          c = s === e ? e.scrollX : s.scrollLeft;
        return { top: i.top + d - l, left: i.left + c - o };
      }
      return null;
    },
    css: function (e, t) {
      const s = r();
      let a;
      if (1 === arguments.length) {
        if ('string' != typeof e) {
          for (a = 0; a < this.length; a += 1)
            for (const t in e) this[a].style[t] = e[t];
          return this;
        }
        if (this[0])
          return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && 'string' == typeof e) {
        for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
        return this;
      }
      return this;
    },
    each: function (e) {
      return e
        ? (this.forEach((t, s) => {
            e.apply(t, [t, s]);
          }),
          this)
        : this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;
      for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (e) {
      const t = r(),
        s = a(),
        i = this[0];
      let l, o;
      if (!i || void 0 === e) return !1;
      if ('string' == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);
        for (l = d(e), o = 0; o < l.length; o += 1) if (l[o] === i) return !0;
        return !1;
      }
      if (e === s) return i === s;
      if (e === t) return i === t;
      if (e.nodeType || e instanceof n) {
        for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1)
          if (l[o] === i) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      let e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      const t = this.length;
      if (e > t - 1) return d([]);
      if (e < 0) {
        const s = t + e;
        return d(s < 0 ? [] : [this[s]]);
      }
      return d([this[e]]);
    },
    append: function () {
      let e;
      const t = a();
      for (let s = 0; s < arguments.length; s += 1) {
        e = s < 0 || arguments.length <= s ? void 0 : arguments[s];
        for (let s = 0; s < this.length; s += 1)
          if ('string' == typeof e) {
            const a = t.createElement('div');
            for (a.innerHTML = e; a.firstChild; )
              this[s].appendChild(a.firstChild);
          } else if (e instanceof n)
            for (let t = 0; t < e.length; t += 1) this[s].appendChild(e[t]);
          else this[s].appendChild(e);
      }
      return this;
    },
    prepend: function (e) {
      const t = a();
      let s, i;
      for (s = 0; s < this.length; s += 1)
        if ('string' == typeof e) {
          const a = t.createElement('div');
          for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1)
            this[s].insertBefore(a.childNodes[i], this[s].childNodes[0]);
        } else if (e instanceof n)
          for (i = 0; i < e.length; i += 1)
            this[s].insertBefore(e[i], this[s].childNodes[0]);
        else this[s].insertBefore(e, this[s].childNodes[0]);
      return this;
    },
    next: function (e) {
      return this.length > 0
        ? e
          ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e)
            ? d([this[0].nextElementSibling])
            : d([])
          : this[0].nextElementSibling
            ? d([this[0].nextElementSibling])
            : d([])
        : d([]);
    },
    nextAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return d([]);
      for (; s.nextElementSibling; ) {
        const a = s.nextElementSibling;
        e ? d(a).is(e) && t.push(a) : t.push(a), (s = a);
      }
      return d(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        const t = this[0];
        return e
          ? t.previousElementSibling && d(t.previousElementSibling).is(e)
            ? d([t.previousElementSibling])
            : d([])
          : t.previousElementSibling
            ? d([t.previousElementSibling])
            : d([]);
      }
      return d([]);
    },
    prevAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return d([]);
      for (; s.previousElementSibling; ) {
        const a = s.previousElementSibling;
        e ? d(a).is(e) && t.push(a) : t.push(a), (s = a);
      }
      return d(t);
    },
    parent: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1)
        null !== this[s].parentNode &&
          (e
            ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode)
            : t.push(this[s].parentNode));
      return d(t);
    },
    parents: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        let a = this[s].parentNode;
        for (; a; ) e ? d(a).is(e) && t.push(a) : t.push(a), (a = a.parentNode);
      }
      return d(t);
    },
    closest: function (e) {
      let t = this;
      return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const a = this[s].querySelectorAll(e);
        for (let e = 0; e < a.length; e += 1) t.push(a[e]);
      }
      return d(t);
    },
    children: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const a = this[s].children;
        for (let s = 0; s < a.length; s += 1)
          (e && !d(a[s]).is(e)) || t.push(a[s]);
      }
      return d(t);
    },
    filter: function (e) {
      return d(o(this, e));
    },
    remove: function () {
      for (let e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
  };
  function p(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function u() {
    return Date.now();
  }
  function h(e, t) {
    void 0 === t && (t = 'x');
    const s = r();
    let a, i, n;
    const l = (function (e) {
      const t = r();
      let s;
      return (
        t.getComputedStyle && (s = t.getComputedStyle(e, null)),
        !s && e.currentStyle && (s = e.currentStyle),
        s || (s = e.style),
        s
      );
    })(e);
    return (
      s.WebKitCSSMatrix
        ? ((i = l.transform || l.webkitTransform),
          i.split(',').length > 6 &&
            (i = i
              .split(', ')
              .map((e) => e.replace(',', '.'))
              .join(', ')),
          (n = new s.WebKitCSSMatrix('none' === i ? '' : i)))
        : ((n =
            l.MozTransform ||
            l.OTransform ||
            l.MsTransform ||
            l.msTransform ||
            l.transform ||
            l
              .getPropertyValue('transform')
              .replace('translate(', 'matrix(1, 0, 0, 1,')),
          (a = n.toString().split(','))),
      'x' === t &&
        (i = s.WebKitCSSMatrix
          ? n.m41
          : 16 === a.length
            ? parseFloat(a[12])
            : parseFloat(a[4])),
      'y' === t &&
        (i = s.WebKitCSSMatrix
          ? n.m42
          : 16 === a.length
            ? parseFloat(a[13])
            : parseFloat(a[5])),
      i || 0
    );
  }
  function m(e) {
    return (
      'object' == typeof e &&
      null !== e &&
      e.constructor &&
      'Object' === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function f(e) {
    return 'undefined' != typeof window && void 0 !== window.HTMLElement
      ? e instanceof HTMLElement
      : e && (1 === e.nodeType || 11 === e.nodeType);
  }
  function g() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ['__proto__', 'constructor', 'prototype'];
    for (let s = 1; s < arguments.length; s += 1) {
      const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
      if (null != a && !f(a)) {
        const s = Object.keys(Object(a)).filter((e) => t.indexOf(e) < 0);
        for (let t = 0, i = s.length; t < i; t += 1) {
          const i = s[t],
            r = Object.getOwnPropertyDescriptor(a, i);
          void 0 !== r &&
            r.enumerable &&
            (m(e[i]) && m(a[i])
              ? a[i].__swiper__
                ? (e[i] = a[i])
                : g(e[i], a[i])
              : !m(e[i]) && m(a[i])
                ? ((e[i] = {}), a[i].__swiper__ ? (e[i] = a[i]) : g(e[i], a[i]))
                : (e[i] = a[i]));
        }
      }
    }
    return e;
  }
  function v(e, t, s) {
    e.style.setProperty(t, s);
  }
  function w(e) {
    let { swiper: t, targetPosition: s, side: a } = e;
    const i = r(),
      n = -t.translate;
    let l,
      o = null;
    const d = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = 'none'),
      i.cancelAnimationFrame(t.cssModeFrameID);
    const c = s > n ? 'next' : 'prev',
      p = (e, t) => ('next' === c && e >= t) || ('prev' === c && e <= t),
      u = () => {
        (l = new Date().getTime()), null === o && (o = l);
        const e = Math.max(Math.min((l - o) / d, 1), 0),
          r = 0.5 - Math.cos(e * Math.PI) / 2;
        let c = n + r * (s - n);
        if ((p(c, s) && (c = s), t.wrapperEl.scrollTo({ [a]: c }), p(c, s)))
          return (
            (t.wrapperEl.style.overflow = 'hidden'),
            (t.wrapperEl.style.scrollSnapType = ''),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ''),
                t.wrapperEl.scrollTo({ [a]: c });
            }),
            void i.cancelAnimationFrame(t.cssModeFrameID)
          );
        t.cssModeFrameID = i.requestAnimationFrame(u);
      };
    u();
  }
  let b, x, y;
  function E() {
    return (
      b ||
        (b = (function () {
          const e = r(),
            t = a();
          return {
            smoothScroll:
              t.documentElement && 'scrollBehavior' in t.documentElement.style,
            touch: !!(
              'ontouchstart' in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            passiveListener: (function () {
              let t = !1;
              try {
                const s = Object.defineProperty({}, 'passive', {
                  get() {
                    t = !0;
                  },
                });
                e.addEventListener('testPassiveListener', null, s);
              } catch (e) {}
              return t;
            })(),
            gestures: 'ongesturestart' in e,
          };
        })()),
      b
    );
  }
  function T(e) {
    return (
      void 0 === e && (e = {}),
      x ||
        (x = (function (e) {
          let { userAgent: t } = void 0 === e ? {} : e;
          const s = E(),
            a = r(),
            i = a.navigator.platform,
            n = t || a.navigator.userAgent,
            l = { ios: !1, android: !1 },
            o = a.screen.width,
            d = a.screen.height,
            c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
          let p = n.match(/(iPad).*OS\s([\d_]+)/);
          const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
            h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            m = 'Win32' === i;
          let f = 'MacIntel' === i;
          return (
            !p &&
              f &&
              s.touch &&
              [
                '1024x1366',
                '1366x1024',
                '834x1194',
                '1194x834',
                '834x1112',
                '1112x834',
                '768x1024',
                '1024x768',
                '820x1180',
                '1180x820',
                '810x1080',
                '1080x810',
              ].indexOf(`${o}x${d}`) >= 0 &&
              ((p = n.match(/(Version)\/([\d.]+)/)),
              p || (p = [0, 1, '13_0_0']),
              (f = !1)),
            c && !m && ((l.os = 'android'), (l.android = !0)),
            (p || h || u) && ((l.os = 'ios'), (l.ios = !0)),
            l
          );
        })(e)),
      x
    );
  }
  function C() {
    return (
      y ||
        (y = (function () {
          const e = r();
          return {
            isSafari: (function () {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf('safari') >= 0 &&
                t.indexOf('chrome') < 0 &&
                t.indexOf('android') < 0
              );
            })(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
        })()),
      y
    );
  }
  Object.keys(c).forEach((e) => {
    Object.defineProperty(d.fn, e, { value: c[e], writable: !0 });
  });
  var $ = {
    on(e, t, s) {
      const a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ('function' != typeof t) return a;
      const i = s ? 'unshift' : 'push';
      return (
        e.split(' ').forEach((e) => {
          a.eventsListeners[e] || (a.eventsListeners[e] = []),
            a.eventsListeners[e][i](t);
        }),
        a
      );
    },
    once(e, t, s) {
      const a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ('function' != typeof t) return a;
      function i() {
        a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
        for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
          r[n] = arguments[n];
        t.apply(a, r);
      }
      return (i.__emitterProxy = t), a.on(e, i, s);
    },
    onAny(e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ('function' != typeof e) return s;
      const a = t ? 'unshift' : 'push';
      return (
        s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off(e, t) {
      const s = this;
      return !s.eventsListeners || s.destroyed
        ? s
        : s.eventsListeners
          ? (e.split(' ').forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((a, i) => {
                    (a === t || (a.__emitterProxy && a.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(i, 1);
                  });
            }),
            s)
          : s;
    },
    emit() {
      const e = this;
      if (!e.eventsListeners || e.destroyed) return e;
      if (!e.eventsListeners) return e;
      let t, s, a;
      for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++)
        r[n] = arguments[n];
      'string' == typeof r[0] || Array.isArray(r[0])
        ? ((t = r[0]), (s = r.slice(1, r.length)), (a = e))
        : ((t = r[0].events), (s = r[0].data), (a = r[0].context || e)),
        s.unshift(a);
      return (
        (Array.isArray(t) ? t : t.split(' ')).forEach((t) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((e) => {
              e.apply(a, [t, ...s]);
            }),
            e.eventsListeners &&
              e.eventsListeners[t] &&
              e.eventsListeners[t].forEach((e) => {
                e.apply(a, s);
              });
        }),
        e
      );
    },
  };
  var S = {
    updateSize: function () {
      const e = this;
      let t, s;
      const a = e.$el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : a[0].clientWidth),
        (s =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : a[0].clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === s && e.isVertical()) ||
          ((t =
            t -
            parseInt(a.css('padding-left') || 0, 10) -
            parseInt(a.css('padding-right') || 0, 10)),
          (s =
            s -
            parseInt(a.css('padding-top') || 0, 10) -
            parseInt(a.css('padding-bottom') || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(s) && (s = 0),
          Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
              width: 'height',
              'margin-top': 'margin-left',
              'margin-bottom ': 'margin-right',
              'margin-left': 'margin-top',
              'margin-right': 'margin-bottom',
              'padding-left': 'padding-top',
              'padding-right': 'padding-bottom',
              marginRight: 'marginBottom',
            }[t];
      }
      function s(e, s) {
        return parseFloat(e.getPropertyValue(t(s)) || 0);
      }
      const a = e.params,
        { $wrapperEl: i, size: r, rtlTranslate: n, wrongRTL: l } = e,
        o = e.virtual && a.virtual.enabled,
        d = o ? e.virtual.slides.length : e.slides.length,
        c = i.children(`.${e.params.slideClass}`),
        p = o ? e.virtual.slides.length : c.length;
      let u = [];
      const h = [],
        m = [];
      let f = a.slidesOffsetBefore;
      'function' == typeof f && (f = a.slidesOffsetBefore.call(e));
      let g = a.slidesOffsetAfter;
      'function' == typeof g && (g = a.slidesOffsetAfter.call(e));
      const w = e.snapGrid.length,
        b = e.slidesGrid.length;
      let x = a.spaceBetween,
        y = -f,
        E = 0,
        T = 0;
      if (void 0 === r) return;
      'string' == typeof x &&
        x.indexOf('%') >= 0 &&
        (x = (parseFloat(x.replace('%', '')) / 100) * r),
        (e.virtualSize = -x),
        n
          ? c.css({ marginLeft: '', marginBottom: '', marginTop: '' })
          : c.css({ marginRight: '', marginBottom: '', marginTop: '' }),
        a.centeredSlides &&
          a.cssMode &&
          (v(e.wrapperEl, '--swiper-centered-offset-before', ''),
          v(e.wrapperEl, '--swiper-centered-offset-after', ''));
      const C = a.grid && a.grid.rows > 1 && e.grid;
      let $;
      C && e.grid.initSlides(p);
      const S =
        'auto' === a.slidesPerView &&
        a.breakpoints &&
        Object.keys(a.breakpoints).filter(
          (e) => void 0 !== a.breakpoints[e].slidesPerView
        ).length > 0;
      for (let i = 0; i < p; i += 1) {
        $ = 0;
        const n = c.eq(i);
        if (
          (C && e.grid.updateSlide(i, n, p, t), 'none' !== n.css('display'))
        ) {
          if ('auto' === a.slidesPerView) {
            S && (c[i].style[t('width')] = '');
            const r = getComputedStyle(n[0]),
              l = n[0].style.transform,
              o = n[0].style.webkitTransform;
            if (
              (l && (n[0].style.transform = 'none'),
              o && (n[0].style.webkitTransform = 'none'),
              a.roundLengths)
            )
              $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
            else {
              const e = s(r, 'width'),
                t = s(r, 'padding-left'),
                a = s(r, 'padding-right'),
                i = s(r, 'margin-left'),
                l = s(r, 'margin-right'),
                o = r.getPropertyValue('box-sizing');
              if (o && 'border-box' === o) $ = e + i + l;
              else {
                const { clientWidth: s, offsetWidth: r } = n[0];
                $ = e + t + a + i + l + (r - s);
              }
            }
            l && (n[0].style.transform = l),
              o && (n[0].style.webkitTransform = o),
              a.roundLengths && ($ = Math.floor($));
          } else
            ($ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView),
              a.roundLengths && ($ = Math.floor($)),
              c[i] && (c[i].style[t('width')] = `${$}px`);
          c[i] && (c[i].swiperSlideSize = $),
            m.push($),
            a.centeredSlides
              ? ((y = y + $ / 2 + E / 2 + x),
                0 === E && 0 !== i && (y = y - r / 2 - x),
                0 === i && (y = y - r / 2 - x),
                Math.abs(y) < 0.001 && (y = 0),
                a.roundLengths && (y = Math.floor(y)),
                T % a.slidesPerGroup == 0 && u.push(y),
                h.push(y))
              : (a.roundLengths && (y = Math.floor(y)),
                (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                  e.params.slidesPerGroup ==
                  0 && u.push(y),
                h.push(y),
                (y = y + $ + x)),
            (e.virtualSize += $ + x),
            (E = $),
            (T += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, r) + g),
        n &&
          l &&
          ('slide' === a.effect || 'coverflow' === a.effect) &&
          i.css({ width: `${e.virtualSize + a.spaceBetween}px` }),
        a.setWrapperSize &&
          i.css({ [t('width')]: `${e.virtualSize + a.spaceBetween}px` }),
        C && e.grid.updateWrapperSize($, u, t),
        !a.centeredSlides)
      ) {
        const t = [];
        for (let s = 0; s < u.length; s += 1) {
          let i = u[s];
          a.roundLengths && (i = Math.floor(i)),
            u[s] <= e.virtualSize - r && t.push(i);
        }
        (u = t),
          Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 &&
            u.push(e.virtualSize - r);
      }
      if ((0 === u.length && (u = [0]), 0 !== a.spaceBetween)) {
        const s = e.isHorizontal() && n ? 'marginLeft' : t('marginRight');
        c.filter((e, t) => !a.cssMode || t !== c.length - 1).css({
          [s]: `${x}px`,
        });
      }
      if (a.centeredSlides && a.centeredSlidesBounds) {
        let e = 0;
        m.forEach((t) => {
          e += t + (a.spaceBetween ? a.spaceBetween : 0);
        }),
          (e -= a.spaceBetween);
        const t = e - r;
        u = u.map((e) => (e < 0 ? -f : e > t ? t + g : e));
      }
      if (a.centerInsufficientSlides) {
        let e = 0;
        if (
          (m.forEach((t) => {
            e += t + (a.spaceBetween ? a.spaceBetween : 0);
          }),
          (e -= a.spaceBetween),
          e < r)
        ) {
          const t = (r - e) / 2;
          u.forEach((e, s) => {
            u[s] = e - t;
          }),
            h.forEach((e, s) => {
              h[s] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: c,
          snapGrid: u,
          slidesGrid: h,
          slidesSizesGrid: m,
        }),
        a.centeredSlides && a.cssMode && !a.centeredSlidesBounds)
      ) {
        v(e.wrapperEl, '--swiper-centered-offset-before', -u[0] + 'px'),
          v(
            e.wrapperEl,
            '--swiper-centered-offset-after',
            e.size / 2 - m[m.length - 1] / 2 + 'px'
          );
        const t = -e.snapGrid[0],
          s = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + s));
      }
      if (
        (p !== d && e.emit('slidesLengthChange'),
        u.length !== w &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit('snapGridLengthChange')),
        h.length !== b && e.emit('slidesGridLengthChange'),
        a.watchSlidesProgress && e.updateSlidesOffset(),
        !(o || a.cssMode || ('slide' !== a.effect && 'fade' !== a.effect)))
      ) {
        const t = `${a.containerModifierClass}backface-hidden`,
          s = e.$el.hasClass(t);
        p <= a.maxBackfaceHiddenSlides
          ? s || e.$el.addClass(t)
          : s && e.$el.removeClass(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        s = [],
        a = t.virtual && t.params.virtual.enabled;
      let i,
        r = 0;
      'number' == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const n = (e) =>
        a
          ? t.slides.filter(
              (t) =>
                parseInt(t.getAttribute('data-swiper-slide-index'), 10) === e
            )[0]
          : t.slides.eq(e)[0];
      if ('auto' !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          t.visibleSlides.each((e) => {
            s.push(e);
          });
        else
          for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
            const e = t.activeIndex + i;
            if (e > t.slides.length && !a) break;
            s.push(n(e));
          }
      else s.push(n(t.activeIndex));
      for (i = 0; i < s.length; i += 1)
        if (void 0 !== s[i]) {
          const e = s[i].offsetHeight;
          r = e > r ? e : r;
        }
      (r || 0 === r) && t.$wrapperEl.css('height', `${r}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides;
      for (let s = 0; s < t.length; s += 1)
        t[s].swiperSlideOffset = e.isHorizontal()
          ? t[s].offsetLeft
          : t[s].offsetTop;
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      const t = this,
        s = t.params,
        { slides: a, rtlTranslate: i, snapGrid: r } = t;
      if (0 === a.length) return;
      void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
      let n = -e;
      i && (n = e),
        a.removeClass(s.slideVisibleClass),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      for (let e = 0; e < a.length; e += 1) {
        const l = a[e];
        let o = l.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
        const d =
            (n + (s.centeredSlides ? t.minTranslate() : 0) - o) /
            (l.swiperSlideSize + s.spaceBetween),
          c =
            (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) /
            (l.swiperSlideSize + s.spaceBetween),
          p = -(n - o),
          u = p + t.slidesSizesGrid[e];
        ((p >= 0 && p < t.size - 1) ||
          (u > 1 && u <= t.size) ||
          (p <= 0 && u >= t.size)) &&
          (t.visibleSlides.push(l),
          t.visibleSlidesIndexes.push(e),
          a.eq(e).addClass(s.slideVisibleClass)),
          (l.progress = i ? -d : d),
          (l.originalProgress = i ? -c : c);
      }
      t.visibleSlides = d(t.visibleSlides);
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * s) || 0;
      }
      const s = t.params,
        a = t.maxTranslate() - t.minTranslate();
      let { progress: i, isBeginning: r, isEnd: n } = t;
      const l = r,
        o = n;
      0 === a
        ? ((i = 0), (r = !0), (n = !0))
        : ((i = (e - t.minTranslate()) / a), (r = i <= 0), (n = i >= 1)),
        Object.assign(t, { progress: i, isBeginning: r, isEnd: n }),
        (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
          t.updateSlidesProgress(e),
        r && !l && t.emit('reachBeginning toEdge'),
        n && !o && t.emit('reachEnd toEdge'),
        ((l && !r) || (o && !n)) && t.emit('fromEdge'),
        t.emit('progress', i);
    },
    updateSlidesClasses: function () {
      const e = this,
        {
          slides: t,
          params: s,
          $wrapperEl: a,
          activeIndex: i,
          realIndex: r,
        } = e,
        n = e.virtual && s.virtual.enabled;
      let l;
      t.removeClass(
        `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
      ),
        (l = n
          ? e.$wrapperEl.find(
              `.${s.slideClass}[data-swiper-slide-index="${i}"]`
            )
          : t.eq(i)),
        l.addClass(s.slideActiveClass),
        s.loop &&
          (l.hasClass(s.slideDuplicateClass)
            ? a
                .children(
                  `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                )
                .addClass(s.slideDuplicateActiveClass)
            : a
                .children(
                  `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                )
                .addClass(s.slideDuplicateActiveClass));
      let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
      s.loop && 0 === o.length && ((o = t.eq(0)), o.addClass(s.slideNextClass));
      let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
      s.loop &&
        0 === d.length &&
        ((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
        s.loop &&
          (o.hasClass(s.slideDuplicateClass)
            ? a
                .children(
                  `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr('data-swiper-slide-index')}"]`
                )
                .addClass(s.slideDuplicateNextClass)
            : a
                .children(
                  `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr('data-swiper-slide-index')}"]`
                )
                .addClass(s.slideDuplicateNextClass),
          d.hasClass(s.slideDuplicateClass)
            ? a
                .children(
                  `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr('data-swiper-slide-index')}"]`
                )
                .addClass(s.slideDuplicatePrevClass)
            : a
                .children(
                  `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr('data-swiper-slide-index')}"]`
                )
                .addClass(s.slideDuplicatePrevClass)),
        e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
          slidesGrid: a,
          snapGrid: i,
          params: r,
          activeIndex: n,
          realIndex: l,
          snapIndex: o,
        } = t;
      let d,
        c = e;
      if (void 0 === c) {
        for (let e = 0; e < a.length; e += 1)
          void 0 !== a[e + 1]
            ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2
              ? (c = e)
              : s >= a[e] && s < a[e + 1] && (c = e + 1)
            : s >= a[e] && (c = e);
        r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
      }
      if (i.indexOf(s) >= 0) d = i.indexOf(s);
      else {
        const e = Math.min(r.slidesPerGroupSkip, c);
        d = e + Math.floor((c - e) / r.slidesPerGroup);
      }
      if ((d >= i.length && (d = i.length - 1), c === n))
        return void (d !== o && ((t.snapIndex = d), t.emit('snapIndexChange')));
      const p = parseInt(
        t.slides.eq(c).attr('data-swiper-slide-index') || c,
        10
      );
      Object.assign(t, {
        snapIndex: d,
        realIndex: p,
        previousIndex: n,
        activeIndex: c,
      }),
        t.emit('activeIndexChange'),
        t.emit('snapIndexChange'),
        l !== p && t.emit('realIndexChange'),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit('slideChange');
    },
    updateClickedSlide: function (e) {
      const t = this,
        s = t.params,
        a = d(e).closest(`.${s.slideClass}`)[0];
      let i,
        r = !1;
      if (a)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === a) {
            (r = !0), (i = e);
            break;
          }
      if (!a || !r)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = a),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              d(a).attr('data-swiper-slide-index'),
              10
            ))
          : (t.clickedIndex = i),
        s.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  var M = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? 'x' : 'y');
      const { params: t, rtlTranslate: s, translate: a, $wrapperEl: i } = this;
      if (t.virtualTranslate) return s ? -a : a;
      if (t.cssMode) return a;
      let r = h(i[0], e);
      return s && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      const s = this,
        {
          rtlTranslate: a,
          params: i,
          $wrapperEl: r,
          wrapperEl: n,
          progress: l,
        } = s;
      let o,
        d = 0,
        c = 0;
      s.isHorizontal() ? (d = a ? -e : e) : (c = e),
        i.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
        i.cssMode
          ? (n[s.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = s.isHorizontal()
              ? -d
              : -c)
          : i.virtualTranslate ||
            r.transform(`translate3d(${d}px, ${c}px, 0px)`),
        (s.previousTranslate = s.translate),
        (s.translate = s.isHorizontal() ? d : c);
      const p = s.maxTranslate() - s.minTranslate();
      (o = 0 === p ? 0 : (e - s.minTranslate()) / p),
        o !== l && s.updateProgress(e),
        s.emit('setTranslate', s.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, s, a, i) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0),
        void 0 === a && (a = !0);
      const r = this,
        { params: n, wrapperEl: l } = r;
      if (r.animating && n.preventInteractionOnTransition) return !1;
      const o = r.minTranslate(),
        d = r.maxTranslate();
      let c;
      if (
        ((c = a && e > o ? o : a && e < d ? d : e),
        r.updateProgress(c),
        n.cssMode)
      ) {
        const e = r.isHorizontal();
        if (0 === t) l[e ? 'scrollLeft' : 'scrollTop'] = -c;
        else {
          if (!r.support.smoothScroll)
            return (
              w({ swiper: r, targetPosition: -c, side: e ? 'left' : 'top' }), !0
            );
          l.scrollTo({ [e ? 'left' : 'top']: -c, behavior: 'smooth' });
        }
        return !0;
      }
      return (
        0 === t
          ? (r.setTransition(0),
            r.setTranslate(c),
            s &&
              (r.emit('beforeTransitionStart', t, i), r.emit('transitionEnd')))
          : (r.setTransition(t),
            r.setTranslate(c),
            s &&
              (r.emit('beforeTransitionStart', t, i),
              r.emit('transitionStart')),
            r.animating ||
              ((r.animating = !0),
              r.onTranslateToWrapperTransitionEnd ||
                (r.onTranslateToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener(
                      'transitionend',
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].removeEventListener(
                      'webkitTransitionEnd',
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    (r.onTranslateToWrapperTransitionEnd = null),
                    delete r.onTranslateToWrapperTransitionEnd,
                    s && r.emit('transitionEnd'));
                }),
              r.$wrapperEl[0].addEventListener(
                'transitionend',
                r.onTranslateToWrapperTransitionEnd
              ),
              r.$wrapperEl[0].addEventListener(
                'webkitTransitionEnd',
                r.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function P(e) {
    let { swiper: t, runCallbacks: s, direction: a, step: i } = e;
    const { activeIndex: r, previousIndex: n } = t;
    let l = a;
    if (
      (l || (l = r > n ? 'next' : r < n ? 'prev' : 'reset'),
      t.emit(`transition${i}`),
      s && r !== n)
    ) {
      if ('reset' === l) return void t.emit(`slideResetTransition${i}`);
      t.emit(`slideChangeTransition${i}`),
        'next' === l
          ? t.emit(`slideNextTransition${i}`)
          : t.emit(`slidePrevTransition${i}`);
    }
  }
  var k = {
    slideTo: function (e, t, s, a, i) {
      if (
        (void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0),
        'number' != typeof e && 'string' != typeof e)
      )
        throw new Error(
          `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
        );
      if ('string' == typeof e) {
        const t = parseInt(e, 10);
        if (!isFinite(t))
          throw new Error(
            `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
          );
        e = t;
      }
      const r = this;
      let n = e;
      n < 0 && (n = 0);
      const {
        params: l,
        snapGrid: o,
        slidesGrid: d,
        previousIndex: c,
        activeIndex: p,
        rtlTranslate: u,
        wrapperEl: h,
        enabled: m,
      } = r;
      if ((r.animating && l.preventInteractionOnTransition) || (!m && !a && !i))
        return !1;
      const f = Math.min(r.params.slidesPerGroupSkip, n);
      let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
      g >= o.length && (g = o.length - 1),
        (p || l.initialSlide || 0) === (c || 0) &&
          s &&
          r.emit('beforeSlideChangeStart');
      const v = -o[g];
      if ((r.updateProgress(v), l.normalizeSlideIndex))
        for (let e = 0; e < d.length; e += 1) {
          const t = -Math.floor(100 * v),
            s = Math.floor(100 * d[e]),
            a = Math.floor(100 * d[e + 1]);
          void 0 !== d[e + 1]
            ? t >= s && t < a - (a - s) / 2
              ? (n = e)
              : t >= s && t < a && (n = e + 1)
            : t >= s && (n = e);
        }
      if (r.initialized && n !== p) {
        if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
          return !1;
        if (
          !r.allowSlidePrev &&
          v > r.translate &&
          v > r.maxTranslate() &&
          (p || 0) !== n
        )
          return !1;
      }
      let b;
      if (
        ((b = n > p ? 'next' : n < p ? 'prev' : 'reset'),
        (u && -v === r.translate) || (!u && v === r.translate))
      )
        return (
          r.updateActiveIndex(n),
          l.autoHeight && r.updateAutoHeight(),
          r.updateSlidesClasses(),
          'slide' !== l.effect && r.setTranslate(v),
          'reset' !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)),
          !1
        );
      if (l.cssMode) {
        const e = r.isHorizontal(),
          s = u ? v : -v;
        if (0 === t) {
          const t = r.virtual && r.params.virtual.enabled;
          t &&
            ((r.wrapperEl.style.scrollSnapType = 'none'),
            (r._immediateVirtual = !0)),
            (h[e ? 'scrollLeft' : 'scrollTop'] = s),
            t &&
              requestAnimationFrame(() => {
                (r.wrapperEl.style.scrollSnapType = ''),
                  (r._swiperImmediateVirtual = !1);
              });
        } else {
          if (!r.support.smoothScroll)
            return (
              w({ swiper: r, targetPosition: s, side: e ? 'left' : 'top' }), !0
            );
          h.scrollTo({ [e ? 'left' : 'top']: s, behavior: 'smooth' });
        }
        return !0;
      }
      return (
        r.setTransition(t),
        r.setTranslate(v),
        r.updateActiveIndex(n),
        r.updateSlidesClasses(),
        r.emit('beforeTransitionStart', t, a),
        r.transitionStart(s, b),
        0 === t
          ? r.transitionEnd(s, b)
          : r.animating ||
            ((r.animating = !0),
            r.onSlideToWrapperTransitionEnd ||
              (r.onSlideToWrapperTransitionEnd = function (e) {
                r &&
                  !r.destroyed &&
                  e.target === this &&
                  (r.$wrapperEl[0].removeEventListener(
                    'transitionend',
                    r.onSlideToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].removeEventListener(
                    'webkitTransitionEnd',
                    r.onSlideToWrapperTransitionEnd
                  ),
                  (r.onSlideToWrapperTransitionEnd = null),
                  delete r.onSlideToWrapperTransitionEnd,
                  r.transitionEnd(s, b));
              }),
            r.$wrapperEl[0].addEventListener(
              'transitionend',
              r.onSlideToWrapperTransitionEnd
            ),
            r.$wrapperEl[0].addEventListener(
              'webkitTransitionEnd',
              r.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e, t, s, a) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0);
      const i = this;
      let r = e;
      return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a);
    },
    slideNext: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const a = this,
        { animating: i, enabled: r, params: n } = a;
      if (!r) return a;
      let l = n.slidesPerGroup;
      'auto' === n.slidesPerView &&
        1 === n.slidesPerGroup &&
        n.slidesPerGroupAuto &&
        (l = Math.max(a.slidesPerViewDynamic('current', !0), 1));
      const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
      if (n.loop) {
        if (i && n.loopPreventsSlide) return !1;
        a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
      }
      return n.rewind && a.isEnd
        ? a.slideTo(0, e, t, s)
        : a.slideTo(a.activeIndex + o, e, t, s);
    },
    slidePrev: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const a = this,
        {
          params: i,
          animating: r,
          snapGrid: n,
          slidesGrid: l,
          rtlTranslate: o,
          enabled: d,
        } = a;
      if (!d) return a;
      if (i.loop) {
        if (r && i.loopPreventsSlide) return !1;
        a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
      }
      function c(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const p = c(o ? a.translate : -a.translate),
        u = n.map((e) => c(e));
      let h = n[u.indexOf(p) - 1];
      if (void 0 === h && i.cssMode) {
        let e;
        n.forEach((t, s) => {
          p >= t && (e = s);
        }),
          void 0 !== e && (h = n[e > 0 ? e - 1 : e]);
      }
      let m = 0;
      if (
        (void 0 !== h &&
          ((m = l.indexOf(h)),
          m < 0 && (m = a.activeIndex - 1),
          'auto' === i.slidesPerView &&
            1 === i.slidesPerGroup &&
            i.slidesPerGroupAuto &&
            ((m = m - a.slidesPerViewDynamic('previous', !0) + 1),
            (m = Math.max(m, 0)))),
        i.rewind && a.isBeginning)
      ) {
        const i =
          a.params.virtual && a.params.virtual.enabled && a.virtual
            ? a.virtual.slides.length - 1
            : a.slides.length - 1;
        return a.slideTo(i, e, t, s);
      }
      return a.slideTo(m, e, t, s);
    },
    slideReset: function (e, t, s) {
      return (
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        this.slideTo(this.activeIndex, e, t, s)
      );
    },
    slideToClosest: function (e, t, s, a) {
      void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        void 0 === a && (a = 0.5);
      const i = this;
      let r = i.activeIndex;
      const n = Math.min(i.params.slidesPerGroupSkip, r),
        l = n + Math.floor((r - n) / i.params.slidesPerGroup),
        o = i.rtlTranslate ? i.translate : -i.translate;
      if (o >= i.snapGrid[l]) {
        const e = i.snapGrid[l];
        o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup);
      } else {
        const e = i.snapGrid[l - 1];
        o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup);
      }
      return (
        (r = Math.max(r, 0)),
        (r = Math.min(r, i.slidesGrid.length - 1)),
        i.slideTo(r, e, t, s)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, $wrapperEl: s } = e,
        a =
          'auto' === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let i,
        r = e.clickedIndex;
      if (t.loop) {
        if (e.animating) return;
        (i = parseInt(d(e.clickedSlide).attr('data-swiper-slide-index'), 10)),
          t.centeredSlides
            ? r < e.loopedSlides - a / 2 ||
              r > e.slides.length - e.loopedSlides + a / 2
              ? (e.loopFix(),
                (r = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                p(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r)
            : r > e.slides.length - a
              ? (e.loopFix(),
                (r = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                p(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
      } else e.slideTo(r);
    },
  };
  var z = {
    loopCreate: function () {
      const e = this,
        t = a(),
        { params: s, $wrapperEl: i } = e,
        r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
      r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
      let n = r.children(`.${s.slideClass}`);
      if (s.loopFillGroupWithBlank) {
        const e = s.slidesPerGroup - (n.length % s.slidesPerGroup);
        if (e !== s.slidesPerGroup) {
          for (let a = 0; a < e; a += 1) {
            const e = d(t.createElement('div')).addClass(
              `${s.slideClass} ${s.slideBlankClass}`
            );
            r.append(e);
          }
          n = r.children(`.${s.slideClass}`);
        }
      }
      'auto' !== s.slidesPerView ||
        s.loopedSlides ||
        (s.loopedSlides = n.length),
        (e.loopedSlides = Math.ceil(
          parseFloat(s.loopedSlides || s.slidesPerView, 10)
        )),
        (e.loopedSlides += s.loopAdditionalSlides),
        e.loopedSlides > n.length && (e.loopedSlides = n.length);
      const l = [],
        o = [];
      n.each((t, s) => {
        const a = d(t);
        s < e.loopedSlides && o.push(t),
          s < n.length && s >= n.length - e.loopedSlides && l.push(t),
          a.attr('data-swiper-slide-index', s);
      });
      for (let e = 0; e < o.length; e += 1)
        r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      for (let e = l.length - 1; e >= 0; e -= 1)
        r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
    },
    loopFix: function () {
      const e = this;
      e.emit('beforeLoopFix');
      const {
        activeIndex: t,
        slides: s,
        loopedSlides: a,
        allowSlidePrev: i,
        allowSlideNext: r,
        snapGrid: n,
        rtlTranslate: l,
      } = e;
      let o;
      (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
      const d = -n[t] - e.getTranslate();
      if (t < a) {
        (o = s.length - 3 * a + t), (o += a);
        e.slideTo(o, 0, !1, !0) &&
          0 !== d &&
          e.setTranslate((l ? -e.translate : e.translate) - d);
      } else if (t >= s.length - a) {
        (o = -s.length + t + a), (o += a);
        e.slideTo(o, 0, !1, !0) &&
          0 !== d &&
          e.setTranslate((l ? -e.translate : e.translate) - d);
      }
      (e.allowSlidePrev = i), (e.allowSlideNext = r), e.emit('loopFix');
    },
    loopDestroy: function () {
      const { $wrapperEl: e, params: t, slides: s } = this;
      e
        .children(
          `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
        )
        .remove(),
        s.removeAttr('data-swiper-slide-index');
    },
  };
  function O(e) {
    const t = this,
      s = a(),
      i = r(),
      n = t.touchEventsData,
      { params: l, touches: o, enabled: c } = t;
    if (!c) return;
    if (t.animating && l.preventInteractionOnTransition) return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    let p = e;
    p.originalEvent && (p = p.originalEvent);
    let h = d(p.target);
    if ('wrapper' === l.touchEventsTarget && !h.closest(t.wrapperEl).length)
      return;
    if (
      ((n.isTouchEvent = 'touchstart' === p.type),
      !n.isTouchEvent && 'which' in p && 3 === p.which)
    )
      return;
    if (!n.isTouchEvent && 'button' in p && p.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    !!l.noSwipingClass &&
      '' !== l.noSwipingClass &&
      p.target &&
      p.target.shadowRoot &&
      e.path &&
      e.path[0] &&
      (h = d(e.path[0]));
    const m = l.noSwipingSelector
        ? l.noSwipingSelector
        : `.${l.noSwipingClass}`,
      f = !(!p.target || !p.target.shadowRoot);
    if (
      l.noSwiping &&
      (f
        ? (function (e, t) {
            return (
              void 0 === t && (t = this),
              (function t(s) {
                return s && s !== a() && s !== r()
                  ? (s.assignedSlot && (s = s.assignedSlot),
                    s.closest(e) || t(s.getRootNode().host))
                  : null;
              })(t)
            );
          })(m, p.target)
        : h.closest(m)[0])
    )
      return void (t.allowClick = !0);
    if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
    (o.currentX = 'touchstart' === p.type ? p.targetTouches[0].pageX : p.pageX),
      (o.currentY =
        'touchstart' === p.type ? p.targetTouches[0].pageY : p.pageY);
    const g = o.currentX,
      v = o.currentY,
      w = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
      b = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
    if (w && (g <= b || g >= i.innerWidth - b)) {
      if ('prevent' !== w) return;
      e.preventDefault();
    }
    if (
      (Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
      (o.startX = g),
      (o.startY = v),
      (n.touchStartTime = u()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      l.threshold > 0 && (n.allowThresholdMove = !1),
      'touchstart' !== p.type)
    ) {
      let e = !0;
      h.is(n.focusableElements) &&
        ((e = !1), 'SELECT' === h[0].nodeName && (n.isTouched = !1)),
        s.activeElement &&
          d(s.activeElement).is(n.focusableElements) &&
          s.activeElement !== h[0] &&
          s.activeElement.blur();
      const a = e && t.allowTouchMove && l.touchStartPreventDefault;
      (!l.touchStartForcePreventDefault && !a) ||
        h[0].isContentEditable ||
        p.preventDefault();
    }
    t.params.freeMode &&
      t.params.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !l.cssMode &&
      t.freeMode.onTouchStart(),
      t.emit('touchStart', p);
  }
  function L(e) {
    const t = a(),
      s = this,
      i = s.touchEventsData,
      { params: r, touches: n, rtlTranslate: l, enabled: o } = s;
    if (!o) return;
    let c = e;
    if ((c.originalEvent && (c = c.originalEvent), !i.isTouched))
      return void (
        i.startMoving &&
        i.isScrolling &&
        s.emit('touchMoveOpposite', c)
      );
    if (i.isTouchEvent && 'touchmove' !== c.type) return;
    const p =
        'touchmove' === c.type &&
        c.targetTouches &&
        (c.targetTouches[0] || c.changedTouches[0]),
      h = 'touchmove' === c.type ? p.pageX : c.pageX,
      m = 'touchmove' === c.type ? p.pageY : c.pageY;
    if (c.preventedByNestedSwiper) return (n.startX = h), void (n.startY = m);
    if (!s.allowTouchMove)
      return (
        d(c.target).is(i.focusableElements) || (s.allowClick = !1),
        void (
          i.isTouched &&
          (Object.assign(n, { startX: h, startY: m, currentX: h, currentY: m }),
          (i.touchStartTime = u()))
        )
      );
    if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
      if (s.isVertical()) {
        if (
          (m < n.startY && s.translate <= s.maxTranslate()) ||
          (m > n.startY && s.translate >= s.minTranslate())
        )
          return (i.isTouched = !1), void (i.isMoved = !1);
      } else if (
        (h < n.startX && s.translate <= s.maxTranslate()) ||
        (h > n.startX && s.translate >= s.minTranslate())
      )
        return;
    if (
      i.isTouchEvent &&
      t.activeElement &&
      c.target === t.activeElement &&
      d(c.target).is(i.focusableElements)
    )
      return (i.isMoved = !0), void (s.allowClick = !1);
    if (
      (i.allowTouchCallbacks && s.emit('touchMove', c),
      c.targetTouches && c.targetTouches.length > 1)
    )
      return;
    (n.currentX = h), (n.currentY = m);
    const f = n.currentX - n.startX,
      g = n.currentY - n.startY;
    if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold)
      return;
    if (void 0 === i.isScrolling) {
      let e;
      (s.isHorizontal() && n.currentY === n.startY) ||
      (s.isVertical() && n.currentX === n.startX)
        ? (i.isScrolling = !1)
        : f * f + g * g >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(g), Math.abs(f))) / Math.PI),
          (i.isScrolling = s.isHorizontal()
            ? e > r.touchAngle
            : 90 - e > r.touchAngle));
    }
    if (
      (i.isScrolling && s.emit('touchMoveOpposite', c),
      void 0 === i.startMoving &&
        ((n.currentX === n.startX && n.currentY === n.startY) ||
          (i.startMoving = !0)),
      i.isScrolling)
    )
      return void (i.isTouched = !1);
    if (!i.startMoving) return;
    (s.allowClick = !1),
      !r.cssMode && c.cancelable && c.preventDefault(),
      r.touchMoveStopPropagation && !r.nested && c.stopPropagation(),
      i.isMoved ||
        (r.loop && !r.cssMode && s.loopFix(),
        (i.startTranslate = s.getTranslate()),
        s.setTransition(0),
        s.animating &&
          s.$wrapperEl.trigger('webkitTransitionEnd transitionend'),
        (i.allowMomentumBounce = !1),
        !r.grabCursor ||
          (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
          s.setGrabCursor(!0),
        s.emit('sliderFirstMove', c)),
      s.emit('sliderMove', c),
      (i.isMoved = !0);
    let v = s.isHorizontal() ? f : g;
    (n.diff = v),
      (v *= r.touchRatio),
      l && (v = -v),
      (s.swipeDirection = v > 0 ? 'prev' : 'next'),
      (i.currentTranslate = v + i.startTranslate);
    let w = !0,
      b = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (b = 0),
      v > 0 && i.currentTranslate > s.minTranslate()
        ? ((w = !1),
          r.resistance &&
            (i.currentTranslate =
              s.minTranslate() -
              1 +
              (-s.minTranslate() + i.startTranslate + v) ** b))
        : v < 0 &&
          i.currentTranslate < s.maxTranslate() &&
          ((w = !1),
          r.resistance &&
            (i.currentTranslate =
              s.maxTranslate() +
              1 -
              (s.maxTranslate() - i.startTranslate - v) ** b)),
      w && (c.preventedByNestedSwiper = !0),
      !s.allowSlideNext &&
        'next' === s.swipeDirection &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !s.allowSlidePrev &&
        'prev' === s.swipeDirection &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      s.allowSlidePrev ||
        s.allowSlideNext ||
        (i.currentTranslate = i.startTranslate),
      r.threshold > 0)
    ) {
      if (!(Math.abs(v) > r.threshold || i.allowThresholdMove))
        return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove)
        return (
          (i.allowThresholdMove = !0),
          (n.startX = n.currentX),
          (n.startY = n.currentY),
          (i.currentTranslate = i.startTranslate),
          void (n.diff = s.isHorizontal()
            ? n.currentX - n.startX
            : n.currentY - n.startY)
        );
    }
    r.followFinger &&
      !r.cssMode &&
      (((r.freeMode && r.freeMode.enabled && s.freeMode) ||
        r.watchSlidesProgress) &&
        (s.updateActiveIndex(), s.updateSlidesClasses()),
      s.params.freeMode &&
        r.freeMode.enabled &&
        s.freeMode &&
        s.freeMode.onTouchMove(),
      s.updateProgress(i.currentTranslate),
      s.setTranslate(i.currentTranslate));
  }
  function I(e) {
    const t = this,
      s = t.touchEventsData,
      { params: a, touches: i, rtlTranslate: r, slidesGrid: n, enabled: l } = t;
    if (!l) return;
    let o = e;
    if (
      (o.originalEvent && (o = o.originalEvent),
      s.allowTouchCallbacks && t.emit('touchEnd', o),
      (s.allowTouchCallbacks = !1),
      !s.isTouched)
    )
      return (
        s.isMoved && a.grabCursor && t.setGrabCursor(!1),
        (s.isMoved = !1),
        void (s.startMoving = !1)
      );
    a.grabCursor &&
      s.isMoved &&
      s.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const d = u(),
      c = d - s.touchStartTime;
    if (t.allowClick) {
      const e = o.path || (o.composedPath && o.composedPath());
      t.updateClickedSlide((e && e[0]) || o.target),
        t.emit('tap click', o),
        c < 300 &&
          d - s.lastClickTime < 300 &&
          t.emit('doubleTap doubleClick', o);
    }
    if (
      ((s.lastClickTime = u()),
      p(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !s.isTouched ||
        !s.isMoved ||
        !t.swipeDirection ||
        0 === i.diff ||
        s.currentTranslate === s.startTranslate)
    )
      return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
    let h;
    if (
      ((s.isTouched = !1),
      (s.isMoved = !1),
      (s.startMoving = !1),
      (h = a.followFinger
        ? r
          ? t.translate
          : -t.translate
        : -s.currentTranslate),
      a.cssMode)
    )
      return;
    if (t.params.freeMode && a.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: h });
    let m = 0,
      f = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < n.length;
      e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
    ) {
      const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      void 0 !== n[e + t]
        ? h >= n[e] && h < n[e + t] && ((m = e), (f = n[e + t] - n[e]))
        : h >= n[e] && ((m = e), (f = n[n.length - 1] - n[n.length - 2]));
    }
    let g = null,
      v = null;
    a.rewind &&
      (t.isBeginning
        ? (v =
            t.params.virtual && t.params.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (g = 0));
    const w = (h - n[m]) / f,
      b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (c > a.longSwipesMs) {
      if (!a.longSwipes) return void t.slideTo(t.activeIndex);
      'next' === t.swipeDirection &&
        (w >= a.longSwipesRatio
          ? t.slideTo(a.rewind && t.isEnd ? g : m + b)
          : t.slideTo(m)),
        'prev' === t.swipeDirection &&
          (w > 1 - a.longSwipesRatio
            ? t.slideTo(m + b)
            : null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio
              ? t.slideTo(v)
              : t.slideTo(m));
    } else {
      if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl)
        ? o.target === t.navigation.nextEl
          ? t.slideTo(m + b)
          : t.slideTo(m)
        : ('next' === t.swipeDirection && t.slideTo(null !== g ? g : m + b),
          'prev' === t.swipeDirection && t.slideTo(null !== v ? v : m));
    }
  }
  function A() {
    const e = this,
      { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: a, allowSlidePrev: i, snapGrid: r } = e;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses(),
      ('auto' === t.slidesPerView || t.slidesPerView > 1) &&
      e.isEnd &&
      !e.isBeginning &&
      !e.params.centeredSlides
        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
      (e.allowSlidePrev = i),
      (e.allowSlideNext = a),
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }
  function D(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function G() {
    const e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: a } = e;
    if (!a) return;
    let i;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const r = e.maxTranslate() - e.minTranslate();
    (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
      i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
      e.emit('setTranslate', e.translate, !1);
  }
  let B = !1;
  function N() {}
  const H = (e, t) => {
    const s = a(),
      {
        params: i,
        touchEvents: r,
        el: n,
        wrapperEl: l,
        device: o,
        support: d,
      } = e,
      c = !!i.nested,
      p = 'on' === t ? 'addEventListener' : 'removeEventListener',
      u = t;
    if (d.touch) {
      const t = !(
        'touchstart' !== r.start ||
        !d.passiveListener ||
        !i.passiveListeners
      ) && { passive: !0, capture: !1 };
      n[p](r.start, e.onTouchStart, t),
        n[p](
          r.move,
          e.onTouchMove,
          d.passiveListener ? { passive: !1, capture: c } : c
        ),
        n[p](r.end, e.onTouchEnd, t),
        r.cancel && n[p](r.cancel, e.onTouchEnd, t);
    } else
      n[p](r.start, e.onTouchStart, !1),
        s[p](r.move, e.onTouchMove, c),
        s[p](r.end, e.onTouchEnd, !1);
    (i.preventClicks || i.preventClicksPropagation) &&
      n[p]('click', e.onClick, !0),
      i.cssMode && l[p]('scroll', e.onScroll),
      i.updateOnWindowResize
        ? e[u](
            o.ios || o.android
              ? 'resize orientationchange observerUpdate'
              : 'resize observerUpdate',
            A,
            !0
          )
        : e[u]('observerUpdate', A, !0);
  };
  var X = {
    attachEvents: function () {
      const e = this,
        t = a(),
        { params: s, support: i } = e;
      (e.onTouchStart = O.bind(e)),
        (e.onTouchMove = L.bind(e)),
        (e.onTouchEnd = I.bind(e)),
        s.cssMode && (e.onScroll = G.bind(e)),
        (e.onClick = D.bind(e)),
        i.touch && !B && (t.addEventListener('touchstart', N), (B = !0)),
        H(e, 'on');
    },
    detachEvents: function () {
      H(this, 'off');
    },
  };
  const Y = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  var R = {
    addClasses: function () {
      const e = this,
        { classNames: t, params: s, rtl: a, $el: i, device: r, support: n } = e,
        l = (function (e, t) {
          const s = [];
          return (
            e.forEach((e) => {
              'object' == typeof e
                ? Object.keys(e).forEach((a) => {
                    e[a] && s.push(t + a);
                  })
                : 'string' == typeof e && s.push(t + e);
            }),
            s
          );
        })(
          [
            'initialized',
            s.direction,
            { 'pointer-events': !n.touch },
            { 'free-mode': e.params.freeMode && s.freeMode.enabled },
            { autoheight: s.autoHeight },
            { rtl: a },
            { grid: s.grid && s.grid.rows > 1 },
            {
              'grid-column':
                s.grid && s.grid.rows > 1 && 'column' === s.grid.fill,
            },
            { android: r.android },
            { ios: r.ios },
            { 'css-mode': s.cssMode },
            { centered: s.cssMode && s.centeredSlides },
            { 'watch-progress': s.watchSlidesProgress },
          ],
          s.containerModifierClass
        );
      t.push(...l), i.addClass([...t].join(' ')), e.emitContainerClasses();
    },
    removeClasses: function () {
      const { $el: e, classNames: t } = this;
      e.removeClass(t.join(' ')), this.emitContainerClasses();
    },
  };
  var W = {
    init: !0,
    direction: 'horizontal',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: 'input, select, option, textarea, button, video, label',
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: 'slide',
    breakpoints: void 0,
    breakpointsBase: 'window',
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: 'swiper-',
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function j(e, t) {
    return function (s) {
      void 0 === s && (s = {});
      const a = Object.keys(s)[0],
        i = s[a];
      'object' == typeof i && null !== i
        ? (['navigation', 'pagination', 'scrollbar'].indexOf(a) >= 0 &&
            !0 === e[a] &&
            (e[a] = { auto: !0 }),
          a in e && 'enabled' in i
            ? (!0 === e[a] && (e[a] = { enabled: !0 }),
              'object' != typeof e[a] ||
                'enabled' in e[a] ||
                (e[a].enabled = !0),
              e[a] || (e[a] = { enabled: !1 }),
              g(t, s))
            : g(t, s))
        : g(t, s);
    };
  }
  const _ = {
      eventsEmitter: $,
      update: S,
      translate: M,
      transition: {
        setTransition: function (e, t) {
          const s = this;
          s.params.cssMode || s.$wrapperEl.transition(e),
            s.emit('setTransition', e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
            { params: a } = s;
          a.cssMode ||
            (a.autoHeight && s.updateAutoHeight(),
            P({ swiper: s, runCallbacks: e, direction: t, step: 'Start' }));
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
            { params: a } = s;
          (s.animating = !1),
            a.cssMode ||
              (s.setTransition(0),
              P({ swiper: s, runCallbacks: e, direction: t, step: 'End' }));
        },
      },
      slide: k,
      loop: z,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            t.support.touch ||
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const s =
            'container' === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          (s.style.cursor = 'move'), (s.style.cursor = e ? 'grabbing' : 'grab');
        },
        unsetGrabCursor: function () {
          const e = this;
          e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e[
              'container' === e.params.touchEventsTarget ? 'el' : 'wrapperEl'
            ].style.cursor = '');
        },
      },
      events: X,
      breakpoints: {
        setBreakpoint: function () {
          const e = this,
            {
              activeIndex: t,
              initialized: s,
              loopedSlides: a = 0,
              params: i,
              $el: r,
            } = e,
            n = i.breakpoints;
          if (!n || (n && 0 === Object.keys(n).length)) return;
          const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
          if (!l || e.currentBreakpoint === l) return;
          const o = (l in n ? n[l] : void 0) || e.originalParams,
            d = Y(e, i),
            c = Y(e, o),
            p = i.enabled;
          d && !c
            ? (r.removeClass(
                `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !d &&
              c &&
              (r.addClass(`${i.containerModifierClass}grid`),
              ((o.grid.fill && 'column' === o.grid.fill) ||
                (!o.grid.fill && 'column' === i.grid.fill)) &&
                r.addClass(`${i.containerModifierClass}grid-column`),
              e.emitContainerClasses());
          const u = o.direction && o.direction !== i.direction,
            h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
          u && s && e.changeDirection(), g(e.params, o);
          const m = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            p && !m ? e.disable() : !p && m && e.enable(),
            (e.currentBreakpoint = l),
            e.emit('_beforeBreakpoint', o),
            h &&
              s &&
              (e.loopDestroy(),
              e.loopCreate(),
              e.updateSlides(),
              e.slideTo(t - a + e.loopedSlides, 0, !1)),
            e.emit('breakpoint', o);
        },
        getBreakpoint: function (e, t, s) {
          if ((void 0 === t && (t = 'window'), !e || ('container' === t && !s)))
            return;
          let a = !1;
          const i = r(),
            n = 'window' === t ? i.innerHeight : s.clientHeight,
            l = Object.keys(e).map((e) => {
              if ('string' == typeof e && 0 === e.indexOf('@')) {
                const t = parseFloat(e.substr(1));
                return { value: n * t, point: e };
              }
              return { value: e, point: e };
            });
          l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < l.length; e += 1) {
            const { point: r, value: n } = l[e];
            'window' === t
              ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r)
              : n <= s.clientWidth && (a = r);
          }
          return a || 'max';
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: s } = e,
            { slidesOffsetBefore: a } = s;
          if (a) {
            const t = e.slides.length - 1,
              s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
            e.isLocked = e.size > s;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock');
        },
      },
      classes: R,
      images: {
        loadImage: function (e, t, s, a, i, n) {
          const l = r();
          let o;
          function c() {
            n && n();
          }
          d(e).parent('picture')[0] || (e.complete && i)
            ? c()
            : t
              ? ((o = new l.Image()),
                (o.onload = c),
                (o.onerror = c),
                a && (o.sizes = a),
                s && (o.srcset = s),
                t && (o.src = t))
              : c();
        },
        preloadImages: function () {
          const e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit('imagesReady')));
          }
          e.imagesToLoad = e.$el.find('img');
          for (let s = 0; s < e.imagesToLoad.length; s += 1) {
            const a = e.imagesToLoad[s];
            e.loadImage(
              a,
              a.currentSrc || a.getAttribute('src'),
              a.srcset || a.getAttribute('srcset'),
              a.sizes || a.getAttribute('sizes'),
              !0,
              t
            );
          }
        },
      },
    },
    q = {};
  class V {
    constructor() {
      let e, t;
      for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++)
        a[i] = arguments[i];
      if (
        (1 === a.length &&
        a[0].constructor &&
        'Object' === Object.prototype.toString.call(a[0]).slice(8, -1)
          ? (t = a[0])
          : ([e, t] = a),
        t || (t = {}),
        (t = g({}, t)),
        e && !t.el && (t.el = e),
        t.el && d(t.el).length > 1)
      ) {
        const e = [];
        return (
          d(t.el).each((s) => {
            const a = g({}, t, { el: s });
            e.push(new V(a));
          }),
          e
        );
      }
      const r = this;
      (r.__swiper__ = !0),
        (r.support = E()),
        (r.device = T({ userAgent: t.userAgent })),
        (r.browser = C()),
        (r.eventsListeners = {}),
        (r.eventsAnyListeners = []),
        (r.modules = [...r.__modules__]),
        t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
      const n = {};
      r.modules.forEach((e) => {
        e({
          swiper: r,
          extendParams: j(t, n),
          on: r.on.bind(r),
          once: r.once.bind(r),
          off: r.off.bind(r),
          emit: r.emit.bind(r),
        });
      });
      const l = g({}, W, n);
      return (
        (r.params = g({}, l, q, t)),
        (r.originalParams = g({}, r.params)),
        (r.passedParams = g({}, t)),
        r.params &&
          r.params.on &&
          Object.keys(r.params.on).forEach((e) => {
            r.on(e, r.params.on[e]);
          }),
        r.params && r.params.onAny && r.onAny(r.params.onAny),
        (r.$ = d),
        Object.assign(r, {
          enabled: r.params.enabled,
          el: e,
          classNames: [],
          slides: d(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => 'horizontal' === r.params.direction,
          isVertical: () => 'vertical' === r.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: r.params.allowSlideNext,
          allowSlidePrev: r.params.allowSlidePrev,
          touchEvents: (function () {
            const e = ['touchstart', 'touchmove', 'touchend', 'touchcancel'],
              t = ['pointerdown', 'pointermove', 'pointerup'];
            return (
              (r.touchEventsTouch = {
                start: e[0],
                move: e[1],
                end: e[2],
                cancel: e[3],
              }),
              (r.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
              r.support.touch || !r.params.simulateTouch
                ? r.touchEventsTouch
                : r.touchEventsDesktop
            );
          })(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: r.params.focusableElements,
            lastClickTime: u(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0,
          },
          allowClick: !0,
          allowTouchMove: r.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        r.emit('_swiper'),
        r.params.init && r.init(),
        r
      );
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit('enable'));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit('disable'));
    }
    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const a = s.minTranslate(),
        i = (s.maxTranslate() - a) * e + a;
      s.translateTo(i, void 0 === t ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(' ')
        .filter(
          (t) =>
            0 === t.indexOf('swiper') ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit('_containerClasses', t.join(' '));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ''
        : e.className
            .split(' ')
            .filter(
              (e) =>
                0 === e.indexOf('swiper-slide') ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(' ');
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.each((s) => {
        const a = e.getSlideClasses(s);
        t.push({ slideEl: s, classNames: a }), e.emit('_slideClass', s, a);
      }),
        e.emit('_slideClasses', t);
    }
    slidesPerViewDynamic(e, t) {
      void 0 === e && (e = 'current'), void 0 === t && (t = !1);
      const {
        params: s,
        slides: a,
        slidesGrid: i,
        slidesSizesGrid: r,
        size: n,
        activeIndex: l,
      } = this;
      let o = 1;
      if (s.centeredSlides) {
        let e,
          t = a[l].swiperSlideSize;
        for (let s = l + 1; s < a.length; s += 1)
          a[s] &&
            !e &&
            ((t += a[s].swiperSlideSize), (o += 1), t > n && (e = !0));
        for (let s = l - 1; s >= 0; s -= 1)
          a[s] &&
            !e &&
            ((t += a[s].swiperSlideSize), (o += 1), t > n && (e = !0));
      } else if ('current' === e)
        for (let e = l + 1; e < a.length; e += 1) {
          (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1);
        }
      else
        for (let e = l - 1; e >= 0; e -= 1) {
          i[l] - i[e] < n && (o += 1);
        }
      return o;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: s } = e;
      function a() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let i;
      s.breakpoints && e.setBreakpoint(),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled
          ? (a(), e.params.autoHeight && e.updateAutoHeight())
          : ((i =
              ('auto' === e.params.slidesPerView ||
                e.params.slidesPerView > 1) &&
              e.isEnd &&
              !e.params.centeredSlides
                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0)),
            i || a()),
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit('update');
    }
    changeDirection(e, t) {
      void 0 === t && (t = !0);
      const s = this,
        a = s.params.direction;
      return (
        e || (e = 'horizontal' === a ? 'vertical' : 'horizontal'),
        e === a ||
          ('horizontal' !== e && 'vertical' !== e) ||
          (s.$el
            .removeClass(`${s.params.containerModifierClass}${a}`)
            .addClass(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          (s.params.direction = e),
          s.slides.each((t) => {
            'vertical' === e ? (t.style.width = '') : (t.style.height = '');
          }),
          s.emit('changeDirection'),
          t && s.update()),
        s
      );
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      const s = d(e || t.params.el);
      if (!(e = s[0])) return !1;
      e.swiper = t;
      const i = () =>
        `.${(t.params.wrapperClass || '').trim().split(' ').join('.')}`;
      let r = (() => {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          const t = d(e.shadowRoot.querySelector(i()));
          return (t.children = (e) => s.children(e)), t;
        }
        return s.children(i());
      })();
      if (0 === r.length && t.params.createElements) {
        const e = a().createElement('div');
        (r = d(e)),
          (e.className = t.params.wrapperClass),
          s.append(e),
          s.children(`.${t.params.slideClass}`).each((e) => {
            r.append(e);
          });
      }
      return (
        Object.assign(t, {
          $el: s,
          el: e,
          $wrapperEl: r,
          wrapperEl: r[0],
          mounted: !0,
          rtl: 'rtl' === e.dir.toLowerCase() || 'rtl' === s.css('direction'),
          rtlTranslate:
            'horizontal' === t.params.direction &&
            ('rtl' === e.dir.toLowerCase() || 'rtl' === s.css('direction')),
          wrongRTL: '-webkit-box' === r.css('display'),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      return (
        !1 === t.mount(e) ||
          (t.emit('beforeInit'),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.params.loop && t.loopCreate(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.preloadImages && t.preloadImages(),
          t.params.loop
            ? t.slideTo(
                t.params.initialSlide + t.loopedSlides,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.attachEvents(),
          (t.initialized = !0),
          t.emit('init'),
          t.emit('afterInit')),
        t
      );
    }
    destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      const s = this,
        { params: a, $el: i, $wrapperEl: r, slides: n } = s;
      return (
        void 0 === s.params ||
          s.destroyed ||
          (s.emit('beforeDestroy'),
          (s.initialized = !1),
          s.detachEvents(),
          a.loop && s.loopDestroy(),
          t &&
            (s.removeClasses(),
            i.removeAttr('style'),
            r.removeAttr('style'),
            n &&
              n.length &&
              n
                .removeClass(
                  [
                    a.slideVisibleClass,
                    a.slideActiveClass,
                    a.slideNextClass,
                    a.slidePrevClass,
                  ].join(' ')
                )
                .removeAttr('style')
                .removeAttr('data-swiper-slide-index')),
          s.emit('destroy'),
          Object.keys(s.eventsListeners).forEach((e) => {
            s.off(e);
          }),
          !1 !== e &&
            ((s.$el[0].swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(s)),
          (s.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      g(q, e);
    }
    static get extendedDefaults() {
      return q;
    }
    static get defaults() {
      return W;
    }
    static installModule(e) {
      V.prototype.__modules__ || (V.prototype.__modules__ = []);
      const t = V.prototype.__modules__;
      'function' == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => V.installModule(e)), V)
        : (V.installModule(e), V);
    }
  }
  function F(e, t, s, i) {
    const r = a();
    return (
      e.params.createElements &&
        Object.keys(i).forEach((a) => {
          if (!s[a] && !0 === s.auto) {
            let n = e.$el.children(`.${i[a]}`)[0];
            n ||
              ((n = r.createElement('div')),
              (n.className = i[a]),
              e.$el.append(n)),
              (s[a] = n),
              (t[a] = n);
          }
        }),
      s
    );
  }
  function U(e) {
    return (
      void 0 === e && (e = ''),
      `.${e
        .trim()
        .replace(/([\.:!\/])/g, '\\$1')
        .replace(/ /g, '.')}`
    );
  }
  function K(e) {
    const t = this,
      { $wrapperEl: s, params: a } = t;
    if ((a.loop && t.loopDestroy(), 'object' == typeof e && 'length' in e))
      for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]);
    else s.append(e);
    a.loop && t.loopCreate(), a.observer || t.update();
  }
  function Z(e) {
    const t = this,
      { params: s, $wrapperEl: a, activeIndex: i } = t;
    s.loop && t.loopDestroy();
    let r = i + 1;
    if ('object' == typeof e && 'length' in e) {
      for (let t = 0; t < e.length; t += 1) e[t] && a.prepend(e[t]);
      r = i + e.length;
    } else a.prepend(e);
    s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1);
  }
  function J(e, t) {
    const s = this,
      { $wrapperEl: a, params: i, activeIndex: r } = s;
    let n = r;
    i.loop &&
      ((n -= s.loopedSlides),
      s.loopDestroy(),
      (s.slides = a.children(`.${i.slideClass}`)));
    const l = s.slides.length;
    if (e <= 0) return void s.prependSlide(t);
    if (e >= l) return void s.appendSlide(t);
    let o = n > e ? n + 1 : n;
    const d = [];
    for (let t = l - 1; t >= e; t -= 1) {
      const e = s.slides.eq(t);
      e.remove(), d.unshift(e);
    }
    if ('object' == typeof t && 'length' in t) {
      for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
      o = n > e ? n + t.length : n;
    } else a.append(t);
    for (let e = 0; e < d.length; e += 1) a.append(d[e]);
    i.loop && s.loopCreate(),
      i.observer || s.update(),
      i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
  }
  function Q(e) {
    const t = this,
      { params: s, $wrapperEl: a, activeIndex: i } = t;
    let r = i;
    s.loop &&
      ((r -= t.loopedSlides),
      t.loopDestroy(),
      (t.slides = a.children(`.${s.slideClass}`)));
    let n,
      l = r;
    if ('object' == typeof e && 'length' in e) {
      for (let s = 0; s < e.length; s += 1)
        (n = e[s]), t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
      l = Math.max(l, 0);
    } else
      (n = e),
        t.slides[n] && t.slides.eq(n).remove(),
        n < l && (l -= 1),
        (l = Math.max(l, 0));
    s.loop && t.loopCreate(),
      s.observer || t.update(),
      s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
  }
  function ee() {
    const e = this,
      t = [];
    for (let s = 0; s < e.slides.length; s += 1) t.push(s);
    e.removeSlide(t);
  }
  function te(e) {
    const {
      effect: t,
      swiper: s,
      on: a,
      setTranslate: i,
      setTransition: r,
      overwriteParams: n,
      perspective: l,
      recreateShadows: o,
      getEffectParams: d,
    } = e;
    let c;
    a('beforeInit', () => {
      if (s.params.effect !== t) return;
      s.classNames.push(`${s.params.containerModifierClass}${t}`),
        l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
      const e = n ? n() : {};
      Object.assign(s.params, e), Object.assign(s.originalParams, e);
    }),
      a('setTranslate', () => {
        s.params.effect === t && i();
      }),
      a('setTransition', (e, a) => {
        s.params.effect === t && r(a);
      }),
      a('transitionEnd', () => {
        if (s.params.effect === t && o) {
          if (!d || !d().slideShadows) return;
          s.slides.each((e) => {
            s.$(e)
              .find(
                '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
              )
              .remove();
          }),
            o();
        }
      }),
      a('virtualUpdate', () => {
        s.params.effect === t &&
          (s.slides.length || (c = !0),
          requestAnimationFrame(() => {
            c && s.slides && s.slides.length && (i(), (c = !1));
          }));
      });
  }
  function se(e, t) {
    return e.transformEl
      ? t.find(e.transformEl).css({
          'backface-visibility': 'hidden',
          '-webkit-backface-visibility': 'hidden',
        })
      : t;
  }
  function ae(e) {
    let { swiper: t, duration: s, transformEl: a, allSlides: i } = e;
    const { slides: r, activeIndex: n, $wrapperEl: l } = t;
    if (t.params.virtualTranslate && 0 !== s) {
      let e,
        s = !1;
      (e = i ? (a ? r.find(a) : r) : a ? r.eq(n).find(a) : r.eq(n)),
        e.transitionEnd(() => {
          if (s) return;
          if (!t || t.destroyed) return;
          (s = !0), (t.animating = !1);
          const e = ['webkitTransitionEnd', 'transitionend'];
          for (let t = 0; t < e.length; t += 1) l.trigger(e[t]);
        });
    }
  }
  function ie(e, t, s) {
    const a = 'swiper-slide-shadow' + (s ? `-${s}` : ''),
      i = e.transformEl ? t.find(e.transformEl) : t;
    let r = i.children(`.${a}`);
    return (
      r.length ||
        ((r = d(`<div class="swiper-slide-shadow${s ? `-${s}` : ''}"></div>`)),
        i.append(r)),
      r
    );
  }
  Object.keys(_).forEach((e) => {
    Object.keys(_[e]).forEach((t) => {
      V.prototype[t] = _[e][t];
    });
  }),
    V.use([
      function (e) {
        let { swiper: t, on: s, emit: a } = e;
        const i = r();
        let n = null,
          l = null;
        const o = () => {
            t &&
              !t.destroyed &&
              t.initialized &&
              (a('beforeResize'), a('resize'));
          },
          d = () => {
            t && !t.destroyed && t.initialized && a('orientationchange');
          };
        s('init', () => {
          t.params.resizeObserver && void 0 !== i.ResizeObserver
            ? t &&
              !t.destroyed &&
              t.initialized &&
              ((n = new ResizeObserver((e) => {
                l = i.requestAnimationFrame(() => {
                  const { width: s, height: a } = t;
                  let i = s,
                    r = a;
                  e.forEach((e) => {
                    let { contentBoxSize: s, contentRect: a, target: n } = e;
                    (n && n !== t.el) ||
                      ((i = a ? a.width : (s[0] || s).inlineSize),
                      (r = a ? a.height : (s[0] || s).blockSize));
                  }),
                    (i === s && r === a) || o();
                });
              })),
              n.observe(t.el))
            : (i.addEventListener('resize', o),
              i.addEventListener('orientationchange', d));
        }),
          s('destroy', () => {
            l && i.cancelAnimationFrame(l),
              n && n.unobserve && t.el && (n.unobserve(t.el), (n = null)),
              i.removeEventListener('resize', o),
              i.removeEventListener('orientationchange', d);
          });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: a, emit: i } = e;
        const n = [],
          l = r(),
          o = function (e, t) {
            void 0 === t && (t = {});
            const s = new (l.MutationObserver || l.WebkitMutationObserver)(
              (e) => {
                if (1 === e.length) return void i('observerUpdate', e[0]);
                const t = function () {
                  i('observerUpdate', e[0]);
                };
                l.requestAnimationFrame
                  ? l.requestAnimationFrame(t)
                  : l.setTimeout(t, 0);
              }
            );
            s.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              n.push(s);
          };
        s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          a('init', () => {
            if (t.params.observer) {
              if (t.params.observeParents) {
                const e = t.$el.parents();
                for (let t = 0; t < e.length; t += 1) o(e[t]);
              }
              o(t.$el[0], { childList: t.params.observeSlideChildren }),
                o(t.$wrapperEl[0], { attributes: !1 });
            }
          }),
          a('destroy', () => {
            n.forEach((e) => {
              e.disconnect();
            }),
              n.splice(0, n.length);
          });
      },
    ]);
  const re = [
    function (e) {
      let t,
        { swiper: s, extendParams: a, on: i, emit: r } = e;
      function n(e, t) {
        const a = s.params.virtual;
        if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
        const i = a.renderSlide
          ? d(a.renderSlide.call(s, e, t))
          : d(
              `<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`
            );
        return (
          i.attr('data-swiper-slide-index') ||
            i.attr('data-swiper-slide-index', t),
          a.cache && (s.virtual.cache[t] = i),
          i
        );
      }
      function l(e) {
        const {
            slidesPerView: t,
            slidesPerGroup: a,
            centeredSlides: i,
          } = s.params,
          { addSlidesBefore: l, addSlidesAfter: o } = s.params.virtual,
          { from: d, to: c, slides: p, slidesGrid: u, offset: h } = s.virtual;
        s.params.cssMode || s.updateActiveIndex();
        const m = s.activeIndex || 0;
        let f, g, v;
        (f = s.rtlTranslate ? 'right' : s.isHorizontal() ? 'left' : 'top'),
          i
            ? ((g = Math.floor(t / 2) + a + o), (v = Math.floor(t / 2) + a + l))
            : ((g = t + (a - 1) + o), (v = a + l));
        const w = Math.max((m || 0) - v, 0),
          b = Math.min((m || 0) + g, p.length - 1),
          x = (s.slidesGrid[w] || 0) - (s.slidesGrid[0] || 0);
        function y() {
          s.updateSlides(),
            s.updateProgress(),
            s.updateSlidesClasses(),
            s.lazy && s.params.lazy.enabled && s.lazy.load(),
            r('virtualUpdate');
        }
        if (
          (Object.assign(s.virtual, {
            from: w,
            to: b,
            offset: x,
            slidesGrid: s.slidesGrid,
          }),
          d === w && c === b && !e)
        )
          return (
            s.slidesGrid !== u && x !== h && s.slides.css(f, `${x}px`),
            s.updateProgress(),
            void r('virtualUpdate')
          );
        if (s.params.virtual.renderExternal)
          return (
            s.params.virtual.renderExternal.call(s, {
              offset: x,
              from: w,
              to: b,
              slides: (function () {
                const e = [];
                for (let t = w; t <= b; t += 1) e.push(p[t]);
                return e;
              })(),
            }),
            void (s.params.virtual.renderExternalUpdate
              ? y()
              : r('virtualUpdate'))
          );
        const E = [],
          T = [];
        if (e) s.$wrapperEl.find(`.${s.params.slideClass}`).remove();
        else
          for (let e = d; e <= c; e += 1)
            (e < w || e > b) &&
              s.$wrapperEl
                .find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`)
                .remove();
        for (let t = 0; t < p.length; t += 1)
          t >= w &&
            t <= b &&
            (void 0 === c || e
              ? T.push(t)
              : (t > c && T.push(t), t < d && E.push(t)));
        T.forEach((e) => {
          s.$wrapperEl.append(n(p[e], e));
        }),
          E.sort((e, t) => t - e).forEach((e) => {
            s.$wrapperEl.prepend(n(p[e], e));
          }),
          s.$wrapperEl.children('.swiper-slide').css(f, `${x}px`),
          y();
      }
      a({
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      }),
        (s.virtual = {
          cache: {},
          from: void 0,
          to: void 0,
          slides: [],
          offset: 0,
          slidesGrid: [],
        }),
        i('beforeInit', () => {
          s.params.virtual.enabled &&
            ((s.virtual.slides = s.params.virtual.slides),
            s.classNames.push(`${s.params.containerModifierClass}virtual`),
            (s.params.watchSlidesProgress = !0),
            (s.originalParams.watchSlidesProgress = !0),
            s.params.initialSlide || l());
        }),
        i('setTranslate', () => {
          s.params.virtual.enabled &&
            (s.params.cssMode && !s._immediateVirtual
              ? (clearTimeout(t),
                (t = setTimeout(() => {
                  l();
                }, 100)))
              : l());
        }),
        i('init update resize', () => {
          s.params.virtual.enabled &&
            s.params.cssMode &&
            v(s.wrapperEl, '--swiper-virtual-size', `${s.virtualSize}px`);
        }),
        Object.assign(s.virtual, {
          appendSlide: function (e) {
            if ('object' == typeof e && 'length' in e)
              for (let t = 0; t < e.length; t += 1)
                e[t] && s.virtual.slides.push(e[t]);
            else s.virtual.slides.push(e);
            l(!0);
          },
          prependSlide: function (e) {
            const t = s.activeIndex;
            let a = t + 1,
              i = 1;
            if (Array.isArray(e)) {
              for (let t = 0; t < e.length; t += 1)
                e[t] && s.virtual.slides.unshift(e[t]);
              (a = t + e.length), (i = e.length);
            } else s.virtual.slides.unshift(e);
            if (s.params.virtual.cache) {
              const e = s.virtual.cache,
                t = {};
              Object.keys(e).forEach((s) => {
                const a = e[s],
                  r = a.attr('data-swiper-slide-index');
                r && a.attr('data-swiper-slide-index', parseInt(r, 10) + i),
                  (t[parseInt(s, 10) + i] = a);
              }),
                (s.virtual.cache = t);
            }
            l(!0), s.slideTo(a, 0);
          },
          removeSlide: function (e) {
            if (null == e) return;
            let t = s.activeIndex;
            if (Array.isArray(e))
              for (let a = e.length - 1; a >= 0; a -= 1)
                s.virtual.slides.splice(e[a], 1),
                  s.params.virtual.cache && delete s.virtual.cache[e[a]],
                  e[a] < t && (t -= 1),
                  (t = Math.max(t, 0));
            else
              s.virtual.slides.splice(e, 1),
                s.params.virtual.cache && delete s.virtual.cache[e],
                e < t && (t -= 1),
                (t = Math.max(t, 0));
            l(!0), s.slideTo(t, 0);
          },
          removeAllSlides: function () {
            (s.virtual.slides = []),
              s.params.virtual.cache && (s.virtual.cache = {}),
              l(!0),
              s.slideTo(0, 0);
          },
          update: l,
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i, emit: n } = e;
      const l = a(),
        o = r();
      function c(e) {
        if (!t.enabled) return;
        const { rtlTranslate: s } = t;
        let a = e;
        a.originalEvent && (a = a.originalEvent);
        const i = a.keyCode || a.charCode,
          r = t.params.keyboard.pageUpDown,
          d = r && 33 === i,
          c = r && 34 === i,
          p = 37 === i,
          u = 39 === i,
          h = 38 === i,
          m = 40 === i;
        if (
          !t.allowSlideNext &&
          ((t.isHorizontal() && u) || (t.isVertical() && m) || c)
        )
          return !1;
        if (
          !t.allowSlidePrev &&
          ((t.isHorizontal() && p) || (t.isVertical() && h) || d)
        )
          return !1;
        if (
          !(
            a.shiftKey ||
            a.altKey ||
            a.ctrlKey ||
            a.metaKey ||
            (l.activeElement &&
              l.activeElement.nodeName &&
              ('input' === l.activeElement.nodeName.toLowerCase() ||
                'textarea' === l.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            t.params.keyboard.onlyInViewport &&
            (d || c || p || u || h || m)
          ) {
            let e = !1;
            if (
              t.$el.parents(`.${t.params.slideClass}`).length > 0 &&
              0 === t.$el.parents(`.${t.params.slideActiveClass}`).length
            )
              return;
            const a = t.$el,
              i = a[0].clientWidth,
              r = a[0].clientHeight,
              n = o.innerWidth,
              l = o.innerHeight,
              d = t.$el.offset();
            s && (d.left -= t.$el[0].scrollLeft);
            const c = [
              [d.left, d.top],
              [d.left + i, d.top],
              [d.left, d.top + r],
              [d.left + i, d.top + r],
            ];
            for (let t = 0; t < c.length; t += 1) {
              const s = c[t];
              if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                if (0 === s[0] && 0 === s[1]) continue;
                e = !0;
              }
            }
            if (!e) return;
          }
          t.isHorizontal()
            ? ((d || c || p || u) &&
                (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (((c || u) && !s) || ((d || p) && s)) && t.slideNext(),
              (((d || p) && !s) || ((c || u) && s)) && t.slidePrev())
            : ((d || c || h || m) &&
                (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (c || m) && t.slideNext(),
              (d || h) && t.slidePrev()),
            n('keyPress', i);
        }
      }
      function p() {
        t.keyboard.enabled ||
          (d(l).on('keydown', c), (t.keyboard.enabled = !0));
      }
      function u() {
        t.keyboard.enabled &&
          (d(l).off('keydown', c), (t.keyboard.enabled = !1));
      }
      (t.keyboard = { enabled: !1 }),
        s({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
        i('init', () => {
          t.params.keyboard.enabled && p();
        }),
        i('destroy', () => {
          t.keyboard.enabled && u();
        }),
        Object.assign(t.keyboard, { enable: p, disable: u });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      const n = r();
      let l;
      s({
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarget: 'container',
          thresholdDelta: null,
          thresholdTime: null,
        },
      }),
        (t.mousewheel = { enabled: !1 });
      let o,
        c = u();
      const h = [];
      function m() {
        t.enabled && (t.mouseEntered = !0);
      }
      function f() {
        t.enabled && (t.mouseEntered = !1);
      }
      function g(e) {
        return (
          !(
            t.params.mousewheel.thresholdDelta &&
            e.delta < t.params.mousewheel.thresholdDelta
          ) &&
          !(
            t.params.mousewheel.thresholdTime &&
            u() - c < t.params.mousewheel.thresholdTime
          ) &&
          ((e.delta >= 6 && u() - c < 60) ||
            (e.direction < 0
              ? (t.isEnd && !t.params.loop) ||
                t.animating ||
                (t.slideNext(), i('scroll', e.raw))
              : (t.isBeginning && !t.params.loop) ||
                t.animating ||
                (t.slidePrev(), i('scroll', e.raw)),
            (c = new n.Date().getTime()),
            !1))
        );
      }
      function v(e) {
        let s = e,
          a = !0;
        if (!t.enabled) return;
        const r = t.params.mousewheel;
        t.params.cssMode && s.preventDefault();
        let n = t.$el;
        if (
          ('container' !== t.params.mousewheel.eventsTarget &&
            (n = d(t.params.mousewheel.eventsTarget)),
          !t.mouseEntered && !n[0].contains(s.target) && !r.releaseOnEdges)
        )
          return !0;
        s.originalEvent && (s = s.originalEvent);
        let c = 0;
        const m = t.rtlTranslate ? -1 : 1,
          f = (function (e) {
            let t = 0,
              s = 0,
              a = 0,
              i = 0;
            return (
              'detail' in e && (s = e.detail),
              'wheelDelta' in e && (s = -e.wheelDelta / 120),
              'wheelDeltaY' in e && (s = -e.wheelDeltaY / 120),
              'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
              'axis' in e && e.axis === e.HORIZONTAL_AXIS && ((t = s), (s = 0)),
              (a = 10 * t),
              (i = 10 * s),
              'deltaY' in e && (i = e.deltaY),
              'deltaX' in e && (a = e.deltaX),
              e.shiftKey && !a && ((a = i), (i = 0)),
              (a || i) &&
                e.deltaMode &&
                (1 === e.deltaMode
                  ? ((a *= 40), (i *= 40))
                  : ((a *= 800), (i *= 800))),
              a && !t && (t = a < 1 ? -1 : 1),
              i && !s && (s = i < 1 ? -1 : 1),
              { spinX: t, spinY: s, pixelX: a, pixelY: i }
            );
          })(s);
        if (r.forceToAxis)
          if (t.isHorizontal()) {
            if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0;
            c = -f.pixelX * m;
          } else {
            if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0;
            c = -f.pixelY;
          }
        else
          c =
            Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * m : -f.pixelY;
        if (0 === c) return !0;
        r.invert && (c = -c);
        let v = t.getTranslate() + c * r.sensitivity;
        if (
          (v >= t.minTranslate() && (v = t.minTranslate()),
          v <= t.maxTranslate() && (v = t.maxTranslate()),
          (a =
            !!t.params.loop ||
            !(v === t.minTranslate() || v === t.maxTranslate())),
          a && t.params.nested && s.stopPropagation(),
          t.params.freeMode && t.params.freeMode.enabled)
        ) {
          const e = { time: u(), delta: Math.abs(c), direction: Math.sign(c) },
            a =
              o &&
              e.time < o.time + 500 &&
              e.delta <= o.delta &&
              e.direction === o.direction;
          if (!a) {
            (o = void 0), t.params.loop && t.loopFix();
            let n = t.getTranslate() + c * r.sensitivity;
            const d = t.isBeginning,
              u = t.isEnd;
            if (
              (n >= t.minTranslate() && (n = t.minTranslate()),
              n <= t.maxTranslate() && (n = t.maxTranslate()),
              t.setTransition(0),
              t.setTranslate(n),
              t.updateProgress(),
              t.updateActiveIndex(),
              t.updateSlidesClasses(),
              ((!d && t.isBeginning) || (!u && t.isEnd)) &&
                t.updateSlidesClasses(),
              t.params.freeMode.sticky)
            ) {
              clearTimeout(l), (l = void 0), h.length >= 15 && h.shift();
              const s = h.length ? h[h.length - 1] : void 0,
                a = h[0];
              if (
                (h.push(e),
                s && (e.delta > s.delta || e.direction !== s.direction))
              )
                h.splice(0);
              else if (
                h.length >= 15 &&
                e.time - a.time < 500 &&
                a.delta - e.delta >= 1 &&
                e.delta <= 6
              ) {
                const s = c > 0 ? 0.8 : 0.2;
                (o = e),
                  h.splice(0),
                  (l = p(() => {
                    t.slideToClosest(t.params.speed, !0, void 0, s);
                  }, 0));
              }
              l ||
                (l = p(() => {
                  (o = e),
                    h.splice(0),
                    t.slideToClosest(t.params.speed, !0, void 0, 0.5);
                }, 500));
            }
            if (
              (a || i('scroll', s),
              t.params.autoplay &&
                t.params.autoplayDisableOnInteraction &&
                t.autoplay.stop(),
              n === t.minTranslate() || n === t.maxTranslate())
            )
              return !0;
          }
        } else {
          const s = {
            time: u(),
            delta: Math.abs(c),
            direction: Math.sign(c),
            raw: e,
          };
          h.length >= 2 && h.shift();
          const a = h.length ? h[h.length - 1] : void 0;
          if (
            (h.push(s),
            a
              ? (s.direction !== a.direction ||
                  s.delta > a.delta ||
                  s.time > a.time + 150) &&
                g(s)
              : g(s),
            (function (e) {
              const s = t.params.mousewheel;
              if (e.direction < 0) {
                if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
              } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges)
                return !0;
              return !1;
            })(s))
          )
            return !0;
        }
        return s.preventDefault ? s.preventDefault() : (s.returnValue = !1), !1;
      }
      function w(e) {
        let s = t.$el;
        'container' !== t.params.mousewheel.eventsTarget &&
          (s = d(t.params.mousewheel.eventsTarget)),
          s[e]('mouseenter', m),
          s[e]('mouseleave', f),
          s[e]('wheel', v);
      }
      function b() {
        return t.params.cssMode
          ? (t.wrapperEl.removeEventListener('wheel', v), !0)
          : !t.mousewheel.enabled && (w('on'), (t.mousewheel.enabled = !0), !0);
      }
      function x() {
        return t.params.cssMode
          ? (t.wrapperEl.addEventListener(event, v), !0)
          : !!t.mousewheel.enabled &&
              (w('off'), (t.mousewheel.enabled = !1), !0);
      }
      a('init', () => {
        !t.params.mousewheel.enabled && t.params.cssMode && x(),
          t.params.mousewheel.enabled && b();
      }),
        a('destroy', () => {
          t.params.cssMode && b(), t.mousewheel.enabled && x();
        }),
        Object.assign(t.mousewheel, { enable: b, disable: x });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      function r(e) {
        let s;
        return (
          e &&
            ((s = d(e)),
            t.params.uniqueNavElements &&
              'string' == typeof e &&
              s.length > 1 &&
              1 === t.$el.find(e).length &&
              (s = t.$el.find(e))),
          s
        );
      }
      function n(e, s) {
        const a = t.params.navigation;
        e &&
          e.length > 0 &&
          (e[s ? 'addClass' : 'removeClass'](a.disabledClass),
          e[0] && 'BUTTON' === e[0].tagName && (e[0].disabled = s),
          t.params.watchOverflow &&
            t.enabled &&
            e[t.isLocked ? 'addClass' : 'removeClass'](a.lockClass));
      }
      function l() {
        if (t.params.loop) return;
        const { $nextEl: e, $prevEl: s } = t.navigation;
        n(s, t.isBeginning && !t.params.rewind),
          n(e, t.isEnd && !t.params.rewind);
      }
      function o(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev();
      }
      function c(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
      }
      function p() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = F(
            t,
            t.originalParams.navigation,
            t.params.navigation,
            { nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev' }
          )),
          !e.nextEl && !e.prevEl)
        )
          return;
        const s = r(e.nextEl),
          a = r(e.prevEl);
        s && s.length > 0 && s.on('click', c),
          a && a.length > 0 && a.on('click', o),
          Object.assign(t.navigation, {
            $nextEl: s,
            nextEl: s && s[0],
            $prevEl: a,
            prevEl: a && a[0],
          }),
          t.enabled ||
            (s && s.addClass(e.lockClass), a && a.addClass(e.lockClass));
      }
      function u() {
        const { $nextEl: e, $prevEl: s } = t.navigation;
        e &&
          e.length &&
          (e.off('click', c), e.removeClass(t.params.navigation.disabledClass)),
          s &&
            s.length &&
            (s.off('click', o),
            s.removeClass(t.params.navigation.disabledClass));
      }
      s({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: 'swiper-button-disabled',
          hiddenClass: 'swiper-button-hidden',
          lockClass: 'swiper-button-lock',
        },
      }),
        (t.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        a('init', () => {
          p(), l();
        }),
        a('toEdge fromEdge lock unlock', () => {
          l();
        }),
        a('destroy', () => {
          u();
        }),
        a('enable disable', () => {
          const { $nextEl: e, $prevEl: s } = t.navigation;
          e &&
            e[t.enabled ? 'removeClass' : 'addClass'](
              t.params.navigation.lockClass
            ),
            s &&
              s[t.enabled ? 'removeClass' : 'addClass'](
                t.params.navigation.lockClass
              );
        }),
        a('click', (e, s) => {
          const { $nextEl: a, $prevEl: r } = t.navigation,
            n = s.target;
          if (t.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(a)) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === n || t.pagination.el.contains(n))
            )
              return;
            let e;
            a
              ? (e = a.hasClass(t.params.navigation.hiddenClass))
              : r && (e = r.hasClass(t.params.navigation.hiddenClass)),
              i(!0 === e ? 'navigationShow' : 'navigationHide'),
              a && a.toggleClass(t.params.navigation.hiddenClass),
              r && r.toggleClass(t.params.navigation.hiddenClass);
          }
        }),
        Object.assign(t.navigation, { update: l, init: p, destroy: u });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      const r = 'swiper-pagination';
      let n;
      s({
        pagination: {
          el: null,
          bulletElement: 'span',
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: 'bullets',
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${r}-bullet`,
          bulletActiveClass: `${r}-bullet-active`,
          modifierClass: `${r}-`,
          currentClass: `${r}-current`,
          totalClass: `${r}-total`,
          hiddenClass: `${r}-hidden`,
          progressbarFillClass: `${r}-progressbar-fill`,
          progressbarOppositeClass: `${r}-progressbar-opposite`,
          clickableClass: `${r}-clickable`,
          lockClass: `${r}-lock`,
          horizontalClass: `${r}-horizontal`,
          verticalClass: `${r}-vertical`,
        },
      }),
        (t.pagination = { el: null, $el: null, bullets: [] });
      let l = 0;
      function o() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          !t.pagination.$el ||
          0 === t.pagination.$el.length
        );
      }
      function c(e, s) {
        const { bulletActiveClass: a } = t.params.pagination;
        e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`);
      }
      function p() {
        const e = t.rtl,
          s = t.params.pagination;
        if (o()) return;
        const a =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          r = t.pagination.$el;
        let p;
        const u = t.params.loop
          ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup)
          : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((p = Math.ceil(
                (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
              )),
              p > a - 1 - 2 * t.loopedSlides && (p -= a - 2 * t.loopedSlides),
              p > u - 1 && (p -= u),
              p < 0 && 'bullets' !== t.params.paginationType && (p = u + p))
            : (p = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
          'bullets' === s.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const a = t.pagination.bullets;
          let i, o, u;
          if (
            (s.dynamicBullets &&
              ((n = a
                .eq(0)
                [t.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0)),
              r.css(
                t.isHorizontal() ? 'width' : 'height',
                n * (s.dynamicMainBullets + 4) + 'px'
              ),
              s.dynamicMainBullets > 1 &&
                void 0 !== t.previousIndex &&
                ((l += p - (t.previousIndex - t.loopedSlides || 0)),
                l > s.dynamicMainBullets - 1
                  ? (l = s.dynamicMainBullets - 1)
                  : l < 0 && (l = 0)),
              (i = Math.max(p - l, 0)),
              (o = i + (Math.min(a.length, s.dynamicMainBullets) - 1)),
              (u = (o + i) / 2)),
            a.removeClass(
              ['', '-next', '-next-next', '-prev', '-prev-prev', '-main']
                .map((e) => `${s.bulletActiveClass}${e}`)
                .join(' ')
            ),
            r.length > 1)
          )
            a.each((e) => {
              const t = d(e),
                a = t.index();
              a === p && t.addClass(s.bulletActiveClass),
                s.dynamicBullets &&
                  (a >= i &&
                    a <= o &&
                    t.addClass(`${s.bulletActiveClass}-main`),
                  a === i && c(t, 'prev'),
                  a === o && c(t, 'next'));
            });
          else {
            const e = a.eq(p),
              r = e.index();
            if ((e.addClass(s.bulletActiveClass), s.dynamicBullets)) {
              const e = a.eq(i),
                n = a.eq(o);
              for (let e = i; e <= o; e += 1)
                a.eq(e).addClass(`${s.bulletActiveClass}-main`);
              if (t.params.loop)
                if (r >= a.length) {
                  for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                    a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`);
                  a.eq(a.length - s.dynamicMainBullets - 1).addClass(
                    `${s.bulletActiveClass}-prev`
                  );
                } else c(e, 'prev'), c(n, 'next');
              else c(e, 'prev'), c(n, 'next');
            }
          }
          if (s.dynamicBullets) {
            const i = Math.min(a.length, s.dynamicMainBullets + 4),
              r = (n * i - n) / 2 - u * n,
              l = e ? 'right' : 'left';
            a.css(t.isHorizontal() ? l : 'top', `${r}px`);
          }
        }
        if (
          ('fraction' === s.type &&
            (r.find(U(s.currentClass)).text(s.formatFractionCurrent(p + 1)),
            r.find(U(s.totalClass)).text(s.formatFractionTotal(u))),
          'progressbar' === s.type)
        ) {
          let e;
          e = s.progressbarOpposite
            ? t.isHorizontal()
              ? 'vertical'
              : 'horizontal'
            : t.isHorizontal()
              ? 'horizontal'
              : 'vertical';
          const a = (p + 1) / u;
          let i = 1,
            n = 1;
          'horizontal' === e ? (i = a) : (n = a),
            r
              .find(U(s.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`)
              .transition(t.params.speed);
        }
        'custom' === s.type && s.renderCustom
          ? (r.html(s.renderCustom(t, p + 1, u)), i('paginationRender', r[0]))
          : i('paginationUpdate', r[0]),
          t.params.watchOverflow &&
            t.enabled &&
            r[t.isLocked ? 'addClass' : 'removeClass'](s.lockClass);
      }
      function u() {
        const e = t.params.pagination;
        if (o()) return;
        const s =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          a = t.pagination.$el;
        let r = '';
        if ('bullets' === e.type) {
          let i = t.params.loop
            ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            !t.params.loop &&
            i > s &&
            (i = s);
          for (let s = 0; s < i; s += 1)
            e.renderBullet
              ? (r += e.renderBullet.call(t, s, e.bulletClass))
              : (r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
          a.html(r), (t.pagination.bullets = a.find(U(e.bulletClass)));
        }
        'fraction' === e.type &&
          ((r = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          a.html(r)),
          'progressbar' === e.type &&
            ((r = e.renderProgressbar
              ? e.renderProgressbar.call(t, e.progressbarFillClass)
              : `<span class="${e.progressbarFillClass}"></span>`),
            a.html(r)),
          'custom' !== e.type && i('paginationRender', t.pagination.$el[0]);
      }
      function h() {
        t.params.pagination = F(
          t,
          t.originalParams.pagination,
          t.params.pagination,
          { el: 'swiper-pagination' }
        );
        const e = t.params.pagination;
        if (!e.el) return;
        let s = d(e.el);
        0 !== s.length &&
          (t.params.uniqueNavElements &&
            'string' == typeof e.el &&
            s.length > 1 &&
            ((s = t.$el.find(e.el)),
            s.length > 1 &&
              (s = s.filter((e) => d(e).parents('.swiper')[0] === t.el))),
          'bullets' === e.type && e.clickable && s.addClass(e.clickableClass),
          s.addClass(e.modifierClass + e.type),
          s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          'bullets' === e.type &&
            e.dynamicBullets &&
            (s.addClass(`${e.modifierClass}${e.type}-dynamic`),
            (l = 0),
            e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
          'progressbar' === e.type &&
            e.progressbarOpposite &&
            s.addClass(e.progressbarOppositeClass),
          e.clickable &&
            s.on('click', U(e.bulletClass), function (e) {
              e.preventDefault();
              let s = d(this).index() * t.params.slidesPerGroup;
              t.params.loop && (s += t.loopedSlides), t.slideTo(s);
            }),
          Object.assign(t.pagination, { $el: s, el: s[0] }),
          t.enabled || s.addClass(e.lockClass));
      }
      function m() {
        const e = t.params.pagination;
        if (o()) return;
        const s = t.pagination.$el;
        s.removeClass(e.hiddenClass),
          s.removeClass(e.modifierClass + e.type),
          s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          t.pagination.bullets &&
            t.pagination.bullets.removeClass &&
            t.pagination.bullets.removeClass(e.bulletActiveClass),
          e.clickable && s.off('click', U(e.bulletClass));
      }
      a('init', () => {
        h(), u(), p();
      }),
        a('activeIndexChange', () => {
          (t.params.loop || void 0 === t.snapIndex) && p();
        }),
        a('snapIndexChange', () => {
          t.params.loop || p();
        }),
        a('slidesLengthChange', () => {
          t.params.loop && (u(), p());
        }),
        a('snapGridLengthChange', () => {
          t.params.loop || (u(), p());
        }),
        a('destroy', () => {
          m();
        }),
        a('enable disable', () => {
          const { $el: e } = t.pagination;
          e &&
            e[t.enabled ? 'removeClass' : 'addClass'](
              t.params.pagination.lockClass
            );
        }),
        a('lock unlock', () => {
          p();
        }),
        a('click', (e, s) => {
          const a = s.target,
            { $el: r } = t.pagination;
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            r.length > 0 &&
            !d(a).hasClass(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && a === t.navigation.nextEl) ||
                (t.navigation.prevEl && a === t.navigation.prevEl))
            )
              return;
            const e = r.hasClass(t.params.pagination.hiddenClass);
            i(!0 === e ? 'paginationShow' : 'paginationHide'),
              r.toggleClass(t.params.pagination.hiddenClass);
          }
        }),
        Object.assign(t.pagination, {
          render: u,
          update: p,
          init: h,
          destroy: m,
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i, emit: r } = e;
      const n = a();
      let l,
        o,
        c,
        u,
        h = !1,
        m = null,
        f = null;
      function g() {
        if (!t.params.scrollbar.el || !t.scrollbar.el) return;
        const { scrollbar: e, rtlTranslate: s, progress: a } = t,
          { $dragEl: i, $el: r } = e,
          n = t.params.scrollbar;
        let l = o,
          d = (c - o) * a;
        s
          ? ((d = -d),
            d > 0 ? ((l = o - d), (d = 0)) : -d + o > c && (l = c + d))
          : d < 0
            ? ((l = o + d), (d = 0))
            : d + o > c && (l = c - d),
          t.isHorizontal()
            ? (i.transform(`translate3d(${d}px, 0, 0)`),
              (i[0].style.width = `${l}px`))
            : (i.transform(`translate3d(0px, ${d}px, 0)`),
              (i[0].style.height = `${l}px`)),
          n.hide &&
            (clearTimeout(m),
            (r[0].style.opacity = 1),
            (m = setTimeout(() => {
              (r[0].style.opacity = 0), r.transition(400);
            }, 1e3)));
      }
      function v() {
        if (!t.params.scrollbar.el || !t.scrollbar.el) return;
        const { scrollbar: e } = t,
          { $dragEl: s, $el: a } = e;
        (s[0].style.width = ''),
          (s[0].style.height = ''),
          (c = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight),
          (u =
            t.size /
            (t.virtualSize +
              t.params.slidesOffsetBefore -
              (t.params.centeredSlides ? t.snapGrid[0] : 0))),
          (o =
            'auto' === t.params.scrollbar.dragSize
              ? c * u
              : parseInt(t.params.scrollbar.dragSize, 10)),
          t.isHorizontal()
            ? (s[0].style.width = `${o}px`)
            : (s[0].style.height = `${o}px`),
          (a[0].style.display = u >= 1 ? 'none' : ''),
          t.params.scrollbar.hide && (a[0].style.opacity = 0),
          t.params.watchOverflow &&
            t.enabled &&
            e.$el[t.isLocked ? 'addClass' : 'removeClass'](
              t.params.scrollbar.lockClass
            );
      }
      function w(e) {
        return t.isHorizontal()
          ? 'touchstart' === e.type || 'touchmove' === e.type
            ? e.targetTouches[0].clientX
            : e.clientX
          : 'touchstart' === e.type || 'touchmove' === e.type
            ? e.targetTouches[0].clientY
            : e.clientY;
      }
      function b(e) {
        const { scrollbar: s, rtlTranslate: a } = t,
          { $el: i } = s;
        let r;
        (r =
          (w(e) -
            i.offset()[t.isHorizontal() ? 'left' : 'top'] -
            (null !== l ? l : o / 2)) /
          (c - o)),
          (r = Math.max(Math.min(r, 1), 0)),
          a && (r = 1 - r);
        const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
        t.updateProgress(n),
          t.setTranslate(n),
          t.updateActiveIndex(),
          t.updateSlidesClasses();
      }
      function x(e) {
        const s = t.params.scrollbar,
          { scrollbar: a, $wrapperEl: i } = t,
          { $el: n, $dragEl: o } = a;
        (h = !0),
          (l =
            e.target === o[0] || e.target === o
              ? w(e) -
                e.target.getBoundingClientRect()[
                  t.isHorizontal() ? 'left' : 'top'
                ]
              : null),
          e.preventDefault(),
          e.stopPropagation(),
          i.transition(100),
          o.transition(100),
          b(e),
          clearTimeout(f),
          n.transition(0),
          s.hide && n.css('opacity', 1),
          t.params.cssMode && t.$wrapperEl.css('scroll-snap-type', 'none'),
          r('scrollbarDragStart', e);
      }
      function y(e) {
        const { scrollbar: s, $wrapperEl: a } = t,
          { $el: i, $dragEl: n } = s;
        h &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          b(e),
          a.transition(0),
          i.transition(0),
          n.transition(0),
          r('scrollbarDragMove', e));
      }
      function E(e) {
        const s = t.params.scrollbar,
          { scrollbar: a, $wrapperEl: i } = t,
          { $el: n } = a;
        h &&
          ((h = !1),
          t.params.cssMode &&
            (t.$wrapperEl.css('scroll-snap-type', ''), i.transition('')),
          s.hide &&
            (clearTimeout(f),
            (f = p(() => {
              n.css('opacity', 0), n.transition(400);
            }, 1e3))),
          r('scrollbarDragEnd', e),
          s.snapOnRelease && t.slideToClosest());
      }
      function T(e) {
        const {
            scrollbar: s,
            touchEventsTouch: a,
            touchEventsDesktop: i,
            params: r,
            support: l,
          } = t,
          o = s.$el[0],
          d = !(!l.passiveListener || !r.passiveListeners) && {
            passive: !1,
            capture: !1,
          },
          c = !(!l.passiveListener || !r.passiveListeners) && {
            passive: !0,
            capture: !1,
          };
        if (!o) return;
        const p = 'on' === e ? 'addEventListener' : 'removeEventListener';
        l.touch
          ? (o[p](a.start, x, d), o[p](a.move, y, d), o[p](a.end, E, c))
          : (o[p](i.start, x, d), n[p](i.move, y, d), n[p](i.end, E, c));
      }
      function C() {
        const { scrollbar: e, $el: s } = t;
        t.params.scrollbar = F(
          t,
          t.originalParams.scrollbar,
          t.params.scrollbar,
          { el: 'swiper-scrollbar' }
        );
        const a = t.params.scrollbar;
        if (!a.el) return;
        let i = d(a.el);
        t.params.uniqueNavElements &&
          'string' == typeof a.el &&
          i.length > 1 &&
          1 === s.find(a.el).length &&
          (i = s.find(a.el));
        let r = i.find(`.${t.params.scrollbar.dragClass}`);
        0 === r.length &&
          ((r = d(`<div class="${t.params.scrollbar.dragClass}"></div>`)),
          i.append(r)),
          Object.assign(e, { $el: i, el: i[0], $dragEl: r, dragEl: r[0] }),
          a.draggable && t.params.scrollbar.el && T('on'),
          i &&
            i[t.enabled ? 'removeClass' : 'addClass'](
              t.params.scrollbar.lockClass
            );
      }
      function $() {
        t.params.scrollbar.el && T('off');
      }
      s({
        scrollbar: {
          el: null,
          dragSize: 'auto',
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: 'swiper-scrollbar-lock',
          dragClass: 'swiper-scrollbar-drag',
        },
      }),
        (t.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
        i('init', () => {
          C(), v(), g();
        }),
        i('update resize observerUpdate lock unlock', () => {
          v();
        }),
        i('setTranslate', () => {
          g();
        }),
        i('setTransition', (e, s) => {
          !(function (e) {
            t.params.scrollbar.el &&
              t.scrollbar.el &&
              t.scrollbar.$dragEl.transition(e);
          })(s);
        }),
        i('enable disable', () => {
          const { $el: e } = t.scrollbar;
          e &&
            e[t.enabled ? 'removeClass' : 'addClass'](
              t.params.scrollbar.lockClass
            );
        }),
        i('destroy', () => {
          $();
        }),
        Object.assign(t.scrollbar, {
          updateSize: v,
          setTranslate: g,
          init: C,
          destroy: $,
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ parallax: { enabled: !1 } });
      const i = (e, s) => {
          const { rtl: a } = t,
            i = d(e),
            r = a ? -1 : 1,
            n = i.attr('data-swiper-parallax') || '0';
          let l = i.attr('data-swiper-parallax-x'),
            o = i.attr('data-swiper-parallax-y');
          const c = i.attr('data-swiper-parallax-scale'),
            p = i.attr('data-swiper-parallax-opacity');
          if (
            (l || o
              ? ((l = l || '0'), (o = o || '0'))
              : t.isHorizontal()
                ? ((l = n), (o = '0'))
                : ((o = n), (l = '0')),
            (l =
              l.indexOf('%') >= 0
                ? parseInt(l, 10) * s * r + '%'
                : l * s * r + 'px'),
            (o =
              o.indexOf('%') >= 0 ? parseInt(o, 10) * s + '%' : o * s + 'px'),
            null != p)
          ) {
            const e = p - (p - 1) * (1 - Math.abs(s));
            i[0].style.opacity = e;
          }
          if (null == c) i.transform(`translate3d(${l}, ${o}, 0px)`);
          else {
            const e = c - (c - 1) * (1 - Math.abs(s));
            i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`);
          }
        },
        r = () => {
          const { $el: e, slides: s, progress: a, snapGrid: r } = t;
          e
            .children(
              '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
            )
            .each((e) => {
              i(e, a);
            }),
            s.each((e, s) => {
              let n = e.progress;
              t.params.slidesPerGroup > 1 &&
                'auto' !== t.params.slidesPerView &&
                (n += Math.ceil(s / 2) - a * (r.length - 1)),
                (n = Math.min(Math.max(n, -1), 1)),
                d(e)
                  .find(
                    '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
                  )
                  .each((e) => {
                    i(e, n);
                  });
            });
        };
      a('beforeInit', () => {
        t.params.parallax.enabled &&
          ((t.params.watchSlidesProgress = !0),
          (t.originalParams.watchSlidesProgress = !0));
      }),
        a('init', () => {
          t.params.parallax.enabled && r();
        }),
        a('setTranslate', () => {
          t.params.parallax.enabled && r();
        }),
        a('setTransition', (e, s) => {
          t.params.parallax.enabled &&
            (function (e) {
              void 0 === e && (e = t.params.speed);
              const { $el: s } = t;
              s.find(
                '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
              ).each((t) => {
                const s = d(t);
                let a =
                  parseInt(s.attr('data-swiper-parallax-duration'), 10) || e;
                0 === e && (a = 0), s.transition(a);
              });
            })(s);
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      const n = r();
      s({
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: 'swiper-zoom-container',
          zoomedSlideClass: 'swiper-slide-zoomed',
        },
      }),
        (t.zoom = { enabled: !1 });
      let l,
        o,
        c,
        p = 1,
        u = !1;
      const m = {
          $slideEl: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          $imageEl: void 0,
          $imageWrapEl: void 0,
          maxRatio: 3,
        },
        f = {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {},
          touchesCurrent: {},
        },
        g = {
          x: void 0,
          y: void 0,
          prevPositionX: void 0,
          prevPositionY: void 0,
          prevTime: void 0,
        };
      let v = 1;
      function w(e) {
        if (e.targetTouches.length < 2) return 1;
        const t = e.targetTouches[0].pageX,
          s = e.targetTouches[0].pageY,
          a = e.targetTouches[1].pageX,
          i = e.targetTouches[1].pageY;
        return Math.sqrt((a - t) ** 2 + (i - s) ** 2);
      }
      function b(e) {
        const s = t.support,
          a = t.params.zoom;
        if (((o = !1), (c = !1), !s.gestures)) {
          if (
            'touchstart' !== e.type ||
            ('touchstart' === e.type && e.targetTouches.length < 2)
          )
            return;
          (o = !0), (m.scaleStart = w(e));
        }
        (m.$slideEl && m.$slideEl.length) ||
        ((m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)),
        0 === m.$slideEl.length && (m.$slideEl = t.slides.eq(t.activeIndex)),
        (m.$imageEl = m.$slideEl
          .find(`.${a.containerClass}`)
          .eq(0)
          .find('picture, img, svg, canvas, .swiper-zoom-target')
          .eq(0)),
        (m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`)),
        (m.maxRatio = m.$imageWrapEl.attr('data-swiper-zoom') || a.maxRatio),
        0 !== m.$imageWrapEl.length)
          ? (m.$imageEl && m.$imageEl.transition(0), (u = !0))
          : (m.$imageEl = void 0);
      }
      function x(e) {
        const s = t.support,
          a = t.params.zoom,
          i = t.zoom;
        if (!s.gestures) {
          if (
            'touchmove' !== e.type ||
            ('touchmove' === e.type && e.targetTouches.length < 2)
          )
            return;
          (c = !0), (m.scaleMove = w(e));
        }
        m.$imageEl && 0 !== m.$imageEl.length
          ? (s.gestures
              ? (i.scale = e.scale * p)
              : (i.scale = (m.scaleMove / m.scaleStart) * p),
            i.scale > m.maxRatio &&
              (i.scale = m.maxRatio - 1 + (i.scale - m.maxRatio + 1) ** 0.5),
            i.scale < a.minRatio &&
              (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** 0.5),
            m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`))
          : 'gesturechange' === e.type && b(e);
      }
      function y(e) {
        const s = t.device,
          a = t.support,
          i = t.params.zoom,
          r = t.zoom;
        if (!a.gestures) {
          if (!o || !c) return;
          if (
            'touchend' !== e.type ||
            ('touchend' === e.type && e.changedTouches.length < 2 && !s.android)
          )
            return;
          (o = !1), (c = !1);
        }
        m.$imageEl &&
          0 !== m.$imageEl.length &&
          ((r.scale = Math.max(Math.min(r.scale, m.maxRatio), i.minRatio)),
          m.$imageEl
            .transition(t.params.speed)
            .transform(`translate3d(0,0,0) scale(${r.scale})`),
          (p = r.scale),
          (u = !1),
          1 === r.scale && (m.$slideEl = void 0));
      }
      function E(e) {
        const s = t.zoom;
        if (!m.$imageEl || 0 === m.$imageEl.length) return;
        if (((t.allowClick = !1), !f.isTouched || !m.$slideEl)) return;
        f.isMoved ||
          ((f.width = m.$imageEl[0].offsetWidth),
          (f.height = m.$imageEl[0].offsetHeight),
          (f.startX = h(m.$imageWrapEl[0], 'x') || 0),
          (f.startY = h(m.$imageWrapEl[0], 'y') || 0),
          (m.slideWidth = m.$slideEl[0].offsetWidth),
          (m.slideHeight = m.$slideEl[0].offsetHeight),
          m.$imageWrapEl.transition(0));
        const a = f.width * s.scale,
          i = f.height * s.scale;
        if (!(a < m.slideWidth && i < m.slideHeight)) {
          if (
            ((f.minX = Math.min(m.slideWidth / 2 - a / 2, 0)),
            (f.maxX = -f.minX),
            (f.minY = Math.min(m.slideHeight / 2 - i / 2, 0)),
            (f.maxY = -f.minY),
            (f.touchesCurrent.x =
              'touchmove' === e.type ? e.targetTouches[0].pageX : e.pageX),
            (f.touchesCurrent.y =
              'touchmove' === e.type ? e.targetTouches[0].pageY : e.pageY),
            !f.isMoved && !u)
          ) {
            if (
              t.isHorizontal() &&
              ((Math.floor(f.minX) === Math.floor(f.startX) &&
                f.touchesCurrent.x < f.touchesStart.x) ||
                (Math.floor(f.maxX) === Math.floor(f.startX) &&
                  f.touchesCurrent.x > f.touchesStart.x))
            )
              return void (f.isTouched = !1);
            if (
              !t.isHorizontal() &&
              ((Math.floor(f.minY) === Math.floor(f.startY) &&
                f.touchesCurrent.y < f.touchesStart.y) ||
                (Math.floor(f.maxY) === Math.floor(f.startY) &&
                  f.touchesCurrent.y > f.touchesStart.y))
            )
              return void (f.isTouched = !1);
          }
          e.cancelable && e.preventDefault(),
            e.stopPropagation(),
            (f.isMoved = !0),
            (f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX),
            (f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY),
            f.currentX < f.minX &&
              (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** 0.8),
            f.currentX > f.maxX &&
              (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** 0.8),
            f.currentY < f.minY &&
              (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** 0.8),
            f.currentY > f.maxY &&
              (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** 0.8),
            g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x),
            g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y),
            g.prevTime || (g.prevTime = Date.now()),
            (g.x =
              (f.touchesCurrent.x - g.prevPositionX) /
              (Date.now() - g.prevTime) /
              2),
            (g.y =
              (f.touchesCurrent.y - g.prevPositionY) /
              (Date.now() - g.prevTime) /
              2),
            Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0),
            Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0),
            (g.prevPositionX = f.touchesCurrent.x),
            (g.prevPositionY = f.touchesCurrent.y),
            (g.prevTime = Date.now()),
            m.$imageWrapEl.transform(
              `translate3d(${f.currentX}px, ${f.currentY}px,0)`
            );
        }
      }
      function T() {
        const e = t.zoom;
        m.$slideEl &&
          t.previousIndex !== t.activeIndex &&
          (m.$imageEl && m.$imageEl.transform('translate3d(0,0,0) scale(1)'),
          m.$imageWrapEl && m.$imageWrapEl.transform('translate3d(0,0,0)'),
          (e.scale = 1),
          (p = 1),
          (m.$slideEl = void 0),
          (m.$imageEl = void 0),
          (m.$imageWrapEl = void 0));
      }
      function C(e) {
        const s = t.zoom,
          a = t.params.zoom;
        if (
          (m.$slideEl ||
            (e &&
              e.target &&
              (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)),
            m.$slideEl ||
              (t.params.virtual && t.params.virtual.enabled && t.virtual
                ? (m.$slideEl = t.$wrapperEl.children(
                    `.${t.params.slideActiveClass}`
                  ))
                : (m.$slideEl = t.slides.eq(t.activeIndex))),
            (m.$imageEl = m.$slideEl
              .find(`.${a.containerClass}`)
              .eq(0)
              .find('picture, img, svg, canvas, .swiper-zoom-target')
              .eq(0)),
            (m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`))),
          !m.$imageEl ||
            0 === m.$imageEl.length ||
            !m.$imageWrapEl ||
            0 === m.$imageWrapEl.length)
        )
          return;
        let i, r, l, o, c, u, h, g, v, w, b, x, y, E, T, C, $, S;
        t.params.cssMode &&
          ((t.wrapperEl.style.overflow = 'hidden'),
          (t.wrapperEl.style.touchAction = 'none')),
          m.$slideEl.addClass(`${a.zoomedSlideClass}`),
          void 0 === f.touchesStart.x && e
            ? ((i =
                'touchend' === e.type ? e.changedTouches[0].pageX : e.pageX),
              (r = 'touchend' === e.type ? e.changedTouches[0].pageY : e.pageY))
            : ((i = f.touchesStart.x), (r = f.touchesStart.y)),
          (s.scale = m.$imageWrapEl.attr('data-swiper-zoom') || a.maxRatio),
          (p = m.$imageWrapEl.attr('data-swiper-zoom') || a.maxRatio),
          e
            ? (($ = m.$slideEl[0].offsetWidth),
              (S = m.$slideEl[0].offsetHeight),
              (l = m.$slideEl.offset().left + n.scrollX),
              (o = m.$slideEl.offset().top + n.scrollY),
              (c = l + $ / 2 - i),
              (u = o + S / 2 - r),
              (v = m.$imageEl[0].offsetWidth),
              (w = m.$imageEl[0].offsetHeight),
              (b = v * s.scale),
              (x = w * s.scale),
              (y = Math.min($ / 2 - b / 2, 0)),
              (E = Math.min(S / 2 - x / 2, 0)),
              (T = -y),
              (C = -E),
              (h = c * s.scale),
              (g = u * s.scale),
              h < y && (h = y),
              h > T && (h = T),
              g < E && (g = E),
              g > C && (g = C))
            : ((h = 0), (g = 0)),
          m.$imageWrapEl
            .transition(300)
            .transform(`translate3d(${h}px, ${g}px,0)`),
          m.$imageEl
            .transition(300)
            .transform(`translate3d(0,0,0) scale(${s.scale})`);
      }
      function $() {
        const e = t.zoom,
          s = t.params.zoom;
        m.$slideEl ||
          (t.params.virtual && t.params.virtual.enabled && t.virtual
            ? (m.$slideEl = t.$wrapperEl.children(
                `.${t.params.slideActiveClass}`
              ))
            : (m.$slideEl = t.slides.eq(t.activeIndex)),
          (m.$imageEl = m.$slideEl
            .find(`.${s.containerClass}`)
            .eq(0)
            .find('picture, img, svg, canvas, .swiper-zoom-target')
            .eq(0)),
          (m.$imageWrapEl = m.$imageEl.parent(`.${s.containerClass}`))),
          m.$imageEl &&
            0 !== m.$imageEl.length &&
            m.$imageWrapEl &&
            0 !== m.$imageWrapEl.length &&
            (t.params.cssMode &&
              ((t.wrapperEl.style.overflow = ''),
              (t.wrapperEl.style.touchAction = '')),
            (e.scale = 1),
            (p = 1),
            m.$imageWrapEl.transition(300).transform('translate3d(0,0,0)'),
            m.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)'),
            m.$slideEl.removeClass(`${s.zoomedSlideClass}`),
            (m.$slideEl = void 0));
      }
      function S(e) {
        const s = t.zoom;
        s.scale && 1 !== s.scale ? $() : C(e);
      }
      function M() {
        const e = t.support;
        return {
          passiveListener: !(
            'touchstart' !== t.touchEvents.start ||
            !e.passiveListener ||
            !t.params.passiveListeners
          ) && { passive: !0, capture: !1 },
          activeListenerWithCapture: !e.passiveListener || {
            passive: !1,
            capture: !0,
          },
        };
      }
      function P() {
        return `.${t.params.slideClass}`;
      }
      function k(e) {
        const { passiveListener: s } = M(),
          a = P();
        t.$wrapperEl[e]('gesturestart', a, b, s),
          t.$wrapperEl[e]('gesturechange', a, x, s),
          t.$wrapperEl[e]('gestureend', a, y, s);
      }
      function z() {
        l || ((l = !0), k('on'));
      }
      function O() {
        l && ((l = !1), k('off'));
      }
      function L() {
        const e = t.zoom;
        if (e.enabled) return;
        e.enabled = !0;
        const s = t.support,
          { passiveListener: a, activeListenerWithCapture: i } = M(),
          r = P();
        s.gestures
          ? (t.$wrapperEl.on(t.touchEvents.start, z, a),
            t.$wrapperEl.on(t.touchEvents.end, O, a))
          : 'touchstart' === t.touchEvents.start &&
            (t.$wrapperEl.on(t.touchEvents.start, r, b, a),
            t.$wrapperEl.on(t.touchEvents.move, r, x, i),
            t.$wrapperEl.on(t.touchEvents.end, r, y, a),
            t.touchEvents.cancel &&
              t.$wrapperEl.on(t.touchEvents.cancel, r, y, a)),
          t.$wrapperEl.on(
            t.touchEvents.move,
            `.${t.params.zoom.containerClass}`,
            E,
            i
          );
      }
      function I() {
        const e = t.zoom;
        if (!e.enabled) return;
        const s = t.support;
        e.enabled = !1;
        const { passiveListener: a, activeListenerWithCapture: i } = M(),
          r = P();
        s.gestures
          ? (t.$wrapperEl.off(t.touchEvents.start, z, a),
            t.$wrapperEl.off(t.touchEvents.end, O, a))
          : 'touchstart' === t.touchEvents.start &&
            (t.$wrapperEl.off(t.touchEvents.start, r, b, a),
            t.$wrapperEl.off(t.touchEvents.move, r, x, i),
            t.$wrapperEl.off(t.touchEvents.end, r, y, a),
            t.touchEvents.cancel &&
              t.$wrapperEl.off(t.touchEvents.cancel, r, y, a)),
          t.$wrapperEl.off(
            t.touchEvents.move,
            `.${t.params.zoom.containerClass}`,
            E,
            i
          );
      }
      Object.defineProperty(t.zoom, 'scale', {
        get: () => v,
        set(e) {
          if (v !== e) {
            const t = m.$imageEl ? m.$imageEl[0] : void 0,
              s = m.$slideEl ? m.$slideEl[0] : void 0;
            i('zoomChange', e, t, s);
          }
          v = e;
        },
      }),
        a('init', () => {
          t.params.zoom.enabled && L();
        }),
        a('destroy', () => {
          I();
        }),
        a('touchStart', (e, s) => {
          t.zoom.enabled &&
            (function (e) {
              const s = t.device;
              m.$imageEl &&
                0 !== m.$imageEl.length &&
                (f.isTouched ||
                  (s.android && e.cancelable && e.preventDefault(),
                  (f.isTouched = !0),
                  (f.touchesStart.x =
                    'touchstart' === e.type
                      ? e.targetTouches[0].pageX
                      : e.pageX),
                  (f.touchesStart.y =
                    'touchstart' === e.type
                      ? e.targetTouches[0].pageY
                      : e.pageY)));
            })(s);
        }),
        a('touchEnd', (e, s) => {
          t.zoom.enabled &&
            (function () {
              const e = t.zoom;
              if (!m.$imageEl || 0 === m.$imageEl.length) return;
              if (!f.isTouched || !f.isMoved)
                return (f.isTouched = !1), void (f.isMoved = !1);
              (f.isTouched = !1), (f.isMoved = !1);
              let s = 300,
                a = 300;
              const i = g.x * s,
                r = f.currentX + i,
                n = g.y * a,
                l = f.currentY + n;
              0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)),
                0 !== g.y && (a = Math.abs((l - f.currentY) / g.y));
              const o = Math.max(s, a);
              (f.currentX = r), (f.currentY = l);
              const d = f.width * e.scale,
                c = f.height * e.scale;
              (f.minX = Math.min(m.slideWidth / 2 - d / 2, 0)),
                (f.maxX = -f.minX),
                (f.minY = Math.min(m.slideHeight / 2 - c / 2, 0)),
                (f.maxY = -f.minY),
                (f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX)),
                (f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY)),
                m.$imageWrapEl
                  .transition(o)
                  .transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`);
            })();
        }),
        a('doubleTap', (e, s) => {
          !t.animating &&
            t.params.zoom.enabled &&
            t.zoom.enabled &&
            t.params.zoom.toggle &&
            S(s);
        }),
        a('transitionEnd', () => {
          t.zoom.enabled && t.params.zoom.enabled && T();
        }),
        a('slideChange', () => {
          t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && T();
        }),
        Object.assign(t.zoom, {
          enable: L,
          disable: I,
          in: C,
          out: $,
          toggle: S,
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      s({
        lazy: {
          checkInView: !1,
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          scrollingElement: '',
          elementClass: 'swiper-lazy',
          loadingClass: 'swiper-lazy-loading',
          loadedClass: 'swiper-lazy-loaded',
          preloaderClass: 'swiper-lazy-preloader',
        },
      }),
        (t.lazy = {});
      let n = !1,
        l = !1;
      function o(e, s) {
        void 0 === s && (s = !0);
        const a = t.params.lazy;
        if (void 0 === e) return;
        if (0 === t.slides.length) return;
        const r =
            t.virtual && t.params.virtual.enabled
              ? t.$wrapperEl.children(
                  `.${t.params.slideClass}[data-swiper-slide-index="${e}"]`
                )
              : t.slides.eq(e),
          n = r.find(
            `.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`
          );
        !r.hasClass(a.elementClass) ||
          r.hasClass(a.loadedClass) ||
          r.hasClass(a.loadingClass) ||
          n.push(r[0]),
          0 !== n.length &&
            n.each((e) => {
              const n = d(e);
              n.addClass(a.loadingClass);
              const l = n.attr('data-background'),
                c = n.attr('data-src'),
                p = n.attr('data-srcset'),
                u = n.attr('data-sizes'),
                h = n.parent('picture');
              t.loadImage(n[0], c || l, p, u, !1, () => {
                if (null != t && t && (!t || t.params) && !t.destroyed) {
                  if (
                    (l
                      ? (n.css('background-image', `url("${l}")`),
                        n.removeAttr('data-background'))
                      : (p &&
                          (n.attr('srcset', p), n.removeAttr('data-srcset')),
                        u && (n.attr('sizes', u), n.removeAttr('data-sizes')),
                        h.length &&
                          h.children('source').each((e) => {
                            const t = d(e);
                            t.attr('data-srcset') &&
                              (t.attr('srcset', t.attr('data-srcset')),
                              t.removeAttr('data-srcset'));
                          }),
                        c && (n.attr('src', c), n.removeAttr('data-src'))),
                    n.addClass(a.loadedClass).removeClass(a.loadingClass),
                    r.find(`.${a.preloaderClass}`).remove(),
                    t.params.loop && s)
                  ) {
                    const e = r.attr('data-swiper-slide-index');
                    if (r.hasClass(t.params.slideDuplicateClass)) {
                      o(
                        t.$wrapperEl
                          .children(
                            `[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`
                          )
                          .index(),
                        !1
                      );
                    } else {
                      o(
                        t.$wrapperEl
                          .children(
                            `.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                          )
                          .index(),
                        !1
                      );
                    }
                  }
                  i('lazyImageReady', r[0], n[0]),
                    t.params.autoHeight && t.updateAutoHeight();
                }
              }),
                i('lazyImageLoad', r[0], n[0]);
            });
      }
      function c() {
        const { $wrapperEl: e, params: s, slides: a, activeIndex: i } = t,
          r = t.virtual && s.virtual.enabled,
          n = s.lazy;
        let c = s.slidesPerView;
        function p(t) {
          if (r) {
            if (
              e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`)
                .length
            )
              return !0;
          } else if (a[t]) return !0;
          return !1;
        }
        function u(e) {
          return r ? d(e).attr('data-swiper-slide-index') : d(e).index();
        }
        if (
          ('auto' === c && (c = 0), l || (l = !0), t.params.watchSlidesProgress)
        )
          e.children(`.${s.slideVisibleClass}`).each((e) => {
            o(r ? d(e).attr('data-swiper-slide-index') : d(e).index());
          });
        else if (c > 1) for (let e = i; e < i + c; e += 1) p(e) && o(e);
        else o(i);
        if (n.loadPrevNext)
          if (c > 1 || (n.loadPrevNextAmount && n.loadPrevNextAmount > 1)) {
            const e = n.loadPrevNextAmount,
              t = c,
              s = Math.min(i + t + Math.max(e, t), a.length),
              r = Math.max(i - Math.max(t, e), 0);
            for (let e = i + c; e < s; e += 1) p(e) && o(e);
            for (let e = r; e < i; e += 1) p(e) && o(e);
          } else {
            const t = e.children(`.${s.slideNextClass}`);
            t.length > 0 && o(u(t));
            const a = e.children(`.${s.slidePrevClass}`);
            a.length > 0 && o(u(a));
          }
      }
      function p() {
        const e = r();
        if (!t || t.destroyed) return;
        const s = t.params.lazy.scrollingElement
            ? d(t.params.lazy.scrollingElement)
            : d(e),
          a = s[0] === e,
          i = a ? e.innerWidth : s[0].offsetWidth,
          l = a ? e.innerHeight : s[0].offsetHeight,
          o = t.$el.offset(),
          { rtlTranslate: u } = t;
        let h = !1;
        u && (o.left -= t.$el[0].scrollLeft);
        const m = [
          [o.left, o.top],
          [o.left + t.width, o.top],
          [o.left, o.top + t.height],
          [o.left + t.width, o.top + t.height],
        ];
        for (let e = 0; e < m.length; e += 1) {
          const t = m[e];
          if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= l) {
            if (0 === t[0] && 0 === t[1]) continue;
            h = !0;
          }
        }
        const f = !(
          'touchstart' !== t.touchEvents.start ||
          !t.support.passiveListener ||
          !t.params.passiveListeners
        ) && { passive: !0, capture: !1 };
        h
          ? (c(), s.off('scroll', p, f))
          : n || ((n = !0), s.on('scroll', p, f));
      }
      a('beforeInit', () => {
        t.params.lazy.enabled &&
          t.params.preloadImages &&
          (t.params.preloadImages = !1);
      }),
        a('init', () => {
          t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c());
        }),
        a('scroll', () => {
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            !t.params.freeMode.sticky &&
            c();
        }),
        a('scrollbarDragMove resize _freeModeNoMomentumRelease', () => {
          t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c());
        }),
        a('transitionStart', () => {
          t.params.lazy.enabled &&
            (t.params.lazy.loadOnTransitionStart ||
              (!t.params.lazy.loadOnTransitionStart && !l)) &&
            (t.params.lazy.checkInView ? p() : c());
        }),
        a('transitionEnd', () => {
          t.params.lazy.enabled &&
            !t.params.lazy.loadOnTransitionStart &&
            (t.params.lazy.checkInView ? p() : c());
        }),
        a('slideChange', () => {
          const {
            lazy: e,
            cssMode: s,
            watchSlidesProgress: a,
            touchReleaseOnEdges: i,
            resistanceRatio: r,
          } = t.params;
          e.enabled && (s || (a && (i || 0 === r))) && c();
        }),
        Object.assign(t.lazy, { load: c, loadInSlide: o });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      function i(e, t) {
        const s = (function () {
          let e, t, s;
          return (a, i) => {
            for (t = -1, e = a.length; e - t > 1; )
              (s = (e + t) >> 1), a[s] <= i ? (t = s) : (e = s);
            return e;
          };
        })();
        let a, i;
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((i = s(this.x, e)),
                (a = i - 1),
                ((e - this.x[a]) * (this.y[i] - this.y[a])) /
                  (this.x[i] - this.x[a]) +
                  this.y[a])
              : 0;
          }),
          this
        );
      }
      function r() {
        t.controller.control &&
          t.controller.spline &&
          ((t.controller.spline = void 0), delete t.controller.spline);
      }
      s({ controller: { control: void 0, inverse: !1, by: 'slide' } }),
        (t.controller = { control: void 0 }),
        a('beforeInit', () => {
          t.controller.control = t.params.controller.control;
        }),
        a('update', () => {
          r();
        }),
        a('resize', () => {
          r();
        }),
        a('observerUpdate', () => {
          r();
        }),
        a('setTranslate', (e, s, a) => {
          t.controller.control && t.controller.setTranslate(s, a);
        }),
        a('setTransition', (e, s, a) => {
          t.controller.control && t.controller.setTransition(s, a);
        }),
        Object.assign(t.controller, {
          setTranslate: function (e, s) {
            const a = t.controller.control;
            let r, n;
            const l = t.constructor;
            function o(e) {
              const s = t.rtlTranslate ? -t.translate : t.translate;
              'slide' === t.params.controller.by &&
                (!(function (e) {
                  t.controller.spline ||
                    (t.controller.spline = t.params.loop
                      ? new i(t.slidesGrid, e.slidesGrid)
                      : new i(t.snapGrid, e.snapGrid));
                })(e),
                (n = -t.controller.spline.interpolate(-s))),
                (n && 'container' !== t.params.controller.by) ||
                  ((r =
                    (e.maxTranslate() - e.minTranslate()) /
                    (t.maxTranslate() - t.minTranslate())),
                  (n = (s - t.minTranslate()) * r + e.minTranslate())),
                t.params.controller.inverse && (n = e.maxTranslate() - n),
                e.updateProgress(n),
                e.setTranslate(n, t),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
            }
            if (Array.isArray(a))
              for (let e = 0; e < a.length; e += 1)
                a[e] !== s && a[e] instanceof l && o(a[e]);
            else a instanceof l && s !== a && o(a);
          },
          setTransition: function (e, s) {
            const a = t.constructor,
              i = t.controller.control;
            let r;
            function n(s) {
              s.setTransition(e, t),
                0 !== e &&
                  (s.transitionStart(),
                  s.params.autoHeight &&
                    p(() => {
                      s.updateAutoHeight();
                    }),
                  s.$wrapperEl.transitionEnd(() => {
                    i &&
                      (s.params.loop &&
                        'slide' === t.params.controller.by &&
                        s.loopFix(),
                      s.transitionEnd());
                  }));
            }
            if (Array.isArray(i))
              for (r = 0; r < i.length; r += 1)
                i[r] !== s && i[r] instanceof a && n(i[r]);
            else i instanceof a && s !== i && n(i);
          },
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        a11y: {
          enabled: !0,
          notificationClass: 'swiper-notification',
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          firstSlideMessage: 'This is the first slide',
          lastSlideMessage: 'This is the last slide',
          paginationBulletMessage: 'Go to slide {{index}}',
          slideLabelMessage: '{{index}} / {{slidesLength}}',
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: 'group',
          id: null,
        },
      });
      let i = null;
      function r(e) {
        const t = i;
        0 !== t.length && (t.html(''), t.html(e));
      }
      function n(e) {
        e.attr('tabIndex', '0');
      }
      function l(e) {
        e.attr('tabIndex', '-1');
      }
      function o(e, t) {
        e.attr('role', t);
      }
      function c(e, t) {
        e.attr('aria-roledescription', t);
      }
      function p(e, t) {
        e.attr('aria-label', t);
      }
      function u(e) {
        e.attr('aria-disabled', !0);
      }
      function h(e) {
        e.attr('aria-disabled', !1);
      }
      function m(e) {
        if (13 !== e.keyCode && 32 !== e.keyCode) return;
        const s = t.params.a11y,
          a = d(e.target);
        t.navigation &&
          t.navigation.$nextEl &&
          a.is(t.navigation.$nextEl) &&
          ((t.isEnd && !t.params.loop) || t.slideNext(),
          t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)),
          t.navigation &&
            t.navigation.$prevEl &&
            a.is(t.navigation.$prevEl) &&
            ((t.isBeginning && !t.params.loop) || t.slidePrev(),
            t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)),
          t.pagination &&
            a.is(U(t.params.pagination.bulletClass)) &&
            a[0].click();
      }
      function f() {
        return (
          t.pagination && t.pagination.bullets && t.pagination.bullets.length
        );
      }
      function g() {
        return f() && t.params.pagination.clickable;
      }
      const v = (e, t, s) => {
          n(e),
            'BUTTON' !== e[0].tagName && (o(e, 'button'), e.on('keydown', m)),
            p(e, s),
            (function (e, t) {
              e.attr('aria-controls', t);
            })(e, t);
        },
        w = (e) => {
          const s = e.target.closest(`.${t.params.slideClass}`);
          if (!s || !t.slides.includes(s)) return;
          const a = t.slides.indexOf(s) === t.activeIndex,
            i =
              t.params.watchSlidesProgress &&
              t.visibleSlides &&
              t.visibleSlides.includes(s);
          a || i || t.slideTo(t.slides.indexOf(s), 0);
        };
      function b() {
        const e = t.params.a11y;
        t.$el.append(i);
        const s = t.$el;
        e.containerRoleDescriptionMessage &&
          c(s, e.containerRoleDescriptionMessage),
          e.containerMessage && p(s, e.containerMessage);
        const a = t.$wrapperEl,
          r =
            e.id ||
            a.attr('id') ||
            `swiper-wrapper-${((n = 16), void 0 === n && (n = 16), 'x'.repeat(n).replace(/x/g, () => Math.round(16 * Math.random()).toString(16)))}`;
        var n;
        const l =
          t.params.autoplay && t.params.autoplay.enabled ? 'off' : 'polite';
        var u;
        (u = r),
          a.attr('id', u),
          (function (e, t) {
            e.attr('aria-live', t);
          })(a, l),
          e.itemRoleDescriptionMessage &&
            c(d(t.slides), e.itemRoleDescriptionMessage),
          o(d(t.slides), e.slideRole);
        const h = t.params.loop
          ? t.slides.filter(
              (e) => !e.classList.contains(t.params.slideDuplicateClass)
            ).length
          : t.slides.length;
        let f, b;
        t.slides.each((s, a) => {
          const i = d(s),
            r = t.params.loop
              ? parseInt(i.attr('data-swiper-slide-index'), 10)
              : a;
          p(
            i,
            e.slideLabelMessage
              .replace(/\{\{index\}\}/, r + 1)
              .replace(/\{\{slidesLength\}\}/, h)
          );
        }),
          t.navigation && t.navigation.$nextEl && (f = t.navigation.$nextEl),
          t.navigation && t.navigation.$prevEl && (b = t.navigation.$prevEl),
          f && f.length && v(f, r, e.nextSlideMessage),
          b && b.length && v(b, r, e.prevSlideMessage),
          g() &&
            t.pagination.$el.on(
              'keydown',
              U(t.params.pagination.bulletClass),
              m
            ),
          t.$el.on('focus', w, !0);
      }
      a('beforeInit', () => {
        i = d(
          `<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
        );
      }),
        a('afterInit', () => {
          t.params.a11y.enabled && b();
        }),
        a('fromEdge toEdge afterInit lock unlock', () => {
          t.params.a11y.enabled &&
            (function () {
              if (t.params.loop || t.params.rewind || !t.navigation) return;
              const { $nextEl: e, $prevEl: s } = t.navigation;
              s &&
                s.length > 0 &&
                (t.isBeginning ? (u(s), l(s)) : (h(s), n(s))),
                e && e.length > 0 && (t.isEnd ? (u(e), l(e)) : (h(e), n(e)));
            })();
        }),
        a('paginationUpdate', () => {
          t.params.a11y.enabled &&
            (function () {
              const e = t.params.a11y;
              f() &&
                t.pagination.bullets.each((s) => {
                  const a = d(s);
                  t.params.pagination.clickable &&
                    (n(a),
                    t.params.pagination.renderBullet ||
                      (o(a, 'button'),
                      p(
                        a,
                        e.paginationBulletMessage.replace(
                          /\{\{index\}\}/,
                          a.index() + 1
                        )
                      ))),
                    a.is(`.${t.params.pagination.bulletActiveClass}`)
                      ? a.attr('aria-current', 'true')
                      : a.removeAttr('aria-current');
                });
            })();
        }),
        a('destroy', () => {
          t.params.a11y.enabled &&
            (function () {
              let e, s;
              i && i.length > 0 && i.remove(),
                t.navigation &&
                  t.navigation.$nextEl &&
                  (e = t.navigation.$nextEl),
                t.navigation &&
                  t.navigation.$prevEl &&
                  (s = t.navigation.$prevEl),
                e && e.off('keydown', m),
                s && s.off('keydown', m),
                g() &&
                  t.pagination.$el.off(
                    'keydown',
                    U(t.params.pagination.bulletClass),
                    m
                  ),
                t.$el.off('focus', w, !0);
            })();
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        history: { enabled: !1, root: '', replaceState: !1, key: 'slides' },
      });
      let i = !1,
        n = {};
      const l = (e) =>
          e
            .toString()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/--+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, ''),
        o = (e) => {
          const t = r();
          let s;
          s = e ? new URL(e) : t.location;
          const a = s.pathname
              .slice(1)
              .split('/')
              .filter((e) => '' !== e),
            i = a.length;
          return { key: a[i - 2], value: a[i - 1] };
        },
        d = (e, s) => {
          const a = r();
          if (!i || !t.params.history.enabled) return;
          let n;
          n = t.params.url ? new URL(t.params.url) : a.location;
          const o = t.slides.eq(s);
          let d = l(o.attr('data-history'));
          if (t.params.history.root.length > 0) {
            let s = t.params.history.root;
            '/' === s[s.length - 1] && (s = s.slice(0, s.length - 1)),
              (d = `${s}/${e}/${d}`);
          } else n.pathname.includes(e) || (d = `${e}/${d}`);
          const c = a.history.state;
          (c && c.value === d) ||
            (t.params.history.replaceState
              ? a.history.replaceState({ value: d }, null, d)
              : a.history.pushState({ value: d }, null, d));
        },
        c = (e, s, a) => {
          if (s)
            for (let i = 0, r = t.slides.length; i < r; i += 1) {
              const r = t.slides.eq(i);
              if (
                l(r.attr('data-history')) === s &&
                !r.hasClass(t.params.slideDuplicateClass)
              ) {
                const s = r.index();
                t.slideTo(s, e, a);
              }
            }
          else t.slideTo(0, e, a);
        },
        p = () => {
          (n = o(t.params.url)), c(t.params.speed, t.paths.value, !1);
        };
      a('init', () => {
        t.params.history.enabled &&
          (() => {
            const e = r();
            if (t.params.history) {
              if (!e.history || !e.history.pushState)
                return (
                  (t.params.history.enabled = !1),
                  void (t.params.hashNavigation.enabled = !0)
                );
              (i = !0),
                (n = o(t.params.url)),
                (n.key || n.value) &&
                  (c(0, n.value, t.params.runCallbacksOnInit),
                  t.params.history.replaceState ||
                    e.addEventListener('popstate', p));
            }
          })();
      }),
        a('destroy', () => {
          t.params.history.enabled &&
            (() => {
              const e = r();
              t.params.history.replaceState ||
                e.removeEventListener('popstate', p);
            })();
        }),
        a('transitionEnd _freeModeNoMomentumRelease', () => {
          i && d(t.params.history.key, t.activeIndex);
        }),
        a('slideChange', () => {
          i && t.params.cssMode && d(t.params.history.key, t.activeIndex);
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, emit: i, on: n } = e,
        l = !1;
      const o = a(),
        c = r();
      s({ hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } });
      const p = () => {
          i('hashChange');
          const e = o.location.hash.replace('#', '');
          if (e !== t.slides.eq(t.activeIndex).attr('data-hash')) {
            const s = t.$wrapperEl
              .children(`.${t.params.slideClass}[data-hash="${e}"]`)
              .index();
            if (void 0 === s) return;
            t.slideTo(s);
          }
        },
        u = () => {
          if (l && t.params.hashNavigation.enabled)
            if (
              t.params.hashNavigation.replaceState &&
              c.history &&
              c.history.replaceState
            )
              c.history.replaceState(
                null,
                null,
                `#${t.slides.eq(t.activeIndex).attr('data-hash')}` || ''
              ),
                i('hashSet');
            else {
              const e = t.slides.eq(t.activeIndex),
                s = e.attr('data-hash') || e.attr('data-history');
              (o.location.hash = s || ''), i('hashSet');
            }
        };
      n('init', () => {
        t.params.hashNavigation.enabled &&
          (() => {
            if (
              !t.params.hashNavigation.enabled ||
              (t.params.history && t.params.history.enabled)
            )
              return;
            l = !0;
            const e = o.location.hash.replace('#', '');
            if (e) {
              const s = 0;
              for (let a = 0, i = t.slides.length; a < i; a += 1) {
                const i = t.slides.eq(a);
                if (
                  (i.attr('data-hash') || i.attr('data-history')) === e &&
                  !i.hasClass(t.params.slideDuplicateClass)
                ) {
                  const e = i.index();
                  t.slideTo(e, s, t.params.runCallbacksOnInit, !0);
                }
              }
            }
            t.params.hashNavigation.watchState && d(c).on('hashchange', p);
          })();
      }),
        n('destroy', () => {
          t.params.hashNavigation.enabled &&
            t.params.hashNavigation.watchState &&
            d(c).off('hashchange', p);
        }),
        n('transitionEnd _freeModeNoMomentumRelease', () => {
          l && u();
        }),
        n('slideChange', () => {
          l && t.params.cssMode && u();
        });
    },
    function (e) {
      let t,
        { swiper: s, extendParams: i, on: r, emit: n } = e;
      function l() {
        const e = s.slides.eq(s.activeIndex);
        let a = s.params.autoplay.delay;
        e.attr('data-swiper-autoplay') &&
          (a = e.attr('data-swiper-autoplay') || s.params.autoplay.delay),
          clearTimeout(t),
          (t = p(() => {
            let e;
            s.params.autoplay.reverseDirection
              ? s.params.loop
                ? (s.loopFix(),
                  (e = s.slidePrev(s.params.speed, !0, !0)),
                  n('autoplay'))
                : s.isBeginning
                  ? s.params.autoplay.stopOnLastSlide
                    ? d()
                    : ((e = s.slideTo(
                        s.slides.length - 1,
                        s.params.speed,
                        !0,
                        !0
                      )),
                      n('autoplay'))
                  : ((e = s.slidePrev(s.params.speed, !0, !0)), n('autoplay'))
              : s.params.loop
                ? (s.loopFix(),
                  (e = s.slideNext(s.params.speed, !0, !0)),
                  n('autoplay'))
                : s.isEnd
                  ? s.params.autoplay.stopOnLastSlide
                    ? d()
                    : ((e = s.slideTo(0, s.params.speed, !0, !0)),
                      n('autoplay'))
                  : ((e = s.slideNext(s.params.speed, !0, !0)), n('autoplay')),
              ((s.params.cssMode && s.autoplay.running) || !1 === e) && l();
          }, a));
      }
      function o() {
        return (
          void 0 === t &&
          !s.autoplay.running &&
          ((s.autoplay.running = !0), n('autoplayStart'), l(), !0)
        );
      }
      function d() {
        return (
          !!s.autoplay.running &&
          void 0 !== t &&
          (t && (clearTimeout(t), (t = void 0)),
          (s.autoplay.running = !1),
          n('autoplayStop'),
          !0)
        );
      }
      function c(e) {
        s.autoplay.running &&
          (s.autoplay.paused ||
            (t && clearTimeout(t),
            (s.autoplay.paused = !0),
            0 !== e && s.params.autoplay.waitForTransition
              ? ['transitionend', 'webkitTransitionEnd'].forEach((e) => {
                  s.$wrapperEl[0].addEventListener(e, h);
                })
              : ((s.autoplay.paused = !1), l())));
      }
      function u() {
        const e = a();
        'hidden' === e.visibilityState && s.autoplay.running && c(),
          'visible' === e.visibilityState &&
            s.autoplay.paused &&
            (l(), (s.autoplay.paused = !1));
      }
      function h(e) {
        s &&
          !s.destroyed &&
          s.$wrapperEl &&
          e.target === s.$wrapperEl[0] &&
          (['transitionend', 'webkitTransitionEnd'].forEach((e) => {
            s.$wrapperEl[0].removeEventListener(e, h);
          }),
          (s.autoplay.paused = !1),
          s.autoplay.running ? l() : d());
      }
      function m() {
        s.params.autoplay.disableOnInteraction
          ? d()
          : (n('autoplayPause'), c()),
          ['transitionend', 'webkitTransitionEnd'].forEach((e) => {
            s.$wrapperEl[0].removeEventListener(e, h);
          });
      }
      function f() {
        s.params.autoplay.disableOnInteraction ||
          ((s.autoplay.paused = !1), n('autoplayResume'), l());
      }
      (s.autoplay = { running: !1, paused: !1 }),
        i({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        }),
        r('init', () => {
          if (s.params.autoplay.enabled) {
            o();
            a().addEventListener('visibilitychange', u),
              s.params.autoplay.pauseOnMouseEnter &&
                (s.$el.on('mouseenter', m), s.$el.on('mouseleave', f));
          }
        }),
        r('beforeTransitionStart', (e, t, a) => {
          s.autoplay.running &&
            (a || !s.params.autoplay.disableOnInteraction
              ? s.autoplay.pause(t)
              : d());
        }),
        r('sliderFirstMove', () => {
          s.autoplay.running &&
            (s.params.autoplay.disableOnInteraction ? d() : c());
        }),
        r('touchEnd', () => {
          s.params.cssMode &&
            s.autoplay.paused &&
            !s.params.autoplay.disableOnInteraction &&
            l();
        }),
        r('destroy', () => {
          s.$el.off('mouseenter', m),
            s.$el.off('mouseleave', f),
            s.autoplay.running && d();
          a().removeEventListener('visibilitychange', u);
        }),
        Object.assign(s.autoplay, { pause: c, run: l, start: o, stop: d });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: 'swiper-slide-thumb-active',
          thumbsContainerClass: 'swiper-thumbs',
        },
      });
      let i = !1,
        r = !1;
      function n() {
        const e = t.thumbs.swiper;
        if (!e || e.destroyed) return;
        const s = e.clickedIndex,
          a = e.clickedSlide;
        if (a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
        if (null == s) return;
        let i;
        if (
          ((i = e.params.loop
            ? parseInt(d(e.clickedSlide).attr('data-swiper-slide-index'), 10)
            : s),
          t.params.loop)
        ) {
          let e = t.activeIndex;
          t.slides.eq(e).hasClass(t.params.slideDuplicateClass) &&
            (t.loopFix(),
            (t._clientLeft = t.$wrapperEl[0].clientLeft),
            (e = t.activeIndex));
          const s = t.slides
              .eq(e)
              .prevAll(`[data-swiper-slide-index="${i}"]`)
              .eq(0)
              .index(),
            a = t.slides
              .eq(e)
              .nextAll(`[data-swiper-slide-index="${i}"]`)
              .eq(0)
              .index();
          i = void 0 === s ? a : void 0 === a ? s : a - e < e - s ? a : s;
        }
        t.slideTo(i);
      }
      function l() {
        const { thumbs: e } = t.params;
        if (i) return !1;
        i = !0;
        const s = t.constructor;
        if (e.swiper instanceof s)
          (t.thumbs.swiper = e.swiper),
            Object.assign(t.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            Object.assign(t.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            });
        else if (m(e.swiper)) {
          const a = Object.assign({}, e.swiper);
          Object.assign(a, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
            (t.thumbs.swiper = new s(a)),
            (r = !0);
        }
        return (
          t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),
          t.thumbs.swiper.on('tap', n),
          !0
        );
      }
      function o(e) {
        const s = t.thumbs.swiper;
        if (!s || s.destroyed) return;
        const a =
            'auto' === s.params.slidesPerView
              ? s.slidesPerViewDynamic()
              : s.params.slidesPerView,
          i = t.params.thumbs.autoScrollOffset,
          r = i && !s.params.loop;
        if (t.realIndex !== s.realIndex || r) {
          let n,
            l,
            o = s.activeIndex;
          if (s.params.loop) {
            s.slides.eq(o).hasClass(s.params.slideDuplicateClass) &&
              (s.loopFix(),
              (s._clientLeft = s.$wrapperEl[0].clientLeft),
              (o = s.activeIndex));
            const e = s.slides
                .eq(o)
                .prevAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                .eq(0)
                .index(),
              a = s.slides
                .eq(o)
                .nextAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                .eq(0)
                .index();
            (n =
              void 0 === e
                ? a
                : void 0 === a
                  ? e
                  : a - o == o - e
                    ? s.params.slidesPerGroup > 1
                      ? a
                      : o
                    : a - o < o - e
                      ? a
                      : e),
              (l = t.activeIndex > t.previousIndex ? 'next' : 'prev');
          } else (n = t.realIndex), (l = n > t.previousIndex ? 'next' : 'prev');
          r && (n += 'next' === l ? i : -1 * i),
            s.visibleSlidesIndexes &&
              s.visibleSlidesIndexes.indexOf(n) < 0 &&
              (s.params.centeredSlides
                ? (n =
                    n > o
                      ? n - Math.floor(a / 2) + 1
                      : n + Math.floor(a / 2) - 1)
                : n > o && s.params.slidesPerGroup,
              s.slideTo(n, e ? 0 : void 0));
        }
        let n = 1;
        const l = t.params.thumbs.slideThumbActiveClass;
        if (
          (t.params.slidesPerView > 1 &&
            !t.params.centeredSlides &&
            (n = t.params.slidesPerView),
          t.params.thumbs.multipleActiveThumbs || (n = 1),
          (n = Math.floor(n)),
          s.slides.removeClass(l),
          s.params.loop || (s.params.virtual && s.params.virtual.enabled))
        )
          for (let e = 0; e < n; e += 1)
            s.$wrapperEl
              .children(`[data-swiper-slide-index="${t.realIndex + e}"]`)
              .addClass(l);
        else
          for (let e = 0; e < n; e += 1)
            s.slides.eq(t.realIndex + e).addClass(l);
      }
      (t.thumbs = { swiper: null }),
        a('beforeInit', () => {
          const { thumbs: e } = t.params;
          e && e.swiper && (l(), o(!0));
        }),
        a('slideChange update resize observerUpdate', () => {
          o();
        }),
        a('setTransition', (e, s) => {
          const a = t.thumbs.swiper;
          a && !a.destroyed && a.setTransition(s);
        }),
        a('beforeDestroy', () => {
          const e = t.thumbs.swiper;
          e && !e.destroyed && r && e.destroy();
        }),
        Object.assign(t.thumbs, { init: l, update: o });
    },
    function (e) {
      let { swiper: t, extendParams: s, emit: a, once: i } = e;
      s({
        freeMode: {
          enabled: !1,
          momentum: !0,
          momentumRatio: 1,
          momentumBounce: !0,
          momentumBounceRatio: 1,
          momentumVelocityRatio: 1,
          sticky: !1,
          minimumVelocity: 0.02,
        },
      }),
        Object.assign(t, {
          freeMode: {
            onTouchStart: function () {
              const e = t.getTranslate();
              t.setTranslate(e),
                t.setTransition(0),
                (t.touchEventsData.velocities.length = 0),
                t.freeMode.onTouchEnd({
                  currentPos: t.rtl ? t.translate : -t.translate,
                });
            },
            onTouchMove: function () {
              const { touchEventsData: e, touches: s } = t;
              0 === e.velocities.length &&
                e.velocities.push({
                  position: s[t.isHorizontal() ? 'startX' : 'startY'],
                  time: e.touchStartTime,
                }),
                e.velocities.push({
                  position: s[t.isHorizontal() ? 'currentX' : 'currentY'],
                  time: u(),
                });
            },
            onTouchEnd: function (e) {
              let { currentPos: s } = e;
              const {
                  params: r,
                  $wrapperEl: n,
                  rtlTranslate: l,
                  snapGrid: o,
                  touchEventsData: d,
                } = t,
                c = u() - d.touchStartTime;
              if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
              else if (s > -t.maxTranslate())
                t.slides.length < o.length
                  ? t.slideTo(o.length - 1)
                  : t.slideTo(t.slides.length - 1);
              else {
                if (r.freeMode.momentum) {
                  if (d.velocities.length > 1) {
                    const e = d.velocities.pop(),
                      s = d.velocities.pop(),
                      a = e.position - s.position,
                      i = e.time - s.time;
                    (t.velocity = a / i),
                      (t.velocity /= 2),
                      Math.abs(t.velocity) < r.freeMode.minimumVelocity &&
                        (t.velocity = 0),
                      (i > 150 || u() - e.time > 300) && (t.velocity = 0);
                  } else t.velocity = 0;
                  (t.velocity *= r.freeMode.momentumVelocityRatio),
                    (d.velocities.length = 0);
                  let e = 1e3 * r.freeMode.momentumRatio;
                  const s = t.velocity * e;
                  let c = t.translate + s;
                  l && (c = -c);
                  let p,
                    h = !1;
                  const m =
                    20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                  let f;
                  if (c < t.maxTranslate())
                    r.freeMode.momentumBounce
                      ? (c + t.maxTranslate() < -m &&
                          (c = t.maxTranslate() - m),
                        (p = t.maxTranslate()),
                        (h = !0),
                        (d.allowMomentumBounce = !0))
                      : (c = t.maxTranslate()),
                      r.loop && r.centeredSlides && (f = !0);
                  else if (c > t.minTranslate())
                    r.freeMode.momentumBounce
                      ? (c - t.minTranslate() > m && (c = t.minTranslate() + m),
                        (p = t.minTranslate()),
                        (h = !0),
                        (d.allowMomentumBounce = !0))
                      : (c = t.minTranslate()),
                      r.loop && r.centeredSlides && (f = !0);
                  else if (r.freeMode.sticky) {
                    let e;
                    for (let t = 0; t < o.length; t += 1)
                      if (o[t] > -c) {
                        e = t;
                        break;
                      }
                    (c =
                      Math.abs(o[e] - c) < Math.abs(o[e - 1] - c) ||
                      'next' === t.swipeDirection
                        ? o[e]
                        : o[e - 1]),
                      (c = -c);
                  }
                  if (
                    (f &&
                      i('transitionEnd', () => {
                        t.loopFix();
                      }),
                    0 !== t.velocity)
                  ) {
                    if (
                      ((e = l
                        ? Math.abs((-c - t.translate) / t.velocity)
                        : Math.abs((c - t.translate) / t.velocity)),
                      r.freeMode.sticky)
                    ) {
                      const s = Math.abs((l ? -c : c) - t.translate),
                        a = t.slidesSizesGrid[t.activeIndex];
                      e =
                        s < a
                          ? r.speed
                          : s < 2 * a
                            ? 1.5 * r.speed
                            : 2.5 * r.speed;
                    }
                  } else if (r.freeMode.sticky) return void t.slideToClosest();
                  r.freeMode.momentumBounce && h
                    ? (t.updateProgress(p),
                      t.setTransition(e),
                      t.setTranslate(c),
                      t.transitionStart(!0, t.swipeDirection),
                      (t.animating = !0),
                      n.transitionEnd(() => {
                        t &&
                          !t.destroyed &&
                          d.allowMomentumBounce &&
                          (a('momentumBounce'),
                          t.setTransition(r.speed),
                          setTimeout(() => {
                            t.setTranslate(p),
                              n.transitionEnd(() => {
                                t && !t.destroyed && t.transitionEnd();
                              });
                          }, 0));
                      }))
                    : t.velocity
                      ? (a('_freeModeNoMomentumRelease'),
                        t.updateProgress(c),
                        t.setTransition(e),
                        t.setTranslate(c),
                        t.transitionStart(!0, t.swipeDirection),
                        t.animating ||
                          ((t.animating = !0),
                          n.transitionEnd(() => {
                            t && !t.destroyed && t.transitionEnd();
                          })))
                      : t.updateProgress(c),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses();
                } else {
                  if (r.freeMode.sticky) return void t.slideToClosest();
                  r.freeMode && a('_freeModeNoMomentumRelease');
                }
                (!r.freeMode.momentum || c >= r.longSwipesMs) &&
                  (t.updateProgress(),
                  t.updateActiveIndex(),
                  t.updateSlidesClasses());
              }
            },
          },
        });
    },
    function (e) {
      let t,
        s,
        a,
        { swiper: i, extendParams: r } = e;
      r({ grid: { rows: 1, fill: 'column' } }),
        (i.grid = {
          initSlides: (e) => {
            const { slidesPerView: r } = i.params,
              { rows: n, fill: l } = i.params.grid;
            (s = t / n),
              (a = Math.floor(e / n)),
              (t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n),
              'auto' !== r && 'row' === l && (t = Math.max(t, r * n));
          },
          updateSlide: (e, r, n, l) => {
            const { slidesPerGroup: o, spaceBetween: d } = i.params,
              { rows: c, fill: p } = i.params.grid;
            let u, h, m;
            if ('row' === p && o > 1) {
              const s = Math.floor(e / (o * c)),
                a = e - c * o * s,
                i = 0 === s ? o : Math.min(Math.ceil((n - s * c * o) / c), o);
              (m = Math.floor(a / i)),
                (h = a - m * i + s * o),
                (u = h + (m * t) / c),
                r.css({ '-webkit-order': u, order: u });
            } else
              'column' === p
                ? ((h = Math.floor(e / c)),
                  (m = e - h * c),
                  (h > a || (h === a && m === c - 1)) &&
                    ((m += 1), m >= c && ((m = 0), (h += 1))))
                : ((m = Math.floor(e / s)), (h = e - m * s));
            r.css(l('margin-top'), 0 !== m ? d && `${d}px` : '');
          },
          updateWrapperSize: (e, s, a) => {
            const {
                spaceBetween: r,
                centeredSlides: n,
                roundLengths: l,
              } = i.params,
              { rows: o } = i.params.grid;
            if (
              ((i.virtualSize = (e + r) * t),
              (i.virtualSize = Math.ceil(i.virtualSize / o) - r),
              i.$wrapperEl.css({ [a('width')]: `${i.virtualSize + r}px` }),
              n)
            ) {
              s.splice(0, s.length);
              const e = [];
              for (let t = 0; t < s.length; t += 1) {
                let a = s[t];
                l && (a = Math.floor(a)),
                  s[t] < i.virtualSize + s[0] && e.push(a);
              }
              s.push(...e);
            }
          },
        });
    },
    function (e) {
      let { swiper: t } = e;
      Object.assign(t, {
        appendSlide: K.bind(t),
        prependSlide: Z.bind(t),
        addSlide: J.bind(t),
        removeSlide: Q.bind(t),
        removeAllSlides: ee.bind(t),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ fadeEffect: { crossFade: !1, transformEl: null } }),
        te({
          effect: 'fade',
          swiper: t,
          on: a,
          setTranslate: () => {
            const { slides: e } = t,
              s = t.params.fadeEffect;
            for (let a = 0; a < e.length; a += 1) {
              const e = t.slides.eq(a);
              let i = -e[0].swiperSlideOffset;
              t.params.virtualTranslate || (i -= t.translate);
              let r = 0;
              t.isHorizontal() || ((r = i), (i = 0));
              const n = t.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(e[0].progress), 0)
                : 1 + Math.min(Math.max(e[0].progress, -1), 0);
              se(s, e)
                .css({ opacity: n })
                .transform(`translate3d(${i}px, ${r}px, 0px)`);
            }
          },
          setTransition: (e) => {
            const { transformEl: s } = t.params.fadeEffect;
            (s ? t.slides.find(s) : t.slides).transition(e),
              ae({ swiper: t, duration: e, transformEl: s, allSlides: !0 });
          },
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
      });
      const i = (e, t, s) => {
        let a = s
            ? e.find('.swiper-slide-shadow-left')
            : e.find('.swiper-slide-shadow-top'),
          i = s
            ? e.find('.swiper-slide-shadow-right')
            : e.find('.swiper-slide-shadow-bottom');
        0 === a.length &&
          ((a = d(
            `<div class="swiper-slide-shadow-${s ? 'left' : 'top'}"></div>`
          )),
          e.append(a)),
          0 === i.length &&
            ((i = d(
              `<div class="swiper-slide-shadow-${s ? 'right' : 'bottom'}"></div>`
            )),
            e.append(i)),
          a.length && (a[0].style.opacity = Math.max(-t, 0)),
          i.length && (i[0].style.opacity = Math.max(t, 0));
      };
      te({
        effect: 'cube',
        swiper: t,
        on: a,
        setTranslate: () => {
          const {
              $el: e,
              $wrapperEl: s,
              slides: a,
              width: r,
              height: n,
              rtlTranslate: l,
              size: o,
              browser: c,
            } = t,
            p = t.params.cubeEffect,
            u = t.isHorizontal(),
            h = t.virtual && t.params.virtual.enabled;
          let m,
            f = 0;
          p.shadow &&
            (u
              ? ((m = s.find('.swiper-cube-shadow')),
                0 === m.length &&
                  ((m = d('<div class="swiper-cube-shadow"></div>')),
                  s.append(m)),
                m.css({ height: `${r}px` }))
              : ((m = e.find('.swiper-cube-shadow')),
                0 === m.length &&
                  ((m = d('<div class="swiper-cube-shadow"></div>')),
                  e.append(m))));
          for (let e = 0; e < a.length; e += 1) {
            const t = a.eq(e);
            let s = e;
            h && (s = parseInt(t.attr('data-swiper-slide-index'), 10));
            let r = 90 * s,
              n = Math.floor(r / 360);
            l && ((r = -r), (n = Math.floor(-r / 360)));
            const d = Math.max(Math.min(t[0].progress, 1), -1);
            let c = 0,
              m = 0,
              g = 0;
            s % 4 == 0
              ? ((c = 4 * -n * o), (g = 0))
              : (s - 1) % 4 == 0
                ? ((c = 0), (g = 4 * -n * o))
                : (s - 2) % 4 == 0
                  ? ((c = o + 4 * n * o), (g = o))
                  : (s - 3) % 4 == 0 && ((c = -o), (g = 3 * o + 4 * o * n)),
              l && (c = -c),
              u || ((m = c), (c = 0));
            const v = `rotateX(${u ? 0 : -r}deg) rotateY(${u ? r : 0}deg) translate3d(${c}px, ${m}px, ${g}px)`;
            d <= 1 &&
              d > -1 &&
              ((f = 90 * s + 90 * d), l && (f = 90 * -s - 90 * d)),
              t.transform(v),
              p.slideShadows && i(t, d, u);
          }
          if (
            (s.css({
              '-webkit-transform-origin': `50% 50% -${o / 2}px`,
              'transform-origin': `50% 50% -${o / 2}px`,
            }),
            p.shadow)
          )
            if (u)
              m.transform(
                `translate3d(0px, ${r / 2 + p.shadowOffset}px, ${-r / 2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`
              );
            else {
              const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                t =
                  1.5 -
                  (Math.sin((2 * e * Math.PI) / 360) / 2 +
                    Math.cos((2 * e * Math.PI) / 360) / 2),
                s = p.shadowScale,
                a = p.shadowScale / t,
                i = p.shadowOffset;
              m.transform(
                `scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${-n / 2 / a}px) rotateX(-90deg)`
              );
            }
          const g = c.isSafari || c.isWebView ? -o / 2 : 0;
          s.transform(
            `translate3d(0px,0,${g}px) rotateX(${t.isHorizontal() ? 0 : f}deg) rotateY(${t.isHorizontal() ? -f : 0}deg)`
          ),
            s[0].style.setProperty('--swiper-cube-translate-z', `${g}px`);
        },
        setTransition: (e) => {
          const { $el: s, slides: a } = t;
          a
            .transition(e)
            .find(
              '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
            )
            .transition(e),
            t.params.cubeEffect.shadow &&
              !t.isHorizontal() &&
              s.find('.swiper-cube-shadow').transition(e);
        },
        recreateShadows: () => {
          const e = t.isHorizontal();
          t.slides.each((t) => {
            const s = Math.max(Math.min(t.progress, 1), -1);
            i(d(t), s, e);
          });
        },
        getEffectParams: () => t.params.cubeEffect,
        perspective: () => !0,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: !1,
          virtualTranslate: !0,
        }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        flipEffect: { slideShadows: !0, limitRotation: !0, transformEl: null },
      });
      const i = (e, s, a) => {
        let i = t.isHorizontal()
            ? e.find('.swiper-slide-shadow-left')
            : e.find('.swiper-slide-shadow-top'),
          r = t.isHorizontal()
            ? e.find('.swiper-slide-shadow-right')
            : e.find('.swiper-slide-shadow-bottom');
        0 === i.length && (i = ie(a, e, t.isHorizontal() ? 'left' : 'top')),
          0 === r.length &&
            (r = ie(a, e, t.isHorizontal() ? 'right' : 'bottom')),
          i.length && (i[0].style.opacity = Math.max(-s, 0)),
          r.length && (r[0].style.opacity = Math.max(s, 0));
      };
      te({
        effect: 'flip',
        swiper: t,
        on: a,
        setTranslate: () => {
          const { slides: e, rtlTranslate: s } = t,
            a = t.params.flipEffect;
          for (let r = 0; r < e.length; r += 1) {
            const n = e.eq(r);
            let l = n[0].progress;
            t.params.flipEffect.limitRotation &&
              (l = Math.max(Math.min(n[0].progress, 1), -1));
            const o = n[0].swiperSlideOffset;
            let d = -180 * l,
              c = 0,
              p = t.params.cssMode ? -o - t.translate : -o,
              u = 0;
            t.isHorizontal()
              ? s && (d = -d)
              : ((u = p), (p = 0), (c = -d), (d = 0)),
              (n[0].style.zIndex = -Math.abs(Math.round(l)) + e.length),
              a.slideShadows && i(n, l, a);
            const h = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
            se(a, n).transform(h);
          }
        },
        setTransition: (e) => {
          const { transformEl: s } = t.params.flipEffect;
          (s ? t.slides.find(s) : t.slides)
            .transition(e)
            .find(
              '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
            )
            .transition(e),
            ae({ swiper: t, duration: e, transformEl: s });
        },
        recreateShadows: () => {
          const e = t.params.flipEffect;
          t.slides.each((s) => {
            const a = d(s);
            let r = a[0].progress;
            t.params.flipEffect.limitRotation &&
              (r = Math.max(Math.min(s.progress, 1), -1)),
              i(a, r, e);
          });
        },
        getEffectParams: () => t.params.flipEffect,
        perspective: () => !0,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: !0,
          transformEl: null,
        },
      }),
        te({
          effect: 'coverflow',
          swiper: t,
          on: a,
          setTranslate: () => {
            const { width: e, height: s, slides: a, slidesSizesGrid: i } = t,
              r = t.params.coverflowEffect,
              n = t.isHorizontal(),
              l = t.translate,
              o = n ? e / 2 - l : s / 2 - l,
              d = n ? r.rotate : -r.rotate,
              c = r.depth;
            for (let e = 0, t = a.length; e < t; e += 1) {
              const t = a.eq(e),
                s = i[e],
                l = (o - t[0].swiperSlideOffset - s / 2) / s,
                p =
                  'function' == typeof r.modifier
                    ? r.modifier(l)
                    : l * r.modifier;
              let u = n ? d * p : 0,
                h = n ? 0 : d * p,
                m = -c * Math.abs(p),
                f = r.stretch;
              'string' == typeof f &&
                -1 !== f.indexOf('%') &&
                (f = (parseFloat(r.stretch) / 100) * s);
              let g = n ? 0 : f * p,
                v = n ? f * p : 0,
                w = 1 - (1 - r.scale) * Math.abs(p);
              Math.abs(v) < 0.001 && (v = 0),
                Math.abs(g) < 0.001 && (g = 0),
                Math.abs(m) < 0.001 && (m = 0),
                Math.abs(u) < 0.001 && (u = 0),
                Math.abs(h) < 0.001 && (h = 0),
                Math.abs(w) < 0.001 && (w = 0);
              const b = `translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;
              if (
                (se(r, t).transform(b),
                (t[0].style.zIndex = 1 - Math.abs(Math.round(p))),
                r.slideShadows)
              ) {
                let e = n
                    ? t.find('.swiper-slide-shadow-left')
                    : t.find('.swiper-slide-shadow-top'),
                  s = n
                    ? t.find('.swiper-slide-shadow-right')
                    : t.find('.swiper-slide-shadow-bottom');
                0 === e.length && (e = ie(r, t, n ? 'left' : 'top')),
                  0 === s.length && (s = ie(r, t, n ? 'right' : 'bottom')),
                  e.length && (e[0].style.opacity = p > 0 ? p : 0),
                  s.length && (s[0].style.opacity = -p > 0 ? -p : 0);
              }
            }
          },
          setTransition: (e) => {
            const { transformEl: s } = t.params.coverflowEffect;
            (s ? t.slides.find(s) : t.slides)
              .transition(e)
              .find(
                '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
              )
              .transition(e);
          },
          perspective: () => !0,
          overwriteParams: () => ({ watchSlidesProgress: !0 }),
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        creativeEffect: {
          transformEl: null,
          limitProgress: 1,
          shadowPerProgress: !1,
          progressMultiplier: 1,
          perspective: !0,
          prev: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
          next: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
        },
      });
      const i = (e) => ('string' == typeof e ? e : `${e}px`);
      te({
        effect: 'creative',
        swiper: t,
        on: a,
        setTranslate: () => {
          const { slides: e, $wrapperEl: s, slidesSizesGrid: a } = t,
            r = t.params.creativeEffect,
            { progressMultiplier: n } = r,
            l = t.params.centeredSlides;
          if (l) {
            const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
            s.transform(`translateX(calc(50% - ${e}px))`);
          }
          for (let s = 0; s < e.length; s += 1) {
            const a = e.eq(s),
              o = a[0].progress,
              d = Math.min(
                Math.max(a[0].progress, -r.limitProgress),
                r.limitProgress
              );
            let c = d;
            l ||
              (c = Math.min(
                Math.max(a[0].originalProgress, -r.limitProgress),
                r.limitProgress
              ));
            const p = a[0].swiperSlideOffset,
              u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
              h = [0, 0, 0];
            let m = !1;
            t.isHorizontal() || ((u[1] = u[0]), (u[0] = 0));
            let f = {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              scale: 1,
              opacity: 1,
            };
            d < 0
              ? ((f = r.next), (m = !0))
              : d > 0 && ((f = r.prev), (m = !0)),
              u.forEach((e, t) => {
                u[t] =
                  `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d * n)}))`;
              }),
              h.forEach((e, t) => {
                h[t] = f.rotate[t] * Math.abs(d * n);
              }),
              (a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length);
            const g = u.join(', '),
              v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
              w =
                c < 0
                  ? `scale(${1 + (1 - f.scale) * c * n})`
                  : `scale(${1 - (1 - f.scale) * c * n})`,
              b =
                c < 0
                  ? 1 + (1 - f.opacity) * c * n
                  : 1 - (1 - f.opacity) * c * n,
              x = `translate3d(${g}) ${v} ${w}`;
            if ((m && f.shadow) || !m) {
              let e = a.children('.swiper-slide-shadow');
              if ((0 === e.length && f.shadow && (e = ie(r, a)), e.length)) {
                const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
              }
            }
            const y = se(r, a);
            y.transform(x).css({ opacity: b }),
              f.origin && y.css('transform-origin', f.origin);
          }
        },
        setTransition: (e) => {
          const { transformEl: s } = t.params.creativeEffect;
          (s ? t.slides.find(s) : t.slides)
            .transition(e)
            .find('.swiper-slide-shadow')
            .transition(e),
            ae({ swiper: t, duration: e, transformEl: s, allSlides: !0 });
        },
        perspective: () => t.params.creativeEffect.perspective,
        overwriteParams: () => ({
          watchSlidesProgress: !0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ cardsEffect: { slideShadows: !0, transformEl: null, rotate: !0 } }),
        te({
          effect: 'cards',
          swiper: t,
          on: a,
          setTranslate: () => {
            const { slides: e, activeIndex: s } = t,
              a = t.params.cardsEffect,
              { startTranslate: i, isTouched: r } = t.touchEventsData,
              n = t.translate;
            for (let l = 0; l < e.length; l += 1) {
              const o = e.eq(l),
                d = o[0].progress,
                c = Math.min(Math.max(d, -4), 4);
              let p = o[0].swiperSlideOffset;
              t.params.centeredSlides &&
                !t.params.cssMode &&
                t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),
                t.params.centeredSlides &&
                  t.params.cssMode &&
                  (p -= e[0].swiperSlideOffset);
              let u = t.params.cssMode ? -p - t.translate : -p,
                h = 0;
              const m = -100 * Math.abs(c);
              let f = 1,
                g = -2 * c,
                v = 8 - 0.75 * Math.abs(c);
              const w =
                  t.virtual && t.params.virtual.enabled
                    ? t.virtual.from + l
                    : l,
                b =
                  (w === s || w === s - 1) &&
                  c > 0 &&
                  c < 1 &&
                  (r || t.params.cssMode) &&
                  n < i,
                x =
                  (w === s || w === s + 1) &&
                  c < 0 &&
                  c > -1 &&
                  (r || t.params.cssMode) &&
                  n > i;
              if (b || x) {
                const e = (1 - Math.abs((Math.abs(c) - 0.5) / 0.5)) ** 0.5;
                (g += -28 * c * e),
                  (f += -0.5 * e),
                  (v += 96 * e),
                  (h = -25 * e * Math.abs(c) + '%');
              }
              if (
                ((u =
                  c < 0
                    ? `calc(${u}px + (${v * Math.abs(c)}%))`
                    : c > 0
                      ? `calc(${u}px + (-${v * Math.abs(c)}%))`
                      : `${u}px`),
                !t.isHorizontal())
              ) {
                const e = h;
                (h = u), (u = e);
              }
              const y = c < 0 ? '' + (1 + (1 - f) * c) : '' + (1 - (1 - f) * c),
                E = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${a.rotate ? g : 0}deg)\n        scale(${y})\n      `;
              if (a.slideShadows) {
                let e = o.find('.swiper-slide-shadow');
                0 === e.length && (e = ie(a, o)),
                  e.length &&
                    (e[0].style.opacity = Math.min(
                      Math.max((Math.abs(c) - 0.5) / 0.5, 0),
                      1
                    ));
              }
              o[0].style.zIndex = -Math.abs(Math.round(d)) + e.length;
              se(a, o).transform(E);
            }
          },
          setTransition: (e) => {
            const { transformEl: s } = t.params.cardsEffect;
            (s ? t.slides.find(s) : t.slides)
              .transition(e)
              .find('.swiper-slide-shadow')
              .transition(e),
              ae({ swiper: t, duration: e, transformEl: s });
          },
          perspective: () => !0,
          overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
    },
  ];
  return V.use(re), V;
});
/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports)
    : 'function' == typeof define && define.amd
      ? define(['exports'], e)
      : e(((t = t || self).window = t.window || {}));
})(this, function (e) {
  'use strict';
  function _inheritsLoose(t, e) {
    (t.prototype = Object.create(e.prototype)),
      ((t.prototype.constructor = t).__proto__ = e);
  }
  function _assertThisInitialized(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function r(t) {
    return 'string' == typeof t;
  }
  function s(t) {
    return 'function' == typeof t;
  }
  function t(t) {
    return 'number' == typeof t;
  }
  function u(t) {
    return void 0 === t;
  }
  function v(t) {
    return 'object' == typeof t;
  }
  function w(t) {
    return !1 !== t;
  }
  function x() {
    return 'undefined' != typeof window;
  }
  function y(t) {
    return s(t) || r(t);
  }
  function P(t) {
    return (i = yt(t, ot)) && Ee;
  }
  function Q(t, e) {
    return console.warn(
      'Invalid property',
      t,
      'set to',
      e,
      'Missing plugin? gsap.registerPlugin()'
    );
  }
  function R(t, e) {
    return !e && console.warn(t);
  }
  function S(t, e) {
    return (t && (ot[t] = e) && i && (i[t] = e)) || ot;
  }
  function T() {
    return 0;
  }
  function ea(t) {
    var e,
      r,
      i = t[0];
    if ((v(i) || s(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
      for (r = gt.length; r-- && !gt[r].targetTest(i); );
      e = gt[r];
    }
    for (r = t.length; r--; )
      (t[r] && (t[r]._gsap || (t[r]._gsap = new Vt(t[r], e)))) ||
        t.splice(r, 1);
    return t;
  }
  function fa(t) {
    return t._gsap || ea(Ot(t))[0]._gsap;
  }
  function ga(t, e, r) {
    return (r = t[e]) && s(r)
      ? t[e]()
      : (u(r) && t.getAttribute && t.getAttribute(e)) || r;
  }
  function ha(t, e) {
    return (t = t.split(',')).forEach(e) || t;
  }
  function ia(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  }
  function ja(t) {
    return Math.round(1e7 * t) / 1e7 || 0;
  }
  function ka(t, e) {
    var r = e.charAt(0),
      i = parseFloat(e.substr(2));
    return (
      (t = parseFloat(t)),
      '+' === r ? t + i : '-' === r ? t - i : '*' === r ? t * i : t / i
    );
  }
  function la(t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
    return i < r;
  }
  function ma() {
    var t,
      e,
      r = ct.length,
      i = ct.slice(0);
    for (dt = {}, t = ct.length = 0; t < r; t++)
      (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
  }
  function na(t, e, r, i) {
    ct.length && !L && ma(),
      t.render(e, r, i || (L && e < 0 && (t._initted || t._startAt))),
      ct.length && !L && ma();
  }
  function oa(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + '').match(at).length < 2
      ? e
      : r(t)
        ? t.trim()
        : t;
  }
  function pa(t) {
    return t;
  }
  function qa(t, e) {
    for (var r in e) r in t || (t[r] = e[r]);
    return t;
  }
  function ta(t, e) {
    for (var r in e)
      '__proto__' !== r &&
        'constructor' !== r &&
        'prototype' !== r &&
        (t[r] = v(e[r]) ? ta(t[r] || (t[r] = {}), e[r]) : e[r]);
    return t;
  }
  function ua(t, e) {
    var r,
      i = {};
    for (r in t) r in e || (i[r] = t[r]);
    return i;
  }
  function va(t) {
    var e = t.parent || I,
      r = t.keyframes
        ? (function _setKeyframeDefaults(i) {
            return function (t, e) {
              for (var r in e)
                r in t ||
                  ('duration' === r && i) ||
                  'ease' === r ||
                  (t[r] = e[r]);
            };
          })($(t.keyframes))
        : qa;
    if (w(t.inherit))
      for (; e; ) r(t, e.vars.defaults), (e = e.parent || e._dp);
    return t;
  }
  function xa(t, e, r, i, n) {
    void 0 === r && (r = '_first'), void 0 === i && (i = '_last');
    var a,
      s = t[i];
    if (n) for (a = e[n]; s && s[n] > a; ) s = s._prev;
    return (
      s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[r]), (t[r] = e)),
      e._next ? (e._next._prev = e) : (t[i] = e),
      (e._prev = s),
      (e.parent = e._dp = t),
      e
    );
  }
  function ya(t, e, r, i) {
    void 0 === r && (r = '_first'), void 0 === i && (i = '_last');
    var n = e._prev,
      a = e._next;
    n ? (n._next = a) : t[r] === e && (t[r] = a),
      a ? (a._prev = n) : t[i] === e && (t[i] = n),
      (e._next = e._prev = e.parent = null);
  }
  function za(t, e) {
    t.parent &&
      (!e || t.parent.autoRemoveChildren) &&
      t.parent.remove &&
      t.parent.remove(t),
      (t._act = 0);
  }
  function Aa(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
      for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
    return t;
  }
  function Ca(t, e, r, i) {
    return (
      t._startAt &&
      (L
        ? t._startAt.revert(ht)
        : (t.vars.immediateRender && !t.vars.autoRevert) ||
          t._startAt.render(e, !0, i))
    );
  }
  function Ea(t) {
    return t._repeat ? Tt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  }
  function Ga(t, e) {
    return (
      (t - e._start) * e._ts +
      (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    );
  }
  function Ha(t) {
    return (t._end = ja(
      t._start + (t._tDur / Math.abs(t._ts || t._rts || X) || 0)
    ));
  }
  function Ia(t, e) {
    var r = t._dp;
    return (
      r &&
        r.smoothChildTiming &&
        t._ts &&
        ((t._start = ja(
          r._time -
            (0 < t._ts
              ? e / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
        )),
        Ha(t),
        r._dirty || Aa(r, t)),
      t
    );
  }
  function Ja(t, e) {
    var r;
    if (
      ((e._time ||
        (!e._dur && e._initted) ||
        (e._start < t._time && (e._dur || !e.add))) &&
        ((r = Ga(t.rawTime(), e)),
        (!e._dur || kt(0, e.totalDuration(), r) - e._tTime > X) &&
          e.render(r, !0)),
      Aa(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (r = t; r._dp; )
          0 <= r.rawTime() && r.totalTime(r._tTime), (r = r._dp);
      t._zTime = -X;
    }
  }
  function Ka(e, r, i, n) {
    return (
      r.parent && za(r),
      (r._start = ja(
        (t(i) ? i : i || e !== I ? xt(e, i, r) : e._time) + r._delay
      )),
      (r._end = ja(
        r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)
      )),
      xa(e, r, '_first', '_last', e._sort ? '_start' : 0),
      bt(r) || (e._recent = r),
      n || Ja(e, r),
      e._ts < 0 && Ia(e, e._tTime),
      e
    );
  }
  function La(t, e) {
    return (
      (ot.ScrollTrigger || Q('scrollTrigger', e)) &&
      ot.ScrollTrigger.create(e, t)
    );
  }
  function Ma(t, e, r, i, n) {
    return (
      Gt(t, e, n),
      t._initted
        ? !r &&
          t._pt &&
          !L &&
          ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
          f !== Rt.frame
          ? (ct.push(t), (t._lazy = [n, i]), 1)
          : void 0
        : 1
    );
  }
  function Ra(t, e, r, i) {
    var n = t._repeat,
      a = ja(e) || 0,
      s = t._tTime / t._tDur;
    return (
      s && !i && (t._time *= a / t._dur),
      (t._dur = a),
      (t._tDur = n ? (n < 0 ? 1e10 : ja(a * (n + 1) + t._rDelay * n)) : a),
      0 < s && !i && Ia(t, (t._tTime = t._tDur * s)),
      t.parent && Ha(t),
      r || Aa(t.parent, t),
      t
    );
  }
  function Sa(t) {
    return t instanceof Xt ? Aa(t) : Ra(t, t._dur);
  }
  function Va(e, r, i) {
    var n,
      a,
      s = t(r[1]),
      o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
      u = r[o];
    if ((s && (u.duration = r[1]), (u.parent = i), e)) {
      for (n = u, a = i; a && !('immediateRender' in n); )
        (n = a.vars.defaults || {}), (a = w(a.vars.inherit) && a.parent);
      (u.immediateRender = w(n.immediateRender)),
        e < 2 ? (u.runBackwards = 1) : (u.startAt = r[o - 1]);
    }
    return new Zt(r[0], u, r[1 + o]);
  }
  function Wa(t, e) {
    return t || 0 === t ? e(t) : e;
  }
  function Ya(t, e) {
    return r(t) && (e = st.exec(t)) ? e[1] : '';
  }
  function _a(t, e) {
    return (
      t &&
      v(t) &&
      'length' in t &&
      ((!e && !t.length) || (t.length - 1 in t && v(t[0]))) &&
      !t.nodeType &&
      t !== h
    );
  }
  function cb(r) {
    return (
      (r = Ot(r)[0] || R('Invalid scope') || {}),
      function (t) {
        var e = r.current || r.nativeElement || r;
        return Ot(
          t,
          e.querySelectorAll
            ? e
            : e === r
              ? R('Invalid scope') || a.createElement('div')
              : r
        );
      }
    );
  }
  function db(t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  }
  function eb(t) {
    if (s(t)) return t;
    var p = v(t) ? t : { each: t },
      _ = jt(p.ease),
      m = p.from || 0,
      g = parseFloat(p.base) || 0,
      y = {},
      e = 0 < m && m < 1,
      T = isNaN(m) || e,
      b = p.axis,
      w = m,
      x = m;
    return (
      r(m)
        ? (w = x = { center: 0.5, edges: 0.5, end: 1 }[m] || 0)
        : !e && T && ((w = m[0]), (x = m[1])),
      function (t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          c = (r || p).length,
          d = y[c];
        if (!d) {
          if (!(f = 'auto' === p.grid ? 0 : (p.grid || [1, U])[1])) {
            for (
              h = -U;
              h < (h = r[f++].getBoundingClientRect().left) && f < c;

            );
            f--;
          }
          for (
            d = y[c] = [],
              i = T ? Math.min(f, c) * w - 0.5 : m % f,
              n = f === U ? 0 : T ? (c * x) / f - 0.5 : (m / f) | 0,
              l = U,
              u = h = 0;
            u < c;
            u++
          )
            (a = (u % f) - i),
              (s = n - ((u / f) | 0)),
              (d[u] = o = b ? Math.abs('y' === b ? s : a) : K(a * a + s * s)),
              h < o && (h = o),
              o < l && (l = o);
          'random' === m && db(d),
            (d.max = h - l),
            (d.min = l),
            (d.v = c =
              (parseFloat(p.amount) ||
                parseFloat(p.each) *
                  (c < f
                    ? c - 1
                    : b
                      ? 'y' === b
                        ? c / f
                        : f
                      : Math.max(f, c / f)) ||
                0) * ('edges' === m ? -1 : 1)),
            (d.b = c < 0 ? g - c : g),
            (d.u = Ya(p.amount || p.each) || 0),
            (_ = _ && c < 0 ? Yt(_) : _);
        }
        return (
          (c = (d[t] - d.min) / d.max || 0),
          ja(d.b + (_ ? _(c) : c) * d.v) + d.u
        );
      }
    );
  }
  function fb(i) {
    var n = Math.pow(10, ((i + '').split('.')[1] || '').length);
    return function (e) {
      var r = ja(Math.round(parseFloat(e) / i) * i * n);
      return (r - (r % 1)) / n + (t(e) ? 0 : Ya(e));
    };
  }
  function gb(h, e) {
    var l,
      f,
      r = $(h);
    return (
      !r &&
        v(h) &&
        ((l = r = h.radius || U),
        h.values
          ? ((h = Ot(h.values)), (f = !t(h[0])) && (l *= l))
          : (h = fb(h.increment))),
      Wa(
        e,
        r
          ? s(h)
            ? function (t) {
                return (f = h(t)), Math.abs(f - t) <= l ? f : t;
              }
            : function (e) {
                for (
                  var r,
                    i,
                    n = parseFloat(f ? e.x : e),
                    a = parseFloat(f ? e.y : 0),
                    s = U,
                    o = 0,
                    u = h.length;
                  u--;

                )
                  (r = f
                    ? (r = h[u].x - n) * r + (i = h[u].y - a) * i
                    : Math.abs(h[u] - n)) < s && ((s = r), (o = u));
                return (
                  (o = !l || s <= l ? h[o] : e),
                  f || o === e || t(e) ? o : o + Ya(e)
                );
              }
          : fb(h)
      )
    );
  }
  function hb(t, e, r, i) {
    return Wa($(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
      return $(t)
        ? t[~~(Math.random() * t.length)]
        : (r = r || 1e-5) &&
            (i = r < 1 ? Math.pow(10, (r + '').length - 2) : 1) &&
            Math.floor(
              Math.round((t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r) *
                r *
                i
            ) / i;
    });
  }
  function lb(e, r, t) {
    return Wa(t, function (t) {
      return e[~~r(t)];
    });
  }
  function ob(t) {
    for (var e, r, i, n, a = 0, s = ''; ~(e = t.indexOf('random(', a)); )
      (i = t.indexOf(')', e)),
        (n = '[' === t.charAt(e + 7)),
        (r = t.substr(e + 7, i - e - 7).match(n ? at : tt)),
        (s +=
          t.substr(a, e - a) + hb(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5)),
        (a = i + 1);
    return s + t.substr(a, t.length - a);
  }
  function rb(t, e, r) {
    var i,
      n,
      a,
      s = t.labels,
      o = U;
    for (i in s)
      (n = s[i] - e) < 0 == !!r &&
        n &&
        o > (n = Math.abs(n)) &&
        ((a = i), (o = n));
    return a;
  }
  function tb(t) {
    return (
      za(t),
      t.scrollTrigger && t.scrollTrigger.kill(!!L),
      t.progress() < 1 && At(t, 'onInterrupt'),
      t
    );
  }
  function wb(t) {
    if (x() && t) {
      var e = (t = (!t.name && t.default) || t).name,
        r = s(t),
        i =
          e && !r && t.init
            ? function () {
                this._props = [];
              }
            : t,
        n = {
          init: T,
          render: he,
          add: Qt,
          kill: ce,
          modifier: fe,
          rawVars: 0,
        },
        a = { targetTest: 0, get: 0, getSetter: ne, aliases: {}, register: 0 };
      if ((Ft(), t !== i)) {
        if (pt[e]) return;
        qa(i, qa(ua(t, n), a)),
          yt(i.prototype, yt(n, ua(t, a))),
          (pt[(i.prop = e)] = i),
          t.targetTest && (gt.push(i), (ft[e] = 1)),
          (e =
            ('css' === e ? 'CSS' : e.charAt(0).toUpperCase() + e.substr(1)) +
            'Plugin');
      }
      S(e, i), t.register && t.register(Ee, i, _e);
    } else t && Ct.push(t);
  }
  function zb(t, e, r) {
    return (
      ((6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1
        ? e + (r - e) * t * 6
        : t < 0.5
          ? r
          : 3 * t < 2
            ? e + (r - e) * (2 / 3 - t) * 6
            : e) *
        St +
        0.5) |
      0
    );
  }
  function Ab(e, r, i) {
    var n,
      a,
      s,
      o,
      u,
      h,
      l,
      f,
      c,
      d,
      p = e ? (t(e) ? [e >> 16, (e >> 8) & St, e & St] : 0) : Et.black;
    if (!p) {
      if ((',' === e.substr(-1) && (e = e.substr(0, e.length - 1)), Et[e]))
        p = Et[e];
      else if ('#' === e.charAt(0)) {
        if (
          (e.length < 6 &&
            (e =
              '#' +
              (n = e.charAt(1)) +
              n +
              (a = e.charAt(2)) +
              a +
              (s = e.charAt(3)) +
              s +
              (5 === e.length ? e.charAt(4) + e.charAt(4) : '')),
          9 === e.length)
        )
          return [
            (p = parseInt(e.substr(1, 6), 16)) >> 16,
            (p >> 8) & St,
            p & St,
            parseInt(e.substr(7), 16) / 255,
          ];
        p = [(e = parseInt(e.substr(1), 16)) >> 16, (e >> 8) & St, e & St];
      } else if ('hsl' === e.substr(0, 3))
        if (((p = d = e.match(tt)), r)) {
          if (~e.indexOf('='))
            return (p = e.match(et)), i && p.length < 4 && (p[3] = 1), p;
        } else
          (o = (+p[0] % 360) / 360),
            (u = p[1] / 100),
            (n =
              2 * (h = p[2] / 100) -
              (a = h <= 0.5 ? h * (u + 1) : h + u - h * u)),
            3 < p.length && (p[3] *= 1),
            (p[0] = zb(o + 1 / 3, n, a)),
            (p[1] = zb(o, n, a)),
            (p[2] = zb(o - 1 / 3, n, a));
      else p = e.match(tt) || Et.transparent;
      p = p.map(Number);
    }
    return (
      r &&
        !d &&
        ((n = p[0] / St),
        (a = p[1] / St),
        (s = p[2] / St),
        (h = ((l = Math.max(n, a, s)) + (f = Math.min(n, a, s))) / 2),
        l === f
          ? (o = u = 0)
          : ((c = l - f),
            (u = 0.5 < h ? c / (2 - l - f) : c / (l + f)),
            (o =
              l === n
                ? (a - s) / c + (a < s ? 6 : 0)
                : l === a
                  ? (s - n) / c + 2
                  : (n - a) / c + 4),
            (o *= 60)),
        (p[0] = ~~(o + 0.5)),
        (p[1] = ~~(100 * u + 0.5)),
        (p[2] = ~~(100 * h + 0.5))),
      i && p.length < 4 && (p[3] = 1),
      p
    );
  }
  function Bb(t) {
    var r = [],
      i = [],
      n = -1;
    return (
      t.split(Dt).forEach(function (t) {
        var e = t.match(rt) || [];
        r.push.apply(r, e), i.push((n += e.length + 1));
      }),
      (r.c = i),
      r
    );
  }
  function Cb(t, e, r) {
    var i,
      n,
      a,
      s,
      o = '',
      u = (t + o).match(Dt),
      h = e ? 'hsla(' : 'rgba(',
      l = 0;
    if (!u) return t;
    if (
      ((u = u.map(function (t) {
        return (
          (t = Ab(t, e, 1)) &&
          h +
            (e ? t[0] + ',' + t[1] + '%,' + t[2] + '%,' + t[3] : t.join(',')) +
            ')'
        );
      })),
      r && ((a = Bb(t)), (i = r.c).join(o) !== a.c.join(o)))
    )
      for (s = (n = t.replace(Dt, '1').split(rt)).length - 1; l < s; l++)
        o +=
          n[l] +
          (~i.indexOf(l)
            ? u.shift() || h + '0,0,0,0)'
            : (a.length ? a : u.length ? u : r).shift());
    if (!n) for (s = (n = t.split(Dt)).length - 1; l < s; l++) o += n[l] + u[l];
    return o + n[s];
  }
  function Fb(t) {
    var e,
      r = t.join(' ');
    if (((Dt.lastIndex = 0), Dt.test(r)))
      return (
        (e = zt.test(r)),
        (t[1] = Cb(t[1], e)),
        (t[0] = Cb(t[0], e, Bb(t[1]))),
        !0
      );
  }
  function Ob(t) {
    var e = (t + '').split('('),
      r = Bt[e[0]];
    return r && 1 < e.length && r.config
      ? r.config.apply(
          null,
          ~t.indexOf('{')
            ? [
                (function _parseObjectInString(t) {
                  for (
                    var e,
                      r,
                      i,
                      n = {},
                      a = t.substr(1, t.length - 3).split(':'),
                      s = a[0],
                      o = 1,
                      u = a.length;
                    o < u;
                    o++
                  )
                    (r = a[o]),
                      (e = o !== u - 1 ? r.lastIndexOf(',') : r.length),
                      (i = r.substr(0, e)),
                      (n[s] = isNaN(i) ? i.replace(It, '').trim() : +i),
                      (s = r.substr(e + 1).trim());
                  return n;
                })(e[1]),
              ]
            : (function _valueInParentheses(t) {
                var e = t.indexOf('(') + 1,
                  r = t.indexOf(')'),
                  i = t.indexOf('(', e);
                return t.substring(e, ~i && i < r ? t.indexOf(')', r + 1) : r);
              })(t)
                .split(',')
                .map(oa)
        )
      : Bt._CE && Lt.test(t)
        ? Bt._CE('', t)
        : r;
  }
  function Qb(t, e) {
    for (var r, i = t._first; i; )
      i instanceof Xt
        ? Qb(i, e)
        : !i.vars.yoyoEase ||
          (i._yoyo && i._repeat) ||
          i._yoyo === e ||
          (i.timeline
            ? Qb(i.timeline, e)
            : ((r = i._ease),
              (i._ease = i._yEase),
              (i._yEase = r),
              (i._yoyo = e))),
        (i = i._next);
  }
  function Sb(t, e, r, i) {
    void 0 === r &&
      (r = function easeOut(t) {
        return 1 - e(1 - t);
      }),
      void 0 === i &&
        (i = function easeInOut(t) {
          return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
        });
    var n,
      a = { easeIn: e, easeOut: r, easeInOut: i };
    return (
      ha(t, function (t) {
        for (var e in ((Bt[t] = ot[t] = a), (Bt[(n = t.toLowerCase())] = r), a))
          Bt[
            n + ('easeIn' === e ? '.in' : 'easeOut' === e ? '.out' : '.inOut')
          ] = Bt[t + '.' + e] = a[e];
      }),
      a
    );
  }
  function Tb(e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
    };
  }
  function Ub(r, t, e) {
    function Jm(t) {
      return 1 === t ? 1 : i * Math.pow(2, -10 * t) * H((t - a) * n) + 1;
    }
    var i = 1 <= t ? t : 1,
      n = (e || (r ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      a = (n / N) * (Math.asin(1 / i) || 0),
      s =
        'out' === r
          ? Jm
          : 'in' === r
            ? function (t) {
                return 1 - Jm(1 - t);
              }
            : Tb(Jm);
    return (
      (n = N / n),
      (s.config = function (t, e) {
        return Ub(r, t, e);
      }),
      s
    );
  }
  function Vb(e, r) {
    function Rm(t) {
      return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
    }
    void 0 === r && (r = 1.70158);
    var t =
      'out' === e
        ? Rm
        : 'in' === e
          ? function (t) {
              return 1 - Rm(1 - t);
            }
          : Tb(Rm);
    return (
      (t.config = function (t) {
        return Vb(e, t);
      }),
      t
    );
  }
  var B,
    L,
    l,
    I,
    h,
    n,
    a,
    i,
    o,
    f,
    c,
    d,
    p,
    _,
    m,
    g,
    b,
    k,
    M,
    O,
    A,
    C,
    E,
    D,
    z,
    F,
    Y,
    j,
    q = {
      autoSleep: 120,
      force3D: 'auto',
      nullTargetWarn: 1,
      units: { lineHeight: '' },
    },
    V = { duration: 0.5, overwrite: !1, delay: 0 },
    U = 1e8,
    X = 1 / U,
    N = 2 * Math.PI,
    W = N / 4,
    G = 0,
    K = Math.sqrt,
    J = Math.cos,
    H = Math.sin,
    Z =
      ('function' == typeof ArrayBuffer && ArrayBuffer.isView) ||
      function () {},
    $ = Array.isArray,
    tt = /(?:-?\.?\d|\.)+/gi,
    et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    nt = /[+-]=-?[.\d]+/,
    at = /[^,'"\[\]\s]+/gi,
    st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    ot = {},
    ut = { suppressEvents: !0, isStart: !0, kill: !1 },
    ht = { suppressEvents: !0, kill: !1 },
    lt = { suppressEvents: !0 },
    ft = {},
    ct = [],
    dt = {},
    pt = {},
    _t = {},
    mt = 30,
    gt = [],
    vt = '',
    yt = function _merge(t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    Tt = function _animationCycle(t, e) {
      var r = Math.floor((t /= e));
      return t && r === t ? r - 1 : r;
    },
    bt = function _isFromOrFromStart(t) {
      var e = t.data;
      return 'isFromStart' === e || 'isStart' === e;
    },
    wt = { _start: 0, endTime: T, totalDuration: T },
    xt = function _parsePosition(t, e, i) {
      var n,
        a,
        s,
        o = t.labels,
        u = t._recent || wt,
        h = t.duration() >= U ? u.endTime(!1) : t._dur;
      return r(e) && (isNaN(e) || e in o)
        ? ((a = e.charAt(0)),
          (s = '%' === e.substr(-1)),
          (n = e.indexOf('=')),
          '<' === a || '>' === a
            ? (0 <= n && (e = e.replace(/=/, '')),
              ('<' === a ? u._start : u.endTime(0 <= u._repeat)) +
                (parseFloat(e.substr(1)) || 0) *
                  (s ? (n < 0 ? u : i).totalDuration() / 100 : 1))
            : n < 0
              ? (e in o || (o[e] = h), o[e])
              : ((a = parseFloat(e.charAt(n - 1) + e.substr(n + 1))),
                s && i && (a = (a / 100) * ($(i) ? i[0] : i).totalDuration()),
                1 < n ? _parsePosition(t, e.substr(0, n - 1), i) + a : h + a))
        : null == e
          ? h
          : +e;
    },
    kt = function _clamp(t, e, r) {
      return r < t ? t : e < r ? e : r;
    },
    Mt = [].slice,
    Ot = function toArray(t, e, i) {
      return l && !e && l.selector
        ? l.selector(t)
        : !r(t) || i || (!n && Ft())
          ? $(t)
            ? (function _flatten(t, e, i) {
                return (
                  void 0 === i && (i = []),
                  t.forEach(function (t) {
                    return (r(t) && !e) || _a(t, 1)
                      ? i.push.apply(i, Ot(t))
                      : i.push(t);
                  }) || i
                );
              })(t, i)
            : _a(t)
              ? Mt.call(t, 0)
              : t
                ? [t]
                : []
          : Mt.call((e || a).querySelectorAll(t), 0);
    },
    Pt = function mapRange(e, t, r, i, n) {
      var a = t - e,
        s = i - r;
      return Wa(n, function (t) {
        return r + (((t - e) / a) * s || 0);
      });
    },
    At = function _callback(t, e, r) {
      var i,
        n,
        a,
        s = t.vars,
        o = s[e],
        u = l,
        h = t._ctx;
      if (o)
        return (
          (i = s[e + 'Params']),
          (n = s.callbackScope || t),
          r && ct.length && ma(),
          h && (l = h),
          (a = i ? o.apply(n, i) : o.call(n)),
          (l = u),
          a
        );
    },
    Ct = [],
    St = 255,
    Et = {
      aqua: [0, St, St],
      lime: [0, St, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, St],
      navy: [0, 0, 128],
      white: [St, St, St],
      olive: [128, 128, 0],
      yellow: [St, St, 0],
      orange: [St, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [St, 0, 0],
      pink: [St, 192, 203],
      cyan: [0, St, St],
      transparent: [St, St, St, 0],
    },
    Dt = (function () {
      var t,
        e =
          '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b';
      for (t in Et) e += '|' + t + '\\b';
      return new RegExp(e + ')', 'gi');
    })(),
    zt = /hsl[a]?\(/,
    Rt =
      ((M = Date.now),
      (O = 500),
      (A = 33),
      (C = M()),
      (E = C),
      (z = D = 1e3 / 240),
      (g = {
        time: 0,
        frame: 0,
        tick: function tick() {
          yl(!0);
        },
        deltaRatio: function deltaRatio(t) {
          return b / (1e3 / (t || 60));
        },
        wake: function wake() {
          o &&
            (!n &&
              x() &&
              ((h = n = window),
              (a = h.document || {}),
              (ot.gsap = Ee),
              (h.gsapVersions || (h.gsapVersions = [])).push(Ee.version),
              P(i || h.GreenSockGlobals || (!h.gsap && h) || {}),
              (m = h.requestAnimationFrame),
              Ct.forEach(wb)),
            p && g.sleep(),
            (_ =
              m ||
              function (t) {
                return setTimeout(t, (z - 1e3 * g.time + 1) | 0);
              }),
            (d = 1),
            yl(2));
        },
        sleep: function sleep() {
          (m ? h.cancelAnimationFrame : clearTimeout)(p), (d = 0), (_ = T);
        },
        lagSmoothing: function lagSmoothing(t, e) {
          (O = t || 1 / 0), (A = Math.min(e || 33, O));
        },
        fps: function fps(t) {
          (D = 1e3 / (t || 240)), (z = 1e3 * g.time + D);
        },
        add: function add(n, t, e) {
          var a = t
            ? function (t, e, r, i) {
                n(t, e, r, i), g.remove(a);
              }
            : n;
          return g.remove(n), F[e ? 'unshift' : 'push'](a), Ft(), a;
        },
        remove: function remove(t, e) {
          ~(e = F.indexOf(t)) && F.splice(e, 1) && e <= k && k--;
        },
        _listeners: (F = []),
      })),
    Ft = function _wake() {
      return !d && Rt.wake();
    },
    Bt = {},
    Lt = /^[\d.\-M][\d.\-,\s]/,
    It = /["']/g,
    Yt = function _invertEase(e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    jt = function _parseEase(t, e) {
      return (t && (s(t) ? t : Bt[t] || Ob(t))) || e;
    };
  function yl(t) {
    var e,
      r,
      i,
      n,
      a = M() - E,
      s = !0 === t;
    if (
      (O < a && (C += a - A),
      (0 < (e = (i = (E += a) - C) - z) || s) &&
        ((n = ++g.frame),
        (b = i - 1e3 * g.time),
        (g.time = i /= 1e3),
        (z += e + (D <= e ? 4 : D - e)),
        (r = 1)),
      s || (p = _(yl)),
      r)
    )
      for (k = 0; k < F.length; k++) F[k](i, b, n, t);
  }
  function gn(t) {
    return t < j
      ? Y * t * t
      : t < 0.7272727272727273
        ? Y * Math.pow(t - 1.5 / 2.75, 2) + 0.75
        : t < 0.9090909090909092
          ? Y * (t -= 2.25 / 2.75) * t + 0.9375
          : Y * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
  }
  ha('Linear,Quad,Cubic,Quart,Quint,Strong', function (t, e) {
    var r = e < 5 ? e + 1 : e;
    Sb(
      t + ',Power' + (r - 1),
      e
        ? function (t) {
            return Math.pow(t, r);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, r);
      },
      function (t) {
        return t < 0.5
          ? Math.pow(2 * t, r) / 2
          : 1 - Math.pow(2 * (1 - t), r) / 2;
      }
    );
  }),
    (Bt.Linear.easeNone = Bt.none = Bt.Linear.easeIn),
    Sb('Elastic', Ub('in'), Ub('out'), Ub()),
    (Y = 7.5625),
    (j = 1 / 2.75),
    Sb(
      'Bounce',
      function (t) {
        return 1 - gn(1 - t);
      },
      gn
    ),
    Sb('Expo', function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    Sb('Circ', function (t) {
      return -(K(1 - t * t) - 1);
    }),
    Sb('Sine', function (t) {
      return 1 === t ? 1 : 1 - J(t * W);
    }),
    Sb('Back', Vb('in'), Vb('out'), Vb()),
    (Bt.SteppedEase =
      Bt.steps =
      ot.SteppedEase =
        {
          config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
              i = t + (e ? 0 : 1),
              n = e ? 1 : 0;
            return function (t) {
              return (((i * kt(0, 0.99999999, t)) | 0) + n) * r;
            };
          },
        }),
    (V.ease = Bt['quad.out']),
    ha(
      'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
      function (t) {
        return (vt += t + ',' + t + 'Params,');
      }
    );
  var qt,
    Vt = function GSCache(t, e) {
      (this.id = G++),
        ((t._gsap = this).target = t),
        (this.harness = e),
        (this.get = e ? e.get : ga),
        (this.set = e ? e.getSetter : ne);
    },
    Ut =
      (((qt = Animation.prototype).delay = function delay(t) {
        return t || 0 === t
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + t - this._delay),
            (this._delay = t),
            this)
          : this._delay;
      }),
      (qt.duration = function duration(t) {
        return arguments.length
          ? this.totalDuration(
              0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t
            )
          : this.totalDuration() && this._dur;
      }),
      (qt.totalDuration = function totalDuration(t) {
        return arguments.length
          ? ((this._dirty = 0),
            Ra(
              this,
              this._repeat < 0
                ? t
                : (t - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (qt.totalTime = function totalTime(t, e) {
        if ((Ft(), !arguments.length)) return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
          for (Ia(this, t), !r._dp || r.parent || Ja(r, this); r && r.parent; )
            r.parent._time !==
              r._start +
                (0 <= r._ts
                  ? r._tTime / r._ts
                  : (r.totalDuration() - r._tTime) / -r._ts) &&
              r.totalTime(r._tTime, !0),
              (r = r.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((0 < this._ts && t < this._tDur) ||
              (this._ts < 0 && 0 < t) ||
              (!this._tDur && !t)) &&
            Ka(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== t ||
            (!this._dur && !e) ||
            (this._initted && Math.abs(this._zTime) === X) ||
            (!t && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = t), na(this, t, e)),
          this
        );
      }),
      (qt.time = function time(t, e) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), t + Ea(this)) %
                (this._dur + this._rDelay) || (t ? this._dur : 0),
              e
            )
          : this._time;
      }),
      (qt.totalProgress = function totalProgress(t, e) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * t, e)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.ratio;
      }),
      (qt.progress = function progress(t, e) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                Ea(this),
              e
            )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.ratio;
      }),
      (qt.iteration = function iteration(t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (t - 1) * r, e)
          : this._repeat
            ? Tt(this._tTime, r) + 1
            : 1;
      }),
      (qt.timeScale = function timeScale(t) {
        if (!arguments.length) return this._rts === -X ? 0 : this._rts;
        if (this._rts === t) return this;
        var e =
          this.parent && this._ts ? Ga(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +t || 0),
          (this._ts = this._ps || t === -X ? 0 : this._rts),
          this.totalTime(kt(-Math.abs(this._delay), this._tDur, e), !0),
          Ha(this),
          (function _recacheAncestors(t) {
            for (var e = t.parent; e && e.parent; )
              (e._dirty = 1), e.totalDuration(), (e = e.parent);
            return t;
          })(this)
        );
      }),
      (qt.paused = function paused(t) {
        return arguments.length
          ? (this._ps !== t &&
              ((this._ps = t)
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Ft(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    1 === this.progress() &&
                      Math.abs(this._zTime) !== X &&
                      (this._tTime -= X)
                  ))),
            this)
          : this._ps;
      }),
      (qt.startTime = function startTime(t) {
        if (arguments.length) {
          this._start = t;
          var e = this.parent || this._dp;
          return (
            !e || (!e._sort && this.parent) || Ka(e, this, t - this._delay),
            this
          );
        }
        return this._start;
      }),
      (qt.endTime = function endTime(t) {
        return (
          this._start +
          (w(t) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (qt.rawTime = function rawTime(t) {
        var e = this.parent || this._dp;
        return e
          ? t &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? Ga(e.rawTime(t), this)
              : this._tTime
          : this._tTime;
      }),
      (qt.revert = function revert(t) {
        void 0 === t && (t = lt);
        var e = L;
        return (
          (L = t),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(t),
            this.totalTime(-0.01, t.suppressEvents)),
          'nested' !== this.data && !1 !== t.kill && this.kill(),
          (L = e),
          this
        );
      }),
      (qt.globalTime = function globalTime(t) {
        for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
          (r = e._start + r / (e._ts || 1)), (e = e._dp);
        return !this.parent && this._sat
          ? this._sat.vars.immediateRender
            ? -1 / 0
            : this._sat.globalTime(t)
          : r;
      }),
      (qt.repeat = function repeat(t) {
        return arguments.length
          ? ((this._repeat = t === 1 / 0 ? -2 : t), Sa(this))
          : -2 === this._repeat
            ? 1 / 0
            : this._repeat;
      }),
      (qt.repeatDelay = function repeatDelay(t) {
        if (arguments.length) {
          var e = this._time;
          return (this._rDelay = t), Sa(this), e ? this.time(e) : this;
        }
        return this._rDelay;
      }),
      (qt.yoyo = function yoyo(t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (qt.seek = function seek(t, e) {
        return this.totalTime(xt(this, t), w(e));
      }),
      (qt.restart = function restart(t, e) {
        return this.play().totalTime(t ? -this._delay : 0, w(e));
      }),
      (qt.play = function play(t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
      }),
      (qt.reverse = function reverse(t, e) {
        return (
          null != t && this.seek(t || this.totalDuration(), e),
          this.reversed(!0).paused(!1)
        );
      }),
      (qt.pause = function pause(t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
      }),
      (qt.resume = function resume() {
        return this.paused(!1);
      }),
      (qt.reversed = function reversed(t) {
        return arguments.length
          ? (!!t !== this.reversed() &&
              this.timeScale(-this._rts || (t ? -X : 0)),
            this)
          : this._rts < 0;
      }),
      (qt.invalidate = function invalidate() {
        return (this._initted = this._act = 0), (this._zTime = -X), this;
      }),
      (qt.isActive = function isActive() {
        var t,
          e = this.parent || this._dp,
          r = this._start;
        return !(
          e &&
          !(
            this._ts &&
            this._initted &&
            e.isActive() &&
            (t = e.rawTime(!0)) >= r &&
            t < this.endTime(!0) - X
          )
        );
      }),
      (qt.eventCallback = function eventCallback(t, e, r) {
        var i = this.vars;
        return 1 < arguments.length
          ? (e
              ? ((i[t] = e),
                r && (i[t + 'Params'] = r),
                'onUpdate' === t && (this._onUpdate = e))
              : delete i[t],
            this)
          : i[t];
      }),
      (qt.then = function then(t) {
        var i = this;
        return new Promise(function (e) {
          function Bo() {
            var t = i.then;
            (i.then = null),
              s(r) && (r = r(i)) && (r.then || r === i) && (i.then = t),
              e(r),
              (i.then = t);
          }
          var r = s(t) ? t : pa;
          (i._initted && 1 === i.totalProgress() && 0 <= i._ts) ||
          (!i._tTime && i._ts < 0)
            ? Bo()
            : (i._prom = Bo);
        });
      }),
      (qt.kill = function kill() {
        tb(this);
      }),
      Animation);
  function Animation(t) {
    (this.vars = t),
      (this._delay = +t.delay || 0),
      (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
        ((this._rDelay = t.repeatDelay || 0),
        (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
      (this._ts = 1),
      Ra(this, +t.duration, 1, 1),
      (this.data = t.data),
      l && (this._ctx = l).data.push(this),
      d || Rt.wake();
  }
  qa(Ut.prototype, {
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
    _zTime: -X,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Xt = (function (i) {
    function Timeline(t, e) {
      var r;
      return (
        void 0 === t && (t = {}),
        ((r = i.call(this, t) || this).labels = {}),
        (r.smoothChildTiming = !!t.smoothChildTiming),
        (r.autoRemoveChildren = !!t.autoRemoveChildren),
        (r._sort = w(t.sortChildren)),
        I && Ka(t.parent || I, _assertThisInitialized(r), e),
        t.reversed && r.reverse(),
        t.paused && r.paused(!0),
        t.scrollTrigger && La(_assertThisInitialized(r), t.scrollTrigger),
        r
      );
    }
    _inheritsLoose(Timeline, i);
    var e = Timeline.prototype;
    return (
      (e.to = function to(t, e, r) {
        return Va(0, arguments, this), this;
      }),
      (e.from = function from(t, e, r) {
        return Va(1, arguments, this), this;
      }),
      (e.fromTo = function fromTo(t, e, r, i) {
        return Va(2, arguments, this), this;
      }),
      (e.set = function set(t, e, r) {
        return (
          (e.duration = 0),
          (e.parent = this),
          va(e).repeatDelay || (e.repeat = 0),
          (e.immediateRender = !!e.immediateRender),
          new Zt(t, e, xt(this, r), 1),
          this
        );
      }),
      (e.call = function call(t, e, r) {
        return Ka(this, Zt.delayedCall(0, t, e), r);
      }),
      (e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
        return (
          (r.duration = e),
          (r.stagger = r.stagger || i),
          (r.onComplete = a),
          (r.onCompleteParams = s),
          (r.parent = this),
          new Zt(t, r, xt(this, n)),
          this
        );
      }),
      (e.staggerFrom = function staggerFrom(t, e, r, i, n, a, s) {
        return (
          (r.runBackwards = 1),
          (va(r).immediateRender = w(r.immediateRender)),
          this.staggerTo(t, e, r, i, n, a, s)
        );
      }),
      (e.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, s, o) {
        return (
          (i.startAt = r),
          (va(i).immediateRender = w(i.immediateRender)),
          this.staggerTo(t, e, i, n, a, s, o)
        );
      }),
      (e.render = function render(t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          c,
          d,
          p,
          _ = this._time,
          m = this._dirty ? this.totalDuration() : this._tDur,
          g = this._dur,
          v = t <= 0 ? 0 : ja(t),
          y = this._zTime < 0 != t < 0 && (this._initted || !g);
        if (
          (this !== I && m < v && 0 <= t && (v = m),
          v !== this._tTime || r || y)
        ) {
          if (
            (_ !== this._time &&
              g &&
              ((v += this._time - _), (t += this._time - _)),
            (i = v),
            (f = this._start),
            (u = !(l = this._ts)),
            y && (g || (_ = this._zTime), (!t && e) || (this._zTime = t)),
            this._repeat)
          ) {
            if (
              ((d = this._yoyo),
              (o = g + this._rDelay),
              this._repeat < -1 && t < 0)
            )
              return this.totalTime(100 * o + t, e, r);
            if (
              ((i = ja(v % o)),
              v === m
                ? ((s = this._repeat), (i = g))
                : ((s = ~~(v / o)) && s === v / o && ((i = g), s--),
                  g < i && (i = g)),
              (c = Tt(this._tTime, o)),
              !_ &&
                this._tTime &&
                c !== s &&
                this._tTime - c * o - this._dur <= 0 &&
                (c = s),
              d && 1 & s && ((i = g - i), (p = 1)),
              s !== c && !this._lock)
            ) {
              var T = d && 1 & c,
                b = T === (d && 1 & s);
              if (
                (s < c && (T = !T),
                (_ = T ? 0 : v % g ? g : v),
                (this._lock = 1),
                (this.render(_ || (p ? 0 : ja(s * o)), e, !g)._lock = 0),
                (this._tTime = v),
                !e && this.parent && At(this, 'onRepeat'),
                this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1),
                (_ && _ !== this._time) ||
                  u != !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((g = this._dur),
                (m = this._tDur),
                b &&
                  ((this._lock = 2),
                  (_ = T ? g : -1e-4),
                  this.render(_, !0),
                  this.vars.repeatRefresh && !p && this.invalidate()),
                (this._lock = 0),
                !this._ts && !u)
              )
                return this;
              Qb(this, p);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              (h = (function _findNextPauseTween(t, e, r) {
                var i;
                if (e < r)
                  for (i = t._first; i && i._start <= r; ) {
                    if ('isPause' === i.data && i._start > e) return i;
                    i = i._next;
                  }
                else
                  for (i = t._last; i && i._start >= r; ) {
                    if ('isPause' === i.data && i._start < e) return i;
                    i = i._prev;
                  }
              })(this, ja(_), ja(i))) &&
              (v -= i - (i = h._start)),
            (this._tTime = v),
            (this._time = i),
            (this._act = !l),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = t),
              (_ = 0)),
            !_ && i && !e && !s && (At(this, 'onStart'), this._tTime !== v))
          )
            return this;
          if (_ <= i && 0 <= t)
            for (n = this._first; n; ) {
              if (
                ((a = n._next), (n._act || i >= n._start) && n._ts && h !== n)
              ) {
                if (n.parent !== this) return this.render(t, e, r);
                if (
                  (n.render(
                    0 < n._ts
                      ? (i - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (i - n._start) * n._ts,
                    e,
                    r
                  ),
                  i !== this._time || (!this._ts && !u))
                ) {
                  (h = 0), a && (v += this._zTime = -X);
                  break;
                }
              }
              n = a;
            }
          else {
            n = this._last;
            for (var w = t < 0 ? t : i; n; ) {
              if (
                ((a = n._prev), (n._act || w <= n._end) && n._ts && h !== n)
              ) {
                if (n.parent !== this) return this.render(t, e, r);
                if (
                  (n.render(
                    0 < n._ts
                      ? (w - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (w - n._start) * n._ts,
                    e,
                    r || (L && (n._initted || n._startAt))
                  ),
                  i !== this._time || (!this._ts && !u))
                ) {
                  (h = 0), a && (v += this._zTime = w ? -X : X);
                  break;
                }
              }
              n = a;
            }
          }
          if (
            h &&
            !e &&
            (this.pause(),
            (h.render(_ <= i ? 0 : -X)._zTime = _ <= i ? 1 : -1),
            this._ts)
          )
            return (this._start = f), Ha(this), this.render(t, e, r);
          this._onUpdate && !e && At(this, 'onUpdate', !0),
            ((v === m && this._tTime >= this.totalDuration()) || (!v && _)) &&
              ((f !== this._start && Math.abs(l) === Math.abs(this._ts)) ||
                this._lock ||
                ((!t && g) ||
                  !((v === m && 0 < this._ts) || (!v && this._ts < 0)) ||
                  za(this, 1),
                e ||
                  (t < 0 && !_) ||
                  (!v && !_ && m) ||
                  (At(
                    this,
                    v === m && 0 <= t ? 'onComplete' : 'onReverseComplete',
                    !0
                  ),
                  !this._prom ||
                    (v < m && 0 < this.timeScale()) ||
                    this._prom())));
        }
        return this;
      }),
      (e.add = function add(e, i) {
        var n = this;
        if ((t(i) || (i = xt(this, i, e)), !(e instanceof Ut))) {
          if ($(e))
            return (
              e.forEach(function (t) {
                return n.add(t, i);
              }),
              this
            );
          if (r(e)) return this.addLabel(e, i);
          if (!s(e)) return this;
          e = Zt.delayedCall(0, e);
        }
        return this !== e ? Ka(this, e, i) : this;
      }),
      (e.getChildren = function getChildren(t, e, r, i) {
        void 0 === t && (t = !0),
          void 0 === e && (e = !0),
          void 0 === r && (r = !0),
          void 0 === i && (i = -U);
        for (var n = [], a = this._first; a; )
          a._start >= i &&
            (a instanceof Zt
              ? e && n.push(a)
              : (r && n.push(a),
                t && n.push.apply(n, a.getChildren(!0, e, r)))),
            (a = a._next);
        return n;
      }),
      (e.getById = function getById(t) {
        for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
          if (e[r].vars.id === t) return e[r];
      }),
      (e.remove = function remove(t) {
        return r(t)
          ? this.removeLabel(t)
          : s(t)
            ? this.killTweensOf(t)
            : (ya(this, t),
              t === this._recent && (this._recent = this._last),
              Aa(this));
      }),
      (e.totalTime = function totalTime(t, e) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = ja(
                Rt.time -
                  (0 < this._ts
                    ? t / this._ts
                    : (this.totalDuration() - t) / -this._ts)
              )),
            i.prototype.totalTime.call(this, t, e),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (e.addLabel = function addLabel(t, e) {
        return (this.labels[t] = xt(this, e)), this;
      }),
      (e.removeLabel = function removeLabel(t) {
        return delete this.labels[t], this;
      }),
      (e.addPause = function addPause(t, e, r) {
        var i = Zt.delayedCall(0, e || T, r);
        return (
          (i.data = 'isPause'), (this._hasPause = 1), Ka(this, i, xt(this, t))
        );
      }),
      (e.removePause = function removePause(t) {
        var e = this._first;
        for (t = xt(this, t); e; )
          e._start === t && 'isPause' === e.data && za(e), (e = e._next);
      }),
      (e.killTweensOf = function killTweensOf(t, e, r) {
        for (var i = this.getTweensOf(t, r), n = i.length; n--; )
          Nt !== i[n] && i[n].kill(t, e);
        return this;
      }),
      (e.getTweensOf = function getTweensOf(e, r) {
        for (var i, n = [], a = Ot(e), s = this._first, o = t(r); s; )
          s instanceof Zt
            ? la(s._targets, a) &&
              (o
                ? (!Nt || (s._initted && s._ts)) &&
                  s.globalTime(0) <= r &&
                  s.globalTime(s.totalDuration()) > r
                : !r || s.isActive()) &&
              n.push(s)
            : (i = s.getTweensOf(a, r)).length && n.push.apply(n, i),
            (s = s._next);
        return n;
      }),
      (e.tweenTo = function tweenTo(t, e) {
        e = e || {};
        var r,
          i = this,
          n = xt(i, t),
          a = e.startAt,
          s = e.onStart,
          o = e.onStartParams,
          u = e.immediateRender,
          h = Zt.to(
            i,
            qa(
              {
                ease: e.ease || 'none',
                lazy: !1,
                immediateRender: !1,
                time: n,
                overwrite: 'auto',
                duration:
                  e.duration ||
                  Math.abs(
                    (n - (a && 'time' in a ? a.time : i._time)) / i.timeScale()
                  ) ||
                  X,
                onStart: function onStart() {
                  if ((i.pause(), !r)) {
                    var t =
                      e.duration ||
                      Math.abs(
                        (n - (a && 'time' in a ? a.time : i._time)) /
                          i.timeScale()
                      );
                    h._dur !== t && Ra(h, t, 0, 1).render(h._time, !0, !0),
                      (r = 1);
                  }
                  s && s.apply(h, o || []);
                },
              },
              e
            )
          );
        return u ? h.render(0) : h;
      }),
      (e.tweenFromTo = function tweenFromTo(t, e, r) {
        return this.tweenTo(e, qa({ startAt: { time: xt(this, t) } }, r));
      }),
      (e.recent = function recent() {
        return this._recent;
      }),
      (e.nextLabel = function nextLabel(t) {
        return void 0 === t && (t = this._time), rb(this, xt(this, t));
      }),
      (e.previousLabel = function previousLabel(t) {
        return void 0 === t && (t = this._time), rb(this, xt(this, t), 1);
      }),
      (e.currentLabel = function currentLabel(t) {
        return arguments.length
          ? this.seek(t, !0)
          : this.previousLabel(this._time + X);
      }),
      (e.shiftChildren = function shiftChildren(t, e, r) {
        void 0 === r && (r = 0);
        for (var i, n = this._first, a = this.labels; n; )
          n._start >= r && ((n._start += t), (n._end += t)), (n = n._next);
        if (e) for (i in a) a[i] >= r && (a[i] += t);
        return Aa(this);
      }),
      (e.invalidate = function invalidate(t) {
        var e = this._first;
        for (this._lock = 0; e; ) e.invalidate(t), (e = e._next);
        return i.prototype.invalidate.call(this, t);
      }),
      (e.clear = function clear(t) {
        void 0 === t && (t = !0);
        for (var e, r = this._first; r; )
          (e = r._next), this.remove(r), (r = e);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          t && (this.labels = {}),
          Aa(this)
        );
      }),
      (e.totalDuration = function totalDuration(t) {
        var e,
          r,
          i,
          n = 0,
          a = this,
          s = a._last,
          o = U;
        if (arguments.length)
          return a.timeScale(
            (a._repeat < 0 ? a.duration() : a.totalDuration()) /
              (a.reversed() ? -t : t)
          );
        if (a._dirty) {
          for (i = a.parent; s; )
            (e = s._prev),
              s._dirty && s.totalDuration(),
              o < (r = s._start) && a._sort && s._ts && !a._lock
                ? ((a._lock = 1), (Ka(a, s, r - s._delay, 1)._lock = 0))
                : (o = r),
              r < 0 &&
                s._ts &&
                ((n -= r),
                ((!i && !a._dp) || (i && i.smoothChildTiming)) &&
                  ((a._start += r / a._ts), (a._time -= r), (a._tTime -= r)),
                a.shiftChildren(-r, !1, -Infinity),
                (o = 0)),
              s._end > n && s._ts && (n = s._end),
              (s = e);
          Ra(a, a === I && a._time > n ? a._time : n, 1, 1), (a._dirty = 0);
        }
        return a._tDur;
      }),
      (Timeline.updateRoot = function updateRoot(t) {
        if ((I._ts && (na(I, Ga(t, I)), (f = Rt.frame)), Rt.frame >= mt)) {
          mt += q.autoSleep || 120;
          var e = I._first;
          if ((!e || !e._ts) && q.autoSleep && Rt._listeners.length < 2) {
            for (; e && !e._ts; ) e = e._next;
            e || Rt.sleep();
          }
        }
      }),
      Timeline
    );
  })(Ut);
  qa(Xt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  function ac(t, e, i, n, a, o) {
    var u, h, l, f;
    if (
      pt[t] &&
      !1 !==
        (u = new pt[t]()).init(
          a,
          u.rawVars
            ? e[t]
            : (function _processVars(t, e, i, n, a) {
                if (
                  (s(t) && (t = Kt(t, a, e, i, n)),
                  !v(t) || (t.style && t.nodeType) || $(t) || Z(t))
                )
                  return r(t) ? Kt(t, a, e, i, n) : t;
                var o,
                  u = {};
                for (o in t) u[o] = Kt(t[o], a, e, i, n);
                return u;
              })(e[t], n, a, o, i),
          i,
          n,
          o
        ) &&
      ((i._pt = h = new _e(i._pt, a, t, 0, 1, u.render, u, 0, u.priority)),
      i !== c)
    )
      for (l = i._ptLookup[i._targets.indexOf(a)], f = u._props.length; f--; )
        l[u._props[f]] = h;
    return u;
  }
  function gc(t, r, e, i) {
    var n,
      a,
      s = r.ease || i || 'power1.inOut';
    if ($(r))
      (a = e[t] || (e[t] = [])),
        r.forEach(function (t, e) {
          return a.push({ t: (e / (r.length - 1)) * 100, v: t, e: s });
        });
    else
      for (n in r)
        (a = e[n] || (e[n] = [])),
          'ease' === n || a.push({ t: parseFloat(t), v: r[n], e: s });
  }
  var Nt,
    Wt,
    Qt = function _addPropTween(t, e, i, n, a, o, u, h, l, f) {
      s(n) && (n = n(a || 0, t, o));
      var c,
        d = t[e],
        p =
          'get' !== i
            ? i
            : s(d)
              ? l
                ? t[
                    e.indexOf('set') || !s(t['get' + e.substr(3)])
                      ? e
                      : 'get' + e.substr(3)
                  ](l)
                : t[e]()
              : d,
        _ = s(d) ? (l ? re : te) : $t;
      if (
        (r(n) &&
          (~n.indexOf('random(') && (n = ob(n)),
          '=' === n.charAt(1) &&
            ((!(c = ka(p, n) + (Ya(p) || 0)) && 0 !== c) || (n = c))),
        !f || p !== n || Wt)
      )
        return isNaN(p * n) || '' === n
          ? (d || e in t || Q(e, n),
            function _addComplexStringPropTween(t, e, r, i, n, a, s) {
              var o,
                u,
                h,
                l,
                f,
                c,
                d,
                p,
                _ = new _e(this._pt, t, e, 0, 1, ue, null, n),
                m = 0,
                g = 0;
              for (
                _.b = r,
                  _.e = i,
                  r += '',
                  (d = ~(i += '').indexOf('random(')) && (i = ob(i)),
                  a && (a((p = [r, i]), t, e), (r = p[0]), (i = p[1])),
                  u = r.match(it) || [];
                (o = it.exec(i));

              )
                (l = o[0]),
                  (f = i.substring(m, o.index)),
                  h ? (h = (h + 1) % 5) : 'rgba(' === f.substr(-5) && (h = 1),
                  l !== u[g++] &&
                    ((c = parseFloat(u[g - 1]) || 0),
                    (_._pt = {
                      _next: _._pt,
                      p: f || 1 === g ? f : ',',
                      s: c,
                      c: '=' === l.charAt(1) ? ka(c, l) - c : parseFloat(l) - c,
                      m: h && h < 4 ? Math.round : 0,
                    }),
                    (m = it.lastIndex));
              return (
                (_.c = m < i.length ? i.substring(m, i.length) : ''),
                (_.fp = s),
                (nt.test(i) || d) && (_.e = 0),
                (this._pt = _)
              );
            }.call(this, t, e, p, n, _, h || q.stringFilter, l))
          : ((c = new _e(
              this._pt,
              t,
              e,
              +p || 0,
              n - (p || 0),
              'boolean' == typeof d ? se : ae,
              0,
              _
            )),
            l && (c.fp = l),
            u && c.modifier(u, this, t),
            (this._pt = c));
    },
    Gt = function _initTween(t, e, r) {
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        c,
        d,
        p,
        _,
        m = t.vars,
        g = m.ease,
        v = m.startAt,
        y = m.immediateRender,
        T = m.lazy,
        b = m.onUpdate,
        x = m.onUpdateParams,
        k = m.callbackScope,
        M = m.runBackwards,
        O = m.yoyoEase,
        P = m.keyframes,
        A = m.autoRevert,
        C = t._dur,
        S = t._startAt,
        E = t._targets,
        D = t.parent,
        z = D && 'nested' === D.data ? D.vars.targets : E,
        R = 'auto' === t._overwrite && !B,
        F = t.timeline;
      if (
        (!F || (P && g) || (g = 'none'),
        (t._ease = jt(g, V.ease)),
        (t._yEase = O ? Yt(jt(!0 === O ? g : O, V.ease)) : 0),
        O &&
          t._yoyo &&
          !t._repeat &&
          ((O = t._yEase), (t._yEase = t._ease), (t._ease = O)),
        (t._from = !F && !!m.runBackwards),
        !F || (P && !m.stagger))
      ) {
        if (
          ((p = (l = E[0] ? fa(E[0]).harness : 0) && m[l.prop]),
          (i = ua(m, ft)),
          S &&
            (S._zTime < 0 && S.progress(1),
            e < 0 && M && y && !A
              ? S.render(-1, !0)
              : S.revert(M && C ? ht : ut),
            (S._lazy = 0)),
          v)
        ) {
          if (
            (za(
              (t._startAt = Zt.set(
                E,
                qa(
                  {
                    data: 'isStart',
                    overwrite: !1,
                    parent: D,
                    immediateRender: !0,
                    lazy: !S && w(T),
                    startAt: null,
                    delay: 0,
                    onUpdate: b,
                    onUpdateParams: x,
                    callbackScope: k,
                    stagger: 0,
                  },
                  v
                )
              ))
            ),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            e < 0 && (L || (!y && !A)) && t._startAt.revert(ht),
            y && C && e <= 0 && r <= 0)
          )
            return void (e && (t._zTime = e));
        } else if (M && C && !S)
          if (
            (e && (y = !1),
            (a = qa(
              {
                overwrite: !1,
                data: 'isFromStart',
                lazy: y && !S && w(T),
                immediateRender: y,
                stagger: 0,
                parent: D,
              },
              i
            )),
            p && (a[l.prop] = p),
            za((t._startAt = Zt.set(E, a))),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            e < 0 && (L ? t._startAt.revert(ht) : t._startAt.render(-1, !0)),
            (t._zTime = e),
            y)
          ) {
            if (!e) return;
          } else _initTween(t._startAt, X, X);
        for (
          t._pt = t._ptCache = 0, T = (C && w(T)) || (T && !C), n = 0;
          n < E.length;
          n++
        ) {
          if (
            ((h = (o = E[n])._gsap || ea(E)[n]._gsap),
            (t._ptLookup[n] = c = {}),
            dt[h.id] && ct.length && ma(),
            (d = z === E ? n : z.indexOf(o)),
            l &&
              !1 !== (f = new l()).init(o, p || i, t, d, z) &&
              ((t._pt = s =
                new _e(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority)),
              f._props.forEach(function (t) {
                c[t] = s;
              }),
              f.priority && (u = 1)),
            !l || p)
          )
            for (a in i)
              pt[a] && (f = ac(a, i, t, d, o, z))
                ? f.priority && (u = 1)
                : (c[a] = s =
                    Qt.call(t, o, a, 'get', i[a], d, z, 0, m.stringFilter));
          t._op && t._op[n] && t.kill(o, t._op[n]),
            R &&
              t._pt &&
              ((Nt = t),
              I.killTweensOf(o, c, t.globalTime(e)),
              (_ = !t.parent),
              (Nt = 0)),
            t._pt && T && (dt[h.id] = 1);
        }
        u && pe(t), t._onInit && t._onInit(t);
      }
      (t._onUpdate = b),
        (t._initted = (!t._op || t._pt) && !_),
        P && e <= 0 && F.render(U, !0, !0);
    },
    Kt = function _parseFuncOrString(t, e, i, n, a) {
      return s(t)
        ? t.call(e, i, n, a)
        : r(t) && ~t.indexOf('random(')
          ? ob(t)
          : t;
    },
    Jt = vt + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
    Ht = {};
  ha(Jt + ',id,stagger,delay,duration,paused,scrollTrigger', function (t) {
    return (Ht[t] = 1);
  });
  var Zt = (function (z) {
    function Tween(e, r, i, n) {
      var a;
      'number' == typeof r && ((i.duration = r), (r = i), (i = null));
      var s,
        o,
        u,
        h,
        l,
        f,
        c,
        d,
        p = (a = z.call(this, n ? r : va(r)) || this).vars,
        _ = p.duration,
        m = p.delay,
        g = p.immediateRender,
        T = p.stagger,
        b = p.overwrite,
        x = p.keyframes,
        k = p.defaults,
        M = p.scrollTrigger,
        O = p.yoyoEase,
        P = r.parent || I,
        A = ($(e) || Z(e) ? t(e[0]) : 'length' in r) ? [e] : Ot(e);
      if (
        ((a._targets = A.length
          ? ea(A)
          : R(
              'GSAP target ' + e + ' not found. https://greensock.com',
              !q.nullTargetWarn
            ) || []),
        (a._ptLookup = []),
        (a._overwrite = b),
        x || T || y(_) || y(m))
      ) {
        if (
          ((r = a.vars),
          (s = a.timeline =
            new Xt({
              data: 'nested',
              defaults: k || {},
              targets: P && 'nested' === P.data ? P.vars.targets : A,
            })).kill(),
          (s.parent = s._dp = _assertThisInitialized(a)),
          (s._start = 0),
          T || y(_) || y(m))
        ) {
          if (((h = A.length), (c = T && eb(T)), v(T)))
            for (l in T) ~Jt.indexOf(l) && ((d = d || {})[l] = T[l]);
          for (o = 0; o < h; o++)
            ((u = ua(r, Ht)).stagger = 0),
              O && (u.yoyoEase = O),
              d && yt(u, d),
              (f = A[o]),
              (u.duration = +Kt(_, _assertThisInitialized(a), o, f, A)),
              (u.delay =
                (+Kt(m, _assertThisInitialized(a), o, f, A) || 0) - a._delay),
              !T &&
                1 === h &&
                u.delay &&
                ((a._delay = m = u.delay), (a._start += m), (u.delay = 0)),
              s.to(f, u, c ? c(o, f, A) : 0),
              (s._ease = Bt.none);
          s.duration() ? (_ = m = 0) : (a.timeline = 0);
        } else if (x) {
          va(qa(s.vars.defaults, { ease: 'none' })),
            (s._ease = jt(x.ease || r.ease || 'none'));
          var C,
            S,
            E,
            D = 0;
          if ($(x))
            x.forEach(function (t) {
              return s.to(A, t, '>');
            }),
              s.duration();
          else {
            for (l in ((u = {}), x))
              'ease' === l || 'easeEach' === l || gc(l, x[l], u, x.easeEach);
            for (l in u)
              for (
                C = u[l].sort(function (t, e) {
                  return t.t - e.t;
                }),
                  o = D = 0;
                o < C.length;
                o++
              )
                ((E = {
                  ease: (S = C[o]).e,
                  duration: ((S.t - (o ? C[o - 1].t : 0)) / 100) * _,
                })[l] = S.v),
                  s.to(A, E, D),
                  (D += E.duration);
            s.duration() < _ && s.to({}, { duration: _ - s.duration() });
          }
        }
        _ || a.duration((_ = s.duration()));
      } else a.timeline = 0;
      return (
        !0 !== b ||
          B ||
          ((Nt = _assertThisInitialized(a)), I.killTweensOf(A), (Nt = 0)),
        Ka(P, _assertThisInitialized(a), i),
        r.reversed && a.reverse(),
        r.paused && a.paused(!0),
        (g ||
          (!_ &&
            !x &&
            a._start === ja(P._time) &&
            w(g) &&
            (function _hasNoPausedAncestors(t) {
              return !t || (t._ts && _hasNoPausedAncestors(t.parent));
            })(_assertThisInitialized(a)) &&
            'nested' !== P.data)) &&
          ((a._tTime = -X), a.render(Math.max(0, -m) || 0)),
        M && La(_assertThisInitialized(a), M),
        a
      );
    }
    _inheritsLoose(Tween, z);
    var e = Tween.prototype;
    return (
      (e.render = function render(t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          c = this._time,
          d = this._tDur,
          p = this._dur,
          _ = t < 0,
          m = d - X < t && !_ ? d : t < X ? 0 : t;
        if (p) {
          if (
            m !== this._tTime ||
            !t ||
            r ||
            (!this._initted && this._tTime) ||
            (this._startAt && this._zTime < 0 != _)
          ) {
            if (((i = m), (l = this.timeline), this._repeat)) {
              if (((s = p + this._rDelay), this._repeat < -1 && _))
                return this.totalTime(100 * s + t, e, r);
              if (
                ((i = ja(m % s)),
                m === d
                  ? ((a = this._repeat), (i = p))
                  : ((a = ~~(m / s)) && a === m / s && ((i = p), a--),
                    p < i && (i = p)),
                (u = this._yoyo && 1 & a) && ((f = this._yEase), (i = p - i)),
                (o = Tt(this._tTime, s)),
                i === c && !r && this._initted)
              )
                return (this._tTime = m), this;
              a !== o &&
                (l && this._yEase && Qb(l, u),
                !this.vars.repeatRefresh ||
                  u ||
                  this._lock ||
                  ((this._lock = r = 1),
                  (this.render(ja(s * a), !0).invalidate()._lock = 0)));
            }
            if (!this._initted) {
              if (Ma(this, _ ? t : i, r, e, m)) return (this._tTime = 0), this;
              if (c !== this._time) return this;
              if (p !== this._dur) return this.render(t, e, r);
            }
            if (
              ((this._tTime = m),
              (this._time = i),
              !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
              (this.ratio = h = (f || this._ease)(i / p)),
              this._from && (this.ratio = h = 1 - h),
              i && !c && !e && !a && (At(this, 'onStart'), this._tTime !== m))
            )
              return this;
            for (n = this._pt; n; ) n.r(h, n.d), (n = n._next);
            (l &&
              l.render(
                t < 0 ? t : !i && u ? -X : l._dur * l._ease(i / this._dur),
                e,
                r
              )) ||
              (this._startAt && (this._zTime = t)),
              this._onUpdate &&
                !e &&
                (_ && Ca(this, t, 0, r), At(this, 'onUpdate')),
              this._repeat &&
                a !== o &&
                this.vars.onRepeat &&
                !e &&
                this.parent &&
                At(this, 'onRepeat'),
              (m !== this._tDur && m) ||
                this._tTime !== m ||
                (_ && !this._onUpdate && Ca(this, t, 0, !0),
                (!t && p) ||
                  !(
                    (m === this._tDur && 0 < this._ts) ||
                    (!m && this._ts < 0)
                  ) ||
                  za(this, 1),
                e ||
                  (_ && !c) ||
                  !(m || c || u) ||
                  (At(this, m === d ? 'onComplete' : 'onReverseComplete', !0),
                  !this._prom ||
                    (m < d && 0 < this.timeScale()) ||
                    this._prom()));
          }
        } else
          !(function _renderZeroDurationTween(t, e, r, i) {
            var n,
              a,
              s,
              o = t.ratio,
              u =
                e < 0 ||
                (!e &&
                  ((!t._start &&
                    (function _parentPlayheadIsBeforeStart(t) {
                      var e = t.parent;
                      return (
                        e &&
                        e._ts &&
                        e._initted &&
                        !e._lock &&
                        (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e))
                      );
                    })(t) &&
                    (t._initted || !bt(t))) ||
                    ((t._ts < 0 || t._dp._ts < 0) && !bt(t))))
                  ? 0
                  : 1,
              h = t._rDelay,
              l = 0;
            if (
              (h &&
                t._repeat &&
                ((l = kt(0, t._tDur, e)),
                (a = Tt(l, h)),
                t._yoyo && 1 & a && (u = 1 - u),
                a !== Tt(t._tTime, h) &&
                  ((o = 1 - u),
                  t.vars.repeatRefresh && t._initted && t.invalidate())),
              u !== o || L || i || t._zTime === X || (!e && t._zTime))
            ) {
              if (!t._initted && Ma(t, e, i, r, l)) return;
              for (
                s = t._zTime,
                  t._zTime = e || (r ? X : 0),
                  r = r || (e && !s),
                  t.ratio = u,
                  t._from && (u = 1 - u),
                  t._time = 0,
                  t._tTime = l,
                  n = t._pt;
                n;

              )
                n.r(u, n.d), (n = n._next);
              e < 0 && Ca(t, e, 0, !0),
                t._onUpdate && !r && At(t, 'onUpdate'),
                l && t._repeat && !r && t.parent && At(t, 'onRepeat'),
                (e >= t._tDur || e < 0) &&
                  t.ratio === u &&
                  (u && za(t, 1),
                  r ||
                    L ||
                    (At(t, u ? 'onComplete' : 'onReverseComplete', !0),
                    t._prom && t._prom()));
            } else t._zTime || (t._zTime = e);
          })(this, t, e, r);
        return this;
      }),
      (e.targets = function targets() {
        return this._targets;
      }),
      (e.invalidate = function invalidate(t) {
        return (
          (t && this.vars.runBackwards) || (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(t),
          z.prototype.invalidate.call(this, t)
        );
      }),
      (e.resetTo = function resetTo(t, e, r, i) {
        d || Rt.wake(), this._ts || this.play();
        var n,
          a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        return (
          this._initted || Gt(this, a),
          (n = this._ease(a / this._dur)),
          (function _updatePropTweens(t, e, r, i, n, a, s) {
            var o,
              u,
              h,
              l,
              f = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
            if (!f)
              for (
                f = t._ptCache[e] = [], h = t._ptLookup, l = t._targets.length;
                l--;

              ) {
                if ((o = h[l][e]) && o.d && o.d._pt)
                  for (o = o.d._pt; o && o.p !== e && o.fp !== e; ) o = o._next;
                if (!o)
                  return (Wt = 1), (t.vars[e] = '+=0'), Gt(t, s), (Wt = 0), 1;
                f.push(o);
              }
            for (l = f.length; l--; )
              ((o = (u = f[l])._pt || u).s =
                (!i && 0 !== i) || n ? o.s + (i || 0) + a * o.c : i),
                (o.c = r - o.s),
                u.e && (u.e = ia(r) + Ya(u.e)),
                u.b && (u.b = o.s + Ya(u.b));
          })(this, t, e, r, i, n, a)
            ? this.resetTo(t, e, r, i)
            : (Ia(this, 0),
              this.parent ||
                xa(
                  this._dp,
                  this,
                  '_first',
                  '_last',
                  this._dp._sort ? '_start' : 0
                ),
              this.render(0))
        );
      }),
      (e.kill = function kill(t, e) {
        if ((void 0 === e && (e = 'all'), !(t || (e && 'all' !== e))))
          return (this._lazy = this._pt = 0), this.parent ? tb(this) : this;
        if (this.timeline) {
          var i = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(t, e, Nt && !0 !== Nt.vars.overwrite)
              ._first || tb(this),
            this.parent &&
              i !== this.timeline.totalDuration() &&
              Ra(this, (this._dur * this.timeline._tDur) / i, 0, 1),
            this
          );
        }
        var n,
          a,
          s,
          o,
          u,
          h,
          l,
          f = this._targets,
          c = t ? Ot(t) : f,
          d = this._ptLookup,
          p = this._pt;
        if (
          (!e || 'all' === e) &&
          (function _arraysMatch(t, e) {
            for (
              var r = t.length, i = r === e.length;
              i && r-- && t[r] === e[r];

            );
            return r < 0;
          })(f, c)
        )
          return 'all' === e && (this._pt = 0), tb(this);
        for (
          n = this._op = this._op || [],
            'all' !== e &&
              (r(e) &&
                ((u = {}),
                ha(e, function (t) {
                  return (u[t] = 1);
                }),
                (e = u)),
              (e = (function _addAliasesToVars(t, e) {
                var r,
                  i,
                  n,
                  a,
                  s = t[0] ? fa(t[0]).harness : 0,
                  o = s && s.aliases;
                if (!o) return e;
                for (i in ((r = yt({}, e)), o))
                  if ((i in r))
                    for (n = (a = o[i].split(',')).length; n--; )
                      r[a[n]] = r[i];
                return r;
              })(f, e))),
            l = f.length;
          l--;

        )
          if (~c.indexOf(f[l]))
            for (u in ((a = d[l]),
            'all' === e
              ? ((n[l] = e), (o = a), (s = {}))
              : ((s = n[l] = n[l] || {}), (o = e)),
            o))
              (h = a && a[u]) &&
                (('kill' in h.d && !0 !== h.d.kill(u)) || ya(this, h, '_pt'),
                delete a[u]),
                'all' !== s && (s[u] = 1);
        return this._initted && !this._pt && p && tb(this), this;
      }),
      (Tween.to = function to(t, e, r) {
        return new Tween(t, e, r);
      }),
      (Tween.from = function from(t, e) {
        return Va(1, arguments);
      }),
      (Tween.delayedCall = function delayedCall(t, e, r, i) {
        return new Tween(e, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: t,
          onComplete: e,
          onReverseComplete: e,
          onCompleteParams: r,
          onReverseCompleteParams: r,
          callbackScope: i,
        });
      }),
      (Tween.fromTo = function fromTo(t, e, r) {
        return Va(2, arguments);
      }),
      (Tween.set = function set(t, e) {
        return (
          (e.duration = 0), e.repeatDelay || (e.repeat = 0), new Tween(t, e)
        );
      }),
      (Tween.killTweensOf = function killTweensOf(t, e, r) {
        return I.killTweensOf(t, e, r);
      }),
      Tween
    );
  })(Ut);
  qa(Zt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    ha('staggerTo,staggerFrom,staggerFromTo', function (r) {
      Zt[r] = function () {
        var t = new Xt(),
          e = Mt.call(arguments, 0);
        return e.splice('staggerFromTo' === r ? 5 : 4, 0, 0), t[r].apply(t, e);
      };
    });
  function oc(t, e, r) {
    return t.setAttribute(e, r);
  }
  function wc(t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
  }
  var $t = function _setterPlain(t, e, r) {
      return (t[e] = r);
    },
    te = function _setterFunc(t, e, r) {
      return t[e](r);
    },
    re = function _setterFuncWithParam(t, e, r, i) {
      return t[e](i.fp, r);
    },
    ne = function _getSetter(t, e) {
      return s(t[e]) ? te : u(t[e]) && t.setAttribute ? oc : $t;
    },
    ae = function _renderPlain(t, e) {
      return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
    },
    se = function _renderBoolean(t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    ue = function _renderComplexString(t, e) {
      var r = e._pt,
        i = '';
      if (!t && e.b) i = e.b;
      else if (1 === t && e.e) i = e.e;
      else {
        for (; r; )
          (i =
            r.p +
            (r.m
              ? r.m(r.s + r.c * t)
              : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
            i),
            (r = r._next);
        i += e.c;
      }
      e.set(e.t, e.p, i, e);
    },
    he = function _renderPropTweens(t, e) {
      for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
    },
    fe = function _addPluginModifier(t, e, r, i) {
      for (var n, a = this._pt; a; )
        (n = a._next), a.p === i && a.modifier(t, e, r), (a = n);
    },
    ce = function _killPropTweensOf(t) {
      for (var e, r, i = this._pt; i; )
        (r = i._next),
          (i.p === t && !i.op) || i.op === t
            ? ya(this, i, '_pt')
            : i.dep || (e = 1),
          (i = r);
      return !e;
    },
    pe = function _sortPropTweensByPriority(t) {
      for (var e, r, i, n, a = t._pt; a; ) {
        for (e = a._next, r = i; r && r.pr > a.pr; ) r = r._next;
        (a._prev = r ? r._prev : n) ? (a._prev._next = a) : (i = a),
          (a._next = r) ? (r._prev = a) : (n = a),
          (a = e);
      }
      t._pt = i;
    },
    _e =
      ((PropTween.prototype.modifier = function modifier(t, e, r) {
        (this.mSet = this.mSet || this.set),
          (this.set = wc),
          (this.m = t),
          (this.mt = r),
          (this.tween = e);
      }),
      PropTween);
  function PropTween(t, e, r, i, n, a, s, o, u) {
    (this.t = e),
      (this.s = i),
      (this.c = n),
      (this.p = r),
      (this.r = a || ae),
      (this.d = s || this),
      (this.set = o || $t),
      (this.pr = u || 0),
      (this._next = t) && (t._prev = this);
  }
  ha(
    vt +
      'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
    function (t) {
      return (ft[t] = 1);
    }
  ),
    (ot.TweenMax = ot.TweenLite = Zt),
    (ot.TimelineLite = ot.TimelineMax = Xt),
    (I = new Xt({
      sortChildren: !1,
      defaults: V,
      autoRemoveChildren: !0,
      id: 'root',
      smoothChildTiming: !0,
    })),
    (q.stringFilter = Fb);
  function Ec(t) {
    return (ye[t] || Te).map(function (t) {
      return t();
    });
  }
  function Fc() {
    var t = Date.now(),
      o = [];
    2 < t - Me &&
      (Ec('matchMediaInit'),
      ge.forEach(function (t) {
        var e,
          r,
          i,
          n,
          a = t.queries,
          s = t.conditions;
        for (r in a)
          (e = h.matchMedia(a[r]).matches) && (i = 1),
            e !== s[r] && ((s[r] = e), (n = 1));
        n && (t.revert(), i && o.push(t));
      }),
      Ec('matchMediaRevert'),
      o.forEach(function (t) {
        return t.onMatch(t);
      }),
      (Me = t),
      Ec('matchMedia'));
  }
  var me,
    ge = [],
    ye = {},
    Te = [],
    Me = 0,
    Oe = 0,
    Pe =
      (((me = Context.prototype).add = function add(t, i, n) {
        function Ew() {
          var t,
            e = l,
            r = a.selector;
          return (
            e && e !== a && e.data.push(a),
            n && (a.selector = cb(n)),
            (l = a),
            (t = i.apply(a, arguments)),
            s(t) && a._r.push(t),
            (l = e),
            (a.selector = r),
            (a.isReverted = !1),
            t
          );
        }
        s(t) && ((n = i), (i = t), (t = s));
        var a = this;
        return (a.last = Ew), t === s ? Ew(a) : t ? (a[t] = Ew) : Ew;
      }),
      (me.ignore = function ignore(t) {
        var e = l;
        (l = null), t(this), (l = e);
      }),
      (me.getTweens = function getTweens() {
        var e = [];
        return (
          this.data.forEach(function (t) {
            return t instanceof Context
              ? e.push.apply(e, t.getTweens())
              : t instanceof Zt &&
                  !(t.parent && 'nested' === t.parent.data) &&
                  e.push(t);
          }),
          e
        );
      }),
      (me.clear = function clear() {
        this._r.length = this.data.length = 0;
      }),
      (me.kill = function kill(e, t) {
        var r = this;
        if (e) {
          var i = this.getTweens();
          this.data.forEach(function (t) {
            'isFlip' === t.data &&
              (t.revert(),
              t.getChildren(!0, !0, !1).forEach(function (t) {
                return i.splice(i.indexOf(t), 1);
              }));
          }),
            i
              .map(function (t) {
                return { g: t.globalTime(0), t: t };
              })
              .sort(function (t, e) {
                return e.g - t.g || -1 / 0;
              })
              .forEach(function (t) {
                return t.t.revert(e);
              }),
            this.data.forEach(function (t) {
              return !(t instanceof Zt) && t.revert && t.revert(e);
            }),
            this._r.forEach(function (t) {
              return t(e, r);
            }),
            (this.isReverted = !0);
        } else
          this.data.forEach(function (t) {
            return t.kill && t.kill();
          });
        if ((this.clear(), t))
          for (var n = ge.length; n--; )
            ge[n].id === this.id && ge.splice(n, 1);
      }),
      (me.revert = function revert(t) {
        this.kill(t || {});
      }),
      Context);
  function Context(t, e) {
    (this.selector = e && cb(e)),
      (this.data = []),
      (this._r = []),
      (this.isReverted = !1),
      (this.id = Oe++),
      t && this.add(t);
  }
  var Ae,
    Ce =
      (((Ae = MatchMedia.prototype).add = function add(t, e, r) {
        v(t) || (t = { matches: t });
        var i,
          n,
          a,
          s = new Pe(0, r || this.scope),
          o = (s.conditions = {});
        for (n in (l && !s.selector && (s.selector = l.selector),
        this.contexts.push(s),
        (e = s.add('onMatch', e)),
        (s.queries = t)))
          'all' === n
            ? (a = 1)
            : (i = h.matchMedia(t[n])) &&
              (ge.indexOf(s) < 0 && ge.push(s),
              (o[n] = i.matches) && (a = 1),
              i.addListener
                ? i.addListener(Fc)
                : i.addEventListener('change', Fc));
        return a && e(s), this;
      }),
      (Ae.revert = function revert(t) {
        this.kill(t || {});
      }),
      (Ae.kill = function kill(e) {
        this.contexts.forEach(function (t) {
          return t.kill(e, !0);
        });
      }),
      MatchMedia);
  function MatchMedia(t) {
    (this.contexts = []), (this.scope = t);
  }
  var Se = {
    registerPlugin: function registerPlugin() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
      e.forEach(function (t) {
        return wb(t);
      });
    },
    timeline: function timeline(t) {
      return new Xt(t);
    },
    getTweensOf: function getTweensOf(t, e) {
      return I.getTweensOf(t, e);
    },
    getProperty: function getProperty(i, t, e, n) {
      r(i) && (i = Ot(i)[0]);
      var a = fa(i || {}).get,
        s = e ? pa : oa;
      return (
        'native' === e && (e = ''),
        i
          ? t
            ? s(((pt[t] && pt[t].get) || a)(i, t, e, n))
            : function (t, e, r) {
                return s(((pt[t] && pt[t].get) || a)(i, t, e, r));
              }
          : i
      );
    },
    quickSetter: function quickSetter(r, e, i) {
      if (1 < (r = Ot(r)).length) {
        var n = r.map(function (t) {
            return Ee.quickSetter(t, e, i);
          }),
          a = n.length;
        return function (t) {
          for (var e = a; e--; ) n[e](t);
        };
      }
      r = r[0] || {};
      var s = pt[e],
        o = fa(r),
        u = (o.harness && (o.harness.aliases || {})[e]) || e,
        h = s
          ? function (t) {
              var e = new s();
              (c._pt = 0),
                e.init(r, i ? t + i : t, c, 0, [r]),
                e.render(1, e),
                c._pt && he(1, c);
            }
          : o.set(r, u);
      return s
        ? h
        : function (t) {
            return h(r, u, i ? t + i : t, o, 1);
          };
    },
    quickTo: function quickTo(t, i, e) {
      function Wx(t, e, r) {
        return n.resetTo(i, t, e, r);
      }
      var r,
        n = Ee.to(
          t,
          yt((((r = {})[i] = '+=0.1'), (r.paused = !0), r), e || {})
        );
      return (Wx.tween = n), Wx;
    },
    isTweening: function isTweening(t) {
      return 0 < I.getTweensOf(t, !0).length;
    },
    defaults: function defaults(t) {
      return t && t.ease && (t.ease = jt(t.ease, V.ease)), ta(V, t || {});
    },
    config: function config(t) {
      return ta(q, t || {});
    },
    registerEffect: function registerEffect(t) {
      var i = t.name,
        n = t.effect,
        e = t.plugins,
        a = t.defaults,
        r = t.extendTimeline;
      (e || '').split(',').forEach(function (t) {
        return (
          t && !pt[t] && !ot[t] && R(i + ' effect requires ' + t + ' plugin.')
        );
      }),
        (_t[i] = function (t, e, r) {
          return n(Ot(t), qa(e || {}, a), r);
        }),
        r &&
          (Xt.prototype[i] = function (t, e, r) {
            return this.add(_t[i](t, v(e) ? e : (r = e) && {}, this), r);
          });
    },
    registerEase: function registerEase(t, e) {
      Bt[t] = jt(e);
    },
    parseEase: function parseEase(t, e) {
      return arguments.length ? jt(t, e) : Bt;
    },
    getById: function getById(t) {
      return I.getById(t);
    },
    exportRoot: function exportRoot(t, e) {
      void 0 === t && (t = {});
      var r,
        i,
        n = new Xt(t);
      for (
        n.smoothChildTiming = w(t.smoothChildTiming),
          I.remove(n),
          n._dp = 0,
          n._time = n._tTime = I._time,
          r = I._first;
        r;

      )
        (i = r._next),
          (!e &&
            !r._dur &&
            r instanceof Zt &&
            r.vars.onComplete === r._targets[0]) ||
            Ka(n, r, r._start - r._delay),
          (r = i);
      return Ka(I, n, 0), n;
    },
    context: function context(t, e) {
      return t ? new Pe(t, e) : l;
    },
    matchMedia: function matchMedia(t) {
      return new Ce(t);
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return (
        ge.forEach(function (t) {
          var e,
            r,
            i = t.conditions;
          for (r in i) i[r] && ((i[r] = !1), (e = 1));
          e && t.revert();
        }) || Fc()
      );
    },
    addEventListener: function addEventListener(t, e) {
      var r = ye[t] || (ye[t] = []);
      ~r.indexOf(e) || r.push(e);
    },
    removeEventListener: function removeEventListener(t, e) {
      var r = ye[t],
        i = r && r.indexOf(e);
      0 <= i && r.splice(i, 1);
    },
    utils: {
      wrap: function wrap(e, t, r) {
        var i = t - e;
        return $(e)
          ? lb(e, wrap(0, e.length), t)
          : Wa(r, function (t) {
              return ((i + ((t - e) % i)) % i) + e;
            });
      },
      wrapYoyo: function wrapYoyo(e, t, r) {
        var i = t - e,
          n = 2 * i;
        return $(e)
          ? lb(e, wrapYoyo(0, e.length - 1), t)
          : Wa(r, function (t) {
              return e + (i < (t = (n + ((t - e) % n)) % n || 0) ? n - t : t);
            });
      },
      distribute: eb,
      random: hb,
      snap: gb,
      normalize: function normalize(t, e, r) {
        return Pt(t, e, 0, 1, r);
      },
      getUnit: Ya,
      clamp: function clamp(e, r, t) {
        return Wa(t, function (t) {
          return kt(e, r, t);
        });
      },
      splitColor: Ab,
      toArray: Ot,
      selector: cb,
      mapRange: Pt,
      pipe: function pipe() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function unitize(e, r) {
        return function (t) {
          return e(parseFloat(t)) + (r || Ya(t));
        };
      },
      interpolate: function interpolate(e, i, t, n) {
        var a = isNaN(e + i)
          ? 0
          : function (t) {
              return (1 - t) * e + t * i;
            };
        if (!a) {
          var s,
            o,
            u,
            h,
            l,
            f = r(e),
            c = {};
          if ((!0 === t && (n = 1) && (t = null), f))
            (e = { p: e }), (i = { p: i });
          else if ($(e) && !$(i)) {
            for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++)
              u.push(interpolate(e[o - 1], e[o]));
            h--,
              (a = function func(t) {
                t *= h;
                var e = Math.min(l, ~~t);
                return u[e](t - e);
              }),
              (t = i);
          } else n || (e = yt($(e) ? [] : {}, e));
          if (!u) {
            for (s in i) Qt.call(c, e, s, 'get', i[s]);
            a = function func(t) {
              return he(t, c) || (f ? e.p : e);
            };
          }
        }
        return Wa(t, a);
      },
      shuffle: db,
    },
    install: P,
    effects: _t,
    ticker: Rt,
    updateRoot: Xt.updateRoot,
    plugins: pt,
    globalTimeline: I,
    core: {
      PropTween: _e,
      globals: S,
      Tween: Zt,
      Timeline: Xt,
      Animation: Ut,
      getCache: fa,
      _removeLinkedListItem: ya,
      reverting: function reverting() {
        return L;
      },
      context: function context(t) {
        return t && l && (l.data.push(t), (t._ctx = l)), l;
      },
      suppressOverwrites: function suppressOverwrites(t) {
        return (B = t);
      },
    },
  };
  ha('to,from,fromTo,delayedCall,set,killTweensOf', function (t) {
    return (Se[t] = Zt[t]);
  }),
    Rt.add(Xt.updateRoot),
    (c = Se.to({}, { duration: 0 }));
  function Jc(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
      r = r._next;
    return r;
  }
  function Lc(t, a) {
    return {
      name: t,
      rawVars: 1,
      init: function init(t, n, e) {
        e._onInit = function (t) {
          var e, i;
          if (
            (r(n) &&
              ((e = {}),
              ha(n, function (t) {
                return (e[t] = 1);
              }),
              (n = e)),
            a)
          ) {
            for (i in ((e = {}), n)) e[i] = a(n[i]);
            n = e;
          }
          !(function _addModifiers(t, e) {
            var r,
              i,
              n,
              a = t._targets;
            for (r in e)
              for (i = a.length; i--; )
                (n = (n = t._ptLookup[i][r]) && n.d) &&
                  (n._pt && (n = Jc(n, r)),
                  n && n.modifier && n.modifier(e[r], t, a[i], r));
          })(t, n);
        };
      },
    };
  }
  var Ee =
    Se.registerPlugin(
      {
        name: 'attr',
        init: function init(t, e, r, i, n) {
          var a, s, o;
          for (a in ((this.tween = r), e))
            (o = t.getAttribute(a) || ''),
              ((s = this.add(
                t,
                'setAttribute',
                (o || 0) + '',
                e[a],
                i,
                n,
                0,
                0,
                a
              )).op = a),
              (s.b = o),
              this._props.push(a);
        },
        render: function render(t, e) {
          for (var r = e._pt; r; )
            L ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next);
        },
      },
      {
        name: 'endArray',
        init: function init(t, e) {
          for (var r = e.length; r--; )
            this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
        },
      },
      Lc('roundProps', fb),
      Lc('modifiers'),
      Lc('snap', gb)
    ) || Se;
  (Zt.version = Xt.version = Ee.version = '3.12.2'), (o = 1), x() && Ft();
  function vd(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }
  function wd(t, e) {
    return e.set(
      e.t,
      e.p,
      1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
      e
    );
  }
  function xd(t, e) {
    return e.set(
      e.t,
      e.p,
      t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
      e
    );
  }
  function yd(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
  }
  function zd(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }
  function Ad(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  }
  function Bd(t, e, r) {
    return (t.style[e] = r);
  }
  function Cd(t, e, r) {
    return t.style.setProperty(e, r);
  }
  function Dd(t, e, r) {
    return (t._gsap[e] = r);
  }
  function Ed(t, e, r) {
    return (t._gsap.scaleX = t._gsap.scaleY = r);
  }
  function Fd(t, e, r, i, n) {
    var a = t._gsap;
    (a.scaleX = a.scaleY = r), a.renderTransform(n, a);
  }
  function Gd(t, e, r, i, n) {
    var a = t._gsap;
    (a[e] = r), a.renderTransform(n, a);
  }
  function Jd(t, e) {
    var r = this,
      i = this.target,
      n = i.style;
    if (t in ar && n) {
      if (((this.tfm = this.tfm || {}), 'transform' === t))
        return cr.transform.split(',').forEach(function (t) {
          return Jd.call(r, t, e);
        });
      if (
        (~(t = cr[t] || t).indexOf(',')
          ? t.split(',').forEach(function (t) {
              return (r.tfm[t] = yr(i, t));
            })
          : (this.tfm[t] = i._gsap.x ? i._gsap[t] : yr(i, t)),
        0 <= this.props.indexOf(dr))
      )
        return;
      i._gsap.svg &&
        ((this.svgo = i.getAttribute('data-svg-origin')),
        this.props.push(pr, e, '')),
        (t = dr);
    }
    (n || e) && this.props.push(t, e, n[t]);
  }
  function Kd(t) {
    t.translate &&
      (t.removeProperty('translate'),
      t.removeProperty('scale'),
      t.removeProperty('rotate'));
  }
  function Ld() {
    var t,
      e,
      r = this.props,
      i = this.target,
      n = i.style,
      a = i._gsap;
    for (t = 0; t < r.length; t += 3)
      r[t + 1]
        ? (i[r[t]] = r[t + 2])
        : r[t + 2]
          ? (n[r[t]] = r[t + 2])
          : n.removeProperty(
              '--' === r[t].substr(0, 2)
                ? r[t]
                : r[t].replace(hr, '-$1').toLowerCase()
            );
    if (this.tfm) {
      for (e in this.tfm) a[e] = this.tfm[e];
      a.svg &&
        (a.renderTransform(),
        i.setAttribute('data-svg-origin', this.svgo || '')),
        ((t = Ie()) && t.isStart) || n[dr] || (Kd(n), (a.uncache = 1));
    }
  }
  function Md(t, e) {
    var r = { target: t, props: [], revert: Ld, save: Jd };
    return (
      t._gsap || Ee.core.getCache(t),
      e &&
        e.split(',').forEach(function (t) {
          return r.save(t);
        }),
      r
    );
  }
  function Od(t, e) {
    var r = ze.createElementNS
      ? ze.createElementNS(
          (e || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
          t
        )
      : ze.createElement(t);
    return r.style ? r : ze.createElement(t);
  }
  function Pd(t, e, r) {
    var i = getComputedStyle(t);
    return (
      i[e] ||
      i.getPropertyValue(e.replace(hr, '-$1').toLowerCase()) ||
      i.getPropertyValue(e) ||
      (!r && Pd(t, mr(e) || e, 1)) ||
      ''
    );
  }
  function Sd() {
    (function _windowExists() {
      return 'undefined' != typeof window;
    })() &&
      window.document &&
      ((De = window),
      (ze = De.document),
      (Re = ze.documentElement),
      (Be = Od('div') || { style: {} }),
      Od('div'),
      (dr = mr(dr)),
      (pr = dr + 'Origin'),
      (Be.style.cssText =
        'border-width:0;line-height:0;position:absolute;padding:0'),
      (Ye = !!mr('perspective')),
      (Ie = Ee.core.reverting),
      (Fe = 1));
  }
  function Td(t) {
    var e,
      r = Od(
        'svg',
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute('xmlns')) ||
          'http://www.w3.org/2000/svg'
      ),
      i = this.parentNode,
      n = this.nextSibling,
      a = this.style.cssText;
    if (
      (Re.appendChild(r),
      r.appendChild(this),
      (this.style.display = 'block'),
      t)
    )
      try {
        (e = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = Td);
      } catch (t) {}
    else this._gsapBBox && (e = this._gsapBBox());
    return (
      i && (n ? i.insertBefore(this, n) : i.appendChild(this)),
      Re.removeChild(r),
      (this.style.cssText = a),
      e
    );
  }
  function Ud(t, e) {
    for (var r = e.length; r--; )
      if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
  }
  function Vd(e) {
    var r;
    try {
      r = e.getBBox();
    } catch (t) {
      r = Td.call(e, !0);
    }
    return (
      (r && (r.width || r.height)) || e.getBBox === Td || (r = Td.call(e, !0)),
      !r || r.width || r.x || r.y
        ? r
        : {
            x: +Ud(e, ['x', 'cx', 'x1']) || 0,
            y: +Ud(e, ['y', 'cy', 'y1']) || 0,
            width: 0,
            height: 0,
          }
    );
  }
  function Wd(t) {
    return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Vd(t));
  }
  function Xd(t, e) {
    if (e) {
      var r = t.style;
      e in ar && e !== pr && (e = dr),
        r.removeProperty
          ? (('ms' !== e.substr(0, 2) && 'webkit' !== e.substr(0, 6)) ||
              (e = '-' + e),
            r.removeProperty(e.replace(hr, '-$1').toLowerCase()))
          : r.removeAttribute(e);
    }
  }
  function Yd(t, e, r, i, n, a) {
    var s = new _e(t._pt, e, r, 0, 1, a ? Ad : zd);
    return ((t._pt = s).b = i), (s.e = n), t._props.push(r), s;
  }
  function _d(t, e, r, i) {
    var n,
      a,
      s,
      o,
      u = parseFloat(r) || 0,
      h = (r + '').trim().substr((u + '').length) || 'px',
      l = Be.style,
      f = lr.test(e),
      c = 'svg' === t.tagName.toLowerCase(),
      d = (c ? 'client' : 'offset') + (f ? 'Width' : 'Height'),
      p = 'px' === i,
      _ = '%' === i;
    return i === h || !u || gr[i] || gr[h]
      ? u
      : ('px' === h || p || (u = _d(t, e, r, 'px')),
        (o = t.getCTM && Wd(t)),
        (!_ && '%' !== h) || (!ar[e] && !~e.indexOf('adius'))
          ? ((l[f ? 'width' : 'height'] = 100 + (p ? h : i)),
            (a =
              ~e.indexOf('adius') || ('em' === i && t.appendChild && !c)
                ? t
                : t.parentNode),
            o && (a = (t.ownerSVGElement || {}).parentNode),
            (a && a !== ze && a.appendChild) || (a = ze.body),
            (s = a._gsap) &&
            _ &&
            s.width &&
            f &&
            s.time === Rt.time &&
            !s.uncache
              ? ia((u / s.width) * 100)
              : ((!_ && '%' !== h) ||
                  vr[Pd(a, 'display')] ||
                  (l.position = Pd(t, 'position')),
                a === t && (l.position = 'static'),
                a.appendChild(Be),
                (n = Be[d]),
                a.removeChild(Be),
                (l.position = 'absolute'),
                f && _ && (((s = fa(a)).time = Rt.time), (s.width = a[d])),
                ia(p ? (n * u) / 100 : n && u ? (100 / n) * u : 0)))
          : ((n = o ? t.getBBox()[f ? 'width' : 'height'] : t[d]),
            ia(_ ? (u / n) * 100 : (u / 100) * n)));
  }
  function be(t, e, r, i) {
    if (!r || 'none' === r) {
      var n = mr(e, t, 1),
        a = n && Pd(t, n, 1);
      a && a !== r
        ? ((e = n), (r = a))
        : 'borderColor' === e && (r = Pd(t, 'borderTopColor'));
    }
    var s,
      o,
      u,
      h,
      l,
      f,
      c,
      d,
      p,
      _,
      m,
      g = new _e(this._pt, t.style, e, 0, 1, ue),
      v = 0,
      y = 0;
    if (
      ((g.b = r),
      (g.e = i),
      (r += ''),
      'auto' === (i += '') &&
        ((t.style[e] = i), (i = Pd(t, e) || i), (t.style[e] = r)),
      Fb((s = [r, i])),
      (i = s[1]),
      (u = (r = s[0]).match(rt) || []),
      (i.match(rt) || []).length)
    ) {
      for (; (o = rt.exec(i)); )
        (c = o[0]),
          (p = i.substring(v, o.index)),
          l
            ? (l = (l + 1) % 5)
            : ('rgba(' !== p.substr(-5) && 'hsla(' !== p.substr(-5)) || (l = 1),
          c !== (f = u[y++] || '') &&
            ((h = parseFloat(f) || 0),
            (m = f.substr((h + '').length)),
            '=' === c.charAt(1) && (c = ka(h, c) + m),
            (d = parseFloat(c)),
            (_ = c.substr((d + '').length)),
            (v = rt.lastIndex - _.length),
            _ ||
              ((_ = _ || q.units[e] || m),
              v === i.length && ((i += _), (g.e += _))),
            m !== _ && (h = _d(t, e, f, _) || 0),
            (g._pt = {
              _next: g._pt,
              p: p || 1 === y ? p : ',',
              s: h,
              c: d - h,
              m: (l && l < 4) || 'zIndex' === e ? Math.round : 0,
            }));
      g.c = v < i.length ? i.substring(v, i.length) : '';
    } else g.r = 'display' === e && 'none' === i ? Ad : zd;
    return nt.test(i) && (g.e = 0), (this._pt = g);
  }
  function de(t) {
    var e = t.split(' '),
      r = e[0],
      i = e[1] || '50%';
    return (
      ('top' !== r && 'bottom' !== r && 'left' !== i && 'right' !== i) ||
        ((t = r), (r = i), (i = t)),
      (e[0] = Tr[r] || r),
      (e[1] = Tr[i] || i),
      e.join(' ')
    );
  }
  function ee(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r,
        i,
        n,
        a = e.t,
        s = a.style,
        o = e.u,
        u = a._gsap;
      if ('all' === o || !0 === o) (s.cssText = ''), (i = 1);
      else
        for (n = (o = o.split(',')).length; -1 < --n; )
          (r = o[n]),
            ar[r] && ((i = 1), (r = 'transformOrigin' === r ? pr : dr)),
            Xd(a, r);
      i &&
        (Xd(a, dr),
        u &&
          (u.svg && a.removeAttribute('transform'),
          kr(a, 1),
          (u.uncache = 1),
          Kd(s)));
    }
  }
  function ie(t) {
    return 'matrix(1, 0, 0, 1, 0, 0)' === t || 'none' === t || !t;
  }
  function je(t) {
    var e = Pd(t, dr);
    return ie(e) ? wr : e.substr(7).match(et).map(ia);
  }
  function ke(t, e) {
    var r,
      i,
      n,
      a,
      s = t._gsap || fa(t),
      o = t.style,
      u = je(t);
    return s.svg && t.getAttribute('transform')
      ? '1,0,0,1,0,0' ===
        (u = [
          (n = t.transform.baseVal.consolidate().matrix).a,
          n.b,
          n.c,
          n.d,
          n.e,
          n.f,
        ]).join(',')
        ? wr
        : u
      : (u !== wr ||
          t.offsetParent ||
          t === Re ||
          s.svg ||
          ((n = o.display),
          (o.display = 'block'),
          ((r = t.parentNode) && t.offsetParent) ||
            ((a = 1), (i = t.nextElementSibling), Re.appendChild(t)),
          (u = je(t)),
          n ? (o.display = n) : Xd(t, 'display'),
          a &&
            (i
              ? r.insertBefore(t, i)
              : r
                ? r.appendChild(t)
                : Re.removeChild(t))),
        e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  }
  function le(t, e, r, i, n, a) {
    var s,
      o,
      u,
      h = t._gsap,
      l = n || ke(t, !0),
      f = h.xOrigin || 0,
      c = h.yOrigin || 0,
      d = h.xOffset || 0,
      p = h.yOffset || 0,
      _ = l[0],
      m = l[1],
      g = l[2],
      v = l[3],
      y = l[4],
      T = l[5],
      b = e.split(' '),
      w = parseFloat(b[0]) || 0,
      x = parseFloat(b[1]) || 0;
    r
      ? l !== wr &&
        (o = _ * v - m * g) &&
        ((u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o),
        (w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o),
        (x = u))
      : ((w = (s = Vd(t)).x + (~b[0].indexOf('%') ? (w / 100) * s.width : w)),
        (x = s.y + (~(b[1] || b[0]).indexOf('%') ? (x / 100) * s.height : x))),
      i || (!1 !== i && h.smooth)
        ? ((y = w - f),
          (T = x - c),
          (h.xOffset = d + (y * _ + T * g) - y),
          (h.yOffset = p + (y * m + T * v) - T))
        : (h.xOffset = h.yOffset = 0),
      (h.xOrigin = w),
      (h.yOrigin = x),
      (h.smooth = !!i),
      (h.origin = e),
      (h.originIsAbsolute = !!r),
      (t.style[pr] = '0px 0px'),
      a &&
        (Yd(a, h, 'xOrigin', f, w),
        Yd(a, h, 'yOrigin', c, x),
        Yd(a, h, 'xOffset', d, h.xOffset),
        Yd(a, h, 'yOffset', p, h.yOffset)),
      t.setAttribute('data-svg-origin', w + ' ' + x);
  }
  function oe(t, e, r) {
    var i = Ya(e);
    return ia(parseFloat(e) + parseFloat(_d(t, 'x', r + 'px', i))) + i;
  }
  function ve(t, e, i, n, a) {
    var s,
      o,
      u = 360,
      h = r(a),
      l = parseFloat(a) * (h && ~a.indexOf('rad') ? sr : 1) - n,
      f = n + l + 'deg';
    return (
      h &&
        ('short' === (s = a.split('_')[1]) &&
          (l %= u) !== l % 180 &&
          (l += l < 0 ? u : -u),
        'cw' === s && l < 0
          ? (l = ((l + 36e9) % u) - ~~(l / u) * u)
          : 'ccw' === s && 0 < l && (l = ((l - 36e9) % u) - ~~(l / u) * u)),
      (t._pt = o = new _e(t._pt, e, i, n, l, wd)),
      (o.e = f),
      (o.u = 'deg'),
      t._props.push(i),
      o
    );
  }
  function we(t, e) {
    for (var r in e) t[r] = e[r];
    return t;
  }
  function xe(t, e, r) {
    var i,
      n,
      a,
      s,
      o,
      u,
      h,
      l = we({}, r._gsap),
      f = r.style;
    for (n in (l.svg
      ? ((a = r.getAttribute('transform')),
        r.setAttribute('transform', ''),
        (f[dr] = e),
        (i = kr(r, 1)),
        Xd(r, dr),
        r.setAttribute('transform', a))
      : ((a = getComputedStyle(r)[dr]),
        (f[dr] = e),
        (i = kr(r, 1)),
        (f[dr] = a)),
    ar))
      (a = l[n]) !== (s = i[n]) &&
        'perspective,force3D,transformOrigin,svgOrigin'.indexOf(n) < 0 &&
        ((o = Ya(a) !== (h = Ya(s)) ? _d(r, n, a, h) : parseFloat(a)),
        (u = parseFloat(s)),
        (t._pt = new _e(t._pt, i, n, o, u - o, vd)),
        (t._pt.u = h || 0),
        t._props.push(n));
    we(i, l);
  }
  var De,
    ze,
    Re,
    Fe,
    Be,
    Le,
    Ie,
    Ye,
    qe = Bt.Power0,
    Ve = Bt.Power1,
    Ue = Bt.Power2,
    Xe = Bt.Power3,
    Ne = Bt.Power4,
    We = Bt.Linear,
    Qe = Bt.Quad,
    Ge = Bt.Cubic,
    Ke = Bt.Quart,
    Je = Bt.Quint,
    He = Bt.Strong,
    Ze = Bt.Elastic,
    $e = Bt.Back,
    tr = Bt.SteppedEase,
    er = Bt.Bounce,
    rr = Bt.Sine,
    ir = Bt.Expo,
    nr = Bt.Circ,
    ar = {},
    sr = 180 / Math.PI,
    or = Math.PI / 180,
    ur = Math.atan2,
    hr = /([A-Z])/g,
    lr = /(left|right|width|margin|padding|x)/i,
    fr = /[\s,\(]\S/,
    cr = {
      autoAlpha: 'opacity,visibility',
      scale: 'scaleX,scaleY',
      alpha: 'opacity',
    },
    dr = 'transform',
    pr = dr + 'Origin',
    _r = 'O,Moz,ms,Ms,Webkit'.split(','),
    mr = function _checkPropPrefix(t, e, r) {
      var i = (e || Be).style,
        n = 5;
      if (t in i && !r) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        n-- && !(_r[n] + t in i);

      );
      return n < 0 ? null : (3 === n ? 'ms' : 0 <= n ? _r[n] : '') + t;
    },
    gr = { deg: 1, rad: 1, turn: 1 },
    vr = { grid: 1, flex: 1 },
    yr = function _get(t, e, r, i) {
      var n;
      return (
        Fe || Sd(),
        e in cr &&
          'transform' !== e &&
          ~(e = cr[e]).indexOf(',') &&
          (e = e.split(',')[0]),
        ar[e] && 'transform' !== e
          ? ((n = kr(t, i)),
            (n =
              'transformOrigin' !== e
                ? n[e]
                : n.svg
                  ? n.origin
                  : Mr(Pd(t, pr)) + ' ' + n.zOrigin + 'px'))
          : ((n = t.style[e]) &&
              'auto' !== n &&
              !i &&
              !~(n + '').indexOf('calc(')) ||
            (n =
              (br[e] && br[e](t, e, r)) ||
              Pd(t, e) ||
              ga(t, e) ||
              ('opacity' === e ? 1 : 0)),
        r && !~(n + '').trim().indexOf(' ') ? _d(t, e, n, r) + r : n
      );
    },
    Tr = {
      top: '0%',
      bottom: '100%',
      left: '0%',
      right: '100%',
      center: '50%',
    },
    br = {
      clearProps: function clearProps(t, e, r, i, n) {
        if ('isFromStart' !== n.data) {
          var a = (t._pt = new _e(t._pt, e, r, 0, 0, ee));
          return (a.u = i), (a.pr = -10), (a.tween = n), t._props.push(r), 1;
        }
      },
    },
    wr = [1, 0, 0, 1, 0, 0],
    xr = {},
    kr = function _parseTransform(t, e) {
      var r = t._gsap || new Vt(t);
      if ('x' in r && !e && !r.uncache) return r;
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        c,
        d,
        p,
        _,
        m,
        g,
        v,
        y,
        T,
        b,
        w,
        x,
        k,
        M,
        O,
        P,
        A,
        C,
        S,
        E,
        D,
        z,
        R,
        F = t.style,
        B = r.scaleX < 0,
        L = 'deg',
        I = getComputedStyle(t),
        Y = Pd(t, pr) || '0';
      return (
        (i = n = a = u = h = l = f = c = d = 0),
        (s = o = 1),
        (r.svg = !(!t.getCTM || !Wd(t))),
        I.translate &&
          (('none' === I.translate &&
            'none' === I.scale &&
            'none' === I.rotate) ||
            (F[dr] =
              ('none' !== I.translate
                ? 'translate3d(' +
                  (I.translate + ' 0 0').split(' ').slice(0, 3).join(', ') +
                  ') '
                : '') +
              ('none' !== I.rotate ? 'rotate(' + I.rotate + ') ' : '') +
              ('none' !== I.scale
                ? 'scale(' + I.scale.split(' ').join(',') + ') '
                : '') +
              ('none' !== I[dr] ? I[dr] : '')),
          (F.scale = F.rotate = F.translate = 'none')),
        (m = ke(t, r.svg)),
        r.svg &&
          ((O = r.uncache
            ? ((P = t.getBBox()),
              (Y = r.xOrigin - P.x + 'px ' + (r.yOrigin - P.y) + 'px'),
              '')
            : !e && t.getAttribute('data-svg-origin')),
          le(t, O || Y, !!O || r.originIsAbsolute, !1 !== r.smooth, m)),
        (p = r.xOrigin || 0),
        (_ = r.yOrigin || 0),
        m !== wr &&
          ((T = m[0]),
          (b = m[1]),
          (w = m[2]),
          (x = m[3]),
          (i = k = m[4]),
          (n = M = m[5]),
          6 === m.length
            ? ((s = Math.sqrt(T * T + b * b)),
              (o = Math.sqrt(x * x + w * w)),
              (u = T || b ? ur(b, T) * sr : 0),
              (f = w || x ? ur(w, x) * sr + u : 0) &&
                (o *= Math.abs(Math.cos(f * or))),
              r.svg && ((i -= p - (p * T + _ * w)), (n -= _ - (p * b + _ * x))))
            : ((R = m[6]),
              (D = m[7]),
              (C = m[8]),
              (S = m[9]),
              (E = m[10]),
              (z = m[11]),
              (i = m[12]),
              (n = m[13]),
              (a = m[14]),
              (h = (g = ur(R, E)) * sr),
              g &&
                ((O = k * (v = Math.cos(-g)) + C * (y = Math.sin(-g))),
                (P = M * v + S * y),
                (A = R * v + E * y),
                (C = k * -y + C * v),
                (S = M * -y + S * v),
                (E = R * -y + E * v),
                (z = D * -y + z * v),
                (k = O),
                (M = P),
                (R = A)),
              (l = (g = ur(-w, E)) * sr),
              g &&
                ((v = Math.cos(-g)),
                (z = x * (y = Math.sin(-g)) + z * v),
                (T = O = T * v - C * y),
                (b = P = b * v - S * y),
                (w = A = w * v - E * y)),
              (u = (g = ur(b, T)) * sr),
              g &&
                ((O = T * (v = Math.cos(g)) + b * (y = Math.sin(g))),
                (P = k * v + M * y),
                (b = b * v - T * y),
                (M = M * v - k * y),
                (T = O),
                (k = P)),
              h &&
                359.9 < Math.abs(h) + Math.abs(u) &&
                ((h = u = 0), (l = 180 - l)),
              (s = ia(Math.sqrt(T * T + b * b + w * w))),
              (o = ia(Math.sqrt(M * M + R * R))),
              (g = ur(k, M)),
              (f = 2e-4 < Math.abs(g) ? g * sr : 0),
              (d = z ? 1 / (z < 0 ? -z : z) : 0)),
          r.svg &&
            ((O = t.getAttribute('transform')),
            (r.forceCSS = t.setAttribute('transform', '') || !ie(Pd(t, dr))),
            O && t.setAttribute('transform', O))),
        90 < Math.abs(f) &&
          Math.abs(f) < 270 &&
          (B
            ? ((s *= -1),
              (f += u <= 0 ? 180 : -180),
              (u += u <= 0 ? 180 : -180))
            : ((o *= -1), (f += f <= 0 ? 180 : -180))),
        (e = e || r.uncache),
        (r.x =
          i -
          ((r.xPercent =
            i &&
            ((!e && r.xPercent) ||
              (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0)))
            ? (t.offsetWidth * r.xPercent) / 100
            : 0) +
          'px'),
        (r.y =
          n -
          ((r.yPercent =
            n &&
            ((!e && r.yPercent) ||
              (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0)))
            ? (t.offsetHeight * r.yPercent) / 100
            : 0) +
          'px'),
        (r.z = a + 'px'),
        (r.scaleX = ia(s)),
        (r.scaleY = ia(o)),
        (r.rotation = ia(u) + L),
        (r.rotationX = ia(h) + L),
        (r.rotationY = ia(l) + L),
        (r.skewX = f + L),
        (r.skewY = c + L),
        (r.transformPerspective = d + 'px'),
        (r.zOrigin = parseFloat(Y.split(' ')[2]) || 0) && (F[pr] = Mr(Y)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = q.force3D),
        (r.renderTransform = r.svg ? Er : Ye ? Sr : Or),
        (r.uncache = 0),
        r
      );
    },
    Mr = function _firstTwoOnly(t) {
      return (t = t.split(' '))[0] + ' ' + t[1];
    },
    Or = function _renderNon3DTransforms(t, e) {
      (e.z = '0px'),
        (e.rotationY = e.rotationX = '0deg'),
        (e.force3D = 0),
        Sr(t, e);
    },
    Pr = '0deg',
    Ar = '0px',
    Cr = ') ',
    Sr = function _renderCSSTransforms(t, e) {
      var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        a = r.x,
        s = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        c = r.skewY,
        d = r.scaleX,
        p = r.scaleY,
        _ = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = '',
        T = ('auto' === m && t && 1 !== t) || !0 === m;
      if (v && (l !== Pr || h !== Pr)) {
        var b,
          w = parseFloat(h) * or,
          x = Math.sin(w),
          k = Math.cos(w);
        (w = parseFloat(l) * or),
          (b = Math.cos(w)),
          (a = oe(g, a, x * b * -v)),
          (s = oe(g, s, -Math.sin(w) * -v)),
          (o = oe(g, o, k * b * -v + v));
      }
      _ !== Ar && (y += 'perspective(' + _ + Cr),
        (i || n) && (y += 'translate(' + i + '%, ' + n + '%) '),
        (!T && a === Ar && s === Ar && o === Ar) ||
          (y +=
            o !== Ar || T
              ? 'translate3d(' + a + ', ' + s + ', ' + o + ') '
              : 'translate(' + a + ', ' + s + Cr),
        u !== Pr && (y += 'rotate(' + u + Cr),
        h !== Pr && (y += 'rotateY(' + h + Cr),
        l !== Pr && (y += 'rotateX(' + l + Cr),
        (f === Pr && c === Pr) || (y += 'skew(' + f + ', ' + c + Cr),
        (1 === d && 1 === p) || (y += 'scale(' + d + ', ' + p + Cr),
        (g.style[dr] = y || 'translate(0, 0)');
    },
    Er = function _renderSVGTransforms(t, e) {
      var r,
        i,
        n,
        a,
        s,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        l = o.x,
        f = o.y,
        c = o.rotation,
        d = o.skewX,
        p = o.skewY,
        _ = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        y = o.yOrigin,
        T = o.xOffset,
        b = o.yOffset,
        w = o.forceCSS,
        x = parseFloat(l),
        k = parseFloat(f);
      (c = parseFloat(c)),
        (d = parseFloat(d)),
        (p = parseFloat(p)) && ((d += p = parseFloat(p)), (c += p)),
        c || d
          ? ((c *= or),
            (d *= or),
            (r = Math.cos(c) * _),
            (i = Math.sin(c) * _),
            (n = Math.sin(c - d) * -m),
            (a = Math.cos(c - d) * m),
            d &&
              ((p *= or),
              (s = Math.tan(d - p)),
              (n *= s = Math.sqrt(1 + s * s)),
              (a *= s),
              p &&
                ((s = Math.tan(p)), (r *= s = Math.sqrt(1 + s * s)), (i *= s))),
            (r = ia(r)),
            (i = ia(i)),
            (n = ia(n)),
            (a = ia(a)))
          : ((r = _), (a = m), (i = n = 0)),
        ((x && !~(l + '').indexOf('px')) || (k && !~(f + '').indexOf('px'))) &&
          ((x = _d(g, 'x', l, 'px')), (k = _d(g, 'y', f, 'px'))),
        (v || y || T || b) &&
          ((x = ia(x + v - (v * r + y * n) + T)),
          (k = ia(k + y - (v * i + y * a) + b))),
        (u || h) &&
          ((s = g.getBBox()),
          (x = ia(x + (u / 100) * s.width)),
          (k = ia(k + (h / 100) * s.height))),
        (s =
          'matrix(' +
          r +
          ',' +
          i +
          ',' +
          n +
          ',' +
          a +
          ',' +
          x +
          ',' +
          k +
          ')'),
        g.setAttribute('transform', s),
        w && (g.style[dr] = s);
    };
  ha('padding,margin,Width,Radius', function (e, r) {
    var t = 'Right',
      i = 'Bottom',
      n = 'Left',
      o = (r < 3 ? ['Top', t, i, n] : ['Top' + n, 'Top' + t, i + t, i + n]).map(
        function (t) {
          return r < 2 ? e + t : 'border' + t + e;
        }
      );
    br[1 < r ? 'border' + e : e] = function (e, t, r, i, n) {
      var a, s;
      if (arguments.length < 4)
        return (
          (a = o.map(function (t) {
            return yr(e, t, r);
          })),
          5 === (s = a.join(' ')).split(a[0]).length ? a[0] : s
        );
      (a = (i + '').split(' ')),
        (s = {}),
        o.forEach(function (t, e) {
          return (s[t] = a[e] = a[e] || a[((e - 1) / 2) | 0]);
        }),
        e.init(t, s, n);
    };
  });
  var Dr,
    zr,
    Rr,
    Fr = {
      name: 'css',
      register: Sd,
      targetTest: function targetTest(t) {
        return t.style && t.nodeType;
      },
      init: function init(t, e, i, n, a) {
        var s,
          o,
          u,
          h,
          l,
          f,
          c,
          d,
          p,
          _,
          m,
          g,
          v,
          y,
          T,
          b,
          w = this._props,
          x = t.style,
          k = i.vars.startAt;
        for (c in (Fe || Sd(),
        (this.styles = this.styles || Md(t)),
        (b = this.styles.props),
        (this.tween = i),
        e))
          if (
            'autoRound' !== c &&
            ((o = e[c]), !pt[c] || !ac(c, e, i, n, t, a))
          )
            if (
              ((l = typeof o),
              (f = br[c]),
              'function' === l && (l = typeof (o = o.call(i, n, t, a))),
              'string' === l && ~o.indexOf('random(') && (o = ob(o)),
              f)
            )
              f(this, t, c, o, i) && (T = 1);
            else if ('--' === c.substr(0, 2))
              (s = (getComputedStyle(t).getPropertyValue(c) + '').trim()),
                (o += ''),
                (Dt.lastIndex = 0),
                Dt.test(s) || ((d = Ya(s)), (p = Ya(o))),
                p ? d !== p && (s = _d(t, c, s, p) + p) : d && (o += d),
                this.add(x, 'setProperty', s, o, n, a, 0, 0, c),
                w.push(c),
                b.push(c, 0, x[c]);
            else if ('undefined' !== l) {
              if (
                (k && c in k
                  ? ((s =
                      'function' == typeof k[c] ? k[c].call(i, n, t, a) : k[c]),
                    r(s) && ~s.indexOf('random(') && (s = ob(s)),
                    Ya(s + '') || (s += q.units[c] || Ya(yr(t, c)) || ''),
                    '=' === (s + '').charAt(1) && (s = yr(t, c)))
                  : (s = yr(t, c)),
                (h = parseFloat(s)),
                (_ = 'string' === l && '=' === o.charAt(1) && o.substr(0, 2)) &&
                  (o = o.substr(2)),
                (u = parseFloat(o)),
                c in cr &&
                  ('autoAlpha' === c &&
                    (1 === h &&
                      'hidden' === yr(t, 'visibility') &&
                      u &&
                      (h = 0),
                    b.push('visibility', 0, x.visibility),
                    Yd(
                      this,
                      x,
                      'visibility',
                      h ? 'inherit' : 'hidden',
                      u ? 'inherit' : 'hidden',
                      !u
                    )),
                  'scale' !== c &&
                    'transform' !== c &&
                    ~(c = cr[c]).indexOf(',') &&
                    (c = c.split(',')[0])),
                (m = c in ar))
              )
                if (
                  (this.styles.save(c),
                  g ||
                    (((v = t._gsap).renderTransform && !e.parseTransform) ||
                      kr(t, e.parseTransform),
                    (y = !1 !== e.smoothOrigin && v.smooth),
                    ((g = this._pt =
                      new _e(
                        this._pt,
                        x,
                        dr,
                        0,
                        1,
                        v.renderTransform,
                        v,
                        0,
                        -1
                      )).dep = 1)),
                  'scale' === c)
                )
                  (this._pt = new _e(
                    this._pt,
                    v,
                    'scaleY',
                    v.scaleY,
                    (_ ? ka(v.scaleY, _ + u) : u) - v.scaleY || 0,
                    vd
                  )),
                    (this._pt.u = 0),
                    w.push('scaleY', c),
                    (c += 'X');
                else {
                  if ('transformOrigin' === c) {
                    b.push(pr, 0, x[pr]),
                      (o = de(o)),
                      v.svg
                        ? le(t, o, 0, y, 0, this)
                        : ((p = parseFloat(o.split(' ')[2]) || 0) !==
                            v.zOrigin && Yd(this, v, 'zOrigin', v.zOrigin, p),
                          Yd(this, x, c, Mr(s), Mr(o)));
                    continue;
                  }
                  if ('svgOrigin' === c) {
                    le(t, o, 1, y, 0, this);
                    continue;
                  }
                  if (c in xr) {
                    ve(this, v, c, h, _ ? ka(h, _ + o) : o);
                    continue;
                  }
                  if ('smoothOrigin' === c) {
                    Yd(this, v, 'smooth', v.smooth, o);
                    continue;
                  }
                  if ('force3D' === c) {
                    v[c] = o;
                    continue;
                  }
                  if ('transform' === c) {
                    xe(this, o, t);
                    continue;
                  }
                }
              else c in x || (c = mr(c) || c);
              if (
                m ||
                ((u || 0 === u) && (h || 0 === h) && !fr.test(o) && c in x)
              )
                (u = u || 0),
                  (d = (s + '').substr((h + '').length)) !==
                    (p = Ya(o) || (c in q.units ? q.units[c] : d)) &&
                    (h = _d(t, c, s, p)),
                  (this._pt = new _e(
                    this._pt,
                    m ? v : x,
                    c,
                    h,
                    (_ ? ka(h, _ + u) : u) - h,
                    m || ('px' !== p && 'zIndex' !== c) || !1 === e.autoRound
                      ? vd
                      : yd
                  )),
                  (this._pt.u = p || 0),
                  d !== p && '%' !== p && ((this._pt.b = s), (this._pt.r = xd));
              else if (c in x) be.call(this, t, c, s, _ ? _ + o : o);
              else if (c in t) this.add(t, c, s || t[c], _ ? _ + o : o, n, a);
              else if ('parseTransform' !== c) {
                Q(c, o);
                continue;
              }
              m || (c in x ? b.push(c, 0, x[c]) : b.push(c, 1, s || t[c])),
                w.push(c);
            }
        T && pe(this);
      },
      render: function render(t, e) {
        if (e.tween._time || !Ie())
          for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
        else e.styles.revert();
      },
      get: yr,
      aliases: cr,
      getSetter: function getSetter(t, e, r) {
        var i = cr[e];
        return (
          i && i.indexOf(',') < 0 && (e = i),
          e in ar && e !== pr && (t._gsap.x || yr(t, 'x'))
            ? r && Le === r
              ? 'scale' === e
                ? Ed
                : Dd
              : (Le = r || {}) && ('scale' === e ? Fd : Gd)
            : t.style && !u(t.style[e])
              ? Bd
              : ~e.indexOf('-')
                ? Cd
                : ne(t, e)
        );
      },
      core: { _removeProperty: Xd, _getMatrix: ke },
    };
  (Ee.utils.checkPrefix = mr),
    (Ee.core.getStyleSaver = Md),
    (Rr = ha(
      (Dr = 'x,y,z,scale,scaleX,scaleY,xPercent,yPercent') +
        ',' +
        (zr = 'rotation,rotationX,rotationY,skewX,skewY') +
        ',transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
      function (t) {
        ar[t] = 1;
      }
    )),
    ha(zr, function (t) {
      (q.units[t] = 'deg'), (xr[t] = 1);
    }),
    (cr[Rr[13]] = Dr + ',' + zr),
    ha(
      '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY',
      function (t) {
        var e = t.split(':');
        cr[e[1]] = Rr[e[0]];
      }
    ),
    ha(
      'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
      function (t) {
        q.units[t] = 'px';
      }
    ),
    Ee.registerPlugin(Fr);
  var Br = Ee.registerPlugin(Fr) || Ee,
    Lr = Br.core.Tween;
  (e.Back = $e),
    (e.Bounce = er),
    (e.CSSPlugin = Fr),
    (e.Circ = nr),
    (e.Cubic = Ge),
    (e.Elastic = Ze),
    (e.Expo = ir),
    (e.Linear = We),
    (e.Power0 = qe),
    (e.Power1 = Ve),
    (e.Power2 = Ue),
    (e.Power3 = Xe),
    (e.Power4 = Ne),
    (e.Quad = Qe),
    (e.Quart = Ke),
    (e.Quint = Je),
    (e.Sine = rr),
    (e.SteppedEase = tr),
    (e.Strong = He),
    (e.TimelineLite = Xt),
    (e.TimelineMax = Xt),
    (e.TweenLite = Zt),
    (e.TweenMax = Lr),
    (e.default = Br),
    (e.gsap = Br);
  if (typeof window === 'undefined' || window !== e) {
    Object.defineProperty(e, '__esModule', { value: !0 });
  } else {
    delete e.default;
  }
});
/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
      ? define(['exports'], t)
      : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  'use strict';
  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        'value' in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function r() {
    return (
      Se ||
      ('undefined' != typeof window &&
        (Se = window.gsap) &&
        Se.registerPlugin &&
        Se)
    );
  }
  function z(e, t) {
    return ~Ie.indexOf(e) && Ie[Ie.indexOf(e) + 1][t];
  }
  function A(e) {
    return !!~t.indexOf(e);
  }
  function B(e, t, r, n, o) {
    return e.addEventListener(t, r, { passive: !n, capture: !!o });
  }
  function C(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function F() {
    return (Re && Re.isPressed) || ze.cache++;
  }
  function G(r, n) {
    function ad(e) {
      if (e || 0 === e) {
        o && (Te.history.scrollRestoration = 'manual');
        var t = Re && Re.isPressed;
        (e = ad.v = Math.round(e) || (Re && Re.iOS ? 1 : 0)),
          r(e),
          (ad.cacheID = ze.cache),
          t && i('ss', e);
      } else
        (n || ze.cache !== ad.cacheID || i('ref')) &&
          ((ad.cacheID = ze.cache), (ad.v = r()));
      return ad.v + ad.offset;
    }
    return (ad.offset = 0), r && ad;
  }
  function J(e, t) {
    return (
      ((t && t._ctx && t._ctx.selector) || Se.utils.toArray)(e)[0] ||
      ('string' == typeof e && !1 !== Se.config().nullTargetWarn
        ? console.warn('Element not found:', e)
        : null)
    );
  }
  function K(t, e) {
    var r = e.s,
      n = e.sc;
    A(t) && (t = Ce.scrollingElement || Pe);
    var o = ze.indexOf(t),
      i = n === He.sc ? 1 : 2;
    ~o || (o = ze.push(t) - 1), ze[o + i] || B(t, 'scroll', F);
    var a = ze[o + i],
      s =
        a ||
        (ze[o + i] =
          G(z(t, r), !0) ||
          (A(t)
            ? n
            : G(function (e) {
                return arguments.length ? (t[r] = e) : t[r];
              })));
    return (
      (s.target = t),
      a || (s.smooth = 'smooth' === Se.getProperty(t, 'scrollBehavior')),
      s
    );
  }
  function L(e, t, o) {
    function zd(e, t) {
      var r = Ye();
      t || n < r - s
        ? ((a = i), (i = e), (l = s), (s = r))
        : o
          ? (i += e)
          : (i = a + ((e - a) / (r - l)) * (s - l));
    }
    var i = e,
      a = e,
      s = Ye(),
      l = s,
      n = t || 50,
      c = Math.max(500, 3 * n);
    return {
      update: zd,
      reset: function reset() {
        (a = i = o ? 0 : i), (l = s = 0);
      },
      getVelocity: function getVelocity(e) {
        var t = l,
          r = a,
          n = Ye();
        return (
          (!e && 0 !== e) || e === i || zd(e),
          s === l || c < n - l
            ? 0
            : ((i + (o ? r : -r)) / ((o ? n : s) - t)) * 1e3
        );
      },
    };
  }
  function M(e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  }
  function N(e) {
    var t = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(r) ? t : r;
  }
  function O() {
    (Ae = Se.core.globals().ScrollTrigger) &&
      Ae.core &&
      (function _integrate() {
        var e = Ae.core,
          r = e.bridge || {},
          t = e._scrollers,
          n = e._proxies;
        t.push.apply(t, ze),
          n.push.apply(n, Ie),
          (ze = t),
          (Ie = n),
          (i = function _bridge(e, t) {
            return r[e](t);
          });
      })();
  }
  function P(e) {
    return (
      (Se = e || r()) &&
        'undefined' != typeof document &&
        document.body &&
        ((Te = window),
        (Pe = (Ce = document).documentElement),
        (Me = Ce.body),
        (t = [Te, Ce, Pe, Me]),
        Se.utils.clamp,
        (De = Se.core.context || function () {}),
        (Oe = 'onpointerenter' in Me ? 'pointer' : 'mouse'),
        (Ee = E.isTouch =
          Te.matchMedia &&
          Te.matchMedia('(hover: none), (pointer: coarse)').matches
            ? 1
            : 'ontouchstart' in Te ||
                0 < navigator.maxTouchPoints ||
                0 < navigator.msMaxTouchPoints
              ? 2
              : 0),
        (Be = E.eventTypes =
          (
            'ontouchstart' in Pe
              ? 'touchstart,touchmove,touchcancel,touchend'
              : 'onpointerdown' in Pe
                ? 'pointerdown,pointermove,pointercancel,pointerup'
                : 'mousedown,mousemove,mouseup,mouseup'
          ).split(',')),
        setTimeout(function () {
          return (o = 0);
        }, 500),
        O(),
        (ke = 1)),
      ke
    );
  }
  var Se,
    ke,
    Te,
    Ce,
    Pe,
    Me,
    Ee,
    Oe,
    Ae,
    t,
    Re,
    Be,
    De,
    o = 1,
    Fe = [],
    ze = [],
    Ie = [],
    Ye = Date.now,
    i = function _bridge(e, t) {
      return t;
    },
    n = 'scrollLeft',
    a = 'scrollTop',
    qe = {
      s: n,
      p: 'left',
      p2: 'Left',
      os: 'right',
      os2: 'Right',
      d: 'width',
      d2: 'Width',
      a: 'x',
      sc: G(function (e) {
        return arguments.length
          ? Te.scrollTo(e, He.sc())
          : Te.pageXOffset || Ce[n] || Pe[n] || Me[n] || 0;
      }),
    },
    He = {
      s: a,
      p: 'top',
      p2: 'Top',
      os: 'bottom',
      os2: 'Bottom',
      d: 'height',
      d2: 'Height',
      a: 'y',
      op: qe,
      sc: G(function (e) {
        return arguments.length
          ? Te.scrollTo(qe.sc(), e)
          : Te.pageYOffset || Ce[a] || Pe[a] || Me[a] || 0;
      }),
    };
  (qe.op = He), (ze.cache = 0);
  var E =
    ((Observer.prototype.init = function init(e) {
      ke || P(Se) || console.warn('Please gsap.registerPlugin(Observer)'),
        Ae || O();
      var o = e.tolerance,
        a = e.dragMinimum,
        t = e.type,
        i = e.target,
        r = e.lineHeight,
        n = e.debounce,
        s = e.preventDefault,
        l = e.onStop,
        c = e.onStopDelay,
        u = e.ignore,
        f = e.wheelSpeed,
        d = e.event,
        p = e.onDragStart,
        g = e.onDragEnd,
        h = e.onDrag,
        v = e.onPress,
        b = e.onRelease,
        m = e.onRight,
        y = e.onLeft,
        x = e.onUp,
        _ = e.onDown,
        w = e.onChangeX,
        S = e.onChangeY,
        k = e.onChange,
        T = e.onToggleX,
        E = e.onToggleY,
        R = e.onHover,
        D = e.onHoverEnd,
        z = e.onMove,
        I = e.ignoreCheck,
        Y = e.isNormalizer,
        q = e.onGestureStart,
        H = e.onGestureEnd,
        X = e.onWheel,
        W = e.onEnable,
        G = e.onDisable,
        V = e.onClick,
        U = e.scrollSpeed,
        j = e.capture,
        Q = e.allowClicks,
        $ = e.lockAxis,
        Z = e.onLockAxis;
      function $e() {
        return (ye = Ye());
      }
      function _e(e, t) {
        return (
          ((se.event = e) && u && ~u.indexOf(e.target)) ||
          (t && ge && 'touch' !== e.pointerType) ||
          (I && I(e, t))
        );
      }
      function bf() {
        var e = (se.deltaX = N(be)),
          t = (se.deltaY = N(me)),
          r = Math.abs(e) >= o,
          n = Math.abs(t) >= o;
        k && (r || n) && k(se, e, t, be, me),
          r &&
            (m && 0 < se.deltaX && m(se),
            y && se.deltaX < 0 && y(se),
            w && w(se),
            T && se.deltaX < 0 != le < 0 && T(se),
            (le = se.deltaX),
            (be[0] = be[1] = be[2] = 0)),
          n &&
            (_ && 0 < se.deltaY && _(se),
            x && se.deltaY < 0 && x(se),
            S && S(se),
            E && se.deltaY < 0 != ce < 0 && E(se),
            (ce = se.deltaY),
            (me[0] = me[1] = me[2] = 0)),
          (ne || re) && (z && z(se), re && (h(se), (re = !1)), (ne = !1)),
          ie && !(ie = !1) && Z && Z(se),
          oe && (X(se), (oe = !1)),
          (ee = 0);
      }
      function cf(e, t, r) {
        (be[r] += e),
          (me[r] += t),
          se._vx.update(e),
          se._vy.update(t),
          n ? (ee = ee || requestAnimationFrame(bf)) : bf();
      }
      function df(e, t) {
        $ &&
          !ae &&
          ((se.axis = ae = Math.abs(e) > Math.abs(t) ? 'x' : 'y'), (ie = !0)),
          'y' !== ae && ((be[2] += e), se._vx.update(e, !0)),
          'x' !== ae && ((me[2] += t), se._vy.update(t, !0)),
          n ? (ee = ee || requestAnimationFrame(bf)) : bf();
      }
      function ef(e) {
        if (!_e(e, 1)) {
          var t = (e = M(e, s)).clientX,
            r = e.clientY,
            n = t - se.x,
            o = r - se.y,
            i = se.isDragging;
          (se.x = t),
            (se.y = r),
            (i ||
              Math.abs(se.startX - t) >= a ||
              Math.abs(se.startY - r) >= a) &&
              (h && (re = !0),
              i || (se.isDragging = !0),
              df(n, o),
              i || (p && p(se)));
        }
      }
      function hf(e) {
        return (
          e.touches &&
          1 < e.touches.length &&
          (se.isGesturing = !0) &&
          q(e, se.isDragging)
        );
      }
      function jf() {
        return (se.isGesturing = !1) || H(se);
      }
      function kf(e) {
        if (!_e(e)) {
          var t = ue(),
            r = fe();
          cf((t - de) * U, (r - pe) * U, 1),
            (de = t),
            (pe = r),
            l && te.restart(!0);
        }
      }
      function lf(e) {
        if (!_e(e)) {
          (e = M(e, s)), X && (oe = !0);
          var t =
            (1 === e.deltaMode ? r : 2 === e.deltaMode ? Te.innerHeight : 1) *
            f;
          cf(e.deltaX * t, e.deltaY * t, 0), l && !Y && te.restart(!0);
        }
      }
      function mf(e) {
        if (!_e(e)) {
          var t = e.clientX,
            r = e.clientY,
            n = t - se.x,
            o = r - se.y;
          (se.x = t), (se.y = r), (ne = !0), (n || o) && df(n, o);
        }
      }
      function nf(e) {
        (se.event = e), R(se);
      }
      function of(e) {
        (se.event = e), D(se);
      }
      function pf(e) {
        return _e(e) || (M(e, s) && V(se));
      }
      (this.target = i = J(i) || Pe),
        (this.vars = e),
        (u = u && Se.utils.toArray(u)),
        (o = o || 1e-9),
        (a = a || 0),
        (f = f || 1),
        (U = U || 1),
        (t = t || 'wheel,touch,pointer'),
        (n = !1 !== n),
        (r = r || parseFloat(Te.getComputedStyle(Me).lineHeight) || 22);
      var ee,
        te,
        re,
        ne,
        oe,
        ie,
        ae,
        se = this,
        le = 0,
        ce = 0,
        ue = K(i, qe),
        fe = K(i, He),
        de = ue(),
        pe = fe(),
        ge =
          ~t.indexOf('touch') &&
          !~t.indexOf('pointer') &&
          'pointerdown' === Be[0],
        he = A(i),
        ve = i.ownerDocument || Ce,
        be = [0, 0, 0],
        me = [0, 0, 0],
        ye = 0,
        xe = (se.onPress = function (e) {
          _e(e, 1) ||
            (e && e.button) ||
            ((se.axis = ae = null),
            te.pause(),
            (se.isPressed = !0),
            (e = M(e)),
            (le = ce = 0),
            (se.startX = se.x = e.clientX),
            (se.startY = se.y = e.clientY),
            se._vx.reset(),
            se._vy.reset(),
            B(Y ? i : ve, Be[1], ef, s, !0),
            (se.deltaX = se.deltaY = 0),
            v && v(se));
        }),
        we = (se.onRelease = function (t) {
          if (!_e(t, 1)) {
            C(Y ? i : ve, Be[1], ef, !0);
            var e = !isNaN(se.y - se.startY),
              r =
                se.isDragging &&
                (3 < Math.abs(se.x - se.startX) ||
                  3 < Math.abs(se.y - se.startY)),
              n = M(t);
            !r &&
              e &&
              (se._vx.reset(),
              se._vy.reset(),
              s &&
                Q &&
                Se.delayedCall(0.08, function () {
                  if (300 < Ye() - ye && !t.defaultPrevented)
                    if (t.target.click) t.target.click();
                    else if (ve.createEvent) {
                      var e = ve.createEvent('MouseEvents');
                      e.initMouseEvent(
                        'click',
                        !0,
                        !0,
                        Te,
                        1,
                        n.screenX,
                        n.screenY,
                        n.clientX,
                        n.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        t.target.dispatchEvent(e);
                    }
                })),
              (se.isDragging = se.isGesturing = se.isPressed = !1),
              l && !Y && te.restart(!0),
              g && r && g(se),
              b && b(se, r);
          }
        });
      (te = se._dc =
        Se.delayedCall(c || 0.25, function onStopFunc() {
          se._vx.reset(), se._vy.reset(), te.pause(), l && l(se);
        }).pause()),
        (se.deltaX = se.deltaY = 0),
        (se._vx = L(0, 50, !0)),
        (se._vy = L(0, 50, !0)),
        (se.scrollX = ue),
        (se.scrollY = fe),
        (se.isDragging = se.isGesturing = se.isPressed = !1),
        De(this),
        (se.enable = function (e) {
          return (
            se.isEnabled ||
              (B(he ? ve : i, 'scroll', F),
              0 <= t.indexOf('scroll') && B(he ? ve : i, 'scroll', kf, s, j),
              0 <= t.indexOf('wheel') && B(i, 'wheel', lf, s, j),
              ((0 <= t.indexOf('touch') && Ee) || 0 <= t.indexOf('pointer')) &&
                (B(i, Be[0], xe, s, j),
                B(ve, Be[2], we),
                B(ve, Be[3], we),
                Q && B(i, 'click', $e, !1, !0),
                V && B(i, 'click', pf),
                q && B(ve, 'gesturestart', hf),
                H && B(ve, 'gestureend', jf),
                R && B(i, Oe + 'enter', nf),
                D && B(i, Oe + 'leave', of),
                z && B(i, Oe + 'move', mf)),
              (se.isEnabled = !0),
              e && e.type && xe(e),
              W && W(se)),
            se
          );
        }),
        (se.disable = function () {
          se.isEnabled &&
            (Fe.filter(function (e) {
              return e !== se && A(e.target);
            }).length || C(he ? ve : i, 'scroll', F),
            se.isPressed &&
              (se._vx.reset(), se._vy.reset(), C(Y ? i : ve, Be[1], ef, !0)),
            C(he ? ve : i, 'scroll', kf, j),
            C(i, 'wheel', lf, j),
            C(i, Be[0], xe, j),
            C(ve, Be[2], we),
            C(ve, Be[3], we),
            C(i, 'click', $e, !0),
            C(i, 'click', pf),
            C(ve, 'gesturestart', hf),
            C(ve, 'gestureend', jf),
            C(i, Oe + 'enter', nf),
            C(i, Oe + 'leave', of),
            C(i, Oe + 'move', mf),
            (se.isEnabled = se.isPressed = se.isDragging = !1),
            G && G(se));
        }),
        (se.kill = se.revert =
          function () {
            se.disable();
            var e = Fe.indexOf(se);
            0 <= e && Fe.splice(e, 1), Re === se && (Re = 0);
          }),
        Fe.push(se),
        Y && A(i) && (Re = se),
        se.enable(d);
    }),
    (function _createClass(e, t, r) {
      return (
        t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
      );
    })(Observer, [
      {
        key: 'velocityX',
        get: function get() {
          return this._vx.getVelocity();
        },
      },
      {
        key: 'velocityY',
        get: function get() {
          return this._vy.getVelocity();
        },
      },
    ]),
    Observer);
  function Observer(e) {
    this.init(e);
  }
  (E.version = '3.12.2'),
    (E.create = function (e) {
      return new E(e);
    }),
    (E.register = P),
    (E.getAll = function () {
      return Fe.slice();
    }),
    (E.getById = function (t) {
      return Fe.filter(function (e) {
        return e.vars.id === t;
      })[0];
    }),
    r() && Se.registerPlugin(E);
  function Aa(e, t, r) {
    var n = ct(e) && ('clamp(' === e.substr(0, 6) || -1 < e.indexOf('max'));
    return (r['_' + t + 'Clamp'] = n) ? e.substr(6, e.length - 7) : e;
  }
  function Ba(e, t) {
    return !t || (ct(e) && 'clamp(' === e.substr(0, 6))
      ? e
      : 'clamp(' + e + ')';
  }
  function Da() {
    return (Ke = 1);
  }
  function Ea() {
    return (Ke = 0);
  }
  function Fa(e) {
    return e;
  }
  function Ga(e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  }
  function Ha() {
    return 'undefined' != typeof window;
  }
  function Ia() {
    return Le || (Ha() && (Le = window.gsap) && Le.registerPlugin && Le);
  }
  function Ja(e) {
    return !!~l.indexOf(e);
  }
  function Ka(e) {
    return (
      ('Height' === e ? S : Ne['inner' + e]) ||
      Je['client' + e] ||
      We['client' + e]
    );
  }
  function La(e) {
    return (
      z(e, 'getBoundingClientRect') ||
      (Ja(e)
        ? function () {
            return (Ot.width = Ne.innerWidth), (Ot.height = S), Ot;
          }
        : function () {
            return _t(e);
          })
    );
  }
  function Oa(e, t) {
    var r = t.s,
      n = t.d2,
      o = t.d,
      i = t.a;
    return Math.max(
      0,
      (r = 'scroll' + n) && (i = z(e, r))
        ? i() - La(e)()[o]
        : Ja(e)
          ? (Je[r] || We[r]) - Ka(n)
          : e[r] - e['offset' + n]
    );
  }
  function Pa(e, t) {
    for (var r = 0; r < g.length; r += 3)
      (t && !~t.indexOf(g[r + 1])) || e(g[r], g[r + 1], g[r + 2]);
  }
  function Ra(e) {
    return 'function' == typeof e;
  }
  function Sa(e) {
    return 'number' == typeof e;
  }
  function Ta(e) {
    return 'object' == typeof e;
  }
  function Ua(e, t, r) {
    return e && e.progress(t ? 0 : 1) && r && e.pause();
  }
  function Va(e, t) {
    if (e.enabled) {
      var r = t(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  }
  function kb(e) {
    return Ne.getComputedStyle(e);
  }
  function mb(e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  }
  function ob(e, t) {
    var r = t.d2;
    return e['offset' + r] || e['client' + r] || 0;
  }
  function pb(e) {
    var t,
      r = [],
      n = e.labels,
      o = e.duration();
    for (t in n) r.push(n[t] / o);
    return r;
  }
  function rb(o) {
    var i = Le.utils.snap(o),
      a =
        Array.isArray(o) &&
        o.slice(0).sort(function (e, t) {
          return e - t;
        });
    return a
      ? function (e, t, r) {
          var n;
          if ((void 0 === r && (r = 0.001), !t)) return i(e);
          if (0 < t) {
            for (e -= r, n = 0; n < a.length; n++) if (a[n] >= e) return a[n];
            return a[n - 1];
          }
          for (n = a.length, e += r; n--; ) if (a[n] <= e) return a[n];
          return a[0];
        }
      : function (e, t, r) {
          void 0 === r && (r = 0.001);
          var n = i(e);
          return !t || Math.abs(n - e) < r || n - e < 0 == t < 0
            ? n
            : i(t < 0 ? e - o : e + o);
        };
  }
  function tb(t, r, e, n) {
    return e.split(',').forEach(function (e) {
      return t(r, e, n);
    });
  }
  function ub(e, t, r, n, o) {
    return e.addEventListener(t, r, { passive: !n, capture: !!o });
  }
  function vb(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function wb(e, t, r) {
    (r = r && r.wheelHandler) && (e(t, 'wheel', r), e(t, 'touchmove', r));
  }
  function Ab(e, t) {
    if (ct(e)) {
      var r = e.indexOf('='),
        n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf('%') > r && (n *= t / 100), (e = e.substr(0, r - 1))),
        (e =
          n +
          (e in q
            ? q[e] * t
            : ~e.indexOf('%')
              ? (parseFloat(e) * t) / 100
              : parseFloat(e) || 0));
    }
    return e;
  }
  function Bb(e, t, r, n, o, i, a, s) {
    var l = o.startColor,
      c = o.endColor,
      u = o.fontSize,
      f = o.indent,
      d = o.fontWeight,
      p = Xe.createElement('div'),
      g = Ja(r) || 'fixed' === z(r, 'pinType'),
      h = -1 !== e.indexOf('scroller'),
      v = g ? We : r,
      b = -1 !== e.indexOf('start'),
      m = b ? l : c,
      y =
        'border-color:' +
        m +
        ';font-size:' +
        u +
        ';color:' +
        m +
        ';font-weight:' +
        d +
        ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;';
    return (
      (y += 'position:' + ((h || s) && g ? 'fixed;' : 'absolute;')),
      (!h && !s && g) ||
        (y += (n === He ? D : I) + ':' + (i + parseFloat(f)) + 'px;'),
      a &&
        (y +=
          'box-sizing:border-box;text-align:left;width:' +
          a.offsetWidth +
          'px;'),
      (p._isStart = b),
      p.setAttribute('class', 'gsap-marker-' + e + (t ? ' marker-' + t : '')),
      (p.style.cssText = y),
      (p.innerText = t || 0 === t ? e + '-' + t : e),
      v.children[0] ? v.insertBefore(p, v.children[0]) : v.appendChild(p),
      (p._offset = p['offset' + n.op.d2]),
      H(p, 0, n, b),
      p
    );
  }
  function Gb() {
    return 34 < at() - st && (k = k || requestAnimationFrame(Q));
  }
  function Hb() {
    (v && v.isPressed && !(v.startX > We.clientWidth)) ||
      (ze.cache++,
      v ? (k = k || requestAnimationFrame(Q)) : Q(),
      st || V('scrollStart'),
      (st = at()));
  }
  function Ib() {
    (y = Ne.innerWidth), (m = Ne.innerHeight);
  }
  function Jb() {
    ze.cache++,
      je ||
        h ||
        Xe.fullscreenElement ||
        Xe.webkitFullscreenElement ||
        (b &&
          y === Ne.innerWidth &&
          !(Math.abs(Ne.innerHeight - m) > 0.25 * Ne.innerHeight)) ||
        c.restart(!0);
  }
  function Mb() {
    return vb(re, 'scrollEnd', Mb) || Pt(!0);
  }
  function Pb(e) {
    for (var t = 0; t < U.length; t += 5)
      (!e || (U[t + 4] && U[t + 4].query === e)) &&
        ((U[t].style.cssText = U[t + 1]),
        U[t].getBBox && U[t].setAttribute('transform', U[t + 2] || ''),
        (U[t + 3].uncache = 1));
  }
  function Qb(e, t) {
    var r;
    for (Qe = 0; Qe < kt.length; Qe++)
      !(r = kt[Qe]) ||
        (t && r._ctx !== t) ||
        (e ? r.kill(1) : r.revert(!0, !0));
    t && Pb(t), t || V('revert');
  }
  function Rb(e, t) {
    ze.cache++,
      (!t && rt) ||
        ze.forEach(function (e) {
          return Ra(e) && e.cacheID++ && (e.rec = 0);
        }),
      ct(e) && (Ne.history.scrollRestoration = _ = e);
  }
  function Wb() {
    We.appendChild(w),
      (S = w.offsetHeight || Ne.innerHeight),
      We.removeChild(w);
  }
  function dc(e, t, r, n) {
    if (!e._gsap.swappedIn) {
      for (var o, i = $.length, a = t.style, s = e.style; i--; )
        a[(o = $[i])] = r[o];
      (a.position = 'absolute' === r.position ? 'absolute' : 'relative'),
        'inline' === r.display && (a.display = 'inline-block'),
        (s[I] = s[D] = 'auto'),
        (a.flexBasis = r.flexBasis || 'auto'),
        (a.overflow = 'visible'),
        (a.boxSizing = 'border-box'),
        (a[ft] = ob(e, qe) + xt),
        (a[dt] = ob(e, He) + xt),
        (a[bt] = s[mt] = s.top = s.left = '0'),
        Et(n),
        (s[ft] = s.maxWidth = r[ft]),
        (s[dt] = s.maxHeight = r[dt]),
        (s[bt] = r[bt]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  }
  function gc(e) {
    for (var t = Z.length, r = e.style, n = [], o = 0; o < t; o++)
      n.push(Z[o], r[Z[o]]);
    return (n.t = e), n;
  }
  function jc(e, t, r, n, o, i, a, s, l, c, u, f, d, p) {
    Ra(e) && (e = e(s)),
      ct(e) &&
        'max' === e.substr(0, 3) &&
        (e = f + ('=' === e.charAt(4) ? Ab('0' + e.substr(3), r) : 0));
    var g,
      h,
      v,
      b = d ? d.time() : 0;
    if ((d && d.seek(0), isNaN(e) || (e = +e), Sa(e)))
      d &&
        (e = Le.utils.mapRange(
          d.scrollTrigger.start,
          d.scrollTrigger.end,
          0,
          f,
          e
        )),
        a && H(a, r, n, !0);
    else {
      Ra(t) && (t = t(s));
      var m,
        y,
        x,
        _,
        w = (e || '0').split(' ');
      (v = J(t, s) || We),
        ((m = _t(v) || {}) && (m.left || m.top)) ||
          'none' !== kb(v).display ||
          ((_ = v.style.display),
          (v.style.display = 'block'),
          (m = _t(v)),
          _ ? (v.style.display = _) : v.style.removeProperty('display')),
        (y = Ab(w[0], m[n.d])),
        (x = Ab(w[1] || '0', r)),
        (e = m[n.p] - l[n.p] - c + y + o - x),
        a && H(a, x, n, r - x < 20 || (a._isStart && 20 < x)),
        (r -= r - x);
    }
    if ((p && ((s[p] = e || -0.001), e < 0 && (e = 0)), i)) {
      var S = e + r,
        k = i._isStart;
      (g = 'scroll' + n.d2),
        H(
          i,
          S,
          n,
          (k && 20 < S) ||
            (!k && (u ? Math.max(We[g], Je[g]) : i.parentNode[g]) <= S + 1)
        ),
        u &&
          ((l = _t(a)),
          u && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + xt));
    }
    return (
      d &&
        v &&
        ((g = _t(v)),
        d.seek(f),
        (h = _t(v)),
        (d._caScrollDist = g[n.p] - h[n.p]),
        (e = (e / d._caScrollDist) * f)),
      d && d.seek(b),
      d ? e : Math.round(e)
    );
  }
  function lc(e, t, r, n) {
    if (e.parentNode !== t) {
      var o,
        i,
        a = e.style;
      if (t === We) {
        for (o in ((e._stOrig = a.cssText), (i = kb(e))))
          +o ||
            te.test(o) ||
            !i[o] ||
            'string' != typeof a[o] ||
            '0' === o ||
            (a[o] = i[o]);
        (a.top = r), (a.left = n);
      } else a.cssText = e._stOrig;
      (Le.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  }
  function mc(r, e, n) {
    var o = e,
      i = o;
    return function (e) {
      var t = Math.round(r());
      return (
        t !== o &&
          t !== i &&
          3 < Math.abs(t - o) &&
          3 < Math.abs(t - i) &&
          ((e = t), n && n()),
        (i = o),
        (o = e)
      );
    };
  }
  function nc(e, t, r) {
    var n = {};
    (n[t.p] = '+=' + r), Le.set(e, n);
  }
  function oc(c, e) {
    function uk(e, t, r, n, o) {
      var i = uk.tween,
        a = t.onComplete,
        s = {};
      r = r || u();
      var l = mc(u, r, function () {
        i.kill(), (uk.tween = 0);
      });
      return (
        (o = (n && o) || 0),
        (n = n || e - r),
        i && i.kill(),
        (t[f] = e),
        ((t.modifiers = s)[f] = function () {
          return l(r + n * i.ratio + o * i.ratio * i.ratio);
        }),
        (t.onUpdate = function () {
          ze.cache++, Q();
        }),
        (t.onComplete = function () {
          (uk.tween = 0), a && a.call(i);
        }),
        (i = uk.tween = Le.to(c, t))
      );
    }
    var u = K(c, e),
      f = '_scroll' + e.p2;
    return (
      ((c[f] = u).wheelHandler = function () {
        return uk.tween && uk.tween.kill() && (uk.tween = 0);
      }),
      ub(c, 'wheel', u.wheelHandler),
      re.isTouch && ub(c, 'touchmove', u.wheelHandler),
      uk
    );
  }
  var Le,
    s,
    Ne,
    Xe,
    Je,
    We,
    l,
    c,
    Ge,
    Ve,
    Ue,
    u,
    je,
    Ke,
    f,
    Qe,
    d,
    p,
    g,
    Ze,
    et,
    h,
    v,
    b,
    m,
    y,
    R,
    x,
    _,
    w,
    S,
    tt,
    k,
    rt,
    nt,
    ot,
    it = 1,
    at = Date.now,
    T = at(),
    st = 0,
    lt = 0,
    ct = function _isString(e) {
      return 'string' == typeof e;
    },
    ut = Math.abs,
    D = 'right',
    I = 'bottom',
    ft = 'width',
    dt = 'height',
    pt = 'Right',
    gt = 'Left',
    ht = 'Top',
    vt = 'Bottom',
    bt = 'padding',
    mt = 'margin',
    yt = 'Width',
    Y = 'Height',
    xt = 'px',
    _t = function _getBounds(e, t) {
      var r =
          t &&
          'matrix(1, 0, 0, 1, 0, 0)' !== kb(e)[f] &&
          Le.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        n = e.getBoundingClientRect();
      return r && r.progress(0).kill(), n;
    },
    wt = {
      startColor: 'green',
      endColor: 'red',
      indent: 0,
      fontSize: '16px',
      fontWeight: 'normal',
    },
    St = { toggleActions: 'play', anticipatePin: 0 },
    q = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    H = function _positionMarker(e, t, r, n) {
      var o = { display: 'block' },
        i = r[n ? 'os2' : 'p2'],
        a = r[n ? 'p2' : 'os2'];
      (e._isFlipped = n),
        (o[r.a + 'Percent'] = n ? -100 : 0),
        (o[r.a] = n ? '1px' : 0),
        (o['border' + i + yt] = 1),
        (o['border' + a + yt] = 0),
        (o[r.p] = t + 'px'),
        Le.set(e, o);
    },
    kt = [],
    Tt = {},
    X = {},
    W = [],
    V = function _dispatch(e) {
      return (
        (X[e] &&
          X[e].map(function (e) {
            return e();
          })) ||
        W
      );
    },
    U = [],
    Ct = 0,
    Pt = function _refreshAll(e, t) {
      if (!st || e) {
        Wb(),
          (rt = re.isRefreshing = !0),
          ze.forEach(function (e) {
            return Ra(e) && ++e.cacheID && (e.rec = e());
          });
        var r = V('refreshInit');
        Ze && re.sort(),
          t || Qb(),
          ze.forEach(function (e) {
            Ra(e) &&
              (e.smooth && (e.target.style.scrollBehavior = 'auto'), e(0));
          }),
          kt.slice(0).forEach(function (e) {
            return e.refresh();
          }),
          kt.forEach(function (e, t) {
            if (e._subPinOffset && e.pin) {
              var r = e.vars.horizontal ? 'offsetWidth' : 'offsetHeight',
                n = e.pin[r];
              e.revert(!0, 1), e.adjustPinSpacing(e.pin[r] - n), e.refresh();
            }
          }),
          kt.forEach(function (e) {
            var t = Oa(e.scroller, e._dir);
            ('max' === e.vars.end || (e._endClamp && e.end > t)) &&
              e.setPositions(e.start, Math.max(e.start + 1, t), !0);
          }),
          r.forEach(function (e) {
            return e && e.render && e.render(-1);
          }),
          ze.forEach(function (e) {
            Ra(e) &&
              (e.smooth &&
                requestAnimationFrame(function () {
                  return (e.target.style.scrollBehavior = 'smooth');
                }),
              e.rec && e(e.rec));
          }),
          Rb(_, 1),
          c.pause(),
          Ct++,
          Q((rt = 2)),
          kt.forEach(function (e) {
            return Ra(e.vars.onRefresh) && e.vars.onRefresh(e);
          }),
          (rt = re.isRefreshing = !1),
          V('refresh');
      } else ub(re, 'scrollEnd', Mb);
    },
    j = 0,
    Mt = 1,
    Q = function _updateAll(e) {
      if (!rt || 2 === e) {
        (re.isUpdating = !0), ot && ot.update(0);
        var t = kt.length,
          r = at(),
          n = 50 <= r - T,
          o = t && kt[0].scroll();
        if (
          ((Mt = o < j ? -1 : 1),
          rt || (j = o),
          n &&
            (st && !Ke && 200 < r - st && ((st = 0), V('scrollEnd')),
            (Ue = T),
            (T = r)),
          Mt < 0)
        ) {
          for (Qe = t; 0 < Qe--; ) kt[Qe] && kt[Qe].update(0, n);
          Mt = 1;
        } else for (Qe = 0; Qe < t; Qe++) kt[Qe] && kt[Qe].update(0, n);
        re.isUpdating = !1;
      }
      k = 0;
    },
    $ = [
      'left',
      'top',
      I,
      D,
      mt + vt,
      mt + pt,
      mt + ht,
      mt + gt,
      'display',
      'flexShrink',
      'float',
      'zIndex',
      'gridColumnStart',
      'gridColumnEnd',
      'gridRowStart',
      'gridRowEnd',
      'gridArea',
      'justifySelf',
      'alignSelf',
      'placeSelf',
      'order',
    ],
    Z = $.concat([
      ft,
      dt,
      'boxSizing',
      'max' + yt,
      'max' + Y,
      'position',
      mt,
      bt,
      bt + ht,
      bt + pt,
      bt + vt,
      bt + gt,
    ]),
    ee = /([A-Z])/g,
    Et = function _setState(e) {
      if (e) {
        var t,
          r,
          n = e.t.style,
          o = e.length,
          i = 0;
        for ((e.t._gsap || Le.core.getCache(e.t)).uncache = 1; i < o; i += 2)
          (r = e[i + 1]),
            (t = e[i]),
            r
              ? (n[t] = r)
              : n[t] && n.removeProperty(t.replace(ee, '-$1').toLowerCase());
      }
    },
    Ot = { left: 0, top: 0 },
    te = /(webkit|moz|length|cssText|inset)/i,
    re =
      ((ScrollTrigger.prototype.init = function init(E, O) {
        if (
          ((this.progress = this.start = 0), this.vars && this.kill(!0, !0), lt)
        ) {
          var A,
            n,
            p,
            R,
            B,
            D,
            F,
            I,
            Y,
            q,
            H,
            e,
            L,
            N,
            X,
            W,
            G,
            V,
            t,
            U,
            b,
            j,
            Q,
            m,
            $,
            y,
            Z,
            x,
            r,
            _,
            w,
            ee,
            o,
            g,
            te,
            re,
            ne,
            S,
            i,
            k = (E = mb(ct(E) || Sa(E) || E.nodeType ? { trigger: E } : E, St))
              .onUpdate,
            T = E.toggleClass,
            a = E.id,
            C = E.onToggle,
            oe = E.onRefresh,
            P = E.scrub,
            ie = E.trigger,
            ae = E.pin,
            se = E.pinSpacing,
            le = E.invalidateOnRefresh,
            M = E.anticipatePin,
            s = E.onScrubComplete,
            h = E.onSnapComplete,
            ce = E.once,
            ue = E.snap,
            fe = E.pinReparent,
            l = E.pinSpacer,
            de = E.containerAnimation,
            pe = E.fastScrollEnd,
            ge = E.preventOverlaps,
            he =
              E.horizontal || (E.containerAnimation && !1 !== E.horizontal)
                ? qe
                : He,
            ve = !P && 0 !== P,
            be = J(E.scroller || Ne),
            c = Le.core.getCache(be),
            me = Ja(be),
            ye =
              'fixed' ===
              ('pinType' in E
                ? E.pinType
                : z(be, 'pinType') || (me && 'fixed')),
            xe = [E.onEnter, E.onLeave, E.onEnterBack, E.onLeaveBack],
            _e = ve && E.toggleActions.split(' '),
            we = 'markers' in E ? E.markers : St.markers,
            Se = me ? 0 : parseFloat(kb(be)['border' + he.p2 + yt]) || 0,
            ke = this,
            Te =
              E.onRefreshInit &&
              function () {
                return E.onRefreshInit(ke);
              },
            Ce = (function _getSizeFunc(e, t, r) {
              var n = r.d,
                o = r.d2,
                i = r.a;
              return (i = z(e, 'getBoundingClientRect'))
                ? function () {
                    return i()[n];
                  }
                : function () {
                    return (t ? Ka(o) : e['client' + o]) || 0;
                  };
            })(be, me, he),
            Pe = (function _getOffsetsFunc(e, t) {
              return !t || ~Ie.indexOf(e)
                ? La(e)
                : function () {
                    return Ot;
                  };
            })(be, me),
            Me = 0,
            Ee = 0,
            Oe = 0,
            Ae = K(be, he);
          if (
            ((ke._startClamp = ke._endClamp = !1),
            (ke._dir = he),
            (M *= 45),
            (ke.scroller = be),
            (ke.scroll = de ? de.time.bind(de) : Ae),
            (R = Ae()),
            (ke.vars = E),
            (O = O || E.animation),
            'refreshPriority' in E &&
              ((Ze = 1), -9999 === E.refreshPriority && (ot = ke)),
            (c.tweenScroll = c.tweenScroll || {
              top: oc(be, He),
              left: oc(be, qe),
            }),
            (ke.tweenTo = A = c.tweenScroll[he.p]),
            (ke.scrubDuration = function (e) {
              (o = Sa(e) && e)
                ? ee
                  ? ee.duration(e)
                  : (ee = Le.to(O, {
                      ease: 'expo',
                      totalProgress: '+=0',
                      duration: o,
                      paused: !0,
                      onComplete: function onComplete() {
                        return s && s(ke);
                      },
                    }))
                : (ee && ee.progress(1).kill(), (ee = 0));
            }),
            O &&
              ((O.vars.lazy = !1),
              (O._initted && !ke.isReverted) ||
                (!1 !== O.vars.immediateRender &&
                  !1 !== E.immediateRender &&
                  O.duration() &&
                  O.render(0, !0, !0)),
              (ke.animation = O.pause()),
              (O.scrollTrigger = ke).scrubDuration(P),
              (_ = 0),
              (a = a || O.vars.id)),
            ue &&
              ((Ta(ue) && !ue.push) || (ue = { snapTo: ue }),
              'scrollBehavior' in We.style &&
                Le.set(me ? [We, Je] : be, { scrollBehavior: 'auto' }),
              ze.forEach(function (e) {
                return (
                  Ra(e) &&
                  e.target === (me ? Xe.scrollingElement || Je : be) &&
                  (e.smooth = !1)
                );
              }),
              (p = Ra(ue.snapTo)
                ? ue.snapTo
                : 'labels' === ue.snapTo
                  ? (function _getClosestLabel(t) {
                      return function (e) {
                        return Le.utils.snap(pb(t), e);
                      };
                    })(O)
                  : 'labelsDirectional' === ue.snapTo
                    ? (function _getLabelAtDirection(r) {
                        return function (e, t) {
                          return rb(pb(r))(e, t.direction);
                        };
                      })(O)
                    : !1 !== ue.directional
                      ? function (e, t) {
                          return rb(ue.snapTo)(
                            e,
                            at() - Ee < 500 ? 0 : t.direction
                          );
                        }
                      : Le.utils.snap(ue.snapTo)),
              (g = ue.duration || { min: 0.1, max: 2 }),
              (g = Ta(g) ? Ve(g.min, g.max) : Ve(g, g)),
              (te = Le.delayedCall(ue.delay || o / 2 || 0.1, function () {
                var e = Ae(),
                  t = at() - Ee < 500,
                  r = A.tween;
                if (
                  !(t || Math.abs(ke.getVelocity()) < 10) ||
                  r ||
                  Ke ||
                  Me === e
                )
                  ke.isActive && Me !== e && te.restart(!0);
                else {
                  var n = (e - D) / N,
                    o = O && !ve ? O.totalProgress() : n,
                    i = t ? 0 : ((o - w) / (at() - Ue)) * 1e3 || 0,
                    a = Le.utils.clamp(-n, 1 - n, (ut(i / 2) * i) / 0.185),
                    s = n + (!1 === ue.inertia ? 0 : a),
                    l = Ve(0, 1, p(s, ke)),
                    c = Math.round(D + l * N),
                    u = ue.onStart,
                    f = ue.onInterrupt,
                    d = ue.onComplete;
                  if (e <= F && D <= e && c !== e) {
                    if (r && !r._initted && r.data <= ut(c - e)) return;
                    !1 === ue.inertia && (a = l - n),
                      A(
                        c,
                        {
                          duration: g(
                            ut(
                              (0.185 * Math.max(ut(s - o), ut(l - o))) /
                                i /
                                0.05 || 0
                            )
                          ),
                          ease: ue.ease || 'power3',
                          data: ut(c - e),
                          onInterrupt: function onInterrupt() {
                            return te.restart(!0) && f && f(ke);
                          },
                          onComplete: function onComplete() {
                            ke.update(),
                              (Me = Ae()),
                              (_ = w =
                                O && !ve ? O.totalProgress() : ke.progress),
                              h && h(ke),
                              d && d(ke);
                          },
                        },
                        e,
                        a * N,
                        c - e - a * N
                      ),
                      u && u(ke, A.tween);
                  }
                }
              }).pause())),
            a && (Tt[a] = ke),
            (i =
              (i =
                (ie = ke.trigger = J(ie || (!0 !== ae && ae))) &&
                ie._gsap &&
                ie._gsap.stRevert) && i(ke)),
            (ae = !0 === ae ? ie : J(ae)),
            ct(T) && (T = { targets: ie, className: T }),
            ae &&
              (!1 === se ||
                se === mt ||
                (se =
                  !(
                    !se &&
                    ae.parentNode &&
                    ae.parentNode.style &&
                    'flex' === kb(ae.parentNode).display
                  ) && bt),
              (ke.pin = ae),
              (n = Le.core.getCache(ae)).spacer
                ? (X = n.pinState)
                : (l &&
                    ((l = J(l)) &&
                      !l.nodeType &&
                      (l = l.current || l.nativeElement),
                    (n.spacerIsNative = !!l),
                    l && (n.spacerState = gc(l))),
                  (n.spacer = V = l || Xe.createElement('div')),
                  V.classList.add('pin-spacer'),
                  a && V.classList.add('pin-spacer-' + a),
                  (n.pinState = X = gc(ae))),
              !1 !== E.force3D && Le.set(ae, { force3D: !0 }),
              (ke.spacer = V = n.spacer),
              (r = kb(ae)),
              (m = r[se + he.os2]),
              (U = Le.getProperty(ae)),
              (b = Le.quickSetter(ae, he.a, xt)),
              dc(ae, V, r),
              (G = gc(ae))),
            we)
          ) {
            (e = Ta(we) ? mb(we, wt) : wt),
              (q = Bb('scroller-start', a, be, he, e, 0)),
              (H = Bb('scroller-end', a, be, he, e, 0, q)),
              (t = q['offset' + he.op.d2]);
            var u = J(z(be, 'content') || be);
            (I = this.markerStart = Bb('start', a, u, he, e, t, 0, de)),
              (Y = this.markerEnd = Bb('end', a, u, he, e, t, 0, de)),
              de && (S = Le.quickSetter([I, Y], he.a, xt)),
              ye ||
                (Ie.length && !0 === z(be, 'fixedMarkers')) ||
                ((function _makePositionable(e) {
                  var t = kb(e).position;
                  e.style.position =
                    'absolute' === t || 'fixed' === t ? t : 'relative';
                })(me ? We : be),
                Le.set([q, H], { force3D: !0 }),
                (y = Le.quickSetter(q, he.a, xt)),
                (x = Le.quickSetter(H, he.a, xt)));
          }
          if (de) {
            var f = de.vars.onUpdate,
              d = de.vars.onUpdateParams;
            de.eventCallback('onUpdate', function () {
              ke.update(0, 0, 1), f && f.apply(de, d || []);
            });
          }
          if (
            ((ke.previous = function () {
              return kt[kt.indexOf(ke) - 1];
            }),
            (ke.next = function () {
              return kt[kt.indexOf(ke) + 1];
            }),
            (ke.revert = function (e, t) {
              if (!t) return ke.kill(!0);
              var r = !1 !== e || !ke.enabled,
                n = je;
              r !== ke.isReverted &&
                (r &&
                  ((re = Math.max(Ae(), ke.scroll.rec || 0)),
                  (Oe = ke.progress),
                  (ne = O && O.progress())),
                I &&
                  [I, Y, q, H].forEach(function (e) {
                    return (e.style.display = r ? 'none' : 'block');
                  }),
                r && (je = ke).update(r),
                !ae ||
                  (fe && ke.isActive) ||
                  (r
                    ? (function _swapPinOut(e, t, r) {
                        Et(r);
                        var n = e._gsap;
                        if (n.spacerIsNative) Et(n.spacerState);
                        else if (e._gsap.swappedIn) {
                          var o = t.parentNode;
                          o && (o.insertBefore(e, t), o.removeChild(t));
                        }
                        e._gsap.swappedIn = !1;
                      })(ae, V, X)
                    : dc(ae, V, kb(ae), $)),
                r || ke.update(r),
                (je = n),
                (ke.isReverted = r));
            }),
            (ke.refresh = function (e, t, r, n) {
              if ((!je && ke.enabled) || t)
                if (ae && e && st) ub(ScrollTrigger, 'scrollEnd', Mb);
                else {
                  !rt && Te && Te(ke),
                    (je = ke),
                    A.tween && !r && (A.tween.kill(), (A.tween = 0)),
                    ee && ee.pause(),
                    le && O && O.revert({ kill: !1 }).invalidate(),
                    ke.isReverted || ke.revert(!0, !0),
                    (ke._subPinOffset = !1);
                  var o,
                    i,
                    a,
                    s,
                    l,
                    c,
                    u,
                    f,
                    d,
                    p,
                    g,
                    h,
                    v,
                    b = Ce(),
                    m = Pe(),
                    y = de ? de.duration() : Oa(be, he),
                    x = N <= 0.01,
                    _ = 0,
                    w = n || 0,
                    S = Ta(r) ? r.end : E.end,
                    k = E.endTrigger || ie,
                    T = Ta(r)
                      ? r.start
                      : E.start ||
                        (0 !== E.start && ie ? (ae ? '0 0' : '0 100%') : 0),
                    C = (ke.pinnedContainer =
                      E.pinnedContainer && J(E.pinnedContainer, ke)),
                    P = (ie && Math.max(0, kt.indexOf(ke))) || 0,
                    M = P;
                  for (
                    we &&
                    Ta(r) &&
                    ((h = Le.getProperty(q, he.p)),
                    (v = Le.getProperty(H, he.p)));
                    M--;

                  )
                    (c = kt[M]).end || c.refresh(0, 1) || (je = ke),
                      !(u = c.pin) ||
                        (u !== ie && u !== ae && u !== C) ||
                        c.isReverted ||
                        ((p = p || []).unshift(c), c.revert(!0, !0)),
                      c !== kt[M] && (P--, M--);
                  for (
                    Ra(T) && (T = T(ke)),
                      T = Aa(T, 'start', ke),
                      D =
                        jc(
                          T,
                          ie,
                          b,
                          he,
                          Ae(),
                          I,
                          q,
                          ke,
                          m,
                          Se,
                          ye,
                          y,
                          de,
                          ke._startClamp && '_startClamp'
                        ) || (ae ? -0.001 : 0),
                      Ra(S) && (S = S(ke)),
                      ct(S) &&
                        !S.indexOf('+=') &&
                        (~S.indexOf(' ')
                          ? (S = (ct(T) ? T.split(' ')[0] : '') + S)
                          : ((_ = Ab(S.substr(2), b)),
                            (S = ct(T)
                              ? T
                              : (de
                                  ? Le.utils.mapRange(
                                      0,
                                      de.duration(),
                                      de.scrollTrigger.start,
                                      de.scrollTrigger.end,
                                      D
                                    )
                                  : D) + _),
                            (k = ie))),
                      S = Aa(S, 'end', ke),
                      F =
                        Math.max(
                          D,
                          jc(
                            S || (k ? '100% 0' : y),
                            k,
                            b,
                            he,
                            Ae() + _,
                            Y,
                            H,
                            ke,
                            m,
                            Se,
                            ye,
                            y,
                            de,
                            ke._endClamp && '_endClamp'
                          )
                        ) || -0.001,
                      _ = 0,
                      M = P;
                    M--;

                  )
                    (u = (c = kt[M]).pin) &&
                      c.start - c._pinPush <= D &&
                      !de &&
                      0 < c.end &&
                      ((o =
                        c.end -
                        (ke._startClamp ? Math.max(0, c.start) : c.start)),
                      ((u === ie && c.start - c._pinPush < D) || u === C) &&
                        isNaN(T) &&
                        (_ += o * (1 - c.progress)),
                      u === ae && (w += o));
                  if (
                    ((D += _),
                    (F += _),
                    ke._startClamp && (ke._startClamp += _),
                    ke._endClamp &&
                      !rt &&
                      ((ke._endClamp = F || -0.001),
                      (F = Math.min(F, Oa(be, he)))),
                    (N = F - D || ((D -= 0.01) && 0.001)),
                    x &&
                      (Oe = Le.utils.clamp(0, 1, Le.utils.normalize(D, F, re))),
                    (ke._pinPush = w),
                    I &&
                      _ &&
                      (((o = {})[he.a] = '+=' + _),
                      C && (o[he.p] = '-=' + Ae()),
                      Le.set([I, Y], o)),
                    ae)
                  )
                    (o = kb(ae)),
                      (s = he === He),
                      (a = Ae()),
                      (j = parseFloat(U(he.a)) + w),
                      !y &&
                        1 < F &&
                        ((g = {
                          style: (g = (me ? Xe.scrollingElement || Je : be)
                            .style),
                          value: g['overflow' + he.a.toUpperCase()],
                        }),
                        me &&
                          'scroll' !==
                            kb(We)['overflow' + he.a.toUpperCase()] &&
                          (g.style['overflow' + he.a.toUpperCase()] =
                            'scroll')),
                      dc(ae, V, o),
                      (G = gc(ae)),
                      (i = _t(ae, !0)),
                      (f = ye && K(be, s ? qe : He)()),
                      se &&
                        ((($ = [se + he.os2, N + w + xt]).t = V),
                        (M = se === bt ? ob(ae, he) + N + w : 0) &&
                          $.push(he.d, M + xt),
                        Et($),
                        C &&
                          kt.forEach(function (e) {
                            e.pin === C &&
                              !1 !== e.vars.pinSpacing &&
                              (e._subPinOffset = !0);
                          }),
                        ye && Ae(re)),
                      ye &&
                        (((l = {
                          top: i.top + (s ? a - D : f) + xt,
                          left: i.left + (s ? f : a - D) + xt,
                          boxSizing: 'border-box',
                          position: 'fixed',
                        })[ft] = l.maxWidth =
                          Math.ceil(i.width) + xt),
                        (l[dt] = l.maxHeight = Math.ceil(i.height) + xt),
                        (l[mt] =
                          l[mt + ht] =
                          l[mt + pt] =
                          l[mt + vt] =
                          l[mt + gt] =
                            '0'),
                        (l[bt] = o[bt]),
                        (l[bt + ht] = o[bt + ht]),
                        (l[bt + pt] = o[bt + pt]),
                        (l[bt + vt] = o[bt + vt]),
                        (l[bt + gt] = o[bt + gt]),
                        (W = (function _copyState(e, t, r) {
                          for (
                            var n, o = [], i = e.length, a = r ? 8 : 0;
                            a < i;
                            a += 2
                          )
                            (n = e[a]), o.push(n, n in t ? t[n] : e[a + 1]);
                          return (o.t = e.t), o;
                        })(X, l, fe)),
                        rt && Ae(0)),
                      O
                        ? ((d = O._initted),
                          et(1),
                          O.render(O.duration(), !0, !0),
                          (Q = U(he.a) - j + N + w),
                          (Z = 1 < Math.abs(N - Q)),
                          ye && Z && W.splice(W.length - 2, 2),
                          O.render(0, !0, !0),
                          d || O.invalidate(!0),
                          O.parent || O.totalTime(O.totalTime()),
                          et(0))
                        : (Q = N),
                      g &&
                        (g.value
                          ? (g.style['overflow' + he.a.toUpperCase()] = g.value)
                          : g.style.removeProperty('overflow-' + he.a));
                  else if (ie && Ae() && !de)
                    for (i = ie.parentNode; i && i !== We; )
                      i._pinOffset &&
                        ((D -= i._pinOffset), (F -= i._pinOffset)),
                        (i = i.parentNode);
                  p &&
                    p.forEach(function (e) {
                      return e.revert(!1, !0);
                    }),
                    (ke.start = D),
                    (ke.end = F),
                    (R = B = rt ? re : Ae()),
                    de || rt || (R < re && Ae(re), (ke.scroll.rec = 0)),
                    ke.revert(!1, !0),
                    (Ee = at()),
                    te && ((Me = -1), te.restart(!0)),
                    (je = 0),
                    O &&
                      ve &&
                      (O._initted || ne) &&
                      O.progress() !== ne &&
                      O.progress(ne || 0, !0).render(O.time(), !0, !0),
                    (x || Oe !== ke.progress || de) &&
                      (O &&
                        !ve &&
                        O.totalProgress(
                          de && D < -0.001 && !Oe
                            ? Le.utils.normalize(D, F, 0)
                            : Oe,
                          !0
                        ),
                      (ke.progress = x || (R - D) / N === Oe ? 0 : Oe)),
                    ae && se && (V._pinOffset = Math.round(ke.progress * Q)),
                    ee && ee.invalidate(),
                    isNaN(h) ||
                      ((h -= Le.getProperty(q, he.p)),
                      (v -= Le.getProperty(H, he.p)),
                      nc(q, he, h),
                      nc(I, he, h - (n || 0)),
                      nc(H, he, v),
                      nc(Y, he, v - (n || 0))),
                    x && !rt && ke.update(),
                    !oe || rt || L || ((L = !0), oe(ke), (L = !1));
                }
            }),
            (ke.getVelocity = function () {
              return ((Ae() - B) / (at() - Ue)) * 1e3 || 0;
            }),
            (ke.endAnimation = function () {
              Ua(ke.callbackAnimation),
                O &&
                  (ee
                    ? ee.progress(1)
                    : O.paused()
                      ? ve || Ua(O, ke.direction < 0, 1)
                      : Ua(O, O.reversed()));
            }),
            (ke.labelToScroll = function (e) {
              return (
                (O &&
                  O.labels &&
                  (D || ke.refresh() || D) +
                    (O.labels[e] / O.duration()) * N) ||
                0
              );
            }),
            (ke.getTrailing = function (t) {
              var e = kt.indexOf(ke),
                r =
                  0 < ke.direction ? kt.slice(0, e).reverse() : kt.slice(e + 1);
              return (
                ct(t)
                  ? r.filter(function (e) {
                      return e.vars.preventOverlaps === t;
                    })
                  : r
              ).filter(function (e) {
                return 0 < ke.direction ? e.end <= D : e.start >= F;
              });
            }),
            (ke.update = function (e, t, r) {
              if (!de || r || e) {
                var n,
                  o,
                  i,
                  a,
                  s,
                  l,
                  c,
                  u = !0 === rt ? re : ke.scroll(),
                  f = e ? 0 : (u - D) / N,
                  d = f < 0 ? 0 : 1 < f ? 1 : f || 0,
                  p = ke.progress;
                if (
                  (t &&
                    ((B = R),
                    (R = de ? Ae() : u),
                    ue && ((w = _), (_ = O && !ve ? O.totalProgress() : d))),
                  M &&
                    !d &&
                    ae &&
                    !je &&
                    !it &&
                    st &&
                    D < u + ((u - B) / (at() - Ue)) * M &&
                    (d = 1e-4),
                  d !== p && ke.enabled)
                ) {
                  if (
                    ((a =
                      (s =
                        (n = ke.isActive = !!d && d < 1) != (!!p && p < 1)) ||
                      !!d != !!p),
                    (ke.direction = p < d ? 1 : -1),
                    (ke.progress = d),
                    a &&
                      !je &&
                      ((o = d && !p ? 0 : 1 === d ? 1 : 1 === p ? 2 : 3),
                      ve &&
                        ((i =
                          (!s && 'none' !== _e[o + 1] && _e[o + 1]) || _e[o]),
                        (c =
                          O && ('complete' === i || 'reset' === i || i in O)))),
                    ge &&
                      (s || c) &&
                      (c || P || !O) &&
                      (Ra(ge)
                        ? ge(ke)
                        : ke.getTrailing(ge).forEach(function (e) {
                            return e.endAnimation();
                          })),
                    ve ||
                      (!ee || je || it
                        ? O && O.totalProgress(d, !(!je || (!Ee && !e)))
                        : (ee._dp._time - ee._start !== ee._time &&
                            ee.render(ee._dp._time - ee._start),
                          ee.resetTo
                            ? ee.resetTo('totalProgress', d, O._tTime / O._tDur)
                            : ((ee.vars.totalProgress = d),
                              ee.invalidate().restart()))),
                    ae)
                  )
                    if ((e && se && (V.style[se + he.os2] = m), ye)) {
                      if (a) {
                        if (
                          ((l =
                            !e && p < d && u < F + 1 && u + 1 >= Oa(be, he)),
                          fe)
                        )
                          if (e || (!n && !l)) lc(ae, V);
                          else {
                            var g = _t(ae, !0),
                              h = u - D;
                            lc(
                              ae,
                              We,
                              g.top + (he === He ? h : 0) + xt,
                              g.left + (he === He ? 0 : h) + xt
                            );
                          }
                        Et(n || l ? W : G),
                          (Z && d < 1 && n) || b(j + (1 !== d || l ? 0 : Q));
                      }
                    } else b(Ga(j + Q * d));
                  !ue || A.tween || je || it || te.restart(!0),
                    T &&
                      (s || (ce && d && (d < 1 || !tt))) &&
                      Ge(T.targets).forEach(function (e) {
                        return e.classList[n || ce ? 'add' : 'remove'](
                          T.className
                        );
                      }),
                    !k || ve || e || k(ke),
                    a && !je
                      ? (ve &&
                          (c &&
                            ('complete' === i
                              ? O.pause().totalProgress(1)
                              : 'reset' === i
                                ? O.restart(!0).pause()
                                : 'restart' === i
                                  ? O.restart(!0)
                                  : O[i]()),
                          k && k(ke)),
                        (!s && tt) ||
                          (C && s && Va(ke, C),
                          xe[o] && Va(ke, xe[o]),
                          ce && (1 === d ? ke.kill(!1, 1) : (xe[o] = 0)),
                          s || (xe[(o = 1 === d ? 1 : 3)] && Va(ke, xe[o]))),
                        pe &&
                          !n &&
                          Math.abs(ke.getVelocity()) > (Sa(pe) ? pe : 2500) &&
                          (Ua(ke.callbackAnimation),
                          ee
                            ? ee.progress(1)
                            : Ua(O, 'reverse' === i ? 1 : !d, 1)))
                      : ve && k && !je && k(ke);
                }
                if (x) {
                  var v = de
                    ? (u / de.duration()) * (de._caScrollDist || 0)
                    : u;
                  y(v + (q._isFlipped ? 1 : 0)), x(v);
                }
                S && S((-u / de.duration()) * (de._caScrollDist || 0));
              }
            }),
            (ke.enable = function (e, t) {
              ke.enabled ||
                ((ke.enabled = !0),
                ub(be, 'resize', Jb),
                me || ub(be, 'scroll', Hb),
                Te && ub(ScrollTrigger, 'refreshInit', Te),
                !1 !== e && ((ke.progress = Oe = 0), (R = B = Me = Ae())),
                !1 !== t && ke.refresh());
            }),
            (ke.getTween = function (e) {
              return e && A ? A.tween : ee;
            }),
            (ke.setPositions = function (e, t, r, n) {
              if (de) {
                var o = de.scrollTrigger,
                  i = de.duration(),
                  a = o.end - o.start;
                (e = o.start + (a * e) / i), (t = o.start + (a * t) / i);
              }
              ke.refresh(
                !1,
                !1,
                {
                  start: Ba(e, r && !!ke._startClamp),
                  end: Ba(t, r && !!ke._endClamp),
                },
                n
              ),
                ke.update();
            }),
            (ke.adjustPinSpacing = function (e) {
              if ($ && e) {
                var t = $.indexOf(he.d) + 1;
                ($[t] = parseFloat($[t]) + e + xt),
                  ($[1] = parseFloat($[1]) + e + xt),
                  Et($);
              }
            }),
            (ke.disable = function (e, t) {
              if (
                ke.enabled &&
                (!1 !== e && ke.revert(!0, !0),
                (ke.enabled = ke.isActive = !1),
                t || (ee && ee.pause()),
                (re = 0),
                n && (n.uncache = 1),
                Te && vb(ScrollTrigger, 'refreshInit', Te),
                te && (te.pause(), A.tween && A.tween.kill() && (A.tween = 0)),
                !me)
              ) {
                for (var r = kt.length; r--; )
                  if (kt[r].scroller === be && kt[r] !== ke) return;
                vb(be, 'resize', Jb), me || vb(be, 'scroll', Hb);
              }
            }),
            (ke.kill = function (e, t) {
              ke.disable(e, t), ee && !t && ee.kill(), a && delete Tt[a];
              var r = kt.indexOf(ke);
              0 <= r && kt.splice(r, 1),
                r === Qe && 0 < Mt && Qe--,
                (r = 0),
                kt.forEach(function (e) {
                  return e.scroller === ke.scroller && (r = 1);
                }),
                r || rt || (ke.scroll.rec = 0),
                O &&
                  ((O.scrollTrigger = null),
                  e && O.revert({ kill: !1 }),
                  t || O.kill()),
                I &&
                  [I, Y, q, H].forEach(function (e) {
                    return e.parentNode && e.parentNode.removeChild(e);
                  }),
                ot === ke && (ot = 0),
                ae &&
                  (n && (n.uncache = 1),
                  (r = 0),
                  kt.forEach(function (e) {
                    return e.pin === ae && r++;
                  }),
                  r || (n.spacer = 0)),
                E.onKill && E.onKill(ke);
            }),
            kt.push(ke),
            ke.enable(!1, !1),
            i && i(ke),
            O && O.add && !N)
          ) {
            var v = ke.update;
            (ke.update = function () {
              (ke.update = v), D || F || ke.refresh();
            }),
              Le.delayedCall(0.01, ke.update),
              (N = 0.01),
              (D = F = 0);
          } else ke.refresh();
          ae &&
            (function _queueRefreshAll() {
              if (nt !== Ct) {
                var e = (nt = Ct);
                requestAnimationFrame(function () {
                  return e === Ct && Pt(!0);
                });
              }
            })();
        } else this.update = this.refresh = this.kill = Fa;
      }),
      (ScrollTrigger.register = function register(e) {
        return (
          s ||
            ((Le = e || Ia()),
            Ha() && window.document && ScrollTrigger.enable(),
            (s = lt)),
          s
        );
      }),
      (ScrollTrigger.defaults = function defaults(e) {
        if (e) for (var t in e) St[t] = e[t];
        return St;
      }),
      (ScrollTrigger.disable = function disable(t, r) {
        (lt = 0),
          kt.forEach(function (e) {
            return e[r ? 'kill' : 'disable'](t);
          }),
          vb(Ne, 'wheel', Hb),
          vb(Xe, 'scroll', Hb),
          clearInterval(u),
          vb(Xe, 'touchcancel', Fa),
          vb(We, 'touchstart', Fa),
          tb(vb, Xe, 'pointerdown,touchstart,mousedown', Da),
          tb(vb, Xe, 'pointerup,touchend,mouseup', Ea),
          c.kill(),
          Pa(vb);
        for (var e = 0; e < ze.length; e += 3)
          wb(vb, ze[e], ze[e + 1]), wb(vb, ze[e], ze[e + 2]);
      }),
      (ScrollTrigger.enable = function enable() {
        if (
          ((Ne = window),
          (Xe = document),
          (Je = Xe.documentElement),
          (We = Xe.body),
          Le &&
            ((Ge = Le.utils.toArray),
            (Ve = Le.utils.clamp),
            (x = Le.core.context || Fa),
            (et = Le.core.suppressOverwrites || Fa),
            (_ = Ne.history.scrollRestoration || 'auto'),
            (j = Ne.pageYOffset),
            Le.core.globals('ScrollTrigger', ScrollTrigger),
            We))
        ) {
          (lt = 1),
            ((w = document.createElement('div')).style.height = '100vh'),
            (w.style.position = 'absolute'),
            Wb(),
            (function _rafBugFix() {
              return lt && requestAnimationFrame(_rafBugFix);
            })(),
            E.register(Le),
            (ScrollTrigger.isTouch = E.isTouch),
            (R =
              E.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            ub(Ne, 'wheel', Hb),
            (l = [Ne, Xe, Je, We]),
            Le.matchMedia
              ? ((ScrollTrigger.matchMedia = function (e) {
                  var t,
                    r = Le.matchMedia();
                  for (t in e) r.add(t, e[t]);
                  return r;
                }),
                Le.addEventListener('matchMediaInit', function () {
                  return Qb();
                }),
                Le.addEventListener('matchMediaRevert', function () {
                  return Pb();
                }),
                Le.addEventListener('matchMedia', function () {
                  Pt(0, 1), V('matchMedia');
                }),
                Le.matchMedia('(orientation: portrait)', function () {
                  return Ib(), Ib;
                }))
              : console.warn('Requires GSAP 3.11.0 or later'),
            Ib(),
            ub(Xe, 'scroll', Hb);
          var e,
            t,
            r = We.style,
            n = r.borderTopStyle,
            o = Le.core.Animation.prototype;
          for (
            o.revert ||
              Object.defineProperty(o, 'revert', {
                value: function value() {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = 'solid',
              e = _t(We),
              He.m = Math.round(e.top + He.sc()) || 0,
              qe.m = Math.round(e.left + qe.sc()) || 0,
              n ? (r.borderTopStyle = n) : r.removeProperty('border-top-style'),
              u = setInterval(Gb, 250),
              Le.delayedCall(0.5, function () {
                return (it = 0);
              }),
              ub(Xe, 'touchcancel', Fa),
              ub(We, 'touchstart', Fa),
              tb(ub, Xe, 'pointerdown,touchstart,mousedown', Da),
              tb(ub, Xe, 'pointerup,touchend,mouseup', Ea),
              f = Le.utils.checkPrefix('transform'),
              Z.push(f),
              s = at(),
              c = Le.delayedCall(0.2, Pt).pause(),
              g = [
                Xe,
                'visibilitychange',
                function () {
                  var e = Ne.innerWidth,
                    t = Ne.innerHeight;
                  Xe.hidden ? ((d = e), (p = t)) : (d === e && p === t) || Jb();
                },
                Xe,
                'DOMContentLoaded',
                Pt,
                Ne,
                'load',
                Pt,
                Ne,
                'resize',
                Jb,
              ],
              Pa(ub),
              kt.forEach(function (e) {
                return e.enable(0, 1);
              }),
              t = 0;
            t < ze.length;
            t += 3
          )
            wb(vb, ze[t], ze[t + 1]), wb(vb, ze[t], ze[t + 2]);
        }
      }),
      (ScrollTrigger.config = function config(e) {
        'limitCallbacks' in e && (tt = !!e.limitCallbacks);
        var t = e.syncInterval;
        (t && clearInterval(u)) || ((u = t) && setInterval(Gb, t)),
          'ignoreMobileResize' in e &&
            (b = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize),
          'autoRefreshEvents' in e &&
            (Pa(vb) || Pa(ub, e.autoRefreshEvents || 'none'),
            (h = -1 === (e.autoRefreshEvents + '').indexOf('resize')));
      }),
      (ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
        var r = J(e),
          n = ze.indexOf(r),
          o = Ja(r);
        ~n && ze.splice(n, o ? 6 : 2),
          t && (o ? Ie.unshift(Ne, t, We, t, Je, t) : Ie.unshift(r, t));
      }),
      (ScrollTrigger.clearMatchMedia = function clearMatchMedia(t) {
        kt.forEach(function (e) {
          return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
        });
      }),
      (ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
        var n = (ct(e) ? J(e) : e).getBoundingClientRect(),
          o = n[r ? ft : dt] * t || 0;
        return r
          ? 0 < n.right - o && n.left + o < Ne.innerWidth
          : 0 < n.bottom - o && n.top + o < Ne.innerHeight;
      }),
      (ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
        ct(e) && (e = J(e));
        var n = e.getBoundingClientRect(),
          o = n[r ? ft : dt],
          i =
            null == t
              ? o / 2
              : t in q
                ? q[t] * o
                : ~t.indexOf('%')
                  ? (parseFloat(t) * o) / 100
                  : parseFloat(t) || 0;
        return r ? (n.left + i) / Ne.innerWidth : (n.top + i) / Ne.innerHeight;
      }),
      (ScrollTrigger.killAll = function killAll(e) {
        if (
          (kt.slice(0).forEach(function (e) {
            return 'ScrollSmoother' !== e.vars.id && e.kill();
          }),
          !0 !== e)
        ) {
          var t = X.killAll || [];
          (X = {}),
            t.forEach(function (e) {
              return e();
            });
        }
      }),
      ScrollTrigger);
  function ScrollTrigger(e, t) {
    s ||
      ScrollTrigger.register(Le) ||
      console.warn('Please gsap.registerPlugin(ScrollTrigger)'),
      x(this),
      this.init(e, t);
  }
  (re.version = '3.12.2'),
    (re.saveStyles = function (e) {
      return e
        ? Ge(e).forEach(function (e) {
            if (e && e.style) {
              var t = U.indexOf(e);
              0 <= t && U.splice(t, 5),
                U.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute('transform'),
                  Le.core.getCache(e),
                  x()
                );
            }
          })
        : U;
    }),
    (re.revert = function (e, t) {
      return Qb(!e, t);
    }),
    (re.create = function (e, t) {
      return new re(e, t);
    }),
    (re.refresh = function (e) {
      return e ? Jb() : (s || re.register()) && Pt(!0);
    }),
    (re.update = function (e) {
      return ++ze.cache && Q(!0 === e ? 2 : 0);
    }),
    (re.clearScrollMemory = Rb),
    (re.maxScroll = function (e, t) {
      return Oa(e, t ? qe : He);
    }),
    (re.getScrollFunc = function (e, t) {
      return K(J(e), t ? qe : He);
    }),
    (re.getById = function (e) {
      return Tt[e];
    }),
    (re.getAll = function () {
      return kt.filter(function (e) {
        return 'ScrollSmoother' !== e.vars.id;
      });
    }),
    (re.isScrolling = function () {
      return !!st;
    }),
    (re.snapDirectional = rb),
    (re.addEventListener = function (e, t) {
      var r = X[e] || (X[e] = []);
      ~r.indexOf(t) || r.push(t);
    }),
    (re.removeEventListener = function (e, t) {
      var r = X[e],
        n = r && r.indexOf(t);
      0 <= n && r.splice(n, 1);
    }),
    (re.batch = function (e, t) {
      function up(e, t) {
        var r = [],
          n = [],
          o = Le.delayedCall(i, function () {
            t(r, n), (r = []), (n = []);
          }).pause();
        return function (e) {
          r.length || o.restart(!0),
            r.push(e.trigger),
            n.push(e),
            a <= r.length && o.progress(1);
        };
      }
      var r,
        n = [],
        o = {},
        i = t.interval || 0.016,
        a = t.batchMax || 1e9;
      for (r in t)
        o[r] =
          'on' === r.substr(0, 2) && Ra(t[r]) && 'onRefreshInit' !== r
            ? up(0, t[r])
            : t[r];
      return (
        Ra(a) &&
          ((a = a()),
          ub(re, 'refresh', function () {
            return (a = t.batchMax());
          })),
        Ge(e).forEach(function (e) {
          var t = {};
          for (r in o) t[r] = o[r];
          (t.trigger = e), n.push(re.create(t));
        }),
        n
      );
    });
  function qc(e, t, r, n) {
    return (
      n < t ? e(n) : t < 0 && e(0),
      n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
    );
  }
  function rc(e, t) {
    !0 === t
      ? e.style.removeProperty('touch-action')
      : (e.style.touchAction =
          !0 === t
            ? 'auto'
            : t
              ? 'pan-' + t + (E.isTouch ? ' pinch-zoom' : '')
              : 'none'),
      e === Je && rc(We, t);
  }
  function tc(e) {
    var t,
      r = e.event,
      n = e.target,
      o = e.axis,
      i = (r.changedTouches ? r.changedTouches[0] : r).target,
      a = i._gsap || Le.core.getCache(i),
      s = at();
    if (!a._isScrollT || 2e3 < s - a._isScrollT) {
      for (
        ;
        i &&
        i !== We &&
        ((i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth) ||
          (!oe[(t = kb(i)).overflowY] && !oe[t.overflowX]));

      )
        i = i.parentNode;
      (a._isScroll =
        i &&
        i !== n &&
        !Ja(i) &&
        (oe[(t = kb(i)).overflowY] || oe[t.overflowX])),
        (a._isScrollT = s);
    }
    (!a._isScroll && 'x' !== o) || (r.stopPropagation(), (r._gsapAllow = !0));
  }
  function uc(e, t, r, n) {
    return E.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (n = n && tc),
      onPress: n,
      onDrag: n,
      onScroll: n,
      onEnable: function onEnable() {
        return r && ub(Xe, E.eventTypes[0], ae, !1, !0);
      },
      onDisable: function onDisable() {
        return vb(Xe, E.eventTypes[0], ae, !0);
      },
    });
  }
  function yc(e) {
    function rq() {
      return (o = !1);
    }
    function uq() {
      (i = Oa(p, He)),
        (T = Ve(R ? 1 : 0, i)),
        f && (k = Ve(0, Oa(p, qe))),
        (l = Ct);
    }
    function vq() {
      (v._gsap.y = Ga(parseFloat(v._gsap.y) + b.offset) + 'px'),
        (v.style.transform =
          'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
          parseFloat(v._gsap.y) +
          ', 0, 1)'),
        (b.offset = b.cacheID = 0);
    }
    function Bq() {
      uq(),
        a.isActive() &&
          a.vars.scrollY > i &&
          (b() > i ? a.progress(1) && b(i) : a.resetTo('scrollY', i));
    }
    Ta(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = 'wheel,touch'),
      (e.debounce = !!e.debounce),
      (e.id = e.id || 'normalizer');
    var n,
      i,
      l,
      o,
      a,
      c,
      u,
      s,
      f = e.normalizeScrollX,
      t = e.momentum,
      r = e.allowNestedScroll,
      d = e.onRelease,
      p = J(e.target) || Je,
      g = Le.core.globals().ScrollSmoother,
      h = g && g.get(),
      v =
        R &&
        ((e.content && J(e.content)) ||
          (h && !1 !== e.content && !h.smooth() && h.content())),
      b = K(p, He),
      m = K(p, qe),
      y = 1,
      x =
        (E.isTouch && Ne.visualViewport
          ? Ne.visualViewport.scale * Ne.visualViewport.width
          : Ne.outerWidth) / Ne.innerWidth,
      _ = 0,
      w = Ra(t)
        ? function () {
            return t(n);
          }
        : function () {
            return t || 2.8;
          },
      S = uc(p, e.type, !0, r),
      k = Fa,
      T = Fa;
    return (
      v && Le.set(v, { y: '+=0' }),
      (e.ignoreCheck = function (e) {
        return (
          (R &&
            'touchmove' === e.type &&
            (function ignoreDrag() {
              if (o) {
                requestAnimationFrame(rq);
                var e = Ga(n.deltaY / 2),
                  t = T(b.v - e);
                if (v && t !== b.v + b.offset) {
                  b.offset = t - b.v;
                  var r = Ga((parseFloat(v && v._gsap.y) || 0) - b.offset);
                  (v.style.transform =
                    'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
                    r +
                    ', 0, 1)'),
                    (v._gsap.y = r + 'px'),
                    (b.cacheID = ze.cache),
                    Q();
                }
                return !0;
              }
              b.offset && vq(), (o = !0);
            })()) ||
          (1.05 < y && 'touchstart' !== e.type) ||
          n.isGesturing ||
          (e.touches && 1 < e.touches.length)
        );
      }),
      (e.onPress = function () {
        o = !1;
        var e = y;
        (y = Ga(((Ne.visualViewport && Ne.visualViewport.scale) || 1) / x)),
          a.pause(),
          e !== y && rc(p, 1.01 < y || (!f && 'x')),
          (c = m()),
          (u = b()),
          uq(),
          (l = Ct);
      }),
      (e.onRelease = e.onGestureStart =
        function (e, t) {
          if ((b.offset && vq(), t)) {
            ze.cache++;
            var r,
              n,
              o = w();
            f &&
              ((n = (r = m()) + (0.05 * o * -e.velocityX) / 0.227),
              (o *= qc(m, r, n, Oa(p, qe))),
              (a.vars.scrollX = k(n))),
              (n = (r = b()) + (0.05 * o * -e.velocityY) / 0.227),
              (o *= qc(b, r, n, Oa(p, He))),
              (a.vars.scrollY = T(n)),
              a.invalidate().duration(o).play(0.01),
              ((R && a.vars.scrollY >= i) || i - 1 <= r) &&
                Le.to({}, { onUpdate: Bq, duration: o });
          } else s.restart(!0);
          d && d(e);
        }),
      (e.onWheel = function () {
        a._ts && a.pause(), 1e3 < at() - _ && ((l = 0), (_ = at()));
      }),
      (e.onChange = function (e, t, r, n, o) {
        if (
          (Ct !== l && uq(),
          t && f && m(k(n[2] === t ? c + (e.startX - e.x) : m() + t - n[1])),
          r)
        ) {
          b.offset && vq();
          var i = o[2] === r,
            a = i ? u + e.startY - e.y : b() + r - o[1],
            s = T(a);
          i && a !== s && (u += s - a), b(s);
        }
        (r || t) && Q();
      }),
      (e.onEnable = function () {
        rc(p, !f && 'x'),
          re.addEventListener('refresh', Bq),
          ub(Ne, 'resize', Bq),
          b.smooth &&
            ((b.target.style.scrollBehavior = 'auto'),
            (b.smooth = m.smooth = !1)),
          S.enable();
      }),
      (e.onDisable = function () {
        rc(p, !0),
          vb(Ne, 'resize', Bq),
          re.removeEventListener('refresh', Bq),
          S.kill();
      }),
      (e.lockAxis = !1 !== e.lockAxis),
      ((n = new E(e)).iOS = R) && !b() && b(1),
      R && Le.ticker.add(Fa),
      (s = n._dc),
      (a = Le.to(n, {
        ease: 'power4',
        paused: !0,
        scrollX: f ? '+=0.1' : '+=0',
        scrollY: '+=0.1',
        modifiers: {
          scrollY: mc(b, b(), function () {
            return a.pause();
          }),
        },
        onUpdate: Q,
        onComplete: s.vars.onComplete,
      })),
      n
    );
  }
  var ne,
    oe = { auto: 1, scroll: 1 },
    ie = /(input|label|select|textarea)/i,
    ae = function _captureInputs(e) {
      var t = ie.test(e.target.tagName);
      (t || ne) && ((e._gsapAllow = !0), (ne = t));
    };
  (re.sort = function (e) {
    return kt.sort(
      e ||
        function (e, t) {
          return (
            -1e6 * (e.vars.refreshPriority || 0) +
            e.start -
            (t.start + -1e6 * (t.vars.refreshPriority || 0))
          );
        }
    );
  }),
    (re.observe = function (e) {
      return new E(e);
    }),
    (re.normalizeScroll = function (e) {
      if (void 0 === e) return v;
      if (!0 === e && v) return v.enable();
      if (!1 === e) return v && v.kill();
      var t = e instanceof E ? e : yc(e);
      return v && v.target === t.target && v.kill(), Ja(t.target) && (v = t), t;
    }),
    (re.core = {
      _getVelocityProp: L,
      _inputObserver: uc,
      _scrollers: ze,
      _proxies: Ie,
      bridge: {
        ss: function ss() {
          st || V('scrollStart'), (st = at());
        },
        ref: function ref() {
          return je;
        },
      },
    }),
    Ia() && Le.registerPlugin(re),
    (e.ScrollTrigger = re),
    (e.default = re);
  if (typeof window === 'undefined' || window !== e) {
    Object.defineProperty(e, '__esModule', { value: !0 });
  } else {
    delete e.default;
  }
});
/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
      ? define(['exports'], t)
      : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  'use strict';
  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        'value' in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function r() {
    return (
      Se ||
      ('undefined' != typeof window &&
        (Se = window.gsap) &&
        Se.registerPlugin &&
        Se)
    );
  }
  function z(e, t) {
    return ~Ie.indexOf(e) && Ie[Ie.indexOf(e) + 1][t];
  }
  function A(e) {
    return !!~t.indexOf(e);
  }
  function B(e, t, r, n, o) {
    return e.addEventListener(t, r, { passive: !n, capture: !!o });
  }
  function C(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function F() {
    return (Re && Re.isPressed) || ze.cache++;
  }
  function G(r, n) {
    function ad(e) {
      if (e || 0 === e) {
        o && (Te.history.scrollRestoration = 'manual');
        var t = Re && Re.isPressed;
        (e = ad.v = Math.round(e) || (Re && Re.iOS ? 1 : 0)),
          r(e),
          (ad.cacheID = ze.cache),
          t && i('ss', e);
      } else
        (n || ze.cache !== ad.cacheID || i('ref')) &&
          ((ad.cacheID = ze.cache), (ad.v = r()));
      return ad.v + ad.offset;
    }
    return (ad.offset = 0), r && ad;
  }
  function J(e, t) {
    return (
      ((t && t._ctx && t._ctx.selector) || Se.utils.toArray)(e)[0] ||
      ('string' == typeof e && !1 !== Se.config().nullTargetWarn
        ? console.warn('Element not found:', e)
        : null)
    );
  }
  function K(t, e) {
    var r = e.s,
      n = e.sc;
    A(t) && (t = Ce.scrollingElement || Pe);
    var o = ze.indexOf(t),
      i = n === He.sc ? 1 : 2;
    ~o || (o = ze.push(t) - 1), ze[o + i] || B(t, 'scroll', F);
    var a = ze[o + i],
      s =
        a ||
        (ze[o + i] =
          G(z(t, r), !0) ||
          (A(t)
            ? n
            : G(function (e) {
                return arguments.length ? (t[r] = e) : t[r];
              })));
    return (
      (s.target = t),
      a || (s.smooth = 'smooth' === Se.getProperty(t, 'scrollBehavior')),
      s
    );
  }
  function L(e, t, o) {
    function zd(e, t) {
      var r = Ye();
      t || n < r - s
        ? ((a = i), (i = e), (l = s), (s = r))
        : o
          ? (i += e)
          : (i = a + ((e - a) / (r - l)) * (s - l));
    }
    var i = e,
      a = e,
      s = Ye(),
      l = s,
      n = t || 50,
      c = Math.max(500, 3 * n);
    return {
      update: zd,
      reset: function reset() {
        (a = i = o ? 0 : i), (l = s = 0);
      },
      getVelocity: function getVelocity(e) {
        var t = l,
          r = a,
          n = Ye();
        return (
          (!e && 0 !== e) || e === i || zd(e),
          s === l || c < n - l
            ? 0
            : ((i + (o ? r : -r)) / ((o ? n : s) - t)) * 1e3
        );
      },
    };
  }
  function M(e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  }
  function N(e) {
    var t = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(r) ? t : r;
  }
  function O() {
    (Ae = Se.core.globals().ScrollTrigger) &&
      Ae.core &&
      (function _integrate() {
        var e = Ae.core,
          r = e.bridge || {},
          t = e._scrollers,
          n = e._proxies;
        t.push.apply(t, ze),
          n.push.apply(n, Ie),
          (ze = t),
          (Ie = n),
          (i = function _bridge(e, t) {
            return r[e](t);
          });
      })();
  }
  function P(e) {
    return (
      (Se = e || r()) &&
        'undefined' != typeof document &&
        document.body &&
        ((Te = window),
        (Pe = (Ce = document).documentElement),
        (Me = Ce.body),
        (t = [Te, Ce, Pe, Me]),
        Se.utils.clamp,
        (De = Se.core.context || function () {}),
        (Oe = 'onpointerenter' in Me ? 'pointer' : 'mouse'),
        (Ee = E.isTouch =
          Te.matchMedia &&
          Te.matchMedia('(hover: none), (pointer: coarse)').matches
            ? 1
            : 'ontouchstart' in Te ||
                0 < navigator.maxTouchPoints ||
                0 < navigator.msMaxTouchPoints
              ? 2
              : 0),
        (Be = E.eventTypes =
          (
            'ontouchstart' in Pe
              ? 'touchstart,touchmove,touchcancel,touchend'
              : 'onpointerdown' in Pe
                ? 'pointerdown,pointermove,pointercancel,pointerup'
                : 'mousedown,mousemove,mouseup,mouseup'
          ).split(',')),
        setTimeout(function () {
          return (o = 0);
        }, 500),
        O(),
        (ke = 1)),
      ke
    );
  }
  var Se,
    ke,
    Te,
    Ce,
    Pe,
    Me,
    Ee,
    Oe,
    Ae,
    t,
    Re,
    Be,
    De,
    o = 1,
    Fe = [],
    ze = [],
    Ie = [],
    Ye = Date.now,
    i = function _bridge(e, t) {
      return t;
    },
    n = 'scrollLeft',
    a = 'scrollTop',
    qe = {
      s: n,
      p: 'left',
      p2: 'Left',
      os: 'right',
      os2: 'Right',
      d: 'width',
      d2: 'Width',
      a: 'x',
      sc: G(function (e) {
        return arguments.length
          ? Te.scrollTo(e, He.sc())
          : Te.pageXOffset || Ce[n] || Pe[n] || Me[n] || 0;
      }),
    },
    He = {
      s: a,
      p: 'top',
      p2: 'Top',
      os: 'bottom',
      os2: 'Bottom',
      d: 'height',
      d2: 'Height',
      a: 'y',
      op: qe,
      sc: G(function (e) {
        return arguments.length
          ? Te.scrollTo(qe.sc(), e)
          : Te.pageYOffset || Ce[a] || Pe[a] || Me[a] || 0;
      }),
    };
  (qe.op = He), (ze.cache = 0);
  var E =
    ((Observer.prototype.init = function init(e) {
      ke || P(Se) || console.warn('Please gsap.registerPlugin(Observer)'),
        Ae || O();
      var o = e.tolerance,
        a = e.dragMinimum,
        t = e.type,
        i = e.target,
        r = e.lineHeight,
        n = e.debounce,
        s = e.preventDefault,
        l = e.onStop,
        c = e.onStopDelay,
        u = e.ignore,
        f = e.wheelSpeed,
        d = e.event,
        p = e.onDragStart,
        g = e.onDragEnd,
        h = e.onDrag,
        v = e.onPress,
        b = e.onRelease,
        m = e.onRight,
        y = e.onLeft,
        x = e.onUp,
        _ = e.onDown,
        w = e.onChangeX,
        S = e.onChangeY,
        k = e.onChange,
        T = e.onToggleX,
        E = e.onToggleY,
        R = e.onHover,
        D = e.onHoverEnd,
        z = e.onMove,
        I = e.ignoreCheck,
        Y = e.isNormalizer,
        q = e.onGestureStart,
        H = e.onGestureEnd,
        X = e.onWheel,
        W = e.onEnable,
        G = e.onDisable,
        V = e.onClick,
        U = e.scrollSpeed,
        j = e.capture,
        Q = e.allowClicks,
        $ = e.lockAxis,
        Z = e.onLockAxis;
      function $e() {
        return (ye = Ye());
      }
      function _e(e, t) {
        return (
          ((se.event = e) && u && ~u.indexOf(e.target)) ||
          (t && ge && 'touch' !== e.pointerType) ||
          (I && I(e, t))
        );
      }
      function bf() {
        var e = (se.deltaX = N(be)),
          t = (se.deltaY = N(me)),
          r = Math.abs(e) >= o,
          n = Math.abs(t) >= o;
        k && (r || n) && k(se, e, t, be, me),
          r &&
            (m && 0 < se.deltaX && m(se),
            y && se.deltaX < 0 && y(se),
            w && w(se),
            T && se.deltaX < 0 != le < 0 && T(se),
            (le = se.deltaX),
            (be[0] = be[1] = be[2] = 0)),
          n &&
            (_ && 0 < se.deltaY && _(se),
            x && se.deltaY < 0 && x(se),
            S && S(se),
            E && se.deltaY < 0 != ce < 0 && E(se),
            (ce = se.deltaY),
            (me[0] = me[1] = me[2] = 0)),
          (ne || re) && (z && z(se), re && (h(se), (re = !1)), (ne = !1)),
          ie && !(ie = !1) && Z && Z(se),
          oe && (X(se), (oe = !1)),
          (ee = 0);
      }
      function cf(e, t, r) {
        (be[r] += e),
          (me[r] += t),
          se._vx.update(e),
          se._vy.update(t),
          n ? (ee = ee || requestAnimationFrame(bf)) : bf();
      }
      function df(e, t) {
        $ &&
          !ae &&
          ((se.axis = ae = Math.abs(e) > Math.abs(t) ? 'x' : 'y'), (ie = !0)),
          'y' !== ae && ((be[2] += e), se._vx.update(e, !0)),
          'x' !== ae && ((me[2] += t), se._vy.update(t, !0)),
          n ? (ee = ee || requestAnimationFrame(bf)) : bf();
      }
      function ef(e) {
        if (!_e(e, 1)) {
          var t = (e = M(e, s)).clientX,
            r = e.clientY,
            n = t - se.x,
            o = r - se.y,
            i = se.isDragging;
          (se.x = t),
            (se.y = r),
            (i ||
              Math.abs(se.startX - t) >= a ||
              Math.abs(se.startY - r) >= a) &&
              (h && (re = !0),
              i || (se.isDragging = !0),
              df(n, o),
              i || (p && p(se)));
        }
      }
      function hf(e) {
        return (
          e.touches &&
          1 < e.touches.length &&
          (se.isGesturing = !0) &&
          q(e, se.isDragging)
        );
      }
      function jf() {
        return (se.isGesturing = !1) || H(se);
      }
      function kf(e) {
        if (!_e(e)) {
          var t = ue(),
            r = fe();
          cf((t - de) * U, (r - pe) * U, 1),
            (de = t),
            (pe = r),
            l && te.restart(!0);
        }
      }
      function lf(e) {
        if (!_e(e)) {
          (e = M(e, s)), X && (oe = !0);
          var t =
            (1 === e.deltaMode ? r : 2 === e.deltaMode ? Te.innerHeight : 1) *
            f;
          cf(e.deltaX * t, e.deltaY * t, 0), l && !Y && te.restart(!0);
        }
      }
      function mf(e) {
        if (!_e(e)) {
          var t = e.clientX,
            r = e.clientY,
            n = t - se.x,
            o = r - se.y;
          (se.x = t), (se.y = r), (ne = !0), (n || o) && df(n, o);
        }
      }
      function nf(e) {
        (se.event = e), R(se);
      }
      function of(e) {
        (se.event = e), D(se);
      }
      function pf(e) {
        return _e(e) || (M(e, s) && V(se));
      }
      (this.target = i = J(i) || Pe),
        (this.vars = e),
        (u = u && Se.utils.toArray(u)),
        (o = o || 1e-9),
        (a = a || 0),
        (f = f || 1),
        (U = U || 1),
        (t = t || 'wheel,touch,pointer'),
        (n = !1 !== n),
        (r = r || parseFloat(Te.getComputedStyle(Me).lineHeight) || 22);
      var ee,
        te,
        re,
        ne,
        oe,
        ie,
        ae,
        se = this,
        le = 0,
        ce = 0,
        ue = K(i, qe),
        fe = K(i, He),
        de = ue(),
        pe = fe(),
        ge =
          ~t.indexOf('touch') &&
          !~t.indexOf('pointer') &&
          'pointerdown' === Be[0],
        he = A(i),
        ve = i.ownerDocument || Ce,
        be = [0, 0, 0],
        me = [0, 0, 0],
        ye = 0,
        xe = (se.onPress = function (e) {
          _e(e, 1) ||
            (e && e.button) ||
            ((se.axis = ae = null),
            te.pause(),
            (se.isPressed = !0),
            (e = M(e)),
            (le = ce = 0),
            (se.startX = se.x = e.clientX),
            (se.startY = se.y = e.clientY),
            se._vx.reset(),
            se._vy.reset(),
            B(Y ? i : ve, Be[1], ef, s, !0),
            (se.deltaX = se.deltaY = 0),
            v && v(se));
        }),
        we = (se.onRelease = function (t) {
          if (!_e(t, 1)) {
            C(Y ? i : ve, Be[1], ef, !0);
            var e = !isNaN(se.y - se.startY),
              r =
                se.isDragging &&
                (3 < Math.abs(se.x - se.startX) ||
                  3 < Math.abs(se.y - se.startY)),
              n = M(t);
            !r &&
              e &&
              (se._vx.reset(),
              se._vy.reset(),
              s &&
                Q &&
                Se.delayedCall(0.08, function () {
                  if (300 < Ye() - ye && !t.defaultPrevented)
                    if (t.target.click) t.target.click();
                    else if (ve.createEvent) {
                      var e = ve.createEvent('MouseEvents');
                      e.initMouseEvent(
                        'click',
                        !0,
                        !0,
                        Te,
                        1,
                        n.screenX,
                        n.screenY,
                        n.clientX,
                        n.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        t.target.dispatchEvent(e);
                    }
                })),
              (se.isDragging = se.isGesturing = se.isPressed = !1),
              l && !Y && te.restart(!0),
              g && r && g(se),
              b && b(se, r);
          }
        });
      (te = se._dc =
        Se.delayedCall(c || 0.25, function onStopFunc() {
          se._vx.reset(), se._vy.reset(), te.pause(), l && l(se);
        }).pause()),
        (se.deltaX = se.deltaY = 0),
        (se._vx = L(0, 50, !0)),
        (se._vy = L(0, 50, !0)),
        (se.scrollX = ue),
        (se.scrollY = fe),
        (se.isDragging = se.isGesturing = se.isPressed = !1),
        De(this),
        (se.enable = function (e) {
          return (
            se.isEnabled ||
              (B(he ? ve : i, 'scroll', F),
              0 <= t.indexOf('scroll') && B(he ? ve : i, 'scroll', kf, s, j),
              0 <= t.indexOf('wheel') && B(i, 'wheel', lf, s, j),
              ((0 <= t.indexOf('touch') && Ee) || 0 <= t.indexOf('pointer')) &&
                (B(i, Be[0], xe, s, j),
                B(ve, Be[2], we),
                B(ve, Be[3], we),
                Q && B(i, 'click', $e, !1, !0),
                V && B(i, 'click', pf),
                q && B(ve, 'gesturestart', hf),
                H && B(ve, 'gestureend', jf),
                R && B(i, Oe + 'enter', nf),
                D && B(i, Oe + 'leave', of),
                z && B(i, Oe + 'move', mf)),
              (se.isEnabled = !0),
              e && e.type && xe(e),
              W && W(se)),
            se
          );
        }),
        (se.disable = function () {
          se.isEnabled &&
            (Fe.filter(function (e) {
              return e !== se && A(e.target);
            }).length || C(he ? ve : i, 'scroll', F),
            se.isPressed &&
              (se._vx.reset(), se._vy.reset(), C(Y ? i : ve, Be[1], ef, !0)),
            C(he ? ve : i, 'scroll', kf, j),
            C(i, 'wheel', lf, j),
            C(i, Be[0], xe, j),
            C(ve, Be[2], we),
            C(ve, Be[3], we),
            C(i, 'click', $e, !0),
            C(i, 'click', pf),
            C(ve, 'gesturestart', hf),
            C(ve, 'gestureend', jf),
            C(i, Oe + 'enter', nf),
            C(i, Oe + 'leave', of),
            C(i, Oe + 'move', mf),
            (se.isEnabled = se.isPressed = se.isDragging = !1),
            G && G(se));
        }),
        (se.kill = se.revert =
          function () {
            se.disable();
            var e = Fe.indexOf(se);
            0 <= e && Fe.splice(e, 1), Re === se && (Re = 0);
          }),
        Fe.push(se),
        Y && A(i) && (Re = se),
        se.enable(d);
    }),
    (function _createClass(e, t, r) {
      return (
        t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
      );
    })(Observer, [
      {
        key: 'velocityX',
        get: function get() {
          return this._vx.getVelocity();
        },
      },
      {
        key: 'velocityY',
        get: function get() {
          return this._vy.getVelocity();
        },
      },
    ]),
    Observer);
  function Observer(e) {
    this.init(e);
  }
  (E.version = '3.12.2'),
    (E.create = function (e) {
      return new E(e);
    }),
    (E.register = P),
    (E.getAll = function () {
      return Fe.slice();
    }),
    (E.getById = function (t) {
      return Fe.filter(function (e) {
        return e.vars.id === t;
      })[0];
    }),
    r() && Se.registerPlugin(E);
  function Aa(e, t, r) {
    var n = ct(e) && ('clamp(' === e.substr(0, 6) || -1 < e.indexOf('max'));
    return (r['_' + t + 'Clamp'] = n) ? e.substr(6, e.length - 7) : e;
  }
  function Ba(e, t) {
    return !t || (ct(e) && 'clamp(' === e.substr(0, 6))
      ? e
      : 'clamp(' + e + ')';
  }
  function Da() {
    return (Ke = 1);
  }
  function Ea() {
    return (Ke = 0);
  }
  function Fa(e) {
    return e;
  }
  function Ga(e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  }
  function Ha() {
    return 'undefined' != typeof window;
  }
  function Ia() {
    return Le || (Ha() && (Le = window.gsap) && Le.registerPlugin && Le);
  }
  function Ja(e) {
    return !!~l.indexOf(e);
  }
  function Ka(e) {
    return (
      ('Height' === e ? S : Ne['inner' + e]) ||
      Je['client' + e] ||
      We['client' + e]
    );
  }
  function La(e) {
    return (
      z(e, 'getBoundingClientRect') ||
      (Ja(e)
        ? function () {
            return (Ot.width = Ne.innerWidth), (Ot.height = S), Ot;
          }
        : function () {
            return _t(e);
          })
    );
  }
  function Oa(e, t) {
    var r = t.s,
      n = t.d2,
      o = t.d,
      i = t.a;
    return Math.max(
      0,
      (r = 'scroll' + n) && (i = z(e, r))
        ? i() - La(e)()[o]
        : Ja(e)
          ? (Je[r] || We[r]) - Ka(n)
          : e[r] - e['offset' + n]
    );
  }
  function Pa(e, t) {
    for (var r = 0; r < g.length; r += 3)
      (t && !~t.indexOf(g[r + 1])) || e(g[r], g[r + 1], g[r + 2]);
  }
  function Ra(e) {
    return 'function' == typeof e;
  }
  function Sa(e) {
    return 'number' == typeof e;
  }
  function Ta(e) {
    return 'object' == typeof e;
  }
  function Ua(e, t, r) {
    return e && e.progress(t ? 0 : 1) && r && e.pause();
  }
  function Va(e, t) {
    if (e.enabled) {
      var r = t(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  }
  function kb(e) {
    return Ne.getComputedStyle(e);
  }
  function mb(e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  }
  function ob(e, t) {
    var r = t.d2;
    return e['offset' + r] || e['client' + r] || 0;
  }
  function pb(e) {
    var t,
      r = [],
      n = e.labels,
      o = e.duration();
    for (t in n) r.push(n[t] / o);
    return r;
  }
  function rb(o) {
    var i = Le.utils.snap(o),
      a =
        Array.isArray(o) &&
        o.slice(0).sort(function (e, t) {
          return e - t;
        });
    return a
      ? function (e, t, r) {
          var n;
          if ((void 0 === r && (r = 0.001), !t)) return i(e);
          if (0 < t) {
            for (e -= r, n = 0; n < a.length; n++) if (a[n] >= e) return a[n];
            return a[n - 1];
          }
          for (n = a.length, e += r; n--; ) if (a[n] <= e) return a[n];
          return a[0];
        }
      : function (e, t, r) {
          void 0 === r && (r = 0.001);
          var n = i(e);
          return !t || Math.abs(n - e) < r || n - e < 0 == t < 0
            ? n
            : i(t < 0 ? e - o : e + o);
        };
  }
  function tb(t, r, e, n) {
    return e.split(',').forEach(function (e) {
      return t(r, e, n);
    });
  }
  function ub(e, t, r, n, o) {
    return e.addEventListener(t, r, { passive: !n, capture: !!o });
  }
  function vb(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function wb(e, t, r) {
    (r = r && r.wheelHandler) && (e(t, 'wheel', r), e(t, 'touchmove', r));
  }
  function Ab(e, t) {
    if (ct(e)) {
      var r = e.indexOf('='),
        n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf('%') > r && (n *= t / 100), (e = e.substr(0, r - 1))),
        (e =
          n +
          (e in q
            ? q[e] * t
            : ~e.indexOf('%')
              ? (parseFloat(e) * t) / 100
              : parseFloat(e) || 0));
    }
    return e;
  }
  function Bb(e, t, r, n, o, i, a, s) {
    var l = o.startColor,
      c = o.endColor,
      u = o.fontSize,
      f = o.indent,
      d = o.fontWeight,
      p = Xe.createElement('div'),
      g = Ja(r) || 'fixed' === z(r, 'pinType'),
      h = -1 !== e.indexOf('scroller'),
      v = g ? We : r,
      b = -1 !== e.indexOf('start'),
      m = b ? l : c,
      y =
        'border-color:' +
        m +
        ';font-size:' +
        u +
        ';color:' +
        m +
        ';font-weight:' +
        d +
        ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;';
    return (
      (y += 'position:' + ((h || s) && g ? 'fixed;' : 'absolute;')),
      (!h && !s && g) ||
        (y += (n === He ? D : I) + ':' + (i + parseFloat(f)) + 'px;'),
      a &&
        (y +=
          'box-sizing:border-box;text-align:left;width:' +
          a.offsetWidth +
          'px;'),
      (p._isStart = b),
      p.setAttribute('class', 'gsap-marker-' + e + (t ? ' marker-' + t : '')),
      (p.style.cssText = y),
      (p.innerText = t || 0 === t ? e + '-' + t : e),
      v.children[0] ? v.insertBefore(p, v.children[0]) : v.appendChild(p),
      (p._offset = p['offset' + n.op.d2]),
      H(p, 0, n, b),
      p
    );
  }
  function Gb() {
    return 34 < at() - st && (k = k || requestAnimationFrame(Q));
  }
  function Hb() {
    (v && v.isPressed && !(v.startX > We.clientWidth)) ||
      (ze.cache++,
      v ? (k = k || requestAnimationFrame(Q)) : Q(),
      st || V('scrollStart'),
      (st = at()));
  }
  function Ib() {
    (y = Ne.innerWidth), (m = Ne.innerHeight);
  }
  function Jb() {
    ze.cache++,
      je ||
        h ||
        Xe.fullscreenElement ||
        Xe.webkitFullscreenElement ||
        (b &&
          y === Ne.innerWidth &&
          !(Math.abs(Ne.innerHeight - m) > 0.25 * Ne.innerHeight)) ||
        c.restart(!0);
  }
  function Mb() {
    return vb(re, 'scrollEnd', Mb) || Pt(!0);
  }
  function Pb(e) {
    for (var t = 0; t < U.length; t += 5)
      (!e || (U[t + 4] && U[t + 4].query === e)) &&
        ((U[t].style.cssText = U[t + 1]),
        U[t].getBBox && U[t].setAttribute('transform', U[t + 2] || ''),
        (U[t + 3].uncache = 1));
  }
  function Qb(e, t) {
    var r;
    for (Qe = 0; Qe < kt.length; Qe++)
      !(r = kt[Qe]) ||
        (t && r._ctx !== t) ||
        (e ? r.kill(1) : r.revert(!0, !0));
    t && Pb(t), t || V('revert');
  }
  function Rb(e, t) {
    ze.cache++,
      (!t && rt) ||
        ze.forEach(function (e) {
          return Ra(e) && e.cacheID++ && (e.rec = 0);
        }),
      ct(e) && (Ne.history.scrollRestoration = _ = e);
  }
  function Wb() {
    We.appendChild(w),
      (S = w.offsetHeight || Ne.innerHeight),
      We.removeChild(w);
  }
  function dc(e, t, r, n) {
    if (!e._gsap.swappedIn) {
      for (var o, i = $.length, a = t.style, s = e.style; i--; )
        a[(o = $[i])] = r[o];
      (a.position = 'absolute' === r.position ? 'absolute' : 'relative'),
        'inline' === r.display && (a.display = 'inline-block'),
        (s[I] = s[D] = 'auto'),
        (a.flexBasis = r.flexBasis || 'auto'),
        (a.overflow = 'visible'),
        (a.boxSizing = 'border-box'),
        (a[ft] = ob(e, qe) + xt),
        (a[dt] = ob(e, He) + xt),
        (a[bt] = s[mt] = s.top = s.left = '0'),
        Et(n),
        (s[ft] = s.maxWidth = r[ft]),
        (s[dt] = s.maxHeight = r[dt]),
        (s[bt] = r[bt]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  }
  function gc(e) {
    for (var t = Z.length, r = e.style, n = [], o = 0; o < t; o++)
      n.push(Z[o], r[Z[o]]);
    return (n.t = e), n;
  }
  function jc(e, t, r, n, o, i, a, s, l, c, u, f, d, p) {
    Ra(e) && (e = e(s)),
      ct(e) &&
        'max' === e.substr(0, 3) &&
        (e = f + ('=' === e.charAt(4) ? Ab('0' + e.substr(3), r) : 0));
    var g,
      h,
      v,
      b = d ? d.time() : 0;
    if ((d && d.seek(0), isNaN(e) || (e = +e), Sa(e)))
      d &&
        (e = Le.utils.mapRange(
          d.scrollTrigger.start,
          d.scrollTrigger.end,
          0,
          f,
          e
        )),
        a && H(a, r, n, !0);
    else {
      Ra(t) && (t = t(s));
      var m,
        y,
        x,
        _,
        w = (e || '0').split(' ');
      (v = J(t, s) || We),
        ((m = _t(v) || {}) && (m.left || m.top)) ||
          'none' !== kb(v).display ||
          ((_ = v.style.display),
          (v.style.display = 'block'),
          (m = _t(v)),
          _ ? (v.style.display = _) : v.style.removeProperty('display')),
        (y = Ab(w[0], m[n.d])),
        (x = Ab(w[1] || '0', r)),
        (e = m[n.p] - l[n.p] - c + y + o - x),
        a && H(a, x, n, r - x < 20 || (a._isStart && 20 < x)),
        (r -= r - x);
    }
    if ((p && ((s[p] = e || -0.001), e < 0 && (e = 0)), i)) {
      var S = e + r,
        k = i._isStart;
      (g = 'scroll' + n.d2),
        H(
          i,
          S,
          n,
          (k && 20 < S) ||
            (!k && (u ? Math.max(We[g], Je[g]) : i.parentNode[g]) <= S + 1)
        ),
        u &&
          ((l = _t(a)),
          u && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + xt));
    }
    return (
      d &&
        v &&
        ((g = _t(v)),
        d.seek(f),
        (h = _t(v)),
        (d._caScrollDist = g[n.p] - h[n.p]),
        (e = (e / d._caScrollDist) * f)),
      d && d.seek(b),
      d ? e : Math.round(e)
    );
  }
  function lc(e, t, r, n) {
    if (e.parentNode !== t) {
      var o,
        i,
        a = e.style;
      if (t === We) {
        for (o in ((e._stOrig = a.cssText), (i = kb(e))))
          +o ||
            te.test(o) ||
            !i[o] ||
            'string' != typeof a[o] ||
            '0' === o ||
            (a[o] = i[o]);
        (a.top = r), (a.left = n);
      } else a.cssText = e._stOrig;
      (Le.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  }
  function mc(r, e, n) {
    var o = e,
      i = o;
    return function (e) {
      var t = Math.round(r());
      return (
        t !== o &&
          t !== i &&
          3 < Math.abs(t - o) &&
          3 < Math.abs(t - i) &&
          ((e = t), n && n()),
        (i = o),
        (o = e)
      );
    };
  }
  function nc(e, t, r) {
    var n = {};
    (n[t.p] = '+=' + r), Le.set(e, n);
  }
  function oc(c, e) {
    function uk(e, t, r, n, o) {
      var i = uk.tween,
        a = t.onComplete,
        s = {};
      r = r || u();
      var l = mc(u, r, function () {
        i.kill(), (uk.tween = 0);
      });
      return (
        (o = (n && o) || 0),
        (n = n || e - r),
        i && i.kill(),
        (t[f] = e),
        ((t.modifiers = s)[f] = function () {
          return l(r + n * i.ratio + o * i.ratio * i.ratio);
        }),
        (t.onUpdate = function () {
          ze.cache++, Q();
        }),
        (t.onComplete = function () {
          (uk.tween = 0), a && a.call(i);
        }),
        (i = uk.tween = Le.to(c, t))
      );
    }
    var u = K(c, e),
      f = '_scroll' + e.p2;
    return (
      ((c[f] = u).wheelHandler = function () {
        return uk.tween && uk.tween.kill() && (uk.tween = 0);
      }),
      ub(c, 'wheel', u.wheelHandler),
      re.isTouch && ub(c, 'touchmove', u.wheelHandler),
      uk
    );
  }
  var Le,
    s,
    Ne,
    Xe,
    Je,
    We,
    l,
    c,
    Ge,
    Ve,
    Ue,
    u,
    je,
    Ke,
    f,
    Qe,
    d,
    p,
    g,
    Ze,
    et,
    h,
    v,
    b,
    m,
    y,
    R,
    x,
    _,
    w,
    S,
    tt,
    k,
    rt,
    nt,
    ot,
    it = 1,
    at = Date.now,
    T = at(),
    st = 0,
    lt = 0,
    ct = function _isString(e) {
      return 'string' == typeof e;
    },
    ut = Math.abs,
    D = 'right',
    I = 'bottom',
    ft = 'width',
    dt = 'height',
    pt = 'Right',
    gt = 'Left',
    ht = 'Top',
    vt = 'Bottom',
    bt = 'padding',
    mt = 'margin',
    yt = 'Width',
    Y = 'Height',
    xt = 'px',
    _t = function _getBounds(e, t) {
      var r =
          t &&
          'matrix(1, 0, 0, 1, 0, 0)' !== kb(e)[f] &&
          Le.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        n = e.getBoundingClientRect();
      return r && r.progress(0).kill(), n;
    },
    wt = {
      startColor: 'green',
      endColor: 'red',
      indent: 0,
      fontSize: '16px',
      fontWeight: 'normal',
    },
    St = { toggleActions: 'play', anticipatePin: 0 },
    q = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    H = function _positionMarker(e, t, r, n) {
      var o = { display: 'block' },
        i = r[n ? 'os2' : 'p2'],
        a = r[n ? 'p2' : 'os2'];
      (e._isFlipped = n),
        (o[r.a + 'Percent'] = n ? -100 : 0),
        (o[r.a] = n ? '1px' : 0),
        (o['border' + i + yt] = 1),
        (o['border' + a + yt] = 0),
        (o[r.p] = t + 'px'),
        Le.set(e, o);
    },
    kt = [],
    Tt = {},
    X = {},
    W = [],
    V = function _dispatch(e) {
      return (
        (X[e] &&
          X[e].map(function (e) {
            return e();
          })) ||
        W
      );
    },
    U = [],
    Ct = 0,
    Pt = function _refreshAll(e, t) {
      if (!st || e) {
        Wb(),
          (rt = re.isRefreshing = !0),
          ze.forEach(function (e) {
            return Ra(e) && ++e.cacheID && (e.rec = e());
          });
        var r = V('refreshInit');
        Ze && re.sort(),
          t || Qb(),
          ze.forEach(function (e) {
            Ra(e) &&
              (e.smooth && (e.target.style.scrollBehavior = 'auto'), e(0));
          }),
          kt.slice(0).forEach(function (e) {
            return e.refresh();
          }),
          kt.forEach(function (e, t) {
            if (e._subPinOffset && e.pin) {
              var r = e.vars.horizontal ? 'offsetWidth' : 'offsetHeight',
                n = e.pin[r];
              e.revert(!0, 1), e.adjustPinSpacing(e.pin[r] - n), e.refresh();
            }
          }),
          kt.forEach(function (e) {
            var t = Oa(e.scroller, e._dir);
            ('max' === e.vars.end || (e._endClamp && e.end > t)) &&
              e.setPositions(e.start, Math.max(e.start + 1, t), !0);
          }),
          r.forEach(function (e) {
            return e && e.render && e.render(-1);
          }),
          ze.forEach(function (e) {
            Ra(e) &&
              (e.smooth &&
                requestAnimationFrame(function () {
                  return (e.target.style.scrollBehavior = 'smooth');
                }),
              e.rec && e(e.rec));
          }),
          Rb(_, 1),
          c.pause(),
          Ct++,
          Q((rt = 2)),
          kt.forEach(function (e) {
            return Ra(e.vars.onRefresh) && e.vars.onRefresh(e);
          }),
          (rt = re.isRefreshing = !1),
          V('refresh');
      } else ub(re, 'scrollEnd', Mb);
    },
    j = 0,
    Mt = 1,
    Q = function _updateAll(e) {
      if (!rt || 2 === e) {
        (re.isUpdating = !0), ot && ot.update(0);
        var t = kt.length,
          r = at(),
          n = 50 <= r - T,
          o = t && kt[0].scroll();
        if (
          ((Mt = o < j ? -1 : 1),
          rt || (j = o),
          n &&
            (st && !Ke && 200 < r - st && ((st = 0), V('scrollEnd')),
            (Ue = T),
            (T = r)),
          Mt < 0)
        ) {
          for (Qe = t; 0 < Qe--; ) kt[Qe] && kt[Qe].update(0, n);
          Mt = 1;
        } else for (Qe = 0; Qe < t; Qe++) kt[Qe] && kt[Qe].update(0, n);
        re.isUpdating = !1;
      }
      k = 0;
    },
    $ = [
      'left',
      'top',
      I,
      D,
      mt + vt,
      mt + pt,
      mt + ht,
      mt + gt,
      'display',
      'flexShrink',
      'float',
      'zIndex',
      'gridColumnStart',
      'gridColumnEnd',
      'gridRowStart',
      'gridRowEnd',
      'gridArea',
      'justifySelf',
      'alignSelf',
      'placeSelf',
      'order',
    ],
    Z = $.concat([
      ft,
      dt,
      'boxSizing',
      'max' + yt,
      'max' + Y,
      'position',
      mt,
      bt,
      bt + ht,
      bt + pt,
      bt + vt,
      bt + gt,
    ]),
    ee = /([A-Z])/g,
    Et = function _setState(e) {
      if (e) {
        var t,
          r,
          n = e.t.style,
          o = e.length,
          i = 0;
        for ((e.t._gsap || Le.core.getCache(e.t)).uncache = 1; i < o; i += 2)
          (r = e[i + 1]),
            (t = e[i]),
            r
              ? (n[t] = r)
              : n[t] && n.removeProperty(t.replace(ee, '-$1').toLowerCase());
      }
    },
    Ot = { left: 0, top: 0 },
    te = /(webkit|moz|length|cssText|inset)/i,
    re =
      ((ScrollTrigger.prototype.init = function init(E, O) {
        if (
          ((this.progress = this.start = 0), this.vars && this.kill(!0, !0), lt)
        ) {
          var A,
            n,
            p,
            R,
            B,
            D,
            F,
            I,
            Y,
            q,
            H,
            e,
            L,
            N,
            X,
            W,
            G,
            V,
            t,
            U,
            b,
            j,
            Q,
            m,
            $,
            y,
            Z,
            x,
            r,
            _,
            w,
            ee,
            o,
            g,
            te,
            re,
            ne,
            S,
            i,
            k = (E = mb(ct(E) || Sa(E) || E.nodeType ? { trigger: E } : E, St))
              .onUpdate,
            T = E.toggleClass,
            a = E.id,
            C = E.onToggle,
            oe = E.onRefresh,
            P = E.scrub,
            ie = E.trigger,
            ae = E.pin,
            se = E.pinSpacing,
            le = E.invalidateOnRefresh,
            M = E.anticipatePin,
            s = E.onScrubComplete,
            h = E.onSnapComplete,
            ce = E.once,
            ue = E.snap,
            fe = E.pinReparent,
            l = E.pinSpacer,
            de = E.containerAnimation,
            pe = E.fastScrollEnd,
            ge = E.preventOverlaps,
            he =
              E.horizontal || (E.containerAnimation && !1 !== E.horizontal)
                ? qe
                : He,
            ve = !P && 0 !== P,
            be = J(E.scroller || Ne),
            c = Le.core.getCache(be),
            me = Ja(be),
            ye =
              'fixed' ===
              ('pinType' in E
                ? E.pinType
                : z(be, 'pinType') || (me && 'fixed')),
            xe = [E.onEnter, E.onLeave, E.onEnterBack, E.onLeaveBack],
            _e = ve && E.toggleActions.split(' '),
            we = 'markers' in E ? E.markers : St.markers,
            Se = me ? 0 : parseFloat(kb(be)['border' + he.p2 + yt]) || 0,
            ke = this,
            Te =
              E.onRefreshInit &&
              function () {
                return E.onRefreshInit(ke);
              },
            Ce = (function _getSizeFunc(e, t, r) {
              var n = r.d,
                o = r.d2,
                i = r.a;
              return (i = z(e, 'getBoundingClientRect'))
                ? function () {
                    return i()[n];
                  }
                : function () {
                    return (t ? Ka(o) : e['client' + o]) || 0;
                  };
            })(be, me, he),
            Pe = (function _getOffsetsFunc(e, t) {
              return !t || ~Ie.indexOf(e)
                ? La(e)
                : function () {
                    return Ot;
                  };
            })(be, me),
            Me = 0,
            Ee = 0,
            Oe = 0,
            Ae = K(be, he);
          if (
            ((ke._startClamp = ke._endClamp = !1),
            (ke._dir = he),
            (M *= 45),
            (ke.scroller = be),
            (ke.scroll = de ? de.time.bind(de) : Ae),
            (R = Ae()),
            (ke.vars = E),
            (O = O || E.animation),
            'refreshPriority' in E &&
              ((Ze = 1), -9999 === E.refreshPriority && (ot = ke)),
            (c.tweenScroll = c.tweenScroll || {
              top: oc(be, He),
              left: oc(be, qe),
            }),
            (ke.tweenTo = A = c.tweenScroll[he.p]),
            (ke.scrubDuration = function (e) {
              (o = Sa(e) && e)
                ? ee
                  ? ee.duration(e)
                  : (ee = Le.to(O, {
                      ease: 'expo',
                      totalProgress: '+=0',
                      duration: o,
                      paused: !0,
                      onComplete: function onComplete() {
                        return s && s(ke);
                      },
                    }))
                : (ee && ee.progress(1).kill(), (ee = 0));
            }),
            O &&
              ((O.vars.lazy = !1),
              (O._initted && !ke.isReverted) ||
                (!1 !== O.vars.immediateRender &&
                  !1 !== E.immediateRender &&
                  O.duration() &&
                  O.render(0, !0, !0)),
              (ke.animation = O.pause()),
              (O.scrollTrigger = ke).scrubDuration(P),
              (_ = 0),
              (a = a || O.vars.id)),
            ue &&
              ((Ta(ue) && !ue.push) || (ue = { snapTo: ue }),
              'scrollBehavior' in We.style &&
                Le.set(me ? [We, Je] : be, { scrollBehavior: 'auto' }),
              ze.forEach(function (e) {
                return (
                  Ra(e) &&
                  e.target === (me ? Xe.scrollingElement || Je : be) &&
                  (e.smooth = !1)
                );
              }),
              (p = Ra(ue.snapTo)
                ? ue.snapTo
                : 'labels' === ue.snapTo
                  ? (function _getClosestLabel(t) {
                      return function (e) {
                        return Le.utils.snap(pb(t), e);
                      };
                    })(O)
                  : 'labelsDirectional' === ue.snapTo
                    ? (function _getLabelAtDirection(r) {
                        return function (e, t) {
                          return rb(pb(r))(e, t.direction);
                        };
                      })(O)
                    : !1 !== ue.directional
                      ? function (e, t) {
                          return rb(ue.snapTo)(
                            e,
                            at() - Ee < 500 ? 0 : t.direction
                          );
                        }
                      : Le.utils.snap(ue.snapTo)),
              (g = ue.duration || { min: 0.1, max: 2 }),
              (g = Ta(g) ? Ve(g.min, g.max) : Ve(g, g)),
              (te = Le.delayedCall(ue.delay || o / 2 || 0.1, function () {
                var e = Ae(),
                  t = at() - Ee < 500,
                  r = A.tween;
                if (
                  !(t || Math.abs(ke.getVelocity()) < 10) ||
                  r ||
                  Ke ||
                  Me === e
                )
                  ke.isActive && Me !== e && te.restart(!0);
                else {
                  var n = (e - D) / N,
                    o = O && !ve ? O.totalProgress() : n,
                    i = t ? 0 : ((o - w) / (at() - Ue)) * 1e3 || 0,
                    a = Le.utils.clamp(-n, 1 - n, (ut(i / 2) * i) / 0.185),
                    s = n + (!1 === ue.inertia ? 0 : a),
                    l = Ve(0, 1, p(s, ke)),
                    c = Math.round(D + l * N),
                    u = ue.onStart,
                    f = ue.onInterrupt,
                    d = ue.onComplete;
                  if (e <= F && D <= e && c !== e) {
                    if (r && !r._initted && r.data <= ut(c - e)) return;
                    !1 === ue.inertia && (a = l - n),
                      A(
                        c,
                        {
                          duration: g(
                            ut(
                              (0.185 * Math.max(ut(s - o), ut(l - o))) /
                                i /
                                0.05 || 0
                            )
                          ),
                          ease: ue.ease || 'power3',
                          data: ut(c - e),
                          onInterrupt: function onInterrupt() {
                            return te.restart(!0) && f && f(ke);
                          },
                          onComplete: function onComplete() {
                            ke.update(),
                              (Me = Ae()),
                              (_ = w =
                                O && !ve ? O.totalProgress() : ke.progress),
                              h && h(ke),
                              d && d(ke);
                          },
                        },
                        e,
                        a * N,
                        c - e - a * N
                      ),
                      u && u(ke, A.tween);
                  }
                }
              }).pause())),
            a && (Tt[a] = ke),
            (i =
              (i =
                (ie = ke.trigger = J(ie || (!0 !== ae && ae))) &&
                ie._gsap &&
                ie._gsap.stRevert) && i(ke)),
            (ae = !0 === ae ? ie : J(ae)),
            ct(T) && (T = { targets: ie, className: T }),
            ae &&
              (!1 === se ||
                se === mt ||
                (se =
                  !(
                    !se &&
                    ae.parentNode &&
                    ae.parentNode.style &&
                    'flex' === kb(ae.parentNode).display
                  ) && bt),
              (ke.pin = ae),
              (n = Le.core.getCache(ae)).spacer
                ? (X = n.pinState)
                : (l &&
                    ((l = J(l)) &&
                      !l.nodeType &&
                      (l = l.current || l.nativeElement),
                    (n.spacerIsNative = !!l),
                    l && (n.spacerState = gc(l))),
                  (n.spacer = V = l || Xe.createElement('div')),
                  V.classList.add('pin-spacer'),
                  a && V.classList.add('pin-spacer-' + a),
                  (n.pinState = X = gc(ae))),
              !1 !== E.force3D && Le.set(ae, { force3D: !0 }),
              (ke.spacer = V = n.spacer),
              (r = kb(ae)),
              (m = r[se + he.os2]),
              (U = Le.getProperty(ae)),
              (b = Le.quickSetter(ae, he.a, xt)),
              dc(ae, V, r),
              (G = gc(ae))),
            we)
          ) {
            (e = Ta(we) ? mb(we, wt) : wt),
              (q = Bb('scroller-start', a, be, he, e, 0)),
              (H = Bb('scroller-end', a, be, he, e, 0, q)),
              (t = q['offset' + he.op.d2]);
            var u = J(z(be, 'content') || be);
            (I = this.markerStart = Bb('start', a, u, he, e, t, 0, de)),
              (Y = this.markerEnd = Bb('end', a, u, he, e, t, 0, de)),
              de && (S = Le.quickSetter([I, Y], he.a, xt)),
              ye ||
                (Ie.length && !0 === z(be, 'fixedMarkers')) ||
                ((function _makePositionable(e) {
                  var t = kb(e).position;
                  e.style.position =
                    'absolute' === t || 'fixed' === t ? t : 'relative';
                })(me ? We : be),
                Le.set([q, H], { force3D: !0 }),
                (y = Le.quickSetter(q, he.a, xt)),
                (x = Le.quickSetter(H, he.a, xt)));
          }
          if (de) {
            var f = de.vars.onUpdate,
              d = de.vars.onUpdateParams;
            de.eventCallback('onUpdate', function () {
              ke.update(0, 0, 1), f && f.apply(de, d || []);
            });
          }
          if (
            ((ke.previous = function () {
              return kt[kt.indexOf(ke) - 1];
            }),
            (ke.next = function () {
              return kt[kt.indexOf(ke) + 1];
            }),
            (ke.revert = function (e, t) {
              if (!t) return ke.kill(!0);
              var r = !1 !== e || !ke.enabled,
                n = je;
              r !== ke.isReverted &&
                (r &&
                  ((re = Math.max(Ae(), ke.scroll.rec || 0)),
                  (Oe = ke.progress),
                  (ne = O && O.progress())),
                I &&
                  [I, Y, q, H].forEach(function (e) {
                    return (e.style.display = r ? 'none' : 'block');
                  }),
                r && (je = ke).update(r),
                !ae ||
                  (fe && ke.isActive) ||
                  (r
                    ? (function _swapPinOut(e, t, r) {
                        Et(r);
                        var n = e._gsap;
                        if (n.spacerIsNative) Et(n.spacerState);
                        else if (e._gsap.swappedIn) {
                          var o = t.parentNode;
                          o && (o.insertBefore(e, t), o.removeChild(t));
                        }
                        e._gsap.swappedIn = !1;
                      })(ae, V, X)
                    : dc(ae, V, kb(ae), $)),
                r || ke.update(r),
                (je = n),
                (ke.isReverted = r));
            }),
            (ke.refresh = function (e, t, r, n) {
              if ((!je && ke.enabled) || t)
                if (ae && e && st) ub(ScrollTrigger, 'scrollEnd', Mb);
                else {
                  !rt && Te && Te(ke),
                    (je = ke),
                    A.tween && !r && (A.tween.kill(), (A.tween = 0)),
                    ee && ee.pause(),
                    le && O && O.revert({ kill: !1 }).invalidate(),
                    ke.isReverted || ke.revert(!0, !0),
                    (ke._subPinOffset = !1);
                  var o,
                    i,
                    a,
                    s,
                    l,
                    c,
                    u,
                    f,
                    d,
                    p,
                    g,
                    h,
                    v,
                    b = Ce(),
                    m = Pe(),
                    y = de ? de.duration() : Oa(be, he),
                    x = N <= 0.01,
                    _ = 0,
                    w = n || 0,
                    S = Ta(r) ? r.end : E.end,
                    k = E.endTrigger || ie,
                    T = Ta(r)
                      ? r.start
                      : E.start ||
                        (0 !== E.start && ie ? (ae ? '0 0' : '0 100%') : 0),
                    C = (ke.pinnedContainer =
                      E.pinnedContainer && J(E.pinnedContainer, ke)),
                    P = (ie && Math.max(0, kt.indexOf(ke))) || 0,
                    M = P;
                  for (
                    we &&
                    Ta(r) &&
                    ((h = Le.getProperty(q, he.p)),
                    (v = Le.getProperty(H, he.p)));
                    M--;

                  )
                    (c = kt[M]).end || c.refresh(0, 1) || (je = ke),
                      !(u = c.pin) ||
                        (u !== ie && u !== ae && u !== C) ||
                        c.isReverted ||
                        ((p = p || []).unshift(c), c.revert(!0, !0)),
                      c !== kt[M] && (P--, M--);
                  for (
                    Ra(T) && (T = T(ke)),
                      T = Aa(T, 'start', ke),
                      D =
                        jc(
                          T,
                          ie,
                          b,
                          he,
                          Ae(),
                          I,
                          q,
                          ke,
                          m,
                          Se,
                          ye,
                          y,
                          de,
                          ke._startClamp && '_startClamp'
                        ) || (ae ? -0.001 : 0),
                      Ra(S) && (S = S(ke)),
                      ct(S) &&
                        !S.indexOf('+=') &&
                        (~S.indexOf(' ')
                          ? (S = (ct(T) ? T.split(' ')[0] : '') + S)
                          : ((_ = Ab(S.substr(2), b)),
                            (S = ct(T)
                              ? T
                              : (de
                                  ? Le.utils.mapRange(
                                      0,
                                      de.duration(),
                                      de.scrollTrigger.start,
                                      de.scrollTrigger.end,
                                      D
                                    )
                                  : D) + _),
                            (k = ie))),
                      S = Aa(S, 'end', ke),
                      F =
                        Math.max(
                          D,
                          jc(
                            S || (k ? '100% 0' : y),
                            k,
                            b,
                            he,
                            Ae() + _,
                            Y,
                            H,
                            ke,
                            m,
                            Se,
                            ye,
                            y,
                            de,
                            ke._endClamp && '_endClamp'
                          )
                        ) || -0.001,
                      _ = 0,
                      M = P;
                    M--;

                  )
                    (u = (c = kt[M]).pin) &&
                      c.start - c._pinPush <= D &&
                      !de &&
                      0 < c.end &&
                      ((o =
                        c.end -
                        (ke._startClamp ? Math.max(0, c.start) : c.start)),
                      ((u === ie && c.start - c._pinPush < D) || u === C) &&
                        isNaN(T) &&
                        (_ += o * (1 - c.progress)),
                      u === ae && (w += o));
                  if (
                    ((D += _),
                    (F += _),
                    ke._startClamp && (ke._startClamp += _),
                    ke._endClamp &&
                      !rt &&
                      ((ke._endClamp = F || -0.001),
                      (F = Math.min(F, Oa(be, he)))),
                    (N = F - D || ((D -= 0.01) && 0.001)),
                    x &&
                      (Oe = Le.utils.clamp(0, 1, Le.utils.normalize(D, F, re))),
                    (ke._pinPush = w),
                    I &&
                      _ &&
                      (((o = {})[he.a] = '+=' + _),
                      C && (o[he.p] = '-=' + Ae()),
                      Le.set([I, Y], o)),
                    ae)
                  )
                    (o = kb(ae)),
                      (s = he === He),
                      (a = Ae()),
                      (j = parseFloat(U(he.a)) + w),
                      !y &&
                        1 < F &&
                        ((g = {
                          style: (g = (me ? Xe.scrollingElement || Je : be)
                            .style),
                          value: g['overflow' + he.a.toUpperCase()],
                        }),
                        me &&
                          'scroll' !==
                            kb(We)['overflow' + he.a.toUpperCase()] &&
                          (g.style['overflow' + he.a.toUpperCase()] =
                            'scroll')),
                      dc(ae, V, o),
                      (G = gc(ae)),
                      (i = _t(ae, !0)),
                      (f = ye && K(be, s ? qe : He)()),
                      se &&
                        ((($ = [se + he.os2, N + w + xt]).t = V),
                        (M = se === bt ? ob(ae, he) + N + w : 0) &&
                          $.push(he.d, M + xt),
                        Et($),
                        C &&
                          kt.forEach(function (e) {
                            e.pin === C &&
                              !1 !== e.vars.pinSpacing &&
                              (e._subPinOffset = !0);
                          }),
                        ye && Ae(re)),
                      ye &&
                        (((l = {
                          top: i.top + (s ? a - D : f) + xt,
                          left: i.left + (s ? f : a - D) + xt,
                          boxSizing: 'border-box',
                          position: 'fixed',
                        })[ft] = l.maxWidth =
                          Math.ceil(i.width) + xt),
                        (l[dt] = l.maxHeight = Math.ceil(i.height) + xt),
                        (l[mt] =
                          l[mt + ht] =
                          l[mt + pt] =
                          l[mt + vt] =
                          l[mt + gt] =
                            '0'),
                        (l[bt] = o[bt]),
                        (l[bt + ht] = o[bt + ht]),
                        (l[bt + pt] = o[bt + pt]),
                        (l[bt + vt] = o[bt + vt]),
                        (l[bt + gt] = o[bt + gt]),
                        (W = (function _copyState(e, t, r) {
                          for (
                            var n, o = [], i = e.length, a = r ? 8 : 0;
                            a < i;
                            a += 2
                          )
                            (n = e[a]), o.push(n, n in t ? t[n] : e[a + 1]);
                          return (o.t = e.t), o;
                        })(X, l, fe)),
                        rt && Ae(0)),
                      O
                        ? ((d = O._initted),
                          et(1),
                          O.render(O.duration(), !0, !0),
                          (Q = U(he.a) - j + N + w),
                          (Z = 1 < Math.abs(N - Q)),
                          ye && Z && W.splice(W.length - 2, 2),
                          O.render(0, !0, !0),
                          d || O.invalidate(!0),
                          O.parent || O.totalTime(O.totalTime()),
                          et(0))
                        : (Q = N),
                      g &&
                        (g.value
                          ? (g.style['overflow' + he.a.toUpperCase()] = g.value)
                          : g.style.removeProperty('overflow-' + he.a));
                  else if (ie && Ae() && !de)
                    for (i = ie.parentNode; i && i !== We; )
                      i._pinOffset &&
                        ((D -= i._pinOffset), (F -= i._pinOffset)),
                        (i = i.parentNode);
                  p &&
                    p.forEach(function (e) {
                      return e.revert(!1, !0);
                    }),
                    (ke.start = D),
                    (ke.end = F),
                    (R = B = rt ? re : Ae()),
                    de || rt || (R < re && Ae(re), (ke.scroll.rec = 0)),
                    ke.revert(!1, !0),
                    (Ee = at()),
                    te && ((Me = -1), te.restart(!0)),
                    (je = 0),
                    O &&
                      ve &&
                      (O._initted || ne) &&
                      O.progress() !== ne &&
                      O.progress(ne || 0, !0).render(O.time(), !0, !0),
                    (x || Oe !== ke.progress || de) &&
                      (O &&
                        !ve &&
                        O.totalProgress(
                          de && D < -0.001 && !Oe
                            ? Le.utils.normalize(D, F, 0)
                            : Oe,
                          !0
                        ),
                      (ke.progress = x || (R - D) / N === Oe ? 0 : Oe)),
                    ae && se && (V._pinOffset = Math.round(ke.progress * Q)),
                    ee && ee.invalidate(),
                    isNaN(h) ||
                      ((h -= Le.getProperty(q, he.p)),
                      (v -= Le.getProperty(H, he.p)),
                      nc(q, he, h),
                      nc(I, he, h - (n || 0)),
                      nc(H, he, v),
                      nc(Y, he, v - (n || 0))),
                    x && !rt && ke.update(),
                    !oe || rt || L || ((L = !0), oe(ke), (L = !1));
                }
            }),
            (ke.getVelocity = function () {
              return ((Ae() - B) / (at() - Ue)) * 1e3 || 0;
            }),
            (ke.endAnimation = function () {
              Ua(ke.callbackAnimation),
                O &&
                  (ee
                    ? ee.progress(1)
                    : O.paused()
                      ? ve || Ua(O, ke.direction < 0, 1)
                      : Ua(O, O.reversed()));
            }),
            (ke.labelToScroll = function (e) {
              return (
                (O &&
                  O.labels &&
                  (D || ke.refresh() || D) +
                    (O.labels[e] / O.duration()) * N) ||
                0
              );
            }),
            (ke.getTrailing = function (t) {
              var e = kt.indexOf(ke),
                r =
                  0 < ke.direction ? kt.slice(0, e).reverse() : kt.slice(e + 1);
              return (
                ct(t)
                  ? r.filter(function (e) {
                      return e.vars.preventOverlaps === t;
                    })
                  : r
              ).filter(function (e) {
                return 0 < ke.direction ? e.end <= D : e.start >= F;
              });
            }),
            (ke.update = function (e, t, r) {
              if (!de || r || e) {
                var n,
                  o,
                  i,
                  a,
                  s,
                  l,
                  c,
                  u = !0 === rt ? re : ke.scroll(),
                  f = e ? 0 : (u - D) / N,
                  d = f < 0 ? 0 : 1 < f ? 1 : f || 0,
                  p = ke.progress;
                if (
                  (t &&
                    ((B = R),
                    (R = de ? Ae() : u),
                    ue && ((w = _), (_ = O && !ve ? O.totalProgress() : d))),
                  M &&
                    !d &&
                    ae &&
                    !je &&
                    !it &&
                    st &&
                    D < u + ((u - B) / (at() - Ue)) * M &&
                    (d = 1e-4),
                  d !== p && ke.enabled)
                ) {
                  if (
                    ((a =
                      (s =
                        (n = ke.isActive = !!d && d < 1) != (!!p && p < 1)) ||
                      !!d != !!p),
                    (ke.direction = p < d ? 1 : -1),
                    (ke.progress = d),
                    a &&
                      !je &&
                      ((o = d && !p ? 0 : 1 === d ? 1 : 1 === p ? 2 : 3),
                      ve &&
                        ((i =
                          (!s && 'none' !== _e[o + 1] && _e[o + 1]) || _e[o]),
                        (c =
                          O && ('complete' === i || 'reset' === i || i in O)))),
                    ge &&
                      (s || c) &&
                      (c || P || !O) &&
                      (Ra(ge)
                        ? ge(ke)
                        : ke.getTrailing(ge).forEach(function (e) {
                            return e.endAnimation();
                          })),
                    ve ||
                      (!ee || je || it
                        ? O && O.totalProgress(d, !(!je || (!Ee && !e)))
                        : (ee._dp._time - ee._start !== ee._time &&
                            ee.render(ee._dp._time - ee._start),
                          ee.resetTo
                            ? ee.resetTo('totalProgress', d, O._tTime / O._tDur)
                            : ((ee.vars.totalProgress = d),
                              ee.invalidate().restart()))),
                    ae)
                  )
                    if ((e && se && (V.style[se + he.os2] = m), ye)) {
                      if (a) {
                        if (
                          ((l =
                            !e && p < d && u < F + 1 && u + 1 >= Oa(be, he)),
                          fe)
                        )
                          if (e || (!n && !l)) lc(ae, V);
                          else {
                            var g = _t(ae, !0),
                              h = u - D;
                            lc(
                              ae,
                              We,
                              g.top + (he === He ? h : 0) + xt,
                              g.left + (he === He ? 0 : h) + xt
                            );
                          }
                        Et(n || l ? W : G),
                          (Z && d < 1 && n) || b(j + (1 !== d || l ? 0 : Q));
                      }
                    } else b(Ga(j + Q * d));
                  !ue || A.tween || je || it || te.restart(!0),
                    T &&
                      (s || (ce && d && (d < 1 || !tt))) &&
                      Ge(T.targets).forEach(function (e) {
                        return e.classList[n || ce ? 'add' : 'remove'](
                          T.className
                        );
                      }),
                    !k || ve || e || k(ke),
                    a && !je
                      ? (ve &&
                          (c &&
                            ('complete' === i
                              ? O.pause().totalProgress(1)
                              : 'reset' === i
                                ? O.restart(!0).pause()
                                : 'restart' === i
                                  ? O.restart(!0)
                                  : O[i]()),
                          k && k(ke)),
                        (!s && tt) ||
                          (C && s && Va(ke, C),
                          xe[o] && Va(ke, xe[o]),
                          ce && (1 === d ? ke.kill(!1, 1) : (xe[o] = 0)),
                          s || (xe[(o = 1 === d ? 1 : 3)] && Va(ke, xe[o]))),
                        pe &&
                          !n &&
                          Math.abs(ke.getVelocity()) > (Sa(pe) ? pe : 2500) &&
                          (Ua(ke.callbackAnimation),
                          ee
                            ? ee.progress(1)
                            : Ua(O, 'reverse' === i ? 1 : !d, 1)))
                      : ve && k && !je && k(ke);
                }
                if (x) {
                  var v = de
                    ? (u / de.duration()) * (de._caScrollDist || 0)
                    : u;
                  y(v + (q._isFlipped ? 1 : 0)), x(v);
                }
                S && S((-u / de.duration()) * (de._caScrollDist || 0));
              }
            }),
            (ke.enable = function (e, t) {
              ke.enabled ||
                ((ke.enabled = !0),
                ub(be, 'resize', Jb),
                me || ub(be, 'scroll', Hb),
                Te && ub(ScrollTrigger, 'refreshInit', Te),
                !1 !== e && ((ke.progress = Oe = 0), (R = B = Me = Ae())),
                !1 !== t && ke.refresh());
            }),
            (ke.getTween = function (e) {
              return e && A ? A.tween : ee;
            }),
            (ke.setPositions = function (e, t, r, n) {
              if (de) {
                var o = de.scrollTrigger,
                  i = de.duration(),
                  a = o.end - o.start;
                (e = o.start + (a * e) / i), (t = o.start + (a * t) / i);
              }
              ke.refresh(
                !1,
                !1,
                {
                  start: Ba(e, r && !!ke._startClamp),
                  end: Ba(t, r && !!ke._endClamp),
                },
                n
              ),
                ke.update();
            }),
            (ke.adjustPinSpacing = function (e) {
              if ($ && e) {
                var t = $.indexOf(he.d) + 1;
                ($[t] = parseFloat($[t]) + e + xt),
                  ($[1] = parseFloat($[1]) + e + xt),
                  Et($);
              }
            }),
            (ke.disable = function (e, t) {
              if (
                ke.enabled &&
                (!1 !== e && ke.revert(!0, !0),
                (ke.enabled = ke.isActive = !1),
                t || (ee && ee.pause()),
                (re = 0),
                n && (n.uncache = 1),
                Te && vb(ScrollTrigger, 'refreshInit', Te),
                te && (te.pause(), A.tween && A.tween.kill() && (A.tween = 0)),
                !me)
              ) {
                for (var r = kt.length; r--; )
                  if (kt[r].scroller === be && kt[r] !== ke) return;
                vb(be, 'resize', Jb), me || vb(be, 'scroll', Hb);
              }
            }),
            (ke.kill = function (e, t) {
              ke.disable(e, t), ee && !t && ee.kill(), a && delete Tt[a];
              var r = kt.indexOf(ke);
              0 <= r && kt.splice(r, 1),
                r === Qe && 0 < Mt && Qe--,
                (r = 0),
                kt.forEach(function (e) {
                  return e.scroller === ke.scroller && (r = 1);
                }),
                r || rt || (ke.scroll.rec = 0),
                O &&
                  ((O.scrollTrigger = null),
                  e && O.revert({ kill: !1 }),
                  t || O.kill()),
                I &&
                  [I, Y, q, H].forEach(function (e) {
                    return e.parentNode && e.parentNode.removeChild(e);
                  }),
                ot === ke && (ot = 0),
                ae &&
                  (n && (n.uncache = 1),
                  (r = 0),
                  kt.forEach(function (e) {
                    return e.pin === ae && r++;
                  }),
                  r || (n.spacer = 0)),
                E.onKill && E.onKill(ke);
            }),
            kt.push(ke),
            ke.enable(!1, !1),
            i && i(ke),
            O && O.add && !N)
          ) {
            var v = ke.update;
            (ke.update = function () {
              (ke.update = v), D || F || ke.refresh();
            }),
              Le.delayedCall(0.01, ke.update),
              (N = 0.01),
              (D = F = 0);
          } else ke.refresh();
          ae &&
            (function _queueRefreshAll() {
              if (nt !== Ct) {
                var e = (nt = Ct);
                requestAnimationFrame(function () {
                  return e === Ct && Pt(!0);
                });
              }
            })();
        } else this.update = this.refresh = this.kill = Fa;
      }),
      (ScrollTrigger.register = function register(e) {
        return (
          s ||
            ((Le = e || Ia()),
            Ha() && window.document && ScrollTrigger.enable(),
            (s = lt)),
          s
        );
      }),
      (ScrollTrigger.defaults = function defaults(e) {
        if (e) for (var t in e) St[t] = e[t];
        return St;
      }),
      (ScrollTrigger.disable = function disable(t, r) {
        (lt = 0),
          kt.forEach(function (e) {
            return e[r ? 'kill' : 'disable'](t);
          }),
          vb(Ne, 'wheel', Hb),
          vb(Xe, 'scroll', Hb),
          clearInterval(u),
          vb(Xe, 'touchcancel', Fa),
          vb(We, 'touchstart', Fa),
          tb(vb, Xe, 'pointerdown,touchstart,mousedown', Da),
          tb(vb, Xe, 'pointerup,touchend,mouseup', Ea),
          c.kill(),
          Pa(vb);
        for (var e = 0; e < ze.length; e += 3)
          wb(vb, ze[e], ze[e + 1]), wb(vb, ze[e], ze[e + 2]);
      }),
      (ScrollTrigger.enable = function enable() {
        if (
          ((Ne = window),
          (Xe = document),
          (Je = Xe.documentElement),
          (We = Xe.body),
          Le &&
            ((Ge = Le.utils.toArray),
            (Ve = Le.utils.clamp),
            (x = Le.core.context || Fa),
            (et = Le.core.suppressOverwrites || Fa),
            (_ = Ne.history.scrollRestoration || 'auto'),
            (j = Ne.pageYOffset),
            Le.core.globals('ScrollTrigger', ScrollTrigger),
            We))
        ) {
          (lt = 1),
            ((w = document.createElement('div')).style.height = '100vh'),
            (w.style.position = 'absolute'),
            Wb(),
            (function _rafBugFix() {
              return lt && requestAnimationFrame(_rafBugFix);
            })(),
            E.register(Le),
            (ScrollTrigger.isTouch = E.isTouch),
            (R =
              E.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            ub(Ne, 'wheel', Hb),
            (l = [Ne, Xe, Je, We]),
            Le.matchMedia
              ? ((ScrollTrigger.matchMedia = function (e) {
                  var t,
                    r = Le.matchMedia();
                  for (t in e) r.add(t, e[t]);
                  return r;
                }),
                Le.addEventListener('matchMediaInit', function () {
                  return Qb();
                }),
                Le.addEventListener('matchMediaRevert', function () {
                  return Pb();
                }),
                Le.addEventListener('matchMedia', function () {
                  Pt(0, 1), V('matchMedia');
                }),
                Le.matchMedia('(orientation: portrait)', function () {
                  return Ib(), Ib;
                }))
              : console.warn('Requires GSAP 3.11.0 or later'),
            Ib(),
            ub(Xe, 'scroll', Hb);
          var e,
            t,
            r = We.style,
            n = r.borderTopStyle,
            o = Le.core.Animation.prototype;
          for (
            o.revert ||
              Object.defineProperty(o, 'revert', {
                value: function value() {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = 'solid',
              e = _t(We),
              He.m = Math.round(e.top + He.sc()) || 0,
              qe.m = Math.round(e.left + qe.sc()) || 0,
              n ? (r.borderTopStyle = n) : r.removeProperty('border-top-style'),
              u = setInterval(Gb, 250),
              Le.delayedCall(0.5, function () {
                return (it = 0);
              }),
              ub(Xe, 'touchcancel', Fa),
              ub(We, 'touchstart', Fa),
              tb(ub, Xe, 'pointerdown,touchstart,mousedown', Da),
              tb(ub, Xe, 'pointerup,touchend,mouseup', Ea),
              f = Le.utils.checkPrefix('transform'),
              Z.push(f),
              s = at(),
              c = Le.delayedCall(0.2, Pt).pause(),
              g = [
                Xe,
                'visibilitychange',
                function () {
                  var e = Ne.innerWidth,
                    t = Ne.innerHeight;
                  Xe.hidden ? ((d = e), (p = t)) : (d === e && p === t) || Jb();
                },
                Xe,
                'DOMContentLoaded',
                Pt,
                Ne,
                'load',
                Pt,
                Ne,
                'resize',
                Jb,
              ],
              Pa(ub),
              kt.forEach(function (e) {
                return e.enable(0, 1);
              }),
              t = 0;
            t < ze.length;
            t += 3
          )
            wb(vb, ze[t], ze[t + 1]), wb(vb, ze[t], ze[t + 2]);
        }
      }),
      (ScrollTrigger.config = function config(e) {
        'limitCallbacks' in e && (tt = !!e.limitCallbacks);
        var t = e.syncInterval;
        (t && clearInterval(u)) || ((u = t) && setInterval(Gb, t)),
          'ignoreMobileResize' in e &&
            (b = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize),
          'autoRefreshEvents' in e &&
            (Pa(vb) || Pa(ub, e.autoRefreshEvents || 'none'),
            (h = -1 === (e.autoRefreshEvents + '').indexOf('resize')));
      }),
      (ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
        var r = J(e),
          n = ze.indexOf(r),
          o = Ja(r);
        ~n && ze.splice(n, o ? 6 : 2),
          t && (o ? Ie.unshift(Ne, t, We, t, Je, t) : Ie.unshift(r, t));
      }),
      (ScrollTrigger.clearMatchMedia = function clearMatchMedia(t) {
        kt.forEach(function (e) {
          return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
        });
      }),
      (ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
        var n = (ct(e) ? J(e) : e).getBoundingClientRect(),
          o = n[r ? ft : dt] * t || 0;
        return r
          ? 0 < n.right - o && n.left + o < Ne.innerWidth
          : 0 < n.bottom - o && n.top + o < Ne.innerHeight;
      }),
      (ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
        ct(e) && (e = J(e));
        var n = e.getBoundingClientRect(),
          o = n[r ? ft : dt],
          i =
            null == t
              ? o / 2
              : t in q
                ? q[t] * o
                : ~t.indexOf('%')
                  ? (parseFloat(t) * o) / 100
                  : parseFloat(t) || 0;
        return r ? (n.left + i) / Ne.innerWidth : (n.top + i) / Ne.innerHeight;
      }),
      (ScrollTrigger.killAll = function killAll(e) {
        if (
          (kt.slice(0).forEach(function (e) {
            return 'ScrollSmoother' !== e.vars.id && e.kill();
          }),
          !0 !== e)
        ) {
          var t = X.killAll || [];
          (X = {}),
            t.forEach(function (e) {
              return e();
            });
        }
      }),
      ScrollTrigger);
  function ScrollTrigger(e, t) {
    s ||
      ScrollTrigger.register(Le) ||
      console.warn('Please gsap.registerPlugin(ScrollTrigger)'),
      x(this),
      this.init(e, t);
  }
  (re.version = '3.12.2'),
    (re.saveStyles = function (e) {
      return e
        ? Ge(e).forEach(function (e) {
            if (e && e.style) {
              var t = U.indexOf(e);
              0 <= t && U.splice(t, 5),
                U.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute('transform'),
                  Le.core.getCache(e),
                  x()
                );
            }
          })
        : U;
    }),
    (re.revert = function (e, t) {
      return Qb(!e, t);
    }),
    (re.create = function (e, t) {
      return new re(e, t);
    }),
    (re.refresh = function (e) {
      return e ? Jb() : (s || re.register()) && Pt(!0);
    }),
    (re.update = function (e) {
      return ++ze.cache && Q(!0 === e ? 2 : 0);
    }),
    (re.clearScrollMemory = Rb),
    (re.maxScroll = function (e, t) {
      return Oa(e, t ? qe : He);
    }),
    (re.getScrollFunc = function (e, t) {
      return K(J(e), t ? qe : He);
    }),
    (re.getById = function (e) {
      return Tt[e];
    }),
    (re.getAll = function () {
      return kt.filter(function (e) {
        return 'ScrollSmoother' !== e.vars.id;
      });
    }),
    (re.isScrolling = function () {
      return !!st;
    }),
    (re.snapDirectional = rb),
    (re.addEventListener = function (e, t) {
      var r = X[e] || (X[e] = []);
      ~r.indexOf(t) || r.push(t);
    }),
    (re.removeEventListener = function (e, t) {
      var r = X[e],
        n = r && r.indexOf(t);
      0 <= n && r.splice(n, 1);
    }),
    (re.batch = function (e, t) {
      function up(e, t) {
        var r = [],
          n = [],
          o = Le.delayedCall(i, function () {
            t(r, n), (r = []), (n = []);
          }).pause();
        return function (e) {
          r.length || o.restart(!0),
            r.push(e.trigger),
            n.push(e),
            a <= r.length && o.progress(1);
        };
      }
      var r,
        n = [],
        o = {},
        i = t.interval || 0.016,
        a = t.batchMax || 1e9;
      for (r in t)
        o[r] =
          'on' === r.substr(0, 2) && Ra(t[r]) && 'onRefreshInit' !== r
            ? up(0, t[r])
            : t[r];
      return (
        Ra(a) &&
          ((a = a()),
          ub(re, 'refresh', function () {
            return (a = t.batchMax());
          })),
        Ge(e).forEach(function (e) {
          var t = {};
          for (r in o) t[r] = o[r];
          (t.trigger = e), n.push(re.create(t));
        }),
        n
      );
    });
  function qc(e, t, r, n) {
    return (
      n < t ? e(n) : t < 0 && e(0),
      n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
    );
  }
  function rc(e, t) {
    !0 === t
      ? e.style.removeProperty('touch-action')
      : (e.style.touchAction =
          !0 === t
            ? 'auto'
            : t
              ? 'pan-' + t + (E.isTouch ? ' pinch-zoom' : '')
              : 'none'),
      e === Je && rc(We, t);
  }
  function tc(e) {
    var t,
      r = e.event,
      n = e.target,
      o = e.axis,
      i = (r.changedTouches ? r.changedTouches[0] : r).target,
      a = i._gsap || Le.core.getCache(i),
      s = at();
    if (!a._isScrollT || 2e3 < s - a._isScrollT) {
      for (
        ;
        i &&
        i !== We &&
        ((i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth) ||
          (!oe[(t = kb(i)).overflowY] && !oe[t.overflowX]));

      )
        i = i.parentNode;
      (a._isScroll =
        i &&
        i !== n &&
        !Ja(i) &&
        (oe[(t = kb(i)).overflowY] || oe[t.overflowX])),
        (a._isScrollT = s);
    }
    (!a._isScroll && 'x' !== o) || (r.stopPropagation(), (r._gsapAllow = !0));
  }
  function uc(e, t, r, n) {
    return E.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (n = n && tc),
      onPress: n,
      onDrag: n,
      onScroll: n,
      onEnable: function onEnable() {
        return r && ub(Xe, E.eventTypes[0], ae, !1, !0);
      },
      onDisable: function onDisable() {
        return vb(Xe, E.eventTypes[0], ae, !0);
      },
    });
  }
  function yc(e) {
    function rq() {
      return (o = !1);
    }
    function uq() {
      (i = Oa(p, He)),
        (T = Ve(R ? 1 : 0, i)),
        f && (k = Ve(0, Oa(p, qe))),
        (l = Ct);
    }
    function vq() {
      (v._gsap.y = Ga(parseFloat(v._gsap.y) + b.offset) + 'px'),
        (v.style.transform =
          'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
          parseFloat(v._gsap.y) +
          ', 0, 1)'),
        (b.offset = b.cacheID = 0);
    }
    function Bq() {
      uq(),
        a.isActive() &&
          a.vars.scrollY > i &&
          (b() > i ? a.progress(1) && b(i) : a.resetTo('scrollY', i));
    }
    Ta(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = 'wheel,touch'),
      (e.debounce = !!e.debounce),
      (e.id = e.id || 'normalizer');
    var n,
      i,
      l,
      o,
      a,
      c,
      u,
      s,
      f = e.normalizeScrollX,
      t = e.momentum,
      r = e.allowNestedScroll,
      d = e.onRelease,
      p = J(e.target) || Je,
      g = Le.core.globals().ScrollSmoother,
      h = g && g.get(),
      v =
        R &&
        ((e.content && J(e.content)) ||
          (h && !1 !== e.content && !h.smooth() && h.content())),
      b = K(p, He),
      m = K(p, qe),
      y = 1,
      x =
        (E.isTouch && Ne.visualViewport
          ? Ne.visualViewport.scale * Ne.visualViewport.width
          : Ne.outerWidth) / Ne.innerWidth,
      _ = 0,
      w = Ra(t)
        ? function () {
            return t(n);
          }
        : function () {
            return t || 2.8;
          },
      S = uc(p, e.type, !0, r),
      k = Fa,
      T = Fa;
    return (
      v && Le.set(v, { y: '+=0' }),
      (e.ignoreCheck = function (e) {
        return (
          (R &&
            'touchmove' === e.type &&
            (function ignoreDrag() {
              if (o) {
                requestAnimationFrame(rq);
                var e = Ga(n.deltaY / 2),
                  t = T(b.v - e);
                if (v && t !== b.v + b.offset) {
                  b.offset = t - b.v;
                  var r = Ga((parseFloat(v && v._gsap.y) || 0) - b.offset);
                  (v.style.transform =
                    'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
                    r +
                    ', 0, 1)'),
                    (v._gsap.y = r + 'px'),
                    (b.cacheID = ze.cache),
                    Q();
                }
                return !0;
              }
              b.offset && vq(), (o = !0);
            })()) ||
          (1.05 < y && 'touchstart' !== e.type) ||
          n.isGesturing ||
          (e.touches && 1 < e.touches.length)
        );
      }),
      (e.onPress = function () {
        o = !1;
        var e = y;
        (y = Ga(((Ne.visualViewport && Ne.visualViewport.scale) || 1) / x)),
          a.pause(),
          e !== y && rc(p, 1.01 < y || (!f && 'x')),
          (c = m()),
          (u = b()),
          uq(),
          (l = Ct);
      }),
      (e.onRelease = e.onGestureStart =
        function (e, t) {
          if ((b.offset && vq(), t)) {
            ze.cache++;
            var r,
              n,
              o = w();
            f &&
              ((n = (r = m()) + (0.05 * o * -e.velocityX) / 0.227),
              (o *= qc(m, r, n, Oa(p, qe))),
              (a.vars.scrollX = k(n))),
              (n = (r = b()) + (0.05 * o * -e.velocityY) / 0.227),
              (o *= qc(b, r, n, Oa(p, He))),
              (a.vars.scrollY = T(n)),
              a.invalidate().duration(o).play(0.01),
              ((R && a.vars.scrollY >= i) || i - 1 <= r) &&
                Le.to({}, { onUpdate: Bq, duration: o });
          } else s.restart(!0);
          d && d(e);
        }),
      (e.onWheel = function () {
        a._ts && a.pause(), 1e3 < at() - _ && ((l = 0), (_ = at()));
      }),
      (e.onChange = function (e, t, r, n, o) {
        if (
          (Ct !== l && uq(),
          t && f && m(k(n[2] === t ? c + (e.startX - e.x) : m() + t - n[1])),
          r)
        ) {
          b.offset && vq();
          var i = o[2] === r,
            a = i ? u + e.startY - e.y : b() + r - o[1],
            s = T(a);
          i && a !== s && (u += s - a), b(s);
        }
        (r || t) && Q();
      }),
      (e.onEnable = function () {
        rc(p, !f && 'x'),
          re.addEventListener('refresh', Bq),
          ub(Ne, 'resize', Bq),
          b.smooth &&
            ((b.target.style.scrollBehavior = 'auto'),
            (b.smooth = m.smooth = !1)),
          S.enable();
      }),
      (e.onDisable = function () {
        rc(p, !0),
          vb(Ne, 'resize', Bq),
          re.removeEventListener('refresh', Bq),
          S.kill();
      }),
      (e.lockAxis = !1 !== e.lockAxis),
      ((n = new E(e)).iOS = R) && !b() && b(1),
      R && Le.ticker.add(Fa),
      (s = n._dc),
      (a = Le.to(n, {
        ease: 'power4',
        paused: !0,
        scrollX: f ? '+=0.1' : '+=0',
        scrollY: '+=0.1',
        modifiers: {
          scrollY: mc(b, b(), function () {
            return a.pause();
          }),
        },
        onUpdate: Q,
        onComplete: s.vars.onComplete,
      })),
      n
    );
  }
  var ne,
    oe = { auto: 1, scroll: 1 },
    ie = /(input|label|select|textarea)/i,
    ae = function _captureInputs(e) {
      var t = ie.test(e.target.tagName);
      (t || ne) && ((e._gsapAllow = !0), (ne = t));
    };
  (re.sort = function (e) {
    return kt.sort(
      e ||
        function (e, t) {
          return (
            -1e6 * (e.vars.refreshPriority || 0) +
            e.start -
            (t.start + -1e6 * (t.vars.refreshPriority || 0))
          );
        }
    );
  }),
    (re.observe = function (e) {
      return new E(e);
    }),
    (re.normalizeScroll = function (e) {
      if (void 0 === e) return v;
      if (!0 === e && v) return v.enable();
      if (!1 === e) return v && v.kill();
      var t = e instanceof E ? e : yc(e);
      return v && v.target === t.target && v.kill(), Ja(t.target) && (v = t), t;
    }),
    (re.core = {
      _getVelocityProp: L,
      _inputObserver: uc,
      _scrollers: ze,
      _proxies: Ie,
      bridge: {
        ss: function ss() {
          st || V('scrollStart'), (st = at());
        },
        ref: function ref() {
          return je;
        },
      },
    }),
    Ia() && Le.registerPlugin(re),
    (e.ScrollTrigger = re),
    (e.default = re);
  if (typeof window === 'undefined' || window !== e) {
    Object.defineProperty(e, '__esModule', { value: !0 });
  } else {
    delete e.default;
  }
});
/*!
 * ScrollToPlugin 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
      ? define(['exports'], t)
      : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  'use strict';
  function l() {
    return 'undefined' != typeof window;
  }
  function m() {
    return f || (l() && (f = window.gsap) && f.registerPlugin && f);
  }
  function n(e) {
    return 'string' == typeof e;
  }
  function o(e) {
    return 'function' == typeof e;
  }
  function p(e, t) {
    var o = 'x' === t ? 'Width' : 'Height',
      n = 'scroll' + o,
      l = 'client' + o;
    return e === T || e === i || e === c
      ? Math.max(i[n], c[n]) - (T['inner' + o] || i[l] || c[l])
      : e[n] - e['offset' + o];
  }
  function q(e, t) {
    var o = 'scroll' + ('x' === t ? 'Left' : 'Top');
    return (
      e === T &&
        (null != e.pageXOffset
          ? (o = 'page' + t.toUpperCase() + 'Offset')
          : (e = null != i[o] ? i : c)),
      function () {
        return e[o];
      }
    );
  }
  function s(e, t) {
    if (!(e = y(e)[0]) || !e.getBoundingClientRect)
      return (
        console.warn("scrollTo target doesn't exist. Using 0") || { x: 0, y: 0 }
      );
    var o = e.getBoundingClientRect(),
      n = !t || t === T || t === c,
      l = n
        ? {
            top:
              i.clientTop - (T.pageYOffset || i.scrollTop || c.scrollTop || 0),
            left:
              i.clientLeft -
              (T.pageXOffset || i.scrollLeft || c.scrollLeft || 0),
          }
        : t.getBoundingClientRect(),
      r = { x: o.left - l.left, y: o.top - l.top };
    return !n && t && ((r.x += q(t, 'x')()), (r.y += q(t, 'y')())), r;
  }
  function t(e, t, o, l, r) {
    return isNaN(e) || 'object' == typeof e
      ? n(e) && '=' === e.charAt(1)
        ? parseFloat(e.substr(2)) * ('-' === e.charAt(0) ? -1 : 1) + l - r
        : 'max' === e
          ? p(t, o) - r
          : Math.min(p(t, o), s(e, t)[o] - r)
      : parseFloat(e) - r;
  }
  function u() {
    (f = m()),
      l() &&
        f &&
        'undefined' != typeof document &&
        document.body &&
        ((T = window),
        (c = document.body),
        (i = document.documentElement),
        (y = f.utils.toArray),
        f.config({ autoKillThreshold: 7 }),
        (v = f.config()),
        (a = 1));
  }
  var f,
    a,
    T,
    i,
    c,
    y,
    v,
    h,
    r = {
      version: '3.12.2',
      name: 'scrollTo',
      rawVars: 1,
      register: function register(e) {
        (f = e), u();
      },
      init: function init(e, l, r, s, i) {
        a || u();
        var p = this,
          c = f.getProperty(e, 'scrollSnapType');
        (p.isWin = e === T),
          (p.target = e),
          (p.tween = r),
          (l = (function _clean(e, t, l, r) {
            if ((o(e) && (e = e(t, l, r)), 'object' != typeof e))
              return n(e) && 'max' !== e && '=' !== e.charAt(1)
                ? { x: e, y: e }
                : { y: e };
            if (e.nodeType) return { y: e, x: e };
            var s,
              i = {};
            for (s in e)
              i[s] = 'onAutoKill' !== s && o(e[s]) ? e[s](t, l, r) : e[s];
            return i;
          })(l, s, e, i)),
          (p.vars = l),
          (p.autoKill = !!l.autoKill),
          (p.getX = q(e, 'x')),
          (p.getY = q(e, 'y')),
          (p.x = p.xPrev = p.getX()),
          (p.y = p.yPrev = p.getY()),
          (h = h || f.core.globals().ScrollTrigger),
          'smooth' === f.getProperty(e, 'scrollBehavior') &&
            f.set(e, { scrollBehavior: 'auto' }),
          c &&
            'none' !== c &&
            ((p.snap = 1),
            (p.snapInline = e.style.scrollSnapType),
            (e.style.scrollSnapType = 'none')),
          null != l.x
            ? (p.add(p, 'x', p.x, t(l.x, e, 'x', p.x, l.offsetX || 0), s, i),
              p._props.push('scrollTo_x'))
            : (p.skipX = 1),
          null != l.y
            ? (p.add(p, 'y', p.y, t(l.y, e, 'y', p.y, l.offsetY || 0), s, i),
              p._props.push('scrollTo_y'))
            : (p.skipY = 1);
      },
      render: function render(e, t) {
        for (
          var o,
            n,
            l,
            r,
            s,
            i = t._pt,
            c = t.target,
            u = t.tween,
            f = t.autoKill,
            a = t.xPrev,
            y = t.yPrev,
            d = t.isWin,
            g = t.snap,
            x = t.snapInline;
          i;

        )
          i.r(e, i.d), (i = i._next);
        (o = d || !t.skipX ? t.getX() : a),
          (l = (n = d || !t.skipY ? t.getY() : y) - y),
          (r = o - a),
          (s = v.autoKillThreshold),
          t.x < 0 && (t.x = 0),
          t.y < 0 && (t.y = 0),
          f &&
            (!t.skipX && (s < r || r < -s) && o < p(c, 'x') && (t.skipX = 1),
            !t.skipY && (s < l || l < -s) && n < p(c, 'y') && (t.skipY = 1),
            t.skipX &&
              t.skipY &&
              (u.kill(),
              t.vars.onAutoKill &&
                t.vars.onAutoKill.apply(u, t.vars.onAutoKillParams || []))),
          d
            ? T.scrollTo(t.skipX ? o : t.x, t.skipY ? n : t.y)
            : (t.skipY || (c.scrollTop = t.y), t.skipX || (c.scrollLeft = t.x)),
          !g ||
            (1 !== e && 0 !== e) ||
            ((n = c.scrollTop),
            (o = c.scrollLeft),
            x
              ? (c.style.scrollSnapType = x)
              : c.style.removeProperty('scroll-snap-type'),
            (c.scrollTop = n + 1),
            (c.scrollLeft = o + 1),
            (c.scrollTop = n),
            (c.scrollLeft = o)),
          (t.xPrev = t.x),
          (t.yPrev = t.y),
          h && h.update();
      },
      kill: function kill(e) {
        var t = 'scrollTo' === e;
        (!t && 'scrollTo_x' !== e) || (this.skipX = 1),
          (!t && 'scrollTo_y' !== e) || (this.skipY = 1);
      },
    };
  (r.max = p),
    (r.getOffset = s),
    (r.buildGetter = q),
    m() && f.registerPlugin(r),
    (e.ScrollToPlugin = r),
    (e.default = r);
  if (typeof window === 'undefined' || window !== e) {
    Object.defineProperty(e, '__esModule', { value: !0 });
  } else {
    delete e.default;
  }
});
