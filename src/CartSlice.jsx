import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const {name, image, cost} = action.payload // desctructure plant product action payload
        
        const existingItem = state.items.find(item => item.name === name); // Check if product already exists in Items array
        if(existingItem){
            existingItem.quantity++;
        } else{
            state.items.push({name, image, cost, quantity: 1});
        }
    },
    removeItem: (state, action) => {

        state.items = state.items.filter(item => item.name !== action.payload);



    },
    updateQuantity: (state, action) => {

        const {name, quantity} = action.payload

        const findItem = state.items.find(item => item.name === name);
        if(findItem){
            findItem.quantity = quantity;
        }



    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
