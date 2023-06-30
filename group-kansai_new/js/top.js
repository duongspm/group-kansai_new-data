// floating bnr
$(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.floating-banner').addClass('is-show');
        } else {
            $('.floating-banner').removeClass('is-show');
        }
    });

    const el = document.querySelector(".banner-close");
    el.addEventListener("click", (e) => {
        e.target.parentElement.style.display="none";
    });
});

// Accordion Tab
$(function(){
    $('a').removeClass('typesquare_option');
    
    var spaceTab;
    if (window.matchMedia('(max-width: 767px)').matches) {
        spaceTab = 200;
    } else {
        spaceTab = 0;
    }

    $('.point-slider').slick({
        autoplay: false,
        fade: false,
        dots: true,
        speed: 1000,
        autoplaySpeed: 6000 
    });
    
    $('.tab-more.is-more').on('click',function(){
        $('.tab-more').not($(this)).parent().find('.tab-more.is-more').show();
        $('.tab-more').not($(this)).parent().find('.tab-more.is-close').hide();
        $('.tab-more').not($(this)).parent().find('.tab-hide').removeClass('is-show');
        $('.tab-more').not($(this)).parent().find('.point-slider').slick('slickPause');
        
        $(this).hide();
        $(this).parent().find('.tab-more.is-close').show();

        $(this).parent().find('.tab-hide').addClass('is-show');

        var offset = $(this).parent().offset().top - $('header').outerHeight();
        $(window).scrollTop( offset + spaceTab );

        $(this).parent().find('.tab-hide').find('.point-slider').slick('slickPlay');
    });

    $('.tab-more.is-close').on('click',function(){
        $(this).hide();
        $(this).parent().find('.tab-more.is-more').show();

        $(this).parent().find('.tab-hide').removeClass('is-show');
        $(this).parent().find('.tab-hide').find('.point-slider').slick('slickPause');
        
        var offset = $(this).parent().offset().top - $('header').outerHeight();
        $(window).scrollTop( offset );
    });
        
    $('a[class*="nav-"]').on('click', function() {
        $('.tab-more.is-more').show();
        $('.tab-more.is-close').hide();
        $('.tab-hide').removeClass('is-show');
        $('.point-slider').slick('slickPause');
        
        var navClass = $(this).attr('class').slice(4);
        $('#' + navClass).find('.tab-more.is-more').hide();
        $('#' + navClass).find('.tab-more.is-close').show();
        $('#' + navClass).find('.tab-hide').addClass('is-show');
        $('#' + navClass).find('.tab-hide').find('.point-slider').slick('slickPlay');
    });
    
    setTimeout(function(){
        var url = window.location.href;
        var hashUrl = url.substring(url.indexOf('#')+1);
        if(hashUrl.length > 1){
        //if(hashUrl == "p-build" || hashUrl == "p-lend" || hashUrl == "p-borrow"){
            var hashClass = hashUrl.slice(2);

            $('#' + hashClass).find('.tab-more.is-more').hide();
            $('#' + hashClass).find('.tab-more.is-close').show();
            $('#' + hashClass).find('.tab-hide').addClass('is-show');
            $('#' + hashClass).find('.tab-hide').find('.point-slider').slick('slickPlay');
        }
    },300);
});

// Modal Map
$(function(){
    var overlay = $("<div class='modalMap-overlay'></div>");
        $("body").append(overlay);

    $('[rel*=js-modalMap]').on('click',function(){
        $(".modalMap-overlay").fadeIn(200);
        var href = $(this).attr('href');
        $(href).fadeIn(250);
    });

    function closeModal(){
        $(".modalMap-overlay").fadeOut(200);
        $('.modalMap-wrap').fadeOut(250);
    }

    $('.modalMap-close').on('click', function(){
        closeModal();
    });

    $('.modalMap-overlay').on('click', function(){
        closeModal();
    });
});

// Modal Movie
$(function(){
    $(".movie-play").on("click",function(){
        $(".modalMovie").show();
        $("#player").attr('src',$(this).data('src'));
        $("html").css({"overflow-y":"hidden"});
        return false;
    });

    $(".modalMovie-close,.modalMovie-overlay").on("click",function(){
        $(".modalMovie").hide();
        $("html").css({"overflow-y":"auto"});
        $("#player").attr('src','');
    });
});