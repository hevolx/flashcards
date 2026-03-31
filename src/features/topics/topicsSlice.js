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

  }
})

// selector
export const selectTopics = state => state.topics.topics;

// action creators
export const { addTopic } = topicsSlice.actions;

// reducer
export default topicsSlice.reducer;