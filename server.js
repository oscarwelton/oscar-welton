import express from "express";
import path from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express()
const PORT = process.env.PORT || 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
