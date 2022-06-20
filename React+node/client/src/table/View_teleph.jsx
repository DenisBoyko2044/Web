import React, { useState } from "react";

 export const View_teleph  = () => {
    const GETView_teleph = () => {
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
    return(
        <>
        <GETView_teleph/>
       <table id="table" class="table table-dark"></table>
    </>
    )
    }
    export default View_teleph;