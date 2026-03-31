import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: {}
}

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards[action.payload.id] = { ...action.payload }
    }
  }
})

// selector
export const selectCards = (state, id) => state.cards.cards[id];

// action creators
export const { addCard } = cardsSlice.actions;

// reducer
export default cardsSlice.reducer;