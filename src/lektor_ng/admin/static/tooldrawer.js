"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __decorateClass = (decorators, target, key, kind) => {
    for (var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target, i6 = decorators.length - 1, decorator; i6 >= 0; i6--)
      (decorator = decorators[i6]) && (result = (kind ? decorator(target, key, result) : decorator(result)) || result);
    return kind && result && __defProp(target, key, result), result;
  };

  // <define:SVG_ICONS_FONTAWESOME>
  var define_SVG_ICONS_FONTAWESOME_default = { faAngleLeft: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" class="svg-inline--fa fa-angle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path></svg>', faAngleRight: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg>', faFilePen: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-pen" class="svg-inline--fa fa-file-pen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 125.7-86.8 86.8c-10.3 10.3-17.5 23.1-21 37.2l-18.7 74.9c-2.3 9.2-1.8 18.8 1.3 27.5L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM549.8 235.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.4-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0zM311.9 417L441.1 287.8l71 71L382.9 487.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z"></path></svg>', faRetweet: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="retweet" class="svg-inline--fa fa-retweet" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M272 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-112 0c-17.7 0-32-14.3-32-32l0-128 32 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 128c0 53 43 96 96 96l112 0zM304 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l112 0c17.7 0 32 14.3 32 32l0 128-32 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0 0-128c0-53-43-96-96-96L304 96z"></path></svg>', faThumbtack: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="thumbtack" class="svg-inline--fa fa-thumbtack" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3L32 352c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 384l64 0 0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96z"></path></svg>' };

  // node_modules/@lit/reactive-element/css-tag.js
  var t = globalThis, e = t.ShadowRoot && (t.ShadyCSS === void 0 || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s = /* @__PURE__ */ Symbol(), o = /* @__PURE__ */ new WeakMap(), n = class {
    constructor(t7, e9, o8) {
      if (this._$cssResult$ = !0, o8 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t7, this.t = e9;
    }
    get styleSheet() {
      let t7 = this.o, s4 = this.t;
      if (e && t7 === void 0) {
        let e9 = s4 !== void 0 && s4.length === 1;
        e9 && (t7 = o.get(s4)), t7 === void 0 && ((this.o = t7 = new CSSStyleSheet()).replaceSync(this.cssText), e9 && o.set(s4, t7));
      }
      return t7;
    }
    toString() {
      return this.cssText;
    }
  }, r = (t7) => new n(typeof t7 == "string" ? t7 : t7 + "", void 0, s), i = (t7, ...e9) => {
    let o8 = t7.length === 1 ? t7[0] : e9.reduce(((e10, s4, o9) => e10 + ((t8) => {
      if (t8._$cssResult$ === !0) return t8.cssText;
      if (typeof t8 == "number") return t8;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t8 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s4) + t7[o9 + 1]), t7[0]);
    return new n(o8, t7, s);
  }, S = (s4, o8) => {
    if (e) s4.adoptedStyleSheets = o8.map(((t7) => t7 instanceof CSSStyleSheet ? t7 : t7.styleSheet));
    else for (let e9 of o8) {
      let o9 = document.createElement("style"), n5 = t.litNonce;
      n5 !== void 0 && o9.setAttribute("nonce", n5), o9.textContent = e9.cssText, s4.appendChild(o9);
    }
  }, c = e ? (t7) => t7 : (t7) => t7 instanceof CSSStyleSheet ? ((t8) => {
    let e9 = "";
    for (let s4 of t8.cssRules) e9 += s4.cssText;
    return r(e9);
  })(t7) : t7;

  // node_modules/@lit/reactive-element/reactive-element.js
  var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object, a = globalThis, c2 = a.trustedTypes, l = c2 ? c2.emptyScript : "", p = a.reactiveElementPolyfillSupport, d = (t7, s4) => t7, u = { toAttribute(t7, s4) {
    switch (s4) {
      case Boolean:
        t7 = t7 ? l : null;
        break;
      case Object:
      case Array:
        t7 = t7 == null ? t7 : JSON.stringify(t7);
    }
    return t7;
  }, fromAttribute(t7, s4) {
    let i6 = t7;
    switch (s4) {
      case Boolean:
        i6 = t7 !== null;
        break;
      case Number:
        i6 = t7 === null ? null : Number(t7);
        break;
      case Object:
      case Array:
        try {
          i6 = JSON.parse(t7);
        } catch (t8) {
          i6 = null;
        }
    }
    return i6;
  } }, f = (t7, s4) => !i2(t7, s4), b = { attribute: !0, type: String, converter: u, reflect: !1, useDefault: !1, hasChanged: f }, _a, _b;
  (_a = Symbol.metadata) != null || (Symbol.metadata = /* @__PURE__ */ Symbol("metadata")), (_b = a.litPropertyMetadata) != null || (a.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
  var y = class extends HTMLElement {
    static addInitializer(t7) {
      var _a7;
      this._$Ei(), ((_a7 = this.l) != null ? _a7 : this.l = []).push(t7);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t7, s4 = b) {
      if (s4.state && (s4.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t7) && ((s4 = Object.create(s4)).wrapped = !0), this.elementProperties.set(t7, s4), !s4.noAccessor) {
        let i6 = /* @__PURE__ */ Symbol(), h3 = this.getPropertyDescriptor(t7, i6, s4);
        h3 !== void 0 && e2(this.prototype, t7, h3);
      }
    }
    static getPropertyDescriptor(t7, s4, i6) {
      var _a7;
      let { get: e9, set: r6 } = (_a7 = h(this.prototype, t7)) != null ? _a7 : { get() {
        return this[s4];
      }, set(t8) {
        this[s4] = t8;
      } };
      return { get: e9, set(s5) {
        let h3 = e9 == null ? void 0 : e9.call(this);
        r6 == null || r6.call(this, s5), this.requestUpdate(t7, h3, i6);
      }, configurable: !0, enumerable: !0 };
    }
    static getPropertyOptions(t7) {
      var _a7;
      return (_a7 = this.elementProperties.get(t7)) != null ? _a7 : b;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d("elementProperties"))) return;
      let t7 = n2(this);
      t7.finalize(), t7.l !== void 0 && (this.l = [...t7.l]), this.elementProperties = new Map(t7.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d("finalized"))) return;
      if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(d("properties"))) {
        let t8 = this.properties, s4 = [...r2(t8), ...o2(t8)];
        for (let i6 of s4) this.createProperty(i6, t8[i6]);
      }
      let t7 = this[Symbol.metadata];
      if (t7 !== null) {
        let s4 = litPropertyMetadata.get(t7);
        if (s4 !== void 0) for (let [t8, i6] of s4) this.elementProperties.set(t8, i6);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (let [t8, s4] of this.elementProperties) {
        let i6 = this._$Eu(t8, s4);
        i6 !== void 0 && this._$Eh.set(i6, t8);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s4) {
      let i6 = [];
      if (Array.isArray(s4)) {
        let e9 = new Set(s4.flat(1 / 0).reverse());
        for (let s5 of e9) i6.unshift(c(s5));
      } else s4 !== void 0 && i6.push(c(s4));
      return i6;
    }
    static _$Eu(t7, s4) {
      let i6 = s4.attribute;
      return i6 === !1 ? void 0 : typeof i6 == "string" ? i6 : typeof t7 == "string" ? t7.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      var _a7;
      this._$ES = new Promise(((t7) => this.enableUpdating = t7)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (_a7 = this.constructor.l) == null || _a7.forEach(((t7) => t7(this)));
    }
    addController(t7) {
      var _a7, _b2;
      ((_a7 = this._$EO) != null ? _a7 : this._$EO = /* @__PURE__ */ new Set()).add(t7), this.renderRoot !== void 0 && this.isConnected && ((_b2 = t7.hostConnected) == null || _b2.call(t7));
    }
    removeController(t7) {
      var _a7;
      (_a7 = this._$EO) == null || _a7.delete(t7);
    }
    _$E_() {
      let t7 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
      for (let i6 of s4.keys()) this.hasOwnProperty(i6) && (t7.set(i6, this[i6]), delete this[i6]);
      t7.size > 0 && (this._$Ep = t7);
    }
    createRenderRoot() {
      var _a7;
      let t7 = (_a7 = this.shadowRoot) != null ? _a7 : this.attachShadow(this.constructor.shadowRootOptions);
      return S(t7, this.constructor.elementStyles), t7;
    }
    connectedCallback() {
      var _a7, _b2;
      (_a7 = this.renderRoot) != null || (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (_b2 = this._$EO) == null || _b2.forEach(((t7) => {
        var _a8;
        return (_a8 = t7.hostConnected) == null ? void 0 : _a8.call(t7);
      }));
    }
    enableUpdating(t7) {
    }
    disconnectedCallback() {
      var _a7;
      (_a7 = this._$EO) == null || _a7.forEach(((t7) => {
        var _a8;
        return (_a8 = t7.hostDisconnected) == null ? void 0 : _a8.call(t7);
      }));
    }
    attributeChangedCallback(t7, s4, i6) {
      this._$AK(t7, i6);
    }
    _$ET(t7, s4) {
      var _a7;
      let i6 = this.constructor.elementProperties.get(t7), e9 = this.constructor._$Eu(t7, i6);
      if (e9 !== void 0 && i6.reflect === !0) {
        let h3 = (((_a7 = i6.converter) == null ? void 0 : _a7.toAttribute) !== void 0 ? i6.converter : u).toAttribute(s4, i6.type);
        this._$Em = t7, h3 == null ? this.removeAttribute(e9) : this.setAttribute(e9, h3), this._$Em = null;
      }
    }
    _$AK(t7, s4) {
      var _a7, _b2, _c;
      let i6 = this.constructor, e9 = i6._$Eh.get(t7);
      if (e9 !== void 0 && this._$Em !== e9) {
        let t8 = i6.getPropertyOptions(e9), h3 = typeof t8.converter == "function" ? { fromAttribute: t8.converter } : ((_a7 = t8.converter) == null ? void 0 : _a7.fromAttribute) !== void 0 ? t8.converter : u;
        this._$Em = e9;
        let r6 = h3.fromAttribute(s4, t8.type);
        this[e9] = (_c = r6 != null ? r6 : (_b2 = this._$Ej) == null ? void 0 : _b2.get(e9)) != null ? _c : r6, this._$Em = null;
      }
    }
    requestUpdate(t7, s4, i6) {
      var _a7, _b2;
      if (t7 !== void 0) {
        let e9 = this.constructor, h3 = this[t7];
        if (i6 != null || (i6 = e9.getPropertyOptions(t7)), !(((_a7 = i6.hasChanged) != null ? _a7 : f)(h3, s4) || i6.useDefault && i6.reflect && h3 === ((_b2 = this._$Ej) == null ? void 0 : _b2.get(t7)) && !this.hasAttribute(e9._$Eu(t7, i6)))) return;
        this.C(t7, s4, i6);
      }
      this.isUpdatePending === !1 && (this._$ES = this._$EP());
    }
    C(t7, s4, { useDefault: i6, reflect: e9, wrapped: h3 }, r6) {
      var _a7, _b2, _c;
      i6 && !((_a7 = this._$Ej) != null ? _a7 : this._$Ej = /* @__PURE__ */ new Map()).has(t7) && (this._$Ej.set(t7, (_b2 = r6 != null ? r6 : s4) != null ? _b2 : this[t7]), h3 !== !0 || r6 !== void 0) || (this._$AL.has(t7) || (this.hasUpdated || i6 || (s4 = void 0), this._$AL.set(t7, s4)), e9 === !0 && this._$Em !== t7 && ((_c = this._$Eq) != null ? _c : this._$Eq = /* @__PURE__ */ new Set()).add(t7));
    }
    async _$EP() {
      this.isUpdatePending = !0;
      try {
        await this._$ES;
      } catch (t8) {
        Promise.reject(t8);
      }
      let t7 = this.scheduleUpdate();
      return t7 != null && await t7, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var _a7, _b2;
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if ((_a7 = this.renderRoot) != null || (this.renderRoot = this.createRenderRoot()), this._$Ep) {
          for (let [t9, s5] of this._$Ep) this[t9] = s5;
          this._$Ep = void 0;
        }
        let t8 = this.constructor.elementProperties;
        if (t8.size > 0) for (let [s5, i6] of t8) {
          let { wrapped: t9 } = i6, e9 = this[s5];
          t9 !== !0 || this._$AL.has(s5) || e9 === void 0 || this.C(s5, void 0, i6, e9);
        }
      }
      let t7 = !1, s4 = this._$AL;
      try {
        t7 = this.shouldUpdate(s4), t7 ? (this.willUpdate(s4), (_b2 = this._$EO) == null || _b2.forEach(((t8) => {
          var _a8;
          return (_a8 = t8.hostUpdate) == null ? void 0 : _a8.call(t8);
        })), this.update(s4)) : this._$EM();
      } catch (s5) {
        throw t7 = !1, this._$EM(), s5;
      }
      t7 && this._$AE(s4);
    }
    willUpdate(t7) {
    }
    _$AE(t7) {
      var _a7;
      (_a7 = this._$EO) == null || _a7.forEach(((t8) => {
        var _a8;
        return (_a8 = t8.hostUpdated) == null ? void 0 : _a8.call(t8);
      })), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t7)), this.updated(t7);
    }
    _$EM() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(t7) {
      return !0;
    }
    update(t7) {
      this._$Eq && (this._$Eq = this._$Eq.forEach(((t8) => this._$ET(t8, this[t8])))), this._$EM();
    }
    updated(t7) {
    }
    firstUpdated(t7) {
    }
  }, _a2;
  y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p == null || p({ ReactiveElement: y }), ((_a2 = a.reactiveElementVersions) != null ? _a2 : a.reactiveElementVersions = []).push("2.1.1");

  // node_modules/lit-html/lit-html.js
  var t2 = globalThis, i3 = t2.trustedTypes, s2 = i3 ? i3.createPolicy("lit-html", { createHTML: (t7) => t7 }) : void 0, e3 = "$lit$", h2 = `lit$${Math.random().toFixed(9).slice(2)}$`, o3 = "?" + h2, n3 = `<${o3}>`, r3 = document, l2 = () => r3.createComment(""), c3 = (t7) => t7 === null || typeof t7 != "object" && typeof t7 != "function", a2 = Array.isArray, u2 = (t7) => a2(t7) || typeof (t7 == null ? void 0 : t7[Symbol.iterator]) == "function", d2 = `[ 	
\f\r]`, f2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, _ = />/g, m = RegExp(`>|${d2}(?:([^\\s"'>=/]+)(${d2}*=${d2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), p2 = /'/g, g = /"/g, $ = /^(?:script|style|textarea|title)$/i, y2 = (t7) => (i6, ...s4) => ({ _$litType$: t7, strings: i6, values: s4 }), x = y2(1), b2 = y2(2), w = y2(3), T = /* @__PURE__ */ Symbol.for("lit-noChange"), E = /* @__PURE__ */ Symbol.for("lit-nothing"), A = /* @__PURE__ */ new WeakMap(), C = r3.createTreeWalker(r3, 129);
  function P(t7, i6) {
    if (!a2(t7) || !t7.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return s2 !== void 0 ? s2.createHTML(i6) : i6;
  }
  var V = (t7, i6) => {
    let s4 = t7.length - 1, o8 = [], r6, l3 = i6 === 2 ? "<svg>" : i6 === 3 ? "<math>" : "", c4 = f2;
    for (let i7 = 0; i7 < s4; i7++) {
      let s5 = t7[i7], a3, u3, d3 = -1, y3 = 0;
      for (; y3 < s5.length && (c4.lastIndex = y3, u3 = c4.exec(s5), u3 !== null); ) y3 = c4.lastIndex, c4 === f2 ? u3[1] === "!--" ? c4 = v : u3[1] !== void 0 ? c4 = _ : u3[2] !== void 0 ? ($.test(u3[2]) && (r6 = RegExp("</" + u3[2], "g")), c4 = m) : u3[3] !== void 0 && (c4 = m) : c4 === m ? u3[0] === ">" ? (c4 = r6 != null ? r6 : f2, d3 = -1) : u3[1] === void 0 ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = u3[3] === void 0 ? m : u3[3] === '"' ? g : p2) : c4 === g || c4 === p2 ? c4 = m : c4 === v || c4 === _ ? c4 = f2 : (c4 = m, r6 = void 0);
      let x2 = c4 === m && t7[i7 + 1].startsWith("/>") ? " " : "";
      l3 += c4 === f2 ? s5 + n3 : d3 >= 0 ? (o8.push(a3), s5.slice(0, d3) + e3 + s5.slice(d3) + h2 + x2) : s5 + h2 + (d3 === -2 ? i7 : x2);
    }
    return [P(t7, l3 + (t7[s4] || "<?>") + (i6 === 2 ? "</svg>" : i6 === 3 ? "</math>" : "")), o8];
  }, N = class _N {
    constructor({ strings: t7, _$litType$: s4 }, n5) {
      let r6;
      this.parts = [];
      let c4 = 0, a3 = 0, u3 = t7.length - 1, d3 = this.parts, [f3, v2] = V(t7, s4);
      if (this.el = _N.createElement(f3, n5), C.currentNode = this.el.content, s4 === 2 || s4 === 3) {
        let t8 = this.el.content.firstChild;
        t8.replaceWith(...t8.childNodes);
      }
      for (; (r6 = C.nextNode()) !== null && d3.length < u3; ) {
        if (r6.nodeType === 1) {
          if (r6.hasAttributes()) for (let t8 of r6.getAttributeNames()) if (t8.endsWith(e3)) {
            let i6 = v2[a3++], s5 = r6.getAttribute(t8).split(h2), e9 = /([.?@])?(.*)/.exec(i6);
            d3.push({ type: 1, index: c4, name: e9[2], strings: s5, ctor: e9[1] === "." ? H : e9[1] === "?" ? I : e9[1] === "@" ? L : k }), r6.removeAttribute(t8);
          } else t8.startsWith(h2) && (d3.push({ type: 6, index: c4 }), r6.removeAttribute(t8));
          if ($.test(r6.tagName)) {
            let t8 = r6.textContent.split(h2), s5 = t8.length - 1;
            if (s5 > 0) {
              r6.textContent = i3 ? i3.emptyScript : "";
              for (let i6 = 0; i6 < s5; i6++) r6.append(t8[i6], l2()), C.nextNode(), d3.push({ type: 2, index: ++c4 });
              r6.append(t8[s5], l2());
            }
          }
        } else if (r6.nodeType === 8) if (r6.data === o3) d3.push({ type: 2, index: c4 });
        else {
          let t8 = -1;
          for (; (t8 = r6.data.indexOf(h2, t8 + 1)) !== -1; ) d3.push({ type: 7, index: c4 }), t8 += h2.length - 1;
        }
        c4++;
      }
    }
    static createElement(t7, i6) {
      let s4 = r3.createElement("template");
      return s4.innerHTML = t7, s4;
    }
  };
  function S2(t7, i6, s4 = t7, e9) {
    var _a7, _b2, _c;
    if (i6 === T) return i6;
    let h3 = e9 !== void 0 ? (_a7 = s4._$Co) == null ? void 0 : _a7[e9] : s4._$Cl, o8 = c3(i6) ? void 0 : i6._$litDirective$;
    return (h3 == null ? void 0 : h3.constructor) !== o8 && ((_b2 = h3 == null ? void 0 : h3._$AO) == null || _b2.call(h3, !1), o8 === void 0 ? h3 = void 0 : (h3 = new o8(t7), h3._$AT(t7, s4, e9)), e9 !== void 0 ? ((_c = s4._$Co) != null ? _c : s4._$Co = [])[e9] = h3 : s4._$Cl = h3), h3 !== void 0 && (i6 = S2(t7, h3._$AS(t7, i6.values), h3, e9)), i6;
  }
  var M = class {
    constructor(t7, i6) {
      this._$AV = [], this._$AN = void 0, this._$AD = t7, this._$AM = i6;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t7) {
      var _a7;
      let { el: { content: i6 }, parts: s4 } = this._$AD, e9 = ((_a7 = t7 == null ? void 0 : t7.creationScope) != null ? _a7 : r3).importNode(i6, !0);
      C.currentNode = e9;
      let h3 = C.nextNode(), o8 = 0, n5 = 0, l3 = s4[0];
      for (; l3 !== void 0; ) {
        if (o8 === l3.index) {
          let i7;
          l3.type === 2 ? i7 = new R(h3, h3.nextSibling, this, t7) : l3.type === 1 ? i7 = new l3.ctor(h3, l3.name, l3.strings, this, t7) : l3.type === 6 && (i7 = new z(h3, this, t7)), this._$AV.push(i7), l3 = s4[++n5];
        }
        o8 !== (l3 == null ? void 0 : l3.index) && (h3 = C.nextNode(), o8++);
      }
      return C.currentNode = r3, e9;
    }
    p(t7) {
      let i6 = 0;
      for (let s4 of this._$AV) s4 !== void 0 && (s4.strings !== void 0 ? (s4._$AI(t7, s4, i6), i6 += s4.strings.length - 2) : s4._$AI(t7[i6])), i6++;
    }
  }, R = class _R {
    get _$AU() {
      var _a7, _b2;
      return (_b2 = (_a7 = this._$AM) == null ? void 0 : _a7._$AU) != null ? _b2 : this._$Cv;
    }
    constructor(t7, i6, s4, e9) {
      var _a7;
      this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t7, this._$AB = i6, this._$AM = s4, this.options = e9, this._$Cv = (_a7 = e9 == null ? void 0 : e9.isConnected) != null ? _a7 : !0;
    }
    get parentNode() {
      let t7 = this._$AA.parentNode, i6 = this._$AM;
      return i6 !== void 0 && (t7 == null ? void 0 : t7.nodeType) === 11 && (t7 = i6.parentNode), t7;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t7, i6 = this) {
      t7 = S2(this, t7, i6), c3(t7) ? t7 === E || t7 == null || t7 === "" ? (this._$AH !== E && this._$AR(), this._$AH = E) : t7 !== this._$AH && t7 !== T && this._(t7) : t7._$litType$ !== void 0 ? this.$(t7) : t7.nodeType !== void 0 ? this.T(t7) : u2(t7) ? this.k(t7) : this._(t7);
    }
    O(t7) {
      return this._$AA.parentNode.insertBefore(t7, this._$AB);
    }
    T(t7) {
      this._$AH !== t7 && (this._$AR(), this._$AH = this.O(t7));
    }
    _(t7) {
      this._$AH !== E && c3(this._$AH) ? this._$AA.nextSibling.data = t7 : this.T(r3.createTextNode(t7)), this._$AH = t7;
    }
    $(t7) {
      var _a7;
      let { values: i6, _$litType$: s4 } = t7, e9 = typeof s4 == "number" ? this._$AC(t7) : (s4.el === void 0 && (s4.el = N.createElement(P(s4.h, s4.h[0]), this.options)), s4);
      if (((_a7 = this._$AH) == null ? void 0 : _a7._$AD) === e9) this._$AH.p(i6);
      else {
        let t8 = new M(e9, this), s5 = t8.u(this.options);
        t8.p(i6), this.T(s5), this._$AH = t8;
      }
    }
    _$AC(t7) {
      let i6 = A.get(t7.strings);
      return i6 === void 0 && A.set(t7.strings, i6 = new N(t7)), i6;
    }
    k(t7) {
      a2(this._$AH) || (this._$AH = [], this._$AR());
      let i6 = this._$AH, s4, e9 = 0;
      for (let h3 of t7) e9 === i6.length ? i6.push(s4 = new _R(this.O(l2()), this.O(l2()), this, this.options)) : s4 = i6[e9], s4._$AI(h3), e9++;
      e9 < i6.length && (this._$AR(s4 && s4._$AB.nextSibling, e9), i6.length = e9);
    }
    _$AR(t7 = this._$AA.nextSibling, i6) {
      var _a7;
      for ((_a7 = this._$AP) == null ? void 0 : _a7.call(this, !1, !0, i6); t7 !== this._$AB; ) {
        let i7 = t7.nextSibling;
        t7.remove(), t7 = i7;
      }
    }
    setConnected(t7) {
      var _a7;
      this._$AM === void 0 && (this._$Cv = t7, (_a7 = this._$AP) == null || _a7.call(this, t7));
    }
  }, k = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t7, i6, s4, e9, h3) {
      this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t7, this.name = i6, this._$AM = e9, this.options = h3, s4.length > 2 || s4[0] !== "" || s4[1] !== "" ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = E;
    }
    _$AI(t7, i6 = this, s4, e9) {
      let h3 = this.strings, o8 = !1;
      if (h3 === void 0) t7 = S2(this, t7, i6, 0), o8 = !c3(t7) || t7 !== this._$AH && t7 !== T, o8 && (this._$AH = t7);
      else {
        let e10 = t7, n5, r6;
        for (t7 = h3[0], n5 = 0; n5 < h3.length - 1; n5++) r6 = S2(this, e10[s4 + n5], i6, n5), r6 === T && (r6 = this._$AH[n5]), o8 || (o8 = !c3(r6) || r6 !== this._$AH[n5]), r6 === E ? t7 = E : t7 !== E && (t7 += (r6 != null ? r6 : "") + h3[n5 + 1]), this._$AH[n5] = r6;
      }
      o8 && !e9 && this.j(t7);
    }
    j(t7) {
      t7 === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t7 != null ? t7 : "");
    }
  }, H = class extends k {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t7) {
      this.element[this.name] = t7 === E ? void 0 : t7;
    }
  }, I = class extends k {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t7) {
      this.element.toggleAttribute(this.name, !!t7 && t7 !== E);
    }
  }, L = class extends k {
    constructor(t7, i6, s4, e9, h3) {
      super(t7, i6, s4, e9, h3), this.type = 5;
    }
    _$AI(t7, i6 = this) {
      var _a7;
      if ((t7 = (_a7 = S2(this, t7, i6, 0)) != null ? _a7 : E) === T) return;
      let s4 = this._$AH, e9 = t7 === E && s4 !== E || t7.capture !== s4.capture || t7.once !== s4.once || t7.passive !== s4.passive, h3 = t7 !== E && (s4 === E || e9);
      e9 && this.element.removeEventListener(this.name, this, s4), h3 && this.element.addEventListener(this.name, this, t7), this._$AH = t7;
    }
    handleEvent(t7) {
      var _a7, _b2;
      typeof this._$AH == "function" ? this._$AH.call((_b2 = (_a7 = this.options) == null ? void 0 : _a7.host) != null ? _b2 : this.element, t7) : this._$AH.handleEvent(t7);
    }
  }, z = class {
    constructor(t7, i6, s4) {
      this.element = t7, this.type = 6, this._$AN = void 0, this._$AM = i6, this.options = s4;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t7) {
      S2(this, t7);
    }
  };
  var j = t2.litHtmlPolyfillSupport, _a3;
  j == null || j(N, R), ((_a3 = t2.litHtmlVersions) != null ? _a3 : t2.litHtmlVersions = []).push("3.3.1");
  var B = (t7, i6, s4) => {
    var _a7, _b2;
    let e9 = (_a7 = s4 == null ? void 0 : s4.renderBefore) != null ? _a7 : i6, h3 = e9._$litPart$;
    if (h3 === void 0) {
      let t8 = (_b2 = s4 == null ? void 0 : s4.renderBefore) != null ? _b2 : null;
      e9._$litPart$ = h3 = new R(i6.insertBefore(l2(), t8), t8, void 0, s4 != null ? s4 : {});
    }
    return h3._$AI(t7), h3;
  };

  // node_modules/lit-element/lit-element.js
  var s3 = globalThis, i4 = class extends y {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      var _a7, _b2;
      let t7 = super.createRenderRoot();
      return (_b2 = (_a7 = this.renderOptions).renderBefore) != null || (_a7.renderBefore = t7.firstChild), t7;
    }
    update(t7) {
      let r6 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t7), this._$Do = B(r6, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var _a7;
      super.connectedCallback(), (_a7 = this._$Do) == null || _a7.setConnected(!0);
    }
    disconnectedCallback() {
      var _a7;
      super.disconnectedCallback(), (_a7 = this._$Do) == null || _a7.setConnected(!1);
    }
    render() {
      return T;
    }
  }, _a4;
  i4._$litElement$ = !0, i4.finalized = !0, (_a4 = s3.litElementHydrateSupport) == null || _a4.call(s3, { LitElement: i4 });
  var o4 = s3.litElementPolyfillSupport;
  o4 == null || o4({ LitElement: i4 });
  var _a5;
  ((_a5 = s3.litElementVersions) != null ? _a5 : s3.litElementVersions = []).push("4.2.1");

  // tooldrawer/lib/livereloader.ts
  var Livereloader = class {
    constructor(config) {
      this._stale = !1;
      this._disabled = !1;
      this._listener = (event) => {
        this._shouldReload(event.data) && (this._stale = !0, this._disabled || this._reload());
      };
      this.artifactName = config.artifactName, new BroadcastChannel("live-reload").addEventListener(
        "message",
        this._listener
      );
      let workerPort = new SharedWorker(config.workerJs, {
        name: "livereload-worker"
      }).port;
      workerPort.start(), workerPort.postMessage(config);
    }
    get disabled() {
      return this._disabled;
    }
    set disabled(disabled) {
      this._disabled = disabled, !disabled && this._stale && this._reload();
    }
    _reload() {
      location.reload(), this._stale = !1;
    }
    _shouldReload(message) {
      switch (message.type) {
        case "restart":
          return !0;
        case "reload":
          return message.path === this.artifactName;
        default:
          return !1;
      }
    }
  };

  // tooldrawer/lib/marshall.ts
  var Marshall = class {
    constructor(propMap) {
      this.propMap = propMap;
    }
    serialize(value) {
      return JSON.stringify(
        Object.keys(this.propMap).reduce(
          (pick, name) => ({ ...pick, [name]: value[name] }),
          {}
        )
      );
    }
    /**
     * Deserialize saved state.
     *
     * Note that this may throw various exceptions if deserialization fails.
     */
    deserialize(serialized) {
      let data = JSON.parse(serialized != null ? serialized : ""), value = {};
      for (let prop in this.propMap) {
        let { validate } = this.propMap[prop];
        validate(data[prop]), value[prop] = data[prop];
      }
      return value;
    }
  }, marshallTypes = {
    boolean: {
      type: Boolean,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validate(v2) {
        if (typeof v2 != "boolean")
          throw new Error(`${v2} is not an boolean`);
      }
    },
    number: {
      type: Number,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validate(v2) {
        if (typeof v2 != "number" || isNaN(v2))
          throw new Error(`${v2} is not an number`);
      }
    }
  };

  // node_modules/@lit/reactive-element/decorators/custom-element.js
  var t3 = (t7) => (e9, o8) => {
    o8 !== void 0 ? o8.addInitializer((() => {
      customElements.define(t7, e9);
    })) : customElements.define(t7, e9);
  };

  // node_modules/@lit/reactive-element/decorators/property.js
  var o5 = { attribute: !0, type: String, converter: u, reflect: !1, hasChanged: f }, r4 = (t7 = o5, e9, r6) => {
    let { kind: n5, metadata: i6 } = r6, s4 = globalThis.litPropertyMetadata.get(i6);
    if (s4 === void 0 && globalThis.litPropertyMetadata.set(i6, s4 = /* @__PURE__ */ new Map()), n5 === "setter" && ((t7 = Object.create(t7)).wrapped = !0), s4.set(r6.name, t7), n5 === "accessor") {
      let { name: o8 } = r6;
      return { set(r7) {
        let n6 = e9.get.call(this);
        e9.set.call(this, r7), this.requestUpdate(o8, n6, t7);
      }, init(e10) {
        return e10 !== void 0 && this.C(o8, void 0, t7, e10), e10;
      } };
    }
    if (n5 === "setter") {
      let { name: o8 } = r6;
      return function(r7) {
        let n6 = this[o8];
        e9.call(this, r7), this.requestUpdate(o8, n6, t7);
      };
    }
    throw Error("Unsupported decorator location: " + n5);
  };
  function n4(t7) {
    return (e9, o8) => typeof o8 == "object" ? r4(t7, e9, o8) : ((t8, e10, o9) => {
      let r6 = e10.hasOwnProperty(o9);
      return e10.constructor.createProperty(o9, t8), r6 ? Object.getOwnPropertyDescriptor(e10, o9) : void 0;
    })(t7, e9, o8);
  }

  // node_modules/@lit/reactive-element/decorators/state.js
  function r5(r6) {
    return n4({ ...r6, state: !0, attribute: !1 });
  }

  // node_modules/@lit/reactive-element/decorators/event-options.js
  function t4(t7) {
    return (n5, o8) => {
      let c4 = typeof n5 == "function" ? n5 : n5[o8];
      Object.assign(c4, t7);
    };
  }

  // node_modules/@lit/reactive-element/decorators/base.js
  var e4 = (e9, t7, c4) => (c4.configurable = !0, c4.enumerable = !0, Reflect.decorate && typeof t7 != "object" && Object.defineProperty(e9, t7, c4), c4);

  // node_modules/@lit/reactive-element/decorators/query.js
  function e5(e9, r6) {
    return (n5, s4, i6) => {
      let o8 = (t7) => {
        var _a7, _b2;
        return (_b2 = (_a7 = t7.renderRoot) == null ? void 0 : _a7.querySelector(e9)) != null ? _b2 : null;
      };
      if (r6) {
        let { get: e10, set: r7 } = typeof s4 == "object" ? n5 : i6 != null ? i6 : /* @__PURE__ */ (() => {
          let t7 = /* @__PURE__ */ Symbol();
          return { get() {
            return this[t7];
          }, set(e11) {
            this[t7] = e11;
          } };
        })();
        return e4(n5, s4, { get() {
          let t7 = e10.call(this);
          return t7 === void 0 && (t7 = o8(this), (t7 !== null || this.hasUpdated) && r7.call(this, t7)), t7;
        } });
      }
      return e4(n5, s4, { get() {
        return o8(this);
      } });
    };
  }

  // node_modules/lit-html/directive.js
  var t5 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, e6 = (t7) => (...e9) => ({ _$litDirective$: t7, values: e9 }), i5 = class {
    constructor(t7) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t7, e9, i6) {
      this._$Ct = t7, this._$AM = e9, this._$Ci = i6;
    }
    _$AS(t7, e9) {
      return this.update(t7, e9);
    }
    update(t7, e9) {
      return this.render(...e9);
    }
  };

  // node_modules/lit-html/directives/class-map.js
  var e7 = e6(class extends i5 {
    constructor(t7) {
      var _a7;
      if (super(t7), t7.type !== t5.ATTRIBUTE || t7.name !== "class" || ((_a7 = t7.strings) == null ? void 0 : _a7.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t7) {
      return " " + Object.keys(t7).filter(((s4) => t7[s4])).join(" ") + " ";
    }
    update(s4, [i6]) {
      var _a7, _b2;
      if (this.st === void 0) {
        this.st = /* @__PURE__ */ new Set(), s4.strings !== void 0 && (this.nt = new Set(s4.strings.join(" ").split(/\s/).filter(((t7) => t7 !== ""))));
        for (let t7 in i6) i6[t7] && !((_a7 = this.nt) != null && _a7.has(t7)) && this.st.add(t7);
        return this.render(i6);
      }
      let r6 = s4.element.classList;
      for (let t7 of this.st) t7 in i6 || (r6.remove(t7), this.st.delete(t7));
      for (let t7 in i6) {
        let s5 = !!i6[t7];
        s5 === this.st.has(t7) || (_b2 = this.nt) != null && _b2.has(t7) || (s5 ? (r6.add(t7), this.st.add(t7)) : (r6.remove(t7), this.st.delete(t7)));
      }
      return T;
    }
  });

  // tooldrawer/components/controllers/window-event-listener.ts
  var WindowEventListenerController = class {
    constructor(host, options) {
      this._connected = !1;
      this._windowEventListeners = /* @__PURE__ */ new Map();
      this._listener = (event) => {
        var _a7;
        (_a7 = this._windowEventListeners.get(event.type)) == null || _a7.map((listener) => listener.call(this.host, event));
      };
      this.host = host, this.options = options != null ? options : {}, host.addController(this);
    }
    hostConnected() {
      for (let [eventType] of this._windowEventListeners)
        window.addEventListener(eventType, this._listener, this.options);
      this._connected = !0;
    }
    hostDisconnected() {
      this._removeHandlers(), this._connected = !1;
    }
    add(eventType, listener) {
      let listeners = this._windowEventListeners.get(eventType);
      listeners ? listeners.push(listener) : (this._connected && window.addEventListener(eventType, this._listener, this.options), this._windowEventListeners.set(eventType, [listener]));
    }
    clear() {
      this._removeHandlers(), this._windowEventListeners.clear();
    }
    _removeHandlers() {
      for (let [eventType] of this._windowEventListeners)
        window.removeEventListener(eventType, this._listener, this.options);
    }
  };

  // tooldrawer/components/widget.ts
  function WidgetMixin(Base) {
    class WidgetClass extends Base {
      constructor() {
        super(...arguments);
        this.widgetRole = "widget";
        this.label = "";
      }
    }
    return __decorateClass([
      n4({ attribute: !1 })
    ], WidgetClass.prototype, "widgetRole", 2), __decorateClass([
      n4()
    ], WidgetClass.prototype, "label", 2), __decorateClass([
      n4()
    ], WidgetClass.prototype, "tooltip", 2), WidgetClass;
  }

  // tooldrawer/components/drag-handle.ts
  var DragEvent = class extends Event {
    constructor(type_, init) {
      super(type_, init), this.clientX = init.clientX, this.clientY = init.clientY;
    }
  }, DragHandle = class extends i4 {
    constructor() {
      super(...arguments);
      this._dragging = !1;
      this._windowEventListeners = new WindowEventListenerController(this, {
        passive: !0,
        capture: !0
      });
    }
    render() {
      return x`
      <div
        id="handle"
        aria-hidden="true"
        title="Drag to reposition"
        @mousedown=${this._onmousedown}
        @touchstart=${this._ontouchstart}
      >
        <div id="icon"></div>
      </div>
      ${this._dragging ? x`<div id="cover"></div>` : null}
    `;
    }
    _onmousedown(event) {
      event.buttons === 1 && (event.preventDefault(), this._windowEventListeners.add("mousemove", this._onmousemove), this._windowEventListeners.add("mouseup", this._dragStop), this._drag("drag-start", event));
    }
    _onmousemove(event) {
      event.buttons !== 1 ? this._dragStop() : this._drag("drag-move", event);
    }
    _ontouchstart(event) {
      event.targetTouches.length === 1 && (this._windowEventListeners.add("touchmove", this._ontouchmove), this._windowEventListeners.add("touchend", this._dragStop), this._windowEventListeners.add("touchcancel", this._dragStop), this._drag("drag-start", event.targetTouches[0]));
    }
    _ontouchmove(event) {
      event.targetTouches.length !== 1 ? this._dragStop() : this._drag("drag-move", event.targetTouches[0]);
    }
    _drag(eventType, pos) {
      this._dragging = !0, this.dispatchEvent(
        new DragEvent(eventType, {
          bubbles: !0,
          composed: !0,
          clientX: pos.clientX,
          clientY: pos.clientY
        })
      );
    }
    _dragStop() {
      this._dragging = !1, this._windowEventListeners.clear(), this.dispatchEvent(
        new Event("drag-stop", { bubbles: !0, composed: !0 })
      );
    }
  };
  DragHandle.styles = i`
    #handle {
      --dot-size: 6px;
      --margin: 2px;
      cursor: grab;
      width: calc(2 * var(--dot-size) + 2 * var(--margin));
      height: 100%;
      display: flex;
    }
    #icon {
      margin: var(--margin);
      flex-grow: 1;
      background: radial-gradient(currentcolor 35%, transparent 45%) left /
        var(--dot-size) var(--dot-size) repeat space;
    }

    #cover {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 10000;
      cursor: grabbing;
    }
  `, __decorateClass([
    r5()
  ], DragHandle.prototype, "_dragging", 2), __decorateClass([
    t4({ passive: !0, capture: !0 })
  ], DragHandle.prototype, "_ontouchstart", 1), DragHandle = __decorateClass([
    t3("lektor-drag-handle")
  ], DragHandle);

  // node_modules/lit-html/directives/unsafe-html.js
  var e8 = class extends i5 {
    constructor(i6) {
      if (super(i6), this.it = E, i6.type !== t5.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
    }
    render(r6) {
      if (r6 === E || r6 == null) return this._t = void 0, this.it = r6;
      if (r6 === T) return r6;
      if (typeof r6 != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
      if (r6 === this.it) return this._t;
      this.it = r6;
      let s4 = [r6];
      return s4.raw = s4, this._t = { _$litType$: this.constructor.resultType, strings: s4, values: [] };
    }
  };
  e8.directiveName = "unsafeHTML", e8.resultType = 1;
  var o6 = e6(e8);

  // node_modules/lit-html/directives/unsafe-svg.js
  var t6 = class extends e8 {
  };
  t6.directiveName = "unsafeSVG", t6.resultType = 2;
  var o7 = e6(t6);

  // tooldrawer/components/icon.ts
  var iconSvg = new Map(
    Object.entries(define_SVG_ICONS_FONTAWESOME_default != null ? define_SVG_ICONS_FONTAWESOME_default : {}).map(([name, svg]) => [
      name,
      x`${o7(svg)}`
    ])
  );
  iconSvg.size === 0 && console.warn("No icon data is available");
  var LektorIcon = class extends i4 {
    constructor() {
      super(...arguments);
      this.icon = "";
    }
    render() {
      return iconSvg.get(this.icon);
    }
  };
  LektorIcon.styles = i`
    :host {
      width: 1em;
      display: flex;
      place-items: center stretch;
    }
  `, __decorateClass([
    n4()
  ], LektorIcon.prototype, "icon", 2), LektorIcon = __decorateClass([
    t3("lektor-icon")
  ], LektorIcon);

  // tooldrawer/components/drawer.ts
  var LektorDrawer = class extends WidgetMixin(i4) {
    constructor() {
      super();
      this.widgetRole = "menubar";
      this.open = !0;
      this.clientY = 5;
      this._closing = !1;
      new WindowEventListenerController(this).add("resize", this._clampPosition), this._hostStyle = getComputedStyle(this);
    }
    firstUpdated() {
      this._clampPosition();
    }
    willUpdate(changedProperties) {
      this._closing = changedProperties.has("open") && !this.open && this.hasUpdated && this._drawer.matches(":hover"), changedProperties.has("clientY") && this._clampPosition();
    }
    /**
     * Clamp vertical position of tool drawer to ensure that it is visible.
     */
    _clampPosition() {
      if (this.hasUpdated) {
        let marginTop = parseInt(this._hostStyle.marginTop), marginBottom = parseInt(this._hostStyle.marginBottom), ymax = window.innerHeight - this._drawer.offsetHeight - marginBottom;
        this.clientY = Math.max(marginTop, Math.min(ymax, this.clientY));
      }
    }
    render() {
      var _a7;
      return x`
      <div
        id="drawer"
        role="menubar"
        class=${e7({
        open: this.open,
        closing: this._closing
      })}
        style="top: ${this.clientY}px;"
        @keydown=${this._onkeydown}
        @mouseleave=${this._closing ? this._mouseleave : E}
        title=${((_a7 = this.tooltip) != null ? _a7 : this.label) || E}
        aria-label=${this.label}
      >
        ${this._renderToggle()}
        <slot></slot>
        ${this._renderDragHandle()}
      </div>
    `;
    }
    _mouseleave() {
      this._closing = !1;
    }
    _onkeydown(event) {
      let navKeyFocusNextMap = {
        ArrowLeft: (cur) => cur.previousElementSibling,
        ArrowRight: (cur) => cur.nextElementSibling,
        Home: (cur) => {
          var _a7;
          return (_a7 = cur.parentElement) == null ? void 0 : _a7.firstElementChild;
        },
        End: (cur) => {
          var _a7;
          return (_a7 = cur.parentElement) == null ? void 0 : _a7.lastElementChild;
        },
        ArrowUp: () => null,
        ArrowDown: () => null
      };
      if (event.code in navKeyFocusNextMap) {
        let keycode = event.code, focused = event.target, focusNext = navKeyFocusNextMap[keycode](focused);
        event.preventDefault(), focusNext instanceof HTMLElement && focusNext.focus();
      }
    }
    _renderToggle() {
      return x`
      <div
        id="toggle"
        class="control"
        title="Click to hide/show drawer"
        aria-hidden="true"
        @click=${this._toggle}
      >
        <lektor-icon id="icon-open" .icon=${"faAngleRight"}></lektor-icon>
        <lektor-icon id="icon-closed" .icon=${"faAngleLeft"}></lektor-icon>
        <lektor-icon id="icon-hovered" .icon=${"faThumbtack"}></lektor-icon>
      </div>
    `;
    }
    _toggle() {
      this.open = !this.open, this.dispatchEvent(new Event("change", { bubbles: !0 }));
    }
    _renderDragHandle() {
      return x`
      <lektor-drag-handle
        class="control"
        @drag-start=${this._ondragstart}
        @drag-move=${this._ondragmove}
        @drag-stop=${this._ondragstop}
      ></lektor-drag-handle>
    `;
    }
    _ondragstart(event) {
      this._dragOffset = this.clientY - event.clientY;
    }
    _ondragmove(event) {
      this.clientY = event.clientY + this._dragOffset;
    }
    _ondragstop() {
      this.dispatchEvent(new Event("change", { bubbles: !0 }));
    }
  };
  LektorDrawer.styles = i`
    :host {
      /* The top and bottom margins of the host are used to set
       * limits the drag range of the drawer. */
      margin: 5px 0px;
    }
    #drawer {
      position: fixed;
      right: 0;
      z-index: 1000;

      min-height: 32px; /* 2rem */
      color: var(--lektor-drawer-color, hsl(336, 16%, 50%));
      background-color: var(--lektor-drawer-bg, hsla(24, 5%, 85%, 0.87));
      border: 1px solid var(--lektor-drawer-border-color, hsl(24, 2%, 67%));
      border-right: none;
      border-radius: 3px 0 0 3px;

      display: flex;

      /* move drawer off-screen to the right just enough to leave the toggle control visible */
      transform: translateX(calc(100% - 17px));
      transition: transform 0.5s ease-out;
    }
    #drawer.open,
    #drawer:not(.closing):where(:hover, :active, :focus-within) {
      /* open drawer */
      transform: none;
    }

    .control:is(:hover, :active) {
      color: var(--lektor-drawer-hover-color, hsl(336, 43%, 33%));
    }

    #toggle {
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    lektor-icon {
      width: 12px;
      margin: 2px;
    }
    #drawer:not(.open) #icon-open,
    #drawer:where(.open, .closing, :not(:hover, :active, :focus-within))
      #icon-hovered,
    #drawer:where(.open, :not(.closing):where(:hover, :active, :focus-within))
      #icon-closed {
      display: none;
    }

    ::slotted(*) {
      font-size: 28px;
    }

    slot {
      margin: 3px;
      display: flex;
      align-items: center;
      gap: 3px;
    }
  `, __decorateClass([
    n4({ attribute: !1 })
  ], LektorDrawer.prototype, "widgetRole", 2), __decorateClass([
    n4({ type: Boolean, reflect: !0 })
  ], LektorDrawer.prototype, "open", 2), __decorateClass([
    n4({ attribute: !1 })
  ], LektorDrawer.prototype, "clientY", 2), __decorateClass([
    r5()
  ], LektorDrawer.prototype, "_closing", 2), __decorateClass([
    e5("#drawer", !0)
  ], LektorDrawer.prototype, "_drawer", 2), LektorDrawer = __decorateClass([
    t3("lektor-drawer")
  ], LektorDrawer);

  // tooldrawer/components/css/button.ts
  var button_default = i`
  .button {
    --default-color: hsl(336, 33%, 43%);
    --default-border-color: hsl(24, 2%, 80%);

    padding: 2px 3px;
    border: 1px outset
      var(--lektor-button-border-color, var(--default-border-color));
    border-radius: 3px;

    color: var(--lektor-button-color, var(--default-color));
    background-color: var(--lektor-button-bg, hsl(24, 5%, 93%));

    aspect-ratio: 1/1;
    cursor: pointer;
  }
  .button:hover {
    color: var(--lektor-button-hover-color, var(--default-color));
    background-color: var(--lektor-button-hover-bg, hsl(24, 7%, 98%));
    border-color: var(--lektor-button-border-hover-color, hsl(24, 2%, 67%));
  }
  .button:active,
  .button.active:not(:hover) {
    color: var(--lektor-button-active-color, var(--default-color));
    background-color: var(--lektor-button-active-bg, hsl(24, 5%, 87%));
    border-color: var(
      --lektor-button-border-active-color,
      var(--default-border-color)
    );
  }
  .button:active,
  .button.active {
    border-style: inset;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

  // tooldrawer/components/link-button.ts
  var LinkButton = class extends WidgetMixin(i4) {
    constructor() {
      super(...arguments);
      this.href = "";
      this.widgetRole = "link";
    }
    render() {
      var _a7;
      return x`
      <a
        href=${this.href}
        class="button"
        role=${this.widgetRole !== "link" ? this.widgetRole : E}
        title=${((_a7 = this.tooltip) != null ? _a7 : this.label) || E}
        aria-label=${this.label}
      >
        <slot></slot>
      </a>
    `;
    }
  };
  LinkButton.shadowRootOptions = {
    ...i4.shadowRootOptions,
    delegatesFocus: !0
  }, LinkButton.styles = button_default, __decorateClass([
    n4()
  ], LinkButton.prototype, "href", 2), __decorateClass([
    n4({ attribute: !1 })
  ], LinkButton.prototype, "widgetRole", 2), LinkButton = __decorateClass([
    t3("lektor-link-button")
  ], LinkButton);

  // tooldrawer/components/css/visually-hidden.ts
  var visually_hidden_default = i`
  .visually-hidden {
    position: absolute;
    height: 1px;
    width: 1px;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }
`;

  // tooldrawer/components/checkbox-button.ts
  var CheckboxButton = class extends WidgetMixin(i4) {
    constructor() {
      super(...arguments);
      this.checked = !1;
      this.widgetRole = "checkbox";
    }
    render() {
      var _a7;
      return x`
      <input
        id="cb"
        type="checkbox"
        class="visually-hidden"
        .checked=${this.checked}
        @change=${this._onchange}
        @keyup=${this._onkeyup}
        role=${this.widgetRole !== "checkbox" ? this.widgetRole : E}
        aria-checked=${this.widgetRole === "switch" ? this.checked : E}
      />
      <label
        for="cb"
        class=${e7({ button: !0, active: this.checked })}
        title=${((_a7 = this.tooltip) != null ? _a7 : this.label) || E}
      >
        <span class="visually-hidden">${this.label}</span>
        <slot></slot>
      </label>
    `;
    }
    _onchange() {
      this.checked = this._checkbox.checked, this.dispatchEvent(new Event("change", { bubbles: !0 }));
    }
    _onkeyup(event) {
      event.code === "Enter" && (event.preventDefault(), this.checked = !this.checked);
    }
  };
  CheckboxButton.shadowRootOptions = {
    ...i4.shadowRootOptions,
    delegatesFocus: !0
  }, CheckboxButton.styles = [
    button_default,
    visually_hidden_default,
    i`
      /*
       * Attempt to replicate browser's native focus style for the label
       *
       * https://css-tricks.com/copy-the-browsers-native-focus-styles/
       */
      input:focus-visible + label {
        outline: 5px auto black;
        outline-offset: 1px;
        outline-color: Highlight;
        outline-color: -webkit-focus-ring-color;
      }
    `
  ], __decorateClass([
    n4({ type: Boolean, reflect: !0 })
  ], CheckboxButton.prototype, "checked", 2), __decorateClass([
    n4({ attribute: !1 })
  ], CheckboxButton.prototype, "widgetRole", 2), __decorateClass([
    e5("input", !0)
  ], CheckboxButton.prototype, "_checkbox", 2), CheckboxButton = __decorateClass([
    t3("lektor-checkbox-button")
  ], CheckboxButton);

  // tooldrawer/components/livereload-widget.ts
  var LivereloadWidget = class extends WidgetMixin(i4) {
    constructor() {
      super(...arguments);
      this.livereloadDisabled = !0;
      this.widgetRole = "switch";
      this._queryParam = new QueryParamController(this, {
        paramName: "livereload"
      });
    }
    willUpdate() {
      this.livereloader && (this.livereloader.disabled = this.livereloadDisabled);
    }
    render() {
      return x`
      <lektor-checkbox-button
        .checked=${!this.livereloadDisabled}
        @change=${this._onchange}
        .widgetRole=${this.widgetRole}
        .label=${this.label}
        .tooltip=${this.tooltip}
      >
        <lektor-icon icon="faRetweet"></lektor-icon>
      </lektor-checkbox-button>
    `;
    }
    _onchange() {
      this.livereloadDisabled = this._queryParam.disabled = !this._checkbox.checked, this.dispatchEvent(new Event("change", { bubbles: !0 }));
    }
  };
  LivereloadWidget.shadowRootOptions = {
    ...i4.shadowRootOptions,
    delegatesFocus: !0
  }, LivereloadWidget.styles = i`
    lektor-icon {
      position: relative;
    }
    lektor-checkbox-button:not([checked]) lektor-icon::before {
      /* red slash over icon when unchecked */
      --slash-color: var(--lektor-button-slash-color, hsl(349, 80%, 45%));
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to left top,
        transparent 45%,
        var(--slash-color) 46%,
        var(--slash-color) 54%,
        transparent 55%
      );
      opacity: 0.9;
    }
  `, __decorateClass([
    n4({ attribute: !1 })
  ], LivereloadWidget.prototype, "livereloadDisabled", 2), __decorateClass([
    n4({ attribute: !1 })
  ], LivereloadWidget.prototype, "livereloader", 2), __decorateClass([
    n4({ attribute: !1 })
  ], LivereloadWidget.prototype, "widgetRole", 2), __decorateClass([
    e5("lektor-checkbox-button", !0)
  ], LivereloadWidget.prototype, "_checkbox", 2), LivereloadWidget = __decorateClass([
    t3("lektor-livereload-widget")
  ], LivereloadWidget);
  var QueryParamController = class {
    constructor(host, { paramName }) {
      this._update = () => {
        let disabled = this.disabled;
        !!this.host.livereloadDisabled !== disabled && (this.host.livereloadDisabled = disabled, this.host.dispatchEvent(new Event("change", { bubbles: !0 })));
      };
      this.host = host, this.paramName = paramName, host.addController(this);
    }
    hostConnected() {
      window.addEventListener("popstate", this._update), window.addEventListener("load", this._update), this._update();
    }
    hostDisconnected() {
      window.removeEventListener("popstate", this._update), window.removeEventListener("load", this._update), this.host.livereloadDisabled = !0;
    }
    get disabled() {
      let value = new URLSearchParams(location.search).get(this.paramName);
      return /^(false|no|0)$/i.test(value || "");
    }
    set disabled(value) {
      if (!!value !== this.disabled) {
        let url = new URL(window.location.href);
        value ? url.searchParams.set(this.paramName, "false") : url.searchParams.delete(this.paramName), window.history.pushState(null, "", url.href);
      }
    }
  };

  // tooldrawer/index.ts
  var _a6, { editUrl, livereloadConfig } = (_a6 = globalThis.TOOLDRAWER_CONFIG) != null ? _a6 : {};
  window === window.top && (editUrl || livereloadConfig) && document.addEventListener(
    "DOMContentLoaded",
    () => {
      B(tooldrawer({ editUrl, livereloadConfig }), document.body), persistDrawerState(document.getElementsByTagName("lektor-drawer")[0]);
    },
    { once: !0 }
  );
  function tooldrawer({ editUrl: editUrl2, livereloadConfig: livereloadConfig2 }) {
    let tools = new Array();
    if (editUrl2 && tools.push(x`
      <lektor-link-button
        .href=${editUrl2}
        .widgetRole=${"menuitem"}
        .label=${"Edit Page"}
      >
        <lektor-icon icon="faFilePen"></lektor-icon>
      </lektor-link-button>
    `), livereloadConfig2) {
      let livereloader = new Livereloader(livereloadConfig2);
      tools.push(x`
      <lektor-livereload-widget
        .widgetRole=${"menuitemcheckbox"}
        .label=${"Enable Live-Reload"}
        .livereloader=${livereloader}
      ></lektor-livereload-widget>
    `);
    }
    return x`
    <lektor-drawer .widgetRole=${"menubar"} .label=${"Lektor Controls"}>
      ${tools}
    </lektor-drawer>
  `;
  }
  function persistDrawerState(drawer) {
    var _a7;
    let storage = localStorage, storageKey = "com.getlektor--tooldrawer-state", marshall = new Marshall({
      open: marshallTypes.boolean,
      clientY: marshallTypes.number
    });
    try {
      let savedState = marshall.deserialize(
        (_a7 = storage.getItem(storageKey)) != null ? _a7 : "{}"
      );
      Object.assign(drawer, savedState);
    } catch (err) {
      console.log("ignoring invalid saved drawer state: %o", err);
    }
    drawer.addEventListener("change", () => {
      storage.setItem(storageKey, marshall.serialize(drawer));
    });
  }
})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
lit-html/directive.js:
lit-html/directives/unsafe-html.js:
lit-html/directives/unsafe-svg.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=tooldrawer.js.map
