const APIKEY = 'f065d4671e22194c3bfb191f289dbbc0';

const keyword = 'interstellar';

let baseURL = "https://api.themoviedb.org/3/";

let configData = baseURL + "configuration?api_key=<" + APIKEY + ">";

let baseImageURL ="https://api.themoviedb.org/3/search/movie?api_key=<f065d4671e22194c3bfb191f289dbbc0>&query=<interstellar>";

const urlDetail = 'https://api.themoviedb.org/3/movie/157336?api_key=f065d4671e22194c3bfb191f289dbbc0';

function fetchData() {
    fetch(urlDetail).then(response => {
        if (!response.ok){
            throw error('ERROR');
        }
        return response.json();        
    }).then(data => {
        console.log(data.overview);
        document.querySelector("#film").insertAdjacentHTML('afterbegin', '<p>' + data.overview + '</p>');
    }).catch(error => {
        console.log(error)
    });
}

fetchData();