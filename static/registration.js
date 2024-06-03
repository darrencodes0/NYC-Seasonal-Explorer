document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("registration-btn").addEventListener("click", function (event) {
      console.log("Register button clicked");
      event.preventDefault(); 

      
      const form = document.getElementById("registration-form");
      form.submit(); 
  });
});