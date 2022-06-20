import { Brend } from './table/Brend';
import { Client } from './table/Client';
import { Cpu } from './table/Cpu';
import { Operation } from './table/Operation';
import { Sklad } from './table/Sklad';
import { Skreen } from './table/Skreen';
import { Teleph } from './table/Teleph';
import { View_teleph } from './table/View_teleph';
import {Button, input} from "react-bootstrap";
import React, { useState } from "react";

export const Nav = () => {


  
///////brend//////////////////

  const Getbrend = () => {
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

////////Client////////

const Client = () => {
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

////////CPU////////

const Cpu = () => {
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

////////////////Operation//////////////

const Operation = () => {
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
// const [id_client, setid_client] = useState("");
// const [id_teleph, setid_teleph] = useState("");

/////////////Sklad////////////////

const Sklad = () => {
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


////////////////Screen/////////////////

const Skreen = () => {
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
// const [id_screen, setid_screen] = useState("");
const [name_screen, setname_screen] = useState("");

////////////////Teleph/////////////////

const Teleph = () => {
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
// const [id_teleph, setid_teleph] = useState("");
const [model_teleph, setmodel_teleph] = useState("");
// const [id_brend, setid_brend] = useState("");
// const [id_cpu, setid_cpu] = useState("");
const [id_screen, setid_screen] = useState("");

/////////////View_teleph///////////////

const View_teleph = () => {
fetch('http://127.0.0.1:8081/teleph_view')
.then((response) => {
  return response.json(); 
})
.then((data) => {
  let itemList = data;
   let items_table = document.getElementById('table');
   items_table.innerHTML = '<th scope="col">Код</th>  <th scope="col">Назва бренду</th> <th scope="col">модель</th><th scope="col">Процесор</th><th scope="col">Дисплей</th>';
for(let i = 0; i < itemList.length; i++)
{ 
    items_table.innerHTML+= '<tr><td>' + itemList[i].id_teleph + '</td><td>'+ itemList[i].name_brend + '</td><td>'+ itemList[i].model_teleph+ '</td><td>'+ itemList[i].name_cpu + '</td><td>' + itemList[i].name_screen+ '</td></tr>';
}
});
}
/////////////////////
    return(
   <>
    <div>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item">
        <a class="nav-link" onClick={Getbrend}>Brend</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" onClick={Client}>Client</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={Cpu}>Cpu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={Teleph}>Teleph</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={Skreen}>Screen</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={Sklad}>Sklad</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={Operation}>Operation</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={View_teleph}>Teleph_view</a>
        </li>
    </ul>
  </div>
</nav>
    
    <table id="table" class="table table-dark"></table>
    <div id="brend">
      <input type="text" value={brenddel} placeholder="brenddel" onChange={(e) => setbrenddel(e.target.value)} />
  <input button  type="button" id="btn" value="Видалити запис" onClick={delbrend}/> <br/><br/>
      <input type="text" value={id_brend} placeholder="id_brend" onChange={(e) => setid_brend(e.target.value)} />
      <input type="text" value={name_brend} placeholder="name_brend" onChange={(e) => setname_brend(e.target.value)} />
<input button  type="button" id="btn" value="додати запис" onClick= {addbrend}/> <br/><br/>
</div>

<div id="client">
<input type="text" value={clientdel} placeholder="clientdel" onChange={(e) => setclientdel(e.target.value)} />
  <input button  type="button" id="btn" value="Видалити запис" onClick={delclient}/> <br/><br/>
      <input type="text" value={id_client} placeholder="id_client" onChange={(e) => setid_client(e.target.value)} />
      <input type="text" value={pib_client} placeholder="pib_client" onChange={(e) => setpib_client(e.target.value)} />
      <input type="text" value={teleph} placeholder="teleph" onChange={(e) => setteleph(e.target.value)} />
<input button  type="button" id="btn" value="додати запис" onClick= {addclient}/> <br/><br/>
</div>

<div id="cpu">
<input type="text" value={cpudel} placeholder="cpudel" onChange={(e) => setcpudel(e.target.value)} />
  <input button  type="button" id="btn" value="Видалити запис" onClick={delcpu}/> <br/><br/>
      <input type="text" value={id_cpu} placeholder="id_cpu" onChange={(e) => setid_cpu(e.target.value)} />
      <input type="text" value={name_cpu} placeholder="name_cpu" onChange={(e) => setname_cpu(e.target.value)} />
<input button  type="button" id="btn" value="додати запис" onClick= {addcpu}/> <br/><br/>
</div>

<div id="operation">
<input type="text" value={operationdel} placeholder="operationdel" onChange={(e) => setoperationdel(e.target.value)} />
  <input button  type="button" id="btn" value="Видалити запис" onClick={deloperation}/> <br/><br/>
      <input type="text" value={id_operation} placeholder="id_operation" onChange={(e) => setid_operation(e.target.value)} />
      <input type="text" value={id_client} placeholder="id_client" onChange={(e) => setid_client(e.target.value)} />
      <input type="text" value={id_teleph} placeholder="id_teleph" onChange={(e) => setid_teleph(e.target.value)} />
<input button  type="button" id="btn" value="додати запис" onClick= {addoperation}/> <br/><br/>
</div>

<div id="sklad">
<input type="text" value={skladdel} placeholder="skladdel" onChange={(e) => setskladdel(e.target.value)} />
  <input button  type="button" id="btn" value="Видалити запис" onClick={delsklad}/> <br/><br/>
      <input type="text" value={id_poz} placeholder="id_poz" onChange={(e) => setid_poz(e.target.value)} />
      <input type="text" value={id_teleph} placeholder="id_teleph" onChange={(e) => setid_teleph(e.target.value)} />
      <input type="text" value={k_st} placeholder="k_st" onChange={(e) => setk_st(e.target.value)} />
<input button  type="button" id="btn" value="додати запис" onClick= {addsklad}/> <br/><br/>
</div>

<div id="screen">
<input type="text" value={screendel} placeholder="screendel" onChange={(e) => setscreendel(e.target.value)} />
  <input button  type="button" id="btn" value="Видалити запис" onClick={delscreen}/> <br/><br/>
      <input type="text" value={id_screen} placeholder="id_screen" onChange={(e) => setid_screen(e.target.value)} />
      <input type="text" value={name_screen} placeholder="name_screen" onChange={(e) => setname_screen(e.target.value)} />
<input button  type="button" id="btn" value="додати запис" onClick= {addscreen}/> <br/><br/>
</div>

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
</div>
   </>
    )
    }
    export default Nav;