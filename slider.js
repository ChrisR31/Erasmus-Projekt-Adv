
let slideIndex = 1;
showSlide(slideIndex);

 function chooseSlide(n){
     showSlide(slideIndex = n);
 };

 function plusSlide(n){
    showSlide(slideIndex += n)
 }

 function showSlide(n){
     let i
     let slides = document.getElementsByClassName("section-5-slider-img")
     let buttons = document.getElementsByClassName("section-5-slider-button")
     if(n > slides.length){slideIndex = 1}
     if(n < 1){slideIndex = slides.length}
     for(i = 0; i < slides.length; i++){
         slides[i].style.display = "none"
     }

     for(i = 0; i < buttons.length; i++){
         buttons[i].className = buttons[i].className.replace(" section-5-slider-button-choosed", "")

     }
     slides[slideIndex-1].style.display = "block"
     buttons[slideIndex-1].className += " section-5-slider-button-choosed"
 }