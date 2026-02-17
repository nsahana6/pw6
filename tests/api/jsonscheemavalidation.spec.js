import { test, expect } from '@playwright/test';
import Ajv from 'ajv';

test('Validate API response schema', async ({ request }) => {

  const response = await request.get('https://api.example.com/user/101');
  expect(response.status()).toBe(200);

  const body = await response.json();

  const schema = {
    type: "object",
    properties: {
      id: { type: "number" },
      name: { type: "string" },
      email: { type: "string" }
    },
    required: ["id", "name", "email"]
  };

  const ajv = new Ajv();
  const validate = ajv.compile(schema);

  const isValid = validate(body);

  expect(isValid).toBeTruthy();  // Fails if schema mismatch
});
