console.log("testing testing website shift successful");

var link
var name
var position
var endp
var subject
var subjects = ['algebra','astronomy','chemistry','biology','geometry','dismaths','calculus','electricity','trigonometry','mechanics','ps']
function colorcorrect(){
	for (i = 1; i < 9; i ++){
		name = 'menu' + i;
		link = document.getElementById(name).href.substring(15);
		for (j = 0; j < subjects.length; j ++){
			position = link.search(subjects[j]+'/');
			if (position  != -1){
				endp = link.indexOf('/', position);
				subject = link.slice(position, endp);
			}
		}
		change = document.getElementById(name).parentElement;
		if (subject == 'algebra'){
			document.getElementById(name).style.color = '#663300';
			change.style.borderLeftColor = '#663300';
			change.style.backgroundColor = '#FBE39B';
		}
		if (subject == 'astronomy'){
			document.getElementById(name).style.color = '#88AABB';
			change.style.borderLeftColor = '#DD0000';
			change.style.backgroundColor = '#666666';
		}
		if (subject == 'geometry'){
			document.getElementById(name).style.color = 'green';
			change.style.borderLeftColor = 'green';
			change.style.backgroundColor = '#CCFF99';
		}
		if (subject == 'dismaths'){
			document.getElementById(name).style.color = '#FF6600';
			change.style.borderLeftColor = '#FF6600';
			change.style.backgroundColor = '#FFEEAA';
		}
		if (subject == 'calculus'){
			document.getElementById(name).style.color = '#005555';
			change.style.borderLeftColor = '#005555';
			change.style.backgroundColor = '#88DFDF';
		}
		if (subject == 'ps'){
			document.getElementById(name).style.color = '#550055';
			change.style.borderLeftColor = '#550055';
			change.style.backgroundColor = '#EEAADD';
		}
		if (subject == 'chemistry'){
			document.getElementById(name).style.color = '#993366';
			change.style.borderLeftColor = '#993366';
			change.style.backgroundColor = '#FFBBFF';
		}
		if (subject == 'biology'){
			document.getElementById(name).style.color = '#FF6655';
			change.style.borderLeftColor = '#FF6655';
			change.style.backgroundColor = '#FFDD99';
		}
		if (subject == 'trigonometry'){
			document.getElementById(name).style.color = '#000099';
			change.style.borderLeftColor = '#000099';
			change.style.backgroundColor = '#99CCFF';
		}
		if (subject == 'electricity'){
			document.getElementById(name).style.color = '#535353';
			change.style.borderLeftColor = '#535353';
			change.style.backgroundColor = '#F4F4F4';
		}
		if (subject == 'mechanics'){
			document.getElementById(name).style.color = '#600000';
			change.style.borderLeftColor = '#600000';
			change.style.backgroundColor = '#FFEEAA';
		}}
}

function changeImgHeight(){
	$("#images").css("height",$("#images img")[0].offsetHeight);
	$(".changeSlide").css("height",$("header")[0].clientHeight);
}

window.onresize = changeImgHeight;

imgArray = ['<img src="pictures/slideshow1.png">',
			'<img src="pictures/slideshow2.png">',
			'<img src="pictures/slideshow3.png">',
			'<img src="pictures/slideshow4.png">',
			'<img src="pictures/slideshow5.png">']
refArray = ['astronomy/history/geocentric.html',
			'astronomy/history/heliocentric.html',
			'dismaths/factorials,_permutations_and_combinations/factorials_and_permutations.html',
			'chemistry/history/phlogiston_theory.html',
			'geometry/Conic_Sections/the_equivalence_of_the_focus-directrix_definition_and_the_conic_section_definition_of_a_parabola.html']

var slideShowIndex = 1;
var prevIndex = imgArray.length - 1;
var nextSlideVar;
var enableSlide = true;
function changeslide(){
	if (enableSlide == true){
		enableSlide = false;
		$("#images").append(imgArray[slideShowIndex]);
		$("#images").animate({
			scrollLeft: parseInt($("#images").css("width"))
		},500,function(){
			$("#images").attr("href",refArray[slideShowIndex]);
			if (slideShowIndex == imgArray.length-1){
				slideShowIndex = 0;
			}
			else{
				slideShowIndex++;
			}
			if (prevIndex == imgArray.length-1){
				prevIndex = 0;
			}
			else{
				prevIndex++;
			}
			$($("#images img")[0]).remove();
			$("#images")[0].scrollLeft = 0;
			enableSlide = true;
			nextSlideVar = window.setTimeout(changeslide, 4000);
		});
	}
}
function rightSlideNow(){
	clearTimeout(nextSlideVar);
	changeslide();
}
function leftSlideNow(){
	if (enableSlide == true){
		enableSlide = false;
		clearTimeout(nextSlideVar);
		$("#images").prepend(imgArray[prevIndex]);
		$("#images").scrollLeft(parseInt($("#images").css("width")));
		$("#images").animate({
			scrollLeft: 0
		},500,function(){
			$($("#images img")[1]).remove();
			$("#images").attr("href",refArray[prevIndex]);
			if (slideShowIndex == 0){
				slideShowIndex = imgArray.length-1;
			}
			else{
				slideShowIndex--;
			}
			if (prevIndex == 0){
				prevIndex = imgArray.length-1;
			}
			else{
				prevIndex--;
			}
			enableSlide = true;
			nextSlideVar = window.setTimeout(changeslide, 4000);
		});
	}
}

