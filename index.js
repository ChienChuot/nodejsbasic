var express = require("express");

var app = express();

app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));

app.set("view engine", "ejs");
app.set("views", "./views");


app.listen(3000, () => {
    console.log(`Example app listening on port http://localhost:3000`)
  })

app.get("/", function(request, response)  {
   
    response.render("homePage");
});

app.get("/about", function(request, response)  {
   
    response.render("aboutPage");
});


app.get("/contact", function(request, response)  {
   
    response.render("contactPage");
});


app.get("/language", function(request, response)  {
   
    response.render("languagePage");
});