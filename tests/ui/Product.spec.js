const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { ProductPage } = require('../../pages/ProductPage');

test('Product Test', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);

  await loginPage.goto();
  await loginPage.openLogin();
  await loginPage.login('walemogaji01@outlook.com','oluwasegun1');
  await productPage.openProducts();
  await productPage.addMultipleProducts();
  await productPage.openCart();
  await expect(page.getByText('Men Tshirt')).toBeVisible();await expect(page.getByText('Winter Top')).toBeVisible();

});