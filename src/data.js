
















































const princess = ["tt2294629", "tt0097757","tt0398286", "tt1217209", "tt3521164", "tt0103639"];
const adventures = ["tt0097757"];
const superHeroes = ["tt0398286"];
const babies = ["tt1217209"];
const container = document.getElementById("movieContent");
//let selectType = document.querySelectorAll("button, typeButton");
//let typeMovie = selectType.value;

/*
selectType.forEach(element =>{
  element.addEventListener("click", () =>{
  selectType.getAttribute("type-movie")
});
console.log(selectType);

});


*/

  // let typeMovie = selectType.getAttribute("value");

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
               <h6>Year: ${data.Year}  </h6>
               <h6>Director: ${data.Director} </h6>
               <h6> Plot: ${data.Plot}  </h6>
             </div>
           </div>
         </div>`

  });
  });
