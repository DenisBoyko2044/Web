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
client.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

http.createServer(function (request, response) {

  if (request.url.split('?')[0] === "/addscreen" && request.method === "GET") {
    try {
      const params = request.url.split('?')[1].split('&')
      const id_screen = +params[0].split('=')[1];
      const name_screen = +params[1].split('=')[1];
      let query = "INSERT INTO screen (id_screen , name_screen) VALUES ("+id_screen+','+name_screen+")";
    client.query(query); 
     response.writeHead(200, { "Content-Type": "application/json" });
    } catch (error) {
     response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: error }));
}
  }
if (request.url.split('?')[0] === "/delscreen" && request.method === "GET") {
    try {
      const params = request.url.split('?')[1].split('&')
      const table_name = +params[0].split('=')[1];
      let query = "DELETE FROM screen WHERE id_screen ="+table_name;
    client.query(query); 
     response.writeHead(200, { "Content-Type": "application/json" });
    } catch (error) {
     response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: error }));
}
  }

  if (request.url.split('?')[0] === "/addcpu" && request.method === "GET") {
    try {
      const params = request.url.split('?')[1].split('&')
      const id_cpu = +params[0].split('=')[1];
      const name_cpu = +params[1].split('=')[1];
      let query = "INSERT INTO cpu (id_cpu , name_cpu) VALUES ("+id_cpu+','+name_cpu+")";
    client.query(query); 
     response.writeHead(200, { "Content-Type": "application/json" });
    } catch (error) {
     response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: error }));
}
  }
if (request.url.split('?')[0] === "/delcpu" && request.method === "GET") {
    try {
      const params = request.url.split('?')[1].split('&')
      const table_name = +params[0].split('=')[1];
      let query = "DELETE FROM cpu WHERE id_cpu ="+table_name;
    client.query(query); 
     response.writeHead(200, { "Content-Type": "application/json" });
    } catch (error) {
     response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: error }));
}
  }

  if (request.url.split('?')[0] === "/addbrend" && request.method === "GET") {
    try {
      const params = request.url.split('?')[1].split('&')
      const id_brend = +params[0].split('=')[1];
      const name_brend = +params[1].split('=')[1];
      let query = "INSERT INTO brend (id_brend , name_brend) VALUES ("+id_brend+','+name_brend+")";
    client.query(query); 
     response.writeHead(200, { "Content-Type": "application/json" });
    } catch (error) {
     response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: error }));
}
  }
if (request.url.split('?')[0] === "/delbrend" && request.method === "GET") {
    try {
      const params = request.url.split('?')[1].split('&')
      const table_name = +params[0].split('=')[1];
      let query = "DELETE FROM brend WHERE id_brend ="+table_name;
    client.query(query); 
     response.writeHead(200, { "Content-Type": "application/json" });
    } catch (error) {
     response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: error }));
}
  }

  if (request.url.split('?')[0] === "/addsklad" && request.method === "GET") {
    try {
      const params = request.url.split('?')[1].split('&')
      const id_poz = +params[0].split('=')[1];
      const id_teleph = +params[1].split('=')[1];
      const k_st = +params[2].split('=')[1];
      let query = "INSERT INTO sklad (id_poz , id_teleph,k_st) VALUES ("+id_poz+','+id_teleph+','+k_st+")";
    client.query(query); 
     response.writeHead(200, { "Content-Type": "application/json" });
    } catch (error) {
     response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: error }));
}
  }
if (request.url.split('?')[0] === "/desklad" && request.method === "GET") {
    try {
      const params = request.url.split('?')[1].split('&')
      const table_name = +params[0].split('=')[1];
      let query = "DELETE FROM sklad WHERE id_poz ="+table_name;
    client.query(query); 
     response.writeHead(200, { "Content-Type": "application/json" });
    } catch (error) {
     response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: error }));
}
  }

  if (request.url.split('?')[0] === "/addoperation" && request.method === "GET") {
    try {
      const params = request.url.split('?')[1].split('&')
      const id_operation = +params[0].split('=')[1];
      const id_client = +params[1].split('=')[1];
      const id_teleph = +params[2].split('=')[1];
      let query = "INSERT INTO operation (id_operation , id_client,id_teleph) VALUES ("+id_operation+','+id_client+','+id_teleph+")";
    client.query(query); 
     response.writeHead(200, { "Content-Type": "application/json" });
    } catch (error) {
     response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: error }));
}
  }
