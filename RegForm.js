function validateMinLength(value, minValue = 2){
    if(value.length < minValue)
        return false
    else
        return true
}

function emailValidation(value, minValue = 2){
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(!regEx.test(value))
        return false
    else
        return true
}


var forms = document.querySelectorAll(".needs-validation")
    forms.forEach((e) => {
        switch (e.type) {
          case "text":
            e.addEventListener("keyup", function (e) {
              if (!validateMinLength(e.target.value)) {
                e.target.classList.add("is-invalid");
                document.getElementById(`${e.target.id}-error`).style.display =
                  "block";
              } else {
                e.target.classList.remove("is-invalid");
                document.getElementById(`${e.target.id}-error`).style.display = "none";
              
                }
            });
            
            break;

          case "email":
            e.addEventListener("keyup", function (e) {
              if (!emailValidation(e.target.value)) {
                e.target.classList.add("is-invalid")
                document.getElementById(`${e.target.id}-error`).style.display = "block"
              } 
              else {
                e.target.classList.remove("is-invalid");
                document.getElementById(`${e.target.id}-error`).style.display = "none"
               
              }
            })

            break;

            case "password":
              e.addEventListener("keyup", function(e){
                if(!password(e.target.value)){
                  e.target.classList.add("is-invalid")
                  document.getElementById(`${e.target.id}-error`).style.display = "block"
                }
                else {
                  e.target.classList.remove("is-invalid");
                  document.getElementById(`${e.target.id}-error`).style.display = "none"
               
              }

              })
              break;

              case "password":
                e.addEventListener("keyup", function(e){
                if(validatePassword != password){
                  e.target.classList.add("is-invalid")
                  document.getElementById(`${e.target.id}-error`).style.display = "block"
                }
                else {
                  e.target.classList.remove("is-invalid");
                  document.getElementById(`${e.target.id}-error`).style.display = "none"
               
              }

              })
              break;

             
             
        }
    })

    function password(){
      
      if(value.length >= 8)
        return true
    else
         return false
    }
    
 function validatePassword(value, minValue = 8){
   const regEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

   if(!regEx.test(value))
      return false
    else
      return true
 }