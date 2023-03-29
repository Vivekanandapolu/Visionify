$(document).ready(function () {
  console.log("hello")
  var sectionIds = $("a.nav-link");

  $(document).scroll(function () {
    sectionIds.each(function () {
      var container = $(this).attr("href");
      var containerOffset = $(container).offset().top;
      var containerHeight = $(container).outerHeight();
      var containerBottom = containerOffset + containerHeight;
      var scrollPosition = $(document).scrollTop();

      if (
        scrollPosition < containerBottom - 20 &&
        scrollPosition >= containerOffset - 20
      ) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  });
});

// const sections = document.querySelectorAll("section");
// const navLi = document.querySelectorAll("nav .container ul li");
// function onScroll() {
//   var current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     if (pageYOffset <= sectionTop - 60) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLi.forEach((li) => {
//     li.classList.remove("active");
//     if (li.classList.contains(current)) {
//       li.classList.add("active");
//     }
//   });
// };


var a = document.querySelectorAll(".nav li a");
for (var i = 0, length = a.length; i < length; i++) {
  a[i].onclick = function() {
    var b = document.querySelector(".nav li.active");
    if (b) b.classList.remove("active");
    this.parentNode.classList.add('active');
  };
}