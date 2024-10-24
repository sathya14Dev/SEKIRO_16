// Ambil elemen modal dengan ID 'id01'
var modal1 = document.getElementById('id01');
var modal2 = document.getElementById('id02');

// Ketika pengguna mengklik di luar modal, tutup modal tersebut
window.onclick = function(event) {
    // Periksa jika elemen yang diklik adalah modal
    if (event.target === modal1) {
        // Ubah gaya tampilan modal menjadi 'none' untuk menyembunyikannya
        modal1.style.display = "none";
    }
    else if (event.target === modal2) {
        // Ubah gaya tampilan modal menjadi 'none' untuk menyembunyikannya
        modal2.style.display = "none";
    }
};

history.pushState(null,null,window.location.href);

window.openState = function() {
    history.pushState(null,null,window.location.href)
};


document.addEventListener('DOMContentLoaded', function () {
    const loginModal = document.getElementById('id01');
    const registerModal = document.getElementById('id02');
    const openRegister = document.getElementById('openRegister');
    const openLogin = document.getElementById('openLogin');
    const registerLogin = document.getElementById('registerLogin');

    openRegister.addEventListener('click', function (event) {
        event.preventDefault();
        loginModal.style.display = 'none';
        registerModal.style.display = 'block';
    });

    openLogin.addEventListener('click', function (event) {
        event.preventDefault();
        loginModal.style.display = 'block';
        registerModal.style.display = 'none';
    });

    registerLogin.addEventListener('click', function (event) {
        event.preventDefault(); // Mencegah pengiriman form
        registerModal.style.display = 'none';
        loginModal.style.display = 'block';
    });
});