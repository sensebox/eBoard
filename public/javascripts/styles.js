
// color Variables 
var red = 'linear-gradient(to bottom, rgba(248,80,50,1) 0%,rgba(241,111,92,1) 50%,rgba(246,41,12,1) 51%,rgba(240,47,23,1) 71%,rgba(231,56,39,1) 100%)';
var green = 'linear-gradient(to bottom, rgba(191,210,85,1) 0%,rgba(142,185,42,1) 50%,rgba(114,170,0,1) 51%,rgba(158,203,45,1) 100%)';
var yellow = 'linear-gradient(to bottom, rgba(252,234,187,1) 0%,rgba(252,205,77,1) 50%,rgba(248,181,0,1) 51%,rgba(251,223,147,1) 100%)';
var lightblue ='linear-gradient(to bottom, rgba(184,225,252,1) 0%,rgba(169,210,243,1) 10%,rgba(144,186,228,1) 25%,rgba(144,188,234,1) 37%,rgba(144,191,240,1) 50%,rgba(107,168,229,1) 51%,rgba(162,218,245,1) 83%,rgba(189,243,253,1) 100%)';
var DarkMagenta = 'linear-gradient(to bottom, rgba(203,96,179,1) 0%,rgba(193,70,161,1) 50%,rgba(168,0,119,1) 51%,rgba(219,54,164,1) 100%)';
var grey = 'linear-gradient(to bottom, rgba(242,246,248,1) 0%,rgba(216,225,231,1) 50%,rgba(181,198,208,1) 51%,rgba(224,239,249,1) 100%)';

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