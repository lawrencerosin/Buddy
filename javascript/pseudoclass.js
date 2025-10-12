 export class EditabiltyBox extends HTMLElement{
    #PSEUDO_NAME="uneditable";
     constructor(menu){
        super();
        this.internals=this.attachInternals();
        setInterval(function(){
              
          if(this.previousElementSibling.value=="Sign Up Form"||this.previousElementSibling.value=="Log In Form")
             this.internals.states.add(this.#PSEUDO_NAME);
          else
            this.internals.states.delete(this.#PSEUDO_NAME);
         }, 1000);
     }

 }
customElements.define("editable-box", EditabiltyBox);