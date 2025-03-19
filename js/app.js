import { obtenerProductos, eliminarProducto } from "./api.js";

// Selectores
const listado = document.querySelector('#listado-Productos');
// Eventos
document.addEventListener('DOMContentLoaded', mostrarProductos);
listado.addEventListener('click', confirmarEliminar);

// Función para mostrar los productos en la tabla
async function mostrarProductos() {
    const producto = await obtenerProductos();
    console.log(producto);
    
    producto.forEach(i => {
        const { nombre, precio, categoria, id } = i;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6 py-4 border-b">
                <p>${nombre}</p>
            </td>
            <td class="px-6 py-4 border-b">
                <p>${precio}</p>
            </td>
            <td class="px-6 py-4 border-b">
                <p>${categoria}</p>
            </td>
            <td class="px-6 py-4 border-b">
                <a href="editar-producto.html?id=${id}" class="text-teal-600 hover:text-teal-900">Editar</a>
                <a href="#" data-producto="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
            </td>
        `;

        listado.appendChild(row);
    });
} 

// Función para confirmar la eliminación de un producto
async function confirmarEliminar(e) {
    if (e.target.classList.contains('eliminar')) {
        const productoID = parseInt(e.target.dataset.producto);
        const confirmar = confirm('¿Quieres eliminar este producto?');

        if (confirmar) {
            try {
                await eliminarProducto(productoID);
                mostrarProductos(); // Refresca la lista después de eliminar
            } catch (error) {
                console.error('Error al eliminar el producto:', error);
                alert('Hubo un error al eliminar el producto. Por favor, intenta de nuevo.');
            }
        }
    }
}

