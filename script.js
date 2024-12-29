function getCoffee() {
  let name = prompt("What is your name?");
  let city = prompt("Where are you from?");
  let email = prompt("What is your email address?");
  if (name === "" || city === "" || email === "") {
    alert("No coffee for you😑");
  } else {
    alert(
      "Hey " +
        name +
        ", we'll email you a list of coffee shops in " +
        city +
        "!! 😎"
    );
  }
}
let enter = document.querySelector("button");
enter.addEventListener("click", getCoffee);
