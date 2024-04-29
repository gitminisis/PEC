$(document).ready(function(){
    $('.facebox').facebox(); 
	$('.close').click(function(){
	
	});
    
    // $('.browse').mouseover(function(){
        // var id = $(this).attr('id');
        // var num = id.split('_');
        // var selector = '#field_'+num[1];
        // var value = $(selector).val();
        // $(this).attr('href','link);
    // });
    
    // $('.browse_window').live('dblclick',function(){
       // var id = $(this).attr('id');
       // var selVal = $(this).val();
       // $('#text_'+id).val(selVal);
       // $('.close').click();
    // });
    
    // $('.browse_nav span').live('click',function(){
        // //first get the href of this link
        // var href = $(this).attr('id');
        // //get the row num 
        // var id = $('.browse_window').attr('id');
        // //close the window
        // //$('.close').click();
        // //set the row num link's href to ours
        // $('#selector_'+id).attr('href',href);
        // //click it
        // $('#selector_'+id).click();
        
        
        
          
        
    // }); 
    
    // $("#search_form").validate({
      // rules:
      // {
      // keyword_cl: "required"
      // }
      
    // });
    
    
    // $('#commentForm').validate({
  // rules: {
    // CM_AUTHOR: "required",
    // CM_EMAIL: {required:true,email:true},
    // CM_TITLE : "required",
    // CM_BODY: "required"
  // },
   // submitHandler: function()
   // {
   // commentSubmit();
   // }
 // });
 // $('.comment_block').accordion({active:false,collapsible:true});
 
    
});

function commentSubmit()
{
    
    var datastring = 'cm_author='+$('#cm_author').val()+'&cm_email='+$('#cm_email').val()+'&cm_title='+$('#cm_title').val()+'&cm_body='+$('#cm_body').val()+'&cm_db='+$('#cm_db').val()+'&cm_record='+$('#cm_record').val();
    $.ajax({  
   type: "POST",  
   url: "/page/addComment" ,
   data: datastring,  
   success: function() {  
     $('.comment_block').html("<div id='message'></div>");  
     $('#message').html("<h2>Comment Submitted!</h2>")  
     .append("<p>Comments will be made public upon staff approval.</p>")  
     .hide()  
     .fadeIn(1500);  
   }  
 });  
 return false;  
    
  
}
