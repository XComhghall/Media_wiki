Special:MyPage/global.js

```
/* In-page editors

 * Wiki plus
 * 4.1.0, all identical
mw.loader.load('https://cdn.jsdelivr.net/npm/wikiplus-core');
mw.loader.load('https://cdn.jsdelivr.net/npm/wikiplus-core@latest/dist/Main.js');
mw.loader.load('https://cdn.jsdelivr.net/npm/wikiplus-core@4.1.0/dist/Main.js');
 * 2.3.11
mw.loader.load('https://wikiplus-app.com/Main.js');
 * 404 not found as of 2025-4-25
mw.loader.load('https://wikiplus-app.com/Main.min.js');

 * Wiki plus highlight
 * Syntax highlight plug-in 文法突顯外掛程式
mw.loader.load('https://cdn.jsdelivr.net/npm/wikiplus-highlight');

 * In page edit
 * JS delivr
mw.loader.load('https://cdn.jsdelivr.net/npm/mediawiki-inpageedit');
 * UNPKG
mw.loader.load('https://unpkg.com/mediawiki-inpageedit');
 */

mw.loader.load('https://cdn.jsdelivr.net/npm/wikiplus-core');
mw.loader.load('https://cdn.jsdelivr.net/npm/wikiplus-highlight');
mw.loader.load('https://cdn.jsdelivr.net/npm/mediawiki-inpageedit');
```

Miraheze, add
```
/* Wiki media
 * For use on Wiki-pedia and other Wiki media projects, paste onto your WM global.js page
https://meta.wikimedia.org/wiki/Special:MyPage/global.js */

/* Miraheze
 * Your Miraheze global.js page
https://meta.miraheze.org/wiki/Special:MyPage/global.js

 * As of 2025-4-25, only the three Wiki plus 4.1.0 links work. The others are not included in Miraheze’s content security policy, and ‘will always fail to load.’
 * A work-around is to copy the entire code from the web pages, and paste onto your JS page. */

/* Wiki plus
 * Runs fine on Firefox, but the display is messed up on Google Chrome.
 * Just remember that the top buttons are ‘back’, ‘jump to edit box’, bottom checkbox ‘mark as a minor edit’, buttons ‘save’, ‘preview’.
 * Press ctrl. + S to save, or ctrl. + shift + S to save as a minor edit.
 * Under ‘more’, the first option is ‘redirect from’, the first text box the redirect page to be created, the second text box the edit summary (optional), the buttons ‘cancel’, ‘submit’.
 * The second option is ‘Wiki plus setting’, the buttons ‘cancel’, ‘submit’. */

/* Wiki plus 2.3.11
 * Smaller (95.4 kB) than 4.1.0 (151.4 kB).
 * Chinese characters are displayed as mojibake on https://wikiplus-app.com/Main.js. Fine when downloaded. */
```
