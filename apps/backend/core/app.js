// core/app.js
const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;
const userRoute = require("../dist/routes/userRoutes").default;

app.use(express.json());

app.use(cors({ origin: "http://localhost:3000" }));

app.use(userRoute);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
