function AboutUs() {
    window.location.href= "/AboutUs.html"
};
function GoHome(){
    window.location.href = "/index.html"
};
function RandomArticle() {
    var articlenums = 1;
    var whicharticle = Math.floor(Math.random() * articlenums + 1);
    window.location.href = "/Articles/Article" + whicharticle + ".html";
};