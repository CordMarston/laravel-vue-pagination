import { resolveComponent as w, openBlock as l, createElementBlock as d, Fragment as y, createTextVNode as k, createVNode as C, withCtx as B, mergeProps as g, normalizeClass as _, createElementVNode as r, toHandlers as h, renderSlot as P, createCommentVNode as p, renderList as U, toDisplayString as v } from "vue";
const R = {
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
      var e, n, t, i, o;
      return (o = (i = (n = this.data.first_page_url) != null ? n : (e = this.data.meta) == null ? void 0 : e.first_page_url) != null ? i : (t = this.data.links) == null ? void 0 : t.first) != null ? o : null;
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
      var e, n, t, i, o;
      return (o = (i = (n = this.data.last_page_url) != null ? n : (e = this.data.meta) == null ? void 0 : e.last_page_url) != null ? i : (t = this.data.links) == null ? void 0 : t.last) != null ? o : null;
    },
    nextPageUrl() {
      var e, n, t, i, o;
      return (o = (i = (n = this.data.next_page_url) != null ? n : (e = this.data.meta) == null ? void 0 : e.next_page_url) != null ? i : (t = this.data.links) == null ? void 0 : t.next) != null ? o : null;
    },
    perPage() {
      var e;
      return this.isApiResource ? this.data.meta.per_page : (e = this.data.per_page) != null ? e : null;
    },
    prevPageUrl() {
      var e, n, t, i, o;
      return (o = (i = (n = this.data.prev_page_url) != null ? n : (e = this.data.meta) == null ? void 0 : e.prev_page_url) != null ? i : (t = this.data.links) == null ? void 0 : t.prev) != null ? o : null;
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
      for (var e = this.currentPage, n = this.keepLength, t = this.lastPage, i = this.limit, o = e - i, f = e + i, m = (i + 2) * 2, a = (i + 2) * 2 - 1, s = [], c = [], x, u = 1; u <= t; u++)
        (u === 1 || u === t || u >= o && u <= f || n && u < m && e < m - 2 || n && u > t - a && e > t - a + 2) && s.push(u);
      return s.forEach(function(b) {
        x && (b - x === 2 ? c.push(x + 1) : b - x !== 1 && c.push("...")), c.push(b), x = b;
      }), c;
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
        click: (n) => {
          n.preventDefault(), this.selectPage(e);
        }
      })
    });
  }
}, E = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [i, o] of n)
    t[i] = o;
  return t;
}, A = {
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  emits: ["pagination-change-page"],
  components: {
    RenderlessPagination: R
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
}, D = ["tabindex"], N = /* @__PURE__ */ r("span", { "aria-hidden": "true" }, "\xAB", -1), z = /* @__PURE__ */ r("span", { class: "sr-only" }, "Previous", -1), O = {
  key: 0,
  class: "sr-only"
}, $ = ["tabindex"], j = /* @__PURE__ */ r("span", { "aria-hidden": "true" }, "\xBB", -1), L = /* @__PURE__ */ r("span", { class: "sr-only" }, "Next", -1);
function S(e, n, t, i, o, f) {
  const m = w("RenderlessPagination");
  return l(), d(y, null, [
    k("BS4 "),
    C(m, {
      data: t.data,
      limit: t.limit,
      "keep-length": t.keepLength,
      onPaginationChangePage: f.onPaginationChangePage
    }, {
      default: B((a) => [
        a.computed.total > a.computed.perPage ? (l(), d("ul", g({ key: 0 }, e.$attrs, {
          class: ["pagination", {
            "pagination-sm": t.size == "small",
            "pagination-lg": t.size == "large",
            "justify-content-center": t.align == "center",
            "justify-content-end": t.align == "right"
          }]
        }), [
          a.computed.prevPageUrl || t.showDisabled ? (l(), d("li", {
            key: 0,
            class: _(["page-item pagination-prev-nav", { disabled: !a.computed.prevPageUrl }])
          }, [
            r("a", g({
              class: "page-link",
              href: "#",
              "aria-label": "Previous",
              tabindex: !a.computed.prevPageUrl && -1
            }, h(a.prevButtonEvents, !0)), [
              P(e.$slots, "prev-nav", {}, () => [
                N,
                z
              ])
            ], 16, D)
          ], 2)) : p("", !0),
          (l(!0), d(y, null, U(a.computed.pageRange, (s, c) => (l(), d("li", {
            class: _(["page-item pagination-page-nav", { active: s == a.computed.currentPage }]),
            key: c
          }, [
            r("a", g({
              class: "page-link",
              href: "#"
            }, h(a.pageButtonEvents(s), !0)), [
              k(v(s) + " ", 1),
              s == a.computed.currentPage ? (l(), d("span", O, "(current)")) : p("", !0)
            ], 16)
          ], 2))), 128)),
          a.computed.nextPageUrl || t.showDisabled ? (l(), d("li", {
            key: 1,
            class: _(["page-item pagination-next-nav", { disabled: !a.computed.nextPageUrl }])
          }, [
            r("a", g({
              class: "page-link",
              href: "#",
              "aria-label": "Next",
              tabindex: !a.computed.nextPageUrl && -1
            }, h(a.nextButtonEvents, !0)), [
              P(e.$slots, "next-nav", {}, () => [
                j,
                L
              ])
            ], 16, $)
          ], 2)) : p("", !0)
        ], 16)) : p("", !0)
      ]),
      _: 3
    }, 8, ["data", "limit", "keep-length", "onPaginationChangePage"])
  ], 64);
}
const se = /* @__PURE__ */ E(A, [["render", S]]), M = {
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  emits: ["pagination-change-page"],
  components: {
    RenderlessPagination: R
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
}, V = ["tabindex"], T = /* @__PURE__ */ r("span", { "aria-hidden": "true" }, "\xAB", -1), F = ["aria-current"], H = ["tabindex"], q = /* @__PURE__ */ r("span", { "aria-hidden": "true" }, "\xBB", -1);
function G(e, n, t, i, o, f) {
  const m = w("RenderlessPagination");
  return l(), d(y, null, [
    k("BS5 "),
    C(m, {
      data: t.data,
      limit: t.limit,
      "keep-length": t.keepLength,
      onPaginationChangePage: f.onPaginationChangePage
    }, {
      default: B((a) => [
        a.computed.total > a.computed.perPage ? (l(), d("ul", g({ key: 0 }, e.$attrs, {
          class: ["pagination", {
            "pagination-sm": t.size == "small",
            "pagination-lg": t.size == "large",
            "justify-content-center": t.align == "center",
            "justify-content-end": t.align == "right"
          }]
        }), [
          a.computed.prevPageUrl || t.showDisabled ? (l(), d("li", {
            key: 0,
            class: _(["page-item pagination-prev-nav", { disabled: !a.computed.prevPageUrl }])
          }, [
            r("a", g({
              class: "page-link",
              href: "#",
              "aria-label": "Previous",
              tabindex: !a.computed.prevPageUrl && -1
            }, h(a.prevButtonEvents, !0)), [
              P(e.$slots, "prev-nav", {}, () => [
                T
              ])
            ], 16, V)
          ], 2)) : p("", !0),
          (l(!0), d(y, null, U(a.computed.pageRange, (s, c) => (l(), d("li", {
            class: _(["page-item pagination-page-nav", { active: s == a.computed.currentPage }]),
            key: c
          }, [
            r("a", g({
              class: "page-link",
              href: "#"
            }, h(a.pageButtonEvents(s), !0), {
              "aria-current": s == a.computed.currentPage ? "page" : null
            }), v(s), 17, F)
          ], 2))), 128)),
          a.computed.nextPageUrl || t.showDisabled ? (l(), d("li", {
            key: 1,
            class: _(["page-item pagination-next-nav", { disabled: !a.computed.nextPageUrl }])
          }, [
            r("a", g({
              class: "page-link",
              href: "#",
              "aria-label": "Next",
              tabindex: !a.computed.nextPageUrl && -1
            }, h(a.nextButtonEvents, !0)), [
              P(e.$slots, "next-nav", {}, () => [
                q
              ])
            ], 16, H)
          ], 2)) : p("", !0)
        ], 16)) : p("", !0)
      ]),
      _: 3
    }, 8, ["data", "limit", "keep-length", "onPaginationChangePage"])
  ], 64);
}
const re = /* @__PURE__ */ E(M, [["render", G]]), I = {
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  emits: ["pagination-change-page"],
  components: {
    RenderlessPagination: R
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
    onPaginationChangePage(e) {
      this.$emit("pagination-change-page", e);
    }
  }
}, J = { class: "flex" }, K = {
  key: 0,
  class: "text-xs self-center text-slate-700"
}, Q = {
  key: 1,
  class: "text-xs self-center text-slate-700"
}, W = ["disabled"], X = /* @__PURE__ */ r("span", { class: "sr-only" }, "Previous", -1), Y = /* @__PURE__ */ r("svg", {
  class: "w-5 h-5",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ r("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M15.75 19.5L8.25 12l7.5-7.5"
  })
], -1), Z = ["aria-current", "disabled"], ee = ["disabled"], te = /* @__PURE__ */ r("span", { class: "sr-only" }, "Next", -1), ae = /* @__PURE__ */ r("svg", {
  class: "w-5 h-5",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ r("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M8.25 4.5l7.5 7.5-7.5 7.5"
  })
], -1);
function ne(e, n, t, i, o, f) {
  const m = w("RenderlessPagination");
  return l(), d("div", J, [
    t.data.from ? (l(), d("span", K, "Showing " + v(t.data.from) + " to " + v(t.data.to) + " of " + v(t.data.total), 1)) : (l(), d("span", Q, "No results found")),
    C(m, {
      data: t.data,
      limit: t.limit,
      "keep-length": t.keepLength,
      onPaginationChangePage: f.onPaginationChangePage
    }, {
      default: B((a) => [
        a.computed.total > a.computed.perPage ? (l(), d("nav", g({ key: 0 }, e.$attrs, {
          class: "ml-2 inline-flex -space-x-px rounded-md shadow-sm isolate ltr:flex-row rtl:flex-row-reverse",
          "aria-label": "Pagination"
        }), [
          r("button", g({
            class: ["relative inline-flex items-center px-2 py-2 text-sm font-medium border rounded-l-md focus:z-20 disabled:opacity-50", t.itemClasses],
            disabled: !a.computed.prevPageUrl
          }, h(a.prevButtonEvents, !0)), [
            P(e.$slots, "prev-nav", {}, () => [
              X,
              Y
            ])
          ], 16, W),
          (l(!0), d(y, null, U(a.computed.pageRange, (s, c) => (l(), d("button", g({
            class: ["relative inline-flex items-center px-4 py-2 text-sm font-medium border focus:z-20", [
              s == a.computed.currentPage ? t.activeClasses : t.itemClasses,
              s == a.computed.currentPage ? "z-30" : ""
            ]],
            "aria-current": a.computed.currentPage ? "page" : null,
            key: c
          }, h(a.pageButtonEvents(s), !0), {
            disabled: s === a.computed.currentPage
          }), v(s), 17, Z))), 128)),
          r("button", g({
            class: ["relative inline-flex items-center px-2 py-2 text-sm font-medium border rounded-r-md focus:z-20 disabled:opacity-50", t.itemClasses],
            disabled: !a.computed.nextPageUrl
          }, h(a.nextButtonEvents, !0)), [
            P(e.$slots, "next-nav", {}, () => [
              te,
              ae
            ])
          ], 16, ee)
        ], 16)) : p("", !0)
      ]),
      _: 3
    }, 8, ["data", "limit", "keep-length", "onPaginationChangePage"])
  ]);
}
const le = /* @__PURE__ */ E(I, [["render", ne]]);
export {
  se as Bootstrap4Pagination,
  re as Bootstrap5Pagination,
  R as RenderlessPagination,
  le as TailwindPagination
};
