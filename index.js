// https://www.omdbapi.com/?apikey=aecc1b78&s=fast

async function main(movieName) {
  const data = await fetch(`https://www.omdbapi.com/?apikey=aecc1b78&s=${movieName}`)
  const movieData = await data.json();
  const result = movieData.Search
  const moviesWrapper = document.querySelector('.movies__container')
  const moviesHtml = result
        .map(movie => {
            return `<div class="movie">
                      <figure class="movie__img--wrapper">
                            <img class="movie__img" src="${movie.Poster}" alt="">
                      </figure>
                      <div class="movie__title">${movie.Title}</div>
                      <div class="movie__year">${movie.Year}</div>                      
                    </div>`;
        })
        .join("");
  console.log(movieData)      
  console.log(result)






  moviesWrapper.innerHTML = moviesHtml;

}

async function renderMovies(filter) {
  const moviesWrapper = document.querySelector('.movies__container')
}



function filterMovies(event) {

  if (filter === 'A_TO_Z') {
    movies.sort((a, b) => a.Title.localeCompare(b.Title));
  }
  else if (filter === 'Z_TO_A') {
    movies.sort((a, b) => b.Title.localeCompare(a.Title));;
  }
  else if (filter === 'RATING') {
    movies.sort((a, b) => b.rating - a.rating);
  }
}







// we want to give it to the search button, so we will use event listener, and it will be onclick inside of the html, for now I can the function directly in js using main() 
// after we remoe the main function and give it to the button search 


