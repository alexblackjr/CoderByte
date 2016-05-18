/*Solved by Alexander Black on 01/10/16. Bonfire: Boo who. Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.*/

function boo(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if(typeof bool === 'boolean'){
    return true;
  }else{
    return false;
  }
}

boo(null);


