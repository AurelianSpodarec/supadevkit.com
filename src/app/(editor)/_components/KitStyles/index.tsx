import KitStylesEmpty from "./Empty"
import KitStylesWidgets from "./widgets"
import { CWidgetContainer, CWidgetContent, CWidgetHeader } from "./widgets/_components/CWidget"


function KitStyles({ children }) {
  // const reduxActiveDomObject = getElementSelectedState()
  // const isElementSelected = reduxActiveDomObject.uuid !== ""

  return (
    <aside className="w-[330px] min-w-[330px] bg-[#0c0e11]">
      {/* {isElementSelected ? <KitStylesWidgets element={reduxActiveDomObject} /> : <KitStylesEmpty />} */}
      {/* <KitStylesEmpty /> */}
      {children}
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
