describe('pigLatin', function() {
  it("puts ''-ay' at the end of a word", function() {
    expect(pigLatin("apple")).to.equal("apple-ay");
  });

  it("transposes initial consonants to the end of the word", function() {
    expect(pigLatin("pears")).to.equal("earsp-ay");
  });

  it("transposes -u with the consonant -q to the end of the word", function(){
    expect(pigLatin("quilt")).to.equal("iltqu-ay");
  });

});
