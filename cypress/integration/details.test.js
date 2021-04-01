import SearchBar from "../support/Components/SearchBar";
import SearchResults from "../support/Components/SearchResults";
import CityDetails from "../support/Components/CityDetails";
import CityScores from "../support/Components/CityScores";

describe("What happens when you click on a result", () => {
  let searchBar, searchResults, cityDetails, cityScores;

  before(() => {
    searchBar = new SearchBar();
    searchResults = new SearchResults();
    cityDetails = new CityDetails();
    cityScores = new CityScores();
  });

  beforeEach(() => {
    cy.visit("/");
  });

  it("should not have a details component upon startup", () => {
    cityDetails.getDetails().should("not.exist");
    cityScores.getScores().should("not.exist");
  });

  it("should display everything!", () => {
    searchBar.getSearchBar().submit();
    searchResults.getAllResults().first().click();
    //assertions
    cityDetails.getDetails().should("be.visible");
    cityDetails.getImage().should("be.visible");
    cityScores.getScores().should("be.visible");
  });

  it("should show no details are available", () => {
    const searchTerm = "riverside";

    searchBar
      .getSearchBarInput()
      .type(searchTerm)
      .should("have.value", searchTerm);
    searchBar.getSearchBar().submit();
    searchResults.getAllResults().first().click();
    //assertions
    cityDetails.getDetails().should("be.visible");
    cityScores.nothingAvailable().contains("No details available");
    cityScores.getScores();
  });
});
