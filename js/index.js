var Color = net.brehaut.Color;
/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}
/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getUrlVars(url) {
	var hash;
	var myJson = {};
	var hashes = url.slice(url.indexOf('?') + 1).split('&');
	for (var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split('=');
		myJson[hash[0]] = hash[1];
// If you want to get in native datatypes
// myJson[hash[0]] = JSON.parse(hash[1]);
	}
	return myJson;
}
function shiftHueShades(cx) {
	var sl = []
	         for (var i =15; i <= 360; i+=15) {
		sl.push(cx.shiftHue(i))
	}
	return sl;
}
function setHueShades(cx) {
	var sl = []
	         for (var i =0; i <= 360; i+=15) {
		sl.push(cx.setHue(i))
	}
	return sl;
}
function LtoDShades(cx) {
	var sl = []
	         for (var i = 20; i <= 80; i+=6) {
		sl.push(cx.setLightness(i/100))
	}
	return sl;
}
var inDevelopment = true;
function cl(argument) {
	if (inDevelopment)
		console.log(argument);
}
var lastColor;
function rz(col){
	cl(col)
	if (col) {
		// var c = Color(col);
		if (typeof col == "string"){
			var csize = col.length-1;
			cl(csize)
			if ( csize == 6 || csize ==3 ){
				var c = Color(col)
				document.getElementById("colorv").value = c.toString().replace("#","");
			}
			else{
				c = lastColor;
				cl("else")
			}
		}else{
			var c = col;
			document.getElementById("colorv").value = c.toString().replace("#","");
		}
		cl("if");
	}
	else{
		cl("else");
		var c = Color({hue: getRandomInt(1,360), saturation: getRandomInt(10,100), lightness: getRandomInt(35,90)/100}).toHSV();
		document.getElementById("colorv").value = c.toString().replace("#","");
	}
	cl(c.getLuminance());
	var v = document.getElementById("bodys").style.backgroundColor = c;
// var arr = [
// shiftHueShades(c),LtoDShades(c),setHueShades(c),
// c.complementaryScheme(),c.splitComplementaryScheme(),
// c.splitComplementaryCWScheme(),c.splitComplementaryCCWScheme(),
// c.triadicScheme(),c.clashScheme(),c.tetradicScheme(),c.fourToneCWScheme(),c.fourToneCCWScheme(),
// c.fiveToneAScheme(),c.fiveToneBScheme(),c.fiveToneCScheme(),c.fiveToneDScheme(),c.fiveToneEScheme(),
// c.sixToneCWScheme(),c.sixToneCCWScheme(),c.neutralScheme(),c.analogousScheme()
// ];
// var name = ["shiftHueShades","LtoDShades","setHueShades",
// "complementaryScheme","splitComplementaryScheme",
// "splitComplementaryCWScheme","splitComplementaryCCWScheme",
// "triadicScheme","clashScheme","tetradicScheme","fourToneCWScheme","fourToneCCWScheme","fiveToneAScheme",
// "fiveToneBScheme","fiveToneCScheme","fiveToneDScheme","fiveToneEScheme",
// "sixToneCWScheme","sixToneCCWScheme","neutralScheme","analogousScheme"
// ];
	var arr = [shiftHueShades(c),LtoDShades(c)];
	var names = ["shiftHueShades","LtoDShades"];
	var ih = ""
	         for (var i =0; i < arr.length; i++) {
// ih+='<h2 class="TagsColor">'+names[i]+'</h2>'
		ih+="<br/><br/>"
		     for (var j = 0; j < arr[i].length; j++) {
			ih+='<div style="background-color:'+arr[i][j].toHSV()+'" class="smallCD" onclick="rz(Color(this.style.backgroundColor))"></div>';
		}
	}
	var id01 = document.getElementById("01");
	id01.innerHTML = ih;
	if (c.getLuminance() > 0.5)
		w3.addStyle(".TagsColor","color","rgba(0,0,0,0.7)")
	else
		w3.addStyle(".TagsColor","color","rgba(255,255,255,0.7)")
	document.head.querySelector('meta[name="theme-color"]').content = c
	lastColor = c;
}

var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}





cl(document);
var fo = getUrlVars(decodeURI(window.location.href));
cl(fo);
rz();
var slideI;
var slideD = 500;
function slideFun(Bval) {
	if (Bval) {
		openFullscreen()
		slideI = setInterval(function() {
			if (document.getElementById("slideshow").checked) {
// w3.addStyle("body","transition-duration",slideD-200);
				rz()
			}
		},slideD);
	}
	else{
		if (slideI){
			clearInterval(slideI);
			closeFullscreen();
		}
	}
}