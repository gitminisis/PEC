// JavaScript Document


   function replaceAll( str, from, to ) {
       var idx = str.indexOf( from );
   
   
       while ( idx > -1 ) {
           str = str.replace( from, to ); 
           idx = str.indexOf( from );
       }
   
       return str;
   }
   
   function EcrireCookie(nom, valeur)
   {
   
   var argv=EcrireCookie.arguments;
   var argc=EcrireCookie.arguments.length;
   var expires=(argc > 2) ? argv[2] : null;
   var path=(argc > 3) ? argv[3] : null;
   var domain=(argc > 4) ? argv[4] : null;
   var secure=(argc > 5) ? argv[5] : false;
   
   document.cookie=nom+"="+valeur+((expires==null) ? "" : ("; expires="+expires.toGMTString()))+"; path=/"+((domain==null) ? "" : ("; domain="+domain))+((secure==true) ? "; secure" : "");
   }



   function getCookieVal(offset)
   {
   var endstr=document.cookie.indexOf (";", offset);
   if (endstr==-1) endstr=document.cookie.length;
   
   return (document.cookie.substring(offset, endstr)); 
   }
   


   function LireCookie(nom)
   {
   var arg=nom+"=";
   var alen=arg.length;
   var clen=document.cookie.length;
   var i=0;
   while (i<clen)
   {
   var var2;
   var j=i+alen;
   if (document.cookie.substring(i, j)==arg) 
   {
   var2 = getCookieVal(j);
   var2 = replaceAll( escape(var2), "%20%A0", "+" );
   var2 = replaceAll( var2, "%A0", "+" );
   var2 = replaceAll( var2, "%20", "+" );
   return var2;
   }
   i=document.cookie.indexOf(" ",i)+1;
   if (i==0) break;
   }
   return null; 
   }
