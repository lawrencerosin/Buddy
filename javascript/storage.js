const API_KEY="1f272713-85bb-4845-b7f9-da35855fd665";

async function GetAllImages(){
  const imagesURL=await fetch("https://api.harvardartmuseums.org/image?apikey="+API_KEY);
  const data=await imagesURL.json();
  const submenu=document.getElementById("submenu");
  
  //Removes from the previous menu
  submenu.innerHTML="<img class='default-background background-image-option'>";
  for(let record of data["records"]){
    const image=document.createElement("img");
    image.className="background-image-option";
    image.src=record["baseimageurl"];
    submenu.appendChild(image);
  }
}
 