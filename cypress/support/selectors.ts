export const SELECTORS = {
  homepage: {
    header: '[data-testid="header"]',
    nowButton: '[data-testid="now-button"]',
    forecastButton: '[data-testid="forecast-button"]',
  },
  nowpage: {
    header: '[data-testid="header"]',
    refreshButton: '[data-testid="refresh-button"]',
    backButton: '[data-testid="back-button"]',
    card: '[data-testid="now-card"]',
    loadingSpinner: '[data-testid="loading-spinner"]',
  },
  forecastpage: {
    header: '[data-testid="header"]',
    refreshButton: '[data-testid="refresh-button"]',
    backButton: '[data-testid="back-button"]',
    card: '[data-testid="forecast-card"]',
    loadingSpinner: '[data-testid="loading-spinner"]',
  },
  card: {
    cardTitle: '[data-testid="card-title"]',
    cardSubtitle: '[data-testid="card-subtitle"]',
  },
};
