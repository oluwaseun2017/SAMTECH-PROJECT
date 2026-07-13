import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LogoutPage from "../../page/LogoutPage";

const logout = new LogoutPage();

When("User logs out", () => {
    logout.logout();
});

Then("User should be redirected to login page", () => {
    logout.verifyLogout();
});