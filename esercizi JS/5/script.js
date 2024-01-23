document.addEventListener("DOMContentLoaded", function(){
    const cities=document.getElementById("cities");
    const image=document.getElementById("img")
    populate(["rome","rome.jpg", "oslo", "oslo.jpeg","tokyo", "tokyo.jpg"], cities)
   
    cities.addEventListener('change', function(event) {
image.src=event.target.value;
image.alt=event.target.innerHTML;
      });
})
function populate(arr, select){
for(let i =0; i<arr.length;i+=2){
    let option= document.createElement("option");
    option.innerHTML=arr[i];
    option.value=arr[i+1];
    select.appendChild(option)
}
}