// ================================
// Cognifyz Level 1 JavaScript
// ================================

// Color Changing Button

const colors = [
    "#ff416c",
    "#6a11cb",
    "#00c9ff",
    "#00c853",
    "#ff9800",
    "#e91e63",
    "#3f51b5",
    "#9c27b0"
];

let colorIndex = 0;

function changeColor() {

    const btn = document.getElementById("colorBtn");

    colorIndex++;

    if(colorIndex >= colors.length){
        colorIndex = 0;
    }

    btn.style.background = colors[colorIndex];

}



// Greeting Message

function showGreeting(){

    const hour = new Date().getHours();

    let message = "";

    let emoji = "";

    if(hour < 12){

        message = "Good Morning! Have a productive day.";

        emoji = "🌞";

    }

    else if(hour < 17){

        message = "Good Afternoon! Keep learning and growing.";

        emoji = "😊";

    }

    else{

        message = "Good Evening! Hope you had a wonderful day.";

        emoji = "🌙";

    }

    alert(emoji + "  " + message);

}



// Calculator

function calculateSum(){

    let num1 = parseFloat(document.getElementById("num1").value);

    let num2 = parseFloat(document.getElementById("num2").value);

    const result = document.getElementById("result");

    if(isNaN(num1) || isNaN(num2)){

        result.innerHTML = "⚠ Please enter both numbers.";

        result.style.color = "#ff1744";

        return;

    }

    let sum = num1 + num2;

    result.innerHTML = "✅ Result = " + sum;

    result.style.color = "#00ff99";

}



// Form Submission

const form = document.getElementById("myForm");

form.addEventListener("submit",function(e){

    e.preventDefault();

    alert("🎉 Thank you! Your form has been submitted successfully.");

    form.reset();

});



// Smooth Fade-in Animation

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

    cards.forEach(card=>{

        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            card.style.opacity = "1";

            card.style.transform = "translateY(0px)";

        }

    });

});



// Initial Card State

cards.forEach(card=>{

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition = "0.8s";

});



// Welcome Message

window.onload = function(){

    console.log("Welcome to Cognifyz Level 1 Project!");

};