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

// Left and Right Arrow Buttons
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
    ],
  },
];
