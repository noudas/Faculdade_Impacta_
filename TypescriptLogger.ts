/*

Carlos Eduardo Santana
Jonathan Kahan
Luís Henrique
Rafael Rezende
Silvan Souza Nascimento

*/

import * as http from 'http';

function loggerBuilder(prefix: string) {
    return (txt: string) => console.log(`${prefix}[Log de logs]: ${txt}`);
}

class Logger {
private _prefix: string;
  
constructor(prefix: string) {
    this._prefix = prefix;
}

  log(message: string) {
      console.log(this._prefix + "[Log de logs]: " + message);
  }

  get prefix() {
      return this._prefix;
  }

  set prefix(newPrefix: string) {
          if (newPrefix === <string>this._prefix) {
              console.log('bidipi bodipi não sei o que eu to fazendo...');
              return;
          }
          this._prefix = newPrefix;
      }
  }

const logger = new Logger("INFO");
logger.log("bidipi bodipi");


const server = http.createServer((_req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});
const port = 3000;
const hostname = "0.0.0.0"
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
