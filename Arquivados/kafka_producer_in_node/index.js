const express = require("express");
const mwBasicAuth = require("./middleware/basicAuth")
const PORT = process.env.PORT || 4000;


// Middleware [ Autenticacao da DESSA API ] ===========================================================================
const app = express();
app.use(mwBasicAuth);

// App Config =========================================================================================================
app.use(express.json());
const routes = require("./routes/index.js");
app.use("/", routes);
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));


module.exports = app;