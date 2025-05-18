const addMovieModal = document.getElementById("add-modal");
const backdrop = document.getElementById("backdrop");
const startAddMovieButton = document.querySelector("header button");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = addMovieModal.querySelector(".btn--success");
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const listRoot = document.getElementById("movie-list");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
};

const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  listRoot.children[movieIndex].remove();
  closeMovieDeletionModal();
  updateUI();
};

const deleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add("visible");
  toggleBackdrop();
  const cancel = deleteMovieModal.querySelector(".btn--passive");
  let confirm = deleteMovieModal.querySelector(".btn--danger");

  confirm.replaceWith(confirm.cloneNode(true));
  confirm = deleteMovieModal.querySelector(".btn--danger");
  cancel.removeEventListener("click", closeMovieDeletionModal);

  cancel.addEventListener("click", closeMovieDeletionModal);
  confirm.addEventListener("click", deleteMovie.bind(null, movieId));
};

const renderNewMovieElement = (id, title, imgUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imgUrl}" alt="${title}" />
    </div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    <div 
  `;

  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  listRoot.append(newMovieElement);
};

const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};

const showMovieModal = () => {
  addMovieModal.classList.add("visible");
  toggleBackdrop();
  clearHandler();
};

const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearHandler();
};

const cancelHandler = () => {
  closeMovieModal();
  toggleBackdrop();
  clearHandler();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter the valid values");
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    img: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleBackdrop();
  clearHandler();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.img,
    newMovie.rating
  );
  updateUI();
};

const clearHandler = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

startAddMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
