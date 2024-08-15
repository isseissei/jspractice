2. 便利だと思ったもの
- 画面幅を設定してレスポンシブ対応の確認ができる
- 無効になっているスタイルとその理由を表示できる
- hover, focusなど特定の操作をされたときの状態を確認できる

3. Tailwind CSS のクラス (bg-rose-600 など何でも良い) を開発者ツールから追加すると変更が反映されないが、これは何故か調べなさい

- ビルド時にjs, html内で使っているもののみをstyle.cssに書き、それ以外は作られないため
- (ビルドするときなのか、npx tailwindcssするときなのかは曖昧です…)

https://tailwindcss.com/docs/optimizing-for-production