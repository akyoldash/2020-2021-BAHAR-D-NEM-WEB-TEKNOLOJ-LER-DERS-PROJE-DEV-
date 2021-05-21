const APIKEY = "f065d4671e22194c3bfb191f289dbbc0";

const keyword = "interstellar";

let baseURL = "https://api.themoviedb.org/3/";

let configData = `${baseURL}configuration?api_key=<${APIKEY}>`;

let baseImageURL = `https://api.themoviedb.org/3/search/movie?api_key=<${APIKEY}>&query=<${keyword}>`;

const urlDetail = `https://api.themoviedb.org/3/movie/157336?api_key=${APIKEY}&language=tr-TR`;

function fetchData() {
  fetch(urlDetail)
    .then((response) => {
      if (!response.ok) {
        throw error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.overview);
      document
        .querySelector("#film")
        .insertAdjacentHTML("afterbegin", `<div class="poster-sinopsis">
        <h1 style="font-family: 'Courier New', Courier, monospace;">YILDIZLARARASI</h1> <h3>Özet</h3> <p>${data.overview}</p> <br> <a href="${data.homepage}">Film anasayfası</a>
        `);

      document
        .querySelector("#film")
        .insertAdjacentHTML(
          "beforeend",
          `<img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="Yıldızlararası film   posteri" class="film-poster"></div>
          `
        );
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData();



