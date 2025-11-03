import { test, expect } from '@playwright/test';
import { SignupPage } from '../../pages/SignupPage.js';

test.describe('Signup Tests', () => {
    test('Valid credentials', async ({ page }) => {
        const signupPage = new SignupPage(page);
        await signupPage.expectSignupForm();
        await signupPage.navigate();
        await signupPage.fillupSignupForm('Rahat Test', 'testRahat2024@test.test');
        await signupPage.submitSignupForm();
        // Add assertions here to verify successful signup
        await expect(page.getByText('ENTER ACCOUNT INFORMATION')).toBeVisible();
        await signupPage.createAccount('testRahat1', 'Rahat', 'Test');
    });

    test('Invalid email', async ({ page }) => {
        const signupPage = new SignupPage(page);
        await signupPage.expectSignupForm();
        await signupPage.navigate();
        await signupPage.fillupSignupForm('John Doe', 'invalid-email');
        await signupPage.submitSignupForm();

        // Add assertions here to verify error message for invalid email
        const isValid = await page.getByRole('textbox', { name: "Your email address" }).evaluate(el => el.checkValidity());
        expect(isValid).toBeFalsy();
        // await expect(page.locator('.error-message')).toBeVisible(); // Replace with actual selector
    });
});