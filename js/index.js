var valor = document.querySelector("#exampleInputName")

valor.value = "Joanete"
valor.style.color = "purple"


var gender = document.querySelectorAll("#form-user-create [name=gender]:checked");
var birth = document.querySelector("#exampleInputBirth")
var country = document.querySelector("#exampleInputCountry")
var email = document.querySelector("#exampleInputEmail1")
var password = document.querySelector("#exampleInputPassword1")
var photo = document.querySelector("#exampleInputFile")
var admin = document.querySelector("#exampleInputAdmin")


var fields = document.querySelectorAll("#form-user-create [name]")

fields.forEach(function(field, index){

    console.log(field.name)
});
