
const { transports, createLogger, format } = require("winston");

const logger = createLogger({
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss.SSS" }),
    format.json()
  ),
  transports: [new transports.Console({ level: "debug" })],
});

module.exports = logger;