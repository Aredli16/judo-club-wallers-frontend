describe("Firebase default register", () => {
  it("should show error if inputs are empty", () => {
    cy.visit("/register");
    cy.get("button").click();
    cy.get("li").should("contain.text", "Nom: le nom ne peut pas être vide");
    cy.get("li").should(
      "contain.text",
      "Prénom: le prénom ne peut pas être vide"
    );
    cy.get("li").should(
      "contain.text",
      "Nom d'utilisateur: le nom d'utilisateur ne peut pas être vide"
    );
    cy.get("li").should(
      "contain.text",
      "Email: l'adresse email ne peut pas être vide"
    );
    cy.get("li").should(
      "contain.text",
      "Mot de passe: le mot de passe ne peut pas être vide"
    );
  });
  it("should show error if email is incorrect", () => {
    cy.visit("/register");
    cy.get("#email").type("fakeEmail");
    cy.get("button").click();
    cy.get("li").should(
      "contain.text",
      "E-mail: Veuillez renseignez un email correct."
    );
  });
  it("should show error if password length is less than 6", () => {
    cy.visit("/register");
    cy.get("#password").type("12345");
    cy.get("button").click();
    cy.get("li").should(
      "contain.text",
      "Mot de passe: la taille du mot de passe doit être supérieur à 6 caractères"
    );
  });
  it("should show error if password and passwordConfirm are different", () => {
    cy.visit("/register");
    cy.get("#password").type("12345");
    cy.get("#password-confirm").type("1234");
    cy.get("button").click();
    cy.get("li").should(
      "contain.text",
      "Mot de passe: les mots de passes ne correspondent pas"
    );
  });
  it("should show error if email is always use", () => {
    cy.visit("/register");
    cy.get("#lastname").type("test");
    cy.get("#firstname").type("test");
    cy.get("#username").type("test");
    cy.get("#email").type("test@gmail.com");
    cy.get("#password").type("123456");
    cy.get("#password-confirm").type("123456");
    cy.get("button").click();
    cy.get("p").should(
      "contain.text",
      "L'adresse email est déjà utilisée par un autre compte"
    );
  });
});
