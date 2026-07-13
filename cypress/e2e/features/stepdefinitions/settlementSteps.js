import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SettlementPage from "../../page/SettlementPage";

const settlement = new SettlementPage();

When("User opens Settlement Management", () => {
    settlement.openSettlement();
});

Then("Settlement page should display", () => {
    settlement.verifySettlement();
});