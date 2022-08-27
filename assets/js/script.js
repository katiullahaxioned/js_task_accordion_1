var openCloseBox = document.querySelectorAll(".open-close-box");
var Open = document.querySelectorAll(".open");
var Close = document.querySelectorAll(".close");
var list = document.querySelectorAll(".list-items li");
var heading = document.querySelectorAll(".list-items h3");
var para = document.querySelectorAll(".list-items p");

// **************** click functionality start **************** //
function initialOpenCall(initialElement) {
  initialElement.classList.add("active");
}

initialOpenCall(Open[0]);
initialOpenCall(Close[0]);
initialOpenCall(list[0]);
initialOpenCall(heading[0]);
initialOpenCall(para[0]);

function commonOpen(boxIndex, element, elementIndex) {
  if (boxIndex === elementIndex) element.classList.add("active");
}

function forEachOpenClose(boxIndex, elements) {
  elements.forEach(function (element, elementIndex) {
    element.classList.remove("active");
    commonOpen(boxIndex, element, elementIndex);
  });
}

function openClose(boxIndex) {
  forEachOpenClose(boxIndex, Open);
  forEachOpenClose(boxIndex, Close);
  forEachOpenClose(boxIndex, list);
  forEachOpenClose(boxIndex, heading);
  forEachOpenClose(boxIndex, para);
}
// ***************** click functionality end ***************** //

// ************* double click functionality start ************* //
function forEachClose(elements) {
  elements.forEach(function (element) {
    element.classList.remove("active");
  })
}

function dblClickClose() {
  forEachClose(Open);
  forEachClose(Close);
  forEachClose(list);
  forEachClose(heading);
  forEachClose(para);
}
// ************* double click functionality end ************* //

openCloseBox.forEach(function (box, boxIndex) {
  box.addEventListener("click", function () {
    openClose(boxIndex);
  });

  box.addEventListener("dblclick", function () {
    dblClickClose();
  });
});