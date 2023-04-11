import { clientServices } from "../service/client-service.js";

const crearNuevoRegistro = (nombre, email) => {
    const crearLinea = document.createElement('tr');
    const contenido =
        `
            <td class="td" data-td>${nombre}</td>
            <td>${email}</td>
            <td>
              <ul class="table__button-control">
                <li>
                  <a
                    href="../screens/editar_cliente.html"
                    class="simple-button simple-button--edit"
                    >Editar</a
                  >
                </li>
                <li>
                  <button
                    class="simple-button simple-button--delete"
                    type="button"
                  >
                    Eliminar
                  </button>
                </li>
              </ul>
            </td>
          `;
    crearLinea.innerHTML = contenido;
    return crearLinea;
}
const table = document.querySelector('[data-table]');


clientServices.listaCliente().then((data) => {
    data.forEach((perfil) => {
        const nuevaLinea = crearNuevoRegistro(perfil.nombre, perfil.email);
        table.appendChild(nuevaLinea);
    });
}).catch((error) => {
    alert(`Ocurrio un error con descripcion: ${error}`);
});