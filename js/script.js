
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