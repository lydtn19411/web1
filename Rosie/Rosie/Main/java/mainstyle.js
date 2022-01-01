﻿function changePagination(type, element) {
    let pages = document.getElementsByClassName('page-item');
    for (i = 0; i < pages.length; i++) {
        pages[i].style.background = "#ffffff";
    }
    element.style.background = "#8B3A62";

}

var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small_img");
SmallImg[0].onclick = function () {
    ProductImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function () {
    ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function () {
    ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function () {
    ProductImg.src = SmallImg[3].src;
}
SmallImg[4].onclick = function () {
    ProductImg.src = SmallImg[4].src;
}


function menu_list(type, element) {
    console.log('element');

    switch (type) {
        case 'menu':
            document.getElementById('menu_hor').style.display = 'block';
            break;
        case 'menu_none':
            document.getElementById('menu_hor').style.display = 'none';
            break;
    }

}

function changeaccDonhang(type, element) {
    let pages = document.getElementsByClassName('tab-item');
    for (i = 0; i < pages.length; i++) {
        pages[i].style.color = "#000000";
    }
    element.style.color = "#8B3A62";

    document.getElementById(type).style.display = 'block';
    switch (type) {
        case 'chuathanhtoan':
            document.getElementById('daxacnhan').style.display = 'none';
            document.getElementById('danggiao').style.display = 'none';
            document.getElementById('dagiao').style.display = 'none';
            document.getElementById('dahuy').style.display = 'none';
            break;
        case 'daxacnhan':
            document.getElementById('chuathanhtoan').style.display = 'none';
            document.getElementById('danggiao').style.display = 'none';
            document.getElementById('dagiao').style.display = 'none';
            document.getElementById('dahuy').style.display = 'none';
            break;
        case 'danggiao':
            document.getElementById('daxacnhan').style.display = 'none';
            document.getElementById('chuathanhtoan').style.display = 'none';
            document.getElementById('dagiao').style.display = 'none';
            document.getElementById('dahuy').style.display = 'none';
            break;
        case 'dagiao':
            document.getElementById('daxacnhan').style.display = 'none';
            document.getElementById('danggiao').style.display = 'none';
            document.getElementById('chuathanhtoan').style.display = 'none';
            document.getElementById('dahuy').style.display = 'none';
            break;
        case 'dahuy':
            document.getElementById('daxacnhan').style.display = 'none';
            document.getElementById('danggiao').style.display = 'none';
            document.getElementById('chuathanhtoan').style.display = 'none';
            document.getElementById('dagiao').style.display = 'none';
            break;

    }

}



