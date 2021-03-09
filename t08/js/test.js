describe("Correct cases", function() {
    it("12)()(())(()", function() {
      assert.equal(checkBrackets("12)()(())4(()"), 2);
    });
    it("((())", function() {
        assert.equal(checkBrackets("((())"), 1);
    });
    it("((())))))", function() {
        assert.equal(checkBrackets("((())))))"), 3);
    });
    it("()", function() {
        assert.equal(checkBrackets("()"), 0);
    });
    it("(()", function() {
        assert.equal(checkBrackets("(()"), 1);
    });
    it(")(()))", function() {
        assert.equal(checkBrackets(")(()))"), 2);
    });
    it("(123123))", function() {
        assert.equal(checkBrackets("(123123))"), 1);
    });
    it("1(", function() {
        assert.equal(checkBrackets("1("), 1);
    });
    it(")(((", function() {
        assert.equal(checkBrackets(")((("), 4);
    });
    it("12)()(", function() {
        assert.equal(checkBrackets("12)()("), 2);
    });

    describe("Incorrect cases", function() {
        it("12", function() {
            assert.equal(checkBrackets("12"), -1);
        });
        it("lol", function() {
            assert.equal(checkBrackets("lol"), -1);
        });
        it(undefined, function() {
            assert.equal(checkBrackets(undefined), -1);
        });
        it(null, function() {
            assert.equal(checkBrackets(null), -1);
        });
        it("string = \"\"", function() {
            assert.equal(checkBrackets(""), -1);
        });
    });
});

