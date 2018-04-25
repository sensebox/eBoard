
'use strict';

/** Funktion um Statistiken über einen gegebenen Zeitraum darzustellen
 * 6 Parameter weil die API 6 Parameter brauch um diese Anfrage zu stellen , obwohl ich überlege
 * window und operation in der Funktion zu deklarieren mal sehen...
 *
 * @see: http://docs.opensensemap.org
 * @param senseboxid
 * @param phenomenon (e.g. Temperatur,Feinstaub)
 * @param from_date
 * @param to_date
 * @param operation which statistic operation should be 
 * @param window zeitabstände
 */
function getStatistics(res,i){

    // var senseboxid=res._id;
    // var phenomenon = res.sensors[i].title;
    // var from_date = new Date(res.sensors[i].lastMeasurement.createdAt);
    //                 from_date.setMonth(from_date.getMonth() - 3);
    //                 from_date=from_date.toISOString();
    // var to_date = res.sensors[i].lastMeasurement.createdAt;
    // var unit = res.sensors[i].unit;

    // var operation ='arithmeticMean';

    // var window='';
    // switch(GetRealLength(res.sensors)){
        
    //     case 1:
    //         window='4320000';
    //         break;
    //     case 2:
    //         window='8640000';
    //         break;
    //     case 3:
    //         window='8640000';
    //         break;
    //     case 4:
    //         window='8640000';
    //         break;
    //     case 5:
    //         window='8640000';
    //         break;
    //     case 6:
    //         window='30000000';
    //         break;
    //     case 7:
    //         window='150000000';
    //         break;
    //     case (GetRealLength(res.sensors)< 7):
    //         window='150000000';
    //         break;
    // }

    //    //Zusammenbasteln der URL @see : docs.opensensemap.org
    // var url = "https://api.opensensemap.org/statistics/descriptive?senseboxid="+senseboxid+
    //     "&phenomenon="+phenomenon
    //     +"&from-date="+from_date
    //     +"&to-date="+to_date
    //     +"&operation="+operation
    //     +"&window="+window
    //     +"&format="+"json";

    //     //Variable die in der ajax überschrieben wird 
    // var response;
    // // Arrays in denen die Daten der json Datei gepusht werden
    // var dataArray=new Array();
    // var timeArray=new Array();

    // $.ajax({
    //     type: "GET", //rest Type
    //     dataType: 'json', //mispelled
    //     url: url,
    //     async: false,
    //     contentType: "application/json; charset=utf-8",
    //     success: function (msg) {
    //         response = msg[0];

    //     }
    // });

    // //Query Anfrage die das JSON Objekt durchgeht und jeweils die Werte in ein Array und die Timestamps in ein anderes Array speichert
    // jQuery.each(response,function(i,val){
    //     if(i !='sensorId'){
    //         dataArray.push(val);
    //         // Aus Visuellen Gründen nur Jahr/Monat/Tag anzeigen
    //         timeArray.push(ConvertTime(i));

    //     }
    // });

    // /* Hier wird die Statistik visualisiert und in das zugehörige
    //     Canvas (HTML) geschrieben.
    //     @see http://www.chartjs.org
    //  */
    // phenomenon=phenomenon+" "+unit;
    // var ctx = document.getElementById("tile"+i+"_canvas").getContext('2d');
    // var div = document.getElementById("tile"+i);

    // //Resizes the canvas to that of the containing div
    // console.log(document.getElementById("tile"+i+"_canvas"))
    // ctx.canvas.width=div.clientWidth;
    // ctx.canvas.height=div.clientHeight-50;
    // var myChart = new Chart(ctx, {
    //     type: 'line',
    //     data: {
    //         labels: timeArray,
    //         datasets: [{
    //             label: phenomenon,
    //             data: dataArray,
    //             backgroundColor: 'rgb(0, 255, 0)',
    //             borderColor: 'rgb(0,150, 0)',
    //             fill:false,
    //             radius:0,
    //         }
    //     ]
    //     },
    //     options: {
    //         responsive: false,
    //         layout:{
    //             padding:{
    //                 bottom:-25,
    //             }
    //         },
    //         tooltips: {
    //             mode: 'index',
    //             intersect: false
    //         },
    //         hover: {
    //             mode: 'nearest',
    //             intersect: true
    //         },
    //         scales: {
    //             xAxes: [{
    //                 display: true,
    //                 scaleLabel: {
    //                     display: true,
    //                 }
    //             }],
    //             yAxes: [{
    //                 display: true,
    //                 scaleLabel: {
    //                     display: true,
    //                 },
    //                 zeroLineWidth:100,
    //                 zeroLineColor:'rgba(255,0,0)'
    //             }]
    //         }
    //     }
    // });

}

