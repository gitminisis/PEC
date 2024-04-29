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
 *      The JSON Cookie script by Geoff Affleck at MINISIS 
 *      
 *      This scrip works with the Jquery Jookie script to allow websites to
 *      easily store cookies as JSON objects for easy data retrieval and access
 *      
 *      An object can be stored with any number of members. For example, an image
 *      can be stored with it's corresponding image title, maker, accession number
 *      url and date created. This data can then be retrieved on any page.         
 *
 *
 */

/**Global Variables
 */
var obj;
var cookieName = "image";
//lifetime of cookies in minutes. -1 is only for current browsing session 
var cookieLifeTime = -1; 


/**Store a cookie. The params are up to you and are stored in string format.
 * All parameters must be declared by a $.Jookie.Set(cookieName, memberName, value); call within the 
 * function. In this example, there are 4 parameters being stored and each is set individually in the 
 * method.
 * 
 * This Script stores sequences of cookies with the naming convention image0, image1, image2 etc. 
 * Each image has a title, a url, an accession number and a caption associated with it.     
 * 
 *Note that before a JSON cookie can be modified or called it must be initialized or the script
 *won't work.        
*/
function store(title, url, thumb ,  accno, caption) {
  //check if a cookie of that accession number is already present and if it is 
  //don't allow the save to occur. 
  var check = checkIfAlreadyPresent(accno); 
  if(check === true) { 
    alert("Selected image already in Gallery");
  }else{
    //find the next number in the sequence. 
    var num = get_next_num(cookieName); 
    //initialize the json cookie object (very important)
    $.Jookie.Initialise(cookieName+num, cookieLifeTime); 
    $.Jookie.Set(cookieName+num, "title" , title); 
    $.Jookie.Set(cookieName+num, "url" , url); 
    $.Jookie.Set(cookieName+num, "thumb" , thumb); 
    $.Jookie.Set(cookieName+num, "accno" , accno); 
    $.Jookie.Set(cookieName+num, "caption" , caption); 
    //Debug to print values being stored
    //$.Jookie.Debug(cookieName+num);
    
    //print all the images to the element with class "sum_imgs"
    retrieveAll(".sum_imgs", false , false); 
  } 


}

/**
 * Retrieve all stored cookeis and put them in the specified container element (pass a jquery comaptible
 * element selector eg. "div.imgs_container")
 */ 
function retrieveAll(container, forZoom , forThumb) {

  if(forZoom === undefined)
  {
    forZoom = false; 
  } 
  if(forThumb === undefined)
  {
    forThumb = false; 
  }
  //get the total number of cookies
  var num = get_next_num(cookieName); 
  
  //clear the container of any contents  
  $(container).html(''); 
  
  //loop through all cookies and retrieve each
  for(var i=0; i < num; i++) 
    { 
      retrieve(cookieName+i, container, forZoom , forThumb);
	 
    }
    
    disableRightClick('.colWide', false); 

}

function removeLastChar(accno){
var len = accno.length; 
var stripped = accno.substr(0,len-1); 

return stripped; 
}




/**
 * retrieve a specific image by name pass the container and whether or not it is for the 
 * zoom effect in the gallery. False by default 
 */
function retrieve(name, container, forZoom , forThumb) { 

  var param = "url"; 
  //initialize jookie string
  $.Jookie.Initialise(name); 
  var url = $.Jookie.Get(name, "url"); 
  var title = $.Jookie.Get(name, "title");
  var accno = $.Jookie.Get(name, "accno");
  var thumb = $.Jookie.Get(name , "thumb");
  var imagecookiename = name;  
  
  // set the directory to the thumbnail if requested 
  if(forThumb === true)
  {
    url = thumb; 
  }
  
  
  
  //if it is for zoom add the zoom class and necessary information
  if(forZoom){ 
    $(container).append('<a href="'+url+'" class="zoom" title="'+title+'"> <img id="'+imagecookiename+'" class=cookieName src="'+url+'"  alt="'+title+'" title="'+accno+'"/></a>'); 
  }
  //else add the image with out zoom info  
  else{ 
    $(container).append("<img class=\"gall_img image\" src=\""+url+"\" alt=\""+imagecookiename+"\" id=\""+imagecookiename+"\"title=\""+accno+"\"/>"); 
  }

}

