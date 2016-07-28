$(function(){
    $('.menu-btn').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('open');
        $('.menu').toggleClass('open');
    });
    if($('.line').length){
    // $('.line').typed({
    //     strings: ["I need a website, where do I begin?"],
    //     typeSpeed: 10,
    //     showCursor: false
    // });
   setTimeout(function() 
	{
	  	$('.hero').addClass('show')
	    //do something special
	}, 4000);
    setTimeout(function() {
        $('.split').addClass('open');
        // $('.nav').addClass('open');
    }, 2000); 
    setTimeout(function() {
        $('.split').addClass('opening');
        // $('.nav').addClass('open');
    }, 3000); 
    setTimeout(function() {
        $('.line').hide();
        //do something special
    }, 2000);
    setTimeout(function() {
        $('section').show();
        //do something special
    }, 1000);
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
    });
    var vid = document.getElementById("bgvid");

    function vidFade() {
      vid.classList.add("stopfade");
    }

    vid.addEventListener('ended', function(){
        vid.pause();
        vidFade();
    }); 
    $('section').show();

    }
    
});

