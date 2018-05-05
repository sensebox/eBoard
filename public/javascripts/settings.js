function buildSettings(){
    var checkbox = buildCheckbox();
    var colorPicker = buildColorPicker();
    
    return checkbox;
}

function buildCheckbox (){
    
    var content = document.createElement("div");
    var length = document.getElementsByClassName("cell front").length;
    var boxes = new Array;

    for(var i = 0;i< length;i++){
        var p = document.createElement("p");
        var tile = document.getElementById("tile"+i);
                   p.innerHTML= tile.title+" " ;
        var checkbox = document.createElement("input");
                    var att = document.createAttribute("type");
                    var id = document.createAttribute("id");
                    id.value = "checkbox_"+i;
                    att.value = "checkbox";
                    checkbox.setAttributeNode(att);
                    checkbox.setAttributeNode(id);

        var colorPicker = document.createElement("input");
                     var type_color = document.createAttribute("type");
                     var id_color = document.createAttribute("id");
                     var name_color = document.createAttribute("name");
                     var onchange_color = document.createAttribute("onchange");
                     var value_color = document.createAttribute("value");
                     onchange_color.value = "changeColor(value,"+i+");";
                     name_color.value = "colorpicker";
                     type_color.value = "color";
                     id_color.value = "color_"+i;
                     console.log(tile);
                     var rgb_color = tile.style['background-color']
                     value_color.value = rgbToHex(rgb_color);
                     colorPicker.setAttributeNode(type_color);  
                     colorPicker.setAttributeNode(id_color);
                     colorPicker.setAttributeNode(name_color);
                     colorPicker.setAttributeNode(onchange_color);
                     colorPicker.setAttributeNode(value_color);
                     


        if(tile.style.display=='none'){
            checkbox.checked = false;
        }
        else{checkbox.checked=true;}

        p.appendChild(checkbox);
        p.appendChild(colorPicker);
        content.appendChild(p);
        boxes.push(content.children[i].children[0]);
    } 


    jQuery.each(boxes,function(i,val){
        var tilenumber = val.id.charAt(9)
        var tile = document.getElementById("tile"+i);
        $(val).on("click",function(){
           $('#tile'+tilenumber).toggle();
           tile.addEventListener("change",fixStyle(tile));

        });
    });
    

        return content; 
    }

    // Wenn alle Elemente der row auf display:none stehen soll die row auf display:none gestellt werden und die anderen 
    // Reihen werden ihrer Höhe entsprechend angepasst. 

function buildColorPicker(){



}

function changeColor(value,i){
    // console.log(document.getElementById("color_1"));
        var tile = document.getElementById("tile"+i);

        tile.style['background']=value;
}

function toHex(n) {
    n = parseInt(n,10);
    if (isNaN(n)) return "00";
    n = Math.max(0,Math.min(n,255));
    return "0123456789ABCDEF".charAt((n-n%16)/16)
         + "0123456789ABCDEF".charAt(n%16);
   }

function rgbToHex(string){

    // split auf komma alles was in klammer steht array an 
    // stelle 1 2 und 3 werden in hex gesetzt und concateniert 
    // rgb(46, 204, 64)
    
    var hex = string.replace(/([rgb])|(\(|\))/g,"");
    var tmp = hex.split(",");
    console.log(tmp)
    hex = "#"+toHex(tmp[0])+toHex(tmp[1])+toHex(tmp[2]);
    
    return hex;
}
