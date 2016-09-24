console.log('Loaded!');
//Change the text of the main-text of the page

var element=document.getElementById('main-text');
element.innerHTML="Hello this is the first page of the website";

//move the  image
var image=document.getElementById('madi');
var marginLeft=0;
var varCounter=0;
var x=function moveRight(){
    if(varCounter<=100){
        varCounter++;
    marginLeft=marginLeft + 5;
    image.style.marginLeft=marginLeft +'px';
    }
    else
    {
        clearInterval(x);
    }
};

image.onclick=function(){
    var interval=setInterval(x,50);
    
};