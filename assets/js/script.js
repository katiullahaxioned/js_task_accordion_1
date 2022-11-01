var openCloseBox = document.querySelectorAll(".open-close-box");
var list = document.querySelectorAll(".item");

list[0].classList.add("active");

openCloseBox.forEach(function (box, ind) {
  box.addEventListener("click", function () {
    for (let i = 0; i < list.length; i++) {
      if (i != ind) {
        list[i].classList.remove("active");
      }
    }

    list[ind].classList.toggle("active");
  });
});