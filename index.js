const express = require('express');
const cors = require('cors');
const apiRoutes = require("./routes");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));
app.use(express.json());
app.use("/battlefield",apiRoutes)


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
