import { clientServices } from "../service/client-service.js";

const crearNuevoRegistro = (nombre, email, id) => {
  
  const crearLinea = document.createElement('tr');
  const contenido =
    `
            <td class="td" data-td>${nombre}</td>
            <td>${email}</td>
            <td>
              <ul class="table__button-control">
                <li>
                  <a
                    href="../screens/editar_cliente.html?id=${id}"
                    class="simple-button simple-button--edit"
                    >Editar</a
                  >
                </li>
                <li>
                  <button
                    class="simple-button simple-button--delete"
                    type="button" id="${id}">
                    Eliminar
                  </button>
                </li>
              </ul>
            </td>
          `;
  crearLinea.innerHTML = contenido;
  const btnEliminar = crearLinea.querySelector("button");
  btnEliminar.addEventListener('click', () => {
    const id = btnEliminar.id;
    clientServices.eliminarCliente(id).then( (respuesta) => {
      
    }).catch( (err) => alert("Ocurrio un error"));
  });
  return crearLinea;
}
const table = document.querySelector('[data-table]');


clientServices.listaCliente().then((data) => {
  data.forEach(({ nombre, email, id }) => {
    const nuevaLinea = crearNuevoRegistro(nombre, email, id);
    table.appendChild(nuevaLinea);
  });
}).catch((error) => {
  alert(`Ocurrio un error con descripcion: ${error}`);
});

