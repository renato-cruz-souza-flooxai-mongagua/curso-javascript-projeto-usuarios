var fields = document.querySelectorAll("#form-user-create [name]")
var user = {}

fields.forEach(function(field, index){

    if (field.name == "gender") {
        user.gender

    } else {
        user[field.name] = field.value
    }

});

console.log(user)

// add clicks events

document.getElementById("form-user-create").addEventListener("submit", function(event){
   event.preventDefault();
   fields.forEach(function(field, index){

    if (field.name == "gender") {
        user.gender

    } else {
        user[field.name] = field.value
    }

});

console.log(user)
})