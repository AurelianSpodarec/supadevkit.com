'use client'

import { useState, useEffect } from "react";
import dedent from "dedent";

import Content from "../../_components/Content";
import EditPanel from "../../_components/EditPanel";

import CodeBlock from "@/components/atoms/CodeBlock";
import { InfoDialog } from "./_components/InfoDialog";

function FilterSlider({ filterName, value, updateFilter }) {
  const isHueRotate = filterName === "hueRotate";

  return (
    <div style={{ margin: "10px 0" }}>
      <label>
        {filterName.charAt(0).toUpperCase() + filterName.slice(1)}: {value}
      </label>
      <input
        type="range"
        min={0}
        max={isHueRotate ? 360 : 200}
        step={1}
        value={value}
        onChange={(e) => updateFilter(filterName, parseInt(e.target.value, 10))}
        style={{ width: "60%" }}
      />
    </div>
  );
}


function PageImageFilter() {
  const [filters, setFilters] = useState({
    blur: 0,
    brightness: 100,
    contrast: 100,
    grayscale: 0,
    hueRotate: 0,
    invert: 0,
    saturate: 100,
    sepia: 0,
  });
  const filterStyles = `
    blur(${filters.blur}px)
    brightness(${filters.brightness}%) 
    contrast(${filters.contrast}%) 
    grayscale(${filters.grayscale}%) 
    hue-rotate(${filters.hueRotate}deg) 
    invert(${filters.invert}%) 
    saturate(${filters.saturate}%) 
    sepia(${filters.sepia}%)
  `;
  const [code, setCode] = useState(dedent`filter: ${filterStyles};`);

  const updateFilter = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  return (
    <>
    {/* <InfoDialog /> */}
      <Content>
        <img
          src="https://cdn.pixabay.com/photo/2019/03/27/15/24/animal-4085255_1280.jpg"
          style={{ filter: filterStyles, maxWidth: "100%", height: "auto" }}
          alt="Sample"
        />
      </Content>
      <EditPanel>


        {/* {filterStyles &&
          <CodeBlock lang="css">
            {[
              `filter: ${filterStyles}`
            ].join('\n')}
          </CodeBlock>
        } */}


<CodeBlock lang="css">{`filter: ${filterStyles};`}</CodeBlock>
        {Object.keys(filters).map((filterName) => (
          <FilterSlider
            key={filterName}
            filterName={filterName}
            value={filters[filterName]}
            updateFilter={updateFilter}
          />
        ))}
      </EditPanel>
    </>
  );
}

export default PageImageFilter;
