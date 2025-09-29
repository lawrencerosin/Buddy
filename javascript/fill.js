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
//In case the table has column titles and/or a title itself
export function FillBasicTable(content, startRow=0){
  let table="";
  if(content.length>0){
    let position;
    let rowNum=0;
    /*for(position=0; position<content.length&&rowNum<startRow; position++)
         if(content[position]=='\n')
            rowNum++;*/
    
    table="<tr>";
    for(; position<content.length; position++){
        switch(content[position]){
            case '\n':
                table+="</td></tr>";
                if(position<content.length-1)
                    table+"<tr>";
                break;
            case ',':
                table+="</td><td>";
                break;
            default:
                table+=content[position];
                break;
        }
     }
    }
   return table;
}