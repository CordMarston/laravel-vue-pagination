import { resolveComponent as y, openBlock as d, createBlock as R, withCtx as k, createElementBlock as o, mergeProps as u, normalizeClass as _, createElementVNode as s, toHandlers as h, renderSlot as P, createCommentVNode as m, Fragment as w, renderList as C, createTextVNode as E, toDisplayString as v, createVNode as A } from "vue";
const U = {
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
      var e, n, t, i, l;
      return (l = (i = (n = this.data.first_page_url) != null ? n : (e = this.data.meta) == null ? void 0 : e.first_page_url) != null ? i : (t = this.data.links) == null ? void 0 : t.first) != null ? l : null;
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
      var e, n, t, i, l;
      return (l = (i = (n = this.data.last_page_url) != null ? n : (e = this.data.meta) == null ? void 0 : e.last_page_url) != null ? i : (t = this.data.links) == null ? void 0 : t.last) != null ? l : null;
    },
    nextPageUrl() {
      var e, n, t, i, l;
      return (l = (i = (n = this.data.next_page_url) != null ? n : (e = this.data.meta) == null ? void 0 : e.next_page_url) != null ? i : (t = this.data.links) == null ? void 0 : t.next) != null ? l : null;
    },
    perPage() {
      var e;
      return this.isApiResource ? this.data.meta.per_page : (e = this.data.per_page) != null ? e : null;
    },
    prevPageUrl() {
      var e, n, t, i, l;
      return (l = (i = (n = this.data.prev_page_url) != null ? n : (e = this.data.meta) == null ? void 0 : e.prev_page_url) != null ? i : (t = this.data.links) == null ? void 0 : t.prev) != null ? l : null;
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
      for (var e = this.currentPage, n = this.keepLength, t = this.lastPage, i = this.limit, l = e - i, f = e + i, p = (i + 2) * 2, a = (i + 2) * 2 - 1, r = [], c = [], x, g = 1; g <= t; g++)
        (g === 1 || g === t || g >= l && g <= f || n && g < p && e < p - 2 || n && g > t - a && e > t - a + 2) && r.push(g);
      return r.forEach(function(b) {
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
}, B = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [i, l] of n)
    t[i] = l;
  return t;
}, D = {
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  emits: ["pagination-change-page"],
  components: {
    RenderlessPagination: U
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
}, z = ["tabindex"], N = /* @__PURE__ */ s("span", { "aria-hidden": "true" }, "\xAB", -1), O = /* @__PURE__ */ s("span", { class: "sr-only" }, "Previous", -1), $ = {
  key: 0,
  class: "sr-only"
}, j = ["tabindex"], L = /* @__PURE__ */ s("span", { "aria-hidden": "true" }, "\xBB", -1), S = /* @__PURE__ */ s("span", { class: "sr-only" }, "Next", -1);
function M(e, n, t, i, l, f) {
  const p = y("RenderlessPagination");
  return d(), R(p, {
    data: t.data,
    limit: t.limit,
    "keep-length": t.keepLength,
    onPaginationChangePage: f.onPaginationChangePage
  }, {
    default: k((a) => [
      a.computed.total > a.computed.perPage ? (d(), o("ul", u({ key: 0 }, e.$attrs, {
        class: ["pagination", {
          "pagination-sm": t.size == "small",
          "pagination-lg": t.size == "large",
          "justify-content-center": t.align == "center",
          "justify-content-end": t.align == "right"
        }]
      }), [
        a.computed.prevPageUrl || t.showDisabled ? (d(), o("li", {
          key: 0,
          class: _(["page-item pagination-prev-nav", { disabled: !a.computed.prevPageUrl }])
        }, [
          s("a", u({
            class: "page-link",
            href: "#",
            "aria-label": "Previous",
            tabindex: !a.computed.prevPageUrl && -1
          }, h(a.prevButtonEvents, !0)), [
            P(e.$slots, "prev-nav", {}, () => [
              N,
              O
            ])
          ], 16, z)
        ], 2)) : m("", !0),
        (d(!0), o(w, null, C(a.computed.pageRange, (r, c) => (d(), o("li", {
          class: _(["page-item pagination-page-nav", { active: r == a.computed.currentPage }]),
          key: c
        }, [
          s("a", u({
            class: "page-link",
            href: "#"
          }, h(a.pageButtonEvents(r), !0)), [
            E(v(r) + " ", 1),
            r == a.computed.currentPage ? (d(), o("span", $, "(current)")) : m("", !0)
          ], 16)
        ], 2))), 128)),
        a.computed.nextPageUrl || t.showDisabled ? (d(), o("li", {
          key: 1,
          class: _(["page-item pagination-next-nav", { disabled: !a.computed.nextPageUrl }])
        }, [
          s("a", u({
            class: "page-link",
            href: "#",
            "aria-label": "Next",
            tabindex: !a.computed.nextPageUrl && -1
          }, h(a.nextButtonEvents, !0)), [
            P(e.$slots, "next-nav", {}, () => [
              L,
              S
            ])
          ], 16, j)
        ], 2)) : m("", !0)
      ], 16)) : m("", !0)
    ]),
    _: 3
  }, 8, ["data", "limit", "keep-length", "onPaginationChangePage"]);
}
const re = /* @__PURE__ */ B(D, [["render", M]]), V = {
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  emits: ["pagination-change-page"],
  components: {
    RenderlessPagination: U
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
}, T = ["tabindex"], F = /* @__PURE__ */ s("span", { "aria-hidden": "true" }, "\xAB", -1), H = ["aria-current"], q = ["tabindex"], G = /* @__PURE__ */ s("span", { "aria-hidden": "true" }, "\xBB", -1);
function I(e, n, t, i, l, f) {
  const p = y("RenderlessPagination");
  return d(), R(p, {
    data: t.data,
    limit: t.limit,
    "keep-length": t.keepLength,
    onPaginationChangePage: f.onPaginationChangePage
  }, {
    default: k((a) => [
      a.computed.total > a.computed.perPage ? (d(), o("ul", u({ key: 0 }, e.$attrs, {
        class: ["pagination", {
          "pagination-sm": t.size == "small",
          "pagination-lg": t.size == "large",
          "justify-content-center": t.align == "center",
          "justify-content-end": t.align == "right"
        }]
      }), [
        a.computed.prevPageUrl || t.showDisabled ? (d(), o("li", {
          key: 0,
          class: _(["page-item pagination-prev-nav", { disabled: !a.computed.prevPageUrl }])
        }, [
          s("a", u({
            class: "page-link",
            href: "#",
            "aria-label": "Previous",
            tabindex: !a.computed.prevPageUrl && -1
          }, h(a.prevButtonEvents, !0)), [
            P(e.$slots, "prev-nav", {}, () => [
              F
            ])
          ], 16, T)
        ], 2)) : m("", !0),
        (d(!0), o(w, null, C(a.computed.pageRange, (r, c) => (d(), o("li", {
          class: _(["page-item pagination-page-nav", { active: r == a.computed.currentPage }]),
          key: c
        }, [
          s("a", u({
            class: "page-link",
            href: "#"
          }, h(a.pageButtonEvents(r), !0), {
            "aria-current": r == a.computed.currentPage ? "page" : null
          }), v(r), 17, H)
        ], 2))), 128)),
        a.computed.nextPageUrl || t.showDisabled ? (d(), o("li", {
          key: 1,
          class: _(["page-item pagination-next-nav", { disabled: !a.computed.nextPageUrl }])
        }, [
          s("a", u({
            class: "page-link",
            href: "#",
            "aria-label": "Next",
            tabindex: !a.computed.nextPageUrl && -1
          }, h(a.nextButtonEvents, !0)), [
            P(e.$slots, "next-nav", {}, () => [
              G
            ])
          ], 16, q)
        ], 2)) : m("", !0)
      ], 16)) : m("", !0)
    ]),
    _: 3
  }, 8, ["data", "limit", "keep-length", "onPaginationChangePage"]);
}
const se = /* @__PURE__ */ B(V, [["render", I]]), J = {
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  emits: ["pagination-change-page"],
  components: {
    RenderlessPagination: U
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
}, K = { class: "flex" }, Q = { class: "text-xs self-center text-slate-700" }, W = ["disabled"], X = /* @__PURE__ */ s("span", { class: "sr-only" }, "Previous", -1), Y = /* @__PURE__ */ s("svg", {
  class: "w-5 h-5",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M15.75 19.5L8.25 12l7.5-7.5"
  })
], -1), Z = ["aria-current", "disabled"], ee = ["disabled"], te = /* @__PURE__ */ s("span", { class: "sr-only" }, "Next", -1), ae = /* @__PURE__ */ s("svg", {
  class: "w-5 h-5",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M8.25 4.5l7.5 7.5-7.5 7.5"
  })
], -1);
function ne(e, n, t, i, l, f) {
  const p = y("RenderlessPagination");
  return d(), o("div", K, [
    s("span", Q, "Showing " + v(t.data.from) + " to " + v(t.data.to) + " of " + v(t.data.total), 1),
    A(p, {
      data: t.data,
      limit: t.limit,
      "keep-length": t.keepLength,
      onPaginationChangePage: f.onPaginationChangePage
    }, {
      default: k((a) => [
        a.computed.total > a.computed.perPage ? (d(), o("nav", u({ key: 0 }, e.$attrs, {
          class: "ml-2 inline-flex -space-x-px rounded-md shadow-sm isolate ltr:flex-row rtl:flex-row-reverse",
          "aria-label": "Pagination"
        }), [
          s("button", u({
            class: ["relative inline-flex items-center px-2 py-2 text-sm font-medium border rounded-l-md focus:z-20 disabled:opacity-50", t.itemClasses],
            disabled: !a.computed.prevPageUrl
          }, h(a.prevButtonEvents, !0)), [
            P(e.$slots, "prev-nav", {}, () => [
              X,
              Y
            ])
          ], 16, W),
          (d(!0), o(w, null, C(a.computed.pageRange, (r, c) => (d(), o("button", u({
            class: ["relative inline-flex items-center px-4 py-2 text-sm font-medium border focus:z-20", [
              r == a.computed.currentPage ? t.activeClasses : t.itemClasses,
              r == a.computed.currentPage ? "z-30" : ""
            ]],
            "aria-current": a.computed.currentPage ? "page" : null,
            key: c
          }, h(a.pageButtonEvents(r), !0), {
            disabled: r === a.computed.currentPage
          }), v(r), 17, Z))), 128)),
          s("button", u({
            class: ["relative inline-flex items-center px-2 py-2 text-sm font-medium border rounded-r-md focus:z-20 disabled:opacity-50", t.itemClasses],
            disabled: !a.computed.nextPageUrl
          }, h(a.nextButtonEvents, !0)), [
            P(e.$slots, "next-nav", {}, () => [
              te,
              ae
            ])
          ], 16, ee)
        ], 16)) : m("", !0)
      ]),
      _: 3
    }, 8, ["data", "limit", "keep-length", "onPaginationChangePage"])
  ]);
}
const le = /* @__PURE__ */ B(J, [["render", ne]]);
export {
  re as Bootstrap4Pagination,
  se as Bootstrap5Pagination,
  U as RenderlessPagination,
  le as TailwindPagination
};
