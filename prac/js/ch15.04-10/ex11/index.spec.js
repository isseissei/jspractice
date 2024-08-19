import { test, expect } from "@playwright/test";

function gotoTestTarget(page) {
    return page.goto("/ch15.04-10/ex11/index.html");
}

test.describe("todoテスト", () => {
    test("li要素を数える", async ({ page }) => {
        await gotoTestTarget(page);

        let liCount = await page.evaluate(() => {
            const list = document.querySelector('#todo-list');
            return list ? list.querySelectorAll('li').length : 0;
        });
        expect(liCount).toBe(0); //初期値が0

        await page.fill('#new-todo', 'テストだよ');
        await page.click('button');

        liCount = await page.evaluate(() => {
            const list = document.querySelector('#todo-list');
            return list ? list.querySelectorAll('li').length : 0;
        });
        expect(liCount).toBe(1);
    });

    test("completed、activeチェック", async ({ page }) => {
        await gotoTestTarget(page);

        let liCount = await page.evaluate(() => {
            const list = document.querySelector('#todo-list');
            return list ? list.querySelectorAll('li').length : 0;
        });
        expect(liCount).toBe(0); //初期値が0

        await page.fill('#new-todo', 'テストだよ');
        await page.click('button');

        await page.evaluate(() => {
            const listItems = document.querySelectorAll('li');
            listItems[2].click();//activeをクリック
        });
        liCount = await page.evaluate(() => {
            const list = document.querySelector('#todo-list');
            return list ? list.querySelectorAll('li').length : 0;
        });
        expect(liCount).toBe(1); 

        await page.evaluate(() => {
            const listItems = document.querySelectorAll('li');
            listItems[3].click();//completedをクリック
        });
        liCount = await page.evaluate(() => {
            const list = document.querySelector('#todo-list');
            return list ? list.querySelectorAll('li').length : 0;
        });
        expect(liCount).toBe(0); //0にならない？？？
        
    });



});
