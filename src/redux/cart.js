import { createSlice } from "@reduxjs/toolkit";
import { getStorage, saveStorege } from "../components/helpers";
const cart = createSlice({
  name: "cart",
  initialState: {
    value: getStorage("count") || [
      {
        id: 1,
        username: "Otabek",
        lname: "Sediyorov",
        phone: +9989977733454,
      },
      {
        id: 2,
        username: "Usmonjon",
        lname: "Sediyorov",
        phone: +9989977733454,
      },
      {
        id: 3,
        username: "Iqboljon",
        lname: "Sediyorov",
        phone: +9989977733454,
      },
      {
        id: 4,
        username: "Asqar",
        lname: "Sediyorov",
        phone: +998998523212,
      },
      {
        id: 5,
        username: "abduvoris",
        lname: "Azimov",
        phone: +9989997872900,
      },
    ],
  },
  reducers: {
    remove: (state, action) => {
      state.value = state.value.filter((item) => item.id != action.payload.id);
      saveStorege("count", state.value);
    },
    update: (state, action) => {
      state.value = [...state.value, action.payload.cart];
      saveStorege("count", state.value);
    },
  },
});
export default cart.reducer;
export const { remove, update } = cart.actions;
