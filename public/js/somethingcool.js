var index;
var images;
var tvObj;
var tvImg;
var timer;
function init(){
	index = 1;
	images = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg'];
	tvObj = document.getElementById("box");
	tvImg = tvObj.getElementsByTagName("img")[0];
	if(timer){
		clearInterval(timer);
	}else{
		timer = setInterval("changeImg()",1000);
	}
}

function changeImg(){
	tvImg.src="images/"+images[index];
	index++;
	if(index==5){index=0;}
}

/*var context = document.getElementById("canvas").getContext("2d");
var Image_car = new Image();
Image_car.src = "images/car.jpg";
Image_car.onload = function (event) {
    var loadedImage = event.target;
    var sx = 151, sy = 171, sw = 825, sh = 252;
    var dx = 0, dy = 0, dw = 210, dh = 60;
    context.drawImage(loadedImage, sx, sy, sw, sh, dx, dy, dw, dh);
    var move = setInterval(function () {
        dx++;
        if (dx > 320){dx = 0;}
        context.clearRect(0,0,1000,60);
        context.drawImage(Image_car, sx, sy, sw, sh, dx, dy, dw, dh);
    }, 5);
     var button = document.getElementById("button2");
    button.onclick = function(){
        clearInterval(move);
    };
};
*/

window.onload=function(){
	init();	
	document.getElementById("audio1").play();
}

$(document).ready(function() {
    $("#music1").click(function() {
     document.getElementById("audio1").play();
	 document.getElementById("audio2").pause();
	 document.getElementById("audio3").pause();
	 document.getElementById("audio4").pause();
    });
    $("#music2").click(function() {
     document.getElementById("audio2").play();
	 document.getElementById("audio1").pause();
	 document.getElementById("audio3").pause();
	 document.getElementById("audio4").pause();
    });
	$("#music3").click(function() {
     document.getElementById("audio3").play();
	 document.getElementById("audio1").pause();
	 document.getElementById("audio2").pause();
	 document.getElementById("audio4").pause();
    });
	$("#music4").click(function() {
     document.getElementById("audio4").play();
	 document.getElementById("audio1").pause();
	 document.getElementById("audio2").pause();
	 document.getElementById("audio3").pause();
    });
	$("#stop").click(function() {
     document.getElementById("audio1").pause();
	 document.getElementById("audio2").pause();
	 document.getElementById("audio3").pause();
	 document.getElementById("audio4").pause();
    });

});