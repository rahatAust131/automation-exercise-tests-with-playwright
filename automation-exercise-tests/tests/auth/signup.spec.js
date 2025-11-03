import { test, expect } from '@playwright/test';
import { SignupPage } from '../../pages/SignupPage.js';

test.describe('Test Case 1 & 5', () => {
    test('Signup with Valid credentials', async ({ page }) => {
        const signupPage = new SignupPage(page);
        await signupPage.expectSignupForm();
        await signupPage.navigate();
        await signupPage.fillupSignupForm('Rahat Test', 'testRahat2@test.test');
        await signupPage.submitSignupForm();
        // Add assertions here to verify successful signup
        await expect(page.getByText('ENTER ACCOUNT INFORMATION')).toBeVisible();
        await signupPage.createAccount('testRahat1', 'Rahat', 'Test');
    });

    test('Signup with Invalid email', async ({ page }) => {
        const signupPage = new SignupPage(page);
        await signupPage.expectSignupForm();
        await signupPage.navigate();
        await signupPage.fillupSignupForm('John Doe', 'invalid-email');
        await signupPage.submitSignupForm();

        // Add assertions here to verify error message for invalid email
        const isValid = await page.getByRole('textbox', { name: "Your email address" }).evaluate(el => el.checkValidity());
        expect(isValid).toBeFalsy();
    });
    
    test('Signup with existing email', async ({ page }) => {
        const signupPage = new SignupPage(page);
        await signupPage.expectSignupForm();
        await signupPage.navigate();
        await signupPage.fillupSignupForm('Rahat Test', 'testRahat2@test.test');
        await signupPage.submitSignupForm();
        const emailExists = await signupPage.checkIfEmailExists();
        expect(emailExists).toBeTruthy();
    });
});