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
        <StaticPicker.Grid className="gap-5 justify-start flex-wrap relative z-10 flex">
          <StaticPicker.Icon
            isFoundClass="bg-red-700/30 text-red-700 transition-all duration-30"
            className="md:size-fit grid-rows-2 grid-cols-[auto] grid [grid-template-areas:'icon'_'text'] place-items-center"
            classNameSVG="size-8 md:size-8 [grid-area:icon] mx-auto"
          >
            <StaticPicker.Tooltip
              classNameBg="hidden"
              classNameContainer="relative opacity-100 size-2 [grid-area:text] top-0 w-full text-center"
            />
          </StaticPicker.Icon>
        </StaticPicker.Grid>
      </StaticPicker>
    </main>
  );
}

export default App;
