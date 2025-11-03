import { expect} from '@playwright/test';

export class TestCasesPage {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://automationexercise.com');
        await this.page.getByRole('title', { name: 'Automation Exercise' }).isVisible();
    }

    async goToTestCasesPage() {
        await this.page.getByRole('link', { name: ' Test Cases' }).click();
    }

    async expectTestCasesPage() {
        await expect(this.page.getByRole('heading', { name: 'Test Cases', exact: true })).toBeVisible();
    }
}