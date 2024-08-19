import { test, expect } from "@playwright/test";

function gotoTestTarget(page) {
    return page.goto("/ch15.04-10/ex05/index.html");
}

test.describe("サークル", () => {
    test("サークルの数、色、borderテスト", async ({ page }) => {
        await gotoTestTarget(page);
        const inlineCirclesCount = await page.locator('inline-circle').count();
        expect(inlineCirclesCount).toBe(4);

        const fourthCircle = page.locator('inline-circle').nth(3);
        const color = await fourthCircle.evaluate(el => window.getComputedStyle(el).backgroundColor);
        expect(color).toBe('rgb(255, 0, 0)');
        const bordercolor = await fourthCircle.evaluate(el => window.getComputedStyle(el).border);
        expect(bordercolor).toBe("1px solid rgb(0, 0, 255)")
    });
});
