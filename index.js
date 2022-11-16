history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
        history.go(1);
};
window.addEventListener('load', function(){
    if(window.location.href.startsWith('URL'))return;
    var link =window.location.replace('URL');
    if(window.location.href !== link){ 
        while(location.href===link){     
       
            if(location.href === link)return
        
        }
                     
    }else if(window.location.href === link)return  
});    
