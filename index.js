const express = require("express");
const path = require("path");
const serverHtmlFiles = require("./router/serverHTMLFiles.js");
const serverApi = require("./router/serverApi.js");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use("/api", serverApi);
app.use("/", serverHtmlFiles);

app.listen(PORT, () => console.log("server running....."));
