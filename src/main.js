document.getElementById('jsonBTN').addEventListener('click',cargarJSON);

function cargarJSON(){
    fetch('http://www.omdbapi.com/?apikey=ba9f5c4a&s=superman')
    .then(function(res){
        //console.log(res);
        return res.json();
    })
    .then(function(data){
     // console.log(data);
      let dataMovie =data.Search;
      //console.log(dataMovie);
      for (let movieName in dataMovie) {
        let value = dataMovie[movieName];
        let title = value.Title;
        let poster = value.Poster;
        let year = value.Year;
        let ID =value.imdbID;
      
      document.getElementById('movieContainer').innerHTML +=
        " " +
        `
        <div class="boxesContainer">
            <div class="cardBox">
                <div class="card">
                  <div class="front">
                    <h3 id= "picture"><img src="${poster}"></h3>
                    <h3>${title}</h3>
                  </div>
                <div class="back">
                  <p>${title}</p>
                  <p>Year: ${year}</p>
                  <p>ID: ${ID}</p>
                </div>
              </div>
            </div>
          </div>`
      };
    })
}