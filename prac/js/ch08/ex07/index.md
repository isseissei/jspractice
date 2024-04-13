https://www.fujifilm.com/jp/ja　富士フイルムトップページ

```js
(function() {
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var n = this || self
      , p = function(a, b) {
        a = a.split(".");
        var c = n;
        a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
    };
    function q() {
        for (var a = r, b = {}, c = 0; c < a.length; ++c)
            b[a[c]] = c;
        return b
    }
    function u() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var r, v;
    ```