class MerchantManagementPage {

    openMerchant() {

    cy.contains("p", "Merchant Mgt.")
        .parent()
        .click();

    cy.contains("div", "Manage Merchants", { timeout: 10000 })
        .should("be.visible")
        .click({ force: true });

    cy.url({ timeout: 15000 })
        .should("include", "merchant-management");

}

   verifyMerchant() {

        cy.url({ timeout: 15000 })
            .should("include", "merchant-management");

        cy.get("input[placeholder*='Search']")
            .should("be.visible");

    }

}

export default MerchantManagementPage;