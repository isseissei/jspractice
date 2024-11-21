import dotenv from 'dotenv';
dotenv.config();

export class IssueManager {
    constructor(owner, repo, title = '', body = '', issueNumber = 1) {
        this.title = title;
        this.owner = owner;
        this.repo = repo;
        this.body = body;
        this.issueNumber = issueNumber;
    }

    async CreateIssue() {
        return await createIssue(this.owner, this.repo, this.title, this.body);
    }

    async DeleteIssue() {
        return await deleteIssue(this.owner, this.repo, this.issueNumber);
    }
}

async function createIssue(owner, repo, title, body) {
    const url = `https://api.github.com/repos/${owner}/${repo}/issues`;

    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`,
            'Accept': 'application/vnd.github+json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            body: body,
        }),
    };

    try {
        console.log(`Request: POST ${url}`);
        console.log('Request parameters:', options);

        const response = await fetch(url, options);

        const data = await response.json();
        if (!response.ok) {
            throw new Error(`Error: ${data.message}`);
        }

        console.log('Issue作成:', data);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function deleteIssue(owner, repo, issueNumber) {
    const url = `https://api.github.com/repos/${owner}/${repo}/issues/${issueNumber}`;

    const options = {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`,
            'Accept': 'application/vnd.github+json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            state: 'closed',
        }),
    };

    try {
        console.log(`Request: PATCH ${url}`);
        console.log('Request parameters:', options);

        const response = await fetch(url, options);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`Error: ${data.message}`);
        }

        console.log('Issue削除:', data);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// console.log(process.env.ACCESS_TOKEN)
// createIssue("isseissei", "jspractice", "うえーい", "やばい")