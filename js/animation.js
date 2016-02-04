// $(document).on("ready", function(){
// 	$("#headingWrap").hide();
// 	$("#albumIntro").hide();
// 	$("#albumArt").hide();
// 	$("#storeIcons").hide();
// 	$("#bandCampWrapper").hide();
// 	$("#orderMessage").hide();
// 	$("#headingWrap").slideDown(500, function(){
// 		$("#albumIntro").slideDown(500, function(){
// 			$("#albumArt").slideDown(500, function(){
// 				$("#storeIcons").slideDown(function(){
// 					$("#bandCampWrapper").slideDown();
// 					$("#orderMessage").slideDown();
// 				});
// 			});
// 		});
// 	});
// })
$(document).ready(function() {
	$(".albumText").hide();
	$(".albumContainer").hover(function() {
		$(this).find("div.albumText").toggle();
	})
});

$(document).on("ready", function() {
	$("#albumIntro").hide();
	$("#albumArt").hide();
	$("#orderMessage").hide();
	$("#storeIcons").hide();
	$("#bandCampWrapper").hide();
	$("#indexContent #copyrightMessage").hide();
	$("#albumIntro").fadeIn(1000);
	$("#albumArt").fadeIn(1000, function() {
		$("#orderMessage").slideDown(1000, function() {
			$("#storeIcons").slideDown(1000);
			$("#bandCampWrapper").slideDown(1000);
			$("#indexContent #copyrightMessage").slideDown(1000);
		});
	});	
});

$(document).on("ready", function() {
	$("#iframeWrapper").css("visibility", "hidden");
	$("#bandcampWrapper").css("visibility", "hidden");
	$("#iframeWrapper").css("visibility", "visible");
	$("#iframeWrapper").slideDown(1000, function(){
		$("#bandcampWrapper").css("visibility", "visible");
		$("#bandcampWrapper").slideDown(1000);
	});
});