export function mostrarAlerta(mensaje) {
    const alerta = document.getElementById('.bg-red-100');
    if (!alerta) {
        const alert = document.createElement('p');
        alert.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
        alert.innerHTML = mensaje;
        formulario.appendChild(alert);
    
        setTimeout(() => {
            alert.remove();
        }, 3000);
    }
}