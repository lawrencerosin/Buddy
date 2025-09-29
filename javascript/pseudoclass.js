 export class EditabiltyBox extends HTMLElement{
    #PSEUDO_NAME="uneditable";
     constructor(menu){
        super();
        this.pseudo=this.attachInternals();
        setInterval(function(){
            
          if(menu.value=="Sign Up Form"||menu.value=="Log In Form")
             this.pseudo.states.add(this.#PSEUDO_NAME);
          else
            this.pseudo.states.delete(this.#PSEUDO_NAME);
       }, 1000);
     }

 }
  