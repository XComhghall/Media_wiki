/* i18nData, 4779;
 * translate, 4797;
 * b.translate, 4995 */

/*! Wikiplus - 4.1.0 */ ! function() {
    var t = {
            3099: function(t) {
                // Omitted
            }
        },
        e = {};

    function n(r) {
        // Omitted
    }
    n.n = function(t) {
            // Omitted
        },
        function() {
            "use strict";
            n(6699), n(2023), n(2222), n(9600), n(4916), n(5306), n(1539), n(8674), n(9070), n(7941), n(2526), n(7327), n(5003), n(4747), n(9337), n(3321), n(5666), n(6992), n(8783), n(3948), n(285), n(1637), n(9720), n(1817), n(2165), n(7042), n(8309), n(1038);

            function y(t, e, n) {
                // Omitted
            }
            var k = function() {
                    function t() {
                        var e;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), y(this, "language", void 0), y(this, "i18nData", {}), y(this, "sessionUpdateLog", []);
                        try {
                            e = JSON.parse(localStorage.Wikiplus_Settings).language || window.navigator.language.toLowerCase()
                        } catch (t) {
                            e = window.navigator.language.toLowerCase()
                        }
                        this.language = e, this.i18nData["zh-cn"] = h, this.i18nData["en-us"] = v;
                        try {
                            for (var n = JSON.parse(localStorage.getItem("Wikiplus_i18nCache")), r = 0, i = Object.keys(n); r < i.length; r++) {
                                var o = i[r];
                                "zh-cn" !== o && "en-us" !== o && (this.i18nData[o] = n[o])
                            }
                        } catch (t) {
                            localStorage.setItem("Wikiplus_i18nCache", "{}")
                        }
                    }
                    var e, n, r, i, o;
                    return e = t, n = [{
                        key: "translate",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                n = "";
                            return this.language in this.i18nData ? t in this.i18nData[this.language] ? n = this.i18nData[this.language][t] : (this.loadLanguage(this.language), n = t in this.i18nData["en-us"] ? this.i18nData["en-us"][t] : t) : this.loadLanguage(this.language), e.length > 0 && e.forEach((function(t, e) {
                                n = n.replace("$".concat(e + 1), t)
                            })), n
                        }
                    }, {
                        key: "loadLanguage",
                        value: (i = regeneratorRuntime.mark((function t(e) {
                            var n, r;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!this.sessionUpdateLog.includes(e)) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return t.prev = 2, t.next = 5, fetch("https://wikiplus-app.com/languages/get.php?lang=".concat(e));
                                    case 5:
                                        return t.next = 7, t.sent.json();
                                    case 7:
                                        n = t.sent, r = localStorage.getItem("Wikiplus_LanguageVersion") || "000", this.sessionUpdateLog.push(e), n.__version === r && e in this.i18nData || (console.info("Update ".concat(e, " support to version ").concat(n.__version)), this.i18nData[e] = n, localStorage.setItem("Wikiplus_i18nCache", JSON.stringify(this.i18nData))), t.next = 15;
                                        break;
                                    case 13:
                                        // Omitted
                                }
                            }), t, this, [
                                // Omitted
                            ])
                        })), function(t) {
                            return o.apply(this, arguments)
                        })
                    }], t
                }(),
                b = new k;

            function A(t) {
                // Omitted
            }

            var W = function(t) {
                }(B(Error)),
                E = function() {
                    function t() {
                        // Omitted
                    }
                    return x(t, null, [{
                        // Omitted
                    }, {
                        key: "error",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                n = b.translate(t);
                            throw e.length > 0 && e.forEach((function(t, e) {
                                n = n.replace(new RegExp("\\".concat(e + 1), "ig"), t)
                            })), console.error("[Wikiplus-ERROR] ".concat(n)), new W("".concat(n), t)
                        }
                    }]), t
                }(),
                j = E;

            function R(t, e) {
                // Omitted
            }

            var at = function() {
                    function t() {
                        // Omitted
                    }
                    var e, n, i;
                    return e = t, n = [{
                    }, {
                        key: "showQuickEditPanel",
                        value: function(t) {
                            var e = t.title,
                                n = void 0 === e ? "" : e,
                                r = t.content,
                                i = void 0 === r ? "" : r,
                                o = t.summary,
                                a = void 0 === o ? "" : o,
                                c = t.onBack,
                                u = void 0 === c ? function() {} : c,
                                s = t.onParse,
                                l = void 0 === s ? function() {} : s,
                                f = t.onEdit,
                                p = void 0 === f ? function() {} : f,
                                d = t.escExit,
                                h = void 0 !== d && d,
                                v = this;
                            this.scrollTop = $(document).scrollTop(), this.quickEditPanelVisible && this.hideQuickEditPanel(), this.quickEditPanelVisible = !0, window.onclose = window.onbeforeunload = function() {
                                return "".concat(b.translate("onclose_confirm"))
                            };
                            var g = $(".noarticletext").length > 0,
                                m = $("<span>").attr("id", "Wikiplus-Quickedit-Back").addClass("Wikiplus-Btn").text("".concat(b.translate("back"))),
                                y = $("<span>").attr("id", "Wikiplus-Quickedit-Jump").addClass("Wikiplus-Btn").append($("<a>").attr("href", "#Wikiplus-Quickedit").text("".concat(b.translate("goto_editbox")))),
                                k = $("<textarea>").attr("id", "Wikiplus-Quickedit"),
                                A = $("<div>").attr("id", "Wikiplus-Quickedit-Preview-Output"),
                                w = $("<input>").attr("id", "Wikiplus-Quickedit-Summary-Input").attr("placeholder", "".concat(b.translate("summary_placehold"))),
                                x = $("<button>").attr("id", "Wikiplus-Quickedit-Submit").text("".concat(b.translate(g ? "publish_page" : "publish_change"), "(Ctrl+S)")),
                                I = $("<button>").attr("id", "Wikiplus-Quickedit-Preview-Submit").text("".concat(b.translate("preview"))),
                                C = $("<div>").append($("<input>").attr({
                                    type: "checkbox",
                                    id: "Wikiplus-Quickedit-MinorEdit"
                                })).append($("<label>").attr("for", "Wikiplus-Quickedit-MinorEdit").text("".concat(b.translate("mark_minoredit"), "(Ctrl+Shift+S)"))).css({
                                    margin: "5px 5px 5px -3px",
                                    display: "inline"
                                }),
                                B = $("<div>").append(m, y, A, k, w, $("<br>"), C, x, I);
                            this.createDialogBox(n, B, 1e3, (function() {
                                // Omitted
                            })), $("#Wikiplus-Quickedit-Back").on("click", u), $("#Wikiplus-Quickedit-Preview-Submit").on("click", rt(regeneratorRuntime.mark((function t() {
                                // Omitted
                            })))), h && $(document).on("keydown", (function(t) {
                                // Omitted
                            }))
                        }
                    }, {
                        // Omitted
                    }], t
                }(),
                ct = new at;

            function Ot(t) {}
            $(Ot(regeneratorRuntime.mark((function t() {
                // Omitted
            }))))
        }()
}();
//# sourceMappingURL=Main.js.map
