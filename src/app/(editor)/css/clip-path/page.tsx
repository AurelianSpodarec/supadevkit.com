// import CodeBlock from "@/components/atoms/CodeBlock"
import Content from "../../_components/Content"
import EditPanel from "../../_components/EditPanel"

function PageCSSClipPath() {
  return (
    <>
      <Content>
        {/* <img
          src="https://cdn.pixabay.com/photo/2019/03/27/15/24/animal-4085255_1280.jpg"
          style={{ filter: filterStyles, maxWidth: "100%", height: "auto" }}
          alt="Sample"
        /> */}
      </Content>
      <EditPanel>


        {/* {filterStyles &&
          <CodeBlock lang="css">
            {[
              `filter: ${filterStyles}`
            ].join('\n')}
          </CodeBlock>
        } */}


        {/* <CodeBlock lang="css">{`filter: ${filterStyles};`}</CodeBlock> */}
        {/* {Object.keys(filters).map((filterName) => (
          <FilterSlider
            key={filterName}
            filterName={filterName}
            value={filters[filterName]}
            updateFilter={updateFilter}
          />
        ))} */}
      </EditPanel>
    </>
  )
}

export default PageCSSClipPath
