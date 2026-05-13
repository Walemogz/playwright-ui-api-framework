const { test, expect } = require('@playwright/test');

test('Get Products List API', async ({ request }) => 
{

  const response = await request.get('https://automationexercise.com/api/productsList');
  expect(response.status()).toBe(200);
  const responseBody = await response.text();
  console.log(responseBody);
  expect(responseBody).toContain('products');
});