Feature: Login to Application

    Scenario: login with valid data
        Given A user open loginpage1
        When A user submit login with valid data
        Then A user should see account summary page

    Scenario: login with invalid data
        Given A user open loginpage2
        When A user submit login with invalid data
        Then A user should failed login