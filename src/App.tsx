import { DynamicPicker } from "./package/DynamiPicker";
import "./App.css";
import { useState } from "react";
import { StaticPicker } from "./package/StaticPicker";
function App() {
  const [state, setState] = useState("static");
  return (
    <main className="flex flex-col gap-y-10 m-10">
      <header className="my-2 flex flex-col">
        <h1 className="text-5xl">Remix Picker</h1>
        <ul className="flex *:bg-white/40 gap-x-5 *:px-2 *:rounded-2xl">
          <li className="capitalize hover:cursor-default">{state}</li>
          <li
            className="hover:cursor-pointer"
            onClick={() => setState("static")}
          >
            Static Picker
          </li>
          <li
            className="hover:cursor-pointer"
            onClick={() => setState("dynamic")}
          >
            Dynamic Picker
          </li>
        </ul>
      </header>
      {state === "static" && (
        <StaticPicker>
          <div className="sticky top-2 flex items-center z-50">
            <StaticPicker.InputText />
            <StaticPicker.CurrentIcon className="bg-white/20">
              <StaticPicker.Tooltip
                classNameContainer="-bottom-7 top-auto"
                classNameBg="bg-white opacity-100"
                className="text-black"
              />
            </StaticPicker.CurrentIcon>
          </div>
          <StaticPicker.Grid className="md:gap-5 justify-between relative z-10">
            <StaticPicker.Icon
              isFoundClass="bg-red-700/30 text-red-700 transition-all duration-300"
              tooltip
            ></StaticPicker.Icon>
          </StaticPicker.Grid>
        </StaticPicker>
      )}
      {state === "dynamic" && (
        <DynamicPicker>
          <div className="sticky flex top-5 items-center justify-center z-50">
            <DynamicPicker.Input />
            <DynamicPicker.CurrentIcon className="bg-white/20">
              <DynamicPicker.Tooltip
                classNameContainer="-bottom-7 top-auto"
                classNameBg="bg-white opacity-100"
                className="text-black"
              />
            </DynamicPicker.CurrentIcon>
          </div>
          <DynamicPicker.Grid
            className="md:gap-5 gap-x-16 justify-between relative z-10 "
            color="#ff5722"
          >
            <DynamicPicker.Icon>
              <DynamicPicker.Tooltip
                className="text-white"
                classNameBg="group-hover:opacity-90"
              />
            </DynamicPicker.Icon>
          </DynamicPicker.Grid>
        </DynamicPicker>
      )}
    </main>
  );
}

export default App;
