'use client'

interface IProps {
  children?: React.ReactNode
  code?: string
}

function EditPanel({ children, code }: IProps) {

  return (
    <aside className="w-[420px] bg-[#1c1c1e] overflow-auto h-full">
      {/* <div> */}

        {/* <section> */}
          {/* <header className="flex items-center justify-between"> */}

            {/* <div> */}
              {/* CSS | TailwindCSS | Styles */}

              {/* <button>
              <svg
                className="w-6"
                width="40"
                height="24"
                fill="none"
                viewBox="0 0 40 24"
              >
                <path
                  fill="#38BDF8"
                  d="M20 0q-8 0-10 8 3-4 7-3c1.522.38 2.61 1.485 3.814 2.706C22.774 9.696 25.044 12 30 12q8 0 10-8-3 4-7 3c-1.522-.38-2.61-1.485-3.813-2.706C27.227 2.304 24.958 0 20 0M10 12q-8 0-10 8 3-4 7-3c1.522.38 2.61 1.485 3.813 2.706 1.96 1.99 4.23 4.294 9.188 4.294q8 0 10-8-3 4-7 3c-1.522-.38-2.61-1.485-3.813-2.706-1.96-1.99-4.23-4.294-9.187-4.294"
                ></path>
              </svg>
              <span className="sr-only">TailwindCSS</span>
            </button> */}
            {/* </div>
            <div>
              Copy Code
              <div>

              </div> */}
              {/* <div>
            Options: Align: Top, Bottom, Left, 
          </div> */}
            {/* </div>
          </header> */}
          {/* <div className="relative"> */}
            {/* <button className="absolute inset-0 z-10">
              <span className="sr-only">Copy code</span>
            </button> */}
            {/* <div className="border"> */}
              {/* <Editor
                value={code}
                onValueChange={code => setCode(code)}
                highlight={code => highlight(code, languages.css, 'css')}
                padding={10}
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 12,
                }}
              /> */}
            {/* </div/> */}
          {/* </div> */}
        {/* </section> */}

      {/* </div> */}
      {/* <section> */}
        {/* Configuration */}
        {children}
      {/* </section> */}
      {/* {Object.keys(filters).map((filterName) => (
        <div key={filterName} style={{ margin: "10px 0" }}>
          <label>
            {filterName.charAt(0).toUpperCase() + filterName.slice(1)}:{" "}
            {filters[filterName]}
          </label>
          <input
            type="range"
            min={filterName === "hueRotate" ? 0 : 0}
            max={filterName === "hueRotate" ? 360 : 200}
            step={1}
            value={filters[filterName]}
            onChange={(e) =>
              updateFilter(filterName, parseInt(e.target.value, 10))
            }
            style={{ width: "60%" }}
          />
        </div>
      ))} */}
    </aside>
  )
}

export default EditPanel
