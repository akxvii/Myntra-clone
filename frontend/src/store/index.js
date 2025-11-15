import  { configureStore } from "@reduxjs/toolkit"
import itemsSlice from "./itemsSlice"
import fectchStatusSlice from "./fetchStatusSlice"
import bagSlice from "./BagSlice";



const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fectchStatusSlice.reducer,
    bag: bagSlice.reducer,
  }
});

export default myntraStore