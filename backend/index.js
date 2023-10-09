const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const bookRouter = require("./routes/book-routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/books", bookRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
