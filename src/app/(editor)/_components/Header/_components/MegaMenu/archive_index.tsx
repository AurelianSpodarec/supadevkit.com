import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import MenuItem from "./MenuItem";
import dataNavigation from "../../dataNavigation";

function MegaMenu() {
  const [selectedTopic, setSelectedTopic] = useState({});
  const [isChapterOpen, setIsChapterOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  function handleChapterButton() {
    setIsChapterOpen(true)
    console.log("woppmpm")
  }

  function handleMenuItemClick() {
    setIsDropdownOpen(false); // Close the dropdown when an item is clicked
  }

  function handleHoverTopic(item) {
    const isMenu = item.menu;

    if (!isMenu && !item.id) {
      setSelectedTopic(item.newTab ? {} : selectedTopic);
      setIsChapterOpen(!item.newTab);
    } else {
      setSelectedTopic(item);
      setIsChapterOpen(true);
    }
  }

  function setInitialNavigationState() {
    const topic = dataNavigation.find((topic) => topic.url === segments[0])
    setSelectedTopic(topic)
  }

  useEffect(() => {
    setInitialNavigationState()
  }, [pathname]);

  return (
    <>
      <span className="ml-3 mr-1">
        <svg
          width="16"
          height="16"
          strokeLinejoin="round"
          className="text-white/15"
          data-testid="geist-icon"
          style={{ width: "22px", height: "22px" }}
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="m4.015 15.394.296-.69 6-14 .295-.689 1.379.591-.296.69-6 14-.295.689z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>
      <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center justify-center">
            <button
              type="button"
              className="flex items-center space-x-1"
            >
              <div className="h-6 w-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 342 480" version="1.1"><g id="#0170baff"><path fill="#0170ba" opacity="1.00" d=" M 0.00 92.46 C 113.92 92.45 227.83 92.44 341.75 92.46 C 335.48 163.31 329.31 234.16 322.78 304.99 C 318.90 350.26 314.90 395.53 310.68 440.77 C 286.37 447.21 262.30 454.55 238.00 461.02 C 215.68 467.57 193.18 473.50 170.85 480.00 L 170.19 480.00 C 148.94 473.68 127.48 468.12 106.23 461.80 C 81.15 455.04 56.29 447.50 31.20 440.77 C 27.93 406.86 24.98 372.93 22.07 339.00 C 16.58 276.31 10.61 213.66 5.33 150.96 C 3.50 132.09 2.19 113.16 0.00 94.33 L 0.00 92.46 M 171.41 120.41 C 171.17 134.02 171.59 147.64 171.17 161.24 C 132.09 161.10 93.00 161.21 53.92 161.25 C 54.59 174.46 56.36 187.58 58.18 200.68 C 94.54 202.03 130.95 200.63 167.31 201.72 C 135.50 215.99 103.30 229.43 71.35 243.40 C 68.61 244.62 65.68 245.54 63.23 247.32 C 63.50 261.83 65.84 276.26 66.87 290.74 C 86.25 290.67 105.62 290.36 125.00 290.33 C 140.53 290.25 156.07 290.56 171.60 290.22 C 170.86 314.08 171.83 337.97 171.10 361.83 C 160.65 360.28 150.33 357.95 139.92 356.10 C 131.71 354.31 123.30 353.38 115.21 351.03 C 114.06 339.58 113.26 328.09 112.24 316.63 C 109.90 315.91 107.42 315.98 105.00 315.94 C 93.26 316.01 81.51 315.90 69.76 316.08 C 70.91 338.11 72.89 360.11 76.26 381.93 C 87.84 384.95 99.44 387.91 111.00 391.06 C 128.71 395.88 146.64 399.89 164.38 404.63 C 166.49 405.08 168.62 405.86 170.81 405.68 C 171.99 420.17 171.08 434.75 171.30 449.28 C 175.39 448.62 179.41 447.61 183.36 446.39 C 216.94 437.27 250.48 427.98 284.04 418.77 C 285.71 405.57 286.49 392.28 287.81 379.05 C 291.30 338.83 294.82 298.61 298.48 258.40 C 302.77 212.40 306.48 166.35 310.80 120.35 C 264.33 120.39 217.87 120.26 171.41 120.41 Z"></path></g><g id="#29a9dfff"><path fill="#29a9df" opacity="1.00" d=" M 171.41 120.41 C 217.87 120.26 264.33 120.39 310.80 120.35 C 306.48 166.35 302.77 212.40 298.48 258.40 C 294.82 298.61 291.30 338.83 287.81 379.05 C 286.49 392.28 285.71 405.57 284.04 418.77 C 250.48 427.98 216.94 437.27 183.36 446.39 C 179.41 447.61 175.39 448.62 171.30 449.28 C 171.08 434.75 171.99 420.17 170.81 405.68 C 171.11 405.62 171.72 405.50 172.02 405.44 C 203.25 397.60 234.27 388.97 265.43 380.85 C 269.37 336.65 273.74 292.47 276.51 248.18 C 250.01 248.32 223.50 248.24 197.00 248.35 C 193.14 248.37 189.28 248.35 185.44 248.07 C 199.70 240.73 214.70 234.91 229.34 228.36 C 243.39 221.99 257.61 216.02 271.71 209.77 C 274.43 208.52 277.33 207.48 279.72 205.62 C 280.66 202.17 280.61 198.56 280.98 195.03 C 281.79 183.83 283.23 172.69 283.77 161.48 C 246.24 161.18 208.71 161.44 171.17 161.24 C 171.59 147.64 171.17 134.02 171.41 120.41 Z"></path><path fill="#29a9df" opacity="1.00" d=" M 171.60 290.22 C 189.72 289.91 207.85 290.40 225.98 290.28 C 224.97 308.81 223.43 327.31 222.47 345.84 C 211.36 349.47 200.08 352.54 188.88 355.90 C 182.91 357.72 176.78 359.16 171.10 361.83 C 171.83 337.97 170.86 314.08 171.60 290.22 Z"></path></g><g id="#cfcfcfff"><path fill="#cfcfcf" opacity="1.00" d=" M 53.92 161.25 C 93.00 161.21 132.09 161.10 171.17 161.24 C 171.68 204.24 171.04 247.24 171.60 290.22 C 156.07 290.56 140.53 290.25 125.00 290.33 C 105.62 290.36 86.25 290.67 66.87 290.74 C 65.84 276.26 63.50 261.83 63.23 247.32 C 65.68 245.54 68.61 244.62 71.35 243.40 C 103.30 229.43 135.50 215.99 167.31 201.72 C 130.95 200.63 94.54 202.03 58.18 200.68 C 56.36 187.58 54.59 174.46 53.92 161.25 Z"></path><path fill="#cfcfcf" opacity="1.00" d=" M 69.76 316.08 C 81.51 315.90 93.26 316.01 105.00 315.94 C 107.42 315.98 109.90 315.91 112.24 316.63 C 113.26 328.09 114.06 339.58 115.21 351.03 C 123.30 353.38 131.71 354.31 139.92 356.10 C 150.33 357.95 160.65 360.28 171.10 361.83 C 172.10 376.35 170.35 390.97 172.02 405.44 C 171.72 405.50 171.11 405.62 170.81 405.68 C 168.62 405.86 166.49 405.08 164.38 404.63 C 146.64 399.89 128.71 395.88 111.00 391.06 C 99.44 387.91 87.84 384.95 76.26 381.93 C 72.89 360.11 70.91 338.11 69.76 316.08 Z"></path></g><g id="#ffffffff"><path fill="#ffffff" opacity="1.00" d=" M 171.17 161.24 C 208.71 161.44 246.24 161.18 283.77 161.48 C 283.23 172.69 281.79 183.83 280.98 195.03 C 280.61 198.56 280.66 202.17 279.72 205.62 C 277.33 207.48 274.43 208.52 271.71 209.77 C 257.61 216.02 243.39 221.99 229.34 228.36 C 214.70 234.91 199.70 240.73 185.44 248.07 C 189.28 248.35 193.14 248.37 197.00 248.35 C 223.50 248.24 250.01 248.32 276.51 248.18 C 273.74 292.47 269.37 336.65 265.43 380.85 C 234.27 388.97 203.25 397.60 172.02 405.44 C 170.35 390.97 172.10 376.35 171.10 361.83 C 176.78 359.16 182.91 357.72 188.88 355.90 C 200.08 352.54 211.36 349.47 222.47 345.84 C 223.43 327.31 224.97 308.81 225.98 290.28 C 207.85 290.40 189.72 289.91 171.60 290.22 C 171.04 247.24 171.68 204.24 171.17 161.24 Z"></path></g></svg>
              </div>
              <span className="font-medium text-sm">{segments[0]}</span>
              <div className="py-1 rounded px-0.5 hover:bg-gray-900/90 ">
                <svg width="16" height="16" strokeLinejoin="round" color="var(--ds-gray-900)" data-testid="geist-icon" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M8.707 2.396a1 1 0 0 0-1.414 0L4.47 5.22l-.53.53L5 6.81l.53-.53L8 3.81l2.47 2.47.53.53 1.06-1.06-.53-.53zM5.53 9.72 5 9.19l-1.06 1.06.53.53 2.823 2.824a1 1 0 0 0 1.414 0l2.823-2.824.53-.53L11 9.19l-.53.53L8 12.19z" clipRule="evenodd"></path></svg>
              </div>
            </button>

            <svg
              width="16"
              height="16"
              strokeLinejoin="round"
              className="text-white/15"
              data-testid="geist-icon"
              style={{ width: "22px", height: "22px" }}
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="m4.015 15.394.296-.69 6-14 .295-.689 1.379.591-.296.69-6 14-.295.689z"
                clipRule="evenodd"
              ></path>
            </svg>

            <button
              className="flex items-center space-x-1 z-[99999] relative"
              onClick={(e) => {
                e.stopPropagation(); // Prevent the event from bubbling to the DropdownMenuTrigger
                handleChapterButton(); // Another specific function
              }}

            >
              <span className="text-sm font-medium">{segments[1]}</span>
              <div className="py-1 rounded px-0.5 hover:bg-gray-900/90 ">
                <svg
                  width="16"
                  height="16"
                  strokeLinejoin="round"
                  color="var(--ds-gray-900)"
                  data-testid="geist-icon"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M8.707 2.396a1 1 0 0 0-1.414 0L4.47 5.22l-.53.53L5 6.81l.53-.53L8 3.81l2.47 2.47.53.53 1.06-1.06-.53-.53zM5.53 9.72 5 9.19l-1.06 1.06.53.53 2.823 2.824a1 1 0 0 0 1.414 0l2.823-2.824.53-.53L11 9.19l-.53.53L8 12.19z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-[#181818] border-[#333] py-0 mx-0" align="start">
          <div className="flex" style={{ maxHeight: `calc(100vh - 55px)` }}>

            <div id="dataNavigation" className="my-2 px-2 w-[256px]">
              {dataNavigation.map((item) => (
                <MenuItem onClick={() => handleMenuItemClick()} key={item.id} item={item} segments={segments} selectedTopic={selectedTopic} handleHoverTopic={handleHoverTopic} />
              ))}
            </div>

            {isChapterOpen &&
              <div id="chapters" className="border-l border-l-[#333] my-2 px-2 w-[256px] overflow-y-auto">
                {selectedTopic && selectedTopic?.menu?.map((menuItem) => {
                  const isSubMenu = selectedTopic?.menu
                  return (
                    <MenuItem onClick={() => handleMenuItemClick()} topic={selectedTopic} key={menuItem.url} item={menuItem} isSubMenu={isSubMenu} segments={segments} selectedTopic={selectedTopic} handleHoverTopic={handleHoverTopic} />
                  )
                }
                )}
              </div>
            }

          </div>
        </DropdownMenuContent>

      </DropdownMenu>
    </>
  );
}

export default MegaMenu
