var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player",{
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerStateChange(event) {
  var ytStatus = event.data;  
  if (ytStatus == YT.PlayerState.ENDED) {
    $(".movie-modal").removeClass("active");
    $("html").css({"overflow-y":"auto"});
  }
}


$(function(){

      $(".play").on("click",function(){
        $(".movie-modal").addClass("active");
        $("#player").attr('src',$(this).data('src'));
        $("html").css({"overflow-y":"hidden"});
        return false;
      });

      $("#close,#overlay").on("click",function(){
        $(".movie-modal").removeClass("active");
        $("html").css({"overflow-y":"auto"});  
        $("#player").attr('src','');
        // player.stopVideo();
      });


});