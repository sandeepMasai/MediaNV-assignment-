import { useState } from "react";
import { createDatabase } from "../services/api";

export default function CreateDatabase() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const handleCreate = async () => {
    if (!name.trim()) {
      setMsg("Database name is required");
      return;
    }

    const res = await createDatabase(name.trim());
    setMsg(res.message || "Error occurred");
  };

  return (
    <div>
      <h3>Create Database</h3>

      <input
        placeholder="Enter database name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleCreate}>Create</button>

      <p>{msg}</p>
    </div>
  );
}
