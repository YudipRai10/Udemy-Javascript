const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else movieList.classList.add("visible");

  movieList.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) =>
        movie.info.title.toLowerCase().includes(filter.toLowerCase())
      );

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    // if ("info" in movie) console.log("Exists");

    const { info } = movie;
    // const { title: movieTitle } = info;
    let text = movie.getFormattedTitle() + " - ";
    for (const key in info) {
      if (key !== "title") {
        text += `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  )
    return;

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random(),
    getFormattedTitle() {
      return this.info.title.toUpperCase();
    },
  };

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);

// const person = {
//   _age: 40,

//   get age() {
//     return this._age;
//   },

//   set age(value) {
//     if (value >= 0) {
//       this._age = value;
//     } else {
//       console.log("Age must be a poitive number");
//     }
//   },
// };
// console.log(person.age);
// person.age = 30;
// console.log(person.age);
// person.age = -5;

// const rectangle = {
//   _width: 10,
//   _height: 20,

//   get width() {
//     return this._width;
//   },

//   set width(value) {
//     if (value > 0) this._width = value;
//     else console.log("Width must be positive");
//   },
//   get height() {
//     return this.height;
//   },

//   set height(value) {
//     if (value > 0) this._height = value;
//     else console.log("Height must be positive");
//   },

//   get area() {
//     return this._width * this._height;
//   },
// };

// console.log(rectangle.area);

// rectangle.width = 3;
// rectangle.height = 3;
// console.log(rectangle.area);

const rectangle = {
  _width: 10,
  _height: 10,

  get width() {
    return this._width;
  },
  set width(value) {
    if (value > 0) this._width = value;
    else console.log("Width must be a positive number");
  },
  get height() {
    return this._height;
  },
  set height(value) {
    if (value > 0) this._height = value;
    else console.log("Height must be a positive number");
  },

  get area() {
    return this._width * this._height;
  },
};

console.log(rectangle.area);
rectangle.width = 3;
rectangle.height = 3;
console.log(rectangle.area);
