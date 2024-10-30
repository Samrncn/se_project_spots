const initialCards = [
  {name:"Curious fox", link: "https://images.unsplash.com/photo-1727884747971-7227f47adbf4?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Fox looking curiously"},
  {name:"Found Dory", link: "https://images.unsplash.com/photo-1728343071206-06359c948426?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Blue salt water fish"},
  {name:"Chiclet", link: "https://images.unsplash.com/photo-1728155253434-262ab74ef031?q=80&w=2815&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "small island in the middle of lake shaped like a chiclet"},
  {name:"Happy Hour", link: "https://images.unsplash.com/photo-1728177196109-f6d1227c3fb9?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "fridge with clear glass door filled with wine"},
  {name:"Horse with no name", link: "https://images.unsplash.com/photo-1534774474501-25b647a3f1b2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "ash grey horse walking on mountan side"},
  {name:"Glendale", link: "https://images.unsplash.com/photo-1528709024086-98a7672e0b9d?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Sheep in a field"},
  {name:"praticum", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg", alt: "Sheep in a field"}
];
// used for edit profile modal
const profileEditButton = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-modal");
const closeProfileModal = editProfileModal.querySelector(".modal__close-btn")

//used to fill popup input with user name and description/ change profile name and description
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const editModalNameInput = editProfileModal.querySelector("#profile-name-input");
const editModalDescriptionInput = editProfileModal.querySelector("#profile-description-input");
const editFormElement = editProfileModal.querySelector(".modal__form");

// template for cards
const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

// used for add-card-modal
const addCardModal = document.querySelector("#add-card-modal");
const newPostbuttton = document.querySelector(".profile__add-btn");
const closePostbutton = addCardModal.querySelector(".modal__close-btn");
const cardForm = addCardModal.querySelector(".modal__form");
const cardLinkInput = addCardModal.querySelector("#add-card-link-input");
const cardCaptionInput = addCardModal.querySelector("#add-card-name-input");

const previewModal = document.querySelector("#preview-modal");
const previewImgModal = previewModal.querySelector(".modal__img");
const previewCaptionModal = previewModal.querySelector(".modal__caption");
const previewCloseModalBtn = previewModal.querySelector(".modal__close-btn");


function getCardElement (data) {
  const cardElement = cardTemplate.content.querySelector(".card").cloneNode(true);
  const cardNameElement = cardElement.querySelector(".card__title");
  const cardImgElement = cardElement.querySelector(".card__image");
  const cardLikeBtn = cardElement.querySelector(".card__like-btn");
  const cardDeletebtn = cardElement.querySelector(".card__delete-btn");

  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-btn_liked");
  });

  cardDeletebtn.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImgElement.addEventListener("click", () => {
    openModal(previewModal);
    previewImgModal.src = data.link;
    previewImgModal.alt = data.alt;
    previewCaptionModal.textContent = data.name;
  })

  previewCloseModalBtn.addEventListener("click", () => {
    closeModal(previewModal);
  });


  cardNameElement.textContent = data.name;
  cardImgElement.src = data.link;
  cardImgElement.alt = data.alt;

  return cardElement

}


function openModal(modal){
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editModalDescriptionInput.value;
  closeModal(editProfileModal);

}

function handleCardSubmit (evt){
  evt.preventDefault(evt);
  const inputValue = {name: cardCaptionInput.value, link: cardLinkInput.value};
  const cardsElement = getCardElement(inputValue);
  cardsList.prepend(cardsElement);
  closeModal(addCardModal);

};

profileEditButton.addEventListener("click", () => {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  openModal(editProfileModal);
});



closeProfileModal.addEventListener("click", () => {
  closeModal(editProfileModal );

});

newPostbuttton.addEventListener("click", () => {
  openModal(addCardModal);
});

closePostbutton.addEventListener("click", () =>{
  closeModal(addCardModal);
})



editFormElement.addEventListener("submit", handleEditFormSubmit);
cardForm.addEventListener("submit", handleCardSubmit);

initialCards.forEach((card) => {
  const cardsElement = getCardElement(card);
  cardsList.append(cardsElement);
});
