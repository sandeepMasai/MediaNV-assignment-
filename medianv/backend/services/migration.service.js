const { exec } = require("child_process");
const path = require("path");

exports.migrateDatabase = (sourceDb, targetDb) => {
  return new Promise((resolve, reject) => {
    const dumpFile = path.join(__dirname, `${sourceDb}.backup`);

    const dumpCmd = `pg_dump ${sourceDb} -Fc -f ${dumpFile}`;
    const restoreCmd = `pg_restore -d ${targetDb} ${dumpFile}`;

    exec(dumpCmd, (err) => {
      if (err) return reject(err);

      exec(restoreCmd, (err2) => {
        if (err2) return reject(err2);
        resolve();
      });
    });
  });
};
