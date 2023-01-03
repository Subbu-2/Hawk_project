const express = require("express");
const app = express();
var songData = require("./multiData.json")
  
app.get("/api", (req, res) => {
  res.json(songData)
});
  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));