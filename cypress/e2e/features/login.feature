Feature: Login

Scenario: Successful Login

Given User launches the application

When User enters valid email

And User enters valid password

And User clicks Login button

Then Dashboard should be displayed