if (request.url.split('?')[0] === "/deloperation" && request.method === "GET") {
    try {
      const params = request.url.split('?')[1].split('&')
      const table_name = +params[0].split('=')[1];
      let query = "DELETE FROM operation WHERE id_operation ="+table_name;
    client.query(query); 
     response.writeHead(200, { "Content-Type": "application/json" });
    } catch (error) {
     response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: error }));
}
  }

  if (request.url.split('?')[0] === "/addclient" && request.method === "GET") {
    try {
      const params = request.url.split('?')[1].split('&')
      const id_client = +params[0].split('=')[1];
      const PIB_client = +params[1].split('=')[1];
      const teleph = +params[2].split('=')[1];
      let query = "INSERT INTO client (id_client , pib_client,teleph) VALUES ("+id_client+','+PIB_client+','+teleph+")";
    client.query(query); 
     response.writeHead(200, { "Content-Type": "application/json" });
    } catch (error) {
     response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: error }));
}
  }
  if (request.url.split('?')[0] === "/delclient" && request.method === "GET") {
    try {
      const params = request.url.split('?')[1].split('&')
      const table_name = +params[0].split('=')[1];
      let query = "DELETE FROM client WHERE id_client ="+table_name;
    client.query(query); 
     response.writeHead(200, { "Content-Type": "application/json" });
    } catch (error) {
     response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: error }));
}
  }

  if (request.url.split('?')[0] === "/addteleph" && request.method === "GET") {
    try {
      const params = request.url.split('?')[1].split('&')
      const id_teleph = +params[0].split('=')[1];
      const model_teleph = +params[1].split('=')[1];
      const id_brend = +params[2].split('=')[1];
      const id_cpu = +params[3].split('=')[1];
      const id_screen = +params[4].split('=')[1];
      let query = "INSERT INTO teleph (id_teleph , model_teleph,id_brend,id_cpu,id_screen) VALUES ("+id_teleph+','+model_teleph+','+id_brend+','+id_cpu+','+id_screen+")";
    client.query(query); 
     response.writeHead(200, { "Content-Type": "application/json" });
    } catch (error) {
     response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: error }));
}
  }
  if (request.url.split('?')[0] === "/delteleph" && request.method === "GET") {
    try {
      const params = request.url.split('?')[1].split('&')
      const table_name = +params[0].split('=')[1];
      let query = "DELETE FROM teleph WHERE id_teleph ="+table_name;
    client.query(query); 
     response.writeHead(200, { "Content-Type": "application/json" });
    } catch (error) {
     response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: error }));
}
  }

  else if (request.url === "/brend" && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "application/json" });
    let query = `
      SELECT *
      FROM brend
      `;
    let mas = [];
    client.query(query, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      let row
      for (row of res.rows) {
        mas.push(row);
      }
      response.end(JSON.stringify(mas));
      response.end();
    });
  }
  else if (request.url === "/screen" && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "application/json" });
    let query = `
      SELECT *
      FROM screen
      `;
    let mas = [];
    client.query(query, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      let row
      for (row of res.rows) {
        mas.push(row);
      }
      response.end(JSON.stringify(mas));
      response.end();
    });
  }
  else if (request.url === "/cpu" && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "application/json" });
    let query = `
      SELECT *
      FROM cpu
      `;
    let mas = [];
    client.query(query, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      let row
      for (row of res.rows) {
        mas.push(row);
      }
      response.end(JSON.stringify(mas));
      response.end();
    });
  }
  else if (request.url === "/sklad" && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "application/json" });
    let query = `
      SELECT *
      FROM skald
      `;
    let mas = [];
    client.query(query, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      let row
      for (row of res.rows) {
        mas.push(row);
      }
      response.end(JSON.stringify(mas));
      response.end();
    });
  }
  else if (request.url === "/teleph" && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "application/json" });
    let query = `
      SELECT *
      FROM teleph
      `;
    let mas = [];
    client.query(query, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      let row
      for (row of res.rows) {
        mas.push(row);
      }
      response.end(JSON.stringify(mas));
      response.end();
    });
  }
  else if (request.url === "/client" && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "application/json" });
    let query = `
      SELECT *
      FROM client
      `;
    let mas = [];
    client.query(query, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      let row
      for (row of res.rows) {
        mas.push(row);
      }
      response.end(JSON.stringify(mas));
      response.end();
    });
  }
  else if (request.url === "/teleph_view" && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "application/json" });
    let query = `
      SELECT *
      FROM teleph_view
      `;
    let mas = [];
    client.query(query, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      let row
      for (row of res.rows) {
        mas.push(row);
      }
      response.end(JSON.stringify(mas));
      response.end();
    });
  }
  else if (request.url === "/operation" && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "application/json" });
    let query = `
      SELECT *
      FROM operation
      `;
    let mas = [];
    client.query(query, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      let row
      for (row of res.rows) {
        mas.push(row);
      }
      response.end(JSON.stringify(mas));
      response.end();
    });
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