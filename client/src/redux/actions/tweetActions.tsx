import axios from "axios";
import { DispatchProp } from "react-redux";
export const GET_TWEETS = "GET_TWEETS";

export const get_tweets = () => {
  return async (dispatch: DispatchProp) => {
    try {
      const tweets = await axios.get("http://localhost:3001/post");
      dispatch({
        type: GET_TWEETS,
        payload: tweets.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
