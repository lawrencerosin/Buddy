import {FillTable, FillList, FillHeaders} from "./fill.js";
export const TAG_COMBOS=["Sign Up Form", "Log In Form", "Numbered List", "Dotted List", "Undotted List", "Basic Table", "Table With Headers"];
function CreateInputBox(description, type="text"){
    const box=document.createElement("input");
    box.setAttribute("type", type);
    box.setAttribute("placeholder", description);
    box.setAttribute("required", true);
    return box;
}
export function CreateLogInForm(){
    const form=document.createElement("form");
   form.appendChild(CreateInputBox("E-mail Address", "email"));
   form.innerHTML+="<br>";
   form.appendChild(CreateInputBox("Password", "password"));
    form.innerHTML+="<br>";
   const logIn=document.createElement("button");
   logIn.textContent="Log In";
   form.appendChild(logIn);
   return form;
}
export function CreateSignUpForm(){
    const form=document.createElement("form");
    form.appendChild(CreateInputBox("First Name"));
    form.innerHTML+="<br>";
    form.appendChild(CreateInputBox("Last Name"));
    form.innerHTML+="<br>";
    form.appendChild(CreateInputBox("E-mail Address", "email"));
    form.innerHTML+="<br>";
    form.appendChild(CreateInputBox("Password", "password"));
    form.innerHTML+="<br>";
    form.appendChild(CreateInputBox("Confirm Password", "password"));
    form.innerHTML+="<br>";
    const createAccount=document.createElement("button");
    createAccount.textContent="Create Account";
    form.appendChild(createAccount);
    return form;

}
export function CreateUnorderedList(instruction){
     
    let list=document.createElement("ul");
    
    list.innerHTML=fill.FillList(instruction.children[1].value);
    return list;
}
export function CreateUnorderedListWithoutBullets(instruction){
    const list=CreateUnorderedList(instruction);
    list.style.listStyleType="none";
    return list;
}
export function CreateNumberedList(instruction){
    const list=document.createElement("ol");
    list.innerHTML=FillList(instruction.children[1].value);
    return list;
}
export function CreateBasicTable(instruction){
    const table=document.createElement("table");
     
     table.style.border="1px solid black";
    table.innerHTML=FillTable(instruction.children[1].value);
    return table;
}
export function CreateTableWithHeaders(instruction){
    const table=document.createElement("table");
    table.innerHTML=FillHeaders(instruction.children[1].value)+FillTable(instruction.children[1].value);
    return table;
}