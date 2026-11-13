$(document).ready(function () {
	
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
	
    $('.js-input').keyup(function () {
        if ($(this).val()) {
            $(this).addClass('not-empty');
        } else {
            $(this).removeClass('not-empty');
        }
    });

		
    $('.openMenu').click(function () {	
        $(".main-logo").addClass("hide");
        $('.menu_page').addClass("show");
		$('#tab-1').addClass('current');
		$('#tab-2, #tab-3').removeClass('current');
		$('.first-tab').addClass('current');
		$('.second-tab, .third-tab').removeClass('current');
		$("#tab-1").show();
        $(".menu-video").css("opacity", "1");
        document.getElementById("menuvideo").currentTime = 0;
        $(".menu-video")[0].play();
    })
    $('#closeMenu').click(function () {		
        $('.menu_page').removeClass("show");
        $(".menu-video").css("opacity", "0");
        setTimeout(function () {
            $(".main-logo").removeClass("hide");
        }, 100);
		$(".productheader").css("display","block");		
    })
    //open tab page
	
	$('.openTab').click(function(){
		$(".main-logo").addClass("hide");
		$('.menu_page').addClass("show");
        $("#tab-1, #tab-2").removeClass('current');// removes the div under tabs
        $("#tab-3").addClass('current');		
		$(".first-tab, .second-tab").removeClass('current'); // removes highlight from "Products"
		$(".third-tab").addClass('current'); // highlights "Get in Touch"
        $("#tab-3").show();		
        $(".menu-video").css("opacity", "0");
        document.getElementById("menuvideo").currentTime = 0;
        $(".menu-video")[0].play();
	})

	
	//for click of submit button
	$('.btn-submit').click(function() {
		$('.thankyou').show();
	})

    // menu tabs

    $('.tab-link').click(function () {
        var tab_id = $(this).attr("data-tab");

        $('ul.tabs li button').removeClass('current');
        $('.tab-content').removeClass('current');
        $('.tab-content').hide();

        $(this).addClass('current');
        $('#' + tab_id).css('display', "block");
        $("#" + tab_id).addClass('current');
    })

    $('.tab-link1').click(function () {
        var tab_id = $(this).attr("data-tab");

        $('ul.tabs-unlined li button').removeClass('current1');
    //    $('.tab-content1').removeClass('current1');

        $(this).addClass('current1');
    //    $('.tab-content1').hide();
        $("#" + tab_id).addClass('current1');
		if(tab_id!="tab-india") {
		$('p.india').css('display','none');
		$('p.india').fadeOut("fast", 'ease-in-out');
		}
		else {
		$('p.india').css('display','block');
		$('p.india').fadeIn("fast", 'ease-in-out');
		}
    })
    // footer tabs
    $('.tab-link2').click(function () {
        var tab_id = $(this).attr("data-tab");

        $('.tabs-container2 ul.tabs-unlined li button').removeClass('current2');
        //$('.tab-content2').removeClass('current2');

        $(this).addClass('current2');
        //$('.tab-content2').hide();
        $("#" + tab_id).addClass('current2');
        $("#" + tab_id).addClass('current1');
		
		if(tab_id!="tab-india2") {
		$('p.india').css('display','none');
		$('p.india').fadeOut("slow", 'ease-in-out');
		}
		else {
		$('p.india').css('display','inline-block');
		$('p.india').fadeIn("slow", 'ease-in-out');
		}
    })

    // add remove menu video
    $('.first-tab').click(function () {
        $(".menu-video").css("opacity", "1").fadeIn(100);
        document.getElementById("menuvideo").currentTime = 0;
        $(".menu-video")[0].play();
    });
    $('.second-tab,.third-tab').click(function () {
        $(".menu-video").css("opacity", "0");
    })

    // collapse
    $('.slidedown_head').click(function () {
        $(this).next('.slidedown_body').slideToggle(900);
        $(this).toggleClass('isOpen');
    });

/*    $('#modal-close-button').click(function () {
        setTimeout(function () {
            $("#nav-4").blur()
        }, 100);
    });

    $('#myModal').click(function () {
        setTimeout(function () {
            $("#nav-4").blur()
        }, 100);
    }); */

    var contents = $(".contents");
    $(window).on("scroll", function (e) {
		behavior: 'smooth';
        var el = contents.filter(function (i, el) {
            return el.getBoundingClientRect().bottom >= parseFloat($(el).css("height"))
        })
            , sectionId = el.prev(".contents").is(contents)
                ? el.prev(".contents").attr("id")
                : contents.eq(-1).attr("id");
        // console.log(sectionId);
		
		if(sectionId == "section1") {
			$('.volant-image').css("transform","scale(0.9)");
		}
		
		if(sectionId == "section11") {
			$(".nspace-image").css("transform","scale(0.9)");			
		}
		
		if(sectionId == "section1t") {
			$(".task-image").css("transform","scale(0.9)");			
		}

        if (sectionId == "test1") {
            $('.white_logo').css("display", "block");
            $('.black_logo').css("display", "none");
            $(".productheader .btn-line-black").css("color","rgba(250,250,250,0.95)");
			$('.productheader').css("background-color","transparent");
        }
        else {
            $('.white_logo').css("display", "none");
            $('.black_logo').css("display", "block");
            $(".productheader .btn-line-black").css("color","#000");
			$('.productheader').css("background-color","rgba(250, 250, 250, 0.95)");
        }
		 
		if ($(window).width() < 992) {
            if (sectionId == "test11" || sectionId == "test1" || sectionId == "section5t") {
                var scroll = $(window).scrollTop();

                if (scroll + 50) {
                    $('.overlay').css("transition","opacity 2s ease-in-out 1s");
                    $('.overlay').css("opacity","0");
                }
                else {
                    $('.overlay').css("background", "#000");
                }
            }

        }
		
		/*
		if ($(window).width() <992) {
			if (sectionId == "section2") {
				var parallax = $(window).scrollTop();
				
				if (parallax + 50) {
					$('.volant-second').css("transform","translateY(-50px)");
				} else {
					$('.volant-second').css("transform","none");					
				}
			}
		}
		*/
        if (sectionId == "section4" || sectionId == "section44" || sectionId == "section5t") {
            var scroll = $(window).scrollTop();
            console.log("actual scroll", scroll);
				$('.overlay').css("transition","opacity 2s ease-in-out 1s");
				$('.overlay').css("opacity","0");
				//$('.do-bold').css("text-shadow","-0.01em -0.01em 0 rgba(0,0,0,.1), 0 -0.01em 0 rgba(0,0,0,.1), 0.01em -0.01em 0 rgba(0,0,0,.1), 0.01em 0 0 rgba(0,0,0,.1), 0.01em 0.01em 0 rgba(0,0,0,.1), 0 0.01em 0 rgba(0,0,0,.1), -0.01em 0.01em 0 rgba(0,0,0,.1");
        }
        else {
            $('.overlay').css("background", "#000");
			//$('.do-bold').css("text-shadow","none");
        }
		
		/*if(sectionId == "section5" || sectionId == "section55") {
			var scroll = $(window).scrollTop();
			console.log("actual scroll", scroll);
				$('.p-tag').css("text-shadow","-0.01em -0.01em 0 rgba(0,0,0,.3), 0 -0.01em 0 rgba(0,0,0,.3), 0.01em -0.01em 0 rgba(0,0,0,.3), 0.01em 0 0 rgba(0,0,0,.3), 0.01em 0.01em 0 rgba(0,0,0,.3), 0 0.01em 0 rgba(0,0,0,.3), -0.01em 0.01em 0 rgba(0,0,0,.3");			
		}
		else {
			$('.p-tag').css("text-shadow","none");
		}
		
		if(sectionId == "chnageClass") {
			var scroll = $(window).scrollTop();
		console.log("actual scroll", scroll);
			$('.do-bold').css("text-shadow","-0.01em -0.01em 0 rgba(0,0,0,.3), 0 -0.01em 0 rgba(0,0,0,.3), 0.01em -0.01em 0 rgba(0,0,0,.3), 0.01em 0 0 rgba(0,0,0,.3), 0.01em 0.01em 0 rgba(0,0,0,.3), 0 0.01em 0 rgba(0,0,0,.3), -0.01em 0.01em 0 rgba(0,0,0,.3");
		}*/
		

/*	

	//for buttons
	$("#vmenubtn").mouseenter(function(){
		$("#vmenuimg").css({"opacity","100%"});
	});
	
	$("#vmenubtn").mouseleave(function(){
		$("#vmenuimg").css("opacity","50%");
	});
	
	$("#nmenubtn").mouseenter(function(){
		$("#nmenuimg").css("opacity","100%");
	});
	
	$("#nmenubtn").mouseleave(function(){
		$("#nmenuimg").css("opacity","50%");
	});
		

*/
	//go to respective tab
	/*
	$('.goTab').click( function(){
		var tab_id = $(this).attr("data-tab");
		
		$('.tabs-container2 ul.tabs-unlined li button').removeClass('current2');
        $('.tab-content2').removeClass('current2');
        $(this).addClass('current2');
        $('.tab-content2').hide();
        $("#" + tab_id).addClass('current2').fadeIn(900);		
		$("#" + tab_id + "2").addClass('current1').fadeIn(900);
	})
*/
	// for icons in carousel
	$('.owl-dot').click(function() {
		var icon_id= $(this).attr("data-icon");
		
		$('.icon-half').removeClass('current3');
		
		$(this).addClass('current3');
		$("#" + icon_id).addClass('current3');
	})
	
	//for click of submit button
	$('.btn-submit').click(function() {
		$('.thankyou').show();
	})

    // menu tabs

    $('.tab-link').click(function () {
        var tab_id = $(this).attr("data-tab");

        $('ul.tabs li button').removeClass('current');
        $('.tab-content').removeClass('current');
        $('.tab-content').hide();

        $(this).addClass('current');
        $("#" + tab_id).css('display',"block");
        $("#" + tab_id).addClass('current');
    })

    $('.tab-link1').click(function () {
        var tab_id = $(this).attr("data-tab");

        $('ul.tabs-unlined li button').removeClass('current1');
    //    $('.tab-content1').removeClass('current1');

        $(this).addClass('current1');
    //    $('.tab-content1').hide();
        $("#" + tab_id).addClass('current1');
		if(tab_id!="tab-india") {
		$('p.india').css('display','none')
		$('p.india').fadeOut("slow", 'ease-in-out');
		}
		else {
		$('p.india').css('display','block')
		$('p.india').fadeIn("slow", 'ease-in-out');
		}
    })
    // footer tabs
    $('.tab-link2').click(function () {
        var tab_id = $(this).attr("data-tab");

        $('.tabs-container2 ul.tabs-unlined li button').removeClass('current2');
        //$('.tab-content2').removeClass('current2');

        $(this).addClass('current2');
        //$('.tab-content2').hide();
        $("#" + tab_id).addClass('current2');
        $("#" + tab_id).addClass('current1');
		
		if(tab_id!="tab-india2") {
		$('p.india').css('display','none')
		$('p.india').fadeOut("slow", 'ease-in-out');
		}
		else {
		$('p.india').css('display','inline-block')
		$('p.india').fadeIn("slow", 'ease-in-out');
		}
    })

    // add remove menu video
    $('.first-tab').click(function () {
        $(".menu-video").css("opacity", "1").fadeIn(100);
        document.getElementById("menuvideo").currentTime = 0;
        $(".menu-video")[0].play();
    });
    $('.second-tab,.third-tab').click(function () {
        $(".menu-video").css("opacity", "0");
    })
    // collapse
//    $('.slidedown_head').click(function () {
//       $(this).next('.slidedown_body').slideToggle(900);
//        $(this).toggleClass('isOpen');
//    });

	//     var scroll = $(window).scrollTop();
    //     var aTop = $('.crafting-volant').height();
    //     console.log(scroll);
    //     if (($(this).scrollTop() >= 1630) && ($(this).scrollTop() <= 2395)) {
    //         $('.white_logo').css("display", "block");
    //         $('.black_logo').css("display", "none");
    //     }
    //     else {
    //         $('.white_logo').css("display", "none");
    //         $('.black_logo').css("display", "block");
    //     }
    // });


	//for scroll at homepage
	/*$(window).on("scroll", function () {		
            if(sectionId == "mainpage-texts") {
			var mainscroll = $(window).scrollTop();
			console.log("actual scroll", mainscroll);
			if(mainscroll>=0){
					$(".main-logo").addClass("hide");
					$('.menu_page').addClass("show");
					$('#tab-1').addClass('current');
					$('#tab-2, #tab-3').removeClass('current');
					$('.first-tab').addClass('current');
					$('.second-tab, .third-tab').removeClass('current');
					$("#tab-1").show();
					$(".menu-video").css("opacity", "1");
					document.getElementById("menuvideo").currentTime = 0;
					$(".menu-video")[0].play();
				   }
			else 	$('.menu_page').removeClass("show");	   
            }
    }).scroll();*/
	
    //scroll to top "refresh"
	
        $(window).onbeforeunload= function(){ 
		if($(window).scrollTo)
        $(window).scrollTop(0);
    }
	
	//for image gallery

    var owl = $(".owl-carousel").owlCarousel({
        autoplay: false,
		animateIn: 'fadeIn',
        /* smartSpeed: 10, /* Speed of Scroll.*/
		touchDrag: false,
		mouseDrag: false,
        loop: true,
        nav: false,
		dots: true,
		singleItem: true,
		dotsContainer: '#icon-carousel',
		navSpeed: 0,
        //navText: [/*"<span aria-label='Previous'><img src='images/thin-left.svg'></span>",*/
        //    "<span aria-label='Next'></span>"], //Change to "<span aria-label='Next'><img src='images/thin-right.svg'></span>" carousel button to show up.
        responsive: {
            0: {
                items: 1,
				dots: true
            },
            600: {
                items: 1,
				dots: true
            },
            1000: {
                items: 1,
				dots: true
            }
        },
		startPosition: randomPosition()
    });
	owl.trigger('to.owl.carousel',0);
	
			 $('.owl-dot').click(function(){owl.trigger('to.owl.carousel', [$(this).index(), 300]);});
			 //Random index generator
			 function randomPosition(){
			 var r_hb = $('#icon-carousel li').length;
			 var randomize = null;
			 
			 
			 randomize=1
			 
			 
			 if (randomize != 0) {
			 return (Math.floor(Math.random()* r_hb));
			 }
			 else { return 0 ;}
			 }
			 //Sort random function
			 function random(owlSelector){
			 owlSelector.children().sort(function(){
			 return Math.round(Math.random()) - 0.5;
			 }).each(function(){
			 $(this).appendTo(owlSelector);
			 });
			 }
		
})

    }).scroll();
	
