const initialCards = [
  {name:"Curious fox", link: "https://unsplash.com/photos/a-close-up-of-a-fox-on-a-sidewalk-xQNUj4WTFxU"},
  {name:"Found Dory", link: "https://unsplash.com/photos/a-small-blue-and-yellow-fish-on-a-coral-1HaMoMhu9ss"},
  {name:"Chiclet", link: "https://unsplash.com/photos/a-small-island-in-the-middle-of-a-lake-RtxDtOwskI8"},
  {name:"Happy Hour", link: "https://unsplash.com/photos/a-refrigerator-filled-with-lots-of-bottles-of-wine-fLJArLvo4p8"},
  {name:"Horse with no name", link: "https://unsplash.com/photos/gray-horse-on-field-DjvG_-cQ880"},
  {name:"Glendale", link: "https://unsplash.com/photos/sheep-on-grass-field-sfB_Nw9sggw"},

];

const profileEditButton = document.querySelector(".profile__edit-btn");

const editProfileModal = document.querySelector("#edit-modal");

const closeProfileModal = editProfileModal.querySelector(".modal__close-btn")


function openModal(){
  editProfileModal.classList.add("modal_opened");
}

function closeModal() {
  editProfileModal.classList.remove("modal_opened");
}

profileEditButton.addEventListener("click", openModal);

closeProfileModal.addEventListener("click", closeModal);