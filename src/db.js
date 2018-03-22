import {createConnection} from "typeorm"
import {User} from "./User"

modules.export.createConnection = function() {
  return createConnection({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "flask",
    "synchronize": true,
    "logging": false,
    // "entities": [
    //   "src/entity/**/*.ts"
    // ],
    // "migrations": [
    //   "src/migration/**/*.ts"
    // ],
    // "subscribers": [
    //   "src/subscriber/**/*.ts"
    // ]
  })
}