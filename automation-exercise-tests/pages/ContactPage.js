import { expect } from "@playwright/test";

export class ContactPage {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://automationexercise.com');
        await this.page.getByRole('title', { name: 'Automation Exercise' }).isVisible();
    }

    async goToContactPage() {
        await this.page.getByRole('link', { name: 'Contact us' }).click();
    }

    async expectContactForm() {
        await expect(this.page.getByRole('heading', { name: 'Get In Touch' })).toBeVisible();
    }

    async fillContactForm(name, email, subject, message) {
        await this.page.getByRole('textbox', { name: 'Name' }).fill(name);
        await this.page.getByRole('textbox', { name: 'Email', exact: true }).fill(email);
        await this.page.getByRole('textbox', { name: "Subject" }).fill(subject);
        await this.page.getByRole('textbox', { name: 'Your Message Here' }).fill(message);
    }

    // async uploadFile(filePath) {
    //     await this.page.setInputFiles('input[type="file"]', filePath);
    // }

    async submitContactForm() {
        await expect(this.page.getByRole('button', { name: 'Submit' })).toBeVisible();
        await this.page.getByRole('button', { name: 'Submit' }).click();
    }

    
    async expectSuccessMessage() {
        await expect(this.page.locator('#contact-page').getByText('Success! Your details have')).toBeVisible();
    }
    
    async alertHandle() {
        await this.page.once('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.accept();
        });
    }

    async expectErrorMessage() {
        await expect(this.page.getByText('Error! Please fill all the fields correctly.')).toBeVisible();
    }
}