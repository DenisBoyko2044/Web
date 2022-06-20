  import React, { useState } from "react";

  export const Sklad = () => {

  
const GETSklad = () => {
  fetch('http://127.0.0.1:8081/sklad')
  .then((response) => {
    return response.json(); 
  })
  .then((data) => {
    let itemList = data;
     let items_table = document.getElementById('table');
     items_table.innerHTML = '<th scope="col">Код</th>  <th scope="col">Код телефону</th> <th scope="col">К-сть на складі</th>';
  for(let i = 0; i < itemList.length; i++)
  { 
      items_table.innerHTML+= '<tr><td>' + itemList[i].id_poz + '</td><td>' + itemList[i].id_teleph + '</td><td>' + itemList[i].k_st + '</td></tr>';
  }
  });
}

const addsklad = () => {
fetch('http://127.0.0.1:8081/addsklad?id_poz=' + id_poz+ '&id_teleph=' + id_teleph + '&k_st='+ k_st)
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
const delsklad = () => {
fetch('http://127.0.0.1:8081/delsklad?table='+ skladdel+'&')
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

const [skladdel, setskladdel] = useState("");
const [id_poz, setid_poz] = useState("");
const [id_teleph, setid_teleph] = useState("");
const [k_st, setk_st] = useState("");


     return(
         <>
         <GETSklad/>
        <table id="table" class="table table-dark"></table>
     <div id="sklad">
<input type="text" value={skladdel} placeholder="skladdel" onChange={(e) => setskladdel(e.target.value)} />
  <input button  type="button" id="btn" value="Видалити запис" onClick={delsklad}/> <br/><br/>
      <input type="text" value={id_poz} placeholder="id_poz" onChange={(e) => setid_poz(e.target.value)} />
      <input type="text" value={id_teleph} placeholder="id_teleph" onChange={(e) => setid_teleph(e.target.value)} />
      <input type="text" value={k_st} placeholder="k_st" onChange={(e) => setk_st(e.target.value)} />
<input button  type="button" id="btn" value="додати запис" onClick= {addsklad}/> <br/><br/>
</div>
     </>
     )
     }
     export default Sklad;