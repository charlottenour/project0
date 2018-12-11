var text = "clear";
var textArray = [];
var date = "";
var day;
var month;
var year;
var day1;
var month1;
var year1;


function readText() {
    $.get("test3", function (data) {


//splitter den valgte dato
        text = data;
        date = $("#daterpicker").val().split('-');
        year = date[0];
        month = date[1];
        day = date[2];


        textArray = $.csv.toArrays(text);

//Starter table
        var innerText = "<table><tr><th>Date</th><th>Meter Number</th><th>Channel</th><th>Reading</th><th>Measuretype</th><th>Address</th></tr>";

//Checker hver linje i vores csv file
        textArray.forEach(line => {
            //date=line[0].val().split('-');

            var localDate = line[0].split('-');
//Gemmer meternumber fra filen
            var meterNumber = line[1];

            // year1=date[0];
            //month1=date[1];
            day1 = localDate[2];

//checker om dagen er de samme. Hvis de er bliver de lagt til innerText
            if (day1 === day && meterNumber == 444) {
                innerText += "<tr>\n" +
                    "<td>" + line[0] + "</td>\n" +
                    "<td>" + line[1] + "</td>\n" +
                    "<td>" + line[2] + "</td>\n" +
                    "<td>" + line[3] + "</td>\n" +
                    "<td>" + line[4] + "</td>\n" +
                    "<td>" + line[7] + line[8] + " <br>" + line[9] + "</td>\n" +
                    "</tr>";
            }
            return innerText;
        });
//afslutter table
        innerText += "</table>\n";

//printer innerText til text div'en i html'en
        document.getElementById("text").innerHTML = innerText;


    });


    return false;
}


