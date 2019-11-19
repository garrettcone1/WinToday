
const navSlider = () => {
	const mobileMenu = document.querySelector(".mobile-menu");
	const nav = document.querySelector(".navbar");
	const navLinks = document.querySelectorAll(".nav-link");

	mobileMenu.addEventListener("click", () => {
		// Toggle Nav
		nav.classList.toggle("nav-active");
		// Animate Links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
			}
		});
		// Mobile Menu Animation
		mobileMenu.classList.toggle("toggle");
	});
}
navSlider();

var TIMEOUT = 6000;
var interval = setInterval(handleNext, TIMEOUT);
 
function handleNext() {
  var radios = $("input[class*='slide-radio']");
  var activeRadio = $('input[class*="slide-radio"]:checked');
  var currentIndex = activeRadio.index();
  var radiosLength = radios.length;
 
  radios.attr('checked', false);
 
  if (currentIndex >= radiosLength - 1) {
    radios.first().attr('checked', true);
  } else {
    activeRadio.next('input[class*="slide-radio"]') .attr('checked', true);
  }
}