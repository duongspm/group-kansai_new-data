// Pagetop
$('.pageTop').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 400);
    return false;
});

// Anchorlink
$(function(){
  $('.find-nav a').click(function(){
    $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 400);
    $( $(this).attr('href') ).find('.tit').addClass("open");
    $( $(this).attr('href') ).find('.group-cont').show();
    return
  });
});

// Tab
jQuery(function ($) {
  $(".group-cont").css("display", "none");

  $(".sec-05 ul li .tit").click(function () {    
    // $(".sec-05 ul li .tit").not(this).removeClass("open");
    // $(".sec-05 ul li .tit").not(this).next().slideUp(300);
    $(this).toggleClass("open");    
    $(this).next().slideToggle(300);
  });
});

// Group1 tab
$('#group1 .nav-tab-in a').click(function() {
  $('#group1 .tab').hide();
  $('#group1-tab' + this.id.slice(11)).show();      
  $(this).addClass('active');
  $('#group1 .nav-tab-in a').not(this).removeClass('active'); 
});

// Group1 tab
$('#group5 .nav-tab-in a').click(function() {
  $('#group5 .tab').hide();
  $('#group5-tab' + this.id.slice(11)).show();      
  $(this).addClass('active');
  $('#group5 .nav-tab-in a').not(this).removeClass('active'); 
});

// ---- Change Img PC - SP
$(function(){
    var elem = $(this);
  var imgSrc = $("img", elem).map(function() {
    return $(this).attr("src");
  });
    
  function changeImages() {
    var winWimg = $(window).width();
    for (var i = 0; i < imgSrc.length; i++) {
      var newImgSrc = imgSrc[i].substring(0, imgSrc[i].length - 4),
        getExp = imgSrc[i].slice(-3),
        newImg = newImgSrc + "_sp";
      if (getExp == "jpg") {
        newImg = newImg + "." + getExp;
      } else if (getExp == "gif") {
        newImg = newImg + "." + getExp;
      } else if (getExp == "png") {
        newImg = newImg + "." + getExp;
      }

      if (winWimg <= 767) {
        $("img.img767", elem).each(function() {
          $(this).attr("src", $(this).attr("src").replace(imgSrc[i], newImg));
        });
      } else {
        $("img.img767", elem).each(function() {
          $(this).attr("src", $(this).attr("src").replace(newImg, imgSrc[i]));
        });
      }     
    }
  }
    
  changeImages();
    
  $(window).resize(function() {
    changeImages();
  });
})