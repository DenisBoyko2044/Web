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

    if (request.url === "/teleph" && request.method === "GET") {
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