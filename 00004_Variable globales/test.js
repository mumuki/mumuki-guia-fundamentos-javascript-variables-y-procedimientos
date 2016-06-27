describe("", function() {
  it("ascensorSobrecargado(4) con pesoPromedioPersonaEnKilogramos = 70", function() {
    pesoPromedioPersonaEnKilogramos = 70;
    assert(!ascensorSobrecargado(4))
  })
  it("ascensorSobrecargado(4) con pesoPromedioPersonaEnKilogramos = 80", function() {
    pesoPromedioPersonaEnKilogramos = 80;
    assert(ascensorSobrecargado(4))
  })
  it("asensorSobrecagado(2) con pesoPromedioPersonaEnKilogramos = 80", function() {
    pesoPromedioPersonaEnKilogramos = 80;
    assert(!ascensorSobrecargado(2))
  })
  it("ascensorSobrecargado(5) con pesoPromedioPersonaEnKilogramos = 80", function() {
    pesoPromedioPersonaEnKilogramos = 80;
    assert(ascensorSobrecargado(5))
  })
})