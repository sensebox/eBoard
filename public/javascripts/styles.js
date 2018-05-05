
    // color Variables 
var red = ' #FF4136 ';
var green = '#2ECC40 ';
var yellow = ' #FFDC00 ';
var lightblue = ' #0074D9 ';
var DarkMagenta = ' #B10DC9 ';
var grey = ' #DDDDDD ';

var red_gray='#BF7874';
var green_gray='#71AC78';
var yellow_gray='#BFB260'
var blue_gray='#608BB1';
var magenta_gray='#A265AB';
var default_color =' #7FDBFF ';

// Farbwerte für alte Messwerte(gleiches wie vorher nur angegraut)

/* Farben der Tiles soll korrespondierend zu ihren Werten verändert werden
    Temperatur: unter 0 bis 5° -> Hellblau
                über 5 bis 25° -> Warmes Gelb/Orange
                über 25° -> Rot 

    Feinstaub PM10 : unter 30 -> Grün
                    über 30 unter 50 -> Gelb
                    über 50 -> Rot
    Feinstaub PM2.5 : unter 10 -> Grün
                    über 10 unter 25 -> Gelb
                    über 25 -> Rot 
    UV-Intensität   über 300 -> Lila 
                    über 200 unter 300 -> Rot 
                    über 100 unter 200 -> Gelb
                    unter 100 -> Grün

    Weitere Recherche im Bereich Luftdruck, Luftfeuchte, Schall, Niederschlagsmenge

*/
function createBackground(res,i){

    
    if(document.getElementById('tile'+i)!==null){
        

        var time_ago = new Date (res.sensors[i].lastMeasurement.createdAt);
        var actual_date = new Date ()
        var stunde = 3600000;
        var tag = 86400000;
                   
        var differenzWert = actual_date - time_ago;

        var phenomenon = res.sensors[i].title;
        var length = res.sensors.length;
        var tile = document.getElementById('tile'+i);
        var text = document.getElementById('tile'+i+"_h1");
        var value = parseInt(tile.innerText);
        
        if(length>5)document.getElementById('tile'+i+'_h1').style.lineHeight=0.8;

        switch(phenomenon){

            case 'Temperatur':

                if(value<=10){
                    /* Abfrage wie lang Messwerte her sind und darauf die Tiles
                        entsprechend einfärben
                        */
                    if(differenzWert<stunde){
                        tile.style['background']=lightblue;
                        if(length<5)
                                    text.innerHTML='<i class="fas fa-snowflake"></i> '+text.innerHTML;
                    }
                    if(differenzWert>stunde){
                        tile.style['background']=blue_gray;
                        $("#warning").fadeIn();
                    }
                    if(differenzWert>tag){
                        tile.style['background']=grey;
                        $("#warning").fadeIn();
                    }
                };
                if(value>10 && value < 25){
                    
                    if(differenzWert<stunde){
                        tile.style['background']=yellow;
                        if(length<5)
                                    text.innerHTML='<i class="fas fa-sun"></i>'+text.innerHTML;
                    }
                
                    if(differenzWert>stunde){
                        tile.style['background']=yellow_gray;
                        $("#warning").fadeIn();
                    }
                    if(differenzWert>tag){
                        tile.style['background']=grey;
                        $("#warning").fadeIn();
                    }
                }
                if(value>=25){
                    //change tile to red
                    if(differenzWert<stunde){
                        tile.style['background']=red;
                        if(length<5)
                                    text.innerHTML='<i class="fas fa-sun"></i>'+text.innerHTML;
                    }
                    if(differenzWert>stunde){
                        tile.style['background']=red_gray;
                        $("#warning").fadeIn();
                    }
                    if(differenzWert>tag){
                        tile.style['background']=grey;
                        $("#warning").fadeIn();
                    }
                }
                break;

            case 'PM10':
                if(value<=30){
                    if(differenzWert<stunde){
                    //change tile to green
                    tile.style['background']=green;
                    if(length<5)
                                text.innerHTML='<i class="far fa-thumbs-up"></i>'+text.innerHTML;
                }

                    if(differenzWert>stunde){
                        tile.style['background']=yellow_gray;
                        $("#warning").fadeIn();
                    }
                    if(differenzWert>tag){
                        tile.style['background']=grey;
                        $("#warning").fadeIn();
                    }
                }
                if(value>30&&value<50){

                    if(differenzWert<stunde){
                        tile.style['background']=yellow;
                        //change tile to yellow 
                        if(length<5)
                                    text.innerHTML='<i class="far fa-heart"></i>'+text.innerHTML;
                    }
                    if(differenzWert>stunde){
                        tile.style['background']=yellow_gray;
                        $("#warning").fadeIn();
                    }
                    if(differenzWert>tag){
                        tile.style['background']=grey;

                    }
                }
                if(value>=50){
                    if(differenzWert<stunde){
                        //change tile to red
                        tile.style['background']=red;
                        if(length<5)
                                    text.innerHTML='<i class="fas fa-heart"></i>'+text.innerHTML;
                    }
                    if(differenzWert>stunde){
                        tile.style['background']=red_gray;
                        $("#warning").fadeIn();
                    }
                    if(differenzWert>tag){
                        tile.style['background']=grey;
                        $("#warning").fadeIn();
                    }
                }
                break;

            case 'PM2.5':
                if(value<=10){
                    if(differenzWert<stunde){
                        //change tile to green
                        tile.style['background']=green;
                        if(length<5)
                                    text.innerHTML='<i class="far fa-thumbs-up"></i>'+text.innerHTML;
                    }
                    if(differenzWert>stunde){
                        tile.style['background']=green_gray;
                        $("#warning").fadeIn();
                    }
                    if(differenzWert>tag){
                        tile.style['background']=grey;
                        $("#warning").fadeIn();
                    }
                }                
                if(value > 10 && value < 25){
                    if(differenzWert<stunde){
                        //change tile to yellow 
                        tile.style['background']=yellow;
                        if(length<5)
                                    text.innerHTML='<i class="far fa-heart"></i>'+text.innerHTML;
                    }
                    if(differenzWert>stunde){
                        tile.style['background']=yellow_gray;
                        $("#warning").fadeIn();
                    }
                    if(differenzWert>tag){
                        tile.style['background']=grey;
                        $("#warning").fadeIn();
                    }
                }
                if(value>=25){
                    if(differenzWert<stunde){
                        //change tile to red 
                        tile.style['background']=red;
                        if(length<5)
                                    text.innerHTML='<i class="fas fa-heart"></i>'+text.innerHTML;
                    }
                    if(differenzWert>stunde){
                        tile.style['background']=yellow_gray;
                        $("#warning").fadeIn();
                    }
                    if(differenzWert>tag){
                        tile.style['background']=grey;
                        $("#warning").fadeIn();
                    }
                }
                break;

            case 'UV-Intensität':
                if(value<=100){
                    if(differenzWert<stunde){
                        //change tile to green
                        tile.style['background']=green;
                        if(length<5) text.innerHTML='<i class="far fa-thumbs-up"></i>'+text.innerHTML;
                    }
                    if(differenzWert>stunde){
                        tile.style['background']=green_gray;
                        $("#warning").fadeIn();
                    }
                    if(differenzWert>tag){
                        tile.style['background']=grey;
                        $("#warning").fadeIn();
                    }
                }
                if(value > 100 && value < 200){
                    
                    if(differenzWert>stunde){
                         //change tile to yellow        
                        tile.style['background']=yellow;
                    }
                    if(differenzWert>stunde){
                        tile.style['background']=yellow_gray;
                        $("#warning").fadeIn();
                    }
                    if(differenzWert>tag){
                        tile.style['background']=grey;
                        $("#warning").fadeIn();
                    }
                }
                if(value>200 && value<300){
                    //change tile to yellow
                    if(differenzWert>stunde){
                        tile.style['background']=red;
                        }
                    if(differenzWert>stunde){
                        tile.style['background']=red_gray;
                        $("#warning").fadeIn();
                    }
                    if(differenzWert>tag){
                        tile.style['background']=grey;
                        $("#warning").fadeIn();
                    }
                }
                if(value>=300){
                    if(differenzWert<stunde){
                        tile.style['background']=DarkMagenta;
                        }
                    if(differenzWert>stunde){
                        tile.style['background']=magenta_gray;
                        $("#warning").fadeIn();
                    }
                    if(differenzWert>tag){
                        tile.style['background']=grey;
                        $("#warning").fadeIn();
                    }
                }
                break;

            case 'rel. Luftfeuchte':
                 if(differenzWert<stunde){
                    tile.style['background']=lightblue;
                 }
                
                if(differenzWert>stunde){
                    tile.style['background']=blue_gray;
                    $("#warning").fadeIn();
                }
                if(differenzWert>tag){
                    tile.style['background']=grey;
                    $("#warning").fadeIn();
                }
                break;
            default:
                if(differenzWert<stunde){
                    tile.style['background']=default_color;
                }
                if(differenzWert>tag){
                    tile.style['background']=grey;
                    $("#warning").fadeIn();
                }
            }
        }
}
/* Funktion die Werte die älter als 1 Tag her sind ausgrauen 
   Die Subtraktion zweier Date Objekte gibt die Differenz 
   in Millisekunden wieder

   86.400.000 Millisekunden sind ein Tag 
   */

