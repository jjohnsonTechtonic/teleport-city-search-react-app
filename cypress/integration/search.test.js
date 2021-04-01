import SearchBar from "../support/Components/SearchBar";
import SearchResults from "../support/Components/SearchResults";
import CityDetails from "../support/Components/CityDetails";
import CityScores from "../support/Components/CityScores";

describe("Searching", () => {
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

  it("should go and search for Taipei", () => {
    searchBar.getSearchBarInput().type("taipei").should("have.value", "taipei");
    searchBar.getSearchBar().submit();
    //assertions
    searchResults.getAllResults().then((el) => {
      expect(el).to.include.html("Taipei");
      expect(el).length.to.be.at.least(1);
    });
  });

  it("should be invalid", () => {
    const gibberish = "ejshfgebfjefu";
    searchBar
      .getSearchBarInput()
      .type(gibberish + "{enter}")
      .should("have.value", gibberish);
    //assertions
    searchResults.getResultsHeading().should("have.html", "No results yet!");
    searchResults.getAllResults().should("not.exist");
  });

  it("should just display the 25 default search results", () => {
    searchBar.getSearchBar().submit();
    //assertions
    searchResults.getResultsHeading().should("have.html", "25 matches found");
    searchResults.getAllResults().then((el) => {
      expect(el).to.have.length(25);
    });
  });
});
