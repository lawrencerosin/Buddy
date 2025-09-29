const CELL_STYLE=` style="border:1px solid black"`;
export function FillList(content){
    let list="";
    if(content.length>0){
        list="<li>";
        for(let position=0; position<content.length; position++){
            if(content[position]=='\n'){
                list+="</li>";
                if(position<content.length-1){
                    list+="<li>";
                }
            }
            else{
                list+=content[position];
            }
        }
    }
    return list;
}
function SkipToLine(content, startRow){
    let position;
    let rowNum=0;
    for(position=0; position<content.length&&rowNum<startRow; position++)
         if(content[position]=='\n')
            rowNum++;
    return position;
}
export function FillHeaders(content, startRow=0){
    let headers="";
    if(content.length>0){
        let position=SkipToLine(content, startRow);
        headers=`<tr><th ${CELL_STYLE}>`;
        for(; position<content.length&&content[position]!='\n'; position++){
            if(content[position]==','){
                headers+=`</th><th ${CELL_STYLE}>`;
               
            }
            else
                headers+=content[position];

            
        }
        //Adds closing row tag
        headers+="</tr>";
    }
    return headers;
    
}
//In case the table has column titles and/or a title itself
export function FillTable(content, startRow=0){
  let table="";
  if(content.length>0){
    let position=SkipToLine(startRow);
    
    
    table=`<tr><td ${CELL_STYLE}>`;
    for(; position<content.length; position++){
        switch(content[position]){
            case '\n':
                table+=`</td></tr><td ${CELL_STYLE}>`;
                if(position<content.length-1)
                    table+"<tr>";
                break;
            case ',':
                table+=`</td><td ${CELL_STYLE}>`;
                break;
            default:
                table+=content[position];
                break;
        }
     }
    }
   return table;
}