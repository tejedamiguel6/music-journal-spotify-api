import { parse } from "pgsql-ast-parser";

export async function validateSQL(sql: string, safeTables: string[]) {
  const TABLES = new Set(safeTables.map((table) => table.toLowerCase()));

  const ast = parse(sql);

  for (const statement of ast) {
    if (statement.type !== "select") {
      throw new Error("Only SELECT statements are allowed");
    }

    const fromTables =
      statement.from?.flatMap((from) =>
        from.type === "table" ? [from.name.name] : []
      ) || [];
    for (const tbl of fromTables) {
      if (!TABLES.has(tbl.toLowerCase())) {
        throw new Error(`Table "${tbl}" is not allowed`);
      }
    }
  }
}
