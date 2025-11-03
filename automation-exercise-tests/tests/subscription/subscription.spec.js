import {test, expect} from '@playwright/test';
import { SubscriptionPage } from '../../pages/SubscriptionPage.js';

test.describe('Test Case 10 & 11', () => {
    test('Subscription in Home page', async ({ page }) => {
        const subscriptionPage = new SubscriptionPage(page);
        await subscriptionPage.navigate();
        await subscriptionPage.goToSubscriptionSection();
        await subscriptionPage.verifySubscriptionTextVisible();
        await subscriptionPage.fillSubscriptionEmail('test@test.test');
        await subscriptionPage.submitSubscription();
        await subscriptionPage.expectSubscriptionSuccessMessage();
    });

    test('Subscription in Cart page', async ({ page }) => {
        const subscriptionPage = new SubscriptionPage(page);
        await subscriptionPage.navigate();
        await subscriptionPage.goToCartPage();
        await subscriptionPage.goToSubscriptionSection();
        await subscriptionPage.verifySubscriptionTextVisible();
        await subscriptionPage.fillSubscriptionEmail('test@test.test');
        await subscriptionPage.submitSubscription();
        await subscriptionPage.expectSubscriptionSuccessMessage();
    });
});