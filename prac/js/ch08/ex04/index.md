★予想
両方でthis===nestがtrueになる。


★結果
false true
true false

入れ子の関数内ではthisは一番上(上位?)のobjではなく、下のnestになってしまう(p209)。
これはアロー関数では改善されていて、一番上のobjが継承される。