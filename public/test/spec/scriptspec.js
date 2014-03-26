describe ("My Calculator -- Jasmine test", function() {
    // test add	
	it("5+6 is 11", function() {
        expect (Calculator.AddTwoNumbers(5,6)).toBe(11);

    })
	
	 it("7 + string should be an error", function() {

        expect (function() {Calculator.AddTwoNumbers(7,"xyz")}).toThrow(new Error("Not a number"));
    })
	
	 it("string + 5 should be an error", function() {

        expect (function() {Calculator.AddTwoNumbers("xyz", 5)}).toThrow(new Error("Not a number"));
    })
	
	 it("string + string should be an error", function() {

        expect (function() {Calculator.AddTwoNumbers("xyz", "abc")}).toThrow(new Error("Not a number"));
    })
	
	// test minus	
	it("5-6 is -1", function() {
        expect (Calculator.MinusTwoNumbers(5,6)).toBe(-1);

    })
	
	 it("7 - string should be an error", function() {

        expect (function() {Calculator.MinusTwoNumbers(7,"xyz")}).toThrow(new Error("Not a number"));
    })
	
	 it("string - 5 should be an error", function() {

        expect (function() {Calculator.MinusTwoNumbers("xyz", 5)}).toThrow(new Error("Not a number"));
    })
	
	 it("string - string should be an error", function() {

        expect (function() {Calculator.MinusTwoNumbers("xyz", "abc")}).toThrow(new Error("Not a number"));
    })
	
	// test mul	
	it("5*6 is 30", function() {
        expect (Calculator.MulTwoNumbers(5,6)).toBe(30);

    })
	
	 it("7 * string should be an error", function() {

        expect (function() {Calculator.MulTwoNumbers(7,"xyz")}).toThrow(new Error("Not a number"));
    })
	
	 it("string * 5 should be an error", function() {

        expect (function() {Calculator.MulTwoNumbers("xyz", 5)}).toThrow(new Error("Not a number"));
    })
	
	 it("string * string should be an error", function() {

        expect (function() {Calculator.MulTwoNumbers("xyz", "abc")}).toThrow(new Error("Not a number"));
    })
	
	// test divide	
	it("30/5 is 6", function() {
        expect (Calculator.DivideTwoNumbers(30,5)).toBe(6);

    })
	
	 it("7 / string should be an error", function() {

        expect (function() {Calculator.DivideTwoNumbers(7,"xyz")}).toThrow(new Error("Not a number"));
    })
	
	 it("string / 5 should be an error", function() {

        expect (function() {Calculator.DivideTwoNumbers("xyz", 5)}).toThrow(new Error("Not a number"));
    })
	
	 it("string / string should be an error", function() {

        expect (function() {Calculator.DivideTwoNumbers("xyz", "abc")}).toThrow(new Error("Not a number"));
    })
})
