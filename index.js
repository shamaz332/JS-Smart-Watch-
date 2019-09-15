function blackImage() {
    document.getElementById("band").src = 'https://i.imgur.com/iOeUBV7.png'
}
function redImage() {
    document.getElementById("band").src = 'https://i.imgur.com/PTgQlim.png'

}
function blueImage() {
    document.getElementById("band").src = 'https://i.imgur.com/Mplj1YR.png'

}
function parpleImage() {
    document.getElementById("band").src = 'https://i.imgur.com/xSIK4M8.png'

}
function getTime() {

    var currentDate = new Date();
    var hours = currentDate.getHours();
    var mins = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    document.getElementById('crttime').innerHTML = +hours + ":" + mins + ":" + seconds;
    setTimeout(function () { getTime() }, 1000);
}
getTime();
function timevisible() {
    document.getElementById('heart').style.display='none';
    document.getElementById('crttime').style.display='block'
  
}
function heartvisible() {
    document.getElementById('heart').style.display = 'block';
    document.getElementById('crttime').style.display = 'none'
} 