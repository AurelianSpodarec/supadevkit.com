import { JSX } from "react";
import Link from "next/link";

interface IMenuItemProps {
  onClick: () => void
  selectedTopic: { url: string } | null; // Adjust the type based on your actual structure
  isSubMenu: boolean;
  item: {
    url: string;
    icon?: JSX.Element; // Optional icon
    name: string;
    newTab?: boolean; // Optional newTab property
  };
  handleHoverTopic: (item: { url: string; icon?: JSX.Element; name: string; newTab?: boolean }) => void;
  segments: string[];
}

function MenuItem({ onClick, selectedTopic, isSubMenu, item, handleHoverTopic, segments }: IMenuItemProps) {
  const Comp = isSubMenu ? Link : "button";

  return (
    <Comp
      onClick={onClick}
      onMouseEnter={() => handleHoverTopic(item)}
      {...(isSubMenu ? { href: item.url } : { type: "button" })}
      className={`h-10 hover:bg-white/10 flex items-center justify-between text-sm px-2 rounded w-full ${selectedTopic?.url === item.url ? "bg-white/10" : ""
        }`}
    >
      <div className="flex items-center space-x-1">
        {item.icon && (
          <div className="h-6 w-6">
            {item.icon}
          </div>
        )}
        <span>{item.name}</span>
      </div>

      {(item.url === segments[0] || item.url === segments[1]) && (
        <span>
          <svg
            width="16"
            height="16"
            strokeLinejoin="round"
            className="ml-2"
            data-testid="geist-icon"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="m15.56 4-.53.53-8.793 8.793a1.75 1.75 0 0 1-2.474 0l.53-.53-.53.53L.97 10.53.44 10 1.5 8.94l.53.53 2.793 2.793a.25.25 0 0 0 .354 0L13.97 3.47l.53-.53z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      )}

      {item.newTab && (
        <span>
          <svg className="h-3 w-3 fill-[#e5e7eb]/80" viewBox="0 0 512 512">
            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32zM80 32C35.8 32 0 67.8 0 112v320c0 44.2 35.8 80 80 80h320c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v112c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h112c17.7 0 32-14.3 32-32s-14.3-32-32-32z"></path>
          </svg>
        </span>
      )}
    </Comp>
  );
}

export default MenuItem;
