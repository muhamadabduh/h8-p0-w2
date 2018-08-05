function konversiMenit(menit) {
    var jam = Math.floor(menit/60);
    var lebihMenit = menit%60;

    //untuk menampilkan digit nol jika kelebihan menit kurang dari 10
    if (lebihMenit<10){
        var lebihMenitDikit = '0'+  lebihMenit;
        return jam + ':' + lebihMenitDikit;
    } else {
        return jam + ':' + lebihMenit;
    }
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00