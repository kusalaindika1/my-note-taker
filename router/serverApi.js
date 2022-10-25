const router = require("express").Router();
const notes = require("../db/db.json");
const {
  noteCreateFun,
  noteDeleteFun,
} = require("../serverFunctions/serverMainFunctions.js");

router.get("/notes", (req, res) => {
  res.json(notes);
});

router.post("/notes", (req, res) => {
  req.body.id = notes.length + 1;
  const data = { ...req.body };
  const note = noteCreateFun(data, notes);
  res.json(note);
});

router.delete("/notes/:id", (req, res) => {
  noteDeleteFun(notes, req.params.id);
  res.json(notes);
});

module.exports = router;
