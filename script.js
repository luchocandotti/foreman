
// -----------hidden + loader----------


window.onload = function() {
  // Bloquea el scroll
  document.documentElement.style.overflow = "hidden"; 
  document.body.style.overflow = "hidden";

  setTimeout(function() {
      document.getElementById("loader").style.opacity = "0";

      setTimeout(function() {
          document.getElementById("loader").style.display = "none";
          document.getElementById("contentt").classList.add("show");
          document.getElementById("tapa").style.opacity = 0;
          document.getElementById("tapa").style.top = '-3000px';

          // Habilita el scroll
          document.documentElement.style.overflow = "auto"; 
          document.body.style.overflow = "auto";
      }, 1000);
  }, 4000);
};

//Cargar por idioma

(function () { /* esto es una función autoinvocada, sin nombre por eso se invoca al final con () */
  var userLang = navigator.language.slice(0,2) || navigator.userLanguage.slice(0,2);
  
      if (userLang == 'pt' && window.location.pathname != '/indexPt.html') {
          window.location.href = 'indexPt.html';
      } else if (userLang == 'es' && window.location.pathname != '/indexEs.html') {
        window.location.href = 'indexEs.html';
      } else if (userLang == 'en' && window.location.pathname != '/index.html') {
        window.location.href = 'indexEs.html';
    };
  //alert("The language is: " + userLang);
  //console.log(window.location);
  })();

//------------------------------------------

//Abrir y Cerrar menu movil

const buttonm = document.getElementById('m');
let sw = 1;
buttonm.addEventListener("click", (event) => {
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


// Reubicar el scroll con menu movil
const menumElements = [
  { buttonId: "about-m", sectionId: "seccion-about" },
  { buttonId: "services-m", sectionId: "seccion-services" },
  { buttonId: "contact-m", sectionId: "seccion-contact" },
];

menumElements.forEach(({ buttonId, sectionId }) => {
  const button = document.getElementById(buttonId);
  const section = document.getElementById(sectionId);

  button.addEventListener("click", (event) => {
    const msectionPosition = section.getBoundingClientRect().top;
    window.scroll({
      top: msectionPosition-250,
      behavior: "smooth"
    });
    document.getElementById('movil').style.top = "-250px";
    document.getElementById('container').style.marginTop = 0;
    document.getElementById('back').style.top = 0;
    document.getElementById("m").innerHTML = "<a href='#'>=</a>";
    sw = 1;
  });
});

 const menuElements = [
   { buttonId: "about", sectionId: "seccion-about" },
   { buttonId: "services", sectionId: "seccion-services" },
   { buttonId: "contact", sectionId: "seccion-contact" },
 ];

 menuElements.forEach(({ buttonId, sectionId }) => {
   const button = document.getElementById(buttonId);
   const section = document.getElementById(sectionId);

   button.addEventListener("click", (event) => {
     const msectionPosition = section.getBoundingClientRect().top;
     window.scroll({
       top: msectionPosition-50,
       behavior: "smooth"
     });
   });
 });



//Reubicar el scroll de los servicios

const acordionElements = [
  { buttonId: "primero", sectionId: "uno" },
  { buttonId: "segundo", sectionId: "dos" },
  { buttonId: "tercero", sectionId: "tres" },
  { buttonId: "cuarto", sectionId: "cuatro" }
];

acordionElements.forEach(({ buttonId, sectionId }) => {
  const button = document.getElementById(buttonId);
  const section = document.getElementById(sectionId);

  button.addEventListener("click", (event) => {
    const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
    window.scroll({
      top: sectionPosition,
      behavior: "smooth"
    });
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