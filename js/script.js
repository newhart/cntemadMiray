
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

var modalhidden=document.getElementById('hidden');
var btnshow=document.getElementById('btnshow');
var btnhide=document.getElementById('btnhide');
function showMod(){
  modalhidden.style.display="block";
  btnhide.style.display="block";
  btnshow.style.display="none";
  
 };
 function hideMod(){
  modalhidden.style.display="none";
  btnshow.style.display="block";
  btnhide.style.display="none";
  
 };
btnshow.addEventListener("click", showMod);
btnhide.addEventListener("click", hideMod);