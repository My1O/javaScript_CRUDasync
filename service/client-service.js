// http.open (Crud Method, url)
// CRUD = Creat - Post | Read - Get | Update - Put/Patch | Delete - Delete


//fetch API
const listaCliente = () => 
   fetch('http://localhost:3000/perfil').then( (respuesta) => respuesta.json());

export const clientServices = {
  listaCliente,
};
