class ProductPage {

  constructor(page) 
  {
    this.page = page;
    this.productsLink = page.getByRole('link', {name: 'Products'});
    this.cartLink = page.getByRole('link', {name: 'Cart'});
    this.continueShoppingButton = page.getByRole('button', {name: 'Continue Shopping'});
  }

  async openProducts() 
  {
    await this.productsLink.click();
  }

  async addProductToCart(productName) {

    const product =this.page.locator('.product-image-wrapper').filter({hasText: productName});
    await product.hover();
    await product.getByText('Add to cart').first().click();
    await this.continueShoppingButton.click();
  }

  async openCart()
   {
    await this.cartLink.click();
   }

  async addMultipleProducts()
   {
    await this.addProductToCart('Blue Top');
    await this.addProductToCart('Men Tshirt');
    await this.addProductToCart('Stylish Dress');
    await this.addProductToCart('Winter Top');
    await this.addProductToCart('Soft Stretch Jeans');
    await this.addProductToCart('Regular Fit Straight Jeans');
  }
}

module.exports = { ProductPage };