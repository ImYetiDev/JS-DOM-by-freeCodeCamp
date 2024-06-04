const boton = document.querySelector('button');
const color = document.getElementById('color');

function generarColor() {
  let digitos = '0123456789ABCDEF';
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    hex += digitos[Math.floor(Math.random() * 16)];
  }
  return hex;
}

boton.addEventListener('click', () => {
  let nuevoColor = generarColor();
  color.textContent = nuevoColor;
  document.body.style.backgroundColor = nuevoColor;
});