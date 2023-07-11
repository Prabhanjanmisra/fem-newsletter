const params = (new URL(document.location)).searchParams;
const enteredEmail = params.get("email-input");

document.querySelector("#entered-email").innerHTML = enteredEmail;

document.querySelector(".btn").addEventListener("click", function() {
    
})

// Attribution

const myImg = document.querySelector("#my-img");
myImg.addEventListener("mouseover", function() {
    document.querySelector("#hidden").classList.remove("hide");
})

document.querySelector(".attribution").addEventListener("mouseleave", function() {
    document.querySelector("#hidden").classList.add("hide");
})