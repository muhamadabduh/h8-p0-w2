function xo(str) {
    var panjangXo = str.length;
    var i = 0;
    var banyakX = 0;
    var banyakO = 0;
    while (i<panjangXo){

        if(str[i] === 'x'){
            banyakX += 1;
            
        } else if(str[i] === 'o') {
            banyakO += 1;
        }
        i++
    }
    
   
    if(banyakX == banyakO){
        return true;
    } else {
        return false;
    }
    
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true
//   console.log(typeof 0);