// Code from YT

const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

//// Change Image Category Functionality

// Left and Right Buttons
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

// ContentText
const contentText = document.getElementById("contentText");

// Scrollers
const scrollerUpwards = document.querySelector(
  ".scroller[data-direction='upwards']"
);
const scrollerDownwards = document.querySelector(
  ".scroller[data-direction='downwards']"
);

// Categories and Images
const categories = [
  {
    text: "Weddings",
    images: [
      "/public/assets/photos/wedding/miguel-angel-hernandez-329z4QA8njs-unsplash.jpg",
      "/public/assets/photos/wedding/amish-thakkar-REmCdjjUeB8-unsplash.jpg",
      "/public/assets/photos/wedding/andreas-ronningen-S2YssLw97l4-unsplash.jpg",
      "/public/assets/photos/wedding/jayden-seah-QzUJQc4bwyU-unsplash.jpg",
      "/public/assets/photos/wedding/megat-irfan-cc2tvUl6fQI-unsplash.jpg",
      // Duplicating the images here fixes this issue. Why?
      "/public/assets/photos/wedding/miguel-angel-hernandez-329z4QA8njs-unsplash.jpg",
      "/public/assets/photos/wedding/amish-thakkar-REmCdjjUeB8-unsplash.jpg",
      "/public/assets/photos/wedding/andreas-ronningen-S2YssLw97l4-unsplash.jpg",
      "/public/assets/photos/wedding/jayden-seah-QzUJQc4bwyU-unsplash.jpg",
      "/public/assets/photos/wedding/megat-irfan-cc2tvUl6fQI-unsplash.jpg",
    ],
  },
  {
    text: "Conferences",
    images: [
      "/public/assets/photos/conference/jonny-gios-8wKTIZ1KEzY-unsplash.jpg",
      "/public/assets/photos/conference/paul-hanaoka-6FqkGMOLskY-unsplash.jpg",
      "/public/assets/photos/conference/alexandre-pellaes-6vAjp0pscX0-unsplash.jpg",
      "/public/assets/photos/conference/teemu-paananen-bzdhc5b3Bxs-unsplash.jpg",
      "/public/assets/photos/conference/wes-lewis-zt6OxRORM2g-unsplash.jpg",
      // Duplicating the images here fixes this issue. Why?
      "/public/assets/photos/conference/jonny-gios-8wKTIZ1KEzY-unsplash.jpg",
      "/public/assets/photos/conference/paul-hanaoka-6FqkGMOLskY-unsplash.jpg",
      "/public/assets/photos/conference/alexandre-pellaes-6vAjp0pscX0-unsplash.jpg",
      "/public/assets/photos/conference/teemu-paananen-bzdhc5b3Bxs-unsplash.jpg",
      "/public/assets/photos/conference/wes-lewis-zt6OxRORM2g-unsplash.jpg",
    ],
  },
];

let currentCategoryIndex = 0; // Initial category index

// Set initial content and images
setCategoryContent(categories[currentCategoryIndex]);

// Event listeners for left and right arrow buttons
leftArrow.addEventListener("click", () => changeCategory(-1));
rightArrow.addEventListener("click", () => changeCategory(1));

// Function to change the displayed category content and images
function changeCategory(direction) {
  currentCategoryIndex += direction;

  // Wrap around to the first category if going beyond the last category
  if (currentCategoryIndex >= categories.length) {
    currentCategoryIndex = 0;
  } else if (currentCategoryIndex < 0) {
    currentCategoryIndex = categories.length - 1;
  }

  setCategoryContent(categories[currentCategoryIndex]);
}

// Function to set the content and images based on the selected category
function setCategoryContent(category) {
  // Set text in contentText
  contentText.textContent = category.text;

  // Set images in scroller__inner for both scrollers
  setScrollerImages(scrollerUpwards, category.images);
  setScrollerImages(scrollerDownwards, category.images);
}

// Function to set images in a scroller__inner
function setScrollerImages(scroller, images) {
  const scrollerInner = scroller.querySelector(".scroller__inner");
  scrollerInner.innerHTML = ""; // Clear existing images

  images.forEach((imageSrc) => {
    const imgElement = document.createElement("img");
    imgElement.src = imageSrc;
    imgElement.alt = "";
    imgElement.classList.add("h-72", "w-96", "rounded-2xl");
    scrollerInner.appendChild(imgElement);
  });
}
