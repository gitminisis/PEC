/**
 *The MINISIS OPAC Interface Javascript Library 
 * Version: 1.0
 * Date: July 27/2010
 * Author: Geoff Affleck 
 * 
 * This library handles the common AJAX and JS calls of the standard MINISIS OPAC.
 *       
 * 
 */

 //Initialize the following objects if they appear on the page. 
$(document).ready(function(){


// $(".filter input").change(function(){
      // if($(this).parent().children("input:checked").length >1)
      // {
        
        // $(this).attr("checked",false);
        // alert("Only 1 filter may be selected from each category.");  
      // } 
    // }); 
    
    // $(".filter_btn").click(function(){
      // var newQuery = MINISIS_QUERY; 
      
      // $(".filter input:checked").each(function(){
      
          // newQuery+= " AND "+$(this).attr("value"); 
      // }); 
      
      
      // window.location = "/page/summary/PUB_DESCRIPTION?query="+html_entity_decode(newQuery);  
    // });

    
   	
	
	$(".level_filter input").change(function(){
  
        $(".date_filter input:checked").each(function(i){
          if(i>=1)
          {
            $(this).removeAttr("checked");
            alert("Please note you may only select 1 filter from each category");
          }
        }); 
      });

	 $(".apply_filter").click(function(){
	 var sumsessid = ReadCookie('summaryURL');
	 var sumsessid = sumsessid.match('(.*?)\/([0-9]+)');
	  fquery = applyFilter();
      queryURL = sumsessid[0]+"?SEARCH&EXP="+fquery+'&filterapp=Y'; 
      window.location = queryURL;  
     });
        
        $('.remove_level_filter').click(function() {
                fquery = removeLevelFilter();
                queryURL = sessid+'?SEARCH&EXP='+fquery;
                window.location = queryURL;
        });
        
        $('.remove_media_filter').click(function() {
                fquery = removeMediaFilter();
                queryURL = sessid+'?SEARCH&EXP='+fquery;
                window.location = queryURL;
        });
        
        $('.remove_format_filter').click(function() {
                fquery = removeFormatFilter();
                queryURL = sessid+'?SEARCH&EXP='+fquery;
                window.location = queryURL;
        });
		
	
	function applyFilter()
{
  var query = raw_query.replace(/\//g,"%2f"); 
  
  $(".level_filter input:checked").each(function(){
     query += " AND "+$(this).attr("value");  
    
  }); 
  
  $(".media_filter input:checked").each(function(){
     query += " AND "+$(this).attr("value");  
    
  }); 
  
  $(".format_filter input:checked").each(function(){
     query += " AND "+$(this).attr("value");  
    
  }); 
  
  query += "&RANKING=N&ERRMSG=[pec]err.htm";
  
  //alert(query); 
  return query;   
}

function removeLevelFilter()
{
  var query = raw_query.replace(/\//g,"%2f"); 
  
  $(".level_filter input:checked").each(function(){
        var checkQuery = ' AND ' + $(this).attr('value');
        
        $(this).attr('checked', false);
        
        if (query.indexOf(checkQuery) !== -1) {
                query = query.replace(checkQuery, ""); 
        }
  }); 
  
  if (query.indexOf('&RANKING=N&ERRMSG=[pec]err.htm') == -1) {
        query += '&RANKING=N&ERRMSG=[pec]err.htm';
  }
  
  return query;
}
function removeFormatFilter()
{
  var query = raw_query.replace(/\//g,"%2f"); 
  
  $(".level_filter input:checked").each(function(){
        var checkQuery = ' AND ' + $(this).attr('value');
        
        $(this).attr('checked', false);
        
        if (query.indexOf(checkQuery) !== -1) {
                query = query.replace(checkQuery, ""); 
        }
  }); 
  
  if (query.indexOf('&RANKING=N&ERRMSG=[pec]err.htm') == -1) {
        query += '&RANKING=N&ERRMSG=[pec]err.htm';
  }
  
  return query;
}


function removeMediaFilter()
{
  var query = raw_query.replace(/\//g,"%2f"); 
  
  $(".media_filter input:checked").each(function(){
        var checkQuery = ' AND ' + $(this).attr('value');
        
        $(this).attr('checked', false);
        
        if (query.indexOf(checkQuery) !== -1) {
                query = query.replace(checkQuery, ""); 
        }
  }); 
  
  if (query.indexOf('&RANKING=N&ERRMSG=[pec]err.htm') == -1) {
        query += '&RANKING=N&ERRMSG=[pec]err.htm';
  }
  
  return query;
}



    $('.gallery').facebox();
    $('.clipboard_wrap').hover(function(){
      $(this).children().css('visibility','visible');
    });
    
    $('.selAll').click(function(){
       $('.summary_table input').each(function(){
          $(this).attr('checked','on')
       });
    });
    
      $('.unSelAll').click(function(){
       $('.summary_table input').each(function(){
          $(this).removeAttr('checked')
       });
    });
   
   $('.detail_remove_clipboard').click(function(){
       var aj_url = $(this).attr('id');
       
       $.ajax({  
        type: "POST",  
        url: aj_url,
        success: function(data) {  
        
        $('.clipboard_count').html(data)  
        .hide()  
        .fadeIn(1500);
        
        //alert('Items Successfully removed from Clipboard');  
        },error:function(textStatus,errorThrown)
        {
        alert('Could not remove Item from Clipboard');
        } 
        });
    });
   
    //remove items from clipboard
	$('.clipboard_table').each(function(){
	  $('a.remove-from-list').click(function(){
                $(this).parent('.hide-checkbox').find('input').attr('checked','checked');
                $('#web_selection_summary_form').submit();
        });	
	});
    // $('.remove_clipboard').click(function(){
       // var id = $(this).attr('id');
       // var db = $(this).parents().attr('id');
       // var link = $(this);
       // $.ajax({  
        // type: "GET",  
        // url: "/page/removeItemFromClipboard/"+db+'/'+id,
        // success: function(data) {  
        
        // $('.clipboard_count').html(data)  
        // .hide()  
        // .fadeIn(1500);
        // var parent = $(this).parents("tr");
        
        // link.parents("tr").remove();
        // //alert('Items Successfully removed from Clipboard');  
        // },error:function(textStatus,errorThrown)
        // {
        // alert('Could not remove Item from Clipboard');
        // } 
        // });
    // });
    
    // $('#save_clipboard').click(function(){
    // //first get all the selected id's in a string
    // var db = $(this).attr('class')
    // var selected = ''
    // $('.summary_table input').each(function(){
        // if ($(this).attr('checked'))
        // {
        // selected += $(this).attr('name')+'='+$(this).attr('id')+'&';
        // }
    // });
     
    // //now do an ajax call to our save action sending the string as data
   // $.ajax({  
   // type: "POST",  
   // url: "/page/addItemsToClipboard/"+db ,
   // data: selected,  
   // success: function(data) {  
     // $('.clipboard_link').animate({border: '6px solid yellow'},1000,function(){
     // $('.clipboard_count').html(data)  
     // .hide()  
     // .fadeIn(1500, function(){
      // $('.clipboard_link').animate({border: '0'},2000);
      // });
     // });  
   // },error:function(textStatus,errorThrown)
   // {
   // alert(errorThrown);
   // }  
 // });  
// });

  // $('#save_item_clipboard').click(function(){
      // //get the url of this item which should contain the ID
      // var surl = $(this).attr('href');
         // $.ajax({  
          // type: "GET",  
        // url: surl,
     
      // success: function(data) {  
      // $('.clipboard_link').animate({border: '6px solid yellow'},1000,function(){
      // $('.clipboard_count').html(data)  
     // .hide()  
     // .fadeIn(1500, function(){
      // $('.clipboard_link').animate({border: '0'},2000);
      // });
     // });  
   // },error:function(textStatus,errorThrown)
   // {
   // alert(errorThrown);
   // }  
 // });
 // return false;  
      
  // });

  // $('.delete_clipboard').click(function(){
    // $.ajax({  
   // type: "POST",  
   // url: "/clipboard/delete" ,
   // success: function(data) {  
     // $('.clipboard_count').html(data)  
     // .hide()  
     // .fadeIn(1500);
     // alert('Clipboard Successfully deleted') ; 
   // },error:function(textStatus,errorThrown)
   // {
   // alert(errorThrown);
   // }  
 // });
 // return false;  
  // });
  
  $('.add_gallery').click(function(){
  //on click get the image, caption and ref code 
      var href = $('.image_group a:first-child').attr('href');
      var title = $('.image_group a:first-child').attr('title');
      var refd = $('.REFD_val').html();
      var img = {'title':title,'href':href,'refd':refd}
      
   $.ajax({  
   type: "POST",  
   url: "/page/addImagesToGallery" ,
   data: img,  
   success: function(data) {  
     $('.gallery_count').html(data)  
     .hide()  
     .fadeIn(1500); 
     alert("Items successfully added to Image Gallery"); 
      
   },error:function(textStatus,errorThrown)
   {
   alert(errorThrown);
   }  
 });    
  });
  
  $('.submit_images').click(function(){
    //first get all the selected id's in a string
    
    var selected = ''
    $('.image_group input').each(function(){

        if ($(this).attr('checked'))
        {
        selected += $(this).attr('name');
        }
		console.log(selected);
    });
    //now do an ajax call to our save action sending the string as data
   $.ajax({  
   type: "POST",  
   url: "addImagesToGallery" ,
   data: selected,  
   success: function(data) {  
     $('.gallery_link').animate({border: '6px solid yellow'},1000,function(){
     $('.gallery_count').html(data)  
     .hide()  
     .fadeIn(1500, function(){
      $('.gallery_link').animate({border: '0'},2000);
      });
     });  
   },error:function(textStatus,errorThrown)
   {
   alert(errorThrown);
   }  
 });  
});
  
  
$('#nav li').hover(function(){
  $(this).children('li').animate({
    visibility: visible
  },1000);
});  


$(".filter input").change(function(){
      if($(this).parent().children("input:checked").length >1)
      {
        
        $(this).attr("checked",false);
        alert("Only 1 filter may be selected from each category.");  
      } 
    }); 
    
    $(".filter_btn").click(function(){
      var newQuery = MINISIS_QUERY; 
      
      $(".filter input:checked").each(function(){
      
          newQuery+= " AND "+$(this).attr("value"); 
      }); 
      
      
      window.location = "/page/summary/PUB_DESCRIPTION?query="+html_entity_decode(newQuery);  
    }); 
       
      
       

});


$(document).ready(function() {
        $("ul.blockeasing li.main").mouseover(function(){ //When mouse over ...
        	   //Following event is applied to the subnav itself (making height of subnav 60px)
		      $(this).find('.subnav').stop().animate({height: '60px', opacity:'1'},{queue:false, duration:1500, easing: 'easeOutBounce'})
		});                                  

	    $("ul.blockeasing li.main").mouseout(function(){ //When mouse out ...
	          //Following event is applied to the subnav itself (making height of subnav 0px)
		      $(this).find('.subnav').stop().animate({height:'0px', opacity:'0'},{queue:false, duration:1600, easing: 'easeOutBounce'})
		});
    
});

 function disableRightClick(container, message){
    $(container+' img').bind("contextmenu", function(e){
        if(message == true)
        {
        alert('For a copy of this image, please contact The Historical New Orleans Collection Williams Research Center at wrc@hnoc.org.');
        }    
         
        return false; 
     });
     
     }



function html_entity_decode(str)
{
 try   
   {
     var tarea=document.createElement('textarea');
     tarea.innerHTML = str; return tarea.value;
     tarea.parentNode.removeChild(tarea)
   }

   catch(e)
   {
  //for IE add<div id="htmlconverter" style="display:none;"></div> to the page 
    document.getElementById("htmlconverter").innerHtml = '<textarea id="innerConverter">' + str + '</textarea>';
    var content = document.getElementById("innerConverter").value;
    document.getElementById("htmlConverter").innterHTML = "";
    return content;
    }

}



function replace_all_substring ( data_string, old_value, new_value )
{
  var argv = replace_all_substring.arguments;
  var argc = replace_all_substring.arguments.length;
  var max_set, i;
  var string1, string2, final_string;
  
  max_set = (argc-1) / 2;
  
  final_string = data_string;
  
  for ( i = 0 ; i < max_set ; i++ ) {
    string1 = final_string;
    while ( string1.indexOf(argv[1+i*2], 0) >= 0 ) {
      string2 = string1.replace ( argv[1+i*2], argv[1+i*2+1] );
      string1 = string2;
    }
    final_string = string1;
  }
  
  return final_string;
} 



