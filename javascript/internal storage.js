class Program{
   constructor(name, code){
    this.name=name;
    this.code=code;
   }
   Save(){
    localStorage.setItem(this.name, this.code);
   }
   static Open(name){
    const code=localStorage.getItem(name);
    document.getElementById("program").innerHTML=code;
    return new Program(name, code);
   }
} 
export function NewProgram(){
    document.getElementById("program").innerHTML="";
    submenu.innerHTML="";
}
export function Open(){
    const programName=prompt("What program do you want to open?");
    const opening=new Promise((success, failure)=>{
        if(localStorage.getItem(programName)==null)
            failure();
        else
            success();
    });
    opening.then(function(){
        Program.Open(programName);

    }, function(){
        alert(`The program ${programName} doesn't exist.`);
    }).catch(function(){alert(`Unable to open ${programName}.`)});
    submenu.innerHTML="";
}
export function Save(){
    const programName=prompt("What do you want to save the program as?");
    const saving=new Promise(function(success, failure){
          if(programName.length==0)
            failure();
          else success();
      
    });
    saving.then(function(){
       const code=document.getElementById("program").innerHTML;
       const programStorage=new Program(programName, code);
       alert(`You have successfully saved ${programName}`);
       programStorage.Save();
    },
    function (){
         alert("You must enter a name for your program.");
    }
  ).catch(function(){alert(`Unable to save ${programName}.`)});

 submenu.innerHTML="";
}