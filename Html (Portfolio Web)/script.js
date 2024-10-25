

//navbar side
document.addEventListener('DOMContentLoaded', () => {
    const myMenu = document.getElementById('mymenu');
    const navbarDiv = document.querySelector('.navbar_div');

    myMenu.addEventListener('click', function() { //menambah event jika mymenu di klik
        navbarDiv.classList.toggle('active'); // Menambahkan atau menghapus kelas active
    
    });

    myMenu.onclick = () => {
        myMenu.classList.toggle('active'); //animasi menu di klik
    }
});
