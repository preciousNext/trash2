let input = document.getElementById("input");

function append(val) {
  input.value += val;
}
function equals() {
  input.value = eval(input.value);
}
function clear1() {
  input.value = "";
}
function clear() {
  input.VALUE = "";
}
//
const verifyButton = document.getElementById("verifyButton");
const captchaDiv = document.getElementById("captcha");
const successMessage = document.getElementById("successMessage");

verifyButton.addEventListener("click", () => {
  // Simulate verification process (setTimeout is used to mimic an async task)
  verifyButton.disabled = true;
  captchaDiv.style.opacity = 0.5;

  // setTimeout(() => {
  //   captchaDiv.style.display = "none";
  //   successMessage.style.display = "block";
  // }, 9000);
  setTimeout(function () {
    captchaDiv.style.display = "none";
    successMessage.style.display = "block";
  }, 9000);
});

var filter = document.getElementById("filter");
filter.addEventListener("keyup", filterSections);

function filterSections(e) {
  var text = e.target.value.toLowerCase();
  var sections = document.querySelectorAll(".filterable-section");

  sections.forEach(function (section) {
    var sectionContent = section.textContent.toLowerCase();
    if (sectionContent.indexOf(text) !== -1) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
}
 