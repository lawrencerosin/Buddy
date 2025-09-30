import {Save, Open, NewProgram} from "./internal storage.js";
const API_KEY="1f272713-85bb-4845-b7f9-da35855fd665";
class Action{
  constructor(text, action){
    this.text=text;
    this.action=action;
 
  }
  AddAction(element){
    element.addEventListener("click", this.action);
  }
}
document.getElementById("storage-options").addEventListener("click",
  function(){

  const submenu=document.getElementById("submenu");
  if(submenu.children.length==0||submenu.firstChild.textContent.length==0){
    const newProgram=function(){NewProgram()};
    const open=function(){Open();};
    const save=function(){Save()};

    const STORAGE_OPTIONS=[new Action("New", newProgram), new Action("Open", open), new Action("Save", save)];
   
     submenu.innerHTML="";
    for(let storageOption of STORAGE_OPTIONS){
       const option=document.createElement("span");
        option.textContent=storageOption.text;
       option.classList.add("menu-item");
       storageOption.AddAction(option);
      submenu.appendChild(option);
    }
  }
  else{
    submenu.innerHTML="";
  }
});
function CreateColorSelection(path){
  const colorSelection=document.createElement("form");
  const name=document.createElement("input");
  name.setAttribute("placeholder", "Color Name");
  name.setAttribute("required", true);
  const colors=document.createElement("input");
  colors.setAttribute("type", "color");
  colors.setAttribute("required", true);
  const submit=document.createElement("button");
  submit.textContent="Submit";
  submit.id="color-submit";
  submit.addEventListener("click", function(event){
      event.preventDefault();
      const colorAdd=new XMLHttpRequest();
      colorAdd.open("POST", path, true);
      colorAdd.setRequestHeader("Content-Type", "application/json");
      const colorInfo={"name":name.value, "color":colors.value};
      
      colorAdd.onreadystatechange=function(){
        if(colorAdd.readyState==4){
           
          if(colorAdd.status==200||colorAdd.status==201)
             alert("Color successfully sent");
          else
            alert("Unable to send color");
        }
      }
      colorAdd.send(JSON.stringify(colorInfo));
  });
  colorSelection.appendChild(name);
  colorSelection.appendChild(colors);
  colorSelection.appendChild(submit);
  return colorSelection;
}
async function GetAllImages(){
  function WithoutSpaces(color){
    let spaceless="";
    for(let position=0; position<color.length; position++){
      if(color[position]!=' ')
        spaceless+=color[position];
    }
    return spaceless;
  }
  const submenu=document.getElementById("submenu");
  //If the background menu isn't already opened
  if(submenu.children.length==0||submenu.firstChild.textContent.length>0){
     submenu.innerHTML="";
     const PATH="https://api.restful-api.dev/objects";
     const imagesURL=await fetch(PATH);
    const infos=await imagesURL.json();
    //To return to the default color
    infos.unshift({"data":{"color":"lightblue"}});
  
    for(let info of infos){
      const colorSquare=document.createElement("span");
     
      if(info["data"]!==null&&"data" in info&&"color" in info["data"]){
      
       colorSquare.style.backgroundColor=WithoutSpaces(info["data"]["color"].toLowerCase());
        colorSquare.className="background-color-option";
        colorSquare.addEventListener("click", function(){
            document.body.style.backgroundColor=colorSquare.style.backgroundColor;
            //Closes the menu
            submenu.innerHTML="";
      });
       submenu.appendChild(colorSquare);
      }
    
   }

    submenu.appendChild(CreateColorSelection(PATH));
    submenu.children[0].style.borderColor="black";
  }
  else{
    submenu.innerHTML="";
  }
}
document.getElementById("background-image").addEventListener("click", GetAllImages);
