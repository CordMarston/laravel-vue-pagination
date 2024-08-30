import { resolveComponent as Ve, openBlock as f, createElementBlock as y, Fragment as oe, createTextVNode as pe, createVNode as we, withCtx as Oe, mergeProps as L, normalizeClass as G, createElementVNode as b, toHandlers as q, renderSlot as $, createCommentVNode as H, renderList as xe, toDisplayString as Y, resolveDirective as Nt, normalizeProps as W, guardReactiveProps as I, createBlock as Ne, resolveDynamicComponent as ze, withDirectives as We, vShow as ut, Transition as zt, withModifiers as dt, nextTick as Wt } from "vue";
const qe = {
  emits: ["pagination-change-page"],
  props: {
    data: {
      type: Object,
      default: () => {
      }
    },
    limit: {
      type: Number,
      default: 0
    },
    keepLength: {
      type: Boolean,
      default: !1
    },
    showElipses: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    isApiResource() {
      return !!this.data.meta;
    },
    currentPage() {
      var e;
      return this.isApiResource ? this.data.meta.current_page : (e = this.data.current_page) != null ? e : null;
    },
    firstPageUrl() {
      var e, t, a, i, n;
      return (n = (i = (t = this.data.first_page_url) != null ? t : (e = this.data.meta) == null ? void 0 : e.first_page_url) != null ? i : (a = this.data.links) == null ? void 0 : a.first) != null ? n : null;
    },
    from() {
      var e;
      return this.isApiResource ? this.data.meta.from : (e = this.data.from) != null ? e : null;
    },
    lastPage() {
      var e;
      return this.isApiResource ? this.data.meta.last_page : (e = this.data.last_page) != null ? e : null;
    },
    lastPageUrl() {
      var e, t, a, i, n;
      return (n = (i = (t = this.data.last_page_url) != null ? t : (e = this.data.meta) == null ? void 0 : e.last_page_url) != null ? i : (a = this.data.links) == null ? void 0 : a.last) != null ? n : null;
    },
    nextPageUrl() {
      var e, t, a, i, n;
      return (n = (i = (t = this.data.next_page_url) != null ? t : (e = this.data.meta) == null ? void 0 : e.next_page_url) != null ? i : (a = this.data.links) == null ? void 0 : a.next) != null ? n : null;
    },
    perPage() {
      var e;
      return this.isApiResource ? this.data.meta.per_page : (e = this.data.per_page) != null ? e : null;
    },
    prevPageUrl() {
      var e, t, a, i, n;
      return (n = (i = (t = this.data.prev_page_url) != null ? t : (e = this.data.meta) == null ? void 0 : e.prev_page_url) != null ? i : (a = this.data.links) == null ? void 0 : a.prev) != null ? n : null;
    },
    to() {
      var e;
      return this.isApiResource ? this.data.meta.to : (e = this.data.to) != null ? e : null;
    },
    total() {
      var e;
      return this.isApiResource ? this.data.meta.total : (e = this.data.total) != null ? e : null;
    },
    pageRange() {
      if (this.limit === -1)
        return 0;
      if (this.limit === 0)
        return this.lastPage;
      for (var e = this.currentPage, t = this.keepLength, a = this.lastPage, i = this.limit, n = e - i, o = e + i, l = (i + 2) * 2, r = (i + 2) * 2 - 1, s = [], p = [], c, u = 1; u <= a; u++)
        (u === 1 || u === a || u >= n && u <= o || t && u < l && e < l - 2 || t && u > a - r && e > a - r + 2) && s.push(u);
      return s.forEach(function(v) {
        c && (v - c === 2 ? p.push(c + 1) : v - c !== 1 && this.showElipses && p.push("...")), p.push(v), c = v;
      }), p;
    }
  },
  methods: {
    previousPage() {
      this.selectPage(this.currentPage - 1);
    },
    nextPage() {
      this.selectPage(this.currentPage + 1);
    },
    selectPage(e) {
      e === "..." || e === this.currentPage || this.$emit("pagination-change-page", e);
    }
  },
  render() {
    return this.$slots.default({
      data: this.data,
      limit: this.limit,
      computed: {
        isApiResource: this.isApiResource,
        currentPage: this.currentPage,
        firstPageUrl: this.firstPageUrl,
        from: this.from,
        lastPage: this.lastPage,
        lastPageUrl: this.lastPageUrl,
        nextPageUrl: this.nextPageUrl,
        perPage: this.perPage,
        prevPageUrl: this.prevPageUrl,
        to: this.to,
        total: this.total,
        pageRange: this.pageRange
      },
      prevButtonEvents: {
        click: (e) => {
          e.preventDefault(), this.previousPage();
        }
      },
      nextButtonEvents: {
        click: (e) => {
          e.preventDefault(), this.nextPage();
        }
      },
      pageButtonEvents: (e) => ({
        click: (t) => {
          t.preventDefault(), this.selectPage(e);
        }
      })
    });
  }
}, Xe = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [i, n] of t)
    a[i] = n;
  return a;
}, Ht = {
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  emits: ["pagination-change-page"],
  components: {
    RenderlessPagination: qe
  },
  props: {
    data: {
      type: Object,
      default: () => {
      }
    },
    limit: {
      type: Number,
      default: 0
    },
    keepLength: {
      type: Boolean,
      default: !1
    },
    showDisabled: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "default",
      validator: (e) => ["small", "default", "large"].indexOf(e) !== -1
    },
    align: {
      type: String,
      default: "left",
      validator: (e) => ["left", "center", "right"].indexOf(e) !== -1
    }
  },
  methods: {
    onPaginationChangePage(e) {
      this.$emit("pagination-change-page", e);
    }
  }
}, It = ["tabindex"], qt = /* @__PURE__ */ b("span", { "aria-hidden": "true" }, "\xAB", -1), Xt = /* @__PURE__ */ b("span", { class: "sr-only" }, "Previous", -1), Kt = {
  key: 0,
  class: "sr-only"
}, Yt = ["tabindex"], Jt = /* @__PURE__ */ b("span", { "aria-hidden": "true" }, "\xBB", -1), Qt = /* @__PURE__ */ b("span", { class: "sr-only" }, "Next", -1);
function Gt(e, t, a, i, n, o) {
  const l = Ve("RenderlessPagination");
  return f(), y(oe, null, [
    pe("BS4 "),
    we(l, {
      data: a.data,
      limit: a.limit,
      "keep-length": a.keepLength,
      onPaginationChangePage: o.onPaginationChangePage
    }, {
      default: Oe((r) => [
        r.computed.total > r.computed.perPage ? (f(), y("ul", L({ key: 0 }, e.$attrs, {
          class: ["pagination", {
            "pagination-sm": a.size == "small",
            "pagination-lg": a.size == "large",
            "justify-content-center": a.align == "center",
            "justify-content-end": a.align == "right"
          }]
        }), [
          r.computed.prevPageUrl || a.showDisabled ? (f(), y("li", {
            key: 0,
            class: G(["page-item pagination-prev-nav", { disabled: !r.computed.prevPageUrl }])
          }, [
            b("a", L({
              class: "page-link",
              href: "#",
              "aria-label": "Previous",
              tabindex: !r.computed.prevPageUrl && -1
            }, q(r.prevButtonEvents, !0)), [
              $(e.$slots, "prev-nav", {}, () => [
                qt,
                Xt
              ])
            ], 16, It)
          ], 2)) : H("", !0),
          (f(!0), y(oe, null, xe(r.computed.pageRange, (s, p) => (f(), y("li", {
            class: G(["page-item pagination-page-nav", { active: s == r.computed.currentPage }]),
            key: p
          }, [
            b("a", L({
              class: "page-link",
              href: "#"
            }, q(r.pageButtonEvents(s), !0)), [
              pe(Y(s) + " ", 1),
              s == r.computed.currentPage ? (f(), y("span", Kt, "(current)")) : H("", !0)
            ], 16)
          ], 2))), 128)),
          r.computed.nextPageUrl || a.showDisabled ? (f(), y("li", {
            key: 1,
            class: G(["page-item pagination-next-nav", { disabled: !r.computed.nextPageUrl }])
          }, [
            b("a", L({
              class: "page-link",
              href: "#",
              "aria-label": "Next",
              tabindex: !r.computed.nextPageUrl && -1
            }, q(r.nextButtonEvents, !0)), [
              $(e.$slots, "next-nav", {}, () => [
                Jt,
                Qt
              ])
            ], 16, Yt)
          ], 2)) : H("", !0)
        ], 16)) : H("", !0)
      ]),
      _: 3
    }, 8, ["data", "limit", "keep-length", "onPaginationChangePage"])
  ], 64);
}
const hi = /* @__PURE__ */ Xe(Ht, [["render", Gt]]), Zt = {
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  emits: ["pagination-change-page"],
  components: {
    RenderlessPagination: qe
  },
  props: {
    data: {
      type: Object,
      default: () => {
      }
    },
    limit: {
      type: Number,
      default: 0
    },
    showDisabled: {
      type: Boolean,
      default: !1
    },
    keepLength: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "default",
      validator: (e) => ["small", "default", "large"].indexOf(e) !== -1
    },
    align: {
      type: String,
      default: "left",
      validator: (e) => ["left", "center", "right"].indexOf(e) !== -1
    }
  },
  methods: {
    onPaginationChangePage(e) {
      this.$emit("pagination-change-page", e);
    }
  }
}, ea = ["tabindex"], ta = /* @__PURE__ */ b("span", { "aria-hidden": "true" }, "\xAB", -1), aa = ["aria-current"], na = ["tabindex"], ia = /* @__PURE__ */ b("span", { "aria-hidden": "true" }, "\xBB", -1);
function ra(e, t, a, i, n, o) {
  const l = Ve("RenderlessPagination");
  return f(), y(oe, null, [
    pe("BS5 "),
    we(l, {
      data: a.data,
      limit: a.limit,
      "keep-length": a.keepLength,
      onPaginationChangePage: o.onPaginationChangePage
    }, {
      default: Oe((r) => [
        r.computed.total > r.computed.perPage ? (f(), y("ul", L({ key: 0 }, e.$attrs, {
          class: ["pagination", {
            "pagination-sm": a.size == "small",
            "pagination-lg": a.size == "large",
            "justify-content-center": a.align == "center",
            "justify-content-end": a.align == "right"
          }]
        }), [
          r.computed.prevPageUrl || a.showDisabled ? (f(), y("li", {
            key: 0,
            class: G(["page-item pagination-prev-nav", { disabled: !r.computed.prevPageUrl }])
          }, [
            b("a", L({
              class: "page-link",
              href: "#",
              "aria-label": "Previous",
              tabindex: !r.computed.prevPageUrl && -1
            }, q(r.prevButtonEvents, !0)), [
              $(e.$slots, "prev-nav", {}, () => [
                ta
              ])
            ], 16, ea)
          ], 2)) : H("", !0),
          (f(!0), y(oe, null, xe(r.computed.pageRange, (s, p) => (f(), y("li", {
            class: G(["page-item pagination-page-nav", { active: s == r.computed.currentPage }]),
            key: p
          }, [
            b("a", L({
              class: "page-link",
              href: "#"
            }, q(r.pageButtonEvents(s), !0), {
              "aria-current": s == r.computed.currentPage ? "page" : null
            }), Y(s), 17, aa)
          ], 2))), 128)),
          r.computed.nextPageUrl || a.showDisabled ? (f(), y("li", {
            key: 1,
            class: G(["page-item pagination-next-nav", { disabled: !r.computed.nextPageUrl }])
          }, [
            b("a", L({
              class: "page-link",
              href: "#",
              "aria-label": "Next",
              tabindex: !r.computed.nextPageUrl && -1
            }, q(r.nextButtonEvents, !0)), [
              $(e.$slots, "next-nav", {}, () => [
                ia
              ])
            ], 16, na)
          ], 2)) : H("", !0)
        ], 16)) : H("", !0)
      ]),
      _: 3
    }, 8, ["data", "limit", "keep-length", "onPaginationChangePage"])
  ], 64);
}
const fi = /* @__PURE__ */ Xe(Zt, [["render", ra]]);
var oa = Object.defineProperty, sa = Object.defineProperties, la = Object.getOwnPropertyDescriptors, ht = Object.getOwnPropertySymbols, ca = Object.prototype.hasOwnProperty, pa = Object.prototype.propertyIsEnumerable, ft = (e, t, a) => t in e ? oa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, ce = (e, t) => {
  for (var a in t || (t = {}))
    ca.call(t, a) && ft(e, a, t[a]);
  if (ht)
    for (var a of ht(t))
      pa.call(t, a) && ft(e, a, t[a]);
  return e;
}, gt = (e, t) => sa(e, la(t));
const ua = {
  props: {
    autoscroll: {
      type: Boolean,
      default: !0
    }
  },
  watch: {
    typeAheadPointer() {
      this.autoscroll && this.maybeAdjustScroll();
    },
    open(e) {
      this.autoscroll && e && this.$nextTick(() => this.maybeAdjustScroll());
    }
  },
  methods: {
    maybeAdjustScroll() {
      var e;
      const t = ((e = this.$refs.dropdownMenu) == null ? void 0 : e.children[this.typeAheadPointer]) || !1;
      if (t) {
        const a = this.getDropdownViewport(), { top: i, bottom: n, height: o } = t.getBoundingClientRect();
        if (i < a.top)
          return this.$refs.dropdownMenu.scrollTop = t.offsetTop;
        if (n > a.bottom)
          return this.$refs.dropdownMenu.scrollTop = t.offsetTop - (a.height - o);
      }
    },
    getDropdownViewport() {
      return this.$refs.dropdownMenu ? this.$refs.dropdownMenu.getBoundingClientRect() : {
        height: 0,
        top: 0,
        bottom: 0
      };
    }
  }
}, da = {
  data() {
    return {
      typeAheadPointer: -1
    };
  },
  watch: {
    filteredOptions() {
      for (let e = 0; e < this.filteredOptions.length; e++)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    open(e) {
      e && this.typeAheadToLastSelected();
    },
    selectedValue() {
      this.open && this.typeAheadToLastSelected();
    }
  },
  methods: {
    typeAheadUp() {
      for (let e = this.typeAheadPointer - 1; e >= 0; e--)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    typeAheadDown() {
      for (let e = this.typeAheadPointer + 1; e < this.filteredOptions.length; e++)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    typeAheadSelect() {
      const e = this.filteredOptions[this.typeAheadPointer];
      e && this.selectable(e) && this.select(e);
    },
    typeAheadToLastSelected() {
      this.typeAheadPointer = this.selectedValue.length !== 0 ? this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length - 1]) : -1;
    }
  }
}, ha = {
  props: {
    loading: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      mutableLoading: !1
    };
  },
  watch: {
    search() {
      this.$emit("search", this.search, this.toggleLoading);
    },
    loading(e) {
      this.mutableLoading = e;
    }
  },
  methods: {
    toggleLoading(e = null) {
      return e == null ? this.mutableLoading = !this.mutableLoading : this.mutableLoading = e;
    }
  }
}, Ke = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [i, n] of t)
    a[i] = n;
  return a;
}, fa = {}, ga = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, va = /* @__PURE__ */ b("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), ma = [
  va
];
function ya(e, t) {
  return f(), y("svg", ga, ma);
}
const ba = /* @__PURE__ */ Ke(fa, [["render", ya]]), wa = {}, Oa = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, xa = /* @__PURE__ */ b("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), _a = [
  xa
];
function Pa(e, t) {
  return f(), y("svg", Oa, _a);
}
const Sa = /* @__PURE__ */ Ke(wa, [["render", Pa]]), vt = {
  Deselect: ba,
  OpenIndicator: Sa
}, ka = {
  mounted(e, { instance: t }) {
    if (t.appendToBody) {
      const {
        height: a,
        top: i,
        left: n,
        width: o
      } = t.$refs.parent_holder.getBoundingClientRect();
      let l = window.scrollX || window.pageXOffset, r = window.scrollY || window.pageYOffset;
      e.unbindPosition = t.calculatePosition(e, t, {
        width: t.actualWidth + "px",
        left: l + n + "px",
        top: r + i + a + "px"
      }), document.body.appendChild(e);
    }
  },
  unmounted(e, { instance: t }) {
    t.appendToBody && (e.unbindPosition && typeof e.unbindPosition == "function" && e.unbindPosition(), e.parentNode && e.parentNode.removeChild(e));
  }
};
function Ca(e) {
  const t = {};
  return Object.keys(e).sort().forEach((a) => {
    t[a] = e[a];
  }), JSON.stringify(t);
}
let Aa = 0;
function Ba() {
  return ++Aa;
}
const $a = {
  components: ce({}, vt),
  directives: { appendToBody: ka },
  mixins: [ua, da, ha],
  compatConfig: {
    MODE: 3
  },
  emits: [
    "open",
    "close",
    "update:modelValue",
    "search",
    "search:compositionstart",
    "search:compositionend",
    "search:keydown",
    "search:blur",
    "search:focus",
    "search:input",
    "option:created",
    "option:selecting",
    "option:selected",
    "option:deselecting",
    "option:deselected",
    "cleared"
  ],
  props: {
    modelValue: {},
    components: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    clearable: {
      type: Boolean,
      default: !0
    },
    deselectFromDropdown: {
      type: Boolean,
      default: !1
    },
    searchable: {
      type: Boolean,
      default: !0
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: ""
    },
    transition: {
      type: String,
      default: "vs__fade"
    },
    clearSearchOnSelect: {
      type: Boolean,
      default: !0
    },
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    label: {
      type: String,
      default: "label"
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    reduce: {
      type: Function,
      default: (e) => e
    },
    selectable: {
      type: Function,
      default: (e) => !0
    },
    getOptionLabel: {
      type: Function,
      default(e) {
        return typeof e == "object" ? e.hasOwnProperty(this.label) ? e[this.label] : console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`) : e;
      }
    },
    getOptionKey: {
      type: Function,
      default(e) {
        if (typeof e != "object")
          return e;
        try {
          return e.hasOwnProperty("id") ? e.id : Ca(e);
        } catch (t) {
          return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`, e, t);
        }
      }
    },
    onTab: {
      type: Function,
      default: function() {
        this.selectOnTab && !this.isComposing && this.typeAheadSelect();
      }
    },
    taggable: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: null
    },
    pushTags: {
      type: Boolean,
      default: !1
    },
    filterable: {
      type: Boolean,
      default: !0
    },
    filterBy: {
      type: Function,
      default(e, t, a) {
        return (t || "").toLocaleLowerCase().indexOf(a.toLocaleLowerCase()) > -1;
      }
    },
    filter: {
      type: Function,
      default(e, t) {
        return e.filter((a) => {
          let i = this.getOptionLabel(a);
          return typeof i == "number" && (i = i.toString()), this.filterBy(a, i, t);
        });
      }
    },
    createOption: {
      type: Function,
      default(e) {
        return typeof this.optionList[0] == "object" ? { [this.label]: e } : e;
      }
    },
    resetOnOptionsChange: {
      default: !1,
      validator: (e) => ["function", "boolean"].includes(typeof e)
    },
    clearSearchOnBlur: {
      type: Function,
      default: function({ clearSearchOnSelect: e, multiple: t }) {
        return e && !t;
      }
    },
    noDrop: {
      type: Boolean,
      default: !1
    },
    inputId: {
      type: String
    },
    dir: {
      type: String,
      default: "auto"
    },
    selectOnTab: {
      type: Boolean,
      default: !1
    },
    selectOnKeyCodes: {
      type: Array,
      default: () => [13]
    },
    searchInputQuerySelector: {
      type: String,
      default: "[type=search]"
    },
    mapKeydown: {
      type: Function,
      default: (e, t) => e
    },
    appendToBody: {
      type: Boolean,
      default: !1
    },
    calculatePosition: {
      type: Function,
      default(e, t, { width: a, top: i, left: n }) {
        e.style.top = i, e.style.left = n, e.style.width = a;
      }
    },
    dropdownShouldOpen: {
      type: Function,
      default({ noDrop: e, open: t, mutableLoading: a }) {
        return e ? !1 : t && !a;
      }
    },
    uid: {
      type: [String, Number],
      default: () => Ba()
    }
  },
  data() {
    return {
      search: "",
      open: !1,
      isComposing: !1,
      pushedTags: [],
      _value: [],
      deselectButtons: [],
      actualWidth: 0
    };
  },
  computed: {
    isReducingValues() {
      return this.$props.reduce !== this.$options.props.reduce.default;
    },
    isTrackingValues() {
      return typeof this.modelValue > "u" || this.isReducingValues;
    },
    selectedValue() {
      let e = this.modelValue;
      return this.isTrackingValues && (e = this.$data._value), e != null && e !== "" ? [].concat(e) : [];
    },
    optionList() {
      return this.options.concat(this.pushTags ? this.pushedTags : []);
    },
    searchEl() {
      return this.$slots.search ? this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector) : this.$refs.search;
    },
    scope() {
      const e = {
        search: this.search,
        loading: this.loading,
        searching: this.searching,
        filteredOptions: this.filteredOptions
      };
      return {
        search: {
          attributes: ce({
            disabled: this.disabled,
            placeholder: this.searchPlaceholder,
            tabindex: this.tabindex,
            readonly: !this.searchable,
            id: this.inputId,
            "aria-autocomplete": "list",
            "aria-labelledby": `vs${this.uid}__combobox`,
            "aria-controls": `vs${this.uid}__listbox`,
            ref: "search",
            type: "search",
            autocomplete: this.autocomplete,
            value: this.search
          }, this.dropdownOpen && this.filteredOptions[this.typeAheadPointer] ? {
            "aria-activedescendant": `vs${this.uid}__option-${this.typeAheadPointer}`
          } : {}),
          events: {
            compositionstart: () => this.isComposing = !0,
            compositionend: () => this.isComposing = !1,
            keydown: this.onSearchKeyDown,
            blur: this.onSearchBlur,
            focus: this.onSearchFocus,
            input: (t) => this.search = t.target.value
          }
        },
        spinner: {
          loading: this.mutableLoading
        },
        noOptions: {
          search: this.search,
          loading: this.mutableLoading,
          searching: this.searching
        },
        openIndicator: {
          attributes: {
            ref: "openIndicator",
            role: "presentation",
            class: "vs__open-indicator"
          }
        },
        listHeader: e,
        listFooter: e,
        header: gt(ce({}, e), { deselect: this.deselect }),
        footer: gt(ce({}, e), { deselect: this.deselect })
      };
    },
    childComponents() {
      return ce(ce({}, vt), this.components);
    },
    stateClasses() {
      return {
        "vs--open": this.dropdownOpen,
        "vs--single": !this.multiple,
        "vs--multiple": this.multiple,
        "vs--searching": this.searching && !this.noDrop,
        "vs--searchable": this.searchable && !this.noDrop,
        "vs--unsearchable": !this.searchable,
        "vs--loading": this.mutableLoading,
        "vs--disabled": this.disabled
      };
    },
    searching() {
      return !!this.search;
    },
    dropdownOpen() {
      return this.dropdownShouldOpen(this);
    },
    searchPlaceholder() {
      return this.isValueEmpty && this.placeholder ? this.placeholder : void 0;
    },
    filteredOptions() {
      const e = [].concat(this.optionList);
      if (!this.filterable && !this.taggable)
        return e;
      const t = this.search.length ? this.filter(e, this.search, this) : e;
      if (this.taggable && this.search.length) {
        const a = this.createOption(this.search);
        this.optionExists(a) || t.unshift(a);
      }
      return t;
    },
    isValueEmpty() {
      return this.selectedValue.length === 0;
    },
    showClearButton() {
      return !this.multiple && this.clearable && !this.open && !this.isValueEmpty;
    }
  },
  watch: {
    options(e, t) {
      const a = () => typeof this.resetOnOptionsChange == "function" ? this.resetOnOptionsChange(e, t, this.selectedValue) : this.resetOnOptionsChange;
      !this.taggable && a() && this.clearSelection(), this.modelValue && this.isTrackingValues && this.setInternalValueFromOptions(this.modelValue);
    },
    modelValue: {
      immediate: !0,
      handler(e) {
        this.isTrackingValues && this.setInternalValueFromOptions(e);
      }
    },
    multiple() {
      this.clearSelection();
    },
    open(e) {
      this.$emit(e ? "open" : "close");
    }
  },
  created() {
    this.mutableLoading = this.loading;
  },
  methods: {
    setInternalValueFromOptions(e) {
      Array.isArray(e) ? this.$data._value = e.map((t) => this.findOptionFromReducedValue(t)) : this.$data._value = this.findOptionFromReducedValue(e);
    },
    select(e) {
      this.$emit("option:selecting", e), this.isOptionSelected(e) ? this.deselectFromDropdown && (this.clearable || this.multiple && this.selectedValue.length > 1) && this.deselect(e) : (this.taggable && !this.optionExists(e) && (this.$emit("option:created", e), this.pushTag(e)), this.multiple && (e = this.selectedValue.concat(e)), this.updateValue(e), this.$emit("option:selected", e)), this.onAfterSelect(e);
    },
    deselect(e) {
      this.$emit("option:deselecting", e), this.updateValue(this.selectedValue.filter((t) => !this.optionComparator(t, e))), this.$emit("option:deselected", e);
    },
    clearSelection() {
      this.updateValue(this.multiple ? [] : null), this.$emit("cleared");
    },
    onAfterSelect(e) {
      this.closeOnSelect && (this.open = !this.open, this.searchEl.blur()), this.clearSearchOnSelect && (this.search = "");
    },
    updateValue(e) {
      typeof this.modelValue > "u" && (this.$data._value = e), e !== null && (Array.isArray(e) ? e = e.map((t) => this.reduce(t)) : e = this.reduce(e)), this.$emit("update:modelValue", e);
    },
    toggleDropdown(e) {
      const {
        height: t,
        top: a,
        left: i,
        width: n
      } = this.$refs.parent_holder.getBoundingClientRect();
      this.actualWidth = n.toFixed(2);
      const o = e.target !== this.searchEl;
      o && e.preventDefault();
      const l = [
        ...this.deselectButtons || [],
        this.$refs.clearButton
      ];
      if (this.searchEl === void 0 || l.filter(Boolean).some((r) => r.contains(e.target) || r === e.target)) {
        e.preventDefault();
        return;
      }
      this.open && o ? this.searchEl.blur() : this.disabled || (this.open = !0, this.searchEl.focus());
    },
    isOptionSelected(e) {
      return this.selectedValue.some((t) => this.optionComparator(t, e));
    },
    isOptionDeselectable(e) {
      return this.isOptionSelected(e) && this.deselectFromDropdown;
    },
    optionComparator(e, t) {
      return this.getOptionKey(e) === this.getOptionKey(t);
    },
    findOptionFromReducedValue(e) {
      const t = (i) => JSON.stringify(this.reduce(i)) === JSON.stringify(e), a = [...this.options, ...this.pushedTags].filter(t);
      return a.length === 1 ? a[0] : a.find((i) => this.optionComparator(i, this.$data._value)) || e;
    },
    closeSearchOptions() {
      this.open = !1, this.$emit("search:blur");
    },
    maybeDeleteValue() {
      if (!this.searchEl.value.length && this.selectedValue && this.selectedValue.length && this.clearable) {
        let e = null;
        this.multiple && (e = [
          ...this.selectedValue.slice(0, this.selectedValue.length - 1)
        ]), this.updateValue(e);
      }
    },
    optionExists(e) {
      return this.optionList.some((t) => this.optionComparator(t, e));
    },
    normalizeOptionForSlot(e) {
      return typeof e == "object" ? e : { [this.label]: e };
    },
    pushTag(e) {
      this.pushedTags.push(e);
    },
    onEscape() {
      this.search.length ? this.search = "" : this.searchEl.blur();
    },
    onSearchBlur() {
      if (this.mousedown && !this.searching)
        this.mousedown = !1;
      else {
        const { clearSearchOnSelect: e, multiple: t } = this;
        this.clearSearchOnBlur({ clearSearchOnSelect: e, multiple: t }) && (this.search = ""), this.closeSearchOptions();
        return;
      }
      if (this.search.length === 0 && this.options.length === 0) {
        this.closeSearchOptions();
        return;
      }
    },
    onSearchFocus() {
      this.open = !0, this.$emit("search:focus");
    },
    onMousedown() {
      this.mousedown = !0;
    },
    onMouseUp() {
      this.mousedown = !1;
    },
    onSearchKeyDown(e) {
      const t = (n) => (n.preventDefault(), !this.isComposing && this.typeAheadSelect()), a = {
        8: (n) => this.maybeDeleteValue(),
        9: (n) => this.onTab(),
        27: (n) => this.onEscape(),
        38: (n) => (n.preventDefault(), this.typeAheadUp()),
        40: (n) => (n.preventDefault(), this.typeAheadDown())
      };
      this.selectOnKeyCodes.forEach((n) => a[n] = t);
      const i = this.mapKeydown(a, this);
      if (typeof i[e.keyCode] == "function")
        return i[e.keyCode](e);
    }
  }
}, Ea = ["dir"], Da = ["id", "aria-expanded", "aria-owns"], La = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, Va = ["disabled", "title", "aria-label", "onClick"], Ra = {
  ref: "actions",
  class: "vs__actions"
}, ja = ["disabled"], Ta = { class: "vs__spinner" }, Ma = ["id", "actualWidth"], Fa = ["id", "aria-selected", "onMouseover", "onClick"], Ua = {
  key: 0,
  class: "vs__no-options"
}, Na = /* @__PURE__ */ pe(" Sorry, no matching options. "), za = ["id"];
function Wa(e, t, a, i, n, o) {
  const l = Nt("append-to-body");
  return f(), y("div", {
    dir: a.dir,
    class: G(["v-select", o.stateClasses]),
    ref: "parent_holder"
  }, [
    $(e.$slots, "header", W(I(o.scope.header))),
    b("div", {
      id: `vs${a.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": o.dropdownOpen.toString(),
      "aria-owns": `vs${a.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: t[1] || (t[1] = (r) => o.toggleDropdown(r))
    }, [
      b("div", La, [
        (f(!0), y(oe, null, xe(o.selectedValue, (r, s) => $(e.$slots, "selected-option-container", {
          option: o.normalizeOptionForSlot(r),
          deselect: o.deselect,
          multiple: a.multiple,
          disabled: a.disabled
        }, () => [
          (f(), y("span", {
            key: a.getOptionKey(r),
            class: "vs__selected"
          }, [
            $(e.$slots, "selected-option", W(I(o.normalizeOptionForSlot(r))), () => [
              pe(Y(a.getOptionLabel(r)), 1)
            ]),
            a.multiple ? (f(), y("button", {
              key: 0,
              ref_for: !0,
              ref: (p) => n.deselectButtons[s] = p,
              disabled: a.disabled,
              type: "button",
              class: "vs__deselect",
              title: `Deselect ${a.getOptionLabel(r)}`,
              "aria-label": `Deselect ${a.getOptionLabel(r)}`,
              onClick: (p) => o.deselect(r)
            }, [
              (f(), Ne(ze(o.childComponents.Deselect)))
            ], 8, Va)) : H("", !0)
          ]))
        ])), 256)),
        $(e.$slots, "search", W(I(o.scope.search)), () => [
          b("input", L({ class: "vs__search" }, o.scope.search.attributes, q(o.scope.search.events)), null, 16)
        ])
      ], 512),
      b("div", Ra, [
        We(b("button", {
          ref: "clearButton",
          disabled: a.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: t[0] || (t[0] = (...r) => o.clearSelection && o.clearSelection(...r))
        }, [
          (f(), Ne(ze(o.childComponents.Deselect)))
        ], 8, ja), [
          [ut, o.showClearButton]
        ]),
        $(e.$slots, "open-indicator", W(I(o.scope.openIndicator)), () => [
          a.noDrop ? H("", !0) : (f(), Ne(ze(o.childComponents.OpenIndicator), W(L({ key: 0 }, o.scope.openIndicator.attributes)), null, 16))
        ]),
        $(e.$slots, "spinner", W(I(o.scope.spinner)), () => [
          We(b("div", Ta, "Loading...", 512), [
            [ut, e.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, Da),
    we(zt, { name: a.transition }, {
      default: Oe(() => [
        o.dropdownOpen ? We((f(), y("ul", {
          id: `vs${a.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${a.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          actualWidth: n.actualWidth,
          onMousedown: t[2] || (t[2] = dt((...r) => o.onMousedown && o.onMousedown(...r), ["prevent"])),
          onMouseup: t[3] || (t[3] = (...r) => o.onMouseUp && o.onMouseUp(...r))
        }, [
          $(e.$slots, "list-header", W(I(o.scope.listHeader))),
          (f(!0), y(oe, null, xe(o.filteredOptions, (r, s) => (f(), y("li", {
            id: `vs${a.uid}__option-${s}`,
            key: a.getOptionKey(r),
            role: "option",
            class: G(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": o.isOptionDeselectable(r) && s === e.typeAheadPointer,
              "vs__dropdown-option--selected": o.isOptionSelected(r),
              "vs__dropdown-option--highlight": s === e.typeAheadPointer,
              "vs__dropdown-option--disabled": !a.selectable(r)
            }]),
            "aria-selected": s === e.typeAheadPointer ? !0 : null,
            onMouseover: (p) => a.selectable(r) ? e.typeAheadPointer = s : null,
            onClick: dt((p) => a.selectable(r) ? o.select(r) : null, ["prevent", "stop"])
          }, [
            $(e.$slots, "option", W(I(o.normalizeOptionForSlot(r))), () => [
              pe(Y(a.getOptionLabel(r)), 1)
            ])
          ], 42, Fa))), 128)),
          o.filteredOptions.length === 0 ? (f(), y("li", Ua, [
            $(e.$slots, "no-options", W(I(o.scope.noOptions)), () => [
              Na
            ])
          ])) : H("", !0),
          $(e.$slots, "list-footer", W(I(o.scope.listFooter)))
        ], 40, Ma)), [
          [l]
        ]) : (f(), y("ul", {
          key: 1,
          id: `vs${a.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, za))
      ]),
      _: 3
    }, 8, ["name"]),
    $(e.$slots, "footer", W(I(o.scope.footer)))
  ], 10, Ea);
}
const Ha = /* @__PURE__ */ Ke($a, [["render", Wa]]);
var V = "top", F = "bottom", U = "right", R = "left", Ye = "auto", Se = [V, F, U, R], ue = "start", _e = "end", Ia = "clippingParents", kt = "viewport", me = "popper", qa = "reference", mt = /* @__PURE__ */ Se.reduce(function(e, t) {
  return e.concat([t + "-" + ue, t + "-" + _e]);
}, []), Ct = /* @__PURE__ */ [].concat(Se, [Ye]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ue, t + "-" + _e]);
}, []), Xa = "beforeRead", Ka = "read", Ya = "afterRead", Ja = "beforeMain", Qa = "main", Ga = "afterMain", Za = "beforeWrite", en = "write", tn = "afterWrite", an = [Xa, Ka, Ya, Ja, Qa, Ga, Za, en, tn];
function K(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function T(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function se(e) {
  var t = T(e).Element;
  return e instanceof t || e instanceof Element;
}
function M(e) {
  var t = T(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Je(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = T(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function nn(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(a) {
    var i = t.styles[a] || {}, n = t.attributes[a] || {}, o = t.elements[a];
    !M(o) || !K(o) || (Object.assign(o.style, i), Object.keys(n).forEach(function(l) {
      var r = n[l];
      r === !1 ? o.removeAttribute(l) : o.setAttribute(l, r === !0 ? "" : r);
    }));
  });
}
function rn(e) {
  var t = e.state, a = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, a.popper), t.styles = a, t.elements.arrow && Object.assign(t.elements.arrow.style, a.arrow), function() {
    Object.keys(t.elements).forEach(function(i) {
      var n = t.elements[i], o = t.attributes[i] || {}, l = Object.keys(t.styles.hasOwnProperty(i) ? t.styles[i] : a[i]), r = l.reduce(function(s, p) {
        return s[p] = "", s;
      }, {});
      !M(n) || !K(n) || (Object.assign(n.style, r), Object.keys(o).forEach(function(s) {
        n.removeAttribute(s);
      }));
    });
  };
}
const on = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: nn,
  effect: rn,
  requires: ["computeStyles"]
};
function X(e) {
  return e.split("-")[0];
}
var re = Math.max, Re = Math.min, de = Math.round;
function He() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function At() {
  return !/^((?!chrome|android).)*safari/i.test(He());
}
function he(e, t, a) {
  t === void 0 && (t = !1), a === void 0 && (a = !1);
  var i = e.getBoundingClientRect(), n = 1, o = 1;
  t && M(e) && (n = e.offsetWidth > 0 && de(i.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && de(i.height) / e.offsetHeight || 1);
  var l = se(e) ? T(e) : window, r = l.visualViewport, s = !At() && a, p = (i.left + (s && r ? r.offsetLeft : 0)) / n, c = (i.top + (s && r ? r.offsetTop : 0)) / o, u = i.width / n, v = i.height / o;
  return {
    width: u,
    height: v,
    top: c,
    right: p + u,
    bottom: c + v,
    left: p,
    x: p,
    y: c
  };
}
function Qe(e) {
  var t = he(e), a = e.offsetWidth, i = e.offsetHeight;
  return Math.abs(t.width - a) <= 1 && (a = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: a,
    height: i
  };
}
function Bt(e, t) {
  var a = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (a && Je(a)) {
    var i = t;
    do {
      if (i && e.isSameNode(i))
        return !0;
      i = i.parentNode || i.host;
    } while (i);
  }
  return !1;
}
function J(e) {
  return T(e).getComputedStyle(e);
}
function sn(e) {
  return ["table", "td", "th"].indexOf(K(e)) >= 0;
}
function Z(e) {
  return ((se(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function je(e) {
  return K(e) === "html" ? e : e.assignedSlot || e.parentNode || (Je(e) ? e.host : null) || Z(e);
}
function yt(e) {
  return !M(e) || J(e).position === "fixed" ? null : e.offsetParent;
}
function ln(e) {
  var t = /firefox/i.test(He()), a = /Trident/i.test(He());
  if (a && M(e)) {
    var i = J(e);
    if (i.position === "fixed")
      return null;
  }
  var n = je(e);
  for (Je(n) && (n = n.host); M(n) && ["html", "body"].indexOf(K(n)) < 0; ) {
    var o = J(n);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return n;
    n = n.parentNode;
  }
  return null;
}
function ke(e) {
  for (var t = T(e), a = yt(e); a && sn(a) && J(a).position === "static"; )
    a = yt(a);
  return a && (K(a) === "html" || K(a) === "body" && J(a).position === "static") ? t : a || ln(e) || t;
}
function Ge(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ye(e, t, a) {
  return re(e, Re(t, a));
}
function cn(e, t, a) {
  var i = ye(e, t, a);
  return i > a ? a : i;
}
function $t() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Et(e) {
  return Object.assign({}, $t(), e);
}
function Dt(e, t) {
  return t.reduce(function(a, i) {
    return a[i] = e, a;
  }, {});
}
var pn = function(t, a) {
  return t = typeof t == "function" ? t(Object.assign({}, a.rects, {
    placement: a.placement
  })) : t, Et(typeof t != "number" ? t : Dt(t, Se));
};
function un(e) {
  var t, a = e.state, i = e.name, n = e.options, o = a.elements.arrow, l = a.modifiersData.popperOffsets, r = X(a.placement), s = Ge(r), p = [R, U].indexOf(r) >= 0, c = p ? "height" : "width";
  if (!(!o || !l)) {
    var u = pn(n.padding, a), v = Qe(o), d = s === "y" ? V : R, _ = s === "y" ? F : U, m = a.rects.reference[c] + a.rects.reference[s] - l[s] - a.rects.popper[c], g = l[s] - a.rects.reference[s], x = ke(o), S = x ? s === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0, k = m / 2 - g / 2, h = u[d], w = S - v[c] - u[_], O = S / 2 - v[c] / 2 + k, P = ye(h, O, w), B = s;
    a.modifiersData[i] = (t = {}, t[B] = P, t.centerOffset = P - O, t);
  }
}
function dn(e) {
  var t = e.state, a = e.options, i = a.element, n = i === void 0 ? "[data-popper-arrow]" : i;
  n != null && (typeof n == "string" && (n = t.elements.popper.querySelector(n), !n) || !Bt(t.elements.popper, n) || (t.elements.arrow = n));
}
const hn = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: un,
  effect: dn,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function fe(e) {
  return e.split("-")[1];
}
var fn = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function gn(e, t) {
  var a = e.x, i = e.y, n = t.devicePixelRatio || 1;
  return {
    x: de(a * n) / n || 0,
    y: de(i * n) / n || 0
  };
}
function bt(e) {
  var t, a = e.popper, i = e.popperRect, n = e.placement, o = e.variation, l = e.offsets, r = e.position, s = e.gpuAcceleration, p = e.adaptive, c = e.roundOffsets, u = e.isFixed, v = l.x, d = v === void 0 ? 0 : v, _ = l.y, m = _ === void 0 ? 0 : _, g = typeof c == "function" ? c({
    x: d,
    y: m
  }) : {
    x: d,
    y: m
  };
  d = g.x, m = g.y;
  var x = l.hasOwnProperty("x"), S = l.hasOwnProperty("y"), k = R, h = V, w = window;
  if (p) {
    var O = ke(a), P = "clientHeight", B = "clientWidth";
    if (O === T(a) && (O = Z(a), J(O).position !== "static" && r === "absolute" && (P = "scrollHeight", B = "scrollWidth")), O = O, n === V || (n === R || n === U) && o === _e) {
      h = F;
      var A = u && O === w && w.visualViewport ? w.visualViewport.height : O[P];
      m -= A - i.height, m *= s ? 1 : -1;
    }
    if (n === R || (n === V || n === F) && o === _e) {
      k = U;
      var C = u && O === w && w.visualViewport ? w.visualViewport.width : O[B];
      d -= C - i.width, d *= s ? 1 : -1;
    }
  }
  var E = Object.assign({
    position: r
  }, p && fn), N = c === !0 ? gn({
    x: d,
    y: m
  }, T(a)) : {
    x: d,
    y: m
  };
  if (d = N.x, m = N.y, s) {
    var D;
    return Object.assign({}, E, (D = {}, D[h] = S ? "0" : "", D[k] = x ? "0" : "", D.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + m + "px)" : "translate3d(" + d + "px, " + m + "px, 0)", D));
  }
  return Object.assign({}, E, (t = {}, t[h] = S ? m + "px" : "", t[k] = x ? d + "px" : "", t.transform = "", t));
}
function vn(e) {
  var t = e.state, a = e.options, i = a.gpuAcceleration, n = i === void 0 ? !0 : i, o = a.adaptive, l = o === void 0 ? !0 : o, r = a.roundOffsets, s = r === void 0 ? !0 : r, p = {
    placement: X(t.placement),
    variation: fe(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: n,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, bt(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, bt(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const mn = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: vn,
  data: {}
};
var De = {
  passive: !0
};
function yn(e) {
  var t = e.state, a = e.instance, i = e.options, n = i.scroll, o = n === void 0 ? !0 : n, l = i.resize, r = l === void 0 ? !0 : l, s = T(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && p.forEach(function(c) {
    c.addEventListener("scroll", a.update, De);
  }), r && s.addEventListener("resize", a.update, De), function() {
    o && p.forEach(function(c) {
      c.removeEventListener("scroll", a.update, De);
    }), r && s.removeEventListener("resize", a.update, De);
  };
}
const bn = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: yn,
  data: {}
};
var wn = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Le(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return wn[t];
  });
}
var On = {
  start: "end",
  end: "start"
};
function wt(e) {
  return e.replace(/start|end/g, function(t) {
    return On[t];
  });
}
function Ze(e) {
  var t = T(e), a = t.pageXOffset, i = t.pageYOffset;
  return {
    scrollLeft: a,
    scrollTop: i
  };
}
function et(e) {
  return he(Z(e)).left + Ze(e).scrollLeft;
}
function xn(e, t) {
  var a = T(e), i = Z(e), n = a.visualViewport, o = i.clientWidth, l = i.clientHeight, r = 0, s = 0;
  if (n) {
    o = n.width, l = n.height;
    var p = At();
    (p || !p && t === "fixed") && (r = n.offsetLeft, s = n.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: r + et(e),
    y: s
  };
}
function _n(e) {
  var t, a = Z(e), i = Ze(e), n = (t = e.ownerDocument) == null ? void 0 : t.body, o = re(a.scrollWidth, a.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), l = re(a.scrollHeight, a.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), r = -i.scrollLeft + et(e), s = -i.scrollTop;
  return J(n || a).direction === "rtl" && (r += re(a.clientWidth, n ? n.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: r,
    y: s
  };
}
function tt(e) {
  var t = J(e), a = t.overflow, i = t.overflowX, n = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(a + n + i);
}
function Lt(e) {
  return ["html", "body", "#document"].indexOf(K(e)) >= 0 ? e.ownerDocument.body : M(e) && tt(e) ? e : Lt(je(e));
}
function be(e, t) {
  var a;
  t === void 0 && (t = []);
  var i = Lt(e), n = i === ((a = e.ownerDocument) == null ? void 0 : a.body), o = T(i), l = n ? [o].concat(o.visualViewport || [], tt(i) ? i : []) : i, r = t.concat(l);
  return n ? r : r.concat(be(je(l)));
}
function Ie(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Pn(e, t) {
  var a = he(e, !1, t === "fixed");
  return a.top = a.top + e.clientTop, a.left = a.left + e.clientLeft, a.bottom = a.top + e.clientHeight, a.right = a.left + e.clientWidth, a.width = e.clientWidth, a.height = e.clientHeight, a.x = a.left, a.y = a.top, a;
}
function Ot(e, t, a) {
  return t === kt ? Ie(xn(e, a)) : se(t) ? Pn(t, a) : Ie(_n(Z(e)));
}
function Sn(e) {
  var t = be(je(e)), a = ["absolute", "fixed"].indexOf(J(e).position) >= 0, i = a && M(e) ? ke(e) : e;
  return se(i) ? t.filter(function(n) {
    return se(n) && Bt(n, i) && K(n) !== "body";
  }) : [];
}
function kn(e, t, a, i) {
  var n = t === "clippingParents" ? Sn(e) : [].concat(t), o = [].concat(n, [a]), l = o[0], r = o.reduce(function(s, p) {
    var c = Ot(e, p, i);
    return s.top = re(c.top, s.top), s.right = Re(c.right, s.right), s.bottom = Re(c.bottom, s.bottom), s.left = re(c.left, s.left), s;
  }, Ot(e, l, i));
  return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
}
function Vt(e) {
  var t = e.reference, a = e.element, i = e.placement, n = i ? X(i) : null, o = i ? fe(i) : null, l = t.x + t.width / 2 - a.width / 2, r = t.y + t.height / 2 - a.height / 2, s;
  switch (n) {
    case V:
      s = {
        x: l,
        y: t.y - a.height
      };
      break;
    case F:
      s = {
        x: l,
        y: t.y + t.height
      };
      break;
    case U:
      s = {
        x: t.x + t.width,
        y: r
      };
      break;
    case R:
      s = {
        x: t.x - a.width,
        y: r
      };
      break;
    default:
      s = {
        x: t.x,
        y: t.y
      };
  }
  var p = n ? Ge(n) : null;
  if (p != null) {
    var c = p === "y" ? "height" : "width";
    switch (o) {
      case ue:
        s[p] = s[p] - (t[c] / 2 - a[c] / 2);
        break;
      case _e:
        s[p] = s[p] + (t[c] / 2 - a[c] / 2);
        break;
    }
  }
  return s;
}
function Pe(e, t) {
  t === void 0 && (t = {});
  var a = t, i = a.placement, n = i === void 0 ? e.placement : i, o = a.strategy, l = o === void 0 ? e.strategy : o, r = a.boundary, s = r === void 0 ? Ia : r, p = a.rootBoundary, c = p === void 0 ? kt : p, u = a.elementContext, v = u === void 0 ? me : u, d = a.altBoundary, _ = d === void 0 ? !1 : d, m = a.padding, g = m === void 0 ? 0 : m, x = Et(typeof g != "number" ? g : Dt(g, Se)), S = v === me ? qa : me, k = e.rects.popper, h = e.elements[_ ? S : v], w = kn(se(h) ? h : h.contextElement || Z(e.elements.popper), s, c, l), O = he(e.elements.reference), P = Vt({
    reference: O,
    element: k,
    strategy: "absolute",
    placement: n
  }), B = Ie(Object.assign({}, k, P)), A = v === me ? B : O, C = {
    top: w.top - A.top + x.top,
    bottom: A.bottom - w.bottom + x.bottom,
    left: w.left - A.left + x.left,
    right: A.right - w.right + x.right
  }, E = e.modifiersData.offset;
  if (v === me && E) {
    var N = E[n];
    Object.keys(C).forEach(function(D) {
      var ee = [U, F].indexOf(D) >= 0 ? 1 : -1, te = [V, F].indexOf(D) >= 0 ? "y" : "x";
      C[D] += N[te] * ee;
    });
  }
  return C;
}
function Cn(e, t) {
  t === void 0 && (t = {});
  var a = t, i = a.placement, n = a.boundary, o = a.rootBoundary, l = a.padding, r = a.flipVariations, s = a.allowedAutoPlacements, p = s === void 0 ? Ct : s, c = fe(i), u = c ? r ? mt : mt.filter(function(_) {
    return fe(_) === c;
  }) : Se, v = u.filter(function(_) {
    return p.indexOf(_) >= 0;
  });
  v.length === 0 && (v = u);
  var d = v.reduce(function(_, m) {
    return _[m] = Pe(e, {
      placement: m,
      boundary: n,
      rootBoundary: o,
      padding: l
    })[X(m)], _;
  }, {});
  return Object.keys(d).sort(function(_, m) {
    return d[_] - d[m];
  });
}
function An(e) {
  if (X(e) === Ye)
    return [];
  var t = Le(e);
  return [wt(e), t, wt(t)];
}
function Bn(e) {
  var t = e.state, a = e.options, i = e.name;
  if (!t.modifiersData[i]._skip) {
    for (var n = a.mainAxis, o = n === void 0 ? !0 : n, l = a.altAxis, r = l === void 0 ? !0 : l, s = a.fallbackPlacements, p = a.padding, c = a.boundary, u = a.rootBoundary, v = a.altBoundary, d = a.flipVariations, _ = d === void 0 ? !0 : d, m = a.allowedAutoPlacements, g = t.options.placement, x = X(g), S = x === g, k = s || (S || !_ ? [Le(g)] : An(g)), h = [g].concat(k).reduce(function(le, Q) {
      return le.concat(X(Q) === Ye ? Cn(t, {
        placement: Q,
        boundary: c,
        rootBoundary: u,
        padding: p,
        flipVariations: _,
        allowedAutoPlacements: m
      }) : Q);
    }, []), w = t.rects.reference, O = t.rects.popper, P = /* @__PURE__ */ new Map(), B = !0, A = h[0], C = 0; C < h.length; C++) {
      var E = h[C], N = X(E), D = fe(E) === ue, ee = [V, F].indexOf(N) >= 0, te = ee ? "width" : "height", j = Pe(t, {
        placement: E,
        boundary: c,
        rootBoundary: u,
        altBoundary: v,
        padding: p
      }), z = ee ? D ? U : R : D ? F : V;
      w[te] > O[te] && (z = Le(z));
      var Ce = Le(z), ae = [];
      if (o && ae.push(j[N] <= 0), r && ae.push(j[z] <= 0, j[Ce] <= 0), ae.every(function(le) {
        return le;
      })) {
        A = E, B = !1;
        break;
      }
      P.set(E, ae);
    }
    if (B)
      for (var Ae = _ ? 3 : 1, Te = function(Q) {
        var ve = h.find(function($e) {
          var ne = P.get($e);
          if (ne)
            return ne.slice(0, Q).every(function(Me) {
              return Me;
            });
        });
        if (ve)
          return A = ve, "break";
      }, ge = Ae; ge > 0; ge--) {
        var Be = Te(ge);
        if (Be === "break")
          break;
      }
    t.placement !== A && (t.modifiersData[i]._skip = !0, t.placement = A, t.reset = !0);
  }
}
const $n = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Bn,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function xt(e, t, a) {
  return a === void 0 && (a = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - a.y,
    right: e.right - t.width + a.x,
    bottom: e.bottom - t.height + a.y,
    left: e.left - t.width - a.x
  };
}
function _t(e) {
  return [V, U, F, R].some(function(t) {
    return e[t] >= 0;
  });
}
function En(e) {
  var t = e.state, a = e.name, i = t.rects.reference, n = t.rects.popper, o = t.modifiersData.preventOverflow, l = Pe(t, {
    elementContext: "reference"
  }), r = Pe(t, {
    altBoundary: !0
  }), s = xt(l, i), p = xt(r, n, o), c = _t(s), u = _t(p);
  t.modifiersData[a] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: p,
    isReferenceHidden: c,
    hasPopperEscaped: u
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": u
  });
}
const Dn = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: En
};
function Ln(e, t, a) {
  var i = X(e), n = [R, V].indexOf(i) >= 0 ? -1 : 1, o = typeof a == "function" ? a(Object.assign({}, t, {
    placement: e
  })) : a, l = o[0], r = o[1];
  return l = l || 0, r = (r || 0) * n, [R, U].indexOf(i) >= 0 ? {
    x: r,
    y: l
  } : {
    x: l,
    y: r
  };
}
function Vn(e) {
  var t = e.state, a = e.options, i = e.name, n = a.offset, o = n === void 0 ? [0, 0] : n, l = Ct.reduce(function(c, u) {
    return c[u] = Ln(u, t.rects, o), c;
  }, {}), r = l[t.placement], s = r.x, p = r.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += p), t.modifiersData[i] = l;
}
const Rn = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Vn
};
function jn(e) {
  var t = e.state, a = e.name;
  t.modifiersData[a] = Vt({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Tn = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: jn,
  data: {}
};
function Mn(e) {
  return e === "x" ? "y" : "x";
}
function Fn(e) {
  var t = e.state, a = e.options, i = e.name, n = a.mainAxis, o = n === void 0 ? !0 : n, l = a.altAxis, r = l === void 0 ? !1 : l, s = a.boundary, p = a.rootBoundary, c = a.altBoundary, u = a.padding, v = a.tether, d = v === void 0 ? !0 : v, _ = a.tetherOffset, m = _ === void 0 ? 0 : _, g = Pe(t, {
    boundary: s,
    rootBoundary: p,
    padding: u,
    altBoundary: c
  }), x = X(t.placement), S = fe(t.placement), k = !S, h = Ge(x), w = Mn(h), O = t.modifiersData.popperOffsets, P = t.rects.reference, B = t.rects.popper, A = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, C = typeof A == "number" ? {
    mainAxis: A,
    altAxis: A
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, A), E = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, N = {
    x: 0,
    y: 0
  };
  if (!!O) {
    if (o) {
      var D, ee = h === "y" ? V : R, te = h === "y" ? F : U, j = h === "y" ? "height" : "width", z = O[h], Ce = z + g[ee], ae = z - g[te], Ae = d ? -B[j] / 2 : 0, Te = S === ue ? P[j] : B[j], ge = S === ue ? -B[j] : -P[j], Be = t.elements.arrow, le = d && Be ? Qe(Be) : {
        width: 0,
        height: 0
      }, Q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : $t(), ve = Q[ee], $e = Q[te], ne = ye(0, P[j], le[j]), Me = k ? P[j] / 2 - Ae - ne - ve - C.mainAxis : Te - ne - ve - C.mainAxis, Rt = k ? -P[j] / 2 + Ae + ne + $e + C.mainAxis : ge + ne + $e + C.mainAxis, Fe = t.elements.arrow && ke(t.elements.arrow), jt = Fe ? h === "y" ? Fe.clientTop || 0 : Fe.clientLeft || 0 : 0, at = (D = E == null ? void 0 : E[h]) != null ? D : 0, Tt = z + Me - at - jt, Mt = z + Rt - at, nt = ye(d ? Re(Ce, Tt) : Ce, z, d ? re(ae, Mt) : ae);
      O[h] = nt, N[h] = nt - z;
    }
    if (r) {
      var it, Ft = h === "x" ? V : R, Ut = h === "x" ? F : U, ie = O[w], Ee = w === "y" ? "height" : "width", rt = ie + g[Ft], ot = ie - g[Ut], Ue = [V, R].indexOf(x) !== -1, st = (it = E == null ? void 0 : E[w]) != null ? it : 0, lt = Ue ? rt : ie - P[Ee] - B[Ee] - st + C.altAxis, ct = Ue ? ie + P[Ee] + B[Ee] - st - C.altAxis : ot, pt = d && Ue ? cn(lt, ie, ct) : ye(d ? lt : rt, ie, d ? ct : ot);
      O[w] = pt, N[w] = pt - ie;
    }
    t.modifiersData[i] = N;
  }
}
const Un = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Fn,
  requiresIfExists: ["offset"]
};
function Nn(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function zn(e) {
  return e === T(e) || !M(e) ? Ze(e) : Nn(e);
}
function Wn(e) {
  var t = e.getBoundingClientRect(), a = de(t.width) / e.offsetWidth || 1, i = de(t.height) / e.offsetHeight || 1;
  return a !== 1 || i !== 1;
}
function Hn(e, t, a) {
  a === void 0 && (a = !1);
  var i = M(t), n = M(t) && Wn(t), o = Z(t), l = he(e, n, a), r = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (i || !i && !a) && ((K(t) !== "body" || tt(o)) && (r = zn(t)), M(t) ? (s = he(t, !0), s.x += t.clientLeft, s.y += t.clientTop) : o && (s.x = et(o))), {
    x: l.left + r.scrollLeft - s.x,
    y: l.top + r.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function In(e) {
  var t = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), i = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function n(o) {
    a.add(o.name);
    var l = [].concat(o.requires || [], o.requiresIfExists || []);
    l.forEach(function(r) {
      if (!a.has(r)) {
        var s = t.get(r);
        s && n(s);
      }
    }), i.push(o);
  }
  return e.forEach(function(o) {
    a.has(o.name) || n(o);
  }), i;
}
function qn(e) {
  var t = In(e);
  return an.reduce(function(a, i) {
    return a.concat(t.filter(function(n) {
      return n.phase === i;
    }));
  }, []);
}
function Xn(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(a) {
      Promise.resolve().then(function() {
        t = void 0, a(e());
      });
    })), t;
  };
}
function Kn(e) {
  var t = e.reduce(function(a, i) {
    var n = a[i.name];
    return a[i.name] = n ? Object.assign({}, n, i, {
      options: Object.assign({}, n.options, i.options),
      data: Object.assign({}, n.data, i.data)
    }) : i, a;
  }, {});
  return Object.keys(t).map(function(a) {
    return t[a];
  });
}
var Pt = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function St() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
    t[a] = arguments[a];
  return !t.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
function Yn(e) {
  e === void 0 && (e = {});
  var t = e, a = t.defaultModifiers, i = a === void 0 ? [] : a, n = t.defaultOptions, o = n === void 0 ? Pt : n;
  return function(r, s, p) {
    p === void 0 && (p = o);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Pt, o),
      modifiersData: {},
      elements: {
        reference: r,
        popper: s
      },
      attributes: {},
      styles: {}
    }, u = [], v = !1, d = {
      state: c,
      setOptions: function(x) {
        var S = typeof x == "function" ? x(c.options) : x;
        m(), c.options = Object.assign({}, o, c.options, S), c.scrollParents = {
          reference: se(r) ? be(r) : r.contextElement ? be(r.contextElement) : [],
          popper: be(s)
        };
        var k = qn(Kn([].concat(i, c.options.modifiers)));
        return c.orderedModifiers = k.filter(function(h) {
          return h.enabled;
        }), _(), d.update();
      },
      forceUpdate: function() {
        if (!v) {
          var x = c.elements, S = x.reference, k = x.popper;
          if (!!St(S, k)) {
            c.rects = {
              reference: Hn(S, ke(k), c.options.strategy === "fixed"),
              popper: Qe(k)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(C) {
              return c.modifiersData[C.name] = Object.assign({}, C.data);
            });
            for (var h = 0; h < c.orderedModifiers.length; h++) {
              if (c.reset === !0) {
                c.reset = !1, h = -1;
                continue;
              }
              var w = c.orderedModifiers[h], O = w.fn, P = w.options, B = P === void 0 ? {} : P, A = w.name;
              typeof O == "function" && (c = O({
                state: c,
                options: B,
                name: A,
                instance: d
              }) || c);
            }
          }
        }
      },
      update: Xn(function() {
        return new Promise(function(g) {
          d.forceUpdate(), g(c);
        });
      }),
      destroy: function() {
        m(), v = !0;
      }
    };
    if (!St(r, s))
      return d;
    d.setOptions(p).then(function(g) {
      !v && p.onFirstUpdate && p.onFirstUpdate(g);
    });
    function _() {
      c.orderedModifiers.forEach(function(g) {
        var x = g.name, S = g.options, k = S === void 0 ? {} : S, h = g.effect;
        if (typeof h == "function") {
          var w = h({
            state: c,
            name: x,
            instance: d,
            options: k
          }), O = function() {
          };
          u.push(w || O);
        }
      });
    }
    function m() {
      u.forEach(function(g) {
        return g();
      }), u = [];
    }
    return d;
  };
}
var Jn = [bn, Tn, mn, on, Rn, $n, Un, hn, Dn], Qn = /* @__PURE__ */ Yn({
  defaultModifiers: Jn
});
const Gn = {
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  emits: ["pagination-change-page", "size-change"],
  components: {
    RenderlessPagination: qe,
    vSelect: Ha
  },
  data() {
    return {
      pageS: 20,
      currentPage: 1
    };
  },
  props: {
    showElipses: {
      type: Boolean,
      default: !1
    },
    sizeOptions: {
      type: Array,
      default: [5, 10, 20, 30, 40, 50]
    },
    pageSize: {
      type: Number,
      default: 20
    },
    data: {
      type: Object,
      default: () => {
      }
    },
    limit: {
      type: Number,
      default: 3
    },
    keepLength: {
      type: Boolean,
      default: !1
    },
    itemClasses: {
      type: Array,
      default: () => [
        "bg-white",
        "text-gray-500",
        "border-gray-300",
        "hover:bg-gray-50"
      ]
    },
    activeClasses: {
      type: Array,
      default: () => [
        "bg-blue-50",
        "border-blue-500",
        "text-blue-600"
      ]
    }
  },
  methods: {
    sizeChanged(e) {
      this.$emit("size-change", e), this.$emit("pagination-change-page", this.currentPage, this.pageS);
    },
    onPaginationChangePage(e) {
      this.currentPage = e, this.$emit("pagination-change-page", this.currentPage, this.pageS);
    },
    async withPopper(e, t, { width: a }) {
      Wt(() => {
        e.style.width = a, t.$refs.toggle.width = a, t.$refs.parent_holder.width = a;
        const i = Qn(t.$refs.toggle, e, {
          placement: "top",
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, -5]
              }
            },
            {
              name: "toggleClass",
              enabled: !0,
              phase: "write",
              fn({ state: n }) {
                t.$el.classList.toggle(
                  "drop-up",
                  n.placement === "top"
                );
              }
            }
          ]
        });
        return () => i.destroy();
      });
    }
  },
  mounted() {
    this.pageS = this.pageSize;
  }
}, Zn = { class: "flex text-xs flex-col md:flex-row gap-2" }, ei = {
  key: 0,
  class: "text-xs self-center text-slate-700 text-nowrap"
}, ti = {
  key: 1,
  class: "text-xs self-center text-slate-700"
}, ai = { class: "flex place-items-center content-center flex-wrap justify-center" }, ni = ["disabled"], ii = /* @__PURE__ */ b("span", { class: "sr-only" }, "Previous", -1), ri = /* @__PURE__ */ b("svg", {
  class: "w-5 h-5",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ b("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M15.75 19.5L8.25 12l7.5-7.5"
  })
], -1), oi = ["aria-current", "disabled"], si = ["disabled"], li = /* @__PURE__ */ b("span", { class: "sr-only" }, "Next", -1), ci = /* @__PURE__ */ b("svg", {
  class: "w-5 h-5",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ b("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M8.25 4.5l7.5 7.5-7.5 7.5"
  })
], -1), pi = { class: "text-xs" };
function ui(e, t, a, i, n, o) {
  const l = Ve("RenderlessPagination"), r = Ve("v-select");
  return f(), y("div", Zn, [
    a.data.from && a.data.to && a.data.total ? (f(), y("span", ei, "Showing " + Y(a.data.from) + " to " + Y(a.data.to) + " of " + Y(a.data.total), 1)) : (f(), y("span", ti, "No results found")),
    b("div", ai, [
      we(l, {
        data: a.data,
        limit: a.limit,
        "keep-length": a.keepLength,
        onPaginationChangePage: o.onPaginationChangePage
      }, {
        default: Oe((s) => [
          s.computed.total > s.computed.perPage ? (f(), y("nav", L({ key: 0 }, e.$attrs, {
            class: "ml-0 md:ml-2 inline-flex -space-x-px rounded-md shadow-sm isolate ltr:flex-row rtl:flex-row-reverse",
            "aria-label": "Pagination"
          }), [
            b("button", L({
              class: ["relative inline-flex items-center px-2 py-2 text-sm font-medium border rounded-l-md focus:z-20 disabled:opacity-50", a.itemClasses],
              disabled: !s.computed.prevPageUrl
            }, q(s.prevButtonEvents, !0)), [
              $(e.$slots, "prev-nav", {}, () => [
                ii,
                ri
              ])
            ], 16, ni),
            (f(!0), y(oe, null, xe(s.computed.pageRange, (p, c) => (f(), y("button", L({
              class: ["relative inline-flex items-center px-4 py-2 text-sm font-medium border focus:z-20", [
                p == s.computed.currentPage ? a.activeClasses : a.itemClasses,
                p == s.computed.currentPage ? "z-30" : ""
              ]],
              "aria-current": s.computed.currentPage ? "page" : null,
              key: c
            }, q(s.pageButtonEvents(p), !0), {
              disabled: p === s.computed.currentPage
            }), Y(p), 17, oi))), 128)),
            b("button", L({
              class: ["relative inline-flex items-center px-2 py-2 text-sm font-medium border rounded-r-md focus:z-20 disabled:opacity-50", a.itemClasses],
              disabled: !s.computed.nextPageUrl
            }, q(s.nextButtonEvents, !0)), [
              $(e.$slots, "next-nav", {}, () => [
                li,
                ci
              ])
            ], 16, si)
          ], 16)) : H("", !0)
        ]),
        _: 3
      }, 8, ["data", "limit", "keep-length", "onPaginationChangePage"]),
      we(r, {
        class: "small ml-1",
        options: a.sizeOptions,
        "onOption:selected": o.sizeChanged,
        modelValue: n.pageS,
        "onUpdate:modelValue": t[0] || (t[0] = (s) => n.pageS = s),
        "append-to-body": "",
        "calculate-position": o.withPopper,
        clearable: !1,
        selectOnTab: !0
      }, {
        option: Oe((s) => [
          b("span", pi, Y(s.label), 1)
        ]),
        _: 1
      }, 8, ["options", "onOption:selected", "modelValue", "calculate-position"])
    ])
  ]);
}
const gi = /* @__PURE__ */ Xe(Gn, [["render", ui]]);
export {
  hi as Bootstrap4Pagination,
  fi as Bootstrap5Pagination,
  qe as RenderlessPagination,
  gi as TailwindPagination
};
