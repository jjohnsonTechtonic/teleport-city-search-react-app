import SearchBar from "../support/Components/SearchBar";
import SearchResults from "../support/Components/SearchResults";
import CityDetails from "../support/Components/CityDetails";
import CityScores from "../support/Components/CityScores";

describe("What happens when you click on a result", function () {
  beforeEach(function () {
    cy.visit("/");
    this.searchBar = new SearchBar();
    this.searchResults = new SearchResults();
    this.cityDetails = new CityDetails();
    this.cityScores = new CityScores();
  });

  it("should display everything!", function () {
    this.searchBar.getSearchBar().submit();
    this.searchResults.getAllResults().first().click();
    this.cityDetails.getDetails().should("be.visible");
    this.cityDetails.getImage().should("be.visible");
    this.cityScores.getScores().should("be.visible");
  });

  it("should show no details are available", function () {
    this.searchBar
      .getSearchBarInput()
      .type("riverside")
      .should("have.value", "riverside");
    this.searchBar.getSearchBar().submit();
    this.searchResults.getAllResults().first().click();
    this.cityDetails.getDetails().should("be.visible");
    this.cityScores.nothingAvailable().contains("No details available");
  });
});
