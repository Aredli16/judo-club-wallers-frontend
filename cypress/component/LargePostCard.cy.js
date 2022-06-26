import { mount } from "cypress/vue";
import LargePostCard from "../../src/components/LargePostCard.vue";

describe("LargePostCard.cy.js", () => {
  it("should not render without props", () => {
    mount(LargePostCard);
    cy.get(".card").should("not.exist");
  });
  it("should render with props", function () {
    mount(LargePostCard, {
      slots: {
        default: () => "Content",
      },
      props: {
        post: {
          title: "Test",
          author: "Test Author",
          date_posted: "2000-01-01T00:00:00.000Z",
        },
      },
    });
    cy.get(".card").should("exist");
    cy.get(".card-title").should("exist").and("have.text", "Test");
    cy.get(".card-link").should("exist").and("have.text", "Test Author");
    cy.get(".card-date")
      .should("exist")
      .and("have.text", new Date("2000-01-01T00:00:00.000Z").toLocaleString());
    cy.get(".card-content").should("exist").and("have.text", "Content");
  });
});
