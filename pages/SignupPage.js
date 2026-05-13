class SignupPage {

  constructor(page)
   {
    this.page = page;
    this.consentButton =page.getByRole('button', {name: 'Consent'});
    this.signupLink =page.getByRole('link', {name: 'Signup / Login'});
    this.nameInput =page.locator("input[data-qa='signup-name']");
    this.emailInput =page.locator("input[data-qa='signup-email']");
    this.signupButton = page.locator("button[data-qa='signup-button']");
    this.titleMr = page.getByRole('radio', { name: 'Mr.'});
    this.passwordInput =page.getByRole('textbox', {name: 'password'});
    this.firstName = page.locator('#first_name');
    this.lastName = page.locator('#last_name');
    this.company = page.locator('#company');
    this.address1 = page.locator('#address1');
    this.address2 = page.locator('#address2');
    this.country = page.getByLabel('Country');
    this.state = page.locator('#state');
    this.city = page.locator('#city');
    this.zipcode = page.locator('#zipcode');
    this.mobileNumber = page.locator('#mobile_number');
    this.createAccountButton = page.getByRole('button', {name: 'Create Account'});
    this.accountCreatedHeading = page.getByRole('heading', {name: 'ACCOUNT CREATED!'});
    this.continueButton = page.getByRole('link', {name: 'Continue'});
  }

  async goto()
  {
    await this.page.goto('https://automationexercise.com');
    await this.handleConsent();
  }

  async handleConsent()
  {
    if (await this.consentButton.isVisible().catch(() => false))
    {
     await this.consentButton.click();
    }
  }

  async openSignup()
 {
   await this.signupLink.click();
 }
  async enterSignupDetails(data) 
  {
    const randomEmail = `test${Date.now()}@mail.com`;
    await this.nameInput.fill(data.name);
    await this.emailInput.fill(randomEmail);
  }

  async clickSignup() 
  {
    await this.signupButton.click();
  }
  async fillAccountInformation()
   {
    await this.titleMr.check();
    await this.passwordInput.fill('oluwasegun1');
    await this.page.locator('#days').selectOption({ index: 27 });
    await this.page.locator('#months').selectOption({ index: 12 });
    await this.page.locator('#years').selectOption({ value: '1985'});
    await this.page.locator('#newsletter').check();
    await this.page.locator('#optin').check();
   }

  async fillAddressInformation() 
  {
   await this.firstName.fill('wale');
   await this.lastName.fill('Mogzyy');
   await this.company.fill('Cloudengineer');
   await this.address1.fill('64 Little Bolton Terrace');
   await this.address2.fill('Salford');
   await this.country.selectOption('United States');
   await this.state.fill('Texas');
   await this.city.fill('Hollywood');
   await this.zipcode.fill('559585');
   await this.mobileNumber.fill('07544086092');
  }

  async createAccount()
  {
   await this.createAccountButton.click();
  }

  async continueAfterSignup() 
  {
    await this.continueButton.click();
  }
}

module.exports = { SignupPage };