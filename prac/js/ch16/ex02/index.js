import { spawn } from "child_process";
import path from "path";

// ESMでこのファイルの絶対パスとして__dirnameを定義するイディオム
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// startChildで起動したプロセスの参照
let child = null;

// node ./child.js を起動し、このプロセスが終了したときに解決するPromiseを返す
// cf. https://nodejs.org/api/child_process.html#event-close
async function startChild() {
  const childPath = path.join(__dirname, "child.js");
  child = spawn("node", [childPath]);

  child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  child.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  return new Promise((res) => {
    child.on("close", (code, signal) => {
      res([code, signal]);
    });
  });
}

// TODO: ここに処理を書く

//無限にchildをループ
let isContinue = false;
async function monitorChildP() {
  while (!isContinue) {
    const [code, signal] = await startChild();

    if (signal) {
      console.log(signal);
    } else if (code == 1) {
      console.log("code: " + code);
    }

    if (isContinue) {
      break;
    }
  }

  process.exit(0);
}

// シグナルをトラップし、子プロセスにシグナルを転送
function setupSignalHandlers() {
  ["SIGINT", "SIGTERM"].forEach((signal) => {
    process.on(signal, () => {
      if (child) {
        isContinue = true;
        child.kill(signal);

        // 子プロセスの終了を待って、親プロセスも終了
        child.on("close", () => {
          process.exit(0);
        });
      }
    });
  });
}

// 実行
setupSignalHandlers();
monitorChildP();