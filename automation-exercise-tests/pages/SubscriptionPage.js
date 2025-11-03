import { expect } from "@playwright/test";

export class SubscriptionPage {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://automationexercise.com');
        await this.page.getByRole('title', { name: 'Automation Exercise' }).isVisible();
    }

    async goToCartPage() {
        await this.page.getByRole('link', { name: ' Cart' }).click();
    }

    async goToSubscriptionSection() {
        await this.page.locator('#footer').scrollIntoViewIfNeeded();
    }

    async verifySubscriptionTextVisible() {
        await expect(this.page.getByRole('heading', { name: 'SUBSCRIPTION'})).toBeVisible();
    }

    async fillSubscriptionEmail(email) {
        await this.page.getByRole('textbox', { name: 'Your email address' }).fill(email);
    }

    async submitSubscription() {
        await this.page.getByRole('button', { name: '' }).click();
    }

    async expectSubscriptionSuccessMessage() {
        await expect(this.page.locator('footer').getByText('You have been successfully subscribed!')).toBeVisible();
    }
}