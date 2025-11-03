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
}