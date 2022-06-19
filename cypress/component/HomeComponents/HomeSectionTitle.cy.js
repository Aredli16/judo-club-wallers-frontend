import { mount } from "cypress/vue";
import HomeSectionTitle from "../../../src/components/HomeComponents/HomeSectionTitle.vue";

describe("HomeSectionTitle.cy.js", () => {
  it("should not render if don't have props", () => {
    mount(HomeSectionTitle);
    cy.get(".box-title").should("not.exist");
  });
  it("should render HomeSectionTitle component with props", () => {
    mount(HomeSectionTitle, {
      props: {
        title: "Test Title",
        color: "red",
      },
    });
    cy.get(".box-title").should("exist");
    cy.get(".box-title").should("have.text", "Test Title");
    cy.get(".title")
      .should("have.css", "background-color")
      .and("eq", "rgb(255, 0, 0)");
  });
});
