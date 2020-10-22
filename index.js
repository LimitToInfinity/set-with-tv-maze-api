const baseURL = 'https://api.tvmaze.com';
const showsURL = `${baseURL}/shows`;

fetch(showsURL)
  .then(parseJSON)
  .then(console.log)

function parseJSON(response) {
  return response.json();
}
