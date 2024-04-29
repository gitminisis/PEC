/*
# -*- coding: utf-8 -*-
#   $Author$
#   $Date$
#   $Rev$
#   $URL$
#   $Id$
#
*/

/* Javascript functions to handle MINISIS cookies */

// What does this function do
function WriteCookie(nom, valeur)
{
    var argv = WriteCookie.arguments;
    var argc = WriteCookie.arguments.length;
    var expires  =(argc > 2) ? argv[2] : null;
    var path = (argc > 3) ? argv[3] : null;
    var domain = (argc > 4) ? argv[4] : null;
    var secure = (argc > 5) ? argv[5] : false;

    document.cookie = nom + "=" + valeur + ((expires==null) ? "" : ("; expires="+expires.toGMTString())) + "; path=/" + ((domain==null) ? "" : ("; domain="+domain)) + ((secure==true) ? "; secure" : "");
}

// What does this function do
function getCookieVal(offset) {
    var endstr = document.cookie.indexOf (";", offset);
    if (endstr == -1) {
        endstr=document.cookie.length;
    }
    return (document.cookie.substring(offset, endstr));
}

// Reads the cookie looking for the passed in parameter value
function ReadCookie(nom) {
    var arg = nom + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    
    while (i < clen) {
        var var2;
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg) {
            var2 = getCookieVal(j);
            return unescape(var2);
        }
        
        i = document.cookie.indexOf(" ", i) + 1;
        
        if (i == 0) {
            break;
        }
    }
    return "null";
}

// Variable instantiation of currentpage if opener exists (opener, is not set in this js) 
if (opener != null && opener != undefined) { 
    var currentpage = opener.document.currentpage;
}

// What does this function do?
function RefreshParent() {
    if (currentpage != null && currentpage.marker != null && currentpage.marker.value != null) {
        opener.location.replace(currentpage.marker.value);
    }
}

function DeleteCookie (cookie_name)
{
  var cookie_date = new Date ( );  // current date & time
  cookie_date.setTime ( cookie_date.getTime() - 1 );
  document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
}

 
function markpage() {
  var page_link = window.location.href;
  WriteCookie("request_detail", page_link); 
}

function goToMarkedPage(){
  var markedPage = ReadCookie("request_detail"); 

  if(markedPage != null && markedPage != "" && markedPage != "null") {
    window.location = markedPage; 
    DeleteCookie("request_detail"); 
  }
  else {
    alert ( "Unable to return to request page because URL of request page has not been saved." ); 
  }
}

function setSearchCookie(){
WriteCookie("saveSearch", "true"); 
}

//save the search terms from a simple search into a cookie which can be a new search URL
function saveSearch()
{
var search_terms = ReadCookie("search_terms");
//if there are search terms in the cookie
if(search_terms == null || search_terms == "")
{
return false; 
} 
var params = search_terms.split(":&nbsp;");
//the type of search
var param = params[0];  

var keywords = params[1]; 

var words = keywords.split(" ");
if(words.length > 1)
{
var wordlist = ""; 
for(var i = 0; i < words.length ; i++)
{
wordlist += words[i] ;
 if(i != words.length)
 {
  wordlist += "+"; 

 }
 }
}

//get search url 
var sessid = ReadCookie("sessid"); 
if(sessid == null || sessid == "")
{
 return false; 
}

var search_url = sessid + "?SEARCH&EXP=KEYWORD_CLUSTER+"; 

if(wordlist != null){
 search_url += wordlist; 
}
else{
  search_url += keywords; 
}

WriteCookie("search_url", search_url); 


} 



function goToLastSearch()
{
var lastSearch = ReadCookie("search_url"); 

  if(lastSearch != null && lastSearch != "") {
    window.location = lastSearch; 
    
   }

}


 
function MarkMyPage(Id) {
  var argv = MarkMyPage.arguments;
  var argc = MarkMyPage.arguments.length;
  var page_link;
  
  if ( argc > 1 ) 
    page_link = argv[1];
  else  
    page_link = window.location.href;
  WriteCookie(Id, page_link); 
}

