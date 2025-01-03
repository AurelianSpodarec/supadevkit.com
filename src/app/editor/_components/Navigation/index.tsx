'use client'

import { useDispatch } from "react-redux"
import settingsMenu from "./settingsMenu"

import { menuOpen } from "@/store/features/navigation/navigationSlice"
import { getNavigationStateOf } from "@/store/features/navigation/navigationSelectors"

// import FeatureDecoration from "@/components/features/Decoration"
// import FeatureXTheming from "@/components/features/XTheming"
// import FeatureXTypes from "@/components/features/XTypes"
// import FeatureXUsers from "@/components/features/XUsers"
// import FeatureXAnatomy from "@/components/features/XAnatomy"

function NavItem({ item }: { item: any }) {
  const dispatch = useDispatch()
  const isActive = getNavigationStateOf(item.id)

  return (
    <button type="button" onClick={() => dispatch(menuOpen(item.id))} className="w-[55px] h-[55px] cursor-default">
      <div className="flex flex-col align-center justify-center items-center text-center">
        <div className={`h-9 w-9 mx-auto mb-1 ${isActive ? "bg-gray-200/20" : ""} hover:bg-gray-200/20 p-2 rounded-lg`}>
          {item.icon}
        </div>
        <span className="text-[11px]">
          {item.name}
        </span>
      </div>
    </button>
  )
}

function Navigation() {
  return (
    <>
      <aside className="bg-[#07080a] w-[55px] z-10 py-4">
        <div className="flex flex-col space-y-5">
          {settingsMenu.menu.map((item) => <NavItem item={item} key={item.id} />)}
        </div>
      </aside>
    </>
  )
}

export default Navigation
