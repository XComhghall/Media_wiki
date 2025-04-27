# Wiki plus 4

自訂更改

## Google Chrome

Google Chrome 上 Wiki plus 文字不顯示的問題。更改後 Firefox, Google Chrome 皆適用。

原
``` js
                    return e = t, n = [{
                        key: "translate",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                n = "";
                            return this.language in this.i18nData ?
                                t in this.i18nData[this.language] ?
                                    n = this.i18nData[this.language][t] : (
                                    this.loadLanguage(this.language), n = t in this.i18nData["en-us"] ?
                                        this.i18nData["en-us"][t] : t) :
                                this.loadLanguage(this.language),
                                e.length > 0 && e.forEach((function(t, e) {
                                    n = n.replace("$".concat(e + 1), t)
                                })), n
                        }
                    }

/* If this.language in this.i18nData
  If t in this.i18nData[this.language]
    n = this.i18nData[this.language][t]
    Else if t in this.i18nData["en-us"]
      n = this.i18nData["en-us"][t]
      Else n = t
Return n */
```

改
``` js
                            if (!(this.language in this.i18nData)) this.loadLanguage(this.language);
                            if (this.language in this.i18nData && t in this.i18nData[this.language]) n = this.i18nData[this.language][t];
                            else {if (!("en-us" in this.i18nData)) {this.loadLanguage("en-us");}
                                n = t in this.i18nData["en-us"] ? this.i18nData["en-us"][t] : t;}
                            e.length > 0 && e.forEach(function(t, e) {
                                n = n.replace("$" + (e + 1), t);});
                            return n;

/* If this.language in this.i18nData
  If t in this.i18nData[this.language]
    n = this.i18nData[this.language][t]
  Else if t in this.i18nData["en-us"]
    n = this.i18nData["en-us"][t]
    Else n = t
Return n */
```

## Miraheze

Miraheze 章節無 quick edit 連結／按鈕的問題。原因爲 Mira Heze 之 .mw-editsection 之 a 之 href 爲 `/wiki/標題?veaction=edit&section=1`，Wiki media 爲 `https://zh.wikipedia.org/w/index.php?title=標題&section=1&veaction=editsource`。

``` diff
                    }, {
                        key: "insertSectionQuickEditEntries",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
                                e = r.skin === "minerva" ? $("<span>").append($("<a>").addClass("Wikiplus-Edit-SectionBtn mw-ui-icon mw-ui-icon-element mw-ui-icon-wikimedia-edit-base20 edit-page mw-ui-icon-flush-right").css("margin-left", "0.75em").attr("href", "javascript:void(0)").attr("title", b.translate("quickedit_sectionbtn"))) : $("<span>").append($("<span>").addClass("mw-editsection-divider").text(" | ")).append($("<a>").addClass("Wikiplus-Edit-SectionBtn").attr("href", "javascript:void(0)").text(b.translate("quickedit_sectionbtn")));
                            $(".mw-editsection").each(function(n) {
                                try {
                                    var i = $(this).find("a[href*='action=edit']").first().attr("href"),
                                        o = i.match(/&[ve]*section=([^&]+)/)[1].replace(/T-/gi, ""),
-                                       a = decodeURIComponent(i.match(/title=([^&]+)/)[1]),
+                                       a = decodeURIComponent(i.match(/^\/wiki\/([^?]+)/)[1]),
                                        c = $(this).prev().clone();
                                    c.find(".mw-headline-number").remove();
                                    var u = c.text().trim(),
                                        s = e.clone();
                                    s.find(".Wikiplus-Edit-SectionBtn").on("click", function() {
                                        t({
                                            sectionNumber: o,
                                            sectionName: u,
                                            targetPageName: a
                                        });
                                    }); r.skin === "minerva" ? $(this).append(s) : $(this).find(".mw-editsection-bracket").last().before(s);
                                } catch (t) {
                                    j.error("fail_to_init_quickedit");
                                }
                            });
                        }
                    }, {
```

May try if else for both Wiki media and Mira Heze
```
const WikimediaDomains = [
    'wikipedia.org',
    'wikimedia.org',
    'wikisource.org',
    'wiktionary.org',
    'wikiquote.org'
];
if (WikimediaDomains.some(domain => window.location.hostname.includes(domain))) {
} else {
}
```

## 可選

