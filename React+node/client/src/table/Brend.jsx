import React, { useState } from "react";

 export const Brend  = () => {
  const GETBrend = () => {
    fetch('http://127.0.0.1:8081/brend')
    .then((response) => {
      return response.json(); 
    })
    .then((data) => {
      let itemList = data;
       let items_table = document.getElementById('table');
       console.log(itemList);
       items_table.innerHTML = '<th scope="col">Код</th>  <th scope="col">Назва Бренду</th>';
    for(let i = 0; i < itemList.length; i++)
    { 
        items_table.innerHTML+= '<tr><td>' + itemList[i].id_brend + '</td><td>' + itemList[i].name_brend+'</td></tr>';
    }
    });
}
const delbrend = () => {
    let table_name = brenddel
    fetch('http://127.0.0.1:8081/delbrend?table='+ brenddel+'&')
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
const addbrend = () => {
fetch('http://127.0.0.1:8081/addbrend?id_brend='+id_brend+ '&name_brend='+name_brend+'&')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
});
let items_table = document.getElementById('table');
items_table.innerHTML='';
console.log('Успіх');
console.log(id_brend);
console.log(name_brend);
}

const [brenddel, setbrenddel] = useState("");
const [id_brend, setid_brend] = useState("");
const [name_brend, setname_brend] = useState("");
    return(
        <>
        <GETBrend/>
       <table id="table" class="table table-dark"></table>
    <div id="brend">
      <input type="text" value={brenddel} placeholder="brenddel" onChange={(e) => setbrenddel(e.target.value)} />
  <input button  type="button" id="btn" value="Видалити запис" onClick={delbrend}/> <br/><br/>
      <input type="text" value={id_brend} placeholder="id_brend" onChange={(e) => setid_brend(e.target.value)} />
      <input type="text" value={name_brend} placeholder="name_brend" onChange={(e) => setname_brend(e.target.value)} />
<input button  type="button" id="btn" value="додати запис" onClick= {addbrend}/> <br/><br/>
</div>
    </>
    )
    }
    export default Brend;