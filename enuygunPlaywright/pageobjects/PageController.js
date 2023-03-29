const { BasePage } = require("./BasePage");
const { FlightHomePage } = require("./FlightHomePage");
const { RegisterPage } = require("./RegisterPage");
const { BusHomePage } = require("./BusHomePage");
const { BusAllocatePage } = require("./BusAllocatePage");
const { FlightAllocatePage } = require("./FlightAllocatePage");

export class PageController {
  constructor(page) {
    this.page = page;
    this.basePage = new BasePage(page);
    this.flightHomePage = new FlightHomePage(page);
    this.flightAllocatePage = new FlightAllocatePage(page);
    this.registerPage = new RegisterPage(page);
    this.busHomePage = new BusHomePage(page);
    this.busAllocatePage = new BusAllocatePage(page);
  }

  getBasePage() {
    return this.basePage;
  }

  getFlightHomePage() {
    return this.flightHomePage;
  }

  getFlightAllocatePage() {
    return this.flightAllocatePage;
  }

  getRegisterPage() {
    return this.registerPage;
  }

  getBusHomePage() {
    return this.busHomePage;
  }

  getBusAllocatePage() {
    return this.busAllocatePage;
  }
}
