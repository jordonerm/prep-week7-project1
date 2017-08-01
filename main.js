/*
=======================================================

    ** Week 7 - Project 1  **
*** Ajax and JSON with OMDB ***

This assignment is more open than the past assignments.
You are free to build a simple web page that interacts
with OMBD. It can simply display data within the HTML
page or buttons and text fields can be added to interact
with the data and update the page accordingly.

Have fun!

=======================================================
*/

// 20170731115505
// http://www.omdbapi.com/?apikey=c5a8df09&s=american+d*&type=movie

var data = {
  "search": [
    {
      "title": "American Dreamz",
      "Year": "2006",
      "imdbID": "tt0465142",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE0MTk1NzM4MV5BMl5BanBnXkFtZTcwOTUzMjYzMQ@@._V1_SX300.jpg"
    },
    {
      "title": "The Decline of the American Empire",
      "Year": "1986",
      "imdbID": "tt0090985",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTI0Mjc2OV5BMl5BanBnXkFtZTcwNzEwMTMzMQ@@._V1_SX300.jpg"
    },
    {
      "title": "Requiem for the American Dream",
      "Year": "2015",
      "imdbID": "tt3270538",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZDE0ZjNiODgtNDE4MS00MWM1LTgyZWMtZjA1NDAzYTZhMWRjXkEyXkFqcGdeQXVyNDI1Njc3NDA@._V1_SX300.jpg"
    },
    {
      "title": "ABCD: American-Born Confused Desi",
      "Year": "2013",
      "imdbID": "tt2956300",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYjUwODQ5MDItZWZiYi00M2Q4LTk2ZDQtZWM4NmZlOTM1YTc0XkEyXkFqcGdeQXVyMjM0ODk5MDU@._V1_SX300.jpg"
    },
    {
      "title": "American Dreams in China",
      "Year": "2013",
      "imdbID": "tt2278392",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMGM4ZWVlYjktM2FkNy00YWJiLTgwMDktMjg5NTcxZTQwYmRjXkEyXkFqcGdeQXVyMjg0MTI5NzQ@._V1_SX300.jpg"
    },
    {
      "title": "American Drug War: The Last White Hope",
      "Year": "2007",
      "imdbID": "tt1033467",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3NjM2NjM0MF5BMl5BanBnXkFtZTcwNjE0MTM1MQ@@._V1_SX300.jpg"
    },
    {
      "title": "American Desi",
      "Year": "2001",
      "imdbID": "tt0203289",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2OTg4MTQ5Ml5BMl5BanBnXkFtZTcwODQ4ODQyMQ@@._V1_SX300.jpg"
    },
    {
      "title": "Divorce American Style",
      "Year": "1967",
      "imdbID": "tt0061581",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE4MDg5Mjk1OV5BMl5BanBnXkFtZTgwNzUyMTkwMzE@._V1_SX300.jpg"
    },
    {
      "title": "American Dreamer",
      "Year": "1984",
      "imdbID": "tt0086886",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDQyMDZjMmMtZDJkMC00NjhjLWFjYmQtNTE1MmYzOTNiMWY4XkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg"
    },
    {
      "title": "Park Avenue: Money, Power and the American Dream",
      "Year": "2012",
      "imdbID": "tt2460426",
      "Type": "movie",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOGE0ODNkOWUtNWQyZC00ZjhhLWI5NjAtOTU3Yzc2ZDY4ZDVmXkEyXkFqcGdeQXVyNTM4MTcyMjg@._V1_SX300.jpg"
    }
  ],
  "totalResults": "450",
  "Response": "True"
}
console.log(data.search)
var output = "";
for (var i in data.search) {
  output += "<li>"
  document.getElementById("movieTitleAndYear").innerHTML = " "
  output += data.search[i].title + " " + "-" + " "
  output += data.search[i].Year + "</li>";
  document.getElementById("movieTitleAndYear").innerHTML = output;
}
