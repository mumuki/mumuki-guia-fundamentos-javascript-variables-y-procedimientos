describe("versos", function() {
  it("deberia imprimir los versos", function() {
    versosMartinFierro()
    assert.equal(console.toString(), "Aquí me pongo a cantar\nAl compás de la vigüela;\nQue el hombre que lo desvela\nUna pena extraordinaria\n")
  });
  it("deberia retornar 0", function() {
    assert.equal(versosMartinFierro(), 0);
  });

})

