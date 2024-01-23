
let input;
document.addEventListener("DOMContentLoaded",function(){
     input= document.getElementById("input");
     
    const increment=document.getElementById("increment");
    const decrement=document.getElementById("decrement");
    increment.addEventListener("click", function(){
        increment();
    })
    decrement.addEventListener("click", function(){
        decrement();
    })
})

function decrement(){
   let value=parseInt(input.value);
   value--
   input.value=value;
}
function increment(){
    let value=parseInt(input.value);
    value++;
    input.value=value;
}