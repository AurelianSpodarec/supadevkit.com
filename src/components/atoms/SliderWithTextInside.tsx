'use client'

import * as React from 'react';
import * as Slider from '@radix-ui/react-slider';

interface IProps {
  filterName: string;
  value: number;
  updateFilter: (filterName: string, newValue: number) => void;
}

const SliderWithTextInside = ({ filterName, value, updateFilter }: IProps) => {
  const isHueRotate = filterName === "hueRotate";

  return (
    <div className="flex items-center space-x-2">
      <Slider.Root
        className="group relative flex items-center w-64 h-10"
        value={[value]}
        min={0}
        max={isHueRotate ? 360 : 200}
        step={1}
        aria-label="Value"

        onValueChange={(newValue) => updateFilter(filterName, newValue[0])}
      >
        <Slider.Track className="relative cursor-pointer w-full h-[28px] bg-[#101012] rounded-md overflow-hidden">
          <Slider.Range className="absolute h-full bg-[#2e2e30] " />
          <div className="font-geistSans capitalize absolute top-1/2 left-2 -translate-y-1/2 text-[10px] text-white/60">
            {filterName}
          </div>
        </Slider.Track>

        <Slider.Thumb className="block w-[2px] ml-1 h-[20px] bg-white/30 shadow-md group-active:bg-blue-500" />
      </Slider.Root>
      <div className="flex items-center justify-between">
        <input
          value={value}
          className="text-xs px-2 p-1 font-semibold border border-gray-500/50 text-right rounded w-[43px]"
          onChange={(e) => {
            const numericValue = parseInt(e.target.value, 10)
            if (!isNaN(numericValue)) {
              updateFilter(filterName, numericValue)
            }
          }}
        />
        <div className="text-xs ml-0.5">px</div>
      </div>
    </div>
  );
};

export default SliderWithTextInside;
