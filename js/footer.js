/**
 * Created by Administrator on 2017/7/21 0021.
 */
var btn=document.querySelector(".btn");
var daohang=document.querySelector(".show-daohang")
var close=document.querySelector(".close")
btn.addEventListener('touchstart',touch,false);
function touch(){
    daohang.style.display="block"
}
close.addEventListener("touchstart",touch2,false)
function touch2(){
    daohang.style.display="none"
}