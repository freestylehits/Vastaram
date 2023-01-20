import { configureStore } from "@reduxjs/toolkit";
import Thunkslice from "./Thunkslice";

const Store = configureStore({
  reducer: Thunkslice,
});
export default Store;
