$(function(){

	$( "div.box" ).on( "swipe", onSwipe );
 
  	// Callback function swipe
  	function onSwipe( event ){
    	//$( event.target ).addClass( "swipe" );
    	console.log("Swipe!");
    }


	$('.button').click(function(){
		var $btn = $(this),
		$form = $btn.parents('.form-body'),
		index = $form.index(),
		$activeSpan = $('.form-header span').eq(index);

		nextForm(index, $activeSpan, $form);


	});

	function nextForm(index, $activeSpan, $form){

		if(index == 0 ||index == 1){
			$form.removeClass('animate-in');
			
			$form.addClass('animate-out');

			setTimeout(function(){
				$activeSpan.removeClass('is-active').next()
					.addClass('is-active');

				$form.removeClass('animate-out is-showing').next()
					.addClass('animate-in is-showing');					
						
				}, 1000);

			setTimeout(function(){
				if(index == 0){
						$('.skill-icons span').each(function(i){
							var el = this;
							setTimeout(function(){
								$(el).addClass('animate-skills');
							},i*20);
						});	
				}
			},1500);
		}
		else{
			// $activeSpan.parents('.form-header').hide();

			

			$form.parents('.form-wrap').addClass('animate-out-right');

			setTimeout(function(){
				$form.removeClass('animate-in is-showing');
				$('.skill-icons span').removeClass('animate-skills');
				$('.form-wrap').removeClass('animate-out-right')
					 .find('.form-body').first().addClass('is-showing');

				$activeSpan.removeClass('is-active');
				$('.form-header span').first().addClass('is-active');	
			},600);
		}
	}

})