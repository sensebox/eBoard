
// color Variables 
var red = ' #FF4136 ';
var green = '#2ECC40 ';
var yellow = ' #FFDC00 ';
var lightblue = ' #0074D9 ';
var DarkMagenta = ' #B10DC9 ';
var grey = ' #DDDDDD ';

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
function updateBackground(res,i){

    
    if(document.getElementById('tile'+i)!==null){
        
        var phenomenon = res.sensors[i].title;
        var length = res.sensors.length;
        var tile = document.getElementById('tile'+i);
        var text = document.getElementById('tile'+i+"_h1");
        var value = parseInt(tile.innerText);
        
        if(length>5)document.getElementById('tile'+i+'_h1').style.lineHeight=0.8;

        switch(phenomenon){

            case 'Temperatur':

                if(value<=10){
                    // change tile to lightblue
                    tile.style['background']=lightblue;
                    if(length<5)text.innerHTML='<i class="fas fa-snowflake"></i> '+text.innerHTML;
                };
                if(value>10 && value < 25){
                    //change tile to yellow
                    tile.style['background']=yellow;
                    if(length<5)text.innerHTML='<i class="fas fa-sun"></i>'+text.innerHTML;

                }
                if(value>=25){
                    //change tile to red
                    tile.style['background']=red;
                    if(length<5)text.innerHTML='<i class="fas fa-sun"></i>'+text.innerHTML;

                }
                break;

            case 'PM10':
                if(value<=30){
                    //change tile to green
                    tile.style['background']=green;
                    if(length<5)text.innerHTML='<i class="far fa-thumbs-up"></i>'+text.innerHTML;

                }
                if(value>30&&value<50){
                    tile.style['background']=yellow;
                    //change tile to yellow 
                    if(length<5)text.innerHTML='<i class="far fa-heart"></i>'+text.innerHTML;

                }
                if(value>=50){
                    //change tile to red
                    tile.style['background']=red;
                    if(length<5)text.innerHTML='<i class="fas fa-heart"></i>'+text.innerHTML;

                }
                break;

            case 'PM2.5':
                if(value<=10){
                    //change tile to green
                    tile.style['background']=green;
                    if(length<5)text.innerHTML='<i class="far fa-thumbs-up"></i>'+text.innerHTML;

                }                

                if(value > 10 && value < 25){
                    //change tile to yellow 
                    tile.style['background']=yellow;
                    if(length<5)text.innerHTML='<i class="far fa-heart"></i>'+text.innerHTML;

                }
                if(value>=25){
                    //change tile to red 
                    tile.style['background']=red;
                    if(length<5)text.innerHTML='<i class="fas fa-heart"></i>'+text.innerHTML;

                }
                break;

            case 'UV-Intensität':
                if(value<=100){
                    //change tile to green
                    tile.style['background']=green;
                    if(length<5) text.innerHTML='<i class="far fa-thumbs-up"></i>'+text.innerHTML;

                }
                if(value > 100 && value < 200){
                    //change tile to yellow 
                    tile.style['background']=yellow;

                }
                if(value>200 && value<300){
                    //change tile to red
                    tile.style['background']=red;

                }
                if(value>=300){
                    // change tile to violett
                    tile.style['background']=DarkMagenta;
                }
                break;

            case 'rel. Luftfeuchte':
                tile.style['background']=lightblue;
                if(length<5)text.innerHTML='<i class="fas fa-tint"></i>'+text.innerHTML;

                break;

            case 'Luftdruck':
                tile.style['background']=grey;
                break;

            case 'Beleuchtungsstärke':

                tile.style['background']=grey;

                if(value>10000 && length<5){
                    text.innerHTML='<i class="fas fa-sun"></i>'+text.innerHTML;
                }
                if(value<10000 && length<5 ){
                    text.innerHTML='<i class="fas fa-moon"></i>'+text.innerHTML;

                }

                break
            default:
                tile.style['background']=grey;

            }
}}
/* Funktion die Werte die älter als 1 Tag her sind ausgrauen 
   Die Subtraktion zweier Date Objekte gibt die Differenz 
   in Millisekunden wieder

   86.400.000 Millisekunden sind ein Tag 
   */

function updateh1(res,i){

    // Alle Werte die über einen Tag her sind werden ausgegraut 
    var tolleranzWert = 86400000;

    // Seichtes Grau als Text 
    var text_color = '#585858'
    var text = document.getElementById('tile'+i+"_h1");
    var time_ago = new Date (res.sensors[i].lastMeasurement.createdAt);
    var actual_date = new Date ();
    
    var differenzWert = actual_date - time_ago;

    if(differenzWert>tolleranzWert){

        text.style['color'] = text_color;
        $("#warning").fadeIn();
    }

    
    
}