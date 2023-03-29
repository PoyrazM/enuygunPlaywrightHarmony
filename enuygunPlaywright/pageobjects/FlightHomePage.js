export class FlightHomePage {
  SIGN_UP_BUTTON = "#ctx-RegisterBtn";

  DEPARTURE_INPUT = "#OriginInput";

  DESTINATION_INPUT = "#DestinationInput";

  FIRST_AIRPORT = ".react-autosuggest__suggestion--first";

  DEPARTURE_DATE_PICKER = ".SingleDatePicker_1";

  ONE_WAY_CHECKBOX = "#oneWayCheckbox";

  DESTINATION_DATE_PICKER = "#ReturnDate";

  AVAILABLE_DAYS = "td[aria-disabled='false']";

  FLIGHT_SEARCH_BUTTON = "[data-testid='formSubmitButton']";

  constructor(page) {
    this.page = page;
    this.signUpButton = page.locator(this.SIGN_UP_BUTTON);
    this.departureInput = page.locator(this.DEPARTURE_INPUT);
    this.destinationInput = page.locator(this.DESTINATION_INPUT);
    this.firstAirport = page.locator(this.FIRST_AIRPORT);
    this.departureDatePicker = page.locator(this.DEPARTURE_DATE_PICKER);
    this.oneWayCheckbox = page.locator(this.ONE_WAY_CHECKBOX);
    this.destinationDatePicker = page.locator(this.DESTINATION_DATE_PICKER);
    this.availableDays = page.locator(this.AVAILABLE_DAYS);
    this.flightSearchButton = page.locator(this.FLIGHT_SEARCH_BUTTON);
  }

  async navigateToSignUpPage() {
    await this.signUpButton.click();
  }

  async fillCitiesInput(departureCity, destinationCity) {
    await this.departureInput.type(departureCity);
    await this.firstAirport.first().click();
    await this.destinationInput.type(destinationCity);
    await this.firstAirport.first().click();
  }

  async searchOneWayFlight(departureDay) {
    await this.departureDatePicker.click();
    await this.availableDays.nth(departureDay).click();
    await this.clickSubmitButton();
  }

  async searchRoundTripFlight(departureDay, returnDay) {
    await this.departureDatePicker.click();
    await this.availableDays.nth(departureDay).click();

    await this.oneWayCheckbox.click();
    // await this.destinationDatePicker.click();
    await this.availableDays.nth(returnDay).click();
    await this.clickSubmitButton();
  }

  async clickSubmitButton() {
    await this.flightSearchButton.click();
  }
}
