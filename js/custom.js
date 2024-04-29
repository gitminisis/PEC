// JavaScript Document
   function focusOnLogin() {
     if (document.getElementById("user-login-form")) {
       if (document.getElementById("edit-name")) {
         document.getElementById("edit-name").focus();
       }
     }
   }
   
   function focusOnSearch() {
     if (document.getElementById("searchform")) {
	   var q = document.getElementById("searchbox_catalogue");

       if (q) {
	     // ensure the element is visible; javascript error occurs in IE without this TRY test
         try {
		   q.focus();
		 }
		 catch (err) {
		 
		 }
		   
		   // if metasearch is selected as the search scope, display the metasearch subject list
		   //var index = document.getElementById('scope').selectedIndex
		   //var value = document.getElementById('scope')[index].value;

 		   //if (value == "metasearch") {
    		// document.getElementById('metasearchSubjects').style.display = 'block';
  		   //}


       }
     }
   }
   
  function toggleMenu(objID) {
    if (!document.getElementById) return;
      var ob = document.getElementById(objID).style;
      ob.display = (ob.display == 'block')?'none': 'block';
  }

  function clearDefault(el) {
    if (el.defaultValue==el.value)
      el.value = ""
  }

// ************************* MM_jumpMenu ************************************************
function MM_jumpMenu(targ,selObj,restore) { //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}

// ************************* openWin ************************************************
// Opens a new browser window with the specified width and height and displays the given
// URL in the window.
function openWin(url, w, h) {
  sizeOfWindow = "width=" + w.toString() + ",height=" + h.toString();
  winOptions   = sizeOfWindow + ",scrollbars=yes,resizable=yes,menubar=yes";
  newWin       = window.open(url,"_blank",winOptions.toString());
}

// Used in the research modules, possibly other pages
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

// Used in the research modules, possibly other pages
function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}


// Used in the research modules, possibly other pages
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}


// Used in the research modules footer
function roll_over(img_name, img_src) {
  document[img_name].src = img_src;
}


// Used on the homepage to show / hide subjects for the metasearch component
function showSubjects(value) {
  if (value == 'metasearch') {
    // if the user selects the metasearch option, display a list of subjects
    document.getElementById('metasearchSubjects').style.display = 'block';
  }
  else {
    // if the user selects something else, hide the list of subjects
    document.getElementById('metasearchSubjects').style.display = 'none';
  }
}



