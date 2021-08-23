document.head = document.head || document.getElementsByTagName('head')[0];
function changeFavicon(src) {
    var link = document.createElement('link'), oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = src;
    if (oldLink) {
        document.head.removeChild(oldLink);
    }
    document.head.appendChild(link);
    }
function animate(){
    if ( typeof animate.i == 'undefined' ) {
        animate.i = 0;
    }
    switch(animate.i) {
        case 0:
            changeFavicon("[PUT BASE64 for ICO FRAME 1 HERE]");
            break;
        case 1:
            changeFavicon("[PUT BASE64 for ICO FRAME 2 HERE]");
            break;
        case 2:
            changeFavicon("[PUT BASE64 for ICO FRAME 3 HERE]");
            break;
        case 3:
            changeFavicon("[PUT BASE64 for ICO FRAME 4 HERE]");
            break;
        case 4:
            changeFavicon("[PUT BASE64 for ICO FRAME 5 HERE]");
            break;
        case 5:
            changeFavicon("[PUT BASE64 for ICO FRAME 6 HERE]");
            break;
        case 6:
            changeFavicon("[PUT BASE64 for ICO FRAME 7 HERE]");
            break;
        case 7:
            changeFavicon("[PUT BASE64 for ICO FRAME 8 HERE]");
            break;
        case 8:
            changeFavicon("[PUT BASE64 for ICO FRAME 9 HERE]");
            break;
        case 9:
            changeFavicon("[PUT BASE64 for ICO FRAME 10 HERE]");
            break;
        case 10:
            changeFavicon("[PUT BASE64 for ICO FRAME 11 HERE]");
            break;
        case 11:
            changeFavicon("[PUT BASE64 for ICO FRAME 12 HERE]");
            break;
        case 12:
            changeFavicon("[PUT BASE64 for ICO FRAME 13 HERE]");
            break;
        case 13:
            changeFavicon("[PUT BASE64 for ICO FRAME 14 HERE]");
            break;
        case 14:
            changeFavicon("[PUT BASE64 for ICO FRAME 15 HERE]");
            break;
        case 15:
            changeFavicon("[PUT BASE64 for ICO FRAME 16 HERE]");
            break;
    }
    animate.i = animate.i + 1;
    if(animate.i == 16){
        animate.i = 0;
    }
}
setInterval(animate,250);