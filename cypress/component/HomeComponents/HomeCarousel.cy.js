import { mount } from "cypress/vue";
import HomeCarousel from "../../../src/components/HomeComponents/HomeCarousel.vue";

describe("HomeCarousel.cy.ts", () => {
  it("should render", function () {
    mount(HomeCarousel);
    cy.get("#homeCarousel").should("exist");
  });
  it("should have a carousel", function () {
    mount(HomeCarousel);
    cy.get("#homeCarousel").should("have.class", "carousel");
  });
  it("should have indicator button", function () {
    mount(HomeCarousel);
    cy.get(".carousel-indicators").should("exist");
  });
  it("should have a carousel-inner", function () {
    mount(HomeCarousel);
    cy.get(".carousel-inner").should("exist");
  });
  it("should have a carousel-item", function () {
    mount(HomeCarousel);
    cy.get(".carousel-item").should("exist");
  });
  it("should have carousel control preview", function () {
    mount(HomeCarousel);
    cy.get(".carousel-control-prev").should("exist");
    cy.get(".carousel-control-next").should("exist");
  });
  it("should have same id", function () {
    mount(HomeCarousel);
    cy.get("#homeCarousel").should("have.id", "homeCarousel");
    cy.get("button").should("have.attr", "data-bs-target", "#homeCarousel");
    cy.get(".carousel-control-prev").should(
      "have.attr",
      "data-bs-target",
      "#homeCarousel"
    );
    cy.get(".carousel-control-next").should(
      "have.attr",
      "data-bs-target",
      "#homeCarousel"
    );
  });
});
