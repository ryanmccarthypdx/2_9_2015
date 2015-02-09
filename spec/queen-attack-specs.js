describe('queenAttack', function() {
  it("returns false by default", function() {
    expect(queenAttack([0,0], [1,3])).to.equal(false);
  });

  it("returns true if rook horizontal attack", function() {
    expect(queenAttack([0,0], [0,4])).to.equal(true);
  });

  it("returns true if rook vertical attack", function() {
    expect(queenAttack([0,0], [4,0])).to.equal(true);
  });

  it("returns true for diagonal attacks", function() {
    expect(queenAttack([0,0], [4,4])).to.equal(true)
    expect(queenAttack([4,4], [3,3])).to.equal(true)
    expect(queenAttack([5,5], [4,6])).to.equal(true)
    expect(queenAttack([4,6], [5,5])).to.equal(true)
  });

});
