// burger menu
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let headingItems = document.querySelector('.heading-items');
let navigationLink = document.querySelectorAll('.navigation-link')

// появляется меню при нажатии на бургер
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	headingItems.classList.toggle('active');
})

// убираем меню при нажатии на ссылки меню
for (let i = 0; i < navigationLink.length; i++) {
	navigationLink [i].addEventListener('click', function() {
         menu.classList.remove('active');
         menuBtn.classList.remove('active');
		 headingItems.classList.remove('active');
     });
}

// убираем меню при нажатии вне меню
document.addEventListener("click", function(event) {
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
		headingItems.classList.remove('active');
    }
});

