import Page from "../support/page";
import SearchBar from "../support/Components/SearchBar";
import SearchResults from "../support/Components/SearchResults";
import CityDetails from "../support/Components/CityDetails";
import CityScores from "../support/Components/CityScores";

describe("Check the semantic tags", function () {
  before(function () {});

  beforeEach(function () {
    cy.visit("/");
    this.page = new Page();
    this.searchBar = new SearchBar();
    this.searchResults = new SearchResults();
    this.cityDetails = new CityDetails();
    this.cityScores = new CityScores();
  });
  it("should have a main and h1", function () {
    this.page.getRoot().children("main");
    this.page.getRoot().children("h1");
  });

  it("should ensure there's no other h1 inside of main!", function () {
    this.searchBar.getSearchBar().submit();
    this.searchResults
      .getAllResults()
      .first()
      .click()
      .then(() => {
        cy.get("main h1").should("not.exist");
      });
  });

  it("should use section, article, etc", function () {
    this.searchBar.getSearchBar().submit();
    this.searchResults
      .getAllResults()
      .first()
      .click()
      .then(() => {
        cy.get("section").should("be.visible");
        cy.get("article").should("be.visible");
      });
  });

  it("should have alternate text", function () {
    this.searchBar
      .getSearchBarInput()
      .type("denver{enter}")
      .should("have.value", "denver");
    this.searchResults.getAllResults().first().click();
    this.cityDetails
      .getImage()
      .should("have.attr", "alt")
      .then((img) => {
        expect(cy.wrap(img)).to.exist;
      });
  });
});
