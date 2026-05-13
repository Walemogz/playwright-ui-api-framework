const { test, expect } = require('@playwright/test');
const { SignupPage } = require('../../pages/SignupPage');
const { signupData } = require('../../testData/signupData');

test('Signup Test', async ({ page }) => {

  const signupPage = new SignupPage(page);

  await signupPage.goto();
  await signupPage.openSignup();
  await signupPage.enterSignupDetails(signupData);
  await signupPage.clickSignup();
  await signupPage.fillAccountInformation(signupData);
  await signupPage.fillAddressInformation(signupData);
  await signupPage.createAccount();
  await expect(signupPage.accountCreatedHeading).toBeVisible();
  console.log('Account successfully created');
  await signupPage.continueAfterSignup();

});