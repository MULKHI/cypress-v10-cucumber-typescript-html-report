Feature: Search data in application

    User want to Search data in homepage
    Scenario: Search suitable data
        Given A user open homepage1
        When A user enter data in fill Search
        Then A user will get feedback from the result

    #User search results do not match
    Scenario: Search data that does not match
        Given A user open homepage2
        When A user enter data in fill Search with random
        Then A user will get feedback from the result do not match