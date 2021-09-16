// Variables for Dom Manipulation
const cards = document.getElementById("cards");
const form = document.getElementById("form");
const cardsHandler = document.getElementById("cards-handler");
const formHandler = document.getElementById("form-handler");
const searchArea = document.getElementById("search");
const searchInput = document.getElementById("search__input");
const modal = document.getElementById("modal");
const modalButton = document.getElementById("modal__button");
const modalCloseButton = document.getElementById("modal__close");
const modalText = document.getElementById("modal__text__container");

// Form Inputs
const company = document.getElementById("company");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email_address");
const title = document.getElementById("title");
const phone = document.getElementById("phone");
const cancelReg = document.getElementById("cancel_reg");
const training = document.getElementById("training_session");
const jobFunction = document.getElementById("job_func");
const distary = document.getElementById("distary");
const expectations = document.getElementById("expectations");

// Display Card Or Form
cardsHandler.addEventListener("click", () => {
  cards.classList.remove("d-none");
  form.classList.add("d-none");
  searchArea.classList.remove("d-none");
});
formHandler.addEventListener("click", () => {
  form.classList.remove("d-none");
  cards.classList.add("d-none");
  searchArea.classList.add("d-none");
});

// Variables for Card Manipulation
const cardTitle = document.querySelector(".card__title");
const cardText = document.querySelector(".card__text");

// Fetching Data
fetch(" https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    filteredArray = data;
    listCards(filteredArray);
  });

const listCards = (array) => {
  array.slice(0, 10).map((card, id) => {
    cards.innerHTML += `
              <div id=${id} class="card">
              <img src="http://placeimg.com/640/480/animals"
                  alt="">
              <div class="card__content">
                  <p class="card__title">${card.title}</p>
                  <p class="card__text">${card.body}</p>
                  <button class="card__button">More ....</button>
              </div>
          </div>
              `;
  });
};

// Search Query
let filtered = "";

// Search Query Array
let filteredArray = [];

// Search Method and Render Search Items
searchInput.addEventListener("keyup", (e) => {
  filtered = e.target.value;
  const filteredCharacters = filteredArray.filter((character) => {
    return character.title.includes(filtered);
  });

  // We Need This For Each Letter (for Search) Rendering
  cards.innerHTML = "";

  // Add Cards
  filteredCharacters.slice(0, 10).map((card, id) => {
    cards.innerHTML += `
            <div id=${id} class="card">
              <img src="http://placeimg.com/640/480/animals"
                  alt="">
              <div class="card__content">              
                  <p class="card__title">${card.title}</p>
                  <p class="card__text">${card.body}</p>
                  <button class="card__button">More ....</button>
              </div>
            </div>
        `;
  });
});

// Open Modal
modalButton.addEventListener("click", (e) => {
  // Disable Default Submit Event
  e.preventDefault();

  modalText.innerHTML = `
  <p class="modal__text">Company -> ${company.value}</p>
  <p class="modal__text">First Name -> ${firstName.value}</p>
  <p class="modal__text">Last Name -> ${lastName.value}</p>
  <p class="modal__text">Email Address -> ${email.value}</p>
  <p class="modal__text">Title -> ${title.value}</p>
  <p class="modal__text">Phone -> ${phone.value}</p>
  <p class="modal__text">Cancel Registration -> ${cancelReg.checked}</p>
  <p class="modal__text">Training Session -> ${training.value}</p>
  <p class="modal__text">Job Func. -> ${
    jobFunction.options[jobFunction.selectedIndex].text
  }</p>
  <p class="modal__text">Distary Reqs. -> ${distary.value}</p>
  <p class="modal__text">Expectations -> ${expectations.value}</p>
  `;
  // Open Modal
  modal.classList.remove("d-none");
});

// Close Modal
modalCloseButton.addEventListener("click", () => {
  modal.classList.add("d-none");
});
