const express = require("express");
const bodyParser = require("body-parser");
const qrcode = require("qrcode");
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs')

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res){
    res.render("Home");
});

app.post("/", function(req, res) {
    let content = req.body.content;
    console.log(content);
    if(content.length > 0) {
        qrcode.toDataURL(content, (err, src) => {
            res.render("Code", {imgSrc: src});
        })
    }
    
});

app.listen(3000, function () {
    console.log("Server started at port 3000");
});
