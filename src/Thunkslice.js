import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  maindata: [],
  carddata: [],
  status: "idle",
  amount: 1,
  flag: false,
  mainTotal: 0,
  mainT: 0,
  dumdata: [],
  tflag: false,
};

const Thunkslice = createSlice({
  name: "thunk",
  initialState: initialState,
  reducers: {
    newdata: (state, actions) => {
      state.flag = false;

      const newData = state.carddata.map((item) => {
        if (item.id === actions.payload.id) {
          state.flag = true;
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });

      if (state.flag === false) {
        state.carddata = [
          ...state.carddata,
          { ...actions.payload, amount: state.amount },
        ];
      } else {
        state.carddata = newData;
      }
    },

    deletedata: (state, actions) => {
      state.carddata = state.carddata.filter((i) => i.id !== actions.payload);
    },
    totalPrice: (state) => {
      state.mainTotal = state.carddata.reduce((total, curr) => {
        (total = total + curr.price * curr.amount).toFixed(2);
        return total;
      }, 0);
    },
    decrement: (state, actions) => {
      const newData = state.carddata.map((item) => {
        if (item.id === actions.payload.id) {
          state.flag = true;
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      state.carddata = newData;
    },
    getcat: (state, actions) => {
      const newget = state.dumdata.filter((item) => {
        return item.category === actions.payload;
      });
      state.maindata = newget;
    },
    increment: (state) => {
      state.mainT = state.carddata.reduce((total, curr) => {
        total = total + curr.amount;
        return total;
      }, 0);
    },
    changecolor: (state, actions) => {
      const newdata = actions.payload;
      const modify = state.maindata.map((item) => {
        if (item.id === newdata) {
          return { ...item, heart: !item.heart };
        }
        return item;
      });

      state.maindata = modify;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchdata.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchdata.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const data = action.payload;
        const modifieddata = data.map((item) => {
          return { ...item, heart: state.tflag };
        });
        state.maindata = modifieddata;
        state.dumdata = state.maindata;
      })
      .addCase(fetchdata.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});
export const fetchdata = createAsyncThunk("/api", async () => {
  const api = await axios
    .get("https://fakestoreapi.com/products")
    .then((response) => response.data)
    .catch((error) => console.log(error.message));
  return api;
});

export const {
  newdata,
  deletedata,
  totalPrice,
  increment,
  decrement,
  getcat,
  mainT,
  changecolor,
} = Thunkslice.actions;
export default Thunkslice.reducer;
