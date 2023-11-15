import { userActions } from "../reducers/userReducers";

export const logout = (type) => (dispatch) => {
  dispatch(userActions.resetuserInfo());
  localStorage.removeItem("account");
};
