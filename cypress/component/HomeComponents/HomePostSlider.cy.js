import { mount } from "cypress/vue";
import HomePostSlider from "../../../src/components/HomeComponents/HomePostSlider.vue";

describe("HomePostSlider.cy.js", function () {
  it("should render", function () {
    mount(HomePostSlider);
    cy.get(".slider").should("exist");
  });
});
