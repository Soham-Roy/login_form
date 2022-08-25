// var inc = document.getElementById("inc_btn");
// var cnt = document.getElementById("cnt");
// var save = document.getElementById("save");
// var pvr = document.getElementById("pvr");
// let count = 0;

// inc.onclick = function() {
//     ++count;
//     cnt.textContent = "Count = " + count;
// };

// save.onclick = function() {
//     if ( pvr.textContent.length > 0 ) {
//         pvr.textContent += ", " + count;
//     }
//     else {
//         pvr.textContent = count;
//     }
// }

let btn = document.getElementById("btn");
let email = document.getElementById("email");
let password = document.getElementById("password");

btn.onclick = function() {
    let text = "Email : " + email.value + '\n';
    text += "Password : " + password.value;
    alert(text);
}