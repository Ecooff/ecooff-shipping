import axios from "axios";
import URLPath from "../services/UrlPath";

const AuthService = {

  login: async (user) => {
    const data = await axios.post(URLPath.login, user);
    return data;
  },

  retrieveUser: async (token) => {
    const data = await axios.get(URLPath.retrieveUser, {
      headers: setHeader(token),
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
