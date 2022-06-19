import { mount } from "cypress/vue";
import PostSlider from "../../src/components/PostSlider.vue";

describe("PostSlider.cy.js", function () {
  it("should render", function () {
    mount(PostSlider);
    cy.get(".slider").should("exist");
  });
});
