const left = document.querySelector('.left');
const right = document.querySelector('.right');
const img = document.querySelector('#slide');
const serial = document.querySelector('.dots');
let imageList = ["01", "02", "03"];
let counter = 0;
serial.innerText = `${counter + 1}/${imageList.length}`;
function goNext(){
    counter++;
    imageChange();
    if(counter === 3){
        counter = 0;
        imageChange();
    }
}
function goPrev(){
  counter--;
  imageChange();
  if(counter === -1){
    counter = 2;
    imageChange();
  }
}
let imageChange = () => {
    img.src = imageList[counter]+".jpg";
    serial.innerText = `${counter + 1}/${imageList.length}`;
};