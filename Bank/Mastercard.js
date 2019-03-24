import Verification from '../interface/Verification.js'
    export default class Mastercard extends Verification{
        constructor(numero){
            super();
             this._numero = numero;
        }
        verifier_code(){
            var card = new RegExp(/^(?:5[1-5][0-9]{14})$/);
         if(card.test(this._numero))
        {
            alert("successful!");
             return true;
        }
         else
        {
            //alert("Not a valid Mastercard number!");
            return false;
            }
        }
    }