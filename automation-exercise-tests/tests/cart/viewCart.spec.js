import { test } from "@playwright/test";
import { CartPage } from "../../pages/CartPage";

test.describe('View only Cart Page', () => {
    test('Cart Page', async ({ page }) => {
        const cartPage = new CartPage(page);
        await cartPage.navigate();
        await cartPage.expectCartPage();
    })
});