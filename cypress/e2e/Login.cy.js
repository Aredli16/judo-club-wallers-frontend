describe("Firebase Login", () => {
  it("should show error if inputs is empty", () => {
    cy.visit("/login");
    cy.get(".btn-lg").click();
    cy.get("li").should(
      "contain.text",
      "Email: l'adresse email ne peut pas être vide"
    );
    cy.get("li").should(
      "contain.text",
      "Mot de passe: le mot de passe ne peut pas être vide"
    );
  });
  it("should show error if email or password is incorrect", () => {
    cy.visit("/login");
    cy.get("#email").type("test@gmail.com");
    cy.get("#password").type("12345");
    cy.get(".btn-lg").click();
    cy.get("p").should("contain.text", "Email ou mot de passe incorrect");
  });
  it("should redirect if user is connected", () => {
    cy.visit("/login");
    cy.get("#email").type("test@gmail.com");
    cy.get("#password").type("123456");
    cy.get(".btn-lg").click();
    cy.get(".dropdown-toggle").should("contain.text", "Test");
  });
});
