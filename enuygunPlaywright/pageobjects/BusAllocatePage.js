const { expect } = require("@playwright/test");

// "//div[contains(@class,'popper')  and ./div[@aria-disabled='false']]"

export class BusAllocatePage {
  AVAILABLE_SEATS_LOCATOR = ".hover-active.single-seat";

  ENABLED_SEAT = "[class*='popper-container'] [aria-disabled='false']";

  ACCEPT_BUTTON = "#accept_and_continue";

  constructor(page) {
    this.page = page;
    this.availableSeats = page.locator(this.AVAILABLE_SEATS_LOCATOR);
    this.enabledSeat = page.locator(this.ENABLED_SEAT);
    this.acceptButton = page.locator(this.ACCEPT_BUTTON);
  }

  async selectBusBrand(busBrand) {
    await this.getBusBrandLocator(busBrand).first().click();
  }

  async selectAvailableSeat() {
    const availableSeats = this.availableSeats.count();

    const selectly = await this.randomNumberCreate(availableSeats, 0);
    console.log(selectly);
    await this.availableSeats.nth(selectly).click();
    await this.enabledSeat.first().click();
    await this.acceptButton.click();
  }

  async randomNumberCreate(max, min) {
    return Math.round(Math.random(max - min) + min);
  }

  async allocateBus(busBrand) {
    await this.selectBusBrand(busBrand);
    await this.selectAvailableSeat();
  }

  getBusBrandLocator(busBrand) {
    return this.page.locator("[alt='" + busBrand + "']");
  }
}
