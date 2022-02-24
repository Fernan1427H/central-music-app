import actionsTypes from "./actionsTypes";

export const loginUser = () => {
  return async (dispatch) => {
    dispatch({types: actionsTypes.USER_LOGIN-REQUEST})
    const config = {
      method: 'POST'
    };
    const userData = JSON.stringify(email, password);
    try {
      const res = fetch (
        '',
        config,
        userData
      );
      const data = res.JSON();
      
    }
  }
}