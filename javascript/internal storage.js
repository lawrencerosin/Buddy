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
    document.getElementById(name).innerHTML=code;
    return new Program(name, code);
   }
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
  );


}