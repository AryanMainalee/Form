const fname = document.getElementById("fname");
const uname = document.getElementById("uname");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const c_pass = document.getElementById("c_pass");

function check(){
    if(fname.value || uname.value || email.value || pass.value || c_pass.value){
        if(pass.value !== c_pass.value){
            alert("Error in password");
        }else{
            alert("Submitted successfully");
        }
    }else{
        alert("Missing fields");
    }
}
