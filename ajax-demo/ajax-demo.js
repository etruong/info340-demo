'use strict';

// http://www.omdbapi.com/ documentation
const API_URL = "http://www.omdbapi.com/?apikey=" + API_KEY + "&t=";

let searchButton = document.querySelector("#search");
searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    let inputVal = document.querySelector("input").value;
    document.querySelector("#results").innerHTML = "";
    fetchMovie(inputVal);
});

// // Uncomment after completing fetch function
function fetchMovie(movie) {
    let url = API_URL + movie;
    console.log(url);
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // console.log(data)
            // generateContent(data);
            throw new Error("test")
        })
        .catch(function(err) {
            console.log(err);
            handleError(err);
        });
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
    appendDetails(data, parent);
}

function appendDetails(data, parent) {
    appendDetail("Title", data.Title, parent);
    appendDetail("Director", data.Director, parent);
    appendDetail("Genre", data.Genre, parent);
    appendDetail("Language", data.Language, parent);
    appendDetail("Released", data.Language, parent);
    appendDetail("Rating", data.imdbRating, parent);
}

function appendDetail(type, info, parent) {
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