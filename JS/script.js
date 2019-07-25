//alert('reree');

//message
var msgCont = document.getElementById("messageContainer");
var msgText = document.getElementById("messagetext");
var error0 = "You can only enter numbers into the input boxes. Please try again.";
var error1 = "You must enter values into both input boxes.";
var success = "Your values were successfuly calculated!";

function calculateInsert(){
//values from input boxes
var val_0 = document.getElementById("userInput_0").value;
var val_1 = document.getElementById("userInput_1").value;

//maths
var add = Number(val_0)+ Number(val_1);
var sub = val_0 - val_1;
var mlt = val_0 * val_1;
var dvd = val_0 / val_1;

//fill spans
var insertAdd = document.getElementById("add");
var insertSub = document.getElementById("sub");
var insertMlt = document.getElementById("mult");
var insertDvd = document.getElementById("div");

msgCont.style.display = "block";

if( (val_0 === "" ) || (val_1 === " " ) ){
    msgText.innerHTML = error1;
}else if( isNaN(val_0)|| isNaN(val_1) ){
    msgText.innerHTML = error0;
}else{
    msgText.innerHTML = success;
    insertAdd.innerHTML = add;
    insertSub.innerHTML = sub;
    insertMlt.innerHTML = mlt;
    insertDvd.innerHTML = dvd;
}

}