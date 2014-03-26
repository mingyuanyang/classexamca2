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
	
	it("Test first number is out of range for add two numbers", function() {

        expect (function() {Calculator.AddTwoNumbers("200000000000", "2")}).toThrow(new Error("First number is out of range"));
    })
	
	it("Test second number is out of range for add two numbers", function() {

        expect (function() {Calculator.AddTwoNumbers("2", "200000000000")}).toThrow(new Error("Second number is out of range"));
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
	
	it("Test first number is out of range for sub", function() {

        expect (function() {Calculator.MinusTwoNumbers("200000000000", "2")}).toThrow(new Error("First number is out of range"));
    })
	
	it("Test second number is out of range for sum", function() {

        expect (function() {Calculator.MinusTwoNumbers("2", "200000000000")}).toThrow(new Error("Second number is out of range"));
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
	
	it("Test first number is out of range for multiple", function() {

        expect (function() {Calculator.MulTwoNumbers("200000000000", "2")}).toThrow(new Error("First number is out of range"));
    })
	
	it("Test second number is out of range for multiple", function() {

        expect (function() {Calculator.MulTwoNumbers("2", "200000000000")}).toThrow(new Error("Second number is out of range"));
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
	
	it("Nothing can be divide by 0", function() {

        expect (function() {Calculator.DivideTwoNumbers("5", "0")}).toThrow(new Error("Can't be divided by 0"));
    })
	
	it("Test first number is out of range for divide", function() {

        expect (function() {Calculator.DivideTwoNumbers("200000000000", "2")}).toThrow(new Error("First number is out of range"));
    })
	
	it("Test second number is out of range for divide", function() {

        expect (function() {Calculator.DivideTwoNumbers("2", "200000000000")}).toThrow(new Error("Second number is out of range"));
    })
	
})
