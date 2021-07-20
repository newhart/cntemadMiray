// initialize swiper pagination to the slide card on activity section
console.log(document.querySelector('.swiper-container'))

var swiper = new Swiper('.swiper-container',{
	slidesPerView:2,
	spaceBetween: 50,
	centerSlides: true,
	grabCursor: true,
	loop: true,
	pagination:{
		el: '.swiper-pagination',
		clickable: true,
	},
});



