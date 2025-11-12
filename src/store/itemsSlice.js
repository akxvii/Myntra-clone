import {createSlice} from "@reduxjs/toolkit"

const itemsSlice = createSlice({
  name: `items`,
  initialState: [],
  reducers: {
    addInitialItems: (store, action) => {
      return store
    }
  }
})

export default itemsSlice