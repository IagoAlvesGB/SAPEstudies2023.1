const express = require("express");
const mwBasicAuth = require("./middleware/basicAuth");
const PORT = 3000;

// Middleware [ Autenticacao da DESSA API ] ===========================================================================
const app = express();
app.use(mwBasicAuth);

// App Config =========================================================================================================
app.use(express.json());
const routes = require("./route/indexRouter");
app.use("/", routes);
app.listen(PORT, () => console.log(`API running in port: ${PORT}`));

module.exports = app;
