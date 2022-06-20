const http = require("http");
const fs = require("fs");
const { Client } = require('pg')

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'mob_phone',
  password: '1234566',
  port: 5432,
})
client.connect();
http.createServer(function (request, response) {

  if (request.url.split('?')[0] === "/addscreen" && request.method === "GET") {
      const params = request.url.split('?')[1].split('&')
      const id_screen = +params[0].split('=')[1];
      const name_screen = +params[1].split('=')[1];
      let sql = "INSERT INTO screen (id_screen , name_screen) VALUES (" + id_screen + ',' + name_screen + ")";
      client
      .query(sql)
      .then(result => {
        console.log(sql)
        response.writeHead(200, { "Content-Type": "application/json" })
      })
      .catch(e => console.error(e.stack))
      .then(() =>   console.log(sql))
  }
  if (request.url.split('?')[0] === "/delscreen" && request.method === "GET") {
      const params = request.url.split('?')[1].split('&')
      const table_name = +params[0].split('=')[1];
      let sql = "DELETE FROM screen WHERE id_screen =" + table_name;
      client
      .query(sql)
      .then(result => {
        console.log(sql)
        response.writeHead(200, { "Content-Type": "application/json" })
      })
      .catch(e => console.error(e.stack))
      .then(() =>   console.log(sql))
  }

  if (request.url.split('?')[0] === "/addcpu" && request.method === "GET") {
      const params = request.url.split('?')[1].split('&')
      const id_cpu = +params[0].split('=')[1];
      const name_cpu = +params[1].split('=')[1];
      let sql = "INSERT INTO cpu (id_cpu , name_cpu) VALUES (" + id_cpu + ',' + name_cpu + ")";
      client
      .query(sql)
      .then(result => {
        console.log(sql)
        response.writeHead(200, { "Content-Type": "application/json" })
      })
      .catch(e => console.error(e.stack))
      .then(() =>   console.log(sql))
  }
  if (request.url.split('?')[0] === "/delcpu" && request.method === "GET") {
      const params = request.url.split('?')[1].split('&')
      const table_name = +params[0].split('=')[1];
      let sql = "DELETE FROM cpu WHERE id_cpu =" + table_name;
      client
      .query(sql)
      .then(result => {
        console.log(sql)
        response.writeHead(200, { "Content-Type": "application/json" })
      })
      .catch(e => console.error(e.stack))
      .then(() =>   console.log(sql))
  }

  if (request.url.split('?')[0] === "/addbrend" && request.method === "GET") {
      const params = request.url.split('?')[1].split('&')
      const id_brend = +params[0].split('=')[1];
      const name_brend = +params[1].split('=')[1];
      let sql = "INSERT INTO brend (id_brend , name_brend) VALUES (" + id_brend + ',' + name_brend + ")";
      client
      .query(sql)
      .then(result => {
        console.log(sql)
        response.writeHead(200, { "Content-Type": "application/json" })
      })
      .catch(e => console.error(e.stack))
      .then(() =>   console.log(sql))
  }
  if (request.url.split('?')[0] === "/delbrend" && request.method === "GET") {
      const params = request.url.split('?')[1].split('&')
      const table_name = +params[0].split('=')[1];
      let sql = "DELETE FROM brend WHERE id_brend =" + table_name;
      client
      .query(sql)
      .then(result => {
        console.log(sql)
        response.writeHead(200, { "Content-Type": "application/json" })
      })
      .catch(e => console.error(e.stack))
      .then(() =>   console.log(sql))
  }

  if (request.url.split('?')[0] === "/addsklad" && request.method === "GET") {
      const params = request.url.split('?')[1].split('&')
      const id_poz = +params[0].split('=')[1];
      const id_teleph = +params[1].split('=')[1];
      const k_st = +params[2].split('=')[1];
      let sql = "INSERT INTO sklad (id_poz , id_teleph,k_st) VALUES (" + id_poz + ',' + id_teleph + ',' + k_st + ")";
      client
      .query(sql)
      .then(result => {
        console.log(sql)
        response.writeHead(200, { "Content-Type": "application/json" })
      })
      .catch(e => console.error(e.stack))
      .then(() =>   console.log(sql))
  }
  if (request.url.split('?')[0] === "/desklad" && request.method === "GET") {
      const params = request.url.split('?')[1].split('&')
      const table_name = +params[0].split('=')[1];
      let sql = "DELETE FROM sklad WHERE id_poz =" + table_name;
      client
      .query(sql)
      .then(result => {
        console.log(sql)
        response.writeHead(200, { "Content-Type": "application/json" })
      })
      .catch(e => console.error(e.stack))
      .then(() =>   console.log(sql))
  }

  if (request.url.split('?')[0] === "/addoperation" && request.method === "GET") {
      const params = request.url.split('?')[1].split('&')
      const id_operation = +params[0].split('=')[1];
      const id_client = +params[1].split('=')[1];
      const id_teleph = +params[2].split('=')[1];
      let sql = "INSERT INTO operation (id_operation , id_client,id_teleph) VALUES (" + id_operation + ',' + id_client + ',' + id_teleph + ")";
      client
      .query(sql)
      .then(result => {
        console.log(sql)
        response.writeHead(200, { "Content-Type": "application/json" })
      })
      .catch(e => console.error(e.stack))
      .then(() =>   console.log(sql))
  }

  if (request.url.split('?')[0] === "/deloperation" && request.method === "GET") {
      const params = request.url.split('?')[1].split('&')
      const table_name = +params[0].split('=')[1];
      let sql = "DELETE FROM operation WHERE id_operation =" + table_name;
      client
      .query(sql)
      .then(result => {
        console.log(sql)
        response.writeHead(200, { "Content-Type": "application/json" })
      })
      .catch(e => console.error(e.stack))
      .then(() =>   console.log(sql))
}

  if (request.url.split('?')[0] === "/addclient" && request.method === "GET") {
      const params = request.url.split('?')[1].split('&')
      const id_client = +params[0].split('=')[1];
      const PIB_client = +params[1].split('=')[1];
      const teleph = +params[2].split('=')[1];
      let sql = "INSERT INTO client (id_client , pib_client,teleph) VALUES (" + id_client + ',' + PIB_client + ',' + teleph + ")";
      client
      .query(sql)
      .then(result => {
        console.log(sql)
        response.writeHead(200, { "Content-Type": "application/json" })
      })
      .catch(e => console.error(e.stack))
      .then(() =>   console.log(sql))
  }

  if (request.url.split('?')[0] === "/delclient" && request.method === "GET") {
      const params = request.url.split('?')[1].split('&')
      const table_name = +params[0].split('=')[1];
      let sql = "DELETE FROM client WHERE id_client =" + table_name;
      client
      .query(sql)
      .then(result => {
        console.log(sql)
        response.writeHead(200, { "Content-Type": "application/json" })
      })
      .catch(e => console.error(e.stack))
      .then(() =>   console.log(sql))
  }

  if (request.url.split('?')[0] === "/addteleph" && request.method === "GET") {
      const params = request.url.split('?')[1].split('&')
      const id_teleph = +params[0].split('=')[1];
      const model_teleph =+params[1].split('=')[1];
      const id_brend = +params[2].split('=')[1];
      const id_cpu = +params[3].split('=')[1];
      const id_screen = +params[4].split('=')[1];
      let sql = 'INSERT INTO teleph (id_teleph , model_teleph,id_brend,id_cpu,id_screen) VALUES (' + id_teleph + ',' + model_teleph + ',' + id_brend + ',' + id_cpu + ',' + id_screen + '); select * from teleph'; 
    client
      .query(sql)
      .then(result => {
        console.log(sql)
        response.writeHead(200, { "Content-Type": "application/json" })
      })
      .catch(e => console.error(e.stack))
      .then(() =>   console.log(sql))
  }


  if (request.url.split('?')[0] === "/delteleph" && request.method === "GET") {
      const params = request.url.split('?')[1].split('&')
      const table_name = +params[0].split('=')[1];
      let sql = "DELETE FROM teleph WHERE id_teleph =" + table_name;
      client
      .query(sql)
      .then(result => {
        console.log(sql)
        response.writeHead(200, { "Content-Type": "application/json" })
      })
      .catch(e => console.error(e.stack))
      .then(() =>   console.log(sql))
  }

  ///////////////////////

  else if (request.url === "/brend" && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "application/json" });
    let mas = [];
    let row
    client
      .query('SELECT * FROM brend')
      .then(result => {
        for (row of result.rows) { mas.push(row); }
        response.end(JSON.stringify(mas));
        response.end();
      })
      .catch(e => console.error(e.stack))
      .then(() => console.log('Успішно'))
  }

  else if (request.url === "/screen" && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "application/json" });
    let mas = [];
    let row
    client
      .query('SELECT * FROM screen')
      .then(result => {
        for (row of result.rows) { mas.push(row); }
        response.end(JSON.stringify(mas));
        response.end();
      })
      .catch(e => console.error(e.stack))
      .then(() => console.log('Успішно'))
  }

  else if (request.url === "/cpu" && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "application/json" });
    let mas = [];
    let row
    client
      .query('SELECT * FROM cpu')
      .then(result => {
        for (row of result.rows) { mas.push(row); }
        response.end(JSON.stringify(mas));
        response.end();
      })
      .catch(e => console.error(e.stack))
      .then(() => console.log('Успішно'))
  }

  else if (request.url === "/sklad" && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "application/json" });
    let mas = [];
    let row
    client
      .query('SELECT * FROM skald')
      .then(result => {
        for (row of result.rows) { mas.push(row); }
        response.end(JSON.stringify(mas));
        response.end();
      })
      .catch(e => console.error(e.stack))
      .then(() => console.log('Успішно'))
  }

  else if (request.url === "/teleph" && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "application/json" });
    let mas = [];
    let row
    client
      .query('SELECT * FROM teleph')
      .then(result => {
        for (row of result.rows) { mas.push(row); }
        response.end(JSON.stringify(mas));
        response.end();
      })
      .catch(e => console.error(e.stack))
      .then(() => console.log('Успішно'))
  }
  else if (request.url === "/teleph" && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "application/json" });
    let mas = [];
    let row
    client
      .query('SELECT * FROM teleph')
      .then(result => {
        for (row of result.rows) { mas.push(row); }
        response.end(JSON.stringify(mas));
        response.end();
      })
      .catch(e => console.error(e.stack))
      .then(() => console.log('Успішно'))
  }

  else if (request.url === "/client" && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "application/json" });
    let mas = [];
    let row
    client
      .query('SELECT * FROM client')
      .then(result => {
        for (row of result.rows) { mas.push(row); }
        response.end(JSON.stringify(mas));
        response.end();
      })
      .catch(e => console.error(e.stack))
      .then(() => console.log('Успішно'))
  }

  else if (request.url === "/teleph_view" && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "application/json" });
    let mas = [];
    let row
    client
      .query('SELECT * FROM teleph_view')
      .then(result => {
        for (row of result.rows) { mas.push(row); }
        response.end(JSON.stringify(mas));
        response.end();
      })
      .catch(e => console.error(e.stack))
      .then(() => console.log('Успішно'))
  }

  else if (request.url === "/operation" && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "application/json" });
    let mas = [];
    let row
    client
      .query('SELECT * FROM operation')
      .then(result => {
        for (row of result.rows) { mas.push(row); }
        response.end(JSON.stringify(mas));
        response.end();
      })
      .catch(e => console.error(e.stack))
      .then(() => console.log('Успішно'))
  }


  if (request.url === "/" && request.method === "GET") {
    const filePath = "index.html";
    fs.access(filePath, fs.constants.R_OK, err => {
      if (err) {
        response.statusCode = 404;
        response.end("Resourse not found!");
      }
      else {
        fs.createReadStream(filePath).pipe(response);
      }
    });
  }
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/'); 