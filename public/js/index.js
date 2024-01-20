// --------------------------------------
// Toggle Daytime and Nighttime
// --------------------------------------
document.getElementById('btn-toggle').addEventListener('click', function() {
  document.body.classList.toggle('nighttime');  
}, false);

// --------------------------------------
// Parallax
// --------------------------------------
window.onload = function () {
  lax.init()

  // Add a driver that we use to control our animations
  lax.addDriver('scrollY', function () {
    return window.scrollY
  });
};

// --------------------------------------
// Lazyloading Videos and Images
// --------------------------------------
const media = document.querySelectorAll(".campgrounds-image");

function preloadMedia(img) {
  const src = img.getAttribute("data-src");
  if(!src) {
    return;
  }
  img.src = src;
}

const mediaOptions = {
  threshold: 0,
  rootMargin: "0px 0px 300px 0px"
};

const mediaObserver = new IntersectionObserver((entries, mediaObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadMedia(entry.target);
      mediaObserver.unobserve(entry.target);
    }
  });
}, mediaOptions);

media.forEach((image) => {
  mediaObserver.observe(image);
})

// --------------------------------------
// Disable form submissions if there are invalid fields
// --------------------------------------
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

// --------------------------------------
// Copyright Date
// --------------------------------------
var date = new Date();
var year = date.getFullYear();

document.getElementById("date").innerHTML = year;
