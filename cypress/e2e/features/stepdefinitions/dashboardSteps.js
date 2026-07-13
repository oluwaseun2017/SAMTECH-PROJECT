import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import DashboardPage from "../../page/DashboardPage";

const dashboard = new DashboardPage();

When("User views Dashboard", () => {
    dashboard.verifyDashboard();
});

Then("Dashboard should load successfully", () => {
    dashboard.verifyDashboard();
});

Then("Dashboard cards should be visible", () => {
    dashboard.verifyCards();
});

Then("Sidebar should be visible", () => {
    dashboard.verifySidebar();
});