const { test, expect } = require('@playwright/test');

test('Verify Login With Invalid Details API', async ({ request }) =>
     {

  const response = await request.post(
      'https://automationexercise.com/api/verifyLogin',
      {
        form: {

          email: 'wrong@email.com',
          password: 'wrongpassword'
        }
      }
    );
  expect(response.status()).toBe(200);
  const responseBody = await response.text();
  console.log(responseBody);
  expect(responseBody).toContain('User not found!');
});