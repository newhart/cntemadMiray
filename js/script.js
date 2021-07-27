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



  var swiper = new Swiper(".team-card", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });


/* navbar animation */
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-nav');
const menuMobile = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
}
menu.addEventListener('click', menuMobile);


var modalhidden=document.getElementById('hidden');
var btnshow=document.getElementById('btnshow');
var closebtn=document.getElementsByClassName('closebtn')[0];
var overlay=document.getElementById('overlay');
function showMod(){
  modalhidden.style.display="block";
  overlay.style.display="block";
  
 };
 function hideMod(){
  modalhidden.style.display="none";
  overlay.style.display="none";
 };

btnshow.addEventListener("click", showMod);
closebtn.addEventListener("click", hideMod);
window.addEventListener("click",function(e){
  if(e.target == overlay){
    modalhidden.style.display = "none";
    overlay.style.display="none";
  }
})

