function subscribe() {
  const email = document.getElementById("email").value;
  const agreement = document.getElementById("agreement").checked;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!agreement) {
    alert("You must agree to the terms to subscribe.");
    return;
  }

  alert("Thank you for subscribing!");
}
