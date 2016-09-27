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
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action'
            if(request.status===200){
                var counter=request.responseText;
                var spanx=document.getElementById('count');
                spanx.innerHTML=counter.toString();  
            }
        }
        //Not done yet
        
    };
    //Render the variable in the correct span
    
    //Make the request
    request.open('GET','http://aditag.imad.hasura-app.io/counter',true);
    request.send(null);
    
};


//Submit name
var nameInput = document.getElementById('name');
var name1=nameInput.value;
console.log(name1);
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    
    //Make a request to the server and send the name
    
    var request = new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action'
            if(request.status===200){
               //Capture a list of names and render it as a list
    var names=request.responseText;
    names=JSON.parse(names);
    var list='';
    for(var i=0;i<names.length;i++){
        list+='<li>'+names[i]+'</li>';
    }
    var ull=document.getElementById('namelist');
    ull.innerHTML=list;
            }
        }
        //Not done yet
        
    };
    //Render the variable in the correct span
    
    //Make the request
    request.open('GET','http://aditag.imad.hasura-app.io/submit-name?name='+name1,true);
    request.send(null);
    
    
};