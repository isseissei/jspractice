import { IssueManager } from './index.js';

global.fetch = jest.fn();

describe.skip('IssueManager', () => {
    const owner = 'test-owner';
    const repo = 'test-repo';
    const title = 'Test Issue Title';
    const body = 'Test issue body';
    const issueNumber = 1;

    beforeEach(() => {
        fetch.mockClear();
        console.error = jest.fn();
    });
    afterEach(() => {
        jest.restoreAllMocks();  
    });

    test('CreateIssueが正常に動作する', async () => {
        const mockResponse = {
            ok: true,
            json: async () => ({ id: 1, title, body })
        };
        fetch.mockResolvedValue(mockResponse);

        const issueManager = new IssueManager(owner, repo, title, body);
        const result = await issueManager.CreateIssue();

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(
            `https://api.github.com/repos/${owner}/${repo}/issues`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer undefined`,
                    'Accept': 'application/vnd.github+json',
                    'Content-Type': 'application/json',
                },
                body: undefined,
            }
        );
        expect(result).toEqual({ id: 1, title, body });
    });

    test('DeleteIssueが正常に動作する', async () => {
        const mockResponse = {
            ok: true,
            json: async () => ({ id: issueNumber, state: 'closed' })
        };
        fetch.mockResolvedValue(mockResponse);

        const issueManager = new IssueManager(owner, repo, '', '', issueNumber);
        const result = await issueManager.DeleteIssue();

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(
            `https://api.github.com/repos/${owner}/${repo}/issues/${issueNumber}`,
            {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer undefined`,
                    'Accept': 'application/vnd.github+json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ state: 'closed' }),
            }
        );
        expect(result).toEqual({ id: issueNumber, state: 'closed' });
    });

    test('CreateIssueがエラーを処理する', async () => {
        const errorMessage = 'Error creating issue';
        fetch.mockResolvedValue({
            ok: false,
            json: async () => ({ message: errorMessage })
        });

        const issueManager = new IssueManager(owner, repo, title, body);
        const result = await issueManager.CreateIssue();

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(result).toBeUndefined();
        expect(console.error).toHaveBeenCalledWith('Error:', new Error(`Error: ${errorMessage}`));
    });

    test('DeleteIssueがエラーを処理する', async () => {
        const errorMessage = 'Error deleting issue';
        fetch.mockResolvedValue({
            ok: false,
            json: async () => ({ message: errorMessage })
        });

        const issueManager = new IssueManager(owner, repo, '', '', issueNumber);
        const result = await issueManager.DeleteIssue();

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(result).toBeUndefined();
        expect(console.error).toHaveBeenCalledWith('Error:', new Error(`Error: ${errorMessage}`));
    });
});
