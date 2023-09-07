describe("Formulaire d'inscription", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  it("peut être soumis avec succès", () => {
    cy.get("#firstName").type("John");
    cy.get("#lastName").type("Doe");
    cy.get("#email").type("johnDoe@aol.com");
    cy.get("#password").type("MotDePasse");
    cy.get("#phone").type("0656789802");
    cy.get("#DateOfBirth").type("28-01-1879");
    cy.get("button").click();
  });

  it("affiche une indication visuelle en cas de soumission sans email valide", () => {
    cy.get("#firstName").type("John");
    cy.get("#lastName").type("Doe");
    cy.get("#email").type("votre-emailexample.com");
    cy.get("#password").type("votremot-depasse");
    cy.get("#phone").type("0656789802");
    cy.get("#DateOfBirth").type("28-01-1879");
    cy.get("button").click();

    cy.get("#email:invalid").should("exist");
  });

  it("affiche une erreur en cas de soumission de mot de passe invalide", () => {
    cy.get("#firstName").type("John");
    cy.get("#lastName").type("Doe");
    cy.get("#email").type("votre-email@example.com");
    cy.get("#password").type("1234567890");
    cy.get("#phone").type("0656789802");
    cy.get("#DateOfBirth").type("28-01-1879");
    cy.get("button").click();

    cy.contains("enter a valid password").should("be.visible");
  });
});
