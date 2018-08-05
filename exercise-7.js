//1. Menyusun barisan bintang
var rows1 = 5;
var x = 0;
while ( x < rows1){
    console.log('*');
    x++;
}

//2. Menyusun barisan bintang dengan nested looping
var rows2 = 5;
var y = 0;
while(y < rows2){
    
    var z = 0;
    var str = '';
    while(z < rows2){
        str += '*';
        z++;
    }
    console.log(str);
    y++;
}

//3. Menyusun barisan tangga bintang

var rows3 = 5;
var q = 0
var str1 = '';

while(q < rows3){
    str1 += '*';
    console.log(str1);
    q++;
}