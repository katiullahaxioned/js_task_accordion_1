var openCloseBox = document.querySelectorAll(".open-close-box");
var Open = document.querySelectorAll(".open");
var Close = document.querySelectorAll(".close");
var list = document.querySelectorAll(".list-items li");
var heading = document.querySelectorAll(".list-items h3");
var para = document.querySelectorAll(".list-items p");

function openClose(index) {
  function commonFunction(element, ind) {
    // if (index === ind) element.classList.toggle("active");
    if (index === ind) element.classList.add("active");
  }
  // either this(i.e. "element.classList.add('active')") or above commented statements
  // and do comment 'classList.remove' in all element's forEach,
  // and also remove code preset at the end of program commented with 'extra function'
  Open.forEach(function (clickOpen, indOpen) {
    clickOpen.classList.remove("active");
    commonFunction(clickOpen, indOpen);
  });

  Close.forEach(function (clickClose, indClose) {
    clickClose.classList.remove("active");
    commonFunction(clickClose, indClose);
  });

  list.forEach(function (list, indList) {
    list.classList.remove("active");
    commonFunction(list, indList);
  });

  heading.forEach(function (heading, indHeading) {
    heading.classList.remove("active");
    commonFunction(heading, indHeading);
  });

  para.forEach(function (para, indPara) {
    para.classList.remove("active");
    commonFunction(para, indPara);
  });
}

// defining extra function to remove 'active class' to 'active box'
function openCloseAgain() {
  Open.forEach(function (clickOpen) {
    clickOpen.classList.remove("active");
  });

  Close.forEach(function (clickClose) {
    clickClose.classList.remove("active");
  });

  list.forEach(function (list) {
    list.classList.remove("active");
  });

  heading.forEach(function (heading) {
    heading.classList.remove("active");
  });

  para.forEach(function (para) {
    para.classList.remove("active");
  });
}

openCloseBox.forEach(function (box, index) {
  box.addEventListener("click", function () {
    openClose(index);
    // adding extra function to 'remove active class' to 'active box'
    box.addEventListener("dblclick", function () {
      // calling extra function to 'remove active class' to 'active box'
      openCloseAgain();
    });
  });
});