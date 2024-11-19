import { Polly } from '@pollyjs/core';
import FetchAdapter from '@pollyjs/adapter-fetch';

import FetchAdapter from '@pollyjs/adapter-fetch';
import RestPersister from '@pollyjs/persister-rest';
import { IssueManager } from './index.js';


Polly.register(FetchAdapter);
Polly.register(RestPersister);


Polly.register(persisterMemory);

async function createIssueWithPolly(owner, repo, title, body) {

    const issueM = new IssueManager(owner, repo, title, body)
    const polly = new Polly('GitHub Issue', {
        adapters: ['fetch'],
        persister: 'localstorage',
        logging: true,
        mode: 'record',       
        recordIfMissing: true,  
        matchRequestsBy: {
            headers: false,      
            body: true,        
            url: { query: true }, 
        },
    });

    const { server } = polly;
    server.any().on('beforePersist', (req, recording) => {
        delete recording.request.headers.Authorization;
    });

    const result = issueM.CreateIssue()

    await polly.stop();
    return result;
}

(async () => {
    const res = await createIssueWithPolly("isseissei", "jspractice", "test: " + new Date(), "やばい");
    // console.log("**********"+res)
})();