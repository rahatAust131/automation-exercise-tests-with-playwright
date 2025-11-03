import { test } from "@playwright/test";
import { LoginLogoutPage } from "../../pages/LoginLogoutPage";
import { ProductPage } from "../../pages/ProductPage";

test.describe('Testing "Add to Cart"', () => {
    test('Login and Checkout', async ({ page }) => {
        // First, log in
        const loginLogoutPage = new LoginLogoutPage(page);
        await loginLogoutPage.expectLoginForm();
        await loginLogoutPage.navigate();
        await loginLogoutPage.fillupLoginForm('testRahat2024@test.test', 'testRahat1');
        await loginLogoutPage.submitLoginForm();
        await loginLogoutPage.loginSuccessOrFail('Rahat Test');

        // Now Search for a specific product
        const productsPage = new ProductPage(page);
        await productsPage.navigate();
        await productsPage.expectProductPage();
        await productsPage.searchProduct('Polo');
        await productsPage.expectSearchResults();
        await productsPage.clickOnProduct();

        // Add product to cart
        await productsPage.expectProductDetails();
        await productsPage.clickOnAddToCartButton();
        await productsPage.expectAddToCartModal();
        await productsPage.ViewCart();
        await productsPage.expectCartPage();

        // Proceed to checkout
        await productsPage.procceedToCheckout();
        await productsPage.expectCheckoutPage();

        // Place order
        await productsPage.placeOrder();
        await productsPage.expectPaymentPage();
        await productsPage.fillPaymentDetails('Rahat Test', '4111111111111111', '123', '25', '2123');
        await productsPage.submitPayment();

        // Verify order success and download invoice
        await productsPage.downloadInvoice();
    });
});

