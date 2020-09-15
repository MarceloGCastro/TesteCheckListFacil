var email = 'marcelocastro820@gmail.com'
var senha = '131183131183'
var nomeTesteQuadro = 'Teste Quadro'
var nomeTesteLista = 'Teste Lista'
var nomeTesteCartao = 'Teste Cartão'
var descricaoCartao = 'Teste descrição cartão'

context('Descrição do Cartão', () => {
  beforeEach(() => {
    cy.visit('https://trello.com/login')
    cy.get('input[id="user"]').type(email)
    cy.get('div[id="password-entry"]').type(senha)
    cy.get('input[id="login"]').click()
    cy.contains('Quadros Pessoais')
    cy.get('button[aria-label="Criar quadro ou time"]').click()
    cy.get('button[data-test-id="header-create-board-button"]').click()
    cy.get('button[data-test-id="create-board-submit-button"]').should('be.disabled')
    cy.get('input[data-test-id="create-board-title-input"]').type(nomeTesteQuadro)
    cy.get('button[data-test-id="create-board-submit-button"]').click()
    cy.contains(nomeTesteQuadro)
    cy.get('a[title="Feche o menu do quadro."]').click()
    cy.contains('Adicionar uma lista').click()
    cy.get('input[placeholder="Insira o título da lista..."]').type(nomeTesteLista)
    cy.get('input[value="Adicionar Lista"]').click()
    cy.contains(nomeTesteLista);
  })

  it('Descrever Cartão', () => {
    cy.get('a[class="open-card-composer js-open-card-composer"]').click()
    cy.get('textarea[class="list-card-composer-textarea js-card-title"]').type(nomeTesteCartao)
    cy.get('input[value="Adicionar Cartão"]').click()
    cy.contains(nomeTesteCartao).click()
    cy.contains('Adicionar ao cartão')
    cy.get('textarea[placeholder="Adicione uma descrição mais detalhada..."]').type(descricaoCartao)
    cy.get('input[class="primary confirm mod-submit-edit js-save-edit"]').click()
    cy.get('a[class="icon-md icon-close dialog-close-button js-close-window"]').click()
  })
})