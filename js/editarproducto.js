import { obtenerproducto, editarproducto } from "./api.js";
import { mostrarAlerta } from "./mostrarAlerta.js";

(function () {
    const nombreInput = document.querySelector('#nombre');
    const precioInput = document.querySelector('#precio');
    const categoriaInput = document.querySelector('#categoria');
    const idInput = document.querySelector('#id');
    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', async () => {
        const parametrosURL = new URLSearchParams(window.location.search);
        const idProducto = parseInt(parametrosURL.get('id'));
        const producto = await obtenerproducto(idProducto);
        mostrarProducto(producto);

        // Registro de la actualización del producto
        formulario.addEventListener('submit', validarProducto);
    });

    function mostrarProducto(producto) {
        const { nombre, precio, categoria, id } = producto;
        nombreInput.value = nombre;
        precioInput.value = precio;
        categoriaInput.value = categoria;
        idInput.value = id;
    }

    async function validarProducto(e) {
        e.preventDefault();
        const producto = {
            nombre: nombreInput.value,
            precio: precioInput.value,
            categoria: categoriaInput.value,
            id: parseInt(idInput.value)
        };

        if (validar(producto)) {
            //console.log('Todos los campos son obligatorios');
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        } else {
            await editarproducto(producto);
            window.location.href = 'index.html';
        }
    }

    function validar(obj) {
        return !Object.values(obj).every(i => i !== '');
    }
})();