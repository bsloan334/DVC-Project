var express = require('express');

var app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("index");
});

app.get("/about", function(req, res){
   res.render("about");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
   console.log("Server has started on port: " + PORT);
})