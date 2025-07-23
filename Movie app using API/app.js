let api = 'https://www.omdbapi.com/?apikey=d242fed3&t=';

// fetch(api).then((data)=>{
//     return data.json;
// }).then((data)=>{
//     console.log(data);
// })

let title = document.querySelector('#title');
let desc = document.querySelector('#desc');
let actors = document.querySelector('#actors');
let director = document.querySelector('#director');
let released = document.querySelector('#released');
let runtime = document.querySelector('#runtime');
let genre = document.querySelector('#genre');
let writer = document.querySelector('#writer');
let language = document.querySelector('#language');
let country = document.querySelector('#country');
let awards = document.querySelector('#awards');
let imdbrating = document.querySelector('#imdbrating');
let collection = document.querySelector('#collection');
let poster = document.querySelector('#poster');
let container = document.querySelector("#container");
let error = document.querySelector('#error');

container.classList.add('hidden');


function search(){
    let movieInput = document.querySelector('#movieName');
    let query = api + movieInput.value;

    fetch(query).then(data => data.json()).then(data=>{

    if(data.Error === 'Movie not found!'){
        error.innerText = 'Movie not found!'
    }
    
   else{
     container.classList.remove('hidden');
    title.innerText = data.Title;
    desc.innerText = data.Plot;
    actors.innerText = data.Actors;
    director.innerText = data.Director;
    released.innerText = data.Released;
    runtime.innerText = data.Runtime;
    genre.innerText = data.Genre;
    writer.innerText = data.Writer;
    language.innerText = data.Language;
    country.innerText = data.Country;
    awards.innerText = data.Awards;
    imdbrating.innerText = data.imdbRating;
    collection.innerText = data.BoxOffice;
    poster.src = data.Poster;
   }
})
}

