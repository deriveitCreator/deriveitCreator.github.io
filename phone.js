var bbColor;
var hColor;
var hbgColor;
var hbColor;
var fontW;
function addTable(bbColor, hColor, hbgColor, hbColor, fontW){
	$("#fTable").remove();
	$("hr").css("border-top-color",hbColor);
	$("body").append('\
	<table id="fTable" style="color:' + hColor + ';background-color:' + bbColor + '">\
		<tr>\
			<td rowspan="3" style="width:150px;text-align:center"><a href="https://deriveit.net"><img alt="click here to go to the main page" id="drvitimg" src="../../pictures/link_logo.png"></a></td>\
			<td class="tdpadding" style="border-color:' + hbColor + ';background-color:' + hbgColor + ';border-top-style:solid">If you found a bug in this website or want to report an error, <a href="../../submitpage1.html?lastPage='+window.location.href+'" style="color:' + hColor +'">click here</a></td>\
		</tr>\
		<tr>\
			<td class="tdpadding" style="border-color:' + hbColor + ';background-color:' + hbgColor + '">If there are any equations for which you want proof for, <a href="../../submitpage2.html?lastPage='+window.location.href+'" style="color:' + hColor + '">click here</a></td>\
		</tr>\
		<tr>\
			<td class="tdpadding" style="border-color:' + hbColor + ';background-color:' + hbgColor + ';border-bottom-style:solid">For any suggestion and ideas, <a href="../../submitpage3.html?lastPage='+window.location.href+'" style="color:' + hColor + '">click here</a></td>\
		</tr>\
	</table>');
	$("#fTable tr").css("font-weight",fontW);
}

function showOthers(){
	if ($('#gray').css('display') == 'none'){
		$('#gray').css('display','block');
	}
	else{
		$('#gray').css('display','none');
	}
	if ($("#helpSquare i").attr("class") != "fa fa-chevron-right"){
		$("#sideButton").animate({"width":"40%"});
		$("#sideButton").css({"border-left-style":"solid"});
		$("#helpSquare").animate({"right":"40%"});
		$("#helpSquare").html("<i class='fa fa-chevron-right'></i>");
	}
	else{
		$("#sideButton").animate({"width":"0%"});
		$("#sideButton").css({"border-left-style":"none"});
		$("#helpSquare").animate({"right":"0"});
		$("#helpSquare").html("<i class='fa fa-chevron-left'></i>");

	}
}

var darkEl
var backgroundColor;
var fontColor;
var headerColor;
var headerBackColor;
var borderColor;
var d;
var color;
var red;
var green;
var blue;
var fontWeight;
function darkmode(){
	d = new Date();
	d.setTime(d.getTime()+1000000000000);
	darkEl = $('#sideButton .setting #selector i');
	if (darkEl.attr('class') == "fa fa-times"){
		darkEl.attr('class','fa fa-check');
		backgroundColor = '#923D00';
		fontColor = '#ee9944';
		headerColor = '#dd8811';
		headerBackColor = '#662200';
		borderColor = '#331100';
		fontWeight = 'normal';
		document.cookie = "brown=yes;expires=" + d.toUTCString() + ";path=/";
		$("p span, p sub").each(function(){
			color = $(this).css('color');
			red = parseInt(color.slice(color.indexOf("(")+1,color.indexOf(",")));
			green = parseInt(color.slice(color.indexOf(' ')+1,color.lastIndexOf(",")));
			blue = parseInt(color.slice(color.lastIndexOf(' ')+1,-1));
			if (red + green + blue != 0){
				if (red < 150){
					$(this).attr("redchanged","yes");
					red += 100;
				}
				if (blue < 150){
					$(this).attr("bluechanged","yes");
					blue += 100;
				}
				$(this).css('color',"rgb("+red+","+green+","+blue+")");
			}
			else{
				$(this).css('color',fontColor);
			}
		})
		$(".pmain").css({'color':fontColor,'text-shadow':'3px 2px 3px #331100'});
		$(".pmain2").css({'color':fontColor,'text-shadow':'3px 2px 3px #331100'});
		$(".subText").css({'color':fontColor,'text-shadow':'3px 2px 3px #331100'});
		$(".notSource").css({'color':fontColor,'text-shadow':'3px 2px 3px #331100'});
		$(".displayimg, .displayimg2, .displayFormula").css("border", borderColor + " 4px solid");
	}
	else{
		darkEl.attr('class',"fa fa-times");
		backgroundColor = 'white';
		fontColor = 'black';
		headerColor = 'black';
		headerBackColor = 'white';
		borderColor = 'black';
		fontWeight = 'normal';
		document.cookie = "brown=no;expires=" + d.toUTCString() + ";path=/";
		$(".pmain").css({'color':fontColor,'text-shadow':'none'});
		$(".pmain2").css({'color':fontColor,'text-shadow':'none'});
		$(".subText").css({'color':fontColor,'text-shadow':'none'});
		$(".notSource").css({'color':fontColor,'text-shadow':'none'});
		$("#fTable tr").css("font-weight","normal");
		$(".displayimg, .displayimg2, .displayFormula").css("border","none");
		$('[redchanged="yes"], [bluechanged="yes"]').each(function(){
			color = $(this).css('color');
			red = parseInt(color.slice(color.indexOf("(")+1,color.indexOf(",")));
			green = parseInt(color.slice(color.indexOf(' ')+1,color.lastIndexOf(",")));
			blue = parseInt(color.slice(color.lastIndexOf(' ')+1,-1));
			if ($(this).attr("redchanged") == "yes"||$(this).attr("bluechanged")=="yes"){
				if ($(this).attr("redchanged")=="yes"){
					$(this).attr("redchanged","no");
					red -= 100;
				}
				if ($(this).attr("bluechanged")=="yes"){
					$(this).attr("bluechanged","no");
					blue -= 100;
				}
				$(this).css('color',"rgb("+red+","+green+","+blue+")");
			}
			else{
				$(this).css('color',fontColor);
			}
		})
	}
	$("ul").css('color',fontColor);
	$("ul a").css('color',fontColor);
	$("h1").css('color',headerColor);
	$("#mainheader2").css({'background-color':headerBackColor,'border-bottom-color':borderColor});
	$("body").css('background-color',backgroundColor);
	$("h3").css('color',headerColor);
	$("#source_format").css('color',headerColor);
	$.when(addTable(backgroundColor, fontColor, headerBackColor, borderColor,fontWeight)).done(function(){
		if (darkEl.attr('class') == "fa fa-times"){
			$("#drvitimg").css("border","none");
			$("#drvitimg").attr("src","../../pictures/link_logo.png");
		}
		else{
			$("#drvitimg").css("border", borderColor + " 3px solid");
			$("#drvitimg").attr("src","../../pictures/link2.png");
		}
	});
}

