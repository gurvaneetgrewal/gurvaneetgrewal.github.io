// canvas text carousel
var canvasText = document.getElementById("front-page-canvas-text");
var textIndex = 0;

// update the canvas text every 3 seconds
function updateCanvasText() {
  if (textIndex == 0) {
    canvasText.innerHTML = "Medicare Solutions Simplified.";
    textIndex++;
  } else if (textIndex == 1) {
    canvasText.innerHTML = "Helping you maximize your benefits.";
    textIndex++;
  } else if (textIndex == 2) {
    canvasText.innerHTML = "With you through and after.";
    textIndex++;
  } else if (textIndex == 3) {
    canvasText.innerHTML = "Making sure your needs are met.";
    textIndex = 0;
  }
  var TEXT_CHANGE_TIME = 3000;
  setTimeout(updateCanvasText, TEXT_CHANGE_TIME);
}
updateCanvasText();

// google maps API
var myLatLng = {
  lat: 30.2849,
  lng: -97.7341
};
var map = new google.maps.Map(document.getElementById('google-maps'), {
  zoom: 15,
  center: myLatLng
});
var marker = new google.maps.Marker({
  position: myLatLng,
  map: map,
  title: "Residence"
});

// animations scroll reveal
new WOW().init();

// smooth scroll on anchor links
var scroll = new SmoothScroll('a[href*="#"]', {
  easing: "easeInOutCubic",
  offset: 75,
  speed: 500
});

// mobile navbar collapse
document.getElementById("mobile-navbar-collapse").addEventListener("click", function() {
  document.getElementById("navbar").classList.toggle("isActive");
});