增加編輯首部章節的編輯摘要 ‘/* top */ ’
``` diff
- d = p || (c ? "/* ".concat(c, " */ ").concat(b.translate("default_summary_suffix")) : b.translate("default_summary_suffix"))
+ d = p || (c === u ? "/* top */ " : c ? "/* " + (c, " */ ") : "")
```
.concat() Append, join strings

? : If, else

``` diff
"unknown_error_name":"未知错误","api_unaccessiable":"无可用的 API","api_unwriteable":"无可用的写入 API"
"customcssprotected":"无法编辑用户 CSS 页","customjsprotected":"无法编辑用户 JS 页"
"redirect_to_summary":"重定向页面至[[$1]]","redirect_from_summary":"将[[$1]]重定向至[[$2]]"
"fail_to_get_wikitext_when_edit":"无法获得 wiki 文本"
"empty_page_confirm":"您向编辑函数传入了空内容参数 这将清空页面\\r\\n由于该行为危险 请将 config 参数的 empty 键值设定为 true 以确认"
"install_finish":"Wiki plus 安装完毕"
"wikiplus_settings":"Wiki plus 设置","wikiplus_settings_desc":"请在下方按规范修改 Wiki plus 设置","wikiplus_settings_placeholder":"当前设置为空 请按规范修改 Wiki plus 设置"
+ "cross_page_history_revision_edit_warning":"暂不支持历史版本跨页面编辑"
"blocked":"You are blocked on this wiki"
"history_edit_warning":" // You are editing an earlier revision of this page. This will apply to the current revision. Please be careful."
"redirect_to_summary":"Redirect to [[$1]]","redirect_from_summary":"Redirect [[$1]] to [[$2]]","need_init":"Wiki plus is not completely loaded. It is a rare occurrence. You can refresh and try again.","fail_to_get_wikitext":"Failed to load wiki text (fail_to_get_wikitext)","quickedit_topbtn":"Quick edit","quickedit_sectionbtn":"quick edit","fail_to_init_quickedit":"Failed to initialize quick edit"
"wikiplus_settings_placeholder":"Your settings are empty. Please modify them according to the documentation."
"fail_to_get_wikitext_when_edit":"Failed to load wiki text (fail_to_get_wikitext_when_edit)","cant_parse_wiki text":"Failed to parse wiki text","loading_preview":"Loading preview"
"empty_page_confirm":"Your edit is empty. This will empty the page.\\r\\nTip for developers: Set key <code>empty</code> in parameter <code>config</code> to <code>true</code> to allow edits like this.","cross_page_edit":"You are editing content located on another page. Loading …","cross_page_edit_submit":"Submitting your edit","cross_page_edit_error":"Failed to load >.<"
+ "cross_page_history_revision_edit_warning":"Cross-page editing in revision history is not yet supported"
- 喵~
+ 喵～
```

# Wiki plus 2.3.11

## 可選

增加編輯首部、序言章節的編輯摘要 `/* top */ `
``` diff
if (summary === undefined) {
  if (sectionName === undefined) {
-   summary = i18n('default_summary_suffix');
+   summary = '';
+ } else if (sectionName === sectionTargetName) {
+   summary = '/* top */ ';
  } else {
-   summary = '/* ' + sectionName + ' */ ' + i18n('default_summary_suffix');
+   summary = '/* ' + sectionName + ' */ ';
  }
}
```

若不啓用 visual editor，mw-editsection-divider style = 'display: none'
``` diff
- 'cross_page_history_revision_edit_warning': '暂不支持历史版本跨页面编辑'
+ "cross_page_history_revision_edit_warning": "暂不支持历史版本跨页面编辑"
- $('<span>').append($('<span>').addClass('mw-editsection-divider').text(' | ')).append($('<a>').addClass('Wikiplus-Edit-SectionBtn').attr('href', 'javascript:void(0)').text(i18n('quickedit_sectionbtn')))
+ $('<span>').append($('<span>').addClass('mw-editsection-divider').css('display', 'initial').text(' | '), $('<a>').addClass('Wikiplus-Edit-SectionBtn').attr('href', 'javascript:void(0)').text(i18n('quickedit_sectionbtn')))
- 'documatation': 'https://zh.moegirl.org.cn/User:%E5%A6%B9%E7%A9%BA%E9%85%B1/Wikiplus/%E8%AE%BE%E7%BD%AE%E8%AF%B4%E6%98%8E'
+ 'documentation': 'https://zh.moegirl.org.cn/User:妹空酱/Wikiplus/设置说明'
```
