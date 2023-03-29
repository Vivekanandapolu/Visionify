var navItems = document.querySelectorAll(".nav-item");
for (var i = 0; i < navItems.length; i++) {
   navItems[i].addEventListener("click", function() {
      this.classList.add("active");
   });
}
jQuery(window).on("scroll", onScroll);

function onScroll(event) {
  console.log('==============')
  var scrollPos = jQuery(document).scrollTop();
  jQuery("#menu-center a").each(function () {
    var currLink = jQuery(this);
    var refElement = jQuery(currLink.attr("href"));
    if (
      refElement.offset().top - 200 <= scrollPos &&
      refElement.offset().top + refElement.height() > scrollPos
    ) {
      jQuery("#menu-center ul li a").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}

jQuery(".tab-row a").each(function () {
  jQuery(this).on("click", function (event) {
    event.preventDefault();
    var currentId = jQuery(this).attr("href");
    setTimeout(() => {
      jQuery("html, body").animate(
        {
          scrollTop: jQuery(currentId).offset().top - 50
        },
        0
      );
    }, 0);
  });
});