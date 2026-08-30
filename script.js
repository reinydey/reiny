const header = document.querySelector("[data-header]");
const modal = document.querySelector("[data-modal]");
const closeModal = document.querySelector("[data-close-modal]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalPoster = document.querySelector(".modal-poster");
const modalYear = document.querySelector("[data-modal-year]");
const modalRating = document.querySelector("[data-modal-rating]");
const modalTag = document.querySelector("[data-modal-tag]");
const modalDescription = document.querySelector("[data-modal-description]");
const loginScreen = document.querySelector("[data-login-screen]");
const loginForm = document.querySelector("[data-login-form]");
const profileScreen = document.querySelector("[data-profile-screen]");
const appShell = document.querySelector("[data-app-shell]");
const headerProfileImage = document.querySelector("[data-header-profile-image]");
const trendingShelf = document.querySelector("[data-trending-shelf]");
const viewAllTrending = document.querySelector("[data-view-all-trending]");
const trendingOverlay = document.querySelector("[data-trending-overlay]");
const trendingGrid = document.querySelector("[data-trending-grid]");
const viewAllFavorites = document.querySelector("[data-view-all-favorites]");
const favoritesOverlay = document.querySelector("[data-favorites-overlay]");
const favoritesGrid = document.querySelector("[data-favorites-grid]");
const readMessage = document.querySelector("[data-read-message]");
const messageOverlay = document.querySelector("[data-message-overlay]");

const trendingItems = [
  ["First Picture", "March 30, 2025", "assets/gingrein3.jpg"],
  ["Date with my friends", "March 30, 2025", "assets/gingrein4.jpg"],
  ["First Photobooth", "March 31, 2025", "assets/gingrein5.jpg"],
  ["Going home na from visiting you", "April 1, 2025", "assets/gingrein6.jpg"],
  ["First time I receive a flower", "May 16, 2025", "assets/gingrein7.jpg"],
];

const overlayPhotos = [
  {
    image: "assets/gingrein3.jpg",
    caption: "First picture",
    description: "The first picture that became part of our little movie together.",
  },
  {
    image: "assets/gingrein4.jpg",
    caption: "Date with my friends",
    description: "A sweet day with friends, and still somehow my favorite part was being with you.",
  },
  {
    image: "assets/gingrein5.jpg",
    caption: "First photobooth",
    description: "Our first photobooth memory, the kind of photo I will always want to replay.",
  },
  {
    image: "assets/gingrein6.jpg",
    caption: "Going home from visiting you",
    description: "One of those simple goodbyes that made me wish the day could last longer.",
  },
  {
    image: "assets/gingrein7.jpg",
    caption: "First flower I received",
    description: "The first flower I received, and a moment that made me feel so loved.",
  },
  { image: "assets/051825.jpg", caption: "Our favorite thing to do sleeping" },
  { image: "assets/052325.jpg", caption: "Another Sleeping" },
  { image: "assets/062925.jpg", caption: "Naglamay kta hini dko aram knino adto" },
  { image: "assets/063025.jpg", caption: "Tacloban Fiesta we ate out with your fam" },
  { image: "assets/070125.jpg", caption: "Mirror Selfie with you" },
  { image: "assets/0830255.jpg", caption: "Graduation Day" },
  { image: "assets/083025.jpg", caption: "The Day we made it official" },
  { image: "assets/083125.jpg", caption: "First Date as a Couple" },
  { image: "assets/090125.jpg", caption: "Our every 4am dunkin' date before I go home" },
  { image: "assets/0901255.jpg", caption: "Thank you for taking care of me babyy" },
  { image: "assets/090525.jpg", caption: "First time in Borongan" },
  { image: "assets/090625.jpg", caption: "First Time in Visit in Llorente" },
  { image: "assets/0906255.jpg", caption: "Your first time visiting tatay" },
  { image: "assets/090725.jpg", caption: "Our first dagat date" },
  { image: "assets/102025.jpg", caption: "Running Errands with you and tita" },
  { image: "assets/10202555.jpg", caption: "Cuddle Cuddle at home" },
  { image: "assets/102225.jpg", caption: "You bought me a burger kay masakit akon tiyan" },
  { image: "assets/1022255.jpg", caption: "Date at McArthur Park" },
  { image: "assets/102325.jpg", caption: "Running Errands and Eating out with you and tita" },
  { image: "assets/1023255.jpg", caption: "2nd Photobooth" },
  { image: "assets/102425.jpg", caption: "Our first Sampgyupsal Date" },
  { image: "assets/120825.jpg", caption: "Our Church and Bo's Coffee Date" },
  { image: "assets/120925.jpg", caption: "Bantay Canteen with braiding session" },
  { image: "assets/121025.jpg", caption: "Bantay Canteen again" },
  { image: "assets/121125.jpg", caption: "Home with Mulan" },
  { image: "assets/121325.jpg", caption: "Date at Camp Pizza and Grill" },
  { image: "assets/021426.jpg", caption: "Our First Valentines Day" },
  { image: "assets/0214266.jpg", caption: "Special Day"},
  { image: "assets/02142666.jpg", caption: "You really travelled to spend this special day"},
  { image: "assets/040626.jpg", caption: "My Birthday" },
  { image: "assets/041126.jpg", caption: "Dinner with your Fam" },
  { image: "assets/0411266.jpg", caption: "Really love this photo" },
  { image: "assets/051026.jpg", caption: "This was mother's day and we had dinner with you fam" },
  { image: "assets/051126.jpg", caption: "Dulag date with your friends" },
  { image: "assets/060526.jpg", caption: "Sponty Skye Date" },
  { image: "assets/061226.jpg", caption: "Movie Date" },
  { image: "assets/061826.jpg", caption: "BigBys Dainner Date - I was sick here" },
  { image: "assets/072526.jpg", caption: "Nomikai Lunch Date" },
  { image: "assets/080126.jpg", caption: "Mirror Selfie at Ubec" },
  { image: "assets/0801266.jpg", caption: "Gala Date sa Ubec" },
  { image: "assets/080326.jpg", caption: "Sto. Nino Date" },
  { image: "assets/0803266.jpg", caption: "IT Park Date" },
  { image: "assets/08032666.jpg", caption: "Zark's Burger Date" },
  { image: "assets/080526.jpg", caption: "Idk kun diin adto basta ubec hehe" },
  { image: "assets/080626.jpg", caption: "Tops Date" },
];

const favoritePhotos = [
  {
    image: "assets/0830255.jpg",
    caption: "We made it Official",
    date: "August 30, 2025",
    description: "The day we made it official, and one of my favorite memories of us.",
  },
  {
    image: "assets/02142666.jpg",
    caption: "Valentines Day",
    date: "February 14, 2026",
    description: "You really travelled to spend this special day with me.",
  },
  {
    image: "assets/0411266.jpg",
    caption: "Favorite Photo",
    date: "April 11, 2026",
    description: "I really love this photo because it feels so much like us.",
  },
  {
    image: "assets/080626.jpg",
    caption: "Tops Date",
    date: "August 06, 2026",
    description: "A favorite date that deserves its own place here.",
  },
];

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

const openPreview = (source) => {
  const title = source.dataset.title || source.dataset.openModal || "happy anniversay my love";
  const previewImage = source.dataset.image || source.querySelector(".card-image")?.getAttribute("src");
  const description =
    source.dataset.description ||
    "Start watching instantly, add this title to your list, or keep browsing the rows for something that fits the night.";

  modalTitle.textContent = title;
  modalYear.textContent = source.dataset.year || "2026";
  modalRating.textContent = source.dataset.rating || "97%";
  modalTag.textContent = source.dataset.tag || "NETFLIX Original";
  modalDescription.textContent = description;
  modalPoster.style.backgroundImage = previewImage
    ? `linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.72)), url("${previewImage}")`
    : "";

  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }
};

