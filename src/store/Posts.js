const requestPostsType = "REQUEST_POSTS";
const responsePostsType = "RESPONSE_POSTS";

const initialState = { loading: false, posts: [] };

export const actionCreators = {
  requestPosts: () => async (dispatch, getState) => {
    dispatch({ type: requestPostsType });
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    dispatch({ type: responsePostsType, payload: posts });
  },
};

export const reducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case requestPostsType:
      return { ...state, loading: true };
    case responsePostsType:
      return { ...state, loading: false, posts: action.payload };
    default:
      return state;
  }
};
