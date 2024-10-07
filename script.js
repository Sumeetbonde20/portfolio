let menuIcon = document.querySelector('#menu-icon');  // here # rep that id
let navbar = document.querySelector('.navbar');    //here . rep that class

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.getElementById("contact-form").addEventListener("submit", function() {
    // Get values from inputs
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
  
    // Store data in local storage
    const formData = {
      fullName: fullName,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    };
    localStorage.setItem('contactFormData', JSON.stringify(formData));
  
    // Clear input fields
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
  
    // Display thank you message
    const thankYouMessage = document.getElementById("thank-you-message");
    thankYouMessage.style.display = "block";
  
    // Optionally hide the message after a few seconds
    setTimeout(function() {
      thankYouMessage.style.display = "none";
    }, 3000); // Hides after 3 seconds
  });
  