"use strict";

let movie='';
let rate=Number;

let personalMovieDB={
    count:0,
    movies:{},
    actors:{},
    genres:[],
    privat:true,
    start: function(){
        personalMovieDB.count=+prompt('How many films did you watch?','');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            alert('Write the quantity of films again!');
            personalMovieDB.count=+prompt('How many films did you watch?','');
        }
    },
    toggleVisibleMyDB: function(){
        personalMovieDB.privat = confirm("Is your DB privat?");
        if (personalMovieDB.privat == false){
            personalMovieDB.privat = true;
        } else{
            personalMovieDB.privat = false;
        }
    },
    writeYourGenres: function(){
        for (let i=1;i<2; i++){
            // let gen = prompt(`What is your favourite genres at number ${i}?`);
            
            // while(gen == null || gen == ''){
            //     alert("Write genre again!");
            //     gen = prompt(`What is your favourite genres at number ${i}?`);
            // }

            // personalMovieDB.genres[i-1]=gen;

            let genres = prompt('Write your favourite genres separated by comma');

            while (genres == null || genres == ''){
                alert("Write your favourite genres again!");
                genres = prompt('Write your favourite genres separated by comma');
            }

            genres.toLowerCase();
            personalMovieDB.genres = genres.split(', ');
            personalMovieDB.genres.sort();
        }

        personalMovieDB.genres.forEach(function(item,i){
            console.log(`Favourite genre #${i+1} - ${item}`);
        });
    },
    rememberMyFilms: function(){
        for (let i = 1; i<=personalMovieDB.count;i++){
            movie=prompt('What film did you watch last time?');
            while(movie == null || movie =='' || movie.length>50){
                alert('Write a name of film again!');
                movie=prompt('What film did you watch last time?');
            }
            
            rate=prompt('How would you rate it?','');
            while (rate=='' || rate>10 || rate<0 || rate == null|| isNaN(rate)){
                alert('Write a rate of film again!');
                rate=prompt('How would you rate it?','');
            }

            personalMovieDB.movies[movie]=rate;
        }
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count<10){
            console.log('You have already seen a few films');
        } else if(personalMovieDB.count>=10 && personalMovieDB.count<=30){
            console.log('You are a classic viewer');
        } else if(personalMovieDB.count>30){
            console.log('You are a movie fan');
        } else{
            console.log('Error');
        }
    },
    showMyDB: function(){
        if (personalMovieDB.privat == false){
            console.log(personalMovieDB);
        } else {
            console.log('We cannnot show your DB!');
        }
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();