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
  
  test("Usuario es redirigido a login", ({given,when,then}) => {

    given("Usuario sin loggear", () => {
    });

    when("Añade productos al carrito e intenta pagar", async () => {
      await page.setViewport({ width: 1200, height: 1300 });
      await expect(page).toClick("button[id='6230c212fc59abc2a32e47d0']");
      await expect(page).toClick("button[id='cartBtn']");
      await page.waitForNavigation()
      //Redirige a /cart
      await expect(page).toMatch("TU CARRITO");
      await expect(page).toClick("button[id='continueBuy']");
    });

    then("Se redirige a la página del LogIn", async () => {
      await page.waitForNavigation();
      await expect(page).toMatch("Identifícate");
    });
    afterAll(async ()=>{
      browser.close()
    });
  });
});
