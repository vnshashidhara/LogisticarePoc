Feature: Login to Logisticare application

    As a user
    I want to successfully login to Logisticare application
    in order to perform user actions

    Scenario Outline: User successfully login to Logisticare application

        Given Logisticare application is open
        When user clicks on the login button
        And valid <username> and <password> is provided
        And clicks on the signin button
        Then <expectedText> is displayed on the home page
        Examples:
            | username  | password   | expectedText       |
            | testuser1 | Testuser@1 | Welcome to Logisticare |