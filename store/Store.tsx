import { configureStore } from "@reduxjs/toolkit";
import SignupSlice from "./slices/SignupSlice";
import appliedSlice from "./slices/AppliedSlice";
import savedSlice from "./slices/SavedSlice";
const store = configureStore({
  reducer: {
    SignUp: SignupSlice,
    applied:appliedSlice,
    saved:savedSlice
  },
});

export default store;
