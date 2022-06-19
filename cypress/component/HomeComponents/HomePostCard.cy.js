import { mount } from "cypress/vue";
import HomePostCard from "../../../src/components/HomeComponents/HomePostCard.vue";

describe("HomePostCard.cy.js", () => {
  it("should not render if don't have props", () => {
    mount(HomePostCard);
    cy.get(".post-card").should("not.exist");
  });
  it("should render with props", () => {
    mount(HomePostCard, {
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
