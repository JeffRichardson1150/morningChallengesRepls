/*
OBJECTS & DOT NOTATIONS
  - Object literal for my favorite movie
      * nameOfMovie / runTime / characters / genre
      * characters is an array containing 2 character objects with keys = name / age / items
          # items is an array with 2 item objects whose key/pairs are anything I want
  - print out nameOfMove, runTime, the characters, the name of a character, and one of the items a character has 
  */
  

 let favoriteMovie = {
    nameOfMovie: "Avengers: Endgame",
    runTime:  "3h 2m",
    characters: [
      {
          name: "Thor", 
          age: 1000, 
          items: [{item1: "hammer"}, {item2: "helmet"}]
      },
      {
          name: "Iron Man", 
          age: 48, 
          items: [{item1: "armor"}, {item2: "arc reactor"}]
      }
    ],
    genre: "fantasy"
  }
  
  console.log(favoriteMovie.nameOfMovie);
  console.log(favoriteMovie.runTime);
  console.log(Object.values(favoriteMovie.characters));
  console.log(favoriteMovie.characters[1].name);
  console.log(favoriteMovie.characters[1].items[0].item1);
  
