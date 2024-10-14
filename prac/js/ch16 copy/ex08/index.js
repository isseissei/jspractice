import { Octokit } from "@octokit/rest";
import dotenv from 'dotenv';
dotenv.config();
// console.log(process.argv[2]);
// console.log(process.argv[1]);


const octokit = new Octokit({
    auth: process.env.ACCESS_TOKEN,
});

const help = "node index.js make ${owner} ${repo} ${title} ${body}: Issueを作成します\nnode index.js delete ${owner} ${repo} ${issuenNumber}: Issueをクローズします\n-v: httpリクエスト、レスポンスを出力します"

//http出力設定
if (process.argv.includes("-v") || process.argv.includes("--verbose")) {
    octokit.hook.before('request', async (options) => {
        console.log(`Request: ${options.method} ${options.url}`);
        console.log('Request parameters:', options);
    });

    octokit.hook.after('request', async (response, options) => {
        console.log(`Response from: ${options.method} ${options.url}`);
        console.log('Response status:', response.status);
        console.log('Response data:', response.data);
    });
}


async function createIssue(owner, repo, title, body) {
    try {
        const response = await octokit.rest.issues.create({
            owner,
            repo,
            title,
            body,
        });
        console.log("issue作成: ", response);
    } catch (error) {
        console.error("Error:", error);
    }
}


async function deleteIssue(owner, repo, issueNumber) {
    try {
        const response = await octokit.rest.issues.update({
            owner,
            repo,
            issue_number: issueNumber,
            state: "closed",
        });
        console.log(`Issue削除: ` + response);
    } catch (error) {
        console.error(`Error `, error);
    }
}

if (process.argv[2] == "make") {
    const owner = process.argv[3];
    const repo = process.argv[4];
    const title = process.argv[5];
    const body = process.argv[6];

    createIssue(owner, repo, title, body)
}

if (process.argv[2] == "delete") {
    const owner = process.argv[3];
    const repo = process.argv[4];
    const issueNumber = process.argv[5];

    deleteIssue(owner, repo, issueNumber)
}

if (process.argv[2] == "-h" || process.argv[2] == "--help") {
    console.log(help)
}