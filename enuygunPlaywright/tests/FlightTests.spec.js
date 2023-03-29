const { test, expect } = require("@playwright/test");
const { PageController } = require("../pageobjects/PageController");
const { DataGenerator } = require("../datas/DataGenerator");
const { Domains } = require("../datas/Domains");
const fakeData = new DataGenerator();
const domains = new Domains();
const flightData = require("../datas/FlightDatas.json");

test.describe("Flight Allocate Tests", () => {
  test.only("Successfully One Way Flight Allocate Test", async ({ page }) => {
    const pageController = new PageController(page);
    const flightHomePage = pageController.getFlightHomePage();
    const flightAllocatePage = pageController.getFlightAllocatePage();

    await page.goto(domains.FLIGHT_DOMAIN);
    await flightHomePage.fillCitiesInput(
      flightData.departureCity,
      flightData.destinationCity
    );

    await flightHomePage.searchOneWayFlight(flightData.departureDay);
    await flightAllocatePage.selectOneWayFlight(flightData.departureProvider);
  });

  test("Successfully Round Trip Flight Allocate Test", async ({ page }) => {
    const pageController = new PageController(page);
    const flightHomePage = pageController.getFlightHomePage();
    const flightAllocatePage = pageController.getFlightAllocatePage();

    await page.goto(domains.FLIGHT_DOMAIN);
    await flightHomePage.fillCitiesInput(
      flightData.departureCity,
      flightData.destinationCity
    );

    await flightHomePage.searchRoundTripFlight(
      flightData.departureDay,
      flightData.returnDay
    );

    await flightAllocatePage.selectRoundTripFlight(
      flightData.departureProvider,
      flightData.returnProvider
    );
  });
});
