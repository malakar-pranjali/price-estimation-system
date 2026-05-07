const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

// SAVE DATA API
app.post("/save", (req, res) => {

  const newData = req.body;

  let oldData = [];

  if (fs.existsSync("data.json")) {

    oldData = JSON.parse(
      fs.readFileSync("data.json")
    );

  }

  oldData.push(newData);

  fs.writeFileSync(
    "data.json",
    JSON.stringify(oldData, null, 2)
  );

  res.json({
    message: "Data Saved Successfully"
  });

});

// HISTORY API
app.get("/history", (req, res) => {

  const data = JSON.parse(
    fs.readFileSync("data.json")
  );

  res.json(data);

});

app.listen(5000, () => {
  console.log("🔥 Server running on http://localhost:5000");
});