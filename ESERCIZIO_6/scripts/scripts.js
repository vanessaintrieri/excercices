"use strict";

function fromJsonToObject(json) {
   
JSON.parse(json);
}

console.log(fromJsonToObject('{ "user": "logged", "info": { "os": "osx", "ip": "127.0.0.1", "gender": "f"} }'));