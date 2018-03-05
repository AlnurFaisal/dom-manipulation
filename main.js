var greeting_div = document.getElementById("greeting");
var myForm = document.getElementsByTagName("form")[0];
var yahoo = document.getElementById("yahoo");
console.log(greeting_div);

greeting_div.addEventListener("click", function() {
  greeting_div.textContent = "Howdy world!";
  if(greeting_div.classList.contains("funky")){
    greeting_div.classList.remove("funky");  
  } else {
    greeting_div.classList.add("funky");
  }
});

greeting_div.addEventListener("mouseover", function(){
  greeting_div.textContent = "Alnur Faisal!!";
});
greeting_div.addEventListener("mouseout", function(){
  greeting_div.textContent = "Howdy world!";
});
myForm.addEventListener("submit", function(e){
  e.preventDefault();
});
yahoo.addEventListener("click", function(e){
  e.preventDefault();
}); 
