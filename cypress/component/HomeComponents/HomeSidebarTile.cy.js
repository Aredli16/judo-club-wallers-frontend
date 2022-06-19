import { mount } from "cypress/vue";
import HomeSidebarTile from "../../../src/components/HomeComponents/HomeSidebarTile.vue";

describe("HomeSidebarTile.cy.js", () => {
  it("should not renders the HomeSidebarTile component if no props", () => {
    mount(HomeSidebarTile);
    cy.get(".sidebar-link").should("not.exist");
  });
  it("should renders the HomeSidebarTile component with props", () => {
    mount(HomeSidebarTile, {
      propsData: {
        title: "Test",
        icon: "fa-test",
        link: "#",
        active: false,
        color: "#ff0000",
      },
    });
    cy.get(".sidebar-link").should("exist");
    cy.get("i").should("have.attr", "class").and("eq", "fa-test");
    cy.get(".sidebar-link").should("have.attr", "href").and("eq", "#");
    cy.get(".sidebar-link")
      .should("have.attr", "class")
      .and("not.contain", "sidebar-link-active");
  });
  it("renders the HomeSidebarTile component with props and active", () => {
    mount(HomeSidebarTile, {
      props: {
        title: "Test",
        icon: "fa-test",
        link: "#",
        active: true,
        color: "#0059ff",
      },
    });
    cy.get(".sidebar-link").should("exist");
    cy.get("i").should("have.attr", "class").and("eq", "fa-test");
    cy.get(".sidebar-link").should("have.attr", "href").and("eq", "#");
    cy.get(".sidebar-link-active").should("exist");
    cy.get(".sidebar-link")
      .should("have.css", "color")
      .and("eq", "rgb(0, 89, 255)");
  });
});
