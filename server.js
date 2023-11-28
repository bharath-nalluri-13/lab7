const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/itc505/lab7", (req, res) => {
  const { noun, adjective, verb, pluralNoun, adverb } = req.body;

  const madLib = `Grab your ${adjective} ${noun} and ${adverb} ${verb} to NAU University. Explore the ${adjective} SBS building, and the ${adjective} engineering building. If you need fitness, head to the HLC for ${adjective} games, and other cool ${pluralNoun}.`;

  res.send(madLib);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.get("/style.css", (req, res) => {
  res.sendFile(__dirname + "/style.css");
});
