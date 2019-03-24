import Verification from '../interface/Verification.js';
import Visa from '../Bank/Visa.js'
import Mastercard from '../Bank/Mastercard.js'
import American_Express from '../Bank/American_Express.js'
    //let c = new Visa();
    //let b=new Mastercard(5123654789652358);
    //let tem;
    let a = prompt("Entrer un numero de carte");
    let v = new Visa(a);
    let m = new Mastercard(a);
    let n = new American_Express(a);

    let x = v.verifier_code();
    let y = m.verifier_code();
    let z = n.verifier_code();
    if(x===true)
    console.log("carte visa")
    if(y===true)
    console.log("Mastercard")
    if(z===true)
    console.log("American_Express")     
    if(!x  && !y && !z) 
    console.log("numero de carte incorrecte")
    //console.log(x);
   // console.log(c);