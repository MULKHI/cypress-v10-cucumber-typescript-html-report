Feature: Search data in application

    User want to Search data in homepage
    
    Background:
        Given A user open home page
    Scenario: Search suitable data
        When A user enter data in fill Search
        Then A user will get feedback from the result

    #User search results do not match
    Scenario: Search data that does not match
        When A user enter data in fill Search with random
        Then A user will get feedback from the result do not match
