import Link from "next/link"
import { IMenuItem } from "../../../../IMenuItem"

interface IMenuSubItemProps {
  item: IMenuItem
  onClick?: () => void
  onMouseEnter?: () => void
  topic?: IMenuItem
}

function MenuSubItem({ onClick, onMouseEnter, item, topic }: IMenuSubItemProps) {
  const externalUrl = item.target === "_blank";

  function getUrl(): string | undefined {
    if (topic) {
      return externalUrl ? item.url : `/${topic.url}/${item.url}`;
    }
    return externalUrl ? item.url : undefined;
  };

  const url = getUrl();
  const Component: React.ElementType = url ? Link : 'button';

  return (
    <Component
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      {...(url ? { href: url } : { type: "button" })}
      className="cursor-default h-10 hover:bg-white/10 flex items-center justify-between text-sm px-2 rounded w-full text-white"
    >
      <div className="flex items-center space-x-1">
        {item.icon && (
          <div className="h-6 w-6">
            {item.icon}
          </div>
        )}
        <span>{item.name}</span>
      </div>

      {item.external &&
        <span className="ml-auto">
          <svg className="h-3 w-3 fill-[#e5e7eb]/80" viewBox="0 0 512 512">
            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32zM80 32C35.8 32 0 67.8 0 112v320c0 44.2 35.8 80 80 80h320c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v112c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h112c17.7 0 32-14.3 32-32s-14.3-32-32-32z"></path>
          </svg>
        </span>
      }
    </Component>
  )
}

export default MenuSubItem
