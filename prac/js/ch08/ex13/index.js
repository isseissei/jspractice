function f(input) {
    const f = new Function("input",`return "Hello, " + ${input}`);
    console.log(f());
}

f("process.exit()");

/*
共生的にプログラムを終了させることができてしまう。


*/