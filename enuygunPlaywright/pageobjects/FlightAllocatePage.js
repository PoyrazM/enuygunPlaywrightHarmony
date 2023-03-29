const { expect } = require("@playwright/test");
export class FlightAllocatePage {
  SELECT_AND_FORWARD_BUTTON = "[color='primary.normal']";

  constructor(page) {
    this.page = page;
    this.selectAndForwardButton = page.locator(this.SELECT_AND_FORWARD_BUTTON);
  }

  async selectOneWayFlight(provider) {
    await this.getProviderLocator(provider).first().click();
    await this.selectAndForwardButton.click();
  }

  async selectRoundTripFlight(departureProvider, returnProvider) {
    await this.getProviderLocator(departureProvider).first().click();
    await this.selectAndForwardButton.click();
    await this.getReturnProviderLocator(returnProvider).first().click();
  }

  getProviderLocator(provider) {
    return this.page.locator("[data-booking-provider='" + provider + "']");
  }

  getReturnProviderLocator(returnProvider) {
    return this.page.locator(
      "[class*='list-return'] [data-booking-provider='" + returnProvider + "']"
    );
  }
}
