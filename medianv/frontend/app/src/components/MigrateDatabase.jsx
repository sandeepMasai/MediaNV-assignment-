import { useState } from "react";
import { migrateDatabase } from "../services/api";

export default function MigrateDatabase() {
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");
  const [msg, setMsg] = useState("");

  const handleMigrate = async () => {
    const res = await migrateDatabase({ sourceDb: source, targetDb: target });
    setMsg(res.message);
  };

  return (
    <div>
      <h3>Migrate Database</h3>
      <input
        placeholder="Source DB"
        onChange={(e) => setSource(e.target.value)}
      />
      <input
        placeholder="Target DB"
        onChange={(e) => setTarget(e.target.value)}
      />
      <button onClick={handleMigrate}>Migrate</button>
      <p>{msg}</p>
    </div>
  );
}
