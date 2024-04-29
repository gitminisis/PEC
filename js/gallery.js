var resizeOptions =  {aspectRatio: true, minHeight: 50 }; 
  //drag options made available by the JQuery UI draggable plugin. 
var dragOptions =  {containment: 'parent'}; 

var zoomOptions = {
	    zoomWidth: 300,
	    zoomHeight: 250,
            xOffset: 10,
            yOffset: 0,
            position: "right" };

$(document).ready(function(){
    $('.img_gallery img').resizable(resizeOptions).parent().draggable(dragOptions);
    
    $(".delete_all").click(function(){
      deleteAllImages(); 
    });
    
    $(".img_garbage").droppable({
      tolerance: "pointer",
      drop: function(event,ui)
      {
      var img = ui.draggable.find("img"); 
      removeImage(ui.draggable.find("img").attr("src"));
      ui.draggable.hide(500);
      }
    });
    
    $('.zoom').click(function(){
      $('.img_gallery').html('');
       $.ajax({  
   type: "POST",  
   url: "/page/reloadGallery" ,
   success: function(data) {  
     $('.img_gallery').html(data).children('.zoom').jqzoom(zoomOptions)  
     .hide()  
     .fadeIn(1500);  
   },error:function(textStatus,errorThrown)
   {
   //alert(errorThrown+textStatus);
   }  
 });  
      
    });
    
    
});


function removeImage(src)
{

$.ajax({  
   type: "POST",  
   url: "/page/removeItemFromGallery?"+src+"=on" ,
   success: function(data) {  
     $('.gallery_count').html(data)  
     .hide()  
     .fadeIn(1500); 
   },error:function(textStatus,errorThrown)
   {
   //alert(errorThrown);
   }  
 });    
}

function deleteAllImages()
{

$.ajax({  
   type: "POST",  
   url: "/page/deleteAllImages",
   success: function(data) {  
     $('.gallery_count').html(data)  
     .hide()  
     .fadeIn(1500);
     $('.img_gallery').html(''); 
   },error:function(textStatus,errorThrown)
   {
   
   }  
   
 });    

}    
  