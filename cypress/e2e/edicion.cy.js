describe('Debe validar qeu se puede editar', () => {
  it('Informacion existente', function () {
    cy.request("GET", "http://localhost:3000/employees/1").then((response) => {
      expect(response.body.first_name).to.eq("test");
    })
  })

  it('Editar informacion', function () {
    cy.request({
      method: "PATCH",
      url: "http://localhost:3000/employees/1",
      body: {
        first_name: "Juanito"
      }
    }).then((response) => {
      expect(response.body.first_name).to.eq("Juanito");
    })
  })

})