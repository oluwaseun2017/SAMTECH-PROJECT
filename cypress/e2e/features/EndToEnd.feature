Feature: End-to-End Admin Flow

Scenario: Verify all modules

Given User is logged in

When User views Dashboard
Then Dashboard should load successfully

When User clicks User Management
Then User Management page should display

When User opens Merchant Management
Then Merchant page should display

When User opens Transaction Management
Then Transaction page should display

When User opens Collection Management
Then Collection page should display

When User opens Settlement Management
Then Settlement page should display

When User logs out
Then User should be redirected to login page