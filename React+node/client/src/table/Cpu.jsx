import React, { useState } from "react";

 export const Cpu  = () => {
  

  const GETCpu = () => {
    fetch('http://127.0.0.1:8081/cpu')
    .then((response) => {
      return response.json(); 
    })
    .then((data) => {
      let itemList = data;
       let items_table = document.getElementById('table');
       items_table.innerHTML = '<th scope="col">Код</th>  <th scope="col">Назва процесору</th>';
    for(let i = 0; i < itemList.length; i++)
    { 
        items_table.innerHTML+= 
        '<tr><td>' + itemList[i].id_cpu 
            +'</td><td>'+itemList[i].name_cpu+'</td></tr>';
    }
    });
  }
  const addcpu = () => {
  fetch('http://127.0.0.1:8081/addcpu?id_cpu=' + id_cpu + '&name_cpu=' + name_cpu)
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
  
  const delcpu = () => {
  fetch('http://127.0.0.1:8081/delcpu?table='+ cpudel+'&')
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
  
  const [cpudel, setcpudel] = useState("");
  const [id_cpu, setid_cpu] = useState("");
  const [name_cpu, setname_cpu] = useState("");
  
    return(
        <>
        <GETCpu/>
       <table id="table" class="table table-dark"></table>
       <div id="cpu">
<input type="text" value={cpudel} placeholder="cpudel" onChange={(e) => setcpudel(e.target.value)} />
  <input button  type="button" id="btn" value="Видалити запис" onClick={delcpu}/> <br/><br/>
      <input type="text" value={id_cpu} placeholder="id_cpu" onChange={(e) => setid_cpu(e.target.value)} />
      <input type="text" value={name_cpu} placeholder="name_cpu" onChange={(e) => setname_cpu(e.target.value)} />
<input button  type="button" id="btn" value="додати запис" onClick= {addcpu}/> <br/><br/>
</div>
    </>
    )
    }
    export default Cpu;