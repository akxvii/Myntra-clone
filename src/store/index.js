import  { configureStore } from "@reduxjs/toolkit"
import itemsSlice from "./itemsSlice"
import fectchStatusSlice from "./fetchStatusSlice"



const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fectchStatusSlice.reducer,
  }
});

export default myntraStore