import React, { useState } from "react";

 export const Client  = () => {
  
const GETClient = () => {
  fetch('http://127.0.0.1:8081/client')
  .then((response) => {
    return response.json(); 
  })
  .then((data) => {
    let itemList = data;
     let items_table = document.getElementById('table');
     items_table.innerHTML = '<th scope="col">Код</th>  <th scope="col">ПІБ клієнта</th> <th scope="col">Телефон</th>';
  for(let i = 0; i < itemList.length; i++)
  { 
      items_table.innerHTML+= 
      '<tr><td>' + itemList[i].id_client 
      + '</td><td>' + itemList[i].pib_client
      + '</td><td>'+ itemList[i].teleph +'</tr>';
  }
  });
}
const addclient = () => {
fetch('http://127.0.0.1:8081/addclient?id_client=' + id_client + '&PIB_client=' + pib_client + '&teleph='+ teleph)
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
});
let items_table = document.getElementById('table');
items_table.innerHTML='';
console.log('Успіх');
}
const delclient = () => {
  fetch('http://127.0.0.1:8081/delclient?table='+ clientdel+'&')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
  let items_table = document.getElementById('table');
  items_table.innerHTML='';
  console.log('Успіх');
}

const [clientdel, setclientdel] = useState("");
const [id_client, setid_client] = useState("");
const [pib_client, setpib_client] = useState("");
const [teleph, setteleph] = useState("");

    return(
        <>
        <GETClient/>
       <table id="table" class="table table-dark"></table>
       <div id="client">
<input type="text" value={clientdel} placeholder="clientdel" onChange={(e) => setclientdel(e.target.value)} />
  <input button  type="button" id="btn" value="Видалити запис" onClick={delclient}/> <br/><br/>
      <input type="text" value={id_client} placeholder="id_client" onChange={(e) => setid_client(e.target.value)} />
      <input type="text" value={pib_client} placeholder="pib_client" onChange={(e) => setpib_client(e.target.value)} />
      <input type="text" value={teleph} placeholder="teleph" onChange={(e) => setteleph(e.target.value)} />
<input button  type="button" id="btn" value="додати запис" onClick= {addclient}/> <br/><br/>
</div>
    </>
    )
    }
    export default Client;