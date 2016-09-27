var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
  articleone:{
      title:'Article One|Adit Agarwal',
      heading:'Article One',
      date:'Sept 05 2016',
      content:`<p>This is the contnt for the first article.This is the contnt for the first article.
          This is the contnt for the first article.
          This is the contnt for the first article.
          This is the contnt for the first article.
          This is the contnt for the first article.This is the contnt for the first article.This is the contnt for the first article.
          This is the contnt for the first article.This is the contnt for the first article.</p>
        <p>This is the contnt for the first article.This is the contnt for the first article.
          This is the contnt for the first article.
          This is the contnt for the first article.
          This is the contnt for the first article.
          This is the contnt for the first article.This is the contnt for the first article.This is the contnt for the first article.
          This is the contnt for the first article.This is the contnt for the first article.</p>
        <p>This is the contnt for the first article.This is the contnt for the first article.
          This is the contnt for the first article.
          This is the contnt for the first article.
          This is the contnt for the first article.
          This is the contnt for the first article.This is the contnt for the first article.This is the contnt for the first article.
          This is the contnt for the first article.This is the contnt for the first article.</p>`
  },
  articletwo:{
      title:'Article-Two|Adit Agarwal',
      heading:'Article Two',
      date:'Sept 15,2016',
      content:`<p>This is the second article</p>`
  },
  articlethree:{
      title:'Article-Three|Adit Agarwal',
      heading:'Article Three',
      date:'Sept 20,2016',
      content:`<p>This is the third article</p>`
  }
};

function createtemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmltemplate=`<html>
<head>
<title>${title}</title>
<meta name="viewport" content="width=device-width initialscale=1">
<link href="/ui/style.css" rel="stylesheet">
</head>

<body>
    <div class="container">
  <div>
      
      <a href="/">${heading}</a>
      </div>
      <hr>
      <div>
         ${date}
      </div>
      <div>
         ${content}
      </div>
      </div>
</body>
</html>
`;
        
  return htmltemplate;  
    
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter',function(req,res){
    counter=counter + 1;
    res.send(counter.toString());
});

app.get('/article-one', function (req, res) {
    var article=articles[articleone];
  res.send(createtemplate(article));    /*res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));*/
});
app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

/*app.get('/:articlename',function(req,res){
var articlename=req.params.articlename;
    res.send(createtemplate(articles[articlename]));
});*/

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var names=[];
app.get('/submit-name/:name',function(req,res){
    //get the name from the request
    var name=req.params.name;
    names.push(name);
    //JSON-JavaScript Object Notation-used to convert Javascript objects to strings
    
    res.send(JSON.stringify(names));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
