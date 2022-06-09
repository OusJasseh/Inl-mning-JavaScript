const firstName = document.getElementById("firstName");
const errorFirstName = document.getElementById("error-firstName");

firstName.addEventListener("keyup", function(e){
    if(e.value < 2)
        errorFirstName.innerText = "Hej"
})