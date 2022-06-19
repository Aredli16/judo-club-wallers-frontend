import { mount } from "cypress/vue";
import RecentAlbumCard from "../../src/components/RecentAlbumCard.vue";

describe("RecentAlbumCard.cy.js", function () {
  it("should not render without props", function () {
    mount(RecentAlbumCard);
    cy.get(".card").should("not.exist");
  });
  it("should render with props", function () {
    mount(RecentAlbumCard, {
      props: {
        album: {
          title: "Test Album",
          image_preview: "https://via.placeholder.com/150",
          date_posted: "2020-01-01",
        },
      },
    });
    cy.get(".card").should("exist");
    cy.get(".card-title").should("have.text", "Test Album");
    cy.get(".img-fluid").should(
      "have.attr",
      "src",
      "https://via.placeholder.com/150"
    );
    cy.get(".card-text").should("have.text", "2020-01-01");
  });
});
