/// <reference types="cypress" />
//fungsi diatas adalah untuk memunculkan auto-complete dari cypressnya
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import SearchPage from './searchPage'

Given('A user open homepage1', () => {
	SearchPage.visit()
})

When('A user enter data in fill Search', () => {
	SearchPage.fillSearch()
})

Then('A user will get feedback from the result', () => {
	SearchPage.ShowSearchResult()
})

/// User search results do not match
Given('A user open homepage2', () => {
	SearchPage.visit()
})

When('A user enter data in fill Search with random', () => {
	SearchPage.fillSearchNotMatch()
})

Then('A user will get feedback from the result do not match', () => {
	SearchPage.ShowSearchResultNotMatch()
})