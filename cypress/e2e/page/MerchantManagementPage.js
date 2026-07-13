class MerchantManagementPage {

    openMerchant() {

        cy.contains("Merchant Mgt.")
            .should("be.visible")
            .click();

        cy.wait(1000);

        cy.contains("Manage Merchants")
            .should("be.visible")
            .click();

        cy.url().then((url) => {
            cy.log(url);
            console.log(url);
        });

    }

    verifyMerchant() {
        cy.url().should("include", "merchant-management");
        cy.contains("Merchant Management").should("be.visible");
    }

}

export default MerchantManagementPage;