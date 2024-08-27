import { ADD_JOBS } from '../actions/jobActions';

const initialState = {
  jobs: [],
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOBS:
      return {
        ...state,
        jobs: [...state.jobs, ...action.payload],
      };
    default:
      return state;
  }
};

export default jobReducer;
