const API = "http://localhost:5000/api/database";

export const createDatabase = (dbName) =>
  fetch(`${API}/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ dbName }),
  }).then((res) => res.json());

export const checkDatabase = (dbName) =>
  fetch(`${API}/check/${dbName}`).then((res) => res.json());

export const migrateDatabase = (data) =>
  fetch(`${API}/migrate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());
