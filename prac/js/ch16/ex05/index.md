[標準入力]
実行時にプログラムに割り当てられている入力用データストリームのこと(<https://www3.cuc.ac.jp/~nagaoka/2018/prg1sum/miyata/stdio/stdio.html>)
[標準出力]
出力用データストリームのことを標準出力とよびます(<https://www3.cuc.ac.jp/~nagaoka/2018/prg1sum/miyata/stdio/stdio.html>)
[標準エラー出力]
コンピュータ上で実行されているプログラムが、特に何も指定されていない場合に標準的に利用するエラー出力先。システム上では “stderr” の略号で表されることが多い。
[リダイレクト]
標準入力や標準出力を変更すること
[パイプ]
パイプ(pipe)とは、あるプログラムの出力を別のプログラムの入力に引き渡す機能
<https://www.ritsumei.ac.jp/~kht23151/joho/redirect.html>

[実験]

- node cat.mjs
予想: 何も起きない(引数がないのでprocess.argvの長さは2)
結果: 何も起きない

- echo FOO | node cat.mjs
予想: FOOを出力
結果: FOOを出力

- node cat.mjs > output.txt
予想: 何も起きない
結果: 空のファイルoutput.txtができる(既にoutput.txtがある場合も空のファイルになる)

- node cat.mjs file
予想: fileの中身をコンソールに出力する(fileが引数？)
結果: fileの中身をコンソールに出力する

- node cat.mjs file > output.txt
予想: fileの中身をoutput.txtに書き込む
結果: fileの中身をoutput.txtに書き込む

- node cat.mjs invalid-file > output.txt
予想: 読み込むファイルが無くてエラーになる
結果: エラーメッセージがコンソールに出る
Emitted 'error' event on ReadStream instance at:
    at emitErrorNT (node:internal/streams/destroy:151:8)
    at emitErrorCloseNT (node:internal/streams/destroy:116:3)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'C:\\Users\\r00528334\\Pjs\\jspractice\\prac\\js\\ch16\\ex05\\あああ.pdf'
}

- node cat.mjs invalid-file 2> error.txt
予想: 読み込むファイルがなくてエラーになる
結果: error.txtに上記と同じエラー文言を書き込む
