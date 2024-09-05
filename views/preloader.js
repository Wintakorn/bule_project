function active() {
    setTimeout(showpage, 3000);
}

function showpage() {
    document.getElementById('preloader').style.display = 'none';
    document.getElementById('page-content').style.display = 'block';
}
