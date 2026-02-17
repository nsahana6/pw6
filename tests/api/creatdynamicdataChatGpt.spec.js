import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Create user using faker data', async ({ request }) => {

  const userData = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    job: faker.person.jobTitle()
  };

  const response = await request.post('https://reqres.in/api/users', {
    data: userData
  });

  expect(response.status()).toBe(201);
});



// using date.noe to create random number in email id and user name 


test('Create user with unique email', async ({ request }) => {

  const uniqueEmail = `sahana${Date.now()}@test.com`;

  const response = await request.post('https://reqres.in/api/users', {
    data: {
      name: "Sahana",
      job: "QA",
      email: uniqueEmail
    }
  });

  const body = await response.json();

  console.log("Created Email:", uniqueEmail);

  expect(response.status()).toBe(201);
});

