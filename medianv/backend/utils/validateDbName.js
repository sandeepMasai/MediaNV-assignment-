const DB_NAME_REGEX = /^[a-zA-Z][a-zA-Z0-9_]{0,62}$/;

function validateDbName(name) {
  console.log("VALIDATING NAME 👉", name);
  return DB_NAME_REGEX.test(name);
}

module.exports = validateDbName;
