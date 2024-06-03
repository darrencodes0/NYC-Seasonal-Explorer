document.addEventListener("DOMContentLoaded", function() {
  const loginLink = document.getElementById("login-link");
  loginLink.addEventListener("click", function(event) {
      event.preventDefault(); 

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      
      const csrftoken = getCookie("csrftoken");

      
      fetch("/", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "X-CSRFToken": csrftoken  
          },
          body: JSON.stringify({ username: username, password: password })
      })
      .then(response => {
          if (response.ok) {
              
              window.location.href = "/home";  
          } else {
              
              alert("Invalid username or password");
          }
      })
      .catch(error => {
          console.error("Error:", error);
      });
  });
});


function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          
          if (cookie.startsWith(name + "=")) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}
