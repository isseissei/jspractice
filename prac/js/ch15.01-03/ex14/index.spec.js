import { test, expect } from "@playwright/test";

test('全部出てくる', async ({ page }) => {
    await page.selectOption('#category-select', 'all');
    const products = await page.locator('#productList li').all();
    for (const product of products) {
        await expect(product).toBeVisible();
    }
});

test('食品のみでてくる', async ({ page }) => {
    await page.selectOption('#category-select', 'food');
    const products = await page.locator('#productList li').all();
    for (const product of products) {
        const category = await product.getAttribute('data-category');
        if (category === 'food') {
            await expect(product).toBeVisible();
        } else {
            await expect(product).toBeHidden();
        }
    }
});

test('文房具のみ出てくる', async ({ page }) => {
    await page.selectOption('#category-select', 'stationery');
    const products = await page.locator('#productList li').all();
    for (const product of products) {
        const category = await product.getAttribute('data-category');
        if (category === 'stationery') {
            await expect(product).toBeVisible();
        } else {
            await expect(product).toBeHidden();
        }
    }
});
