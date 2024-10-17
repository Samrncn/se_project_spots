const initialCards = [
  {name:"Curious fox", link: "https://images.unsplash.com/photo-1727884747971-7227f47adbf4?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Fox looking curiously"},
  {name:"Found Dory", link: "https://images.unsplash.com/photo-1728343071206-06359c948426?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Blue salt water fish"},
  {name:"Chiclet", link: "https://images.unsplash.com/photo-1728155253434-262ab74ef031?q=80&w=2815&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "small island in the middle of lake shaped like a chiclet"},
  {name:"Happy Hour", link: "https://images.unsplash.com/photo-1728177196109-f6d1227c3fb9?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "fridge with clear glass door filled with wine"},
  {name:"Horse with no name", link: "https://images.unsplash.com/photo-1534774474501-25b647a3f1b2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "ash grey horse walking on mountan side"},
  {name:"Glendale", link: "https://images.unsplash.com/photo-1528709024086-98a7672e0b9d?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Sheep in a field"},

];
// used for edit profile popup
const profileEditButton = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-modal");
const closeProfileModal = editProfileModal.querySelector(".modal__close-btn")

//used to fill popup input with user name and description/ chage profile name and description
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const editModalNameInput = editProfileModal.querySelector("#profile-name-input");
const editModalDescriptionInput = editProfileModal.querySelector("#profile-description-input");
const editFormElement = editProfileModal.querySelector(".modal__form");

// template for cards
const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");


function getCardElement (data) {
  const cardElement = cardTemplate.content.querySelector(".card").cloneNode(true);
  const cardNameElement = cardElement.querySelector(".card__title");
  const cardImgElement = cardElement.querySelector(".card__image");


  cardNameElement.textContent = data.name;
  cardImgElement.src = data.link;
  cardImgElement.alt = data.alt;







  return cardElement

}


function openModal(){
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  editProfileModal.classList.add("modal_opened");
}

function closeModal() {
  editProfileModal.classList.remove("modal_opened");
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editModalDescriptionInput.value;
  closeModal();

}

profileEditButton.addEventListener("click", openModal);

closeProfileModal.addEventListener("click", closeModal);

editFormElement.addEventListener("submit", handleEditFormSubmit)

for (let i = 0; i < initialCards.length; i++) {
  const cardsElement = getCardElement(initialCards[i]);
  cardsList.prepend(cardsElement)
}