/**
 * get the next number available in the sequence
 */
function get_next_num(cookieName) {

  for(var i = 0; i < 1000 ; i++) {
    var res = Get_Cookie(cookieName+i); 
    if(res === null) {
      return i;
    } 
  }
  
}

/**
 *Check to see if a Min session has already been established. 
 */
checkSession();

function checkSession(){ 
  var result = Get_Cookie("Session");
  if(result === null){ 
    initSession(); 
  }

}

/**
 *Get the session vars data from the data server. Necessary for gallery functioning 
 */
function initSession(){ 
  $.getJSON("", function(data){ 
    $.Jookie.Initialise("Session", -1); 
    $.Jookie.Set("Session", "sessVars", data ); 
  }); 


}

/**
 * Get a cookie by name. Used by the get_next_num function 
 */ 
function Get_Cookie( check_name ){ 
  var a_all_cookies = document.cookie.split( ';' ); 
  var a_temp_cookie = ''; 
  var cookie_name = ''; 
  var cookie_value = ''; 
  var b_cookie_found = false; 
  // set boolean t/f default f
  for ( i = 0; i < a_all_cookies.length; i++ ) { 
  // now we'll split apart each name=value pair 
  a_temp_cookie = a_all_cookies[i].split( '=' );
  // and trim left/right whitespace while we're at it 
  cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');
  // if the extracted name matches passed check_name 
  if ( cookie_name == check_name ){ 
    b_cookie_found = true; 
    // we need to handle case where cookie has no value but exists (no = sign, that is): 
    if ( a_temp_cookie.length > 1 ){ 
      cookie_value = unescape( a_temp_cookie[1].replace(/^\s+|\s+$/g, '') ); 
    } 
  return cookie_value; 
  break; 
  } 
  a_temp_cookie = null; 
  cookie_name = ''; 
  } 
  if(!b_cookie_found ){ 
    return null; 
  } 


}

/**
 *Delete a cookie by name 
 */
function deleteCookie(name){
  $.Jookie.Delete(name);


}

/**
 * Delete all cookies 
 */ 
function deleteAll() {
  var num = get_next_num(cookieName);
  for(var i = 0; i < num ; i++) {
    deleteCookie(cookieName+i); 
  //$.Jookie.Debug(cookieName+i);
  }
  location.reload(true);

}


/**
 * Get a cookie by its title 
 * 
 *Returns the cookie name if found, or returns null   
 */ 
function getCookieByTitle(title) { 
  var num = get_next_num(cookieName); 
  for(var i = 0; i < num; i++){ 
    $.Jookie.Initialise(cookieName+i, -1); 
    if($.Jookie.Get(cookieName+i, "title") === title){ 
      return cookieName+i; 
    } 
  } 
  return null; 


}


/**
 * Get a cookie by accession number
 * 
 *returns the cookie name or null   
 */ 
function getCookieByAccno(accno){ 
  var num = get_next_num(cookieName); 
  for(var i = 0; i < num; i++){ 
    $.Jookie.Initialise(cookieName+i, -1); 
    if($.Jookie.Get(cookieName+i, "accno") === accno) { 
      return cookieName+i; 
    } 
  } 
  return null; 


}

/**
 * Check if a cookie is already present by accession number. Returns the 
 *  true or false.  
 */ 

function checkIfAlreadyPresent(accno) {
  var check = getCookieByAccno(accno); 
  if(check === null){ 
    return false; 
  }
  else{ 
    return true; 
  }


}

// repalce all occurrences of substring with new value
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