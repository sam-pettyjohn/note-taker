const router = require("express").Router();
const store = require("../db/store");

router.get("/api/notes", function(req, res) {
    store
    .returnNote()
    .then(notes => res.json(notes));
});

router.post("/api/notes", (req, res) => {
    store
    .addNote(req.body)
    .then((note) => res.json(note));
});

router.delete("/api/notes/:id", function(req, res) {
    store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }));
});
  
module.exports = router;