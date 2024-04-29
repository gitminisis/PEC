    /** JavaScript **/
    sfHover = function() {
      var ieLIs = document.getElementById('suckerfishmenu').getElementsByTagName('li');
      for (var i=0; i<ieLIs.length; i++) if (ieLIs[i]) {
        ieLIs[i].onmouseover=function() {
        var ieUL = this.getElementsByTagName('ul')[0];
        if (ieUL) {
        var ieMat = document.createElement('iframe');
                        ieMat.style.width=ieUL.offsetWidth+"px";
                        ieMat.style.height=ieUL.offsetHeight+"px";    
                        ieUL.insertBefore(ieMat,ieUL.firstChild);
                        ieUL.style.zIndex="99";
                        }
            
            this.className+=" sfhover";
            }
        ieLIs[i].onmouseout=function() {
        var ieUL = this.getElementsByTagName('ul')[0];
        if (ieUL) { ieUL.removeChild(ieUL.firstChild); }
            this.className=this.className.replace(' sfhover', '');
        }
      }
    }
    if (window.attachEvent) window.attachEvent('onload', sfHover);