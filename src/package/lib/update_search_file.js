import path from "path";
import fs from "fs";
import { formatSerchFile } from "./update_search_format";
const search = await fetch(
  "https://raw.githubusercontent.com/Remix-Design/RemixIcon/8bc436bdd329cf342958d8effdd078bfa74354c6/tags.json"
).then((v) => v.json());
let parse_search = {};
for (const val in search) {
  if (val === "_comment") {
    continue;
  }
  let iteration = { ...search[val] };
  for (const key in iteration) {
    iteration[key] += `,${val.toLocaleLowerCase()}`;
  }
  parse_search = { ...parse_search, ...iteration };
}

try {
  fs.writeFileSync(
    path.resolve(__dirname, "../search.json"),
    JSON.stringify(parse_search)
  );
  formatSerchFile(parse_search);
} catch (error) {
  console.error(error);
}
