import { test, expect } from '@playwright/test';
import { TestCasesPage } from '../../pages/TestCasesPage.js';

test.describe('Test Case 7', () => {
    test('Navigate to Test Cases page', async ({ page }) => {
        const testCasesPage = new TestCasesPage(page);
        await testCasesPage.navigate();
        await testCasesPage.goToTestCasesPage();
        await testCasesPage.expectTestCasesPage();
    });
});