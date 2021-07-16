// initialize swiper pagination to the slide card on activity section
console.log(document.querySelector('.swiper-container'))

var swiper = new Swiper('.swiper-container',{
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	pagination:{
		el: '.swiper-pagination',
		clickable: true,
	},
});

console.log(swiper)

