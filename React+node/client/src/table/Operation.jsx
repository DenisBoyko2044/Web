import React, { useState } from "react";

 export const Operation  = () => {
  

  const GETOperation = () => {
    fetch('http://127.0.0.1:8081/operation')
    .then((response) => {
      return response.json(); 
    })
    .then((data) => {
      let itemList = data;
       let items_table = document.getElementById('table');
       items_table.innerHTML = '<th scope="col">Код</th>  <th scope="col">Клієнт</th> <th scope="col">Телефон</th>';
    for(let i = 0; i < itemList.length; i++)
    { 
        items_table.innerHTML+= '<tr><td>' + itemList[i].id_operation + '</td><td>' + itemList[i].id_client+ '</td><td>' + itemList[i].id_teleph  + '</td></tr>';
    }
    });
   
  }
  
  const addoperation = () => {
  fetch('http://127.0.0.1:8081/addoperation?id_operation=' + id_operation + '&id_client=' + id_client + '&id_teleph='+ id_teleph)
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
  const deloperation = () => {
  fetch('http://127.0.0.1:8081/deloperation?table='+ operationdel+'&')
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
  
  const [operationdel, setoperationdel] = useState("");
  const [id_operation, setid_operation] = useState("");
   const [id_client, setid_client] = useState("");
   const [id_teleph, setid_teleph] = useState("");
  
    return(
        <>
       <GETOperation/>
       <table id="table" class="table table-dark"></table>
       <div id="operation">
<input type="text" value={operationdel} placeholder="operationdel" onChange={(e) => setoperationdel(e.target.value)} />
  <input button  type="button" id="btn" value="Видалити запис" onClick={deloperation}/> <br/><br/>
      <input type="text" value={id_operation} placeholder="id_operation" onChange={(e) => setid_operation(e.target.value)} />
      <input type="text" value={id_client} placeholder="id_client" onChange={(e) => setid_client(e.target.value)} />
      <input type="text" value={id_teleph} placeholder="id_teleph" onChange={(e) => setid_teleph(e.target.value)} />
<input button  type="button" id="btn" value="додати запис" onClick= {addoperation}/> <br/><br/>
</div>
    </>
    )
    }
    export default Operation;

   