import KitStylesEmpty from "./Empty"
import KitStylesWidgets from "./widgets"
import { CWidgetContainer, CWidgetContent, CWidgetHeader } from "./widgets/_components/CWidget"


function KitStyles() {
  // const reduxActiveDomObject = getElementSelectedState()
  // const isElementSelected = reduxActiveDomObject.uuid !== ""

  return (
    <aside className="w-[255px] min-w-[255px] bg-[#0c0e11]">
      {/* {isElementSelected ? <KitStylesWidgets element={reduxActiveDomObject} /> : <KitStylesEmpty />} */}
      {/* <KitStylesEmpty /> */}

      <CWidgetContainer>
        <CWidgetHeader name="User" />
        <CWidgetContent>
          Selected User
        </CWidgetContent>
      </CWidgetContainer>

    </aside>
  )
}

export default KitStyles
