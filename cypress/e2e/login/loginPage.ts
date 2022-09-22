const URL_LOGIN = 'http://zero.webappsecurity.com/login.html'
const USERNAME = '#user_login'
const PASSWORD = '#user_password'
const SIGN_IN = 'input[class="btn btn-primary"]'
const LOGOUT = '#logout_link'

class LoginPage {
	static visit() {
		cy.visit(URL_LOGIN)
		cy.url().should('include', 'login.html')
	}
	static fillUsername(username) {
		cy.get(USERNAME).type(username)
	}
	static fillPassword(password) {
		cy.get(PASSWORD).type(password)
	}
	static signIn() {
		cy.get('#user_remember_me').click()
		cy.get(SIGN_IN).click()
	
	}
	static ShowLoginResult() {
		cy.get('ul[class="nav nav-tabs"]').should('be.visible')
		cy.get('#account_summary_tab').should('be.visible')
		cy.get('h2').should('contain.text', 'Cash Accounts')

	}
	static ShowFailedLoginResult() {
		cy.get('h3').should('contain.text', 'Troubles entering the site?')
		cy.get('div[class="alert alert-error"]').should('be.visible').and('contain', 'Login and/or password are wrong.')
	}
}
export default LoginPage
