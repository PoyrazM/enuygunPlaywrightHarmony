const { expect } = require("@playwright/test");

export class BusHomePage {
  DEPARTURE_SEARCH_INPUT = "//*[@data-testid='originsearchInput']";

  DESTINATION_SEARCH_INPUT = "//*[@data-testid='destinationsearchInput']";

  FIRST_CITY = ".react-autosuggest__suggestion--first";

  DATE_PICKER = "#BusSearchFormWrapper-departureDate";

  AVAILABLE_DAYS = "td[aria-disabled='false']";

  BUS_SEARCH_BUTTON = "//*[@data-testid='search-form_searchbtn']";

  constructor(page) {
    this.page = page;
    this.departureInput = page.locator(this.DEPARTURE_SEARCH_INPUT);
    this.destinationInput = page.locator(this.DESTINATION_SEARCH_INPUT);
    this.firstCity = page.locator(this.FIRST_CITY);
    this.datePicker = page.locator(this.DATE_PICKER);
    this.availableDays = page.locator(this.AVAILABLE_DAYS);
    this.busSearchButton = page.locator(this.BUS_SEARCH_BUTTON);
  }

  async fillSearchInputs(departureCity, destinationCity) {
    await this.departureInput.first().type(departureCity);
    await this.firstInputClick();
    await this.destinationInput.first().type(destinationCity);
    await this.firstInputClick();
  }

  async selectDate(day) {
    await this.datePicker.click();
    await this.availableDays.nth(day).click();
    await this.busSearchButton.first().click();
  }

  async firstInputClick() {
    await this.firstCity.click();
  }
}
