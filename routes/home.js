const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

router.get("/", async (req, res) => {
  return res.status(200).json({
    title: "heroku for LeftOverMarketPlace",
    message: "working",
    message2: "this is the home route"
  });
});


router.get("/1", async (req, res) => {
  console.log("inside 1")
  const returnhtml=`<form action="/upload" method="post" enctype="multipart/form-data">
  <label for="file">File:</label>
  <input type="file" id="file" name="file" required />
  <button style="grid-column: span 2;" type="submit">Share</button>
</form>`
  res.send(returnhtml)
  console.log(file)
 });

module.exports = router;