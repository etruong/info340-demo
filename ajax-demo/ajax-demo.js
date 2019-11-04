'use strict';

// http://www.omdbapi.com/ documentation
const API_URL = "http://www.omdbapi.com/?apikey=" + API_KEY + "&t=";

let searchBtn = document.querySelector("#search");
searchBtn.addEventListener("click", function(e) {
    e.preventDefault();

});

function fetchMovie(movie) {

}

function handleError(err) {
    let parent = document.querySelector("#results");
    let errorMsg = document.createElement("p");
    errorMsg.classList = "alert alert-danger";
    errorMsg.textContent = err;
    parent.append(errorMsg);
}

function generateContent(data) {
    let parent = document.querySelector("#results");
    appendPoster(data.Poster, parent);
    appendDetails("Title", data.Title, parent);
    appendDetails("Director", data.Director, parent);
    appendDetails("Genre", data.Genre, parent);
    appendDetails("Language", data.Language, parent);
    appendDetails("Released", data.Language, parent);
    appendDetails("Rating", data.imdbRating, parent);
}

function appendDetails(type, info, parent) {
    let detail = document.createElement("p");
    detail.textContent = type + ": " + info;
    parent.append(detail);
}

function appendPoster(location, parent) {
    let poster = document.createElement("img");
    poster.src = location;
    poster.classList = "poster";
    parent.append(poster);
}