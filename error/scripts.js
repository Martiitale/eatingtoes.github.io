document.addEventListener('DOMContentLoaded', function () {
    const enlace = document.getElementById('texto');
    const container = document.getElementById('container');
    const imagen = document.getElementById('puerta');
  
    enlace.addEventListener('click', function (e) {
      e.preventDefault(); // Previene que siga el enlace
  
      if (enlace.textContent === 'A lo mejor no estoy del todo cansado, pero nunca lo sabrás si no me haces clic.') {
        container.style.display = "none";
        imagen.style.display = "block";
        imagen.style.animation = "abrirPuerta 3s ease-out forwards";
      } else if (enlace.textContent === 'Ya está, me enfadé, ya no vuelvo a cambiar.') {
        enlace.textContent = 'A lo mejor no estoy del todo cansado, pero nunca lo sabrás si no me haces clic.';
      } else if (enlace.textContent === "Pulsame otra vez y te mato") {
        enlace.textContent = 'Ya está, me enfadé, ya no vuelvo a cambiar.';
      } else if (enlace.textContent === "Deberías dejar de gastar energías.") {
        enlace.textContent = 'Pulsame otra vez y te mato';
      } else if (enlace.textContent === "Por que sigues?") {
        enlace.textContent = 'Deberías dejar de gastar energías.';
      } else if (enlace.textContent === "JiJi") {
        enlace.textContent = 'Por que sigues?';
      } else if (enlace.textContent === "Esta página no existe") {
        enlace.textContent = 'JiJi';
      }
    });
  });