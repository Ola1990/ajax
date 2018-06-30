'use strict';

//podnosimy liczbę do 3 potęgi w funkcji

function potegaTrzecia(liczba){
    var wynik = 1;
    
    for(var i = 1; i <4; ++i){
        wynik = wynik * liczba;
    }
    
    
    return wynik;
}
var ret1 = potegaTrzecia(6);
console.log(ret1);
/*
var ret2 = potegaTrzecia(5);
console.log(ret2);

var ret3 = potegaTrzecia(8);
console.log(ret3);

var ret4 = potegaTrzecia(3);
console.log(ret4);
*/