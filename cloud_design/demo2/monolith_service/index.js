const express = require("express");
const os = require("os");

// Routes
const user = require("./routes/user");
const messaging = require("./routes/messaging");

const app = express();

// Body parser
app.use(express.json());

// Mount routers
app.use("/api/v1/user", user);
app.use("/api/v1/messaging", messaging);

// Add route so base API doesn't cause 4xx error
app.get('/',(req, res) => res.send('Ping "/" route'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));