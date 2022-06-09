function minValue(value, minValue = 2)

const regForm = document.getElementById("regForm")
const firstName = document.getElementById("firstName")
const errorFirstName = document.getElementById("error-firstName")
const lastName = document.getElementById("lastName")
const errorlastName = document.getElementById("error-lastName")
const email = document.getElementById("regForm-email")
const errorEmail = document.getElementById("refForm-email-error")
const password = document.getElementById("regFormPassword")
const errorPassword = document.getElementById("regFormPassword-error")
const confirmPassword = document.getElementById("confirmPassword")
const errorConfirmPassword = document.getElementById("confirmPassword-error")
const dateOfBirth = document.getElementById("dob")
const dobError = document.getElementById("dob-error")
const address = document.getElementById("regFormAddress")
const errorAddress = document.getElementById("regFormAddress-error")



firstName.addEventListener("keyup", function(e){
    if(e.target.value.length < minValue)
        errorFirstName.innerText ="Förmannet måste bestå av 2 tecken"
})

lastName,addEventListener("keyup", function(event){
    if(event.target.value.length < minValue)
        errorlastName.innerText ="Efternamnet måste bestå av minst 2 tecken"
})