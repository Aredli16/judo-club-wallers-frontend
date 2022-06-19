import { mount } from "cypress/vue";
import RecentAlbum from "../../src/components/RecentAlbum.vue";

describe("RecentAlbum.cy.js", function () {
  it("should render", function () {
    mount(RecentAlbum);
    cy.get(".album-container").should("exist");
  });
});
