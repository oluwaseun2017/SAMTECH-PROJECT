Feature: Merchant Management

Scenario: View Merchant List

Given User is logged in

When User opens Merchant Management

Then Merchant list should display

And Search field should exist