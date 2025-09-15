
export class SignupPage {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://www.automationexercise.com/login');
    }

    async expectSignupForm() {
        await this.page.locator('.signup-form').isVisible();
    }

    async fillupSignupForm(name, email) {
        await this.page.locator('input[placeholder="Name"]').fill(name);
        await this.page.locator('input[data-qa="signup-email"]').fill(email);
    }

    async submitSignupForm() {
        await this.page.getByRole('button', { name: 'Signup' }).click();
    }

}