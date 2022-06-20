import React, { useState } from "react";
export const Teleph = () => {

  
const GETTeleph = () => {
  fetch('http://127.0.0.1:8081/teleph')
  .then((response) => {
    return response.json(); 
  })
  .then((data) => {
    let itemList = data;
     let items_table = document.getElementById('table');
     items_table.innerHTML = '<th scope="col">Код</th> <th scope="col">Назва моделі</th> <th scope="col">код бренду</th> <th scope="col">код процесору</th><th scope="col">код типу екрану</th>';
  for(let i = 0; i < itemList.length; i++)
  { 
      items_table.innerHTML+= '<tr><td>' + itemList[i].id_teleph + '</td><td>' + itemList[i].model_teleph  + '</td><td>' + itemList[i].id_brend + '</td><td>' + itemList[i].id_cpu + '</td><td>' + itemList[i].id_screen + '</td></tr>';
  }
  });
}

const addteleph = () => {
fetch('http://127.0.0.1:8081/addteleph?id_teleph=' + id_teleph + '&model_teleph=' + model_teleph+ '&id_brend='+ id_brend+ '&id_id_cpu='+ id_cpu+ '&id_screen='+ id_screen)
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
const delteleph = () => {
fetch('http://127.0.0.1:8081/delteleph?table='+ telephdel+'&')
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

const [telephdel, settelephdel] = useState("");
 const [id_teleph, setid_teleph] = useState("");
const [model_teleph, setmodel_teleph] = useState("");
 const [id_brend, setid_brend] = useState("");
 const [id_cpu, setid_cpu] = useState("");
const [id_screen, setid_screen] = useState("");


     return(
         <>
         <GETTeleph/>
        <table id="table" class="table table-dark"></table>
<div id="teleph">
<input type="text" value={telephdel} placeholder="telephdel" onChange={(e) => settelephdel(e.target.value)} />
  <input button  type="button" id="btn" value="Видалити запис" onClick={delteleph}/> <br/><br/>
      <input type="text" value={id_teleph} placeholder="id_teleph" onChange={(e) => setid_teleph(e.target.value)} />
      <input type="text" value={model_teleph} placeholder="model_teleph" onChange={(e) => setmodel_teleph(e.target.value)} />
      <input type="text" value={id_brend} placeholder="id_brend" onChange={(e) => setid_brend(e.target.value)} />
      <input type="text" value={id_cpu} placeholder="id_cpu" onChange={(e) => setid_cpu(e.target.value)} />
      <input type="text" value={id_screen} placeholder="id_screen" onChange={(e) => setid_screen(e.target.value)} />
<input button  type="button" id="btn" value="додати запис" onClick= {addteleph}/> <br/><br/>
</div>
     </>
     )
     }
     export default Teleph;