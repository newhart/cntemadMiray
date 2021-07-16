// initialize swiper pagination to the slide card on activity section

var swiper = new Swiper('.swiper-container',{
	autoPlay: true,
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	pagination:{
		el: '.swiper-pagination',
		clickable: true,
	},
});

console.log(swiper)

