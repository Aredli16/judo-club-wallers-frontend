import { mount } from "cypress/vue";
import CarouselComponent from "../../src/components/CarouselComponent.vue";

describe("CarouselComponent.cy.ts", () => {
  it("should render", function () {
    mount(CarouselComponent);
    cy.get("#homeCarousel").should("exist");
  });
  it("should have a carousel", function () {
    mount(CarouselComponent);
    cy.get("#homeCarousel").should("have.class", "carousel");
  });
  it("should have indicator button", function () {
    mount(CarouselComponent);
    cy.get(".carousel-indicators").should("exist");
  });
  it("should have a carousel-inner", function () {
    mount(CarouselComponent);
    cy.get(".carousel-inner").should("exist");
  });
  it("should have a carousel-item", function () {
    mount(CarouselComponent);
    cy.get(".carousel-item").should("exist");
  });
  it("should have carousel control preview", function () {
    mount(CarouselComponent);
    cy.get(".carousel-control-prev").should("exist");
    cy.get(".carousel-control-next").should("exist");
  });
  it("should have same id", function () {
    mount(CarouselComponent);
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
