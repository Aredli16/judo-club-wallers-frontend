import { mount } from "cypress/vue";
import HomeMainCard from "../../../src/components/HomeComponents/HomeMainCard.vue";

describe("HomeMainCard.cy.js", () => {
  it("should not render if don't have props", () => {
    mount(HomeMainCard);
    cy.get(".card-title").should("not.exist");
  });
  it("should render with props", () => {
    mount(HomeMainCard, {
      slots: {
        default: () => "Content",
      },
      props: {
        post: {
          type: "test",
          title: "Test Title",
        },
      },
    });
    cy.get(".card").should("exist");
    cy.get(".card-header").should("exist").and("have.text", "test");
    cy.get(".card-title").should("exist").and("have.text", "Test Title");
    cy.get(".card-text").should("exist").and("have.text", "Content");
  });
});
