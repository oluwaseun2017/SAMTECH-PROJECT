import { Given } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../page/loginpage";

const login = new LoginPage();

Given("User is logged in", () => {
    login.visit();
    login.enterEmail("ayanloyesegun+9@gmail.com");
    login.enterPassword("Password@@1");
    login.clickLogin();
    login.verifyDashboard();
});