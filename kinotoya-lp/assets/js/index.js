
function myFunction(x) {
  x.classList.toggle("change");
}

function toogleSlideMenu(x){
 if(x.classList.contains('change')){
    document.getElementById('myNav').style.height = '100%';
 }
 else{
    document.getElementById('myNav').style.height = '0%';
 }
}


(function(d) {
  var config = {
    kitId: 'uzy0ktr',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);