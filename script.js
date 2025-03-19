const gift = document.getElementById('gift');
const abrirBtn = document.getElementById('abrirBtn');
const papel = document.querySelector('.papel');

abrirBtn.addEventListener('click', () => {
    gift.classList.toggle('abierta'); // Abrir el regalo
    papel.innerHTML = "<p>Cargando el regalo...</p>"; // Mostrar el mensaje

    // Después de 4 segundos, redirigir a otra página
    setTimeout(() => {
        window.location.href = "registro.html"; // Redirige a la página 'registro.html'
    }, 4000); // 4000 milisegundos = 4 segundos
});
