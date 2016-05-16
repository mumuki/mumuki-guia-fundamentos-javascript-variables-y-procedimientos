describe("elefantesEquilibristas", () => {
  it("elefantesEquilibristas(3)", () => {
    assert.equal(elefantesEquilibristas(3), "3 elefantes se balanceaban");
  })
  it("elefantesEquilibristas(30)", () => {
    assert.equal(elefantesEquilibristas(30), "30 elefantes se balanceaban");
  })
  it("elefantesEquilibristas(4356)", () => {
    assert.equal(elefantesEquilibristas(4356), "4356 elefantes se balanceaban");
  })
  it("elefantesEquilibristas(128)", () => {
    assert.equal(elefantesEquilibristas(128), "128 elefantes se balanceaban");
  })
});


