function showHearts() {
    // create 50 heart elements and add them to the heart container
    const container = document.getElementById('heart-container');
    for (let i = 0; i < 50; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.top = Math.floor(Math.random() * 100) + '%';
      heart.style.left = Math.floor(Math.random() * 100) + '%';
      container.appendChild(heart);
    }
  }
  
  // set up the image carousel using the Flickity library
  const elem = document.querySelector('.carousel');
  const flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false
  });
  
  // handle click events for the previous and next buttons
  const previousButton = document.getElementById('previous-button');
  const nextButton = document.getElementById('next-button');
  
  previousButton.addEventListener('click', () => {
    flkty.previous();
  });
  
  nextButton.addEventListener('click', () => {
    flkty.next();
  }); 

  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}