import axios from "axios";
import { URLPath } from "../services";

const AuthService = {

  login: async (user) => {
    const data = await axios.post(URLPath.login, user, {
      headers: setHeader(user.token),
    });
    return data;
  },

  retrieveUser: async (user) => {
    const data = await axios.get(URLPath.retrieveUser, {
      headers: setHeader(user.token),
    });
    return data;
  }

}

export default AuthService;

function setHeader(token) {
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  return headers;
}
