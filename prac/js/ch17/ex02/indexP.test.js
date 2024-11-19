import { Polly } from '@pollyjs/core';
import FetchAdapter from '@pollyjs/adapter-fetch';

import FetchAdapter from '@pollyjs/adapter-fetch';
import RestPersister from '@pollyjs/persister-rest';
import { IssueManager } from './index.js';


Polly.register(FetchAdapter);
Polly.register(RestPersister);


Polly.register(persisterMemory);

async function createIssueWithPolly(owner, repo, title, body) {
    // Pollyのインスタンスを作成して設定

    const issueM = new IssueManager(owner, repo, title, body)
    const polly = new Polly('GitHub Issue', {
        adapters: ['fetch'],
        persister: 'localstorage',
        logging: true,
        mode: 'record',          // 初期設定を「replay」に
        recordIfMissing: true,    // 録画がなければ新たに記録する
        matchRequestsBy: {
            headers: false,       // ヘッダーは無視
            body: true,           // リクエストの本文を一致させる
            url: { query: true },  // URLのクエリパラメータも考慮
        },
    });

    const { server } = polly;
    server.any().on('beforePersist', (req, recording) => {
        // 認証トークンを除去してセキュリティを保護
        delete recording.request.headers.Authorization;
    });

    const result = issueM.CreateIssue()

    // Pollyのインスタンスを停止
    await polly.stop();
    return result;
}

(async () => {
    const res = await createIssueWithPolly("isseissei", "jspractice", "test: " + new Date(), "やばい");
    console.log("**********"+res)
})();