function goToMyPage(Id){
  var markedPage = ReadCookie(Id); 
  var Url;

  if( !(markedPage == null || markedPage == "null" || markedPage == "*") ) {
    Url = markedPage;
    WriteCookie(Id, "*"); // DeleteCookie(Id); 
    window.location = Url; 
  }
}


function goToAltMarkedPage(Id){
  var markedPage = ReadCookie(Id); 
  var Url;

  if (markedPage == null || markedPage == "*") {
    markedPage = ReadCookie("request_detail");
    if ( !(markedPage == null || markedPage == "null" || markedPage == "*") ) {
      goToMarkedPage();
    }
  }
  else {
    Url = markedPage;
    WriteCookie(Id, "*"); // DeleteCookie(Id); 
    window.location = Url; 
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

// escape data string
function escape_string ( input_string )
{
  var string1, string2;
  
  string1 = replace_all_substring(input_string, "/", "%2f");
  string2 = replace_all_substring(string1, "+", "%2b");
  string1 = replace_all_substring(string2, " ", "+" );
  string2 = replace_all_substring(string1, "=", "%3d");
  string1 = replace_all_substring(string2, ";", "%3b");

  return string1;
}

// unescape data string
function unescape_string ( input_string )
{
  var string1, string2;
  
  string1 = replace_all_substring(input_string, "%3b", ";");
  string2 = replace_all_substring(string1, "%3d", "=");
  string1 = replace_all_substring(string2, "+", " ");
  string2 = replace_all_substring(string1, "%2b", "+");
  string1 = replace_all_substring(string2, "%2f", "/");

  return string1, string2;
}  

// save search criteria of search form for later use
function saveSearchValues(Id, display_name, search_field, search_value)
{
  var argv = saveSearchValues.arguments;
  var argc = saveSearchValues.arguments.length;
  var max_set;
  var i;
  var has_subexp;
  var inside_subexp;
  var extra_search_field, extra_search_value, extra_display_name;
  var searchExpression, displayExpression, search_cookie_value;
  var string1;
  var subexp_bool_op;
  
  max_set = ((argc <= 0) ? 0 : (argc - 1) / 3);
  has_subexp = false;
  inside_subexp = false;
  subexp_bool_op = "";

  /* save frist set of search field/value */
  if ( !(search_field == null || search_field == "") 
  &&   !(search_value == null || search_value == "")
  &&   !(search_field == "$FLDOP") && !(search_field == "$BOOLOP") && !(search_field == "$CLOSE") )  {
    if ( search_field == "$OPEN" ) {
      searchExpression = ">(";
      has_subexp = false;
      inside_subexp = true;
    }
    else {
      searchExpression = search_field + " " + "\"" + search_value + "\"";
    }  
   
    if ( search_field == "$OPEN" ) {
      displayExpression = "";
    }
    else {
      if ( !(display_name == null || display_name == "") ) {
        displayExpression  = display_name + " " + search_value;
      }
      else {
        displayExpression = search_field + " " + search_value;
      }
    }
  }
  else {
    searchExpression = "";
    displayExpression = "";
  }
  
  /* Is more set of field/value followed? */
  if ( argc > 4 ) {
    for ( i = 1 ; i < max_set ; i++ ) {
      extra_display_name = argv[1+i*3];
      extra_search_field = argv[1+i*3+1];
      extra_search_value = argv[1+i*3+2];
      if ( !(extra_search_field == null || extra_search_field == "") && !(extra_search_value == null || extra_search_value == "") ) {
        if ( !(extra_search_field == "$FLDOP") && !(extra_search_field == "$BOOLOP") ) {
          if ( !(searchExpression == "") ) {
            // search expression is not empty
            if ( !(extra_search_field == "$CLOSE") ) {
              if ( !(argv[1+(i-1)*3+1] == "$OPEN") ) {
                if ( argv[1+(i-1)*3+1] == "$BOOLOP" && !(argv[1+(i-1)*3+2] == "") ) {
                  // add user-specified boolean
                  if ( extra_search_field == "$OPEN" )
                    subexp_bool_op = argv[1+(i-1)*3+2];
                  else  
                    searchExpression += " " + argv[1+(i-1)*3+2] + " ";
                }
                else {
                  if ( !(searchExpression == ">(") ) {
                    if ( extra_search_field == "$OPEN" )
                      subexp_bool_op = " AND ";
                    else {
                      if ( inside_subexp )
                        searchExpression += " OR ";
                      else  
                        searchExpression += " AND ";
                    }
                  }    
                }
              }
            }
            
            if ( !(extra_search_field == "$CLOSE") && !(extra_search_field == "$OPEN")
            &&   !(searchExpression == ">(") )
              displayExpression += " ; ";
          }
          
          if ( extra_search_field == "$OPEN" ) {
            has_subexp = false;
            inside_subexp = true;
            searchExpression += ">(";
          }
          else if ( extra_search_field == "$CLOSE" ) {
            if ( has_subexp ) {
              if ( searchExpression == "" || subexp_bool_op == "" )
                string2 = "(";
              else
                string2 = subexp_bool_op + "(";
              string1 = replace_all_substring(searchExpression, ">(", string2);
              searchExpression = string1 + ")";
            }
            else {
              string1 = replace_all_substring(searchExpression, ">(", "");
              searchExpression = string1;
            }            
            has_subexp = false;
            inside_subexp = false;
            subexp_bool_op = "";
          }
          else {
            if ( argv[1+(i-1)*3+1] == "$FLDOP" && argv[1+(i-1)*3+2] != null && !(argv[1+(i-1)*3+2] == "") ) {
              // add field operator 
              searchExpression += extra_search_field + " " + argv[1+(i-1)*3+2] + " " + "\"" + extra_search_value + "\"";
            }
            else {
              searchExpression += extra_search_field + " " + "\"" + extra_search_value + "\"";
            }
            if ( inside_subexp )
              has_subexp = true;
          }  
          
          if ( !(extra_search_field == "$OPEN") && !(extra_search_field == "$CLOSE") ) {
            if ( !(extra_display_name == null || extra_display_name == "") ) {
              displayExpression += extra_display_name + " " + extra_search_value;
            }
            else {
              displayExpression += extra_search_field + " " + extra_search_value;
            }
          }  
        }
      }  
    }
  }
  
  /* save dipslay/search expression in cookie */
  search_cookie_value = escape_string(searchExpression) + "{--}" + escape_string(displayExpression);
  WriteCookie( Id, escape(search_cookie_value) );
} 

// execute the saved search expression
function executeSavedSearch ( Id, session )
{
  var search_cookie_value = ReadCookie ( Id );
  var searchExpression, displayExpression, search_url, p_value;
  var leng, i;

  if ( (search_cookie_value == null || search_cookie_value == "null" || search_cookie_value == "") ) {
    alert ( "No saved search expression is found." );
  }
  else {
    leng = search_cookie_value.length;
    i = search_cookie_value.indexOf( "{--}", 0 );
    if ( i < 0 ) {
      p_value = search_cookie_value;
    }
    else {
      p_value = search_cookie_value.substr ( 0, i );
    }
    search_url = session + "?SEARCH&EXP=" + p_value + "&SHOWSINGLE=Y&REPORT=WEB_SUMMARY&DATABASE=LMA_DESCRIPTION";
    window.location = search_url;
  }
}  

// return display form of saved search expression 
function getSavedSearch(Id)
{
  var search_cookie_value = ReadCookie ( Id );
  var returnedExpression;
  var leng, i;
  
  if ( search_cookie_value == null || search_cookie_value == "null" || search_cookie_value == "" ) {
    return null;
  }
  leng = search_cookie_value.length;
  i = search_cookie_value.indexOf( "{--}", 0 );
  if ( i < 0 || i+4 >= leng ) {
    returnedExpression = search_cookie_value;
  }
  else {
    returnedExpression = search_cookie_value.substr ( i+4, leng-i-4 );
  }
  
  return unescape_string(returnedExpression);
} 

// finalize search expression
function finalizeSearchExpression ( from_cookie, to_cookie )
{
  var cookie_value = ReadCookie ( from_cookie );
  
  if ( !(cookie_value == null || cookie_value == "null" || cookie_value == "") ) {
    WriteCookie ( to_cookie, escape(cookie_value) );
    WriteCookie ( from_cookie, "" );
    return true;
  }
  
  return false;
}  
