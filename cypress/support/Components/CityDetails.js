class CityDetails {
  constructor() {
    this.cityDetails = "[data-cy=cityDetails]";
  }
  getDetails() {
    return cy.get(this.cityDetails);
  }
  getImage() {
    return cy.get("[data-cy=cityImage]");
  }
}

export default CityDetails;
