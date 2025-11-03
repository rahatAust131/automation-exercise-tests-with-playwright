import { test } from "@playwright/test";
import { ProductPage } from "../../pages/ProductPage";

test.describe('test Products page', () => {
    test('redirect to products page', async ({ page }) => {
        const productsPage = new ProductPage(page);
        await productsPage.navigate();
        await productsPage.expectProductPage();
        await productsPage.searchProduct('Polo');
        await productsPage.expectSearchResults();
        await productsPage.clickOnProduct();
        await productsPage.expectProductDetails();
        await productsPage.clickOnAddToCartButton();
        await productsPage.expectAddToCartModal();
        await productsPage.ViewCart();
        await productsPage.expectCartPage();
        await productsPage.procceedToCheckout();
    });
});

