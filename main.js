

$(function(){

	$( ".btn-add" ).click(newTodo);
	$( ".btnDel" ).click(delAllTodos);
	
	$('.button').click(function(){
		var $btn = $(this),
		$form = $btn.parents('.form-body'),
		index = $form.index(),
		$activeSpan = $('.form-header span').eq(index);

		nextForm(index, $activeSpan, $form);


	});

	function deleteItem(){
		$(this).parents('.todos').addClass('animate-delete');
		var delEl = $(this).parents('.todos.animate-delete');
		setTimeout(function(){
		 	delEl.remove();	
		},500);
		
	}
	function delAllTodos(){
		var todos = $(this).siblings('.todos');
		if(todos.length > 0){
			todos.addClass('animate-delete');
			setTimeout(function(){
				todos.remove();	
			},400);
		}
		
		
		
	}

	function newTodo(){

		var todoItem = '<div class="todos"><i class="fa fa-trash"></i><span class="items">New Item</span><input type="text" placeholder="Enter new item" value="New Item" /></div>';
		$(this).parents('.todo-list').append(todoItem);
		var item = $('.todos span').last();
		var delEl = item.siblings('i'); 
	
		item.click(editTodo);
		item.parents('.todos').children(2).blur(updateTodo);
		item.parents('.todos').children(2).keypress(keyPressUpdate);
		delEl.click(deleteItem);

		item.parents('.todos').addClass('edit');
		item.parents('.todos').children('input').focus();
		item.parents('.todos').children('input').select();
	}

	function editTodo(){
		var item = $(this).parents('.todos');
		item.addClass('edit');
		item.children('input').focus();
		item.children('input').select();
		
	}

	function updateTodo(){
		
		var value = $(this).val();
		if(value == ""){
			value = "New Item";
		}
		$(this).siblings('span').html(value);	
		$(this).parents('.todos').removeClass('edit');
		
	}

	function keyPressUpdate(event){
		
		if(event.which === 13){
			updateTodo.call(this);
		}
		
	}

	function nextForm(index, $activeSpan, $form){

		if(index <= 2){
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