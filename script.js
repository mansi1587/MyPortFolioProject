var skillLink = document.querySelector("#skill-link")
var internshipLink = document.querySelector("#internship-link")
var educationLink = document.querySelector("#education-link")

var sidemenu = document.querySelector(".sidemenu")
// var skill = document.querySelector("#skills")
// var internship = document.querySelector("#internship")
// var education = document.querySelector("#education")

skillLink.addEventListener("mouseover", function(){
    document.querySelector("#skills").style.display = "block"
    document.querySelector("#internship").style.display = "none"
    document.querySelector("#education").style.display = "none"

 })
internshipLink.addEventListener("mouseover", function(){
    document.querySelector("#internship").style.display = "block"
    document.querySelector("#skills").style.display = "none"
    document.querySelector("#education").style.display = "none"
})
educationLink.addEventListener("mouseover", function(){
    document.querySelector("#education").style.display = "block"
    document.querySelector("#skills").style.display = "none"
    document.querySelector("#internship").style.display = "none"
})
// responsive

function menuopen(){
    sidemenu.style.right= "0"
}
function menuclose(){
         sidemenu.style.right = "-200px"
}
