import { mount } from "cypress/vue";
import SidebarTile from "../../src/components/SidebarTile.vue";

describe("SidebarTile.cy.js", () => {
  it("should not renders the HomeSidebarTile component if no props", () => {
    mount(SidebarTile);
    cy.get(".sidebar-link").should("not.exist");
  });
  it("should renders the HomeSidebarTile component with props", () => {
    mount(SidebarTile, {
      propsData: {
        title: "Test",
        icon: "fa-test",
        link: "#",
        color: "#ff0000",
      },
    });
    cy.get(".sidebar-link").should("exist");
    cy.get("i").should("have.attr", "class").and("eq", "fa-test");
    cy.get(".sidebar-link").should("have.attr", "href").and("eq", "#");
    cy.get(".sidebar-link")
      .should("have.attr", "class")
      .and("not.contain", "router-link-active");
  });
});
