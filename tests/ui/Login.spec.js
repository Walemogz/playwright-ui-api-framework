const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { loginData } = require('../../testData/loginData');

test('Valid Login Test', async ({ page }) => 
{
 const loginPage = new LoginPage(page);
 await loginPage.goto();
 await loginPage.openLogin();
 await loginPage.login(loginData.validUser.email,loginData.validUser.password);
 //await loginPage.login('walemogaji01@outlook.com','oluwasegun1');
 await expect(page.getByText('Logged in as')).toBeVisible();
});


test('Invalid Login Test', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.openLogin();
  //await loginPage.login('wrong@email.com','wrongpassword');
  await loginPage.login(loginData.invalidUser.email,loginData.invalidUser.password);

  await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
});