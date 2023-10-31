// fixed header

navbar = document.querySelector(".header");
navbarMenu = document.querySelector(".navbar");
window.addEventListener("scroll", function(){
  
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if(scrollHeight > navHeight){
    navbarMenu.classList.add('header-fixed')
  } else {
    navbarMenu.classList.remove('header-fixed')
  }
})
/* scroll section active link */
const sections = document.querySelectorAll("section[id]");
window.addEventListener('scroll', function (){
  const scrollY = window.pageYOffset;
  
  sections.forEach(e => {
    const  sectionHight = e.offsetHeight
    const  sectionTop = e.offsetTop - 50;
    sectionId = e.getAttribute('id');
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHight){
      document.querySelector(".navbar-nav a[href*=" + sectionId + "]").classList.add("active")
    }else{
      document.querySelector(".navbar-nav a[href*=" + sectionId + "]").classList.remove("active")
    }
  })
})