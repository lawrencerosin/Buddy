

function CreateTagComboMenu(){
    const combos=document.createElement("select");
    for(let combo of commands.TAG_COMBOS){
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
   const textHolder=document.createElement("editable-box");

   const text=document.createElement("textarea"); 
   instruction.appendChild(textHolder);
   const deleteButton=CreateDeleteButton();
   instruction.appendChild(tagCombos);
   text.disabled=true;
   instruction.appendChild(text);
   
   instruction.appendChild(deleteButton);
   instruction.children[0].addEventListener("change", function(){
     HoldTextOrNot(tagCombos);
   });
   document.getElementById("program").appendChild(instruction);
});
document.getElementById("run").addEventListener("click",function(){
    const output=document.getElementById("output");
    const program=document.getElementById("program");
    output.innerHTML="";
    for(let instruction of program.children){
       
        switch(instruction.children[0].value){
           case commands.TAG_COMBOS[0]:
             output.appendChild(commands.CreateSignUpForm());
             break;
           case commands.TAG_COMBOS[1]:
             
              output.appendChild(commands.CreateLogInForm());
              break;
           case commands.TAG_COMBOS[2]:
              output.appendChild(commands.CreateNumberedList(instruction));
              break;
           case commands.TAG_COMBOS[3]:
             output.appendChild(commands.CreateUnorderedList(instruction));
             break;
          case commands.TAG_COMBOS[4]:
             output.appendChild(commands.CreateUnorderedListWithoutBullets(instruction));
             break;
          case commands.TAG_COMBOS[5]:
            output.appendChild(commands.CreateBasicTable(instruction));
            break;
          case commands.TAG_COMBOS[6]:
            output.appendChild(commands.CreateTableWithHeaders(instruction));
            break;
          case commands.TAG_COMBOS[7]:
            output.appendChild(commands.CreateTitledTable(instruction));
            break;
          default:
            output.appendChild(commands.CreateTitledTableWithHeaders(instruction));
        }
    }
         
});
 
