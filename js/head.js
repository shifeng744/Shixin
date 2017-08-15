var openBtn=document.querySelector(".head-three");
var show =document.querySelector(".dao");
var img=document.getElementById("myImage")
var off=true;
openBtn.addEventListener('touchstart',touch,false);
function touch(){
    if(off){
        img.src="images/head-04.png";
        show.style.display="block";
        off=false;
    }else{
        img.src="images/head03.jpg";
        off=true;
        show.style.display="none";
    }
}
