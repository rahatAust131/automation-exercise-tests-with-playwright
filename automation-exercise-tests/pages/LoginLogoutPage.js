import { expect } from "@playwright/test";

export class LoginLogoutPage {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://automationexercise.com/login');
    }

    async expectLoginForm() {
        await this.page.locator('.login-form').isVisible();
    }

    async fillupLoginForm(email, password) {
        await this.page.locator('input[data-qa="login-email"]').fill(email);
        await this.page.locator('input[placeholder="Password"]').fill(password);
    }

    async submitLoginForm() {
        await this.page.getByRole('button', { name: 'Login' }).click();
    }

    async loginSuccessOrFail(name) {
        await expect(this.page.getByRole('listitem').filter({ hasText: 'Logged in as Rahat Test' })).toBeVisible({ timeout: 2000 });
    }
    
    async logout() {
        await this.page.getByRole('listitem').filter({ hasText: 'Logout' }).click();
    }

    async logoutSuccessOrNot() {
        await expect(this.page.getByRole('heading', { name: 'Login to your account' })).toBeVisible( { timeout: 2000 } );
    }
}