import { ICustomVNode } from "@/utils/virtual-dom/vdom/ICustomDom";

function WidgetText({ element }: { element: ICustomVNode }) {
console.log(element)

  // TODO: If button, link, span, showcase input
  // element.props.children
  return (
    <div>
      <span className="text-[11px] text-[#808080]">Text</span>
      <textarea className="bg-[#262626] border-[#303030] text-white min-h-[60px] text-xs p-1.5 w-full rounded-md" value={element.textContent} />
    </div>
  );
}

export default WidgetText;
