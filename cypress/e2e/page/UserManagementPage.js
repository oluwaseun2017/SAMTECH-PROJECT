class UserManagementPage {

    openUserManagement() {
        cy.contains("User Management")
            .should("be.visible")
            .click();
    }

    verifyUserManagement() {

        cy.wait(500);

        cy.url().then(url => {
            cy.log(url);
            console.log(url);
        });

    }

    verifyTable() {

        cy.get("table").then(() => {
            cy.log("Table found");
        });

    }
}

export default UserManagementPage;