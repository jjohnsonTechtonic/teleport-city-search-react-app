class Page {
  constructor() {
    this.searchBar = "[data-cy=searchBar]";
  }
  getRoot() {
    return cy.get("#root");
  }
  getSearchBar() {
    return cy.get(this.searchBar);
  }
  getSearchBarInput() {
    return cy.get(this.searchBar + " input");
  }
  getSearchResults() {
    return cy.get("[data-cy=results] button");
  }
  getCityImage() {
    return cy.get("[data-cy=cityImage]");
  }
}
export default Page;
