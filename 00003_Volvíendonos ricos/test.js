describe("", function() {
  it("el aumentarFortuna duplica variable global pesosEnMiBilletera", function () {
    pesosEnMiBilletera = 100;
    aumentarFortuna();
    assert.equal(pesosEnMiBilletera, 200);
  });

  it("el aumentarFortuna se puede llamar múltiples veces", function () {
    pesosEnMiBilletera = 30;
    aumentarFortuna();
    aumentarFortuna();
    aumentarFortuna();
    assert.equal(pesosEnMiBilletera, 240);
  });

})