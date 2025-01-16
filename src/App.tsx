import "./App.css";
import { StaticPicker } from "./package/StaticPicker";
function App() {
  return (
    <main className="flex flex-col gap-y-10 m-10">
      <StaticPicker>
        <h1 className="my-5">Remix Picker</h1>
        <div className="sticky top-2 flex items-center z-50">
          <StaticPicker.InputText />
          <StaticPicker.CurrentIcon
            defaultIcon="ArrowLeftRightLine"
            className="text-black"
            classNameBg="bg-white opacity-95"
          />
        </div>
        <StaticPicker.Grid className="gap-5 justify-between relative z-10">
          <StaticPicker.Icon isFoundClass="bg-red-700/30 text-red-700 transition-all duration-300"></StaticPicker.Icon>
        </StaticPicker.Grid>
      </StaticPicker>
    </main>
  );
}

export default App;
