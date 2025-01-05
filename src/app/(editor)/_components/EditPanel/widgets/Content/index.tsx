import WidgetText from "./_variations/Text"
import WidgetImage from "./_variations/Image"
import { CWidgetContainer, CWidgetContent, CWidgetHeader } from "../_components/CWidget";

function WidgetContent({ element }: { element: any }) {
 
  return (
    <CWidgetContainer>
      <CWidgetHeader name="Content" />
      {/* <CWidgetContent> */}
        {/* {(isHeading || isParagraph || isLink || isButton) && <WidgetText element={element} />} */}
        {/* {isImage && <WidgetImage element={element} />} */}
      {/* </CWidgetContent> */}
    </CWidgetContainer>
  )
}

export default WidgetContent