function updateh1(res,i){

    // // Alle Werte die über einen Tag her sind werden ausgegraut 
    // var stunde = 3600000;
    // var tag = 86400000;

    // // Seichtes Grau als Text 
    // var text_color = '#585858'
    // var tile = document.getElementById('tile'+i);
    // var time_ago = new Date (res.sensors[i].lastMeasurement.createdAt);
    // var actual_date = new Date ();
    
    // var differenzWert = actual_date - time_ago;

    // if(differenzWert>stunde){

    //     tile.style['background'] = red_gray;
    //     $("#warning").fadeIn();
    // }

    // if(differenzWert>tag){
    //     tile.style['background'] = grey;
    //     $("#warning").fadeIn();
    // }
    
    
}

function fixStyle(tile){

    // Alle Elemente des Parents aufzählen wenn alle display:none dann Reihe display:none und height von .row auf 50% 
    var row = tile.parentElement;
    var tiles = row.children;
    var anzahlTiles = tiles.length;
    // Counter wird benutzt um zu zählen wieviele Tiles versteckt sind 
    var counter = 0; 
    var shownRows_counter = 0;
    var rows = document.getElementsByClassName("row");
    var shownRows = new Array;


    for(var i=0;i<tiles.length;i++){       
        if(tiles[i].style["display"]=="none"){
            counter+=1;
        }
    }
    if(counter==anzahlTiles){
        $(row).hide();    
    }
    if(counter<anzahlTiles){

        $(row).show();    

    }
    for(var i=0;i<rows.length;i++){
        if(rows[i].style["display"]!=="none"){
            shownRows_counter+=1;
            shownRows.push(rows[i]);
        }
    }

            

    switch(shownRows_counter){
        case 1:
            shownRows[0].style["height"]="100%"
            break;
        case 2:
            shownRows[0].style["height"]="50%";
            shownRows[1].style["height"]="50%";
            break;
        case 3:
            shownRows[0].style["height"]="33.3%";
            shownRows[1].style["height"]="33.3%";
            shownRows[2].style["height"]="33.3%";
            break;

    }
    
}
// 
function updateBackground(res,i){
    console.log("called")
        if(document.getElementById('tile'+i)!==null){
            
    
            var time_ago = new Date (res.sensors[i].lastMeasurement.createdAt);
            var actual_date = new Date ()
            var stunde = 3600000;
            var tag = 86400000;
                       
            var differenzWert = actual_date - time_ago;
    
            var phenomenon = res.sensors[i].title;
            var length = res.sensors.length;
            var tile = document.getElementById('tile'+i);
            var text = document.getElementById('tile'+i+"_h1");
            var value = parseInt(tile.innerText);
                    if(differenzWert<stunde){
                        return;
                    }
                    if(differenzWert>tag){
                        $("#warning").fadeIn();
                    }
                
            }
        }

    


