import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import UserManagementPage from "../../page/UserManagementPage";

const user = new UserManagementPage();

When("User clicks User Management", () => {
    user.openUserManagement();
});

Then("User Management page should display", () => {
    user.verifyUserManagement();
});

Then("User table should display", () => {
    user.verifyTable();
});