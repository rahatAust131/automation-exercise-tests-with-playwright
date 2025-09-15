
export class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://www.automationexercise.com/login');
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
}