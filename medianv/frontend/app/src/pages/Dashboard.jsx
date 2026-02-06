import CreateDatabase from "../components/CreateDatabase";
import CheckDatabase from "../components/CheckDatabase";
import MigrateDatabase from "../components/MigrateDatabase";

export default function Dashboard() {
  return (
    <div>
      <h1>PostgreSQL Database Manager</h1>
      <CreateDatabase />
      <CheckDatabase />
      <MigrateDatabase />
    </div>
  );
}
