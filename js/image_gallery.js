
/**
 *     This website and its content is copyright of MINISIS Inc. - 
 *      © MINISIS Inc. 2010 All rights reserved. 
 *      
 *      The redistribution or reproduction of any part or the entirety of the
 *      contents without the expressed written permission of MINISIS Inc. is 
 *      strictly prohibited. 
 *      
 *      Any or all transmission or storage of materials found in the website 
 *      and related databases cannot be undertaken directly or indirectly. Any 
 *      violation of this copyright could result in legal and financial 
 *      ramifications for those individuals abusing the technology and/or 
 *      MINSIS Inc.  
       
 *
 *
 *
 */

  var resizeOptions =  {aspectRatio: true, minHeight: 50 }; 
  var dragOptions =  {containment: 'body', start: function(){
			
			var dropimage = $(this).find("img").attr("alt");
			
			}
  } 
  
  $(document).ready(function(){

    $('#imgs').html('');     
    retrieveAll("#imgs", false , false);
    disableRightClick('#imgs', true); 
    //resize the images again by applying the css property to ensure that resizing has occured. 
    //$('#imgs img').css("height", "150px").css("width", "auto");
    $("#imgs img").resizable(resizeOptions).parent();
    setImgDetails();  
    equalHeights("#img_garbage", "#imgs"); 
    
    $(".zoom_on").bind("click", function(e){
        $("#imgs").html(''); 
        retrieveAll("#imgs", true , false);  
        var options = {xOffset: 40, lens: false, zoomWidth: 250, zoomHeight: 250, title: true, showEffect: "fadein", hideEffect: "fadeout", fadeoutSpeed: "fast", fadeinSpeed: "slow"};
        $(".zoom").jqzoom(options); 
       setImgDetails(); 
       equalHeights("#img_garbage", "#imgs");
       disableRightClick('#imgs', false);
    }); 
      
     $(".zoom_off").bind("click", function(e){
      $("#imgs").html(''); 
       retrieveAll("#imgs", false , false);
       $("#imgs img").resizable(resizeOptions).parent().draggable(dragOptions); 
         setImgDetails(); 
         equalHeights("#img_garbage", "#imgs");
         disableRightClick('#imgs', true);
     });
     
    
          
    });
    
    function disableRightClick(container, message){
    $(container+' img').bind("contextmenu", function(e){
        if(message == true)
        {
        alert('For a copy of this image, please contact The Western University Library');
        }    
         
        return false; 
     });
     
     }
    
     /**$('#imgs img').each(function(e){
      $(this).css("height", "100px").css("width", "auto"); 
     });*/
    checkSession(); 
    
    function checkSession(){
    var result = Get_Cookie("Session");
    
    if(result === null)
    {
      initSession(); 
    }
    }

    
  
    function initSession(){
    $.getJSON("", 
    function(data){
     $.Jookie.Initialise("Session", -1);
     $.Jookie.Set("Session", "sessVars", data );
     });
    }
    
     
    
    function setImgDetails(){
     $("#imgs img").bind("click", function(){
        var accno = $(this).attr("title"); 
        showItemDetails(accno); 
     });   
     }
    
    function showItemDetails(accno){
    var cookieId = getCookieByAccno(accno); 
    var title =  $.Jookie.Get(cookieId, "title"); 
    var accno =  $.Jookie.Get(cookieId, "accno");

    //accno = removeLastChar(accno); 
    var caption = $.Jookie.Get(cookieId, "caption"); 

    
    $('#deets').html('Image Details: <br />'); 
    $('#deets').append('<span class="title">Title: '+ title+ '</span><br/><span class="accno">Accession Number: '+accno+ '</span><br/><span class="Caption">Caption: '+caption+ '</span>'); 
    }
    
    function equalHeights(div1, div2)
    {
    var height1 = $(div1).height(); 
    var height2 = $(div2).height(); 
    if(height1 > height2)
    {
      $(div2).height(height1); 
    }
    if(height2 > height1)
    {
      $(div1).height(height2); 
    }
    
    } 
	

	$(function() {
    //$(".gall_img").draggable();

    $('#img_garbage').droppable({
        drop: function(event, ui) {
		    console.log(ui);
            $(ui.draggable).remove();
			 
			if (event.srcElement == undefined){
			var dragged = event.target;
			}
			else {
			
			dragged = event.srcElement.alt}
			
			deleteCookie(dragged);			
			$("#"+dragged).remove();
			
        }
    });
});

 $('.delete_all').click(function(){
      deleteCookie(dragged);  
    });

