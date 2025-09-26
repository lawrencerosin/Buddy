import {TAG_COMBOS} from "./commands.js";
function CreateTagComboMenu(){
    const combos=document.createElement("select");
    for(let combo of TAG_COMBOS){
        const comboOption=document.createElement("option");
        comboOption.textContent=combo;
        combos.appendChild(comboOption);
    }
    return combos;
}
function CreateDeleteButton(){
    const deleteButton=document.createElement("button");
    deleteButton.textContent="Delete Button";
    return deleteButton;
}
document.getElementById("addInstruction").addEventListener("click", function(){
    const instruction=document.createElement("div");
   const tagCombos=CreateTagComboMenu();
   const text=document.createElement("textarea");
   const deleteButton=CreateDeleteButton();
   instruction.appendChild(tagCombos);
   instruction.appendChild(text);
   instruction.appendChild(deleteButton);
   document.getElementById("program").appendChild(instruction);
});