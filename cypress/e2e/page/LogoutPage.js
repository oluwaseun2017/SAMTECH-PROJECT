class LogoutPage {

   logout() {
    cy.get(".w-fit.flex.cursor-pointer").click();
    cy.contains("Logout").click();
}

    verifyLogout() {
    cy.url().should("eq", "https://admin.proxima.ng/");
    cy.get("#email").should("be.visible");
}

}

export default LogoutPage;