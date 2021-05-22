const APIKEY = "f065d4671e22194c3bfb191f289dbbc0";

let urlDetail = `https://api.themoviedb.org/3/movie/?api_key=${APIKEY}&language=tr-TR`;

let urlVideo = `https://api.themoviedb.org/3/movie//videos?api_key=${APIKEY}&language=en-US`;

function fetchData(ID, num) {
  urlDetail = `https://api.themoviedb.org/3/movie/${ID}?api_key=${APIKEY}&language=tr-TR`;
  urlVideo = `https://api.themoviedb.org/3/movie/${ID}/videos?api_key=${APIKEY}&language=en-US`;

  fetch(urlDetail)
    .then((response) => {
      if (!response.ok) {
        throw error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.overview);

      document.querySelector(`#film-${num}`).insertAdjacentHTML(
        "afterbegin",
        `   
          <h1 style="font-family: 'Courier New', Courier, monospace">
            ${data.title}
          </h1>
          <p>
            <br><br>
            <img 
            src="https://image.tmdb.org/t/p/w500/${data.poster_path}" 
            alt="${data.original_title} film posteri"
            >
            <h3>Özet</h3>
            ${data.overview}
            <br>
            <b>Çıkış tarihi: </b> ${data.release_date}   
            <br>
            <a href="${data.homepage}" target="_blank">Film anasayfası</a>                             
            <br>            
            <b>Tür: </b>${data.genres[0].name}, ${data.genres[1].name}, ${data.genres[2].name}
            <br>
          </p>  
        `
      );
    })
    .catch((error) => {
      console.log(error);
    });

  fetch(urlVideo)
    .then((response) => {
      if (!response.ok) {
        throw error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.overview);
      let video_key = data.results[0].key;
      
      
      document.querySelector(`#film-${num}`).insertAdjacentHTML(
        "beforeend",
        `
        <iframe width="840" height="435"
        src="https://www.youtube.com/embed/${video_key}"
        class="video"
        >
        </iframe>   
        `
      );
    })
    .catch((error) => {
      console.log(error);
    });   
}



fetchData("157336", "1"); //Interstellar
fetchData("475557", "2"); //Joker
fetchData("27205", "3"); //Inception

