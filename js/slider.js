var pos=0,totalSlides=document.querySelectorAll("#slider-wrap ul li").length,sliderWidth=window.innerWidth;function slideLeft(){-1==--pos&&(pos=totalSlides-1),$("#slider-wrap ul#slider").css("left",-sliderWidth*pos),pagination()}function slideRight(){++pos==totalSlides&&(pos=0),$("#slider-wrap ul#slider").css("left",-sliderWidth*pos),pagination()}function pagination(){$("#pagination-wrap ul li").removeClass("active"),$("#pagination-wrap ul li:eq("+pos+")").addClass("active")}window.addEventListener("resize",()=>{sliderWidth=window.innerWidth,document.querySelector("#slider-wrap ul#slider").style.width=sliderWidth*totalSlides+"px",document.querySelector("#slider-wrap ul#slider").style.left=-sliderWidth*pos+"px",window.innerWidth<=992&&(document.querySelector(".btns#next").style.right=0,document.querySelector(".btns#previous").style.left=0)}),window.addEventListener("load",()=>{$("#slider-wrap ul#slider").width(sliderWidth*totalSlides),$("#next").click(function(){slideRight()}),$("#previous").click(function(){slideLeft()}),window.innerWidth<=992&&(document.querySelector(".btns#next").style.right=0,document.querySelector(".btns#previous").style.left=0);var e=setInterval(slideRight,3e3);$.each($("#slider-wrap ul li"),function(){var e=$(this).attr("data-color");$(this).css("background",e);var i=document.createElement("li");$("#pagination-wrap ul").append(i)}),pagination(),$("#slider-wrap").hover(function(){$(this).addClass("active"),clearInterval(e)},function(){$(this).removeClass("active"),e=setInterval(slideRight,3e3)})});