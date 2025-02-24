const texto = document.getElementById('contador').textContent;
const numero = parseInt(texto);
let num=2000;
function contador(){
    if(num<numero){
        num++;
    }
    document.getElementById('contador').innerHTML=num
}
setInterval(function(){contador()},0.1)

//contador2
const texto2 = document.getElementById('contador2').textContent;
const numero2 = parseInt(texto2);
let num2=0;
function contador2(){
    if(num2<numero2){
        num2++;
    }
    document.getElementById('contador2').innerHTML=num2
}
setInterval(function(){contador2()},250)

//contador3
const texto3 = document.getElementById('contador3').textContent;
const numero3 = parseInt(texto3);
let num3=0;
function contador3(){
    if(num3<numero3){
        num3++;
    }
    document.getElementById('contador3').innerHTML=num3
}
setInterval(function(){contador3()},20)

//contador4
const texto4 = document.getElementById('contador4').textContent;
const numero4 = parseInt(texto4);
let num4=0;
function contador4(){
    if(num4<numero4){
        num4++;
    }
    document.getElementById('contador4').innerHTML=num4
}
setInterval(function(){contador4()},100)

//contador5
const texto5 = document.getElementById('contador5').textContent;
const numero5 = parseInt(texto5);
let num5=0;
function contador5(){
    if(num5<numero5){
        num5++;
    }
    document.getElementById('contador5').innerHTML=num5
}
setInterval(function(){contador5()},300)

//frame
var modal = document.getElementById("myModal");
var btn = document.getElementById("botaoMostrarVideo");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    document.getElementById("videoIframe").src = "https://www.youtube.com/embed/IO_coGrunVM?si=3yIBebmeea9Ui2P9";  // Coloque o link do vídeo aqui
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
    document.getElementById("videoIframe").src = "";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("videoIframe").src = "";
    }
}

//menubar

class MobileNavBar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu); 
        this.navList = document.querySelector(navList); 
        this.navLinks = document.querySelector(navLinks); 
        this.activeClass = "active";
        
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();