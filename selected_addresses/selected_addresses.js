(function ($) { 

  Drupal.behaviors.cred_address = {

    attach: function (context, settings) {
			display_style = $('.field-group-multipage:last').css('display');
			if(display_style == 'block'){
				$("#cred-addresses").css('display','block');	
			}
			else{
				$("#cred-addresses").css('display','none');
			}
		$('.field-group-multipage input.form-submit').on('click', function(){
			display_style = $('.field-group-multipage:last').css('display');
			if(display_style == 'block'){
				$("#cred-addresses").css('display','block');	
			}
			else if(display_style == 'none'){
				$("#cred-addresses").css('display','none');
			}
		});
		
		$('input[name="zipcode"]').change(function(){
			
				$('select[name="city"]').val('');
				
				$('select[name="state"]').val('');
			
				$('select[name="country"]').val('');
			
		});
		

//		jQuery.ajaxSetup ({
//		// Disable caching of AJAX responses
//
//
//		cache: false
//		});
//
//		base_path = window.location.protocol + "//" + window.location.host + "/";
//
//		$('#edit-zipcode input').on('blur',function(){
//
//		  zipcode = $(this).val(); 	
//
//				$.post(base_path+'cred_address/'+zipcode, function( data ){  	
//                //alert(data);
//				address = $.parseJSON(data);
//				cities='<option value="">Select City</option>';
//				states='<option value="">Select State</option>';
//				countries='<option value="">Select Country</option>';
//				$.each(address, function(i, item) {
//					cities += '<option value="'+item.city+'">'+item.city+'</option>';
//					states += '<option value="'+item.state+'">'+item.state+'</option>';
//					countries += '<option value="'+item.country+'">'+item.country+'</option>';
//				})																								
//					$("#edit-city select").html(cities);
//					$("#edit-state select").html(states);
//					$("#edit-country select").html(countries);
//
//			});
//
//		});



			

    }

  };  



}(jQuery));

