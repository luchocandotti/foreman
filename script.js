

(function () { /* esto es una función autoinvocada, sin nombre por eso se invoca al final con () */
  var userLang = navigator.language.slice(0,2) || navigator.userLanguage.slice(0,2);
  
      if (userLang == 'pt' && window.location.pathname != '/indexPt.html') {
          window.location.href = 'indexPt.html'
      }
  //alert("The language is: " + userLang);
  //console.log(window.location);
  })();




let map;

async function initMap() {
  // The location of Travelog
  const position = { lat: -27.280528, lng: -55.821944 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 10,
    center: position,
    mapId: "TRAVELOG",
    disableDefaultUI: true
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Travelog",
  });
}

initMap();


window.scroll({
  top: 0,
  left: 0,
  behavior: "smooth",
});

const button1 = document.getElementById("empresa");

button1.addEventListener("click", (event) => {
  window.scroll({
    top: 560,
    left: 0,
    behavior: "smooth",
  });
});

const button2 = document.getElementById("contacto");

button2.addEventListener("click", (event) => {
  window.scroll({
    top: 1500,
    left: 0,
    behavior: "smooth",
  });
});

