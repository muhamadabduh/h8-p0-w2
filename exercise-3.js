var nama = 'Andi';
var peran = '';

if (nama == '' && peran == '') {
	console.log('Nama harus diisi!');
} else if (nama != '' && peran == '') {
	console.log('Halo, ' + nama + ' Pilih peranmu untuk memulai game!');
} else {
	console.log('Selamat datang di Dunia Proxyta, ' + nama);

	if(nama != '' && peran == 'ksatria') {

		console.log('Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!');

	} else if (nama != '' && peran == 'tabib') {
		
		console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.');

	} else if (nama != '' && peran == 'penyihir') {
		
		console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
	}
}
