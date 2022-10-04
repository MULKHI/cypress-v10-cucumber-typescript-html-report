/// <reference types="cypress" />
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from './loginPage'

/// Login with valid data
Given('A user open login page', () => {
	LoginPage.visit()
})

When('A user submit login with valid data', () => {
	LoginPage.fillUsername('username')
	LoginPage.fillPassword('password')
	LoginPage.signIn()
})

Then('A user should see account summary page', () => {
	LoginPage.ShowLoginResult()
})


/// Login with invalid data
Given('A user open login page', () => {
	LoginPage.visit()
})

When('A user submit login with invalid data', () => {
	LoginPage.fillUsername('invalid username')
	LoginPage.fillPassword('invalid password')
	LoginPage.signIn()
})

Then('A user should failed login', () => {
	LoginPage.ShowFailedLoginResult()
})
