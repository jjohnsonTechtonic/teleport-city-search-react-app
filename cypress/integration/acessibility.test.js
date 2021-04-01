import Page from "../support/page";
import SearchBar from "../support/Components/SearchBar";
import SearchResults from "../support/Components/SearchResults";
import CityDetails from "../support/Components/CityDetails";
import CityScores from "../support/Components/CityScores";

describe("Check the semantic tags", () => {
  let page, searchBar, searchResults, cityDetails, cityScores;

  before(() => {
    page = new Page();
    searchBar = new SearchBar();
    searchResults = new SearchResults();
    cityDetails = new CityDetails();
    cityScores = new CityScores();
  });

  beforeEach(() => {
    cy.visit("/");
  });
  it("should have a main and h1", () => {
    page.getRoot().children("main").should("be.visible");
    page.getRoot().children("h1").should("be.visible");
  });

  it("should ensure there's no other h1 inside of main!", () => {
    searchBar.getSearchBar().submit();
    searchResults.getAllResults().first().click();
    //assertions
    cy.get("main h1").should("not.exist");
  });

  it("should use section, article, etc", () => {
    searchBar.getSearchBar().submit();
    searchResults.getAllResults().first().click();
    //assertions
    cy.get("section").should("be.visible");
    cy.get("article").should("be.visible");
  });

  it("should have alternate text on the image", () => {
    searchBar
      .getSearchBarInput()
      .type("denver{enter}")
      .should("have.value", "denver");
    searchResults.getAllResults().first().click();
    //assertions
    cityDetails
      .getImage()
      .should("have.attr", "alt")
      .then((img) => {
        expect(cy.wrap(img)).to.exist;
      });
  });
});
