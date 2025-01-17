import "./App.css";
import { StaticPicker } from "./package/StaticPicker";
function App() {
  return (
    <main className="flex flex-col gap-y-10 m-10">
      <StaticPicker>
        <h1 className="mt-5 text-5xl">Remix Picker</h1>
        <div className="sticky top-2 flex items-center z-50">
          <StaticPicker.InputText />
          <StaticPicker.CurrentIcon
            legend
            defaultIcon="ArrowLeftRightLine"
            className="text-black group bg-white hover:scale-[1.1] transition-all"
            classNameBg="hidden"
            classNameLegend="absolute -bottom-10 right-0 text-black bg-white p-2 rounded-xl group-hover:visible invisible"
          />
        </div>
        <StaticPicker.Grid className="md:gap-5 justify-between relative z-10">
          <StaticPicker.Icon isFoundClass="bg-red-700/30 text-red-700 transition-all duration-300"></StaticPicker.Icon>
        </StaticPicker.Grid>
      </StaticPicker>
    </main>
  );
}

export default App;
