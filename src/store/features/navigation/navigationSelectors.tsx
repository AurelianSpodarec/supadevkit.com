'use client';

import { useSelector } from "react-redux";
import { INavigationMenuKeys, INavigationState } from "./INavigation";

export const getNavigationStateOf = (menuId: INavigationMenuKeys) => {
  return useSelector((state: { navigation: INavigationState }) => {
    return state.navigation.navState[menuId] ?? false;
  });
};
