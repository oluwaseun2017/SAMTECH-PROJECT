class SettlementPage {

    openSettlement() {

        cy.contains("Settlement")
            .should("be.visible")
            .click();

        cy.wait(1000);

        cy.contains("All Settlements")
            .should("be.visible")
            .click();

    }

verifySettlement() {

    cy.url().should("include", "settlement-management");

    cy.get("table").should("be.visible");

}
    }

export default SettlementPage;