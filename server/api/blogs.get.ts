import fs from "fs";

export default defineEventHandler(
    async () => JSON.parse(fs.readFileSync("./db.json", "utf-8")).articles
);