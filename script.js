document.getElementsByClassName("project-button")[0].onmouseover = function(){
    this.style.backgroundColor = "#58a6ff";
};
document.getElementsByClassName("project-button")[0].onmouseout = function(){
    this.style.backgroundColor = "";
};
document.getElementsByClassName("project-button")[0].onclick = function(){
    window.open("https://github.com/gvnxr?tab=repositories", "_blank","noopener noreferrer");
};

document.querySelectorAll(".project-card").forEach(function(card) {
    card.onmouseover = function() {
        this.style.backgroundColor = "#58a6ff";
        this.style.width = "35%";
        this.style.height = "14vh";
    };
});

document.querySelectorAll(".project-card").forEach(function(card){
    card.onmouseout = function(){
        this.style.backgroundColor = "";
        this.style.width = "";
        this.style.height = "";
    };
});

document.querySelectorAll(".project-card").forEach(function(card){
    card.onclick = function(){
         window.open("https://github.com/gvnxr?tab=repositories", "_blank","noopener noreferrer");
    };
});

document.getElementById("bible-project-card").onclick = function() {
    window.open("https://github.com/gvnxr/rndomBibleVerse", "_blank", "noopener,noreferrer");
};

document.querySelectorAll(".skills-section li").forEach(function(skill) {
    skill.onmouseover = function() {
        this.style.backgroundColor = "#58a6ff";
    };
});

document.querySelectorAll(".skills-section li").forEach(function(skill) {
    skill.onmouseout = function(){
        this.style.backgroundColor = "";
    };
});

document.querySelector(".resume-section button").onmouseover = function(){
    this.style.backgroundColor = "#58a6ff";
}

document.querySelector(".resume-section button").onmouseout = function(){
    this.style.backgroundColor = "";
};

document.querySelector(".contact-section button").onmouseover = function(){
    this.style.backgroundColor = "#58a6ff";
}

document.querySelector(".contact-section button").onmouseout = function(){
    this.style.backgroundColor = "";
};

document.querySelectorAll("nav li").forEach(function(nav){
        nav.onmouseover = function(){
            this.style.textDecoration = "underline";
        };
});

document.querySelectorAll("nav li").forEach(function(nav){
        nav.onmouseout = function(){
            this.style.textDecoration = "";
        };
});