import { mount } from "cypress/vue";
import PostCard from "../../src/components/PostCard.vue";

describe("PostCard.cy.js", () => {
  it("should not render if don't have props", () => {
    mount(PostCard);
    cy.get(".post-card").should("not.exist");
  });
  it("should render with props", () => {
    mount(PostCard, {
      slots: {
        default: () => "Content",
      },
      props: {
        post: {
          title: "Test",
          subtitle: "Test Subtitle",
        },
      },
    });
    cy.get(".card").should("exist");
    cy.get(".card-title").should("exist").and("contain", "Test");
    cy.get(".card-subtitle").should("exist").and("contain", "Test Subtitle");
    cy.get(".card-text").should("exist").and("contain", "Content");
  });
});
