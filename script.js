//Botones del menu que llevan a las secciones

window.scroll({
  top: 0,
  left: 0,
  behavior: "smooth",
});

const button0 = document.getElementById("m");
let sw = 1;
button0.addEventListener("click", (event) => {
if (sw==1) {
  document.getElementById('container').style.marginTop = "325px";
  document.getElementById('back').style.top = "250px";
  document.getElementById('movil').style.top = 0;
  document.getElementById("m").innerHTML = "<a href='#'>×</a>";
  sw = 2;
} else {
  document.getElementById('movil').style.top = "-250px";
  document.getElementById('container').style.marginTop = 0;
  document.getElementById('back').style.top = 0;
  document.getElementById("m").innerHTML = "<a href='#'>=</a>";
  sw = 1;
}

});

const button1 = document.getElementById("about");
const about = document.getElementById("seccion-about").getBoundingClientRect();

button1.addEventListener("click", (event) => {
window.scroll({
  top: about.top-100,
  behavior: "smooth",
});
console.log(about);
});

const button1m = document.getElementById("about-m");

button1m.addEventListener("click", (event) => {
window.scroll({
  top: about.top-50,
  behavior: "smooth",
});
document.getElementById('movil').style.top = "-250px";
document.getElementById('container').style.marginTop = "0";
document.getElementById("m").innerHTML = "<a href='#'>=</a>";
sw = 1;
});

const button2 = document.getElementById("services");
const services = document.getElementById("seccion-services").getBoundingClientRect();

button2.addEventListener("click", (event) => {
window.scroll({
  top: services.top-70,
  behavior: "smooth",
});
});

const button2m = document.getElementById("services-m");

button2m.addEventListener("click", (event) => {
window.scroll({
  top: services.top-50,
  behavior: "smooth",
});
document.getElementById('movil').style.top = "-250px";
document.getElementById('container').style.marginTop = "0";
document.getElementById("m").innerHTML = "<a href='#'>=</a>";
sw = 1;
});

const button3 = document.getElementById("contact");
const contact = document.getElementById("seccion-contact").getBoundingClientRect();

button3.addEventListener("click", (event) => {
window.scroll({
  top: contact.top,
  behavior: "smooth",
});
});

const button3m = document.getElementById("contact-m");

button3m.addEventListener("click", (event) => {
window.scroll({
  top: contact.top+100,
  behavior: "smooth",
});
console.log(contact.top);
document.getElementById('movil').style.top = "-250px";
document.getElementById('container').style.marginTop = "0";
document.getElementById("m").innerHTML = "<a href='#'>=</a>";
sw = 1;
});

//Reubicar el scroll de los servicios
const button4 = document.getElementById("primero");
const acordion1 = document.getElementById("uno").getBoundingClientRect();

button4.addEventListener("click", (event) => {
window.scroll({
  top: acordion1.top,
  behavior: "smooth",
});
});

const button5 = document.getElementById("segundo");
const acordion2 = document.getElementById("dos").getBoundingClientRect();

button5.addEventListener("click", (event) => {
window.scroll({
  top: acordion2.top,
  behavior: "smooth",
});
});

const button6 = document.getElementById("tercero");
const acordion3 = document.getElementById("tres").getBoundingClientRect();

button6.addEventListener("click", (event) => {
window.scroll({
  top: acordion3.top,
  behavior: "smooth",
});
});

const button7 = document.getElementById("cuarto");
const acordion4 = document.getElementById("cuatro").getBoundingClientRect();

button7.addEventListener("click", (event) => {
window.scroll({
  top: acordion4.top,
  behavior: "smooth",
});
});



//ANIMACIÓN CARD PERFILES
const perfil = document.getElementById("perfil1");

perfil.addEventListener("click", (event) => {
const element = document.getElementById("perfil2");
document.getElementById("titulo1").style.display = 'none';
document.getElementById("titulo2").style.display = 'contents';
    element.style.top = "0px";
    element.style.zIndex = "0";
    element.style.opacity = "100%";

    const element3 = document.getElementById("perfil3");
    element3.style.top = "40px";
    element3.style.zIndex = "-1";
    element3.style.opacity = "60%";

    const element4 = document.getElementById("perfil4");
    element4.style.top = "80px";
    element4.style.zIndex = "-2";
    element4.style.opacity = "40%";
  
    const element2 = document.getElementById("perfil1");
    element2.style.top = "120px";
    element2.style.zIndex = "-3";
    element2.style.opacity = "20%";
});

const perfil2 = document.getElementById("perfil2");

perfil2.addEventListener("click", (event) => {
  const element = document.getElementById("perfil3");
  document.getElementById("titulo2").style.display = 'none';
  document.getElementById("titulo3").style.display = 'contents';
  element.style.top = "0px";
  element.style.zIndex = "0";
  element.style.opacity = "100%";
  
  const element3 = document.getElementById("perfil4");
  element3.style.top = "40px";
  element3.style.zIndex = "-1";
  element3.style.opacity = "60%";
  
  const element4 = document.getElementById("perfil1");
  element4.style.top = "80px";
  element4.style.zIndex = "-2";
  element4.style.opacity = "40%";
  
  const element2 = document.getElementById("perfil2");
  element2.style.top = "120px";
  element2.style.zIndex = "-3";
  element2.style.opacity = "20%";
});

const perfil3 = document.getElementById("perfil3");

perfil3.addEventListener("click", (event) => {
  const element = document.getElementById("perfil4");
  document.getElementById("titulo3").style.display = 'none';
  document.getElementById("titulo4").style.display = 'contents';
  element.style.top = "0px";
  element.style.zIndex = "0";
  element.style.opacity = "100%";
  
  const element3 = document.getElementById("perfil1");
  element3.style.top = "40px";
  element3.style.zIndex = "-1";
  element3.style.opacity = "60%";
  
  const element4 = document.getElementById("perfil2");
  element4.style.top = "80px";
  element4.style.zIndex = "-2";
  element4.style.opacity = "40%";
  
  const element2 = document.getElementById("perfil3");
  element2.style.top = "120px";
  element2.style.zIndex = "-3";
  element2.style.opacity = "20%";
});

const perfil4 = document.getElementById("perfil4");

perfil4.addEventListener("click", (event) => {
  const element = document.getElementById("perfil1");
  document.getElementById("titulo4").style.display = 'none';
  document.getElementById("titulo1").style.display = 'contents';
  element.style.top = "0px";
  element.style.zIndex = "0";
  element.style.opacity = "100%";
  
  const element3 = document.getElementById("perfil2");
  element3.style.top = "40px";
  element3.style.zIndex = "-1";
  element3.style.opacity = "60%";
  
  const element4 = document.getElementById("perfil3");
  element4.style.top = "80px";
  element4.style.zIndex = "-2";
  element4.style.opacity = "40%";
  
  const element2 = document.getElementById("perfil4");
  element2.style.top = "120px";
  element2.style.zIndex = "-3";
  element2.style.opacity = "20%";
});