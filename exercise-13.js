function xo(str) {
    var panjangXo = str.length;
    var i = 0;
    while (i<panjangXo){
        var banyakX = 0;

        if(str[i] === 'x'){
            banyakX += 1;
        } 
        
        return banyakX;
    }
    
    if(banyakX == panjangXo/2){
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