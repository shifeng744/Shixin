/**
 * Created by Administrator on 2017/7/22.
 */
window.onload = function () {
    var oBox1 = document.getElementById("big1");

    function fn1(id, url) {
        var id = document.getElementById(id);
        id.onmouseover = function () {
            oBox1.style.background = url;
        }
    }
    fn1("li1", "url(images/tab1.png)");
    fn1("li2", "url(images/tab2.png)");
    fn1("li3", "url(images/tab1.png)");
    fn1("li4", "url(images/tab2.png)");

    var oBox2 = document.getElementById("big2");

    function fn2(id, url) {
        var id = document.getElementById(id);
        id.onmouseover = function () {
            oBox2.style.background = url;
        }
    }
    fn2("li5", "url(images/tab1.png)");
    fn2("li6", "url(images/tab2.png)");
    fn2("li7", "url(images/tab1.png)");
    fn2("li8", "url(images/tab2.png)");
};

