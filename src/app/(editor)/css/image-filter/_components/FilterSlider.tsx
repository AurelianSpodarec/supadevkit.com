function FilterSlider({ filterName, value, updateFilter }) {
  const isHueRotate = filterName === "hueRotate";

  return (
    <div className="flex flex-col mb-3 w-full">
      
      <label className="flex justify-between w-full m-1">
        <span>
          {filterName.charAt(0).toUpperCase() + filterName.slice(1)}
        </span>
      </label>
      <div className="flex item-center space-x-3 align-center w-full">
        <input
          className="w-full flex-grow"
          type="range"
          min={0}
          max={isHueRotate ? 360 : 200}
          step={1}
          value={value}
          onChange={(e) => updateFilter(filterName, parseInt(e.target.value, 10))}
        />
        <div>
          <input
            value={value}
            className="border rounded text-right w-[30px]"
            onChange={(e) => updateFilter(filterName, e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default FilterSlider
