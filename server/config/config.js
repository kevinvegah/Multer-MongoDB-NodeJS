if (process.env.NODE_ENV !== "production") require("dotenv").config(); // allows to obtain the environment variable of .env

// ─── PORT ───────────────────────────────────────────────────────────────────────
process.env.PORT = process.env.PORT || 4000; //  In case you are local, the port will be 8080.
// ────────────────────────────────────────────────────────────────────────────────

// ─── ENVIRONMENT ────────────────────────────────────────────────────────────────
console.log("Environment: ", process.env.NODE_ENV); // Show which enviroment is in use.
// ────────────────────────────────────────────────────────────────────────────────

// ─── DATABASE ───────────────────────────────────────────────────────────────────
process.env.URLDB = process.env.MONGO_URI; // Environment variable fetched from .env and used in server.js
// ────────────────────────────────────────────────────────────────────────────────
