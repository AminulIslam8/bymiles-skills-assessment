import BasePage from './basePage';
import '@4tw/cypress-drag-drop'

const URL = '/';
const QUICK_QUOTE_FORM = '.formbox.formbox--quick-quote-vehicle';
const ENTER_REG_INPUT_BOX = '[datacy="reg-to-qq-input"]';
const GET_A_QUICK_QUOTE_BUTTON = '[datacy="qq-btn-hero"]';
const INPUT_MILES_BOX = '[datacy="quick-quote-change-mileage-input"]';
const CONTINUE_MILES_BOTTON = '[datacy="quick-quote-mileage-continue"]';
const SELECT_NO_CLAIMS = '#react-select-ncd--value';
const AGE_INPUT_FIELD = '[datacy="policyholder-age-input"]';
const POST_CODE_INPUT = '[datacy="postcode-input"]';
const SELECT_RENEWAL_MONTH = '[datacy="react-select-month--list"]';
const ANNUAL_AMOUNT = '[datacy="annual-amount"]';
const PRICING_AMOUNT = '[datacy="per-mile-amount"]';
const LAST_YEARS_AMOUNT = '[datacy="estimate-calculator-toggle"]';
const ESTIMATED_MILES = '[datacy="estimated-miles"]';
const ESTIMATED_PRICE_HEADER = '.estimated-price-header';
const GET_A_QUOTE_BUTTON = '.button.button--primary.button--quick-quote';

class HomePage extends BasePage {

  visitHomePage() {
    cy.visit(URL)

    cy.get(QUICK_QUOTE_FORM).should('be.visible');
    cy.log('User is on the HomePage');
    return this;
  }

  inputReg(reg) {
    cy.get(ENTER_REG_INPUT_BOX).eq(0).clear().type(reg);
    cy.log('Registration entered');
  }

  getAQuickQuoteWithMiles(miles) {
    cy.get(GET_A_QUICK_QUOTE_BUTTON).click();
    cy.get(INPUT_MILES_BOX).type(miles);

    //Click Continue
    cy.get(CONTINUE_MILES_BOTTON).click();
    cy.log('Miles entered');
  }


  fillQuoteForm(yearsOfClaim, age, postcode, renewalMonth) {
    //Fill Quotes Form
    cy.get(SELECT_NO_CLAIMS).click();
    cy.get(`#react-select-ncd--option-${yearsOfClaim}`).click();
    cy.get(AGE_INPUT_FIELD).type(age);
    cy.get(POST_CODE_INPUT).type(postcode);
    cy.get(SELECT_RENEWAL_MONTH).click();
    cy.get(`[aria-label="${renewalMonth}"]`).click();
  }

    slideTheCarToPark(){
      //slide the car
      cy.get('.car', {force: true}).drag('.parking',{force: true})
      cy.get('.car', {force: true}).drag('.parking',{force: true})

      //click get a quick quote
      cy.get(GET_A_QUOTE_BUTTON).click();
    }

    verifyUserGetsAQuickQuote(){
      cy.get(ANNUAL_AMOUNT).should('be.visible')
      cy.get(PRICING_AMOUNT).should('be.visible')
      cy.get(LAST_YEARS_AMOUNT).should('be.visible')
      cy.get(ESTIMATED_MILES).should('be.visible')
      cy.get(ESTIMATED_PRICE_HEADER).should('have.text','Your annual estimate is:')
    }

}

export default HomePage;
