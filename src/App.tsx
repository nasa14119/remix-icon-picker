import "./App.css";
import { StaticPicker } from "./package/StaticPicker";
function App() {
  return (
    <main className="flex flex-col gap-y-10 m-10">
      <StaticPicker>
        <StaticPicker.CurrentIcon
          className="fixed top-5 left-10 p-2 rounded-2xl size-fit z-20"
          classNameBg="group-hover:scale-125 transition-transform backdrop-blur-[100px] opacity-80 bg-transparent"
          classNameSVG="group-hover:scale-125 transition-transform"
          classNameLegend=""
          legend={false}
        />
        <div>
          <h1 className="my-5">Remix Picker</h1>
          <StaticPicker.Grid className="gap-5 justify-between">
            <StaticPicker.Icon tooltip>
              {/* <StaticPicker.Tooltip
                className="text-xs text-black"
                classNameContainer="-top-[30px]"
              /> */}
            </StaticPicker.Icon>
          </StaticPicker.Grid>
        </div>
        {/* 
           <StaticPicker.Input autocomplete />
        */}
      </StaticPicker>
    </main>
  );
}

export default App;
