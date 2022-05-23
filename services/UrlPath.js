export const LOCALHOST = "http://localhost:3000/api/";
export const PROD = "https://ecooff.herokuapp.com/api/";

export const URL = PROD;

//Users
export const serverAlive = URL + "users/serverAlive";
export const login = URL + "users/authenticate";
export const retrieveUser = URL + "users/retrieveUser";

const URLPath = {
  serverAlive,
  login,
  retrieveUser
};

export default URLPath;
