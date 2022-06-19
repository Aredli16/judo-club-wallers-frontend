import { mount } from "cypress/vue";
import HomeAlbum from "../../../src/components/HomeComponents/HomeAlbum.vue";

describe("HomeAlbum.cy.js", function () {
  it("should render", function () {
    mount(HomeAlbum);
    cy.get(".album-container").should("exist");
  });
});
