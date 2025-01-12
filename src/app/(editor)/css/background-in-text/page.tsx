'use client'
import { useState, useEffect } from "react";
import dedent from "dedent";

import Content from "../../_components/Content";
import EditPanel from "../../_components/EditPanel";

function PageTextBackground() {

  return (
    <>
      <Content>

        <div className="relative h-full w-full">

          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src="https://videos.pexels.com/video-files/10004252/10004252-uhd_2732_1440_30fps.mp4" type="video/mp4" />
          </video>
          <div className="text-7xl bg-black font-bold absolute top-0 left-0 h-full w-full text-white flex items-center justify-center mix-blend-multiply">
            <h1>SupaToolkit</h1>
          </div>
        </div>

      </Content>
      <EditPanel>

      </EditPanel>
    </>
  );
}

export default PageTextBackground;
