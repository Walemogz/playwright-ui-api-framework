const { test, expect } =
require('@playwright/test');

test('Verify Login API',async ({ request }) => 
    {
     const response = await request.post('https://automationexercise.com/api/verifyLogin',
      {

        form: {

          email:
            'walemogaji01@outlook.com',

          password:
            'oluwasegun1'
        }
      }
    );
  expect(response.status()).toBe(200);
  const responseBody = await response.text();
  console.log(responseBody);
  expect(responseBody).toContain('User exists!');
});