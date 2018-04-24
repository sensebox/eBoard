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
    console.log(boxes);

    // for(var i = 0;i< length;i++){
        

        
    //     var tile = document.getElementById("tile"+i);
    //     console.log(tile);
    //     var checkbox = boxes;
    //     console.log(checkbox);

    // }

    jQuery.each(boxes,function(i,val){
        var tilenumber = val.id.charAt(9)
        $(val).on("click",function(){
            $('#tile'+tilenumber).toggle();
        });
    });
    
    console.log(content);

        return content; 
    }