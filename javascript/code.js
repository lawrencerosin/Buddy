import {TAG_COMBOS, CreateLogInForm} from "./commands.js";
function CreateTagComboMenu(){
    const combos=document.createElement("select");
    for(let combo of TAG_COMBOS){
        const comboOption=document.createElement("option");
        comboOption.textContent=combo;
        comboOption.value=combo;
        combos.appendChild(comboOption);
    }
    return combos;
}
function CreateDeleteButton(){
    const deleteButton=document.createElement("button");
    deleteButton.textContent="Delete Button";
    deleteButton.style.backgroundColor="red";
    deleteButton.addEventListener("click", function(){
         deleteButton.parentElement.parentElement.removeChild(deleteButton.parentElement);
    });
    return deleteButton;
}
document.getElementById("add-instruction").addEventListener("click", function(){
    const instruction=document.createElement("li");
   const tagCombos=CreateTagComboMenu();
   const text=document.createElement("textarea");
   const deleteButton=CreateDeleteButton();
   instruction.appendChild(tagCombos);
   instruction.appendChild(text);
   instruction.appendChild(deleteButton);
   document.getElementById("program").appendChild(instruction);
});
document.getElementById("run").addEventListener("click",function(){
    const output=document.getElementById("output");
    const program=document.getElementById("program");
    output.innerHTML="";
    for(let instruction of program.children){
        console.log(instruction.children[0].value);
        switch(instruction.children[0].value){
           case TAG_COMBOS[1]:
             
              output.appendChild(CreateLogInForm());
              
        }
    }
});
