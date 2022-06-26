import { mount } from "cypress/vue";
import MainCard from "../../src/components/MainCard.vue";

describe("MainCard.cy.js", () => {
  it("should not render if don't have props", () => {
    mount(MainCard);
    cy.get(".card-title").should("not.exist");
  });
  it("should render with props", () => {
    mount(MainCard, {
      slots: {
        default: () => "Content",
      },
      props: {
        post: {
          type: "test",
          title: "Test Title",
          date_posted: "2000-01-01T00:00:00.000Z",
        },
      },
    });
    cy.get(".card").should("exist");
    cy.get(".card-header").should("exist").and("have.text", "test");
    cy.get(".card-title").should("exist").and("have.text", "Test Title");
    cy.get(".card-text").should("exist").and("have.text", "Content");
    cy.get(".card-date")
      .should("exist")
      .and("have.text", new Date("2000-01-01T00:00:00.000Z").toLocaleString());
  });
});
