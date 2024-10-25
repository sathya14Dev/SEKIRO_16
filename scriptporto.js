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

function lihatel() {
  const tabel1 = document.getElementById('tableel')
  const tabel2 = document.getElementById('tableel2')

  if (tabel1.classList.contains('show')){
    tabel1.classList.add('hide')
    tabel1.classList.remove('show')

    tabel2.classList.add('show')
    tabel2.classList.remove('hide')

    return
  }
  tabel2.classList.add('hide')
  tabel2.classList.remove('show')

  tabel1.classList.add('show')
  tabel1.classList.remove('hide')
};

function lihatsuma() {
  const tabel1 = document.getElementById('tablesuma')
  const tabel2 = document.getElementById('tablesuma2')

  if (tabel1.classList.contains('show')){
    tabel1.classList.add('hide')
    tabel1.classList.remove('show')

    tabel2.classList.add('show')
    tabel2.classList.remove('hide')

    return
  }
  tabel2.classList.add('hide')
  tabel2.classList.remove('show')

  tabel1.classList.add('show')
  tabel1.classList.remove('hide')
}

function lihatsathya() {
  const tabel1 = document.getElementById('tablesathya')
  const tabel2 = document.getElementById('tablesathya2')

  if (tabel1.classList.contains('show')){
    tabel1.classList.add('hide')
    tabel1.classList.remove('show')

    tabel2.classList.add('show')
    tabel2.classList.remove('hide')

    return
  }
  tabel2.classList.add('hide')
  tabel2.classList.remove('show')

  tabel1.classList.add('show')
  tabel1.classList.remove('hide')
}