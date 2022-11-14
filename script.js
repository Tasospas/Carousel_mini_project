const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // access property in the HTML filr
    const check = button.dataset.carouselButton === "next" ? 1 : -1;
    // Going from the button to the carousel (closest) and we select the list
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    // New Slide
    const activeSlide = slides.querySelector("[data-active]");
    // Converting to an array
    let newPos = [...slides.children].indexOf(activeSlide) + check;
    // If we are going backwards, before the 1st image, we want to go to the last image
    if (newPos < 0) newPos = slides.children.length - 1;
    if (newPos >= slides.children.length) newPos = 0;

    slides.children[newPos].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
