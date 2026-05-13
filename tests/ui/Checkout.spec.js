const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { ProductPage } = require('../../pages/ProductPage');
const { CheckoutPage } = require('../../pages/CheckoutPage');
const { paymentData } = require('../../testData/paymentData');

test('Checkout Test', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const checkoutPage = new CheckoutPage(page);
  await loginPage.goto();
  await loginPage.openLogin();
  await loginPage.login('walemogaji01@outlook.com','oluwasegun1');
  await productPage.openProducts();
  await productPage.addMultipleProducts();
  await productPage.openCart();
  await checkoutPage.proceedToCheckout();
  await expect(checkoutPage.reviewOrderHeading).toBeVisible();
  await checkoutPage.placeOrder();
  await expect(checkoutPage.payAndConfirmText).toBeVisible();
  await checkoutPage.fillPaymentDetails(paymentData);
  await checkoutPage.confirmPayment();
  await expect(checkoutPage.successMessage).toBeVisible();
  await checkoutPage.downloadInvoice();

});