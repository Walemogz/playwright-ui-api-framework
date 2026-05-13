class CheckoutPage {

  constructor(page) {

    this.page = page;
    this.proceedToCheckoutButton = page.getByText('Proceed To Checkout');
    this.reviewOrderHeading = page.getByRole('heading', {name: 'Review Your Order'});
    this.placeOrderButton = page.getByText('Place Order');
    this.payAndConfirmText = page.getByText('Pay and Confirm Order');
    this.nameOnCardInput = page.locator("input[name='name_on_card']");
    this.cardNumberInput = page.locator("input[name='card_number']");
    this.cvcInput = page.locator( "input[name='cvc']");
    this.expiryMonthInput = page.locator("input[name='expiry_month']");
    this.expiryYearInput = page.getByRole('textbox', {name: 'YYYY'});
    this.payButton = page.getByText('Pay and Confirm Order');
    this.successMessage = page.getByText('Congratulations! Your order has been confirmed!');
    this.downloadInvoiceButton = page.getByText('Download Invoice');
  }

  async proceedToCheckout() 
  {
    await this.proceedToCheckoutButton.click();
  }

  async placeOrder() 
  {
     await this.placeOrderButton.click();
  }

  async fillPaymentDetails(paymentData)
   {
    await this.nameOnCardInput.fill(paymentData.cardName);
    await this.cardNumberInput.fill(paymentData.cardNumber);
    await this.cvcInput.fill(paymentData.cvc);
    await this.expiryMonthInput.fill(paymentData.expiryMonth);
    await this.expiryYearInput.fill(paymentData.expiryYear);
   }

  async confirmPayment() 
  {
    await this.payButton.click();
  }

  async downloadInvoice()
   {
    const downloadPromise =this.page.waitForEvent('download');
    await this.downloadInvoiceButton.click();
    const download =await downloadPromise;
    await download.saveAs('invoice.pdf');
  }
}

module.exports = { CheckoutPage };