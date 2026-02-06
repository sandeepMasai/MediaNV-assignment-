import { useState } from "react";
import { checkDatabase } from "../services/api";

export default function CheckDatabase() {
  const [name, setName] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = async () => {
    const res = await checkDatabase(name);
    setResult(res.exists ? "Exists" : "Not Found");
  };

  return (
    <div>
      <h3>Check Database</h3>
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={handleCheck}>Check</button>
      <p>{result}</p>
    </div>
  );
}
