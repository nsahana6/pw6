
import { Page, Locator } from "@playwright/test";

export class DashboardPage {
  constructor(page) {
    this.page = page;
    this.dashboardTitleText = page.locator('h6:has-text("Dashboard")');
  }
}
