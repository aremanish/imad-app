var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne={
    title:"article-one",
    content:`   <p>Then, when we started surfing the internet using tablets and mobile phones, fixed size web pages were too large to fit the viewport. To fix this, browsers on those devices scaled down the entire web page to fit the screen1.</p>
             <p>Then, when we started surfing the internet using tablets and mobile phones, fixed size web pages were too large to fit the viewport. To fix this, browsers on those devices scaled down the entire web page to fit the screen1.</p>
              <p>Then, when we started surfing the internet using tablets and mobile phones, fixed size web pages were too large to fit the viewport. To fix this, browsers on those devices scaled down the entire web page to fit the screen1.</p>
              `
,
              head:"article-one",
              date:"Sep 5,2017"
};


function ceateTemplae(obj){

var date=obj.date;
var head=obj.head;
var title=obj.title;
var content=obj.content;
var html=`
    <html>
    <head>
       <title>{title}</title>
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div><a href="/">Home</a></div>
        <hr />
        <h3>{head}</h3>
        <div>{date}</di0v>
        <div>
        {content}         
        </div>
    </body>
</html>
`
return html;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  //res.sendFile(path.join(__dirname, 'ui', 'index.html'));
  //res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
  res.send(ceateTemplae(articleOne));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
  //res.send("hello a2");
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
   //res.send("hello a3");
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
