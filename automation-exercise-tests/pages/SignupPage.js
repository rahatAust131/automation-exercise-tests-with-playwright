import { expect } from "@playwright/test";

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

    async createAccount() {
        await this.page.getByRole('radio', { name: 'Mr.' }).click();
        await this.page.getByRole('textbox', { name: 'Password *' }).fill('testRahat1234');
        await this.page.locator('#days').click({ timeout: 1000 });
        await this.page.selectOption('select#days', '15');   // value="15";
        await this.page.selectOption('select#months', 'January');   //value="1"
        await this.page.selectOption('select#years', '1990');   //value="1990"
        await this.page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).click();
        await this.page.getByRole('checkbox', { name: 'Receive special offers from our partners!' }).click();
        await this.page.getByRole('textbox', { name: 'First name *' }).fill('Rahat');
        await this.page.getByRole('textbox', { name: 'Last name *' }).fill('Test');
        await this.page.getByRole('textbox', { name: 'Company', exact: true }).fill('Test Company');
        await this.page.getByRole('textbox', { name: 'Address * (Street address, P.O. Box, Company name, etc.)' }).fill('123 Test St');
        await this.page.getByRole('textbox', { name: 'Address 2' }).fill('Suite 100');
        await this.page.getByRole('combobox', { name: 'Country *' }).selectOption('Canada');
        await this.page.getByRole('textbox', { name: 'State *' }).fill('Test State');
        await this.page.getByRole('textbox', { name: 'City *' }).fill('Test City');
        await this.page.locator('#zipcode').fill('A1A 1A1');
        await this.page.getByRole('textbox', { name: 'Mobile Number *' }).fill('+1234567890');
        await this.page.getByRole('button', { name: 'Create Account' }).click();
        await expect(this.page.getByText('ACCOUNT CREATED!')).toBeVisible();
    }

}