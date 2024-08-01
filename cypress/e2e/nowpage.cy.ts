import { nowWeatherData } from '../fixtures/weather';
import { SELECTORS } from '../support/selectors';

describe('Now Page', () => {
  it('should render the now page with data', () => {
    cy.intercept('GET', 'api/now', nowWeatherData);
    cy.visit('/now');
    cy.get(SELECTORS.nowpage.header).should('be.visible');

    nowWeatherData.items.forEach((item, index) => {
      cy.get(SELECTORS.nowpage.card)
        .eq(index)
        .within(() => {
          cy.get(SELECTORS.card.cardTitle).should('contain', item.area);
          cy.get(SELECTORS.card.cardSubtitle).should('contain', item.forecast);
        });
    });
  });

  it('should navigate to back to the homepage', () => {
    cy.visit('/now');
    cy.get(SELECTORS.nowpage.backButton).click();
    cy.url().should('include', '/');
    cy.get(SELECTORS.homepage.header).should('be.visible');
  });

  it('should display a loading spinner if it is fetching data', () => {
    cy.intercept('GET', 'api/now', { forceNetworkError: true });
    cy.visit('/now');
    cy.get(SELECTORS.nowpage.loadingSpinner).should('be.visible');
  });
});
