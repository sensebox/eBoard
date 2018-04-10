'use strict';
var aktuelleZeile=1,
    phaenomeneProZeile=2;

function ajaxRequest(senseboxid){

    if(senseboxid!==null && senseboxid!==""){
        // Lade Animation starten sobald die AJAX funktion ausgeführt wird
        document.getElementById('loader').style.display="block";
        // Link im linken oberen Reiter wird aktualisiert 
        $("#openSenseMap").attr("href","https://www.opensensemap.org/"+ "explore/" +senseboxid);
        $.ajax({
            type: 'GET',
            url: 'https://api.opensensemap.org/boxes/'+senseboxid,
            data:'',
            success: function (res,status,request){
                // For Loop um Tiles zu generieren
                for(var i=0;i<res.sensors.length;i++) {
                    // Wenn Sensor registriert wurde, aber noch nie gemessen hat wird dieser Sensor übersprungen
                    if(res.sensors[i].lastMeasurement===null||res.sensors[i].lastMeasurement==undefined)continue;
                    createTiles(res,i);
                    updateBackground(res.sensors[i].title,i);
                    updateh1(res,i);
                    
                }
                // For loop um Statistiken im Hintergrund zu laden
                for(var i=0;i<res.sensors.length;i++) {
                    if(res.sensors[i].lastMeasurement===null || res.sensors[i].lastMeasurement==undefined)continue;
                    else{
                            if(res.sensors[i].title=="PM10" || res.sensors[i].title=="PM2.5"){
                             getStatisticsFeinstaub(res, i);
                            }
                            else
                                getStatistics(res, i);
                            }
                        }
            },
            error: function (request, status, error) {
                swal({
                    title: "Error!",
                    text: "There seems to be something wrong with your ID please try again !",
                    icon: "error",
                    button:"Try Again!",
                  })
                  .then((willReload)=>{
                      if(willReload) {
                        var str ="";
                        window.location.pathname=str;
                      }
                  }                                 
                  )
                },
            complete:function(){
                // Wenn AJAX durch ist wird die Animation entfernt
                document.getElementById('loader').style.display="none";
            }
            
        });// Ajax

    } // If
    else{
        //Fehlermeldung
        swal({
            title: "Error!",
            text: "You have given an empty ID please try again ",
            icon: "error",
            button:"Try Again!",
          })
          .then((willReload)=>{
              if(willReload) {
                  location.reload();
              }
          }) 
    }


}


/** Function soll neue div erstellen mit der response bzw. Sensebox Object was von AJAX übergeben wird
 * in der FUnktion werden diverse Parameter in ein Templat html variable eingesetzt.
 * Letzlich wird diese Variable in eine "row" gepusht. Sind es über 3 Elemente in einer row wird in eine neue Reihe übergegangen
 *
 */

