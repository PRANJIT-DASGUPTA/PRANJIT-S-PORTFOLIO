var typed=new Typed(".text", {
    strings: ["Frontend Developer" , "Android App Developer" ,"Artist" ,"Photographer","Chess Player"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 100,
    loop:true
});
function scrolll() {
    var left = document.querySelector(".scroll-images");
    left.scrollBy(350, 0)
}

function scrollr() {
    var right = document.querySelector(".scroll-images");
    right.scrollBy(-350, 0)
}
