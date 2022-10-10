document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded
  console.log("loading copyright year event listener..");
  
  document.getElementById('copyright_year').innerHTML = new Date().getFullYear();

});