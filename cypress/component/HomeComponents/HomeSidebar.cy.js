import { mount } from "cypress/vue";
import HomeSidebar from "../../../src/components/HomeComponents/HomeSidebar.vue";

describe("HomeSidebar.cy.js", function () {
  it("should have a sidebar", function () {
    mount(HomeSidebar);
    cy.get(".sidebar").should("exist");
  });
});
