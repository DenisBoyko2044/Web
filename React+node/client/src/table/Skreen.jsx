import React, { useState } from "react";
export const Skreen = () => {

  const GETScreen = () => {
    fetch('http://127.0.0.1:8081/screen')
    .then((response) => {
      return response.json(); 
    })
    .then((data) => {
      let itemList = data;
       let items_table = document.getElementById('table');
       items_table.innerHTML = '<th scope="col">Код</th>  <th scope="col">Тип екрану</th>';
    for(let i = 0; i < itemList.length; i++)
    { 
        items_table.innerHTML+= '<tr><td>' + itemList[i].id_screen + '</td><td>' + itemList[i].name_screen+ '</td></tr>';
    }
    });
  }
  const addscreen = () => {
  fetch('http://127.0.0.1:8081/addscreen?id_screen=' + id_screen + '&name_screen=' + name_screen)
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
  const delscreen = () => {
  fetch('http://127.0.0.1:8081/delscreen?table='+ screendel+'&')
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
  
  const [screendel, setscreendel] = useState("");
   const [id_screen, setid_screen] = useState("");
  const [name_screen, setname_screen] = useState("");


     return(
         <>
         <GETScreen/>
        <table id="table" class="table table-dark"></table>
        <div id="screen">
<input type="text" value={screendel} placeholder="screendel" onChange={(e) => setscreendel(e.target.value)} />
  <input button  type="button" id="btn" value="Видалити запис" onClick={delscreen}/> <br/><br/>
      <input type="text" value={id_screen} placeholder="id_screen" onChange={(e) => setid_screen(e.target.value)} />
      <input type="text" value={name_screen} placeholder="name_screen" onChange={(e) => setname_screen(e.target.value)} />
<input button  type="button" id="btn" value="додати запис" onClick= {addscreen}/> <br/><br/>
</div>
     </>
     )
     }
     export default Skreen;