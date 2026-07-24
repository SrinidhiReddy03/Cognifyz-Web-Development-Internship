// Welcome Message
console.log("Welcome to Cognifyz Level 2 Project!");

// Button Click
const button = document.querySelector(".btn-custom");

if(button){
    button.addEventListener("click", () => {
        alert("Thank you for visiting our website!");
    });
}