//for type animation
	$('.second-tab').click(function() {	
		var textWrapper = document.querySelector('.ml11 .letter');
		textWrapper.innerHTML = textWrapper.textContent.replace(/[-A-Za-z0-9!$#%^&*@()_+|~=`{}\[\]:";'<>?,.\/]/g, "<span class='letter'>$&</span>");
		var tl= anime.timeline({	
		easing: "cubicBezier(0.645,0.045,0.355,1)",
		round: 1,
		autoplay: true
		
		})
		.add ({
			targets: '.ml11 .letter',
			opacity: [0, 0],
			delay: 0,
			easing: "easeOutBack"
		});
		tl
		  .add({
			targets: '.ml11 .line',
			scaleY: [0,1],
			opacity: [0.5,1],
			duration: 300,
		  })
		  .add({
			targets: '.ml11 .line',
			translateX: [0, document.querySelector('.ml11 .letter').getBoundingClientRect().width + 10],
			duration: 700,
			delay: 0
		  })
		  .add({
			targets: '.ml11 .letter',
			opacity: [0,1],
			duration: 800,
			offset: '-=775',
			delay: (el, i) => 100 * (i+1),
			easing: "easeOutSine"
		  })
		  .add({
			targets: '.ml11',
			opacity: 1,
			duration: 1000,
			delay: 0
		  });	
		var textWrapper2 = document.querySelector('.ml12 .letter2');
		textWrapper2.innerHTML = textWrapper2.textContent.replace(/[-A-Za-z0-9!$#%^&*@()_+|~=`{}\[\]:";'<>?,.\/]/g, "<span class='letter2'>$&</span>");
		var tl2= anime.timeline({	
		easing: "cubicBezier(0.165,0.84,0.44,1)",
		round: 1
		
		})
		.add ({
			targets: '.ml12 .letter2',
			opacity: [0, 0],
			delay: 0,
			easing: "easeOutBack"
		});
		tl2
		  .add({
			targets: '.ml12 .line2',
			scaleY: [0,1],
			opacity: [0.5,1],
			duration: 300,
		  })
		  .add({
			targets: '.ml12 .line2',
			translateX: [0, document.querySelector('.ml12 .letter2').getBoundingClientRect().width + 10],
			duration: 700,
			delay: 0
		  })
		  .add({
			targets: '.ml12 .letter2',
			opacity: [0,1],
			duration: 800,
			offset: '-=775',
			delay: (el, i) => 100 * (i+1),
			easing: "easeOutSine"
		  })
		  .add({
			targets: '.ml12',
			opacity: 1,
			duration: 1000,
			delay: 0
		  });
		});	




