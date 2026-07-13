import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CollectionPage from "../../page/CollectionPage";

const collection = new CollectionPage();

When("User opens Collection Management", () => {
    collection.openCollection();
});

Then("Collection page should display", () => {
    collection.verifyCollection();
});

