document.addEventListener("DOMContentLoaded", function(){
    const select1=document.getElementById("select1")
    const select2=document.getElementById("select2")
    
    // select1.addEventListener("contextmenu",function(event){
   
    // })
    select1.addEventListener("mousedown", function(eventData){
        if(eventData.button==2){
   select1.removeChild(select1.children[0])
        }else{
            const child=select1.children[0];
            select2.appendChild(child);
       
        }
        console.log(eventData.button)
       
    })
    select2.addEventListener("mousedown", function(eventData){
        if(eventData.button==2){
   select2.removeChild(select2.children[0])
        }else{
            const child=select2.children[0];
            select1.appendChild(child);
       
        }
        console.log(eventData.button)
       
    })
})