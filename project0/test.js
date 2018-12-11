var text = "clear";
var textArray = [];
var date="";
var day;
var month;
var year;
var day1;
var month1;
var year1;


function readText() {
    $.get("test3", function (data) {



        text = data;
        date=$("#daterpicker").val().split('-');
        year=date[0];
        month=date[1];
        day=date[2];


        textArray = $.csv.toArrays(text);


        var innerText = "<table><tr><th>Date</th><th>Reading</th><th>Type</th><th>Metertype</th><th>Meternumber</th></tr>";

        textArray.forEach(line=>{
            //date=line[0].val().split('-');

            var localDate = line[0].split('-');

            var meterNumber = line[4];

            // // year1=date[0];
            //  //month1=date[1];
            day1=localDate[2];


            if (day1===day && meterNumber == 444){
                innerText += "<tr>\n" +
                    "<td>"+ line[0] +  "</td>\n" +
                    "<td>"+ line[1] +  "</td>\n" +
                    "<td>"+ line[2] +  "</td>\n" +
                    "<td>"+ line[3] +  "</td>\n" +
                    "<td>"+ line[4] +  "</td>\n" +
                    "</tr>";
            }
return innerText;
        });

        innerText += "</table>\n";
        document.getElementById("text").innerHTML= innerText;



    });



    return false;
}


