console.log('Loaded!');
//Change the text of the main-text of the page

var element=document.getElementById('main-text');
element.innerHTML="Hello this is the first page of the website";

//move the  image
var image=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=arginLeft+5;
    image.style.marginLeft=marginLeft +'px';
}

image.onclick=function(){
    var interval=setInterval(moveRight,50);
    
};