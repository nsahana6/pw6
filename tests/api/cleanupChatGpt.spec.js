import{test} from "@playwright/test"
test('Create and delete user', async ({ request }) => {

  // Create user
  const createResponse = await request.post('https://reqres.in/api/users', {
    data: {
      name: "TestUser",
      job: "QA"
    }
  });

  const createBody = await createResponse.json();
  const userId = createBody.id;

  expect(createResponse.status()).toBe(201);

  // Cleanup (Delete user)
  const deleteResponse = await request.delete(`https://reqres.in/api/users/${userId}`);

  expect(deleteResponse.status()).toBe(204);

});

// another way to clean up using hooks like aftereach()
let userId;

test.afterEach(async ({ request }) => {
  if (userId) {
    await request.delete(`https://reqres.in/api/users/${userId}`);
  }
});

