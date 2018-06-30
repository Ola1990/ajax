window.addEventListener("scroll", function () {
    'use strict';
    console.log("działa");

    var d = document.documentElement;
    var offset = d.scrollTop + window.innerHeight; //okno przeglądarki + scroll
    var height = d.offsetHeight; //cała strona

    if (offset == height) {//jeśli okno przeglądarki o scroll będzie na końcu strony to doda się to:
        ajax("GET", "https://jsonplaceholder.typicode.com/users");
    }
});

function ajax(method, url) {
    var httpReq = new XMLHttpRequest();

    httpReq.open(method, url);
    httpReq.onreadystatechange = function () {
        if (httpReq.readyState == 4) {

            if (httpReq.status == 200) {

                var returnData = httpReq.responseText;

                var returnJSONData = JSON.parse(returnData);
                console.log(returnJSONData);
                
                returnJSONData.forEach(function(element){
                    var next = document.createElement("li");  //tworzę nowego li   
                    var txt = document.createTextNode(element.username);//w nowym li wyciągam tekst z JSON
                    next.appendChild(txt);//dodajemy do nexta txt
                    document.getElementById("list").appendChild(next);//wyświetlamy na stronie dodany tekst
                });

                httpReq = null;

            }
        }
    }
    httpReq.send();

}
