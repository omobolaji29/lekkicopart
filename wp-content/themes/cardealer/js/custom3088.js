/*
Template: Car Dealer - Automotive Solution, Car Dealership Responsive WordPress Theme
Author: potenzaglobalsolutions.com
Design and Developed by: potenzaglobalsolutions.com
*/

/*================================================
[  Table of contents  ]
================================================
:: window load functions
	:: Goole captcha inti
	:: Lazyload
	:: Preloader
	:: owl-carousel
	:: Shuffle
:: Menu Height
:: Document ready functions
	:: Search
	:: login
	:: Tooltip
	:: Masonry
	:: Magnific popup
	:: YouTube
	:: Vimeo
	:: Photoswipe popup
	:: Accordion
	:: Categories Show/Hide Sub Items
	:: Audio Video
	:: Newsletter mailchimp
	:: Car Inquiry Form [ CarDetail Page ]
	:: Make An Offer Form [ CarDetail Page ]
	:: Schedule Test Drive Form [ CarDetail Page ]
	:: Car EMAIL TO A FRIEND Form [ CarDetail Page ]
	:: Financial Form [ CarDetail Page ]
	:: Social share
	:: Coming soon
	:: Slick slider
	:: Tabs
	:: Space Shortcode
	:: Newsletter shortcode
	:: Multi tab shortcode
	:: Code For Cart Toggle
	:: Counter
	:: Compare
	:: For header background video [ theme options ]
	:: mega menu
	:: back-to-top
:: Functions
	:: counter
	:: placeholder
	:: Visual Composer RTL Resize Issue
	:: Compare
	:: YouTube, Vimeo
	:: Sticky Kit
	:: Print
======================================
[ End table content ]
======================================*/
( function( $ ) {
	var recaptcha1;
	var recaptcha2;
	var recaptcha3;
	var recaptcha4;
	var recaptcha5;
	var recaptcha6;
	jQuery(window).load(function() {
		/********************
		:: Goole captcha inti
		********************/
		if (typeof goole_captcha_api_obj !== "undefined") {
			//Render the recaptcha1 on the element with ID "recaptcha1"
			if( document.getElementById("recaptcha1") ){
				recaptcha1 = grecaptcha.render('recaptcha1', {
					'sitekey' : goole_captcha_api_obj.google_captcha_site_key, //Replace this with your Site key
					'theme' : 'light'
				});
			}
			if( document.getElementById("recaptcha2") ){
				//Render the recaptcha2 on the element with ID "recaptcha2"
				recaptcha2 = grecaptcha.render('recaptcha2', {
					'sitekey' : goole_captcha_api_obj.google_captcha_site_key, //Replace this with your Site key
					'theme' : 'light'
				});
			}
			if( document.getElementById("recaptcha3") ){
				recaptcha3 = grecaptcha.render('recaptcha3', {
					'sitekey' : goole_captcha_api_obj.google_captcha_site_key, //Replace this with your Site key
					'theme' : 'light'
				});
			}
			if( document.getElementById("recaptcha4") ){
				recaptcha4 = grecaptcha.render('recaptcha4', {
					'sitekey' : goole_captcha_api_obj.google_captcha_site_key, //Replace this with your Site key
					'theme' : 'light'
				});
			}
			if( document.getElementById("recaptcha5") ){
				recaptcha5 = grecaptcha.render('recaptcha5', {
					'sitekey' : goole_captcha_api_obj.google_captcha_site_key, //Replace this with your Site key
					'theme' : 'light'
				});
			}
			if( document.getElementById("recaptcha6") ){
				// Inquiry Widget
				recaptcha6 = grecaptcha.render('recaptcha6', {
					'sitekey' : goole_captcha_api_obj.google_captcha_site_key, //Replace this with your Site key
					'theme' : 'light'
				});
			}
		}

		if ( $( '.pgs-popup-content' ).length > 0 ) {
			$( '.pgs-popup-content' ).on( 'shown.bs.modal', function(e) {
				$( window ).trigger( 'resize' );
				cardealer_owl();
			});
		}

		/* ---------------------------------------------
		 Lazyload
		 --------------------------------------------- */
		cardealer_lazyload();

		/*********************
		:: Preloader
		*********************/
		if( typeof cardealer_options_js == 'undefined' ) {
			jQuery("#load").fadeOut();
			jQuery('#loading').delay(0).fadeOut('slow');
		}

		/*************************
		:: owl-carousel
		*************************/
		var blog_post_carousel = jQuery('.blog-post-carousel');
		blog_post_carousel.each(function () {
			var $this = jQuery(this),
			$lazyload = ($this.attr('data-lazyload')) ? $this.data('lazyload') : false;
			jQuery(this).owlCarousel({
				items:1,
				rtl:(jQuery( "body" ).hasClass( "rtl" )) ? true : false,
				loop:true,
				autoplay:true,
				autoplayTimeout:2000,
				smartSpeed:1000,
				autoplayHoverPause:true,
				dots:false,
				nav:true,
				lazyLoad : $lazyload,
				navText:[
					"<i class='fas fa-angle-left'></i>",
					"<i class='fas fa-angle-right'></i>"
				]
			});
		});
		jQuery('.blog-related-posts-carousel').owlCarousel({
			rtl:(jQuery( "body" ).hasClass( "rtl" )) ? true : false,
			items:3,
			margin:5,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				768:{
					items:3
				},
				1300:{
					items:3
				}
			},
			autoplay:true,
			autoplayTimeout:2000,
			autoplayHoverPause:true,
			dots:false,
			autoHeight:false,
			nav:true,
			navText:[
				"<i class='fas fa-angle-left'></i>",
				"<i class='fas fa-angle-right'></i>"
			]
		});
		jQuery('.cardealer-featured-box-carousel').owlCarousel({
			rtl:(jQuery( "body" ).hasClass( "rtl" )) ? true : false,
			items:3,
			margin:5,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				992:{
					items:2
				},
				993:{
					items:3
				}
			},
			autoplay:true,
			autoplayTimeout:2000,
			autoplayHoverPause:true,
			dots:true,
			autoHeight:false,
			nav:false,
		});

		cardealer_owl();

		// set same height for related-vehical car-carousel items
		var setRelatedVehicleMinHeight = function(minheight) {
			jQuery('.owl-carousel.related-vehicle').each(function(i,e){
				var oldminheight = minheight;
				jQuery(e).find('.car-content').each(function(i,e){
					minheight = jQuery(e).height() > minheight ? jQuery(e).height() : minheight;
				});
				jQuery(e).find('.car-content').css("min-height",minheight + "px");
				minheight = oldminheight;
			});
		};

		setTimeout(function(){
			setMinHeight(0);
			setRelatedVehicleMinHeight(0);
		}, 300 );

		/*********************************
		:: Multi tab shortcode
		**********************************/

		cardealer_isotope();
	});

	/*******************
	:: Menu Height
	*******************/
	jQuery( window ).bind( 'load resize', function(e) {
		if ( !jQuery('#header').hasClass( 'logo-center' ) ) {
			var logoHeight = jQuery('.menu-logo').outerHeight();
			jQuery( '.mega-menu .menu-inner' ).css({ 'height': logoHeight });
		}
	});

	jQuery(document).ready(function($) {
		var oldheight  = jQuery('.menu-inner').outerHeight();
		var logoHeight = jQuery('.mega-menu .menu-logo .site-logo').height() + 66;
		jQuery( document ).on( 'scroll', function() {
			if ( jQuery( '.mega-menu' ).hasClass( 'desktopTopFixed' ) ) {
				var logoHeight = jQuery( '.mega-menu.desktopTopFixed .menu-logo .sticky-logo' ).height() + 40;
				jQuery('.mega-menu .menu-inner').css({ 'height' : logoHeight });
			} else {
				jQuery('.mega-menu .menu-inner').css({ 'height' : oldheight });
			}

			clearTimeout( $.data( this, 'scrollTimer' ));
			$.data( this, 'scrollTimer', setTimeout(function() {
				if ( ! jQuery( '.mega-menu' ).hasClass('desktopTopFixed') ) {
					jQuery('.mega-menu .menu-inner').css({ 'height' : oldheight });
				}
			}, 400 ));
		});

		// Vehicle Detail Page Print Button
		if( jQuery("#cardealer-print-btn").length > 0 ){
			jQuery("#cardealer-print-btn").click(function(){
				window.print();
			});
		}

		/**************************************
		:: Search cars with autocomplte
		***************************************/
		// search-3
		if (jQuery('.search').size() > 0) {
			jQuery('.search-btn').on("click", function () {
				jQuery('.search').toggleClass("search-open");
				jQuery('.cardealer-auto-compalte ul').empty();
				jQuery('#menu-s').val('');
				return false;
			});
			$('.search-box .fa-search').on('click',function(){
				$('.searchform').submit();
			});
		}
		if(document.getElementById('menu-s')||document.getElementById('mobile-menu-s')){
			jQuery( '#menu-s,#mobile-menu-s' ).autocomplete({
				search: function(event, ui) {
					jQuery('.cardealer-auto-compalte ul').empty();
				},
				source: function( request, response ) {
					jQuery.ajax({
						url: cardealer_js.ajaxurl,
						type: 'POST',
						dataType: "json",
						data: {'action': 'pgs_auto_complate_search', 'ajax_nonce': cardealer_js.pgs_auto_complate_search_nonce, 'search': request.term},
						beforeSend: function(){
							jQuery('#menu-searchform').find('i.fa-search').after('<span class="cd-loader"></span>');
							jQuery('#menu-searchform').find('i.fa-search').hide();
						},
						success: function( resp ) {
							response( jQuery.map( resp, function( result ) {
								var return_data = {
									status: result.status,
									image: result.image,
									title: result.title,
									link_url: result.link_url,
									msg: result.msg
								};
								return return_data;
							}));
						}
					}).done( function(){
						jQuery('#menu-searchform').find('i.fa-search').show();
						jQuery('#menu-searchform').find('span.cd-loader').remove();
					});
				},
				minLength: 2,
			}).data( "ui-autocomplete" )._renderItem = function( ul, item ) {
				var html = '';
				if(item.status){
					html += '<a href="'+item.link_url+'">';
					html += '<div class="search-item-container">';
					if(item.image){
						html += item.image;
					}
					html += item.title;
					html += '</div>';
					html += '</a>';
				} else {
					html += item.msg;
				}
				return jQuery( "<li></li>" )
					.data( "ui-autocomplete-item", item )
					.append(html)
					.appendTo(jQuery('.cardealer-auto-compalte ul'));
			};
		}

		if(document.getElementById('s')){
			jQuery( '#s' ).autocomplete({
				search: function(event, ui) {
					jQuery('.cardealer-auto-compalte-default ul').empty();
				},
				source: function( request, response ) {
					jQuery.ajax({
						url: cardealer_js.ajaxurl,
						type: 'POST',
						dataType: "json",
						data: {'action': 'pgs_auto_complate_search', 'ajax_nonce': cardealer_js.pgs_auto_complate_search_nonce, 'search': request.term},
						beforeSend: function(){
							jQuery( '#s' ).after('<span class="cd-loader"></span>');
						},
						success: function( resp ) {
							response( jQuery.map( resp, function( result ) {
								var return_data = {
									status: result.status,
									image: result.image,
									title: result.title,
									link_url: result.link_url,
									msg: result.msg
								};
								return return_data;
							}));
						}
					}).done( function(){
						jQuery( '#s' ).parent().find('span.cd-loader').remove();
					});
				},
				minLength: 2,
			}).data( "ui-autocomplete" )._renderItem = function( ul, item ) {
				var html = '';
				if(item.status){
					html += '<a href="'+item.link_url+'">';
					html += '<div class="search-item-container">';
					if(item.image){
						html += item.image;
					}
					html += item.title;
					html += '</div>';
					html += '</a>';
				} else {
					html += item.msg;
				}
				return jQuery( "<li></li>" )
					.data( "ui-autocomplete-item", item )
					.append(html)
					.appendTo(jQuery('.cardealer-auto-compalte-default ul'));
			};
		}

		/*******************
		:: login
		********************/
		var all_expander =jQuery('.topbar-widget-expander');
		// Hide all widgets by default
		all_expander.hide();
		jQuery('.topbar-widget-link').each( function( i, ele ) {
			var widget_wrapper =jQuery(this).closest('.topbar-widget-wrapper');
			var current_expander =jQuery(widget_wrapper).find('.topbar-widget-expander');
			jQuery(this).click(function(e) {
				e.preventDefault();
				// Check if widget is hidden
				if(jQuery(current_expander).is(':hidden') ){
					// Hide all opened widgets
					all_expander.hide();
					// And, open current widget
					current_expander.show();
				}else{
					current_expander.hide();
				}
			});
		});
		// All open topbar widgets, if clicked anywhere else. xxxxx
		jQuery(document).click(function(e) {
			if( !jQuery(e.target).is('.topbar-widget-link, .topbar-widget-expander, .topbar-widget-expander *') ) {
				all_expander.hide();
			}
		});

		/*************************
		:: tooltip
		*************************/
		jQuery('[data-toggle="tooltip"]').tooltip();

		/******************
		:: Magnific popup
		******************/

		cdhl_video();

		/**************
		:: youtube
		***************/
		jQuery.extend(true,jQuery.magnificPopup.defaults, {
			iframe: {
				patterns: {
					youtube: {
						index: 'youtu',
						id: function(url) {

							var m = url.match( /^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/ ),
								$start = 0;

							if ( !m || !m[1] ) return null;

								if(url.indexOf('t=') != - 1){

									var $split = url.split('t=');
									var hms = $split[1].replace('h',':').replace('m',':').replace('s','');
									var a = hms.split(':');

									if (a.length == 1){

										$start = a[0];

									} else if (a.length == 2){

										$start = (+a[0]) * 60 + (+a[1]);

									} else if (a.length == 3){

										$start = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);

									}
								}

								var suffix = '?autoplay=1';

								if( $start > 0 ){

									suffix = '?start=' + $start + '&autoplay=1';
								}

							return m[1] + suffix;
						},
						src: 'https://www.youtube.com/embed/%id%'
					}
				}
			}
		});

		/**************
		:: Vimeo
		***************/
		jQuery.extend(true,jQuery.magnificPopup.defaults, {
			iframe: {
				patterns: {
					vimeo: {
						index: 'vimeo.com/',
						id: '/',
						src: 'https://player.vimeo.com/video/%id%?autoplay=1'
					},
				}
			}
		});

		/*************************************************
		:: Photoswipe popup gallery for car listing page
		**************************************************/
		jQuery( document ).on("click", ".psimages", function() {
			var pswpElement = document.querySelectorAll('.pswp')[0];
			var items = [];
			var imgsrc;
			var imgdata;
			var imgurl;

			imgsrc = jQuery(this).closest('.pssrcset').find('.psimages').data('image');
			imgurl=imgsrc.split(',');

			for(var i=0;i<imgurl.length;i++){
				var item = {
					src : imgurl[i],
					w: 1024,
					h: 683
				};
				items.push(item);
			}
			var options = {
				history: false,
				focus: false,
				showAnimationDuration: 0,
				hideAnimationDuration: 0
			};
			var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
			gallery.init();
		});

		/*************************************************
		:: Photoswipe popup gallery for car detail page
		**************************************************/
		jQuery( document ).on("click", ".ps-car-listing", function() {
			var pswpElement = document.querySelectorAll('.pswp')[0];
			var items = [];
			var newitems = [];
			var psitems = [];
			var curid = this.id;

			jQuery( "figure" ).each(function() {
				if(!jQuery(this).closest('.slick-cloned').length){
					url = jQuery(this).find('.ps-car-listing').attr('src');
					img_src = jQuery(this).find('.ps-car-listing').attr('data-src');
					img_width = jQuery(this).find('.ps-car-listing').attr('data-width');
					img_height = jQuery(this).find('.ps-car-listing').attr('data-height');

					// Imagify plugin support when picture tag added
					if ( ! url ) {
						url = jQuery( this ).find( 'img' ).attr( 'src' );
					}

					if ( ! img_src ) {
						img_src = jQuery( this ).find( 'img' ).attr( 'data-src' );
					}

					if ( ! img_width ) {
						img_width = jQuery( this ).find('img').attr( 'data-width' );
					}

					if ( ! img_height ) {
						img_height = jQuery( this ).find( 'img' ).attr( 'data-height' );
					}

					id = jQuery(this).find('.ps-car-listing').attr('id');
					var item = {
						src : (typeof img_src !== 'undefined' && img_src!="") ? img_src : url,
						id  : id,
						w: (typeof img_width !== 'undefined' && img_width!='')? img_width : 1051,
						h: (typeof img_height !== 'undefined' && img_height!='')? img_height : 662
					};
					items.push(item);
				}
			});
			items.forEach(function(element, i) {
				if(curid == element.id){
					newitems = items.concat(items.splice(0,i));
				}
			});
			items.forEach( function (i) {
				if(newitems.indexOf(i) < 0) {
					newitems.push(i);
				}
			});
			var options = {
				history: false,
				focus: false,
				showAnimationDuration: 0,
				hideAnimationDuration: 0
			};
			var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, newitems, options);
			gallery.init();
		});

		/*************************
		:: Accordion
		*************************/
		var allPanels =jQuery(".accordion > .accordion-content").hide();
		allPanels.first().slideDown("easeOutExpo");

		jQuery(".accordion > .accordion-title > a").first().addClass("active");
		jQuery(".accordion > .accordion-title > a").click(function(){
			var current =jQuery(this).parent().next(".accordion-content");
			jQuery(".accordion > .accordion-title > a").removeClass("active");
			jQuery(this).addClass("active");
			allPanels.not(current).slideUp("easeInExpo");
			jQuery(this).parent().next().slideDown("easeOutExpo");
			return false;
		});

		/**********************************
		:: Categories Show/Hide Sub Items
		**********************************/
		$('.cat-menu .sub-menu').hide();
		$(".cat-menu .category-open-close-icon").click(function(e){
			e.preventDefault();
			$(this).closest('li').children("ul.cat-sub-menu").toggle('slow');
		});

		/*************************
		:: Audio Video
		*************************/
		if(jQuery(".audio-video").length != 0) {
			jQuery('audio,video').mediaelementplayer();
		}

		/************************
		:: Newsletter mailchimp
		************************/

		$( document ).on( 'click', '.newsletter-mailchimp', function() {
			var form_id           = jQuery( this ).attr( 'data-form-id' );
			var mailchimp_nonce   = jQuery( 'form#' + form_id + ' .news-nonce').val();
			var news_letter_email = jQuery( 'form#' + form_id + ' .newsletter-email' ).val();
			jQuery.ajax({
				url: cardealer_js.ajaxurl,
				data:'action=mailchimp_singup&mailchimp_nonce='+mailchimp_nonce+'&news_letter_email='+news_letter_email,
				beforeSend: function() {
					jQuery('.spinimg-'+form_id).html('<span class="cd-loader"></span>');
				},
				success: function(msg){
					jQuery('form#'+form_id+' .newsletter-msg').show();
					jQuery('form#'+form_id+' .newsletter-msg').removeClass('error_msg');
					jQuery('form#'+form_id+' .newsletter-msg').html(msg);
					jQuery('#process').css('display','none');
					jQuery('form#'+form_id+' .news_letter_name').val('');
					jQuery('form#'+form_id+' .newsletter-email').val('');
					jQuery('.spinimg-'+form_id).html('');
				},
				error: function(msg){
					jQuery('form#'+form_id+' .newsletter-msg').addClass('error_msg');
					jQuery('form#'+form_id+' .newsletter-msg').html(msg);
					jQuery('form#'+form_id+' .newsletter-msg').show();
					jQuery('#process').css('display','none');
				}
			});
			return false;
		});

		/***************************************
		:: Vehicle Detail Page - Nav Button Event
		***************************************/
		$(".dealer-form-btn").on('click',function(){
			$(".reset_css input").css({"border":"none"});
			$(".reset_css textarea").css({"border":"none"});
		});

		/***************************************
		:: Car Inquiry Form [ CarDetail Page ]
		***************************************/
		jQuery(document).on('click','#submit_request, #submit-inquiry',function(e){
			e.preventDefault();
			var formId = jQuery(this).parents("form").attr('id');
			jQuery('form#'+formId).find('input').css({"border":"none"});
			var textArray = [];
			jQuery('form#'+formId).find('input.cdhl_validate').each( function(i){
				textArray[i] = jQuery(this).attr('name');
			});

			// ENABLE / DISABLE REQUIRED ON PHONE / EMAIL BASED ON PREFERED CONTACT SELECTED
			var sts = do_validate_field(textArray,formId);
			if(!sts){
				var submit_btn_ID = jQuery(this).attr('id');
				jQuery.ajax({
					url: cardealer_js.ajaxurl,
					method: "POST",
					dataType:'json',
					data: jQuery('form#'+formId).serialize(),
					beforeSend: function() {
						jQuery('.spinimg').html('<span class="cd-loader"></span>');
						jQuery('#'+submit_btn_ID).prop("disabled", "disabled");
					},
					success: function(responseObj){
						jQuery('form#'+formId+' .inquiry-msg').show();
						jQuery('#'+submit_btn_ID).removeAttr("disabled");
						jQuery('.spinimg').html('');
						jQuery('form#'+formId+' .inquiry-msg').html(responseObj.msg).delay(5000).fadeOut('slow');
						if(responseObj.status==1)
							jQuery('form#'+formId).find("input[type=text], input[type=number], textarea, radio").val("");
						jQuery('.check').attr('checked',true);
						if (typeof grecaptcha !== "undefined"){
							grecaptcha.reset(recaptcha1);
							grecaptcha.reset(recaptcha6);
						}
					}
				});
			}
		});

		/*******************************************
		:: Make An Offer Form [ CarDetail Page ]
		*******************************************/
		jQuery('#make_an_offer_test_request').click(function(e){
			e.preventDefault();
			var formId = jQuery(this).parents('form').attr('id');
			var textArray = [];
			jQuery('form#'+formId).find('input.cdhl_validate').each( function(i){
				textArray[i] = jQuery(this).attr('name');
			});

			var sts = do_validate_field(textArray,formId);
			if(!sts){
				var submit_btn_ID = jQuery(this).attr('id');
				jQuery.ajax({
					url: cardealer_js.ajaxurl,
					method: "POST",
					data: jQuery('form#make_an_offer_test_form').serialize(),
					dataType:'json',
					beforeSend: function() {
						jQuery('.make_an_offer_test_spinimg').html('<span class="cd-loader"></span>');
						jQuery('#'+submit_btn_ID).prop("disabled", "disabled");
					},
					success: function(responseObj){
						jQuery('form#make_an_offer_test_form .make_an_offer_test_msg').show();
						jQuery('form#make_an_offer_test_form .make_an_offer_test_msg').html(responseObj.msg).delay(5000).fadeOut('slow');
						if(responseObj.status==1)
							jQuery('form#make_an_offer_test_form').find("input[type=text], textarea, radio").val("");
						jQuery('.check').attr('checked',true);
						if (typeof grecaptcha !== "undefined"){
							grecaptcha.reset(recaptcha2);
						}
						jQuery('#'+submit_btn_ID).removeAttr("disabled");
						jQuery('.make_an_offer_test_spinimg').html('');
					}
				});
			}
		});

		/**********************************************
		:: Schedule Test Drive Form [ CarDetail Page ]
		***********************************************/
		if( $(".date").length != 0 ) {
			jQuery('.date').datepicker({
				dateFormat: 'mm-dd-yy'
			});
		}
		$( ".date-time" ).keydown(function(event) {
			event.preventDefault();
		});

		// SHOW DATE AND TIME FIELD ONLY IF TEST DRIVE IS CHECKED
		jQuery('#schedule_test_form input[name=test_drive]').click( function(){
			if(jQuery(this).val() == 'no')
				jQuery('.show_test_drive').css('display', 'none');
			else
				jQuery('.show_test_drive').css('display', 'block');
		});

		// TIME PICKER FOR SCHEDULE TIME FIELD
		jQuery('.time').timepicker({ 'timeFormat': 'H:i:s'});
		jQuery('#schedule_test_request').click(function(e){
			e.preventDefault();
			var formId = jQuery(this).parents('form').attr('id');
			jQuery('form#'+formId).find('input').css({"border":"none"});

			var textArray = [];
			jQuery('form#'+formId).find('input.cdhl_validate').each( function(i){
				textArray[i] = jQuery(this).attr('name');
			});

			if(jQuery('input[name=test_drive]:checked').val()=="no"){
				textArray.splice(jQuery.inArray("date", textArray),1);
				textArray.splice(jQuery.inArray("time", textArray),1);
			}
			var sts = do_validate_field(textArray,formId);
			if(!sts){
				var submit_btn_ID = jQuery(this).attr('id');
				jQuery.ajax({
					url: cardealer_js.ajaxurl,
					method: "POST",
					data: jQuery('form#schedule_test_form').serialize(),
					dataType:'json',
					beforeSend: function() {
						jQuery('.schedule_test_spinimg').html('<span class="cd-loader"></span>');
						jQuery('#'+submit_btn_ID).prop("disabled", "disabled");
					},
					success: function(responseObj){
						jQuery('form#schedule_test_form .schedule_test_msg').show();
						jQuery('form#schedule_test_form .schedule_test_msg').html(responseObj.msg).delay(5000).fadeOut('slow');
						if(responseObj.status==1){
							jQuery('form#schedule_test_form').find("input[type=text], input[type=number], textarea, radio").val("");
							jQuery('.check').attr('checked',true);
						}
						if (typeof grecaptcha !== "undefined"){
							grecaptcha.reset(recaptcha3);
						}
						jQuery('#'+submit_btn_ID).removeAttr("disabled");
						jQuery('.schedule_test_spinimg').html('');
					}
				});
			}
		});

		/************************************************
		:: Car EMAIL TO A FRIEND Form [ CarDetail Page ]
		*************************************************/
		jQuery(document).on('click','#submit_friend_frm',function(e){
			e.preventDefault();
			var formId = jQuery(this).parents("form").attr('id');

			var textArray = [];
			jQuery('form#'+formId).find('input.cdhl_validate').each( function(i){
				textArray[i] = jQuery(this).attr('name');
			});

			var sts = do_validate_field(textArray,formId);
			if(!sts){
				var submit_btn_ID = jQuery(this).attr('id');
				jQuery.ajax({
					url: cardealer_js.ajaxurl,
					method: "POST",
					data: jQuery('form#'+formId).serialize(),
					dataType:'json',
					beforeSend: function() {
						jQuery('.spinimg').html('<span class="cd-loader"></span>');
						jQuery('#'+submit_btn_ID).prop("disabled", "disabled");
					},
					success: function(responseObj){
						jQuery('.spinimg').html('');
						jQuery('#'+submit_btn_ID).removeAttr("disabled");
						jQuery('form#'+formId+' .friend-frm-msg').show();
						jQuery('form#'+formId+' .friend-frm-msg').html(responseObj.msg).delay(5000).fadeOut('slow');
						if(responseObj.status==1)
							jQuery('form#'+formId).find("input[type=text], textarea, radio").val("");
						jQuery('.check').attr('checked',true);
						if (typeof grecaptcha !== "undefined"){
							grecaptcha.reset(recaptcha4);
						}
					}
				});
			}
		});

		/**************************************
		:: Financial Form [ CarDetail Page ]
		***************************************/
		jQuery("#personal_application").css("display","none");
		if( $('#joint_application').is(':checked') ) {
			$('#personal_application').show();
		}

		jQuery('#joint_application').change(function() {
			if( jQuery(this).is(':checked')) {
				jQuery("#personal_application").show();
			} else {
				jQuery("#personal_application").hide();
			}
		});
		jQuery('#financial_form_request').click(function(e){
			e.preventDefault();
			var formId = jQuery(this).parents('form').attr('id');
			var financial = [];
			jQuery('form#'+formId).find('input.cdhl_validate').each( function(i){
				financial[i] = jQuery(this).attr('name');
			});

			var Selectfinancial = [];
			jQuery('form#'+formId).find('select.cdhl_sel_validate').each( function(i){
				Selectfinancial[i] = jQuery(this).attr('name');
			});

			var joint = [];
			jQuery('form#'+formId).find('input.cdhl_validate_joint').each( function(i){
				joint[i] = jQuery(this).attr('name');
			});

			var joint;
			jQuery('form#'+formId).find('input.cdhl_validate_joint').each( function(i){
				joint[i] = jQuery(this).attr('name');
			});

			var selectjoint = [];
			jQuery('form#'+formId).find('select.cdhl_sel_validate_joint').each( function(i){
				selectjoint[i] = jQuery(this).attr('name');
			});

			var SelectArray=[];
			var textArray = [];


			if(jQuery("#joint_application").is(':checked'))
				textArray = financial.concat(joint);
			else
				textArray=financial;

			if(jQuery("#joint_application").is(':checked'))
				SelectArray = Selectfinancial.concat(selectjoint);
			else
				SelectArray=Selectfinancial;

			var sts = do_validate_field(textArray,formId,SelectArray);
			if(!sts){
				var submit_btn_ID = jQuery(this).attr('id');
				jQuery.ajax({
					url: cardealer_js.ajaxurl,
					method: "POST",
					dataType:'json',
					data: jQuery('form#financial_form').serialize(),
					beforeSend: function() {
						jQuery('.financial_form_spining').html('<span class="cd-loader"></span>');
						jQuery('#'+submit_btn_ID).prop("disabled", "disabled");
					},
					success: function(responseObj){
						jQuery('.financial_form_spining').html('');
						jQuery('#'+submit_btn_ID).removeAttr("disabled");
						jQuery('form#financial_form .financial_form_msg').show();
						jQuery('form#financial_form .financial_form_msg').html(responseObj.msg).delay(5000).fadeOut('slow');
						if(responseObj.status==1) {
							jQuery('form#financial_form').find("input[type=text], input[type=number], textarea, radio").val("");
							jQuery('.check').attr('checked',true);
							jQuery('select').prop('selectedIndex',0);
							jQuery('select').niceSelect('update');
						}
						if (typeof grecaptcha !== "undefined"){
							grecaptcha.reset(recaptcha5);
						}
					}
				});
			}
		});


		/****************
		:: Social share
		*****************/
		jQuery( document ).on( 'click', '.twitter-share', function() {
			var $this =jQuery(this),
			$url = $this.attr('data-url'),
			$title = $this.attr('data-title');
			window.open('http://twitter.com/intent/tweet?text=' + $title + ' ' + $url, "twitterWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");
			return false;
		});
		jQuery( document ).on( 'click', '.pinterest-share', function() {
			var $this =jQuery(this),
				$url  = $this.attr('data-url'),
				$title= $this.attr('data-title'),
				$image= $this.attr('data-image');
			window.open('http://pinterest.com/pin/create/button/?url=' + $url + '&media=' + $image + '&description=' + $title, "twitterWindow", "height=320,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");
			return false;
		});
		jQuery( document ).on( 'click', '.facebook-share', function() {
			var $url =jQuery(this).attr('data-url');
			window.open('https://www.facebook.com/sharer/sharer.php?u=' + $url, "facebookWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");
			return false;
		});
		jQuery( document ).on( 'click', '.linkedin-share', function() {
			var $this =jQuery(this),
			$url = $this.attr('data-url'),
			$title = $this.attr('data-title'),
			$desc = $this.attr('data-desc');
			window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + $url + '&title=' + $title + '&summary=' + $desc, "linkedInWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");
			return false;
		});
		jQuery( document ).on( 'click', '.whatsapp-share', function() {
			var $this = jQuery(this),
			$url = $this.attr('data-url');
			window.open('https://web.whatsapp.com/send?text=' + $url, "", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");
			return false;
		});

		/***************
		:: Coming Soon
		****************/
		if( $(".countdown").length != 0 ) {
			var $countdown_date = $('.countdown').data('countdown-date');
			$('.countdown').downCount({
				date: $countdown_date,
			}, function () {
			});
		}
		/*********************
		:: Slick slider
		*********************/
		if (document.getElementById('cars-image-gallery')) {
			$('.slider-for').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				adaptiveHeight: true,
				asNavFor: '.slider-nav'
			});
			$('.slider-nav').slick({
				slidesToShow: 5,
				slidesToScroll: 1,
				asNavFor: '.slider-for',
				dots: false,
				focusOnSelect: true,
				responsive: [
					{
					  breakpoint: 1024,
					  settings: {
						slidesToShow: 4,
						slidesToScroll: 4
					  }
					},
					{
					  breakpoint: 600,
					  settings: {
						slidesToShow: 3,
						slidesToScroll: 3
					  }
					},
					{
					  breakpoint: 480,
					  settings: {
						slidesToShow: 3,
						slidesToScroll: 3
					  }
					}
				  ]
			});

			$('.slider-for-full').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: true,
				adaptiveHeight: true,
				responsive: [
					{
						breakpoint: 993,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 576,
						settings: {
							slidesToShow: 1
						}
					}
				 ]
			});
		}

		/**********
		:: Tabs
		***********/
		var $tabsdata = $("#tabs li[data-tabs]"),
		$tabscontent = $(".tabcontent"),
		$tabsnav = $(".tabs li");
		$tabsdata.on('click', function () {
			$tabsdata.removeClass('active');
			$tabscontent.hide();
			var tab = $(this).data('tabs');
			$(this).addClass('active');
			$('#' + tab).fadeIn().show();
		});
		$tabsnav.on('click', function () {
			var  cur = $tabsnav.index(this);
			var elm = $('.tabcontent:eq('+cur+')');
			elm.addClass("pulse");
			setTimeout(function() {
				elm.removeClass("pulse");
				setMinHeight(0);
			}, 220);
		});
		$tabscontent.hide().filter(':first').show();

		jQuery( ".tabs_wrapper" ).each(function( index ) {
			jQuery(this).find('.tabcontent').hide().filter(':first').show();
		});
		jQuery('.tabs_wrapper li[data-tabs]').on('click', function () {
			var tabs_parent =jQuery(this).closest('.tabs_wrapper');
			jQuery(tabs_parent).find('li[data-tabs]').removeClass('active');
			jQuery(tabs_parent).find('.tabcontent').hide();
			var tab =jQuery(this).data('tabs');
			jQuery(this).addClass('active');
			jQuery('#' + tab).fadeIn().show();
		});
		jQuery(".tabs li").click(function(){
			var cur =jQuery(".tabs li").index(this);
			var elm =jQuery('.tabcontent:eq('+cur+')');
			elm.addClass("pulse");
			setTimeout(function() {
				elm.removeClass("pulse");
			}, 220);
		});

		/*************************
		:: Accordion
		*************************/
		if(document.getElementById('tab-accordion')){
			$('.panel-heading a').click(function() {
				$('.panel-heading').removeClass('active');
				if(!$(this).closest('.panel').find('.panel-collapse').hasClass('in'))
					$(this).parents('.panel-heading').addClass('active');
			});
		}


		/*************************
		:: Space Shortcode
		*************************/
		var stylesheet = '';
		jQuery(".cd-space").each(function(){
			var $this = jQuery(this);
			var desktoppad = $this.attr("data-desktop");
			var tablatepad = $this.attr("data-tablet");
			var portraitpad = $this.attr("data-tablet-portrait");
			var mobilepad = $this.attr("data-mobile");
			var mobileporpad = $this.attr("data-mobile-portrait");

			var cls =  $this.attr('class').split(' ');
			var clsname = cls[cls.length-1];
			stylesheet += "." + clsname + "{ height:"+ desktoppad +"px} @media only screen and (max-width: 1200px) {." + clsname + "{ height:"+ tablatepad +"px}}@media only screen and (max-width: 992px) {." + clsname + "{ height:"+ portraitpad +"px}}@media only screen and (max-width: 767px) {." + clsname + "{ height:"+ mobilepad +"px}}@media only screen and (max-width: 479px) {." + clsname + "{ height:"+ mobileporpad +"px}}";
		});
		jQuery("<style type='text/css'>" + stylesheet + "</style>").appendTo("head");


		/***********************
		:: NICE SELECT
		:: For select box design
		************************/
		if(jQuery('select.cd-select-box').length){
			jQuery('select.cd-select-box').niceSelect();
		}
		if(jQuery('.woocommerce-ordering select.orderby').length){
			jQuery('.woocommerce-ordering select.orderby').niceSelect();
		}

		if(jQuery('.sidebar-widget').length && jQuery('select').length){
			jQuery('.sidebar-widget select:not(.cd-select-box)').niceSelect();
		}
		if ( jQuery( '.widget.widget-vehicle-categories:not(.sidebar-widget)' ).length > 0 ) {
			jQuery('.widget.widget-vehicle-categories:not(.sidebar-widget) select.vehicle-categories-dropdown').niceSelect();
		}

		/***********************
		:: SELECT2
		:: For variations select box design
		************************/
		if(jQuery('.single-product.woocommerce .variations select').length){
			jQuery('.single-product.woocommerce .variations select').select2();
		}

		/***********************
		:: Newsletter shortcode
		************************/
		// Code for newsletter shortcode to donot submit on enter and make ajax call
		jQuery(document).on('submit', 'form.news-letter-form, form.news-letter', function( event ){
			event.preventDefault();
			jQuery('.newsletter-mailchimp').trigger('click');
		});

		/*************************
		  :: Blog - Masonry
		*************************/
		cardealer_load_masonry();

		/********************************************************
		:: Code For Cart Toggle i menu for mobile device starts
		*********************************************************/
		jQuery(document).on('click', '.cart-mobile-content', function( event ) {
			event.preventDefault();
			jQuery('.widget_shopping_cart_content').toggle();
		});

		/*************
		:: counter
		**************/

		cdhl_counter();

		/*********************************
		:: Compare Vehicle
		**********************************/
		var compare_vehicle_ids     = cookies.get( 'cars' );
		var compare_vehicle_ids_str = JSON.stringify( cookies.get( 'cars' ) );

		if ( cookies.get('cars') != null && cookies.get('cars') != '' ) {
			jQuery('.menu-item .menu-item-compare').show();
			var compare_vehicle_ids = $.parseJSON( compare_vehicle_ids_str );
			jQuery('.menu-item .compare-details.count').html( compare_vehicle_ids.length );
		}

		$( document ).on( 'click', '.compare_pgs, .menu-item-compare', function() {
			var carListClick = 0;
			if( $(this).hasClass('compare_pgs') )  {
				var car_id = jQuery(this).data('id');
				var carIds = JSON.stringify([car_id]);
				carListClick = 1;
				$(this).find('i').removeClass('fa-exchange-alt');
				$(this).find('i').addClass('fa-check');

				if( cookies.get('cars') ) {
					carIds = cookies.get('cars');
					if(jQuery.inArray(car_id, carIds) == -1)
						carIds[carIds.length] = car_id;
					carIds = JSON.stringify(carIds);
				}
				destroyCookie('cars');
				cookies.set('cars', carIds);
			}

			compare_vehicle_ids_str = JSON.stringify( cookies.get( 'cars' ) );
			jQuery.ajax({
				url: cardealer_js.ajaxurl,
				type: 'post',
				data:'action=car_compare_action&car_ids=' + compare_vehicle_ids_str,
				beforeSend: function(){
					jQuery('body').append('<div id="comparelist" class="modal" tabindex="-1" role="dialog" aria-hidden="true"></div>');
				},
				success: function(carData){
					var compare_vehicle_ids = $.parseJSON( compare_vehicle_ids_str );
					jQuery('.menu-item .compare-details.count').html( compare_vehicle_ids.length );

					// Menu display
					if ( jQuery('.menu-item-compare').is(':hidden') && compare_vehicle_ids.length > 0 ) jQuery('.menu-item-compare').show();

					// product compare click
					if ( compare_vehicle_ids.length < 2 && carListClick == 1 ) {
						return;
					}

					// Model PopUp
					jQuery("#comparelist").html( carData );
					$('div#sortable').css('width', ($('#sortable .compare-list').length * $('.compare-list').width()) + ' !important');
					jQuery('#comparelist').modal('show');

					// For sorting feature
					if( jQuery( window ).width() > 480 ) {
						jQuery("#sortable, #sortable2").sortable();
						jQuery("#sortable, #sortable2").disableSelection();
					}
				},
				error: function(carData){
					alert( cardealer_js.compare_load_error_msg );
				},
			});
		});

		// Set equal height for every row
		jQuery(document).on('shown.bs.modal', '#comparelist', function(e){
			$('#comparelist').imagesLoaded( function() {
				cs_compare_popup_row_height();
			});
		});

		jQuery(document).on('hidden.bs.modal', '#comparelist',function(e){
			$('.compare_pgs i.fa-spinner').parent().addClass('compared_pgs');
		});

		/*********************************
		:: Compare Vehicle - Legacy
		**********************************/
		// Remove item from Compare
		$( document ).on('click', '.cardealer-vehicle-compare-list-column .compare-remove-column', function() {
			var carID       = $(this).data('car_id'),
				compare_vehicle_ids = cookies.get('cars');

			// remove item from cookie
			compare_vehicle_ids.splice( $.inArray( carID, compare_vehicle_ids ), 1 );
			cookies.set('cars', JSON.stringify( compare_vehicle_ids ) );

			// Remove element
			$('.table-scroll').find(".compare-list[data-id='" + carID + "']").remove();
			$('li').find("a[data-id='" + carID + "']").addClass('compare_pgs');
			$('li').find("a[data-id='" + carID + "']").removeClass('compared_pgs');
			$('li').find("a[data-id='" + carID + "']").find('i').addClass('fa-exchange-alt');
			$('li').find("a[data-id='" + carID + "']").find('i').removeClass('fa-check');
			compare_vehicle_ids = cookies.get('cars');
			jQuery('.menu-item .compare-details.count').html( compare_vehicle_ids.length);
			if ( compare_vehicle_ids.length < 1 ) {
				$('#comparelist').modal('hide');
				jQuery('.menu-item-compare').hide();
			}else {
				$('#sortable').css('width', ( compare_vehicle_ids.length * $('.compare-list').width()));
			}
		});

		function cs_compare_popup_row_height() {

			jQuery( '.cardealer-vehicle-compare-list-header .cardealer-vehicle-compare-list-title' ).each( function( inner_index ) {
				jQuery(this).removeAttr( 'style' );
			});

			jQuery( '.cardealer-vehicle-compare-list-column' ).each( function( index ) {
				jQuery( this ).find( '.cardealer-vehicle-compare-list-row' ).each( function( inner_index ) {
					jQuery(this).removeAttr( 'style' );
				});
			});

			var height = [];
			jQuery( '.cardealer-vehicle-compare-list-column' ).each( function( index ) {
				var inner_height = [];
				jQuery( this ).find( '.cardealer-vehicle-compare-list-row' ).each( function( inner_index ) {
					inner_height.push( jQuery(this).height() );
				});
				height.push( inner_height );
			});

			var max_height = [];
			for ( var i = 0; i < height.length; i++ ) {
				var mh;
				var pre_index;

				if ( i !== 0 ) {
					pre_index = i - 1;
				}

				for ( var j = 0; j < height[i].length; j++ ) {
					if ( i !== 0 ) {
						if ( height[i][j] > max_height[j] ) {
							max_height[j] = height[i][j];
						}
					} else {
						max_height.push( height[i][j] );
					}
				}
			}

			jQuery( '.cardealer-vehicle-compare-list-header .cardealer-vehicle-compare-list-title' ).each( function( inner_index ) {
				jQuery(this).height( max_height[inner_index] );
			});

			jQuery( '.cardealer-vehicle-compare-list-column' ).each( function( index ) {
				jQuery( this ).find( '.cardealer-vehicle-compare-list-row' ).each( function( inner_index ) {
					jQuery(this).height( max_height[inner_index] );
				});
			});
		}

		/***********************************************
		:: For header background video [ theme options ]
		************************************************/
		cardealer_initVideoBackgrounds();
		cardealer_initVimeoVideoBackgrounds();

		/*************************
		:: mega menu
		*************************/
		// Sticky Top bar setting
		var screen_width = screen.width;
		jQuery(document).scroll(function() {
			if( cardealer_js.sticky_topbar == true ) {
				var sticky = jQuery('.topbar'),
				scroll = jQuery(window).scrollTop();
				if (scroll >= 250 && screen_width > 992){
					sticky.addClass('topbar_fixed');
				} else {
					sticky.removeClass('topbar_fixed');
				}
			}
		});

		var $mobile_sticky_status = (cardealer_js.sticky_header_mobile == true)? true: false;
		var $desktop_sticky_status = (cardealer_js.sticky_header_desktop == true)? true: false;
		jQuery('#menu-1').megaMenu({
			// DESKTOP MODE SETTINGS
			logo_align          : 'left',		// align the logo left or right. options (left) or (right)
			links_align         : 'left',      	// align the links left or right. options (left) or (right)
			socialBar_align     : 'left',     	// align the socialBar left or right. options (left) or (right)
			searchBar_align     : 'right',    	// align the search bar left or right. options (left) or (right)
			trigger             : 'hover',    	// show drop down using click or hover. options (hover) or (click)
			effect              : 'fade',     	// drop down effects. options (fade), (scale), (expand-top), (expand-bottom), (expand-left), (expand-right)
			effect_speed        : 400,        	// drop down show speed in milliseconds
			sibling             : true,       	// hide the others showing drop downs if this option true. this option works on if the trigger option is "click". options (true) or (false)
			outside_click_close : true,       	// hide the showing drop downs when user click outside the menu. this option works if the trigger option is "click". options (true) or (false)
			top_fixed           : false,      	// fixed the menu top of the screen. options (true) or (false)
			sticky_header       : $desktop_sticky_status,// menu fixed on top when scroll down down. options (true) or (false)
			sticky_header_height: 250,  		// sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
			menu_position       : 'horizontal', // change the menu position. options (horizontal), (vertical-left) or (vertical-right)
			full_width          : false,        // make menu full width. options (true) or (false)
			// MOBILE MODE SETTINGS
			mobile_settings     : {
				collapse            : true,     // collapse the menu on click. options (true) or (false)
				sibling             : true,     // hide the others showing drop downs when click on current drop down. options (true) or (false)
				scrollBar           : true,     // enable the scroll bar. options (true) or (false)
				scrollBar_height    : 400,      // scroll bar height in px value. this option works if the scrollBar option true.
				top_fixed           : false,    // fixed menu top of the screen. options (true) or (false)
				sticky_header       : $mobile_sticky_status,     // menu fixed on top when scroll down down. options (true) or (false)
				sticky_header_height: 200       // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
			}
		});

		if(document.getElementById('mega-menu-wrap-primary-menu')){
			jQuery('.menu-mobile-collapse-trigger').hide();
		}

		/*************************
		:: back-to-top
		*************************/
		var $scrolltop = jQuery('.car-top');
		$( document ).on( 'scroll', function() {
			if ( jQuery( window ).scrollTop() >= 200 ) {
				$scrolltop.addClass( 'show' );
				$scrolltop.addClass( 'car-down' );
			} else {
				$scrolltop.removeClass( 'show' );
				setTimeout( function(){ $scrolltop.removeClass( 'car-down' ); }, 300 );
			}
		});
		$scrolltop.on( 'click', function () {
			jQuery( 'html,body' ).animate({ scrollTop: 0 }, 800 );
			jQuery( this ).addClass("car-run");
			setTimeout( function(){ $scrolltop.removeClass('car-run'); }, 1000 );
			return false;
		});

		$('.pgs-popup-btn').magnificPopup({
			type:'inline',
			midClick: true
		});

		$( document ).on( 'click', '.off-canvas-toggle a, .cardealer-offcanvas .cardealer-offcanvas-close-btn', function (e) {
			e.preventDefault();
			cardealer_offcanvas_toggle();
		});
		$( document ).on( "mousedown", '.cardealer-offcanvas-overlay', function() {
			$( document.body ).trigger( 'cardealer_offcanvas_close' );
		});
		$( document ).on( "cardealer_offcanvas_toggle", function() {
			cardealer_offcanvas_toggle();
		});
		$( document ).on( "cardealer_offcanvas_close", function() {
			$( 'body' ).removeClass( 'cardealer-offcanvas-open' );
			$( '.cardealer-offcanvas, .cardealer-offcanvas-overlay' ).removeClass( 'is-open' ).addClass( 'is-closed' );
			$( document.body ).trigger( 'cardealer_offcanvas_closed' );
		});
		function cardealer_offcanvas_toggle() {
			$( 'body' ).toggleClass( 'cardealer-offcanvas-open' );
			$( '.cardealer-offcanvas, .cardealer-offcanvas-overlay' ).toggleClass( ['is-open', 'is-closed'] );
			$( document.body ).trigger( 'cardealer_offcanvas_toggled' );
		}
	});

	// Make sure you run this code under Elementor.
	$( window ).on( 'elementor/frontend/init', function () {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/cdhl_counter.default', cdhl_counter );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/cdhl_video.default', cdhl_video );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/cdhl_clients.default', cdhl_clients );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/cdhl_image-slider.default', cdhl_image_slider );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/cdhl_testimonials.default', cdhl_testimonials );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/cdhl_vehicles-conditions-tabs.default', cardealer_owl );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/cdhl_feature-box-slider.default', cardealer_owl );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/cdhl_multi-tab.default', cardealer_isotope );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/cdhl_vehicles-list.default', cardealer_owl );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/cdhl_share.default', cdhl_share );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/cdhl_our-team.default', cardealer_owl );
	} );

	function cdhl_share(){
		cdhl_video();
	}

	function cardealer_isotope() {
		var $isotope_wrapper = jQuery( '.isotope-wrapper' );
		if ( $isotope_wrapper.length > 0 ) {
			$isotope_wrapper.each( function() {
				var cptshuffle;
				var $unique_class      = jQuery( this ).attr( 'data-unique_class' );
				var $isotope_container = jQuery( '.' + $unique_class + ' .filter-container' );
				var $filters_container = jQuery( '[data-unique_class="' + $unique_class + '"]' ).find( '.isotope-filters' );
				var $layout            = jQuery( '[data-unique_class="' + $unique_class + '"]' ).attr( 'data-layout' );
				cptshuffle = new Shuffle( $isotope_container, {
					itemSelector: '.' + $layout + '-item',
					easing: 'ease-out',
				});

				$filters_container.on(
					'click',
					'button',
					function() {
						var filterValue = parseInt( jQuery( this ).attr( 'data-filter' ) );
						cptshuffle.filter( filterValue );
					}
				);

				$filters_container.each(
					function( i, buttonGroup ) {
						var $filters_buttongroup = jQuery( buttonGroup );
						$filters_buttongroup.on(
							'click',
							'button',
							function() {
								$filters_buttongroup.find( '.active' ).removeClass( 'active' );
								jQuery( this ).addClass( 'active' );
							}
						);
					}
				);
			});

			jQuery('.isotope-filters button.active').trigger('click');
		}
	}

	function cdhl_testimonials(){
		cardealer_owl();
	}

	function cdhl_image_slider(){
		cardealer_owl();
	}

	function cdhl_clients(){
		cardealer_owl();
	}

	function cardealer_owl() {
		setTimeout( function(){
			jQuery( '.owl-carousel' ).each( function ( index ) {
				// prevent the slider for popup content
				if ( ( ! jQuery( this ).parents( '.modal-content' ).length > 0 ) || ( jQuery( this ).parents( '.modal-content' ).length > 0 && jQuery( this ).parents( '.modal-content' ).is( ':visible' ) ) ) {
					var $this     = jQuery( this ),
						$loop     = ( $this.data( 'loop' ) ) ? $this.data( 'loop' ) : false,
						$navdots  = ( $this.data( 'nav-dots' ) ) ? $this.data( 'nav-dots' ) : false,
						$navarrow = ( $this.data( 'nav-arrow' ) ) ? $this.data( 'nav-arrow' ) : false,
						$items    = ( $this.attr( 'data-items' ) ) ? $this.data( 'items' ) : 1,
						$autoplay = ( $this.attr( 'data-autoplay' ) ) ? $this.data( 'autoplay' ) : true,
						$space    = ( $this.attr( 'data-space' ) ) ? $this.data( 'space' ) : 30,
						$lazyload = ( $this.attr( 'data-lazyload' ) ) ? $this.data( 'lazyload' ) : false;

					jQuery( this ).owlCarousel({
						rtl                : ( jQuery( 'body' ).hasClass( 'rtl' ) ) ? true : false,
						loop               : $loop,
						items              : $items,
						responsive: {
							0   : {items: $this.data('xx-items') ? $this.data('xx-items') : 1},
							480 : {items: $this.data('xs-items') ? $this.data('xs-items') : 1},
							768 : {items: $this.data('sm-items') ? $this.data('sm-items') : 2},
							980 : {items: $this.data('md-items') ? $this.data('md-items') : 3},
							1200: {items: $items}
						},
						dots               : $navdots,
						margin             : $space,
						nav                : $navarrow,
						navText            : ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
						autoplay           : $autoplay,
						autoplayHoverPause : true,
						lazyLoad           : $lazyload,
					});
				}
			});
		}, 300 );
	}

	function cdhl_counter(){
		if ( jQuery( '.counter' ).length != 0 ) {
			jQuery( '.counter' ).appear( function() {
				jQuery('.timer').each(count);
			},
			{
				offset: 500
			});
		}
	}

	function cdhl_video(){
		jQuery( '.popup-youtube, .popup-vimeo, .popup-gmaps, .popup-video' ).magnificPopup({
			disableOn: 300,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	}

	function chklog( message ) {
		$( "<div>" ).text( message ).prependTo( "#log" );
		$( "#log" ).scrollTop( 0 );
	}

	/*************************
	:: counter
	*************************/
	function count(options) {
		var jQuerythis =jQuery(this);
		options =jQuery.extend({}, options || {},jQuerythis.data('countToOptions') || {});
		jQuerythis.countTo(options);
	}

	/*************************
	:: placeholder
	*************************/
	jQuery('[placeholder]').focus(function() {
		var input =jQuery(this);
		if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		}
	}).blur().parents('form').submit(function() {
		jQuery(this).find('[placeholder]').each(function() {
			var input =jQuery(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
			}
		});
	});

	/*********************************
	:: Code To Add Car in Compare
	**********************************/
	function destroyCookie(cname) {
		var date = new Date();
		var expires = "; expires=" + date.toGMTString();
		date.setTime(date.getTime() - (1 * 24 * 60 * 60 * 1000));
		document.cookie = cname + "=1" + expires;
	}
	function IsValidJSON(test) {
		try {
			var obj = JSON.parse(test);
			if (obj && typeof obj === "object" && obj !== null) {
				return true;
			}
		} catch (e) {
		}
		return false;
	}

	/***** Code for Youtube and Vimeo video of theme options starts *****/
	function cardealer_initVimeoVideoBackgrounds(){
		jQuery(".vimeo_video_bg iframe").each(function() {
			var iframe_src=jQuery(this).attr('src');
			var $element=jQuery('.vimeo_video_bg').parent();

			jQuery(this).attr('src',iframe_src+"?background=1&autoplay=1&muted=1");

			ResizeVideoBackground($element);
			jQuery(window).bind("resize", function() {
				ResizeVideoBackground($element);
			});
		});
	}
	function cardealer_initVideoBackgrounds() {
		jQuery("[data-youtube-video-bg]").each(function() {
			var youtubeUrl,
				youtubeId,
				$element = jQuery(this);

			if( $element.data("youtubeVideoBg") ) {
				youtubeUrl = $element.data("youtubeVideoBg"), youtubeId = ExtractYoutubeId(youtubeUrl), youtubeId && ($element.find(".youtube_video-bg").remove(), insertYoutubeVideoAsBackground_($element, youtubeId)), jQuery(window).on("grid:items:added", function(event, $grid) {
					$element.has($grid).length && ResizeVideoBackground($element);
				});
			} else {
				$element.find(".youtube_video-bg").remove();
			}
		});
	}
	function insertYoutubeVideoAsBackground_($element, youtubeId, counter) {
		if ("undefined" == typeof YT || "undefined" == typeof YT.Player) return counter = "undefined" == typeof counter ? 0 : counter, 100 < counter ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function() {
			insertYoutubeVideoAsBackground_($element, youtubeId, counter++);
		}, 100);

		var $container = $element.prepend('<div class="intro_header_video-bg vc_video-bg"><div class="inner"></div></div>').find(".inner");
		new YT.Player($container[0], {
			width: "100%",
			height: "100%",
			videoId: youtubeId,
			playerVars: {
				playlist: youtubeId,
				iv_load_policy: 3,
				enablejsapi: 1,
				disablekb: 1,
				autoplay: 1,
				playsinline: 1,
				controls: 0,
				showinfo: 0,
				rel: 0,
				loop: 1,
				wmode: "transparent"
			},
			events: {
				onReady: function(event) {
					event.target.mute().setLoop(!0);
					event.target.mute();
					event.target.playVideo();
				}
			}
		}), ResizeVideoBackground($element), jQuery(window).bind("resize", function() {
			ResizeVideoBackground($element);
		});
	}
	function ResizeVideoBackground($element) {
		var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
		containerH = $element.innerHeight(),
		ratio1 = 16,
		ratio2 = 9;
		containerW / containerH < ratio1 / ratio2 ? (iframeW = containerH * (ratio1 / ratio2), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px", iframeW += "px", iframeH += "px") : (iframeW = containerW, iframeH = containerW * (ratio2 / ratio1), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px", iframeW += "px", iframeH += "px"), $element.find(".intro_header_video-bg iframe").css({
			maxWidth: "1000%",
			marginLeft: marginLeft,
			marginTop: marginTop,
			width: iframeW,
			height: iframeH
		});
	}
	function ExtractYoutubeId(url) {
		if ("undefined" == typeof url) return !1;
		var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
		return null !== id && id[1];
	}
	function do_validate_field(textArray,formId, SelectArray){
		validationStr = false;

		// code for privacy and terms
		if(jQuery('.validation_error').length){
			jQuery('.validation_error').css("border", "none");
		}
		if( jQuery('form#'+formId).find('input:checkbox[name=cdhl_terms_privacy]').length > 0 ){
			var checkbox_field = jQuery('form#'+formId).find('input:checkbox[name=cdhl_terms_privacy]:checked').val();
			if (checkbox_field == null || checkbox_field == "" ) {
				validationStr = true;
				jQuery('form#'+formId).find('input:checkbox[name=cdhl_terms_privacy]').parent().parent('div').addClass('validation_error').css({"border-style":"solid","border-width":"1px 1px 1px 1px","border-color":"red"});
			}
		}

		for (var n = 0; n < textArray.length; n++) {
			str = textArray[n];
			jQuery('form#'+formId).find('input[name='+str+']').css({"border":"none"});
			var field_val = jQuery('form#'+formId).find('input[name='+str+']').val();
			if (field_val == "") {
				validationStr = true;
				jQuery('form#'+formId).find('input[name='+str+']').css({"border-style":"solid","border-width":"1px 1px 1px 1px","border-color":"red"});
			}

			if( jQuery("input[name="+str+"]").hasClass('cardealer_mail') ) {
				var varTestMailExp=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				var varEmail = field_val;
				if (varEmail && varEmail.search(varTestMailExp) == -1) {
					validationStr = true;
					jQuery('form#'+formId).find('input[name='+str+']').css({"border-style":"solid","border-width":"1px 1px 1px 1px","border-color":"red"});
				}
			}
		}
		if (typeof SelectArray != 'undefined' ) {
			if(SelectArray)
			{
				for (var n = 0; n < SelectArray.length; n++) {
					str = SelectArray[n];
					jQuery('form#'+formId).find('select[name='+str+']').next('.nice-select').css({"border-color":"#e3e3e3"});

					var field_val = jQuery('form#'+formId).find('select[name='+str+']').val();
					if (field_val == "") {
						validationStr = true;
						jQuery('form#'+formId).find('select[name='+str+']').next('.nice-select').css({"border-style":"solid","border-width":"1px 1px 1px 1px","border-color":"red"});
					}
				}
			}
		}
		return validationStr;
	}
	/***** Code for Youtube and Vimeo video of theme options ends ******/

	jQuery(document).ready(function($) {

		// Detect ios 11_0_x affected
		// NEED TO BE UPDATED if new versions are affected
		var ua = navigator.userAgent,
		iOS = /iPad|iPhone|iPod/.test(ua),
		iOS11 = /OS 11_0_1|OS 11_0_2|OS 11_0_3/.test(ua);

		// ios 11 bug caret position
		if ( iOS && iOS11 ) {

			// Add CSS class to body
			jQuery("body").addClass("iosmodalFix");

		}

		// CODE FOR INPUT MASK SSN
		if( jQuery(".social_security_number_mask").length > 0 ){
			jQuery(".social_security_number_mask").inputmask("XXX-XX-XXXX");
		}

		/* Contact Form 7 - Show Hide Fields - Start */
		$( 'form.wpcf7-form' ).each(function () {
			var $form = jQuery( this ); // only add form is its class is "wpcf7-form" and if the form was not previously added
			var cdhl_cf7_show_animation_time = 200;
			var cdhl_cf7_hide_animation_time = 200;
			var cdhl_cf7_show_animation    = {
			  "height": "show",
			  "marginTop": "show",
			  "marginBottom": "show",
			  "paddingTop": "show",
			  "paddingBottom": "show"
			};
			var cdhl_cf7_hide_animation    = {
			  "height": "hide",
			  "marginTop": "hide",
			  "marginBottom": "hide",
			  "paddingTop": "hide",
			  "paddingBottom": "hide"
			};


			if ( $form.has('input[name="cardealer_lead_form"]').length > 0 ) {
				var skip_fields = [];

				if ( $form.has('input[name="joint_application"]').length > 0 ) {

					$form.find('.financial-form.financial-form-join-application').find('input,select,textarea').each(function () {
						skip_fields.push( $(this).attr('name') );
					});
					if ( ! $form.find('input[name="joint_application"]').is(':checked') ) {
						$( 'input[name="cdhl_skip_fields"]').val( JSON.stringify( skip_fields ) );
						$( '.financial-form.financial-form-join-application' ).hide();
					} else {
						$( 'input[name="cdhl_skip_fields"]').val( JSON.stringify([]) );
						$( '.financial-form.financial-form-join-application' ).show();
					}
					$( $form ).on( 'change', 'input[name="joint_application"]', function() {
						var toggle = $(this).is(':checked');
						if ( toggle ) {
							$( 'input[name="cdhl_skip_fields"]').val( JSON.stringify([]) );
							$( '.financial-form.financial-form-join-application' ).animate( cdhl_cf7_show_animation, cdhl_cf7_show_animation_time ); // show with animation
						} else {
							$( 'input[name="cdhl_skip_fields"]').val( JSON.stringify( skip_fields ) );
							$( '.financial-form.financial-form-join-application' ).animate( cdhl_cf7_hide_animation, cdhl_cf7_hide_animation_time ); // hide
						}
					});
				}

				if ( $form.has('input[name="test-drive"]').length > 0 ) {

					$form.find('.schedule-test-drive-fields').find('input,select,textarea').each(function () {
						skip_fields.push( $(this).attr('name') );
					});

					if ( 'No' === $form.find('input[name="test-drive"]:checked').val() ) {
						$( '.schedule-test-drive-fields' ).hide();
						$( 'input[name="cdhl_skip_fields"]').val( JSON.stringify( skip_fields ) );
					} else {
						$( '.schedule-test-drive-fields' ).show();
						$( 'input[name="cdhl_skip_fields"]').val( JSON.stringify([]) );

					}
					$( $form ).on( 'change', 'input[name="test-drive"]', function() {
						var toggle = ( 'Yes' === this.value );
						if ( toggle ) {
							$( 'input[name="cdhl_skip_fields"]').val( JSON.stringify([]) );
							$( '.schedule-test-drive-fields' ).animate( cdhl_cf7_show_animation, cdhl_cf7_show_animation_time ); // show with animation
						} else {
							$( 'input[name="cdhl_skip_fields"]').val( JSON.stringify( skip_fields ) );
							$( '.schedule-test-drive-fields' ).animate( cdhl_cf7_hide_animation, cdhl_cf7_hide_animation_time ); // hide
						}
					});
				}

			}
		});
		/* Contact Form 7 - Show Hide Fields - End */

		/*********************************
			potenza custom menu
		**********************************/
		$( document ).on( 'click', '.potenza-custom-menu.horizontal li a', function( e ) {
			e.preventDefault();

			var full_url = this.href;
			var parts    = full_url.split("#");
			var target   = parts[1];

			if ( typeof target === 'undefined' || ! $( '#' + target ).length > 0 ) {
				window.location.href = full_url;
				return;
			}

			var gap = 75;
				$( 'html,body' ).stop().animate({
					scrollTop:  $( '#' + target ).offset().top - gap
				}, 600 );
				$( '.potenza-custom-menu.horizontal li' ).removeClass( 'active' );
				$( this ).parent().addClass( 'active' );
			return false;
		});

		if ( $( '.potenza-custom-menu.horizontal' )[0] ) {
			var x = $(".potenza-custom-menu.horizontal").offset().top;
			$(window).scroll(function () {
				if (!$('.potenza-custom-menu.horizontal').hasClass('no-sticky')) {
					if ($(this).scrollTop() > x) {
						$('.potenza-custom-menu.horizontal').addClass('sticky');
					}
					else {
						$('.potenza-custom-menu.horizontal').removeClass('sticky');
					}
				}
				var scrollPos = $(document).scrollTop() + 80;
				$('.potenza-custom-menu.horizontal li a').each(function () {
					var currLink = $(this);
					if ( $(currLink.attr("href")).length > 0 ) {
						var refElement = $(currLink.attr("href"));
						if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
							$('.potenza-custom-menu.horizontal li').removeClass("active");
							currLink.parent().addClass("active");
						}
						else{
							currLink.parent().removeClass("active");
						}
					}
				});
			});
		}

	});

	// Sticky Kit
	// Sticky Sidebar
	if ( jQuery(".listing-sidebar-sticky").length > 0 ) {
		(function() {
			var reset_scroll;
			jQuery(function() {
				if(window.matchMedia('(min-width: 768px)').matches) {
					return jQuery("[data-sticky_column]").stick_in_parent({
						parent: "[data-sticky_parent]"
					});
				}
			});

			reset_scroll = function() {
				var scroller;
					scroller = jQuery("body,html");
					scroller.stop(true);
					if (jQuery(window).scrollTop() !== 0) {
						scroller.animate({
							scrollTop: 0
						}, "fast");
					}
				return scroller;
			};

			window.scroll_it = function() {
				var max;
				max = jQuery(document).height() - jQuery(window).height();
				return reset_scroll().animate({
					scrollTop: max
				}, max * 3).delay(100).animate({
					scrollTop: 0
				}, max * 3);
			};
			window.scroll_it_wobble = function() {
				var max, third;
				max = jQuery(document).height() - jQuery(window).height();
				third = Math.floor(max / 3);
				return reset_scroll().animate({
					scrollTop: third * 2
				}, max * 3).delay(100).animate({
					scrollTop: third
				}, max * 3).delay(100).animate({
					scrollTop: max
				}, max * 3).delay(100).animate({
					scrollTop: 0
				}, max * 3);
			};

			jQuery(window).on("resize", (function(_this) {
				return function(e) {
					return jQuery(document.body).trigger("sticky_kit:recalc");
				};
			})(this));
			jQuery(window).on("scroll", (function(_this) {
				return function(e) {
					return jQuery(document.body).trigger("sticky_kit:recalc");
				};
			})(this));

		}).call(this);

		(function() {
			var sticky;
			if(window.matchMedia('(min-width: 768px)').matches) {
				jQuery(".listing-sidebar-sticky").sticky({topSpacing:0});
			}
		});
	}
	function cardealer_lazyload() {
		if(jQuery('.cardealer-lazy-load').length) {
			jQuery('.cardealer-lazy-load').lazyload();
		}
	}
} )( jQuery );

	function cardealer_load_masonry(){

		// blog
		setTimeout(function(){
			if( jQuery('.blog.masonry-main .masonry').length > 0 ){
				jQuery('.masonry-main .masonry').masonry({
					itemSelector: '.masonry-item'
				});
			}
		}, 3000);
			//other
		var container = jQuery( '.masonry-main .masonry' );
		if( container.length > 0 && (jQuery( '.isotope-2.masonry' ).length > 0) ){
			jQuery(container).each(
				function( key, value ) {
				var $msnry = jQuery( '.isotope-2.masonry' );
				var msnry = new Shuffle( $msnry, {
					itemSelector: '.masonry-item',
				});
			});
		}

	}

