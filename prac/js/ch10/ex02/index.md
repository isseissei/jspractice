## 問題 10.2 🖋️

CommonJS と ES Module 以外の JavaScript のモジュール方式名を調べて記述しなさい

### 回答
- AMD(Asynchronous Module Definition): クライエントサイド(ブラウザ側)でモジュール形式が使えるようにした仕様。
    - https://zenn.dev/ebi_yu/scraps/db4c7d1f3e883a
- UMD (Universal Module Definition): モジュールが、グローバルオブジェクト(IIFE)、CommonJS、AMDどの形式で書かれていても、利用できるようにした形式。