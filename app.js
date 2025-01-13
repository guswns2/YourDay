const express = require("express");
const app = express();
const router = require("./router/router");
const bodyParser = require("body-parser");
const session = require("express-session");
const session_mysql_save = require("express-mysql-session");
const path = require("path");
const cors = require("cors");
app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());

let dbInfo = {
  // DB 정보
  host: "project-db-stu.ddns.net",
  user: "campus_h_1024_4",
  password: "smhrd4",
  port: "3307",
  database: "campus_h_1024_4",
};
let SMS = new session_mysql_save(dbInfo);
app.use(
  session({
    secret: "smart",
    resave: false,
    saveUninitialized: true,
    store: SMS,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
app.listen(3001, () => {
  console.log("Server is running. Port: 3001")
});