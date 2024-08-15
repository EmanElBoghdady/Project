let img = document.querySelector('#img');
let container = document.querySelector('.wrapp');
function roses(src){
    img.src = src;
}
function background(src){
   container.style.backgroundImage = ` url("${src}")`;
   container.style.backgroundSize = 'cover';
   container.style.backgroundRepeat = 'no-repeat';
   const imgsrc = src;
   container.style.setBackgroundImage(imgsrc , 0.1);



}
    


