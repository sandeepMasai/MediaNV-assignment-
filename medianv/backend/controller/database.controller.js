const pool = require("../config/db");
const validateDbName = require("../utils/validateDbName");
const { migrateDatabase } = require("../services/migration.service");

// CREATE DATABASE
exports.createDatabase = async (req, res) => {
  const { dbName } = req.body;

  console.log("Incoming dbName:", dbName);

  if (!dbName || !validateDbName(dbName)) {
    return res.status(400).json({
      message:
        "Invalid database name. Use letters, numbers, underscore. Must start with letter.",
    });
  }

  try {
    await pool.query(`CREATE DATABASE "${dbName}"`);
    return res.json({ message: "Database created successfully" });
  } catch (err) {
    if (err.code === "42P04") {
      return res.status(409).json({ message: "Database already exists" });
    }
    return res.status(500).json({ message: err.message });
  }
};

// CHECK DATABASE
exports.checkDatabase = async (req, res) => {
  const { dbName } = req.params;

  const result = await pool.query(
    "SELECT 1 FROM pg_database WHERE datname = $1",
    [dbName],
  );

  return res.json({ exists: result.rowCount > 0 });
};

// MIGRATE DATABASE
exports.migrateDatabase = async (req, res) => {
  const { sourceDb, targetDb } = req.body;

  if (!sourceDb || !targetDb) {
    return res.status(400).json({
      message: "sourceDb and targetDb are required",
    });
  }

  try {
    await migrateDatabase(sourceDb, targetDb);
    return res.json({ message: "Migration completed successfully" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
