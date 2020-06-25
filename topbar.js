function AboutUs() {
    window.location.href= "/CleverRead/AboutUs.html"
};
function GoHome(){
    window.location.href = "/CleverRead/index.html"
};
function RandomArticle() {
    var articlenums = 1;
    var whicharticle = Math.floor(Math.random() * articlenums + 1);
    window.location.href = "/CleverRead/Articles/Article" + whicharticle + ".html";
};
