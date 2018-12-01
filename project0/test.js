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

        document.getElementById("text").innerText+=textArray[0]+"\n";

        textArray.forEach(line=>{
            //date=line[0].val().split('-');

            var localDate = line[0].split('-');



            // // year1=date[0];
            //  //month1=date[1];
            day1=localDate[2];


            if (day1===day){
                document.getElementById("text").innerText+=line+"\n";
            }
        });


    });



    return false;
}


