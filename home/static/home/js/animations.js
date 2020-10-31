document.getElementById("sendermsg").style.textTransform = "none";
function openmsg() {
    document.getElementById("sendermsg").style.height = "200px";
    document.getElementById("sendermsg").style.transition = ".6s";
    document.getElementById("sendermsg").style.transitionTimingFunction = "ease";
}
function closemsg() {
    document.getElementById("sendermsg").style.height = "50px"
}
