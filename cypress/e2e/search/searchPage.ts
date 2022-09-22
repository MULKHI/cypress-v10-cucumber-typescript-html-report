const URL_HOME = 'http://zero.webappsecurity.com/index.html'
const FIELD_SEARCH = '#searchTerm'

class SearchPage {
    static visit() {
       cy.visit(URL_HOME)
       cy.url().should('include', 'index.html')
    }
    static fillSearch() {
        cy.get(FIELD_SEARCH).type('Online {enter}')
    }
    static fillSearchNotMatch() {
        cy.get(FIELD_SEARCH).type('trading {enter}')
    }
    static ShowSearchResult() {
        cy.get('h2').contains('Search Results:')
        cy.get('li').find('a').should('contain.text', 'Online')
    }
    static ShowSearchResultNotMatch() {
        cy.get('h2').contains('Search Results:')
        cy.get('div[class="top_offset"]').should('contain.text', 'No results were found for the query: trading')
    }
}
export default SearchPage