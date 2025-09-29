import * as commands from "./commands.js";
import { EditabiltyBox } from "./pseudoclass.js";
function HoldTextOrNot(menu){
        if(menu.value=="Sign Up Form"||menu.value=="Log In Form"){
          //  this.pseudo.states.add(this.#PSEUDO_NAME);//Is supposed to be a custom pseudoclass
            menu.nextElementSibling.disabled=true;
        }
        else{
            
            
          menu.nextElementSibling.disabled=false;
        }
    }

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
   
   const text=document.createElement("textarea"); 
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
        }
    }
});
