'use client'
import { useState, useEffect } from "react";
import dedent from "dedent";

import Content from "../../_components/Content";
import EditPanel from "../../_components/EditPanel";

function PageImageFilter() {

  return (
    <>
      <Content>
        <div className="absolute bg-green-500 z-10 bottom-16 mx-auto left-20 right-20 h-20">
          WOOOOP
        </div>
        <div
          className="h-full w-full z-20"
          style={{ backgroundImage: `linear-gradient(144deg, rgb(0, 0, 0) 0%, rgba(199, 143, 0, 0.533) 96%)` }}
        />
      </Content>
      <EditPanel>

      </EditPanel>
    </>
  );
}

export default PageImageFilter;
