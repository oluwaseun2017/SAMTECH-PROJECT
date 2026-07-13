class DashboardPage {

    verifyDashboard() {
        cy.url().should("include", "dashboard");
        cy.contains("Dashboard").should("be.visible");
    }

    verifyCards() {
        cy.contains("Total Terminals").should("be.visible");
        cy.contains("Total Merchants").should("be.visible");
        cy.contains("Total Agents").should("be.visible");
        cy.contains("Total Transaction Value").should("be.visible");
    }

    verifySidebar() {
        cy.contains("Overview").should("be.visible");
        cy.contains("User Management").should("be.visible");
        cy.contains("Merchant Mgt.").should("be.visible");
        cy.contains("Transaction Mgt.").should("be.visible");
    }

}

export default DashboardPage;