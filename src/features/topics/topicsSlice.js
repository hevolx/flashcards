import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topics: {}
}

export const topicsSlice = createSlice({
  name: 'topics',
  initialState: initialState,
  reducers: {
    addTopic: (state, action) => {
      state.topics[action.payload.id] = { ...action.payload, quizIds: [] }
    },
    addQuizIdToTopic: (state, action) => {
      const { topicId, quizId } = action.payload;
      if (state.topics[topicId]) {
        state.topics[topicId].quizIds.push(quizId);
      }
    }
  }
})

/**
 * Selects all topics from the Redux state.
 * @param {object} state - The Redux state
 * @returns {object} Topics keyed by id
 */
export const selectTopics = state => state.topics.topics;

// action creators
export const { addTopic } = topicsSlice.actions;

// reducer
export default topicsSlice.reducer;