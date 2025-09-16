import { LoginLogoutPage } from "../../pages/LoginLogoutPage";
import { test } from '@playwright/test';

test.describe('Logout Test', () => {
    test('Login and Logout', async ({ page }) => {
        const loginLogoutPage = new LoginLogoutPage(page);
        
        // Login
        await loginLogoutPage.expectLoginForm();
        await loginLogoutPage.navigate();
        await loginLogoutPage.fillupLoginForm('testRahat1@test.test', 'testRahat1');
        await loginLogoutPage.submitLoginForm();
        await loginLogoutPage.loginSuccessOrFail('Rahat Test');
        
        // Logout
        await loginLogoutPage.logout();
        await loginLogoutPage.logoutSuccessOrNot();
    });
});