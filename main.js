const email = document.querySelector("input");


function invalidEmail() {
    document.querySelector(".invalid").classList.remove("hide");
    document.querySelector("input").classList.add("invalid-color")
}

email.addEventListener("invalid", invalidEmail);


// Click

function clicked() {
    this.classList.add("clicked");
    setTimeout(function() {
        document.querySelector("#submit-btn").classList.remove("clicked");
    }, 100);
}

document.querySelector("#submit-btn").addEventListener("click", clicked)

// Attribution

const myImg = document.querySelector("#my-img");
myImg.addEventListener("mouseover", function () {
    document.querySelector("#hidden").classList.remove("hide");
})

document.querySelector(".attribution").addEventListener("mouseleave", function () {
    document.querySelector("#hidden").classList.add("hide");
})



