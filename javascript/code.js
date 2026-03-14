import * as commands from "./commands.js";
function CreateTagComboMenu(){
    const combos=document.createElement("select");
    for(let combo of commands.TAG_COMBOS){
        const comboOption=document.createElement("option");
        comboOption.textContent=combo;
        comboOption.value=combo;
        combos.appendChild(comboOption);
    }
    combos.addEventListener("change", function(){
        if(combos.selectedIndex<2){
          const textbox=combos.nextElementSibling;
          textbox.disabled=true;
          textbox.value="";
        }
        else{
          combos.nextElementSibling.disabled=false;
        }
    });
    return combos;
}
function CreateDeleteButton(){
    const deleteButton=document.createElement("button");
    deleteButton.textContent="Delete Control";
    deleteButton.style.backgroundColor="red";
    deleteButton.addEventListener("click", function(){
         deleteButton.parentElement.parentElement.removeChild(deleteButton.parentElement);
    });
    return deleteButton;
}
function CreateColorBox(type, color){
  const boxHolder=document.createElement("span");
  boxHolder.textContent=type+" Color:";
    const box=document.createElement("input");
    
    box.setAttribute("type", "color");
    box.value=color;
    boxHolder.appendChild(box);
    return boxHolder;
} 
document.getElementById("add-instruction").addEventListener("click", function(){
    const instruction=document.createElement("li");
    instruction.style.listStyleType="none";
    const gui=document.createElement("form");
   const tagCombos=CreateTagComboMenu();
    
   const text=document.createElement("textarea"); 
    text.disabled=true;
   const deleteButton=CreateDeleteButton();
   gui.appendChild(tagCombos);
  
   gui.appendChild(text);
 gui.appendChild(CreateColorBox("Text", "black"));
  gui.appendChild(CreateColorBox("Background", "white"));
  gui.appendChild(deleteButton);
    instruction.appendChild(gui);
   document.getElementById("program").appendChild(instruction);
}); 
function AssignColors(instruction, element){
  const backgroundColor=instruction.children[instruction.children.length-2].children[0].value;
  const textColor=instruction.children[instruction.children.length-3].children[0].value;
  element.style.backgroundColor=backgroundColor;
  element.style.color=textColor;
}
document.getElementById("run").addEventListener("click",function(){
    const output=document.getElementById("output");
    const program=document.getElementById("program");
    output.innerHTML="";
    for(let instruction of program.children){
        let component;
        
        switch(instruction.children[0].children[0].value){
           case commands.TAG_COMBOS[0]:
            
            
            component=commands.CreateSignUpForm();
             break;
           case commands.TAG_COMBOS[1]:
             
              component=commands.CreateLogInForm(instruction);
              break;
           case commands.TAG_COMBOS[2]:

              component=commands.CreateNumberedList(instruction);
              break;
           case commands.TAG_COMBOS[3]:
            component=commands.CreateUnorderedList(instruction);
             break;
          case commands.TAG_COMBOS[4]:
             component=commands.CreateUnorderedListWithoutBullets(instruction);
             break;
          case commands.TAG_COMBOS[5]:
            component=commands.CreateBasicTable(instruction);
            break;
          case commands.TAG_COMBOS[6]:
            component=commands.CreateTableWithHeaders(instruction);
            break;
          case commands.TAG_COMBOS[7]:
           component=commands.CreateTitledTable(instruction);
            break;
          default:
           component=commands.CreateTitledTableWithHeaders(instruction);
        }
        AssignColors(instruction.children[0], component);
        output.appendChild(component);
    }
         
});
 
