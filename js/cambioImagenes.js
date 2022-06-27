function evento(sw){
    var pic;
    if (sw == 1) {
        pic = "/img/slider_3.jpg";
    }else{
        pic = "/img/slider_1.jpg";
    }
    document.getElementById('efecto').src = pic;
}

