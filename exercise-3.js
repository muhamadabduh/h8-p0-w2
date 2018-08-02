var peran = 'penyihir';

if (nama == '') {
	console.log('Nama harus diisi!');
} else if (nama != '' && peran == '') {
	console.log('Halo, ' + nama + ' Pilih peranmu untuk memulai game!');
} else if (nama != '' && peran == 'ksatria') {
	console.log('Selamat datang di Dunia Proxyta, ' + nama);
	console.log(
		'Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!'
	);
} else if (nama != '' && peran == 'tabib') {
	console.log('Selamat datang di Dunia Proxyta, ' + nama);
	console.log(
		'Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.'
	);
} else if (nama != '' && peran == 'penyihir') {
	console.log('Selamat datang di Dunia Proxyta, ' + nama);
	console.log(
		'Halo Penyihir ' +
			nama +
			', cipatakan keajaiban yang membantu kemenanganmu!'
	);
}
