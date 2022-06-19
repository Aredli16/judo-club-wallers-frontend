import { mount } from "cypress/vue";
import LargeAlbumCard from "../../src/components/LargeAlbumCard.vue";

describe("LargeAlbumCard.cy.js", () => {
  it("should not render without props", () => {
    mount(LargeAlbumCard);
    cy.get(".large-album-card").should("not.exist");
  });
  it("should render with props", function () {
    mount(LargeAlbumCard, {
      props: {
        album: {
          title: "test",
          image_preview: "test image",
          date_posted: "test author",
        },
      },
    });
    cy.get(".card").should("exist");
    cy.get(".card-title").should("exist").and("have.text", "test");
    cy.get(".card-text ").should("exist").and("have.text", "test author");
    cy.get(".card-img-top")
      .should("exist")
      .and("have.attr", "src", "test image");
  });
});
