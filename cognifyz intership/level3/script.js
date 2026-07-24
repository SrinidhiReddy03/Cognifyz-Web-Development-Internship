// ==========================
// Image Gallery Popup
// ==========================

function openImage(image){

document.getElementById("popup").style.display="flex";

document.getElementById("popupImage").src=image.src;

}

function closeImage(){

document.getElementById("popup").style.display="none";

}

// ==========================
// Automatic Slideshow
// ==========================

const images = [

"https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200",

"https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200",

"https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",

"https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"

];

let current=0;

const slide=document.getElementById("slide");

function changeSlide(){

current++;

if(current>=images.length){

current=0;

}

slide.src=images[current];

}

setInterval(changeSlide,3000);

// ==========================
// Welcome Message
// ==========================

console.log("Welcome to Cognifyz Level 3 Project!");

// ==========================
// Apply Button
// ==========================

const applyButton=document.querySelector(".btn-custom");

if(applyButton){

applyButton.addEventListener("click",function(e){

e.preventDefault();

alert("Thank you for your interest in the Cognifyz Web Development Internship!");

});

}

// ==========================
// Close popup when clicking outside image
// ==========================

const popup=document.getElementById("popup");

popup.addEventListener("click",function(e){

if(e.target===popup){

closeImage();

}

});