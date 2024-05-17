let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (!e.target.classList.contains("theme-button")) {
      if (e.target.innerHTML == "=") {
        try {
          string = eval(string);
        } catch {
          string = "Error";
        }
        document.querySelector("input").value = string;
      } else if (e.target.innerHTML == "AC") {
        string = "";
        document.querySelector("input").value = string;
      } else if (e.target.innerHTML == "DEL") {
        string = string.substring(0, string.length - 1);
        document.querySelector("input").value = string;
      } else {
        string = string + e.target.innerHTML;
        document.querySelector("input").value = string;
      }
    }
  });
});

document.getElementById("dark-theme").addEventListener("click", function () {
  document.body.classList.add("dark-theme");
});

document.getElementById("light-theme").addEventListener("click", function () {
  document.body.classList.remove("dark-theme");
});
