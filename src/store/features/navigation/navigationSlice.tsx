import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { INavigationState, INavigationComponentRules } from "./INavigation"

const initialState: INavigationState = {
  navState: {
    xtypes: false,
    xusers: false,
    xtheme: false,
    xanatomy: false,
    decoration: false,
  },
  componentRules: {},
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    menuOpen(state, action: PayloadAction<keyof INavigationState['navState']>) {
      const menuId = action.payload;
      const rules = state.componentRules[menuId];

      if (state.navState[menuId]) {
        state.navState[menuId] = false;
      } else {
        handleMenuOpening(state, menuId, rules);
      }
    },
    menuClose(state, action: PayloadAction<keyof INavigationState['navState']>) {
      const menuId = action.payload;
      state.navState[menuId] = false;
    },
  }
});

// HELPERS
// ======================================================================================

function handleMenuOpening(state: typeof initialState, menuId: keyof INavigationState['navState'], rules?: INavigationComponentRules) {
  if (rules) {
    const menusToClose: Array<keyof INavigationState['navState']> = rules.autoClose.length > 0
      ? rules.autoClose as Array<keyof INavigationState['navState']>
      : getMenusToClose(state, menuId, rules.preventOpenIf);

    menusToClose.forEach((menu) => {
      state.navState[menu] = false;
    });
  } else {
    Object.keys(state.navState).forEach(key => {
      state.navState[key as keyof INavigationState['navState']] = key === menuId;
    });
  }
  state.navState[menuId] = true;
}

function getMenusToClose(state: typeof initialState, menuId: keyof INavigationState['navState'], preventOpenIf: string[]) {
  return (Object.keys(state.navState) as Array<keyof INavigationState['navState']>)
    .filter(key => !preventOpenIf.includes(key) && key !== menuId);
}

export const { menuOpen, menuClose } = navigationSlice.actions;

export default navigationSlice.reducer;