/**************************************************
	Fix for Visual Composer RTL Resize Issue
	TODO: Attach this function to jQuery/Window	to make it available globally
	Check this : http://stackoverflow.com/questions/2223305/how-can-i-make-a-function-defined-in-jquery-ready-available-globally
**************************************************/
jQuery(function($){
	"use strict";
	if( jQuery('html').attr('dir') == 'rtl' ){

		jQuery(window).load(function() {
			cardealer_vc_rtl_fullwidthrow();
		});

		$( window ).resize(function() {
			cardealer_vc_rtl_fullwidthrow();
		});

	}
	if( ! jQuery('#dealer-slider-year-range').hasClass('dealer-slider-year-range') ){
		jQuery('#dealer-slider-year-range').addClass('dealer-slider-year-range');
	}
});

function cardealer_vc_rtl_fullwidthrow() {
	if( jQuery('html').attr('dir') == 'rtl' ){
		var $elements = jQuery('[data-vc-full-width="true"]');
		jQuery.each($elements, function(key, item) {
			var $el = jQuery(this);
			$el.addClass("vc_hidden");
			var $el_full = $el.next(".vc_row-full-width");
			if ($el_full.length || ($el_full = $el.parent().next(".vc_row-full-width")), $el_full.length) {
				var el_margin_left = parseInt($el.css("margin-left"), 10);
				var el_margin_right = parseInt($el.css("margin-right"), 10);
				var offset = 0 - $el_full.offset().left - el_margin_left;
				var width = jQuery(window).width();
				$el.css({
					left: 'auto',
					right: offset,
					width: width,
				});
			}
			$el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden");
		});
	}
}

// set same height for every car-carousel items
function setMinHeight( minheight ) {
	jQuery('.owl-carousel').each(function(i,e){
		if(!jQuery(this).hasClass("related-vehicle")){
			var oldminheight = minheight;
			jQuery(e).find('.item').each(function(i,e){
				minheight = jQuery(e).height() > minheight ? jQuery(e).height() : minheight;
			});
			jQuery(e).find('.car-item').css("min-height",minheight + "px");
			minheight = oldminheight;
		}
	});

	jQuery('.pgs_cars_carousel-items').each(function(i,e){
		if(!jQuery(this).hasClass("related-vehicle")){
			var oldminheight = minheight;
			jQuery(e).find('.item').each(function(i,e){
				minheight = jQuery(e).height() > minheight ? jQuery(e).height() : minheight;
			});
			jQuery(e).find('.car-item').css("min-height",minheight + "px");
			minheight = oldminheight;
		}
	});
};
