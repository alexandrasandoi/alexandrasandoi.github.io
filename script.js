// script.js
document.getElementById('scrollButton').addEventListener('click', function() {
  const section2 = document.getElementById('section2');
  section2.scrollIntoView({ behavior: 'smooth' });
});

function initializeSlideshow(slideshowContainer) {
    const slides = slideshowContainer.querySelectorAll(".mySlides");
    let currentSlideIndex = 0;

    function showSlide(index) {
      slides.forEach((mySlides, i) => {
        mySlides.style.display = i === index ? "block" : "none";
      });
    }

    function nextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      showSlide(currentSlideIndex);
    }

    // Interval time in milliseconds for automatic slideshow progress
    const intervalTime = 2000;
    setInterval(nextSlide, intervalTime);

    // Show the first slide initially
    showSlide(currentSlideIndex);
  }

  // Initialize each slideshow on the page
  const slideshowContainers = document.querySelectorAll(".slideshow-container");
  slideshowContainers.forEach((container) => initializeSlideshow(container));
  var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right="0";
}
function hideMenu(){
    navLinks.style.right="-200px";
}
function show(){
    document.getElementById('slidebar').classList.toggle('active');
}
function initMap() {
    var myLatLng = {lat: 37.7749, lng: -122.4194};
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: myLatLng
    });
  
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'My Company'
    });
  }
  $(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });