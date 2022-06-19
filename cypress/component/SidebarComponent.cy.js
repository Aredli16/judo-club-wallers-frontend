import { mount } from "cypress/vue";
import SidebarComponent from "../../src/components/SidebarComponent.vue";

describe("SidebarComponent.cy.js", function () {
  it("should have a sidebar", function () {
    mount(SidebarComponent);
    cy.get(".sidebar").should("exist");
  });
});
