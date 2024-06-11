[予想]
- 実行して1秒後に"HelloWorld"が出力され、その後にlongRunningFunction()が実行される。
- longRunningFunction()は実行されても何も起きない。無限ループし続けるだけなので、ずっと終わらない

[結果]
- HelloWorldは出力されなかった
- その後何も起きず、終了もしなかった

[理由]
-  1000ms経つ前にlongRunningFunction()が先にタスクキューに入り、実行される。
-  1000msたつと () => console.log("Hello, world!") がタスクキューに入る。
-  1000ms後もずっとlongRunningFunction()が終わっていないため、console.logのタスクに移ることはできない