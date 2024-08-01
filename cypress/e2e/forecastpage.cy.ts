import { formatDate } from '../../utils/datetime';
import { forecastWeatherData } from '../fixtures/weather';
import { SELECTORS } from '../support/selectors';

describe('Forecast Page', () => {
  it('should render the now page with data', () => {
    cy.intercept('GET', 'api/forecast', forecastWeatherData);
    cy.visit('/forecast');
    cy.get(SELECTORS.forecastpage.header).should('be.visible');

    forecastWeatherData.items.forEach((item, index) => {
      cy.get(SELECTORS.forecastpage.card)
        .eq(index)
        .within(() => {
          cy.get(SELECTORS.card.cardTitle).should(
            'contain',
            formatDate(item.date),
          );
          cy.get(SELECTORS.card.cardSubtitle).should(
            'contain',
            item.prediction,
          );
        });
    });
  });

  it('should navigate to back to the homepage', () => {
    cy.visit('/forecast');
    cy.get(SELECTORS.forecastpage.backButton).click();
    cy.url().should('include', '/');
    cy.get(SELECTORS.homepage.header).should('be.visible');
  });

  it('should display a loading spinner if it is fetching data', () => {
    cy.intercept('GET', 'api/forecast', { forceNetworkError: true });
    cy.visit('/forecast');
    cy.get(SELECTORS.forecastpage.loadingSpinner).should('be.visible');
  });

  it('should reload the page', () => {
    cy.intercept('GET', 'api/forecast', { statusCode: 500 });
    cy.visit('/forecast');
    cy.get(SELECTORS.forecastpage.loadingSpinner).should('be.visible');
    cy.wait(10000);
    cy.get(SELECTORS.forecastpage.refreshButton).click();
    cy.intercept('GET', 'api/forecast', forecastWeatherData);

    forecastWeatherData.items.forEach((item, index) => {
      cy.get(SELECTORS.forecastpage.card)
        .eq(index)
        .within(() => {
          cy.get(SELECTORS.card.cardTitle).should(
            'contain',
            formatDate(item.date),
          );
          cy.get(SELECTORS.card.cardSubtitle).should(
            'contain',
            item.prediction,
          );
        });
    });
  });
});
