
var scrollTo;$('.next').click(function(){var nextSlide;nextSlide=$(this).parent('article').next();return scrollTo(nextSlide);});$('article').height($(window).height());scrollTo=function(el){return $('body').animate({scrollTop:el.offset().top},700,'easeOutBack');};
