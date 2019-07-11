function filterMovie=(data, condition){
  //const filter =(dataMovie,chooseMovie) =>{
    let filterMovies =[];
    let search = condition;//condition: 'SuperHeroes'
  fetch('http://www.omdbapi.com/?apikey=ba9f5c4a&s='${condition}');
  .then(function(res){
      //console.log(res);
      return res.json();
  })
  .then(function(data){
   // console.log(data);
    let dataMovie =data.Search;
    for (let movieName in dataMovie) {
      let value = dataMovie[movieName];        
      filterMovies.push(movieName);
          //console.log(propName);
        }
      }
    //console.log(filterMovies);
    return filterMovies;
  };