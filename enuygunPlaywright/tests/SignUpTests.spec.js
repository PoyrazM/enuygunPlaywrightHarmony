const { test } = require("@playwright/test");
const { PageController } = require("../pageobjects/PageController");
const { DataGenerator } = require("../datas/DataGenerator");
const { Domains } = require("../datas/Domains");
const fakeData = new DataGenerator();
const domains = new Domains();

test.describe("Sign Up Test Cases", () => {
  test("Successfully Sign Up with Valid Parameters", async ({ page }) => {
    const pageController = new PageController(page);
    const homePage = pageController.getFlightHomePage();
    const registerPage = pageController.getRegisterPage();

    await page.goto(domains.FLIGHT_DOMAIN);
    await homePage.navigateToSignUpPage();
    await registerPage.fillValidEmailAndValidPasswordCase(
      fakeData.email,
      fakeData.password,
      fakeData.isAccept
    );
  });

  test("Sign Up Failure with Invalid Email", async ({ page }) => {
    const pageController = new PageController(page);
    const homePage = pageController.getFlightHomePage();
    const registerPage = pageController.getRegisterPage();

    await page.goto(domains.FLIGHT_DOMAIN);
    await homePage.navigateToSignUpPage();
    await registerPage.fillInvalidEmailAndValidPasswordCase(
      fakeData.invalidEmail,
      fakeData.password,
      fakeData.isAccept
    );
  });

  test("Sign Up Failure with Invalid Password", async ({ page }) => {
    const pageController = new PageController(page);
    const homePage = pageController.getFlightHomePage();
    const registerPage = pageController.getRegisterPage();

    await page.goto(domains.FLIGHT_DOMAIN);
    await homePage.navigateToSignUpPage();
    await registerPage.fillValidEmailAndInvalidPasswordCase(
      fakeData.email,
      fakeData.invalidPass,
      fakeData.isAccept
    );
  });

  test("Sign Up Failure with Invalid Email and Invalid Password", async ({
    page,
  }) => {
    const pageController = new PageController(page);
    const homePage = pageController.getFlightHomePage();
    const registerPage = pageController.getRegisterPage();

    await page.goto(domains.FLIGHT_DOMAIN);
    await homePage.navigateToSignUpPage();
    await registerPage.fillInvalidEmailAndInvalidPasswordCase(
      fakeData.invalidEmail,
      fakeData.invalidPass,
      fakeData.isAccept
    );
  });
});
