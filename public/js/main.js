window._skel_config = {
			prefix: 'css/style',
			preloadStyleSheets: true,
			resetCSS: true,
			boxModel: 'border',
			grid: { gutters: 30 },
			breakpoints: {
				wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
				narrow: { range: '481-1199', containers: 960 },
				mobile: { range: '-480', containers: 'fluid', lockViewport: true, grid: { collapse: true } }
			}
		}
		
$(document).ready(function() {
    
	$("#add").click(function() {
        var firstnumber = $("#firstnumber").val();
        var secondnumber = $("#secondnumber").val();


        if ((firstnumber.length == 0) || (secondnumber.length == 0)) {
            alert("Please input TWO numbers to calculate");
        }
       
        else {
            $("#result").html("<h1>The result is </h1>" + Calculator.AddTwoNumbers(firstnumber,secondnumber));
        }
    });
	
	$("#minus").click(function() {
        var firstnumber = $("#firstnumber").val();
        var secondnumber = $("#secondnumber").val();


        if ((firstnumber.length == 0) || (secondnumber.length == 0)) {
            alert("Please input TWO numbers to calculate");
        }
       
        else {
            $("#result").html("<h1>The result is </h1>" + Calculator.MinusTwoNumbers(firstnumber,secondnumber));
        }
    });
	
	$("#mul").click(function() {
        var firstnumber = $("#firstnumber").val();
        var secondnumber = $("#secondnumber").val();


        if ((firstnumber.length == 0) || (secondnumber.length == 0)) {
            alert("Please input TWO numbers to calculate");
        }
       
        else {
            $("#result").html("<h1>The result is </h1>" + Calculator.MulTwoNumbers(firstnumber,secondnumber));
        }
    });
	
	$("#divide").click(function() {
        var firstnumber = $("#firstnumber").val();
        var secondnumber = $("#secondnumber").val();


        if ((firstnumber.length == 0) || (secondnumber.length == 0)) {
            alert("Please input TWO numbers to calculate");
        }
       
        else {
            $("#result").html("<h1>The result is </h1>" + Calculator.DivideTwoNumbers(firstnumber,secondnumber));
        }
    });
	
	$("#clearinput").click(function() {
        $("#firstnumber").val('');
        $("#secondnumber").val('');
		$("#result").text('Result will display here !');
		
    });

});		