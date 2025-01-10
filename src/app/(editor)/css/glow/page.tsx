'use client'

import Content from "../../_components/Content";
import EditPanel from "../../_components/EditPanel";

function PageCSSGlow() {

  return (
    <>
      <Content>
        <div className="bg-black h-full flex items-center align-center justify-center">
          <div
            className="z-30 h-64 w-64 bg-white rounded-full relative"
            style={{
              boxShadow: "inset 0 0 50px #fff, inset 20px 0 80px #f0f, inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff, 0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff"
            }}
          />
        </div>
      </Content >
      <EditPanel>

      </EditPanel>
    </>
  );
}

export default PageCSSGlow;
