const { expect } = require("@playwright/test");
const { PageController } = require("../pageobjects/PageController");

export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async visitUrl(page, browser, url) {
    page = await browser.newPage();
    await page.goto(url);
  }
}
