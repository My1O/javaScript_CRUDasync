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


// http.open (Crud Method, url)
// CRUD = Creat - Post | Read - Get | Update - Put/Patch | Delete - Delete

const listaCliente = () => {
    const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.open('GET', 'http://localhost:3000/perfil');
        http.send();

        http.onload = () => {
            const response = JSON.parse(http.response);
            if(http.status >= 400){
                reject(response);
            }else{
                resolve(response);
            }
        };
    });

    return promise;
};

listaCliente().then((data) => {
    data.forEach((perfil) => {
        const nuevaLinea = crearNuevoRegistro(perfil.nombre, perfil.email);
        table.appendChild(nuevaLinea);
    });
}).catch((error) => {
    alert(`Ocurrio un error con descripcion: ${error}`);
})


/* const http2 = new XMLHttpRequest();
    http2.open('GET', 'http://localhost:3000/perfil/hoy');
    http2.send();

    http2.onload = () => {
        const data2 = JSON.parse(http2.response);
    } */
