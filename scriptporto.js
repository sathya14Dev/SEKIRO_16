// cara asli (tidak bisa bolak balik)

/* function lihatel() {
  document.getElementById('tableel').innerHTML= 'Halo Nama Saya ELIJAH'
}; 

function lihatsuma() {
  document.getElementById('tablesuma').innerHTML= 'Halo Nama Saya KUSUMA'
};

function lihatsathya() {
  document.getElementById('tablesathya').innerHTML= 'Halo Nama Saya SATHYA'
}; */



// cara kedua (bisa bolak balik)

// Fungsi untuk mengubah tampilan antara dua tabel (tabel1 dan tabel2)
function lihatel() {
  // Mengambil elemen tabel berdasarkan ID
  const tabel1 = document.getElementById('tableel'); // Tabel pertama
  const tabel2 = document.getElementById('tableel2'); // Tabel kedua

  // Memeriksa apakah tabel1 saat ini terlihat (memiliki kelas 'show')
  if (tabel1.classList.contains('show')) {
    // Jika tabel1 terlihat
    tabel1.classList.add('hide');   // Menambahkan kelas 'hide' untuk menyembunyikan tabel1
    tabel1.classList.remove('show'); // Menghapus kelas 'show' dari tabel1

    tabel2.classList.add('show');    // Menambahkan kelas 'show' untuk menampilkan tabel2
    tabel2.classList.remove('hide');  // Menghapus kelas 'hide' dari tabel2

  } else {
    // Jika tabel1 tidak terlihat
    tabel2.classList.add('hide');     // Menambahkan kelas 'hide' untuk menyembunyikan tabel2
    tabel2.classList.remove('show');   // Menghapus kelas 'show' dari tabel2

    tabel1.classList.add('show');      // Menambahkan kelas 'show' untuk menampilkan tabel1
    tabel1.classList.remove('hide');    // Menghapus kelas 'hide' dari tabel1
  }
}

// Fungsi untuk mengubah tampilan antara dua tabel (tablesuma)
function lihatsuma() {
  const tabel1 = document.getElementById('tablesuma'); // Tabel pertama
  const tabel2 = document.getElementById('tablesuma2'); // Tabel kedua

  if (tabel1.classList.contains('show')) {
    // Jika tabel1 terlihat
    tabel1.classList.add('hide');   // Menambahkan kelas 'hide' untuk menyembunyikan tabel1
    tabel1.classList.remove('show'); // Menghapus kelas 'show' dari tabel1

    tabel2.classList.add('show');    // Menambahkan kelas 'show' untuk menampilkan tabel2
    tabel2.classList.remove('hide');  // Menghapus kelas 'hide' dari tabel2

  } else {
    // Jika tabel1 tidak terlihat
    tabel2.classList.add('hide');     // Menambahkan kelas 'hide' untuk menyembunyikan tabel2
    tabel2.classList.remove('show');   // Menghapus kelas 'show' dari tabel2

    tabel1.classList.add('show');      // Menambahkan kelas 'show' untuk menampilkan tabel1
    tabel1.classList.remove('hide');    // Menghapus kelas 'hide' dari tabel1
  }
}

// Fungsi untuk mengubah tampilan antara dua tabel (tablesathya)
function lihatsathya() {
  const tabel1 = document.getElementById('tablesathya'); // Tabel pertama
  const tabel2 = document.getElementById('tablesathya2'); // Tabel kedua

  if (tabel1.classList.contains('show')) {
    // Jika tabel1 terlihat
    tabel1.classList.add('hide');   // Menambahkan kelas 'hide' untuk menyembunyikan tabel1
    tabel1.classList.remove('show'); // Menghapus kelas 'show' dari tabel1

    tabel2.classList.add('show');    // Menambahkan kelas 'show' untuk menampilkan tabel2
    tabel2.classList.remove('hide');  // Menghapus kelas 'hide' dari tabel2

  } else {
    // Jika tabel1 tidak terlihat
    tabel2.classList.add('hide');     // Menambahkan kelas 'hide' untuk menyembunyikan tabel2
    tabel2.classList.remove('show');   // Menghapus kelas 'show' dari tabel2

    tabel1.classList.add('show');      // Menambahkan kelas 'show' untuk menampilkan tabel1
    tabel1.classList.remove('hide');    // Menghapus kelas 'hide' dari tabel1
  }
}
