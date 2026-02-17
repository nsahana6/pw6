import{test}from "@playwright/test"
test("spicejet",async({page})=>{
    await page.goto("https://www.spicejet.com/")
    await page.getByTestId("to-testID-destination").getByRole("textbox").type("be")
    // await page.getByTestId("departure-date-dropdown-label-test-id").getByText("Departure Date").click()
    await page.locator('(//div[@class="css-76zvg2 r-homxoj r-ubezar r-16dba41" and text()="20" and @style="font-family: inherit;"])[1]').click()
    await page.getByText("1 Adult").click()
    await page.getByTestId("Adult-testID-plus-one-cta").click()
    await page.getByTestId("home-page-flight-cta").click()
})