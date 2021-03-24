class SearchBar {
  getSearchBar() {
    return cy.get("[data-cy=searchbar]");
  }
  getSearchBarInput() {
    return cy.get("[data-cy=searchbar] input");
  }
}

export default SearchBar;
