
$(function () {

    $("#login").on("click", function(event) {
        
        event.preventDefault();
                 let request = new XMLHttpRequest();
         request.onload = function () {
             if(this.readyState == 4 && this.status == 200) {
                 var object = JSON.parse(this.response);

                 if($("#inputEmail").val() === object.email  && $("#inputPassword").val() === object.password){
                    window.location.href = "index.html";
                 }
                 else {
                 alert("check your password or email");
                      $("#inputPassword").val("");
                       window.location.href = "login.html";
                    
                 }
             }
         }
          request.open("GET", "https://fe18.azurewebsites.net/api/user", true);
        request.send();
        
    });


    $("#logout").on("click", function() {
        window.location.href = "login.html";
    });

    /*header*/
    let request = new XMLHttpRequest();
    request.onload = function () {
        if(this.readyState == 4 && this.status == 200) {
            var object = JSON.parse(this.response);
            // console.log(object);
            var $fullname =  object.firstname + " " + object.lastname

            $("#userside").text($fullname);
        }
    }    
   request.open("GET", "https://fe18.azurewebsites.net/api/user", true);
   request.send();


    if($("#totalsaleschart").length) {

        // om html objektet finns då gör jag en request
        let request = new XMLHttpRequest();

        request.onload = function () {
            if(this.readyState == 4 && this.status == 200) {
                var object = JSON.parse(this.response);
                
                var $salesrevenue = object.salesrevenue
                var $salesreturns = object.salesreturns
                var $salesqueries = object.salesqueries
                var $salesinvoices = object.salesinvoices
                 $("#salesrevenue").text($salesrevenue);
                 $("#salesreturns").text($salesreturns)
                 $("#salesqueries").text($salesqueries)
                 $("#salesinvoices").text($salesinvoices)

            }
        };
        request.open("GET", "https://fe18.azurewebsites.net/api/totalsaleschart", true);
        request.send();
    }


    if($("#userschart").length) {

        // om html objektet finns då gör jag en request
        let request = new XMLHttpRequest();

        request.onload = function () {
            if(this.readyState == 4 && this.status == 200) {
                var object = JSON.parse(this.response);
                
                var $userchart = object.users

                 $("#userchart").text($userchart);
                 $("#growthchart").text(object.growth)
               

            }
        };
        request.open("GET", "https://fe18.azurewebsites.net/api/userschart", true);
        request.send();
    }

    if($("#projectschart").length) {

        // om html objektet finns då gör jag en request
        let request = new XMLHttpRequest();

        request.onload = function () {
            if(this.readyState == 4 && this.status == 200) {
                var object = JSON.parse(this.response);
                
                var $project1 = object.procent

                 $("#project1").text($project1);
                 $("#projectgrowth").text(object.growth)
               

            }
        };
        request.open("GET", "https://fe18.azurewebsites.net/api/projectschart", true);
        request.send();
    }


    if($("#downloadspart").length) {

        // om html objektet finns då gör jag en request
        let request = new XMLHttpRequest();

        request.onload = function () {
            if(this.readyState == 4 && this.status == 200) {
                var object = JSON.parse(this.response);
                
                var $online = object.online

                 $("#online").text($online);
                 $("#offline").text(object.offline)
               

            }
        };
        request.open("GET", "https://fe18.azurewebsites.net/api/downloads", true);
        request.send();
    }


    if($("#totalsale").length) {

        // om html objektet finns då gör jag en request
        let request = new XMLHttpRequest();

        request.onload = function () {
            if(this.readyState == 4 && this.status == 200) {
                var object = JSON.parse(this.response);
                var $amount = object.currency+ " " +object.amount
                var $month = object.period
                 $("#amount").text($amount);
                 $("#month").text($month)

            }
        };
        request.open("GET", "https://fe18.azurewebsites.net/api/totalsales", true);
        request.send();
    }


    if($("#totalpurchases").length) {

        // om html objektet finns då gör jag en request
        let request = new XMLHttpRequest();

        request.onload = function () {
            if(this.readyState == 4 && this.status == 200) {
                var object = JSON.parse(this.response);
                var $amount = object.currency+ " " +object.amount
                var $month = object.period
                 $("#amount2").text($amount);
                 $("#period2").text($month)

            }
        };
        request.open("GET", "https://fe18.azurewebsites.net/api/totalpurchases", true);
        request.send();
    }
    if($("#totalorders").length) {

        // om html objektet finns då gör jag en request
        let request = new XMLHttpRequest();

        request.onload = function () {
            if(this.readyState == 4 && this.status == 200) {
                var object = JSON.parse(this.response);
                var $amount = object.currency+ " " +object.amount
                var $month = object.period
                 $("#amount3").text($amount);
                 $("#period3").text($month)

            }
        };
        request.open("GET", "https://fe18.azurewebsites.net/api/totalorders", true);
        request.send();
    }
    if($("#totalgrowth").length) {

        // om html objektet finns då gör jag en request
        let request = new XMLHttpRequest();

        request.onload = function () {
            if(this.readyState == 4 && this.status == 200) {
                var object = JSON.parse(this.response);
                var $amount = object.currency+ " " +object.amount
                var $month = object.period
                 $("#amount4").text($amount);
                 $("#period4").text($month)

            }
        };
        request.open("GET", "https://fe18.azurewebsites.net/api/totalgrowth", true);
        request.send();
    }


    if($("#tickets").length) {

        // om html objektet finns då gör jag en request
        let request = new XMLHttpRequest();

        request.onload = function () {
            if(this.readyState == 4 && this.status == 200) {
                var object = JSON.parse(this.response);

                for(var i=0; i<object.tickets.length;i++) {
                    
                    let names = object.tickets[i].fullname.split(" ");
                    let initials = names[0].charAt(0) + names[1].charAt(0);


                    $("#tickets").append(
                        `<tr>
                        <td class="pl-0">
                          <div class="icon-rounded-primary icon-rounded-md">
                            <h4 class="font-weight-medium">${initials}</h4>
                          </div>
                        </td>
                        <td>
                          <p class="mb-0" id="name1">${object.tickets[i].fullname}</p>
                          <p class="text-muted mb-0" id="city1">${object.tickets[i].city}</p>
                        </td>
                        <td>
                          <p class="mb-0" id="date1">${object.tickets[i].date}</p>
                          <p class="text-muted mb-0" id="time1">${object.tickets[i].time}</p>
                        </td>
                        <td>
                          <p class="mb-0" id="project1">${object.tickets[i].project}</p>
                          <p class="text-muted mb-0" id="status1">${object.tickets[i].status}</p>
                        </td>
                        <td class="pr-0">
                          <i class="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
                        </td>
                      </tr>`
                    );
                }
            }
        };
        request.open("GET", "https://fe18.azurewebsites.net/api/tickets", true);
        request.send();
    }


    if($("#updates").length) {

        // om html objektet finns då gör jag en request
        let request = new XMLHttpRequest();

        request.onload = function () {
            if(this.readyState == 4 && this.status == 200) {
                var object = JSON.parse(this.response);

                for(var i=0; i<object.updates.length;i++) {
                    
                    $("#updates").append(
                        `<li>
                        <h6>${object.updates[i].title}</h6>
                        <p class="mt-2">${object.updates[i].description} </p>
                        <p class="text-muted mb-4">
                          <i class="mdi mdi-clock-outline"></i>
                          ${object.updates[i].time}
                        </p>
                      </li>`
                    );
                }
            }
        };
        request.open("GET", "https://fe18.azurewebsites.net/api/updates", true);
        request.send();
    }

    if($("#invoices").length) {

        // om html objektet finns då gör jag en request
        let request = new XMLHttpRequest();

        request.onload = function () {
            if(this.readyState == 4 && this.status == 200) {
                var object = JSON.parse(this.response);
               
                for(var i=0; i<object.invoices.length;i++) {
                    var statuscolor;
                    if(object.invoices[i].status =="Pågående"){
                        statuscolor = "badge-success";
                    }else if(object.invoices[i].status =="Öppen"){
                        statuscolor = "badge-warning";
                    } else if(object.invoices[i].status =="Tillfälligt stoppad"){
                        statuscolor = "badge-danger";
                    } else { 
                        statuscolor = "";
                    }

                    $("#invoices").append(
                        `<tr>
                        <td>${object.invoices[i].invoicenumber}</td>
                        <td>${object.invoices[i].customer}</td>
                        <td>${object.invoices[i].shipping}</td>
                        <td class="font-weight-bold">${object.invoices[i].totalprice}</td>
                        <td>${object.invoices[i].customerprice}</td>
                        <td>
                          <div class="badge badge-success ${statuscolor} badge-fw">${object.invoices[i].status}</div>
                        </td>
                      </tr>`
                    );
                }
            }
        };
        request.open("GET", "https://fe18.azurewebsites.net/api/openinvoices", true);
        request.send();
    }



    if($("#salesreportoverview").length) {

        // om html objektet finns då gör jag en request
        let request = new XMLHttpRequest();

        request.onload = function () {
            if(this.readyState == 4 && this.status == 200) {

                var $purchases = object.försäljning
                var $purchases = object.purchases
                var $purchases = object.users
                var $purchases = object.growth
                
                 $("#downloads").text($downloads);
                 $("#purchases").text($purchases);
                 $("#users").text($users);
                 $("#growth").text($growth);
                

            }
        };
        request.open("GET", "https://fe18.azurewebsites.net/api/salesreportoverview", true);
        request.send();
    }

});



