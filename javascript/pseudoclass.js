export class Instruction extends HTMLElement{
    #PSEUDO_NAME="editable";
    constructor(instruction){
        super();
        this.instruction=instruction;
        this.attachShadow({mode:"open"});
        this.pseudo=this.attachInternals();
        
    }
    HoldTextOrNot(){
        if(this.instruction.children[0].value=="Sign Up Form"||this.instruction.children[0].value=="Log In Form"){
            this.pseudo.states.add(this.#PSEUDO_NAME);
            this.instruction.children[1].disabled=true;
        }
        else{
            
           this.pseudo.states.delete(this.#PSEUDO_NAME);
           this.instruction.children[1].disabled=false;
        }
    }
    
}
customElements.define("instruct-element", Instruction);