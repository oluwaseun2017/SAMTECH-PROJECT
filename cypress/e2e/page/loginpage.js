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
        // cy.url({ timeout: 15000 }).should("include", "dashboard");
        cy.contains("Dashboard").should("be.visible");
    }

}

export default LoginPage;