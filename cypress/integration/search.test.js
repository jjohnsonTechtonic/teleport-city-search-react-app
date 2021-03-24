import SearchBar from "../support/Components/SearchBar";
import SearchResults from "../support/Components/SearchResults";
import CityDetails from "../support/Components/CityDetails";
import CityScores from "../support/Components/CityScores";

describe("Searching", function () {
  beforeEach(function () {
    cy.visit("/");
    this.searchBar = new SearchBar();
    this.searchResults = new SearchResults();
    this.cityDetails = new CityDetails();
    this.cityScores = new CityScores();
  });

  it("should go and search for Taipei", function () {
    this.searchBar
      .getSearchBarInput()
      .type("taipei")
      .should("have.value", "taipei");
    this.searchBar.getSearchBar().submit();
    this.searchResults.getAllResults().contains("Taipei").and("be.visible");
  });

  it("should be invalid", function () {
    const gibberish = "ejshfgebfjefu";
    this.searchBar
      .getSearchBarInput()
      .type(gibberish + "{enter}")
      .should("have.value", gibberish);
    this.searchResults.getResultsHeading().contains("No results");
    this.searchResults.getAllResults().should("not.exist");
  });

  it("should just display the 25 default search results", function () {
    this.searchBar.getSearchBar().submit();
    this.searchResults.getResultsHeading().contains("25 matches found");
    this.searchResults.getAllResults().should((b) => {
      expect(b).to.have.length(25);
    });
  });
});
