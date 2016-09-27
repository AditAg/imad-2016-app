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

//counter code
var button=document.getElementById('counter');

button.onclick=function(){
    
    //Make a request to the counter endpoint
    var request = new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readystate === XMLHttpRequest.DONE){
            //Take some action'
            if(request.status===200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();  
            }
        }
        //Not done yet
        
    };
    //Render the variable in the correct span
    
    //Make the request
    request.open('GET','http://aditag.imad.hasura-app.io/counter',true);
    request.send(null);
    
};