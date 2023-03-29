const { test } = require("@playwright/test");
const { PageController } = require("../pageobjects/PageController");
const { DataGenerator } = require("../datas/DataGenerator");
const { Domains } = require("../datas/Domains");
const fakeData = new DataGenerator();
const domains = new Domains();
const busData = require("../datas/BusDatas.json");

test.describe("Bus Allocate Tests", () => {
  test("Successfully Bus Allocate Test", async ({ page }) => {
    const pageController = new PageController(page);
    const busHomePage = pageController.getBusHomePage();
    const busAllocatePage = pageController.getBusAllocatePage();

    await page.goto(domains.BUS_DOMAIN);
    await busHomePage.fillSearchInputs(
      busData.departureCity,
      busData.destinationCity
    );
    await busHomePage.selectDate(busData.departureDate);

    await busAllocatePage.allocateBus(busData.busBrand);
  });
});
