# Wiki plus 4

My changes

刪除 ‘// Edit via Wikiplus’
``` diff
- "default_summary_suffix":"// Edit via Wikiplus"
+ "default_summary_suffix":""
```

增加編輯首部章節的編輯摘要 ‘/* top */ ’
``` diff
- d=p||(c?"/* ".concat(c," */ ").concat(b.translate("default_summary_suffix")):b.translate("default_summary_suffix"))
+ d=p||((c===u)?"/* top */ ":c?"/* ".concat(c," */ "):b.translate("default_summary_suffix"))
```
.concat() Append, join strings

? : If, else

## 可選

``` diff
- 喵~
+ 喵～
```

# Wiki plus 2.3.11

刪除 ‘// Edit via Wikiplus’
``` diff
if (summary === undefined) {
  if (sectionName === undefined) {
    summary = i18n('default_summary_suffix');
+ } else if (sectionName === sectionTargetName) {
+   summary = '/* top */ ' + i18n('default_summary_suffix');
  } else {
    summary = '/* ' + sectionName + ' */ ' + i18n('default_summary_suffix');
  }
}
```

## 可選

``` diff
- 喵~
+ 喵～
- 'documatation': 'https://zh.moegirl.org.cn/User:%E5%A6%B9%E7%A9%BA%E9%85%B1/Wikiplus/%E8%AE%BE%E7%BD%AE%E8%AF%B4%E6%98%8E'
+ 'documentation': 'https://zh.moegirl.org.cn/User:妹空酱/Wikiplus/设置说明'
```
