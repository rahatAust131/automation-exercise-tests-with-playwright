import { test, expect } from "@playwright/test";

export class CartPage {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://automationexercise.com/view_cart');
    }
    async expectCartPage() {
        await expect(this.page.getByText('Shopping Cart')).toBeVisible();
    }
}