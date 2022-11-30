document.addEventListener("DOMContentLoaded", function () {
  fields.name = document.getElementById("name");
  fields.email = document.getElementById("email");
  fields.message = document.getElementById("message");
});

class User {
  constructor(
    name,
    email,
    messsage
  ) {
    this.name = name;
    this.email = email;
    this.message = message;
  }
}

function sendContact() {
    let usr = new User(name.value, email.value, message.value);
    window.location.href = "./thank-you.html";
}