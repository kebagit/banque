import Verification from '../interface/Verification.js'
    export default class American_Express extends Verification {
        constructor(numero){
            super();
             this._numero = numero;
        }
        verifier_code(){
            var card = new RegExp(/^(?:3[47][0-9]{13})$/);
            if(card.test(this._numero))
                  {
                return true;
                  }
                else
                  {
                 // alert("Not a valid Amercican Express credit card numero!");
                  return false;
                  }
          }

    }