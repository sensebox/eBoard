'use strict';

// Intervalle die beim neu Laden der Seite benutzt werden

var interval1,
    interval2;
// A $( document ).ready() block.
$(document ).ready(function() {
    swal({
        title:"senseBox Dashboard",
        text: " Bitte geben Sie ihre senseBox ID in das unten stehende Eingabefeld. \n \n Es können höchstens neun Messwerte glechzeitig angezeigt werden. \n \nBeispiele:\n \n 5a8da5cebc2d41001938d8c4 (4 Messwerte)\n 570bad2b45fd40c8197f13a2 (7 Messwerte) \n 56ab272d2cb6e1e410445721 (5 Messwerte) ",
        content: {
            element:"input",
            attributes: {
                placeholder:"SenseboxID",
            }
        },
        button:"Suchen!"
    })
        .then((senseboxid) => {
                ajaxRequest(senseboxid);
                // Intervall nachdem die Seite geladen wurde Standardmäßig auf 1 Minute gesetzt
                interval1=
                    setInterval(function(){
                    updateTiles(senseboxid)
                },
                3600000);
    });
    $('#Settings').on('click',function(){
        swal({
            text: "Verschiedene Einstellungsmgöglichkeiten",
            icon:"info",
            content:buildSettings(),
            buttons:{
                cancel:true,
                confirm:"Ok!",
            }
            })       


    });
/* Permalink Implementierung
 */
    if(document.getElementById('input_hidden').value!==""){
        ajaxRequest(document.getElementById('input_hidden').value);
        remove('swal-modal');
        remove('swal-overlay')
        remove('swal-overlay swal-overlay--show-modal');
        remove('fakeForm');
    }

    document.getElementById('row_1').addEventListener("change",fixStyle());

}); //End document ready block



/* Helper Funktion danke an stackoverflow */

function remove(ClassName) {
    var elem = document.getElementsByClassName(ClassName)[0];
    return elem.parentNode.removeChild(elem);
}

function removebyId(Id) {
    var elem = document.getElementById(Id);
    return elem.parentNode.removeChild(elem);
}

