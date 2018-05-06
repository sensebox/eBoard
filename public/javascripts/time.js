'use strict'
// Einfache Funktion um den Time String in ein lesbares Format umzuwandeln

function ConvertTime(string){


    var year = string.substring(0,4);
    var month = string.substring(5,7);
    var day = string.substring(8,10);
    var clock = string.substring(11,16);

    var convertedTime = day + "." + month + "." + year + " " + clock;
    
    return convertedTime; 

}