var text = "clear";
var textArray = [];
var date="";
var day;
var month;
var year;
var day1;
var month1;
var year1;

//superuser search engine

function readTextSuper() {
    $.get("test3", function (data) {


//splitter den valgte dato
        text = data;
        date=$("#daterpicker").val().split('-');
        year=date[0];
        month=date[1];
        day=date[2];

//gemmer den indtastet property value
        var propertyNumber = $("#propertyNumber").val();
        propertyNumber = parseInt(propertyNumber);


        textArray = $.csv.toArrays(text);

//Starter table
        var innerText = "<table><tr><th>Date</th><th>Meter Number</th><th>Channel</th><th>Reading</th><th>Measuretype</th><th>Property Number</th><th>Address</th></tr>";

//Checker hver linje i vores csv file
        textArray.forEach(line=>{

//Splitter localdate i csv filen
            var localDate = line[0].split('-');



            // year1=date[0];
            // /month1=date[1];
            day1=localDate[2];

//gemmer property number fra csv filen
           var wantedProperty = parseInt(line[6]);



//checker om dagen er de samme og propertynumrene er de samme. Hvis de er bliver de lagt til innerText
            if (day1 === day && propertyNumber == wantedProperty){
                innerText += "<tr>" +
                    "<td>"+ line[0] +  "</td>\n" +
                    "<td>"+ line[1] +  "</td>\n" +
                    "<td>"+ line[2] +  "</td>\n" +
                    "<td>"+ line[3] +  "</td>\n" +
                    "<td>"+ line[4] +  "</td>\n" +
                    "<td>"+ line[6] +  "</td>\n" +
                    "<td>"+ line[7] + line[8] + " <br>" + line[9] +  "</td>\n" +
                    "</tr>";
            } else
//hvis der kun er en indtastet dag kører denne if sætning
            if (day1 === day && $("#propertyNumber").val().length === 0) {
                innerText += "<tr>" +
                    "<td>"+ line[0] +  "</td>\n" +
                    "<td>"+ line[1] +  "</td>\n" +
                    "<td>"+ line[2] +  "</td>\n" +
                    "<td>"+ line[3] +  "</td>\n" +
                    "<td>"+ line[4] +  "</td>\n" +
                    "<td>"+ line[6] +  "</td>\n" +
                    "<td>"+ line[7] + line[8] + " <br>" + line[9] +  "</td>\n" +
                    "</tr>";
            }




            return innerText;
        });


//afslutter table
        innerText += "</table>\n";

//printer innerText til text div'en i html'en
        document.getElementById("text").innerHTML= innerText;



    });



    return false;
}


