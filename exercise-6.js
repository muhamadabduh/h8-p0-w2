//1. While Looping

console.log('LOOPING PERTAMA');
var angka = 0;

while( angka < 20) {
  angka = angka + 2;
  console.log(angka + ' - I love coding');
}

console.log('LOOPING KEDUA');

var angka2 = 20;
while(angka2 > 0) {

  console.log(angka2 + ' - I will become fullstack developer');
  angka2 = angka2 - 2;
}

//2. For Looping
console.log('LOOPING PERTAMA');
for(var angka1 = 1; angka1 <= 20 ; angka1 += 1 ){
  console.log(angka1 + ' - I love coding');
}
console.log('LOOPING KEDUA');
for(var angka3 = 20; angka3 > 0 ; angka3 -= 1 ){
  console.log(angka3 + ' - I will become fullstack developer');
}

//3. Ganjil Genap
// penambahan 1
for (var i = 1; i <= 100; i++){
  if( i % 2 == 1){
    console.log('GANJIL');    
  } else {
    console.log('GENAP');
  }
}

// penambahan 2
for (var j = 1; j < 100; j += 2){
  if( j % 3 == 0){
    console.log(j + ' KELIPATAN 3');    
  } else {
    console.log('');
  }
}

//penambahan 5
for (var k = 1; k < 100; k += 5){
  if( k % 6 == 0){
    console.log(k + ' KELIPATAN 6');    
  } else {
    console.log('');
  }
}

//penambahan 10
for (var x = 1; x < 100; x += 9){
  if( x % 10 == 0){
    console.log(x + ' KELIPATAN 10');    
  } else {
    console.log('');
  }
}