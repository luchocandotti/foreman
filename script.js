
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
  document.getElementById('movil').style.top = "0";
  document.getElementById("m").innerHTML = "<a href='#'>×</a>";
  sw = 2;
} else {
  document.getElementById('movil').style.top = "-250px";
  document.getElementById('container').style.marginTop = "0";
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
    top: services.top-25,
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
    top: services.top+200,
    behavior: "smooth",
  });
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


>>>>>>> dev

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
  top: services.top-25,
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
  top: services.top+200,
  behavior: "smooth",
});
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