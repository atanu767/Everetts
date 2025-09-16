document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault(); // Stop form from submitting right away
  
  let name = document.getElementById("name").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  
  // Simple validation
  if (name === "") {
    alert("Please enter your name");
    return;
  }

  if (phone === "" || !/^[0-9]{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit phone number");
    return;
  }

  if (email === "" || !/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  if (message === "") {
    alert("Please enter your message");
    return;
  }

  alert("Form submitted successfully ✅");
  // Now you can actually submit the form
  // this.submit();
});