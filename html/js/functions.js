

 //Window Loaded Handler
  $(window).load(function() {'use strict';
	$(".loader").fadeOut("slow");
  });
  
  
  
   


jQuery(function($) {'use strict';


  // ======================================================
       //Toggle to open banner form
  // ======================================================
  
  // $(".form-containert").hide();
    $(".icon-chevron-thin-down").hide();
    $(".btn-slide").on('click', function(){
		 $(this).toggleClass('active') 
		 $(this).find(".icon-chevron-thin-up, .icon-chevron-thin-down").toggle();
            $(".form-container").slideToggle({
		direction:"up"
		},300);
            
    });
	 

  // ======================================================
     //DropDown handler
  // ======================================================	  
	
	 //For Nav Menu Toggle Transition 
		$('.nav-icon').on('click', function () {
			 return $(this).toggleClass('open');
		}.call(this));
	
	  $(".navbar-default .navbar-nav li.dropdown").on('click', function() {
			if ($(window).width() < 979) {
				$(this).next('.dropdown-menu').show();
				$(this).next.toggleClass('open'); 
			}
	  });
			  
	  $(".navbar-default .navbar-nav li.dropdown").hover(function () {
			if ($(window).width() >= 979) {
				  $(this).find('.dropdown-menu').first().stop(true, true).slideToggle(500);
				  $(this).toggleClass('open');
			}
	  }, function () {
			if ($(window).width() >= 979) {
				$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
				  $(this).removeClass('open');
			}
	  });
	  
	  
	  
	  
	  
	// ========================================================================= 
	//	Back to Top
	// ========================================================================= 
	 
	if ($('#back-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-top').addClass('show');
            } else {
                $('#back-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}


	 
	
	 // ======================================================
	 // Sliders
	 // ======================================================
	 //Services & Specialist
	 $("#service-slider , #specialist-slider").owlCarousel({
      autoPlay: false,
      items : 2,
		pagination : false,
		navigationText :["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		navigation : true,
		itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2],
      itemsTablet : [768,2],
 
   });
	
	//  Blog Page
	$("#blog-slider").owlCarousel({
      autoPlay:false,
      singleItem:true,
		pagination : false,
		navigationText :["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		navigation : true,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2],
		itemsMobile : [480,1],
 
   });
	
	//Our Specialist On About
	$("#our-specialist , #news-slider").owlCarousel({
      autoPlay:4000,
      items :3,
		pagination : false,
		navigationText :["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		navigation : true,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2]
 
   });
	
    //Fading Testinomial content
    $("#testinomial-slider").owlCarousel({
      autoPlay: 3000,
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
		transitionStyle : "fade"
  });
  
  
   
  
  // ======================================================
         //FAQ's Accordions
  // ======================================================
 
		$(".items > li > a").on('click', function(e) {
		  e.preventDefault();
		  var $this = $(this);
		  if ($this.hasClass("expanded")) {
			 $this.removeClass("expanded");
		  } 
		  else {
		  $(".items a.expanded").removeClass("expanded");
		  $this.addClass("expanded");
		  $(".sub-items").filter(":visible").slideUp("normal");
		}
		  $this.parent().children("ul").stop(true, true).slideToggle("normal");
		});
  
  	 
		
		// ====================================================== 
	        // tabbed content On Sidebar 
	  // ======================================================
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").on('click', function() {
		  $(".tab_content").hide();
		  var activeTab = $(this).attr("rel"); 
		  $("#"+activeTab).fadeIn();		
		  
		  $("ul.tabs li").removeClass("active");
		  $(this).addClass("active");

		  $(".tab_drawer_heading").removeClass("d_active");
		  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	 
	/* if in drawer mode on Mobile Version*/
	$(".tab_drawer_heading").on('click', function() {
       $(".tab_content").hide();
       var d_activeTab = $(this).attr("rel"); 
       $("#"+d_activeTab).fadeIn(1200);
	  
	    $(".tab_drawer_heading").removeClass("d_active");
       $(this).addClass("d_active");
	  
	    $("ul.tabs li").removeClass("active");
	    $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	 
	 
	 
	// ======================================================
	  //Filter Mix gallery
   // ======================================================
	 $(".zerogrid").mixItUp();



	 // ======================================================
	      //Popup 	
	 // ======================================================
	  $(".fancybox").fancybox({
		  openEffect : 'elastic',
		  openSpeed  : 650,
		  closeEffect : 'fade',
		  closeClick : true,
	  });
	  
	  // video popoup
	  $(".video").fancybox({
		fitToView	: true,
		autoSize	: true,
		closeClick	: false,
	});
	
   
   // ======================================================
    //For choose date on form field
  // ======================================================	 
	 $('#datetimepicker').datetimepicker({
		format: "dd MM yyyy"
	  });
	 
	
	// ======================================================
	    //Maps (Contact Page)
	// ======================================================
	  $("#map").geolocate({
		 lat: "#lat3",
		 lng: "#lng3",
		 address: ["#address3"]
	  });
  
	 $("#map2").geolocate({
		 lat: "#lat2",
		 lng: "#lng2",
		 address: ["#address2"]
	  });
   
     
	
	 
	
	
	
	
}); 

