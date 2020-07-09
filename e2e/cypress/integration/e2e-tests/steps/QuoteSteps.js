import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../pages/homePage';

let homePage = new HomePage();

Given(/^a user is on the home page with a filled in car registration number "([^"]*)"$/, function(reg) {
  homePage.visitHomePage().and().inputReg(reg);
});

Given(/^and gets a quick quote with miles "([^"]*)"$/, (miles) => {
  homePage.getAQuickQuoteWithMiles(miles);
});

When(/^the user fills the quick quote form with years of claims "([^"]*)" age "([^"]*)" postcode "([^"]*)" renewal month "([^"]*)"$/, (yearsOfClaim, age, postcode, renewalMonth) => {
  homePage.fillQuoteForm(yearsOfClaim, age, postcode, renewalMonth);
});

Then(/^slides the car to park$/, () => {
  homePage.slideTheCarToPark()
});

Then(/^verify user gets a quick quote$/, () => {
  homePage.verifyUserGetsAQuickQuote()
});
