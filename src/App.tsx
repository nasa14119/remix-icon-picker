import "./App.css";
import { icons } from "./package/icons";
import { StaticGrid } from "./package/staticGrid";
function App() {
  console.log(icons);
  return (
    <main>
      <StaticGrid
        className="grid items-center justify-center grid-cols-[repeat(20,_max-content)] h-screen p-10 max-h-full overflow-scroll"
        current_selected="apps-2-ai-fill"
        classNameIcons="hover:bg-slate-200/20 hover:text-white/20 hover:rounded-lg p-2"
        isSelected="text-red-500"
      />
    </main>
  );
}

export default App;
