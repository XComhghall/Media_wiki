# Wiki plus 4

自訂更改

增加編輯首部章節的編輯摘要 ‘/* top */ ’
``` diff
- d=p||(c?"/* ".concat(c," */ ").concat(b.translate("default_summary_suffix")):b.translate("default_summary_suffix"))
+ d=p||((c===u)?"/* top */ ":c?"/* "+(c," */ "):"")
- d = p || (c ? "/* ".concat(c, " */ ").concat(b.translate("default_summary_suffix")) : b.translate("default_summary_suffix"))
+ d = p || ((c === u) ? "/* top */ " : c ? "/* " + (c, " */ ") : "")
```
.concat() Append, join strings

? : If, else

## Google Chrome 問題

原
```
                    return e = t, n = [{
                        key: "translate",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                n = "";
                            return this.language in this.i18nData ?
                                t in this.i18nData[this.language] ?
                                    n = this.i18nData[this.language][t] :
                                    (this.loadLanguage(this.language), n = t in this.i18nData["en-us"] ?
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
```
                    return e = t, n = [{
                        key: "translate",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                n = "";
                            if (!(this.language in this.i18nData)) this.loadLanguage(this.language);
                            if (this.language in this.i18nData && t in this.i18nData[this.language]) n = this.i18nData[this.language][t];
                            else {if (!("en-us" in this.i18nData)) {this.loadLanguage("en-us");}
                                n = t in this.i18nData["en-us"] ? this.i18nData["en-us"][t] : t;}
                            e.length > 0 && e.forEach(function(t, e) {
                                n = n.replace("$" + (e + 1), t);});
                            return n;
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

## 可選

`"cross_page_history_revision_edit_warning":"暂不支持历史版本跨页面编辑"` 自 en-us 移至 zh-cn。

``` diff
- "wikiplus_settings_placeholder":"Your setting is empty, please modify your setting according to the documentation."
+ "wikiplus_settings_placeholder":"Your settings are empty. Please modify them according to the documentation."
+ "cross_page_history_revision_edit_warning":"Cross-page edit in history revision is not supported yet"
- 喵~
+ 喵～
```

# Wiki plus 2.3.11

增加編輯首部章節的編輯摘要 ‘/* top */ ’
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

## 可選

``` diff
- 喵~
+ 喵～
- 'cross_page_history_revision_edit_warning': '暂不支持历史版本跨页面编辑'
+ "cross_page_history_revision_edit_warning": "暂不支持历史版本跨页面编辑"
- 'documatation': 'https://zh.moegirl.org.cn/User:%E5%A6%B9%E7%A9%BA%E9%85%B1/Wikiplus/%E8%AE%BE%E7%BD%AE%E8%AF%B4%E6%98%8E'
+ 'documentation': 'https://zh.moegirl.org.cn/User:妹空酱/Wikiplus/设置说明'
```
