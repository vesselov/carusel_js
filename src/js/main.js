let arrowLeft  = document.getElementById('arrow-Left'),
    arrowRight = document.getElementById('arrow-Right'),
    sliderImg = document.getElementById('slider-img'),
    dotwWrap = document.getElementsByClassName('slider-dots')[0],
    dots = document.getElementsByClassName('dot'),
    left = -400,
    imgWidth = 200;
    //стартовая позиция
sliderImg.style.left = left + 'px';

slideTo = (derection) =>{
    if (derection =="left") left -= imgWidth;
    
    if(derection == "right")    left += imgWidth; 
    if (left < -800 ) left =0;
    if  (left > 0 ) left = -800;
    sliderImg.style.left = left + "px";
}
arrowLeft.addEventListener('click',()=>{
    slideTo('left');
})
arrowRight.addEventListener('click',()=>{
    slideTo('right');
})
