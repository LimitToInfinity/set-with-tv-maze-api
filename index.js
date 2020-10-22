const baseURL = 'https://api.tvmaze.com';
const showsURL = `${baseURL}/shows`;

const tvShowsContainer = document.querySelector('.tv-shows-container');

fetch(showsURL)
  .then(parseJSON)
  .then(renderTvShows);

function renderTvShows(tvShows) {
  tvShows.forEach(displayTvShow);
}

function displayTvShow(tvShow) {
  const tvShowCard = document.createElement('div');
  tvShowCard.classList.add('tv-show-card');

  const tvShowName = document.createElement('h2');
  tvShowName.textContent = tvShow.name;

  const tvShowImage = document.createElement('img');
  tvShowImage.src = tvShow.image.medium;

  tvShowCard.append(tvShowName, tvShowImage);
  tvShowsContainer.append(tvShowCard);
}

function parseJSON(response) {
  return response.json();
}
