// Menu
$(function(){
    $open=false;

	function menuMb() {
		$(".menu").slideToggle();
		if($open==false){
			$open=true;
            $('#btn-menu').addClass('is-open');
            $('#btn-menu a').text('CLOSE');
		}else{
			$open=false;
            $('#btn-menu').removeClass('is-open');
            $('#btn-menu a').text('MENU');
		}
	}

	$('#btn-menu').on('click',function() {
		menuMb();
	});

    $('.menu a').on('click',function() {
        menuMb();
	});

});

// Pagetop
$(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#pagetop').fadeIn();
        } else {
            $('#pagetop').fadeOut();
        }

        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        var footHeight = $('footer').innerHeight();

        if ( scrollHeight - scrollPosition <= footHeight ) {
            $('#pagetop').css({
                "position":"absolute",
                "bottom": footHeight + 10
            });
        } else {
            $('#pagetop').css({
                "position":"fixed",
                'bottom': '10px'
            });
        }
    });

    if($('body').hasClass('toppage')){
        $('#pagetop').on('click', function () {
            setTimeout(function(){
                $('#pagetop').fadeOut();    
            },200)

        });
    }else{
        $('#pagetop').on('click', function () {
            $('body,html').animate({
                scrollTop: 0
            }, 200);
            return false;
        });    
    }
    
});