function createTiles(res,i){


    //Deklarieren der Variable im <div>
 
    var title = res.sensors[i].title;
    if(title=="PM10" || title=="PM2.5"){

        var str1="Feinstaub:";
        var str2=title;
        title=str1+str2;

    }

    title = title.replace(" ","");    

    // Zeitstempel wird generiert
    var wert_fuer_zeit = "Last measured: "
        wert_fuer_zeit += jQuery.timeago(res.sensors[i].lastMeasurement.createdAt);


    // In der globalen Variable kann eingstellt werden wieviel Tiles in eine Zeile gehören (default:2)
    if(res.sensors.length>6){
        phaenomeneProZeile=3;
    }
    if(i % phaenomeneProZeile == 0 && i !==0 ){aktuelleZeile = aktuelleZeile + 1;}

    var phaenomen = res.sensors[i].unit;
    var wert_fuer_h1 ="";
        wert_fuer_h1=res.sensors[i].lastMeasurement.value+" "+ res.sensors[i].unit;
    
    // Parameter in Tile Vorlage einsetzen
    var tile =
        "<div class='cell front' id='tile"+i+"'"+"title="+title+">"+
        "<label class='switch medium'>"+
        "<input id='tile"+i+"_check"+"'"+"type='checkbox'>"+
        "<span class='slider round'>"+"</span>"+
        "</label>"+
        "<h1 id='tile"+i+"_h1"+"'"+"  class='temp' >"+wert_fuer_h1+"</h1>"+
        "<time id='tile"+i+"_time'"+"class='timeago' datetime=''>"+wert_fuer_zeit+"</time>"+
        "<span class='hum'' >"+"</span>"+
        "<span class='batt'>"+"</span>"+
        "</div>";


    $('#row_'+aktuelleZeile).append(tile);


    // Parameter in Tile Vorlage einsetzen
    var tile_alt ="<div style='display:none' class='cell back' id='tile"+i+"_alt"+"'"+">"+
        "<label class='switch medium'>"+
        "<input id='tile"+i+"_check_alt"+"'"+"type='checkbox'>"+
        "<span class='slider round'>"+"</span>"+
        "</label>"+
        "<canvas id='tile"+i+"_canvas"+"'"+"width=\"800\" height=\"220\" style=padding:10px\">"+"</canvas>"
        "</div>";

    

    //Hänge das alternative <div> an die aktuell bearbeitete Zeile
    $('#row_'+aktuelleZeile).append(tile_alt);

    /* 2 jQuery Blöcke die bestimmen was passiert sobald ein
        switch Button betätigt wird.
     */
    var tile_checkbox = '#tile'+i+'_check';
    var tile_checkbox_alt='#tile'+i+'_check_alt';

        $(tile_checkbox).on("click",function(){
            $('#tile'+i).toggle();
            $('#tile'+i+'_alt').toggle();
            document.getElementById('tile'+i+'_check_alt').checked=true;
        });
        $(tile_checkbox_alt).on("click",function(){

            $('#tile'+i+'_alt').toggle();
            $('#tile'+i).toggle();
            document.getElementById('tile'+i+'_check').checked=false;
        });

        /* Switch Case Statement welche Sytling Updates durchführt wenn Sensoren registriert sind aber keine 
        Messwerte aufweisen */

    switch(GetRealLength(res.sensors)) {
        case 0:
            document.getElementsByClassName('row')[0].style.height = '100%';
            $('#row_3').hide();
            $('#row_2').hide();
        break;
        case 1:
            document.getElementsByClassName('row')[0].style.height = '100%';
            $('#row_3').hide();
            $('#row_2').hide();
            break;
        case 2:
            document.getElementsByClassName('row')[0].style.height = '100%';
            $('#row_3').hide();
            $('#row_2').hide();
        case 4:
            document.getElementsByClassName('row')[0].style.height = '50%';
            document.getElementsByClassName('row')[1].style.height = '50%';
            $('#row_3').hide();
            break;
        

    }
}

/* Funktion die in einem 60 Sekunden Intervall gecalled wird um die Messwerte zu aktualisieren  */

function updateTiles(senseboxid){

    if(senseboxid!==null){

        $.ajax({
            type: 'GET',
            url: 'https://api.opensensemap.org/boxes/'+senseboxid,
            data:'',
            success: function (res,status,request){
                for(var i=0;i<res.sensors.length;i++) {
                    // Update nur Messwerte und Zeit die es her ist 
                    document.getElementById("tile"+i+"_h1").innerHTML = res.sensors[i].lastMeasurement.value +" "+ res.sensors[i].unit;
                    document.getElementById("tile"+i+"_time").innerHTML ="Last measured: "+ jQuery.timeago(res.sensors[i].lastMeasurement.createdAt);
                    // Ggf. müssen Styles geändert werden(e.g. Temperatur steigt an sodass Tile rot werden soll)
                    updateBackground(res.sensors[i].title,i);
                }

            },
            error: function (request, status, error) {
                swal("An Error has occurded maybe try to reload the page \n Errorcode: " + error);
            }

        });// Ajax
    } // If


}

/*Helper function*/
function GetRealLength(sensoren){
    
    var realLength = 0;

    for(var i=0;i<sensoren.length;i++){

        if(sensoren[i].lastMeasurement==null || sensoren[i].lastMeasurement==undefined)continue;
        else realLength+=1;

    }
    return realLength;
}