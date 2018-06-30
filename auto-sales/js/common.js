$(document).ready(function() {
//Анимация кнопок меню
	$('.auth_buttons').click(function() {
		$('.top_links').slideToggle();
	});

	$('.main_menu_button').click(function() {
		$('.main_menu ul').slideToggle();
	})

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".owl-carousel");
	owl.owlCarousel({

		center: true,
		items : 2,
		margin:10,
		nav: true,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		loop: true,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:2
			},            
			960:{
				items:3,
			},
			1200:{
				items:3
			}
		}
	});
	owl.on("mousewheel", ".owl-stage", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("prev.owl");
		} else {
			owl.trigger("next.owl");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("next.owl");
	});
	$(".prev_button").click(function(){
		owl.trigger("prev.owl");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});