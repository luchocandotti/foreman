window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
});
  
const button1 = document.getElementById("about");

button1.addEventListener("click", (event) => {
  window.scroll({
    top: 600,
    left: 0,
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