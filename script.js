document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const response = document.getElementById("response");

  response.innerText = `Thank you, ${name}! Your message has been sent successfully.`;
  this.reset();
});
