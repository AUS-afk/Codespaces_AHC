// Script para cambiar el color de fondo al hacer clic en el botón
document.getElementById('changeColorBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
});

// Función para generar un color aleatorio en formato hexadecimal
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
