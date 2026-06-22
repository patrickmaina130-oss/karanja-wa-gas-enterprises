document
.getElementById("gasForm")
.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value;

alert("Order received from "+name);

});
