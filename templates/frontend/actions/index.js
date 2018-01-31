module.exports = `import axios from "axios";
import { FETCH_USER, UPDATE_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const updateUser = (updatedUser, id) => async dispatch => {
  const res = await axios.put(\`/api/current_user/\${id}\`, updatedUser);

  dispatch({ type: UPDATE_USER, payload: res.data });
};`
