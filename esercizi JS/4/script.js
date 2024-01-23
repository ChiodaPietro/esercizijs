document.addEventListener("DOMContentLoaded", function(){
    let area=document.getElementById("area");
    let counter=document.getElementById("counter");
    area.addEventListener("input", function(){
        count(area.value, counter);
    })
})
function count(text, counter){
 const count=text.length;
 const vowels=checkVowels(text);
 const consonats=checkConsonants(text);
 counter.textContent=count+" V="+vowels+" C="+consonats;
}
function checkVowels(str){
    let result=0;
    let vowels="aeiouAEIOU";
for(let i =0; i<str.length; i++){
  for(let j= 0; j<vowels.length; j++){
    if(str[i]==vowels[j]){
        result++;
        break;
    }
  }
}
return result;
}
function checkConsonants(str){
    let result=0;
    let consonats="qwrtypsdfghjklzxcvbnmQWRTYPSDFGHJKLZXCVBNM";
for(let i =0; i<str.length; i++){
  for(let j= 0; j<consonats.length; j++){
    if(str[i]==consonats[j]){
        result++;
        break;
    }
  }
}

return result;
}