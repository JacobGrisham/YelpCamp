// --------------------------------------
// Toggle Daytime and Nighttime
// --------------------------------------
var toggle = document.getElementById('btn-toggle')
if (toggle) {
  toggle.addEventListener('click', function() {
    document.body.classList.toggle('nighttime');  
  }, false);
}

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

window.addEventListener('load', function() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var form = document.getElementById('javascript-validation')

  if (form) {
    // Loop over them and prevent submission
    form.querySelectorAll('.form-control').forEach(input => {
      input.addEventListener(('input'), () => {
        var validImageURL = document.getElementById('image-url-validation').value.endsWith(".jpg" || ".jpeg" || ".png")
        console.log(validImageURL)
        if (input.checkValidity() || validImageURL) {
          input.classList.remove('is-invalid')
          input.classList.add('is-valid');
        } else {
          input.classList.remove('is-valid')
          input.classList.add('is-invalid');
        }
        var is_valid = $('.form-control').length === $('.form-control.is-valid').length;
        $("#submit").attr("disabled", !is_valid);
      });
      // Validate on submit:
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }
});
      

// --------------------------------------
// Copyright Date
// --------------------------------------
var date = new Date();
var year = date.getFullYear();

document.getElementById("date").innerHTML = year;
