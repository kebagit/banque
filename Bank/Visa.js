import Verification from '../interface/Verification.js'
    export default class Visacard extends Verification{
        constructor(numero){
           super();
            this._numero = numero;
            
         
        }
        verifier_code(){
            
            var cardno = new RegExp(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/);
            if(card.test(this._numero))
                  {
             
                //alert("Correcte");
                return true;
                  }
                else
                  {
                  //alert("Not a valid Visa credit card number!");
                  return false;
                  }
               
                 
        }
         }