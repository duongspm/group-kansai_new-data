$(window).on('load resize', function() {
    var tag = document.createElement('script')
    tag.src = "https://www.youtube.com/iframe_api"
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var ytPlayer, ytId
    
    if (window.innerWidth >= 768) {
        ytId = "qxRDMRWs7rw";
    }else{
        ytId = "akKKTdAVIFw";
    }

    function onYouTubeIframeAPIReady() {
        ytPlayer = new YT.Player('ytplayer', {
            videoId: ytId,
            playerVars: {
                'rel': 0, 
                'autoplay': 1,
                'playsinline': 1,
                'mute': 1,
                'controls': 0,
                'modestbranding': 1,
                'iv_load_policy' : 3,            
                'disablekb': 1,
                'wmode': 'transparent',
                'hd1080': 1,
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });    
    }
    
    function onPlayerReady(event) {
        event.target.mute();
        event.target.playVideo();
        event.target.setPlaybackQuality('hd1080');
    }

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
            $('.mv-img').fadeIn(1000);
            $('.mv-video').fadeOut(0);
            
            $('.mv-skip').hide();
            $('.mv-replay').show();
        }
    }
    
    setTimeout(function(){
        onYouTubeIframeAPIReady();
    }, 1000);
    
    setTimeout(function(){
        $('.mv-video').addClass('is-load');
    }, 2000);

    $('.mv-skip').on('click',function(){
        $(this).hide();
        $('.mv-replay').show();
                
        $('.mv-img').fadeIn(1000);
        $('.mv-video').fadeOut(0);
        
        ytPlayer.pauseVideo();
        ytPlayer.seekTo(0);        
    });
    
    $('.mv-replay').on('click',function(){
        $(this).hide();
        $('.mv-skip').show();
        
        $('.mv-video').fadeIn(1000);
        $('.mv-img').fadeOut(0);
        
        ytPlayer.seekTo(0);
        ytPlayer.mute();
        ytPlayer.playVideo();
    });
});