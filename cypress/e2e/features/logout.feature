Feature: Logout

  Scenario: Logout from the application
    Given User is logged in
    When User logs out
    Then User should be redirected to login page