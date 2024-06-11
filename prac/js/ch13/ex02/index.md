[3] f3
- C→A→errX
まずtryの中が実行されるが、wait0が非同期のため？終わる前にfinallyを実行
→waitの後にlogA実行
→errCが出るが、Bが出力されないのでキャッチできていない。
 wait0
|-----|
 logC
 |-|
      logA
    　|-|
         errC   
        |-|

[4] f4
- A→B→100
returnされてるのを待って順番に出力。
wait2
|-------|
        logA
        |--|
        　　wait1000
            |-------|
                    logB
                    |--|
                        log100
                        |--|


[5] f5
- B→A→40
二つ目のthenの引数が関数でなくPromiseだと、即座に呼ばれる(f2と同じ感じ？)
→一つ目のthenが呼ばれ、40がreturnされる
wait2
|------|
       wait1
       |---|
           logB
           |--|
              logA
              |--|
                 logv
                 |--|
      
[6]f6
- A→B→C
thenが二つあると、上から順番に呼ばれる
wait1
|---|
    logA
    |-|
      wait1
      |---|
          logB
          |-|
             wait1
             |---|
                 logC
                 |-|

[7]f7
A→B→C
解決済みのpromiseは呼ばれない

wait1
|---|
    logA
    |-|
wait2
|------|
       logB
       |-|
          logC
         |-|

[8]f8
X→A
1秒wait→エラーX→catchしてX出力→finallyでA出力

wait1
|---|
    errX
    |-|
      catch(e)
      |-|
        logA
        |-|

[9]f9
Y→A
ほぼ8と一緒？42は特に出力ない

wait1
|---|
    ()=>42
    |-|
        errX
        |-|
        catch(e)
          |-|
            logA
            |-|

[10]f10
A→throwErrorY
then(r, c)は、rでエラーが出た場合にキャッチできない。
.catch(c)はチェーン全体でのエラーをキャッチできる
wait1
|---|
    ()=>42
    |-|
      throwErrY
      |-|