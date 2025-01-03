import { configureStore } from "@reduxjs/toolkit";

import navigationSlice from "./features/navigation/navigationSlice";

const store = configureStore({
  reducer: {
    navigation: navigationSlice
  },
});

export default store;
