i1
[予想]
一番上のが最初に解決されるので、42が返される。その後もvの値は変わらないので42が出力される。
[結果]
42のあと100が出力された。anyで1つ解決されても、他のpromiseの処理は続く？

wait1
|---|
    ()=>42
    |-|
      log(42)
      |-|
        wait2
        |------|
wait2
|------|
       v=100
       |-|
               logv👈v=100
               |-|
         

i2
[予想]
C→B→A→Aで出力される
[結果]
C
B
A
[ 'A', 'B', 'C' ]
最後にretuenされるAで上書きされると思ったが、全部配列の形で受け取った。


i3
[予想]
最初に実行されるerrYがキャッチされ、vは42のまま
[結果]
Y
42
B
0

キャッチされて以降も処理は続くが、キャッチは一度のみでXはキャッチされない。
wait1
|---|
    errY→log(Y)
    |-|
      log(42)
      |-|
        wait3
        |---------|
                　log(0)👈更新されてる
                  |-|
wait2
|------|
       logB
       |-|
wait3
|---------|
          v=0,errX
          |-|

i4
[予想]
ｐにthenがどんどんくっついてく感じ。5-i秒待ったあとにiが出力され、5の後にcompleted!が出力される。
[結果]
0
1
2
3
4
COMPLETED

最終的なreturnは
```js
Promise.resolve(null)
    .then(()=>wait(5000).then(()=>log(0)))
    .then(()=>wait(4000).then(()=>log(4)))
    .then(()=>wait(3000).then(()=>log(3)))
    .then(()=>wait(2000).then(()=>log(2)))
    .then(()=>wait(1000).then(()=>log(1)))
    .then(() => log("COMPLETED"));
```

i5
[予想]
retrunしてないので同時に始まってしまい、i=4のみが反映される
[結果]
COMPLETED
4
3
2
1
0

log(completed)
|-|
wait1
|---|
    log(4)
    |-|
wait2
|------|
        log(3)
        |-|
wait3
|---------|
          log(2)
          |-|
wait4
|------------|
             log(1)
             |-|

i6
[予想]
i4と一緒になる
[結果]
4
3
2
1
0
COMPLETED

それぞれのpromiseが並列で始まり、時間差でログ出力される。
全部終わったらcompletedが呼ばれる

i7
[予想]
vのスコープが一緒なので、足しあってvが10になる
[結果]
10になった

i8
[予想]
読み込んだ際の数値で足し合わせる？
[結果]
5
wait1
|---|
    next=1
    |-|
    wait2
    |------|    
           v=1,next=2👈ここでnextが増えていかない
           |-|
           wait2
           |------|
                 v=2,next=3
                  |-|
next=1
|-|
wait2
|------|
       v=1,next=2
       |-|
       wait2
       |------|
              v=2,next=3
              |-|
       
