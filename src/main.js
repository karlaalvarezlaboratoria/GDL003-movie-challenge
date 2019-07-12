const princess = ["tt2294629", "tt0097757","tt0398286", "tt1217209", "tt3521164", "tt0103639"];
const adventures = ["tt0114709", "tt0266543", "tt2096673", "tt3521164", "tt2380307", "tt1979388"];
const superHeroes = ["tt5612702", "tt0131675", "tt3062328","tt1626038", "tt2455546", "tt0094074"," tt4116284"];
const babies = ["tt0317219","tt0268380", "tt1490017", "tt0069289", "tt4131800", "tt0198781"];
const princessButton =document.getElementById("princess");
const adventuresButton=document.getElementById("adventures");
const superHButton= document.getElementById("superHeroes");
const babiesButton= document.getElementById("babies");
let container = document.getElementById("movieContent");

princessButton.addEventListener("click", () => {
   container.innerHTML= "";
  const fetchData = princess.forEach(id =>{
     fetch("https://www.omdbapi.com/?i=" + id + "&apikey=dbe68637")
     .then(data => data.json())
     .then(data => {

       console.log(data);
       container.innerHTML+=
       `<div class="flip-card">
         <div class="flip-card-inner">
           <div class="flip-card-front">
             <img src=${data.Poster} alt="Avatar" style="width: ;height: ;">
             <h1>${data.Title}</h1>
           </div>
           <div class="flip-card-back">
             <h3>${data.Title}</h3>
             <h6>Released: ${data.Released}  </h6>
             <h6>Director: ${data.Director} </h6>
             <h6>Genre: ${data.Genre} </h6>
             <h6>RunTime:${data.Runtime}</h6>
             <h6> Plot: ${data.Plot}  </h6>
             <button>Parents recomendations</button>
           </div>
         </div>
       </div>`

  });
  });
});

adventuresButton.addEventListener("click", () => {
  container.innerHTML= "";
  const fetchData = adventures.forEach(id =>{
     fetch("https://www.omdbapi.com/?i=" + id + "&apikey=dbe68637")
     .then(data => data.json())
     .then(data => {

       console.log(data);
       container.innerHTML+=
       `<div class="flip-card">
         <div class="flip-card-inner">
           <div class="flip-card-front">
             <img src=${data.Poster} alt="Avatar" style="width: ;height: ;">
             <h1>${data.Title}</h1>
           </div>
           <div class="flip-card-back">
             <h3>${data.Title}</h3>
             <h6>Released: ${data.Released}  </h6>
             <h6>Director: ${data.Director} </h6>
             <h6>Genre: ${data.Genre} </h6>
             <h6>RunTime:${data.Runtime}</h6>
             <h6> Plot: ${data.Plot}  </h6>
             <button>Parents recomendations</button>
           </div>
         </div>
       </div>`

  });
  });
});

superHButton.addEventListener("click", () =>{
  container.innerHTML= "";
  const fetchData = superHeroes.forEach(id =>{
     fetch("https://www.omdbapi.com/?i=" + id + "&apikey=dbe68637")
     .then(data => data.json())
     .then(data => {

       console.log(data);
       container.innerHTML+=
       `<div class="flip-card">
         <div class="flip-card-inner">
           <div class="flip-card-front">
             <img src=${data.Poster} alt="Avatar" style="width: ;height: ;">
             <h1>${data.Title}</h1>
           </div>
           <div class="flip-card-back">
             <h3>${data.Title}</h3>
             <h6>Released: ${data.Released}  </h6>
             <h6>Director: ${data.Director} </h6>
             <h6>Genre: ${data.Genre} </h6>
             <h6>Runtime:${data.Runtime}</h6>
             <h6> Plot: ${data.Plot}  </h6>
             <button>Parents recomendations</button>
           </div>
         </div>
       </div>`

  });
  });
});



babiesButton.addEventListener("click", ()=>{
  container.innerHTML= "";
  const fetchData = babies.forEach(id =>{
     fetch("https://www.omdbapi.com/?i=" + id + "&apikey=dbe68637")
     .then(data => data.json())
     .then(data => {

       console.log(data);
       container.innerHTML+=
       `<div class="flip-card">
         <div class="flip-card-inner">
           <div class="flip-card-front">
             <img src=${data.Poster} alt="Avatar" style="width: ;height: ;">
             <h1>${data.Title}</h1>
           </div>
           <div class="flip-card-back">
             <h3>${data.Title}</h3>
             <h6>Released: ${data.Released}  </h6>
             <h6>Director: ${data.Director} </h6>
             <h6>Genre: ${data.Genre} </h6>
             <h6>RunTime:${data.Runtime}</h6>
             <h6> Plot: ${data.Plot}  </h6>
             <button>Parents recomendations</button>
           </div>
         </div>
       </div>`

  });
  });
});
