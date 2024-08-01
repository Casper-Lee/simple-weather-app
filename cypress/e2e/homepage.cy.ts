import { SELECTORS } from '../support/selectors';

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render the homepage', () => {
    cy.get(SELECTORS.homepage.header).should('be.visible');
    cy.get(SELECTORS.homepage.nowButton).should('be.visible');
    cy.get(SELECTORS.homepage.forecastButton).should('be.visible');
  });

  it('should navigate to the now page', () => {
    cy.get(SELECTORS.homepage.nowButton).click();
    cy.url().should('include', '/now');
  });

  it('should navigate to the forecast page', () => {
    cy.get(SELECTORS.homepage.forecastButton).click();
    cy.url().should('include', '/forecast');
  });
});
