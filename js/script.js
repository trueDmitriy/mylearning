"use strict";

/*var numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);

var personalMovieDB ={
  'count': numberOfFilms,
  'movies':{},
  'actors':{},
  'genres':[],
  'privat':false
};

var a = prompt('Один из последних просмотренных фильмов?', '');
var b = prompt('На сколько оцените его?', '');
var c = prompt('Один из последних просмотренных фильмов?');
var d = prompt('На сколько оцените его?');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */
var numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
var personalMovieDB ={
  'count': numberOfFilms,
  'movies':{},
  'actors':{},
  'genres':[],
  'privat':false
};

for ( let i = 0 ; i < 2 ; i++){
  let FilmName = prompt('Один из последних просмотренных фильмов?', '');
  let FilmRating = prompt('На сколько оцените его?', '');
  personalMovieDB.movies[FilmName] = FilmRating;
}
console.log(personalMovieDB);