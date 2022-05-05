import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./e2e/features/redirect-to-login.feature');

let page: puppeteer.Page;
let browser: puppeteer.Browser;

defineFeature(feature, test => {

  jest.setTimeout(60000);
  
  beforeAll(async () => {

    browser = process.env.GITHUB_ACTIONS
    ? await puppeteer.launch()
    : await puppeteer.launch({ headless: true }); 
  page = await browser.newPage();

    await page
      .goto("http://localhost:3000", {
        waitUntil: "networkidle0",
      })
      .catch(() => {});
  });
  
  test("Usuario quiere loggearse", ({given,when,then}) => {

    given("Usuario sin loggear", () => {
    });

    when("Hace click en el botón de iniciar sesion de la NavBar", async () => {
      await page.setViewport({ width: 1200, height: 1300 });
      await expect(page).toClick("button[id='btnLogin']");
      await page.waitForNavigation()
    });

    then("Se le muestra la página del Login", async () => {
      await expect(page).toMatch("Identifícate");
    });
    afterAll(async ()=>{
      browser.close()
    });
  });
});
