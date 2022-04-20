import { GET_VERIFY } from "../actions/types";

const initialState = {
  tokenAddress: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_VERIFY:
        const tokenAddress = action.payload;
        console.log("tokenAddress:" + tokenAddress);
        return {
          ...state,
          tokenAddress
        }
    default:
      return state;
  }
}
