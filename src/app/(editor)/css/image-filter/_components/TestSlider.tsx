import * as React from 'react';
import * as Slider from '@radix-ui/react-slider';

const SliderWithTextInside = ({ filterName, value, updateFilter }) => {
  // const [value, setValue] = React.useState<number>(50);

  // const handleValueChange = (newValue: number[]) => {
  //   setValue(newValue[0]);
  // };
  const isHueRotate = filterName === "hueRotate";
  return (
    <div className="flex items-center space-x-4">
      <Slider.Root
        className="relative flex items-center w-64 h-10"
        value={[value]}
        min={0}
        max={isHueRotate ? 360 : 200}
        step={1}
        aria-label="Value"
        
        onValueChange={(newValue) => updateFilter(filterName, newValue[0])}
      >
        <Slider.Track className="relative cursor-pointer w-full h-[28px] bg-[#101012] rounded-md overflow-hidden">
          <Slider.Range className="absolute h-full bg-[#2e2e30] " />
          <div className="absolute top-1/2 left-2 -translate-y-1/2 text-[11px] text-white/60">
            {filterName}
          </div>
        </Slider.Track>

        <Slider.Thumb className="block w-[2px] h-[20px] bg-white/30 shadow-md active:bg-blue-500" />
      </Slider.Root>
      <div>
        <input
          value={value}
          className="text-sm px-2 p-1 font-semibold border border-gray-500/50 text-right rounded w-[40px]"
          onChange={(e) => updateFilter(filterName, e.target.value)}
        />
      </div>
    </div>
  );
};

export default SliderWithTextInside;
