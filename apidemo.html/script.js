$(function() {

    // kolla om ett visst objekt finns som jag ska arbeta med
    if($(".container").length) {

        // om html objektet finns då gör jag en request
        let request = new XMLHttpRequest();

        request.onload = function () {
            if(this.readyState == 4 && this.status == 200) {
                var object = JSON.parse(this.response);

                // för att uppdatera ett befintligt html-objekt med information
                $(".container").append("<div id='singlevalue'><strong>Detta skriver ut ett värde:</strong></div><br><br>");
                $("#singlevalue").append(`<p>${object.returns}</p>`);

                // för att lägga till ett nytt objekt baserat på en array av information
                $(".container").append("<div id='labelsfromarray'><strong>Detta är värden från labels arrayen:</strong></div><br><br>");
                for(var i=0; i< object.labels.length; i++) {
                    $("#labelsfromarray").append(`<p>${object.labels[i]}</p>`);
                }

                // för att kopiera över en hel array från en till en annan
                var arr1 = object.datasets[0].data;
                var arr2 = object.datasets[1].data;

                // om du vill skriva ut värden från en array
                $(".container").append("<div id='valuefromarray'><strong>Detta är värden från första arrayen:</strong></p>");
                for(var i=0; i< arr1.length; i++) {
                    $("#valuefromarray").append(`<p>${ arr1[i] }</p>`);
                }            

            }
        };
        request.open("GET", "https://fe18.azurewebsites.net/api/totalsaleschart", true);
        request.send();
    }
});