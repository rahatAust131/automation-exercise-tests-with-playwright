import { LoginPage } from "../../pages/LoginLogoutPage";
import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {
    test('Valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.expectLoginForm();
        await loginPage.navigate();
        await loginPage.fillupLoginForm('testRahat1@test.test', 'testRahat1');
        await loginPage.submitLoginForm();
        await loginPage.loginSuccessOrFail('Rahat Test');
    });

    test('Invalid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.expectLoginForm();
        await loginPage.navigate();
        await loginPage.fillupLoginForm('testRahat', 'test1');
        await loginPage.submitLoginForm();

        // Add assertions here to verify error message for invalid credentials
        const isValid = await page.getByRole('textbox', { name: "Your email address" }).evaluate(el => el.checkValidity());
        expect(isValid).toBeFalsy();
        // await expect(page.locator('.error-message')).toBeVisible(); // Replace with actual selector
    });
});