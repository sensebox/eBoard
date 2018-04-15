'use strict';
var interval1,
    interval2;    
// A $( document ).ready() block.
$(document ).ready(function() {

    swal({
        title:"Welcome to the senseBox dashboard!",
        text: " Please enter your senseBox ID in the corresponding input field. \n \n Please Note that only six measurements can be displayed properly at a time \n \n Examples:\n \n 5a8da5cebc2d41001938d8c4 (4 Messwerte)\n 570bad2b45fd40c8197f13a2 (7 Messwerte) \n 56ab272d2cb6e1e410445721 (5 Messwerte)  \n 5ab106ce850005001b6d70a3 (Zu viele Boxen) ",
        content: {
            element:"input",
            attributes: {
                placeholder:"SenseboxID",
            }
        },
        button:"Search!"
    })
        .then((senseboxid) => {
                ajaxRequest(senseboxid);
                // Intervall nachdem die Seite geladen wurde Standardmäßig auf 1 Minute gesetzt
                interval1=
                    setInterval(function(){
                    updateTiles(senseboxid)
                },
                 60000);
    });
    $('#Settings').on('click',function(){
        swal({
            text: "Change the SenseBox you want to follow",
            icon:"info",
            content: {
                element:"input",
                attributes: {
                    placeholder:"SenseboxID",
                }
            },
            buttons:{
                cancel:true,
                confirm:"Search!",
            }
            })       
             .then(senseboxid => {
                if(senseboxid!==null && senseboxid!==""){ 
                var str ="boxes/"+ senseboxid;
                window.location.pathname=str;
            }
        });

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

