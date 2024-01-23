function submit(){
    const name=document.getElementById("name");
    const password=document.getElementById("password");
    const username=document.getElementById("username");
    const lastname=document.getElementById("lastname")
    if(name.value.length<1||name.value.length>20||!/^[a-zA-Z]+$/.test(name.value)||!/^[a-zA-Z]+$/.test(lastname.value)){
        alert("wrong username length or non alphabetical letters used")
    }else if(password.value.length<5||password.value.length>10||/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password.value)||!containsLowerCase(password.value)||!containsUpperCase(password.value)||containsNumbers(password.value)<2){
        alert("wrong psw length")
    }
    if(username.value<6||username.value>10||/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(username.value)){
        alert("only alphanumerical character in the username")
    }
}
    function containsUpperCase(str){
        for(let i=0;i<str.length;i++){
            if(str[i]===str[i].toUpperCase){
                return true;
            }
        }
        alert("problem1")
    }
    function containsLowerCase(str){
        for(let i=0;i<str.length;i++){
            if(str[i]===str[i].toLowerCase){
                return true;
            }
        }
        alert("problem2")
    }
    function containsNumbers(str){
        let occurences=0;
        for(let i=0;i<str.length;i++){
            if( /\d/.test(str)){
                occurences++;
            }
        }
        if(occurences<2){
            alert("problem3")
        }
        return occurences;
    }


function cancel(){
    let username=document.getElementById("username")
    let password=document.getElementById("password")
    let name=document.getElementById("name")
    let lastname=document.getElementById("lastname")
    name.value=""
    lastname.value=""
    username.value="";
    password.value="";
}