document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".slides");
  const images = document.querySelectorAll(".slides img");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  let index = 0;

  function showSlide() {
    slides.style.transform = `translateX(${-index * 100}%)`;
  }

  next.addEventListener("click", () => {
    index = (index + 1) % images.length;
    showSlide();
  });

  prev.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    showSlide();
  });
});
const searchInput = document.querySelector('.search-bar');
const productCards = document.querySelectorAll('.product-preview');
const heroSection = document.querySelector('.hero-section');
const productSection = document.querySelector('.product-section');

searchInput.addEventListener('input', function () {
  const searchValue = searchInput.value.toLowerCase();
  let hasResults = false;

  productCards.forEach(card => {
    const name = card.querySelector('h3').textContent.toLowerCase();
    const desc = card.querySelector('p').textContent.toLowerCase();

    if (name.includes(searchValue) || desc.includes(searchValue)) {
      card.style.display = 'block';
      hasResults = true;
    } else {
      card.style.display = 'none';
    }
  });

  // If there’s a search term, hide hero and bring results up
  if (searchValue.trim() !== '' && hasResults) {
    heroSection.style.display = 'none';
    productSection.style.marginTop = '20px';
  } else {
    // Show hero again if search is cleared
    heroSection.style.display = '';
    productSection.style.marginTop = '';
    productCards.forEach(card => (card.style.display = 'block'));
  }
});

