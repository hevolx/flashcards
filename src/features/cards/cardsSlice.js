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

/**
 * Selects a single card from the Redux state by id.
 * @param {object} state - The Redux state
 * @param {string} id - The card id
 * @returns {object} The card object
 */
export const selectCards = (state, id) => state.cards.cards[id];

// action creators
export const { addCard } = cardsSlice.actions;

// reducer
export default cardsSlice.reducer;