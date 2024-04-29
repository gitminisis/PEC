// JavaScript Document

$(document).ready(function(){ 
  var keyword = $("span#search-keyword").text();
  var temp;
  var words;
 
  //keyword = jQuery.trim(keyword);

  if (keyword.indexOf(" ")) {
    words = keyword.split(" ");
  }
   
  for(var i=0;i<words.length;i++) {
    var cWord = stripWildCard(words[i]);
    if((cWord.length >2) && (words[i].indexOf("@")==-1) && (words[i].indexOf("*")==-1) ) {
      $(".sum_body").highlight(cWord,{wordsOnly:true});
    } 
    else if((words[i].indexOf("@")!=-1) || (words[i].indexOf("*")!=-1)) {
      if((cWord.indexOf("@")==0)||(cWord.indexOf("*")==0)) {
        //the wildcard is first
        cWord = cWord+" "; 
      }
      else {
        cWord = " "+cWord; 
      }
      $(".sum_body").highlight(cWord);
    }       
  } 
  
}); 

function stripWildCard(word){
  
  var clean = word.replace('*','').replace(".","").replace(",","").replace('@','') 
  
  return clean; 
}




 

