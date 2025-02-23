const http = require('http');
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const port = 3000;
const publicFolder = path.join(__dirname, 'public'); // Default static folder

console.log("Starting the server...");

const server = http.createServer((req, res) => {
    const requestedFile = path.join(publicFolder, req.url);
    if (fs.existsSync(requestedFile) && fs.statSync(requestedFile).isFile()) {
        console.log(`Serving static file: ${requestedFile}`);
        const ext = path.extname(requestedFile).toLowerCase();
        let contentType = 'text/plain';

        if (ext === '.html') contentType = 'text/html';
        if (ext === '.css') contentType = 'text/css';
        if (ext === '.js') contentType = 'application/javascript';
        if (ext === '.png') contentType = 'image/png';
        if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';

        res.writeHead(200, { 'Content-Type': contentType });
        fs.createReadStream(requestedFile).pipe(res);
        return;
    }

    if (req.url === "/" || req.url === "/index.html") {
        const filePath = path.join(__dirname, 'public','index.html');

        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error loading index.html');
                return;
            }

            const dom = new JSDOM(data);
            const document = dom.window.document;

            const arrParts = ['public/avatar/expresion_facial',
                              'public/avatar/complemento'];

            var ficheros = [];
            try {
                for( part of arrParts){
                  ficheros.push(fs.readdirSync(part));  
                }
            } catch (error) {
              console.log(error.message);
            }

            const canva = document.createElement('div');
            canva.setAttribute('id', 'canva');

            const facialExpresion = document.createElement('div');
            facialExpresion.setAttribute('id','facialExpresion');
            facialExpresion.style.backgroundImage = 'url('+arrParts[0].substring(7)+'/'+ficheros[0]+')';

            const head = document.createElement('div');
            head.setAttribute('id', 'head');

           
            var name = document.createElement('p');
            name.setAttribute('id', 'name');

            let infor = 'Dale nombre a tu avatar!';

            try {
              infor = fs.readFileSync('./public/avatar/nombre.txt', 'utf8');
            } catch (error) {
              console.log("Fichero no encontrado seguir pasos descritros en README.md para poner nombre al emoji");
              console.log(error);
            }
            name.textContent = infor;
            canva.appendChild(name); 

            head.appendChild(facialExpresion);
            const styleElement = document.createElement('style');

            let files = {};
            for (let part of arrParts) {
                try {
                    let fullPath = path.join(__dirname, part);
                    files[part] = fs.readdirSync(fullPath);
                } catch (error) {
                }
            }


            styleElement.textContent = `
                @font-face {
                  font-family: "flor";
                  src: url("OpenSans-Regular.ttf") format("truetype");
                }
                body {
                  background-color: #1a1a1a;
                  display: flex;
                  min-height: 100vh;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  font-family: "flor";
                }
                p {
                  color: #eab960;
                  font-size: 32px;
                }
                #canva {
                  display: flex;
                  flex-direction: column;
                  background-color: transparent;
                  height: auto;
                  width: 300px;
                }
                #head {
                  position: relative;
                  border-radius: 50%;
                  background-color: rgb(245,245,245);
                  width: 300px;
                  height: 300px;
                }
                #facialExpresion {
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);
                  background-size: cover;
                  background-position: center;
                  background-repeat: no-repeat;
                  width: 200px;
                  height: 150px;
                }
                #name {
                  text-align: center;
                  font-family: "flor";
                }
            `;

            document.head.appendChild(styleElement);
            canva.appendChild(head);
            document.body.appendChild(canva);

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(dom.serialize());
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server is running on ➡️ http://localhost:${port}`);
});

