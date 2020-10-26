document.getElementById('placeHolder').innerHTML = "<img src='still_waiting!!.png'>"




function add() {
    var cont = document.getElementById('cont').value;
    var typeNumber = 4;
    var errorCorrectionLevel = 'L';
    var qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(cont);
    qr.make();
    document.getElementById('placeHolder').innerHTML = qr.createImgTag();
}