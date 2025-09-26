const API_KEY="1f272713-85bb-4845-b7f9-da35855fd665";

async function GetAllImages(){
  const PATH="https://api.harvardartmuseums.org/image?apikey="+API_KEY
  const imagesURL=await fetch(PATH);
  const data=await imagesURL.json();
  const submenu=document.getElementById("submenu");
  
  //Removes from the previous menu
  submenu.innerHTML="<img class='default-background background-image-option'>";
  for(let record of data["records"]){
    const image=document.createElement("img");
    image.className="background-image-option";
    image.src=record["baseimageurl"];
    image.addEventListener("click", function(){
       document.body.style.backgroundImage=`url(${PATH})`;
       submenu.innerHTML="";
    })
    submenu.appendChild(image);
  }
}
 