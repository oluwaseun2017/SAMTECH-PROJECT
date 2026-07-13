class TransactionPage {

    openTransaction() {

        cy.contains("Transaction Mgt.")
            .should("be.visible")
            .click();

        cy.wait(1000);

        cy.contains("Transaction")
            .should("be.visible")
            .click();
    }

    verifyTransaction() {

        cy.url().should("include", "transaction");
    }

    verifyTable() {

        cy.get("table").should("be.visible");
    }

}

export default TransactionPage;