$("#mainPart").hide();

if (window.location.href.indexOf("emailSent") != -1){
	$("#recommended").html('<b>Thank You For Your Submission</b><br/>Make sure to check your email for our reply</span>').css({"font-size":"16px","text-align":"center"});
}

var mouseOutVar;
var SOEl = $("#searchOptions");
function mouseOutSearch(){
	mouseOutVar = window.setTimeout(function(){SOEl.hide()},1500);
}

var topicName;
var dataEl;
var fileName;
var rootFile;
function optionsClicked(event){
	topicName = $(event.target).text();
	$("#pageOptions").empty();
	$("#topicSelect").html('<i class="fa fa-caret-down"></i>'+topicName);
	$("#searchBox").attr({"disabled":false,placeholder:"Search " + topicName + "..."});
	$("#searchBox").val("");
	fileName = $(event.target).attr("value");
	rootFile = fileName.substring(0,fileName.indexOf("/")+1);
	$.get(fileName,function(data){
		for(dataEl of $(data)){
			if($(dataEl).prop("tagName") == "P"){
				$("#pageOptions").append('<div class="poptions"><a href="' + rootFile + $($(dataEl).children("a")[0]).attr("href") + '" target="_blank">' + $($(dataEl).children("a")[0]).text() + '</a></div>');
			}
		}
	},"html");
}

var optionsIndex = 0;
$(".imginfo").each(function(){
	optionsIndex++;
	SOEl.append('<div class="options" id="option' + optionsIndex + '" onclick="optionsClicked(event)" value="' + $($(this).parent("a")).attr("href") + '">'+ this.getAttribute("alt") + '</div>');
});

function searchClicked(){
	if (SOEl.css("display") == "none"){
		SOEl.show();
	}
	else{
		SOEl.hide();
	}
	$("#pageOptions").hide();
}

function whileLoading(){
	if ($("#forline img")[0].complete){
		document.getElementById("continue").disabled = false;
		$("#continue").css("cursor","pointer");
		$("#continue").text("continue");
	}
	else{
		alert("Please make sure that images are enabled in your browser!");
		$("#continue").text("please enable images");
	}
}
window.onload = function(){window.setTimeout(whileLoading,500)};

function imgHover(){
	$("#pageOptions").hide();
	$("#searchBox").blur();
}

var menuCounter = 0;
var poptionIdx;
var searchBoxEl;
var popEl;
var popAvailable;
function afterLoading(){
	document.getElementById("continue").setAttribute("disabled","disabled");
	$("#mainPart").show();
	$("body").css({"overflow-y":"scroll"});
	$("#loading").slideUp(1000,function(){
		$("#body").css({
			"border-top-style":"solid",
			"border-top-color": "#663300",
			"border-width":"5px"
		});
		$("#searchdiv, .changeSlide").animate({opacity:1},800);
	});
	function checkMob(){
		let check = false;
		(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	}
	if(checkMob()){
		$('<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4860967711062471" crossorigin="anonymous"></script><ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="rectangle" data-ad-client="ca-pub-4860967711062471" data-ad-slot="6823528647"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>').insertBefore($($("footer")[0]));
	}
	else{
		$('<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4860967711062471" crossorigin="anonymous"></script><ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="horizontal" data-ad-client="ca-pub-4860967711062471" data-ad-slot="6823528647"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>').insertBefore("#tableadded");
	}
	$("#bline").css({"border-bottom-style":"solid"});
	$("a").attr('target',"_blank")
	$("#tableadded tr td a").each(function(){
		menuCounter += 1;
		$(this).attr({"class":"menu","id":"menu"+menuCounter});
	})
	$("#tableedit tr td a").each(function(){
		menuCounter += 1;
		$(this).attr({"class":"menu","id":"menu"+menuCounter});
	})
	$("#searchSelection").attr({onmouseleave:"mouseOutSearch()",onmouseenter:"clearTimeout(mouseOutVar)"});
	$(document).on("click", function (event) {
		if(event.target.id != 'searchBox'){
			$("#pageOptions").hide();
		}
		if(event.target.id != 'topicSelect'){
			SOEl.hide();
		}
	});
	searchBoxEl = $("#searchBox");
	searchBoxEl.on('focus',function(){
		SOEl.hide();
		if ($("#pageOptions").children().length > 0){
			$("#pageOptions").show();
		}
		else{
			$("#searchBox").attr({placeholder:"Sorry, there are no pages for this topic"});
		}
	});
	searchBoxEl.on('keyup',function(){
		popAvailable = false;
		popEl = $(".poptions");
		for(poptionIdx = 0; poptionIdx < popEl.length;poptionIdx++){
			popElInner = $(popEl[poptionIdx]);
			if ((popElInner.text()).toLowerCase().indexOf(searchBoxEl.val().toLowerCase()) == -1){
				popElInner.hide();
			}
			else{
				popElInner.show();
				popAvailable = true;
			}
		}
		if (popAvailable == false){
			$("#pageOptions").hide();
		}
		else{
			$("#pageOptions").show();
		}
	})
	$(".imginfo").attr({onmouseenter:'imgHover()'});
	changeImgHeight();
	colorcorrect();
	nextSlideVar = window.setTimeout(changeslide, 4000);
}