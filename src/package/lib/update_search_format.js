import fs from "fs";
import path from "path";
const camelizeAndCapitalize = (s) => {
  // Convertir de kebab-case a camelCase
  const camelCase = s.replace(/-./g, (x) => x[1].toUpperCase());
  // Capitalizar la primera letra
  return camelCase[0].toUpperCase() + camelCase.slice(1);
};
export function formatSerchFile(search) {
  const new_data = {};
  for (const mod_key of Object.keys(search).sort()) {
    new_data[camelizeAndCapitalize(mod_key)] = search[mod_key];
  }
  try {
    fs.writeFileSync(
      path.resolve(__dirname, "../search.json"),
      JSON.stringify(new_data)
    );
  } catch (error) {
    console.error(error);
  }
}
