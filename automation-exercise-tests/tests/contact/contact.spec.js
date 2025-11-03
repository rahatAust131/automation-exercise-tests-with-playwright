import { test, expect } from '@playwright/test';
import { ContactPage } from '../../pages/ContactPage.js';

test.describe('Test Case 6', () => {
    test('Submit with valid data', async ({ page }) => {
        const contactPage = new ContactPage(page);
        await contactPage.navigate();
        await contactPage.goToContactPage();
        await contactPage.expectContactForm();
        await contactPage.fillContactForm('', 'test@testt.test', '', '');
        await contactPage.alertHandle();
        await contactPage.submitContactForm();
        await contactPage.expectSuccessMessage();
        await contactPage.navigate();
    });
});