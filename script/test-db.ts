import { db } from "@/app/lib/sql-qa/db";

async function demo() {
  const rows = await (await db).run("SELECT * FROM recently_played LIMIT 10;");
  console.table(rows);
}

demo()
  .then(() => console.log("Demo completed successfully."))
  .catch((error) => console.error("Error during demo:", error));
