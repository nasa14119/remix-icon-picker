import "./App.css";
import { IconSelected } from "./package/components/IconSelected";
import { StaticPicker } from "./package/StaticPicker";

function App() {
  return (
    <main className="flex flex-col gap-y-10 m-10">
      <StaticPicker>
        <div>
          <h1 className="my-5">Remix Picker</h1>
          <StaticPicker.CurrentIcon />
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
        <StaticPicker.IconsContainer>
          <StaticPicker.Icon className="bg-red-40" />
        </StaticPicker.IconsContainer> */}
      </StaticPicker>
    </main>
  );
}

export default App;
