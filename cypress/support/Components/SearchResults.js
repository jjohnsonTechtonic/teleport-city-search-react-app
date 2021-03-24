class SearchResults {
  constructor() {
    this.results = "[data-cy=results]";
  }
  getResults() {
    return cy.get(this.results);
  }
  getResultsHeading() {
    return cy.get(this.results + " h2");
  }
  getAllResults() {
    return cy.get(this.results + " button");
  }
}

export default SearchResults;
