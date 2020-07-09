Feature: Validate A Quick Quote process

  As a user
  I want to get a quick quote

  Scenario: Verify that a user can get a quote without signing in
    Given a user is on the home page with a filled in car registration number "GK60VBG"
    And  and gets a quick quote with miles "1000"
    When the user fills the quick quote form with years of claims "5" age "40" postcode "E152FY" renewal month "March"
    And slides the car to park
    Then verify user gets a quick quote





