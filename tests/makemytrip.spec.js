import { test, expect } from '@playwright/test';

test('MakeMyTrip', async ({ page }) => {

  await page.goto('https://www.makemytrip.com/', { waitUntil: 'load' });
  page.on('dialog',async(d)=>{
   await d.dismiss();
  })
  await page.locator('//img[@alt="minimize"]').click();
  await page.locator('//span[@class="commonModal__close"]').click();

  await page.locator('body').click();
  await page.locator("//input[@id='fromCity']").click();
  await page.locator("//input[@placeholder='From']").fill('Bangalore');
  await page.locator("//p[contains(text(),'Bengaluru International Airport')]").click();
  await page.locator("//input[@id='toCity']").click();
  await page.locator("//input[@placeholder='To']").fill('Delhi');
  await page.locator("//span[.='New Delhi, India']").click();
  await page.locator("//span[.='Departure']").click();
  const targetMonth = 'October 2026';
  const targetDate = 'Wed Oct 14 2026';
  while (true) {
    let monthYear = await page.locator("(//div[@class='DayPicker-Caption'])[1]",{waitUntil:'load'}).innerText();
    if (monthYear.includes(targetMonth)) {
      break;
    }
    await page.locator("//span[@aria-label='Next Month']").click();
  }
  await page.locator("//div[@aria-label='${targetDate}']").click();
  await page.locator("//a[.='Search']",{waitUntil:'load'}).click();
 await page.waitForLoadState('domcontentloaded');
  await expect(page.url()).toContain("https://www.makemytrip.com/flight/search?itinerary=BLR-DEL-14/10/2026");
});