// Smooth scrool behavior for all anchors
// const anchors = document.querySelectorAll('a[href^="#"]');
// anchors.forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     setTimeout(() => {
//       this.blur();
//     }, 500);
//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Unset focus for Chrome Android
      setTimeout(() => {
        this.blur();
      }, 500);

      // Store hash
      const hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (1000) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1000,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
