
// -----------hidden + loader----------


window.onload = function() {
  setTimeout(function() {
      document.getElementById("loader").style.opacity = "0";

      setTimeout(function() {
          document.getElementById("loader").style.display = "none";
          document.getElementById("contentt").classList.add("show");
        document.getElementById("tapa").style.opacity = 0;
        document.getElementById("tapa").style.top = '-3000px';
      }, 1000);
  }, 4000);
};

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
    const msectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
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
     const msectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
     window.scroll({
       top: msectionPosition-50,
       behavior: "smooth"
     });
   });
 });


// const button1 = document.getElementById("about");
// const about = document.getElementById("seccion-about").getBoundingClientRect();

// button1.addEventListener("click", (event) => {
//   window.scroll({
//     top: about.top-100,
//     behavior: "smooth",
//   });
//   console.log(about);
// });

// const button1m = document.getElementById("about-m");

// button1m.addEventListener("click", (event) => {
//   window.scroll({
//     top: about.top-50,
//     behavior: "smooth",
//   });
//   document.getElementById('movil').style.top = "-250px";
//   document.getElementById('container').style.marginTop = "0";
//   document.getElementById("m").innerHTML = "<a href='#'>=</a>";
//   sw = 1;
// });

// const button2 = document.getElementById("services");
// const services = document.getElementById("seccion-services").getBoundingClientRect();

// button2.addEventListener("click", (event) => {
//   window.scroll({
//     top: services.top-70,
//     behavior: "smooth",
//   });
// });

// const button2m = document.getElementById("services-m");

// button2m.addEventListener("click", (event) => {
//   window.scroll({
//     top: services.top-25,
//     behavior: "smooth",
//   });
//   document.getElementById('movil').style.top = "-250px";
//   document.getElementById('container').style.marginTop = "0";
//   document.getElementById("m").innerHTML = "<a href='#'>=</a>";
//   sw = 1;
// });

// const button3 = document.getElementById("contact");
// const contact = document.getElementById("seccion-contact").getBoundingClientRect();

// button3.addEventListener("click", (event) => {
//   window.scroll({
//     top: contact.top,
//     behavior: "smooth",
//   });
// });

// const button3m = document.getElementById("contact-m");

// button3m.addEventListener("click", (event) => {
//   window.scroll({
//     top: services.top+200,
//     behavior: "smooth",
//   });
//   document.getElementById('movil').style.top = "-250px";
//   document.getElementById('container').style.marginTop = "0";
//   document.getElementById("m").innerHTML = "<a href='#'>=</a>";
//   sw = 1;
// });

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



// const button4 = document.getElementById("primero");//
// const acordion1 = document.getElementById("uno").getBoundingClientRect();

// const button5 = document.getElementById("segundo");
// const acordion2 = document.getElementById("dos").getBoundingClientRect();

// const button6 = document.getElementById("tercero");
// const acordion3 = document.getElementById("tres").getBoundingClientRect();

// const button7 = document.getElementById("cuarto");
// const acordion4 = document.getElementById("cuatro").getBoundingClientRect();

//button4.addEventListener("click", (event) => {
  //window.scroll({
    //top: acordion1.top,
    //behavior: "smooth",
  //});
//});



//button5.addEventListener("click", (event) => {
//  window.scroll({
//    top: acordion2.top,
//    behavior: "smooth",
//  });
//});



// button6.addEventListener("click", (event) => {
//   window.scroll({
//     top: acordion3.top,
//     behavior: "smooth",
//   });
// });



// button7.addEventListener("click", (event) => {
//   window.scroll({
//     top: acordion4.top,
//     behavior: "smooth",
//   });
// });



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