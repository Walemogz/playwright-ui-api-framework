class LoginPage {

  constructor(page) 
  {
    this.page = page;
    this.loginLink = page.getByRole('link', {name: 'Signup / Login'});
    this.emailInput =page.locator("[data-qa='login-email']");
    this.passwordInput = page.locator("[data-qa='login-password']");
    this.loginButton =page.locator("[data-qa='login-button']");
  }

  async goto()
   {
    await this.page.goto('https://automationexercise.com');
    await this.handleConsent();
  }

  async handleConsent() {
    const consentButton = this.page.getByRole('button', { name: 'Consent' });

    try {
        if (await consentButton.isVisible({ timeout: 5000 })) {
            await consentButton.click();
            await consentButton.waitFor({ state: 'hidden' });
        }
    } catch (e) {
        // Consent popup did not appear
    }
}

  async openLogin()
  {

  }

  async openLogin() 
  {
    await this.loginLink.click();
  }

  async login(email, password)
   {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = { LoginPage };