const attachPreview = (item) => {
  item.addEventListener("click", () => openPreview(item));
  item.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openPreview(item);
    }
  });
  if (!item.hasAttribute("tabindex")) {
    item.setAttribute("tabindex", "0");
  }
};

const buildTrendingOverlay = () => {
  if (trendingGrid.dataset.loaded) {
    return;
  }

  overlayPhotos.forEach((photo, index) => {
    const card = document.createElement("article");
    const image = document.createElement("img");
    const label = document.createElement("span");
    const caption = photo.caption || `Memory ${index + 1}`;

    card.className = "overlay-photo-card";
    card.tabIndex = 0;
    card.dataset.title = caption;
    card.dataset.year = "2025";
    card.dataset.rating = "Favorite";
    card.dataset.tag = "Trending Now";
    card.dataset.image = photo.image;
    card.dataset.description = photo.description || caption;

    image.src = photo.image;
    image.alt = caption;
    label.textContent = caption;

    card.append(image, label);
    attachPreview(card);
    trendingGrid.appendChild(card);
  });

  trendingGrid.dataset.loaded = "true";
};

const buildFavoritesOverlay = () => {
  if (favoritesGrid.dataset.loaded) {
    return;
  }

  favoritePhotos.forEach((photo, index) => {
    const card = document.createElement("article");
    const image = document.createElement("img");
    const label = document.createElement("span");

    card.className = "overlay-photo-card";
    card.tabIndex = 0;
    card.dataset.title = photo.caption;
    card.dataset.year = photo.date || "2025";
    card.dataset.rating = "Favorite";
    card.dataset.tag = "Favorites";
    card.dataset.image = photo.image;
    card.dataset.description = photo.description || photo.caption;

    image.src = photo.image;
    image.alt = photo.caption;
    label.textContent = `${index + 1}. ${photo.caption}`;

    card.append(image, label);
    attachPreview(card);
    favoritesGrid.appendChild(card);
  });

  favoritesGrid.dataset.loaded = "true";
};

