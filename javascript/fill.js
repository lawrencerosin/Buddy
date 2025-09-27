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