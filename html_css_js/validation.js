var firsterror = document.getElementById("first-error");
var lasterror = document.getElementById("last-error");
var inerror = document.getElementById("in-error");
var outerror = document.getElementById("out-error");
var submiterror = document.getElementById("submit-error");

function validateFirst(){
    var first = document.getElementById("firstName");

    if(first.value.length == 0){
        firsterror.innerHTML = ("First Name is Required");
        return false;
    }
    firsterror.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
}

function validateLast(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var last = document.getElementById("lastName");

    if(last.value.match(mailformat)){
        lasterror.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
        return true;
    }
    lasterror.innerHTML = "Email Not Valid"
    return true;
}

function validateIn(){
    var inDate = document.getElementById("inDate");

    if(inDate.value == 0){
        inerror.innerHTML = ("Check-In Date Required");
        return false;
    }
    inerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateOut(){
    var outDate = document.getElementById("outDate");

    if(outDate.value == 0){
        outerror.innerHTML = ("Check-Out Date Required");
        return false;
    }
    outerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function finalValidation(){
    if(validateFirst != true || validateLast != true || validateIn !=true || validateOut !=true ){
        submiterror.innerHTML = ("Please Fix Error");
        return false;
    }else{
        submiterror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}