const closeTrendingOverlay = () => {
  trendingOverlay.hidden = true;
  document.body.classList.remove("overlay-open");
};

const closeFavoritesOverlay = () => {
  favoritesOverlay.hidden = true;
  document.body.classList.remove("overlay-open");
};

const closeMessageOverlay = () => {
  messageOverlay.hidden = true;
  document.body.classList.remove("overlay-open");
};

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  loginScreen.hidden = true;
  profileScreen.hidden = false;
  window.scrollTo({ top: 0, behavior: "auto" });
});

document.querySelectorAll("[data-profile-choice]").forEach((profile) => {
  profile.addEventListener("click", () => {
    const profileName = profile.dataset.profileChoice;
    const profileImage = profile.querySelector(".profile-avatar");
    profileScreen.hidden = true;
    appShell.hidden = false;
    headerProfileImage.src = profileImage.src;
    headerProfileImage.alt = `${profileName} profile`;
    window.scrollTo({ top: 0, behavior: "auto" });
  });
});

viewAllTrending.addEventListener("click", () => {
  buildTrendingOverlay();
  trendingOverlay.hidden = false;
  document.body.classList.add("overlay-open");
});

viewAllFavorites.addEventListener("click", () => {
  buildFavoritesOverlay();
  favoritesOverlay.hidden = false;
  document.body.classList.add("overlay-open");
});

readMessage.addEventListener("click", () => {
  messageOverlay.hidden = false;
  document.body.classList.add("overlay-open");
});

document.querySelectorAll("[data-close-trending]").forEach((closeButton) => {
  closeButton.addEventListener("click", closeTrendingOverlay);
});

document.querySelectorAll("[data-close-favorites]").forEach((closeButton) => {
  closeButton.addEventListener("click", closeFavoritesOverlay);
});

document.querySelectorAll("[data-close-message]").forEach((closeButton) => {
  closeButton.addEventListener("click", closeMessageOverlay);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !trendingOverlay.hidden) {
    closeTrendingOverlay();
  }
  if (event.key === "Escape" && !favoritesOverlay.hidden) {
    closeFavoritesOverlay();
  }
  if (event.key === "Escape" && !messageOverlay.hidden) {
    closeMessageOverlay();
  }
});

document.querySelectorAll("[data-title], [data-open-modal]").forEach((item) => {
  attachPreview(item);
});

const closePreview = () => {
  if (typeof modal.close === "function") {
    modal.close();
  } else {
    modal.removeAttribute("open");
  }
};

closeModal.addEventListener("click", closePreview);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closePreview();
  }
});
