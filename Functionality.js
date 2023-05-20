var show = document.getElementById('show');
var GridDiv = document.getElementById('GridDiv');
var mainDiv = document.getElementById('MainDiv');
show.addEventListener('click', function() {
    GridDiv.style.display = 'grid';
    show.style.display='none';
    mainDiv.style.marginBottom='none';
    GridDiv.style.marginTop = 'none';
});