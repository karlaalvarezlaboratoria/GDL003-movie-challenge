














































const btnadventure = () => {

const adventureMovies = ["tt0114709", "tt0266543", "tt2096673", "tt3521164", "tt2380307", "tt1979388"];
for (let i = 0; i < adventureMovies.length; i++) {
    fetch('http://www.omdbapi.com/?&i=' + adventureMovies[i] + '&apikey=5f49f332')
        .then((data) => {
            return data.json();
        }).then((dataAsJSON) => {
            adventureMovies[i] = dataAsJSON;
            document.getElementById("movieContent").innerHTML+=
            `<div class="cardsMovies" id= "cardPage" >
            <img src="${dataAsJSON.Poster}" alt="">
            <h2>Title: ${dataAsJSON.Title}</h2>
            <p>Year: ${dataAsJSON.Year}</p>
            <p>Released: ${dataAsJSON.Released}</p>
            <p>Runtime: ${dataAsJSON.Runtime}</p>
          </div>` 
        });
        console.log(btnadventure);
        console.log(adventureMovies);
        
};
}

document.getElementById("adventures").addEventListener("click", btnadventure);
