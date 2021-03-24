class CityScores {
  getScores() {
    return cy.get("[data-cy=cityScores]");
  }
  nothingAvailable() {
    return cy.get("[data-cy=nothing-available]");
  }
}

export default CityScores;
