describe("asensorSobrecagado", function() {
  it("asensorSobrecagado(4) con pesoPromedioPersonaEnKilogramos = 70", function() {
    var pesoPromedioPersonaEnKilogramos = 70;
    assert(!asensorSobrecagado(4))
  })
  it("asensorSobrecagado(4) con pesoPromedioPersonaEnKilogramos = 80", function() {
    var pesoPromedioPersonaEnKilogramos = 80;
    assert(asensorSobrecagado(4))
  })
  it("asensorSobrecagado(2) con pesoPromedioPersonaEnKilogramos = 80", function() {
    var pesoPromedioPersonaEnKilogramos = 80;
    assert(!asensorSobrecagado(2))
  })
  it("asensorSobrecagado(5) con pesoPromedioPersonaEnKilogramos = 80", function() {
    var pesoPromedioPersonaEnKilogramos = 80;
    assert(asensorSobrecagado(5))
  })
})