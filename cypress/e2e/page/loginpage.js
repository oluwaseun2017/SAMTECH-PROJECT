class LoginPage {

    visit() {
        cy.visit("https://admin.proxima.ng/");
    }

    enterEmail(email) {
        cy.get("#email").should("be.visible").clear().type(email);
    }

    enterPassword(password) {
        cy.get("#password").should("be.visible").clear().type(password);
    }

    clickLogin() {
        cy.get('.ant-form > .justify-center').should('be.visible').click();
    }

    verifyDashboard() {
    // Wait for the login redirect
    cy.url({ timeout: 30000 }).should("not.include", "login");

    // Wait until the page is fully loaded
    cy.get("body", { timeout: 30000 }).should("be.visible");

    // Verify dashboard text
    cy.contains("Dashboard", { timeout: 30000 }).should("be.visible");
}
}

export default LoginPage;