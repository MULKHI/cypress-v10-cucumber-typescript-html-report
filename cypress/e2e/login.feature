Feature: Login to Application

    Background:
        Given A user open login page
    Scenario: login with valid data
        When A user submit login with valid data
        Then A user should see account summary page

    Scenario: login with invalid data
        When A user submit login with invalid data
        Then A user should failed login