var headerbColor
var checkId = document.getElementsByTagName("BODY")[0].id;
if (checkId == "body1"){
	$("head").append('<meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png" href="../pictures/logo.png"><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4860967711062471" crossorigin="anonymous"></script>').ready(function(){
		$("p").addClass("plink");
		$(".plink a").css({"color":$("header").css("background-color")});
	});
	headerbColor = $("header").css("border-bottom-color");
	$("h2").css({"color":headerbColor});
	addTable($("body").css("background-color"), $("header").css("color"), $("header").css("background-color"), headerbColor,'normal');
}
else{
	$("head").append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script><script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png" href="../../pictures/logo.png">').ready(function(){
		$("#body2").append("<div id='helpBox'></div>");
		$("#body2").append("<div onclick='showOthers()' id='helpSquare'><i class='fa fa-chevron-left'></i></div>");
		$("#body2").append("<nav id='sideButton'></nav>");
		$('#body2').append("<div id='gray' ontouchstart='showOthers()'></div>")
		$("#sideButton").append('<div class="setting"><div id="text">brown-mode:</div><div id="selector" onclick="darkmode()"><i class="fa fa-times"></i></div></div>'+
								'<div class="topic"><a href="../../algebra/algebra.html"><img class="imginfo" alt="algebra" src="../../pictures/algebra.png"></a></div>'+
								'<div class="topic"><a href="../../geometry/geometry.html"><img class="imginfo" alt="geometry" src="../../pictures/geometry.png"></a></div>'+
								'<div class="topic"><a href="../../dismaths/dismaths.html"><img class="imginfo" alt="discrete mathematics" src="../../pictures/dismaths.png"></a></div>'+
								'<div class="topic"><a href="../../linear_algebra/linear_algebra.html"><img class="imginfo" alt="linear algebra" src="../../pictures/linear_algebra.png"></a></div>'+
								'<div class="topic"><a href="../../trigonometry/trigonometry.html"><img class="imginfo" alt="trigonometry" src="../../pictures/trigonometry.png"></a></div>'+
								'<div class="topic"><a href="../../calculus/calculus.html"><img class="imginfo" alt="calculus" src="../../pictures/calculus.png"></a></div>'+
								'<div class="topic"><a href="../../ps/ps.html"><img class="imginfo" alt="probability and statistics" src="../../pictures/ps.png"></a></div>'+
								'<div class="topic"><a href="../../mechanics/mechanics.html"><img class="imginfo" alt="mechanics" src="../../pictures/mechanics.png"></a></div>'+
								'<div class="topic"><a href="../../astronomy/astronomy.html"><img class="imginfo" alt="astronomy" src="../../pictures/astronomy.png"></a></div>'+
								'<div class="topic"><a href="../../chemistry/chemistry.html"><img class="imginfo" alt="chemistry" src="../../pictures/chemistry.png"></a></div>'+
								'<div class="topic"><a href="../../electricity/electricity.html"><img class="imginfo" alt="electricity" src="../../pictures/em.png"></a></div>'+
								'<div class="topic"><a href="../../biology/biology.html"><img class="imginfo" alt="biology" src="../../pictures/biology.png"></a></div>')
		if((document.cookie != "") &&(document.cookie.slice(document.cookie.indexOf("brown=")+6) == "yes")){
			darkmode()
		}
		else{
			addTable("white", "black", "white", "black",'normal');
		}
		if(document.getElementsByTagName('cite').length){
			$.getJSON("../../citation.json",function(result){
				$('cite').each(function(){
					$(this).html(result[$(this).attr('class')]);
				})
			});
		}
		$('<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4860967711062471"\
		crossorigin="anonymous"></script>\
		<ins class="adsbygoogle"\
			style="display:block; text-align:center;"\
			data-ad-layout="in-article"\
			data-ad-format="rectangle, horizontal"\
			data-ad-client="ca-pub-4860967711062471"\
			data-full-width-responsive="true"\
			data-ad-slot="6823528647"></ins>\
		<script>\
			(adsbygoogle = window.adsbygoogle || []).push({});\
		</script>').insertBefore($("hr")[0]);
	})
}
