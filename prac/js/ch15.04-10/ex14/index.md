- ブラウザの開発者ツールの「ネットワーク」タブを確認してみよう。リンクをクリックしたときに通信は発生しているだろうか？
→ 最初の一回のみ通信は行われるが、以降は起きない。
クリックのたびにpushstateは呼ばれる。第三引数に"/bar"が入る。
https://numb86-tech.hatenablog.com/entry/2020/04/24/214649


- pushState はいつ実行されているだろうか？
クリックの時に実行されている(ログ出力のタイミングから)

- 15.4-10.12 では pushState を使った実装でページのリロード時に正しく動作しなかったが、この問題ではどうだろうか？
正しく動作する。フレームワーク(今回はnext.js)が適切なページをサーバーから取ってきてくれる。
