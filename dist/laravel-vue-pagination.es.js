import { resolveComponent as B, openBlock as l, createElementBlock as g, Fragment as y, createTextVNode as k, createVNode as C, withCtx as E, mergeProps as c, normalizeClass as f, createElementVNode as u, toHandlers as _, renderSlot as b, createCommentVNode as h, renderList as A, toDisplayString as P } from "vue";
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
      var e, n, t, i, r;
      return (r = (i = (n = this.data.first_page_url) != null ? n : (e = this.data.meta) == null ? void 0 : e.first_page_url) != null ? i : (t = this.data.links) == null ? void 0 : t.first) != null ? r : null;
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
      var e, n, t, i, r;
      return (r = (i = (n = this.data.last_page_url) != null ? n : (e = this.data.meta) == null ? void 0 : e.last_page_url) != null ? i : (t = this.data.links) == null ? void 0 : t.last) != null ? r : null;
    },
    nextPageUrl() {
      var e, n, t, i, r;
      return (r = (i = (n = this.data.next_page_url) != null ? n : (e = this.data.meta) == null ? void 0 : e.next_page_url) != null ? i : (t = this.data.links) == null ? void 0 : t.next) != null ? r : null;
    },
    perPage() {
      var e;
      return this.isApiResource ? this.data.meta.per_page : (e = this.data.per_page) != null ? e : null;
    },
    prevPageUrl() {
      var e, n, t, i, r;
      return (r = (i = (n = this.data.prev_page_url) != null ? n : (e = this.data.meta) == null ? void 0 : e.prev_page_url) != null ? i : (t = this.data.links) == null ? void 0 : t.prev) != null ? r : null;
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
      for (var e = this.currentPage, n = this.keepLength, t = this.lastPage, i = this.limit, r = e - i, p = e + i, m = (i + 2) * 2, a = (i + 2) * 2 - 1, s = [], o = [], v, d = 1; d <= t; d++)
        (d === 1 || d === t || d >= r && d <= p || n && d < m && e < m - 2 || n && d > t - a && e > t - a + 2) && s.push(d);
      return s.forEach(function(x) {
        v && (x - v === 2 ? o.push(v + 1) : x - v !== 1 && o.push("...")), o.push(x), v = x;
      }), o;
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
}, R = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [i, r] of n)
    t[i] = r;
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
}, O = ["tabindex"], $ = /* @__PURE__ */ u("span", { "aria-hidden": "true" }, "\xAB", -1), N = /* @__PURE__ */ u("span", { class: "sr-only" }, "Previous", -1), w = {
  key: 0,
  class: "sr-only"
}, S = ["tabindex"], j = /* @__PURE__ */ u("span", { "aria-hidden": "true" }, "\xBB", -1), z = /* @__PURE__ */ u("span", { class: "sr-only" }, "Next", -1);
function L(e, n, t, i, r, p) {
  const m = B("RenderlessPagination");
  return l(), g(y, null, [
    k("BS4 "),
    C(m, {
      data: t.data,
      limit: t.limit,
      "keep-length": t.keepLength,
      onPaginationChangePage: p.onPaginationChangePage
    }, {
      default: E((a) => [
        a.computed.total > a.computed.perPage ? (l(), g("ul", c({ key: 0 }, e.$attrs, {
          class: ["pagination", {
            "pagination-sm": t.size == "small",
            "pagination-lg": t.size == "large",
            "justify-content-center": t.align == "center",
            "justify-content-end": t.align == "right"
          }]
        }), [
          a.computed.prevPageUrl || t.showDisabled ? (l(), g("li", {
            key: 0,
            class: f(["page-item pagination-prev-nav", { disabled: !a.computed.prevPageUrl }])
          }, [
            u("a", c({
              class: "page-link",
              href: "#",
              "aria-label": "Previous",
              tabindex: !a.computed.prevPageUrl && -1
            }, _(a.prevButtonEvents, !0)), [
              b(e.$slots, "prev-nav", {}, () => [
                $,
                N
              ])
            ], 16, O)
          ], 2)) : h("", !0),
          (l(!0), g(y, null, A(a.computed.pageRange, (s, o) => (l(), g("li", {
            class: f(["page-item pagination-page-nav", { active: s == a.computed.currentPage }]),
            key: o
          }, [
            u("a", c({
              class: "page-link",
              href: "#"
            }, _(a.pageButtonEvents(s), !0)), [
              k(P(s) + " ", 1),
              s == a.computed.currentPage ? (l(), g("span", w, "(current)")) : h("", !0)
            ], 16)
          ], 2))), 128)),
          a.computed.nextPageUrl || t.showDisabled ? (l(), g("li", {
            key: 1,
            class: f(["page-item pagination-next-nav", { disabled: !a.computed.nextPageUrl }])
          }, [
            u("a", c({
              class: "page-link",
              href: "#",
              "aria-label": "Next",
              tabindex: !a.computed.nextPageUrl && -1
            }, _(a.nextButtonEvents, !0)), [
              b(e.$slots, "next-nav", {}, () => [
                j,
                z
              ])
            ], 16, S)
          ], 2)) : h("", !0)
        ], 16)) : h("", !0)
      ]),
      _: 3
    }, 8, ["data", "limit", "keep-length", "onPaginationChangePage"])
  ], 64);
}
const X = /* @__PURE__ */ R(D, [["render", L]]), V = {
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
}, M = ["tabindex"], T = /* @__PURE__ */ u("span", { "aria-hidden": "true" }, "\xAB", -1), F = ["aria-current"], H = ["tabindex"], W = /* @__PURE__ */ u("span", { "aria-hidden": "true" }, "\xBB", -1);
function q(e, n, t, i, r, p) {
  const m = B("RenderlessPagination");
  return l(), g(y, null, [
    k("BS5 "),
    C(m, {
      data: t.data,
      limit: t.limit,
      "keep-length": t.keepLength,
      onPaginationChangePage: p.onPaginationChangePage
    }, {
      default: E((a) => [
        a.computed.total > a.computed.perPage ? (l(), g("ul", c({ key: 0 }, e.$attrs, {
          class: ["pagination", {
            "pagination-sm": t.size == "small",
            "pagination-lg": t.size == "large",
            "justify-content-center": t.align == "center",
            "justify-content-end": t.align == "right"
          }]
        }), [
          a.computed.prevPageUrl || t.showDisabled ? (l(), g("li", {
            key: 0,
            class: f(["page-item pagination-prev-nav", { disabled: !a.computed.prevPageUrl }])
          }, [
            u("a", c({
              class: "page-link",
              href: "#",
              "aria-label": "Previous",
              tabindex: !a.computed.prevPageUrl && -1
            }, _(a.prevButtonEvents, !0)), [
              b(e.$slots, "prev-nav", {}, () => [
                T
              ])
            ], 16, M)
          ], 2)) : h("", !0),
          (l(!0), g(y, null, A(a.computed.pageRange, (s, o) => (l(), g("li", {
            class: f(["page-item pagination-page-nav", { active: s == a.computed.currentPage }]),
            key: o
          }, [
            u("a", c({
              class: "page-link",
              href: "#"
            }, _(a.pageButtonEvents(s), !0), {
              "aria-current": s == a.computed.currentPage ? "page" : null
            }), P(s), 17, F)
          ], 2))), 128)),
          a.computed.nextPageUrl || t.showDisabled ? (l(), g("li", {
            key: 1,
            class: f(["page-item pagination-next-nav", { disabled: !a.computed.nextPageUrl }])
          }, [
            u("a", c({
              class: "page-link",
              href: "#",
              "aria-label": "Next",
              tabindex: !a.computed.nextPageUrl && -1
            }, _(a.nextButtonEvents, !0)), [
              b(e.$slots, "next-nav", {}, () => [
                W
              ])
            ], 16, H)
          ], 2)) : h("", !0)
        ], 16)) : h("", !0)
      ]),
      _: 3
    }, 8, ["data", "limit", "keep-length", "onPaginationChangePage"])
  ], 64);
}
const Y = /* @__PURE__ */ R(V, [["render", q]]), G = {
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
        "bg-red-300",
        "text-gray-500",
        "border-gray-300",
        "hover:bg-gray-50"
      ]
    },
    activeClasses: {
      type: Array,
      default: () => [
        "bg-red-50",
        "border-red-500",
        "text-red-600"
      ]
    }
  },
  methods: {
    onPaginationChangePage(e) {
      this.$emit("pagination-change-page", e);
    }
  }
}, I = { class: "flex" }, J = { class: "text-xs self-center text-slate-700" };
function K(e, n, t, i, r, p) {
  return l(), g("div", I, [
    u("span", J, "Showing " + P(t.data.from) + " to " + P(t.data.to) + " of " + P(t.data.total), 1),
    k(" WTF ")
  ]);
}
const Z = /* @__PURE__ */ R(G, [["render", K]]);
export {
  X as Bootstrap4Pagination,
  Y as Bootstrap5Pagination,
  U as RenderlessPagination,
  Z as TailwindPagination
};
