何も出力されない。
awaitの関数はマイクロタスクであり、タスクよりも優先度がたかい。
そのためマクロタスクであるsettimeoutはずっと順番待ちをする。