function getStatisticsFeinstaub(res,i){

    // var senseboxid=res._id;
    // var phenomenon = res.sensors[i].title;
    // var from_date = new Date(res.sensors[i].lastMeasurement.createdAt);
    //                 from_date.setMonth(from_date.getMonth() - 3);
    //                 from_date=from_date.toISOString();
    // var to_date = res.sensors[i].lastMeasurement.createdAt;
    // var unit = res.sensors[i].unit;

    // var operation ='arithmeticMean';

    // var window='';
    // switch(GetRealLength(res.sensors)){
        
    //     case 1:
    //         window='4320000';
    //         break;
    //     case 2:
    //         window='8640000';
    //         break;
    //     case 3:
    //         window='8640000';
    //         break;
    //     case 4:
    //         window='8640000';
    //         break;
    //     case 5:
    //         window='8640000';
    //         break;
    //     case 6:
    //         window='30000000';
    //         break;
    //     case 7:
    //         window='150000000';
    //         break;
    //     case (GetRealLength(res.sensors)< 7):
    //         window='150000000';
    //         break;
    // }
                
    // //Zusammenbasteln der URL @see : docs.opensensemap.org
    // var url = "https://api.opensensemap.org/statistics/descriptive?senseboxid="+senseboxid+
    //     "&phenomenon="+phenomenon
    //     +"&from-date="+from_date
    //     +"&to-date="+to_date
    //     +"&operation="+operation
    //     +"&window="+window
    //     +"&format="+"json";

    // var response;

    // var dataArray=new Array();
    // var timeArray=new Array();
    // $.ajax({
    //     type: "GET", //rest Type
    //     dataType: 'json', //mispelled
    //     url: url,
    //     async: false,
    //     contentType: "application/json; charset=utf-8",
    //     success: function (msg) {
    //         response = msg[0];

    //     }
    // });

    // //Query Anfrage die das JSON Objekt durchgeht und jeweils die Werte in ein Array und die Timestamps in ein anderes Array speichert
    // jQuery.each(response,function(i,val){
    //     if(i !='sensorId'){
    //         dataArray.push(val);
    //         // Aus Visuellen Gründen nur Jahr/Monat/Tag anzeigen
    //         timeArray.push(i.substring(0,10));

    //     }
    // });

    // /* Hier wird die Statistik visualisiert und in das zugehörige
    //     Canvas (HTML) geschrieben.
    //     @see http://www.chartjs.org
    //  */
    // var gesetzlicheGrenze = new Array();
    // if(phenomenon=="PM10"){

    //     for(var c = 0 ; c<timeArray.length;c++){
    //         gesetzlicheGrenze.push(50);
    //     }
    // }
    // if(phenomenon=="PM2.5"){
    //     for(var d = 0 ; d<timeArray.length;d++){
    //         gesetzlicheGrenze.push(25);
    //     }
    // }    
    // phenomenon=phenomenon+" "+unit;
    // var ctx = document.getElementById("tile"+i+"_canvas").getContext('2d');
    // var div = document.getElementById("tile"+i);

    // //Resizes the canvas to that of the containing div
    // ctx.canvas.width=div.clientWidth;
    // ctx.canvas.height=div.clientHeight-50;
    // var myChart = new Chart(ctx, {
    //     type: 'line',
    //     data: {
    //         labels: timeArray,
    //         datasets: [{
    //             label: phenomenon,
    //             data: dataArray,
    //             backgroundColor: 'rgb(0, 255, 0)',
    //             borderColor: 'rgb(0, 150, 0)',
    //             fill:false,
    //             radius:0,
    //         },{
    //             label:'Gesetzliche Grenze am Tag',
    //             data: gesetzlicheGrenze,
    //             backgroundColor:'rgb(255,0,0)',
    //             radius:0,
    //             borderColor:'rgb(255,0,0)',
    //             fill:false,
    //         }
    //     ]
    //     },
    //     options: {
    //         responsive: false,
    //         layout:{
    //             padding:{
    //                 bottom:-25,
    //             }
    //         },
    //         tooltips: {
    //             mode: 'index',
    //             intersect: false
    //         },
    //         hover: {
    //             mode: 'nearest',
    //             intersect: true
    //         },
    //         scales: {
    //             xAxes: [{
    //                 display: true,
    //                 scaleLabel: {
    //                     display: true,
    //                 }
    //             }],
    //             yAxes: [{
    //                 display: true,
    //                 scaleLabel: {
    //                     display: true,
    //                 },
    //                 zeroLineWidth:100,
    //                 zeroLineColor:'rgba(255,0,0)'
    //             }]
    //         }
    //     }
    // });

}
