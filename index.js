var myForm=document.getElementById("form"); 
myForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the selected item and quantity
  const item = document.getElementById("items").value;


  let username=document.getElementById("username").value; 
  let price=0;
  if (item === "bodybuilding") {
    price = 50;
    alert("Hello "+username+ "\n"+"The price is " + price+"$");
  } else if (item === "cardio") {
    price = 70;
    alert("Hello "+username+ "\n"+"The price is " + price+"$");
  } else  {
    price = 100;
    alert("Hello "+username+ "\n"+"The price is " + price+"$");
  }
  username.value = "";
  

});


