import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../page/loginpage";

const login = new LoginPage();

Given("User launches the application", () => {
    login.visit();
});

When("User enters valid email", () => {
   login.enterEmail(Cypress.env("email"));
});

When("User enters valid password", () => {
    login.enterPassword(Cypress.env("password"));
});

When("User clicks Login button", () => {
    login.clickLogin();
});

Then("Dashboard should be displayed", () => {
    login.verifyDashboard();
});