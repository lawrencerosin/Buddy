export const TAG_COMBOS=["Sign Up Form", "Log In Form", "Numbered List", "Dotted List", "Undotted List"];
function CreateInputBox(type="text"){
    const box=document.createElement("input");
    box.setAttribute("type", type);
    box.setAttribute("required", true);
    return box;
}
function CreateLogInForm(){
    const form=document.createElement("form");
   form.appendChild(CreateInputBox("email"));
   form.appendChild(CreateInputBox("password"));
   const logIn=document.createElement("button");
   logIn.textContent="Log In";
   form.appendChild(logIn);

}