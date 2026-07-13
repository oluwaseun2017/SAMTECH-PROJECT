class CollectionPage {

    openCollection() {
        cy.contains("Collection").click();
    }

    verifyCollection() {
        cy.wait(500);

        cy.url().then(url => {
            cy.log(url);
            console.log(url);
        });
    }

}

export default CollectionPage;