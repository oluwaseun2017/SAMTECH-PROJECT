import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import MerchantManagementPage from "../../page/MerchantManagementPage";

const merchant = new MerchantManagementPage();

When("User opens Merchant Management", () => {
    merchant.openMerchant();
});

Then("Merchant page should display", () => {
    merchant.verifyMerchant();
});

Then("Search field should exist", () => {
    cy.get("input").should("exist");
});

