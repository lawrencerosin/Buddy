export const TAG_COMBOS=["Sign Up Form", "Log In Form", "Numbered List", "Dotted List", "Undotted List"];
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
export function Hello(){
    
}