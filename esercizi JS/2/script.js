function validate(){
    const username=document.getElementById("username");
    const password=document.getElementById("password");
    if(username.value.length==0){
        alert("wrong username length")
    }else if(password.value.length<5||password.value.length>8){
        alert("wrong psw length")
    }
}
function cancel(){
    let username=document.getElementById("username")
    let password=document.getElementById("password")
    username.value="";
    password.value="";
}