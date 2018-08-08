(function () {
	var body = document.body,
		startX = 50,
		startY = 50,
		w = document.documentElement.offsetWidth,
		h = document.documentElement.offsetHeight;

	body.addEventListener('mousemove', function (evt) {
		var posX = Math.round(evt.clientX / w * startX)
		var posY = Math.round(evt.clientY / h * startY)
		body.style.backgroundPosition = posX + 'px ' + posY + 'px'
	})
})()

var amountScrolled = 500;

$(window).scroll(function () {
	if ($(window).scrollTop() > amountScrolled) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});

$('a.back-to-top').click(function () {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});
