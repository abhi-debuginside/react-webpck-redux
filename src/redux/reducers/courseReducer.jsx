import * as types from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    case types.CREATE_COURSES_SUCCESS:
      return [...state, { ...action.course }];

    case types.UPDATE_COURSES_SUCCESS:
      return state.map((course) => {
        course.id === action.course.id ? action.course : course;
      });

    default:
      return state;
  }
}
