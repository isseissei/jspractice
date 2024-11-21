import { Polly } from '@pollyjs/core';
import FetchAdapter from '@pollyjs/adapter-fetch';
import FSPersister from '@pollyjs/persister-fs';
import { IssueManager } from './index.js';
import { promises as fs } from 'fs';

Polly.register(FetchAdapter);
Polly.register(FSPersister);

describe('CreateIssue', () => {
    let polly;
    let issueManager;

    beforeAll(async () => {
        try {
            await fs.rmdir('./ex02/recordings', { recursive: true });
        } catch (e) {
            console.log(e, "no file")
        }
        polly = new Polly('GitHub API', {
            adapters: ['fetch'],
            persister: 'fs',
            persisterOptions: {
                fs: {
                    recordingsDir: './ex02/recordings' 
                }
            },
            recordIfMissing: true,
            // mode: 'replay'
        });

        issueManager = new IssueManager('isseissei', 'jspractice', 'テストだよ3', 'やばい');
        await issueManager.CreateIssue();
        await polly.stop();

        polly = new Polly('GitHub API', {
            adapters: ['fetch'],
            persister: 'fs',
            persisterOptions: {
                fs: {
                    recordingsDir: './ex02/recordings'
                }
            },
            // recordIfMissing: false,
            mode: 'replay'
        });
    });

    afterAll(async () => {
        await polly.stop();
    });

    test('Issue作成1', async () => {

        issueManager = new IssueManager('isseissei', 'jspractice', 'テストだよ3', 'やばい');

        const response = await issueManager.CreateIssue();
        expect(response).toHaveProperty('title', 'テストだよ3');
        expect(response).toHaveProperty('body', 'やばい');
    });//終了後に一つだけIssueが作成されているのをgithubコンソールから確認
});



describe('DeleteIssue', () => {
    let polly;
    let issueManager;

    beforeAll(async () => {
        try {
            await fs.rmdir('./ex02/recordingsD', { recursive: true });
        } catch (e) {
            console.log(e, "no file")
        }
        polly = new Polly('GitHub API', {
            adapters: ['fetch'],
            persister: 'fs',
            persisterOptions: {
                fs: {
                    recordingsDir: './ex02/recordingsD'
                }
            },
            recordIfMissing: true,
            // mode: 'replay'
        });

        issueManager = new IssueManager('isseissei', 'jspractice', 'テストだよ3', 'やばい',31);
        await issueManager.DeleteIssue();
        await polly.stop();

        polly = new Polly('GitHub API', {
            adapters: ['fetch'],
            persister: 'fs',
            persisterOptions: {
                fs: {
                    recordingsDir: './ex02/recordingsD' 
                }
            },
            // recordIfMissing: false,
            mode: 'replay'
        });
    });

    afterAll(async () => {
        await polly.stop();
    });

    test('Issue作成1', async () => {

        issueManager = new IssueManager('isseissei', 'jspractice', 'テストだよ3', 'やばい', 31);

        const response = await issueManager.DeleteIssue();
        expect(response).toHaveProperty('title', 'テストだよ3');
        expect(response).toHaveProperty('body', 'やばい');
    });//エラーになってないからおけ？
});
