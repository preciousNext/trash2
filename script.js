var burgerIcon = document.querySelector(".burger");
var navLinks = document.querySelector(".nav-links");
var section = document.querySelector("section");
burgerIcon.addEventListener("click", function () {
  navLinks.classList.toggle("show");
  burgerIcon.classList.toggle("navbar-active");
  section.classList.toggle("shift");
});
//
var arrow = document.querySelector("#arrow");
var arrowDown = document.querySelector(".arrow-down");
arrow.addEventListener("click", function () {
  arrowDown.classList.toggle("active");
});
//
var form = document.getElementById("form");
var itemList = document.querySelector("#items");
form.addEventListener("submit", addItem);
function addItem(e) {
  e.preventDefault();
  var newItem = document.getElementById("text").value;
  var li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));
  //
  var buttonDelete = document.createElement("button");
  buttonDelete.className = "btnD";
  buttonDelete.appendChild(document.createTextNode("X"));
  li.appendChild(buttonDelete);
  itemList.appendChild(li);
}
itemList.addEventListener("click", removeItem);
function removeItem(e) {
  e.preventDefault();
  if (e.target.classList.contains("btnD")) {
    if (confirm("Are you sure?.")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
var filter = document.getElementById("filter");
filter.addEventListener("keyup", filterItem);
function filterItem(e) {
  var text = e.target.value.toLowerCase();
  var items = document.querySelectorAll(".list-group-item");
  Array.from(items).forEach(function (item) {
    var newItem = item.firstChild.textContent;
    if (newItem.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
//
var questions = document.querySelectorAll(".ques");
questions.forEach(function (question) {
  question.addEventListener("click", function () {
    const answer = question.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});
//img
var carousel = document.querySelector(".carousel");
var nextButton = document.querySelector("#nextButton");
var prevButton = document.querySelector("#prevButton");

var currentIndex = 0;
var images = carousel.getElementsByTagName("img");
images[currentIndex].classList.add("show");

nextButton.addEventListener("click", function () {
  images[currentIndex].classList.remove("show");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("show");
});
prevButton.addEventListener("click", function () {
  images[currentIndex].classList.remove("show");
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  images[currentIndex].classList.add("show");
});
var touchStartX = null;
carousel.addEventListener("touchend", function (event) {
  var touchEndX = event.changedTouches[0].clientX;
  if (touchEndX < touchStartX) {
    nextButton.click;
  } else {
    touchEndX > touchStartX;
    prevButton.click;
  }
});
// //   ..
// var cartItems = [];
// var addToCart = document.querySelectorAll(".add-to-cart");
// var remove = document.querySelectorAll(".remove-from-cart");
// addToCart.forEach(function (btn, index) {
//   btn.addEventListener("click", function () {
//     addToCartButton(index);
//     updateCart();
//   });
// });
// remove.forEach(function (btn, index) {
//   btn.addEventListener("click", function () {
//     removeFromCartButton(index);
//     updateCart();
//   });
// });

// function addToCartButton(index) {
//   if (cartItems[index]) {
//     cartItems[index]++;
//   } else {
//     cartItems[index] = 1;
//   }
//   saveCartItem();
// }
// function saveCartItem() {
//   localStorage.setItem(JSON.stringify(cartItems));
// }
// function removeFromCartButton(index) {
//   if (cartItems[index] && cartItems[index] > 0) {
//     cartItems[index]--;
//   }
//   saveCartItem();
// }
// function updateCart() {
//   var cartItemCount = cartItems.reduce((total, count) => total + count, 0);
//   var cartNotification = document.querySelector(".cart-notification");

//   if (cartItemCount > 0) {
//     cartNotification.textContent = cartItemCount;
//     cartNotification.style.display = "inline-block";
//   } else {
//     cartNotification.style.display = "none";
//   }
// }

var cartItems = [];
var addToCartBtn = document.querySelectorAll(".add-to-cart");
var remove = document.querySelectorAll(".remove-from-cart");

addToCartBtn.forEach(function (btn, index) {
  btn.addEventListener("click", function () {
    addToCart(index);
    updateCart();
  });
});
remove.forEach(function (btn, index) {
  btn.addEventListener("click", function () {
    removeFromCart(index);
    updateCart();
  });
});
function addToCart(index) {
  if (cartItems[index]) {
    cartItems[index]++;
  } else {
    cartItems[index] = 1;
  }
  saveCartItems();
}
function saveCartItems() {
  localStorage.setItem(JSON.stringify(cartItems));
}
function removeFromCart(index) {
  if (cartItems[index] && cartItems[index] > 0) {
    cartItems[index]--;
  }
  saveCartItems();
}
function updateCart() {
  let cartItemCount = cartItems.reduce((total, count) => total + count, 0);
  let cartNotification = document.querySelector(".cart-notification");
  if (cartItemCount > 0) {
    cartNotification.textContent = cartItemCount;
    cartNotification.style.display = "block";
  } else {
    cartNotification.style.display = "none";
  }
}
