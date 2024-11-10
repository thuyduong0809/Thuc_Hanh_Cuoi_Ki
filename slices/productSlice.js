import { createSlice } from '@reduxjs/toolkit';

const listProduct = [
  { id: 1, image: require("../assets/bione-removebg-preview.png"), nameProduct: "Pinarello", price: 1800, description: "A great mountain bike.", type: "MOUNTAIN" },
  { id: 2, image: require("../assets/bione-removebg-preview.png"), nameProduct: "Pina Mountain", price: 1700, description: "Perfect for rough terrains.", type: "MOUNTAIN" },
  { id: 3, image: require("../assets/bithree_removebg-preview.png"), nameProduct: "Pina Bike", price: 1500, description: "Light and fast road bike.", type: "ROADBIKE" },
  { id: 4, image: require("../assets/bifour_-removebg-preview.png"), nameProduct: "Pinarello", price: 1900, description: "Elegant and durable.", type: "ROADBIKE" },
  { id: 5, image: require("../assets/bione-removebg-preview.png"), nameProduct: "Pina Mountain", price: 2700, description: "High-performance bike.", type: "MOUNTAIN" },
  { id: 6, image: require("../assets/bitwo-removebg-preview.png"), nameProduct: "Pina Bike", price: 1350, description: "Affordable and reliable.", type: "ROADBIKE" },
];

const productSlice = createSlice({
  name: 'product',
  initialState: {
    listProduct,
    filteredProduct: listProduct,
    selectedType: 'ALL',
  },
  reducers: {
    setFilterType: (state, action) => {
      state.selectedType = action.payload;
      state.filteredProduct = action.payload === 'ALL'
        ? state.listProduct
        : state.listProduct.filter(item => item.type === action.payload);
    },
  },
});

export const { setFilterType } = productSlice.actions;
export default productSlice.reducer;
