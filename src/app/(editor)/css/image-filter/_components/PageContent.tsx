'use client'

import { useState, useEffect } from "react";
import dedent from "dedent";

import Content from "../../../_components/Content";
import EditPanel from "../../../_components/EditPanel";

import { CodeBlock } from "@/app/(editor)/_components/EditPanel/widgets/_components/CodeBlock";
import { InfoDialog } from "./InfoDialog";
import { CWidgetContainer, CWidgetContent, CWidgetHeader } from "@/app/(editor)/_components/EditPanel/widgets/_components/CWidget";
import SliderWithTextInside from "../../../../../components/atoms/SliderWithTextInside";
import CodeEditor from "@/components/molecules/CodeEditor";

import { javascript } from "@codemirror/lang-javascript"

function PageContent() {
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
  const [activePicture, setActivePicture] = useState("https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")

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

  const code = dedent`filter: ${filterStyles};`;

  const updateFilter = (filterName: string, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const images = [
    "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/394377/pexels-photo-394377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2684011/pexels-photo-2684011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1024981/pexels-photo-1024981.jpeg",
    "https://cdn.pixabay.com/photo/2019/03/27/15/24/animal-4085255_1280.jpg",
    "https://images.pexels.com/photos/131723/pexels-photo-131723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1,"
  ]

  return (
    <div className="flex w-full flex-col sm:flex-row">
      <Content className="max-h-[50vh]">
        <img
          src={activePicture}
          className="h-full w-full object-cover"
          style={{ filter: filterStyles }}
          alt="Sample"
        />
      </Content>

      <EditPanel>
        <CWidgetContainer gutter="none">
          <CWidgetContent>
            <CWidgetHeader name="Code" gutter="default" />
            {/* <CodeBlock initialCode={code} lang="ts" /> */}
            <div className="max-h-[210px] overflow-y-auto">
              <CodeEditor lang={javascript()} value={code} readOnly />
            </div>
          </CWidgetContent>
        </CWidgetContainer>

        <CWidgetContainer>
          <CWidgetContent>
            <CWidgetHeader name="Pictures" />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {images.map((image) => {
                return (
                  <button
                    key={image}
                    className={`rounded h-[50px] w-full  overflow-hidden border-2 border-solid  hover:border-blue-500/70 ${image === activePicture ? "border-blue-500" : "border-white border-opacity-[15%]"} `}
                    onClick={() => setActivePicture(image)}
                  >
                    <img src={image} className="object-cover h-full w-full" />
                  </button>
                )
              })}
            </div>
          </CWidgetContent>
        </CWidgetContainer>

        <CWidgetContainer>
          <CWidgetHeader name="Presets" />
        </CWidgetContainer>

        <CWidgetContainer>
          <CWidgetHeader name="Configuration" />
          <button
            type="button"
            className="text-sm border rounded px-2 py-1"
            onClick={() =>
              setFilters({
                blur: 0,
                brightness: 100,
                contrast: 100,
                grayscale: 0,
                hueRotate: 0,
                invert: 0,
                saturate: 100,
                sepia: 0,
              })
            }
          >Reset
          </button>
          <CWidgetContent>
            {Object.keys(filters).map((filterName) => (
              <SliderWithTextInside
                key={filterName}
                filterName={filterName}
                value={filters[filterName]}
                updateFilter={updateFilter}
              />
            ))}
          </CWidgetContent>
        </CWidgetContainer>

      </EditPanel>
    </div>
  );
}

export default PageContent
