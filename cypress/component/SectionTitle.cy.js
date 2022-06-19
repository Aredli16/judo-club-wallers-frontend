import { mount } from "cypress/vue";
import SectionTitle from "../../src/components/SectionTitle.vue";

describe("SectionTitle.cy.js", () => {
  it("should not render if don't have props", () => {
    mount(SectionTitle);
    cy.get(".box-title").should("not.exist");
  });
  it("should render SectionTitle component with props", () => {
    mount(SectionTitle, {
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
