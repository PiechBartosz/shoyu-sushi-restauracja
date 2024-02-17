const navBtn = document.querySelector(".burger-btn");
const navMobile = document.querySelector(".nav-mobile");
const navItem = document.querySelectorAll(".nav-mobile__item");
const logo = document.querySelector(".nav-mobile__logo");
// console.log(navItem);
const body = document.body;

function showMenu() {
	navMobile.classList.toggle("nav-mobile--active");
	blockScroll();
	logo.addEventListener("click", () => {
		navMobile.classList.remove("nav-mobile--active");
	});
	navItem.forEach((item) => {
		item.addEventListener("click", () => {
			navMobile.classList.remove("nav-mobile--active");
			blockScroll();
		});
	});
	navhandlean();
}

const navhandlean = () => {
	let delaytime = 0;
	navItem.forEach((item) => {
		item.classList.toggle("nav-items-animation");
		item.style.animationDelay = "." + delaytime + "s";
		delaytime++;
	});
};
function blockScroll() {
	if (navMobile.classList.contains("nav-mobile--active")) {
		body.classList.add("bodyScroll");
	} else {
		body.classList.remove("bodyScroll");
	}
}

navBtn.addEventListener("click", showMenu);

const items = document.querySelectorAll(".gallery__item img");
const popup = document.querySelector(".popup");
const popupclose = document.querySelector(".popup__close");
const popupimg = document.querySelector(".popup__img");
const rightArrow = document.querySelector(".popup__arrow--right");
const leftArrow = document.querySelector(".popup__arrow--left");

let nextIndex;

function showImg() {
	if (nextIndex === items.length - 1) {
		nextIndex = 0;
	} else {
		nextIndex++;
	}

	popupimg.src = items[nextIndex].src;
}

const showPrevImg = () => {
	if (nextIndex === 0) {
		nextIndex = items.length - 1;
	} else {
		nextIndex--;
	}

	popupimg.src = items[nextIndex].src;
};

const closePopup = () => {
	popup.classList.add("hidden");
};

items.forEach((item, index) =>
	item.addEventListener("click", (e) => {
		popup.classList.remove("hidden");
		popupimg.src = e.target.src;
		nextIndex = index;
	})
);

popupclose.addEventListener("click", closePopup);

rightArrow.addEventListener("click", showImg);

leftArrow.addEventListener("click", showPrevImg);

document.addEventListener("keydown", (e) => {
	if (!popup.classList.contains("hidden")) {
		if (e.key === "ArrowRight") {
			showImg();
		} else if (e.key === "ArrowLeft") {
			showPrevImg();
		} else if (e.key === "Escape") {
			closePopup();
		}
	}
});

popup.addEventListener("click", (e) => {
	if (e.target === popup) {
		closePopup();
	}
});
