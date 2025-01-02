// https://www.omdbapi.com/?apikey=aecc1b78&s=fast

async function main() {
  const data = await fetch("https://www.omdbapi.com/?apikey=aecc1b78&s=fast")
  const movieData = await data.json();
  const result = movieData.Search

  console.log(result)
}

main()

// we want to give it to the search button, so we will use event listener, and it will be onclick inside of the html, for now I can the function directly in js using main() 
// after we remoe the main function and give it to the button search 


