// $(document).ready(function(){
	
// });
document.querySelector('.menu__burger').addEventListener('click', function (e){
	e.preventDefault();
	
	if(this.classList.contains('active')) {
	   this.classList.remove('active');
	   document.body.classList.remove('lock');
	   document.querySelector('.header__menu').classList.remove('active');
	} else {
	   this.classList.add('active');
	   document.body.classList.add('lock');
	   document.querySelector('.header__menu').classList.add('active');
	}
});
new Swiper ('.process__gallery-inner', {
	pagination: {
	    	el: '.swiper-pagination',
	    	type: 'bullets',
	    	clickable: true,
	    	dynamicBullets: true,
	  	},
	  	keyboard: {
	    	enabled: true,
	    	onlyInViewport: false,
	  	},
	  	autoHeight: true,
	  	grabCursor:true,
		slidesPerView: 1,
		spaceBetween: 10,

	breakpoints: {
		475:{
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 30,
		}
	}
});
new Swiper ('.reviews__slider-inner', {
	pagination: {
	    	el: '.swiper-pagination',
	    	type: 'bullets',
	    	clickable: true,
	    	dynamicBullets: true,
	  	},
	  	keyboard: {
	    	enabled: true,
	    	onlyInViewport: false,
	  	},
	  	autoHeight: true,
	  	grabCursor:true,
		loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
	breakpoints: {
		700:{
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		}
	}
});
new Swiper ('.reviews-gallery__gallery-inner', {
	pagination: {
	    	el: '.swiper-pagination',
	    	type: 'bullets',
	    	clickable: true,
	    	dynamicBullets: true,
	  	},
	  	keyboard: {
	    	enabled: true,
	    	onlyInViewport: false,
	  	},
	  	autoHeight: true,
	  	grabCursor:true,
		slidesPerView: 1,
		spaceBetween: 10,

	breakpoints: {
		475:{
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 30,
		}
	}
});