import { expect } from '@playwright/test';

export class ProductPage {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://automationexercise.com/products');
    }

    async expectProductPage() {
        await expect(this.page.getByRole('img', { name: 'Website for practice' })).toBeVisible();
    }

    async searchProduct(productName) {
        await this.page.getByPlaceholder('Search Product').fill(productName);
        await this.page.locator('#submit_search').click();
    }

    async expectSearchResults() {
        await expect(this.page.getByRole('heading', { name: "Searched Products" })).toBeVisible();
    }

    async clickOnProduct() {
        await this.page.getByRole('link', { name: 'View Product' }).first().click();
    }

    async expectProductDetails() {
        await expect(this.page.getByRole('heading', { name: 'Premium Polo T-Shirts' })).toBeVisible();
    }

    async clickOnAddToCartButton() {
        await this.page.getByRole('button', { name: ' Add to cart' }).click();
    }

    async expectAddToCartModal() {
        await expect(this.page.getByRole('heading', { name: 'Added!' })).toBeVisible();
    }

    async ViewCart() {
        await this.page.getByRole('link', { name: 'View Cart' }).click();
    }

    async expectCartPage() {
        await expect(this.page.getByText('Shopping Cart')).toBeVisible();
    }

    async procceedToCheckout() {
        await expect(this.page.getByText('Proceed To Checkout')).toBeVisible();
        await this.page.getByText('Proceed To Checkout').click();
    }

    async expectCheckoutPage() {
        await expect(this.page.getByRole('heading', { name: 'Address Details' })).toBeVisible();
    }

    async placeOrder() {
        await this.page.getByRole('link', { name: 'Place Order' }).click();
    }

    async expectPaymentPage() {
        await expect(this.page.getByRole('heading', { name: 'Payment' })).toBeVisible();
    }

    async fillPaymentDetails(holderName, cardNumber, cvc, expiryMonth, expiryYear) {
        await this.page.locator('input[name="name_on_card"]').fill(holderName);
        await this.page.locator('input[name="card_number"]').fill(cardNumber);
        await this.page.getByRole('textbox', { name: 'ex.' }).fill(cvc);
        await this.page.getByRole('textbox', { name: 'MM' }).fill(expiryMonth);
        await this.page.getByRole('textbox', { name: 'YYYY' }).fill(expiryYear);
    }

    async submitPayment() {
        await this.page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
        await expect(this.page.getByText('Order Placed')).toBeVisible({ timeout: 5000 });
    }

    async downloadInvoice() {
        await expect(this.page.getByRole('link', { name: "Download Invoice" })).toBeVisible();
        await this.page.getByRole('link', { name: "Download Invoice" }).click();
    }
}