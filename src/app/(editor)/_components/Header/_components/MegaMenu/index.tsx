import { useState } from "react";

import { usePathname } from "next/navigation";
import dataNavigation from "../../dataNavigation";

import { findMenuItemByUrl } from "../../utils";

import { IMenuItem } from "../../IMenuItem";
import MenuItem from "./_components/Item"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import MenuSubItem from "./_components/SubItem";
import MenuSubContainer from "./_components/SubContainer";

function MegaMenu() {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState<IMenuItem | null>(null)

  const pathname = usePathname()
  const segments = pathname.split('/').slice(1);

  const urlTopic = findMenuItemByUrl(segments[0])
  const urlChapter = findMenuItemByUrl(segments[1])

  function handleMouseEnter(item: IMenuItem) {
    setTopic(item)
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="relative" asChild>
        <div className="flex items-center align-center">
          {urlTopic &&
            <MenuItem
              name={urlTopic?.name}
              icon={urlTopic.icon}
            />
          }
          {urlChapter &&
            <MenuItem name={urlChapter.name} />
          }
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="flex bg-[#181818] border-[#333] py-0 mx-0"
        style={{ maxHeight: `calc(100vh - 55px)` }}
      >
        <MenuSubContainer>
          {dataNavigation.map((item) => {
            return <MenuSubItem key={item.url} item={item} onMouseEnter={() => handleMouseEnter(item)} />
          })}
        </MenuSubContainer>
        {topic && topic?.children && (
          <MenuSubContainer className="border-l border-l-[#333]">
            {topic?.children.map((item) => {
              return <MenuSubItem key={item.url} item={item} topic={topic} onClick={() => setOpen(false)} />
            })}
          </MenuSubContainer>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MegaMenu
