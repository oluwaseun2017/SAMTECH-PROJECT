import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TransactionPage from "../../page/TransactionPage";

const transaction = new TransactionPage();

When("User opens Transaction Management", () => {
    transaction.openTransaction();
});

Then("Transaction page should display", () => {
    transaction.verifyTransaction();
});