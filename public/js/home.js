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