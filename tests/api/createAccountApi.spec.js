const { test, expect } = require('@playwright/test');

test('Create Account API', async ({ request }) => {
  const randomEmail = `test${Date.now()}@mail.com`;
  const response = await request.post('https://automationexercise.com/api/createAccount',
      {

        form: {

          name: 'Wale',
          email: randomEmail,
          password: 'oluwasegun1',
          title: 'Mr',
          birth_date: '27',
          birth_month: '12',
          birth_year: '1985',
          firstname: 'Wale',
          lastname: 'Mogzyy',
          company: 'Cloudengineer',
          address1:'64 Little Bolton Terrace',
          address2: 'Salford',
          country: 'United States',
          zipcode: '559585',
          state: 'Texas',
          city: 'Hollywood',
          mobile_number:'07544086092'
        }
      }
    );

  expect(response.status()).toBe(200);
  const responseBody = await response.text();
  console.log(responseBody);
  expect(responseBody) .toContain('User created!');
});