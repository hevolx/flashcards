import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quizzes: {}
}

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: initialState,
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes[action.payload.id] = { ...action.payload }
    }
  }
})

/**
 * Selects all quizzes from the Redux state.
 * @param {object} state - The Redux state
 * @returns {object} Quizzes keyed by id
 */
export const selectQuizzes = state => state.quizzes.quizzes;

// action creators
export const { addQuiz } = quizzesSlice.actions;

// reducer
export default quizzesSlice.reducer;