'use strict';

function ajax( method, url ){

var httpReq = new XMLHttpRequest();
console.log(httpReq);
httpReq.open( method, url );

//jeśli statu polączenie został zmieniony -> httpReq.readyState
//0: połączenie nie nawiązane
//1: połączenie nawiązana
//2: połączenie odebrane
//3: przetwarzanie
//4: dane zwrócone i gotowe do użycia

httpReq.onreadystatechange = function() {
        console.log(httpReq.readyState); // można sprawdzić jak zmieniał się status połączenie

    //jeżeli 4: dane zwrócone i gotowe do użycia
    if( httpReq.readyState == 4 ) {
            
            
        //sprawdź kod statusu połączenia - https://pl.wikipedia.org/wiki/Kod_odpowiedz_HTTP- ciekawostka
        if( httpReq.status == 200 ) {
            
            var returnData = httpReq.responseText;
            
            var returnJSONData = JSON.parse(returnData);//wyświetlamy jako JSON
            
            console.log(returnJSONData);
            
            //zeruj obiekt, aby nie utrzymywać już nieotrzebnie połączenia z serwerem
            httpReq = null;
            
        }
    }
}
//wysyłanie danych do serwera (połącz)
httpReq.send();

}

//wywołujemy naszą funkcję ajax():
ajax( "GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl");

ajax( "GET", "http://echo.jsontest.com/studenci/jeden/studenci2/dwa");