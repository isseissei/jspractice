h1
シンプルに上から進行する。エラーは起きない。
wait3
|------|
       loga
       |-|
       　wait2
         |----|
              logB
              |-|
                wait1
                |--|
                   logC
                   |-|

h2
errX中にエラーが発生し、それがキャッチされてXが出力される。

h3
キャッチされない。promiseの中のpromiseでエラーが起きてる感じになるから、その外側ではキャッチできない。

h4
throw new Error("Y");
で、どちらもキャッチされない.
それぞれのp1,p2の宣言時にキャッチする必要がある。
↓こんな感じで先にerrYがでてくる。

wait2
|----|
     errX
     |-|
wait1
|--|
   errY
   |-|

