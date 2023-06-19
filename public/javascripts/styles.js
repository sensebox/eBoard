// color Variables
var red = " #ff0000 ";
var green = " #00cc00";
var yellow = " #ffff00";
var lightblue = " #66ccff ";
var DarkMagenta = " #B10DC9 ";
var grey = " #a6a6a6 ";

var red_gray = "#993300";
var green_gray = "#333300";
var yellow_gray = "#cccc00";
var blue_gray = "#666699";
var magenta_gray = "#cc3399";
var default_color = "#ff99ff";
var colorArray = [
  "#ff0000",
  "#00cc00",
  "#ffff00",
  "#66ccff",
  "#B10DC9",
  " #993300",
  " #333300",
  "#cccc00",
  " #666699",
  " #cc3399",
];
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
function createBackground(res, i) {
  if (document.getElementById("tile" + i) !== null) {
    var time_ago = new Date(res.sensors[i].lastMeasurement.createdAt);
    var actual_date = new Date();
    var stunde = 3600000;
    var tag = 86400000;

    var differenzWert = actual_date - time_ago;

    var phenomenon = res.sensors[i].title;
    var length = res.sensors.length;
    var tile = document.getElementById("tile" + i);
    var text = document.getElementById("tile" + i + "_h1");
    var value = parseInt(tile.innerText);

    // if(length>5)document.getElementById('tile'+i+'_h1').style.lineHeight=0.8;
    tile.style["background"]  //colorArray[Math.floor(Math.random() * 10)];
    if (differenzWert > stunde) {
      if (differenzWert > tag) {
        tile.style["background"] = grey;
        $("#warning").fadeIn();
      } else $("#warning2").fadeIn();
    }

    switch (phenomenon) {
      case "Temperatur":
        console.log(phenomenon)
        console.log(value)
        console.log(differenzWert)
        if (value <= 10) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#fef0d9";
          }
          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 10 && value < 25) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#fdcc8a";
            if (length < 5)
              text.innerHTML = '<i class="fas fa-sun"></i>' + text.innerHTML;
          }

          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 25 && value < 40) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#fc8d59";
          }
          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 40) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#fc8d59"; //colorArray[Math.floor(Math.random()*10)];
          }
          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        break;
      case "CO2":
        if (value >= 0 && value < 300) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#f7f7f7";
          }
          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 300 && value < 600) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#d9d9d9";
            if (length < 5)
              text.innerHTML = '<i class="fas fa-sun"></i>' + text.innerHTML;
          }

          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 600 && value < 900) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#bdbdbd";
          }
          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 900 && value < 1200) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#969696"; //colorArray[Math.floor(Math.random()*10)];
          }
          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 1200 && value < 1500) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#737373";
            if (length < 5)
              text.innerHTML = '<i class="fas fa-sun"></i>' + text.innerHTML;
          }

          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 1500 && value < 1800) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#525252";
          }
          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 1800 && value < 2100) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#252525"; //colorArray[Math.floor(Math.random()*10)];
          }
          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        break;
      case "Helligkeit":
        if (value >= 0 && value < 200) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#ffffcc";
          }
          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 200 && value < 400) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#ffeda0";
            if (length < 5)
              text.innerHTML = '<i class="fas fa-sun"></i>' + text.innerHTML;
          }

          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 400 && value < 600) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#fed976";
          }
          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 600 && value < 800) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#feb24c"; //colorArray[Math.floor(Math.random()*10)];
          }
          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 800 && value < 1000) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#fd8d3c";
            if (length < 5)
              text.innerHTML = '<i class="fas fa-sun"></i>' + text.innerHTML;
          }

          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 1000 && value < 1200) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#fc4e2a";
          }
          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 1200 && value < 1400) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#e31a1c"; //colorArray[Math.floor(Math.random()*10)];
          }
          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 1400 && value < 1600) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#bd0026";
            if (length < 5)
              text.innerHTML = '<i class="fas fa-sun"></i>' + text.innerHTML;
          }

          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 1600 && value < 1800) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#800026";
          }
          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 1800 && value < 2000) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#FFFF00"; //colorArray[Math.floor(Math.random()*10)];
          }
          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        break;

      case "PM10":
        if (value <= 30) {
          if (differenzWert < stunde) {
            //change tile to green
            tile.style["background"] = green;
            if (length < 5)
              text.innerHTML =
                '<i class="far fa-thumbs-up"></i>' + text.innerHTML;
          }

          if (differenzWert > stunde) {
            tile.style["background"] = yellow_gray;
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value > 30 && value < 50) {
          if (differenzWert < stunde) {
            tile.style["background"] = yellow;
            //change tile to yellow
            if (length < 5)
              text.innerHTML = '<i class="far fa-heart"></i>' + text.innerHTML;
          }
          if (differenzWert > stunde) {
            tile.style["background"] = yellow_gray;
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
          }
        }
        if (value >= 50) {
          if (differenzWert < stunde) {
            //change tile to red
            tile.style["background"] = red;
            if (length < 5)
              text.innerHTML = '<i class="fas fa-heart"></i>' + text.innerHTML;
          }
          if (differenzWert > stunde) {
            tile.style["background"] = red_gray;
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        break;

      case "PM2.5":
        if (value <= 10) {
          if (differenzWert < stunde) {
            //change tile to green
            tile.style["background"] = green;
            if (length < 5)
              text.innerHTML =
                '<i class="far fa-thumbs-up"></i>' + text.innerHTML;
          }
          if (differenzWert > stunde) {
            tile.style["background"] = green_gray;
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value > 10 && value < 25) {
          if (differenzWert < stunde) {
            //change tile to yellow
            tile.style["background"] = yellow;
            if (length < 5)
              text.innerHTML = '<i class="far fa-heart"></i>' + text.innerHTML;
          }
          if (differenzWert > stunde) {
            tile.style["background"] = yellow_gray;
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 25) {
          if (differenzWert < stunde) {
            //change tile to red
            tile.style["background"] = red;
            if (length < 5)
              text.innerHTML = '<i class="fas fa-heart"></i>' + text.innerHTML;
          }
          if (differenzWert > stunde) {
            tile.style["background"] = yellow_gray;
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        break;

      case "UV-Sensor":
        if (value >= 0 && value < 20) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#feebe2";
            if (length < 5)
              text.innerHTML =
                '<i class="far fa-thumbs-up"></i>' + text.innerHTML;
          }
          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 20 && value < 100) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#fcc5c0";
          }
          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 100 && value < 300) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#fa9fb5";
          }
          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 300 && value < 500) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#f768a1";
          }
          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 500 && value < 700) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#dd3497";
          }
          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 700 && value < 900) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#ae017e";
          }
          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value > 900) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#7a0177";
          }
          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        break;

      case "rel. Luftfeuchte":
        //Von hier:
        if (value >= 0 && value < 20) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#f1eef6";
            if (length < 5)
              text.innerHTML = '<i class="fas fa-sun"></i>' + text.innerHTML;
          }

          if (differenzWert > stunde) {
            tile.style["background"] = "#cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 20 && value < 40) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#bdc9e1";
          }
          if (differenzWert > stunde) {
            tile.style["background"] = "cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 40 && value < 60) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#74a9cf";
          }
          if (differenzWert > stunde) {
            tile.style["background"] = "cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 60 && value < 80) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#2b8cbe";
          }
          if (differenzWert > stunde) {
            tile.style["background"] = "cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        if (value >= 80 && value <= 100) {
          if (differenzWert < stunde) {
            tile.style["background"] = "#045a8d";
          }
          if (differenzWert > stunde) {
            tile.style["background"] = "cccccc";
            $("#warning").fadeIn();
          }
          if (differenzWert > tag) {
            tile.style["background"] = grey;
            $("#warning").fadeIn();
          }
        }
        //Bis hier.
        break;
      default:
        if (differenzWert < stunde) {
          tile.style["background"] = default_color;
        }
        if (differenzWert > tag) {
          tile.style["background"] = grey;
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

function updateh1(res, i) {
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

function fixStyle(tile) {
  if (tile === undefined) return;
  // Alle Elemente des Parents aufzählen wenn alle display:none dann Reihe display:none und height von .row auf 50%
  var row = tile.parentElement;
  var tiles = row.children;
  var anzahlTiles = tiles.length;
  // Counter wird benutzt um zu zählen wieviele Tiles versteckt sind
  var counter = 0;
  var shownRows_counter = 0;
  var rows = document.getElementsByClassName("row");
  var shownRows = new Array();

  for (var i = 0; i < tiles.length; i++) {
    if (tiles[i].style["display"] == "none") {
      counter += 1;
    }
  }
  if (counter == anzahlTiles) {
    $(row).hide();
  }
  if (counter < anzahlTiles) {
    $(row).show();
  }
  for (var i = 0; i < rows.length; i++) {
    if (rows[i].style["display"] !== "none") {
      shownRows_counter += 1;
      shownRows.push(rows[i]);
    }
  }

  switch (shownRows_counter) {
    case 1:
      shownRows[0].style["height"] = "100%";
      break;
    case 2:
      shownRows[0].style["height"] = "50%";
      shownRows[1].style["height"] = "50%";
      break;
    case 3:
      shownRows[0].style["height"] = "33.3%";
      shownRows[1].style["height"] = "33.3%";
      shownRows[2].style["height"] = "33.3%";
      break;
  }
}
//
function updateBackground(res, i) {
  console.log("called");
  if (document.getElementById("tile" + i) !== null) {
    var time_ago = new Date(res.sensors[i].lastMeasurement.createdAt);
    var actual_date = new Date();
    var stunde = 3600000;
    var tag = 86400000;

    var differenzWert = actual_date - time_ago;

    var phenomenon = res.sensors[i].title;
    var length = res.sensors.length;
    var tile = document.getElementById("tile" + i);
    var text = document.getElementById("tile" + i + "_h1");
    var value = parseInt(tile.innerText);
    if (differenzWert < stunde) {
      return;
    }
    if (differenzWert > tag) {
      $("#warning").fadeIn();
    }
  }
}
