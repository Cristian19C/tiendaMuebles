function evento(sw){
    var pic;
    switch (sw) {
        case 1:
            pic = "/img/slider_3.jpg";
            document.getElementById('efecto').src = pic;
            break;
        case 2:   
            pic = "/img/slider_1.jpg";
            document.getElementById('efecto').src = pic;
            break;
        case 3:
            pic = "/img/slider_3.jpg";
            document.getElementById('efecto1').src = pic;
            break;
        case 4:   
            pic = "/img/slider_2.jpg";
            document.getElementById('efecto1').src = pic;
            break;
        case 5:
            pic = "/img/slider_2.jpg";
            document.getElementById('efecto2').src = pic;
            break;
        case 6:   
            pic = "/img/slider_3.jpg";
            document.getElementById('efecto2').src = pic;
            break;
        case 7:
            pic = "/img/slider_1.jpg";
            document.getElementById('efecto3').src = pic;
            break;
        case 8:   
            pic = "/img/slider_3.jpg";
            document.getElementById('efecto3').src = pic;
            break;         
        default:
            break;
    }
}


