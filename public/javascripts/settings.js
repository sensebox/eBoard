function buildSettings (){
    
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

        if(tile.style.display=='none'){
            checkbox.checked = false;
        }
        else{checkbox.checked=true;}

        p.appendChild(checkbox);

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